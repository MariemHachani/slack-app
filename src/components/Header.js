import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const Header = () => {
    const [user, loading] = useAuthState(auth);
    console.log(user);

    return (
        <HeaderContainer>
            {/* header left */}
            <HeaderLeft>
                <HeaderAvatar
                    onClick={() => auth.signOut()}
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                <AccessTimeIcon />
            </HeaderLeft>
            {/* header middle */}
            <HeaderSearch>
                <SearchIcon />
                <input type="text" placeholder="search ... " />
            </HeaderSearch>
            {/* header right */}
            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width:100%;
    align-items:center;
    justify-content: space-between;
    padding: 10px 0;
    color:white;
    background-color: var(--slack-color); // a color defined in the index.css
`;

const HeaderLeft = styled.div`
    flex: 0.3; //takes third of the screen
    display:flex;
    align-items:center;
    margin-left:20px;

    > .MuiSvgIcon-root{
        margin-left:auto;
        margin-right: 30px;
    }
`;
const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
`;

const HeaderSearch = styled.div`
    flex:0.4;
    opacity:1;
    border-radius:6px;
    text-align:center;
    background-color: #421f44;
    padding: 0 50px;
    border: 1px gray solid;

    > input {
        background-color: transparent;
        border:none;
        text-align:center;
        min-width:30vw;
        outline:0;
        color:white;
    }
`;
const HeaderRight = styled.div`
    flex:0.3;
    display:flex;
    align-items:flex-end;

    > .MuiSvgIcon-root{
        margin-left:auto;
        margin-right: 30px;
    }
`;