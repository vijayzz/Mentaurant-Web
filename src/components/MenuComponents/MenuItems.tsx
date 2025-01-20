import CarouselComponent from '../MenuComponents/Carosal';
import soup from '../../assets/images/soup.png';
import burgers from '../../assets/images/burgers.png';
import appetizers from '../../assets/images/appetizers.png';
import seafood from '../../assets/images/seafoods.png';
import pastas from '../../assets/images/pastas.png';
import sweets from '../../assets/images/sweets.png';
import juices from '../../assets/images/juices.png';

export default function MenuItems() {
  const foodCategories = [
    { src: soup, title: 'Soup' },
    { src: burgers, title: 'Burgers' },
    { src: appetizers, title: 'Appetizers' },
    { src: seafood, title: 'Seafood' },
    { src: pastas, title: 'Pastas' },
    { src: sweets, title: 'Sweets' },
    { src: juices, title: 'Juices' },
    { src: soup, title: 'Pastries' },
    { src: juices, title: 'Grill' },
    { src: seafood, title: 'Steak' },
    { src: burgers, title: 'noodles' },
    { src: burgers, title: 'Pastas' },
    { src: burgers, title: 'Fried Rice' },
    { src: soup, title: 'Biriyani' },
    { src: burgers, title: 'Kebabs' },
    { src: burgers, title: 'non-veg thali' },
    { src: burgers, title: 'momos' },
    { src: soup, title: 'breveages' },
    { src: burgers, title: 'veg-thali' },
    { src: appetizers, title: 'variety-rice' },
    { src: seafood, title: 'icecreams' },
    
  ];
  

  return (
    <div>
      <CarouselComponent foodCategories={foodCategories} />
    </div>
  );
}
