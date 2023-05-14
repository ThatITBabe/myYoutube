import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../Constant';



const Sidebar = ({selectedCategory, setSelectedCategory}) => (
    <Stack direction='row' sx={{overflowY: 'auto', height: {sx:'auto', md: '95%'}, flexDirection: {md: 'column'} }}>
        {categories.map((category) =>(
            <button className='category-btn' onClick={() => setSelectedCategory(category.name)} style={{background: category.name === selectedCategory && '#0f0f0f',}} key={category.name}>
                <span style={{color: category.name === selectedCategory ? '#fff' : '#0f0f0f', fontSize: '20px', marginRight: '15px'}}>{category.icon}</span>

                <span style={{color: category.name === selectedCategory ? '#fff' : '#0f0f0f', }}>{category.name}</span>
            </button>
        ))}
    </Stack>
)
  

export default Sidebar