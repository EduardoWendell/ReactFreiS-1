import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import Cabecalhoexercicio from '../component/cabecalhoexercicio';
import Cabecalho from '../component/cabecalho';

export default function E05() {
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [nota3, setNota3] = useState(0);
    const [media, setMedia] = useState(0);

    function calcularMedia() {
        let calculo = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
        setMedia(calculo);
    }

    return (
        <div className='pagina-e05'>
            <Cabecalho />
            <div className='exercicio'>
                <div className='titulo'>
                    <div className='texto'>
                        <Link to='/'><img src='/voltar.png' alt='voltar' /></Link>
                        <h2>Exercício 05 - Média de notas</h2>
                    </div>
                    <div className='faixa' />
                </div>
                <div className='descricao'>
                    <p>Implemente um programa em Javascript para <b>verificar</b> se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6.</p>
                </div>
                <div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Nota 1</label>
                            <input placeholder='0' onChange={e => setNota1(e.target.value)} />
                        </div>
                        <div className='campo'>
                            <label>Nota 2</label>
                            <input placeholder='0' onChange={e => setNota2(e.target.value)} />
                        </div>
                        <div className='campo'>
                            <label>Nota 3</label>
                            <input placeholder='0' onChange={e => setNota3(e.target.value)} />
                        </div>
                        <button href='#' className='executar' onClick={calcularMedia}>Executar</button>
                    </div>
                    <h3 className='resultado'> A média do aluno é {media.toFixed(2)} Ele passou? {media >= 6 ? "true" : "false"}</h3>
                </div>
            </div>
        </div>
    );
}