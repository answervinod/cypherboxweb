import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  background: #FFFFFF;
  padding: 0.75rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.img`
  height: 65px;
  width: auto;
`;

const NavCenter = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  background: #9B59B6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 500;
  transition: background 0.3s;

  &:hover {
    background: #8E44AD;
    color: white;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const LoginButton = styled(motion.button)`
  padding: 0.5rem 1.5rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  background: linear-gradient(135deg, #4B2094, #1A0B2E);
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background: linear-gradient(135deg, #1A0B2E, #4B2094);
    color: white;
  }
`;

const SignUpButton = styled(motion.button)`
  padding: 0.5rem 1.5rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  background: linear-gradient(135deg, #FF4500, #FFA500);
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background: linear-gradient(135deg, #FFA500, #FF4500);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.15);
  }
`;

const NavItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(43, 16, 85, 0.15);
  min-width: 200px;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-10px')});
  transition: all 0.3s ease;
  z-index: 100;
  border: 1px solid rgba(43, 16, 85, 0.1);
`;

const DropdownItem = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1.5rem;
  color: ${({ theme }) => theme.colors.darkPurple};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(43, 16, 85, 0.05);
    color: ${({ theme }) => theme.colors.lightPurple};
  }
`;

const ChevronIcon = styled.svg`
  width: 12px;
  height: 12px;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => isOpen ? 'rotate(180deg)' : 'rotate(0)'};
`;

const Navbar = () => {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const handleProjectsClick = (e) => {
    e.preventDefault(); // Prevent default navigation
    setIsProjectsOpen(!isProjectsOpen); // Toggle dropdown visibility
  };

  return (
    <Nav>
      <Link to="/">
        <Logo src="/logo.png" alt="Cypherbox Logo" />
      </Link>
      <NavCenter>
        <NavLinks>
          <NavItem 
            onMouseEnter={() => setIsProjectsOpen(true)}
            onMouseLeave={() => setIsProjectsOpen(false)}
          >
            <NavLink to="#" onClick={handleProjectsClick} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              Our Revenue Projects
              <ChevronIcon 
                isOpen={isProjectsOpen}
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M6 9L12 15L18 9" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </ChevronIcon>
            </NavLink>
            <DropdownMenu isOpen={isProjectsOpen}>
              <DropdownItem to="/projects/dedas">DeDaS</DropdownItem>
              <DropdownItem to="/projects/ai-twin">AI Digital Twin</DropdownItem>
            </DropdownMenu>
          </NavItem>
        </NavLinks>
      </NavCenter>
      <AuthButtons>
        <LoginButton as="a" href="https://cypherbox.org/signin" target="_blank" rel="noopener noreferrer">
          Login
        </LoginButton>
        <SignUpButton as="a" href="https://cypherbox.org/signup" target="_blank" rel="noopener noreferrer">
          Sign Up
        </SignUpButton>
      </AuthButtons>
    </Nav>
  );
};

export default Navbar; 