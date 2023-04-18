const alertLabel = (label) => {
    alert(`A label desse botão é: ${label}`);
}

const Button = (props) => {
    return (
        <button
            className="send-text-button"
            onClick= {() => alertLabel(props.label)}
        >
            {props.label}
        </button>
    )
}

export default Button