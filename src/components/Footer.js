import React from 'react';
import styled from 'styled-components';
import SocialMedia from '../assests/SocialMedia.svg';
import Button from '@mui/material/Button';
import Logo from '../assests/Logo.svg';

const Div = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  box-shadow: 0px 2px 8px rgba(148, 148, 148, 0.25);
  display: flex;
  justify-content: center;
`;

const P = styled.p`
  font-size: 14px;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const Section = styled.div`
  margin-left: 56px;
  margin-top: 28px;
`;

const Card = styled.div`
  width: 300px;
  height: 175px;
  border: 0.842697px solid #bebebe;
  border-radius: 11.7978px;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 100px;
`;

const Input = styled.input`
  background: #f1f1f1;
  border: 0.842697px solid #dddddd;
  border-radius: 5.05618px;
  height: 22.43px;
  outline: none;
  text-align: center;
`;

const Image = styled.img`
  margin-top: 32px;
`;

const Footer = () => {
  return (
    <>
      <Div>
        <Section>
          <P style={{ fontWeight: 600 }}>Our Solutions</P>
          <P>Ad Traffic Validation</P>
          <P>Brand Hygiene Protection</P>
          <P>eCommerce Competitive Analytics</P>
          <P>Mobile Identity Solution</P>
          <Image src={Logo} alt='logo' />
          <P>©2023 mFilterIt. All rights reserved</P>
        </Section>
        <Section>
          <P style={{ fontWeight: 600 }}>Quick Links</P>
          <P>About Us</P>
          <P>Contact Us</P>
          <P>Careers</P>
          <P>CSR</P>
          <P>Terms & Conditions</P>
          <P>Privacy Policy</P>
        </Section>
        <Section>
          <P style={{ fontWeight: 600 }}>Resources</P>
          <P>Blogs</P>
          <P>Case Studies</P>
          <P>Reports</P>
          <P>Newsroom & Media</P>
          <P>PSU Solutions</P>
        </Section>
        <RightSection>
          <img
            src={SocialMedia}
            alt='media'
            style={{ marginBottom: '24px', marginTop: '24px' }}
          />
          <Card>
            <p style={{ fontWeight: 700 }}>Sign Up For Our Newsletter *</p>
            <Input type='email' placeholder='email Address' />
            <Button
              style={{
                color: '#F48850',
                textTransform: 'capitalize',
                padding: '5.05618px 25.2809px',
                border: '2px solid #F48850',
                fontWeight: 500,
                borderRadius: '6px',
                marginTop: '12px',
              }}
            >
              Subscribe
            </Button>
          </Card>
        </RightSection>
      </Div>
    </>
  );
};

export default Footer;
