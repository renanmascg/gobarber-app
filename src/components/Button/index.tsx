import React, { ButtonHTMLAttributes } from 'react';

import { ButtonContainer } from './ButtonComponents';

// mesma coisa do interface ... extends ButtonHTMLAttributes<HTMLButtonElement>
// type é como se fosse um interface, mas sem parametros
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;


const Button: React.FC<ButtonProps> = ({children, ...restProps}) => {
  return <ButtonContainer type="button" {...restProps}>{children}</ButtonContainer>;
}

export default Button;