import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

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
      <Body/>
      <Footer/>
    </>
  )
}

export default App
