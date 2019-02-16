import './special-offer.styl';

const SpecialOffer = () => (
    <section className="special-offer">
        <h1 className="special-offer__header">Акция для студентов!</h1>
        <p className="special-offer__emoji">👩‍🎓👨‍🎓</p>
        <p className="special-offer__description">Каждый вторник специальное предложение: <strong>два часа по цене одного</strong>!</p>
        <p className="special-offer__requirements">Просто предъявите студенческий билет или зачетную книжку.</p>
    </section>
);

export default SpecialOffer;
