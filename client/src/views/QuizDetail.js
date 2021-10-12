import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@mui/material/Button';

export default function QuizDetail() {

  const postLocalTime = () => { 
    const currDate = new Date()
    const dateToEnd = new Date(currDate.getTime() + 15*60000);
    const dateForceEnd = new Date(currDate.getTime() + 20*60000);

    console.log(currDate) 
    console.log(dateToEnd) 
    console.log(dateForceEnd) 
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
