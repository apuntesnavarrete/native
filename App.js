import React from 'react';
import { View, FlatList, Text, Image, StyleSheet } from 'react-native';

const App = () => {
  // Datos de ejemplo con imágenes
  const data = [
    { id: 1, name: 'Chispas', category: 'Sub21', tournament: 'A23', league: 'ED', shield: require('./assets/chispas.png'), photo: require('./assets/chispas_campeones.jpg') },
    { id: 2, name: 'Leipzin', category: 'Libre', tournament: 'C22', league: 'ED', shield: require('./assets/leizip.png'), photo: require('./assets/leizip_campeones.jpg') },
    { id: 3, name: 'Arsenal', category: 'Femenil', tournament: 'C22', league: 'Pro Champions', shield: require('./assets/Arsenal.png'), photo: require('./assets/Arsenal_campeones.jpg') },
    // Agrega más elementos según sea necesario
  ];

  // Renderizar cada elemento de la lista
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.photo} style={styles.itemImage} />
      <Image source={item.shield} style={styles.itemShield} />
      <Text>ID: {item.id}</Text>
      <Text>Nombre del equipo: {item.name}</Text>
      <Text>Categoría: {item.category}</Text>
      <Text>Torneo: {item.tournament}</Text>
      <Text>Liga: {item.league}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Historial de Campeones</Text>
      <FlatList
        data={data} // Datos a mostrar en la lista
        renderItem={renderItem} // Función para renderizar cada elemento
        keyExtractor={(item) => item.id.toString()} // Propiedad única para cada elemento
        numColumns={2} // Acomoda dos elementos por fila
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
    textAlign:'center',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    margin: 8,
  },
  itemImage: {
    width: 150,
    height: 150,
    marginBottom: 8,
  },
  itemShield: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
});

export default App;


