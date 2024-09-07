import { Link } from 'react-router-dom'
import './index.scss'
import cabecalho from '../component/cabecalho'
import Cabecalho from '../component/cabecalho'

export default function Inicio() {
    return (
        <div className='pagina-inicio'>
     <Cabecalho/>
            <div className='menu'>
                <div className='titulo'>
                    <h2>Escolha um treino...</h2>
                </div>
                <div className='cards'>
                    <Link to='/e01' className='link'>
                        <div className='card'>
                            <div className='retangulo laranja'/>
                            <h3 className='titulo'>Cupom de desconto</h3>
                            <h4 className='subtitulo'>Exercício 1</h4>
                        </div>
                    </Link>
                    <Link to='/e11' className='link'>
                        <div className='card'>
                            <div className='retangulo roxo'/>
                            <h3 className='titulo'>Tabuada</h3>
                            <h4 className='subtitulo'>Exercício 11</h4>
                        </div>
                    </Link>
                    <Link to='/e02' className='link'>
                        <div className='card'>
                            <div className='retangulo verde'/>
                            <h3 className='titulo'>Converter kg/gramas</h3>
                            <h4 className='subtitulo'>Exercício 02</h4>
                        </div>
                    </Link>
                    <Link to='/e04' className='link'>
                        <div className='card'>
                            <div className='retangulo azul'/>
                            <h3 className='titulo'>Leitura de livro</h3>
                            <h4 className='subtitulo'>Exercício 04</h4>
                        </div>
                    </Link>
                    <Link to='/e05' className='link'>
                        <div className='card'>
                            <div className='retangulo roxinho'/>
                            <h3 className='titulo'>Média de notas</h3>
                            <h4 className='subtitulo'>Exercício 05</h4>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}