import React, { useState } from "react";
import Modal from "react-modal";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useAllUsers } from "../../util/useUserData";

// import Loginpage.css

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "30rem",
  },

  overlay: {
    background: "rgb(0 0 0 / 75%)",
  },
};

function AssignCrew() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  function handleSelect(event) {
    const selected = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(selected);
  }

  return (
    <div>
      <Button
        className="button-color"
        size="sm"
        onClick={() => setModalIsOpen(true)}
      >
        Assign Crew
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <i
          className="fa fa-user-plus fa-2x text-black d-inline-block m-3"
          aria-hidden="true"
        ></i>
        <h3 className="text-black d-inline-block">Assign Crew</h3>
        <p>
          If you want to assign a crew to this job, please select the crew
          members from the list below. Press ctrl to select multiple options.
        </p>
        <form>
          <div className="form-group row mt-2">
            <select multiple onChange={handleSelect}>
              {useAllUsers().map((user) => {
                return (
                  <option value={user.id + " " + user.firstName}>
                    {user.id} {user.firstName} {user.lastName}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-group row mt-2">
            <label className="col-sm-6 col-form-label">
              Chosen Crew Members
            </label>
            {selectedOptions.map((option) => {
              return <p>{option} </p>;
            })}
          </div>
        </form>

        <div className="d-flex justify-content-end mt-3">
          <br></br>
          <Button type="submit" className="button-color">
            Submit
          </Button>
          <Button
            className="button-color"
            size="sm"
            onClick={() => setModalIsOpen(false)}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default AssignCrew;
