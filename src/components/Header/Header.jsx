import classes from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className={classes.socialNetwork__header}>
            <input className={classes.header__checkbox} type="checkbox" id="menu"/>
            <label htmlFor="menu" className={classes.header__burger}>
                <span className={classes.header__burgerRow}></span>
            </label>
            <div className={classes.socialNetwork__menu + ' scroll'}>
                <NavLink exact to="/" className={classes.menu__link} activeClassName={classes.active}>
                    Моя страница
                </NavLink>
                <NavLink to="/news" className={classes.menu__link} activeClassName={classes.active}>
                    Новости
                </NavLink>
                <NavLink to="/friends" className={classes.menu__link} activeClassName={classes.active}>
                    Друзья
                </NavLink>
                <NavLink to="/messages" className={classes.menu__link} activeClassName={classes.active}>
                    Сообщения
                </NavLink>
                <NavLink to="/settings" className={classes.menu__link} activeClassName={classes.active}>
                    Настройки
                </NavLink>
                <NavLink to="/logout" className={classes.menu__link} activeClassName={classes.active}>Выход</NavLink>
            </div>
        </header>
    )
}

export default Header;
