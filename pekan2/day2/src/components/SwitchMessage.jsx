import { useState } from "react";
const StatusMessage = ({ status }) => {
    let Message;

    switch (status) {
        case "loading":
            Message = <p>sedang memuat...</p>;
            break;

        case "success":
            Message = <p className="text-green-600">Data berhasil dimuat</p>;
            break;

        case "error":
            Message = <p className="text-red-500">Terjadi error</p>;
            break;

        default:
            Message = <p className="text-gray-600">Status tidak diketahui</p>;
    }

    return Message;
};

function SwitchMessage() {

    const [status, setStatus] = useState('loading')

    const changeStatus = () => {
        const List = ['loading', 'success', 'error', 'unknown']
        const next = 
            List[(List.indexOf(status) + 1) % List.length];
        setStatus(next)
    }
    return (
        <div>
            <h2>Status Data</h2>

            <StatusMessage status={status} />

            <button onClick={changeStatus} className="bg-blue-600 rounded-sm p-1">
                Ubah Status
            </button>
        </div>
    );
}

export default SwitchMessage;

