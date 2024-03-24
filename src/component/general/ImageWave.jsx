export const WaveLandingPage = ({ src = '' }) => {
   return (
      <div className="wp-wave-landing-page absolute inset-0 z-10">
         <img src={src} alt="Wave Landing Page" className="h-full w-full" />
      </div>
   )
}

export const WaveContent = ({
   src = {
      top: '',
      bottom: '',
   },
}) => {
   return (
      <div className="wp-wave-frame">
         <img src={src.top} className="frame-wave-top" alt="motif-top" />

         <img
            src={src.bottom}
            className="frame-wave-bottom"
            alt="motif-bottom"
         />
      </div>
   )
}
