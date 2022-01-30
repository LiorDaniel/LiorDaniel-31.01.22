import React, { useEffect } from 'react';
import CustomCell from './CustomCell';


const Grid=(props)=>{

const renderHeadCells=()=>{
console.log(props.config)
 return props.config.map((headline)=>
     <th>{headline.title}</th>
  )
}

const renderValues=()=>{
  return props.data.map((item)=>
  <tr>
    {
       props.config.map(attr=>
        attr.component? 
        <CustomCell method={attr.component} data={item[attr.field]}/>
         : <td>{item[attr.field]}</td>
    )}
  </tr>
  )
}

return(
  <table>
     <thead>
     <tr>
      {renderHeadCells()}
     </tr>
     </thead>
     <tbody>
    {renderValues()}
     </tbody>
  </table>
)
}

export default Grid;