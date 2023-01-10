import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MovieDetails.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const GoBackBtn = ({ url }) => {
  return (
    <Link to={url} className={css.goBackBtn}>
      <AiOutlineArrowLeft /> Go Back
    </Link>
  );
};

GoBackBtn.propTypes = {
  url: PropTypes.string,
};
