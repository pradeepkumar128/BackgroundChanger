import React, { useState } from 'react';
import './App.css';


const App = () => {
 const [color, setColor] = useState('olive');

  return (
   <>
   <div className='w-full h-screen'
   style={{backgroundColor:color}}
   >
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl py-3 px-2'>
      <button 
      onClick={()=> setColor('red')}
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-500'>Red</button>
      <button 
      onClick={()=> setColor('blue')}
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-500'>Blue</button>
      <button 
      onClick={()=> setColor('green')}
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-500'>Green</button>
      <button 
      onClick={()=> setColor('orange')}
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-orange-500'>Orange</button>
       <button 
      onClick={()=> setColor('gray')}
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-gray-500'>Gray</button>
       <button 
      onClick={()=> setColor('pink')}
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-pink-500'>Pink</button>
       <button 
      onClick={()=> setColor('yellow')}
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-500'>Yellow</button>
      <button 
      onClick={()=> setColor('purple')}
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-500'>Purple</button>
      </div>
    </div>
   </div>
   </>
  )
}

export default App