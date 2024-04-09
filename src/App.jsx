import './App.css'
import Header from './components/Header'
import Body from './components/Body'

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
    </>
  )
}

export default App
