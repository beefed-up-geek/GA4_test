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
import styles from './styles'; // assuming the styles are imported from a separate file

export default function HospitalScreen({navigation}) {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(true);

  const [hospitalStatus, setHospitalStatus] = useState({
    상급종합병원: false,
    종합병원: false,
    요양병원: false,
    병원: false,
    의원: false,
  });

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
    {label: '5km내', value: '5'},
    {label: '10km내', value: '10'},
    {label: '20km내', value: '20'},
  ]);

  const [hospitalData, setHospitalData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      fetchAddress();
    }
  }, [latitude, longitude]);

  useEffect(() => {
    if (!loading) {
      fetchHospitalData(searchQuery);
    }
  }, [searchQuery, hospitalStatus, valueNearby, valueDistance, loading]);

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

  const fetchAddress = async () => {
    try {
      const response = await axios.get(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${longitude}&y=${latitude}&input_coord=WGS84`,
        {
          headers: {
            Authorization: 'KakaoAK 9ad78febe2e7118089f1c23240bfb973',
          },
        },
      );
      const address = response.data.documents[0].address.address_name;
      setAddress(address);
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };

  const fetchHospitalData = async query => {
    try {
      const response = await axios.post(
        `https://1ab8-203-252-33-4.ngrok-free.app/hospital`,
        {
          hospitalName: query,
          user_latitude: latitude,
          user_longitude: longitude,
          hospitalStatus: hospitalStatus,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const filteredData = response.data.results.filter(
        hospital => hospital.distance < parseInt(valueDistance),
      );

      setHospitalData(filteredData);
    } catch (error) {
      console.error('Error fetching hospital data:', error);
    }
  };

  const toggleHospitalStatus = hospital => {
    setHospitalStatus(prevStatus => ({
      ...prevStatus,
      [hospital]: !prevStatus[hospital],
    }));
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
      <View style={styles.addressContainer}>
        <Icon name="location-on" size={20} color="#000" />
        <Text style={styles.locationText}>{address}</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <View style={styles.sectionHeader1}>
            <View style={styles.pickerContainer}>
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
          </View>
          <View style={styles.buttonContainer}>
            {Object.keys(hospitalStatus).map(hospital => (
              <TouchableOpacity
                key={hospital}
                style={[
                  styles.button,
                  hospitalStatus[hospital] && styles.buttonActive,
                ]}
                onPress={() => toggleHospitalStatus(hospital)}>
                <Text style={styles.buttonText}>{hospital}</Text>
              </TouchableOpacity>
            ))}
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
          <View style={styles.whiteBox}></View>
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
        return 'rgba(240, 245, 255, 1)'; // 1등급 색상, 투명도 0.5
      case 2:
        return 'rgba(208, 188, 255, 0.16)'; // 2등급 색상, 투명도 0.16
      case 3:
        return 'rgba(208, 188, 255, 0.16)'; // 3등급 색상, 투명도 0.16
      case 4:
        return 'rgba(208, 188, 255, 0.16)'; // 4등급 색상, 투명도 0.16
      case 5:
        return 'rgba(208, 188, 255, 0.16)'; // 5등급 색상, 투명도 0.16
      default:
        return 'rgba(255, 255, 255, 1)'; // 기본 색상, 투명도 1 (불투명)
    }
  };

  const getGradeTextColor = rating => {
    switch (rating) {
      case 1:
        return 'rgba(47, 84, 235, 1)'; // 1등급 텍스트 색상, 투명도 0.5
      case 2:
        return 'rgba(103, 80, 164, 1)'; // 2등급 텍스트 색상, 투명도 1
      case 3:
        return 'rgba(103, 80, 164, 1)'; // 3등급 텍스트 색상, 투명도 1
      case 4:
        return 'rgba(103, 80, 164, 1)'; // 4등급 텍스트 색상, 투명도 1
      case 5:
        return 'rgba(103, 80, 164, 1)'; // 5등급 텍스트 색상, 투명도 1
      default:
        return 'rgba(255, 255, 255, 1)'; // 기본 텍스트 색상, 투명도 1 (불투명)
    }
  };

  const getGradeBorderColor = rating => {
    switch (rating) {
      case 1:
        return 'rgba(173, 198, 255, 1)'; // 1등급 테두리 색상, 투명도 0.5
      case 2:
        return 'rgba(103, 80, 164, 0.22)'; // 2등급 테두리 색상, 투명도 0.22
      case 3:
        return 'rgba(103, 80, 164, 0.22)'; // 3등급 테두리 색상, 투명도 0.22
      case 4:
        return 'rgba(103, 80, 164, 0.22)'; // 4등급 테두리 색상, 투명도 0.22
      case 5:
        return 'rgba(103, 80, 164, 0.22)'; // 5등급 테두리 색상, 투명도 0.22
      default:
        return 'rgba(255, 255, 255, 1)'; // 기본 테두리 색상, 투명도 1 (불투명)
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
      <Text style={styles.hospitalName}>{hospital.요양기관명}</Text>
      <Text style={styles.hospitalAddress}>{hospital.주소}</Text>
      <Text style={styles.phone}>{hospital.전화번호}</Text>
    </View>
  );
}
