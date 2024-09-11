import {StyleSheet, Dimensions} from 'react-native';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginBottom: 30,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 13,
    backgroundColor: '#f9f9f9',
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 8,
    color: '#000',
  },
  searchIconContainer: {
    padding: 10,
  },
  searchIcon: {
    width: 23,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    tintColor: '#8E9098',
    borderRadius: 5,
    marginLeft: 10,
    marginBottom: 2,
  },
  iconImage: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    tintColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#F1F1F1',
    marginRight: 5,
    marginTop: 5,
    borderRadius: 13,
    alignItems: 'center',
    paddingHorizontal: 10, // 버튼 내의 내용에 따라 크기가 변하도록 패딩 설정
    paddingVertical: 10,
    flexShrink: 1, // 내용에 따라 버튼 크기가 줄어들도록 설정
  },
  buttonActive: {
    backgroundColor: '#E4EDFF',
  },
  buttonText: {
    fontSize: 12,
    color: '#646464',
    fontfamily: 'Pretendard Variable',
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#FFF',
    paddingLeft: 20,
    marginTop: -20,
  },
  addressContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationImage: {
    width: 20,
    height: 20,
    marginRight: 5,
    marginTop: 5,
  },
  mapButtonText: {
    color: '#fff',
  },
  locationText: {
    paddingHorizontal: 12,
    backgroundColor: '#FFF',
    color: '#222',
    fontSize: 15,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    marginTop: 30,
    marginBottom: 10,
  },
  pickerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 0,
  },
  sectionTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  distancePicker: {
    color: 'black',
    width: 120, // Reduced the width of the picker
    zIndex: 5000, // 중요: DropDownPicker와 겹치는 요소를 피하기 위해 zIndex 설정
  },
  gradePicker: {
    color: 'black',
    width: 120, // Reduced the width of the picker
    zIndex: 5000, // 중요: DropDownPicker와 겹치는 요소를 피하기 위해 zIndex 설정
    paddingVertical: 0,
    marginLeft: 5,
  },
  dropdownContainer: {
    height: 35, // Reduced the height of the container
  },
  dropdown: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 15,
  },
  dropdownList: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 15,
    maxHeight: 200,
  }, //dropdownList1은 세로로 병원 나열할때
  dropdownList1: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 15,
    maxHeight: 250,
  },
  dropdownText: {
    fontSize: 14, // Reduced the font size
    color: '#000',
  },
  listItemContainer: {
    height: 30, // Reducing the height of each item
    justifyContent: 'center', // Center the text vertically
  },
  listItemLabel: {
    fontSize: 14, // Adjust font size to fit the compact design
  },
  card: {
    padding: 20,
    backgroundColor: '#fafafa',
    borderRadius: 10,
    width: 350 * width_ratio,
    height: 180 * height_ratio,
    elevation: 5,
    marginTop: 15,
    marginBottom: 5,
    marginRight: 0,
    marginLeft: 10,
    position: 'relative', // 자식 요소의 absolute 위치 지정을 위해 필요
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  grade: {
    backgroundColor: '#F0F5FF',
    borderColor: '#ADC6FF',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    color: '#ffffff',
  },
  favoriteButton: {
    padding: 10, // 터치 영역 확장을 위한 패딩 추가
  },
  starIcon: {
    // 필요 시 추가 스타일
  },
  hospitalName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  hospitalTimeContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  hospitalTimeLabel: {
    color: '#888',
    fontWeight: 'bold',
  },
  hospitalTime: {
    color: '#888',
  },
  hospitalAddress: {
    marginTop: 5,
    color: '#888',
  },
  phone: {
    fontSize: 13,
    marginTop: 5,
    color: '#666',
  },
  noHospitalText: {
    marginTop: 120,
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  placeholder: {
    height: 50, // Adjust height as needed
    backgroundColor: 'transparent', // Make it invisible
  },
});

export default styles;
