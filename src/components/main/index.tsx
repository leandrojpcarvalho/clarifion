import Status from './Status'
import './styles.css'

function Main() {
  return(
    <>
      <section className="text">
        <h2>Wait ! your order in progress.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
      </section>
      <section>
        <Status />
      </section>
    </>
  )
}


export default Main;