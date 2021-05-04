import { Component } from 'react'
import Bar from '../../components/Bar'
import api from '../../services/api';
import { CardsQuests } from '../../style/style';
import './styles.css'
import 'core-js'

export default class Missoes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            missoes: [],
        }
    }

    async componentDidMount() {
        this.buscarMissoes();
    }

    async buscarMissoes() {
        const response = await api.get('/readMissoes').then(res => {
            // console.log(res.data)
            return res.data
        }).catch(error => {
            console.log({ error: error });
        });
        
        this.setState({
            missoes: response,
        })
    }

    render() {
        const { missoes } = this.state;

        return (
            <div>
                <Bar />
                <CardsQuests>
                    {missoes.map((item, index) => (
                        <li key={index}>
                            <h1>{item.titulo}</h1>
                            <p>+ {item.pontos}</p>

                            {item.exercicios.map(item2 => {
                                return <p>{item2.exercicio}: {item2.rep}x</p>
                            })}
                        </li>
                    ))}
                </CardsQuests>
            </div>
        );
    }
}