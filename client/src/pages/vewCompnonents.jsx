import PCBuilder from '../components/PCBuilder.jsx';
import React, { useEffect, useState } from 'react';




const ViewComponents = (props) => {
    const [cpus, setCpus] = useState([]);

    useEffect(() => {
        setCpus(props.data);
    }, [props]);

    return (
        <PCBuilder 
        name={cpus.name}
        price={cpus.price}
        type={cpus.type}
        image={cpus.image}
        />
        
    );
};

export default ViewComponents;