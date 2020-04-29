import React, {Component} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

export default class Search extends Component {
  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder="Para onde?"
        placeholderTextColor="#333"
        onPress={() => {}}
        query={{
          key: 'AIzaSyBAlq2Zs0pDwDxLIW5iKfHg4K9tVIw6McA',
          language: 'pt',
        }}
        textInputProps={{
          autoCapitalize: 'none',
          autoCorrect: false,
        }}
        fetchDetails
        enablePoweredByContainer={false}
      />
    );
  }
}
