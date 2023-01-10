import { Link } from 'react-router-dom';
import css from './MovieDetails.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
export const GoBackBtn = ({ url }) => {
  return (
    <Link to={url} className={css.goBackBtn}>
      <AiOutlineArrowLeft /> Go Back
    </Link>
  );
};
