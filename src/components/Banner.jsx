const ofertas = ['Oferta 1', 'Oferta 2', 'Oferta 3', 'Oferta 4', 'Oferta 5']

export function Banner () {
  return (
    <>
      <div className='relative h-[72px] flex overflow-x-hidden bg-green-500'>
        <div className='flex items-center animate-banner whitespace-nowrap'>
          {ofertas.map((oferta, index) => (
            <span key={index} className='text-xl mx-16'>{oferta}</span>
          ))}
        </div>

        <div className='absolute top-0 h-[72px] flex items-center animate-banner2 whitespace-nowrap'>
          {ofertas.map((oferta, index) => (
            <span key={index} className='text-xl mx-16'>{oferta}</span>
          ))}
        </div>
      </div>

    </>
  )
}
