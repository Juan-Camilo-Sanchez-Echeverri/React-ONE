import React from 'react';
import themeOn from '../../assets/images/themeOn.svg'
import themeOff from '../../assets/images/themeOff.svg'
import { Icono } from "../UI";

export default ({ tema }) => {
  const claro = <Icono src={themeOff} alt='tema Claro' />
  const oscuro = <Icono src={themeOn} alt='tema Oscuro' />

  return <>{tema ? oscuro : claro}</>
}


