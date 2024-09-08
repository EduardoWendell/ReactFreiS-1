import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import cabecalho from '../component/cabecalho';
import Cabecalho from '../component/cabecalho';

export default function E01() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [historico, setHistorico] = useState([]);


    function calcularIMC () {
        const imc = (peso / (altura * altura)).toFixed(2);
        const situacao = getSituacao(imc);
        setHistorico([
          ...historico,
          { altura, peso, imc, situacao },
        ]);
        setAltura('');
        setPeso('');
      };
    
      const getSituacao = (imc) => {
        if (imc < 18.5) {
          return 'Abaixo do peso';
        } else if (imc < 25) {
          return 'Peso normal';
        } else if (imc < 30) {
          return 'Sobrepeso';
        } else if (imc < 35) {
          return 'Obesidade Grau I';
        } else if (imc < 40) {
          return 'Obesidade Grau II';
        } else {
          return 'Obesidade Grau III';
        }
      }

      
    return (
        <div className='pagina-e10'>
       <Cabecalho/>
            <div className='exercicio'>
                <div className='titulo'>
                    <div className='texto'>
                        <Link to='/'><img src='/voltar.png' alt='voltar' /></Link>
                        <h2>Exercício 10 - Cupom de desconto</h2>
                    </div>
                    <div className='faixa'/>
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
                        <button href='#' className='executar' >Executar</button>
                    </div>
                    <h3 className='resultado'>Resultado: O total é R$ </h3>
                </div>

            </div>
        </div>
    )
}
