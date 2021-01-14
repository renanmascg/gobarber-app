import React, {ButtonHTMLAttributes} from 'react';

// mesma coisa do interface ... extends ButtonHTMLAttributes<HTMLButtonElement>
// type é como se fosse um interface, mas sem parametros
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = (props) => <button {...props}>Teste</button>

export default Button;