import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 100px);
   
`;

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap-reverse;
    width: 80%;
    position: relative;
    @media(max-width:524px){
       width:100%;
    }
`;


export const ContainerLefts = styled.section`
   display: flex;
   justify-content: center;
   align-items: center;
   min-width: 300px;

   form{
    width: 550px;
    min-width: 300px;
    padding: 0px 10px 10px;
   }

   h1{
    font-size: 45px;
    padding-top:24px;
    @media(max-width:1300px){
      font-size: 30px;
      margin-top: 40px;
    }
  }

   p{
    font-size: 16px;
    @media(max-width:524px){
      font-size: 12px;
    }
    @media(max-width:400px){
      font-size: 10px;
     
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

   button{
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


export const ContainerRights = styled.section`
   display: flex;
   align-items: center;
   justify-content: center;
  
 

   section {
      display: flex;
      max-width:550px;
      min-width: 300px;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
   }

   div:nth-child(1){
      background-color: #949494;
   }
   div:nth-child(2){
      background-color: #3bfa3b;
   }
   div:nth-child(3){
      background-color: #fcd736;
   } div:nth-child(4){
      background-color: #fd4343;
   }
`;

export const CardImc = styled.div`
   width:250px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 20px;
   padding: 10px;
   text-align: center;
   color: #fff;
   border-radius: 20px;
   box-shadow: 1px 3px 15px #0000009e;
   text-shadow: 0px 2px 4px #000;

   @media(max-width:768px){
      max-width: 220px;
      height:130px;
      gap: 10px;
   }
   @media(max-width:652px){
      max-width: 200px;
   }

   @media(max-width:524px){
      max-width: 150px;
   }

   @media(max-width:402px){
      max-width: 130px;
   }
   
   img{
      width:90px;
      height: 90px;
      background-color: #0000004e;
      padding: 20px;
      border-radius: 50%;
      @media(max-width:1300px){
          height: 40px;
          width: 40px;
          padding: 10px;
      }
   }

   h2{
    font-size: 15px;
   
   }
  
   p{
      font-size: 13px;
      font-weight: 600;
   }
  
`;

export const Modal = styled.section`
   position: absolute;
   top: 0;
   left: 0;
   min-width: 100%;
   height: 101%;
   display: ${props => props.model || 'none' };
   background-color: #f0f0f0a4;
   justify-content: flex-end;
   align-items: center;
   @media(max-width:1374px){
      align-items: flex-start;
      justify-content: center;
      
   }

   aside{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 102%;
      background-color: #002333;
      position: relative;
   

      @media(max-width:1374px){
         width: 100%;
         height: 54%;
      }
      @media(max-width:524px){
         width: 100%;
         height: 50%;
      }
      @media(max-width:402px){
         width: 100%;
         height: 52%;
      }
   }

   div{
      margin-right: 10px;
      cursor: pointer;
      width: 40px;
      height: 40px;
      position: absolute;
      left: -30px;
     
      @media(max-width:1374px){
         left:unset;
         transform: rotate(-90deg);
         bottom:-30px;
      }
   

      img{
         cursor: pointer;
         background-color: #00547a;
         padding: 15px;
         border-radius: 50%;
         width: 60px;
         height: 60px;
         
      }
   }
`;

export const CardImcModal = styled.section`
   width:250px;
   height: 250px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 20px;
   padding: 10px;
   text-align: center;
   color: #fff;
   border-radius: 20px;
   box-shadow: 1px 3px 15px #0000009e;
   text-shadow: 0px 2px 4px #000;
   background-color:${props => props.backColor};
   position: relative;
   
   
   img{
      width: 80px;
      height: 80px;
      background-color: #00000063;
      padding: 15px;
      border-radius: 50%;
   }

`;
