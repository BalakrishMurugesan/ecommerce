import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'
import Login from './../images/Profile.jpg'
import cart from './../images/Cart.png'
import axios from 'axios'


function Topbar() {
    const [modal, setModal] = useState(false);
    const [register, setRegister] = useState(false);
    const [cartItem, setcartItem] = useState(false);
    const [cartList, setcartlist] = useState([])


    const toggle = () =>
        setModal(!modal);


    const toggleRegister = () => {
        setRegister(!register)
        setModal(!modal)
    };

    const closeRegister = () => {
        setRegister(!register)
    }
    const toggleCart = () => {
        setcartItem(!cartItem)
    }

    const getCart = async () => {
        const res = await axios.get('https://63f2f6b7de3a0b242b37e08b.mockapi.io/cart')
        setcartlist(res.data)
    }
    useEffect(() => {
        getCart()
    }, [])

    const removecart = async (id) => {
        const res = await axios.delete(`https://63f2f6b7de3a0b242b37e08b.mockapi.io/cart/${id}`)
        if (res.status === 200) {
            window.alert('Deleted')
            getCart()
        }
    }

    const Total=cartList.reduce((prev,curr)=>prev+curr.offerprice,0)
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>

                </div>
                <div className='d-flex justify content-end'>
                    <div className='position-relative me-4'>
                        <img src={cart} width='30px' height='30px' className='mx-2' onClick={toggleCart}></img>
                        <span class="badge bg-success position-absolute top-0 end-0 rounded-pill">{cartList.length}</span>
                    </div>

                    <button className='btn btn-sm btn-outline-primary' onClick={toggle}>Login</button>
                </div>
            </nav>
            <Filter />
            <Modal isOpen={modal} toggle={toggle} size='lg' centered scrollable>
                <ModalHeader>Login</ModalHeader>
                <ModalBody>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-6'>
                                <img src={Login} className='img-fluid' />
                            </div>
                            <div className='col-6 align-self-center'>
                                <Form>
                                    <FormGroup>
                                        <Label
                                            for="exampleEmail"
                                            hidden
                                        >
                                            Email
                                        </Label>
                                        <Input
                                            id="exampleEmail"
                                            name="email"
                                            placeholder="Email"
                                            type="email"
                                        />
                                    </FormGroup>
                                    {' '}
                                    <FormGroup>
                                        <Label
                                            for="examplePassword"
                                            hidden
                                        >
                                            Password
                                        </Label>
                                        <Input
                                            id="examplePassword"
                                            name="password"
                                            placeholder="Password"
                                            type="password"
                                        />
                                    </FormGroup>
                                    {' '}
                                    <Button>
                                        Login
                                    </Button><br></br>
                                    <div className='d-flex justify-content-between'>
                                        <a className='text-primary' onClick={toggleRegister}>Create a New Account</a>
                                        <a className='text-danger'>Forgot Password</a>
                                    </div>

                                </Form>
                            </div>

                        </div>

                    </div>
                </ModalBody>
            </Modal>
            <Modal isOpen={register} toggle={closeRegister} size='lg' centered scrollable>
                <ModalHeader>Register</ModalHeader>
                <ModalBody>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-6'>
                                <img src={Login} className='img-fluid' />
                            </div>
                            <div className='col-6 align-self-center'>
                                <Form>
                                    <FormGroup>
                                        <Label
                                            for="exampleEmail"
                                            hidden
                                        >
                                            Email
                                        </Label>
                                        <Input
                                            id="exampleEmail"
                                            name="email"
                                            placeholder="Email"
                                            type="email"
                                        />
                                    </FormGroup>
                                    {' '}
                                    <FormGroup>
                                        <Label
                                            for="examplePassword"
                                            hidden
                                        >
                                            Password
                                        </Label>
                                        <Input
                                            id="examplePassword"
                                            name="password"
                                            placeholder="Password"
                                            type="password"
                                        />
                                    </FormGroup>
                                    {' '}
                                    <Button>
                                        Register
                                    </Button><br></br>
                                    <div className='d-flex justify-content-between'>
                                        <a className='text-primary' onClick={toggleRegister}>Already i have a account</a>
                                        <a className='text-danger' onClick={toggleRegister}>Login</a>
                                    </div>

                                </Form>
                            </div>

                        </div>

                    </div>
                </ModalBody>
            </Modal>
            <Modal isOpen={cartItem} toggle={toggleCart} size='lg' scrollable>
                <ModalHeader>Cart item</ModalHeader>
                <ModalBody>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <div class="card">
                                    <ul class="list-group list-group-flush">
                                        {
                                            cartList.map((list) => {
                                                return <li class="list-group-item">
                                                    <div className='d-flex justify-content-between'>
                                                        <div>{list.name} - &#x20b9;{list.offerprice}</div>

                                                        <button className='btn btn-sm btn-danger rounded-pill' onClick={() => (removecart(list.id))}>X</button>
                                                    </div>

                                                </li>
                                            })

                                        }
                                        <li class="list-group-item bg-secondary text-white">
                                            <div className='d-flex justify-content-between'>
                                                <div>Total</div>
                                                <div>&#x20b9;{Total}</div>
                                            </div>

                                        </li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>

                </ModalBody>
            </Modal>
        </>
    )
}

export default Topbar