// Example API endpoint
const baseAPI = import.meta.env.VITE_BASE_API

export const SrvListRestaurant = baseAPI + '/list'
export const SrvDetailRestaurant = (id) => baseAPI + '/detail/' + id
export const SrvReviewRestaurant = baseAPI + '/review'
