import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';
import { PokemonResults } from './index';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const PokeBollaBackGround = styled.ImageBackground``;

export const Content = styled.View`
  padding: 40px 40px;
  /* background: #1729; */
`;

export const Header = styled.View`
  /* padding: 24px; */
  /* margin-top: ${getStatusBarHeight() + 40}px; */
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const ChooseGeneration = styled.TouchableOpacity`
  margin-right: 20px;
`;

export const SortPokemon = styled.TouchableOpacity`
  margin-right: 20px;
`;

export const FilterPokemon = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-size: 32px;
  font-family: 'SFProDisplay-Bold';
  line-height: 38px;
  margin-top: 32px;
`;

export const TitleInfo = styled.Text`
  font-size: 16px;
  line-height: 19px;
  color: #747476;
  margin-top: 10px;
`;

export const PokemonList = styled(
  FlatList as new () => FlatList<PokemonResults>,
)`
  padding-top: 45px;
`;

export const PokemonContainer = styled.View`
  width: 334px;
  height: 115px;
  background: #8bbe8a;
  border-radius: 10px;
  flex-direction: row;
  margin-bottom: 30px;
`;

export const PokemonContainerImage = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PokeballImage = styled.Image`
  width: 145px;
  height: 100%;
  position: absolute;
  opacity: 0.2;
  left: 15px;
`;

export const PatterImage = styled.Image`
  width: 74px;
  height: 32px;
  bottom: 40px;
  opacity: 0.2;
  right: 65px;
`;

export const PokemonImage = styled.Image`
  bottom: 20px;
  width: 130px;
  height: 130px;
  right: 30px;
`;

export const PokemonInfo = styled.View`
  flex: 1;
  padding: 20px;
`;

export const PokemonNumber = styled.Text`
  font-size: 12px;
  line-height: 14px;
  font-family: 'SFProDisplay-Bold';
  color: rgba(23, 23, 27, 0.6);
`;

export const PokemonName = styled.Text`
  font-family: 'SFProDisplay-Bold';
  font-size: 26px;
  line-height: 31px;
  color: #ffffff;
`;

export const PokemonTypeContainer = styled.View`
  width: 130px;
  margin-top: 5px;

  flex-direction: row;
  justify-content: space-between;
`;

export const PokemonTypeContainerInfo = styled.View`
  width: 61px;
  height: 25px;
  background: #62b957;
  border-radius: 3px;
  align-items: center;

  flex-direction: row;
  padding: 5px;
`;

export const PokemonTypeImage = styled.Image`
  margin-right: 5px;
`;

export const PokemonType = styled.Text`
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  font-family: 'SFProDisplay-Regular';
`;
