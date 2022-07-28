import { useState, useRef } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useRouter } from 'next/router'
import useOrganizations from 'hooks/organization/useOrganization'
import Head from 'next/head'
import { updateCount, updateOrganizations } from 'state/organization/slice'
import {
  fetchOrganizationCount,
  fetchOrganizations,
} from 'hooks/organization/functions'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { wrapper } from 'state/store'
import getContract from 'utils/getContract'
import TaskContractInterface from 'contracts/Task.json'

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(
    (store) => async (context: GetServerSidePropsContext) => {
      const orgCount = await fetchOrganizationCount()
      const orgs = await fetchOrganizations(0, orgCount)

      const serializedOrgs = orgs.map((o) => ({
        ...o,
        rewardMultiplier: o.rewardMultiplier.toNumber(),
      }))

      store.dispatch(updateCount(orgCount))
      store.dispatch(
        updateOrganizations({
          data: serializedOrgs as any,
          page: { from: 0, to: orgCount },
        })
      )

      return {
        props: {},
      }
    }
  )

const initialTaskData = {
  orgId: null,
  title: '',
  description: '',
  taskTags: [],
  complexityScore: 0,
  reputationLevel: 0,
}

type TaskTypes = typeof initialTaskData & { [key: string]: any }

const CreateTaskPage = () => {
  const [taskData, setTaskData] = useState<TaskTypes>(initialTaskData)
  const [processing, setProcessing] = useState(false)
  const tagRef = useRef<any>('')
  const { account, library } = useWeb3React()
  const { organizations } = useOrganizations()
  const [status, setStatus] = useState({ text: '', error: false })
  const router = useRouter()

  const handleChange = (ev: any) => {
    const targetName = ev.target.name
    let targetValue: string | number = ev.target.value

    if (ev.target.type === 'number' || targetName === 'orgId') {
      if (targetValue) {
        targetValue = Number(targetValue)
      }
    }

    if (ev.target.name === 'taskTags') {
      if (ev.key === 'Enter') {
        setTaskData((prev: any) => ({
          ...prev,
          [targetName]: [...prev.taskTags, targetValue],
        }))
        tagRef.current.value = ''
      }
      return
    }
    setTaskData((prev) => ({ ...prev, [targetName]: targetValue }))
  }

  const deleteTag = (ev: any) => {
    const index = parseInt(ev.target.id)

    let tagUpdate = [...taskData.taskTags]
    tagUpdate.splice(index, 1)
    console.log(tagUpdate)
    setTaskData((prev) => ({ ...prev, taskTags: [...tagUpdate] }))
  }

  const createTask = async (ev: any) => {
    ev.preventDefault()
    if (!account) {
      setStatus({ text: 'Wallet Not Connected', error: true })
      return
    }
    try {
      setProcessing(true)
      const tx = await getContract(
        TaskContractInterface.address,
        TaskContractInterface.abi,
        library
      )
        .connect(library.getSigner())
        .createTask(
          taskData.orgId,
          taskData.title,
          taskData.description,
          taskData.taskTags,
          taskData.complexityScore,
          taskData.reputationLevel
        )
      const receipt = await tx.wait()
      const event = receipt.events.find((e: any) => e.event === 'Creation')
      router.push(`/task/${event?.args?.[0]}`)
    } catch (error) {
      setProcessing(false)
      setStatus({ text: 'Error! Not created', error: true })
      console.error(error)
    }
  }
  return (
    <div>
      <Head>
        <title>Buildstream: Create Task</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='text-gray-600 body-font relative'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-col text-center w-full mb-12'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
              Create Task
            </h1>
            <p
              className={`lg:w-2/3 mx-auto leading-relaxed text-base ${
                status.error ? 'text-red-500' : 'text-green-500'
              }`}
            >
              {status.text}
            </p>
          </div>
          <div className='lg:w-1/2 md:w-2/3 mx-auto'>
            <div className='flex flex-wrap -m-2'>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label
                    htmlFor='orgId'
                    className='leading-7 text-sm text-gray-600'
                  >
                    Organization
                  </label>
                  <select
                    id='orgId'
                    name='orgId'
                    onChange={handleChange}
                    className='w-full py-2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  >
                    <option>Select Organization</option>
                    {organizations.length > 0 &&
                      organizations.map((organization) => {
                        return (
                          <option value={organization.id} key={organization.id}>
                            {organization.name}
                          </option>
                        )
                      })}
                  </select>
                </div>
              </div>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label
                    htmlFor='title'
                    className='leading-7 text-sm text-gray-600'
                  >
                    Task Title
                  </label>
                  <input
                    type='text'
                    id='title'
                    name='title'
                    value={taskData.title}
                    onChange={handleChange}
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label
                    htmlFor='complexityScore'
                    className='leading-7 text-sm text-gray-600'
                  >
                    Complexity Score
                  </label>
                  <input
                    type='number'
                    id='complexityScore'
                    value={taskData.complexityScore}
                    onChange={handleChange}
                    name='complexityScore'
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label
                    htmlFor='reputationLevel'
                    className='leading-7 text-sm text-gray-600'
                  >
                    Reputational Level
                  </label>
                  <input
                    type='number'
                    id='reputationLevel'
                    name='reputationLevel'
                    value={taskData.reputationLevel}
                    onChange={handleChange}
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>
              <div className='p-2 w-full'>
                <div className='relative'>
                  <label
                    htmlFor='reputationLevel'
                    className='leading-7 text-sm text-gray-600'
                  >
                    Task Tags
                  </label>
                  <input
                    type='text'
                    id='taskTags'
                    name='taskTags'
                    ref={tagRef}
                    onKeyPress={handleChange}
                    placeholder='Type and Press Enter Key'
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
                <div className='mt-3 h-auto flex flex-wrap item-center gap-x-2 gap-y-2'>
                  {taskData.taskTags.length > 0 &&
                    taskData.taskTags.map((task, index) => {
                      return (
                        <div
                          key={task}
                          className='flex items-center border-2 rounded-full px-2 py-1 w-max'
                        >
                          {task}
                          <div
                            onClick={deleteTag}
                            id={`${index}`}
                            className='py-1 px-3 ml-3 rounded-full bg-indigo-400 text-red-50 hover:bg-indigo-500 cursor-pointer'
                          >
                            x
                          </div>
                        </div>
                      )
                    })}
                </div>
              </div>
              <div className='p-2 w-full'>
                <div className='relative'>
                  <label
                    htmlFor='description'
                    className='leading-7 text-sm text-gray-600'
                  >
                    Description
                  </label>
                  <textarea
                    id='description'
                    name='description'
                    value={taskData.description}
                    onChange={handleChange}
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                  ></textarea>
                </div>
              </div>
              <div className='p-2 w-full'>
                <button
                  type='button'
                  onClick={createTask}
                  className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
                >
                  {processing ? 'Processing...' : 'Create'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CreateTaskPage
