import { useState, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Movies from './pages/Movies'
import MovieDetail from './pages/MovieDetail'
import DefaultLayouts from './layouts/DefaultLayouts'
import Home from './pages/Home'
import GlobalContextProvider from './context/globalContextProvider'
import Loader from './components/Loader'
import globalContext from './context/globalContext'

const AppWithLoader = () => {
  const { isLoading } = useContext(globalContext);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayouts}>
            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/movie/:id' element={<MovieDetail />} />
          </Route>
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
      {isLoading && <Loader />}
    </>
  )
}

function App() {
  return (
    <GlobalContextProvider>
      <AppWithLoader />
    </GlobalContextProvider>
  )
}

export default App