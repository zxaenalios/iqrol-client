import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Akun } from './services/akun_service'

function App() {
  const [count, setCount] = useState(0)
  const [akun, setAkun] = useState([])

  const getUsers = async() => {
    const response = await Akun()
    if (response.status == 200) {
      setAkun(response.data.message.list)
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
      <h1>Pengembangan IQROL</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          {/* Edit <code>src/App.jsx</code> and save to test HMR */}
        </p>
      </div>
      <p className="read-the-docs">
        {/* Click on the Vite and React logos to learn more */}
      </p>
      <div>
      <h2>Data dari API</h2>
      <div>
        {akun.map((item) => (
          <div>
            <strong>{item.nama}</strong><br />
            tanggal lahir: {item.tanggalLahir}<br />
            tempat lahir: {item.tempatLahir}<br />
            alamat rumah: {item.alamatRumah}<br />
            sekolah: {item.sekolah}<br />
            alamat sekolah: {item.alamatSekolah}<br />
            nomor handphone: {item.nomorHandphone}<br />
            peran: {item.peran}<br />
            createdAt: {item.createdAt}<br />
            updatedAt: {item.updatedAt}<br />
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default App
