import React from 'react';
import styles from './input.module.css'

const input = (props) => {
    let inputElement = null;
    const inputStyles = [styles.InputElement];
    let validationError = null;
    if (props.invalid && props.shouldValidate && props.touched) {
        inputStyles.push(styles.Invalid)
        validationError = <p>Please enter a valid value!</p>;
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputStyles.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case ('textarea'):
            inputElement = <textarea
                className={inputStyles.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case ('select'):
            inputElement = (<select
                className={inputStyles.join(' ')}
                value={props.value}
                onChange={props.changed}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}
                    >
                        {option.displayValue}
                    </option>
                ))}
            </select>)
            break;
        default:
            inputElement = <input
                className={inputStyles.join(' ')}
                {...props.elementConfig}
                value={props.value} onChange={props.changed} />
    }
    return (<div className={styles.Input}>
        <label className={styles.Label}>{props.label}</label>
        {inputElement}  {validationError}
    </div>
    )

};

export default input;