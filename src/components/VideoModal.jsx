function VideoModal({ videoUrl, onClose }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
        <div className="bg-white rounded-xl shadow-2xl p-4 max-w-4xl w-full relative">
          <button
            onClick={onClose}
            className=" rounded-xl text-3xl bg-red-500 text-white absolute top-2 right-2 p-1 hover:bg-red-600 transition duration-200 ease-in-out"
          >
            ×
          </button>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={videoUrl}
              title="Recipe Video"
              className="w-full h-96 rounded-md"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
  
  export default VideoModal;
  