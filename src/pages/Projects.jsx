import styled from 'styled-components';
import { useState } from 'react';

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const ProjectDropdown = styled.div`
  margin-top: 2rem;
  width: 100%;
  max-width: 600px;
`;

const DropdownHeader = styled.div`
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.purple};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.lightGray};
  }

  svg {
    transition: transform 0.3s ease;
    transform: ${({ isOpen }) => isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  }
`;

const DropdownContent = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: ${({ isOpen }) => isOpen ? '500px' : '0'};
  opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ProjectDetails = styled.div`
  padding: 1.5rem;

  h3 {
    color: ${({ theme }) => theme.colors.purple};
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textLight};
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  li {
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: "•";
      color: ${({ theme }) => theme.colors.purple};
      position: absolute;
      left: 0;
    }
  }
`;

const ChevronIcon = () => (
  <svg 
    width="24" 
    height="24" 
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
  </svg>
);

const Projects = () => {
  const [isDeDaSOpen, setIsDeDaSOpen] = useState(false);
  const [isAITwinOpen, setIsAITwinOpen] = useState(false);

  return (
    <ProjectsContainer>
      <h1>Our Projects</h1>
      <p>Explore our latest data center projects</p>

      <ProjectDropdown>
        <DropdownHeader 
          onClick={() => setIsDeDaSOpen(!isDeDaSOpen)}
          isOpen={isDeDaSOpen}
        >
          <h3>DeDaS (Decentralized Data Services)</h3>
          <ChevronIcon />
        </DropdownHeader>
        <DropdownContent isOpen={isDeDaSOpen}>
          <ProjectDetails>
            <p>A revolutionary approach to decentralized data storage and management.</p>
            <ul>
              <li>Distributed data architecture</li>
              <li>Enhanced security protocols</li>
              <li>Scalable storage solutions</li>
              <li>Real-time data synchronization</li>
            </ul>
          </ProjectDetails>
        </DropdownContent>

        <DropdownHeader 
          onClick={() => setIsAITwinOpen(!isAITwinOpen)}
          isOpen={isAITwinOpen}
        >
          <h3>AI Digital Twin</h3>
          <ChevronIcon />
        </DropdownHeader>
        <DropdownContent isOpen={isAITwinOpen}>
          <ProjectDetails>
            <p>Advanced digital twin technology powered by artificial intelligence.</p>
            <ul>
              <li>Real-time system monitoring</li>
              <li>Predictive maintenance</li>
              <li>Performance optimization</li>
              <li>Resource allocation AI</li>
            </ul>
          </ProjectDetails>
        </DropdownContent>
      </ProjectDropdown>
    </ProjectsContainer>
  );
};

export default Projects; 