export default function KeyScreen({ phoneNumber, buttons, handleClick, handleDelete, handleCall }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                FlippedPhone
            </h3>
            <input
                type="text"
                value={phoneNumber}
                disabled
                className="w-44 h-12 mb-6 text-center border border-gray-300 rounded focus:outline-none bg-gray-100 text-gray-800 text-lg"
            />
            <div className="grid grid-cols-3 gap-3 mb-4">
                {buttons.map((num, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(num)}
                        className="w-14 h-14 bg-gray-200 rounded hover:bg-gray-300 flex items-center justify-center font-semibold text-gray-800 text-lg"
                    >
                        {num}
                    </button>
                ))}
            </div>
            <div className="flex gap-4">
                <button
                    onClick={handleDelete}
                    className="w-24 h-12 bg-red-500 hover:bg-red-600 text-white rounded font-semibold transition-colors"
                >
                    x
                </button>
                <button
                    onClick={handleCall}
                    className="w-24 h-12 bg-green-500 hover:bg-green-600 text-white rounded font-semibold transition-colors"
                >
                    Call
                </button>
            </div>
        </div>
    );
}