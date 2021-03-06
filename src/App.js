import SignIn from './components/SignIn'
import LogIn from './components/LogIn'
import Dashboard from './components/Dashboard'
import {Container} from 'react-bootstrap'
import { AuthContextProvider } from './context/AuthContext'
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

function App() {
  return (  

    <Container className='d-flex align-items-center justify-content-center'
      style = {{ minHeight:"100vh"}}>
        
      <div>App is rendering!</div>

      <div className='w-100' style={{maxWidth:"400px"}}>
        {/* <Router>
          <AuthContextProvider>
          <Routes>
            <Route path="login" element = { <LogIn/>}></Route>
            <Route path="/" element = { <SignIn/> } ></Route>
            <Route path="signin" element={ <SignIn/> }></Route>
          </Routes>
        </AuthContextProvider>
        </Router> */}
      </div>
    </Container>
  );
}

export default App;
