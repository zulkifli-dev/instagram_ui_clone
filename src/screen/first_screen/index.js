import { View, Text, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, HEIGHT_SCREEN, SPACE, WIDTH_SCREEN } from '../../constant'

const FirstScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white'
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        {/* Logo Instagram */}
        <Image
          source={require('../../assets/logoIG.png')}
          style={{
            width: WIDTH_SCREEN - (100 * 2),
            height: 49,
            resizeMode: 'contain'
          }} />

        {/* image profile */}
        <Image
          source={{
            uri: 'https://instagram.fsub2-3.fna.fbcdn.net/v/t51.2885-19/296742788_424252019725018_6578375880060475471_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fsub2-3.fna.fbcdn.net&_nc_cat=110&_nc_ohc=HXtC6ue-iiQAX-y48ll&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBfKaEwdFmWBu-ikwFkZHoAtWHkLOvHYIIiAUIIP_TvRQ&oe=6381C36D&_nc_sid=8fd12b'
          }}
          style={{
            width: 87,
            height: 87,
            borderRadius: 45,
            marginTop: SPACE * 3
          }} />
        {/* acountname */}
        <Text
          style={{
            fontWeight: '500',
            fontSize: 14,
            marginTop: SPACE * 2
          }}>
          Zulkifli.dev
        </Text>

        {/* Button Login */}
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={{
            backgroundColor: COLORS.blue,
            width: '90%',
            marginHorizontal: 500,
            height: 44,
            borderRadius: SPACE,
            marginTop: SPACE * 2,
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

        {/* Button  Switch Account*/}
        <TouchableOpacity
          style={{
            marginTop: SPACE * 4
          }}>
          <Text
            style={{
              color: COLORS.blue,
              fontWeight: '600'
            }}>
            Switch accounts
          </Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View
        style={{
          height: 84 / 2,
          borderColor: COLORS.gray,
          borderTopWidth: 0.5,
          alignItems: 'center',
          justifyContent: 'center'
        }}>

        {/* Button goto SignUp */}
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              color: COLORS.gray40,
              fontSize: 12
            }}>
            Don't have an account?
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 12
              }}>
              Sign Up.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default FirstScreen