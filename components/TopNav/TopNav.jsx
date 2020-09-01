import React, { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { Squash as Hamburger } from 'hamburger-react';

import StyledTopNav from './StyledTopNav';
import Container from '../Container/Container';

export default function TopNav({ title, current, isSubpage }) {
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
  const [isOpen, setOpen] = useState(false);

  return (
    <StyledTopNav>
      <div className='top-nav'>
        <Container>
          <div className='top-nav-content'>
            <div>
              <p>En mi casa se cocina así</p>
              {isSubpage ? (
                <Link href={navLinks[current].url}>
                  <a>
                    <h1>{title}</h1>
                  </a>
                </Link>
              ) : (
                <h1>{title}</h1>
              )}
            </div>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </Container>
      </div>
      <Container>
        <nav className={classNames({ open: isOpen })}>
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
