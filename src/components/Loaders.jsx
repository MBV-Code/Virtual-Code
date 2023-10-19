import '../styles/loaders.css'

export function Spinner () {
  return (
    <section>
      <div className='spinner-circle' />
      <div className='spinner-line-mask'>
        <div className='spinner-line' />
      </div>
    </section>
  )
}

export function LoaderPage () {
  return (
    <section className='w-full h-screen flex flex-col items-center justify-center font-bold text-3xl text-[#03fa6d]'>
      <div id='load' className='absolute w-[600px] h-9 ml-[-300px] overflow-visible select-none cursor-default left-2/4 top-[40%]'>
        <div>L</div>
        <div>A</div>
        <div>U</div>
        <div>T</div>
        <div>R</div>
        <div>I</div>
        <div>V</div>
      </div>
      <div id='load' className='absolute w-[600px] h-9 ml-[-300px] overflow-visible select-none cursor-default left-2/4'>
        <div> </div>
        <div>E</div>
        <div>D</div>
        <div>O</div>
        <div>C</div>
      </div>
    </section>
  )
}
