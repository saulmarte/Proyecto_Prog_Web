import React, { useState } from 'react'
import './styles/crud_Style.css'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
    Table,
    Container,
} from "reactstrap";

const CRUD = ({ contacts, setContacts }) => {

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    const [isUpdate, setIsUpdate] = useState(false)
    const [contact, setcontact] = useState({})

    //Datos
    const [name, setName] = useState(' ')
    const [lastName, setLastName] = useState(' ')
    const [mobile, setMobile] = useState(' ')
    const [email, setEmail] = useState(' ')
    //Datos

    const [sendEmail, setSendEmail] = useState('')

    const handleInsert = e => {
        e.preventDefault()
        handleShow()
        const data = {
            id: e.target.id.value,
            name: e.target.name.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            mobile: e.target.mobile.value,
        }

        setContacts([...contacts, data])
        handleClose()
    }

    const handleRemove = (id) => {
        const newContacts = contacts.filter((contact) => contact.id !== id);
        setContacts(newContacts)
    }


    const handleGetData = (contact) => {

        setName(contact.name)
        setLastName(contact.lastName)
        setMobile(contact.mobile)
        setEmail(contact.email)

        let iterator = contacts.map(user => {
            if (user.id == contact.id) {
                setcontact(user)
            }
        })

        console.log(contact)
        handleShow1()
    }


    const handleUpdateContact = (contact) => {
        const iterator_update = contacts.map(user => {
            if (user.id == contact.id) {

                return {
                    ...user,
                    name: name,
                    lastName: lastName,
                    mobile: mobile,
                    email: email,
                }
            }
            return user
        })
        setContacts(iterator_update)
    }

    const handleUpdate = e => {
        e.preventDefault()
        handleUpdateContact(contact)
        setName(' ')
        setLastName(' ')
        setMobile(' ')
        setEmail(' ')
        handleClose1()
    }

    const handleSendEmail = (email) => {
        setSendEmail(email)
        handleShow2()
    }

    return (
        <section className='home__container'>
            <article className="home__elements">

                <Modal show={show} onHide={handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Nuevo Contacto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className='form' onSubmit={handleInsert}>

                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" aria-describedby="emailHelp" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastName" aria-describedby="emailHelp" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="mobile" className="form-label">Mobile</label>
                                <input type="text" className="form-control" id="mobile" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" />
                            </div>

                            <div className="btns">
                                <button type='Submit' className='btn btn-warning'>Create</button>
                                <Button variant="dark" onClick={handleClose}>
                                    Cerrar
                                </Button>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>

                <Modal show={show1} onHide={handleClose1} >
                    <Modal.Header closeButton>
                        <Modal.Title>update a contact</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className='form' onSubmit={handleUpdate}>

                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" aria-describedby="emailHelp" value={name == ' ' ? contact.name : name} onChange={e => setName(e.target.value)} name="name" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastName" aria-describedby="emailHelp" value={lastName == ' ' ? contact.lastName : lastName} onChange={e => setLastName(e.target.value)} name="lastName" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="mobile" className="form-label">Mobile</label>
                                <input type="text" className="form-control" id="mobile" value={mobile == ' ' ? contact.mobile : mobile} onChange={e => setMobile(e.target.value)} name="mobile" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" value={email == ' ' ? contact.email : email} onChange={e => setEmail(e.target.value)} name="email" />
                            </div>

                            <div className="btns">
                                <button type='Submit' class='btn btn-warning'>Update</button>
                                <Button variant="dark" onClick={handleClose1}>
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>

                <Modal show={show2} onHide={handleClose2} >
                    <Modal.Header closeButton>
                        <Modal.Title>Contact him</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className='form' action={`https://formsubmit.co/${sendEmail}`} method="POST">
                            <div class="mb-3 size__textarea">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" name='email' id="exampleFormControlInput1" placeholder="name@example.com" value={sendEmail} disabled />
                            </div>
                            <div class="mb-3 size__textarea">
                                <label htmlFor="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea className="form-control " id="exampleFormControlTextarea1" rows="3" name='Mensaje' required></textarea>
                            </div>

                            <div className="btns">
                                <button type='Submit' class='btn btn-warning'>Send Email</button>
                                <Button variant="dark" onClick={handleClose2}>
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>

                <h1 className='Tittle'>Lista de Contactos</h1>

                <div className="btn__insert">
                    <button className='btn btn-warning' onClick={handleInsert}>Add contact</button>
                </div>

                <Container className="table__container">
                    <br />
                    <Table className="table table-light">
                        <thead>
                            <tr class="data-row">
                                <th scope="col">No.</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Email</th>
                                <th scope="col">Telefono</th>
                                <th scope="col">Send Email</th>
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
                                        <td><button className='btn btn-dark btn_email' onClick={() => handleSendEmail(contact.email)}>contact</button></td>
                                        <td><button className='btn btn-warning btn_update' onClick={() => handleGetData(contact)}>update</button></td>
                                        <td><button className='btn btn-dark btn_delete' onClick={() => handleRemove(contact.id)}>delete</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Container>
            </article>

        </section >
    )
}

export default CRUD