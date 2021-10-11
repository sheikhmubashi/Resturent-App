import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResult';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMassage] = useResult();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    })
  }


  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMassage ? <Text>{errorMassage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
      <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricer' />
      <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender' />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
