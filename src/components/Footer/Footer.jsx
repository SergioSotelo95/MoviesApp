import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/clapperboard.png";

import "./Footer.css";

export default function Footer() {
  return (
    <div className='Footer'>
      
      <nav>
        <ul className='list'>
          <li className='list-item'>
            <a
              href=' '
              target='_blank'
              rel='noopener noreferrer'
              className='link'
            >
              <i class='fab fa-github-square'></i>
            </a>
            <a
              href=' '
              target='_blank'
              rel='noopener noreferrer'
              className='link'
            >
            <i class='fab fa-linkedin'></i>
            </a>
            <a
              href=' '
              target='_blank'
              rel='noopener noreferrer'
              className='link'
            >
            <i class="fas fa-address-card"></i>
            </a>
            
          </li>
        </ul>
      </nav>
    </div>
  );
}
