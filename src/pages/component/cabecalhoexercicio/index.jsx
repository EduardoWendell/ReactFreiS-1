import { Link } from 'react-router-dom';
import './index.scss';

export default function Cabecalhoexercicio(cor , descricao , titulo) {
    return(
        <div className='cabecalho-exercicio'>
        <div className='texto'>
            <Link to='/'><img src='/voltar.png' alt='voltar' /></Link>
            <h2>{titulo}</h2>
            <div className='descricao'>
                <p>{descricao}</p>
            </div>
        </div>
        <div className={`faixa `+ cor} />
    </div>
    )
}