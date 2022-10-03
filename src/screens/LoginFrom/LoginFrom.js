import { StyleSheet, Text, TextInput, View, secureTextEntry } from 'react-native'
import React from 'react'

export default function LoginFrom() {
  return (
      <View>
          <Text style={styles.mainFromText}>Login Forn</Text>
          <Text style={styles.smallTxt}>Please filup currect email and password..</Text>
          <View>
              <View>
                  <Text style={styles.inputTopLable}>Enter Your Vailide Email</Text>
                  <TextInput
                      style={styles.inputStyle}
                      secureTextEntry={true}
                      autoCapitalize='none'
                      autoCorrect={false}
                  />
              </View>
              <View>
                  <Text style={styles.inputTopLable}>Enter Your Vailide Email</Text>
                  <TextInput
                      style={styles.inputStyle}
                      secureTextEntry={true}
                      autoCapitalize='none'
                      autoCorrect={false}
                  />
              </View>
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
    mainFromText:{
        color: '#16a085',
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    smallTxt:{
        color: '#7f8c8d',
        fontSize: 17,
        marginBottom: 20,
    },
    inputTopLable:{
        color: '#16a085',
        marginBottom: 7,
        fontSize: 16,
    },
    tk:{
        color: 'blue'
    },
    inputStyle:{
        // borderColor: 'rgba(0,0,0,0.3)',
        borderColor: '#1abc9c',
        borderWidth: 2,
        borderRadius: 3,
        paddingVertical: 10,
        fontSize: 18,
        color: '#079992'
    }
})