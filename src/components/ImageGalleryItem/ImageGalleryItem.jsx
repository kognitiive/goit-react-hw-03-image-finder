import { Modal } from "components/Modal/Modal";
import { Component } from "react";
import { ListItem, ListItemImage } from "./ImageGalleryItem.styled";


export default class ImageGalleryItem extends Component {
    state = {
        src: this.props.src,
        alt: this.props.alt,
        modalURL: this.props.modalURL,
        showModal: false,
    }

    toggleModal = () => { 
        this.setState(({ showModal }) => ({ 
            showModal: !showModal
        }))
    }
    render() {
        const {src, alt, showModal, modalURL} = this.state
        return (
            <ListItem onClick={this.toggleModal}>
        <ListItemImage src={src} alt={alt} />
                {showModal && <Modal onClose={this.toggleModal}><img src={modalURL} alt={alt} /></Modal>}
            </ListItem>);
    }
    
    
}