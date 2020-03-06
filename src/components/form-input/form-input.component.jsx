import React from 'react'
 import './form-input.styles.scss'

 const FormInput = ({handleChange, label, ...otherPropsItem}) => (
     <div className="group">
         <input className='form-input'
         onChange={handleChange}
          {...otherPropsItem}/>
          {
              label ? (<label className={`${otherPropsItem.value.length ? 'shrink' : '' } form-input-label`}>
                  {label}
              </label>) : null
          }

     </div>
 );

 export default FormInput;