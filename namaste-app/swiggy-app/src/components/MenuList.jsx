import { CDN_URL } from "../utils/static";

const MenuList = ({ restaurantsMenu }) => {
  return (
    <div
      className="menu-card"
      style={{
        maxWidth: "700px",
      }}
    >
      <h3 className="card-title" style={{ marginBottom: "1em" }}>
        Recommended ({restaurantsMenu ? restaurantsMenu.length : 0})
      </h3>
      <div
        className="restaurant-list"
        style={{
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        {(restaurantsMenu ?? []).map((item) => (
          <div
            key={item.card.info.id}
            className="card"
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              maxWidth: "680px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                flex: 2,
                padding: "18px 16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                  }}
                >
                  {item.card.info.name}
                </span>
                <span
                  style={{
                    color: "#26964b",
                    fontSize: "0.98rem",
                    fontWeight: 500,
                  }}
                >
                  ₹{item.card.info.price / 100}
                </span>
                <span
                  style={{
                    fontSize: "0.9rem",
                    color: "#26964b",
                    marginLeft: "8px",
                  }}
                >
                  60% OFF USE TRYNEW
                </span>
              </div>
              <div
                style={{
                  color: "#39c46a",
                  fontSize: "0.92rem",
                  margin: "8px 0",
                }}
              >
                ★ {item.card.info.ratings?.aggregatedRating?.rating ?? "4.4"} (
                {item.card.info.ratings?.aggregatedRating?.ratingCountV2 ??
                  "14"}
                )
              </div>
              <div
                style={{
                  fontSize: "0.98rem",
                  color: "#232323",
                }}
              >
                {item.card.info.description}
              </div>
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "8px",
              }}
            >
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="card-image"
                style={{
                  width: "95px",
                  height: "95px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
              <button
                className="header-login-btn"
                style={{ marginTop: "8px", minWidth: "100px" }}
              >
                ADD
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
