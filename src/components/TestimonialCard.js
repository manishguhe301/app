import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 400px;
  height: 280px;
  box-shadow: 0px 2px 8px rgba(148, 148, 148, 0.25);
  border-radius: 10px;
  margin-left: 28px;
  margin-right: 28px;
  margin-bottom: 48px;
`;

const HeadSection = styled.div`
  display: flex;
  align-items: center;
  margin: 28px 0 28px 28px;
`;

const P = styled.p`
  margin: 28px 28px 28px 28px;
  font-size: 14px;
`;

const styles = {
  marginTop: 0,
  marginBottom: 0,
};

const TestimonialCard = ({ data }) => {
  return (
    <Div>
      <HeadSection>
        <img src={data.img} alt='img' />
        <div style={{ marginLeft: '12px' }}>
          <h4 style={styles}>{data.name}</h4>
          <p style={styles}>{data.designation}</p>
        </div>
      </HeadSection>
      <P>{data.description}</P>
    </Div>
  );
};

export default TestimonialCard;
