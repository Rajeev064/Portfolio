import bg from './assets/background.jpg';
import React, { useState } from 'react'
// import Typewriter from './Typewriter';

function Background() {
return (
<div>
<img src={bg} className='h-screen w-screen'/>
<h1 className="absolute text-7xl font-bold text-center text-white top-1/2 md:left-[60%] sm:left-2/3 -translate-x-1/2 -translate-y-1/2">Rajeev Singh</h1>
{/* <Typewriter textArray={['  Machine Learning','  Software Development','  Cloud & DevOps']} speed={50}/> */}
</div>
)};

export default Background;