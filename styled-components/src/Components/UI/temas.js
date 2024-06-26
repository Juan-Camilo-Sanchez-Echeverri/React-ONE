import {
  fondoClaro,
  contenidoClaro,
  textoFondoClaro,
  fondoOscuro,
  contenidoOscuro,
  textoFondoOscuro
} from './variables'

export const temaCLaro = {
  body: fondoClaro,
  inside: contenidoClaro,
  text: textoFondoClaro,
  filter: '.'
}

export const temaOscuro = {
  body: fondoOscuro,
  inside: contenidoOscuro,
  text: textoFondoOscuro,
  filter: 'invert(100%)'
}