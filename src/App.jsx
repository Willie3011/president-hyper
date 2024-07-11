import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <>
      <Container className='d-flex align-items-center justify-content-center' style={{minHeight:"100vh"}}>
        <div className="" style={{maxWidth: "400px", background: "red"}}>
          <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant='secondary'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  )
}

export default App
