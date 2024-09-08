import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import Cabecalhoexercicio from '../component/cabecalhoexercicio';
import Cabecalho from '../component/cabecalho';

export default function E01() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setImc] = useState(0);
    const [sit, setSit] = useState('');

    function calcularIMC() {
        const alturaNum = parseFloat(altura);
        const pesoNum = parseFloat(peso);

        if (alturaNum > 0 && pesoNum > 0) {
            let imcCalc = (pesoNum / (alturaNum * alturaNum)).toFixed(2);
            setImc(imcCalc);
            situacao(imcCalc); 
        } else {
            setSit('Valores inválidos');
        }
    }

    function situacao(imc) {
        if (imc < 16.9) {
            setSit('Muito abaixo do peso');
        } else if (imc >= 16.9 && imc <= 18.4) {
            setSit('Abaixo do peso');
        } else if (imc >= 18.5 && imc <= 24.9) {
            setSit('Peso Normal');
        } else if (imc >= 25 && imc < 35) {
            setSit('Obesidade Grau I');
        } else if (imc >= 35 && imc < 40) {
            setSit('Obesidade Grau II');
        } else {
            setSit('Obesidade Grau III');
        }
    }

    return (
        <div className='pagina-e10'>
            <Cabecalho />
            <div className='exercicio'>
                <div className='titulo'>
                    <div className='texto'>
                        <Link to='/'><img src='/voltar.png' alt='voltar' /></Link>
                        <h2>Exercício 10 - Cálculo de IMC com histórico</h2>
                    </div>
                    <div className='faixa' />
                </div>
                <div className='descricao'>
                    <p>Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, <b>calcule o IMC</b> e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação</p>
                </div>
                <div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Altura</label>
                            <input placeholder='0' onChange={e => setAltura(e.target.value)} />
                        </div>
                        <div className='campo'>
                            <label>Peso</label>
                            <input placeholder='0' onChange={e => setPeso(e.target.value)} />
                        </div>
                        <button href='#' className='executar' onClick={calcularIMC}>Executar</button>
                    </div>
                    <h3 className='resultado'> Altura: {altura} | Peso: {peso} | IMC: {imc} | Situação: {sit}</h3>
                </div>
            </div>
        </div>
    )
}
