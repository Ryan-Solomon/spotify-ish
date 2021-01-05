import React, { useState } from 'react';
import styled from 'styled-components/native';

export default function TabTwoScreen() {
  const [textInput, setTextInput] = useState('');
  return (
    <SContainer>
      <STextInput
        onChangeText={(text) => setTextInput(text)}
        value={textInput}
        selectionColor='#25ff08'
        enablesReturnKeyAutomatically={true}
        clearTextOnFocus={true}
        blurOnSubmit={true}
        autoCorrect={false}
        placeholder='Search for a song'
      />
    </SContainer>
  );
}

const SContainer = styled.View`
  align-items: center;
  padding: 3px;
`;

const SText = styled.Text`
  color: white;
`;

const STextInput = styled.TextInput`
  color: #222;
  height: 50px;
  width: 90%;
  background-color: white;
  font-size: 22px;
  padding: 8px;
  border-radius: 5px;
`;
