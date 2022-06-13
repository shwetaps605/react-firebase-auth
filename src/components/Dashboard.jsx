import React, {useState} from 'react'
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../context/AuthContext"
import { Link, useNavigate} from "react-router-dom"


function Dashboard() {

  const [error, setError] = useState("")
  const { currentUser, logOut } = useAuth()
  const navigate = useNavigate()

  const handleLogOut = async () => {
    setError("")
    try {
      await logOut();
      navigate("/login",{replace:true})
    } catch {
      setError("Failed to Log Out")
    }
  }

  return (
    <>
    <div>
      Dashboard is rendering!
    </div>
    <Card>
      <Card.Body className='text-center'>
        <h2 className="text-center mb-4">Profile</h2>
      </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
          <Button variant='link' onClick={()=>handleLogOut()}>
            Log Out
          </Button>
    </div>
    </>
  )
}

export default Dashboard