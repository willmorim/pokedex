import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  background: #f2f2f2;
  border-radius: 10px;
  margin-top: 25px;

  flex-direction: row;
  align-items: center;

  ${props =>
    props.isFocused &&
    css`
      background: #e2e2e2;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #17171b;
  font-size: 16px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 12px;
  margin-left: 22px;
`;
