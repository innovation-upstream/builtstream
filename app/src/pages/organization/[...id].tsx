import ActionForm from 'components/ActionForm/ActionForm'
import ActionList from 'components/ActionList/ActionList'
import Deposit from 'components/Deposit/Deposit'
import { ethers } from 'ethers'
import { fetchActionCount, fetchActions, fetchConfirmers } from 'hooks/action/functions'
import { fetchOrganization } from 'hooks/organization/functions'
import { Organization } from 'hooks/organization/types'
import { fetchTaskCountByOrg, fetchTasksByOrg } from 'hooks/task/functions'
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage
} from 'next'
import Head from 'next/head'
import {
  updateActions, updateConfirmers, updateCount as updateActionCount
} from 'state/action/slice'
import { wrapper } from 'state/store'
import { updateCount as updateTaskCount, updateTasks } from 'state/task/slice'

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(
    (store) => async (context: GetServerSidePropsContext) => {
      const orgId = parseInt(context.params?.id?.[0] || '0')
      const org = await fetchOrganization(orgId)

      const taskCount = await fetchTaskCountByOrg(orgId, true, true)
      const tasks = await fetchTasksByOrg(orgId, 0, taskCount)

      const actionCount = await fetchActionCount(orgId)
      const actions = await fetchActions(orgId, 0, actionCount)

      const confirmers = await Promise.all(
        actions.map(async (action) => {
          const c = await fetchConfirmers(action.id)
          return {
            actionId: action.id,
            confirmers: c
          }
        })
      )

      store.dispatch(updateTaskCount(tasks.length))
      store.dispatch(
        updateTasks({
          data: tasks,
          page: { from: 0, to: Math.ceil(tasks.length / 10) }
        })
      )
      store.dispatch(updateActionCount(actions.length))
      store.dispatch(
        updateActions({
          data: actions.map(action => ({
            ...action,
            value: action.value.toString() as any
          })),
          page: { from: 1, to: Math.ceil(actions.length / 10) }
        })
      )
      store.dispatch(updateConfirmers(confirmers))

      return {
        props: {
          org: {
            ...org,
            rewardMultiplier: org.rewardMultiplier.toString()
          }
        }
      }
    }
  )

interface PageProps {
  org: Organization
}

const OrganizationPage: NextPage<PageProps> = ({ org }) => {
  return (
    <div className='container mx-auto pb-20'>
      <Head>
        <title>Buildstream: Organizations</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='justify-between flex flex-wrap p-5 flex-col md:flex-row'>
        <div className='w-full h-full py-10 bg-white md:basis-4/12'>
          <h1 className='sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900'>
            {org?.name}
          </h1>
          <p className='lg:w-2/3 leading-relaxed text-base text-gray-500'>
            {org?.description}
          </p>
          <p className='text-lg mt-10 break-all'>
            Approvers:{' '}
            <span className='text-sm text-gray-500'>
              {org?.approvers.toString()}
            </span>
          </p>
          <p className='text-lg mt-3 break-all'>
            Reviewers:{' '}
            <span className='text-sm text-gray-500'>
              {org?.reviewers.toString()}
            </span>
          </p>
          <p className='text-lg mt-3 break-all'>
            Signers:{' '}
            <span className='text-sm text-gray-500'>
              {org?.signers.toString()}
            </span>
          </p>
          <p className='text-lg mt-3 break-all'>
            Required task approvals:{' '}
            <span className='text-sm text-gray-500'>
              {org?.requiredTaskApprovals}
            </span>
          </p>
          <p className='text-lg mt-3 break-all'>
            Required confirmations:{' '}
            <span className='text-sm text-gray-500'>
              {org?.requiredConfirmations}
            </span>
          </p>
          <p className='text-lg mt-3 break-all'>
            Reward multiplier:{' '}
            <span className='text-sm text-gray-500'>
              {org?.rewardMultiplier.toString()}
            </span>
          </p>
          <p className='text-lg mt-3 break-all'>
            Reward token:{' '}
            <span className='text-sm text-gray-500'>
              {org?.rewardToken === ethers.constants.AddressZero
                ? null
                : org?.rewardToken}
            </span>
          </p>
        </div>
        <div className='w-full h-full mt-10 md:basis-6/12 bg-gray-100 rounded-lg p-8'>
          <Deposit org={org} />
        </div>
      </div>
      <div className='justify-between flex flex-wrap p-5 flex-col md:flex-row'>
        <div className='w-full h-full mt-10 md:basis-5/12'>
          <ActionList />
        </div>
        <div className='w-full h-full mt-10 md:basis-6/12 bg-gray-100 rounded-lg p-8'>
          <ActionForm org={org} />
        </div>
      </div>
    </div>
  )
}

export default OrganizationPage
