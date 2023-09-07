import React from "react";
import "./PublicationCard.css";
import { Fade } from "react-reveal";

export default function PublicationCard({ pub, theme }) {
  function openPubinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div
      className="publication-card-div"
      style={{ backgroundColor: theme.highlight }}
    >
      <Fade bottom duration={2000} distance="40px">
        <div key={pub.id} onClick={() => openPubinNewTab(pub.url)}>
          <div className="publication-name-div">
            <p className="publication-Category" style={{ color: theme.text }}>
              {pub.Category}
            </p>
          </div>
          <div className="publication-name-div"></div>

          <p className="publication-name" style={{ color: theme.text }}>
            {pub.name}
          </p>
        </div>
        <p className="publication-description" style={{ color: theme.text }}>
          {pub.description}
        </p>
        <div className="publication-tools">
          <p className="publication-tools" style={{ color: theme.text }}>
          {pub.Tools}
        </p>
        </div>
        <div className="publication-details">
          <p className="publication-details subTitle" style={{ color: theme.text }}>
          {pub.createdAt}
        </p>
        </div>
      </Fade>
    </div>
  );
}
