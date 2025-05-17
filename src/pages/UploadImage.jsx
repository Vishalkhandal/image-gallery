import { useState } from 'react'
import { ID, storage } from '../appwriteConfig'

function UploadImage() {
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleUpload = async () => {
        if(!file) {
            setError('Please select a file first')
            return
        }

        setLoading(true)
        setError(null)

        try {
            const uploadedFile = await storage.createFile('68283e0200045569a8fd', ID.unique(), file)
            setFile(null)
        } catch (error) {
            console.error("Upload error: ", error)
            setError('Failed to upload image. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='p-4'>
            <input 
                type="file" 
                onChange={(e) => {
                    setFile(e.target.files[0])
                    setError(null)
                }} 
                accept="image/*"
            />
            <button 
                onClick={handleUpload} 
                disabled={loading}
                className='bg-blue-500 text-white px-4 py-2 ml-2 rounded disabled:bg-blue-300'
            >
                {loading ? 'Uploading...' : 'Upload'}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    )
}

export default UploadImage