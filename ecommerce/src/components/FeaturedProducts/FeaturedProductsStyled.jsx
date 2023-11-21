import styled from 'styled-components';


export const Featured = styled.div`
  margin: 100px 200px;

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;

    h1 {
      flex: 2;
      text-transform: capitalize;
    }

    p {
      flex: 3;
      color: gray;
    }
  }

  .bottom {
    display: flex;
    justify-content: center;
    gap: 50px;
  }
`;

