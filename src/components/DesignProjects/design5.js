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

// Contenedor principal con grid para las imágenes y la descripción
const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%; /* Dos columnas: una para imágenes y otra para el texto */
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

// Contenedor para las imágenes (parte izquierda)
const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Dos columnas para las imágenes */
  grid-template-rows: repeat(3, 1fr); /* Tres filas */
  gap: 1vw; /* Espaciado entre las imágenes */
  padding: 2%;
  margin-top: 10%; /* Espacio extra debajo del título y subtítulo */
  height: 40vw;
`;

// Estilos para cada imagen del menú
const MenuItem = styled(Link)`
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    }
  }
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

function Design5() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Eliver Bravo</Title>
        <Subtitle>Digital Media Engineer</Subtitle>
        
        {/* Grid de imágenes */}
        <ImageGrid>
          <MenuItem>
            <img src="/images/Design/Design1/dialz1.jpg" alt="Foto 1" />
          </MenuItem>
          <MenuItem>
            <img src="/images/Design/Design1/dialz3.jpg" alt="Foto 2" />
          </MenuItem>
          <MenuItem>
            <img src="/images/Design/Design1/dialz4.jpg" alt="Foto 3" />
          </MenuItem>
          <MenuItem>
            <img src="/images/Design/Design1/dialz2.jpg" alt="Foto 4" />
          </MenuItem>
          <MenuItem>
            <img src="/images/Design/Design1/dialz5.jpg" alt="Foto 5" />
          </MenuItem>
          <MenuItem>
            <img src="/images/Design/Design1/dialz6.jpg" alt="Foto 6" />
          </MenuItem>
        </ImageGrid>

        {/* Contenedor de la descripción */}
        <DescriptionContainer>
          <ProjectTitle>Frio Mar (2023)</ProjectTitle>
          <ProjectDescription>
          Photo session at beach using mirrors as a visual element. 
          </ProjectDescription>
          Direction, photography, production and coloring done by me.
          
          <Link to="/Design">
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

export default Design5;
