import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <>
      <main>
        <div className="container py-4 text-start">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 id="name" className="display-5 fw-bold">
                Custom jumbotron
              </h1>
              <p className="col-md-8 fs-4">
                Using a series of utilities, you can create this jumbotron, just
                like the one in previous versions of Bootstrap.{" "}
              </p>
              <button className="btn btn-outline-dark" type="button">
                Update informations
              </button>
              {/* <!-- TODO: update user information page and update when you click save button then you can redirect to profile page --> */}
            </div>
          </div>

          {/* <!-- TODO: Use this containers and when you click the buttons, open a new page with a form of actor and agency or you can use modals --> */}
          <div className="row align-items-md-stretch">
            <div className="col-md-6">
              <div className="h-100 p-5 text-bg-dark rounded-3">
                <h2 id="agency-name">Create Agency</h2>
                <p id="agency-bio">
                  Swap the background-color utility and add a `.text-*` color
                  utility to mix up the jumbotron look. Then, mix and match with
                  additional component themes and more.
                </p>
                <p id="location"></p>
                <button className="btn btn-outline-light" type="button">
                  Create a new one
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="h-100 p-5 bg-light border rounded-3">
                <h2>Add Actors</h2>
                <p>
                  Or, keep it light and add a border for some added definition
                  to the boundaries of your content. Be sure to look under the
                  hood at the source HTML here as we've adjusted the alignment
                  and sizing of both column's content for equal-height.
                </p>
                <button className="btn btn-outline-secondary" type="button">
                  Go to Add Actors
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
