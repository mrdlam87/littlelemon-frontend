import "./meals.scss";
import Button from "../../button/button";
import MealCard from "./meal-card/meal-card";
import meals from "../../../data/meals.json";

const Meals = () => {
  return (
    <div className="div-meals container">
      <div className="div-heading">
        <h1 className="title-display secondary4">This weeks specials!</h1>
        <Button>Online Menu</Button>
      </div>
      <div className="grid grid--3-cols meal-cards">
        {meals.map((meal) => {
          const { id } = meal;
          return <MealCard key={id} meal={meal} />;
        })}
      </div>
    </div>
  );
};

export default Meals;
