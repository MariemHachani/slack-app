import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';

const Login = () => {
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch(error => alert(error.message));
    };
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src="https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png" alt="" />
                <h1>Sign in to this version of slack</h1>
                <p>By: Mariem Hachani</p>
                <Button onClick={signIn}> Sign in with Google</Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login;
const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height:100vh;
    display:grid;
    place-items:center;
`;
const LoginInnerContainer = styled.div`

    padding:100px;
    text-align:center;
    background-color:white;
    border-radius:10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    >img {
        object-fit:contain;
        height:100px;
        margin-bottom:40px;
    }

    >Button {
        margin-top:50px;
        color:rgb(255, 255, 255);
        text-transform:inherit !important;
        background-color: #0a8d48 !important;
    }
    
`;