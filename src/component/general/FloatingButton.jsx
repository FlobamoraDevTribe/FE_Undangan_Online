import { ButtonNavigation } from './Button'

const FloatingButton = ({
   navigationList = []
}) => {
   return (
      <div className="absolute bottom-[53px] z-30 w-full">
         <div className="flex justify-center items-center w-full">
            {
               navigationList.map((item, i) => {
                  return <ButtonNavigation icon={item.icon} onClick={item.action} key={`nav-${i}`} selected={item.selected} />
               })
            }
         </div>
      </div>
   )
}

export default FloatingButton
