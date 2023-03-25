import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { ContainerImage, Row } from '../../Component'
import { Friend_IG, My_Profile, POST } from '../../data'
import { COLORS, WIDTH_SCREEN } from '../../constant'
import { LinearGradient } from 'expo-linear-gradient';


const HomeScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 5 }}>

            {/* header */}
            <Row style={{ alignItems: 'center', paddingVertical: 10 }}>

                {/* icon camera - logo instagram - igtv - dm */}
                <ContainerImage style={{ marginHorizontal: 5, marginRight: 25 }} source={require('../../assets/iconCamera.png')} />
                <ContainerImage style={{ marginHorizontal: 5, flex: 1 }} source={require('../../assets/logoIG.png')} />
                <ContainerImage style={{ marginHorizontal: 5 }} source={require('../../assets/iconIGTV.png')} />
                <ContainerImage style={{ marginHorizontal: 5 }} source={require('../../assets/iconMessenger.png')} />
            </Row>

            <ScrollView showsVerticalScrollIndicator={false}>
                
                {/* content */}
                <View style={{ borderTopWidth: 0.5, borderBottomWidth: 0.5, borderColor: COLORS.gray }}>
                    {/* story */}
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {[My_Profile, ...Friend_IG].map((user, index) => {
                            return (
                                <StoryProfile
                                    key={`story_${index}`}
                                    userData={user}
                                    index={index}
                                />
                            )
                        })}
                    </ScrollView>
                </View>

                {/* postingan */}
                {POST.map((post, index) => (
                    <CardPost post={post} />
                ))}
            </ScrollView >
            <View style={{ height: 50 }}></View>
        </View >
    )
}

export default HomeScreen



const StoryProfile = ({ index, userData }) => (
    <TouchableOpacity style={{ marginHorizontal: 7, marginVertical: 10, alignItems: 'center' }}>

        {/* foto */}
        <LinearGradient
            colors={['#A60F93', '#D91A46', '#FBAA47']}
            style={{ borderRadius: 31, padding: 2 }}
            start={{ x: 1.0, y: 0.0 }} end={{ x: 0.0, y: 1.0 }}
        >
            <ContainerImage source={userData.img} size={60} circle mode='cover' />
        </LinearGradient>

        {/* name */}
        <Text style={{ marginTop: 5, fontWeight: '400', fontSize: 12 }}>{index == 0 ? 'Your Story' : userData.username}</Text>
    </TouchableOpacity>
)

const CardPost = ({post}) => (
    <View style={{ marginBottom: 10 }}>

        {/* foto - name - location - more */}
        <Row>
            <Row style={{ alignItems: 'center', paddingHorizontal: 5, paddingVertical: 10 }}>
                <ContainerImage
                    source={post.user.img}
                    size={32}
                    circle
                />
                <View style={{ flex: 1 }}>
                    <Row>
                        <Text style={{ marginHorizontal: 5, fontSize: 13, fontWeight: '500' }}>{post.user.username}</Text>
                        <ContainerImage source={require('../../assets/iconOfficial.png')} size={10} />
                    </Row>
                    <Text style={{ marginHorizontal: 5, marginTop: 2, fontSize: 11, fontWeight: '300' }}>{post.details_post.location}</Text>
                </View>
                <ContainerImage source={require('../../assets/iconMore.png')} size={14} />
            </Row>
        </Row>

        {/* foto slide*/}
        <View>
            {post.image_post.map((images, index) => (
                <View>
                    <ContainerImage
                        source={images}
                        size={WIDTH_SCREEN}
                        mode='cover'
                    />
                    {post.image_post.length > 1 && <View style={{ position: 'absolute', top: 10, right: 20, paddingHorizontal: 10, paddingVertical: 2, borderRadius: 10, backgroundColor: 'rgba(12,12,12,0.7)' }}>
                        <Text style={{ color: 'white', fontSize: 12 }}>{index + 1}/{(post.image_post).length}</Text>
                    </View>}
                </View>
            ))}
        </View>

        {/* love - comment - message - dot -save*/}
        <Row Row style={{ justifyContent: 'space-between', paddingVertical: 10 }}>
            <Row >
                <ContainerImage size={23} style={{ marginHorizontal: 8 }} source={require('../../assets/iconLike.png')} />
                <ContainerImage size={23} style={{ marginHorizontal: 8 }} source={require('../../assets/iconComment.png')} />
                <ContainerImage size={23} style={{ marginHorizontal: 8 }} source={require('../../assets/iconMessenger.png')} />
            </Row>
            <ContainerImage size={23} style={{ marginHorizontal: 8 }} source={require('../../assets/iconSave.png')} />
        </Row>

        {/* foto friend like - name and count like others */}
        <Row style={{ paddingHorizontal: 10 }}>
            <ContainerImage source={post.details_post.like[0].img} circle size={17} mode='cover' />
            <Text style={{ fontSize: 13, marginLeft: 10 }}>
                Like by
                <Text style={{ fontSize: 13, fontWeight: '500' }}> {post.details_post.like[0].username} </Text>
                and
                <Text style={{ fontSize: 13, fontWeight: '500' }}> {post.details_post.like.length - 1} others</Text>
            </Text>
        </Row>

        {/* name akun - caption */}
        <Text style={{ fontSize: 13, fontWeight: '500', marginLeft: 10, marginTop: 5 }}>
            {post.user.username}
            <Text style={{ fontSize: 13, fontWeight: '300' }}> {post.details_post.caption}</Text>
        </Text>
    </View>
)