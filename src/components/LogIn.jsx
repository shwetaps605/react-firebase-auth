import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from "react-router-dom"

function LogIn() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { logIn } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await logIn(emailRef.current.value, passwordRef.current.value)
            navigate("/", { replace: true})

        } catch (err) {
            setError("Failed to sign in")
            console.log(err)
        }
        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>
                        Log In
                    </h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type='email'
                                ref={emailRef}
                                required>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                ref={passwordRef}
                                required>
                            </Form.Control>
                        </Form.Group>
                        <Button disabled={loading} className='w-100' type='submit'>
                            Log In
                        </Button> 
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                    Need an account? <Link to="/signin">Sign Up</Link>
            </div>
        </>
    )
} 

export default LogIn
