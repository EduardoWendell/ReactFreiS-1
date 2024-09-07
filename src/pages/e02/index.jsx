import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'

import Cabecalho from '../component/cabecalho';

export default function E02() {
    const [valorKilo, setValorKilo] = useState(0);
    const [ValorGrama, setValorGrama] = useState(0);
    const [valorgramas, setValorGramas] = useState(0);

    function calcularpeso() {
        let total = valorKilo * 1000;
        setValorGramas(total);
    }

    return (
        <div className='pagina-e02'>
     <Cabecalho/>
            <div className='exercicio'>
                <div className='titulo'>
                    <div className='texto'>
                        <Link to='/'><img src='/voltar.png' alt='voltar' /></Link>
                        <h2>Exercício 02 - Converter de Kg/grama</h2>
                    </div>
                    <div className='faixa1'/>
                </div>
                <div className='descricao'>
                    <p>mplementar um programa em Javascript para <b>converter kilos em gramas.</b></p>
                </div>
                <div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Informe o valor em kilos</label>
                            <input placeholder='0' onChange={e => setValorKilo(e.target.value)} />
                        </div>
                        <button href='#' className='executar' onClick={calcularpeso}>Executar</button>
                    </div>
                    <h3 className='resultado'>Resultado: {valorgramas}</h3>
                </div>

            </div>
        </div>
    )
}
