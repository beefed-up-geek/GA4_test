// /src/screen/healthscreen/tabs/styles_tab.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '120%',
    padding: 15,
    backgroundColor: 'white', // Set the background color of the container
  },
  contentContainer: {
    paddingBottom: 100,  // Adjust this value based on your bottom navigation bar height
    width: '90%',
    marginLeft: '-3%',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    fontSize: 18,
    color: '#333',
  },
  recordContainer: {
    backgroundColor: '#F4F5FB',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  title: {
    color: "black",
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  value: {
    color: "black",
    fontSize: 16,
    marginBottom: 5,
  },
  analysis: {
    fontSize: 14,
    color: '#666',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barContainer: {
    position: 'relative',
    width: 200,
    height: 30,
  },
  markerLine: (leftPosition) => ({
    position: 'absolute',
    left: leftPosition,
    top: 0,
    height: 30,
    width: 2,
    backgroundColor: 'white',
  }),
  markerText: (leftPosition) => ({
    position: 'absolute',
    left: leftPosition,
    top: 15,
    fontSize: 10,
    color: 'gray',
  }),
});
