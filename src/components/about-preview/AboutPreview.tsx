import "./AboutPreview.css";

import aboutImage from "../../assets/images/SSN_din.webp";

const AboutPreview = () => {
  return (
    <section className="about-preview">
      <div className="container about-preview-container">

        <div className="about-preview-image">
          <img
            src={aboutImage}
            alt="Indigenous Seeds Village"
          />
        </div>

        <div className="about-preview-content">

          <span className="about-preview-tag">
            Our Story
          </span>

          <h2>
            Rooted in Heritage,
            Inspired by Nature
          </h2>

          <p>
            Indigenous Seeds Village is a unique retreat
            where hospitality, culture, and nature come
            together. Located within a tranquil setting,
            the village offers guests an opportunity to
            reconnect with indigenous knowledge,
            experience authentic cuisine, and enjoy
            peaceful accommodation inspired by Kenya's
            rich agricultural heritage.
          </p>

          <p>
            Whether you are visiting for relaxation,
            conferences, cultural experiences, or
            exploration, every stay contributes to the
            preservation of biodiversity and indigenous
            food systems.
          </p>

          <button className="about-preview-btn" onClick={() => window.location.href = "/about"}>
            Learn More 
          </button>

          <div className="about-stats">

            <div className="stat-card">
              <h3>15+</h3>
              <p>Guest Rooms</p>
            </div>

            <div className="stat-card">
              <h3>100+</h3>
              <p>Conference Capacity</p>
            </div>

            <div className="stat-card">
              <h3>15+</h3>
              <p>Experiences</p>
            </div>

            <div className="stat-card">
              <h3>100%</h3>
              <p>Nature Inspired</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutPreview;