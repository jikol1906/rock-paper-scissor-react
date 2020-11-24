import React from 'react'
import { Scoreboard } from '../../Components/ScoreBoard/Scoreboard'
import { StyledH1, StyledHeader } from './StyledComponents'

function Header() {
    return (
        <StyledHeader>
            <StyledH1>Rock <br/> Paper <br/> Scissors </StyledH1>
            <Scoreboard/>        
        </StyledHeader>
    )
}

export default Header
