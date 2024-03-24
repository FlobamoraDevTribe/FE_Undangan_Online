import { bottomNavbarData } from '../../config/objectBottomNavbar'
import FloatingButton from '../general/FloatingButton'

const BottomNavbar = () => {
   return (
      <div className="absolute bottom-[74px] md:bottom-[51px] z-30 w-full">
         <div className="flex justify-center items-center w-full">
            {bottomNavbarData.map((vm, index) => (
               <FloatingButton
                  iconSource={vm.icon}
                  linkTo={vm.link}
                  key={index}
               />
            ))}
         </div>
      </div>
   )
}

export default BottomNavbar
