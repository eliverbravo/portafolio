// CustomCursor.js
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Animación de parpadeo para las estrellas
const twinkle = keyframes`
  0%, 100% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
`;

// Componente estilizado para cada estrella
const Star = styled.div`
  position: absolute;
  width: 8px; /* Tamaño de cada estrella */
  height: 8px;
  background-color: rgba(15, 10, 222);, 1; /* Color amarillo brillante */
  border-radius: 50%; /* Hacerlo redondo */
  box-shadow: 0 0 5px rgba(255, 255, 0, 0.9); /* Efecto de destello */
  animation: ${twinkle} 1s infinite; /* Efecto de parpadeo */
  pointer-events: none; /* No debe interferir con otros elementos */
`;

const CustomCursor = () => {
  const [cursorStars, setCursorStars] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Crear una nueva estrella en la posición del cursor
      const star = {
        left: `${e.pageX}px`,
        top: `${e.pageY}px`,
        id: Math.random(), // Usar un id único para cada estrella
      };

      // Limitar el número de estrellas en pantalla
      setCursorStars((prevStars) => {
        const updatedStars = [...prevStars, star];
        // Limitar a un máximo de 30 estrellas
        if (updatedStars.length > 30) {
          updatedStars.shift(); // Eliminar la estrella más antigua
        }
        return updatedStars;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {cursorStars.map((star) => (
        <Star key={star.id} style={{ left: star.left, top: star.top }} />
      ))}
    </>
  );
};

export default CustomCursor;