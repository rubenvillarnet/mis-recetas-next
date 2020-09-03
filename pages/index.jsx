import React, { useState } from 'react';
import Link from 'next/link';
import CountUp from 'react-countup';

import StyledIndex from '../styles/pages-styles/index';
import { Container } from '../components';
import { allRecipes } from '../services/recipes';
import magnifier from '../public/images/magnifier.svg';
import cancel from '../public/images/cancel.svg';

export default function Home({ recipes }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  let recipesArray = [];

  Object.keys(allRecipes).forEach((category) => {
    recipesArray = [
      ...recipesArray,
      ...allRecipes[category].map((recipe) => ({ ...recipe, category }))
    ];
  });

  const updateSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.length > 2) {
      setSearchResults(
        recipesArray
          .filter((recipe) => {
            let found = false;
            Object.values(recipe).forEach((value) => {
              if (typeof value === 'string') {
                if (value.toLowerCase().includes(term.toLowerCase())) {
                  found = true;
                }
              } else {
                value.forEach((item) => {
                  if (item.toLowerCase().includes(term.toLowerCase())) {
                    found = true;
                  }
                });
              }
            });
            return found;
          })
          .map(({ slug, title, category }) => ({
            slug,
            title,
            category
          }))
      );
    } else {
      setSearchResults([]);
    }
  };

  const recipesCount = (recipesNumber) => (
    <span className='recipes-count'>
      <CountUp end={recipesNumber} duration={2} />
    </span>
  );

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  return (
    <StyledIndex>
      <header>
        <Container>
          <h1>En mi casa se cocina así</h1>
        </Container>
      </header>
      <main>
        <Container>
          <p>Estas son las recetas que hemos ido recopilando con los años.</p>
          <nav>
            <Link href='/primeros'>
              <a>
                {recipesCount(recipes.primeros.length)}
                Primeros platos
              </a>
            </Link>
            <Link href='/segundos'>
              <a>{recipesCount(recipes.segundos.length)}Segundos platos</a>
            </Link>
            <Link href='/postres'>
              <a>{recipesCount(recipes.postres.length)}Postres</a>
            </Link>
            <Link href='/salsas'>
              <a>{recipesCount(recipes.salsas.length)}Salsas</a>
            </Link>
          </nav>
          <div className='search-container'>
            <h3>Busca recetas</h3>
            <div className='search-input'>
              <img src={magnifier} alt='magnifier' />
              <input type='text' value={searchTerm} onChange={updateSearch} />
              {searchTerm && (
                <div
                  onClick={clearSearch}
                  onKeyPress={clearSearch}
                  role='button'
                  className='delete-icon'
                  tabIndex={0}
                >
                  <img src={cancel} alt='delete icon' />
                </div>
              )}
            </div>
            <div className='search-results'>
              {searchTerm.length > 2 &&
                (searchResults.length === 0 ? (
                  <p>No hay resultados</p>
                ) : (
                  <p>{searchResults.length} resultados</p>
                ))}
              <ul>
                {searchResults.map((result) => (
                  <li key={result.title}>
                    <Link
                      href={`/${result.category}/[slug]`}
                      as={`/${result.category}/${result.slug}`}
                    >
                      <a>{result.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </main>
    </StyledIndex>
  );
}

export async function getStaticProps() {
  return {
    props: {
      recipes: allRecipes
    }
  };
}
