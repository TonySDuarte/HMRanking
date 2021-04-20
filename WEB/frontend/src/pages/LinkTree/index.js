import { Component } from 'react'
import logoTI from './images/logo.png'

import site_icon from './images/site_icon.png'
import whatsApp from './images/whats_icon.png'
import desbloqueio from './images/Desbloqueio.png'
import fatura from './images/fatura.png'
import cartao from './images/Cartão_crédito.png'
import veloc from './images/Velocímetro.png'
import sem_acesso from './images/sem_acesso.png'
import instagram from './images/Instagram.png'
import facebook from './images/Facebook.png'

import rodape from './images/rodapé.png'
import './styles.css'

export default class LinkTree extends Component {
    render() {
        return (
            <div>
                <img className="logo" src={logoTI} />
                <div className="container">
                    <ul>
                        <li>
                            <button>
                                <img src={site_icon} />
                            Acesse nossos planos
                        </button>
                        </li>
                        <li>
                            <button>
                                <img src={whatsApp} />
                            Fale pelo WhatsApp
                        </button>
                        </li>
                        <li>
                            <button>
                                <img src={desbloqueio} />
                            Desbloqueio de Confiança
                        </button>
                        </li>
                        <li>
                            <button>
                                <img src={fatura} />
                            Acesse sua fatura
                        </button>
                        </li>
                        <li>
                            <button>
                                <img src={cartao} />
                            Pague com cartão de crédito
                        </button>
                        </li>
                        <li>
                            <button>
                                <img src={veloc} />
                            Teste sua conexão
                        </button>
                        </li>
                        <li>
                            <button>
                                <img src={sem_acesso} />
                            Sem acesso, o que fazer?
                        </button>
                        </li>
                        <li>
                            <button>
                                <img src={instagram} />
                            Nos siga no Instagram
                        </button>
                        </li>
                        <li>
                            <button>
                                <img src={facebook} />
                            Curta nosso Facebook
                        </button>
                        </li>

                    </ul>
                </div>
                <div className="rodape">
                    <img src={rodape} />
                </div>
            </div>
        );
    }
}