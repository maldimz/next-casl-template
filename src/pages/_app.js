import { AuthProvider } from '@/context/AuthContext'
import '@/styles/globals.css'
import AclGuard from '@/views/components/AclGuard'
import Router from 'next/router'

// third party
import "nprogress/nprogress.css"
import nProgress from 'nprogress'
import { defaultACLObj } from '@/configs/acl'
import UserLayout from '@/layouts/UserLayout'

Router.events.on("routeChangeStart", () => {
  nProgress.start();
});
Router.events.on('routeChangeError', () => {
  nProgress.done()
})
Router.events.on('routeChangeComplete', () => {
  nProgress.done()
})

export default function App({ Component, pageProps }) {
  const aclAbilities = Component.acl ?? defaultACLObj
  const getLayout = Component.getLayout ?? ((page) => <UserLayout>{page}</UserLayout>)
  return (
    <AuthProvider>
      <AclGuard aclAbilities={aclAbilities}>
        <Component {...pageProps} />
      </AclGuard>
    </AuthProvider>
  )
}
