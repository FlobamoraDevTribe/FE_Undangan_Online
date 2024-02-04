import { Component } from 'react'
import Wrap from '../../component/layout/Wrap'
import { withNavigation } from '../../component/layout/Navigation'

class BridePage extends Component {
    render() {
        return (
            <Wrap hasWave hasOptionalBG>
                <div className="padding-wave h-full overflow-y-auto scrollbar-hide">
                    <div className="content relative z-10 h-full">
                        <div className="flex flex-col justify-between pb-20">
                            <div className="container">
                                <h1 className="w-full text-center uppercase font-normal">Mempelai</h1>
                                <p className="text-center mt-[2vh]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente harum sint porro.</p>
                            </div>


                            <div className="bride-img mt-10 w-full">
                                <img
                                    src="/images/img-bride-page.png"
                                    alt="Image Landing Page"
                                    className="w-full rounded-[30px]"
                                />
                            </div>

                            <div className="container bride-info text-center mt-5">
                                <h4>Marten Delacrona</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est minima accusamus dicta sint</p>
                                <h3>VS</h3>
                                <h4>Mince Saputri</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque fugit architecto quaerat</p>
                            </div>

                        </div>

                    </div>
                </div>

            </Wrap>
        )
    }
}

export default withNavigation(BridePage)
