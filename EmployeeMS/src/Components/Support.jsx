import React from 'react'
import SupportHead from './SupportHead'
import SupportFooter from './SupportFooter'
import { Outlet } from 'react-router-dom'
import Chat from './Chat'

const Support = () => {
  return (
    <>
        <div className=''>
        <SupportHead />
        <Outlet />
        <Chat />
        <SupportFooter />
        </div>
    </>
  )
}

export default Support