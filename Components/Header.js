import { View, Image, StyleSheet, Dimensions, TextInput } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';

export default function Header() {
    const [inputVal, setInputVal] = useState('');
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logoImg}/>
      <View style={styles.searchContainer}>
      <AntDesign name="search1" size={20} color="black" />
      <TextInput
          style={styles.searchInput}
           onChangeText={setInputVal}
          value={inputVal}
        /></View>
        <Image source={require('../assets/user.png')} style={styles.userImg}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap : 10
    },
    logoImg : {
        width: Dimensions.get('screen').width*0.11,
        height: Dimensions.get('screen').height*0.05,
        resizeMode: 'cover'
    },
    searchContainer: {
        borderWidth: 1,
        borderColor: 'black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 2,
        padding: 5,
        borderRadius: 10
    },
    searchInput: {
        flex: 1,
    },
    userImg: {
        width: Dimensions.get('screen').width*0.11,
        height: Dimensions.get('screen').height*0.05,
        resizeMode: 'cover'
    }
})