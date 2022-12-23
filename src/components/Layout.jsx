import Card from "./Card";
import ItemsList from "./ItemsList";
import NavMenu from "./NavMenu";
import Search from "./Search";

/**
 * Компонент-обертка для основного контента
 */

const Layout = () => {

    const data1 = [
        {name: "Сейчас в СМИ", link: "#1"},
        {name: "в Германии", link: "#2"},
        {name: "Рекомендуем", link: "#3"}
    ]

    const data2 = [
        {name: "Видео", link: "#1"},
        {name: "Картинки", link: "#2"},
        {name: "Новости", link: "#3"},
        {name: "Карты", link: "#4"},
        {name: "Маркет", link: "#5"},
        {name: "Переводчик", link: "#6"},
        {name: "Эфир", link: "#7"},
        {name: "еще", link: "#8"}
    ]
    
    return (
        <div className="Layout">
            <div className="header-box">
                <ItemsList count={5}>
                    <NavMenu data={data1}/>
                </ItemsList>
                <Card title={"Работа над ошибками"} text="Context Ads text">
                    <img src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" alt="" />
                </Card>
            </div>
            <Search>
                <NavMenu data={data2}/>
            </Search>
            <div className="cards-box">
                <Card title={"Погода"} text="Context Ads text">
                </Card>
                <Card title={"Карта Германии"} text="Расписания">
                </Card>
                <Card title={"Эфир"}>
                    <ItemsList count={3}/>
                </Card>
                <Card title={"Телепрограмма"}>
                    <ItemsList count={3}/>
                </Card>
                <Card title={"Посещаемое"}>
                    <ItemsList count={3}/>
                </Card>
            </div>
        </div>
    )
}

export default Layout;