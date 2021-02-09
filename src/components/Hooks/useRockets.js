import { useEffect, useState } from 'react';
import FetchData from '../../service/FetchData';

const fetchData = new FetchData();

const useRockets = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData.getRocket()
      .then(rocket => setData(state => [...rocket]))
  }, []);

  const getRocket = id => data.find(item => item.id === id);

  return { data, getRocket };
}

export default useRockets;