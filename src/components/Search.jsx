import logo from "../logo.svg"

const Search = ({children}) => {
    return (
        <div className="Search">
            {children}
            <div className="search-box">
                <img src={logo} alt="" />
                <input type="search" className="search" />
                <button>Найти</button>
            </div>
        </div>
    )
}

export default Search;