import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { My_Profile } from '../../data'
import { ContainerImage, Row } from '../../Component'
import { COLORS, WIDTH_SCREEN } from '../../constant'

const ProfileScreen = () => {

  const Bio = My_Profile.bio.split('|');
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
      <View style={{ backgroundColor: 'white'}}>
        <Row style={{marginHorizontal:16, paddingVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
          <Row style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: '600' }}>{My_Profile.username}</Text>
            <ContainerImage size={12} style={{ marginLeft: 5 }} source={require('../../assets/iconAccountsList.png')} />
          </Row>
          <ContainerImage size={25} source={require('../../assets/iconShape.png')} />
        </Row>
        <Row style={{marginHorizontal:8}}>
          <ContainerImage
            source={My_Profile.img}
            size={86}
            circle
            style={{ borderWidth: 1, padding: 4, borderColor: COLORS.gray40 }}
          />
          <Row style={{ flex: 1, justifyContent: 'space-evenly' }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 16, fontWeight: '500' }}>{My_Profile.posts}</Text>
              <Text style={{ fontSize: 13, fontWeight: '300' }}>Post</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 16, fontWeight: '500' }}>{My_Profile.followers}</Text>
              <Text style={{ fontSize: 13, fontWeight: '300' }}>Followers</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 16, fontWeight: '500' }}>{My_Profile.follows}</Text>
              <Text style={{ fontSize: 13, fontWeight: '300' }}>Following</Text>
            </View>
          </Row>
        </Row>
        <View style={{marginHorizontal:8, marginTop: 8 }}>
          {Bio.map((item, index) => (
            <Text key={'bio' + index} style={{ fontSize: index? 12: 14, fontWeight: index ? '300' : '500' }}> {item}</Text>
          ))}
        </View>
        <TouchableOpacity style={{marginHorizontal:16, borderWidth: 0.5, borderColor: COLORS.gray40, alignItems: 'center', paddingVertical: 8, borderRadius: 8, marginTop: 16 }}>
          <Text>Edit Profile</Text>
        </TouchableOpacity>
        <View>
          <ScrollView showsHorizontalScrollIndicator={0} horizontal style={{ marginTop: 16 }}>
            {My_Profile.highlight.map((item, index) =>
              <View key={'highlight' + index} style={{ alignItems: 'center',marginHorizontal:4 }}>
                <ContainerImage
                  source={{ uri: item.cover }}
                  size={64}
                  circle
                  style={{ padding: 3, borderWidth: 0.5, marginHorizontal: 4 }}
                  resizeMode='cover'
                />
                <Text style={{ textAlign: 'center', fontSize: 12, width: '100%', fontWeight: '400', marginTop: 4, marginLeft: 2 }}>{item.name}</Text>
              </View>
            )}
            <View>
              <TouchableOpacity style={{ width: 64, height: 64, borderWidth: 1, borderColor: COLORS.gray40, borderRadius: 32, alignItems: 'center', justifyContent: 'center' }}>
                <ContainerImage size={20} source={require('../../assets/iconAddStory.png')} />
              </TouchableOpacity>
              <Text style={{ textAlign: 'center', fontSize: 12, width: '100%', fontWeight: '400', marginTop: 4, marginLeft: 2 }}>new</Text>
            </View>
          </ScrollView>
        </View>
        <Row style={{ paddingVertical: 16, marginTop: 8, justifyContent: 'space-around' }}>
          <ContainerImage
            source={require('../../assets/iconGridIcon.png')}
            size={25}
          />
          <ContainerImage
            source={require('../../assets/iconReels.png')}
            size={25}
          />
          <ContainerImage
            source={require('../../assets/iconPlay.png')}
            size={25}
          />
          <ContainerImage
            source={require('../../assets/iconTagsIcon.png')}
            size={25}
          />
        </Row>
      </View>
      <View
        style={{
          flexDirection:'row',
          flexWrap:'wrap',
        }}
      >
        {My_Profile.feed.map((feed)=>(
          <View style={{width:WIDTH_SCREEN/3-2,margin:1}}>
            <ContainerImage
              source={{uri:feed.cover}}
              size={WIDTH_SCREEN/3-2}
              mode='cover'
            />
            {feed.totals > 1 && <ContainerImage
              style={{position:'absolute',right:8,top:8}}
              source={require('../../assets/iconGallery.png')}
              size={15}
            />} 
            {feed.type === 'video' && <ContainerImage
              style={{position:'absolute',right:8,top:8}}
              source={require('../../assets/iconVideo.png')}
              size={15}
            />} 
          </View>
        ))}
      </View>
      <View style={{height:40}}></View>
    </ScrollView>
  )
}

export default ProfileScreen