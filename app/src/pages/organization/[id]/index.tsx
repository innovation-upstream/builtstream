import ActivityView from 'components/Organization/Dashboard/ActivityView'
import PendingActions from 'components/Organization/Dashboard/PendingActions'
import TaskStatistics from 'components/Organization/Dashboard/TaskStatistics'
import TaskView from 'components/Organization/Dashboard/TaskView'
import Treasury from 'components/Organization/Dashboard/Treasury'
import { getCookie } from 'cookies-next'
import {
  Action,
  GetActionsDocument,
  GetOrganizationDocument,
  GetTasksDocument,
  GetTaskSnapshotsDocument,
  Organization,
  Task,
  TaskSnapshot
} from 'graphclient'
import client from 'graphclient/client'
import { useGetOrganizationQuery, usePolling } from 'hooks'
import { fetchClickupTask } from 'integrations/clickup/api'
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage
} from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { wrapper } from 'state/store'
import Bell from 'SVGs/Bell'
import { Converter } from 'utils/converter'

const ACCOUNT = 'account'
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(
    (store) => async (context: GetServerSidePropsContext) => {
      const account = getCookie(ACCOUNT, context)
      const orgId =
        typeof context.params?.id === 'string'
          ? context.params?.id
          : context.params?.id?.[0] || '0'
      const locale = context.locale ?? ''
      const { data: organizationResponse } = await client.query({
        query: GetOrganizationDocument,
        variables: {
          id: orgId
        }
      })

      if (!organizationResponse?.organization) {
        return {
          notFound: true
        }
      }

      let actions: Action[] = []
      if (
        account &&
        organizationResponse?.organization?.signers?.includes(account as string)
      ) {
        const { data } = await client.query({
          query: GetActionsDocument,
          variables: {
            orderDirection: 'desc',
            orderBy: 'actionId',
            where: {
              orgId: organizationResponse.organization.id?.toString() as any,
              executed: false
            }
          }
        })
        actions = (data?.actions as any) || []
      }

      const { data: tasks } = await client.query({
        query: GetTasksDocument,
        variables: {
          orderBy: 'taskId',
          orderDirection: 'desc',
          where: {
            orgId: orgId,
            status_lte: 1,
            assignmentRequest: null
          }
        }
      })

      const { data: snapshots } = await client.query({
        query: GetTaskSnapshotsDocument,
        variables: {
          first: 5,
          orderBy: 'timestamp',
          orderDirection: 'desc',
          where: {
            orgId: orgId
          }
        }
      })

      const tasksWithClickupData = await Promise.all(
        tasks.tasks.map(async (t) => {
          if (!t.externalId) {
            return t
          }
          const clickupTask = await fetchClickupTask(
            t.externalId as string,
            orgId
          )
          return {
            ...t,
            title: clickupTask?.name || t.title,
            description: clickupTask?.description || t.description
          }
        })
      )

      return {
        props: {
          org: organizationResponse?.organization,
          taskList: tasksWithClickupData,
          snapshots: snapshots.taskSnapshots,
          actions,
          ...(await serverSideTranslations(locale, [
            'common',
            'organization',
            'header',
            'tasks'
          ]))
        }
      }
    }
  )

interface PageProps {
  org: Organization
  taskList: Task[]
  snapshots: TaskSnapshot[]
  actions: Action[]
}

const OrganizationPage: NextPage<PageProps> = ({
  org,
  taskList,
  snapshots,
  actions
}) => {
  const [organization, setOrganization] = useState(
    Converter.OrganizationFromQuery(org)
  )
  const { data, startPolling, stopPolling } = useGetOrganizationQuery({
    variables: {
      id: org.id
    }
  })
  usePolling(startPolling, stopPolling)

  useEffect(() => {
    if (data?.organization) {
      setOrganization(Converter.OrganizationFromQuery(data.organization))
    }
  }, [data])

  return (
    <div className='layout-container pb-20'>
      <Head>
        <title>Buildstream: Organizations</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex items-center mt-10 md:mt-24 mb-10'>
        <p className='text-5xl font-bold mx-5'>{organization.name}</p>
        <Link href={`/organization/${organization.id}/notifications`}>
          <button className='bg-neutral-200 p-2 rounded-full'>
            <Bell className='fill-blue-500' />
          </button>
        </Link>
      </div>
      <div className='grid-layout pb-10 md:pb-24'>
        <div className='col-span-4 md:col-span-3 lg:col-span-4 2xl:col-span-3 order-2 2xl:order-1'>
          <div className='rounded-2xl'>
            <Treasury organization={organization} />
            <div className='mt-4 hidden lg:block 2xl:hidden'>
              <PendingActions
                actions={actions.map((a) => Converter.ActionFromQuery(a))}
                organization={organization}
              />
            </div>
            <div className='mt-4 hidden lg:block 2xl:hidden'>
              <ActivityView
                organization={organization}
                taskSnapshots={snapshots?.map((t) =>
                  Converter.TaskSnapshotFromQuery(t as any)
                )}
              />
            </div>
            <div className='mt-4'>
              <TaskStatistics stat={organization.stat} />
            </div>
          </div>
        </div>
        <div className='col-span-4 md:col-span-5 lg:col-span-8 2xl:col-span-6 order-1 2xl:order-2'>
          <TaskView
            tasks={taskList.map((t) => Converter.TaskFromQuery(t))}
            organization={organization}
          />
        </div>
        <div className='hidden 2xl:block col-span-4 md:col-span-3 lg:col-span-4 2xl:col-span-3 order-3'>
          <div className='rounded-2xl mb-4'>
            <PendingActions
              actions={actions.map((a) => Converter.ActionFromQuery(a))}
              organization={organization}
            />
          </div>
          <div className='rounded-2xl'>
            <ActivityView
              organization={organization}
              taskSnapshots={snapshots?.map((t) =>
                Converter.TaskSnapshotFromQuery(t as any)
              )}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrganizationPage
