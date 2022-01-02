import Chamada from '../interfaces/Chamada';

const getChamadasFromAPI = async (): Promise<Chamada[]> => {
  return fetch('http://191.252.93.122/desafio-front-end/api/index.php').then(
    (res) => res.json()
  );
};

export { getChamadasFromAPI };
