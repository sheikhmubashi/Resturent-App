import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResult';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMassage] = useResult();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    })
  }


  return (
    <>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMassage ? <Text>{errorMassage}</Text> : null}
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' navigation={navigation} />
        <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricer' navigation={navigation} />
        <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender' navigation={navigation} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
