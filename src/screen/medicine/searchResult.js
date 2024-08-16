import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import axios from 'axios';

const SearchResult = ({route, navigation}) => {
  const {query, selectedOption: initialSelectedOption} = route.params; // 선택된 옵션을 초기값으로 받음
  const [searchTerm, setSearchTerm] = useState(query);
  const [selectedOption, setSelectedOption] = useState(initialSelectedOption);
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (searchTerm) {
      const searchField =
        selectedOption === 'name' ? 'medicine_name' : 'ingredient_name';
      try {
        const response = await axios.post(
          'https://2d75-203-252-33-3.ngrok-free.app/medicine',
          {
            [searchField]: searchTerm, // 동적으로 필드를 설정
          },
        );

        console.log(response.data);
        const results = response.data.results || []; // results가 null인 경우 빈 배열로 처리

        // 각 결과에 대해 null 값 체크 및 기본값 설정
        const sanitizedResults = results.map(item => ({
          품목명: item.품목명 || 'Unknown',
          업소명: item.업소명 || 'Unknown',
          성상: item.성상 || '정보 없음',
          큰제품이미지: item.큰제품이미지 || '', // 기본 이미지 URI 설정
          의약품제형: item.의약품제형 || '정보 없음',
          색상앞: item.색상앞 || '정보 없음',
          색상뒤: item.색상뒤 || '정보 없음',
          표시성분: Array.isArray(item.표시성분) ? item.표시성분 : [], // 표시성분이 배열이 아니면 빈 배열로 처리
          Base64: item.Base64 || '', // Base64 이미지가 없으면 빈 문자열로 처리
          ...item, // 다른 필드도 마찬가지로 처리
        }));

        setResults(sanitizedResults.slice(0, 20)); // 최대 20개의 결과만 표시
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await handleSearch(); // 컴포넌트가 마운트될 때 자동으로 검색 수행
    };

    fetchData();
  }, [selectedOption]);

  const renderResults = () => {
    return results.map((item, index) => {
      if (!item || !item.품목명 || !item.업소명) {
        return null; // 예상치 못한 데이터가 있을 경우 무시
      }

      return (
        <View key={index} style={styles.resultContainer}>
          <Image
            style={styles.resultImage}
            source={{
              uri: item.Base64
                ? `data:image/jpg;base64,${item.Base64}`
                : item.큰제품이미지 || 'default_image_uri', // Base64가 있으면 사용, 없으면 큰제품이미지 사용, 그것도 없으면 기본 이미지 URI 사용
            }}
          />
          <View style={styles.resultTextContainer}>
            <Text style={styles.manufacturer}>{item.업소명}</Text>
            <Text style={styles.itemName}>{item.품목명}</Text>
            <View style={styles.ingredientContainer}>
              <Text style={styles.ingredient}>
                {item.표시성분 &&
                Array.isArray(item.표시성분) &&
                item.표시성분.length > 0
                  ? item.표시성분.join(', ')
                  : '성분 정보 없음'}
              </Text>
            </View>
          </View>
        </View>
      );
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
                placeholder="약 이름을 검색해 주세요."
                placeholderTextColor="#8e9097"
                value={searchTerm}
                onChangeText={text => setSearchTerm(text)}
              />
              <TouchableOpacity
                style={styles.searchButton}
                onPress={async () => {
                  await handleSearch();
                }}>
                <Text style={styles.searchButtonText}>검색하기</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedOption === 'name' && styles.selectedOptionButton,
              ]}
              onPress={async () => {
                setSelectedOption('name');
                await handleSearch();
              }}>
              <Text
                style={[
                  styles.optionText,
                  selectedOption === 'name' && styles.selectedOptionText,
                ]}
                numberOfLines={1}>
                이름으로 검색
              </Text>
            </TouchableOpacity>
            <View style={styles.buttonSeparator} />
            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedOption === 'ingredient' && styles.selectedOptionButton,
              ]}
              onPress={async () => {
                setSelectedOption('ingredient');
                await handleSearch();
              }}>
              <Text
                style={[
                  styles.optionText,
                  selectedOption === 'ingredient' && styles.selectedOptionText,
                ]}
                numberOfLines={1}>
                성분으로 검색
              </Text>
            </TouchableOpacity>
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

          <Text style={styles.resultCountText}>
            검색된 약의 개수: {results.length}개
          </Text>

          {renderResults()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 390,
    height: '100%',
    backgroundColor: '#ffffff',
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
  resultCountText: {
    fontFamily: 'Pretendard Variable',
    fontSize: 14,
    fontWeight: '600',
    color: '#4f4f53',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  resultContainer: {
    display: 'flex',
    paddingTop: 16,
    paddingRight: 24,
    paddingBottom: 16,
    paddingLeft: 24,
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    alignSelf: 'stretch',
    flexShrink: 0,
    flexWrap: 'nowrap',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    position: 'relative',
    zIndex: 12,
    margin: 10,
  },
  resultImage: {
    width: 64,
    height: 64,
    flexShrink: 0,
    position: 'relative',
    zIndex: 13,
  },
  resultTextContainer: {
    display: 'flex',
    width: 183,
    gap: 12,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexShrink: 0,
    flexWrap: 'nowrap',
    position: 'relative',
    zIndex: 14,
  },
  manufacturer: {
    height: 24,
    flexShrink: 0,
    flexBasis: 'auto',
    fontFamily: 'Pretendard Variable',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 24,
    color: '#7f7f7f',
    position: 'relative',
    textAlign: 'left',
    zIndex: 16,
  },
  itemName: {
    height: 24,
    flexShrink: 0,
    flexBasis: 'auto',
    fontFamily: 'Pretendard Variable',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: '#4f4f53',
    position: 'relative',
    textAlign: 'left',
    zIndex: 17,
  },
  ingredientContainer: {
    display: 'flex',
    gap: 4,
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    flexShrink: 0,
    flexWrap: 'nowrap',
    position: 'relative',
    zIndex: 18,
  },
  ingredient: {
    height: 24,
    flexShrink: 0,
    flexBasis: 'auto',
    fontFamily: 'Pretendard Variable',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 24,
    color: '#ea4447',
    position: 'relative',
    textAlign: 'left',
    zIndex: 21,
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
});

export default SearchResult;
