import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px 30px;
  border-bottom: 1px solid #eee;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      padding: 10px;
      text-transform: uppercase;
    }
  }

  a {
    text-decoration: none;
    font-size: 14px;
    color: #2020cc;
  }
`;
