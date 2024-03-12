// SearchScreen.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';

const SearchScreen = ({ navigation }) => {
  const searchData = [
    { id: '1', name: 'Resultado 1' },
    { id: '2', name: 'Resultados 2' },
    // Agrega más elementos según sea necesario
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.resultItem} onPress={() => console.log(`Seleccionado: ${item.name}`)}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} />
      <View style={styles.searchContainer}>
        <TextInput style={styles.input} placeholder="Buscar..." />
      </View>
      <FlatList
        data={searchData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <BottomBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  resultItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});

export default SearchScreen;
