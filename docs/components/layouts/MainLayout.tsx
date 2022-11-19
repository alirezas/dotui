import Sidebar from 'components/Sidebar'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <div className="my-9 container px-4 mx-auto">
        <div className="flex">
          <Sidebar />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  )
}

export default MainLayout
