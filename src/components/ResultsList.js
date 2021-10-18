import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultDetails from './ResultDeatils';
import { withNavigation } from 'react-navigation';

const ResultsList = ({ title, results, navigation }) => {
    return <View style={styles.conatiner}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => { return result.id }}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => { navigation.navigate('Result') }}>
                        <ResultDetails result={item} />
                    </TouchableOpacity>
                )
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


export default withNavigation(ResultsList);