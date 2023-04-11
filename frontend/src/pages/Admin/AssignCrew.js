import React, { useState } from "react";
import Modal from "react-modal";
import { Button } from "reactstrap";
import { useAllCrewMembers } from "../../util/useUserData";
import axios from "axios";
import swal from "sweetalert";

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

function AssignCrew(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  function handleSelect(event) {
    const selected = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(selected);
  }

  function selectAll() {
    const options = Array.from(document.querySelectorAll("option"));
    setSelectedOptions(options.map((option) => option.value));
  }

  function cancelAssign() {
    setModalIsOpen(false);
    setSelectedOptions([]);
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const crewMemberIds = selectedOptions.map((option) => option.value);

      const response = await axios.post(`/api/admin/sendJobAssignments`, {
        jobNumber: props.jobNumber,
        crewMemberIds: selectedOptions,
      });

      if (response.status === 200) {
        swal("Success", "Crew members assigned", "success");
        setModalIsOpen(false);
      }
    } catch (error) {
      swal("Error", "Something went wrong", "error");
    }
  };

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
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        keyboard={false}
        backdrop="static"
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
        <p> Job number: {props.jobNumber}</p>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group row mt-2">
            <select key={1} multiple onChange={handleSelect}>
              {useAllCrewMembers().map((crewMember) => {
                return (
                  <option key={crewMember.id} value={crewMember.id}>
                    {crewMember.id} {crewMember.firstName} {crewMember.lastName}
                  </option>
                );
              })}
            </select>
            <Button className="button-color" size="sm" onClick={selectAll}>
              Select All
            </Button>
          </div>

          <div className="form-group row mt-2">
            <label className="col-sm-6 col-form-label">
              Chosen Crew Members:
            </label>
            {selectedOptions.map((option) => {
              return <p key={option.value}>{option}</p>;
            })}
          </div>
          <div className="d-flex justify-content-end mt-3">
            <br></br>
            <Button type="submit" className="button-color">
              Submit
            </Button>
            <Button
              className="button-color"
              size="sm"
              onClick={() => cancelAssign()}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default AssignCrew;
