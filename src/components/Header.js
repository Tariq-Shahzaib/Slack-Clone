import React from 'react'
import styled from "styled-components"
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../firebase'
function Header() {
  const [user, loading] = useAuthState(auth)
    return (
      <>
        <HeaderContainer>
          {/* Header Left */}
         
          <HeaderLeft>
            <HeaderAvatar onClick={() => auth.signOut()}
             alt={user?.displayName}
             src={user?.photoURL}
            />
           < AccessTimeIcon/>
          </HeaderLeft>
         
         
          {/* Header Search */}
         <HeaderSearch>
           <SearchIcon/>
            <input  placeholder="Search PapaFam"/>
         </HeaderSearch>
         
         
          {/* Header Right */}
<HeaderRight>
  <HelpOutlineIcon/>
</HeaderRight>

  </HeaderContainer>
    </>)
}

export default Header

const HeaderRight = styled.div`

flex : 0.3;
display : flex;
align-items : flex-end;
> .MuiSvgIcon-root {
  margin-left : auto;
  margin-right : 20px;
}
`;


const HeaderSearch = styled.div`
flex : 0.4;
opacity : 1;
border-radius : 6px;
background-color : #421f44;
text-align : center;
display : flex;
padding : 0 50px;
color: grey;
border: 1px grey solid;
> input {
  background-color : transparent;
  border: none;
  text-align : center;
  min-width : 30vw;
  outline : 0;
  color : white;
}
`
const HeaderContainer = styled.div`
display : flex;
padding : 10px 0;
width : 100%;
color: white;
background-color : var(--slack-color);
align-items : center;
`;
const HeaderLeft = styled.div`
flex : 0.3;
display : flex;
align-items : center;
margin-left : 20px;



> .MuiSvgIcon-root {
  margin-left : auto;
  margin-right: 30px
}
`;
const HeaderAvatar = styled(Avatar)`

cursor: pointer;
:hover {
  opacity : 0.8;
}
`;

