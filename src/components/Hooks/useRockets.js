import { useEffect, useState } from 'react';
import FetchData from '../../service/FetchData';

const fetchData = new FetchData();

const useRockets = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(1)
    fetchData.getRocket()
      .then(rocket => setData(state => [...rocket]))
  }, []);

  return { data };
}

export default useRockets;