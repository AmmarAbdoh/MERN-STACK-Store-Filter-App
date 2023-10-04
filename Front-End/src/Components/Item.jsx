import "../Style/Item.css";

const Item = ({ name, company, price, featured, image }) => {
  return (
    <div className={`item ${featured ? "featured" : ""}`}>
      <div className="item-image">
        <img src={image} alt={name} />
      </div>
      <div className="item-details">
        <div className="item-info">
          <h2 className="item-name">{name}</h2>
          <p className="item-company">{company}</p>
          <p className="item-price">${price}</p>
          {featured && <span className="featured-label">Featured</span>}
        </div>
      </div>
    </div>
  );
};

export default Item;
