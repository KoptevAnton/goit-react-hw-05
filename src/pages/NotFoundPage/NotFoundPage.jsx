// import s from './NotFoundPage.module';

import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p>Oops... something went wrong page not found</p>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
}

export default NotFoundPage