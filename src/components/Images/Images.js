import React, { useEffect, useState } from 'react';

const Images = () => {
   const [images, setImages] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then( res => res.json())
        .then(data => setImages(data))
   })
    
    return (
        <div>
            
        </div>
    );
};

export default Images;