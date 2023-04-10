import React from 'react';
import styled from 'styled-components';
import ServicesCard from './ServicesCard';
import Data from '../data/data';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HeadLine = styled.h1`
  font-weight: 300;
  margin-bottom: 40px;
`;

const CardsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Services = () => {
  return (
    <Div>
      <HeadLine>Our Services</HeadLine>
      <CardsSection>
        {Data.map((data, index) => {
          return <ServicesCard key={index} data={data} />;
        })}
      </CardsSection>
    </Div>
  );
};

export default Services;
