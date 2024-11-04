import React from 'react';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

// Reseteo global para eliminar márgenes y padding predeterminados
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body, html {
    overflow: hidden; /* Elimina el desplazamiento */
    width: 100vw;
    height: 100vh;
  }
`;

// Contenedor principal con grid para el video y la descripción
const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%; /* Dos columnas: una para el video y otra para el texto */
  gap: 2%; /* Espaciado entre las columnas */
  height: 100vh;
  padding: 3%;
  background-color: #84b572;
  position: relative;
`;

// Estilos del título
const Title = styled.h1`
  font-size: 5.5vw;  /* Escalado dinámico con viewport */
  font-weight: 200;
  color: white;
  font-family: 'Pinyon Script', cursive;
  position: absolute;
  top: 2%;
  left: 5%;
`;

const Subtitle = styled.h2`
  font-size: 1.5vw; /* Escalado dinámico con viewport */
  font-weight: 100;
  color: white;
  font-family: 'Arial', sans-serif;
  position: absolute;
  top: 13%;
  left: 8%;
`;
// Contenedor para el reproductor de video (parte izquierda)
const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
\  height: auto;
  width: 100%;
  height: 100%;
`;

// Reproductor de video con proporción de 9:16
const VideoPlayer = styled.video`
  width: 100%; /* Ajuste para que el video ocupe el 45% del ancho del contenedor */
  aspect-ratio: 16 / 9; /* Relación de aspecto de 1080x1920 */
  border-radius: 10px;
`;


// Contenedor para la descripción (parte derecha)
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

// Título del proyecto
const ProjectTitle = styled.h1`
  font-size: 2.5vw;
  font-weight: bold;
  margin-bottom: 1rem;
`;

// Texto de la descripción
const ProjectDescription = styled.p`
  font-size: 1.2vw;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

const ProjectDetails = styled.p`
  font-size: 1.vw;
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
  margin-top:3%;
  &:hover {
    background-color: #76a865;
  }
`;

function VideoProd2() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Eliver Bravo</Title>
        <Subtitle>Digital Media Engineer</Subtitle>
        
        {/* Reproductor de video */}
        <VideoContainer>
          <VideoPlayer controls>
            <source src="images/VideoProjects/VideoProject2.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </VideoPlayer>
        </VideoContainer>

        {/* Contenedor de la descripción */}
        <DescriptionContainer>
          <ProjectTitle> Unreal Photoshoot BTS (2023)</ProjectTitle>
          <ProjectDescription>
            Behind the Scenes video for Unreal Clothing. 
          </ProjectDescription>
          <ProjectDetails>
            Direction, production, photography and editing by me
          </ProjectDetails>
          <Link to="/VideoProduction">
            <ReturnButton>Return Home</ReturnButton>
          </Link>
        </DescriptionContainer>
        
        {/* Icono de Instagram */}
        <a href="https://www.instagram.com/h0nniex/" style={{ position: 'absolute', top: '2%', right: '2%' }}>
          <img src="/images/instagramIcon.png" alt="Instagram" width="40px" />
        </a>
      </Container>
    </>
  );
}

export default VideoProd2;
