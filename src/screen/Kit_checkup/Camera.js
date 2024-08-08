// CameraScreen.js
import React, {useState} from 'react';
import {View, Button, Image, Alert} from 'react-native';
import {RNCamera} from 'react-native-camera';

const CameraScreen = ({navigation}) => {
  const [photo, setPhoto] = useState(null);

  const takePicture = async camera => {
    try {
      const options = {quality: 0.5, base64: true};
      const data = await camera.takePictureAsync(options);
      setPhoto(data.uri);
      askToRetakeOrProceed();
    } catch (error) {
      console.error(error);
    }
  };

  const askToRetakeOrProceed = () => {
    Alert.alert(
      'Photo taken',
      'Would you like to retake the photo or proceed?',
      [
        {
          text: 'Retake',
          onPress: () => setPhoto(null),
        },
        {
          text: 'Proceed',
          onPress: () => navigation.navigate('Kit_checkup3', {photo}),
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={{flex: 1}}>
      {!photo ? (
        <RNCamera
          style={{flex: 1}}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
          ref={ref => {
            this.camera = ref;
          }}>
          {({camera, status}) => {
            if (status !== 'READY') return <View />;
            return (
              <View
                style={{
                  flex: 0,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Button
                  onPress={() => takePicture(camera)}
                  title="Take Photo"
                />
              </View>
            );
          }}
        </RNCamera>
      ) : (
        <Image source={{uri: photo}} style={{flex: 1}} />
      )}
    </View>
  );
};

export default CameraScreen;
