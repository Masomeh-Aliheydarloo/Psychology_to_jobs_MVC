const ProgressBar = ({ progress }: any) => {
  return (
    <div className="w-full h-6 bg-gray-300 rounded-md overflow-hidden">
      <div
        className="h-full bg-blue-600 text-white flex items-center justify-center font-semibold transition-all duration-500"
        style={{ width: `${progress}%` }}
      >
        <span>{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
