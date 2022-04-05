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
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
     </HighlightCards>
     </Container>
     
  )
}
