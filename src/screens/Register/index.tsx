import React, {useState} from "react";
import { Modal } from "react-native";
import { useForm } from "react-hook-form";

import { InputForm } from "../../components/form/InputForm";
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
interface FormData {
  name: string; 
  amount: string;
}

export function Register () {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen,setCategoryModalOpen] = useState(false);
  
  const [category, setCategory] = useState({
    key: 'category',
    name: 'category'
  });

  const {
    control,
    handleSubmit
  } = useForm()

  function handleTransactionsTypeSelect(type: 'up' | 'down') {
    setTransactionType(type)
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true)
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false)
  }

  function handleRegister(form : Partial<FormData>) {
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }
    console.log(data)
  }


  return(
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Filds>  
          <InputForm 
          name="name"
          control={control} 
          placeholder="Nome"
          />
          <InputForm 
          name="amount"
          control={control} 
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

        <Button
         title="Enviar"
         onPress={handleSubmit(handleRegister)}
         />
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