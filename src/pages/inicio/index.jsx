import './index.scss'
import Cabecalho from '../component/cabecalho'
import Card from '../component/card'

export default function Inicio() {
    return (
        <div className='pagina-inicio'>
            <Cabecalho/>
            <div className='menu'>
                <div className='titulo'>
                    <h2>Escolha um treino...</h2>
                </div>
                <div className='cards'>
                    <Card
                        cor="laranja"
                        titulo="Cupom de desconto"
                        desc="Exercício 1"
                        link="/e01"
                    />
                    <Card
                        cor="roxo"
                        titulo="Tabuada"
                        desc="Exercício 11"
                        link="/e11"
                    />
                    <Card
                        cor="verde"
                        titulo="Converter kg/gramas"
                        desc="Exercício 02"
                        link="/e02"
                    />
                    <Card
                        cor="azul"
                        titulo="Leitura de livro"
                        desc="Exercício 04"
                        link="/e04"
                    />
                    <Card
                        cor="roxinho"
                        titulo="Média de notas"
                        desc="Exercício 05"
                        link="/e05"
                    />
                    <Card
                        cor="marrom"
                        titulo="Calculo imc com histórico"
                        desc="Exercício 10"
                        link="/e10"
                    />
                <h1></h1>
                </div>
            </div>
        </div>
    )
}