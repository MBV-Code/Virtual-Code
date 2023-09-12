import { Banner } from '../components/Banner.jsx'
import { CardsNew } from '../components/Cards.jsx'

export function HomePage () {
  return (
    <main className='mx-auto sm:p-3'>
      <Banner />
      <h1 className='text-5xl font-bold text-center py-5'>Virtual Code</h1>
      <section className='flex justify-center mt-14'>
        <CardsNew />
      </section>
    </main>
  )
}
