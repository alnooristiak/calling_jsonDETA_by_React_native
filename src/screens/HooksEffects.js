import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function HooksEffects() {
  // To call data and get data 
  const [myuserDeta, setMyUserDeta] = useState();
  // loder show when data Dasn't show in ui 
  const [isLoding, setIsLoding] = useState(true);

  // calling data with async await function 
  const callDeta = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
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

  // useEffect hook to using calling data function to show ui 
  useEffect(() => {
    callDeta();
  }, []);


  return (
    <View> 
      {isLoding ?
        (<View> <ActivityIndicator /> </View>)
        : (
          <View>
            <Text style={styles.mainText}>10 User Data Show</Text>
            {/* using FlatList to data maping and dynamic data randaring  */}
            <FlatList
              // to get data={name} its very importent for get and load data.
              data={myuserDeta}
              // Keys Extractor adding to solv unke key error 
              // keyExtractor={(key) => key}
              renderItem={({ item }) => {
                return (
                  <View>
                    <View style={styles.card}>
                      <View style={styles.tittles}>
                        <Text>
                          <Text style={styles.bolderLinText}>Name:</Text>{item.name}
                        </Text>
                        <Text>
                          <Text style={styles.bolderLinText}>Email:</Text>{item.email}
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.addressLn}>
                          <Text style={styles.bolderLinText}>Address:</Text>{item.address.city}
                        </Text>
                        {/* <Text>{item.email}</Text> */}
                      </View>
                    </View>
                  </View>
                )
              }}
            />
          </View>
        )
      }
    </View>
  )
}

// css styles for this file
const styles = StyleSheet.create({
  mainText: {
    color: 'brown',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 600,
  },
  card:{
    backgroundColor: 'skyblue',
    borderRadius: 6,
    // bouder: 1 "solid 'green' ",
    display: 'flex',
    flexDirection: 1,
    marginTop: 20,
    padding: 20,
    justifyContainer: 'center',
    fontSize: 10,
  },
  addressLn:{
    color: 'green',
  },
  bolderLinText:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  }
})