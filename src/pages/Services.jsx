import styled from 'styled-components';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { BaseSection, GlowBackground } from '../components/shared/BackgroundEffects';

const ServicesSection = styled(BaseSection)`
  padding: 6rem 2rem;
  color: white;
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

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ServicesTrack = styled(motion.div)`
  display: flex;
  gap: 2rem;
  padding: 0 2rem;
  white-space: nowrap;

  > div {
    animation: scroll 50s linear infinite;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const ServicesContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  padding: 2rem 0;

  &:hover ${ServicesTrack} > div {
    animation-play-state: paused;
  }
`;

const ServicesInner = styled.div`
  display: flex;
  gap: 2rem;
`;

const ServiceCard = styled(motion.div)`
  background: rgba(0, 255, 255, 0.05);
  border: 2px solid #00FFFF;
  border-radius: 12px;
  padding: 2rem;
  min-width: 400px;
  flex-shrink: 0;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.5),
              inset 0 0 20px rgba(0, 255, 255, 0.1);

  &:hover {
    background: rgba(0, 255, 255, 0.1);
    border-color: white;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.6),
                inset 0 0 30px rgba(0, 255, 255, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-width: 300px;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.75rem;
  color: #00FFFF;
  margin-bottom: 1rem;
`;

const ServiceSubtitle = styled.h4`
  font-size: 1.25rem;
  color: rgba(0, 255, 255, 0.9);
  margin-bottom: 2rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);

  &:before {
    content: "•";
    color: #00FFFF;
    margin-right: 1rem;
  }
`;

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const services = [
    {
      title: "AI Computing Power",
      subtitle: "Accelerate Your AI and ML Workloads",
      description: "Our data centers are optimized for artificial intelligence and machine learning applications.",
      features: [
        "High-performance multi-GPU servers (e.g., RTX 4090-based setups)",
        "Seamless processing of complex models and datasets",
        "Scalable computing power tailored to your project's size and scope"
      ]
    },
    {
      title: "Cloud Storage Solutions",
      subtitle: "Secure, Scalable, and Reliable",
      description: "Store, access, and manage your data with ease using our cloud storage services.",
      features: [
        "Flexible Plans: Options for startups, enterprises, and educational institutions",
        "Enhanced Security: Safeguard your data with robust encryption and fail-safe mechanisms",
        "Global Accessibility: Access your data anytime, anywhere"
      ]
    },
    {
      title: "Customizable Data Solutions",
      subtitle: "Dedicated Resources, Tailored to Your Needs",
      description: "We understand that every business has unique requirements. That's why we offer customizable solutions:",
      features: [
        "Enterprise-grade private cloud setups",
        "Dedicated GPU servers for specialized workloads",
        "On-demand scaling for fluctuating needs"
      ]
    },
    {
      title: "Developer Tools and APIs",
      subtitle: "Empowering the Innovators",
      description: "CypherBox provides easy-to-integrate developer tools and APIs for a seamless experience:",
      features: [
        "Access to GPU computing clusters",
        "Tools for optimizing AI and ML workflows",
        "Detailed analytics and usage reports"
      ]
    },
    {
      title: "Managed Services",
      subtitle: "Focus on Innovation, Leave the Rest to Us",
      description: "We offer end-to-end managed services to ensure smooth operations:",
      features: [
        "24/7 Support: Expert assistance whenever you need it",
        "Proactive Monitoring: Identify and resolve issues before they affect performance",
        "Maintenance and Upgrades: Keep your infrastructure running at peak efficiency"
      ]
    },
    {
      title: "Sustainable Solutions",
      subtitle: "Green Technology for a Better Tomorrow",
      description: "CypherBox is committed to sustainability:",
      features: [
        "Energy-efficient cooling systems",
        "Optimization for reduced power consumption"
      ]
    }
  ];

  return (
    <ServicesSection ref={ref}>
      <GlowBackground />
      <Container>
        <Header>
          <Title>Our Services</Title>
          <Subtitle>
            At CypherBox, we provide cutting-edge services designed to empower innovators, 
            businesses, and institutions. Our tailored offerings ensure high performance, 
            scalability, and reliability for your most demanding projects.
          </Subtitle>
        </Header>

        <ServicesContainer>
          <ServicesTrack>
            {/* First set of cards */}
            <ServicesInner>
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.2 }}
                >
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceSubtitle>{service.subtitle}</ServiceSubtitle>
                  <p>{service.description}</p>
                  <FeatureList>
                    {service.features.map((feature, featureIndex) => (
                      <FeatureItem key={featureIndex}>
                        {feature}
                      </FeatureItem>
                    ))}
                  </FeatureList>
                </ServiceCard>
              ))}
            </ServicesInner>
            {/* Duplicate set for seamless loop */}
            <ServicesInner>
              {services.map((service, index) => (
                <ServiceCard 
                  key={`duplicate-${index}`}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.2 }}
                >
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceSubtitle>{service.subtitle}</ServiceSubtitle>
                  <p>{service.description}</p>
                  <FeatureList>
                    {service.features.map((feature, featureIndex) => (
                      <FeatureItem key={featureIndex}>
                        {feature}
                      </FeatureItem>
                    ))}
                  </FeatureList>
                </ServiceCard>
              ))}
            </ServicesInner>
          </ServicesTrack>
        </ServicesContainer>
      </Container>
    </ServicesSection>
  );
};

export default Services; 