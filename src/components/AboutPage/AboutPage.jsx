import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>Thank you for checking out In Vino Veritas!</p>
        <br />
        <ul>Technologies </ul>
      </div>
    </div>
  );
}

export default AboutPage;
