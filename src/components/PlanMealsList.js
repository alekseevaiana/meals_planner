import MealsList from "./MealsList";

export default function PlanMealsList({
  meals,
  handlePlanBtn,
  handleOpenMealBtnClick,
  allIngridients,
}) {
  return (
    <>
      <MealsList
        meals={meals}
        handlePlanBtn={handlePlanBtn}
        handleOpenMealBtnClick={handleOpenMealBtnClick}
        allIngridients={allIngridients}
      />
    </>
  );
}
