import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #84b572;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Title = styled.h1`
  font-size: 5.5vw;
  font-weight: 200;
  color: white;
  font-family: 'Pinyon Script', cursive;
  position: absolute;
  top: -4%;
  left: 3%;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 100;
  color: white;
  font-family: 'Arial', sans-serif;
  position: absolute;
  top: 12%;
  left: 8%;
`;

const BorderedContainer = styled.div`
  width: 70%;
  height: 60%;
  top:5%;
  padding: 2rem;
  border: 2px solid white;
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  position: relative;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  width: 100%; // Añadido para que ocupe el ancho completo
`;

const WelcomeTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #fff;
  text-align: center;
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ReturnButton = styled(Link)`
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #84b572;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
  width: 25%;
  &:hover {
    background-color: #76a865;
  }
`;

function Jams() {
  return (
    <Container>
      <Title>Eliver Bravo</Title>
      <Subtitle>Digital Media Engineer</Subtitle>
      
      <BorderedContainer>
        <TextContainer>
          <WelcomeTitle>My Essence in Songs</WelcomeTitle>
          
          <Description>
          <iframe src="https://open.spotify.com/embed/playlist/79Mx8dpFc9YSN5jwrs0pob?utm_source=generator&theme=0" 
          width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; 
          encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </Description>
          
          <ReturnButton to="/">Return Home</ReturnButton>
        </TextContainer>
      </BorderedContainer>

      <a href="https://www.instagram.com/h0nniex/" style={{ position: 'absolute', top: '2%', right: '2%' }}>
        <img src="/images/instagramIcon.png" alt="Instagram" width="4%" />
      </a>
    </Container>
  );
}

export default Jams;
