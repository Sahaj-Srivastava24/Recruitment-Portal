import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import UserContext from '../component/UserContext';

export default function QuizDetail() {
  var { user, setUser } = useContext(UserContext)

  const postLocalTime = () => { 
    const currDate = new Date()
    const dateToEnd = new Date(currDate.getTime() + 15*60000);
    const dateForceEnd = new Date(currDate.getTime() + 20*60000);
    const newUser = {
      ...user,
      quizTimer : {
        start: currDate,
        end: dateToEnd,
        down: dateForceEnd
      }
    }
    setUser(newUser)
    // user = newUser;
    console.log(user)
    // Post request to update the user's quizLoginTime
  }

  return (
    <div>
      These are the questions
      <Link to="/quizPortal">
        <Button variant="contained" onClick={ postLocalTime }>Start Quiz</Button>
      </Link>
    </div>
  )
}
