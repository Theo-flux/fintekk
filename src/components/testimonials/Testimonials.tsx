import React, { useState } from 'react';
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
  NumberPod,
} from './testimonial.css';
import { testimonyArr } from './testimonies';

function Testimonials() {
  const [current, setCurrent] = useState(1);

  function handleTestimonialByNumber(arg: number) {
    setCurrent(arg);
  }

  function handlePrevArrow() {
    if (current === 1) {
      setCurrent(testimonyArr.length);
    } else {
      setCurrent(prev => prev - 1);
    }
  }

  function handleNextArrow() {
    if (current === testimonyArr.length) {
      setCurrent(1);
    } else {
      setCurrent(prev => prev + 1);
    }
  }

  console.log(current);

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
              <StyledBsArrowUp onClick={() => handlePrevArrow()} />
              {testimonyArr.map((test, index) => {
                return (
                  <NumberPod
                    key={index}
                    active={current === index + 1 ? true : false}
                    onClick={() => handleTestimonialByNumber(index + 1)}
                  >
                    <Number active={current === index + 1 ? true : false}>
                      {index + 1}
                    </Number>
                  </NumberPod>
                );
              })}
              <StyledBsArrowDown onClick={() => handleNextArrow()} />
            </TestimonyNavigator>
          </TestimonyWrapper>
        </Testimonialcontainer>
      </DivTag>
    </SectionTag>
  );
}

export default Testimonials;
