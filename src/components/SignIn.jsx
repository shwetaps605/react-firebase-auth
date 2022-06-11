import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'

function SignIn() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signUp } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            setError("Password does not match")
            console.log("Password does not match")
            return
        }
        try {
            setError("")
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value)

        } catch (err) {
            setError("Failed to create an account")
            console.log(err)
        }
        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>
                        Sign Up
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
                        <Form.Group id="email">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control
                                type='password'
                                ref={passwordConfirmRef}
                                required>
                            </Form.Control>
                        </Form.Group>

                        <Button disabled={loading} className='w-100' type='submit'>
                            Sign Up
                        </Button>

                    </Form>
                </Card.Body>
                <div className='w-100 text-center mt-2'>
                    Already have an account ? Log In
                </div>
            </Card>
        </>
    )
}

export default SignIn
