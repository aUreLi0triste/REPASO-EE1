const Card = (props) => {
    const {img,titulo,parrafo} = props;
    return (
        <div className="card">
            <img src={img} alt="noticia" />
            <h3>{titulo}</h3>
            <p>{parrafo}</p>
            <button>Más información</button>
        </div>
    );
}

export default Card;