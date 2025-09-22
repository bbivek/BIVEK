import React from "react";

const Outreach = ({ outreach }) => (
  <section className="section-container">
    <h2 className="section-title">Outreach Presentations / Talks</h2>
    <div className="publications-container">
      {outreach.map((pub, i) => (
        <div key={i} className="publication-item">
          <div className="publication-header">
            <span
              className={`publication-type ${
                pub.type === "Oral Presentation"
                  ? "oral"
                  : pub.type === "Extension Event"
                  ? "extension"
                  : "paper"
              }`}
            >
              {pub.type || "Presentation"}
            </span>
            {pub.date && <span className="publication-date">{pub.date}</span>}
          </div>

          <h3 className="publication-title">{pub.title}</h3>

          {/* If multiple events exist under one title */}
          {pub.events ? (
            <ul className="publication-events">
              {pub.events.map((event, j) => (
                <li key={j} className="event-item">
                  <p className="publication-venue">{event.venue}</p>

                  {event.details && (
                    <>
                      {Array.isArray(event.details) ? (
                        event.details.map((d, k) => (
                          <p key={k} className="publication-details">
                            {d}
                          </p>
                        ))
                      ) : (
                        <p className="publication-details">{event.details}</p>
                      )}
                    </>
                  )}

                  {event.date && (
                    <span className="publication-date">{event.date}</span>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <>
              {pub.venue && <p className="publication-venue">{pub.venue}</p>}
              {pub.location && (
                <p className="publication-location">{pub.location}</p>
              )}
            </>
          )}

          {/* ✅ Render images if available */}
          {pub.images && pub.images.length > 0 && (
            <div className="publication-images">
              {pub.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${pub.title} image ${idx + 1}`}
                  className="publication-img"
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Outreach;
