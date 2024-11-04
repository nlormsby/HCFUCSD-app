import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

export const NavBar = () => {

    return (
        <div className="navBar" id="navBar">
            <ul>
                <a className="link"
                href="#contact">
                    Contact</a>

                <a className="link"
                href="#faq">
                    FAQ</a>

                <a className="link"
                href="#spons">
                    Sponsors</a>

                <a className="link"
                href="#about">
                    About</a>

            </ul>
        </div>
    );
};