import { Component } from 'react'
import Wrap from '../../component/layout/Wrap'

class SchedulePage extends Component {
   render() {
      return (
         <Wrap hasWave hasOptionalBG>
            <div className="container padding-wave h-full overflow-y-auto scrollbar-hide">
               <div className="content relative z-10">
                  <p>Example text</p>
               </div>
            </div>
         </Wrap>
      )
   }
}

export default SchedulePage
