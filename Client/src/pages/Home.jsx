import { useState } from "react";
import LoadingSpinner
from "../components/LoadingSpinner";
import api from "../services/api";

import RecommendationList
from "../components/RecommendationList";

function Home() {

  const [query, setQuery] =
    useState("");

  const [results, setResults] =
    useState([]);

  const [intent, setIntent] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const handleSubmit =
    async () => {

      if (!query.trim()) return;

      try {

        setLoading(true);

        const response =
          await api.post(
            "/recommend",
            { query }
          );

        setIntent(
          response.data.intent
        );

        setResults(
          response.data.recommendations
        );

      } catch (err) {

        console.error(err);

      } finally {

        setLoading(false);

      }
    };

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a, #1e293b)",
        padding: "40px 20px",
        color: "#fff"
      }}
    >

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto"
        }}
      >

        <h1
          style={{
            textAlign: "center",
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "15px"
          }}
        >
          AI Fashion Assistant 👔👗
        </h1>

        <p
          style={{
            textAlign: "center",
            fontSize: "18px",
            color: "#cbd5e1",
            marginBottom: "40px"
          }}
        >
          Get personalized outfit recommendations powered by AI
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginBottom: "30px"
          }}
        >

          <input
            type="text"
            value={query}
            onChange={(e) =>
              setQuery(
                e.target.value
              )
            }
            placeholder="Describe your outfit needs..."
            style={{
              flex: 1,
              padding: "16px",
              fontSize: "16px",
              borderRadius: "12px",
              border: "1px solid #475569",
              outline: "none",
              background: "#334155",
              color: "#fff"
            }}
          />

          <button
            onClick={handleSubmit}
            style={{
              padding:
                "16px 30px",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
              background:
                "#3b82f6",
              color: "#fff"
            }}
          >
            Recommend
          </button>

        </div>

        {
          loading && (

            <LoadingSpinner />

          )
        }

        {
          !loading &&
          intent && (

            <div
              style={{
                background: "#ffffff",
                color: "#111827",
                padding: "20px",
                borderRadius: "16px",
                marginBottom: "25px",
                boxShadow:
                  "0 8px 20px rgba(0,0,0,0.1)"
              }}
            >

              <h2
                style={{
                  marginTop: 0
                }}
              >
                🤖 AI Understood
              </h2>

              <p>
                👨 Gender:
                <strong>
                  {" "}
                  {intent.gender}
                </strong>
              </p>

              <p>
                🎉 Occasion:
                <strong>
                  {" "}
                  {intent.occasion}
                </strong>
              </p>

              <p>
                👔 Style:
                <strong>
                  {" "}
                  {intent.wear_type}
                </strong>
              </p>

              <p>
                💰 Budget:
                <strong>
                  {" "}
                  {
                    intent.budget
                      ? `₹${intent.budget}`
                      : "Not Specified"
                  }
                </strong>
              </p>

            </div>

          )
        }

        {
          !loading &&
          results.length > 0 && (

            <RecommendationList
              recommendations={
                results
              }
            />

          )
        }

        {
          !loading &&
          results.length === 0 &&
          !intent && (

            <div
              style={{
                textAlign: "center",
                marginTop: "80px",
                color: "#94a3b8"
              }}
            >

              <h2>
                Try a query like:
              </h2>

              <p>
                "I am attending a wedding"
              </p>

              <p>
                "Suggest a casual vacation outfit"
              </p>

              <p>
                "Need a party outfit under ₹5000"
              </p>

            </div>

          )
        }

      </div>
      <div
  style={{
    marginTop: "60px",
    padding: "25px",
    textAlign: "center",
    borderTop:
      "1px solid rgba(255,255,255,0.15)",
    color: "#94a3b8"
  }}
>

  <h3
    style={{
      marginBottom: "10px",
      color: "#e2e8f0"
    }}
  >
    AI Fashion Assistant
  </h3>

  <p>
    Powered by React ⚛️ • Node.js 🚀 • MongoDB 🍃 • Gemini AI 🤖
  </p>

  <p
    style={{
      fontSize: "14px",
      marginTop: "10px"
    }}
  >
    Personalized Outfit Recommendations using
    Artificial Intelligence and Compatibility Scoring
  </p>

  <p
    style={{
      fontSize: "13px",
      marginTop: "15px",
      color: "#64748b"
    }}
  >
    © 2026 Dare X AI Internship Project
  </p>

</div>

    </div>

  );
}

export default Home;