import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'

function SignIn() {
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
