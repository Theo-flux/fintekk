import React from 'react';
import {
  SectionTag,
  DivTag,
  StyledTinyText,
  StyledH1,
  StyledSmallText,
} from '../../shared';
import {
  ServicesContainer,
  ServiceTopSection,
  ServiceGrid,
  ServiceGridItem,
  ServiceInfo,
  ServiceTitle,
  ServiceText,
  ReadMore,
  ReadmoreText,
  ServiceArrow,
  ServiceImg,
} from './services.css';
import { ServiceArr } from './service';

function Services() {
  console.log(ServiceArr);

  return (
    <SectionTag bgColor="#FBFBFB">
      <DivTag>
        <ServicesContainer>
          <ServiceTopSection>
            <StyledTinyText>OUR SERVICES</StyledTinyText>
            <StyledH1>What we offer</StyledH1>
            <StyledSmallText>
              We help individuals become more flexible and responsible with
              their finances and handle payments smooth and easy.
            </StyledSmallText>
          </ServiceTopSection>

          <ServiceGrid>
            {ServiceArr.map((service, index) => {
              const { title, text, image, bgColor } = service;
              return (
                <ServiceGridItem bgColor={bgColor} key={index}>
                  <ServiceInfo>
                    <ServiceTitle>{title}</ServiceTitle>
                    <ServiceText>{text}</ServiceText>
                    <ReadMore>
                      <ReadmoreText>Read More</ReadmoreText>
                      <ServiceArrow />
                    </ReadMore>
                  </ServiceInfo>
                  <ServiceImg src={image} alt="service-image" />
                </ServiceGridItem>
              );
            })}
          </ServiceGrid>
        </ServicesContainer>
      </DivTag>
    </SectionTag>
  );
}

export default Services;
