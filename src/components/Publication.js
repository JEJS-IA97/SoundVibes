import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Publication = ({ imagen, descripcion }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imagen }} style={styles.imagen} />
      <Text style={styles.texto}>{descripcion}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  imagen: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  texto: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default Publication;