import { Component } from 'react'
import Wrap from '../../component/layout/Wrap'
import { withNavigation } from '../../component/layout/Navigation'
import PageTitle from '../../component/general/PageTitle'

const images = [
   '/images/galery.png',
   '/images/img-landing-page.png',
   '/images/galery.png',
   '/images/galery.png',
   '/images/galery.png',
   '/images/galery.png',
]

class GaleryPage extends Component {
   state = {
      clickedImageSrc: null,
   }

   _handleImageClick = (imageSrc) => {
      this.setState({ clickedImageSrc: imageSrc })
      console.log('ll')
   }

   _handleCloseImage = () => {
      this.setState({ clickedImageSrc: null })
   }

   render() {
      const { clickedImageSrc } = this.state

      return (
         <Wrap hasWave hasOptionalBG>
            <PageTitle title="Photo Galery" extraClassTitle="uppercase" />

            <div className="wp-image-galery flex justify-center items-center flex-wrap z-0 mx-[2px] mt-[40px]">
               {images.map((image, index) => (
                  <img
                     key={index}
                     src={image}
                     alt={`Image ${index}`}
                     className="transition-transform duration-300 transform hover:scale-105 object-cover object-center bg-white h-[196px] w-[131px] m-[3px] rounded-[17px]"
                     onClick={() => this._handleImageClick(image)}
                  />
               ))}
            </div>
            {clickedImageSrc && (
               <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex justify-center items-center">
                  <div className="relative">
                     <button
                        className="absolute top-4 right-4 p-2 text-white rounded-lg "
                        onClick={this._handleCloseImage}>
                        <svg
                           className="w-6 h-6"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor">
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                           />
                        </svg>
                     </button>
                     <img
                        src={clickedImageSrc}
                        alt="Clicked Image"
                        className="h-[400px] rounded-[17px]"
                     />
                     <div className="absolute bottom-4 left-0 bottom-0 text-white text-sm bg-primary bg-opacity-75 p-4 w-full rounded-bl-[17px] rounded-br-[17px]">
                        {/* Tambahkan keterangan di sini */}
                        <small>Keterangan gambar</small>
                     </div>
                  </div>
               </div>
            )}
         </Wrap>
      )
   }
}

export default withNavigation(GaleryPage)
