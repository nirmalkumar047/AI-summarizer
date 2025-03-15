import {logo} from '../assets'
const Hero = () => {
  return (
    <header className='w-full top-0 flex justify-center items-center flex-col'>
        <nav className='flex justify-between w-full p-4'>
          <img src={logo} alt="sumz_logo" className='w-28 object-contain' />
          <button type='button' 
            onClick={() => window.open('https://github.com/nirmalkumar047')}
            className=' bg-black text-white px-6 py-2 rounded-3xl'
          >
            Github
          </button>
        </nav>
        <h1 className='head_text'> 
          Summarize Articles with <br className='max-md:hidden' />
          <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
          Simplify your reading with Summize , an open-source aricle summarizer that
          transforms lengthy articles into clear and concise summaries </h2>
    </header>
  )
}

export default Hero