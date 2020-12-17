import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../Components/Button/Button';
import Modal from '../../Components/Modal/Modal';

const StyledButton = styled(Button)`
    display:block;
    margin-left: auto;
    padding-left:4rem;
    padding-right:4rem;

    @media only screen and (max-width:600px) {
        margin :0 auto;
    }
`

const StyledFooter = styled.footer`
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    padding:2rem;
`


const Footer: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);

  return (
    <StyledFooter>

      <Modal open={showModal} onCloseModal={closeModal}>
          <p>test</p>
      </Modal>
      
      <StyledButton primary={false} onClick={() => setShowModal(true)}>rules</StyledButton>
    </StyledFooter>
  );
};

export default Footer;
