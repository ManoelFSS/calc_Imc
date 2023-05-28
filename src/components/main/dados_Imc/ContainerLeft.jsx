import React from 'react'
import * as S from './styles/ContainerLeftStyle'

export default function ContainerLeft(){

    return (
        <S.ContainerLefts>
            <form action="#">
                    <section>
                        <h1>Calcule seu IMC.</h1>
                        <p>
                            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
                        </p>
                        <section className='inputArea'>
                            <input type="text" id='altura' placeholder='Digite sua Altura Ex: 1.5 (em Metros)' required />
                            <label htmlFor="altura">Altura</label>
                        </section>
                        <section  className='inputArea'>
                            <input type="text" id='peso'  placeholder='Digite seu Peso Ex: 70.5 (em Kg)' required/>
                            <label htmlFor="peso">Peso</label>
                        </section>
                    </section>
                    <input className='submit' type="submit"  value={'Calcular'}/>
            </form>
        </S.ContainerLefts>
    )
}