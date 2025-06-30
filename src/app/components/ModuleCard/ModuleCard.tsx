import React from 'react';
import './ModuleCard.css';

interface Module {
  id: number;
  title: string;
  image: string;
  items: string[];
}

interface ModuleCardProps {
  module: Module;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
  return (
    <div className="module-card">
      <div className="module-image-container">
        <img 
          src={module.image} 
          alt={module.title}
          className="module-image"
        />
        <div className="image-dimming-layer"></div>
        <div className="module-overlay">
          <h3 className="module-title">{module.title}</h3>
        </div>
      </div>
      
      <div className="module-content">
        <ul className="module-list">
          {module.items.map((item, index) => (
            <li key={index} className="module-list-item">
              <span className="item-number">{index + 1}.</span>
              <span className="item-text">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ModuleCard;
