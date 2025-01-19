import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BaseSection, GlowBackground } from '../components/shared/BackgroundEffects';
import AnimationBackground from '../components/AnimationBackground';

const AboutSection = styled(BaseSection)`
  padding: 0 2rem 6rem;
  color: white;
  margin-top: -5vh;
  position: relative;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20vh;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.darkPurple},
      transparent
    );
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 10rem;
  position: relative;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h3`
  font-size: 2rem;
  color: white;
  margin-bottom: 2rem;
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
`;

const BentoCard = styled(motion.div)`
  background: ${({ theme }) => theme.gradients.glassLight};
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4),
              0 2px 4px rgba(255, 255, 255, 0.05),
              inset 0 2px 4px rgba(255, 255, 255, 0.05);

  &:hover {
    background: ${({ theme }) => theme.gradients.glassHover};
    border-color: white;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4),
                0 4px 8px rgba(255, 255, 255, 0.1),
                inset 0 2px 4px rgba(255, 255, 255, 0.1);
  }
`;

const MainCard = styled(BentoCard)`
  grid-column: span 12;
  text-align: center;
  padding: 3rem;
`;

const MissionCard = styled(BentoCard)`
  grid-column: span 6;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-column: span 12;
  }
`;

const WhatWeDoGrid = styled.div`
  grid-column: span 12;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.75rem;
  color: white;
  margin-bottom: 1rem;
  text-align: center;
`;

const CardText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: 1rem;
  text-align: center;
`;

const WhyChooseGrid = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 2rem;
  text-align: left;
`;

const WhyChooseItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);

  &::before {
    content: "✓";
    color: white;
    position: absolute;
    left: 0;
  }
`;

const WhyChooseTitle = styled(CardTitle)`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const WhyChooseSubtitle = styled(CardText)`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
`;

const WhatWeDoCard = styled(BentoCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;

  ${CardTitle} {
    font-size: 1.4rem;
  }
`;

const WhatWeDoTitle = styled(CardTitle)`
  font-size: 1.4rem;
`;

const About = () => {
  return (
    <AboutSection>
      <AnimationBackground />
      <Container>
        <Header>
          <Title>About CypherBox</Title>
          <Subtitle>Powering the Future of AI and Cloud Computing</Subtitle>
        </Header>

        <BentoGrid>
          <MainCard>
            <CardText>
              At CypherBox, we're building the infrastructure of tomorrow. Our state-of-the-art data centers 
              are designed to meet the growing demand for high-performance AI computing and scalable cloud 
              storage solutions. With a focus on innovation, reliability, and sustainability, we empower 
              businesses, developers, and educational institutions to achieve more.
            </CardText>
          </MainCard>

          <MissionCard>
            <CardTitle>Our Mission</CardTitle>
            <CardText>
              To revolutionize data center services by providing tailored, high-performance infrastructure 
              that fuels the next wave of technological advancements in AI, machine learning, and cloud computing.
            </CardText>
          </MissionCard>

          <MissionCard>
            <CardTitle>Our Vision</CardTitle>
            <CardText>
              A world where computing power is no longer a bottleneck to innovation. CypherBox aims to be 
              the go-to partner for all industries needing scalable, cost-effective, and secure data solutions.
            </CardText>
          </MissionCard>

          <BentoCard style={{ gridColumn: 'span 12' }}>
            <CardTitle>What We Do</CardTitle>
            <WhatWeDoGrid>
              <WhatWeDoCard>
                <WhatWeDoTitle>High-Performance Computing</WhatWeDoTitle>
                <CardText>
                  CypherBox specializes in providing robust computing solutions for AI and machine learning 
                  applications. From training complex models to running large-scale simulations, our 
                  infrastructure is built to handle the heaviest workloads.
                </CardText>
              </WhatWeDoCard>

              <WhatWeDoCard>
                <WhatWeDoTitle>Cloud Storage Solutions</WhatWeDoTitle>
                <CardText>
                  We offer scalable and secure cloud storage that grows with your needs. Whether you're a 
                  startup or a large enterprise, our solutions are designed to adapt to your requirements.
                </CardText>
              </WhatWeDoCard>

              <WhatWeDoCard>
                <WhatWeDoTitle>Customizable Data Services</WhatWeDoTitle>
                <CardText>
                  Tailored solutions for enterprises and institutions seeking dedicated resources for 
                  specialized projects.
                </CardText>
              </WhatWeDoCard>
            </WhatWeDoGrid>
          </BentoCard>

          <BentoCard style={{ gridColumn: 'span 12' }}>
            <div style={{ marginBottom: '2rem', marginLeft: '1rem' }}>
              <CardTitle style={{ textAlign: 'left' }}>Why Choose CypherBox</CardTitle>
            </div>
            <WhyChooseGrid>
              {[
                'Localized Expertise',
                'Cost-Effective Solutions',
                'Cutting-Edge Technology',
                'Sustainability at Heart',
                'Seamless Support'
              ].map((item) => (
                <WhyChooseItem key={item}>
                  {item}
                </WhyChooseItem>
              ))}
            </WhyChooseGrid>
          </BentoCard>
        </BentoGrid>
      </Container>
    </AboutSection>
  );
};

export default About; 