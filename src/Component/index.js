import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const IconImage = ({ source, size, width, height, style, onPress }) => {
    return (
        <TouchableOpacity
            disabled={!onPress}
            onPress={onPress}
            style={[{ width: size || width || 20, height: size || height || 20 }, style]}>
            <Image
                source={source}
                style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
        </TouchableOpacity>
    )
}

const ContainerImage = ({ source, size, width, height, mode, circle, style }) => {
    return (
        <TouchableOpacity
            style={[{ width: size || width || 25, height: size || height || 25, borderRadius: circle ? size / 2 : 0 }, style]}>
            <Image
                source={source}
                style={{ width: '100%', height: '100%', resizeMode: mode || 'contain', borderRadius: circle ? size / 2 : 0 }} />
        </TouchableOpacity>
    )
}

const Row = ({ children, style, space }) => {
    return (
        <View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: space || 'flex-start' }, style]}>
            {children}
        </View>
    )
}


export { IconImage, ContainerImage, Row } 