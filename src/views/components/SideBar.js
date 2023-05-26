import CanViewNav from "./CanViewNav"

const SideBar = ({ navigation }) => {
    return (
        <div>
            {Array.isArray(navigation) && navigation.map((item, index) => {
                return (
                    <CanViewNav key={index} navLink={item}>
                        <div key={index}>
                            <Link to={`/${item.link}`}>{item.title}</Link>
                        </div>
                    </CanViewNav>
                )
            }
            )}
        </div>
    )
}

export default SideBar