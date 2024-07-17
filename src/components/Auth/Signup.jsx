import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Alert, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

import { useAuth } from '../../context/AuthContext';

function Signup() {
    const [data, setData] = useState({});
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate()
    const { currentUser, signup, saveUserInfo } = useAuth();


    function handleInputChange(e) {
        const { name, value } = e.target;

        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await signup(data.email, data.password);
            
            try {
                await saveUserInfo({Fullname: data.fullname, Phone: data.phone});
                setLoading(false);
                navigate('/login');

            }
            catch (err) {
                return setError(err.message);
            }
        }
        catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
            <Card className='p-4'>
                <h2 className='text-center mb-2' >Sign Up</h2>
                <p className='text-center small mb-4'>Create an account using email address</p>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId='name' className='mb-2'>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control name='fullname' type='text' onChange={handleInputChange} placeholder='john doe' required></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='email' className='mb-2'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control name="email" type='email' onChange={handleInputChange} placeholder='johndoe@gmail.com' required></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='phone' className='mb-2'>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control name="phone" type='text' onChange={handleInputChange} placeholder='0800000000' required></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='password' className='mb-2'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type='password' onChange={handleInputChange} placeholder='Password' required></Form.Control>
                        </Form.Group>
                        <Button type='submit' variant='success' className='mt-4 w-100'>Create an Account</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center">
                <p>Already have an account? <Link to='/login'>Login</Link></p>

            </div>
        </>
    )
}

export default Signup