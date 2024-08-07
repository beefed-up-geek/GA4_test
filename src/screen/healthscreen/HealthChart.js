import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HealthChart = ({
  title,
  subtitle,
  data,
  dataKey,
  screenWidth,
  getColor,
  createLabels,
  handleDataPointClick,
}) => {
  const [selectedData, setSelectedData] = useState(null);

  const chartConfigWithGradient = data => ({
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 1,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    fillShadowGradient: getColor(data),
    fillShadowGradientOpacity: 0.3,
    propsForDots: {
      r: '2', // Hides the dots
      strokeWidth: '5',
    },
    propsForBackgroundLines: {
      stroke: '#ffffff',
      strokeDasharray: '', // Hide background lines
    },
  });

  return (
    <View style={styles.graphBox}>
      <Text style={styles.graphTitle}>{title}</Text>
      <Text style={styles.analysisText}>
        <FontAwesome5 name="info-circle" size={16} style={styles.iconStyle} />{' '}
        {subtitle}
      </Text>
      <LineChart
        data={data}
        width={screenWidth * 0.8}
        height={160} // 줄여진 높이
        chartConfig={chartConfigWithGradient(data.datasets[0].data)}
        bezier
        onDataPointClick={data =>
          handleDataPointClick(data, data.datasets[0].data, setSelectedData)
        }
        style={styles.chart}
      />
      {selectedData && selectedData.year && (
        <View
          style={[
            styles.dataPointInfo,
            {top: selectedData.y + 40, left: selectedData.x},
          ]}>
          <Text style={styles.dataPointInfoText}>
            {`${selectedData.year} 년 \n ${selectedData.value}`}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  graphBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  graphTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  chart: {
    borderRadius: 10,
  },
  iconStyle: {
    color: '#B5B5B5',
    marginRight: 5,
  },
  dataPointInfo: {
    position: 'absolute',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  dataPointInfoText: {
    color: 'black',
  },
  analysisText: {
    fontSize: 14,
    color: 'grey',
    marginBottom: 10,
  },
});

export default HealthChart;
