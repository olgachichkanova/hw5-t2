import Item from "./Item";

/**
 * Компонент, генерирующий списки
 */ 

const ItemsList = ({count = 3, children}) => {
    return (
        <div>
            {children}
            <ul className="ItemsList">
                {[...Array(count)].map((e, i) => <Item key={i} />)}
            </ul>
        </div>
    )
}

export default ItemsList