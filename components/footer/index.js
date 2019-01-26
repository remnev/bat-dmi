import './footer.styl';

const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <section className="footer__section">
        <h6 className="footer__title">Мы в соцсетях</h6>
        <ul className="footer__socmedia">
          <li className="footer__socmedia-item footer__socmedia-item_type_vk">
            <a href="https://vk.com/cosmica_dmitrov" className="fa fa-vk"></a>
          </li>
          <li className="footer__socmedia-item footer__socmedia-item_type_facebook">
            <a href="https://www.facebook.com/cosmicadmitrov/" className="fa fa-facebook"></a>
          </li>
          <li className="footer__socmedia-item footer__socmedia-item_type_instagram">
            <a href="https://www.instagram.com/cosmica_dmitrov/" className="fa fa-instagram"></a>
          </li>
        </ul>
      </section>
      <section className="footer__section">
        <h6 className="footer__title">Ответим на любые вопросы</h6>
        <ul className="footer__contacts">
          <li>
            <i className="fa fa-phone" aria-hidden="true"></i> +7 977 337 77 97
          </li>
          <li>
            <i className="fa fa-map-marker" aria-hidden="true"></i> <a href="https://yandex.ru/maps/-/CBF6Y2EFSB">г. Дмитров ул. Профессиональная, СК "Дмитров", парк "Экстрим"</a>
          </li>
          <li>
            <i className="fa fa-envelope-o" aria-hidden="true"></i> <a href="mailto:contact@batut-dmitrov.ru">contact@batut-dmitrov.ru</a>
          </li>
        </ul>
      </section>
    </div>
  </footer>
);

export default Footer;
