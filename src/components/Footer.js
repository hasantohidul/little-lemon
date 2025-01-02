import logo from '../assets/Logo .svg'

export default function Footer() {
    return (
        <footer>
            <div>
                <img src={logo} alt='Little Lemon Restaurant Logo' />
            </div>
            <div>

                <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href='#'>Order Online</a></li>
                <li><a href='#'>Login</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><address>Chicago, Illinois</address></li>
                    <li> <a href='tel:+15551234567'>+1 (555) 123-4567</a></li>
                    <li> <a href='mailto:contact@littlelemon.com'>contact@littlelemon.com</a></li>
                </ul>
            </div>
            <div>
                <ul>
  <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
  <li><a href="https://x.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
</ul>
            </div>
        </footer>
    )
}