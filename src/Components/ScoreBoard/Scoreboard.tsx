import React from 'react'
import { StyledH2, StyledScoreboard } from './StyledComponents'

interface Props {
    score:number
}

export const Scoreboard : React.FC<Props> = ({score}) => {


    return (
        <StyledScoreboard>
            <StyledH2>Score <br/> <span>{score}</span></StyledH2>
        </StyledScoreboard>
    )
}
