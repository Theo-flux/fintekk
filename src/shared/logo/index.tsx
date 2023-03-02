import React from 'react'
import styled from 'styled-components'
import fLogo from '../../assets/images/fintekk_logo.svg'

const Container = styled.div``

const StyledImg = styled.img`
  width: 80px;
`

export function Logo() {
  return (
    <Container>
      <StyledImg src={fLogo} alt="mpaylogo" />
    </Container>
  )
}
