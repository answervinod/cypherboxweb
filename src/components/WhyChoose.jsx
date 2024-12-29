import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BaseSection, GlowBackground } from './shared/BackgroundEffects';

const WhyChooseSection = styled(BaseSection)`
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

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Grid = styled.div`
  position: relative;
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled(motion.div)`
  margin: 0.5rem 0;
  position: relative;
  width: 100%;
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.gradients.glassLight};
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 2rem;
  position: relative;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4),
              0 2px 4px rgba(255, 255, 255, 0.05),
              inset 0 2px 4px rgba(255, 255, 255, 0.05);
  animation: glowing 3s infinite;
  height: 280px;
  display: flex;
  flex-direction: column;

  &:hover {
    background: ${({ theme }) => theme.gradients.glassHover};
    border-color: white;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4),
                0 4px 8px rgba(255, 255, 255, 0.1),
                inset 0 2px 4px rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
  }

  @keyframes glowing {
    0% {
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4),
                  0 2px 4px rgba(255, 255, 255, 0.05),
                  inset 0 2px 4px rgba(255, 255, 255, 0.05);
    }
    50% {
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4),
                  0 4px 8px rgba(255, 255, 255, 0.1),
                  inset 0 2px 4px rgba(255, 255, 255, 0.1);
    }
    100% {
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4),
                  0 2px 4px rgba(255, 255, 255, 0.05),
                  inset 0 2px 4px rgba(255, 255, 255, 0.05);
    }
  }
`;

const ItemTitle = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 0.75rem;
  flex-shrink: 0;
`;

const BenefitText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  margin-top: 0.75rem;
  font-size: 0.95rem;
  flex-shrink: 0;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
  flex: 1;
  overflow-y: auto;
`;

const Feature = styled.li`
  margin-bottom: 0.25rem;
  padding-left: 1.5rem;
  position: relative;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;

  &::before {
    content: "•";
    color: white;
    position: absolute;
    left: 0;
  }
`;

const WhyChoose = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = [
    {
      title: "High-Performance Infrastructure",
      features: [
        "Multi-GPU servers designed for AI and ML workloads",
        "High-speed networking for seamless data flow",
        "Advanced cooling systems for optimal performance"
      ],
      benefit: "Benefit: Run your most demanding applications without delays or downtime."
    },
    {
      title: "Scalable and Flexible Solutions",
      features: [
        "Choose from a range of subscription models to fit your requirements",
        "Scale up or down effortlessly as your projects grow or change"
      ],
      benefit: "Benefit: Pay only for what you need, ensuring cost-efficiency."
    },
    {
      title: "Localized Expertise, Global Standards",
      features: [
        "Tailored solutions that address local challenges",
        "Infrastructure designed for Indian startups, enterprises, and institutions"
      ],
      benefit: "Benefit: Access world-class services with localized support."
    },
    {
      title: "Dedicated Support and Reliability",
      features: [
        "24/7 expert support for all technical needs",
        "Proactive monitoring to prevent disruptions",
        "Maintenance services to keep your operations running smoothly"
      ],
      benefit: "Benefit: Focus on innovation while we handle the rest."
    },
    {
      title: "Cost-Effective and Transparent Pricing",
      features: [
        "Competitive pricing compared to traditional global providers",
        "Clear, transparent subscription models with no hidden costs"
      ],
      benefit: "Benefit: Achieve more with a predictable, affordable budget."
    },
    {
      title: "Commitment to Sustainability",
      features: [
        "Energy-efficient systems to reduce environmental impact",
        "Support for green technology and eco-friendly initiatives"
      ],
      benefit: "Benefit: Contribute to a sustainable future while achieving your goals."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <WhyChooseSection>
      <GlowBackground />
      <Container>
        <Header>
          <Title>Why Choose CypherBox?</Title>
          <Subtitle>
            Empowering Innovation with Scalable, Reliable, and Tailored Solutions
          </Subtitle>
          <p style={{ marginTop: '1rem', color: 'rgba(255, 255, 255, 0.9)' }}>
            CypherBox stands out as your trusted partner in AI and cloud computing. 
            Here's why innovators, enterprises, and institutions choose us:
          </p>
        </Header>

        <Grid ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ display: 'contents' }}
          >
            {items.map((item, index) => (
              <GridItem 
                key={index}
                variants={itemVariants}
              >
                <Card>
                  <ItemTitle>{item.title}</ItemTitle>
                  <FeatureList>
                    {item.features.map((feature, featureIndex) => (
                      <Feature key={featureIndex}>{feature}</Feature>
                    ))}
                  </FeatureList>
                  <BenefitText>{item.benefit}</BenefitText>
                </Card>
              </GridItem>
            ))}
          </motion.div>
        </Grid>
      </Container>
    </WhyChooseSection>
  );
};

export default WhyChoose; 