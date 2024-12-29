import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BaseSection, GlowBackground } from './shared/BackgroundEffects';

const Section = styled(BaseSection)`
  padding: 6rem 2rem;
  color: white;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 6rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: white;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-top: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.gradients.glassLight};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 24px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4),
              0 2px 4px rgba(255, 255, 255, 0.05),
              inset 0 2px 4px rgba(255, 255, 255, 0.05);

  &:hover {
    background: ${({ theme }) => theme.gradients.glassHover};
    border-color: white;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4),
                0 4px 8px rgba(255, 255, 255, 0.1),
                inset 0 2px 4px rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h4`
  font-size: 1.75rem;
  color: white;
  margin-bottom: 0.5rem;
`;

const CardSubtitle = styled.h5`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`;

const Feature = styled.li`
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: "✓";
    color: white;
    position: absolute;
    left: 0;
  }
`;

const UseCase = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const UseCaseTitle = styled.h6`
  color: white;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const WhoWeServe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const audiences = [
    {
      title: "For Developers and Startups",
      subtitle: "Unleashing Innovation, One Idea at a Time",
      description: "Startups and developers often face barriers like high infrastructure costs and limited resources. CypherBox bridges this gap with:",
      features: [
        "Affordable Computing Power: Scalable plans for every stage of your growth journey",
        "Simplified AI and ML Development: Tools, APIs, and multi-GPU infrastructure for seamless workflows",
        "Focus on Innovation: Forget infrastructure headaches and concentrate on building groundbreaking products"
      ],
      useCase: "Build AI-powered apps, train machine learning models, or test innovative cloud-based solutions with ease."
    },
    {
      title: "For Educational Institutions",
      subtitle: "Fostering Learning and Research Excellence",
      description: "Modern education and research demand robust technology. CypherBox offers:",
      features: [
        "Research-Grade Infrastructure: Dedicated servers for running AI simulations and ML experiments",
        "Budget-Friendly Solutions: Scalable plans designed for universities and research organizations",
        "Secure Collaboration: Enable seamless data sharing between teams while ensuring safety"
      ],
      useCase: "Equip students and researchers with the tools they need to lead in AI innovation."
    },
    {
      title: "For Enterprises",
      subtitle: "Driving Business Transformation",
      description: "Large-scale operations require a trusted partner to handle complex workloads. CypherBox delivers:",
      features: [
        "Enterprise-Grade Security: Ensure the safety of mission-critical data and applications",
        "Unmatched Scalability: Adapt to your growing needs with flexible subscription models",
        "Optimized for AI Workloads: Tailor-made solutions for data-heavy processes"
      ],
      useCase: "Power AI-driven customer service, advanced analytics, or automated decision-making."
    },
    {
      title: "For Tech Enthusiasts and Hobbyists",
      subtitle: "Explore, Experiment, Excel",
      description: "Innovators and enthusiasts need a playground to test their ideas. CypherBox provides:",
      features: [
        "On-Demand Resources: Affordable access to high-performance infrastructure",
        "Learning-Friendly Environment: Tools and resources for exploring AI and ML technologies",
        "Scalable Plans: Start small and grow as your needs expand"
      ],
      useCase: "Train a personal AI assistant, experiment with ML models, or contribute to open-source projects."
    }
  ];

  return (
    <Section>
      <GlowBackground />
      <Container>
        <Header>
          <Title>Who We Serve</Title>
          <Subtitle>Empowering Innovators Across All Industries</Subtitle>
          <Description>
            CypherBox is designed to cater to the unique needs of a wide range of audiences. 
            From startups shaping the future to enterprises running mission-critical applications, 
            we provide reliable and scalable infrastructure solutions tailored to your goals.
          </Description>
        </Header>

        <Grid
          ref={ref}
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {audiences.map((audience, index) => (
            <Card key={index} variants={cardVariants}>
              <CardTitle>{audience.title}</CardTitle>
              <CardSubtitle>{audience.subtitle}</CardSubtitle>
              <p>{audience.description}</p>
              <FeatureList>
                {audience.features.map((feature, featureIndex) => (
                  <Feature key={featureIndex}>{feature}</Feature>
                ))}
              </FeatureList>
              <UseCase>
                <UseCaseTitle>Example Use Case:</UseCaseTitle>
                <p>{audience.useCase}</p>
              </UseCase>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default WhoWeServe; 