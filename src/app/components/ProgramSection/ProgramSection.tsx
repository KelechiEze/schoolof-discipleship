import React from "react";
import { Book, User, Home, Calendar } from "lucide-react";
import "./ProgramSection.css"; // Create and include this CSS file

const ProgramSection = () => {
  return (
    <section className="program-section">
      <h2 className="program-title">Discover Our Program</h2>
      <p className="program-description">
        The School of Discipleship offers a unique, immersive experience combining biblical
        education with practical ministry training in a supportive Christian community.
      </p>

      <div className="program-grid">
        <div className="program-card">
          <Book className="program-icon" />
          <h3>Biblical Foundation</h3>
          <p>
            Comprehensive study of Scripture and theology to build a strong spiritual foundation.
          </p>
        </div>
        <div className="program-card">
          <User className="program-icon" />
          <h3>Personal Discipleship</h3>
          <p>
            One-on-one mentoring and small group experiences focused on spiritual formation.
          </p>
        </div>
        <div className="program-card">
          <Home className="program-icon" />
          <h3>Community Living</h3>
          <p>
            Experience authentic Christian community in our island campus setting.
          </p>
        </div>
        <div className="program-card">
          <Calendar className="program-icon" />
          <h3>Ministry Practice</h3>
          <p>
            Hands-on ministry opportunities to apply learning in real-world settings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
