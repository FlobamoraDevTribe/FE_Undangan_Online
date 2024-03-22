export const objectPathMenu = (name = '') => {
   const main = '/' + name

   return {
      main,
      detail: (id = ':id') => main + '/' + id + '/detail',
   }
}
