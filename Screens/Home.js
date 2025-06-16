import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Header from '../Components/Header';
import Map from '../Components/Map';
import CategoryList from '../Components/CategoryList';

export default function Home() {
  return (
    <View  style={styles.container}>
      <Header/>
      <Map/>
      <CategoryList/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: Dimensions.get('screen').height*0.05
  }
})