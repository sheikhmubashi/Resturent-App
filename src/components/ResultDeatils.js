import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultDetails = ({ result }) => {
    return (
        <View style={Styles.container}>
            <Image style={Styles.image} source={{ uri: result.image_url }} />
            <Text>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews,</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 5,
        marginBottom: 5
    }
})

export default ResultDetails;