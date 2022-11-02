import { ethers } from 'ethers'
import client from 'graphclient/client'
import { useGetTasksQuery, usePolling } from 'hooks'
import { ComplexityScoreMap, TaskStatusMap } from 'hooks/task/types'
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage
} from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { wrapper } from 'state/store'
import { Converter } from 'utils/converter'
import { GetTasksDocument, Task } from '../../../.graphclient'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(
    (store) => async (context: GetServerSidePropsContext) => {
      const { data } = await client.query({
        query: GetTasksDocument
      })
      const locale = context.locale ?? ''

      return {
        props: {
          taskList: data.tasks,
          ...(await serverSideTranslations(locale, [
            'common',
            'tasks',
            'header'
          ]))
        }
      }
    }
  )

const TasksPage: NextPage<{ taskList: Task[] }> = ({ taskList }) => {
  const [tasks, setTasks] = useState(
    taskList.map((t) => Converter.TaskFromQuery(t))
  )
  const [selectedTask, setSelectedTask] = useState(0)
  const { data, startPolling, stopPolling } = useGetTasksQuery()
  usePolling(startPolling, stopPolling)
  const selected = tasks.find((o) => o.id === selectedTask)

  useEffect(() => {
    if (data?.tasks) {
      setTasks(data.tasks.map((t) => Converter.TaskFromQuery(t)))
    }
  }, [data])

  const onSelect = (id: number) => {
    setSelectedTask(id)
  }

  const client_id = process.env.NEXT_PUBLIC_CLICKUP_CLIENT_ID
  const redirect_uri = process.env.NEXT_PUBLIC_CLICKUP_REDIRECT_URL

  return (
    <div>
      <Head>
        <title>Buildstream: Tasks</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container w-full mx-auto p-5'>
        <Link href='/task/create'>
          <a className='mr-5 hover:text-gray-900'>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
              Create
            </button>
          </a>
        </Link>
        <Link
          href={`https://app.clickup.com/api?client_id=${client_id}&redirect_uri=${redirect_uri}`}
        >
          <a className='mr-5 hover:text-gray-900'>
            <button className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded'>
              Import
            </button>
          </a>
        </Link>
      </div>
      <div className='container justify-between mx-auto flex flex-wrap p-5 flex-col md:flex-row'>
        <ul className='w-full md:basis-6/12 divide-y divide-gray-100'>
          {tasks.map((task, index) => (
            <li
              key={`${task.id}-${index}`}
              className='p-3 hover:bg-blue-600 hover:text-blue-200'
              onClick={() => onSelect(task.id)}
            >
              <h3 className='font-bold text-xl'>{task.title}</h3>
              <p className='mt-3'>{task.description}</p>
            </li>
          ))}
        </ul>
        <div className='w-full h-full top-20 sticky px-5 py-10 bg-white md:basis-4/12 rounded-sm shadow'>
          <h1 className='sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900'>
            {selected?.title}
          </h1>
          <p className='lg:w-2/3 leading-relaxed text-base text-gray-500'>
            {selected?.description}
          </p>
          <p className='text-lg mt-10 break-all'>
            Organization:{' '}
            <span className='text-sm text-gray-500'>{selected?.orgId}</span>
          </p>
          <p className='text-lg mt-3 break-all'>
            Status:{' '}
            <span className='text-sm text-gray-500'>
              {Object.entries(TaskStatusMap)[selected?.status || 0]?.[1]}
            </span>
          </p>
          <p className='text-lg mt-3 break-all'>
            Assignee Address:{' '}
            <span className='text-sm text-gray-500'>
              {selected?.assigneeAddress.toString()}
            </span>
          </p>
          <p className='text-lg mt-3 break-all'>
            Task Tags:{' '}
            <span className='text-sm text-gray-500'>
              {selected?.taskTags.map((tag, index) => {
                const seperator: string =
                  index + 1 !== selected.taskTags.length ? ', ' : ''
                return `${tag}${seperator}`
              })}
            </span>
          </p>
          <p className='text-lg mt-3 break-all'>
            Complexity Score:{' '}
            <span className='text-sm text-gray-500'>
              {
                Object.entries(ComplexityScoreMap)[
                  selected?.complexityScore || 0
                ]?.[1]
              }
            </span>
          </p>
          <p className='text-lg mt-3 break-all'>
            Reputation Level:{' '}
            <span className='text-sm text-gray-500'>
              {selected?.reputationLevel}
            </span>
          </p>
          <p className='text-lg mt-3 break-all'>
            Required approvals:{' '}
            <span className='text-sm text-gray-500'>
              {selected?.requiredApprovals}
            </span>
          </p>
          <p className='text-lg mt-3 break-all'>
            Reward amount:{' '}
            <span className='text-sm text-gray-500'>
              {selected?.rewardAmount
                ? ethers.utils
                    .formatEther(selected?.rewardAmount.toString())
                    .toString()
                : ''}
            </span>
          </p>
          <p className='text-lg mt-3 break-all'>
            Reward token:{' '}
            <span className='text-sm text-gray-500'>
              {selected?.rewardToken === ethers.constants.AddressZero
                ? null
                : selected?.rewardToken}
            </span>
          </p>
          <Link href={`/task/${selected?.id}`}>
            <a className='block mt-10 text-blue-700'>{`view ${selected?.title}`}</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TasksPage
