import React from 'react';
import * as S from './AreaMAinStyle'
import ContainerLeft from './dados_Imc/ContainerLeft'
import ContainerRight from './dados_Imc/ContainerRight'

export default function MAin(){

    return (
        <S.Main>
            <S.Container>
                <ContainerLeft/>
                <ContainerRight/>
            </S.Container>
        </S.Main>
    )
}