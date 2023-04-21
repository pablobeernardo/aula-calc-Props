import Button from 'react-bootstrap/Button';
import React from 'react';
import ModalHome from './modal-component';

interface Props{
    showModal: boolean;
    handleOpenClose: any;
    setOperation: any;
    calculate: any;
}

export default class ButtonHome extends React.Component<Props> {
    render(){
        return (
            <>
            <Button onClick={this.props.handleOpenClose} variant="primary">Clique aqui</Button>
            <ModalHome calculate={this.props.calculate} setOperation={this.props.setOperation} handleOpenClose={this.props.handleOpenClose} showModal={this.props.showModal} />
            </>
        );
}
}

