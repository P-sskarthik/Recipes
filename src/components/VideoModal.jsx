function VideoModal({ videoUrl, onClose }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
        <div className="bg-white rounded-xl shadow-2xl p-4 max-w-4xl w-full relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-4 text-red-500 text-2xl font-bold hover:scale-110 transition"
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
  