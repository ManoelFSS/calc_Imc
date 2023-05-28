import styled from 'styled-components';

export const ContainerLefts = styled.section`
   display: flex;
   justify-content: center;
   align-items: center;
   min-width: 300px;
   border: solid red 1px;

   form{
    width: 550px;
    min-width: 300px;
    padding: 0px 10px;
   }

   h1{
    font-size: 45px;
    @media(max-width:524px){
         font-size: 30px;
    }
  }

   p{
    font-size: 16px;
    @media(max-width:402px){
      font-size: 12px;
     
    }
   }

   .inputArea{
    position: relative;
    margin-top: 30px;
   }

   label{
    display: block;
    font-size: 18px;
    font-weight: bold;
    position: absolute;
    bottom: 5px;
    transition: all 0.5s;
    width: 100%;
    background-color: #fff;
   }

   input {
     width:100%;
     height:30px;
     border: solid  2px transparent;
     border-bottom: solid 2px #00547a ;
     outline:none;
     font-size: 14px;
     font-weight:400;
     cursor: pointer;
     transition: all 0.5s;

     &:hover{
      border: #00547a solid 2px;
     }
     &:hover  ~ label, &:active, &:focus{
       bottom: 30px;
     }
     &:focus ~ label, &:active ~ label{
       bottom: 30px;
     }

    &:hover::placeholder {
      color: red;
      
    }
   }

   .submit{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: #00547a;
    height:50px;
    border-radius:10px;
    transition: all 0.3s;
    font-size: 16px;
    font-weight: bolder;
    color: #fff;
    margin-top: 10px;
    cursor: pointer;

    &:hover{
      background-color: #002333;
    }
  
   }

`;
