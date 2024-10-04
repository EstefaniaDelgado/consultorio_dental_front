const Spinner = () => {
  return (
    <div className="absolute inset-0 flex-col gap-4 w-full flex items-center justify-center">
      <div className="w-14 h-14 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
        <div className="w-12 h-12 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-spacecadet rounded-full"></div>
      </div>
    </div>
  );
};

export default Spinner;