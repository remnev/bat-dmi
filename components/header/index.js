import Link from 'next/link';
import './header.styl';

const Header = () => (
    <header className="header">
      <div className="header__content">
        <img className="header__logo" src="/static/logo.png" />
        <ul className="header__menu" style={{visibility: 'hidden'}}>
          <li className="header__menu-item_active">
            <Link href="/"><a>Главная</a></Link>
          </li>
          <li>
            <Link href="/contacts"><a>Контакты</a></Link>
          </li>
        </ul>
        <div className="header__contacts">
          <div><i className="fa fa-phone" aria-hidden="true"></i>&nbsp;+7&nbsp;977&nbsp;337&nbsp;77&nbsp;97</div>
          <div className="header__contact_type_map"><i className="fa fa-map-marker" aria-hidden="true"></i> <a href="https://yandex.ru/maps/-/CBF6Y2EFSB">СК&nbsp;"Дмитров"</a></div>
        </div>
      </div>
    </header>
);

export default Header;
