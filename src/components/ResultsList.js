import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native'
import ResultDetails from './ResultDeatils';


const ResultsList = ({ title, results }) => {
    return <View style={styles.conatiner}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => {return result.id }}
            renderItem={({ item }) => {
                return <ResultDetails result={item}/>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
    },
    conatiner: {
        marginBottom: 10,
    }
})


export default ResultsList;