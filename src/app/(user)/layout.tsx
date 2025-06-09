import Layout from '@/components/Baselayout/Layout/Layout'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Layout fotter={true}>
        {children}
      </Layout>
    </>
  )
}

export default layout