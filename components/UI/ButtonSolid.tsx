import { ButtonHTMLAttributes, FC } from "react";

import classes from "./ButtonSolid.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const ButtonSolid: FC<Props> = ({ label, ...rest }) => {
  return (
    <button className={classes.btn} title={label} {...rest}>
      {label}
    </button>
  );
};

export default ButtonSolid;
