

import React, { useState } from 'react';
import swal from 'sweetalert';
import { Button } from 'reactstrap';

const DocsUpload = ({ userId }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [description, setDescription] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleFileUpload = async () => {
        if (!selectedFile) {
            alert('Please select a file to upload.');
            return;
        }

        if (!description) {
            alert('Please enter a description for the file.');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('userId', userId);
        formData.append('description', description);

        try {
            const response = await fetch('/api/upload-docs', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                swal('Error', 'Failed to upload file: ${response.statusText}', 'error');
            }

            const result = await response.text();
            swal('Success', 'File uploaded' + " " + response.statusText, 'success');
        } catch (error) {
            swal('Error', 'Failed to upload file: ${response.statusText}', 'error');
        }
    };

    return (
        <div className="file-upload-container">
        <input className="file-upload-input" type="file" onChange={handleFileChange} />
        <input
          className="file-description-input"
          type="text"
          placeholder="File description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <button onClick={handleFileUpload} className="button-color">
          Upload
        </button>
      </div>
    );
};

export default DocsUpload;
