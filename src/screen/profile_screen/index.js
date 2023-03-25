import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { My_Profile } from '../../data'
import { ContainerImage, Row } from '../../Component'
import { COLORS, WIDTH_SCREEN } from '../../constant'

const ProfileScreen = () => {
    const Bio = My_Profile.bio.split('|');
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <Row style={{ marginHorizontal: 16, paddingVertical: 8 }}>
                <Row style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: '600', marginRight: 5 }}>{My_Profile.username}</Text>
                    <ContainerImage
                        source={require('../../assets/iconAccountsList.png')}
                        size={12}
                    />
                </Row>
                <ContainerImage
                    source={require('../../assets/iconShape.png')}
                />
            </Row>
            <ScrollView showsVerticalScrollIndicator={0}>
                <Row style={{marginHorizontal:16}}>
                    <ContainerImage
                        source={My_Profile.img}
                        size={86}
                        circle
                        style={{ borderWidth: 1, padding: 4, borderColor: COLORS.gray40 }}
                    />
                    <Row
                        style={{
                            justifyContent: 'space-evenly',
                            flex: 1
                        }}
                    >
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
                <View style={{marginHorizontal:12, marginTop:8}}>
                    <Text style={{fontSize:14, fontWeight:'500'}}>{Bio[0]}</Text>
                    <Text style={{fontSize:12, fontWeight:'300'}}>{Bio[1]}</Text>
                    <Text style={{fontSize:12, fontWeight:'300'}}>{Bio[2]}</Text>
                    <Text style={{fontSize:12, fontWeight:'300'}}>{Bio[3]}</Text>
                    <Text style={{fontSize:12, fontWeight:'300'}}>{Bio[4]}</Text>
                    <Text style={{fontSize:12, fontWeight:'400'}}>{Bio[5]}</Text>
                </View>
                <TouchableOpacity
                    style={{
                        borderWidth:0.5,
                        paddingVertical:8,
                        alignItems:'center',
                        borderRadius:8,
                        borderColor:COLORS.gray40,
                        marginHorizontal:16,
                        marginVertical:16
                    }}
                >
                    <Text style={{fontWeight:'500'}}>Edit Profile</Text>
                </TouchableOpacity>
                <View>
                    <ScrollView showsHorizontalScrollIndicator={0} horizontal>
                        {My_Profile.highlight.map((item)=>(
                            <View
                                style={{
                                    borderRadius:32,
                                    alignItems:'center'
                                }}
                            >
                                <ContainerImage
                                    source={{uri:item.cover}}
                                    size={64}
                                    circle
                                    mode='cover'
                                    style={{marginHorizontal:4,padding:4,borderWidth:0.5,borderColor:COLORS.gray40}}
                                />
                                <Text style={{marginTop:4,fontSize:12, fontWeight:'400'}}>{item.name}</Text>
                            </View>
                        ))}
                        <View style={{alignItems:'center'}}>
                            <TouchableOpacity
                                style={{
                                    width:64,
                                    height:64,
                                    borderWidth:0.5,
                                    borderRadius:32,
                                    borderColor:COLORS.gray40,
                                    marginHorizontal:4,
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}
                            >
                                <ContainerImage
                                    source={require('../../assets/iconAddStory.png')}
                                    size={20}
                                />
                            </TouchableOpacity>
                            <Text style={{marginTop:4,fontSize:12, fontWeight:'400'}}>New</Text>
                        </View>
                    </ScrollView>
                </View>
                <Row style={{justifyContent:'space-around',paddingVertical:16, marginTop:8}}>
                    <ContainerImage
                        source={require('../../assets/iconGridIcon.png')}
                    />
                    <ContainerImage
                        source={require('../../assets/iconReels.png')}
                    />
                    <ContainerImage
                        source={require('../../assets/iconPlay.png')}
                    />
                    <ContainerImage
                        source={require('../../assets/iconTagsIcon.png')}
                    />
                </Row>
                <View
                    style={{
                        flexDirection:'row',
                        flexWrap:'wrap'
                    }}
                >
                    {My_Profile.feed.map((feed)=>(
                        <View
                            style={{
                                height:WIDTH_SCREEN/3-2,
                                width:WIDTH_SCREEN/3-2,
                                margin:1
                            }}
                        >
                            <ContainerImage
                                source={{uri:feed.cover}}
                                size={WIDTH_SCREEN/3-2}
                                mode='cover'
                            />
                           { feed.totals > 1 && <ContainerImage
                                source={require('../../assets/iconGallery.png')}
                                style={{
                                    position:'absolute',
                                    right:8,
                                    top:8
                                }}
                                size={15}
                            />}
                           { feed.type === 'video' && <ContainerImage
                                source={require('../../assets/iconVideo.png')}
                                style={{
                                    position:'absolute',
                                    right:8,
                                    top:8
                                }}
                                size={15}
                            />}
                        </View>
                    ))}
                </View>
                <View style={{height:40}}/>
            </ScrollView>
        </View>
    )
}

export default ProfileScreen