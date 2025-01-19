import styled from 'styled-components';
import { BaseSection } from '../components/shared/BackgroundEffects';
import { useState, useEffect } from 'react';

const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
`;

const AITwinSection = styled(BaseSection)`
  min-height: 100vh;
  padding: 0;
  margin: 0;
  overflow: hidden;
  padding-top: 80px;
`;

const AnimationContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    transform: scale(1.02);
    pointer-events: none;
  }
`;

const AITwin = () => {
  const [iframeKey, setIframeKey] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setIframeKey(Date.now());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <PageWrapper>
      <AITwinSection>
        <AnimationContainer>
          <iframe 
            key={iframeKey}
            src='https://my.spline.design/retrofuturismbganimation-de54867cb5a1220f57698ad8bdfb090f/'
            title="AI Digital Twin Animation"
            frameBorder="0"
          />
        </AnimationContainer>
      </AITwinSection>
    </PageWrapper>
  );
};

export default AITwin; 