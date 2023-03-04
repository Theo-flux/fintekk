import React from 'react';
import { SectionTag, DivTag, CTABtn, BtnWithIcon } from '../../shared';
import {
  HeroContainer,
  HoreSection,
  HeroFig,
  HeroImg,
  HeroTitle,
  HeroText,
  BtnWrapper,
  GoogleIcon,
  AppleIcon,
} from './hero.css';
import jumbotron from '../../assets/images/fintekk_landing.svg';

function Hero() {
  return (
    <SectionTag>
      <DivTag>
        <HeroContainer>
          <HoreSection>
            <HeroTitle>
              Pay, Invest, Save your Cash with a single bank
            </HeroTitle>
            <HeroText>
              Fintekk is the bank that does it all. Manage everything directly
              and easy with fintekk.
            </HeroText>

            <BtnWrapper>
              <CTABtn>Sign up for free</CTABtn>
            </BtnWrapper>

            <BtnWrapper>
              <BtnWithIcon>
                <GoogleIcon />
                Get on android
              </BtnWithIcon>
              <BtnWithIcon>
                <AppleIcon />
                Get on iPhone
              </BtnWithIcon>
            </BtnWrapper>
          </HoreSection>
          <HeroFig>
            <HeroImg src={jumbotron} alt="jumbotron" />
          </HeroFig>
        </HeroContainer>
      </DivTag>
    </SectionTag>
  );
}

export default Hero;
