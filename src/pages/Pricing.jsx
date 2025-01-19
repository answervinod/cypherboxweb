import AnimationBackground from '../components/AnimationBackground';

const PricingSection = styled.section`
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
`;

const Pricing = () => {
  return (
    <PricingSection>
      <AnimationBackground />
      <Container>
        {/* Your content here */}
      </Container>
    </PricingSection>
  );
};

export default Pricing; 