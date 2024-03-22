import { memo } from 'react'

const PageTitle = memo(
   ({
      title = '',
      second = '',
      secondExternal = '',
      externalContent = '',
      extraClassTitle = '',
   }) => {
      return (
         <>
            {externalContent}
            <h1
               className={
                  'font-bold text-primary text-center ' +
                  (second ? 'mb-2 ' : 'mb-0 ') +
                  (extraClassTitle || '')
               }>
               {title}
            </h1>
            {second ? (
               <p className="text-sm font-normal text-primary text-center">
                  {second}
               </p>
            ) : null}
            {secondExternal}
         </>
      )
   },
)

export default PageTitle
