export const ButtonPrimary = ({
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
               ? ' text-primary outline outline-1 outline-primary hover:bg-primary hover:text-white transition ease-in-out'
               : ' text-white bg-primary hover:bg-opacity-60 transition ease-in-out')
         }
         disabled={disabled}
         type={type}
         onClick={onClick}>
         {children}
      </button>
   )
}
