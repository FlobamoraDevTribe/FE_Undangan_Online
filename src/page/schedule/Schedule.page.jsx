import { Component } from 'react'
import Wrap from '../../component/layout/Wrap'
import { withNavigation } from '../../component/layout/Navigation'
import PageTitle from '../../component/general/PageTitle'

class SchedulePage extends Component {
   render() {
      return (
         <Wrap
            hasWave
            hasOptionalBG
            actions={{
               bride: () => this.props.navigate('/bride'),
               direction: () => this.props.navigate('/direction'),
               galery: () => this.props.navigate('/galery'),
               schedule: () => this.props.navigate('/schedule'),
               surprise: () => this.props.navigate('/surprise')
            }}>
            <div className="content relative z-10 h-full">
               <div className="flex flex-col justify-between">
                  <div className="container">
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
                  </div>
                  <div className="container">
                     <div className="mt-20 w-full relative h-full bg-[url('/images/img-schedule-page.jpg')] bg-cover rounded-full shadow-2xl">
                        <img
                           src="/images/img-ring-photoframe.png"
                           alt="Images Schedule"
                           className="w-full"
                           style={{
                              transform: 'scale(1.2)',
                           }}
                        />
                        <img
                           src="/images/img-bunga-sepe.png"
                           alt="Images Schedule"
                           className="w-44 absolute bottom-[-50px] right-0"
                        />
                     </div>
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
            </div>
         </Wrap>
      )
   }
}

export default withNavigation(SchedulePage)
