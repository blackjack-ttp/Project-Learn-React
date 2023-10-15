//* LIB
import { Link } from 'react-router-dom';
//* DATA
import data from './data';
//* HOOKS
import useAuth from '../../hooks/useAuth';
//* SCSS
import './style.scss';
//* IMPORT
import { LoginPageContext } from '../../imports/page';

const NavbarContext = () => {
  const { user } = useAuth();
  return (
    <>
      <nav className="nav-context-wrapper">
        <ul className="nav-context-wrapper__menu">
          {user &&
            data.map((item, i) => (
              <li key={i} className="nav-context-wrapper__menu__item">
                <Link to={item.to} className="nav-context-wrapper__menu__item__link">
                  {item.lable}
                </Link>
              </li>
            ))}
        </ul>
        {user ? <Link to="/usecontext/login">{<LoginPageContext />}</Link> : <h1>Logout</h1>}
      </nav>
    </>
  );
};

export default NavbarContext;
