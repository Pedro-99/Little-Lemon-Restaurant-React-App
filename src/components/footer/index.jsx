import React from 'react';
import './style.css';

export default function Footer(props) {
    const { children } = props;
    return (
        <footer>{children}</footer>
    )
}
