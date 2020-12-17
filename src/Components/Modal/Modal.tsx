import React, { useState } from 'react';
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';
import styled from 'styled-components';
import Rules from '../../images/image-rules.svg'


const StyledDialogContent = styled(DialogContent)`
     box-shadow: 0px 10px 50px hsla(0, 0%, 0%, 0.33);
     border-radius:1rem;
     width:40rem;
     display:flex;
     flex-direction:column;
     align-items:center;
     padding:4.5rem;
`;

const StyledDialogOverlay = styled(DialogOverlay)`
   z-index:100; 
`;

export const StyledH2 = styled.h2`
  font-size: 3rem;
  color: black;
  line-height: 0.8;
  text-transform: uppercase;
  opacity:.8;
`;

const StyledModalHeader = styled.header`
  margin-bottom:4rem;
  display:flex;
  justify-content:space-between;
  align-self:stretch;
`

const CloseButton = styled.button`

  background:none;
  border:none;
  width:3rem;
  cursor:pointer;
  outline:none;
  opacity:.3;
  

  &::before,&::after{
    content:'';
    display: block;
    background-color:black;
    height:3px;
  }

  &::before{
    transform:rotate(45deg);
  }

  &::after{
    position:relative;
    top:-3px;
    transform:rotate(-45deg);
  }

`

interface Props {
    open:boolean;
    onCloseModal:() => void;
}

const Modal: React.FC<Props> = ({ children,open,onCloseModal }) => {

  return (
    <>
      <StyledDialogOverlay
        isOpen={open}
        onDismiss={onCloseModal}
      >
        <StyledDialogContent aria-labelledby="heading">
          <StyledModalHeader>
            <StyledH2 id="heading">Rules</StyledH2>
            <CloseButton onClick={onCloseModal}></CloseButton>
          </StyledModalHeader>
          <img style={{width:'90%'}} src={Rules} alt="game rules"/>
        </StyledDialogContent>
      </StyledDialogOverlay>
      
    </>
  );
};

export default Modal;
