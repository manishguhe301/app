import React from 'react';
import styled from 'styled-components';
import SiteStats from '../assests/SiteStats.svg';
import NumericalFrame from '../assests/NumericalFrame.svg';

const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const HeadLine = styled.h1`
  font-weight: 300;
  margin-bottom: 40px;
  width: 300px;
  text-align: center;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
`;

const NumberSpeaksAboutUs = () => {
  return (
    <Div>
      <HeadLine>Numbers speak about us!</HeadLine>
      <Section>
        <img src={SiteStats} alt='site' height='320px' />
        <img src={NumericalFrame} alt='frame' height='400px'/>
      </Section>
    </Div>
  );
};

export default NumberSpeaksAboutUs;
