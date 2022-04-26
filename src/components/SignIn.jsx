import React, { useRef } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'

function SignIn() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signUp } = useAuth()

    function handleSubmit(e) {
        e.preventDefault()
        signUp(emailRef.current.value, passwordRef.current.value)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>
                        Sign Up
                    </h2>
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
                    <Button className='w-100' type='submit'>
                        Sign Up
                    </Button>
                </Card.Body>

                <div className='w-100 text-center mt-2'>
                    Already have an account ? Log In
                </div>
            </Card>
        </>
    )
}

export default SignIn
