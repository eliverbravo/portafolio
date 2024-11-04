import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #84b572; /* Color verde de fondo */
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Title = styled.h1`
  font-size: 5.5vw;  /* Escalado dinámico con viewport */
  font-weight: 200;
  color: white;
  font-family: 'Pinyon Script', cursive;
  position: absolute;
  top: -4%;
  left: 3%;
`;

// Estilos del subtítulo
const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 100;
  color: white;
  font-family: 'Arial', sans-serif;
  position: absolute;
  top: 12%;
  left: 8%;
`;

// Contenedor para la tarjeta con el borde
const BorderedContainer = styled.div`
  width: 60%;
  height: 50%;
  padding: 2rem;
  border: 2px solid white; /* Borde blanco para el rectángulo */
  border-radius: 15px; /* Borde redondeado */
  display: flex;
  align-items: center;
  gap: 1.5rem;
  position: relative;
`;

// Contenedor de la imagen de perfil
const ProfileImage = styled.img`
  width: 15%;
  height: auto; /* Mantiene la proporción de la imagen */
  border-radius: 25%;
  object-fit: cover;
`;

// Contenedor de texto dentro de la tarjeta
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
`;

// Título de bienvenida
const WelcomeTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #fff;
`;

// Texto de descripción
const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #fff;
`;

// Botón para regresar a la página de inicio
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
  width: 20%;
  
  &:hover {
    background-color: #76a865;
  }
`;

function AboutMe() {
  return (
    <Container>
      <Title>Eliver Bravo</Title>
      <Subtitle>Digital Media Engineer</Subtitle>
      
      {/* Contenedor con borde */}
      <BorderedContainer>
        {/* Imagen de perfil */}
        <ProfileImage src="/images/yo.jpg" alt="Eliver Bravo" />
        
        {/* Contenedor de texto de presentación */}
        <TextContainer>
          <WelcomeTitle>Hi, I'm Eliver!</WelcomeTitle>
          <Description>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          </Description>
          
          {/* Botón de regreso */}
          <ReturnButton to="/">Return Home</ReturnButton>
        </TextContainer>
      </BorderedContainer>

      {/* Icono de Instagram en la esquina superior derecha */}
      <a href="https://www.instagram.com/h0nniex/" style={{ position: 'absolute', top: '2%', right: '2%' }}>
        <img src="/images/instagramIcon.png" alt="Instagram" width="4%" /> {/* Cambiado a % */}
      </a>
    </Container>
  );
}

export default AboutMe;
