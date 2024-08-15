import axios from 'axios';
import { useEffect, useState } from 'react';

function SignalR() {
  const [signalRData, setSignalRData] = useState([]);

  useEffect(() => {
    const fetchSignalRData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/signalr/');
        console.log('response#####', response);
        setSignalRData(response.data);
      } catch (error) {
        console.error('Error fetching Signal R data:', error);
      }
    };

    fetchSignalRData();
  }, []);

  return (
    <div>
      <h1>Signal R Data</h1>
      <ul>
        {signalRData.map((data) => (
          <li key={data.id}>
            Timestamp: {data.timestamp}, Value: {data.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SignalR