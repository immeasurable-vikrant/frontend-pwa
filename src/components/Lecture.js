import React, { useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';

const Lecture = () => {
  const history = useHistory();

  useEffect(() => {
    const url = localStorage.getItem('url');
    // if (url) {
    console.log('URLLLLLLLL', url);
    localStorage.removeItem('url');
    history.push(`/view-lecture/${url}`);
    // }
  }, []);

  return <div />;
};
export default withRouter(Lecture);
