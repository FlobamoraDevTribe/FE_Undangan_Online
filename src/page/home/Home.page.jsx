import { Component } from 'react'
import { ButtonPrimary } from '../../component/general/Button'
import Wrap from '../../component/layout/Wrap'
import { withNavigation } from '../../component/layout/Navigation'

class HomePage extends Component {
   render() {
      return (
         <Wrap>
            <div className="container frame-landing-page">
               <div className="greetings">
                  <p className="text-base font-normal text-primary text-center">
                     You are invited to our wedding
                  </p>
                  <h1 className="font-bold text-primary text-center">
                     Marten & Mince
                  </h1>
               </div>

               <div className="wp-image-landing-page my-0 md:my-auto 2xl:my-0">
                  <img
                     src="/images/img-landing-page.png"
                     alt="Image Landing Page"
                     className="h-[55vh] md:h-[430px]"
                  />
               </div>

               <div className="flex justify-center">
                  <ButtonPrimary
                     onClick={() => {
                        this.props.navigate('/schedule')
                     }}
                     extraClassName="uppercase rounded-full">
                     Buka
                  </ButtonPrimary>
               </div>
            </div>
         </Wrap>
      )
   }
}

export default withNavigation(HomePage)
