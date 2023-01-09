import { Link } from 'react-router-dom';

export const GoBackBtn = ({ url }) => {
  return <Link to={url}>Go Back</Link>;
};
