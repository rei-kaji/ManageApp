import React, { useState } from "react";

type Props = {};

const Index = (props: Props) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <main>
        <div className="container mt-5">
          <h1 id="actor-title" className="mb-5">
            List of Actors
          </h1>
          <div id="list-actor"></div>
        </div>
      </main>
    </>
  );
};

export default Index;
