import classnames from 'classnames'
import { CustomTextInputProps } from '../CustomInputs.types'
import styles from '../CustomInputs.module.scss'

const CustomTextInput = ({label, placeholder, requiredLabel, type, value, error, setValue}: CustomTextInputProps) => {

    const inputClass = error ? classnames(styles.input, styles.error) : styles.input

    return (
        <div className={styles.container}>
            {label && ( 
                <div className={styles.label}>
                    <p>{label}</p>
                    {requiredLabel && <span>*</span>}
                </div>
            )}
            <input type={type} className={inputClass} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)}/>
        </div>
    )
}

export default CustomTextInput