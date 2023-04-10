import React from 'react';
import Superhero from '../assests/Superhero.svg';
import Styled from 'styled-components';

const Div = Styled.div`
  margin-top: 56px;
  margin-bottom: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailsSection = Styled.div`
  width: 400px;
  margin-left: 150px;
`;

const Headline = Styled.p`
  font-size: 40px;
`;

const Intro = () => {
  return (
    <>
      <Div>
        <img src={Superhero} alt='hero' height='450px' />
        <DetailsSection>
          <Headline>We are the Superhero of the Digital Ad World</Headline>
          <p>
            We create innovative marketing solutions for cost conscious
            marketers who does not compromise on the results!
          </p>
        </DetailsSection>
      </Div>
    </>
  );
};

export default Intro;
