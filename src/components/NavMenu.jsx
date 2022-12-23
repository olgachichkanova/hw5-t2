/**
 * Компонент для генерирования навигации
 */

const NavMenu = ({data}) => {
    return (
        <nav className="NavMenu">
            {data.map(i => <a key={i.link} href={i.link}>{i.name}</a>)}
        </nav>
    )
}

export default NavMenu;