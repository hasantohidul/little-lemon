import { imageData } from "../assets/data";

export default function Highlights() {
  return (
    <section id="menu">
      <div>
        <h2>This week's specials!</h2>
        <button>Online Menu</button>
      </div>
      <div>
        {imageData.map(({id, name, src, description, price}) => (
            <div key={id}>
                <img src={src} alt={name} width="200px" />
                <div>
                    <h3>{name}</h3>
                    <p>{price}</p>
                </div>
                <p>{description}</p>
                <h4>Order a Delivery</h4>
            </div>
        ))}
      </div>
    </section>
  );
}
