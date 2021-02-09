import { useEffect, useState } from 'react';
import FetchData from '../../service/FetchData';

const fetchData = new FetchData();

const useRockets = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData.getRocket()
      .then(rocket => setData(state => [...rocket]))
  }, []);

  return { data };
}

export default useRockets;