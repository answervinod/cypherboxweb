import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 6rem 2rem;
  color: white;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.purple};
  margin-bottom: 1rem;
`;

const Subtitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
`;

const BentoCard = styled(motion.div)`
  background: rgba(111, 66, 193, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.purple};
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(111, 66, 193, 0.15);
    transform: translateY(-5px);
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const CardTitle = styled.h4`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.purple};
  margin-bottom: 1rem;
`;

const CardText = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const WhyChooseGrid = styled.div`
  grid-column: span 12;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const About = () => {
  return (
    <AboutSection>
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
              <BentoCard>
                <CardTitle>High-Performance Computing</CardTitle>
                <CardText>
                  CypherBox specializes in providing robust computing solutions for AI and machine learning 
                  applications. From training complex models to running large-scale simulations, our 
                  infrastructure is built to handle the heaviest workloads.
                </CardText>
              </BentoCard>

              <BentoCard>
                <CardTitle>Cloud Storage Solutions</CardTitle>
                <CardText>
                  We offer scalable and secure cloud storage that grows with your needs. Whether you're a 
                  startup or a large enterprise, our solutions are designed to adapt to your requirements.
                </CardText>
              </BentoCard>

              <BentoCard>
                <CardTitle>Customizable Data Services</CardTitle>
                <CardText>
                  Tailored solutions for enterprises and institutions seeking dedicated resources for 
                  specialized projects.
                </CardText>
              </BentoCard>
            </WhatWeDoGrid>
          </BentoCard>

          <BentoCard style={{ gridColumn: 'span 12' }}>
            <CardTitle>Why Choose CypherBox</CardTitle>
            <WhyChooseGrid>
              {[
                'Localized Expertise',
                'Cost-Effective Solutions',
                'Cutting-Edge Technology',
                'Sustainability at Heart',
                'Seamless Support'
              ].map((item) => (
                <BentoCard key={item}>
                  <CardTitle>{item}</CardTitle>
                </BentoCard>
              ))}
            </WhyChooseGrid>
          </BentoCard>
        </BentoGrid>
      </Container>
    </AboutSection>
  );
};

export default About; 