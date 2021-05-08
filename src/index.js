import './index.css'
import React from 'react'
import ReactDom from 'react-dom'

import Primeiro from './components/Primeiro'
import ComParamentro from './components/ComParamentro'

ReactDom.render(
    <div>
        <Primeiro />
        <ComParamentro titulo="Esse é o titulo"
        subtitulo="Esse é o subtitulo" />
        <ComParamentro titulo="Opa"
        subtitulo="Epa" />
    </div>,
    document.getElementById('root')
)