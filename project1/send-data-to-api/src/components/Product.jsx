import React from 'react';

export default function Product({ thumbnail, title, description, price }) {
  return (
    <div className="product card h-100">
      <img className="card-img-top" src={thumbnail} alt={title} />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text text-muted">
          {description.substring(0, 60)}...
        </p>
      </div>
      <div className="card-footer">
        <span className="fw-bold text-primary">${price}</span>
      </div>
    </div>
  );
}
