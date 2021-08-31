
import PropTypes from "prop-types";

export const Input = props => {
    const {
        id,
        inputRef,
        type = "text",
        name,
        label,
        labelClassName,
        size,
        disabled,
        onChange,
        onBlur,
        placeholder,
        innerElement,
        errors,
        onKeyPress,
        isAutoFill = false,
        defaultValue = null,
        inputClassName = "",
        maxLength,
        required,
        dataAutomationId,
        onKeyUp,
    } = props;

    let { value } = props;

    if (!value && defaultValue === null) {
        value = "";
    }

    const compiledPlaceholder = placeholder
        ? placeholder
        : ""//languages.inputPlaceholder;

    return (
        <input type="text" value={value} onChange={onChange} />
    );
};

Input.propTypes = {
    innerElement: PropTypes.objectOf(PropTypes.any),
    label: PropTypes.string,
    labelClassName: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    type: PropTypes.string,
    inputRef: PropTypes.func,
    size: PropTypes.number,
    onBlur: PropTypes.func,
    errors: PropTypes.array,
    onKeyPress: PropTypes.func,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    inputClassName: PropTypes.string,
    isAutoFill: PropTypes.bool,
    maxLength: PropTypes.number,
    required: PropTypes.bool,
};

Input.defaultProps = {
    label: "",
    labelClassName: "",
    name: "",
    placeholder: "",
    type: "text",
    id: null,
    inputRef: null,
    innerElement: null,
    disabled: false,
    size: 14,
    onBlur: null,
    errors: null,
    onKeyPress: null,
    defaultValue: null,
    inputClassName: null,
    isAutoFill: false,
    required: false,
    maxLength: null,
};

export default Input;