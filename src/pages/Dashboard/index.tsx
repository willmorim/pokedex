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
  PatterImage,
  PokemonImage,
  PokemonInfo,
  PokemonNumber,
  PokemonName,
  PokemonTypeContainer,
  PokemonTypeContainerInfo,
  PokemonTypeImage,
  PokemonType,
  Teste,
  PokeballImage,
} from './styles';

import bulbasaurImg from '../../assets/bulbasaur.png';
import grass from '../../assets/grass.png';
import patter from '../../assets/patter.png';
import pokeball from '../../assets/pokeball.png';

const Dashboard: React.FC = () => {
  return (
    <Container>
      {/* <PokeBollaBackGround source={pokeball}> */}
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

            <Teste>
              <PatterImage source={patter} style={{ tintColor: 'white' }} />
              <PokeballImage source={pokeball} style={{ tintColor: 'white' }} />
              <PokemonImage source={bulbasaurImg} />
              {/* <PatterImage source={patter} /> */}
            </Teste>
          </PokemonContainer>

          <PokemonContainer>
            <PokemonInfo>
              <PokemonNumber>#001</PokemonNumber>
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

            <Teste>
              <PatterImage source={patter} style={{ tintColor: 'white' }} />
              <PokeballImage source={pokeball} style={{ tintColor: 'white' }} />
              <PokemonImage source={bulbasaurImg} />
              {/* <PatterImage source={patter} /> */}
            </Teste>
          </PokemonContainer>

          <PokemonContainer>
            <PokemonInfo>
              <PokemonNumber>#001</PokemonNumber>
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

            <Teste>
              <PatterImage source={patter} style={{ tintColor: 'white' }} />
              <PokeballImage source={pokeball} style={{ tintColor: 'white' }} />
              <PokemonImage source={bulbasaurImg} />
              {/* <PatterImage source={patter} /> */}
            </Teste>
          </PokemonContainer>
        </PokemonList>
      </Content>
      {/* </PokeBollaBackGround> */}
    </Container>
  );
};

export default Dashboard;
