import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Input from '../../components/Input';

import {
  Container,
  PokeBollaBackGround,
  Content,
  Header,
  ChooseGeneration,
  SortPokemon,
  FilterPokemon,
  Title,
  TitleInfo,
  PokemonList,
  PokemonContainer,
  PokemonImage,
  PokemonInfo,
  PokemonNumber,
  PokemonName,
  PokemonTypeContainer,
  PokemonTypeImage,
  PokemonType,
} from './styles';

import bulbasaurImg from '../../assets/bulbasaur.png';
import grass from '../../assets/grass.png';

const Dashboard: React.FC = () => {
  return (
    <Container>
      {/* <PokeBollaBackGround> */}
      <Content>
        <Header>
          <ChooseGeneration>
            <Icon name="grid" size={20} />
          </ChooseGeneration>
          <SortPokemon>
            <Icon name="filter" size={20} />
          </SortPokemon>
          <FilterPokemon>
            <Icon
              name="sliders"
              size={20}
              style={{ transform: [{ rotate: '90deg' }] }}
            />
          </FilterPokemon>
        </Header>
        <Title>Pokédex</Title>
        <TitleInfo>
          Search for Pokémon by name or using the
          {'\n'}
          National Pokédex number.
        </TitleInfo>
        <Input
          name="search"
          icon="search"
          placeholder="What Pokémon are you looking for?"
        />

        <PokemonList>
          <PokemonContainer>
            <PokemonInfo>
              <PokemonNumber>#001</PokemonNumber>

              <PokemonName>Bulbasaur</PokemonName>

              <PokemonTypeContainer>
                <PokemonTypeImage source={grass} />
                <PokemonType>Grass</PokemonType>
              </PokemonTypeContainer>
            </PokemonInfo>

            <PokemonImage source={bulbasaurImg} />
          </PokemonContainer>

          <PokemonContainer>
            <PokemonInfo>
              <PokemonNumber>#001</PokemonNumber>

              <PokemonName>Bulbasaur</PokemonName>

              <PokemonTypeContainer>
                <PokemonTypeImage source={grass} />
                <PokemonType>Grass</PokemonType>
              </PokemonTypeContainer>
            </PokemonInfo>

            <PokemonImage source={bulbasaurImg} />
          </PokemonContainer>

          <PokemonContainer>
            <PokemonInfo>
              <PokemonNumber>#001</PokemonNumber>

              <PokemonName>Bulbasaur</PokemonName>

              <PokemonTypeContainer>
                <PokemonTypeImage source={grass} />
                <PokemonType>Grass</PokemonType>
              </PokemonTypeContainer>
            </PokemonInfo>

            <PokemonImage source={bulbasaurImg} />
          </PokemonContainer>
        </PokemonList>
      </Content>
      {/* </PokeBollaBackGround> */}
    </Container>
  );
};

export default Dashboard;
