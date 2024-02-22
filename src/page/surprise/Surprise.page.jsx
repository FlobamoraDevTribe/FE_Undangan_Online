import { Component } from 'react'
import { withNavigation } from '../../component/layout/Navigation'
import Wrap from '../../component/layout/Wrap'
import PageTitle from '../../component/general/PageTitle'
import FormInput from '../../component/form/FormInput'
import { eventChange } from '../../helper/actionEvent.helper'
import FormTextArea from '../../component/form/FormTextArea'

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
         <Wrap hasWave hasOptionalBG>
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
               </section>

               <section className="section-content-scroll-padding">
                  <PageTitle
                     title="Turut Mengundang"
                     extraClassTitle="uppercase"
                  />
               </section>
            </div>
         </Wrap>
      )
   }
}

export default withNavigation(SurprisePage)
