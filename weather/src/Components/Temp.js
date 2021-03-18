import React, {useState} from 'react'
import './Temp.css'
const Temp = () => {
    
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('Mumbai');

    useEffect ( () => {
        const fetchApi = async() => {
            const url = `http://api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}`;
            const response await = await fetch(url);
            const res = await response.json();
            setCity(resJson);
        };
        fetchApi();
    }, [])
    return (
        <>
            <div className='box'>
                <div className= "input">
                    <input
                    type= 'search'
                    placeholder='Enter Place'
                    className='search'
                    onChange ={ (event) => {setSearch(event.target.name)}
                }
                    />
                </div>
                <div>
                    <h2 className ='location'>

                    </h2>
                    <h1 className= 'temp'>

                    </h1>
                </div>
            </div>
        </>
    )
}

export default Temp
