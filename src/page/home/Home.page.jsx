import { Component } from 'react'
import { ButtonPrimary } from '../../component/general/Button'
import Wrap from '../../component/layout/Wrap'
import { withNavigation } from '../../component/layout/Navigation'
import PageTitle from '../../component/general/PageTitle'
import appPath from '../../path/app.path'
import ImageCover from '../../component/general/ImageCover'
import BadgeTimor from '../../asset/image/content/f-timor.png'
import { WaveLandingPage } from '../../component/general/ImageWave'

class HomePage extends Component {
   _handleOpenInvitation = () => {
      this.props.navigate(appPath.schedule)
   }

   render() {
      return (
         <Wrap hasOptionalBG hasDefaultContainer={false}>
            <WaveLandingPage src={BadgeTimor} />

            <div className="container frame-landing-page relative z-20">
               <div className="greetings">
                  <PageTitle
                     title="Marten & Mince"
                     externalContent={
                        <p className="text-sm font-normal text-primary text-center mb-1">
                           You are invited to our wedding
                        </p>
                     }
                  />
               </div>

               <ImageCover
                  src="/images/img-landing-page-new.png"
                  extraClassWrapping="rounded-[150px]"
                  externalAsset={
                     <>
                        <img
                           src="/images/img-bunga-sepe.png"
                           alt="Images Schedule"
                           className="absolute top-1/2 -left-[24px] -translate-y-1/2 w-[50px] "
                        />

                        <img
                           src="/images/img-bunga-sepe.png"
                           alt="Images Schedule"
                           className="absolute top-1/2 -right-[24px] -translate-y-1/2 w-[50px] "
                        />
                     </>
                  }
               />

               <div className="flex justify-center">
                  <ButtonPrimary
                     onClick={this._handleOpenInvitation}
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
