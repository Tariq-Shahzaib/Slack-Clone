import React, {useRef , useEffect} from 'react'
import styled from "styled-components"
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useSelector } from 'react-redux'
import ChatInput from './ChatInput';
import {selectRoomId} from '../features/appSlice'
import {useCollection, useDocument} from 'react-firebase-hooks/firestore' 
import Massage from "../components/Massage"
import {db} from "../firebase"
function Chat() {

    const chatRef =  useRef(null)
    const roomId =  useSelector(selectRoomId)
    const [roomDetails] = useDocument(
        roomId && db.collection("rooms").doc(roomId)
    )

        const [roomMassages, loading] = useCollection(
            roomId && db.collection("rooms").doc(roomId).collection("messages").orderBy("timestamp", "asc")
        )

        useEffect(() => {
            chatRef?.current?.scrollIntoView();
         }, [roomId, loading])

    return (
        <ChatContainer>
            {roomDetails && roomMassages && (
        <>
        <Header>
        <HeaderLeft>
            <h4>
                <strong>#{roomDetails?.data().name}</strong>
          
            </h4>
            <StarBorderOutlinedIcon/>
        </HeaderLeft>
        <HeaderRight>
            <p>
                <InfoOutlinedIcon/> Details
            </p>
        </HeaderRight>
        </Header>

     <ChatMessages>
        {roomMassages?.docs.map(doc => {
            const  { message, timestamp, user, userImage } = doc.data()

            return(
                <Massage key={doc.id}
                message={message}
                timestamp={timestamp}
                user={user}
                userImage={userImage}
                />
                )
        })}
        <ChatBottom ref={chatRef}/>
     </ChatMessages>

    <ChatInput
    chatRef={chatRef}
    channelName={roomDetails?.data().name}
    channelId = {roomId}
    />


        </>
            )}

        </ChatContainer>
    )
}

export default Chat

const ChatMessages = styled.div``

const ChatContainer =  styled.div`
flex : 0.7;
flex-grow : 1;
overflow-y : scroll;
`

const Header =  styled.div`

display : flex;
justify-content : space-between;
padding : 20px;
border-bottom : 1px solid  lightgrey;

` 
const HeaderLeft =  styled.div`

display : flex;
align-items : center;

> h4 {
    display : flex;
    text-transform : lowercase;
    margin-right  : 10px;

}

> h4 > .MuiSvgIcon-root {
     margin-left : 20px;
     font-size : 20px;

}

` 
const HeaderRight =  styled.div`

> p {
    display : flex;
    align-items : center;
    font-size : 14px;
}
> p > .MuiSvgIcon-root {
    margin-right : 5px !important;
    font-size : 16px;
}

` 
const ChatBottom =   styled.div`
padding-bottom : 200px;
`