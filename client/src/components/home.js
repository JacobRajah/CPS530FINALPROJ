import axios from 'axios';
import { useState, useEffect } from 'react';

function Home()
{
    const [customers, setCustomers] = useState([]);
    const getOwners = () => {
        axios.get('/api/customers').then(res => {
            setCustomers(res.data);
        })
    }
    useEffect(getOwners, []);
    
    return(
        <div>Here are the customers: 
        
        <ul>
            {customers.map((e,i) => {
                return (
                        <li>{e.firstName} {e.lastName}</li>
                )
            })}
        </ul>
        
        </div>
    )
}

export default Home;