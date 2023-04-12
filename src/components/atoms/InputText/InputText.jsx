import { Skeleton } from 'primereact/skeleton'

//style
import './InputText.scss'

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
            <div className={`${"inputContainer"}`} style={{ width: width }}>
                {title && <div className={"title_input"}>{title}</div>}
                <div className={"inputShadow"}>
                    <input
                        id={id}
                        type={type}
                        value={value}
                        onChange={onChange}
                        className={`${"input"} ${className}`}
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