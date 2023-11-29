import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Router } from './shared/constant/router'
import { Details } from './pages/Detail'

function App() {

  return (
    <>
    <Routes>
      <Route path={Router.HOME} element={<Home />} />
      <Route path={Router.DETAIL} element={<Details />} />
    </Routes>
    </>
  )
}

export default App
