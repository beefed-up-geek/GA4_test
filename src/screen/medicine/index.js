// /src/screen/medicine/index.js
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Image, TextInput} from 'react-native';

// JSON 파일을 import
const data = require('./data.json');

const MedicineScreen = () => {
  const [medicines, setMedicines] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMedicines, setFilteredMedicines] = useState([]);

  useEffect(() => {
    setMedicines(data.medicines);
    setFilteredMedicines(data.medicines);
  }, []);

  useEffect(() => {
    filterMedicines(searchQuery);
  }, [searchQuery, medicines]);

  const filterMedicines = query => {
    if (query) {
      const filteredData = medicines.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredMedicines(filteredData);
    } else {
      setFilteredMedicines(medicines);
    }
  };

  const renderMedicineItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.base64_image}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.effect}>{item.effect}</Text>
        <Text style={styles.sideEffect}>{item.side_effect}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.screenInfo}>
        이 화면은 /src/screen/home/index.js 🎉
      </Text>
      <View style={styles.header}>
        <Image
          source={require('../../images/medicine/spongebob.png')}
          style={styles.spongebob}
        />
        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>
            신장에 위험한 약물을 제가 알려드려요
          </Text>
        </View>
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="검색어를 입력하세요..."
        placeholderTextColor="#777"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredMedicines}
        renderItem={renderMedicineItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  spongebob: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
  bubble: {
    marginLeft: 10,
    backgroundColor: '#e6f7ff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  bubbleText: {
    fontSize: 14,
    color: 'black',
  },
  screenInfo: {
    color: 'black',
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  effect: {
    fontSize: 16,
    color: '#555',
  },
  sideEffect: {
    fontSize: 14,
    color: '#f00',
  },
});

export default MedicineScreen;
