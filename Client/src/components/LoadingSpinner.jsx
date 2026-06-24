function LoadingSpinner() {

  return (

    <div
      style={{
        background: "#ffffff",
        color: "#111827",
        padding: "30px",
        borderRadius: "16px",
        textAlign: "center",
        marginBottom: "30px"
      }}
    >

      <div
        style={{
          width: "60px",
          height: "60px",
          border:
            "6px solid #e5e7eb",
          borderTop:
            "6px solid #2563eb",
          borderRadius: "50%",
          margin: "0 auto 20px auto",
          animation:
            "spin 1s linear infinite"
        }}
      />

      <h2>
        🤖 AI Stylist Working...
      </h2>

      <p>
        Understanding your query
      </p>

      <p>
        Matching outfit preferences
      </p>

      <p>
        Finding best recommendations
      </p>

    </div>

  );
}

export default LoadingSpinner;