export default function IngridientsList({ meal }) {
  return (
    <>
      {meal.ingridients.map((ingridient, index) => {
        return (
          <>
            {ingridient}
            {index != meal.ingridients.length - 1 ? ", " : ""}
          </>
        );
      })}
    </>
  );
}
