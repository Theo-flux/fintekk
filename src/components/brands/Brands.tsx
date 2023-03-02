import React from 'react';
import { SectionTag } from '../../shared';
import {
  BrandContainer,
  BrandImage,
  BrandSecondary,
  BrandPrimary,
} from './brands.css';
import { brands } from './branddata';

function Brands() {
  return (
    <SectionTag bgColor="#FBFBFB">
      <BrandContainer>
        <BrandPrimary>
          {brands.map((brand, index) => {
            return <BrandImage key={index} src={brand.src} />;
          })}
        </BrandPrimary>

        <BrandSecondary>
          {brands.map((brand, index) => {
            return <BrandImage key={index} src={brand.src} />;
          })}
        </BrandSecondary>
      </BrandContainer>
    </SectionTag>
  );
}

export default Brands;
