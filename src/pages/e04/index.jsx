import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import cabecalho from '../component/cabecalho';
import Cabecalho from '../component/cabecalho';

export default function E04() {
    const [nomelivro, setNomeLivro] = useState(0);
    const [numeropaginas, setNumeroPaginas] = useState(0);
    const [segundosleitura, setSegundosLeitura] = useState(0);
    const [valorfinal,setValorFinal] = useState(0)

    function calcularTempo() {
let calculo = numeropaginas * segundosleitura / 3600
setValorFinal(calculo)
    }

    return (
        <div className='pagina-e04'>
       <Cabecalho/>
            <div className='exercicio'>
                <div className='titulo'>
                    <div className='texto'>
                        <Link to='/'><img src='/voltar.png' alt='voltar' /></Link>
                        <h2>Exercício 04 - Leitura de livro</h2>
                    </div>
                    <div className='faixa'/>
                </div>
                <div className='descricao'>
                    <p>Implementar um programa em   Javascript que <b>calcule</b> o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página</p>
                </div>
                <div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Nome do Livro</label>
                            <input placeholder='0' onChange={e => setNomeLivro(e.target.value)} />
                        </div>
                        <div className='campo'>
                            <label>Total de páginas</label>
                            <input placeholder='0' onChange={e => setNumeroPaginas(e.target.value)} />
                        </div>
                        <div className='campo'>
                            <label>tempo em segundos para leitura</label>
                            <input placeholder='0' onChange={e => setSegundosLeitura(e.target.value)} />
                        </div>
                        <button href='#' className='executar' onClick={calcularTempo}>Executar</button>
                    </div>
                    <h3 className='resultado'>Você lerá {nomelivro} em {valorfinal.toFixed(2)}</h3>
                </div>

            </div>
        </div>
    )
}
