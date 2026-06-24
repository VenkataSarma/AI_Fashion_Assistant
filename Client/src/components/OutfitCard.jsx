function OutfitCard({ outfit }) {

  const imagePaths =
    outfit.image_files?.split(";") || [];

  return (

    <div
      style={{
        background: "#ffffff",
        color: "#111827",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.15)",
        transition: "0.3s ease",
        border:
          "1px solid #e5e7eb"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "translateY(-8px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "translateY(0px)";
      }}
    >

      {/* Hero Image */}

      {
        imagePaths.length > 0 && (

          <img
            src={`http://localhost:5000/${imagePaths[0]}`}
            alt={outfit.theme}
            style={{
              width: "100%",
              height: "250px",
              objectFit: "contain",
              background: "#f8fafc"
            }}
          />

        )
      }

      {/* Outfit Components Gallery */}

      {
        imagePaths.length > 1 && (

          <div
            style={{
              padding: "10px",
              background: "#f8fafc"
            }}
          >

            <h4
              style={{
                textAlign: "center",
                marginBottom: "10px",
                color: "#475569"
              }}
            >
              Outfit Components
            </h4>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                flexWrap: "wrap"
              }}
            >

              {
                imagePaths
                  .slice(1)
                  .map((img, index) => (

                    <img
                      key={index}
                      src={`http://localhost:5000/${img}`}
                      alt="Outfit Component"
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "contain",
                        background: "#fff",
                        border: "1px solid #ddd",
                        borderRadius: "10px",
                        padding: "5px"
                      }}
                    />

                  ))
              }

            </div>

          </div>

        )
      }

      <div
        style={{
          padding: "20px"
        }}
      >

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "15px"
          }}
        >

          <h2
            style={{
              margin: 0,
              color: "#111827",
              fontSize: "28px"
            }}
          >
            {outfit.theme}
          </h2>

          <span
            style={{
              background: "#2563eb",
              color: "#fff",
              padding: "8px 14px",
              borderRadius: "999px",
              fontWeight: "bold",
              fontSize: "18px"
            }}
          >
            {outfit.score}
          </span>

        </div>

        <div
          style={{
            textAlign: "left",
            color: "#374151",
            lineHeight: "1.8",
            marginBottom: "15px"
          }}
        >

          <p>
            <strong>Hero:</strong> {outfit.hero}
          </p>

          {
            outfit.second && (
              <p>
                <strong>Bottomwear:</strong> {outfit.second}
              </p>
            )
          }

          {
            outfit.layer && (
              <p>
                <strong>Layer:</strong> {outfit.layer}
              </p>
            )
          }

          <p>
            <strong>Footwear:</strong> {outfit.footwear}
          </p>

          {
            outfit.accessory_1 && (
              <p>
                <strong>Accessory:</strong> {outfit.accessory_1}
              </p>
            )
          }

          {
            outfit.accessory_2 && (
              <p>
                <strong>Accessory 2:</strong> {outfit.accessory_2}
              </p>
            )
          }

        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "15px"
          }}
        >

          <span
            style={{
              background: "#f3f4f6",
              padding: "8px 12px",
              borderRadius: "10px"
            }}
          >
            🎨 {outfit.palette}
          </span>

          <span
            style={{
              background: "#f3f4f6",
              padding: "8px 12px",
              borderRadius: "10px"
            }}
          >
            ₹{outfit.total_price_inr}
          </span>

        </div>

        <div
          style={{
            background: "#eff6ff",
            padding: "15px",
            borderRadius: "12px",
            borderLeft:
              "4px solid #2563eb"
          }}
        >

          <h4
            style={{
              marginTop: 0,
              color: "#1e3a8a"
            }}
          >
            Why Recommended?
          </h4>

          <p
            style={{
              marginBottom: 0,
              lineHeight: "1.7",
              color: "#374151"
            }}
          >
            {outfit.stylist_rationale}
          </p>

        </div>

      </div>

    </div>

  );
}

export default OutfitCard;