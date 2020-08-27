import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

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
  /* margin-top: ${getStatusBarHeight() + 24}px; */
  /* background: #28262e; */
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

export const FilterPokemon = styled.TouchableOpacity`
  margin-right: 20px;
`;

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
