import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HealthScreen from '../screen/healthscreen';
import HomeScreen from '../screen/home/hardcoding';
import MedicineScreen from '../screen/medicine';
import KitScreen from '../screen/kit';
import DietScreen from '../screen/diet';
import Authentication1Screen from '../screen/healthscreen/authentication1';
import Authentication2Screen from '../screen/healthscreen/authentication2';
import Authentication3Screen from '../screen/healthscreen/authentication3';
import Header from './header';
import Kit_checkupScreen1 from '../screen/Kit_checkup';
import Kit_checkupScreen2 from '../screen/Kit_checkup/Kit_checkup2';
import Kit_checkupScreen3 from '../screen/Kit_checkup/Kit_checkup3';
import QRCodeScreen from '../screen/Kit_checkup/QRcode';
import TabDesign from './bottomtab_design';
import GetUserInfo from '../screen/login/get_usr_info';

const Stack = createStackNavigator();

const stackScreenOptions = {
  headerTitle: () => <Header />,
  headerLeft: () => null,
};

const HealthStack = () => (
  <Stack.Navigator screenOptions={stackScreenOptions}>
    <Stack.Screen name="Health" component={HealthScreen} />
    <Stack.Screen name="Authentication1" component={Authentication1Screen} />
    <Stack.Screen name="Authentication2" component={Authentication2Screen} />
    <Stack.Screen name="Authentication3" component={Authentication3Screen} />
  </Stack.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator screenOptions={stackScreenOptions}>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

const MedicineStack = () => (
  <Stack.Navigator screenOptions={stackScreenOptions}>
    <Stack.Screen name="Medicine" component={MedicineScreen} />
  </Stack.Navigator>
);

const KitStack = () => (
  <Stack.Navigator screenOptions={stackScreenOptions}>
    <Stack.Screen name="Kit" component={KitScreen} />
    <Stack.Screen name="Kit_checkup1" component={Kit_checkupScreen1} />
    <Stack.Screen name="Kit_checkup2" component={Kit_checkupScreen2} />
    <Stack.Screen name="Kit_checkup3" component={Kit_checkupScreen3} />
    <Stack.Screen name="QRcode" component={QRCodeScreen} />
  </Stack.Navigator>
);

const DietStack = () => (
  <Stack.Navigator screenOptions={stackScreenOptions}>
    <Stack.Screen name="Diet" component={DietScreen} />
  </Stack.Navigator>
);

const BottomNavigation = () => {
  const [selected, setSelected] = useState('Home');
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1}}>
        {selected === 'Home' && <HomeStack />}
        {selected === 'HealthCheck' && <HealthStack />}
        {selected === 'KitResult' && <KitStack />}
        {selected === 'RecommendDiet' && <DietStack />}
        {selected === 'DrugSearch' && <MedicineStack />}
      </View>
      <View style={styles.floatingContainer}>
        <View style={styles.container}>
          <TabDesign
            label="홈 화면"
            iconName="home-outline"
            isSelected={selected === 'Home'}
            onPress={() => {
              setSelected('Home');
              navigation.navigate('Home');
            }}
          />
          <TabDesign
            label="키트 결과"
            iconName="pencil-outline"
            isSelected={selected === 'KitResult'}
            onPress={() => {
              setSelected('KitResult');
              navigation.navigate('KitResult');
            }}
          />
          <TabDesign
            label="건강검진"
            iconName="heart-outline"
            isSelected={selected === 'HealthCheck'}
            onPress={() => {
              setSelected('HealthCheck');
              navigation.navigate('HealthCheck');
            }}
          />
          <TabDesign
            label="추천 식단"
            iconName="silverware-fork-knife"
            isSelected={selected === 'RecommendDiet'}
            onPress={() => {
              setSelected('RecommendDiet');
              navigation.navigate('RecommendDiet');
            }}
          />
          <TabDesign
            label="약 검색"
            iconName="pill"
            isSelected={selected === 'DrugSearch'}
            onPress={() => {
              setSelected('DrugSearch');
              navigation.navigate('DrugSearch');
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  floatingContainer: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: [{translateX: -175}],
    backgroundColor: 'transparent',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    width: 350,
    borderRadius: 24,
    elevation: 5,
  },
});

export default BottomNavigation;
