import React from 'react'

const Select = (props) => {
 {console.log('[Select props]', props)}
 return (
   <div>
     <select name="" id="">
      { props.rovs && props.rovs.options.map((e, i)=>{
       <option value={e}>{e}</option>
       })}
       }
     </select>
   </div>
  )
}
export default Select;