import React, { Fragment, useRef } from 'react'
import { Stack } from '@mui/material';
import AppLayout from '../components/layout/AppLayout';
import { grayColor, myColor, myColor2 } from '../constants/color';
import { IconButton } from '@mui/material';
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';
import { InputBox } from '../components/styles/StyledComponents';
import FileMenu from '../components/dialogs/FileMenu';
import { sampleMessage } from '../constants/sampleData';
import MessageComponent from '../components/shared/MessageComponent';




const user= { 
  _id:"sdfsfsdf",
  name:"Ibrahim ahmad"
}
const Chat = () => {

  const containerRef = useRef(null);


  return (
    <Fragment>
      <Stack 
      ref={containerRef}
      boxSizing={"border-box"}
      padding={"1rem"}
      bgcolor={grayColor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >




{

  sampleMessage.map((i)=> (
    <MessageComponent key={i._id} message={i} user={user}/>
  ))
}
      </Stack>

      <form
      style={{
        height: "10%",
      }}>

      <Stack direction={"row"}
       height={"100%"}
      padding={"1rem"}
      alignItems={"center"}
      position={"relative"}>
        <IconButton
        sx={{
          position: "absolute",
          left: "1.5rem",
          rotate: "30deg",
        }}
       
        >
          <AttachFileIcon />
        </IconButton>


        <InputBox placeholder='Type Message Here...' />



        <IconButton type='submit' sx={{
          backgroundColor: "white",
          color: myColor2,
          marginLeft: "1rem",
          padding: "0.5rem",
          "&:hover" :{
            color: myColor
          },
        }}>
          <SendIcon />
        </IconButton>
      </Stack>

      </form>


    <FileMenu  />
    </Fragment>
  )
}

export default AppLayout()(Chat);