import React from 'react';
import styled from 'styled-components';
import InsightsFrame from '../assests/InsightsFrame.svg';

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const H1 = styled.h1`
  font-weight: 300;
  font-size: 45px;
`;

const InsightFulReads = () => {
  return (
    <Div>
      <H1>
        Insightful Reads - <span style={{ color: '#F48850' }}>mFilterIt</span>
      </H1>
      <img src={InsightsFrame} alt='insights' height='250px'/>
    </Div>
  );
};

export default InsightFulReads;
