import OutfitCard from "./OutfitCard";

function RecommendationList({
  recommendations
}) {

  return (

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(450px,1fr))",
        gap: "25px",
        marginTop: "30px"
      }}
    >

      {
        recommendations.map(
          (outfit) => (

            <OutfitCard
              key={outfit._id}
              outfit={outfit}
            />

          )
        )
      }

    </div>

  );
}

export default RecommendationList;