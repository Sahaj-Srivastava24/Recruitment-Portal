import React, { useState, useEffect, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import Countdown from 'react-countdown';
import Question from '../component/Question'
import ResponseContext from '../component/ResponseContext'
import UserContext from '../component/ResponseContext'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function QuizPortal() {

  // const [ timer, setTimer ] = useState()
  const [ quesArr, setquesArr ] = useState([])
  const [ response, setResponse ] = useState([])
  const { user } = useContext(UserContext)

  // Renderer callback with condition
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      handleSubmit(response)
      return <Redirect to='./QuizEnd' />;
    } else {
      // Render a countdown
      return <h3>{minutes}:{seconds}</h3>;
    }
  };

  // Assuming we have an array of { quesId, question } from server
  // const quesArr = [
  //   {
  //     id:1,
  //     text: "Sample Question 1",
  //     choices: [ "Sample Choice 1" , "Sample Choice 2" , "Sample Choice 3" , "Sample Choice 4"]
  //   },
  //   {
  //     id:2,
  //     text: "Sample Question 2",
  //     choices: [ "Sample Choice 1" , "Sample Choice 2" , "Sample Choice 3" , "Sample Choice 4"]
  //   },
  //   {
  //     id:3,
  //     text: "Sample Question 3",
  //     choices: [ "Sample Choice 1" , "Sample Choice 2" , "Sample Choice 3" , "Sample Choice 4"]
  //   },
  // ]
  useEffect(() => {

    fetch("http://localhost:3001/questionQuery")
      .then(res => res.json())
      .then(res => {
        setquesArr(res);
    })
      .catch((err) => console.log(err))
  },[])
  
  const handleSubmit = (res) => {
    fetch('http://localhost:3001/answerResponse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userID: user.userID,
        ansKey: res,
      }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((err) => console.log(err))
  }
  console.log(user)

    return (
    <div>
      <ResponseContext.Provider value={{ response, setResponse }}>
      {/* <h2>{timer}</h2> */}
        <Countdown
          date={Date.now() + 15000}
          renderer={renderer}
        />
        <Box sx={{ flexGrow: 1 , mb: 3}}>
          <Grid 
          container 
          spacing={2}
          >
            { quesArr.map((ques) => {
            return (
              <Grid item xs={8} key={ques.id} sx={{ my:1}}>
                {/* <Item> */}
                  <Question quesId={ques.id} question={ques.text} choices = {ques.choices} />
                {/* </Item> */}
              </Grid>
            )
          }) }
          </Grid>
          <Button variant="contained" onClick={() => handleSubmit(response)}>Submit</Button>
          {/* <Button variant="outlined" onClick={() => console.log(response)}>Back</Button> */}
        </Box>
      </ ResponseContext.Provider>
    </div>
  )
}
