const RestaurantInfo = ({ restaurantsInfo, isLoading }) => {
  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    locality,
    city,
    isOpen,
    sla: { slaString },
    availability: { nextOpenTimeMessage },
  } = restaurantsInfo;
  return (
    !isLoading && (
      <div
        className="menu-card"
        style={{
          maxWidth: "700px",
          margin: "32px auto 0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <div className="card-content">
          <h2
            className="card-title"
            style={{
              fontSize: "2rem",
              marginBottom: "1rem",
            }}
          >
            {name}
          </h2>
          <div
            className="card-rating-time"
            style={{
              marginBottom: "10px",
              fontSize: "1.08rem",
            }}
          >
            <span style={{ color: "#39c46a" }}>
              <b>★ {avgRating}</b> ({totalRatingsString})
            </span>
            <span className="dot">•</span>
            <span style={{ fontWeight: "600" }}>{costForTwoMessage}</span>
            <span className="dot">•</span>
            {isOpen ? (
              <span style={{ fontWeight: "600" }}>Open</span>
            ) : (
              <span style={{ color: "red" }}>{nextOpenTimeMessage}</span>
            )}
          </div>
          <div
            className="card-cuisines"
            style={{
              color: "#ff5510",
              fontWeight: 500,
              marginBottom: "10px",
            }}
          >
            {cuisines.join(", ")}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "8px",
            }}
          >
            <span>Outlet</span>
            <span style={{ color: "#888" }}>{[locality, city].join(", ")}</span>
          </div>
          <div
            style={{
              fontSize: "1rem",
              fontWeight: 500,
              color: "#232323",
            }}
          >
            {slaString}
          </div>
        </div>
      </div>
    )
  );
};

export default RestaurantInfo;
