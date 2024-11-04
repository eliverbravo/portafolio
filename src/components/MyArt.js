import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link

import styled from 'styled-components';

// Contenedor principal con grid para las imágenes y la descripción
const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%; /* Dos columnas: una para imágenes y otra para el texto */
  gap: 5%; /* Espaciado entre las columnas */
  height: 100vh;
  padding: 5%;
  background-color: #84b572;
`;
// Estilos del título
const Title = styled.h1`
  font-size: 5.5vw;  /* Escalado dinámico con viewport */
  font-weight: 200;
  color: white;
  font-family: 'Pinyon Script', cursive;
  position: absolute;
  top: -4%;
  left: 5%;
`;
const MenuTitle = styled.h2`
  font-size: 2vw;  /* Escalado dinámico con viewport */
  font-weight: 200;
  color: white;
  font-family: 'Arial', sans-serif;
  position: absolute;
  top: 12%;
  left: 35%;
`;
// Estilos del subtítulo
const Subtitle = styled.h2`
  font-size: 1.5vw; /* Escalado dinámico con viewport */
  font-weight: 100;
  color: white;
  font-family: 'Arial', sans-serif;
  position: absolute;
  top: 12%;
  left: 8%;
`;
// Contenedor para las imágenes (parte izquierda)
const ImageGrid = styled.div`
  display: grid;
  margin-top: 12%;
  padding: 5%;
  grid-template-columns: 1fr 1fr; /* Dos columnas para las imágenes */
  grid-template-rows: repeat(3, 1fr); /* Tres filas */
  gap: 1%; /* Espaciado entre las imágenes */
`;

// Estilos para cada imagen del menú
const MenuItem = styled(Link)`
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 90%;
    height: 90%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`;

// Contenedor para la descripción (parte derecha)
const DescriptionContainer = styled.div`
  background-color: #84b572;
  border: 20zpx solid #0000;
  border-color: #0000;
  padding: 5%;
  border-radius: 5%;
  margin-top: 10%;
  height: 60vh;
`;

// Título del proyecto
const ProjectTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: white;
  margin-top: -4%;
`;

// Texto de la descripción
const ProjectDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  color: white;
  margin-right: 10%;
`;

function MyArt() {
  return (
    <Container>
      <Title>Eliver Bravo</Title>
      <Subtitle>Digital Media Engineer</Subtitle> 
      {/* Grid de imágenes */}
      <ImageGrid>
        <MenuItem >
          <img src="/images/Photography/FrioMar/FrioMar1.jpg" alt="Foto 1" />
        </MenuItem>
        <MenuItem>
          <img src="/images/Photography/FrioMar/FrioMar1.jpg" alt="Foto 2" />
        </MenuItem>
        <MenuItem>
          <img src="/images/Photography/FrioMar/FrioMar1.jpg" alt="Foto 3" />
        </MenuItem>
        <MenuItem>
          <img src="/images/Photography/FrioMar/FrioMar1.jpg" alt="Foto 4" />
        </MenuItem>
        <MenuItem >
          <img src="/images/Photography/FrioMar/FrioMar1.jpg" alt="Foto 5" />
        </MenuItem>
        <MenuItem >
          <img src="/images/Photography/FrioMar/FrioMar1.jpg" alt="Foto 6" />
        </MenuItem>
      </ImageGrid>

      {/* Contenedor de la descripción */}
      <DescriptionContainer>
        <ProjectTitle>My Art</ProjectTitle>
        <ProjectDescription>
          Sometimes you need to create just to create! 
        </ProjectDescription>
        <div>
      
      <Link to="/">
        <button>Return Home</button>
      </Link>
          
    </div>
      </DescriptionContainer>
      
      <a href="https://www.instagram.com/h0nniex/)" style={{ position: 'absolute', top: '2%', right: '-20%' }}>
        <img src="/images/instagramIcon.png" alt="Instagram" width="10%" />
      </a>
      
    </Container>
    
  );
}

export default MyArt;
