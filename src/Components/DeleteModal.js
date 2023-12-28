import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteModal({vaciarTareas}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function confirmarModal() {
    vaciarTareas();
    handleClose();
  }

  return (
    <>
      <Button className='borrartodo-btn' variant="primary" onClick={handleShow}>
        Eliminar todo<i className="bi bi-trash"></i>
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>¿Deseas eliminar todas tus tareas?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={confirmarModal}>
            Eliminar todas
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;