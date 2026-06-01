import "./AccommodationPreview.css";

import room1 from "../../assets/images/SSN_red.webp";
import room2 from "../../assets/images/SSN_pink.webp";
import room3 from "../../assets/images/SSN_bed.webp";

import { Link } from "react-router-dom";

const rooms = [
  {
    id: 1,
    title: "Single Deluxe Room",
    image: room1,
    description:
      "Comfortable self-contained room with one bed, private bathroom, workspace, and garden views.",
    occupancy: "1 Guest",
  },

  {
    id: 2,
    title: "Double Deluxe Room",
    image: room2,
    description:
      "Spacious self-contained room with a double bed, modern amenities, and a relaxing atmosphere.",
    occupancy: "2 Guests",
  },

  {
    id: 3,
    title: "Heritage Garden Room",
    image: room3,
    description:
      "A tranquil retreat surrounded by nature, designed to provide comfort and connection to the environment.",
    occupancy: "2 Guests",
  },
];

const AccommodationPreview = () => {
  return (
    <section className="accommodation-preview">
      <div className="container">

        <div className="section-header">
          <span>Accommodation</span>

          <h2>
            Relax in Comfort,
            Surrounded by Nature
          </h2>

          <p>
            Our rooms combine modern comfort
            with a peaceful atmosphere inspired
            by indigenous heritage and nature.
          </p>
        </div>

        <div className="rooms-grid">

          {rooms.map((room) => (
            <div
              key={room.id}
              className="room-card"
            >
              <div className="room-image">
                <img
                  src={room.image}
                  alt={room.title}
                />
              </div>

              <div className="room-content">
                <h3>{room.title}</h3>

                <p>{room.description}</p>

                <div className="room-meta">
                  <span>{room.occupancy}</span>
                </div>

                <Link
                  to="/booking"
                  className="room-book-btn"
                >
                  Book This Room
                </Link>
              </div>
            </div>
          ))}

        </div>

        <div className="view-all-wrapper">
          <Link
            to="/accommodation"
            className="view-all-btn"
          >
            View All Rooms
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AccommodationPreview;