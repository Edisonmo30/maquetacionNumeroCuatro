import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <section className="home">
            <Header />
            <div className="image-container">
                <img 
                    src="./public/Avatar.png" 
                    alt="Home banner" 
                    className="home-image" 
                />
            </div>
            <Outlet /> {/* Para contenido dinámico */}
        </section>
    )
}

export default Home
