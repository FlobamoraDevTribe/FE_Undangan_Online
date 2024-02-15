import { Component } from 'react'
import Wrap from '../../component/layout/Wrap'
import { withNavigation } from '../../component/layout/Navigation'

class SchedulePage extends Component {
   render() {
      return (
         <Wrap
            hasWave
            hasOptionalBG
            actions={{
               prev: () => this.props.navigate('/'),
               next: () => this.props.navigate('/bride'),
            }}>
            <div className="content relative z-10 h-full">
               <p className="text-base mb-4">Example text</p>
               <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Rerum cum nostrum obcaecati, corrupti similique amet ipsa
                  vero, tempora praesentium suscipit officia nemo. Reprehenderit
                  illo numquam aliquid similique impedit amet, obcaecati quos
                  atque, expedita fuga ut aut modi inventore itaque, explicabo
                  possimus ipsa asperiores et id. Minus dolor fuga eaque cumque.
               </p>
            </div>
         </Wrap>
      )
   }
}

export default withNavigation(SchedulePage)
