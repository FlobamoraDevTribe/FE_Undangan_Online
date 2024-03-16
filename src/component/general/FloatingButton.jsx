import { NavLink } from 'react-router-dom'
import { ButtonNavigation } from './Button'

const FloatingButton = ({
   linkTo,
   iconSource
}) => {
   return (
      <NavLink to={linkTo} className={({isActive}) => (
         isActive ? `bg-yellow-300 rounded-t-full p-[5px]` : ` p-[5px]`
      )}>
         <ButtonNavigation
            icon={iconSource}
         />
      </NavLink>
   )
}

export default FloatingButton