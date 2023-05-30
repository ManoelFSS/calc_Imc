import React, {useState, useEffect} from 'react';
import * as S from './AreaMAinStyle'
import Down from '../../assets/down.png'
import Up from '../../assets/up.png'
import Seta from '../../assets/seta.png'

export default function MAin(){
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [imc, setImc] = useState(null)
    const [imcResult, setimcResult] = useState(null)
    const [model,setmodel] = useState('')



    
    const [cards, setcards] = useState([

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


    const hendleAltura = (e)=>{
       setAltura(e)
    }
    const hendlePeso = (e)=>{
       setPeso(e)
    }
    
    useEffect(()=>{
        setImc(peso / (altura * altura))
        setimcResult(Math.round(imc * 100) / 100)
     })

     // area card modal

     const [image, setImage] = useState()
     const [title, setTitle] = useState()
     const [description, setDescription] = useState()
     const [backColor, setBackColor] = useState()

     const hendleSubmit = ()=>{
        event.preventDefault()
        console.log(imcResult)
        if(imcResult < 18.5){
            setImage(Down)
            setTitle('Magreza')
            setDescription(`IMC está entre 0 e ${imcResult}`)
            setBackColor('#949494')
        }else if(imcResult > 18.5 && imcResult < 24.9){
            setImage(Up)
            setTitle('Normal')
            setDescription(`IMC está entre 18.5 e ${imcResult}`)
            setBackColor('#3bfa3b')
        }else if(imcResult > 24.9 && imcResult < 30){
            setImage(Down)
            setTitle('Sobrepeso')
            setDescription(`IMC está entre 24.9 e ${imcResult}`)
            setBackColor('#fcd736')
        }else if(imcResult > 30 && imcResult < 40){
            setImage(Down)
            setTitle('OBESIDADE')
            setDescription(`IMC está entre 30 e ${imcResult}`)
            setBackColor('#fd4343')
        }else if(imcResult > 40){
            setImage(Down)
            setTitle('OBESIDADE GRAVE')
            setDescription(`IMC está entre 30 e ${imcResult}`)
            setBackColor('#ff0000')
        }

        if(altura != '' &&  peso != ''){
            setmodel('flex')
        }
     
      }



 

    return (
        <S.Main>
            <S.Container>
                <S.ContainerLefts >
                    <form action="#">
                            <section>
                                <h1>Calcule seu IMC.</h1>
                                <p>
                                    IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
                                </p>
                                <section className='inputArea'>
                                    <S.Input type="text" id='altura' placeholder='Digite sua Altura Ex: 1.5 (em Metros)' required 
                                       value={altura}  onChange={(e)=> hendleAltura(e.target.value)} 
                                    />
                                    <label htmlFor="altura">Altura</label>
                                </section>
                                <section  className='inputArea'>
                                    <S.Input type="text" id='peso'  placeholder='Digite seu Peso Ex: 70.5 (em Kg)' required
                                       value={peso} onChange={(e)=> hendlePeso(e.target.value)} 
                                    />
                                    <label htmlFor="peso">Peso</label>
                                </section>
                            </section>
                            <button onClick={()=> hendleSubmit()}>Calcular</button>
                    </form>
                </S.ContainerLefts>
                
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
                <S.Modal model={model}>
                    <aside>
                        <S.CardImcModal backColor={backColor}> 
                            <div>
                                <img src={Seta} alt="seta para fechar modal" onClick={()=> setmodel('none')} />
                            </div>
                            <img src={image} alt="maozinha" />
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </S.CardImcModal>                    
                    </aside>
                </S.Modal>
            </S.Container>
        </S.Main>
    )
}