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
      <Text style={{color: 'brown', textAlign: 'center', fontSize: 20, fontWeight: 600,}}>10 User Data Show</Text>
      <FlatList 
      data={myuserDeta}
      renderItem={( {item} ) => {
        return(
          <View>
            <View style={styles.card}>
              <View style={styles.tittles}>
                <Text>
                  <Text style={styles.bolderLinText}>Name: </Text>{item.name}
                </Text>
                <Text>
                  <Text style={styles.bolderLinText}>Email: </Text>{item.email}
                </Text>
              </View>
              <View>
                <Text style={styles.addressLn}>
                  <Text style={styles.bolderLinText}>Address: </Text>{item.address.city}
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

const styles = StyleSheet.create({
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