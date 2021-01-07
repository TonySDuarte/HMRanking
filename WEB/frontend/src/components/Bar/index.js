import { Component } from 'react'
import './styles.css'

export default class Bar extends Component {

    render() {
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

                {/* <div className="hr"></div> */}

            </div>
        );
    }
}