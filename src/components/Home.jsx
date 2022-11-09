import React, { useState } from 'react'
import ModalInsertar from './ModalInsertar';
import './styles/Home.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Home = ({ contacts, setContacts }) => {

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);


    const [isUpdate, setIsUpdate] = useState(false)
    const [contact, setcontact] = useState({})

    //Datos
    const [name, setName] = useState(' ')
    const [lastName, setLastName] = useState(' ')
    const [mobile, setMobile] = useState(' ')
    const [email, setEmail] = useState(' ')
    //Datos



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

    return (
        <section className='home__container'>
            <article className="home__elements">

                <div className="btn__insert">
                    <button className='btn btn-primary' onClick={handleInsert}>Add contact</button>
                </div>

                <Modal show={show} onHide={handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Create a new contact</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className='form' onSubmit={handleInsert}>
                            <div className="mb-3">
                                <label htmlFor="id" className="form-label">ID</label>
                                <input type="text" className="form-control" id="id" aria-describedby="emailHelp" value={contacts.length} disabled />
                            </div>

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
                                <button type='Submit' className='btn btn-primary'>Create</button>
                                <Button variant="secondary" onClick={handleClose}>
                                    Cancel
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
                                <label htmlFor="id" className="form-label">ID</label>
                                <input type="text" className="form-control" id="id" aria-describedby="emailHelp" value={contact.id} disabled />
                            </div>

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
                                <button type='Submit' className={`btn btn-primary`}>Update</button>
                                <Button variant="secondary" onClick={handleClose1}>
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>

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
                                <th scope="col">Contact</th>
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
                                        <td><button className='btn btn-warning' onClick={() => handleGetData(contact)}>update</button></td>
                                        <td><button className='btn btn-success'>contact</button></td>
                                        <td><button className='btn btn-danger' onClick={() => handleRemove(contact.id)}>delete</button></td>
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