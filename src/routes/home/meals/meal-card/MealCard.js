import "./MealCard.scss";

const MealCard = ({ meal }) => {
  const { imageUrl, title, price, description } = meal;
  return (
    <div className="meal-card">
      <div
        className="div-img"
        role="img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="meal-content background-secondary3">
        <div className="content-header">
          <p className="meal-title">{title}</p>
          <p className="meal-price secondary1">${price.toFixed(2)}</p>
        </div>
        <p className="meal-description text-paragraph primary1">
          {description}
        </p>
        <p className="meal-order">Order a delivery</p>
      </div>
    </div>
  );
};

export default MealCard;
