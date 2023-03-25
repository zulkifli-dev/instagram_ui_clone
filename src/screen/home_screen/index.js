import { View, Text, ScrollView, FlatList, TouchableOpacity, Platform } from 'react-native'
import React, { useEffect } from 'react'
import { ContainerImage, Row } from '../../Component'
import { Friend_IG, My_Profile, POST } from '../../data'
import { COLORS, WIDTH_SCREEN } from '../../constant'
import { LinearGradient } from 'expo-linear-gradient';
import DeviceNumber from 'react-native-device-number';



const HomeScreen = () => {

    useEffect(()=>{
        if(Platform.OS === 'android'){
            DeviceNumber.get().then((res) => {
              console.log(res);
            });
        }
      },[])
    
    return (
        <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 5 }}>

            {/* header */}
            <Row style={{ paddingVertical: 10 }}>
                {/* icon camera - logo instagram - igtv - dm */}
                <ContainerImage size={25} style={{ marginHorizontal: 5, marginRight: 25 }} source={require('../../assets/iconCamera.png')} />
                <ContainerImage style={{ flex: 1, marginHorizontal: 5 }} source={require('../../assets/logoIG.png')} />
                <ContainerImage size={25} style={{ marginHorizontal: 5 }} source={require('../../assets/iconIGTV.png')} />
                <ContainerImage size={25} style={{ marginHorizontal: 5 }} source={require('../../assets/iconMessenger.png')} />
            </Row>
            {/* content */}
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={{ borderTopWidth: 0.5, borderBottomWidth: 0.5, borderColor: COLORS.gray }}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {[My_Profile, ...Friend_IG].map((user, index) => (
                            <TouchableOpacity key={'story'+index} style={{ marginHorizontal: 7, marginVertical: 10, alignItems: 'center' }}>
                                <LinearGradient
                                    colors={['#A60F93', '#D91A46', '#FBAA47']}
                                    start={{ x: 1, y: 0 }}
                                    end={{ x: 0, y: 1 }}
                                    style={{ borderRadius: 32, padding: 2 }}
                                >

                                    <ContainerImage
                                        source={user.img}
                                        size={60}
                                        mode='cover'
                                        circle
                                    />
                                </LinearGradient>
                                <Text
                                    style={{ marginTop: 5, fontWeight: '400', fontSize: 12 }}
                                >{index === 0 ? 'Your Story' : user.username}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
                {POST.map((post, index) => (
                    <View key={'post'+index} style={{ marginBottom: 15 }}>
                        <Row style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
                            <Row style={{ flex: 1 }}>
                                <ContainerImage
                                    source={post.user.img}
                                    size={32}
                                    circle
                                    style={{ marginRight: 5 }}
                                />
                                <View>
                                    <Row>
                                        <Text style={{ marginHorizontal: 5, fontSize: 12, fontWeight: '500' }}>{post.user.username}</Text>
                                        <ContainerImage
                                            source={require('../../assets/iconOfficial.png')}
                                            size={10}
                                        />
                                    </Row>
                                    <Text style={{ marginHorizontal: 5, marginTop: 2, fontSize: 11, fontWeigth: '300' }}>{post.details_post.location}</Text>
                                </View>
                            </Row>
                            <ContainerImage
                                source={require('../../assets/iconMore.png')}
                                size={14}
                            />
                        </Row>
                        <ContainerImage
                            source={post.image_post}
                            size={WIDTH_SCREEN}
                            mode='cover'
                        />
                        <Row style={{ paddingVertical: 10 }}>
                            <Row style={{ flex: 1 }}>
                                <ContainerImage
                                    source={require('../../assets/iconLike.png')}
                                    size={23}
                                    style={{ marginHorizontal: 8 }}
                                />
                                <ContainerImage
                                    source={require('../../assets/iconComment.png')}
                                    size={23}
                                    style={{ marginHorizontal: 8 }}
                                />
                                <ContainerImage
                                    source={require('../../assets/iconMessenger.png')}
                                    size={23}
                                    style={{ marginHorizontal: 8 }}
                                />
                            </Row>
                            <ContainerImage
                                source={require('../../assets/iconSave.png')}
                                size={23}
                                style={{ marginHorizontal: 8 }}
                            />
                        </Row>
                        <Row style={{ marginLeft: 10 }}>
                            <ContainerImage
                                source={post.details_post.like[0].img}
                                size={17}
                                circle
                                mode='cover'
                            />
                            <Text style={{ marginLeft: 10, fontSize: 13 }}>
                                Like by
                                <Text style={{ fontSize: 13, fontWeight: '500' }}> {post.details_post.like[0].username} </Text>
                                and
                                <Text style={{ fontSize: 13, fontWeight: '500' }}> {post.details_post.like.length - 1} others</Text>
                            </Text>
                        </Row>
                        <Text style={{ marginLeft: 10, marginTop: 5, fontSize: 13, fontWeight: '500' }}>
                            {post.user.username}
                            <Text style={{ fontSize: 13, fontWeight: '300' }}> {post.details_post.caption}
                            </Text>
                        </Text>
                    </View>
                ))}
            </ScrollView>
            <View style={{height:50}}></View>
            {/* story */}
            {/* postingan */}
        </View>
    )
}

export default HomeScreen


