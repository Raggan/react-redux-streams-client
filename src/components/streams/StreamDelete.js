import React from "react";
import Modal from "../Modal";

const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );
  return (
    <div>
      <Modal
        title="Delete Stream"
        content="Do you really want to delete stream"
        actions={actions}
      />
    </div>
  );
};

export default StreamDelete;
