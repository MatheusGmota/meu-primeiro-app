import React, { useState } from 'react';
import { FlatList, Alert, Button } from 'react-native';
import styled from 'styled-components/native';
import { HeaderContainer, HeaderTitle } from '../components/Header';
import { TipoItemLista } from '../types';

const HomeScreen = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState<TipoItemLista[]>([{id:"21", text:"testeAD23"}]);

  const addItem = () => {
    if (text.trim()) {
      setItems([...items, { id: Date.now().toString(), text }]);
      setText('');
    }
  };
  
  const delItem = (id: string) => {
      const novosItens = items.filter((item) => item.id != id);
      setItems([...novosItens]);
      setText('');
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>Lista de tarefas</HeaderTitle>
      </HeaderContainer>

      <Content>
        <Input
          placeholder="Digite um item"
          onChangeText={setText}
          value={text}
        />

        <AddButton onPress={addItem}>
          <ButtonText>Adicionar</ButtonText>
        </AddButton>

        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListItem>
              <ListItemText>{item.text}</ListItemText>
              <Button title='delete' onPress={() => delItem(item.id)} color={`red`}/>
            </ListItem>
          )}
        />

        <Button
          title="Sobre"
          onPress={() => Alert.alert('Bem-vindo', 'Aplicativo React Native')}
          color="#6c757d"
        />
      </Content>
    </Container>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  background-color: #292929;
`;

const Content = styled.View`
  padding: 20px;
`;

const Input = styled.TextInput`
  color: #ffffff;
  height: 40px;
  border: 1px solid #a52dd4;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
`;

const AddButton = styled.TouchableOpacity`
  background-color: #a52dd4;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

const ListItem = styled.View`
  background-color: #1f1f1f;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ListItemText = styled.Text`
  color: #f6f6f6;
  font-size: 16px;
`;

export default HomeScreen;