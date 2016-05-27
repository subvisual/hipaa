import React from 'react';

function ErrorPage({ title, message, stackTrace }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{message}</p>
      {stackTrace && <pre>{stackTrace}</pre>}
    </div>
  );
}

ErrorPage.propTypes = {
  title: React.PropTypes.string.isRequired,
  message: React.PropTypes.string.isRequired,
  stackTrace: React.PropTypes.string.isRequired,
};

export default {

  path: '/error',

  action({ error = {} }) {
    const props = {
      title: 'Error',
      message: 'Oups, something went wrong!',
      stackTrace: process.env.NODE_ENV === 'production' ? null : error.stack,
    };

    if (error.status === 404) {
      props.title = 'Page Not Found';
      props.message = 'This page does not exist.';
    }

    return {
      title: props.title,
      component: ErrorPage,
      props,
    };
  },

};
