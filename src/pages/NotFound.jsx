import { Link } from 'react-router-dom'
import '../styles/NotFound.css'

export function NotFoundPage () {
  return (
    <section className='container my-0 mx-auto'>
      <div className='wrapper'>
        <div className='container'>
          <div>
            <div className='one'>
              <div className='content'>
                <span className='piece' />
                <span className='piece' />
                <span className='piece' />
              </div>
            </div>
            <div className='two'>
              <div className='content'>
                <span className='piece' />
                <span className='piece' />
                <span className='piece' />
              </div>
            </div>
            <div className='three'>
              <div className='content'>
                <span className='piece' />
                <span className='piece' />
                <span className='piece' />
              </div>
            </div>
            <p className='p404'>404</p>
          </div>
          <div className='text'>
            <article>
              <p>Uh oh! Looks like you got lost.</p>
              <button>
                <Link to='/'>Back to home</Link>
              </button>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
