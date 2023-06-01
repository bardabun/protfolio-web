import React, { useEffect, useRef, useState } from "react";
import "./carporate.css";
import { motion } from "framer-motion";
import Card from "./Card";
import useIntersectionObserver from "../../hook/IntersectionObserver";

/* IMPORT MEDIA */
import roadUp from "../../assets/images/roadUp.png";
import reactNative from "../../assets/images/reactNative.png";
import expo from "../../assets/images/expo.png";
import googleMaps from "../../assets/images/googleMaps.png";
import firebase from "../../assets/images/firebase.png";
import showRide from "../../assets/images/showRide.mp4";
import joiningReq from "../../assets/images/joiningReq.mp4";

interface Props {}

const Work: React.FC<Props> = () => {
  const showRideVideo = useRef(null);
  const joiningReqVideo = useRef(null);
  const [isShowRideHovered, setIsShowRideHovered] = useState(false);
  const [isJoiningReqHovered, setIsJoiningReqHovered] = useState(false);

  const [showRideRef, isShowRideInView] = useIntersectionObserver();
  const [joiningReqRef, isJoiningReqInView] = useIntersectionObserver();
  const [reactNativeRef, isReactNativeInView] = useIntersectionObserver();
  const [expoRef, isExpoInView] = useIntersectionObserver();
  const [googleMapsRef, isGoogleMapsInView] = useIntersectionObserver();
  const [firebaseRef, isFirebaseInView] = useIntersectionObserver();

  useEffect(() => {
    const el1 = showRideVideo.current;
    const el2 = joiningReqVideo.current;
    console.log(el1);
    console.log(el2);
  }, []);
  function onClickShowRide() {
    showRideVideo.current.play();
  }
  function onClickJoiningReq() {
    joiningReqVideo.current.play();
  }
  function onHoverShowRide() {
    if (!isShowRideHovered) setIsShowRideHovered(true);
  }
  function onHoverJoiningReq() {
    if (!isJoiningReqHovered) setIsJoiningReqHovered(true);
  }

  return (
    <div className="roll-work-page">
      <img src={roadUp} className="roadUp" />
      <Card margin="2rem 0rem 1rem 9rem" gridArea="intro">
        <p className="intro-text">
          With the help of a couple of my friends, I worked on an amazing
          project.
        </p>
        <h1 className="card-title">
          <u>Carporate</u>
        </h1>
        <p className="intro-text">
          Our community, our university's fellas, needed more{" "}
          <u>transportation solutions</u> when moving around in and out of the
          city. <br />
          <br />
          So our idea was to develop carpooling platform that provides{" "}
          <u>an easy way to find a shared ride!</u>
          <br /> We called it <b style={{ color: "#282d35" }}>Carporate </b>
          <span style={{ fontSize: "1.7rem" }}>🚗</span>
          <br />
          <br />
          Using the platform, users will be able to view only relevant trips and
          will be able to pick up at the most convenient location for the driver
          and passenger
        </p>
      </Card>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isShowRideHovered ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="showRideExp"
      >
        <p className="showRideExp-text">
          ✨ Click on 'Show Ride On Map' to see an integration example of
          Carporate with Google Maps API
        </p>
      </motion.div>
      <motion.div
        ref={showRideRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: isShowRideInView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="showRide"
      >
        <h2>Show Ride On Map</h2>
        <motion.video
          ref={showRideVideo}
          onClick={onClickShowRide}
          onHoverStart={onHoverShowRide}
          src={showRide}
        />
      </motion.div>
      <h1 className="tech">Technology we used 👇</h1>
      <motion.div
        ref={reactNativeRef}
        initial={{ opacity: 0, x: -250 }}
        animate={{
          opacity: isReactNativeInView ? 1 : 0,
          x: isReactNativeInView ? 0 : -250,
        }}
        transition={{ duration: 1, delay: 0.1 }}
        className="card-reactNative"
      >
        <h2>React Native</h2>
        <img src={reactNative} />
      </motion.div>
      <motion.div
        ref={expoRef}
        initial={{ opacity: 0, x: 250 }}
        animate={{
          opacity: isExpoInView ? 1 : 0,
          x: isExpoInView ? 0 : 250,
        }}
        transition={{ duration: 1, delay: 0.2 }}
        className="card-expo"
      >
        <h2>Expo</h2>
        <img src={expo} />
      </motion.div>
      <motion.div
        ref={googleMapsRef}
        initial={{ opacity: 0, x: -250 }}
        animate={{
          opacity: isGoogleMapsInView ? 1 : 0,
          x: isGoogleMapsInView ? 0 : -250,
        }}
        transition={{ duration: 1, delay: 0.3 }}
        className="card-googleMaps"
      >
        <h2>Google Maps</h2>
        <img src={googleMaps} />
      </motion.div>
      <motion.div
        ref={firebaseRef}
        initial={{ opacity: 0, x: 250 }}
        animate={{
          opacity: isFirebaseInView ? 1 : 0,
          x: isFirebaseInView ? 0 : 250,
        }}
        transition={{ duration: 1, delay: 0.4 }}
        className="card-firebase"
      >
        <h2>Firebase</h2>
        <img src={firebase} />
      </motion.div>
      <Card margin="10rem 15rem 1rem 0rem" gridArea="techChall">
        <h1 className="card-title">
          💭 <u>Our Technology Challenge</u>
        </h1>
        <p className="techChall-text">
          We wanted to <i>develop an algorithm</i> for finding an{" "}
          <u>ideal pick-up point</u> <br />
          along the route for the joining student and the driver
          <br /> <br />
          Using the driver's route and the participant's location, the algorithm
          determines the ideal pick-up location to reduce waiting time and helps
          plan the trip.
        </p>
      </Card>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isJoiningReqHovered ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="joiningReqExp"
      >
        <ul className="joiningReqExp-text">
          <li>
            You can see at a glance how as soon as there is a passenger who
            wants to join the ride, the driver receives an alert on the device.{" "}
          </li>
          <li>
            In the app, a window pops up for the driver with the passenger's
            name, where to pick him up and by how much time the trip will be
            extended.
          </li>
          <li>
            Finally, the driver has to approve or reject the passenger's
            request.
          </li>
        </ul>
      </motion.div>
      <motion.div
        ref={joiningReqRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: isJoiningReqInView ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="joiningReq"
      >
        <h2>Show A Joining Request</h2>
        <motion.video
          ref={joiningReqVideo}
          onClick={onClickJoiningReq}
          onHoverStart={onHoverJoiningReq}
          src={joiningReq}
        />
      </motion.div>
    </div>
  );
}
export default Work;
