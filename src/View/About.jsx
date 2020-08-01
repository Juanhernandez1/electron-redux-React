import React from 'react';
import { Link } from 'react-router-dom';

export default function about() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Casa</Link>
          </li>
        </ul>
      </nav>
      <h2>Acerca de</h2>
      Auto: Juan Hernandez
    </div>
  );
}
