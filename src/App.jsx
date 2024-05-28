import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './utilities/appStore'
import userContext from './utilities/userContext'
import { useState } from 'react'

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

  const [username, setUserName] = useState("Anshika");

  return(
    <Provider store={appStore}>
      <userContext.Provider value={{currentUser: username, setUserName}} >
      <Header/>
      <Outlet/>
      <Footer/>
      </userContext.Provider>
    </Provider>
  )
}

export default App
