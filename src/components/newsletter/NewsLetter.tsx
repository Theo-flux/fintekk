import React from 'react';
import { DivTag, SectionTag } from '../../shared';
import {
  NewsletterContainer,
  NewsWrapper,
  NewsLetterTitle,
  Form,
  FormInput,
  FormButton,
  FormNewButton,
} from './newsletter.css';

function NewsLetter() {
  return (
    <SectionTag>
      <DivTag>
        <NewsletterContainer>
          <NewsWrapper>
            <NewsLetterTitle>Start growing your wealth today</NewsLetterTitle>

            <Form>
              <FormInput placeholder="Enter your email address" />
              <FormButton>sign up for free</FormButton>
            </Form>
            <FormNewButton>sign up for free</FormNewButton>
          </NewsWrapper>
        </NewsletterContainer>
      </DivTag>
    </SectionTag>
  );
}

export default NewsLetter;
