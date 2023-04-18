const InputText = (props) => {
    return (
        <textarea
            className="input-text-box"
            style={
                {
                    textTransform: props.letterCase,
                    color: props.color
                }
            }
        >
            {props.startText}
        </textarea>
    )
}

InputText.defaultProps = {
    letterCase: "upperCase",
    color: "red",
}

export default InputText