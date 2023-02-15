import React, { useState } from "react";
import { useLoggedInUser } from "./useUserData";
import Modal from "react-modal";
import { Button } from "react-bootstrap";
import swal from "sweetalert";

function AvatarUploader() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "30rem",
      minWidth: "30rem",
    },

    overlay: {
      background: "rgb(0 0 0 / 75%)",
    },
  };

  const [avatar, setAvatar] = useState(null);
  const loggedUser = useLoggedInUser();
  const [imageUrl, setImageUrl] = useState(null);
  const maxFileSize = 1000000;

  function handleFileChange(event) {
    setAvatar(event.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      setImageUrl(reader.result);
    };
  }

  function handleUpload(event) {
    if (avatar.size > maxFileSize) {
      swal({
        title: "Error!",
        text: "File size is too big. Only 1MB allowed",
        icon: "error",
        button: false,
        timer: 1000,
      });
    } else {
      const formData = new FormData();
      const email = loggedUser.email;

      formData.append("avatar", avatar);

      fetch(`api/admin/getUser/${email}/avatar`, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });

      setImageUrl(null);
      setModalIsOpen(false);
      window.location.reload();
    }
  }

  return (
    <div>
      <Button
        className="button-color"
        size="sm"
        onClick={() => setModalIsOpen(true)}
      >
        Change Avatar
      </Button>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <i
          className="fa fa-plus-circle fa-2x text-black d-inline-block m-3"
          aria-hidden="true"
        ></i>
        <h3 className="text-black d-inline-block">Upload Avatar</h3>

        <div>
          <img className="img-thumbnail" src={imageUrl}></img>
          <input
            className="button-color"
            type="file"
            onChange={handleFileChange}
          />
          <Button className="button-color" onClick={handleUpload}>
            Upload
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default AvatarUploader;
