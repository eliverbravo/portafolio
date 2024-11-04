import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import styled from 'styled-components';

const Container = styled.div`
// Estilos del contenedor principal
background-color: #84b572; /* Color verde de fondo */
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: relative;
`;


// Estilos del título
const Title = styled.h1`
  font-size: 5rem;
  font-weight: 200;
  color: white;
  font-family: 'Pinyon Script', cursive;
  position: absolute;
  top: -2%;
  left: 5%;
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

// Estilos para el contenedor de imágenes (como el tablero)
const Board = styled.div`
  width:10%;
  height: 10%;
  left: 30%;
  background-color: #84b572;
  background-size: cover;  
  background-repeat: no-repeat;  
  padding: 18%;
  display: flex;
  flex-wrap: wrap;
  justify-content: Left;
  align-items: Left;
  position: relative;
`;

const ProjectImage = styled.div`
  width: 100px;
  height: auto;
  margin: 5%;
  align-items: left;
`;
function Contact() {
  return (
    <Container>
      <Title>Eliver Bravo</Title>
        <Subtitle>Digital Media Engineer</Subtitle>
          <Board>
            <ProjectImage>Hola</ProjectImage>
        <div>
      
      <Link to="/">
        <button>Return Home</button>
      </Link>
          
    </div>
    </Board>      
  
    </Container>
    
  );
}

export default Contact;