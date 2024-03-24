import { Component } from 'react'
import Wrap from '../../component/layout/Wrap'
import { withNavigation } from '../../component/layout/Navigation'
import PageTitle from '../../component/general/PageTitle'
import ImageCover from '../../component/general/ImageCover'

class SchedulePage extends Component {
   render() {
      return (
         <Wrap hasWave hasOptionalBG>
            <div className="flex flex-col justify-between">
               <PageTitle
                  title="Marten & Mince"
                  extraClassTitle="mt-3"
                  second="Sabtu, 22 Januari 2024"
                  externalContent={
                     <p className="font-bold text-primary text-center">
                        We are getting maried
                     </p>
                  }
               />

               <div className="container">
                  <ImageCover
                     src="/images/img-schedule-page.jpg"
                     config={{
                        width: 'w-[265px] md:w-full',
                     }}
                     extraClassContainer="mt-20"
                     extraClassWrapping="rounded-full"
                     externalAsset={
                        <>
                           <img
                              src="/images/img-ring-photoframe.png"
                              alt="Frame"
                              className="absolute inset-0 w-[265px] scale-[1.2] md:w-full md:scale-[1.2]"
                           />
                           <img
                              src="/images/img-bunga-sepe.png"
                              alt="Bunga Sepe"
                              className="absolute bottom-[-50px] right-0 w-36 md:w-44"
                           />
                        </>
                     }
                  />
               </div>

               <div className="container">
                  <div className="mt-14 w-full bg-gradient-to-r from-orange-200 to-white-500 px-10 py-2 mb-20 rounded-[30px] text-primary border-dashed border-2 border-primary shadow-2xl">
                     <p className="font-bold text-center">Save The Date</p>
                     <p className="font-normal text-[12px] mt-1 text-center">
                        Upcoming Event
                     </p>
                     <div className="flex justify-between">
                        <div className="text-center">
                           <p className="text-[40px]">00</p>
                           <p className="text-[13px]">Hari</p>
                        </div>
                        <p className="text-[40px]">:</p>
                        <div className="text-center">
                           <p className="text-[40px]">00</p>
                           <p className="text-[13px]">Jam</p>
                        </div>
                        <p className="text-[40px]">:</p>
                        <div className="text-center">
                           <p className="text-[40px]">00</p>
                           <p className="text-[13px]">Menit</p>
                        </div>
                        <p className="text-[40px]">:</p>
                        <div className="text-center">
                           <p className="text-[40px]">00</p>
                           <p className="text-[13px]">Detik</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Wrap>
      )
   }
}

export default withNavigation(SchedulePage)
