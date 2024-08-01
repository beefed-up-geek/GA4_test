import React, {Fragment, useEffect, useState, useRef} from 'react';
import {StyleSheet, View, Text, Linking, TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

import styles from './styles';

const QRCodeScreen = ({onPress, navigation}) => {
  const [scan, setScan] = useState(false);
  const [scanResult, setScanResult] = useState(false);
  const [result, setResult] = useState(null);

  const scanner = useRef(null);

  const onSuccess = e => {
    console.log('scanned data', e.data);
    setResult(e);
    setScan(false);
    setScanResult(true);
  };

  const activeQR = () => {
    setScan(true);
  };

  const scanAgain = () => {
    setScan(true);
    setScanResult(false);
  };

  const openLink = url => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  const description =
    'QR code (abbreviated from Quick Response Code) is the trademark for a type of matrix barcode (or two-dimensional barcode) first designed in 1994 for the automotive industry in Japan. A barcode is a machine-readable optical label that contains information about the item to which it is attached. In practice, QR codes often contain data for a locator, identifier, or tracker that points to a website or application. A QR code uses four standardized encoding modes (numeric, alphanumeric, byte/binary, and kanji) to store data efficiently; extensions may also be used.';

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textTitle}>
          Welcome To React-Native QR Code Tutorial!
        </Text>
        {!scan && !scanResult && (
          <View style={styles.cardView}>
            <Text numberOfLines={8} style={styles.descText}>
              {description}
            </Text>

            <TouchableOpacity onPress={activeQR} style={styles.buttonTouchable}>
              <Text style={styles.buttonTextStyle}>Click to Scan!</Text>
            </TouchableOpacity>
          </View>
        )}

        {scanResult && (
          <Fragment>
            <Text style={styles.textTitle1}>Result!</Text>
            <View style={scanResult ? styles.scanCardView : styles.cardView}>
              <Text>Type: {result.type}</Text>
              <Text>Result: {result.data}</Text>
              <Text numberOfLines={1}>RawData: {result.rawData}</Text>
              {result.data.startsWith('http') && (
                <TouchableOpacity
                  onPress={() =>
                    /*openLink(result.data)*/ navigation.navigate(
                      'Kit_checkup3',
                    )
                  }
                  style={styles.buttonTouchable}>
                  <Text style={styles.buttonTextStyle}>Open Link</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                onPress={scanAgain}
                style={styles.buttonTouchable}>
                <Text style={styles.buttonTextStyle}>Click to Scan again!</Text>
              </TouchableOpacity>
            </View>
          </Fragment>
        )}

        {scan && (
          <QRCodeScanner
            reactivate={true}
            showMarker={true}
            ref={scanner}
            onRead={onSuccess}
            topContent={
              <Text style={styles.centerText}>
                Go to{' '}
                <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text>{' '}
                on your computer and scan the QR code to test.
              </Text>
            }
            bottomContent={
              <View>
                <TouchableOpacity
                  style={styles.buttonTouchable}
                  onPress={() => scanner.current.reactivate()}>
                  <Text style={styles.buttonTextStyle}>OK. Got it!</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttonTouchable}
                  onPress={() => setScan(false)}>
                  <Text style={styles.buttonTextStyle}>Stop Scan</Text>
                </TouchableOpacity>
              </View>
            }
          />
        )}
      </View>
    </View>
  );
};

export default QRCodeScreen;
