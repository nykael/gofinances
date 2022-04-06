import React, {useState} from "react";

import { Input } from "../../components/form/Input";
import { Button } from "../../components/form/Button";
import { TransactionTypeButton  } from "../../components/form/TransactionTypeButton";

import { 
  Container,
  Header,
  Title,
  Form,
  Filds,
  TransactionsTypes,
} from "./styles";

export function Register () {
  const [transactionType, setTransactionType] = useState('')

  function handleTransactionsTypeSelect(type: 'up' | 'down') {
    setTransactionType(type)
  }


  return(
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Filds>  
          <Input  
          placeholder="Nome"
          />
          <Input  
          placeholder="Preço"
          />
          <TransactionsTypes>
            <TransactionTypeButton 
              type="up"
              title="Income"
              onPress={() => handleTransactionsTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton 
              type="down"
              title="Outcome"
              onPress={() => handleTransactionsTypeSelect('down')}
              isActive={transactionType === 'down'}

            />
          </TransactionsTypes>
        </Filds>

        <Button title="Enviar"/>
      </Form>

    </Container>
  )
}