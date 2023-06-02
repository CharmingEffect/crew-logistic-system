import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "reactstrap";

const FileModal = ({ userId }) => {
  const [showModal, setShowModal] = useState(false);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (showModal) {
      fetchFiles();
    }
  }, [showModal]);

  const fetchFiles = async () => {
    try {
      const response = await axios.get(`/api/download-docs?userId=${userId}`);
      setFiles(response.data);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const getImageUrl = (fileName) => {
    // Replace with the correct URL pattern for your backend
    return `/uploads/${userId}/${fileName}`;
  };

  return (
    <>
      <Button 
        className="button-color"
      onClick={toggleModal}>View Files</Button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Uploaded Files</h2>
            <ul>
              {files.map((file, index) => (
                <li key={index}>
                  {file.name} - {file.length} bytes
                  <img className="img-thumbnail" src={getImageUrl(file.name)} alt={file.name} />
                </li>
              ))}
            </ul>
            <button 
              className="button-color"
            onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default FileModal;
