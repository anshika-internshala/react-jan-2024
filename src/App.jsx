import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

/**
 * Header
 *    --- navigation bar
 * Body
 *    --- Search Bar
 *    --- Restaurant Card
 * Footer
 */

// Functional Component ---- JavaScript Function which returns JSX

function App() {
  return(
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
