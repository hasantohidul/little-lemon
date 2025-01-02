import marioAndAdrianA from '../assets/images/Mario and Adrian A.jpg'
import marioAndAdrianB from '../assets/images/Mario and Adrian b.jpg'

export default function About() {
  return (
    <section id="about">
      <div>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
      </div>
      <div>
        <img src={marioAndAdrianA} width="350px" />
        <img src={marioAndAdrianB} width="350px"/>
      </div>
    </section>
  );
}
