import React from 'react';
import Styled from 'styled-components';
import logo from '../../assets/images/logo.svg';
import { colorPrimario } from '../UI/variables';

const StyledHeader = Styled.nav`
  background-color: ${colorPrimario};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
  `;

const Logo = Styled.img`
  height: 50px;
  width: 50px;
  `;

const BtnHeader = Styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  color: ${({ primary }) => (primary ? 'white' : colorPrimario)};
  background-color: ${({ primary }) => (primary ? 'transparent' : 'white')};
  `;

const Header = () => {
	return (
		<StyledHeader>
			<Logo src={logo} alt="Logo Smart Bank" />
			<div>
				<BtnHeader href="https://google.com">Ayuda</BtnHeader>
				<BtnHeader primary href="https://google.com">
					Salir
				</BtnHeader>
			</div>
		</StyledHeader>
	);
};

export default Header;
