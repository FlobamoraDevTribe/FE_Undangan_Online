import { Component } from 'react'
import Wrap from '../../component/layout/Wrap'
import { ButtonPrimary } from '../../component/general/Button'
import { withNavigation } from '../../component/layout/Navigation'

class SchedulePage extends Component {
   render() {
      return (
         <Wrap hasWave hasOptionalBG>
            <div className="content relative z-10">
               <p className="text-base mb-4">Example text</p>

               <ButtonPrimary
                  onClick={() => {
                     this.props.navigate('/')
                  }}
                  extraClassName="uppercase rounded-lg">
                  Back
               </ButtonPrimary>
            </div>
         </Wrap>
      )
   }
}

export default withNavigation(SchedulePage)
