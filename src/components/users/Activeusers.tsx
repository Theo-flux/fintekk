import React from 'react';
import { SectionTag, DivTag } from '../../shared';

import { ActiveContainer, ActiveStyledTitle } from './activeusers.css';

function Activeusers() {
  return (
    <SectionTag>
      <DivTag>
        <ActiveContainer>
          <ActiveStyledTitle>
            More than <span>10,000</span> active users trust Fintekk
          </ActiveStyledTitle>
        </ActiveContainer>
      </DivTag>
    </SectionTag>
  );
}

export default Activeusers;
