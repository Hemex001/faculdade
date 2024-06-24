import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './DigimonDetails.css';
import Loading from '../components/Loading';
import Header from '../components/Header';

const DigimonDetails = () => {
  const { name } = useParams();
  const [digimon, setDigimon] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://digimon-api.vercel.app/api/digimon/name/${name}`)
      .then(response => {
        setDigimon(response.data[0]);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the digimon!", error);
        setLoading(false);
      });
  }, [name]);

  if (loading) {
    return <Loading />;
  }

  if (!digimon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="digimon-details-container">
      <Header title="Digimon Details" />
      <h2>Digimon Name: [{digimon.name}]</h2>
      <img src={digimon.img} alt={digimon.name} />
      <p>Level: {digimon.level}</p>
      <button onClick={() => navigate('/digimon')}>Voltar</button>
    </div>
  );
};

export default DigimonDetails;
