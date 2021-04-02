import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeNavbarColor } from "../actions/NavbarActions";

const About = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeNavbarColor());
    return () => {
      dispatch(changeNavbarColor());
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Recipe App</h1>
      <p>Version 1.0.0</p>
    </div>
  );
};

export default About;
