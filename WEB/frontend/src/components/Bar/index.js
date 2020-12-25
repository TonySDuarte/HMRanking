import react from 'react'
import './styles.css'

export default function Bar() {
    return (
        <div>
            <div className="retangulo">
                <ul>
                    <a href="/">Inicio</a>
                    <a href="/missoes">Missões</a>
                    <a href="/ranking">Ranking</a>
                    <a href="/pontuar">Pontuar</a>
                    <a href="/cadastrar">Cadastrar</a>
                </ul>
            </div>

            <div className="trapezio"></div>

            <div className="hr"></div>

        </div>
    );
}