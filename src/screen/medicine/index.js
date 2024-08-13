import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text style={styles.headerText}>
            지금 먹고 있는 약에 신장에 좋지 않은 성분이 들어있는지 확인해보세요
          </Text>
          <View style={styles.searchContainer}>
            <View style={styles.searchBox}>
              <View style={styles.searchIconContainer}>
                <ImageBackground
                  style={styles.searchIcon}
                  source={require('./assets/images/d4aceaa2-1524-45e8-9ca4-052749f3540d.png')}
                />
              </View>
              <Text style={styles.searchText} numberOfLines={1}>
                약 이름을 검색해 주세요.
              </Text>
            </View>
          </View>
          <View style={styles.filterContainer}>
            <View style={styles.filterGroup}>
              <View style={styles.filterButtonActive}>
                <Text style={styles.filterText}>이름으로 검색</Text>
              </View>
              <View style={styles.filterButton}>
                <Text style={styles.filterTextInactive}>성분으로 검색</Text>
              </View>
            </View>
            <View style={styles.sortContainer}>
              <Text style={styles.sortText} numberOfLines={1}>
                정확도순
              </Text>
              <View style={styles.sortIconContainer}>
                <ImageBackground
                  style={styles.sortIcon}
                  source={require('./assets/images/3f910ba0-f9dd-4275-9c02-7d4de8303d32.png')}
                />
              </View>
            </View>
          </View>
          <View style={styles.recentSearchContainer}>
            <View style={styles.recentSearchBox}>
              <View style={styles.recentSearchHeader}>
                <Text style={styles.recentSearchTitle}>최근 검색어</Text>
              </View>
              <View style={styles.recentSearchItems}>
                <View style={styles.recentSearchItem}>
                  <Text style={styles.recentSearchText}>아로나민</Text>
                </View>
                <View style={styles.recentSearchItem}>
                  <Text style={styles.recentSearchText}>콜대원</Text>
                </View>
                <View style={styles.recentSearchItem}>
                  <Text style={styles.recentSearchText}>어린이부루펜</Text>
                </View>
              </View>
            </View>
            <View style={styles.popularSearchBox}>
              <View style={styles.popularSearchHeader}>
                <Text style={styles.popularSearchTitle}>
                  인기있는 검색어예요
                </Text>
                <Text style={styles.popularSearchDate}>8월 9일 기준</Text>
              </View>
              <View style={styles.popularSearchItems}>
                <View style={styles.popularSearchItem}>
                  <Text style={styles.popularSearchTextActive}>판피린</Text>
                </View>
                <View style={styles.popularSearchItem}>
                  <Text style={styles.popularSearchTextActive}>판콜에스</Text>
                </View>
                <View style={styles.popularSearchItem}>
                  <Text style={styles.popularSearchTextActive}>
                    어린이부루펜
                  </Text>
                </View>
                <View style={styles.popularSearchItem}>
                  <Text style={styles.popularSearchTextActive}>겔포스</Text>
                </View>
                <View style={styles.popularSearchItem}>
                  <Text style={styles.popularSearchTextActive}>탁센</Text>
                </View>
                <View style={styles.popularSearchItem}>
                  <Text style={styles.popularSearchTextActive}>이지엔</Text>
                </View>
                <View style={styles.popularSearchItem}>
                  <Text style={styles.popularSearchTextActive}>이가탄</Text>
                </View>
                <View style={styles.popularSearchItem}>
                  <Text style={styles.popularSearchTextActive}>타이레놀</Text>
                </View>
                <View style={styles.popularSearchItem}>
                  <Text style={styles.popularSearchTextActive}>아스피린</Text>
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            style={styles.bottomImage}
            source={require('./assets/images/674abcd1-91e9-4f9e-b5af-87f2b14edcfc.png')}
            resizeMode="cover"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 390,
    height: 844,
    backgroundColor: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
    margin: 'auto',
  },
  headerText: {
    width: 310,
    height: 38,
    fontFamily: 'Pretendard Variable',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19.094,
    color: '#4f4f53',
    position: 'relative',
    textAlign: 'left',
    marginTop: 131,
    marginLeft: 31,
  },
  searchContainer: {
    width: 342,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 24,
    position: 'relative',
    zIndex: 45,
    marginTop: 20,
    marginLeft: 24,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    zIndex: 46,
  },
  searchIconContainer: {
    width: 24,
    height: 24,
    position: 'relative',
    overflow: 'hidden',
    zIndex: 47,
  },
  searchIcon: {
    width: 19.521,
    height: 19.521,
    marginTop: 2.229,
    marginLeft: 2.229,
  },
  searchText: {
    height: 24,
    fontFamily: 'Pretendard Variable',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#8e9097',
    position: 'relative',
    textAlign: 'left',
    zIndex: 49,
  },
  filterContainer: {
    width: 390,
    paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    zIndex: 50,
    marginTop: 16,
    marginLeft: 1,
  },
  filterGroup: {
    width: 188,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 51,
  },
  filterButtonActive: {
    width: 92,
    paddingVertical: 4,
    paddingHorizontal: 13,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4edff',
    borderRadius: 13,
    position: 'relative',
    zIndex: 52,
  },
  filterButton: {
    width: 92,
    paddingVertical: 4,
    paddingHorizontal: 13,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 13,
    position: 'relative',
    zIndex: 54,
  },
  filterText: {
    height: 24,
    fontFamily: 'Pretendard Variable',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 24,
    color: '#636363',
    position: 'relative',
    textAlign: 'left',
    zIndex: 53,
  },
  filterTextInactive: {
    color: '#5d5d62',
  },
  sortContainer: {
    width: 60,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
    zIndex: 56,
  },
  sortText: {
    height: 22,
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
    position: 'relative',
    overflow: 'hidden',
    zIndex: 58,
  },
  sortIcon: {
    width: 12.332,
    height: 7.05,
    marginTop: 4.6,
    marginLeft: 1.334,
  },
  recentSearchContainer: {
    width: 342,
    alignItems: 'center',
    position: 'relative',
    zIndex: 3,
    marginTop: 32,
    marginLeft: 24,
  },
  recentSearchBox: {
    paddingVertical: 32,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    borderRadius: 24,
    position: 'relative',
    zIndex: 4,
  },
  recentSearchHeader: {
    width: 294,
    justifyContent: 'center',
    alignItems: 'flex-start',
    position: 'relative',
    zIndex: 5,
  },
  recentSearchTitle: {
    height: 21,
    fontFamily: 'Pretendard Variable',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 21,
    color: '#72777a',
    position: 'relative',
    textAlign: 'left',
    zIndex: 7,
  },
  recentSearchItems: {
    height: 32,
    alignSelf: 'stretch',
    position: 'relative',
    zIndex: 8,
  },
  recentSearchItem: {
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#f1f1f1',
    borderRadius: 24,
    position: 'relative',
    zIndex: 11,
  },
  recentSearchText: {
    height: 24,
    fontFamily: 'Pretendard Variable',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 24,
    color: '#5d5d62',
    position: 'relative',
    textAlign: 'left',
    zIndex: 12,
  },
  popularSearchBox: {
    paddingVertical: 32,
    paddingHorizontal: 32,
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#ffffff',
    borderRadius: 24,
    position: 'relative',
    zIndex: 17,
  },
  popularSearchHeader: {
    height: 152,
    gap: 24,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexGrow: 1,
    position: 'relative',
    zIndex: 18,
  },
  popularSearchTitle: {
    height: 21,
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
    fontFamily: 'Pretendard Variable',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    color: '#8e9097',
    position: 'relative',
    textAlign: 'left',
    zIndex: 21,
  },
  popularSearchItems: {
    gap: 4,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    position: 'relative',
    zIndex: 22,
  },
  popularSearchItem: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#deedff',
    borderRadius: 24,
    position: 'relative',
    zIndex: 25,
  },
  popularSearchTextActive: {
    height: 24,
    fontFamily: 'Pretendard Variable',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 24,
    color: '#4099ff',
    position: 'relative',
    textAlign: 'left',
    zIndex: 26,
  },
  bottomImage: {
    width: 148,
    height: 5,
    position: 'relative',
    zIndex: 2,
    marginTop: 161,
    marginLeft: 121,
  },
});
