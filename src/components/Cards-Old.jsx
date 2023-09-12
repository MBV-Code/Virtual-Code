export function Cards () {
  return (
    <section className='relative flex flex-col items-center gap-5 w-full md:flex-row md:items-stretch md:gap-2 md:w-3/4 h-[500px]'>
      <Card color='amber' />
      <Card color='purple' />
      <Card color='green' />
    </section>
  )
}

function Card ({ color = 'amber' }) {
  return (
    <article className={`bg-${color}-500 rounded-xl w-full h-[500px] md:h-full md:w-1/3 p-3 [transition:_.5s_ease] md:hover:w-2/3`}>
      <h2 className='text-2xl font-bold text-white'>Card</h2>
      <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatum.</p>
    </article>
  )
}
