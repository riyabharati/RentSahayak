import { useState } from "react"
import * as AiIcons from "react-icons/ai"
export const Input = (props) =>{

    const {error, type, ...remainingProps} = props

    const [passwordVisible, setPasswordVisible] = useState(false)

    return(
        <div>
            <div style={{position: 'relative'}}>
                <input type={type !== 'password' ? type : passwordVisible ? 'text' : type } {...remainingProps} />
                {type === 'password' && (
                    <span style={{position: 'absolute', right: '5px', top: '12px'}} onClick={() => setPasswordVisible(!passwordVisible)}>{passwordVisible ? <AiIcons.AiFillEye/> : <AiIcons.AiFillEyeInvisible/>}</span>
                )}
            </div>
            {error && <span className="input-error">{error}</span>}
        </div>
    )
}