import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SPACE, WIDTH_SCREEN } from '../../constant'
import { ContainerImage, IconImage } from '../../Component'

const LoginScreen = ({ navigation }) => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    return (
        <View
            style={{ flex: 1, backgroundColor: COLORS.white }}>
            {/* Header */}
            <View
                style={{ paddingHorizontal: SPACE * 2, justifyContent: 'center', height: 44 }}>
                <IconImage
                    source={require('../../assets/iconBack.png')}
                    onPress={() => navigation.goBack()} />
            </View>
            {/* Logo Instagram */}
            <View style={{ flex: 1, justifyContent: 'center'}}>
                <ContainerImage
                    source={require('../../assets/logoIG.png')}
                    height={47} />
            </View>
            <View style={{ flex: 1.2, marginHorizontal: SPACE * 2 }}>
                {/* Input Email or Username */}
                <TextInput
                    placeholder='Username, email, or phone number'
                    style={Styles.InputBox} />
                {/* Input Password */}
                <View>
                    <TextInput
                        placeholder='Password'
                        secureTextEntry={isShowPassword}
                        style={[Styles.InputBox,{paddingRight:36}]}
                        value={password}
                        onChangeText={setPassword}
                    />
                    {password.length > 0 && <IconImage
                        source={isShowPassword ? require('../../assets/iconEyenotshow.png') : require('../../assets/iconEyeshow.png')}
                        size={28}
                        style={{
                            position: 'absolute',
                            right: SPACE,
                            top: 28,
                        }}
                        onPress={() => setIsShowPassword(!isShowPassword)}
                    />}
                    {/* Forgot Password */}
                    <TouchableOpacity>
                        <Text
                            style={{ color: COLORS.blue, fontWeight: '500', textAlign: 'right', fontSize: 14, marginTop: SPACE * 2 }}>
                            Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                {/* Button Login */}
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        // onPress={() => navigation.navigate('LoginScreen')}
                        style={{
                            backgroundColor: COLORS.blue,
                            width: WIDTH_SCREEN - (34 * 2),
                            height: 44,
                            borderRadius: SPACE,
                            marginTop: SPACE * 3,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Text
                            style={{
                                color: '#fff',
                                fontWeight: '500',
                                fontSize: 14,
                            }}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                {/* Button Login With Facebook */}
                <TouchableOpacity
                    style={{ flexDirection: 'row', marginTop: SPACE * 3, justifyContent: 'center', alignItems: 'center' }}>
                    <IconImage source={require('../../assets/iconFb.png')} />
                    <Text
                        style={{
                            color: COLORS.blue,
                            fontSize: 14,
                            fontWeight: '600',
                            marginLeft: SPACE
                        }}>
                        Log In With Facebook
                    </Text>
                </TouchableOpacity>
                {/* Button navigate to SingUp  */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: SPACE * 2 }}>
                    <View style={{ borderTopWidth: 0.5, borderColor: COLORS.gray, flex: 1 }} />
                    <Text style={{ fontSize: 14, fontWeight: '300', marginHorizontal: SPACE }}>OR</Text>
                    <View style={{ borderTopWidth: 0.5, borderColor: COLORS.gray, flex: 1 }} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 14, fontWeight: '300' }}>Dont have an account? </Text>
                    <Text style={{ color: COLORS.blue, fontSize: 14 }}>Sign Up</Text>
                </View>

            </View>
            {/* Footer */}
            <View style={{ borderTopWidth: 0.2, borderColor: COLORS.gray, alignItems: 'center', height: 84/2, justifyContent: 'center' }}>
                <Text style={{ color: COLORS.gray40, fontSize: 12 }}>Instagram UI with React Native</Text>
            </View>
        </View>
    )
}

export default LoginScreen

const Styles = StyleSheet.create({
    InputBox: {
        fontSize: 14,
        width: '100%',
        backgroundColor: COLORS.gray10,
        borderRadius: SPACE,
        padding: SPACE * 2,
        borderWidth: 1,
        borderColor: COLORS.gray,
        marginTop: SPACE * 2
    }
})