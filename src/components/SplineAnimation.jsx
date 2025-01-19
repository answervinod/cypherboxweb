import { useState, useEffect } from 'react';
import styled from 'styled-components';

const AnimationFrame = styled.iframe`
  width: 90%;
  height: 100%;
  border: none;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  clip-path: inset(0 0 10% 0);
  opacity: ${({ isLoaded }) => (isLoaded ? '1' : '0')};
  transition: opacity 0.3s ease;
`;

const SplineAnimation = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <AnimationFrame 
      src='https://my.spline.design/interfaceii-df2d3333797f27b05e95be49d9150480/'
      frameBorder='0'
      title="Interface Animation"
      onLoad={handleLoad}
      isLoaded={isLoaded}
    />
  );
};

export default SplineAnimation; 