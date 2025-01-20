import 'antd/dist/reset.css';
import { useRef, useState } from 'react';
import './CarosalComponent.css'; // Import the CSS file

export interface CarouselComponentProps {
  foodCategories: { src: string; title: string }[];
}

export default function CarouselComponent(props: CarouselComponentProps) {
  const { foodCategories } = props;
  const scrollRef = useRef<HTMLDivElement>(null);

  // State to track the active menu item
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleClick = (title: string) => {
    setActiveItem(title); // Set the clicked item as active
  };

  return (
    <div style={{ position: 'relative', padding: '20px' }}>
      <h4 style={{ marginLeft: '26px' }}>Menu</h4>
      <div ref={scrollRef} className="scrollable-container">
        {foodCategories.map((category) => (
          <div
            key={category.title}
            className={`food-category ${
              activeItem === category.title ? 'active' : ''
            }`}
            onClick={() => handleClick(category.title)}
          >
            <img src={category.src} alt={category.title} />
            <div className="food-category-title">{category.title}</div>
          </div>
        ))}
      </div>

      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          display: 'flex',
          gap: '10px',
        }}
      >
        <button
          onClick={() => handleScroll('left')}
          className="nav-button left"
        >
          <span />
        </button>
        <button
          onClick={() => handleScroll('right')}
          className="nav-button right"
        >
          <span />
        </button>
      </div>
    </div>
  );
}
