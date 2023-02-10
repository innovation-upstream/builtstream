import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage
} from 'next'
import Head from 'next/head'
import { wrapper } from 'state/store'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import OrganizationNotifications from 'components/Notifications/OrganizationNotifications'
import client from 'graphclient/client'
import { GetOrganizationDocument, Organization } from '../../../../.graphclient'
import { Converter } from 'utils/converter'
import { useTranslation } from 'next-i18next'

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(
    (store) => async (context: GetServerSidePropsContext) => {
      const locale = context.locale ?? ''
      const orgId =
        typeof context.params?.id === 'string'
          ? context.params?.id
          : context.params?.id?.[0] || '0'
      const { data } = await client.query({
        query: GetOrganizationDocument,
        variables: {
          id: orgId
        }
      })

      return {
        props: {
          organization: data?.organization,
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
  organization: Organization
}

const NotificationPage: NextPage<PageProps> = ({ organization }) => {
  const { t } = useTranslation('common')

  return (
    <div className='layout-container pb-20'>
      <Head>
        <title>Buildstream: Organizations</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='grid-layout py-24'>
        <div className='col-span-4 md:col-span-8 lg:col-start-3 lg:col-span-8 2xl:col-start-4 2xl:col-span-6'>
          <h1 className='font-bold text-[40px] mb-6'>{t('notification')}</h1>
          <OrganizationNotifications
            organization={Converter.OrganizationFromQuery(organization)}
          />
        </div>
      </div>
    </div>
  )
}

export default NotificationPage
