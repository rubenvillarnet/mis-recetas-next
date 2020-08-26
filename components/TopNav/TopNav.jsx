import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import StyledTopNav from './StyledTopNav';
import Container from '../Container/Container';

export default function TopNav({ title, current }) {
  const navLinks = [
    {
      name: 'Inicio',
      url: '/'
    },
    {
      name: 'Primeros platos',
      url: '/primeros'
    },
    {
      name: 'Segundos platos',
      url: '/segundos'
    },
    {
      name: 'Postres',
      url: '/postres'
    },
    {
      name: 'Salsas',
      url: '/salsas'
    }
  ];

  return (
    <StyledTopNav>
      <div className='top-nav'>
        <Container>
          <p>En mi casa se cocina así</p>
          <h1>{title}</h1>
        </Container>
      </div>
      <Container>
        <nav>
          <ul>
            {navLinks.map((link, idx) => (
              <li key={link.url}>
                <Link href={link.url}>
                  <a className={classNames({ active: idx === current })}>
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </StyledTopNav>
  );
}
