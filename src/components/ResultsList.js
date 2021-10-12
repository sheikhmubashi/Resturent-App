import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native'

const ResultsList = ({ title, results }) => {
    return <View>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal={true}
            data={results}
            keyExtractor={(result) => {return result.id }}
            renderItem={({ item }) => {
                return <Text>{item.name}</Text>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})


export default ResultsList;