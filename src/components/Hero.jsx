import { HERO } from '../constants'
import prasathImg from '../assets/vp-img.png'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section className="flex min-h-screen flex-wrap items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{duration: 1}} className="w-full md:w-1/2">
            <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[4rem] neon-text">
    {HERO.name}
</h2>
                <p className='p-2 text-3xl tracking-tighter lg:text-4xl'>
                    {HERO.greet}
                </p>
                <p className='mb-8 p-2 text-xl'>
                    {HERO.description}
                </p>
                {/* <div className='my-7'>
                <a href="/Vishnuprasath_Resume.pdf" target='_blank' rel='noopener noreferrer' download className='bg-gradient-to-r from-blue-500 via-slate-400 to-purple-500 rounded-full p-4 text-sm text-stone-800 mb-10'>Download Resume</a>
                </div> */}
                <div className='my-7'>
  <a href="/VishnuPrasath_MERN_Stack_Resume ..pdf" target='_blank' rel='noopener noreferrer' download className='download-button'>
    Download Resume
  </a>
</div>
            </motion.div>
            <div className="w-full md:w-1/2 lg:p-8">
  <div className="flex justify-center relative px-4">
    
    {/* Back curve */}
    <div className="
      absolute bottom-4 
      w-[90%] max-w-[500px] 
      h-[80px] sm:h-[100px] 
      bg-purple-300 
      rounded-t-full 
      opacity-60">
    </div>

    {/* Front curve */}
    <div className="
      absolute bottom-0 
      w-[85%] max-w-[460px] 
      h-[70px] sm:h-[90px] 
      bg-purple-500 
      rounded-t-full">
    </div>

    {/* Image */}
    <img
      src={prasathImg}
      alt="vishnu prasath"
      className="
        relative z-10 
        w-[85%] max-w-[450px] 
        h-auto 
        rounded-b-[60px] sm:rounded-b-[80px] 
        shadow-2xl 
        object-cover"
    />
    
  </div>
</div>

        </section>
    )
}

export default Hero