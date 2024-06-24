import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './DigimonList.css';
import Loading from '../components/Loading';
import Header from '../components/Header';

const DigimonList = () => {
  const [digimons, setDigimons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://digimon-api.vercel.app/api/digimon')
      .then(response => {
        setDigimons(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro em obter a lista de digimons!", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="digimon-list-container">
      <Header title="Digimon Platform" />
      <h2>Digimon List</h2>
      <div className="digimon-list">
        {digimons.map((digimon) => (
          <div className="digimon-card" key={digimon.name}>
            <img src={digimon.img} alt={digimon.name} />
            <p>{digimon.name}</p>
            <p>{digimon.level}</p>
            <Link to={`/digimon/${digimon.name}`}>Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigimonList;
