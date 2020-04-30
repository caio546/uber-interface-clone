import React, {Component} from 'react';

import uberx from '../../assets/uberx.png';

import {
  Container,
  TypeTitle,
  TypeDescription,
  TypeImage,
  RequestButton,
  RequestButtonText,
} from './styles';

export default class Details extends Component {
  render() {
    return (
      <Container>
        <TypeTitle>Popular</TypeTitle>
        <TypeDescription>Viagens baratas para o dia a dia</TypeDescription>

        <TypeImage source={uberx} />
        <TypeTitle>UberX</TypeTitle>
        <TypeDescription>R$32,00</TypeDescription>

        <RequestButton onPress={() => {}}>
          <RequestButtonText>SOLICITAR UBERX</RequestButtonText>
        </RequestButton>
      </Container>
    );
  }
}
