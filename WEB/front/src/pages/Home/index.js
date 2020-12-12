import react from 'react'
import './styles.css'

export default function Home() {
    return (
        <div>

            <div className="retangulo">
                <ul>
                    <a href="#">Inicio</a>
                    <a href="#">Missões</a>
                    <a href="#">Ranking</a>
                    <a href="#">Pontuar</a>
                    <a href="#">Cadastrar</a>
                </ul>
            </div>

            <div className="trapezio"></div>

            <div className="hr"></div>

        </div>
    );
}