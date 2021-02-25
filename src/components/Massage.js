import React from 'react'
import styled from "styled-components"
function Massage({message,timestamp,user,userImage}) {
    return (
        <MassageContainer>
            <img src={userImage} alt=""/>
            <MassageInfo>
            <h4>
                {user}{''}
                <span> 
                    {new Date(timestamp?.toDate()).toUTCString()}
                </span>
            </h4>
            <p>{message} </p>
            </MassageInfo>
        </MassageContainer>
    )
}

export default Massage


const MassageContainer = styled.div`
display : flex;
align-items : center;
padding : 20px;
> img {
    height : 50px;
    border-radius : 8px;
}
`


const MassageInfo =  styled.div`
padding-left : 10px;
> h4 > span {
    color : grey;
    font-weight : 300px;
    margin-left : 4px;
    font-size : 10px;
}
`