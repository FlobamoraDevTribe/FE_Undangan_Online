import { Component } from 'react'
import Wrap from '../../component/layout/Wrap'
import { withNavigation } from '../../component/layout/Navigation'
import PageTitle from '../../component/general/PageTitle'

class BridePage extends Component {
   render() {
      return (
         <Wrap hasWave hasOptionalBG hasDefaultContainer={false}>
            <div className="flex flex-col justify-between">
               <div className="container">
                  <PageTitle
                     title="Mempelai"
                     second="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente harum sint porro."
                     extraClassTitle="uppercase"
                  />
               </div>

               <div className="mt-10 w-full">
                  <img
                     src="/images/img-bride-page.png"
                     alt="Images Bride"
                     className="w-full rounded-[30px]"
                  />
               </div>
            </div>

            <div className="wp-image-without-padding relative z-[5]">
               <div className="bg-[url('/images/img-shape-wave.png')] bg-cover bg-center bg-no-repeat w-full h-full">
                  <div className="container text-center -mt-72 pt-[70px] pb-[150px] text-white">
                     <h4>Marten Delacrona</h4>
                     <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Est minima accusamus dicta sint
                     </p>

                     <img
                        className="my-5 m-auto"
                        src="/images/img-ring.png"
                        alt="Ring Images"
                     />

                     <h4>Mince Saputri</h4>
                     <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Neque fugit architecto quaerat
                     </p>
                  </div>
               </div>
            </div>
         </Wrap>
      )
   }
}

export default withNavigation(BridePage)
