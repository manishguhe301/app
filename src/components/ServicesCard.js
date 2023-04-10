import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 550px;
  height: 300px;
  border: 1px solid #bebebe;
  border-radius: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 56px;
  margin-right: 24px;
  margin-left: 24px;
`;

const Image = styled.img`
  padding-left: 24px;
  width: 170px;
`;

const Details = styled.div`
  padding-right: 24px;
`;

const Headline = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const ServicesCard = ({ data }) => {
  return (
    <Div>
      <Image src={data.img} alt='svg' />
      <Details>
        <Headline>{data.title}</Headline>
        <p>{data.description}</p>
        <p style={{ color: '#D25412' }}>Read More..</p>
      </Details>
    </Div>
  );
};

export default ServicesCard;
