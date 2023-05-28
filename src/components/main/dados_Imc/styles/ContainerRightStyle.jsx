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