import React from "react";

const Navbar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "research", label: "Research" },
    { id: "experience", label: "Experience" },
    { id: "outreach", label: "Outreach" },
    { id: "skills-awards", label: "Skills & Awards" }, // combined section
  ];

  return (
    <nav className="navbar">
      <div className="nav-items">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={activeSection === item.id ? "active" : ""}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
