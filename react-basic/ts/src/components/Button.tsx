type ButtonProps = {
    label: string;
    onClick: () => void; 
    disabled: boolean;
}

const Button = ({label,onClick,disabled}:ButtonProps) => {
  return (
    <button disabled={disabled} onClick={onClick}>
        <label>{label}</label>
    </button>
  )
}

export default Button