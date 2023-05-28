import React, {useState} from 'react'
import * as S from './styles/ContainerRightStyle'
import Down from '../../../assets/down.png'
import Up from '../../../assets/up.png'

export default function ContainerRight(){

    const [cards, setCards] = useState([
        {
            image: Down,
            title:'Magreza',
            description:'IMC está entre 0 e 18.5'
        },
        {
            image: Up,
            title:'Normal',
            description:'IMC está entre 18.5 e 24.9'
        },
        {
            image: Down,
            title:'Sobrepeso',
            description:'IMC está entre 24.9 e 30'
        },
        {
            image: Down,
            title:'Obesidade',
            description:'IMC está entre 30 e 99'
        },
    ])

    return (
        <S.ContainerRights>
            <section>
               {cards.map((item, index)=>(
                <S.CardImc key={index}>
                    <img src={item.image} alt="3d3" />
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </S.CardImc>
               ))}
            </section>
        </S.ContainerRights>
    )
}