import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <p className='darkblue'>&#60;div&#62;</p>
            <div className='tab'>
                <div>
                    <span className='darkblue'>&#60;h1</span>
                    <span className='lightblue'> className</span>
                    <span className='white'>=</span>
                    <span className='orange'>'title'</span>
                    <span className='darkblue'>&#62;</span>

                    <div className='portfolio'>
                        <h1>
                            Portfolio
                        </h1>
                    </div>
                    <div className='darkblue'>&#60;/h1&#62;</div>
                </div>
                <div>
                    <span className='darkblue'>&#60;h2</span>
                    <span className='lightblue'> className</span>
                    <span className='white'>=</span>
                    <span className='orange'>'developer'</span>
                    <span className='darkblue'>&#62;</span>
                    <div className='portfolio'>
                        <h2>
                            Heba A.
                        </h2>
                    </div>
                    <div className='darkblue'>&#60;/h2&#62;</div>
                </div>

            </div>
            <div className='darkblue'>&#60;/div&#62;<span className='text-cursor'>|</span></div>

        </div>
    )
}

export default Hero