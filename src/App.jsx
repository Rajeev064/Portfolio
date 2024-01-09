import React, { useState } from 'react'
import Navbar from './Navbar';
import './styles.css'
import Timeline from './TimelineCard';
import Background from './Background';

function App() {
  return (
    <div className='flex boundary'>
      <Navbar />
      <div>
        <Background />
        <Timeline />
      </div>
    </div>
  )
}

export default App