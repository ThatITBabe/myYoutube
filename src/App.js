import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './Component/navbar/Navbar'
import Feed from './Component/feed/Feed'
import VideoDetail from './Component/videoDetail/VideoDetail'
import ChannelDetail from './Component/channelDetail/ChannelDetail'
import SearchFeed from './Component/searchFeed/SearchFeed'

const App = () => {
  return (
    <BrowserRouter>
      <Box backgroundColor={'white'}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Feed/>} />
          <Route path='/video/:id' element={<VideoDetail/>} />
          <Route path='/channel/:id' element={<ChannelDetail/>} />
          <Route path='/search/:id' element={<SearchFeed/>} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App