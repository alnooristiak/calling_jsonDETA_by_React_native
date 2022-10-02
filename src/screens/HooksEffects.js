import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

export default function HooksEffects() {

    // const callDeta = async () => {
    //     try {
    //       const response = await fetch ('https://jsonplaceholder.typicode.com/users');
    //       const myDeta = await response.json();
    //       console.log(myDeta);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }

    const callDeta = () => {
        fetch ('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(deta => console.log(deta))
    }

      useEffect(() => {
        callDeta();
      }, []);
    

  return (
    <View>
      <Text>HooksEffects</Text>
    </View>
  )
}

const styles = StyleSheet.create({})