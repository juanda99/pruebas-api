// TAREAS
/*
1. HACER UNA COMPILACIÓN Y VER QUE FUNCIONE
2. PONER  UNA CAJA DE TEXTO, PARA BUSQUEDA DINÁMICA
3. MOSTRAR LAS IMÁGENES (CONSULTAR API ARASAAC)
4. DAR SUGERENCIAS DE BÚSQUEDA (ENDPOINT KEYWORDS EN api ARASAAC)

*/

import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import { cargarMapa } from './maps'
import { pedirPictos, cargarKeywords } from './api-arasaac.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
cargarMapa()
pedirPictos('barco')
cargarKeywords('es')
