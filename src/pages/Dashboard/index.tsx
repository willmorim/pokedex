import React, { useEffect, useState } from 'react';
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
  PokemonTypeContainerInfo,
  PokemonTypeImage,
  PokemonType,
  PokemonContainerImage,
  PatterImage,
  PokeballImage,
} from './styles';

import bulbasaurImg from '../../assets/bulbasaur.png';
import grass from '../../assets/grass.png';
import patter from '../../assets/patter.png';
import pokeball from '../../assets/pokeball.png';
import api from '../../services/api';

export interface Pokemons {
  id: string;
  name: string;
  // results: PokemonTypes[];
}

interface PokemonTypes {
  types: [
    slot: number,
    type: {
      name: string;
      url: string;
    }
  ]
}

const Dashboard: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  const [searchPokemons, setSearchPokemons] = useState('');

  useEffect(() => {
    async function loadPokemons(): Promise<void> {
      const response = await api.get(`${searchPokemons}`);

      setPokemons(response.data);
    }

    loadPokemons();
    }, [searchPokemons]);

  console.log('GETTT: ',pokemons)
  console.log('nome do pokemon: ',searchPokemons)


  return (
    <Container>
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
          value={searchPokemons}
          onChangeText={setSearchPokemons}
          placeholder="What Pokémon are you looking for?"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <PokemonList
        data={pokemons}
        renderItem={({ item }) => (
          <PokemonContainer>
            <PokemonInfo>
              <PokemonNumber>{item.name}</PokemonNumber>
              <PokemonName>Bulbasaur</PokemonName>
              <PokemonTypeContainer>
                <PokemonTypeContainerInfo>
                  <PokemonTypeImage source={grass} />
                  <PokemonType>Grass</PokemonType>
                </PokemonTypeContainerInfo>


                <PokemonTypeContainerInfo>
                  <PokemonTypeImage source={grass} />
                  <PokemonType>Grass</PokemonType>
                </PokemonTypeContainerInfo>
              </PokemonTypeContainer>
            </PokemonInfo>

            <PokemonContainerImage>
              <PatterImage source={patter} style={{ tintColor: 'white' }} />
              <PokeballImage source={pokeball} style={{ tintColor: 'white' }} />
              <PokemonImage source={bulbasaurImg} />
            </PokemonContainerImage>
          </PokemonContainer>
        )}/>
      </Content>
    </Container>
  );
};

export default Dashboard;
