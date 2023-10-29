import { Stack } from '@mui/material'
import React from 'react'
import Sidebar from './Sidebar'

const Layout = (props) => {
  return (
    <Stack direction={"row"} className='width'>
        <Sidebar />
        {props.children}
    </Stack>
  )
}

export default Layout