
/**
 * Компонент карточки
 */

const Card = ({title, text, children}) => {
    return (
        <div className="Card">
           <h5>{title}</h5>
           <p>{text}</p>
           {children}
        </div>
    )
}

export default Card;