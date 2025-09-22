import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Research Assistant / Technician",
      company: "University of Connecticut",
      date: "August 2019 - August 2025",
      responsibilities: [
        "Led independent and collaborative research projects from inception to completion, including formulating research questions, conducting literature reviews, designing methodologies, analyzing data, and preparing manuscripts and reports.",
        "Designed and executed greenhouse, caged, and open-plot field trials to evaluate the effects of fertilization and potato leafhopper infestation on beans, including field preparation, treatment layouts, and experimental designs.",
        "Collected and analyzed hyperspectral and multispectral plant reflectance data using handheld spectroradiometers and UAV-mounted sensors; generated point clouds, orthomosaics, and raster datasets and modeled spectral responses to stress.",
        "Developed a standardized scoring method to classify the type and severity of potato leafhopper damage in beans and linked field-based ratings with hyperspectral signatures to identify stress-sensitive wavelengths and vegetation indices.",
        "Trained and supervised research interns in experimental design, insect handling, reflectance data collection, preprocessing, and image analysis workflows in Agisoft Metashape Professional and ArcGIS Pro.",
        "Maintained insect colonies and managed controlled-environment greenhouse experiments for stress physiology studies.",
        "Supported Integrated Pest Management (IPM) extension workshops by assisting in experimental demonstrations and stakeholder engagement.",
      ],
      images: [
        "/bivek/research1.JPG",
        "/bivek/research2.JPG",
        "/bivek/research3.JPG",
        "/bivek/research4.jpg",
        "/bivek/research5.JPG",
        "/bivek/research6.jpg",
        "/bivek/research7.jpg",
        "/bivek/research8.jpg",
        "/bivek/research9.jpg",
      ],
    },
    {
      title: "Research Intern",
      company: "Advanced Remote Sensing Imaging & Analytics Lab (ARIAL)",
      date: "June - August 2024",
      responsibilities: [
        "Collected plant samples and drone images from commercial fruit orchards",
        "Analyzed hyperspectral and multispectral data from fruit trees",
        "Used GPS devices for ground control point establishment",
      ],
      images: [
        "/bivek/intern1.jpg",
        "/bivek/intern2.jpg",
        "/bivek/intern3.jpg",
      ],
    },
    {
      title: "Agriculture Consultant",
      company: " Big Agricultural Farm Pvt. Ltd., Nepal",
      date: "September 2017 - June 2019",
      responsibilities: [
        "Trained farmers in organic cultivation and integrated pest management",
        "Supervised technicians in project planning and execution",
        "Provided training in data analysis using MS Office and R-stat",
      ],
      images: [
        "/bivek/big1.jpg",
        "/bivek/big2.jpg",
        "/bivek/big3.jpg",
        "/bivek/big4.jpg",
        "/bivek/big5.jpg",
      ],
    },

    {
      title: "Agriculture Technical Officer",
      company: " Brihat Agro Farm Pvt. Ltd., Nepal",
      date: "November 2018 – June 2019",
      responsibilities: [
        "Trained farmers and farmer groups in sustainable practices, including organic cultivation of vegetables, fruits, and cereals (rice, wheat, corn), integrated pest management, use of local resources for bio-pesticide and bio-fertilizer production, drip irrigation, vermiculture, and greenhouse cultivation.",

        "Supervised and trained technicians in project planning, experimental designs, field layouts, and documentation to support research and production programs.",

        "Delivered technical training in MS Office, R (statistical analysis), and ArcMap (GIS mapping), guiding technicians to analyze data and generate presentable maps for research and reporting.",

        "Conducted extensive field travel to train technicians, monitor production inputs, and validate produce quality and quantity for both commercial and research purposes.",
      ],
      images: [
        "/bivek/brihat1.JPG",
        "/bivek/brihat2.JPG",
        "/bivek/brihat3.JPG",
        "/bivek/brihat4.JPG",
        "/bivek/brihat5'.JPG",
        "/bivek/brihat6.JPG",
      ],
    },

    {
      title: "Undergraduate Research Volunteer",
      company: " Nepal Agricultural Research Council (NARC)",
      date: "August 2016 – July 2017",
      responsibilities: [
        "Collected and analyzed soil samples from randomly generated coordinates across a watershed catchment to assess spatial variability in soil fertility.",

        "Conducted land cover and land use classification using satellite imagery to characterize the study area.",

        "Evaluated and compared GIS-based interpolation techniques for mapping soil fertility parameters",
      ],
    },
  ];

  return (
    <div className="section-container">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <div>
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-company">{exp.company}</p>
              </div>
              <span className="experience-date">{exp.date}</span>
            </div>
            <ul className="experience-list">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>

            {exp.images && (
              <div
                className={`experience-images
                ${
                  exp.title.includes("Research Assistant")
                    ? "assistant-images"
                    : ""
                }
                ${exp.title.includes("Research Intern") ? "intern-images" : ""}
                ${
                  exp.title.includes("Agriculture Consultant")
                    ? "consultant-images"
                    : ""
                }
                ${
                  exp.title.includes("Agriculture Technical Officer")
                    ? "technical-images"
                    : ""
                }
              `}
              >
                {exp.images.map((img, idx) => (
                  <img key={idx} src={img} alt={`${exp.title} ${idx + 1}`} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
