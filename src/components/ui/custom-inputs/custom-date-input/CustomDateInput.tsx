import { CustomDateInputProps } from "../CustomInputs.types"
import styles from '../CustomInputs.module.scss'
import classnames from "classnames"
import { formatDate } from "src/utils/date"

const CustomDateInput = ({label, placeholder, requiredLabel, value, error, setValue}: CustomDateInputProps) => {

    const stringError = error ? String(error) : undefined
    const inputClass = stringError ? classnames(styles.input, styles.error) : styles.input

    return (
        <div className={styles.container}>
            {label && (
                <div className={styles.label}>
                    <p>{label}</p>
                    {requiredLabel && <span>*</span>}
                </div>
            )}
            <input type='date' className={inputClass} placeholder={placeholder} value={value && formatDate(value)} onChange={(e) => setValue(new Date(e.target.value))}/>
        </div>
    )
}

export default CustomDateInput