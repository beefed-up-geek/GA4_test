import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import {useState} from 'react';

export default function App() {
  const [selectedOption, setSelectedOption] = useState('name');

  return (
    <SafeAreaView>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
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
          }}>
          <Text
            style={{
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
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 30,
            }}>
            지금 먹고 있는 약에 신장에 좋지 않은 성분이 들어있는지 확인해보세요
          </Text>
          <View
            style={{
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
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              borderBottomRightRadius: 24,
              borderBottomLeftRadius: 24,
              position: 'relative',
              zIndex: 45,
              marginTop: 20,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 23,
            }}>
            <View
              style={{
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
              }}>
              <View
                style={{
                  width: 24,
                  height: 24,
                  flexShrink: 0,
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 47,
                }}>
                <ImageBackground
                  style={{
                    width: 19.521,
                    height: 19.521,
                    position: 'relative',
                    zIndex: 48,
                    marginTop: 2.229,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 2.229,
                  }}
                  source={require('./assets/images/07c8ab36-f5a9-42c0-bb87-db3d6e00682c.png')}
                />
              </View>
              <TextInput
                style={{
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
                }}
                placeholder="약 이름을 검색해 주세요."
                placeholderTextColor="#8e9097"
              />
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              width: 390,
              paddingTop: 0,
              paddingRight: 32,
              paddingBottom: 0,
              paddingLeft: 32,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'nowrap',
              position: 'relative',
              zIndex: 50,
              marginTop: 16,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            }}>
            <View
              style={{
                display: 'flex',
                width: 188,
                flexDirection: 'row',
                gap: 4,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'stretch',
                flexShrink: 0,
                flexWrap: 'nowrap',
                position: 'relative',
                zIndex: 51,
              }}>
              <View
                style={{
                  display: 'flex',
                  width: 92,
                  paddingTop: 4,
                  paddingRight: 13,
                  paddingBottom: 4,
                  paddingLeft: 13,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  backgroundColor: '#e4edff',
                  borderTopLeftRadius: 13,
                  borderTopRightRadius: 13,
                  borderBottomRightRadius: 13,
                  borderBottomLeftRadius: 13,
                  position: 'relative',
                  zIndex: 52,
                }}>
                <Text
                  style={{
                    height: 24,
                    width: 100,
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Pretendard Variable',
                    fontSize: 12,
                    fontWeight: '500',
                    lineHeight: 24,
                    color: '#636363',
                    position: 'relative',
                    textAlign: 'center',
                    zIndex: 53,
                  }}
                  numberOfLines={1}>
                  이름으로 검색
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  width: 92,
                  paddingTop: 4,
                  paddingRight: 13,
                  paddingBottom: 4,
                  paddingLeft: 13,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  backgroundColor: '#f1f1f1',
                  borderTopLeftRadius: 13,
                  borderTopRightRadius: 13,
                  borderBottomRightRadius: 13,
                  borderBottomLeftRadius: 13,
                  position: 'relative',
                  zIndex: 54,
                }}>
                <Text
                  style={{
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
                    zIndex: 55,
                  }}
                  numberOfLines={1}>
                  성분으로 검색
                </Text>
              </View>
            </View>
            <View
              style={{
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
              }}>
              <Text
                style={{
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
                }}
                numberOfLines={1}>
                정확도순
              </Text>
              <View
                style={{
                  width: 15,
                  height: 15,
                  flexShrink: 0,
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 58,
                }}>
                <ImageBackground
                  style={{
                    width: 12.332,
                    height: 7.05,
                    position: 'relative',
                    zIndex: 59,
                    marginTop: 4.6,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 1.334,
                  }}
                  source={require('./assets/images/1ec02164-5585-4996-93e3-3aefdc7d04c0.png')}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              width: 342,
              gap: 12,
              alignItems: 'center',
              flexWrap: 'nowrap',
              position: 'relative',
              zIndex: 3,
              marginTop: 32,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 23,
            }}>
            <View
              style={{
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
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                borderBottomRightRadius: 24,
                borderBottomLeftRadius: 24,
                position: 'relative',
                zIndex: 4,
              }}>
              <View
                style={{
                  display: 'flex',
                  width: 294,
                  gap: 24,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  position: 'relative',
                  zIndex: 5,
                }}>
                <View
                  style={{
                    display: 'flex',
                    width: 294,
                    gap: 30,
                    alignItems: 'flex-start',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 6,
                  }}>
                  <Text
                    style={{
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
                    }}
                    numberOfLines={1}>
                    최근 검색어
                  </Text>
                </View>
                <View
                  style={{
                    height: 32,
                    alignSelf: 'stretch',
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 8,
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      width: 294,
                      height: 32,
                      gap: 4,
                      alignItems: 'flex-start',
                      flexWrap: 'nowrap',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 9,
                    }}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 4,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'stretch',
                        flexShrink: 0,
                        flexWrap: 'nowrap',
                        position: 'relative',
                        zIndex: 10,
                      }}>
                      <View
                        style={{
                          display: 'flex',
                          width: 66,
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
                          borderTopLeftRadius: 24,
                          borderTopRightRadius: 24,
                          borderBottomRightRadius: 24,
                          borderBottomLeftRadius: 24,
                          position: 'relative',
                          zIndex: 11,
                        }}>
                        <Text
                          style={{
                            height: 24,
                            width: 100,
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
                          }}
                          numberOfLines={1}>
                          아로나민
                        </Text>
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          width: 56,
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
                          borderTopLeftRadius: 24,
                          borderTopRightRadius: 24,
                          borderBottomRightRadius: 24,
                          borderBottomLeftRadius: 24,
                          position: 'relative',
                          zIndex: 13,
                        }}>
                        <Text
                          style={{
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
                            zIndex: 14,
                          }}
                          numberOfLines={1}>
                          콜대원
                        </Text>
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          width: 87,
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
                          borderTopLeftRadius: 24,
                          borderTopRightRadius: 24,
                          borderBottomRightRadius: 24,
                          borderBottomLeftRadius: 24,
                          position: 'relative',
                          zIndex: 15,
                        }}>
                        <Text
                          style={{
                            height: 24,
                            width: 100,
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Pretendard Variable',
                            fontSize: 12,
                            fontWeight: '500',
                            lineHeight: 22,
                            color: '#5d5d62',
                            position: 'relative',
                            textAlign: 'center',
                            zIndex: 16,
                          }}
                          numberOfLines={1}>
                          어린이부루펜
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
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
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                borderBottomRightRadius: 24,
                borderBottomLeftRadius: 24,
                position: 'relative',
                zIndex: 17,
              }}>
              <View
                style={{
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
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 19,
                  }}>
                  <Text
                    style={{
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
                    }}
                    numberOfLines={1}>
                    인기있는 검색어예요
                  </Text>
                  <Text
                    style={{
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
                    }}
                    numberOfLines={1}>
                    8월 9일 기준
                  </Text>
                </View>
                <View
                  style={{
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
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      gap: 4,
                      alignItems: 'flex-start',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      position: 'relative',
                      zIndex: 23,
                    }}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 4,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'stretch',
                        flexShrink: 0,
                        flexWrap: 'nowrap',
                        position: 'relative',
                        zIndex: 24,
                      }}>
                      <View
                        style={{
                          display: 'flex',
                          width: 56,
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
                          borderTopLeftRadius: 24,
                          borderTopRightRadius: 24,
                          borderBottomRightRadius: 24,
                          borderBottomLeftRadius: 24,
                          position: 'relative',
                          zIndex: 25,
                        }}>
                        <Text
                          style={{
                            height: 24,
                            width: 100,
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
                          }}
                          numberOfLines={1}>
                          판피린
                        </Text>
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          width: 66,
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
                          borderTopLeftRadius: 24,
                          borderTopRightRadius: 24,
                          borderBottomRightRadius: 24,
                          borderBottomLeftRadius: 24,
                          position: 'relative',
                          zIndex: 27,
                        }}>
                        <Text
                          style={{
                            height: 24,
                            width: 100,
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Pretendard Variable',
                            fontSize: 12,
                            fontWeight: '500',
                            lineHeight: 24,
                            color: '#4099ff',
                            position: 'relative',
                            textAlign: 'center',
                            zIndex: 28,
                          }}
                          numberOfLines={1}>
                          판콜에스
                        </Text>
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          width: 87,
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
                          borderTopLeftRadius: 24,
                          borderTopRightRadius: 24,
                          borderBottomRightRadius: 24,
                          borderBottomLeftRadius: 24,
                          position: 'relative',
                          zIndex: 29,
                        }}>
                        <Text
                          style={{
                            height: 24,
                            width: 100,
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Pretendard Variable',
                            fontSize: 12,
                            fontWeight: '500',
                            lineHeight: 24,
                            color: '#4099ff',
                            position: 'relative',
                            textAlign: 'center',
                            zIndex: 30,
                          }}
                          numberOfLines={1}>
                          어린이부루펜
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      height: 32,
                      flexDirection: 'row',
                      gap: 4,
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      position: 'relative',
                      zIndex: 31,
                    }}>
                    <View
                      style={{
                        display: 'flex',
                        width: 56,
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
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                        borderBottomRightRadius: 24,
                        borderBottomLeftRadius: 24,
                        position: 'relative',
                        zIndex: 32,
                      }}>
                      <Text
                        style={{
                          height: 24,
                          width: 100,
                          flexShrink: 0,
                          flexBasis: 'auto',
                          fontFamily: 'Pretendard Variable',
                          fontSize: 12,
                          fontWeight: '500',
                          lineHeight: 24,
                          color: '#4099ff',
                          position: 'relative',
                          textAlign: 'center',
                          zIndex: 33,
                        }}
                        numberOfLines={1}>
                        겔포스
                      </Text>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        width: 45,
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
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                        borderBottomRightRadius: 24,
                        borderBottomLeftRadius: 24,
                        position: 'relative',
                        zIndex: 34,
                      }}>
                      <Text
                        style={{
                          height: 24,
                          width: 100,
                          flexShrink: 0,
                          flexBasis: 'auto',
                          fontFamily: 'Pretendard Variable',
                          fontSize: 12,
                          fontWeight: '500',
                          lineHeight: 24,
                          color: '#4099ff',
                          position: 'relative',
                          textAlign: 'center',
                          zIndex: 35,
                        }}
                        numberOfLines={1}>
                        탁센
                      </Text>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        width: 56,
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
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                        borderBottomRightRadius: 24,
                        borderBottomLeftRadius: 24,
                        position: 'relative',
                        zIndex: 36,
                      }}>
                      <Text
                        style={{
                          height: 24,
                          width: 100,
                          flexShrink: 0,
                          flexBasis: 'auto',
                          fontFamily: 'Pretendard Variable',
                          fontSize: 12,
                          fontWeight: '500',
                          lineHeight: 24,
                          color: '#4099ff',
                          position: 'relative',
                          textAlign: 'center',
                          zIndex: 37,
                        }}
                        numberOfLines={1}>
                        이지엔
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      height: 32,
                      flexDirection: 'row',
                      gap: 4,
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      position: 'relative',
                      zIndex: 38,
                    }}>
                    <View
                      style={{
                        display: 'flex',
                        width: 56,
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
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                        borderBottomRightRadius: 24,
                        borderBottomLeftRadius: 24,
                        position: 'relative',
                        zIndex: 39,
                      }}>
                      <Text
                        style={{
                          height: 24,
                          width: 100,
                          flexShrink: 0,
                          flexBasis: 'auto',
                          fontFamily: 'Pretendard Variable',
                          fontSize: 12,
                          fontWeight: '500',
                          lineHeight: 24,
                          color: '#4099ff',
                          position: 'relative',
                          textAlign: 'center',
                          zIndex: 40,
                        }}
                        numberOfLines={1}>
                        이가탄
                      </Text>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        width: 66,
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
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                        borderBottomRightRadius: 24,
                        borderBottomLeftRadius: 24,
                        position: 'relative',
                        zIndex: 41,
                      }}>
                      <Text
                        style={{
                          height: 24,
                          width: 100,
                          flexShrink: 0,
                          flexBasis: 'auto',
                          fontFamily: 'Pretendard Variable',
                          fontSize: 12,
                          fontWeight: '500',
                          lineHeight: 24,
                          color: '#4099ff',
                          position: 'relative',
                          textAlign: 'center',
                          zIndex: 42,
                        }}
                        numberOfLines={1}>
                        타이레놀
                      </Text>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        width: 66,
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
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                        borderBottomRightRadius: 24,
                        borderBottomLeftRadius: 24,
                        position: 'relative',
                        zIndex: 43,
                      }}>
                      <Text
                        style={{
                          height: 24,
                          width: 100,
                          flexShrink: 0,
                          flexBasis: 'auto',
                          fontFamily: 'Pretendard Variable',
                          fontSize: 12,
                          fontWeight: '500',
                          lineHeight: 24,
                          color: '#4099ff',
                          position: 'relative',
                          textAlign: 'center',
                          zIndex: 44,
                        }}
                        numberOfLines={1}>
                        아스피린
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            style={{
              width: 148,
              height: 5,
              position: 'relative',
              zIndex: 2,
              marginTop: 212,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 121,
            }}
            source={require('./assets/images/3e1af27e-24dd-4bff-97db-926dd1c13bbe.png')}
            resizeMode="cover"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
