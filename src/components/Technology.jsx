import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BaseSection, GlowBackground } from './shared/BackgroundEffects';

const Section = styled(BaseSection)`
  padding: 6rem 2rem;
  color: white;
  position: relative;
  overflow: hidden;
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
  color: #00FFFF;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  color: rgba(0, 255, 255, 0.9);
  margin-bottom: 2rem;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  perspective: 1000px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const TechCard = styled(motion.div)`
  background: ${({ theme }) => theme.gradients.glassLight};
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 24px;
  padding: 2rem;
  position: relative;
  transform-style: preserve-3d;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.gradients.glassHover};
    border-color: white;
  }
`;

const CardTitle = styled.h4`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
  transform: translateZ(20px);
`;

const CardSubtitle = styled.h5`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
  transform: translateZ(15px);
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  transform: translateZ(10px);
`;

const Feature = styled.li`
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.75rem;
  padding-left: 1.25rem;
  position: relative;

  &::before {
    content: "→";
    color: #00FFFF;
    position: absolute;
    left: 0;
  }
`;

const UseCase = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0, 255, 255, 0.1);
  transform: translateZ(5px);
`;

const UseCaseTitle = styled.h6`
  color: #00FFFF;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Technology = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const technologies = [
    {
      title: "High-Performance Computing Infrastructure",
      subtitle: "Built for Speed and Efficiency",
      description: "Our infrastructure is designed to handle the most demanding computational tasks with ease.",
      features: [
        "Multi-GPU Servers: Powered by NVIDIA RTX 4090 GPUs for superior AI and ML processing",
        "Massive Parallel Processing: Utilize thousands of CUDA cores for faster model training and data analysis",
        "High-Speed Networking: Minimize latency and maximize data throughput with advanced networking solutions"
      ],
      useCase: "Train deep learning models 3x faster, process real-time analytics, or simulate complex systems effortlessly."
    },
    {
      title: "Scalable Cloud Architecture",
      subtitle: "Adapt to Your Needs, Anytime",
      description: "Whether you're a startup or an enterprise, our cloud architecture grows with you.",
      features: [
        "Dynamic Scaling: Instantly add or reduce resources as your needs change",
        "Flexible Storage: Choose between NVMe SSDs, cloud storage, or hybrid setups for optimal performance",
        "Distributed Computing: Leverage distributed systems for enhanced reliability and uptime"
      ],
      useCase: "Run large-scale applications without worrying about hardware limitations."
    },
    {
      title: "Advanced Cooling Systems",
      subtitle: "Efficiency Meets Sustainability",
      description: "Our data centers are equipped with cutting-edge cooling technology to ensure uninterrupted performance while reducing environmental impact.",
      features: [
        "Precision Cooling: Maintain optimal server temperatures under heavy workloads",
        "Energy Efficiency: Minimize power consumption through advanced thermal management",
        "Eco-Friendly Design: Support green initiatives by lowering the carbon footprint of your computing"
      ],
      useCase: "Operate high-performance workloads sustainably without overheating concerns."
    },
    {
      title: "Enhanced Security Framework",
      subtitle: "Your Data, Fully Protected",
      description: "Security is at the core of our operations. CypherBox ensures your data remains safe with:",
      features: [
        "Multi-Layer Encryption: Protect data in transit and at rest with industry-standard protocols",
        "DDoS Protection: Safeguard your applications from cyberattacks with proactive threat detection",
        "Regular Audits: Ensure compliance with regulatory requirements through periodic assessments"
      ],
      useCase: "Deploy sensitive applications with confidence in a secure environment."
    },
    {
      title: "AI-Ready Tools and APIs",
      subtitle: "Simplifying AI and ML Workflows",
      description: "We provide developers with tools and APIs to streamline their projects.",
      features: [
        "Pre-Trained Models: Access libraries of AI models for faster deployment",
        "Custom Workflows: Build and optimize your own machine learning pipelines",
        "Analytics Dashboard: Monitor performance and resource utilization in real time"
      ],
      useCase: "Create an AI-powered recommendation engine with minimal setup time."
    },
    {
      title: "Reliable Uptime and Proactive Monitoring",
      subtitle: "Never Miss a Beat",
      description: "CypherBox guarantees uninterrupted services with:",
      features: [
        "99.99% Uptime SLA: Rest assured that your applications stay online",
        "24/7 Monitoring: Identify and resolve issues before they affect performance",
        "Proactive Maintenance: Ensure peak performance through regular updates and checks"
      ],
      useCase: "Host mission-critical applications without worrying about downtime."
    }
  ];

  return (
    <Section>
      <GlowBackground />
      <Container>
        <Header>
          <Title>Our Technology</Title>
          <Subtitle>The Backbone of Innovation</Subtitle>
          <Description>
            At CypherBox, we leverage cutting-edge technology to provide robust, scalable, 
            and high-performance infrastructure. Our state-of-the-art data centers are optimized 
            for AI, machine learning, and cloud computing, enabling you to unlock the full 
            potential of your projects.
          </Description>
        </Header>

        <TechGrid
          ref={ref}
          as={motion.div}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          onMouseMove={(e) => {
            const cards = e.currentTarget.getElementsByClassName('tech-card');
            for (const card of cards) {
              handleMouseMove(e, card);
            }
          }}
        >
          {technologies.map((tech, index) => (
            <TechCard
              key={index}
              className="tech-card"
              variants={{
                hidden: { opacity: 0, y: 20, rotateX: -10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: {
                    type: "spring",
                    damping: 20,
                    stiffness: 100
                  }
                }
              }}
            >
              <CardTitle>{tech.title}</CardTitle>
              <CardSubtitle>{tech.subtitle}</CardSubtitle>
              <p>{tech.description}</p>
              <FeatureList>
                {tech.features.map((feature, featureIndex) => (
                  <Feature key={featureIndex}>{feature}</Feature>
                ))}
              </FeatureList>
              <UseCase>
                <UseCaseTitle>Example Use Case:</UseCaseTitle>
                <p>{tech.useCase}</p>
              </UseCase>
            </TechCard>
          ))}
        </TechGrid>
      </Container>
    </Section>
  );
};

export default Technology; 