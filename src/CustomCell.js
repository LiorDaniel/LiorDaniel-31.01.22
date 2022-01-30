import { useEffect } from "react"

const CustomeCell=(props)=>{

const renderValue=()=>{
    const dataObject= {
        data:props.data
    }
return props.method(dataObject)
}

    return(
        <td>
            {renderValue()}
        </td>
    )
}

export default CustomeCell