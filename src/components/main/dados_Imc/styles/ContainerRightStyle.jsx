import styled from 'styled-components';

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
      border: solid red 1px;
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
   max-width:250px;
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
   @media(max-width:524px){
      max-width: 150px;
   }
   @media(max-width:402px){
      max-width: 130px;
      height:150px;
   }
   
   img{
      width:90px;
      height: 90px;
      background-color: #0000004e;
      padding: 20px;
      border-radius: 50%;
      @media(max-width:524px){
          height: 50px;
          width: 50px;
          padding: 10px;
      }
   }

   h2{
    font-size: 14px;
   }
`;