import React from 'react'
import { StyleSheet, TouchableOpacity, Image, View, Text } from 'react-native'
import { Colors } from '../assets/Colors'



const TabItem = ({ index, isFocused, onPress, onLongPress, label }) => {
  const Icon = () => {
    if (label == 'Home') {
      return isFocused ? <Image style={{ width: 24, height: 24, resizeMode: 'contain' }} source={require('../assets/iconHomeA.png')} /> : <Image style={{ width: 24, height: 24, resizeMode: 'contain' }} source={require('../assets/iconHome.png')} />
    }
    else if (label == 'Search') {
      return isFocused ? <Image style={{ width: 24, height: 24, resizeMode: 'contain' }} source={require('../assets/iconSearch.png')} /> : <Image style={{ width: 24, height: 24, resizeMode: 'contain' }} source={require('../assets/iconSearch.png')} />
    }
    else if (label == 'Plus') {
      return isFocused ? <Image style={{ width: 24, height: 24, resizeMode: 'contain' }} source={require('../assets/iconPlus.png')} /> : <Image style={{ width: 24, height: 24, resizeMode: 'contain' }} source={require('../assets/iconPlus.png')} />
    }
    else if (label == 'Favorite') {
      return isFocused ? <Image style={{ width: 24, height: 24, resizeMode: 'contain'}} source={require('../assets/iconFavorite.png')} /> : <Image style={{ width: 24, height: 24, resizeMode: 'contain' }} source={require('../assets/iconFavorite.png')} />
    }
    else if (label == 'Profile') {
      return isFocused ? <Image style={{ width: 24, height: 24, resizeMode: 'contain', borderRadius: 12 }} source={{
        uri: 'https://instagram.fsub2-3.fna.fbcdn.net/v/t51.2885-19/296742788_424252019725018_6578375880060475471_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fsub2-3.fna.fbcdn.net&_nc_cat=110&_nc_ohc=HXtC6ue-iiQAX-y48ll&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBfKaEwdFmWBu-ikwFkZHoAtWHkLOvHYIIiAUIIP_TvRQ&oe=6381C36D&_nc_sid=8fd12b'
      }} /> : <Image style={{ width: 24, height: 24, resizeMode: 'contain', borderRadius: 12 }} source={{
        uri: 'https://instagram.fsub2-3.fna.fbcdn.net/v/t51.2885-19/296742788_424252019725018_6578375880060475471_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fsub2-3.fna.fbcdn.net&_nc_cat=110&_nc_ohc=HXtC6ue-iiQAX-y48ll&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBfKaEwdFmWBu-ikwFkZHoAtWHkLOvHYIIiAUIIP_TvRQ&oe=6381C36D&_nc_sid=8fd12b'
      }} />
    }

    return <Image style={{ width: 25, height: 25 }} source={require('../assets/iconHomeA.png')} />
  }

  return (
    <TouchableOpacity
      key={index}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}
    >
      <Icon />
    </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1
  },
  iconQR: {
    width: 65,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    position: 'absolute',
    top: -40,
    borderColor: Colors.colorPrimary,
    backgroundColor: Colors.colorWhite,
    borderWidth: 0.5
  },
  textIcon: {
    fontSize: 11,
    marginTop: 5,
    color: 'black',
  },
  textIconQR: {
    fontSize: 11,
    color: 'black',
    marginTop: 12
  },
})