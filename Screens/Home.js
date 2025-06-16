import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Header from '../Components/Header';

export default function Home() {
  return (
    <View  style={styles.container}>
      <Header/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: Dimensions.get('screen').height*0.05
  }
})