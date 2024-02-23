import { Component } from 'react'
import { withNavigation } from '../../component/layout/Navigation'
import Wrap from '../../component/layout/Wrap'
import PageTitle from '../../component/general/PageTitle'
import FormInput from '../../component/form/FormInput'
import { eventChange } from '../../helper/actionEvent.helper'
import FormTextArea from '../../component/form/FormTextArea'
import FdtBg from '../../asset/image/content/fdt-bg.png'

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
         <Wrap
            hasWave
            hasOptionalBG
            hasDefaultContainer={false}
            actions={{
               prev: () => this.props.navigate('/galery'),
               next: () => this.props.navigate('/'),
            }}>
            <div className="container">
               <div className="content relative z-10 h-full">
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

                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem error voluptate repellat nulla, nam quod,
                        aliquid necessitatibus, eum ratione earum eius numquam
                        dolorem modi voluptas cupiditate amet rerum officiis
                        quos.
                     </p>
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
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Quod maiores aut ducimus ex, deserunt porro
                           tempora facere unde iste exercitationem atque
                           eligendi suscipit incidunt perferendis. Ex in
                           repudiandae voluptates sint.
                        </p>
                     </div>

                     <div className="surprise-content mb-[130px]">
                        <p className="text-base font-bold text-primary text-center mb-1">
                           Keluarga Mempelai Pria
                        </p>

                        <p className="text-base font-normal text-primary text-center">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Quod maiores aut ducimus ex, deserunt porro
                           tempora facere unde iste exercitationem atque
                           eligendi suscipit incidunt perferendis. Ex in
                           repudiandae voluptates sint.
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
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Quod maiores aut ducimus ex, deserunt porro
                           tempora facere unde iste exercitationem atque
                           eligendi suscipit incidunt perferendis. Ex in
                           repudiandae voluptates sint.
                        </p>
                     </div>

                     <div className="invitation-message mb-6">
                        <p className="text-base font-bold text-primary text-center mb-1">
                           Lady Gaga
                        </p>

                        <p className="text-base font-normal text-primary text-center">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Quod maiores aut ducimus ex, deserunt porro
                           tempora facere unde iste exercitationem atque
                           eligendi suscipit incidunt perferendis. Ex in
                           repudiandae voluptates sint.
                        </p>
                     </div>

                     <div className="invitation-message mb-6">
                        <p className="text-base font-bold text-primary text-center mb-1">
                           Ronaldo
                        </p>

                        <p className="text-base font-normal text-primary text-center">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Quod maiores aut ducimus ex, deserunt porro
                           tempora facere unde iste exercitationem atque
                           eligendi suscipit incidunt perferendis. Ex in
                           repudiandae voluptates sint.
                        </p>
                     </div>

                     <div className="invitation-message mb-6">
                        <p className="text-base font-bold text-primary text-center mb-1">
                           Messi
                        </p>

                        <p className="text-base font-normal text-primary text-center">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Quod maiores aut ducimus ex, deserunt porro
                           tempora facere unde iste exercitationem atque
                           eligendi suscipit incidunt perferendis. Ex in
                           repudiandae voluptates sint.
                        </p>
                     </div>

                     <div className="invitation-message mb-9">
                        <p className="text-base font-bold text-primary text-center mb-1">
                           Mbappe
                        </p>

                        <p className="text-base font-normal text-primary text-center">
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Quod maiores aut ducimus ex, deserunt porro
                           tempora facere unde iste exercitationem atque
                           eligendi suscipit incidunt perferendis. Ex in
                           repudiandae voluptates sint.
                        </p>
                     </div>
                  </section>
               </div>
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
