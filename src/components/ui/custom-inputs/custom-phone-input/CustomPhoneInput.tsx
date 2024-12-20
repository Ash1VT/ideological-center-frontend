import PhoneInput from 'react-phone-input-2'
import { CustomPhoneInputProps } from '../CustomInputs.types'
import classnames from 'classnames'
import styles from '../CustomInputs.module.scss'
import phoneStyles from './CustomPhoneInput.module.scss'
import 'react-phone-input-2/lib/style.css'
import './flag.scss'

const CustomPhoneInput = ({label, placeholder, requiredLabel, country, countryCodeEditable, error, value, setValue}: CustomPhoneInputProps) => {

    const containerClass = error ? classnames(phoneStyles.container, styles.error) : phoneStyles.container
    
    return (
        <div className={styles.container}>
            {label && (
                <div className={styles.label}>
                    <p>{label}</p>
                    {requiredLabel && <span>*</span>}
                </div>
            )}
            <PhoneInput inputClass={classnames(styles.input, phoneStyles.input)} containerClass={containerClass} buttonClass={phoneStyles.dropdown} country={country} countryCodeEditable={countryCodeEditable} disableDropdown={!countryCodeEditable} placeholder={placeholder} value={value} onChange={(phone) => setValue(phone)}/>
        </div>
    )
}

export default CustomPhoneInput