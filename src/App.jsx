import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { users } from './services/users_service'

function App() {
  const [count, setCount] = useState(0)
  const [user, setUsers] = useState([])

  const getUsers = async() => {
    const response = await users()
    console.log("response")
    console.log(response)
    if (response.status == 200) {
      setUsers(response.data.message.list)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
      <h2>Data dari API</h2>
      <div>
        {user.map((item) => (
          <div>
            <strong>{item.name}</strong><br />
            {item.age} {item.address}
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default App
