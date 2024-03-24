import _ from 'lodash'

const ImageCover = ({
   src = '',
   externalAsset = null,
   extraclassImg = '',
   extraClassContainer = '',
   extraClassWrapping = '',
   config = {
      width: 'w-[224px]',
      height: 'h-[331px]',
      other: '',
   },
   children,
}) => {
   return !_.isEmpty(children) ? (
      <div className="flex justify-center">
         <div className="relative">{children}</div>
      </div>
   ) : (
      <div className={'flex justify-center ' + extraClassContainer}>
         <div
            className={
               'relative' +
               (config.width ? ' ' + config.width : '') +
               (config.height ? ' ' + config.height : '') +
               (config.other ? ' ' + config.other : '')
            }>
            <div
               className={
                  'wp-img-cover bg-white shadow-2xl overflow-hidden ' +
                  extraClassWrapping
               }>
               <img
                  src={src}
                  alt="Image Cover"
                  className={'w-full h-full ' + extraclassImg}
               />
            </div>

            {!_.isEmpty(externalAsset) ? externalAsset : null}
         </div>
      </div>
   )
}

export default ImageCover
