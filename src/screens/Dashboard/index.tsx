import React from "react";
import { HighlightCard } from "../../components/HighlightCard";

import { 
  Container,
   Header,
   UserWrapper,
   UserInfo,
   Photo,
   User,
   UserGreeting,
   UserName,
   Incon,
   HighlightCards
} from "./styles";

export function Dashboard() {
  return(
  <Container>
    <Header>

      <UserWrapper>
        <UserInfo>
         <Photo 
           source={{uri:
            'https://avatars.githubusercontent.com/u/68310102?v=4' }}/>
           <User>
             <UserGreeting>Olá,</UserGreeting>
             <UserName>Nykael</UserName>
           </User>
         </UserInfo>
         <Incon name='power' />
       </UserWrapper>
      
     </Header>
     <HighlightCards>
        <HighlightCard 
        type="up"
        title="Entradas" 
        amount="R$ 17.400,00" 
        lastTransaction="Última entrada dia 13 de abrial"
        />
        <HighlightCard 
        type="down"
        title="Saídas" 
        amount="R$ 1.259,00" 
        lastTransaction="Última saída dia 03 de abrial"
        />
        <HighlightCard 
        type="total"
        title="Total" 
        amount="R$ 16.141,00" 
        lastTransaction="01 á 16 de abrial"
        />
     </HighlightCards>
     </Container>
     
  )
}
