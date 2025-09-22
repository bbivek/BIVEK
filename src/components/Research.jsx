import React from "react";

const Research = () => {
  const researchProjects = [
    {
      title:
        "Remote sensing of Potato leafhopper stress and Nitrogen deficiency in beans using multispectral drone imagery",
      description:
        "This study integrates UAV-based multispectral imaging and advanced image processing techniques to detect and quantify crop stress in beans. The research focuses on differentiating biotic stress from Empoasca fabae (potato leafhopper) infestation and abiotic stress caused by nitrogen deficiency. Through field trials, spectral and spatial analyses, and statistical modeling, the project demonstrates how multispectral reflectance signatures can be leveraged for early stress detection, supporting precision pest management and improved crop health monitoring.",
    },
    {
      title:
        "Hyperspectral leaf-level sensing of stress induced by Potato leafhopper in beans",
      description:
        "This project investigates the narrow-band spectral responses of bean cultivars subjected to Empoasca fabae infestation. By using hyperspectral sensors in both greenhouse and field experiments, the research characterizes early biochemical and physiological changes in leaf reflectance under varying levels and durations of pest pressure. The study applies spectral feature selection and statistical modeling to identify key wavelengths and vegetation indices that accurately detect stress. The findings contribute to the development of hyperspectral tools for early pest detection and integrated pest management strategies.",
    },
    {
      title:
        "Assessment of Risk from Invasive Insects to Apple Orchards in Connecticut",
      description:
        "As part of the NSF Team-TERRA Fellowship, this interdisciplinary research assessed the potential threats of invasive insect pests to apple orchards in Connecticut. The project combined GIS-based spatial analysis, ecological modeling, entomological surveys, and stakeholder engagement to evaluate infestation risks and predict future pest distribution. In addition to technical analysis, the fellowship emphasized science communication and risk communication, equipping the research team to translate findings into actionable strategies for sustainable orchard management and the mitigation of economic losses.",
    },
    {
      title:
        "Comparison of Geospatial Interpolation Techniques for Soil Fertility Mapping",
      description:
        "This undergraduate thesis research, conducted in collaboration with scientists at the Nepal Agricultural Research Council (NARC), explored methods for assessing and visualizing soil nutrient variability to support data-driven farm management. Soil samples collected across a watershed were integrated with satellite imagery and geospatial datasets to generate fertility maps of key soil properties. Multiple GIS-based interpolation techniques were compared to evaluate their accuracy in predicting soil nutrient status. The published findings highlight effective approaches for optimizing fertilizer application and promoting sustainable agricultural practices in smallholder farming systems.",
    },
  ];

  return (
    <section className="section-container">
      <h2 className="section-title">Major Research Projects</h2>
      <div className="research-container">
        {researchProjects.map((proj, i) => (
          <div key={i} className="research-card">
            <h3 className="research-title">{proj.title}</h3>
            <p className="research-description">{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Research;
