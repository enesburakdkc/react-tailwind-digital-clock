import React, { useState, useEffect } from 'react'

function DigitalClock() {
  const [clock, setClock] = useState(new Date());

  const hours = clock.getHours().toString().padStart(2, '0');
  const minutes = clock.getMinutes().toString().padStart(2, '0');
  const seconds = clock.getSeconds().toString().padStart(2, '0');;
  const milliseconds = clock.getMilliseconds().toString().slice(0, 2).padStart(2, '0');;

  function handleSetClock() {
    setClock(new Date())
  }

  useEffect(() => {
    const interval = setInterval(handleSetClock, 10)
  }, [])

  return (
    <main className='clock flex items-end bg-white/[.25] p-4 border rounded-xl'>
      <h1 className='text-7xl'>{hours}:{minutes}:{seconds}</h1>
      <h2 className='text-5xl'>.{milliseconds}</h2>
    </main>
  )
}

export default DigitalClock