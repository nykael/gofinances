import React, {useState, useEffect} from "react";
import { 
  Modal, 
  TouchableWithoutFeedback, 
  Keyboard, 
  Alert } from "react-native";
  import * as Yup from 'yup'
  import {yupResolver} from '@hookform/resolvers/yup'
  import  AsyncStorage from "@react-native-async-storage/async-storage";
  
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

const schema = Yup.object().shape({
  name: Yup
  .string()
  .required('Nome é obrigatório'),
  amount: Yup
  .number()
  .typeError('Informe um valor númerico')
  .positive('O valor não pode ser negativo')
})

export function Register () {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen,setCategoryModalOpen] = useState(false);

  const dataKey = '@gofinances:transaction'

  
  const [category, setCategory] = useState({
    key: 'category',
    name: 'category'
  });

  const {
    control,
    handleSubmit,
    formState: {errors}
  } = useForm({
    resolver : yupResolver(schema)
  })

  function handleTransactionsTypeSelect(type: 'up' | 'down') {
    setTransactionType(type)
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true)
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false)
  }

  async function handleRegister(form : Partial<FormData>) {
    if( !transactionType)
    return Alert.alert('Selecione o tipo de transação')

    if(category.key ==='category')
    return Alert.alert('Selecione a categotia')


    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }

      try {
        await AsyncStorage.setItem(dataKey, JSON.stringify(data))

      } catch (error) {
        console.log(error)
        Alert.alert('Não foi possível salvar')
      }
  }

  useEffect(() => {
     async function loadData() {
      const data = await AsyncStorage.getItem(dataKey);
      console.log(JSON.parse(data!))
     }
     loadData()
  }, [])


  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.name && errors.name.message}
            />
            <InputForm 
            name="amount"
            control={control} 
            placeholder="Preço"
            keyboardType="numeric"
            error={errors.amount && errors.amount.message}
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
    </TouchableWithoutFeedback>
  )
}