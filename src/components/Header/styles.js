import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    font-size: 14px;
    color: #2020cc;
  }
`;
