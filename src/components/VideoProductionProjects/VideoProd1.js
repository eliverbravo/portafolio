import React from 'react';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

// Global reset for margins and padding
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body, html {
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }
`;

// Main container
const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 2%;
  height: 100vh;
  padding: 3%;
  background-color: #84b572;
  position: relative;
`;

const Title = styled.h1`
  font-size: 5.5vw;
  font-weight: 200;
  color: white;
  font-family: 'Pinyon Script', cursive;
  position: absolute;
  top: 2%;
  left: 5%;
`;

const Subtitle = styled.h2`
  font-size: 1.5vw;
  font-weight: 100;
  color: white;
  font-family: 'Arial', sans-serif;
  position: absolute;
  top: 13%;
  left: 8%;
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  height: 85%;
`;

const VideoIframe = styled.iframe`
  width: 100%;
  height: 80%;
  border: none;
  border-radius: 10px;
    padding-top: 5%

`;

const DescriptionContainer = styled.div`
  background-color: #84b572;
  padding: 5%;
  border-radius: 5%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;

const ProjectTitle = styled.h1`
  font-size: 2.5vw;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1.2vw;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

const ProjectDetails = styled.p`
  font-size: 1vw;
  line-height: 1.5;
`;

const ReturnButton = styled.button`
  padding: 0.5vw 1vw;
  font-size: 1vw;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  color: #84b572;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 3%;
  &:hover {
    background-color: #76a865;
  }
`;

function VideoProd1() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Eliver Bravo</Title>
        <Subtitle>Digital Media Engineer</Subtitle>
        
        {/* Video Embed */}
        <VideoContainer>
          <VideoIframe
                      src="https://drive.google.com/file/d/1EInwsvqoNccImi313bSPj1Sn7YO-98fY/preview"

            allow="autoplay"
            title="Just Dance Remake"
          />
        </VideoContainer>

        {/* Description Container */}
        <DescriptionContainer>
          <ProjectTitle>Just Dance Remake (2023)</ProjectTitle>
          <ProjectDescription>
            Just Dance lookalike using digital 3D environments and motion graphics.
          </ProjectDescription>
          <ProjectDetails>
            Direction, production, and editing: Eliver Bravo, Carlos Penilla, Armando Martinez.
          </ProjectDetails>
          <ProjectDetails>
            Digital Environments: Ayala Mora, Eliver Bravo, Carlos de la Trinidad, Andre Lopez.
          </ProjectDetails>
          <ProjectDetails>
            Motion Graphics: Ayala Mora, Eliver Bravo, Carlos de la Trinidad, Carlos Penilla, Armando Martinez.
          </ProjectDetails>         
          <Link to="/VideoProduction">
            <ReturnButton>Return Home</ReturnButton>
          </Link>
        </DescriptionContainer>

        {/* Instagram Icon */}
        <a href="https://www.instagram.com/h0nniex/" style={{ position: 'absolute', top: '2%', right: '2%' }}>
          <img src="/images/instagramIcon.png" alt="Instagram" width="40px" />
        </a>
      </Container>
    </>
  );
}

export default VideoProd1;
