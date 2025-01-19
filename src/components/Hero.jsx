import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.header`
  height: 100vh;
  display: flex;
  align-items: flex-start;
  padding: 8rem 2rem;
  position: relative;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 95%);
  background: ${({ theme }) => theme.gradients.purple};
  margin-bottom: -10vh;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 40%),
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
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to bottom, transparent, ${({ theme }) => theme.colors.darkPurple});
    pointer-events: none;
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

const AnimationBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.8;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    transform: scale(1.2);
    filter: hue-rotate(45deg);
  }
`;

const HeroContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  padding-top: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column-reverse;
    text-align: center;
    padding: 0 1rem;
    padding-top: 50px;
  }
`;

const ContentContainer = styled(motion.div)`
  flex: 1;
  padding: 2rem;
  max-width: 800px;
  margin-left: 0;
  margin-top: 180px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 0;
    margin-top: 120px;
    text-align: center;
  }
`;

const Headline = styled(motion.h1)`
  font-size: clamp(2rem, 2.5vw, 2.5rem);
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: white;
  line-height: 1.2;
  text-align: left;
  max-width: 750px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    text-align: center;
    font-size: clamp(2rem, 2.5vw, 2.5rem);
  }
`;

const HeadlineSpan = styled.span`
  display: block;
  white-space: nowrap;
`;

const Subheadline = styled(motion.p)`
  font-size: 1.1rem;
  color: white;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  max-width: 600px;
`;

const CTAButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%);
  color: #1A0B2E;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.15);
  }
`;

const GlowBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.3) 0%, transparent 60%),
              radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.3) 0%, transparent 60%),
              radial-gradient(circle at 50% 50%, rgba(43, 16, 85, 0.9) 0%, transparent 70%);
  pointer-events: none;
  opacity: 0.4;
  mix-blend-mode: screen;
  filter: blur(30px);
`;

const Hero = () => {
  const [iframeKey, setIframeKey] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setIframeKey(Date.now());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <HeroSection>
      <GlowBackground />
      <AnimationBackground>
        <iframe 
          key={iframeKey}
          src='https://my.spline.design/interfaceii-df2d3333797f27b05e95be49d9150480/' 
          frameBorder='0'
          title="Interface Animation"
        />
      </AnimationBackground>
      <HeroContainer>
        <ContentContainer
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Headline variants={itemVariants}>
            <HeadlineSpan>Powering the Future of</HeadlineSpan>
            <HeadlineSpan>AI and Cloud Computing</HeadlineSpan>
          </Headline>
          <Subheadline variants={itemVariants}>
            High-performance, scalable, and reliable data centers tailored for innovators, 
            enterprises, and educational institutions.
          </Subheadline>
          <CTAButton variants={itemVariants}>
            Explore More
          </CTAButton>
        </ContentContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero; 