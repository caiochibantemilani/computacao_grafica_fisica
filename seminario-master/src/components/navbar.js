import React from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

function Navbar() {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='titulo'>
            <nav className="navbar navbar-light bg-light shadow">
                <div className="container-fluid">
                    <span className="navbar-brand mb-1 h1">Computação Gráfica</span>

                    <Button variant="primary" onClick={handleShow}>
                        Menu
                    </Button>
                </div>
                <Offcanvas show={show} placement='end' onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Física aplicadas em JavaScript</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Some text as placeholder. In real life you can have the elements you
                        have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
                    <Offcanvas.Title>Bibliografia</Offcanvas.Title>
                    <Offcanvas.Body>
                        Some text as placeholder. In real life you can have the elements you
                        have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
                </Offcanvas>
            </nav>
        </div>
    );
}

export default Navbar;