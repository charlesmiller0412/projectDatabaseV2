export const NavTypes = (props: any) => {
    const handleClick = (e: any) => {
        props.setCurrentType(e.target.id);
        props.setMenuOpen(false);
    };

    const types = [
        { name: "favorites", id: "favorites" },
        { name: "web", id: "web" },
        { name: "apps", id: "app" },
        { name: "portfolios", id: "portfolio" },
        { name: "designs", id: "design" },
        { name: "all", id: "all" },
        { name: "about", id: "about" },
    ];

    return (
        <div className="nav__types">
            <ul className={props.className}>
                {types.map((type: any) => (
                    <li
                        id={type.id}
                        onClick={handleClick}
                        className={
                            props.currentType === type.id
                                ? "nav__types--list-active nav__types--list-mobile-active"
                                : ""
                        }
                    >
                        {type.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};
