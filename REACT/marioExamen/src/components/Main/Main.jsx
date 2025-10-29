import Banner from '../../assets/img/banner_mario.avif';
import Destacado1 from '../../assets/img/01.avif';
import Destacado2 from '../../assets/img/02.avif';
import Destacado3 from '../../assets/img/03.avif';
import Card from '../Card/Card.jsx';
import './Main.css';

const Main = () => {
    return (
        <main>
            <section className="seccionHero">
                <img src={Banner} alt="Banner Principal" />
                <h2>Solo en cines Abril de 2026</h2>
                <button>Más información</button>
            </section>
            <h2>Destacados</h2>
            <div className="seccionDestacados">
                <Card
                    img={Destacado1}
                    titulo="40 años de Mario"
                    parrafo="Descubre los próximos lanzamientos y eventos."
                />
                <Card
                    img={Destacado2}
                    titulo="Super Mario Galaxy + Super Mario Galaxy 2"
                    parrafo="Explora un mundo abierto lleno de aventuras y misterios."
                />
                <Card
                    img={Destacado3}
                    titulo="Donkey Kong Bananza: DK Island"
                    parrafo="Prepárate para una nueva aventura en la isla de Donkey Kong."
                />
            </div>
        </main>
    );
}

export default Main;