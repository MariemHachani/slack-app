import { Button } from '@material-ui/core';
import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import { db } from '../firebase';
import firebase from 'firebase';

const ChatInput = ({ channelName, channelId, chatRef }) => {
    const [input, setInput] = useState('');

    const sendMessage = e => {
        e.preventDefault();
        if (!channelId) {
            return false;
        }
        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Mariem hachani',
            userImage: 'https://avatars.githubusercontent.com/u/45674023?s=460&u=1b0eb22a4fa366ca9551f2bd738dba3f5d0d5cbc&v=4'
        });
        chatRef.current.scrollIntoView({
            behavior: 'smooth',
        });
        setInput('');
    };
    return (
        <ChatInputContainer>
            <form>
                <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder={`Message #${channelName}`} />
                <Button hidden type="submit" onClick={sendMessage}>SEND</Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput;
const ChatInputContainer = styled.div`
    border-radius:20px;

    >form {
        position:relative;
        display:flex;
        justify-content:center;
    }
    >form >input {
        position: fixed;
        bottom: 30px;
        width : 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }
    >form >button {
        display: none !important;
    }
`;
