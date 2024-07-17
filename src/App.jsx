import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useAuth } from './context/AuthContext';
import Signup from './components/Auth/Signup';


function App() {

  const { currentUser } = useAuth();

  return (
    <>
      <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: "100vh" }}>
        <Router>
          <Routes>
            <Route exact path='/' element={<h1>Home</h1>} />
            <Route path='/signup' element={
              <div style={{maxWidth: "500px",width: "100%"}}>
                <Signup />
              </div>
            } />
            <Route path='/login' element={<h1>Login</h1>} />
            {currentUser && <Route path='/profile' element={<h1>Profile</h1>} />
            }
            {currentUser && <Route path='/main' element={<h1>Main</h1>} />
            }
            <Route path='*' element={<h1>Home</h1>} />
          </Routes>
        </Router>
      </Container>
    </>
  )
}

export default App
