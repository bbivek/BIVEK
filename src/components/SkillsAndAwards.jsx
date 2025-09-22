import React from "react";

const SkillsAndAwards = () => {
  const skillCategories = [
    {
      title: "Spectral and Spatial Analysis",
      skills: [
        "ArcGIS Pro & ArcGIS Online",
        "Image processing (ENVI, Agisoft Metashape Pro, Pix4D)",
        "Scripting for automated spectral image analysis",
      ],
      className: "skill-card-green",
    },
    {
      title: "Hardware Platforms",
      skills: [
        "UAVs (DJI Inspire 2, Matric 300 RTK, Mavic)",
        "Hyperspectral devices (Ci-710s SpectraVue leafspectrometer)",
        "GPS (Leica Viva GS14 GNSS)",
      ],
      className: "skill-card-blue",
    },
    {
      title: "Programming & Data Analysis",
      skills: [
        "Parametric & non-parametric approaches for preprocessing, visualization, and analysis",
        "Statistical Modeling: Non-linear models, GLM/GLMM, GAM, multivariate analysis",
        "Machine Learning: Random Forest, feature selection, classification & regression modeling",
        "Dimension Reduction: PCA, sPLS-DA, discriminant analysis",
        "Programming Languages: R, SAS, Python",
      ],
      className: "skill-card-purple",
    },
    {
      title: "Experimental Skills",
      skills: [
        "Design and execution of outdoor and indoor experiments",
        "Insect Biology: Colony maintenance, stress & damage assessments",
        "Plant & Soil Analysis: Spectral reflectance, vegetation indices, nutrient/stress diagnostics",
      ],
      className: "skill-card-orange",
    },
    {
      title: "Trainings",
      skills: [
        "Environmental Risk Assessment",
        "Science Communication - public speaking ",
        "Human Subjects Safety Training",
        "Online GIS & Open-Source Remote Sensing Workshop (Ohio View, 2024)",
        "Remote Sensing Methods Workshop (UV-VIS-NIR Spectroradiometry)",
        "MAPTHON: OpenStreetMap Training (ICIMOD, 2017)",
      ],
      className: "skill-card-pink",
    },
    {
      title: "Certifications",
      skills: ["FAA Part 107 UAS Certificate"],
      className: "skill-card-teal",
    },
  ];

  const awards = [
    {
      title: "NSF Research Traineeship ",
      subtitle: "Team-TERRA Fellowship • 2022-2024 • $38,500",
      description:
        "Interdisciplinary research training with focus on environmental risk assessment and stakeholder engagement. ",
    },
    {
      title: "Clifford R. Burr Memorial Scholarship",
      subtitle: "University of Connecticut • Multiple Years • $45,000",
      description:
        "Academic excellence scholarship for outstanding graduate students.",
    },
    {
      title: "Conference Travel Awards",
      subtitle: "Multiple Conferences",
      description:
        "Travel funding for research presentations at national conferences.",
    },
    {
      title: "Graduate Research / Teaching Assistantship",
      subtitle: "University of Connecticut • Full PhD Duration",
      description:
        "Stipends / scholarship / fellowship with full tuition waiver throughout graduate studies.",
    },
  ];

  return (
    <>
      <div className="section-container">
        {/* Skills Section */}
        <h2 className="section-title"> Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div key={i} className="skill-card">
              <h3 className="skill-title">{cat.title}</h3>
              <ul className="skill-list">
                {cat.skills.map((s, j) => (
                  <li key={j}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <h2 className="section-title">Fellowship | Scholarship</h2>
        <div className="awards-container">
          {awards.map((a, i) => (
            <div key={i} className="award-item">
              <h3 className="award-title">{a.title}</h3>
              <p className="award-subtitle">{a.subtitle}</p>
              <p className="award-description">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsAndAwards;
