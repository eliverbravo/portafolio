import React, { useState } from 'react';
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

// Contenedor para la imagen activa del slideshow
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 35vw;
  top:17%;
`;

// Botones de navegación para el slideshow
const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.6);
  border: none;
  padding: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: #84b572;
  z-index: 10;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

const PrevButton = styled(NavButton)`
  left: 0;
`;

const NextButton = styled(NavButton)`
  right: 0;
`;

// Estilos para la imagen activa
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
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
  margin-top: 3%;
  &:hover {
    background-color: #76a865;
  }
`;

function Design1() {
  const images = [
    "/images/Design/Design1/dialz1.jpg",
    "/images/Design/Design1/dialz2.jpg",
    "/images/Design/Design1/dialz3.jpg",
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Eliver Bravo</Title>
        <Subtitle>Digital Media Engineer</Subtitle>
        
        {/* Slideshow de imágenes */}
        <ImageContainer>
          <PrevButton onClick={goToPreviousSlide}>{"<"}</PrevButton>
          <Image src={images[currentIndex]} alt={`Foto ${currentIndex + 1}`} />
          <NextButton onClick={goToNextSlide}>{">"}</NextButton>
        </ImageContainer>

        {/* Contenedor de la descripción */}
        <DescriptionContainer>
          <ProjectTitle>Dialzters (2023)</ProjectTitle>
          <ProjectDescription>
            Design for Social Media.
          </ProjectDescription>
          
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

export default Design1;
