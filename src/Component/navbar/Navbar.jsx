import React from 'react'
import './navbar.css'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import { logo2 } from '../Constant'
import SearchBar from '../searchbar/SearchBar'

const Navbar = () => {
  return (
    <div>
      <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#fff', top: 0, justifyContent: "space-between" }}>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo2} alt="logo" height={80} />
        </Link>
        <SearchBar/>
      </Stack>
    </div>
  )
}

export default Navbar