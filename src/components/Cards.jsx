const cards = [
  { card: 'Card 1', color: 'bg-[#F1FF51]' },
  { card: 'Card 2', color: 'bg-[#EE5FF1]' },
  { card: 'Card 3', color: 'bg-[#36F48E]' }
]

export function CardsNew () {
  return (
    <div className='flex flex-col sm:flex-row px-3 sm:px-0 gap-5 sm:gap-0 justify-center w-full md:w-3/4'>
      {cards.map(({ card, color }, index) => {
        const zIndex = 30 - index * 10
        const marginLeft = index === 0 ? '' : 'sm:-ml-[200px]'

        return (
          <div key={index} className={`flex flex-col w-full h-fit sm:w-[500px] sm:h-[600px] p-4 text-black ${color} rounded-3xl shadow-2xl transition duration-400 ease-out z-${zIndex} ${marginLeft} sm:hover:-translate-y-8 sm:hover:z-40 peer sm:peer-hover:translate-x-16`}>
            <h3 className='title'>{card}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem illum maxime at optio? Modi accusamus eaque amet. Corporis, accusantium? Non quis perferendis ipsam blanditiis aspernatur repellendus laboriosam, tenetur nesciunt voluptate?</p>
          </div>
        )
      })}
    </div>
  )
}
