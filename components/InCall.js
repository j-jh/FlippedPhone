export default function InCall({ phoneNumber, handleEndCall }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Calling {phoneNumber}...</h2>
            <button
                onClick={handleEndCall}
                className="w-32 h-12 bg-red-500 hover:bg-red-600 text-white rounded font-semibold"
            >
                End
            </button>
        </div>
    );
}