import { Component } from 'react'
import * as Icon from 'react-feather'
import Wrap from '../../component/layout/Wrap'
import PageTitle from '../../component/general/PageTitle'
import MapFull from '../../asset/image/content/map-full.png'
import { withNavigation } from '../../component/layout/Navigation'
import directionPath from '../../path/direction.path'

class DirectionDetailPage extends Component {
   _handleToMain = () => {
      this.props.navigate(directionPath.main)
   }

   render() {
      return (
         <Wrap hasWave hasOptionalBG>
            <div className="mb-6">
               <PageTitle
                  title="Rute"
                  secondExternal={
                     <div className="text-base font-bold text-primary text-center ">
                        <p className="my-2">Acara Peminangan</p>
                        <p className="font-normal mb-0">
                           JL. TAMBRIN RT.02 RW.03
                        </p>
                     </div>
                  }
                  extraClassTitle="uppercase"
               />
            </div>

            <div className="map-full text-center">
               <img
                  src={MapFull}
                  alt="Map"
                  className="object-cover object-center w-full h-full rounded-2xl mb-6"
               />

               <button
                  className="bg-white rounded-full border-[3px] border-primary p-2"
                  onClick={this._handleToMain}>
                  <Icon.X size={32} strokeWidth={6} className="text-primary" />
               </button>
            </div>
         </Wrap>
      )
   }
}

export default withNavigation(DirectionDetailPage)
