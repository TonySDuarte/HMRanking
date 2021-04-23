import { Component } from 'react'
import './styles.css'

export default class Bar extends Component {

    render() {
        return (
            <div className="container" >

                <div className="menu-top" >
                    <img src="" alt="" />
                    <a href="#">BJ</a>
                </div>

                <div className="menu-body">
                    <ul>
                        <a href="/">
                            Inicio
                        </a>
                        <a href="/missoes">
                            Missões
                        </a>
                        <a href="/ranking">
                            Ranking
                        </a>
                        <a href="/pontuar">
                            Pontuar
                        </a>
                        <a href="/cadastrar">
                            Cadastrar
                        </a>
                    </ul>
                </div>

            </div>
        );
    }
}