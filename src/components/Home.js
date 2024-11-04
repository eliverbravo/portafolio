import React from 'react';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

// Reseteo global de márgenes y padding
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body, html {
    overflow: hidden; /* Ocultar el scroll */
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
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  position: relative;
`;

const Footer = styled.h2`
  font-size: 1rem;
  font-weight: 100;
  color: white;
  font-family: 'Arial', sans-serif;
  position: absolute;
  top: 95%;
  left: 90%;
`;


// Estilos del título
const Title = styled.h1`
  font-size: 5rem;
  font-weight: 200;
  color: white;
  font-family: 'Pinyon Script', cursive;
  position: absolute;
  top: 2%;
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
  width: 40vw; /* Ajustar el tamaño a un porcentaje de la pantalla */
  height: 80vh;
  background-image: url('/images/woodBoard.png'); 
  background-size: cover;  
  background-position: center; 
  background-repeat: no-repeat;  
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  position: relative;
  padding: 2%;
  left: 32%;
  transform: scale(0.9); /* Escala para que se ajuste a la pantalla */
  transform-origin: center;
`;

// Estilos para cada imagen del menú con posiciones aleatorias y rotaciones
const MenuItem = styled(Link)`
  width: 100px;
  height: auto;
  margin: 1%;
  cursor: pointer;
  position: absolute;

  img {
    width: 100%;
    height: auto;
    border-radius: 2%;
    transition: transform 0.3s ease;
    transform-origin: center;

    &:hover {
      transform: scale(1.3) rotate(5deg); /* Animación al pasar el ratón */
    }
  }
`;

// Estilos específicos para cada elemento para darles un aspecto desordenado
const StyledPhoto = styled(MenuItem)`
  top: -31%;
  left: -30%;
  transform: rotate(-27deg);
  width: 125%
`;

const StyledCD = styled(MenuItem)`
  top: 39%;
  left: 11%;
  transform: rotate(-20deg);
  width: 35%
`;

const StyledIpod = styled(MenuItem)`
  top: 27%;
  left: 41%;
  transform: rotate(12deg);
  width: 15%
`;

const StyledMouse = styled(MenuItem)`
  top: 32%;
  left:38%;
  transform: rotate(-20deg);
  width:57%
`;

const StyledDoll = styled(MenuItem)`
  top: 63%;
  left: 47%;
  transform: rotate(20deg);
  width: 40%
`;

const StyledShades = styled(MenuItem)`
  top: 76%;
  left: 10%;
  transform: rotate(-22deg);
  width: 50%;
`;

function Home() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Eliver Bravo</Title>
        <Subtitle>Digital Media Engineer</Subtitle>

        {/* Contenedor del tablero con los elementos */}
        <Board>
          <StyledPhoto to="/Photography">
            <img src="/images/photo.png" alt="Photography!" />
          </StyledPhoto>
          <StyledCD to="/VideoProduction">
            <img src="/images/cd.png" alt="Video Production!" />
          </StyledCD>
          <StyledIpod to="/Jams">
            <img src="/images/ipod.png" alt="My Jams!" />
          </StyledIpod>
          <StyledMouse to="/Design">
            <img src="/images/mouse.png" alt="Design!" />
          </StyledMouse>
          <StyledDoll to="/AboutMe">
            <img src="/images/sonny.png" alt="About me!" />
          </StyledDoll>
          <StyledShades to="/Contact">
            <img src="/images/shades.png" alt="Contact Me!" />
          </StyledShades>
        </Board>
        
        {/* Enlace a mi Instagram */}
        <a href="https://www.instagram.com/h0nniex/" style={{ position: 'absolute', top: '2%', right: '2%' }}>
          <img src="/images/instagramIcon.png" alt="Instagram" width="50px" />
        </a>
      </Container>
      <Footer>page coded by me,,, heheh</Footer>
      
    </>
  );
}

export default Home;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// // Estilos del contenedor principal
// const Container = styled.div`
//   background-color: #84b572; /* Color verde de fondo */
//   height: 100vh;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 2%;
//   position: relative;
// `;

// // Estilos del título
// const Title = styled.h1`
//   font-size: 5rem;
//   font-weight: 200;
//   color: white;
//   font-family: 'Pinyon Script', cursive;
//   position: absolute;
//   top: -2%;
//   left: 5%;
// `;

// // Estilos del subtítulo
// const Subtitle = styled.h2`
//   font-size: 1.5rem;
//   font-weight: 100;
//   color: white;
//   font-family: 'Arial', sans-serif;
//   position: absolute;
//   top: 12%;
//   left: 8%;
// `;

// // Estilos para el contenedor de imágenes (como el tablero)
// const Board = styled.div`
//   width: 37%; /* Aumentado para que se vea mejor el contenido */
//   height: 80%;
//   background-image: url('/images/woodBoard.png'); 
//   background-size: cover;  
//   background-position: center; 
//   background-repeat: no-repeat;  
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-around;
//   align-items: flex-start;
//   position: relative;
//   padding: 2%;
//   left: 30%;
// `;

// // Estilos para cada imagen del menú con posiciones aleatorias y rotaciones
// const MenuItem = styled(Link)`
//   width: 100px;
//   height: auto;
//   margin: 1%;
//   cursor: pointer;
//   position: absolute;

//   img {
//     width: 100%;
//     height: auto;
//     border-radius: 2%;
//     transition: transform 0.3s ease;
//     transform-origin: center;

//     &:hover {
//       transform: scale(1.3) rotate(5deg);
//        /* Animación al pasar el ratón */
      
//     }
//   }
// `;

// // Estilos específicos para cada elemento para darles un aspecto desordenado
// const StyledPhoto = styled(MenuItem)`
//   top: -20%;
//   left: -30%;
//   transform: rotate(-20deg);
//   width: 125%
// `;

// const StyledCD = styled(MenuItem)`
//   top: 40%;
//   left: 15%;
//   transform: rotate(-15deg);
//   width: 35%
// `;

// const StyledIpod = styled(MenuItem)`
//   top: 21%;
//   left: 28%;
//   transform: rotate(15deg);
//   width: 15%
// `;

// const StyledMouse = styled(MenuItem)`
//   top: 30%;
//   left:35%;
//   transform: rotate(-20deg);
//   width:57%
// `;

// const StyledDoll = styled(MenuItem)`
//   top: 60%;
//   left: 47%;
//   transform: rotate(20deg);
//   width: 40%
// `;

// const StyledShades = styled(MenuItem)`
//   top: 70%;
//   left: 10%;
//   transform: rotate(-20deg);
//   width: 50%;
// `;

// function Home() {
//   return (
//     <Container>
//       <Title>Eliver Bravo</Title>
//       <Subtitle>Digital Media Engineer</Subtitle>

//       {/* Contenedor del tablero con los elementos */}
//       <Board>
//         <StyledPhoto to="/Photography">
//           <img src="/images/photo.png" alt="Photography!" />
//         </StyledPhoto>
//         <StyledCD to="/VideoProduction">
//           <img src="/images/cd.png" alt="Video Production!" />
//         </StyledCD>
//         <StyledIpod to="/Jams">
//           <img src="/images/ipod.png" alt="My Jams!" />
//         </StyledIpod>
//         <StyledMouse to="/Design">
//           <img src="/images/mouse.png" alt="Design!" />
//         </StyledMouse>
//         <StyledDoll to="/AboutMe">
//           <img src="/images/sonny.png" alt="About me!" />
//         </StyledDoll>
//         <StyledShades to="/Contact">
//           <img src="/images/shades.png" alt="Contact Me!" />
//         </StyledShades>
//       </Board>
      
//       {/* Enlace a mi Instagram */}
//       <a href="https://www.instagram.com/h0nniex/" style={{ position: 'absolute', top: '2%', right: '-20%' }}>
//         <img src="/images/instagramIcon.png" alt="Instagram" width="10%" />
//       </a>
//     </Container>
//   );
// }

// export default Home;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// // Estilos del contenedor principal
// const Container = styled.div`
//   background-color: #84b572; /* Color verde de fondo */
//   height: 100vh;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 2%;
//   position: relative;
// `;

// // Estilos del título
// const Title = styled.h1`
//   font-size: 5rem;
//   font-weight: 200;
//   color: white;
//   font-family: 'Pinyon Script', cursive;
//   position: absolute;
//   top: -2%;
//   left: 5%;
// `;

// // Estilos del subtítulo
// const Subtitle = styled.h2`
//   font-size: 1.5rem;
//   font-weight: 100;
//   color: white;
//   font-family: 'Arial', sans-serif;
//   position: absolute;
//   top: 12%;
//   left: 8%;
// `;

// // Estilos para el contenedor de imágenes (como el tablero)
// const Board = styled.div`
//   width:10%;
//   left: 30%;
//   background-image: url('/images/woodBoard.png'); 
//   background-size: cover;  
//   background-position: center; 
//   background-repeat: no-repeat;  
//   padding: 18%;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;
//   position: relative;
// `;

// // Estilos para cada imagen del menú
// const MenuItem = styled(Link)`
//   width: 100px;
//   height: auto;
//   margin: %;
//   cursor: pointer;

//   img {
//     width: 100%;
//     height: auto;
//     border-radius: 2%;
//     transition: transform 0.3s ease;

//     &:hover {
//       transform: scale(1.7); /* Animación al pasar el ratón */
//     }
//   }
// `;

// function Home() {
//   return (
//     <Container>
//       <Title>Eliver Bravo</Title>
//       <Subtitle>Digital Media Engineer</Subtitle>

//       {/* Contenedor del tablero con los elementos */}
//       <Board>
//         <MenuItem to="/Photography">
//           <img src="/images/mockupPhotos.png" alt="Photography!" />
//         </MenuItem>
//         <MenuItem to="/VideoProduction">
//           <img src="/images/cd.png" alt="VideoProduction!" />
//         </MenuItem> 
//         <MenuItem to="/Jams">
//           <img src="/images/ipod.png" alt="MyJams!" />
//         </MenuItem>
//         <MenuItem to="/Design">
//           <img src="/images/mouse.png" alt="Design!" />
//         </MenuItem>
//         <MenuItem to="/AboutMe">
//           <img src="/images/sonny.png" alt="About me!" />
//         </MenuItem>
//         <MenuItem to="/MyArt">
//           <img src="/images/digipen.png" alt="My Art!" />
//         </MenuItem>
//         <MenuItem to="/Contact">
//           <img src="/images/shades.png" alt="Contact Me!" />
//         </MenuItem> 
        
//         {/* Añadir más objetos como enlaces */}
//       </Board>
      
//       {/* Enlace a mi Instagram (¡cambia el enlace a tu cuenta!)
//   */}
//       <a href="https://www.instagram.com/h0nniex/)" style={{ position: 'absolute', top: '2%', right: '-20%' }}>
//         <img src="/images/instagramIcon.png" alt="Instagram" width="10%" />
//       </a>
//     </Container>
//   );
// }

// export default Home;


