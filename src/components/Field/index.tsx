import React, { FC, ChangeEvent } from 'react';
import * as Styled from './styled';

interface Props {
  value: string;
  setValue: (value: string) => void;
  actionLabel: string;
  action: () => void;
  placeholder: string;
}

export const TextField: FC<Props> = ({
  value,
  setValue,
  action,
  actionLabel,
  placeholder,
}) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Styled.TextField>
      <Styled.Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></Styled.Input>
      <Styled.Action onClick={action}>{actionLabel}</Styled.Action>
    </Styled.TextField>
  );
};
