import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { My_Profile } from '../../data'
import { ContainerImage, Row } from '../../Component'
import { COLORS, WIDTH_SCREEN } from '../../constant'

const ProfileScreenn = () => {

  const Bio = My_Profile.bio.split('|');
  return (
    <View style={{backgroundColor:'white',flex:1}}>
            <Row style={{ marginHorizontal: 16, paddingVertical: 10 }}>
                <Row style={{ flex: 1 }}>
                    <Text style={{ fontSize: 20, fontWeight: '600' }}>{My_Profile.username}</Text>
                    <ContainerImage source={require('../../assets/iconAccountsList.png')} size={12} style={{ marginLeft: 5 }} />
                </Row>
                <ContainerImage source={require('../../assets/iconShape.png')} />
            </Row>
            <ScrollView showsVerticalScrollIndicator={0} style={{ flex: 1 }}>
                <Row style={{ marginHorizontal: 16 }}>
                    <ContainerImage
                        source={My_Profile.img}
                        size={86}
                        circle
                        style={{ borderWidth: 1, padding: 4, borderColor: COLORS.gray40 }}
                    />
                    <Row style={{ justifyContent: 'space-evenly', flex: 1 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: '500' }}>{My_Profile.posts}</Text>
                            <Text style={{ fontSize: 13, fontWeight: '300' }}>Posts</Text>
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
                <View style={{ marginHorizontal: 16, marginTop: 8 }}>
                    {Bio.map((bio, index) => (
                        <Text style={{ fontSize: index ? 12 : 14, fontWeight: index ? '300' : '500' }}>{bio}</Text>
                    ))}
                </View>
                <TouchableOpacity style={{ borderWidth: 0.5, borderColor: COLORS.gray40, paddingVertical: 8,marginVertical:16, marginHorizontal: 16, borderRadius: 8, alignItems: 'center' }}>
                    <Text>Edit Profile</Text>
                </TouchableOpacity>
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={0}>
                        {My_Profile.highlight.map((item) => (
                            <View style={{ marginHorizontal: 4 }}>
                                <ContainerImage
                                    source={{ uri: item.cover }}
                                    size={64}
                                    circle
                                    style={{ padding: 3, borderWidth: 0.5, marginHorizontal: 4 }}
                                    resizeMode='cover'
                                />
                                <Text style={{ textAlign: 'center', fontSize: 12, width: '100%', fontWeight: '400', marginTop: 4, marginLeft: 2 }}>{item.name}</Text>
                            </View>
                        ))}
                        <View>
                            <TouchableOpacity style={{ width: 64, height: 64, borderWidth: 1, borderColor: COLORS.gray40, borderRadius: 32, alignItems: 'center', justifyContent: 'center' }}>
                                <ContainerImage size={20} source={require('../../assets/iconAddStory.png')} />
                            </TouchableOpacity>
                            <Text style={{ textAlign: 'center', fontSize: 12, width: '100%', fontWeight: '400', marginTop: 4, marginLeft: 2 }}>new</Text>
                        </View>
                    </ScrollView>
                </View>
                <Row style={{ justifyContent: 'space-around', paddingVertical: 16, marginTop: 8 }}>
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
                <View
                    style={{ flexDirection: 'row', flexWrap: 'wrap' }}
                >
                    {My_Profile.feed.map((feed) => (
                        <View style={{ backgroundColor: COLORS.gray40, width: WIDTH_SCREEN / 3 - 2, height: WIDTH_SCREEN / 3 - 2, margin: 1 }}>
                            <ContainerImage
                                source={{ uri: feed.cover }}
                                size={WIDTH_SCREEN / 3 - 2}
                                mode='cover'
                            />
                            {feed.totals > 1 &&
                                <ContainerImage
                                    source={require('../../assets/iconGallery.png')}
                                    size={15}
                                    style={{ position: 'absolute', right: 8, top: 8 }}
                                />
                            }
                            {feed.type ==='video' &&
                                <ContainerImage
                                    source={require('../../assets/iconVideo.png')}
                                    size={15}
                                    style={{ position: 'absolute', right: 8, top: 8 }}
                                />
                            }
                        </View>
                    ))}
                </View>
            <View style={{height:40}}></View>
            </ScrollView>
        </View>
  )
}

export default ProfileScreenn