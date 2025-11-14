import "../components/product.css";

const NavBarItem = ({ navigationData }) => {

  return (
    <>
      <nav className="nav-bar">
        <ul>
          {navigationData.map((item) => {
            <li>
              <a href="#">{item.title}</a>
            </li>;
          })}
        </ul>
      </nav>
    </>
  );
};

export default NavBarItem;
