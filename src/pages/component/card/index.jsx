import { Link } from 'react-router-dom';
import './index.scss';


export default function Card({ cor, desc, titulo, link }) {
    return (
        <Link to={link} className='link'>
            <div className='card'>
                <div className={"retangulo " + cor} />
                <h3 className='titulo'>{titulo}</h3>
                <h4 className='subtitulo'>{desc}</h4>
            </div>
        </Link>
    )
}