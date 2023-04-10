import React from 'react';
import styled from 'styled-components';
import WhoweAreFrame from '../assests/WhoweAreFrame.svg';

const Div = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

const H1 = styled.h1`
  font-weight: 300;
  font-size: 45px;
`;

const DetailsSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const P = styled.p`
  width: 400px;
  margin-right: 40px;
`;

const WhoWeAre = () => {
  return (
    <>
      <Div>
        <H1>Who we are</H1>
      </Div>
      <DetailsSection>
        <P>
          We are the essential tool in a digital marketer’s handbag. We are on a
          mission to create trust, uphold integrity, drive growth & value across
          the digital ecosystem. We empower our customers with a holistic view
          of their respective journeys’ in the digital ecosystem by providing
          them with accurate real-time data that helps them understand their
          returns on their digital investments.
        </P>
        <div>
          <img src={WhoweAreFrame} alt='who are we' height='200px' />
        </div>
      </DetailsSection>
    </>
  );
};

export default WhoWeAre;
