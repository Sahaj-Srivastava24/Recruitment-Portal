import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import UserContext from '../component/UserContext';

export default function Homepage() {
  const { user, setUser } = useContext(UserContext)

  return (
    <div>
      Welcome to the ACM Recruitments Portal
      { !user.userId && <Link to="/quizDetails"><Button variant="contained">Sign in</Button></Link>  }
      { user.userId && <Link to="/quizDetails"><Button variant="contained">Take Me to Quiz</Button></Link> }
      
    </div>
  )
}
