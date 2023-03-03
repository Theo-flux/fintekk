import React from 'react';
import { SectionTag, FooterTag } from '../../shared';
import { FooterContainer } from './footer.css';

function Footer() {
  return (
    <SectionTag bgColor="#FBFBFB">
      <FooterTag>
        <FooterContainer>footer</FooterContainer>
      </FooterTag>
    </SectionTag>
  );
}

export default Footer;
