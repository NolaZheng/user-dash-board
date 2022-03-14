import './App.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css' //theme
import 'primereact/resources/primereact.min.css' //core css
import 'primeicons/primeicons.css' //icons

import { Routes, Route } from 'react-router-dom'
import { Home } from './dashboard/screen/home'
import { UserInfo } from './user-info/screen'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user-info" element={<UserInfo />} />
      </Routes>
    </div>
  )
}

export default App
