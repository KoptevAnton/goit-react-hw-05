import s from './NotFoundPage.module.css';

import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container">
      <Link className={s.goBackLink} to="/">
        Back to Homepage
      </Link>
      <h1 className={s.title}>Oops... something went wrong page not found</h1>
    </div>
  );
};

export default NotFoundPage;
