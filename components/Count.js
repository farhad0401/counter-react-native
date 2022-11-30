import { View, Text, TouchableOpacity ,StyleSheet} from 'react-native'
import React,{useState} from 'react'

export default function Count() {
    const [count, setCount] = useState(0);
    const increse = () =>{
        setCount(count+1)
    }
    const decrese = () =>{
        if(count > 0){
            setCount(count-1)
           }
    }
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=> increse()}>
       <View style={styles.customButton}>
        <Text style={styles.buttonText}>+</Text>
       </View>
       </TouchableOpacity>
      <Text style={styles.countText}>{count}</Text>
      <TouchableOpacity onPress={()=> decrese()}> 
      <View style={styles.customButton}>
        <Text style={styles.buttonText}>-</Text>
       </View>
       </TouchableOpacity>
    </View>
  )
}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:"row",
    },
    customButton:{
    backgroundColor:"blue",
    height:40,
    width:40,
    borderRadius:50
    },
    buttonText:{
        fontSize:30,
        color:"white",
        flex:1,
        textAlign:"center",
        justifyContent: 'center',
        alignItems:'center'
    },
    countText:{
        fontSize:20,
        paddingHorizontal: 20
    }
  });
  