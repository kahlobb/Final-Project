import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditModal = ({ reviewId, clientName, content, handleEdit }) => {
  const [updatedClientName, setUpdatedClientName] = useState(clientName);
  const [updatedContent, setUpdatedContent] = useState(content);
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSaveChanges = () => {
    // Perform any validation if needed
    // Call handleEdit with the updated values
    handleEdit(reviewId, updatedClientName, updatedContent);

    // Close the modal
    handleModalClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleModalOpen}>
        Edit
      </Button>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="clientName">
            <Form.Label>Client Name</Form.Label>
            <Form.Control
              type="text"
              value={updatedClientName}
              onChange={e => setUpdatedClientName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="reviewContent">
            <Form.Label>Review Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={updatedContent}
              onChange={e => setUpdatedContent(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModal;
