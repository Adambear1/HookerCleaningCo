import React from "react";
import MissionStatement from "../MissionStatement";
import AboutTestimonials from "../AboutTestimonials";
import AboutUs from "../AboutUs";
import AboutStaffContainer from "../AboutStaffContainer";

function AboutMediaContainer() {
  return (
    <div class="row">
      <div class="col-4">
        <div class="list-group" id="list-tab" role="tablist">
          <a
            class="list-group-item list-group-item-action active"
            id="missionStatement"
            data-toggle="list"
            href="#list-home"
            role="tab"
            aria-controls="home"
          >
            Mission and Values
          </a>
          <a
            class="list-group-item list-group-item-action"
            id="list-profile-list"
            data-toggle="list"
            href="#list-profile"
            role="tab"
            aria-controls="profile"
          >
            Our Staff
          </a>
          <a
            class="list-group-item list-group-item-action"
            id="list-messages-list"
            data-toggle="list"
            href="#list-messages"
            role="tab"
            aria-controls="messages"
          >
            Testimonials
          </a>
          <a
            class="list-group-item list-group-item-action"
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
      <div class="col-8">
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="list-home"
            role="tabpanel"
            aria-labelledby="missionStatement"
          >
            <MissionStatement />
          </div>

          <div
            class="tab-pane fade"
            id="list-profile"
            role="tabpanel"
            aria-labelledby="list-profile-list"
          >
            <AboutStaffContainer />
          </div>
          <div
            class="tab-pane fade"
            id="list-messages"
            role="tabpanel"
            aria-labelledby="list-messages-list"
          >
            <AboutTestimonials />
          </div>
          <div
            class="tab-pane fade"
            id="list-settings"
            role="tabpanel"
            aria-labelledby="list-settings-list"
          >
            ...
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMediaContainer;
