import * as api from '../../helper/api.helper'
import { isSuccess } from '../../helper/condition.helper'

export const _configHeadBody = () => ({
   'Content-Type': 'application/json',
})

export const _shapeMethodGet = (url) => {
   return api
      .get(url, {}, _configHeadBody())
      .then((res) => {
         if (isSuccess(res.data)) {
            return res.data
         } else {
            return null
         }
      })
      .catch((err) => {
         console.log('err: ', err)
      })
}

export const _shapeMethodPost = (url, payload = {}) => {
   return api
      .post(
         url,
         payload,
         {},
         {
            ..._configHeadBody(),
         },
      )
      .then((res) => {
         if (isSuccess(res.data)) {
            return res.data
         } else {
            return null
         }
      })
      .catch((err) => {
         console.log('err: ', err)
      })
}
