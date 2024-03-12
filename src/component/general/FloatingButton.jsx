import { ButtonNavigation } from './Button'

const FloatingButton = ({
   navigationList = []
}) => {
   return (
      <div className="absolute bottom-[53px] z-30 w-full">
         <div className="flex justify-center items-center w-full">
            {
               navigationList.map((item, i) => {
                  return <ButtonNavigation 
                     icon={item.icon} 
                     onClick={item.action}
                     key={`nav-${i}`} 
                     selected={item.selected}
                  />
               })
            }
         </div>
      </div>
   )
}

export default FloatingButton

// import { ButtonSecondary } from './Button'

// const FloatingButton = ({
//    actions = {
//       prev: () => {},
//       next: () => {},
//    },
// }) => {
//    return (
//       <div className="absolute bottom-[80px] z-30 left-1/2 -translate-x-1/2">
//          <div className="flex justify-center items-center gap-x-4">
//             <ButtonSecondary
//                onClick={actions.prev}
//                extraClassName="uppercase rounded-lg shadow-md">
//                Prev
//             </ButtonSecondary>
//             <ButtonSecondary
//                onClick={actions.next}
//                extraClassName="uppercase rounded-lg shadow-md">
//                Next
//             </ButtonSecondary>
//          </div>
//       </div>
//    )
// }

// export default FloatingButton
