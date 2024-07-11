import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useAuth } from './context/AuthContext';


function App() {

  const { currentUser } = useAuth();

  return (
    <>
      <Container className='' style={{ minHeight: "100vh" }}>
        <Router>
          <Routes>
            <Route exact path='/' element={<h1>Home</h1>} />
            <Route path='/signup' element={<h1>SignUp</h1>} />
            <Route path='/login' element={<h1>SignUp</h1>} />
            {currentUser && <Route path='/profile' element={<h1>SignUp</h1>} />
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
