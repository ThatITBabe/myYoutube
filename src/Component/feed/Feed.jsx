import React, { useEffect, useState } from 'react'
import './feed.css'
import { Box, Stack, Typography } from '@mui/material'
import Sidebar from '../sidebar/Sidebar'
import Videos from '../videos/Videos'
import { fetchFromAPI } from '../fetchFromAPI'

const Feed = () => {

  const[selectedCategory, setSelectedCategory]= useState('New');
  const[videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`auto-complete?part=snippet&q=${selectedCategory}`)
    .then (data => setVideos(data))
    .catch(err => console.log(err))
  }, [selectedCategory]);


  return (
    <div>
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
          <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
          <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}> 
            Copyright &copy; 2023 ThatITBabe &reg;
          </Typography>
        </Box>
        <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
          <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'#0f0f0f'}}>
            {selectedCategory} <span style={{color: '#f31503'}}>Videos</span>
          </Typography>

          <Videos videos={videos}/>
        </Box>
      </Stack>
    </div>
  )
}

export default Feed