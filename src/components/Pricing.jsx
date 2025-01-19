import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Section = styled.section`
  background: 
    linear-gradient(125deg, 
      #2B1055 0%, 
      #1A0B2E 25%, 
      #130922 50%, 
      #1A0B2E 75%, 
      #2B1055 100%
    );
  padding: 6rem 2rem;
  color: white;
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
      ),
      linear-gradient(180deg, 
        rgba(255, 255, 255, 0.2) 0%, 
        transparent 30%, 
        rgba(255, 255, 255, 0.1) 50%, 
        transparent 70%, 
        rgba(255, 255, 255, 0.2) 100%
      );
    pointer-events: none;
    mix-blend-mode: overlay;
    filter: blur(1px);
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

const GlowBackground = styled.div`
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

const ShineOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: 
    linear-gradient(45deg, 
      transparent 0%, 
      rgba(255, 255, 255, 0.1) 30%, 
      rgba(255, 255, 255, 0.15) 50%, 
      rgba(255, 255, 255, 0.1) 70%, 
      transparent 100%
    );
  pointer-events: none;
  mix-blend-mode: overlay;
  animation: shine 8s linear infinite;

  @keyframes shine {
    from {
      transform: translateX(-100%) rotate(45deg);
    }
    to {
      transform: translateX(100%) rotate(45deg);
    }
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
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

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const PriceCard = styled(motion.div)`
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.04) 45%,
    rgba(255, 255, 255, 0.01) 100%
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 24px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.4),
    0 2px 4px rgba(255, 255, 255, 0.05),
    inset 0 2px 4px rgba(255, 255, 255, 0.05);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.05),
      transparent
    );
    transition: 0.5s;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 
      0 12px 40px rgba(0, 0, 0, 0.4),
      0 4px 8px rgba(255, 255, 255, 0.1),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.25);
    background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.12) 0%,
      rgba(255, 255, 255, 0.06) 45%,
      rgba(255, 255, 255, 0.02) 100%
    );
  }

  &::after {
    content: '';
    position: absolute;
    inset: 1px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 24px;
    z-index: -1;
  }
`;

const PlanName = styled.h4`
  font-size: 1.75rem;
  color: white;
  margin-bottom: 0.5rem;
`;

const PlanPrice = styled.div`
  font-size: 2.5rem;
  color: white;
  margin: 1.5rem 0;
  font-weight: bold;

  span {
    font-size: 1rem;
    opacity: 0.7;
  }
`;

const PlanDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  flex: 1;
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

const BestValue = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: white;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const plans = [
  {
    name: "Basic Plan",
    price: "15",
    description: "Ideal for Innovators and Startups",
    features: [
      "Access to a shared GPU server",
      "500 GB of cloud storage",
      "Standard support (9 AM - 6 PM)"
    ],
    bestFor: "Small projects, prototypes, and individual developers"
  },
  {
    name: "Pro Plan",
    price: "30",
    description: "For Growing Teams and Mid-Sized Projects",
    features: [
      "Access to 2x GPU servers (RTX 4090)",
      "2 TB of cloud storage",
      "Priority support (24/7)",
      "Customizable computing options"
    ],
    bestFor: "Startups and mid-sized businesses scaling their AI and ML workloads",
    isBestValue: true
  },
  {
    name: "Enterprise Plan",
    price: "42",
    description: "Designed for Large-Scale Applications",
    features: [
      "Dedicated multi-GPU servers (4x RTX 4090 or higher)",
      "Unlimited cloud storage options",
      "Enterprise-grade security and uptime guarantees",
      "Dedicated account manager and 24/7 elite support"
    ],
    bestFor: "Enterprises running mission-critical applications"
  },
  {
    name: "Custom Plans",
    description: "Tailored Solutions for Unique Needs",
    features: [
      "Dedicated servers with customizable specifications",
      "On-demand scaling options",
      "Advanced analytics and resource monitoring tools"
    ],
    bestFor: "Organizations with specialized requirements",
    isCustom: true
  }
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section>
      <GlowBackground />
      <ShineOverlay />
      <Container>
        <Header>
          <Title>Pricing Plans</Title>
          <Subtitle>Flexible, Transparent, and Scalable</Subtitle>
          <Description>
            At CypherBox, we offer pricing plans designed to meet the diverse needs of developers, 
            startups, enterprises, and institutions. Whether you're starting small or running 
            large-scale operations, our plans are tailored to fit your requirements.
          </Description>
        </Header>

        <PricingGrid
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
        >
          {plans.map((plan, index) => (
            <PriceCard
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut"
                  }
                }
              }}
            >
              {plan.isBestValue && <BestValue>Most Popular</BestValue>}
              <PlanName>{plan.name}</PlanName>
              {!plan.isCustom && (
                <PlanPrice>${plan.price} <span>/ month</span></PlanPrice>
              )}
              <PlanDescription>{plan.description}</PlanDescription>
              <FeatureList>
                {plan.features.map((feature, featureIndex) => (
                  <Feature key={featureIndex}>{feature}</Feature>
                ))}
              </FeatureList>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1rem' }}>
                Best For: {plan.bestFor}
              </p>
            </PriceCard>
          ))}
        </PricingGrid>
      </Container>
    </Section>
  );
};

export default Pricing; 