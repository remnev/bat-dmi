import Link from 'next/link';
import Layout from '../../components/layout';

export default () => (
    <Layout
        title="Как добраться – контакты батутного центра COSMICA в Дмитрове"
        description="Как добраться в батутный центр COSMICA на Авиамоторной в ТРК Спортех. Адрес, телефон, электронная почта. Посмотреть на карте."
    >
        <div className="content content_type_contacts">
            <h1>Контакты</h1>
            <p><b>Мы находимся по адресу:</b> г. Дмитров, ул. Профессиональная, СК "Дмитров", парк "Экстрим"</p>
            <p><b>Телефон:</b> +7 (977) 33-777-97</p>
            <p><b>Электронная почта:</b> <a href="mailto:contact@batut-dmitrov.ru">contact@batut-dmitrov.ru</a></p>
            <p><b>Время работы:</b> ежедневно, с 10:00 до 22:00. Без выходных и перерывов.</p>
            <iframe style={{marginBottom: '40px'}} src="https://yandex.ru/map-widget/v1/-/CKhUmwC" width="800" height="640" frameBorder="0"></iframe>
        </div>
    </Layout>
);
