import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import analytics from '@react-native-firebase/analytics'; // Firebase Analytics import 추가
import { useFocusEffect } from '@react-navigation/native';

const Medicine = ({navigation}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState('name');

  const [startTime, setStartTime] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      const start = new Date().getTime();
      setStartTime(start);
      //console.log("Im in homescreen");
      return () => {
        const end = new Date().getTime();
        const timeSpent = (end - start) / 1000; // 시간을 초 단위로 계산
        logScreenTime(timeSpent);
        //console.log("Im out of homescreen");
      };
    }, [])
  );

  const logScreenTime = async (timeSpent) => {
    try {
      await analytics().logEvent('screen_time', {
        screen_name: 'MedicineScreen',
        time_spent: timeSpent, // 초 단위로 기록
      });
      console.log(`Logged time: ${timeSpent} seconds on MedicineScreen`);
    } catch (error) {
      console.error('Failed to log screen time:', error);
    }
  };

  const recentSearches =
    selectedOption === 'name'
      ? ['아로나민', '콜대원', '어린이부루펜']
      : ['이부프로펜', '아세트아미노펜', '덱시부프로펜'];

  const popularSearches =
    selectedOption === 'name'
      ? [
          '판피린',
          '판콜에스',
          '어린이부루펜',
          '겔포스',
          '탁센',
          '이지엔',
          '이가탄',
          '타이레놀',
          '아스피린',
        ]
      : [
          '이부프로펜',
          '아세트아미노펜',
          '덱시부프로펜',
          '산화마그네슘',
          '파마브롬',
          '나프록센',
          'L-아르기닌',
          '덱스판테놀',
        ];

  const handleSearch = () => {
    if (searchTerm) {
      navigation.navigate('searchResult', {
        query: searchTerm,
        selectedOption: selectedOption,
      });
    }
  };

  // 새로운 함수: 검색어를 설정하고 검색 실행
  const handleRecentOrPopularSearch = term => {
    setSearchTerm(term);
    navigation.navigate('searchResult', {
      query: term,
      selectedOption: selectedOption,
    });
  };

  return (
    <SafeAreaView>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text style={styles.titleText}>
            지금 먹고 있는 약에 신장에 좋지 않은 성분이 들어있는지 확인해보세요
          </Text>
          <View style={styles.searchContainer}>
            <View style={styles.searchInnerContainer}>
              <View style={styles.iconContainer}>
                <ImageBackground
                  style={styles.icon}
                  source={require('./assets/images/07c8ab36-f5a9-42c0-bb87-db3d6e00682c.png')}
                />
              </View>
              <TextInput
                style={styles.textInput}
                placeholder="이름을 검색해 주세요."
                placeholderTextColor="#8e9097"
                value={searchTerm}
                onChangeText={text => setSearchTerm(text)}
              />
              <TouchableOpacity
                style={styles.searchButton}
                onPress={handleSearch}>
                <Text style={styles.searchButtonText}>검색하기</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.optionsContainer}>
            <View
              style={[
                styles.optionButton,
                selectedOption === 'name' && styles.selectedOptionButton,
              ]}
              onTouchEnd={() => setSelectedOption('name')}>
              <Text
                style={[
                  styles.optionText,
                  selectedOption === 'name' && styles.selectedOptionText,
                ]}
                numberOfLines={1}>
                이름으로 검색
              </Text>
            </View>
            <View style={styles.buttonSeparator} />
            <View
              style={[
                styles.optionButton,
                selectedOption === 'ingredient' && styles.selectedOptionButton,
              ]}
              onTouchEnd={() => setSelectedOption('ingredient')}>
              <Text
                style={[
                  styles.optionText,
                  selectedOption === 'ingredient' && styles.selectedOptionText,
                ]}
                numberOfLines={1}>
                성분으로 검색
              </Text>
            </View>
            <View style={styles.sortContainer}>
              <Text style={styles.sortText} numberOfLines={1}>
                정확도순
              </Text>
              <View style={styles.sortIconContainer}>
                <ImageBackground
                  style={styles.sortIcon}
                  source={require('./assets/images/1ec02164-5585-4996-93e3-3aefdc7d04c0.png')}
                />
              </View>
            </View>
          </View>

          {/* 최근 검색어 */}
          <View style={styles.recentSearchContainer}>
            <View style={styles.recentSearchInnerContainer}>
              <View style={styles.recentSearchHeader}>
                <Text style={styles.recentSearchTitle} numberOfLines={1}>
                  최근 검색어
                </Text>
              </View>
              <View style={styles.recentSearchList}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={styles.searchItemHorizontalContainer}>
                    {recentSearches.map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        style={styles.searchItem}
                        onPress={() => handleRecentOrPopularSearch(item)} // 최근 검색어 클릭 시
                      >
                        <Text style={styles.searchItemText} numberOfLines={1}>
                          {item}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>

          {/* 인기 검색어 */}
          <View style={styles.popularSearchContainer}>
            <View style={styles.popularSearchInnerContainer}>
              <View style={styles.popularSearchHeader}>
                <Text style={styles.popularSearchTitle} numberOfLines={1}>
                  인기있는 검색어예요
                </Text>
                <Text style={styles.popularSearchDate} numberOfLines={1}>
                  8월 9일 기준
                </Text>
              </View>
              <View style={styles.popularSearchList}>
                <View style={styles.searchItemRow}>
                  {popularSearches.slice(0, 3).map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.popularSearchItem}
                      onPress={() => handleRecentOrPopularSearch(item)} // 인기 검색어 클릭 시
                    >
                      <Text
                        style={styles.popularSearchItemText}
                        numberOfLines={1}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View style={styles.searchItemRow}>
                  {popularSearches.slice(3, 6).map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.popularSearchItem}
                      onPress={() => handleRecentOrPopularSearch(item)} // 인기 검색어 클릭 시
                    >
                      <Text
                        style={styles.popularSearchItemText}
                        numberOfLines={1}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View style={styles.searchItemRow}>
                  {popularSearches.slice(6).map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.popularSearchItem}
                      onPress={() => handleRecentOrPopularSearch(item)} // 인기 검색어 클릭 시
                    >
                      <Text
                        style={styles.popularSearchItemText}
                        numberOfLines={1}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
          </View>

          <ImageBackground
            style={styles.bottomImage}
            source={require('./assets/images/3e1af27e-24dd-4bff-97db-926dd1c13bbe.png')}
            resizeMode="cover"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 390,
    height: 844,
    fontSize: 0,
    backgroundColor: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
    marginTop: 0,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
  },
  titleText: {
    display: 'flex',
    width: 310,
    height: 38,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontFamily: 'Pretendard Variable',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19.094,
    color: '#4f4f53',
    position: 'relative',
    textAlign: 'left',
    marginTop: 80,
    marginLeft: 30,
  },
  searchContainer: {
    display: 'flex',
    width: 342,
    paddingTop: 12,
    paddingRight: 20,
    paddingBottom: 12,
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    backgroundColor: '#f9f9f9',
    borderRadius: 24,
    position: 'relative',
    zIndex: 45,
    marginTop: 20,
    marginLeft: 23,
  },
  searchInnerContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '0',
    flexWrap: 'nowrap',
    position: 'relative',
    zIndex: 46,
  },
  iconContainer: {
    width: 24,
    height: 24,
    flexShrink: 0,
    position: 'relative',
    overflow: 'hidden',
    zIndex: 47,
  },
  icon: {
    width: 19.521,
    height: 19.521,
    position: 'relative',
    zIndex: 48,
    marginTop: 2.229,
    marginLeft: 2.229,
  },
  textInput: {
    height: 40,
    flexShrink: 0,
    flexBasis: 'auto',
    fontFamily: 'Pretendard Variable',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#8e9097',
    position: 'relative',
    textAlign: 'left',
    zIndex: 49,
    flex: 1,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#4099ff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButtonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
  optionsContainer: {
    display: 'flex',
    width: 390,
    paddingTop: 0,
    paddingRight: 30,
    paddingBottom: 0,
    paddingLeft: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    position: 'relative',
    zIndex: 50,
    marginTop: 16,
  },
  optionButton: {
    display: 'flex',
    width: 92,
    paddingTop: 4,
    paddingRight: 0,
    paddingBottom: 4,
    paddingLeft: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    flexWrap: 'nowrap',
    backgroundColor: '#f1f1f1',
    borderRadius: 13,
    position: 'relative',
    zIndex: 52,
  },
  buttonSeparator: {
    width: 4,
  },
  selectedOptionButton: {
    backgroundColor: '#e4edff',
  },
  optionText: {
    height: 24,
    width: 100,
    flexShrink: 0,
    flexBasis: 'auto',
    fontFamily: 'Pretendard Variable',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 24,
    color: '#5d5d62',
    position: 'relative',
    textAlign: 'center',
    zIndex: 53,
  },
  selectedOptionText: {
    color: '#636363',
  },
  sortContainer: {
    display: 'flex',
    width: 60,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexShrink: 0,
    flexWrap: 'nowrap',
    position: 'relative',
    zIndex: 56,
    marginLeft: 80,
  },
  sortText: {
    height: 22,
    flexShrink: 0,
    flexBasis: 'auto',
    fontFamily: 'Pretendard Variable',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 22,
    color: '#72777a',
    position: 'relative',
    textAlign: 'left',
    zIndex: 57,
  },
  sortIconContainer: {
    width: 15,
    height: 15,
    flexShrink: 0,
    position: 'relative',
    overflow: 'hidden',
    zIndex: 58,
  },
  sortIcon: {
    width: 12.332,
    height: 7.05,
    position: 'relative',
    zIndex: 59,
    marginTop: 4.6,
    marginLeft: 1.334,
  },
  recentSearchContainer: {
    display: 'flex',
    width: 342,
    gap: 12,
    alignItems: 'center',
    flexWrap: 'nowrap',
    position: 'relative',
    zIndex: 3,
    marginTop: 32,
    marginLeft: 23,
  },
  recentSearchInnerContainer: {
    display: 'flex',
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 32,
    paddingLeft: 24,
    gap: 16,
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    flexShrink: 0,
    flexWrap: 'nowrap',
    backgroundColor: '#ffffff',
    borderRadius: 24,
    position: 'relative',
    zIndex: 4,
  },
  recentSearchHeader: {
    display: 'flex',
    width: 294,
    gap: 24,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexShrink: 0,
    flexWrap: 'nowrap',
    position: 'relative',
    zIndex: 5,
    left: -20,
  },
  recentSearchTitle: {
    height: 21,
    flexShrink: 0,
    flexBasis: 'auto',
    fontFamily: 'Pretendard Variable',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 21,
    color: '#72777a',
    position: 'relative',
    textAlign: 'left',
    zIndex: 7,
  },
  recentSearchList: {
    height: 32,
    alignSelf: 'stretch',
    flexShrink: 0,
    position: 'relative',
    zIndex: 8,
  },
  searchItemHorizontalContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 0,
  },
  searchItem: {
    display: 'flex',
    width: 'auto',
    paddingTop: 4,
    paddingRight: 12,
    paddingBottom: 4,
    paddingLeft: 12,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    flexWrap: 'nowrap',
    backgroundColor: '#f1f1f1',
    borderRadius: 24,
    position: 'relative',
    zIndex: 11,
  },
  searchItemText: {
    height: 24,
    width: 'auto',
    flexShrink: 0,
    flexBasis: 'auto',
    fontFamily: 'Pretendard Variable',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 22,
    color: '#5d5d62',
    position: 'relative',
    textAlign: 'center',
    zIndex: 12,
  },
  popularSearchContainer: {
    display: 'flex',
    paddingTop: 24,
    paddingRight: 32,
    paddingBottom: 32,
    paddingLeft: 32,
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    alignSelf: 'stretch',
    flexShrink: 0,
    flexWrap: 'nowrap',
    backgroundColor: '#ffffff',
    borderRadius: 24,
    position: 'relative',
    zIndex: 17,
  },
  popularSearchInnerContainer: {
    display: 'flex',
    height: 152,
    gap: 24,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '0',
    flexWrap: 'nowrap',
    position: 'relative',
    zIndex: 18,
  },
  popularSearchHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    flexShrink: 0,
    flexWrap: 'nowrap',
    position: 'relative',
    zIndex: 19,
  },
  popularSearchTitle: {
    height: 21,
    flexShrink: 0,
    flexBasis: 'auto',
    fontFamily: 'Pretendard Variable',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 21,
    color: '#72777a',
    position: 'relative',
    textAlign: 'left',
    zIndex: 20,
  },
  popularSearchDate: {
    height: 24,
    flexShrink: 0,
    flexBasis: 'auto',
    fontFamily: 'Pretendard Variable',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    color: '#8e9097',
    position: 'relative',
    textAlign: 'left',
    zIndex: 21,
  },
  popularSearchList: {
    display: 'flex',
    gap: 4,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '0',
    flexWrap: 'nowrap',
    position: 'relative',
    zIndex: 22,
  },
  searchItemRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    flexShrink: 0,
    flexWrap: 'nowrap',
    position: 'relative',
    zIndex: 23,
  },
  popularSearchItem: {
    display: 'flex',
    paddingTop: 4,
    paddingRight: 12,
    paddingBottom: 4,
    paddingLeft: 12,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    flexWrap: 'nowrap',
    backgroundColor: '#deedff',
    borderRadius: 24,
    position: 'relative',
    zIndex: 25,
  },
  popularSearchItemText: {
    height: 24,
    width: 'auto',
    flexShrink: 0,
    flexBasis: 'auto',
    fontFamily: 'Pretendard Variable',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 24,
    color: '#4099ff',
    position: 'relative',
    textAlign: 'center',
    zIndex: 26,
  },
  bottomImage: {
    width: 148,
    height: 5,
    position: 'relative',
    zIndex: 2,
    marginTop: 212,
    marginLeft: 121,
  },
});

export default Medicine;
