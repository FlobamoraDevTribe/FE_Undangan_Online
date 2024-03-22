import { Component } from 'react'
import Wrap from '../../component/layout/Wrap'
import PageTitle from '../../component/general/PageTitle'
import MapPreview from '../../asset/image/content/map.jpg'
import { withNavigation } from '../../component/layout/Navigation'
import directionPath from '../../path/direction.path'
import { mapData } from '../../config/objectMap.config'

class DirectionPage extends Component {
   _handleToDetail = (id = '') => {
      this.props.navigate(directionPath.detail(id))
   }

   render() {
      return (
         <Wrap hasWave hasOptionalBG>
            <div className="mb-6">
               <PageTitle title="Detail Acara" extraClassTitle="uppercase" />
            </div>

            <div className="wp-direction">
               {mapData.map((vm, index) => (
                  <div
                     className="card custom-border-card-dashed bg-tint p-5"
                     key={index}>
                     <h5 className="card-title text-xs font-bold text-primary text-center uppercase mb-2">
                        {vm.title}
                     </h5>

                     <p className="text-sm font-normal text-primary mb-2">
                        Tempat
                     </p>
                     <p className="text-sm font-normal text-primary mb-2">
                        Alamat
                     </p>
                     <p className="text-sm font-normal text-primary mb-2">
                        Hari/Tanggal
                     </p>
                     <p className="text-sm font-normal text-primary mb-4">
                        Waktu
                     </p>

                     <img
                        src={MapPreview}
                        alt="Map Preview"
                        className="object-contain object-center w-full h-full cursor-pointer"
                        onClick={() => this._handleToDetail(vm.id)}
                     />
                  </div>
               ))}
            </div>
         </Wrap>
      )
   }
}

export default withNavigation(DirectionPage)
