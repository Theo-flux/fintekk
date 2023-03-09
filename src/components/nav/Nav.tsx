import React, { useState } from 'react';
import { Button, OutlineButton, Logo, NavTag, NavWrapper } from '../../shared';
import {
  NavContainer,
  NavItemContainer,
  NavItemPod,
  ButtonWrapper,
  StyledBiMenu,
  StyledGrFormClose,
} from './nav.css';
import { navItems } from './navItems';

function Nav() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <NavWrapper>
      <NavTag>
        <NavContainer>
          <Logo />
          <NavItemContainer openNav={openNav}>
            {navItems.map((navItem, index) => {
              return (
                <NavItemPod onClick={() => setOpenNav(!openNav)} key={index}>
                  {navItem.item}
                </NavItemPod>
              );
            })}
          </NavItemContainer>
          <ButtonWrapper>
            <OutlineButton>Login</OutlineButton>
            <Button>Signup for free</Button>
          </ButtonWrapper>
          {openNav || <StyledBiMenu onClick={() => setOpenNav(!openNav)} />}
          {openNav && (
            <StyledGrFormClose onClick={() => setOpenNav(!openNav)} />
          )}
        </NavContainer>
      </NavTag>
    </NavWrapper>
  );
}

export default Nav;
