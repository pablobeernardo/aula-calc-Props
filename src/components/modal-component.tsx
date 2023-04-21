import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface Props{
    showModal: boolean;
    handleOpenClose: any;
    setOperation: any;
    calculate: any;
}

export default class ModalHome extends React.Component<Props> {

    doAction(operation: string){
        this.props.setOperation(operation);
        this.props.calculate(operation);
        this.props.handleOpenClose();

    }

    render(){

        return (
            <>
            <Modal show={this.props.showModal} onHide={this.props.handleOpenClose}>
                <Modal.Header closeButton>
                <Modal.Title>Trabalhando com os Números</Modal.Title>
                </Modal.Header>
                <Modal.Body>Escolha qual operação você quer realizar</Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={() => this.doAction('soma')}>
                    Soma
                </Button>
                <Button variant="primary" onClick={() => this.doAction('subtracao')}>
                    Subtração
                </Button>
                </Modal.Footer>
            </Modal>
            </>
        );
        }
    }    
