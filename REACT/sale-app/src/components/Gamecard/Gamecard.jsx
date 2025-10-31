import './Gamecard.css';

const Gamecard = (props) => {
    return (
        <article>
            <h2>{props.nombre}</h2>
            <h3>{props.categoria}</h3>
            <img src={props.imagen} />
            <p>{props.descripcion}</p>
            <p>Precio: S/ {props.precio}</p>
        </article>
    )
}

export default Gamecard