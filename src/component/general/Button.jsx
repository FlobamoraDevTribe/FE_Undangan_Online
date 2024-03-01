export const ButtonPrimary = ({
   extraClassName = '',
   type = 'button',
   disabled = false,
   isOutline = false,
   isBtnSmall = false,
   children,
   onClick = () => {},
}) => {
   return (
      <button
         className={
            'font-normal ' +
            (isBtnSmall
               ? 'text-md leading-[26px] px-[20px] py-[2px] '
               : 'text-lg px-[16px] py-[6px] ') +
            (extraClassName || '') +
            (isOutline
               ? ' text-primary outline outline-1 outline-primary hover:bg-primary hover:text-white transition ease-in-out'
               : ' text-white bg-primary hover:bg-opacity-80 transition ease-in-out')
         }
         disabled={disabled}
         type={type}
         onClick={onClick}>
         {children}
      </button>
   )
}

export const ButtonSecondary = ({
   extraClassName = '',
   type = 'button',
   disabled = false,
   isOutline = false,
   children,
   onClick = () => {},
}) => {
   return (
      <button
         className={
            'text-lg font-normal px-[16px] py-[6px] ' +
            (extraClassName || '') +
            (isOutline
               ? ' text-secondary outline outline-1 outline-secondary hover:bg-secondary hover:text-white transition ease-in-out'
               : ' text-white bg-secondary hover:bg-opacity-80 transition ease-in-out')
         }
         disabled={disabled}
         type={type}
         onClick={onClick}>
         {children}
      </button>
   )
}
