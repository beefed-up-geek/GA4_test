import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  Image,
} from 'react-native';
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Geolocation from 'react-native-geolocation-service';

export default function HospitalScreen({navigation}) {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(true);

  const [openNearby, setOpenNearby] = useState(false);
  const [valueNearby, setValueNearby] = useState('전체');
  const [itemsNearby, setItemsNearby] = useState([
    {label: '전체', value: '전체'},
    {label: '1등급', value: '1'},
    {label: '2등급', value: '2'},
    {label: '3등급', value: '3'},
    {label: '4등급', value: '4'},
    {label: '5등급', value: '5'},
  ]);

  const [openDistance, setOpenDistance] = useState(false);
  const [valueDistance, setValueDistance] = useState('5');
  const [itemsDistance, setItemsDistance] = useState([
    {label: '5km이내', value: '5'},
    {label: '10km이내', value: '10'},
    {label: '20km이내', value: '20'},
  ]);

  const [openType, setOpenType] = useState(false);
  const [valueType, setValueType] = useState('전체');
  const [itemsType, setItemsType] = useState([
    {label: '전체', value: '전체'},
    {label: '일반 병원', value: '일반 병원'},
    {label: '요양 병원', value: '요양 병원'},
  ]);

  const [hospitalData, setHospitalData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(() => {
    if (!loading) {
      fetchHospitalData(searchQuery);
    }
  }, [searchQuery, valueNearby, valueDistance, valueType, loading]);

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: '위치 권한',
            message:
              '지도에서 사용자님의 위치를 보여드리기 위해 권한이 필요합니다.',
            buttonNegative: '아니요',
            buttonPositive: '네',
          },
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.error('Location permission denied');
          setLoading(false);
          return;
        }
      }
      getCurrentLocation();
    } catch (err) {
      console.warn(err);
      setLoading(false);
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        setLoading(false);
      },
      error => {
        console.error(error);
        setLoading(false);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  const fetchHospitalData = async query => {
    try {
      let response;
      if (valueType === '일반 병원') {
        response = await axios.post(
          `https://d94e-203-252-33-1.ngrok-free.app/hospital/general`,
          {
            partial_name: query,
            user_latitude: latitude,
            user_longitude: longitude,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
      } else if (valueType === '요양 병원') {
        response = await axios.post(
          `https://d94e-203-252-33-1.ngrok-free.app/hospital/nursing`,
          {
            partial_name: query,
            user_latitude: latitude,
            user_longitude: longitude,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
      } else {
        const generalResponse = await axios.post(
          `https://d94e-203-252-33-1.ngrok-free.app/hospital/general`,
          {
            partial_name: query,
            user_latitude: latitude,
            user_longitude: longitude,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        const nursingResponse = await axios.post(
          `https://d94e-203-252-33-1.ngrok-free.app/hospital/nursing`,
          {
            partial_name: query,
            user_latitude: latitude,
            user_longitude: longitude,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        response = {
          data: {
            results: [
              ...generalResponse.data.results,
              ...nursingResponse.data.results,
            ],
          },
        };
      }

      const filteredData = response.data.results.filter(
        hospital => hospital.distance < parseInt(valueDistance),
      );

      setHospitalData(filteredData);
    } catch (error) {
      console.error('Error fetching hospital data:', error);
    }
  };

  const filterHospitalsByGrade = (hospitals, grade) => {
    return grade === '전체'
      ? hospitals
      : hospitals.filter(hospital => hospital.rating === parseInt(grade));
  };

  const filteredHospitals = filterHospitalsByGrade(hospitalData, valueNearby);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <View style={styles.searchInputContainer}>
          <Image
            source={require('../../images/hospital/search.png')}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="병원 이름을 검색하세요"
            placeholderTextColor="#8E9098"
            onChangeText={text => setSearchQuery(text)}
          />
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <View style={styles.sectionHeader1}>
            <View style={styles.pickerContainer}>
              <DropDownPicker
                open={openNearby}
                value={valueNearby}
                items={itemsNearby}
                setOpen={setOpenNearby}
                setValue={setValueNearby}
                setItems={setItemsNearby}
                containerStyle={styles.dropdownContainer}
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownList1}
                textStyle={styles.dropdownText}
                dropDownDirection="BOTTOM"
              />
            </View>
            <View style={styles.pickerContainer1}>
              <DropDownPicker
                open={openDistance}
                value={valueDistance}
                items={itemsDistance}
                setOpen={setOpenDistance}
                setValue={setValueDistance}
                setItems={setItemsDistance}
                containerStyle={styles.dropdownContainer}
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownList1}
                textStyle={styles.dropdownText}
                dropDownDirection="BOTTOM"
              />
            </View>
            <View style={styles.pickerContainer1}>
              <DropDownPicker
                open={openType}
                value={valueType}
                items={itemsType}
                setOpen={setOpenType}
                setValue={setValueType}
                setItems={setItemsType}
                containerStyle={styles.dropdownContainer}
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownList1}
                textStyle={styles.dropdownText}
                dropDownDirection="BOTTOM"
              />
            </View>
          </View>
          <View style={styles.section}>
            {filteredHospitals.length === 0 ? (
              <View style={styles.noHospital}>
                <Text style={styles.noHospitalText}>병원을 검색하세요!</Text>
              </View>
            ) : (
              <>
                {filteredHospitals.map((hospital, index) => (
                  <HospitalCard key={index} hospital={hospital} />
                ))}
                <View style={styles.placeholder}></View>
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function HospitalCard({hospital}) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoritePress = () => {
    setIsFavorite(!isFavorite);
  };

  const getGradeColor = rating => {
    switch (rating) {
      case 1:
        return '#F0F5FF';
      case 2:
        return '#8bc34a';
      case 3:
        return '#ffeb3b';
      case 4:
        return '#ffc107';
      case 5:
        return '#f44336';
      default:
        return '#ffffff';
    }
  };

  const getGradeTextColor = rating => {
    switch (rating) {
      case 1:
        return '#1F4A9D';
      case 2:
        return '#1F4A9D';
      case 3:
        return '#1F4A9D';
      case 4:
        return '#1F4A9D';
      case 5:
        return '#1F4A9D';
      default:
        return '#ffffff';
    }
  };

  const getGradeBorderColor = rating => {
    switch (rating) {
      case 1:
        return '#ADC6FF';
      case 2:
        return '#ADC6FF';
      case 3:
        return '#ADC6FF';
      case 4:
        return '#ADC6FF';
      case 5:
        return '#ADC6FF';
      default:
        return '#ffffff';
    }
  };

  return (
    <View style={styles.card1}>
      <View style={styles.cardHeader}>
        <Text
          style={[
            styles.grade,
            {backgroundColor: getGradeColor(hospital.rating)},
            {color: getGradeTextColor(hospital.rating)},
            {borderColor: getGradeBorderColor(hospital.rating)},
          ]}>
          {hospital.rating}등급
        </Text>
        <TouchableOpacity
          onPress={handleFavoritePress}
          style={styles.favoriteButton}>
          <Icon
            name={isFavorite ? 'star' : 'star-border'}
            size={30}
            color="#ffcf40"
            style={styles.starIcon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.hospitalName}>{hospital.hospital_name}</Text>
      <Text style={styles.hospitalAddress}>{hospital.address}</Text>
      <Text style={styles.phone}>{hospital.phone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchSection: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 10,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    flex: 1,
    padding: 10,
  },
  sectionHeader1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  pickerContainer: {
    flex: 1,
    marginRight: 10,
  },
  pickerContainer1: {
    flex: 1,
  },
  dropdownContainer: {
    height: 40,
  },
  dropdown: {
    borderColor: '#ccc',
    borderRadius: 10,
  },
  dropdownList1: {
    borderColor: '#ccc',
  },
  dropdownText: {
    fontSize: 16,
  },
  noHospital: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  noHospitalText: {
    fontSize: 18,
    color: '#888',
  },
  card1: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  grade: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    borderWidth: 1,
  },
  favoriteButton: {
    padding: 5,
  },
  starIcon: {
    marginLeft: 5,
  },
  hospitalName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  hospitalAddress: {
    fontSize: 16,
    color: '#888',
    marginBottom: 5,
  },
  phone: {
    fontSize: 14,
    color: '#888',
  },
  placeholder: {
    height: 80,
  },
});
