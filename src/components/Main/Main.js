import './Main.css';
import Card from '../Card/Card';
import cardData from '../../data/cardData';

export default function Main () {
    const cards = cardData.map(card => {
        return <Card {...card} />;
    });
    
    return (
        <section className='main'>
            {cards}
        </section>
    )
}
