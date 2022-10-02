import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function HooksEffects() {

    const [myuserDeta, setMyUserDeta] = useState();
    const [isLoding, setIsLoding] = useState(true);

    const callDeta = async () => {
        try {
          const response = await fetch ('https://jsonplaceholder.typicode.com/users');
          const myDeta = await response.json();
          setMyUserDeta(myDeta);
          setIsLoding(false);
        //   console.log(myDeta);
        } catch (error) {
          console.log(error);
        }
      }

    // const callDeta = () => {
    //     fetch ('https://jsonplaceholder.typicode.com/users')
    //         .then(res => res.json())
    //         .then(deta => console.log(deta))
    // }

      useEffect(() => {
        callDeta();
      }, []);
    

  return (
    <View>
      <FlatList 
      data={myuserDeta}
      renderItem={( {item} ) => {
        return(
            <View>
                <Text>{item.name}</Text>
                <Text>{item.email}</Text>
            </View>
        )
      }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})