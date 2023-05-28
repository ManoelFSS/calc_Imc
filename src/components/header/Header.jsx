import React from "react";
import * as S from'./Headerstyled'
import Logo from '../../assets/imc.png'


export default function Header(){

    return (
        <S.Headers>
            <S.Container>
                <img src={Logo} alt="logo tipo imc" />
            </S.Container>
        </S.Headers>
    )
}