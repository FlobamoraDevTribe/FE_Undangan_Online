import { _shapeMethodGet, _shapeMethodPost } from './_config.api'
import {
   SrvDetailRestaurant,
   SrvListRestaurant,
   SrvReviewRestaurant,
} from './_endPoint.api'

export const getListRestaurant = () => _shapeMethodGet(SrvListRestaurant)

export const getDetailRestaurant = (id) =>
   _shapeMethodGet(SrvDetailRestaurant(id))

export const postReviewRestaurant = (formRequest = {}) =>
   _shapeMethodPost(SrvReviewRestaurant, formRequest)
