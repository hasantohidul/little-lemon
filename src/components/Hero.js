import restaurantFood from '../assets/images/restauranfood.jpg';
import './Hero.css';

export default function Hero() {
  return (
    <section className='hero'>
      <div>
      <h1>Little Lemon</h1>
      <h3>Chicago</h3>
      <p>
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.
      </p>
      <button>Reserve a Table</button>
      </div>
      <div>
        <img src={restaurantFood} height="400px"/>
      </div>
    </section>
  );
}
