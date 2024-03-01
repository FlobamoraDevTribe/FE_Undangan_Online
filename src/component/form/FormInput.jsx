const FormInput = (props) => {
   const {
      id = '',
      extraClass = '',
      label = '',
      type = 'text',
      autoComplete = 'off',
      extraInputClass = '',
      placeholder = '',
      icon = '',
      extraClassIcon = '',
      min = '',
      max = '',

      required = false,
      disabled = false,
      readOnly = false,

      actions = {
         handleIcon: () => {},
         onChange: () => {},
      },
      other,
   } = props

   const idInput = id || 'text-input-' + props.name

   return (
      <div className={'form-group ' + extraClass}>
         {label ? (
            <label htmlFor={idInput} className="form-label">
               {label}
               <span className="text-danger-200 fs-16">
                  {required ? '*' : ''}
               </span>
            </label>
         ) : null}
         <input
            id={idInput}
            type={type}
            value={props.value || ''}
            name={props.name}
            onChange={actions.onChange}
            className={'form-control ' + extraInputClass}
            disabled={disabled}
            min={min !== '' ? min : ''}
            max={max !== '' ? max : ''}
            autoComplete={autoComplete}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            {...other}
         />
         {icon ? (
            <span className={extraClassIcon} onClick={actions.handleIcon}>
               {icon}
            </span>
         ) : null}
      </div>
   )
}

export default FormInput
