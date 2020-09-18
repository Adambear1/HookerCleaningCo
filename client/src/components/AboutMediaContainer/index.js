import React from "react";
import "./styles.css";
import MissionStatement from "../MissionStatement";
import AboutTestimonials from "../AboutTestimonials";
import AboutStaffContainer from "../AboutStaffContainer";
import History from "../History";

function AboutMediaContainer() {
  return (
    <div className="text-wrap row animate__animated animate__fadeIn">
      <div className="text-wrap col-4">
        <div className="text-wrap list-group" id="list-tab" role="tablist">
          <a
            className="text-wrap list-group-item list-group-item-action active text-wrap"
            id="missionStatement"
            data-toggle="list"
            href="#list-home"
            role="tab"
            aria-controls="home"
          >
            Mission, Values, & Philosophy
          </a>
          <a
            className="list-group-item list-group-item-action text-wrap"
            id="list-profile-list"
            data-toggle="list"
            href="#list-profile"
            role="tab"
            aria-controls="profile"
          >
            Our Staff
          </a>
          <a
            className="list-group-item list-group-item-action text-wrap testimonials-tab"
            id="list-messages-list"
            data-toggle="list"
            href="#list-messages"
            role="tab"
            aria-controls="messages"
          >
            Testimonials
          </a>
          <a
            className="list-group-item list-group-item-action text-wrap"
            id="list-settings-list"
            data-toggle="list"
            href="#list-settings"
            role="tab"
            aria-controls="settings"
          >
            Our History
          </a>
        </div>
      </div>
      <div className="col-8">
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="list-home"
            role="tabpanel"
            aria-labelledby="missionStatement"
          >
            <MissionStatement />
          </div>

          <div
            className="tab-pane fade"
            id="list-profile"
            role="tabpanel"
            aria-labelledby="list-profile-list"
          >
            <AboutStaffContainer />
          </div>
          <div
            className="tab-pane fade"
            id="list-messages"
            role="tabpanel"
            aria-labelledby="list-messages-list"
          >
            <AboutTestimonials />
          </div>
          <div
            className="tab-pane fade"
            id="list-settings"
            role="tabpanel"
            aria-labelledby="list-settings-list"
          >
            <History />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMediaContainer;
