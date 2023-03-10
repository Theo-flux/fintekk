import React from 'react';
import { DivTag, SectionTag, StyledTinyText } from '../../shared';
import {
  Testimonialcontainer,
  TestimonialSection,
  TestimonialTitle,
  TestimonyWrapper,
  TestimonyCardWrapper,
  TestimonyCard,
  TestimonyNavigator,
  TestimonyText,
  TestimonyInner,
  TestimonyName,
  TestimonyRatings,
  StyledHiOutlineStar,
  StyledHiStar,
  StyledBsArrowDown,
  StyledBsArrowUp,
  Number,
} from './testimonial.css';
import { testimonyArr } from './testimonies';

function Testimonials() {
  return (
    <SectionTag bgColor="#FBFBFB">
      <DivTag>
        <Testimonialcontainer>
          <TestimonialSection>
            <StyledTinyText>TESTIMONIALS</StyledTinyText>
            <TestimonialTitle>What Our Customers Say About Us</TestimonialTitle>
          </TestimonialSection>

          <TestimonyWrapper>
            <TestimonyCardWrapper>
              {testimonyArr.map((testimonyEl, index) => {
                const { testimony, name } = testimonyEl;
                return (
                  <TestimonyCard key={index}>
                    <TestimonyText>{testimony}</TestimonyText>
                    <TestimonyInner>
                      <TestimonyName>{name}</TestimonyName>
                      <TestimonyRatings>
                        <StyledHiStar />
                        <StyledHiStar />
                        <StyledHiStar />
                        <StyledHiStar />
                        <StyledHiOutlineStar />
                      </TestimonyRatings>
                    </TestimonyInner>
                  </TestimonyCard>
                );
              })}
            </TestimonyCardWrapper>
            <TestimonyNavigator>
              <StyledBsArrowUp />
              {testimonyArr.map((test, index) => {
                return <Number key={index}>{index + 1}</Number>;
              })}
              <StyledBsArrowDown />
            </TestimonyNavigator>
          </TestimonyWrapper>
        </Testimonialcontainer>
      </DivTag>
    </SectionTag>
  );
}

export default Testimonials;
