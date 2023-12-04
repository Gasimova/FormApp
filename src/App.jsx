import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Router } from './shared/constant/router'
import { Details } from './pages/Detail'
import { Update } from './pages/Settings'

function App() {

  return (
    <>
    <Routes>
      <Route path={Router.HOME} element={<Home />} />
      <Route path={Router.DETAIL} element={<Details />} />
      <Route path={Router.DETAIL_SETTINGS} element={<Update />} />
    </Routes>
    </>
  )
}

export default App
