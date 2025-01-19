import styled from 'styled-components';

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(111, 66, 193, 0.15);
  }

  h3 {
    color: ${({ theme }) => theme.colors.purple};
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

const ServiceCard = ({ title, description }) => {
  return (
    <Card>
      <h3>{title}</h3>
      <p>{description}</p>
    </Card>
  );
};

export default ServiceCard; 