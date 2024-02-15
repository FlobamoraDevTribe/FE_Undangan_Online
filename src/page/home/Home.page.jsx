import { Component } from 'react'
import { ButtonPrimary } from '../../component/general/Button'
import Wrap from '../../component/layout/Wrap'
import { withNavigation } from '../../component/layout/Navigation'
import PageTitle from '../../component/general/PageTitle'

class HomePage extends Component {
   render() {
      return (
         <Wrap hasDefaultContainer={false}>
            <div className="container frame-landing-page">
               <div className="greetings">
                  <PageTitle
                     title="Marten & Mince"
                     extraClassTitle="text-4xl"
                     externalContent={
                        <p className="text-sm font-normal text-primary text-center mb-0">
                           You are invited to our wedding
                        </p>
                     }
                  />
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
