import React, { useState } from 'react';
import getMarvelCharacters from '../marvelAPI';

const CharacterSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [characters, setCharacters] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    const foundCharacters = await getMarvelCharacters(searchQuery);
    setCharacters(foundCharacters);
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Buscar personajes de Marvel"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Buscar</button>
      </form>

      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterSearch;