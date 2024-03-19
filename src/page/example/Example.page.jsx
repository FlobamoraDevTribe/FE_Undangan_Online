import { Component } from 'react'
import _ from 'lodash'
import {
   getDetailRestaurant,
   getListRestaurant,
   postReviewRestaurant,
} from '../../service/api/restaurant.api'
import { isSuccess } from '../../helper/condition.helper'
import FormInput from '../../component/form/FormInput'
import FormTextArea from '../../component/form/FormTextArea'
import { eventChange } from '../../helper/actionEvent.helper'
import { ButtonPrimary } from '../../component/general/Button'

class ExamplePage extends Component {
   state = {
      restaurants: [],
      selectedRestaurant: {},

      formRequest: {
         name: '',
         review: '',
      },
   }

   _handleChange = (e) => {
      const { name, value } = eventChange(e)

      this.setState((prevState) => {
         let newFormRequest = { ...prevState.formRequest }
         newFormRequest[name] = value

         return {
            formRequest: newFormRequest,
         }
      })
   }

   _handleSelectedRestaurant = (selected = {}) => {
      getDetailRestaurant(selected.id).then((resData) => {
         if (isSuccess(resData)) {
            this.setState({ selectedRestaurant: { ...resData.restaurant } })
         }
      })
   }

   _handleSubmitReview = (e) => {
      e.preventDefault()
      const { selectedRestaurant, formRequest } = this.state
      const formArr = {
         id: selectedRestaurant.id,
         name: formRequest.name,
         review: formRequest.review,
      }

      postReviewRestaurant(formArr).then((resData) => {
         if (isSuccess(resData)) {
            this.setState(
               (prevState) => ({
                  ...prevState,
                  selectedRestaurant: {
                     ...prevState.selectedRestaurant,
                     customerReviews: [...resData.customerReviews],
                  },
               }),
               () => {
                  this.setState({
                     formRequest: {
                        name: '',
                        review: '',
                     },
                  })
               },
            )
         }
      })
   }

   _getData = () => {
      getListRestaurant().then((resData) => {
         this.setState({ restaurants: resData.restaurants })
      })
   }

   componentDidMount() {
      this._getData()
   }

   render() {
      const { restaurants, selectedRestaurant, formRequest } = this.state

      return (
         <div className="container">
            <div className="flex justify-between relative">
               <div className="w-7/12">
                  <h3 className="mb-4">Restaurant List</h3>

                  <ul>
                     {restaurants.map((vm, index) => (
                        <li
                           className="cursor-pointer mb-4"
                           key={index}
                           onClick={() => this._handleSelectedRestaurant(vm)}>
                           <h5 className="mb-2">{vm?.name || '-'}</h5>
                           <p className="mb-2">{vm?.city || '-'}</p>
                           <p className="mb-2">{vm?.rating || '-'}</p>
                           <p className="mb-0">{vm?.description || '-'}</p>
                        </li>
                     ))}
                  </ul>
               </div>

               <div className="w-4/12">
                  <h3 className="mb-0">Detail Restaurant </h3>

                  <div className="sticky top-4">
                     {_.isEmpty(selectedRestaurant) ? (
                        <h5 className="mt-4 mb-0">No Restaurant Selected</h5>
                     ) : (
                        <>
                           {!_.isEmpty(selectedRestaurant) ? (
                              <p className="text-2xl font-medium mb-4">
                                 {selectedRestaurant.name}
                              </p>
                           ) : (
                              ''
                           )}

                           <p className="text-lg mb-4">Customer Review</p>

                           <ul className="max-h-[300px] overflow-y-auto">
                              {selectedRestaurant.customerReviews.map(
                                 (vm, index) => (
                                    <li className="mb-4" key={index}>
                                       <p>{vm.name || '-'}</p>
                                       <p>{vm.review || '-'}</p>
                                       <p>{vm.date || '-'}</p>
                                    </li>
                                 ),
                              )}
                           </ul>

                           <form
                              onSubmit={this._handleSubmitReview}
                              className="mt-8">
                              <FormInput
                                 id="name"
                                 name="name"
                                 value={formRequest.name}
                                 placeholder="Nama"
                                 actions={{
                                    onChange: this._handleChange,
                                 }}
                              />

                              <FormTextArea
                                 id="review"
                                 name="review"
                                 value={formRequest.review}
                                 placeholder="Review"
                                 rows={6}
                                 actions={{
                                    onChange: this._handleChange,
                                 }}
                              />

                              <div className="d-flex justify-end">
                                 <ButtonPrimary
                                    type="submit"
                                    extraClassName="rounded-lg">
                                    Submit
                                 </ButtonPrimary>
                              </div>
                           </form>
                        </>
                     )}
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default ExamplePage
