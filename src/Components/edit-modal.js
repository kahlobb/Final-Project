import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


// 'EditModal' props = 'reviewId', 'clientName', 'addReview', 'handleEdit'
// 'useState' hook is used to define and manage state variables
// 'showModal' & 'setShowModal' are used to control visibility of modal
const EditModal = ({ reviewId, clientName, addReview, handleEdit }) => {
  const [updatedClientName, setUpdatedClientName] = useState(clientName);
  const [updatedContent, setUpdatedContent] = useState(addReview);
  const [showModal, setShowModal] = useState(false);

  // called when the 'edit' button is clicked
  const handleModalOpen = () => {
    setShowModal(true);
  };

  // called when teh modal is closed
  const handleModalClose = () => {
    setShowModal(false);
  };

  // called when 'save' button is clicked
  // 'handleEdit' is passed as prop - 
  // arguments = updated values of 'reviewId', 'updatedClientName' & 'updatedContent' 
  // then closes modal after changes have been saved
  const handleSaveChanges = () => {
    
    handleEdit( reviewId, updatedClientName, updatedContent);

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
          <Form.Group controlId="content">
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
