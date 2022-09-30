import Join from "./Join";
import "../css/wrapper.css";
import Subscribe from "./Subscribe";
import Why from "./Why";

const Wrapper = () => {
  return (
    <div className="container">
      <Join />
      <div className="row-container">
        <Subscribe />
        <Why />
      </div>
    </div>
  );
};

export default Wrapper;
