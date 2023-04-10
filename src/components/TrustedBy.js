import React from 'react';
import styled from 'styled-components';
import TrustedFrame from '../assests/TrustedFrame.svg';

const Div = styled.div`
  height: 240px;
  margin-top: 100px;
  background: linear-gradient(90deg, #f48850 0%, #fda77b 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const P = styled.p`
  font-size: 32px;
  color: #fff;
`;

const TrustedBy = () => {
  return (
    <Div>
      <P>Trusted By</P>
      <img src={TrustedFrame} alt='frame' height='100px' />
    </Div>
  );
};

export default TrustedBy;
