import React from 'react';
import styled from 'styled-components';
import TestimonialCard from './TestimonialCard';
import TestimonialData from '../data/TestimonialData';
import ViewMoreButton from './ViewMoreButton';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const H1 = styled.h1`
  font-size: 50px;
  font-weight: 300;
`;

const Span = styled.span`
  color: #e46d2f;
`;

const HR = styled.div`
  width: 2px;
  height: 70px;
  background-color: #d25412;
  margin-left: 32px;
  margin-right: 32px;
`;

const P = styled.p`
  font-size: 24px;
  width: 350px;
`;

const CardSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Testimonials = () => {
  return (
    <>
      <Div>
        <H1>Testimonials</H1>
        <HR></HR>
        <P>
          What recruiters have to say about
          <Span> mFilterIt</Span>
        </P>
      </Div>
      <CardSection>
        {TestimonialData.map((data, index) => {
          return <TestimonialCard key={index} data={data} />;
        })}
      </CardSection>
      <ViewMoreButton />
    </>
  );
};

export default Testimonials;
