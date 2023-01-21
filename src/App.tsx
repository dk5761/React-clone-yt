import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import NavBar from './components/navbar/NavBar'
import { Feed, VideoDetail, SearchFeed, ChannelDetail } from './pages/pages'

function App() {

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <NavBar />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>

      </Box>
    </BrowserRouter>
  )
}

export default App
