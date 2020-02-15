import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .avatar {
    width: 250px;
    height: 250px;
    
    margin: 0px 20px 0px 0px;
  }

  h2 {
    font-size: 38px;
  }
  
  h4 {
    margin-bottom: 20px;
    font-weight: 500;
    color: #555;
    padding-left: 5px;
  }

  .bio {
    font-weight: 500;
    color: #444;
    text-align: justify;
    font-size: 18px;

    width: 70%;
  }
`;
