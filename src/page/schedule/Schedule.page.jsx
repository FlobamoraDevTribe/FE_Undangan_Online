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
               prev: () => this.props.navigate('/'),
               next: () => this.props.navigate('/bride'),
            }}>
            <div className="content relative z-10 h-full">
               <div className="flex flex-col justify-between">
                  <div className="container">
                     <PageTitle
                        title="Marten & Mince"
                        extraClassTitle="mt-3"
                        second="Sabtu, 22 Januari 2024"
                        externalContent={
                           <p className="font-bold text-primary text-center">We are getting maried</p>
                        }
                     />
                  </div>
                  <div className="container">
                     <div className="mt-28 w-full">
                        <img
                           src="/images/img-schedule-page.jpg"
                           alt="Images Schedule"
                           className="w-full rounded-[500px]"
                        />
                     </div>
                  </div>

                  <div className="container">
                     <div className="mt-28 w-full bg-gradient-to-r from-orange-200 to-white-500 px-10 py-5 rounded-[30px] text-primary border-dashed border-4 border-primary shadow-2xl">
                        <p className='font-bold text-center'>Save The Date</p>
                        <p className='font-normal text-[12px] mt-1 text-center'>Upcoming Event</p>
                        <div className="flex justify-between">
                           <div className="text-center">
                              <p className='text-[40px]'>00</p>
                              <p className='text-[13px]'>Hari</p>
                           </div>
                           <p className='text-[40px]'>:</p>
                           <div className="text-center">
                              <p className='text-[40px]'>00</p>
                              <p className='text-[13px]'>Jam</p>
                           </div>
                           <p className='text-[40px]'>:</p>
                           <div className="text-center">
                              <p className='text-[40px]'>00</p>
                              <p className='text-[13px]'>Menit</p>
                           </div>
                           <p className='text-[40px]'>:</p>
                           <div className="text-center">
                              <p className='text-[40px]'>00</p>
                              <p className='text-[13px]'>Detik</p>
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
