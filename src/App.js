import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import useResume from './hooks/useResume'

const App = () => {
  const {resume} = useSelector(state => state.resume); 
  const {fetchResume} = useResume();


  useEffect(()=>{
    fetchResume();
  },[])

  return (
    <div>App</div>
  )
}

export default App