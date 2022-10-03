import { StyleSheet, Text, TextInput, View, secureTextEntry, TouchableOpacity } from 'react-native'
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react'

export default function LoginFrom() {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    // console.log(userName, userPassword);

    // for using submit button to verifide user 
    const submit = () => {
        if (userName === "istiak" && userPassword === "is123"){
            alert(`Welcome Back ${userName}`)
        }else{
            alert(`user name and password is'n currect please try again`)
        }
    }

    // checkBox confarmation 
    const [agree, setAgree] = useState(false);

    return (
        <View style={{ marginTop: 40, }}>
            <Text style={styles.mainFromText}>Login Forn</Text>
            <Text style={styles.smallTxt}>Please filup currect email and password..</Text>
            <View>
                <View>
                    <Text style={styles.inputTopLable}>Enter Your Name</Text>
                    <TextInput
                        style={styles.inputStyle}
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={userName}
                        onChangeText={(actualDeta) => setUserName(actualDeta)}
                    />
                </View>

                <View style={styles.inputDiv}>
                    <Text style={styles.inputTopLable}>Enter Valide Password</Text>
                    <TextInput
                        style={styles.inputStyle}
                        secureTextEntry={true}
                        autoCapitalize='none'
                        autoCorrect={false}
                        valu={userPassword}
                        onChangeText={(actualDeta) => setUserPassword(actualDeta)}
                    />
                </View>
            </View>

            <View style={styles.dflexCBox}>
                <Checkbox
                    //   style={styles.checkbox}
                    value={agree}
                    onValueChange={() => setAgree(!agree)}
                    color={agree ? '#16a085' : undefined}
                />
                <Text
                    style={[styles.cBoxTxt, { color: agree ? '#16a085' : '#7f8c8d' }]}>Ihave Agree all trams and condation!</Text>
            </View>
            
            <View>
                <TouchableOpacity
                    style={[styles.loginBtn,
                    {
                        backgroundColor: agree ? '#16a085' : '#7f8c8d'
                    }]}
                    disabled={!agree}
                    onPress={() => submit()}
                >
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainFromText: {
        color: '#16a085',
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    smallTxt: {
        color: '#7f8c8d',
        fontSize: 17,
        marginBottom: 20,
    },
    inputTopLable: {
        color: '#16a085',
        marginBottom: 7,
        fontSize: 16,
    },
    inputDiv: {
        marginTop: 19,
    },
    inputStyle: {
        // borderColor: 'rgba(0,0,0,0.3)',
        borderColor: '#1abc9c',
        borderWidth: 2,
        borderRadius: 3,
        paddingVertical: 10,
        fontSize: 18,
        color: '#079992'
    },
    dflexCBox: {
        // flex: 1,
        // display: 'flex',
        flexDirection: 'row',
        marginTop:7
    },
    cBoxTxt: {
        marginStart: 7
    },
    loginBtn:{
        color: 'white',
        marginTop: 15,
        paddingVertical: 10,
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 6
    },
    tk: {
        color: 'blue'
    },
    
})