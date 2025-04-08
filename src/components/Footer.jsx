import styled from 'styled-components';
import { BaseSection } from './shared/BackgroundEffects';
import { motion } from 'framer-motion';

const WaveDivider = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  overflow: hidden;
  margin-top: -100px;

  svg {
    position: absolute;
    width: 100%;
    height: 100px;
    fill: white;
  }

  .wave1 {
    opacity: 0.7;
    animation: moveWave1 15s linear infinite;
  }

  .wave2 {
    opacity: 0.5;
    animation: moveWave2 7s linear infinite;
  }

  @keyframes moveWave1 {
    0% { transform: translateX(0); }
    50% { transform: translateX(-25%); }
    100% { transform: translateX(0); }
  }

  @keyframes moveWave2 {
    0% { transform: translateX(0); }
    50% { transform: translateX(25%); }
    100% { transform: translateX(0); }
  }
`;

const FooterSection = styled(BaseSection)`
  padding: 3rem 2rem;
  color: ${({ theme }) => theme.colors.darkPurple};
  background: white;
  position: relative;
`;

const FooterContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const NewsletterSection = styled.div`
  flex: 1;
  text-align: left;
  max-width: 500px;
`;

const NewsletterTitle = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.darkPurple};
  text-align: left;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid rgba(43, 16, 85, 0.2);
  border-radius: 8px;
  background: rgba(43, 16, 85, 0.05);
  color: ${({ theme }) => theme.colors.darkPurple};
  font-size: 0.9rem;
  backdrop-filter: blur(10px);

  &::placeholder {
    color: rgba(43, 16, 85, 0.6);
  }

  &:focus {
    outline: none;
    border-color: rgba(43, 16, 85, 0.5);
  }
`;

const SubscribeButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #4B2094 0%, #2B1055 100%);
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.darkPurple};
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(43, 16, 85, 0.15);
  }
`;

const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-items: center;
    margin-top: 2rem;
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.darkPurple};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.lightPurple};
    transform: translateX(-5px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
  };

  return (
    <>
      <WaveDivider>
        <svg
          className="wave1"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
        <svg
          className="wave2"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </WaveDivider>
      <FooterSection>
        <FooterContainer>
          <NewsletterSection>
            <NewsletterTitle>Hear more from us</NewsletterTitle>
            <NewsletterForm onSubmit={handleSubmit}>
              <NewsletterInput 
                type="email" 
                placeholder="Enter your email address" 
                required
              />
              <SubscribeButton
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </SubscribeButton>
            </NewsletterForm>
          </NewsletterSection>

          <SocialSection>
            <SocialRow>
              <SocialLink href="https://instagram.com/cypherbox__official" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </SocialLink>
              <SocialLink href="https://facebook.com/profile.php?id=61563874238936" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
                Facebook
              </SocialLink>
            </SocialRow>

            <SocialLink href="mailto:support@cypherbox.org">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
              </svg>
              support@cypherbox.org
            </SocialLink>

            <SocialLink>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
              </svg>
              Pune, India
            </SocialLink>
          </SocialSection>
        </FooterContainer>
      </FooterSection>
    </>
  );
};

export default Footer; 
