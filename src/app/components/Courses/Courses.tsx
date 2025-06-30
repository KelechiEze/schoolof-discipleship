import React from 'react';
import ModuleCard from '../ModuleCard/ModuleCard';
import './Courses.css';

const Courses = () => {
  const modules = [
    {
      id: 1,
      title: "Module One",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      items: [
        "New Creation",
        "The Concept of the Trinity",
        "The Holy Spirit",
        "Personal and Congregational Devotion",
        "Fellowship",
        "The Art of Discipleship (Part 1)"
      ]
    },
    {
      id: 2,
      title: "Module Two",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      items: [
        "Christian Culture",
        "The Art of Discipleship (Part 2)",
        "Missional Community (Part 1)",
        "Accountability",
        "Stewardship"
      ]
    },
    {
      id: 3,
      title: "Module Three",
      image: "/moloi.jpg",
      items: [
        "Missional Community (Part 2)",
        "Missions",
        "Ministry",
        "Marriage",
        "Multiplying Churches"
      ]
    }
  ];

  return (
    <section className="courses-section">
      <div className="courses-container">
        <div className="courses-header">
          <h1 className="courses-title">COURSES</h1>
          <p className="courses-description">
            The School of Discipleship is a Five-Month comprehensive program that
            covers the fundamentals of Christian Discipleship, including spiritual
            formation and leadership development. The program is structured to deepen
            your understanding of God&apos;s words and make you grow therein.
          </p>
        </div>
        
        <div className="modules-header">
          <h2 className="modules-title">Modules</h2>
        </div>
        
        <div className="modules-grid">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;