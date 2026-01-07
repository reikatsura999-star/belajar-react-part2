function ProfileCard({ image, name, bio, skills }) {
    return (
        <div className=" mt-10 max-w-sm mx-auto border rounded-xl shadow-md overflow-hidden bg-white">

            {/* Gambar */}
            <div className="h-48 overflow-hidden">
                <img
                    src={image}
                    alt="foto profile"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Konten */}
            <div className="p-4">
                <h1 className="text-xl font-bold mb-2">{name}</h1>
                <p className="text-gray-600 mb-4">{bio}</p>

                {/* Skills */}
                <div>
                    <h2 className="font-semibold mb-2">Keahlian:</h2>
                    <ul className="list-disc list-inside">
                        {skills.map((item) => (
                            <li key={item.id}>{item.skill}</li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default ProfileCard;
