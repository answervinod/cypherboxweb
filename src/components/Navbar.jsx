import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Nav = styled.nav`
  background: ${({ theme }) => theme.gradients.purple};
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  flex: 1;
`;

const NavCenter = styled.div`
  display: flex;
  justify-content: center;
  flex: 2;
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
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: white;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex: 1;
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const LoginButton = styled.button`
  padding: 0.5rem 1.5rem;
  font-size: 1.1rem;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: white;
    color: ${({ theme }) => theme.colors.darkPurple};
  }
`;

const SignUpButton = styled.button`
  padding: 0.5rem 1.5rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%);
  color: ${({ theme }) => theme.colors.darkPurple};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: white;
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
  box-shadow: 0 4px 12px rgba(0, 255, 255, 0.2);
  min-width: 200px;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-10px')});
  transition: all 0.3s ease;
  z-index: 100;
  border: 1px solid rgba(0, 255, 255, 0.2);
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 0.75rem 1.5rem;
  color: rgba(0, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 255, 0.1);
    color: #00FFFF;
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

  return (
    <Nav>
      <Logo>CYPHERBOX</Logo>
      <NavCenter>
        <NavLinks>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <NavItem 
            onMouseEnter={() => setIsProjectsOpen(true)}
            onMouseLeave={() => setIsProjectsOpen(false)}
          >
            <NavLink to="/projects" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              Projects
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
          <li><NavLink to="/revenues">Revenues</NavLink></li>
        </NavLinks>
      </NavCenter>
      <AuthButtons>
        <LoginButton>Login</LoginButton>
        <SignUpButton>Sign Up</SignUpButton>
      </AuthButtons>
    </Nav>
  );
};

export default Navbar; 