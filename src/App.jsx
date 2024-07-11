import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useAuth } from './context/AuthContext';

function App() {

  return (
    <>
      <Container className='' style={{minHeight: "100vh"}}>
        <div className="d-flex align-items-center justify-content-center" style={{maxWidth: "400px", background: "red"}}>
          <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  )
}

export default App
