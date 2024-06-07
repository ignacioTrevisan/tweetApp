
import { Provider, useSelector } from 'react-redux'
import './App.css'
import { LoginPage } from './auth/pages/loginPage'

import { AppTheme } from './theme/apptheme'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routes/appRouter'

function App() {


  return (
    <>

      <AppTheme>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AppTheme>

    </>
  )
}

export default App
