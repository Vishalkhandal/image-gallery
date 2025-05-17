import Gallery from "./pages/Gallery"
import UploadImage from "./pages/UploadImage"

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">Image Gallery with Appwrite</h1>
      <UploadImage />
      <Gallery/>
    </div>
  )
}

export default App