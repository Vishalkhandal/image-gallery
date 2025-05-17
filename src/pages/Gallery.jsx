import { useState, useEffect } from 'react'
import { storage } from '../appwriteConfig'

function Gallery() {
    const [images, setImages] = useState([])
    
    const fetchImages = async () => {
        try {
            const response = await storage.listFiles('68283e0200045569a8fd');
            console.log(response.files[0].$id)
            setImages(response.files);
        } catch (error) {
            console.error("Fetch error:", error)
        }
    }

    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 p-4'>
            {images && images.map((file) => (
                <img
                    key={file.$id}
                    src={storage.getFilePreview('68283e0200045569a8fd', file.$id )}
                    alt={file.name}
                    className='rounded shadow'
                />
            ))}
        </div>
    )
}

export default Gallery