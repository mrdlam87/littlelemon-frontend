import "./Meals.scss";
import CustomButton from "../../../components/button/CustomButton";
import MealCard from "./meal-card/MealCard";
import meals from "../../../data/meals.json";

const Meals = () => {
  return (
    <div className="div-meals container">
      <div className="div-heading">
        <h1 className="title-display secondary4">This weeks specials!</h1>
        <CustomButton>Online Menu</CustomButton>
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
