import { Component } from 'react'
import Wrap from '../../component/layout/Wrap'
import { withNavigation } from '../../component/layout/Navigation'
import PageTitle from '../../component/general/PageTitle'

class BridePage extends Component {
   render() {
      return (
         <Wrap
            hasWave
            hasOptionalBG
            hasDefaultContainer={false}
            actions={{
               bride: () => this.props.navigate('/bride'),
               direction: () => this.props.navigate('/direction'),
               galery: () => this.props.navigate('/galery'),
               schedule: () => this.props.navigate('/schedule'),
               surprise: () => this.props.navigate('/surprise')
            }}>
            <div className="content relative z-10 h-full">
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

                  <div className="container text-center bg-[url('/images/img-shape-wave.png')] bg-auto bg-no-repeat w-full bg-center -mt-60 pb-20 pt-48 text-white">
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
