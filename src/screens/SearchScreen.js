import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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
    <>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMassage ? <Text>{errorMassage}</Text> : null}
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
        <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricer' />
        <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender' />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
