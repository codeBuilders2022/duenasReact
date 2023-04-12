import { Skeleton } from 'primereact/skeleton'

//style
import styles from './InputText.module.scss'

function InputText({
    placeholder,
    onChange,
    value,
    skeleton,
    disabled,
    title,
    id,
    className,
    width,
    type='text'
}) {

    return (

        !skeleton ?
            <div className={`${styles.inputContainer}`} style={{ width: width }}>
                {title && <div className={styles.title_input}>{title}</div>}
                <div className={styles.inputShadow}>
                    <input
                        id={id}
                        type={type}
                        value={value}
                        onChange={onChange}
                        className={`${styles.input} ${className}`}
                        placeholder={placeholder}
                        disabled={disabled}
                    />
                </div>
            </div>
            :
            <Skeleton width='100%' height='100%' />

    )
}

export default InputText