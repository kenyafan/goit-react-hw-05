import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="not_found">
      <h1>Page not found</h1>
      <Link to="/">Go home</Link>
    </div>
  );
};

export default NotFoundPage;
