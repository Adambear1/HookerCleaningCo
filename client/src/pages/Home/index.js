import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Modal from "../../components/Modal";
import HomeBodyCards from "../../components/HomeBodyCards";

function Home() {
  return (
    <div>
      <Jumbotron />
      <div className="container">
        <div className="row justify-content-center">
          <Modal />
        </div>
        <HomeBodyCards />
      </div>
    </div>
  );
}

export default Home;
