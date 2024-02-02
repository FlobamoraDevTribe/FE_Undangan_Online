import ImgWaveTop from '../../asset/image/content/motif-top.png'
import ImgWaveBottom from '../../asset/image/content/motif-bottom.png'
import ImgFlowerTopRight from '../../asset/image/content/flower-top-right.png'
import ImgFlowerBottomLeft from '../../asset/image/content/flower-bottom-left.png'

const Wrap = ({ hasWave = false, hasOptionalBG = false, children }) => {
   return (
      <div className="workspace-container">
         <div
            className="fixed h-full w-full"
            style={{
               inset: '0px',
               transformOrigin: '50% 50%',
               translate: '0px 0px',
            }}>
            <div className="flex items-center justify-center h-full w-full">
               <div className="canvas">
                  {children}

                  {hasWave ? (
                     <div className="wp-wave-frame">
                        <img
                           src={ImgWaveTop}
                           className="frame-wave-top"
                           alt="motif-top"
                        />
                        <img
                           src={ImgWaveBottom}
                           className="frame-wave-bottom"
                           alt="motif-bottom"
                        />
                     </div>
                  ) : null}

                  {hasOptionalBG ? (
                     <div className="wp-wave-frame">
                        <img
                           src={ImgFlowerTopRight}
                           className="frame-bg-tr"
                           alt="bg-tr"
                        />
                        <img
                           src={ImgFlowerBottomLeft}
                           className="frame-bg-bl"
                           alt="bg-bl"
                        />
                     </div>
                  ) : null}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Wrap
