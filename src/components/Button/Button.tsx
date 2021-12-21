import { FC } from 'react';
import './Button.scss';

interface Props {
  onClick?: () => void;
  title: string;
  style: Object;
}
const Button: FC<Props> = ({
  onClick, title, style,
}) => (
  <>
    <input
      className="button"
      type="button"
      value={title}
      onClick={onClick}
      style={style}
    />
  </>
);
export default Button;
