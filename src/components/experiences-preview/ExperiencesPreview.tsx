import "./ExperiencesPreview.css";

import exp1 from "../../assets/images/naturewalk.jpg";
import exp2 from "../../assets/images/seeds.webp";
import exp3 from "../../assets/images/bird.jpg";
import exp4 from "../../assets/images/holding.webp";
import exp5 from "../../assets/images/seedschool.webp";
import exp6 from "../../assets/images/cooking.png";

const experiences = [
  {
    title: "Nature Walks",
    description:
      "Explore peaceful trails and scenic landscapes.",
    image: exp1,
    large: true,
  },
  {
    title: "Seed Tours",
    description:
      "Discover indigenous seeds and biodiversity.",
    image: exp2,
  },
  {
    title: "Bird Watching",
    description:
      "Observe diverse bird species in natural habitats.",
    image: exp3,
  },
  {
    title: "Farm Experiences",
    description:
      "Experience sustainable farming practices.",
    image: exp4,
    large: true,
  },
  {
    title: "Cultural Evenings",
    description:
      "Celebrate heritage through music and storytelling.",
    image: exp5,
  },
  {
    title: "Food Workshops",
    description:
      "Learn traditional cooking and food preparation.",
    image: exp6,
    large: true,
  },
];

const ExperiencesPreview = () => {
  return (
    <section className="experiences-section">
      <div className="container">

        <div className="experience-heading">
          <span>Experiences</span>
          <h2>Moments Worth Remembering</h2>
        </div>

        <div className="experience-grid">

          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`experience-card ${
                experience.large ? "large-card" : ""
              }`}
            >
              <img
                src={experience.image}
                alt={experience.title}
              />

              <div className="experience-overlay">
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ExperiencesPreview;