import Button from "@mui/material/Button";

const FriendSuggestions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="p-0 rounded-lg shadow-md flex-col  bg-white">
          <div className="relative rounded-t-lg overflow-hidden">
            <img
              src={`https://picsum.photos/200/150?random=${index}`}
              alt={`Card ${index + 1}`}
              className="w-full "
            />
          </div>
          <div className="p-3 flex-grow">
            <div className="text-lg font-bold text-gray-800">John Doe</div>
            <div className="text-sm text-gray-600">Rank: #3</div>
            <div className="text-sm text-gray-600 mt-2 flex-grow">10 Friends in Common</div>
            <Button
              className="bg-blue-500 text-white hover:bg-blue-600 px-2 py-1 mt-3"
              size="small"
              variant="contained"
            >
              Add Friend
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendSuggestions;
