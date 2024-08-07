// /src/screen/medicine/index.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import { launchCamera } from 'react-native-image-picker';

const MedicineScreen = () => {
  const [medicines, setMedicines] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMedicines, setFilteredMedicines] = useState([]);

  useEffect(() => {
    fetchMedicines('');
  }, []);

  useEffect(() => {
    fetchMedicines(searchQuery);
  }, [searchQuery]);

  const fetchMedicines = async (query) => {
    try {
      const response = await axios.post('https://722e-203-252-33-4.ngrok-free.app/medicine', {
        keyword: query,
      });
      const results = response.data.results.map((item, index) => ({
        id: `${item['품목기준코드 [ITEM_SEQ] ']}_${index}`, // Composite key
        name: item['품목명'],
        comp: item['표시성분'] ? item['표시성분'].join(', ') : null,
        base64_image: item['base64_img'],
      }));
      setMedicines(results);
      setFilteredMedicines(results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCameraPress = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: true,
    };
    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else if (response.assets && response.assets.length > 0) {
        const base64Image = response.assets[0].base64;
        console.log(base64Image);
      }
    });
  };

  const renderMedicineItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {item.base64_image ? (
        <Image source={{ uri: `data:image/png;base64,${item.base64_image}` }} style={styles.image} />
      ) : (
        <View style={styles.imagePlaceholder} />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        {item.comp && (
          <View style={styles.tagContainer}>
            {item.comp.split(', ').map((comp, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{comp}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.screenInfo}>
        지금 먹고 있는 약이 신장에 나쁜 영향을 주는지 알려드려요!
      </Text>
      <View style={styles.searchContainer}>
        <Icon name="search" size={16} color="#777" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="약 이름을 검색해 주세요."
          placeholderTextColor="#777"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity onPress={handleCameraPress}>
          <Icon name="camera" size={20} color="#777" style={styles.cameraIcon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.subheader}>자주 찾는 약</Text>
      <FlatList
        data={filteredMedicines}
        renderItem={renderMedicineItem}
        keyExtractor={item => item.id} // Use the composite key as the key extractor
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
  screenInfo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25, // Make the search bar more rounded
    marginBottom: 16,
    paddingHorizontal: 10,
    backgroundColor: '#f2f2f2', // Light gray background
  },
  searchIcon: {
    marginRight: 10,
  },
  cameraIcon: {
    marginLeft: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  subheader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 16,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 16,
    borderRadius: 10,
  },
  imagePlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: '#eee',
    marginRight: 16,
    borderRadius: 10,
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
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
  },
  tag: {
    backgroundColor: '#ffcccc',
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 4,
    marginTop: 4,
  },
  tagText: {
    color: '#f00',
    fontSize: 12,
  },
});

export default MedicineScreen;
