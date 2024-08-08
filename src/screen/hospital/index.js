import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  PermissionsAndroid,
  Platform,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Geolocation from 'react-native-geolocation-service';
import styles from './styles';
import {useAPI} from '../../contexts/API/APIContext';

export default function HospitalScreen({navigation}) {
  const [hospitalData, setHospitalData] = useState([]);
  const [nearbyHospitals, setNearbyHospitals] = useState([]);
  const [nearbyGrade, setNearbyGrade] = useState('모든 병원');
  const [currentGrade, setCurrentGrade] = useState('모든 병원');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(true);
  const url = useAPI();

  const [openNearby, setOpenNearby] = useState(false);
  const [itemsNearby, setItemsNearby] = useState([
    {label: '모든 병원', value: '모든 병원'},
    {label: '1등급', value: '1등급'},
    {label: '2등급', value: '2등급'},
    {label: '3등급', value: '3등급'},
    {label: '4등급', value: '4등급'},
    {label: '5등급', value: '5등급'},
  ]);

  const [openCurrent, setOpenCurrent] = useState(false);
  const [itemsCurrent, setItemsCurrent] = useState([
    {label: '모든 병원', value: '모든 병원'},
    {label: '1등급', value: '1등급'},
    {label: '2등급', value: '2등급'},
    {label: '3등급', value: '3등급'},
    {label: '4등급', value: '4등급'},
    {label: '5등급', value: '5등급'},
  ]);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      fetchNearbyHospitals();
      fetchAddress();
    }
  }, [latitude, longitude]);

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
          return;
        }
      }
      getCurrentLocation();
    } catch (err) {
      console.warn(err);
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

  const fetchNearbyHospitals = async () => {
    try {
      const response = await axios.get(
        `${url}/hospital/?latitude=${latitude}&longitude=${longitude}&range=3`,
      );
      setNearbyHospitals(response.data);
    } catch (error) {
      console.error('Error fetching nearby hospitals:', error);
    }
  };

  const fetchAddress = async () => {
    try {
      const response = await axios.get(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${longitude}&y=${latitude}&input_coord=WGS84`,
        {
          headers: {
            Authorization: 'KakaoAK 915a6eb15cbe0b6d575de1418df95a38',
          },
        },
      );
      const address = response.data.documents[0].address.address_name;
      setAddress(address);
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };

  const filterHospitalsByGrade = (hospitals, grade) => {
    return grade === '모든 병원'
      ? hospitals
      : hospitals.filter(hospital => hospital.rating === parseInt(grade[0]));
  };

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
        <TouchableOpacity
          style={styles.searchInputContainer}
          activeOpacity={1}
          onPress={() => navigation.navigate('Search')}>
          <View pointerEvents="none">
            <TextInput
              style={styles.input}
              placeholder="가까운 병원 검색 하기"
              placeholderTextColor="#777"
              editable={false}
            />
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.mapButton}
          onPress={() => navigation.navigate('Map')}>
          <Text style={styles.mapButtonText}>지도로 찾기</Text>
        </TouchableOpacity> */}
      </View>
      <View style={styles.addressContainer}>
        <Icon name="location-on" size={20} color="#000" />
        <Text style={styles.locationText}>{address}</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>내 주변 투석 병원</Text>
            <View style={styles.pickerContainer}>
              <DropDownPicker
                open={openNearby}
                value={nearbyGrade}
                items={itemsNearby}
                setOpen={setOpenNearby}
                setValue={setNearbyGrade}
                setItems={setItemsNearby}
                containerStyle={styles.dropdownContainer}
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownList}
                textStyle={styles.dropdownText}
                listItemContainerStyle={styles.listItemContainer}
                listItemLabelStyle={styles.listItemLabel}
                zIndex={3000}
                zIndexInverse={1000}
              />
            </View>
          </View>
          <View>
            {nearbyHospitals.length === 0 ? (
              <View style={styles.card}>
                <Text style={styles.noHospitalText}>
                  조건에 맞는 병원이 없습니다
                </Text>
              </View>
            ) : filterHospitalsByGrade(nearbyHospitals, nearbyGrade).length ===
              0 ? (
              <View style={styles.card}>
                <Text style={styles.noHospitalText}>
                  조건에 맞는 병원이 없습니다
                </Text>
              </View>
            ) : (
              filterHospitalsByGrade(nearbyHospitals, nearbyGrade).map(
                (hospital, index) => (
                  <HospitalCard key={index} hospital={hospital} />
                ),
              )
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
