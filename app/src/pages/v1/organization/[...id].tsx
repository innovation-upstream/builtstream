import ActionForm from 'components/ActionForm/ActionForm'
import ActionList from 'components/ActionList/ActionList'
import Deposit from 'components/Deposit/Deposit'
import LegacyDeposit from 'components/Deposit/LegacyDeposit'
import OrgConfigForm from 'components/Organization/OrgConfigForm'
import { BigNumber, ethers } from 'ethers'
import { GetOrganizationDocument, Organization } from 'graphclient'
import client from 'graphclient/client'
import { useGetOrganizationQuery, usePolling } from 'hooks'
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage
} from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { wrapper } from 'state/store'
import { Converter } from 'utils/converter'

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(
    (store) => async (context: GetServerSidePropsContext) => {
      const orgId = context.params?.id?.[0] || '0'
      const { data } = await client.query({
        query: GetOrganizationDocument,
        variables: {
          id: orgId
        }
      })
      return {
        props: {
          org: data?.organization
        }
      }
    }
  )

interface PageProps {
  org: Organization
}

const OrganizationPage: NextPage<PageProps> = ({ org }) => {
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
    <div className='container mx-auto pb-20'>
      <Head>
        <title>Buildstream: Organizations</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {organization?.isInitialized ? (
        <div>
          <div className='justify-between flex flex-wrap p-5 flex-col md:flex-row'>
            <div className='w-full h-full py-10 bg-white md:basis-4/12'>
              <h1 className='sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900'>
                {organization?.name}
              </h1>
              <p className='lg:w-2/3 leading-relaxed text-base text-gray-500'>
                {organization?.description}
              </p>
              <p className='text-lg mt-10 break-all'>
                Approvers:{' '}
                <span className='text-sm text-gray-500'>
                  {organization?.approvers.toString()}
                </span>
              </p>
              <p className='text-lg mt-3 break-all'>
                Signers:{' '}
                <span className='text-sm text-gray-500'>
                  {organization?.signers.toString()}
                </span>
              </p>
              <p className='text-lg mt-3 break-all'>
                Required task approvals:{' '}
                <span className='text-sm text-gray-500'>
                  {organization?.requiredTaskApprovals
                    ? organization?.requiredTaskApprovals.toString()
                    : '0'}
                </span>
              </p>
              <p className='text-lg mt-3 break-all'>
                Required confirmations:{' '}
                <span className='text-sm text-gray-500'>
                  {organization?.requiredConfirmations
                    ? organization?.requiredConfirmations.toString()
                    : '0'}
                </span>
              </p>
              <p className='text-lg mt-3 break-all'>
                Balance:{' '}
                {organization?.treasury?.tokens?.map((b, index) => (
                  <span key={index} className='text-sm text-gray-500'>
                    {ethers.utils.formatUnits(
                      BigNumber.from(b.balance)?.toString(),
                      18
                    )}
                  </span>
                ))}
              </p>
              <p className='text-lg mt-3 break-all'>
                Reward multiplier:{' '}
                <span className='text-sm text-gray-500'>
                  {org?.rewardMultiplier
                    ? ethers.utils
                        .formatEther(
                          BigNumber.from(org?.rewardMultiplier).toString()
                        )
                        .toString()
                    : ''}
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
              <LegacyDeposit org={organization} />
            </div>
          </div>
          <div className='justify-between flex flex-wrap p-5 flex-col md:flex-row'>
            <div className='w-full h-full mt-10 md:basis-5/12'>
              <ActionList orgId={organization.id} />
            </div>
            <div className='w-full h-full mt-10 md:basis-6/12 bg-gray-100 rounded-lg p-8'>
              <ActionForm org={organization} />
            </div>
          </div>
        </div>
      ) : (
        <div className='justify-between flex flex-wrap p-5 flex-col md:flex-row'>
          <div className='w-full h-full py-10 bg-white'>
            <h1 className='sm:text-3xl text-center text-2xl font-medium title-font mb-6 text-gray-900'>
              Complete Organization Data
            </h1>
            <OrgConfigForm orgId={organization?.id} />
          </div>
        </div>
      )}
    </div>
  )
}

export default OrganizationPage