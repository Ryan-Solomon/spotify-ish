import React, { FC, useState } from 'react';
import styled from 'styled-components/native';

type TProps = {
  placeholder: string;
  onSubmitFn: (t: string) => void;
  headerText: string;
};

export const SearchInput: FC<TProps> = ({
  headerText,
  placeholder,
  onSubmitFn,
}) => {
  const [text, setText] = useState('');
  return (
    <>
      <SText>{headerText}</SText>
      <STextInput
        onChangeText={(text) => setText(text)}
        value={text}
        selectionColor='#25ff08'
        clearTextOnFocus={true}
        blurOnSubmit={true}
        autoCorrect={false}
        placeholder={placeholder}
        onSubmitEditing={() => onSubmitFn(text)}
      />
    </>
  );
};

const STextInput = styled.TextInput`
  color: #222;
  height: 50px;
  width: 90%;
  background-color: white;
  font-size: 22px;
  padding: 8px;
  border-radius: 5px;
`;

const SText = styled.Text`
  color: white;
  font-size: 18px;
`;
