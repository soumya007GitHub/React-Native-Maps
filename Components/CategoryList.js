import { View, Text, TouchableOpacity, Image } from 'react-native'
import { FlatList } from 'react-native'

export default function CategoryList() {
  const categoryList=[
    {
        id:1,
        name:'Gas Station',
        value:'gas_station',
        icon:require('../assets/gas.png')
    },
    {
        id:2,
        name:'Restaurants',
        value:'restaurant',
        icon:require('../assets/food.png')
    },
    {
        id:3,
        name:'Cafe',
        value:'cafe',
        icon:require('../assets/cafe.png')
    },
]
  return (
    <View style={{marginTop:15}}>
      <Text style={{
        fontSize:20,
        marginTop: 10
      }} >Select Top Category</Text>

      <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginTop:5}}
        renderItem={({item})=>(
          <TouchableOpacity 
          onPress={()=>console.log(item.value)} >
            <View style={{padding:1,alignItems:'center',
    margin:5,width:95,height:95,justifyContent:'center',
    borderRadius:15,}}>
        <Image source={item.icon}
            style={{width:40,height:30}}
        />
      <Text style={{fontSize:13}}>
        {item.name}</Text>
    </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}