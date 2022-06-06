import React from 'react';
import { useState, createContext, useContext, useEffect } from 'react';
import { View } from 'react-native';
import { Button } from '../../atoms';

interface IButtonRadioGroupContext {
  onSelect?: (value: string) => void;
  selectedValue: string | null;
  disabled: boolean;
}

const ButtonRadioGroupContext = createContext<IButtonRadioGroupContext>({
  onSelect: () => {},
  selectedValue: null,
  disabled: false,
});

const { Provider } = ButtonRadioGroupContext;

export interface IRadioButton {
  label: string;
  value: string;
  onSelect?: (value: string) => void;
}

export const RadioButton = ({ label, value }: IRadioButton) => {
  const { onSelect, selectedValue, disabled } = useContext(
    ButtonRadioGroupContext,
  );
  const handleSelect = () => {
    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <Button
      apparence={selectedValue === value ? 'primary' : 'default'}
      onPress={handleSelect}
      disabled={disabled}>
      {label}
    </Button>
  );
};

export interface IButtonRadioGroup {
  children: JSX.Element[] | undefined;
  defaultValue?: string | null;
  onSelect?: (value: string) => void;
  disabled?: boolean;
}

export const ButtonRadioGroup = ({
  children,
  onSelect = () => {},
  defaultValue = null,
  disabled = false,
}: IButtonRadioGroup) => {
  const [optionSelected, setOptionSelected] = useState<string | null>(null);

  useEffect(() => {
    setOptionSelected(defaultValue);
  }, [defaultValue]);

  const hanldeSelect = (value: string) => {
    setOptionSelected(value);
    onSelect(value);
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <Provider
        value={{
          onSelect: hanldeSelect,
          selectedValue: optionSelected,
          disabled,
        }}>
        {children?.map((radioButton: any, index: number) => (
          <View
            key={radioButton?.props?.value}
            style={{ marginLeft: index > 0 ? 13.75 : 0 }}>
            {radioButton}
          </View>
        ))}
      </Provider>
    </View>
  );
};
