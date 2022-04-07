import React, {useState} from "react";
import { Modal } from "react-native";

import { Input } from "../../components/form/Input";
import { Button } from "../../components/form/Button";
import { TransactionTypeButton  } from "../../components/form/TransactionTypeButton";
import { CategorySelectButton  } from "../../components/form/CategorySelectButton";

import { CategorySelect } from "../CategoySelect";

import { 
  Container,
  Header,
  Title,
  Form,
  Filds,
  TransactionsTypes,
} from "./styles";

export function Register () {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen,setCategoryModalOpen] = useState(false);
  
  const [category, setCategory] = useState({
    key: 'category',
    name: 'category'
  });

  function handleTransactionsTypeSelect(type: 'up' | 'down') {
    setTransactionType(type)
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true)
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false)
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

          <CategorySelectButton 
          title={category.name}
          onPress={handleOpenSelectCategoryModal}
          />

        </Filds>

        <Button title="Enviar"/>
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect 
          category={category}
          setCategory={setCategory}
          colseSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>

    </Container>
  )
}