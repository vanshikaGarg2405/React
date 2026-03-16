import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const[users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch(" https://jsonplaceholder.typicode.com/users ")
    .then(response=>response.json())
    .then(() => setUsers(users))
    .catch(error=>console.log(error));
  }, [])
  return (
    <>

    </>
  )
}

export default App
