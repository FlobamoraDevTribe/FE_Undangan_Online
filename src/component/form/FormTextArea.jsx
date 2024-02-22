const FormTextArea = (props) => {
   const {
      id = '',
      extraClass = '',
      label = '',
      extraInputClass = '',
      autoComplete = 'off',
      placeholder = '',

      rows = 3,
      cols = 4,

      required = false,
      disabled = false,
      readOnly = false,

      actions = {
         onChange: () => {},
      },

      other,
   } = props

   const myId = id || 'text-area-' + props.name

   return (
      <div className={'form-group ' + extraClass}>
         {label ? (
            <label htmlFor={myId} className="form-label">
               {label}
               <span className="text-danger-200 fs-16">
                  {required ? '*' : ''}
               </span>
            </label>
         ) : null}
         <textarea
            value={props.value || ''}
            onChange={actions.onChange}
            name={props.name}
            className={'form-control ' + (extraInputClass || '')}
            id={myId}
            autoComplete={autoComplete}
            placeholder={placeholder}
            rows={rows}
            cols={cols}
            readOnly={readOnly}
            required={required}
            disabled={disabled}
            {...other}
         />
      </div>
   )
}

export default FormTextArea
