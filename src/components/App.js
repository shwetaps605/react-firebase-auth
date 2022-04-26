import SignIn from './SignIn'
import {Container} from 'react-bootstrap'
import { AuthContextProvider } from '../context/AuthContext'

function App() {
  return (
    <AuthContextProvider>
        <Container className='d-flex align-items-center justify-content-center'
          style = {{ minHeight:"100vh"}}>
          <SignIn/>
        </Container>
    </AuthContextProvider>
  );
}

export default App;
