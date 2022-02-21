import React from 'react'
import ReactDom from 'react-dom';
import styled from 'styled-components';

const CloseButton = styled.button`
    width: 100px;
    height: 100px;
    font-size: 25px;
`

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0, .7)',
    zIndex: 1000
}

export default function Modal({ open,children, onClose}) {
    if (!open) return null

    return ReactDom.createPortal(
        <>
        <div style={OVERLAY_STYLES}/>
        <div style={MODAL_STYLES}>
            {children}
            <CloseButton onClick={onClose}>Close</CloseButton>
        </div>
        </>,
        document.getElementById('portal')
    )
}