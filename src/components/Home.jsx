import React, { useState } from 'react'
import ModalInsertar from './ModalInsertar';
import './styles/Home.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Home = ({ contacts }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <section className='home__container'>
            <article className="home__elements">

                <div className="btn__insert">
                    <button className='btn btn-primary' onClick={handleShow}>Add contact</button>
                </div>

                <Modal show={show} onHide={handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Create a new contact</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className='create'>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="email" className="form-control" id="name" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="email" className="form-control" id="lastName" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Mobile</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" />
                            </div>                                      
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Create
                        </Button>
                    </Modal.Footer>
                </Modal>

                <h1>My Contacts</h1>
                <div className="table__container">
                    <table className="table table-light">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email Address</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Update</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.map(contact => (
                                    <tr key={contact.id}>
                                        <th scope="row">{contact.id}</th>
                                        <td>{contact.name}</td>
                                        <td>{contact.lastName}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.mobile}</td>
                                        <td><button className='btn btn-warning' onClick={handleShow}>update</button></td>
                                        <td><button className='btn btn-danger'>delete</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

            </article>

        </section>
    )
}

export default Home