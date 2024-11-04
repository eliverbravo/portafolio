import React from 'react';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

// Reseteo global de márgenes y padding para asegurar que nada sobresalga de los límites de la pantalla
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

// Estilos del contenedor principal
const Container = styled.div`
  background-color: #84b572; /* Color verde de fondo */
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
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
  left: 3%;
`;

const MenuTitle = styled.h2`
  font-size: 2vw;  /* Escalado dinámico con viewport */
  font-weight: 200;
  color: white;
  font-family: 'Arial', sans-serif;
  position: absolute;
  top: 12%;
  left: 30%;
`;

// Estilos del subtítulo
const Subtitle = styled.h2`
  font-size: 1.5vw; /* Escalado dinámico con viewport */
  font-weight: 100;
  color: white;
  font-family: 'Arial', sans-serif;
  position: absolute;
  top: 13%;
  left: 6%;
`;

// Estilos del contenedor para organizar las fotos (grid)
const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* Tres columnas */
  grid-gap: 2vw;  /* Espacio entre las fotos en unidades relativas al viewport */
  align-items: center;
  width: 60vw;  /* Tamaño relativo al contenedor principal */
  margin-top: 10vh;  /* Ajuste de margen superior para centrado */
  padding: 2vw;
`;

// Estilos para cada elemento clickeable de la galería
const PhotoLink = styled(Link)`
  width: 15vw;  /* Tamaño relativo a la ventana gráfica (viewport) */
  height: 15vw;
  display: block;
  border-radius: 50%;
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Estilos del botón para volver a la página de inicio
const ReturnButton = styled.button`
  margin-top: 2vw;
  padding: 0.5vw 1vw;
  font-size: 1vw;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  color: #84b572;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #76a865;
  }
`;

function Photography() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Eliver Bravo</Title>
        <Subtitle>Digital Media Engineer</Subtitle>
        <MenuTitle>Click to see more about my Photography Projects! ;3</MenuTitle>

        {/* Contenedor de fotos clickeables en grid */}
        <PhotoGrid>
          <PhotoLink to="/Photography1">
            <img src="/images/Photography/FrioMar/FrioMar1.jpg" alt="Foto 1" />
          </PhotoLink>
          {/* <PhotoLink to="/page2">
            <img src="/images/Photography/FrioMar/FrioMar1.jpg" alt="Foto 2" />
          </PhotoLink>
          <PhotoLink to="/page3">
            <img src="/images/Photography/FrioMar/FrioMar1.jpg" alt="Foto 3" />
          </PhotoLink>
          <PhotoLink to="/page4">
            <img src="/images/Photography/FrioMar/FrioMar1.jpg" alt="Foto 4" />
          </PhotoLink>
          <PhotoLink to="/page5">
            <img src="/images/Photography/FrioMar/FrioMar1.jpg" alt="Foto 5" />
          </PhotoLink>
          <PhotoLink to="/page6">
            <img src="/images/Photography/FrioMar/FrioMar1.jpg" alt="Foto 6" />
          </PhotoLink> */}
        </PhotoGrid>

        {/* Botón para volver a la página de inicio */}
        <Link to="/">
          <ReturnButton>Return Home</ReturnButton>
        </Link>
        
        {/* Enlace a Instagram */}
        <a href="https://www.instagram.com/h0nniex/" style={{ position: 'absolute', top: '2%', right: '2%' }}>
          <img src="/images/instagramIcon.png" alt="Instagram" width="40px" />
        </a>
      </Container>
    </>
  );
}

export default Photography;
