import { Component } from 'react'
import { withNavigation } from '../../component/layout/Navigation'
import Wrap from '../../component/layout/Wrap'
import PageTitle from '../../component/general/PageTitle'
import FormInput from '../../component/form/FormInput'
import { eventChange } from '../../helper/actionEvent.helper'
import FormTextArea from '../../component/form/FormTextArea'
import FdtBg from '../../asset/image/content/fdt-bg.png'
import GiftImg from '../../asset/image/content/gift-amplop.png'
import { ButtonPrimary } from '../../component/general/Button'

class SurprisePage extends Component {
   state = {
      name: '',
      notes: '',
   }

   _handleChange = (e) => {
      const { name, value } = eventChange(e)

      this.setState((prevState) => {
         let newPrevState = { ...prevState }
         newPrevState[name] = value

         return newPrevState
      })
   }

   render() {
      const { name, notes } = this.state

      return (
         <Wrap hasWave hasOptionalBG hasDefaultContainer={false}>
            <div className="container">
               <section className="section-content-scroll-padding">
                  <div className="mb-8">
                     <PageTitle
                        title="Doa & Ucapan"
                        extraClassTitle="uppercase"
                     />
                  </div>
                  <div className="mb-[30px]">
                     <FormInput
                        id="name"
                        name="name"
                        value={name}
                        placeholder="Nama"
                        actions={{
                           onChange: this._handleChange,
                        }}
                     />

                     <FormTextArea
                        id="notes"
                        name="notes"
                        value={notes}
                        placeholder="Pesan untuk mempelai"
                        rows={6}
                        actions={{
                           onChange: this._handleChange,
                        }}
                     />
                  </div>

                  <button className="theme-switch-wrapper mb-[38px]">
                     <label htmlFor="checkbox" className="theme-switch">
                        <input
                           type="checkbox"
                           id="checkbox"
                           className="theme-switch"
                           defaultChecked
                        />
                        <div className="slider round"></div>
                        <div
                           className="text"
                           data-checked="Hadir"
                           data-unchecked="Tidak Hadir"></div>
                     </label>
                  </button>

                  <div className="wp-card-gift mb-[30px]">
                     <div className="card-gift">
                        <div className="flex justify-between mb-0">
                           <h5 className="text-[28px] font-bold text-primary uppercase">
                              Kado
                           </h5>

                           <img
                              src={GiftImg}
                              alt="Gift"
                              className="w-[133px] h-[85px] object-contain object-center"
                           />
                        </div>

                        <p className="text-lg font-bold text-primary uppercase mb-0">
                           BCA : 000000000
                        </p>
                        <p className="text-lg font-bold text-primary uppercase mb-0">
                           A.N MARTEN DELACRONA
                        </p>
                     </div>
                  </div>

                  <div className="text-center">
                     <ButtonPrimary
                        isBtnSmall
                        extraClassName="uppercase rounded-full border-[3px] border-white">
                        Kirim
                     </ButtonPrimary>
                  </div>
               </section>

               <section className="section-content-scroll-padding">
                  <PageTitle
                     title="Turut Mengundang"
                     extraClassTitle="uppercase mb-[65px]"
                  />

                  <div className="surprise-content mb-9">
                     <p className="text-base font-bold text-primary text-center mb-1">
                        Keluarga Mempelai Pria
                     </p>

                     <p className="text-base font-normal text-primary text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod maiores aut ducimus ex, deserunt porro tempora
                        facere unde iste exercitationem atque eligendi suscipit
                        incidunt perferendis. Ex in repudiandae voluptates sint.
                     </p>
                  </div>

                  <div className="surprise-content mb-[130px]">
                     <p className="text-base font-bold text-primary text-center mb-1">
                        Keluarga Mempelai Wanita
                     </p>

                     <p className="text-base font-normal text-primary text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod maiores aut ducimus ex, deserunt porro tempora
                        facere unde iste exercitationem atque eligendi suscipit
                        incidunt perferendis. Ex in repudiandae voluptates sint.
                     </p>
                  </div>
               </section>

               <section className="section-content-scroll-padding">
                  <div className="mb-[50px]">
                     <PageTitle
                        title="Pesan"
                        second="Para Undangan"
                        extraClassTitle="uppercase"
                     />
                  </div>

                  <div className="invitation-message mb-6">
                     <p className="text-base font-bold text-primary text-center mb-1">
                        Jonas Blue
                     </p>

                     <p className="text-base font-normal text-primary text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod maiores aut ducimus ex, deserunt porro tempora
                        facere unde iste exercitationem atque eligendi suscipit
                        incidunt perferendis. Ex in repudiandae voluptates sint.
                     </p>
                  </div>

                  <div className="invitation-message mb-6">
                     <p className="text-base font-bold text-primary text-center mb-1">
                        Lady Gaga
                     </p>

                     <p className="text-base font-normal text-primary text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod maiores aut ducimus ex, deserunt porro tempora
                        facere unde iste exercitationem atque eligendi suscipit
                        incidunt perferendis. Ex in repudiandae voluptates sint.
                     </p>
                  </div>

                  <div className="invitation-message mb-6">
                     <p className="text-base font-bold text-primary text-center mb-1">
                        Ronaldo
                     </p>

                     <p className="text-base font-normal text-primary text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod maiores aut ducimus ex, deserunt porro tempora
                        facere unde iste exercitationem atque eligendi suscipit
                        incidunt perferendis. Ex in repudiandae voluptates sint.
                     </p>
                  </div>

                  <div className="invitation-message mb-6">
                     <p className="text-base font-bold text-primary text-center mb-1">
                        Messi
                     </p>

                     <p className="text-base font-normal text-primary text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod maiores aut ducimus ex, deserunt porro tempora
                        facere unde iste exercitationem atque eligendi suscipit
                        incidunt perferendis. Ex in repudiandae voluptates sint.
                     </p>
                  </div>

                  <div className="invitation-message mb-9">
                     <p className="text-base font-bold text-primary text-center mb-1">
                        Mbappe
                     </p>

                     <p className="text-base font-normal text-primary text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod maiores aut ducimus ex, deserunt porro tempora
                        facere unde iste exercitationem atque eligendi suscipit
                        incidunt perferendis. Ex in repudiandae voluptates sint.
                     </p>
                  </div>
               </section>
            </div>

            <div className="wp-image-without-padding relative z-[5]">
               <img
                  src={FdtBg}
                  alt="FDT - Image"
                  className="w-full object-cover object-fit"
               />
            </div>
         </Wrap>
      )
   }
}

export default withNavigation(SurprisePage)
