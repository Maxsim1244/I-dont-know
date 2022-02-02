import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>Thet page can not be found</p>
      <Link to="/">
        <button>Back to the homepage</button>
      </Link>
    </div>
  );
};
export default NotFound;
