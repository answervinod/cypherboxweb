import styled from 'styled-components';

const RevenuesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Revenues = () => {
  return (
    <RevenuesContainer>
      <h1>Revenue Reports</h1>
      <p>Financial performance and growth metrics</p>
    </RevenuesContainer>
  );
};

export default Revenues; 