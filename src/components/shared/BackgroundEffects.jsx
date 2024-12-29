import styled from 'styled-components';

export const GlowBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.3) 0%, transparent 60%),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.3) 0%, transparent 60%),
    radial-gradient(circle at 50% 50%, rgba(43, 16, 85, 0.9) 0%, transparent 70%);
  pointer-events: none;
  opacity: 0.4;
  mix-blend-mode: screen;
  filter: blur(30px);
`;

export const BaseSection = styled.section`
  background: ${({ theme }) => theme.gradients.purple};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: 
      radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 40%),
      radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 70% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 50%);
    animation: rotate 30s linear infinite;
    pointer-events: none;
    opacity: 0.4;
    mix-blend-mode: soft-light;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: 
      linear-gradient(90deg, 
        rgba(255, 255, 255, 0.15) 0%, 
        transparent 20%, 
        rgba(255, 255, 255, 0.1) 50%, 
        transparent 80%, 
        rgba(255, 255, 255, 0.15) 100%
      );
    pointer-events: none;
    mix-blend-mode: overlay;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`; 