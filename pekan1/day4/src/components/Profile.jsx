//module css
import styles from "./Profile.module.css";
function Profile() {
    const data = {
        name: 'Goblin',
        age: 20,
        country: 'Colombia',
        image: 'https://radarmajalengka.disway.id/upload/77bac0c2d5b391bb4c26594ca217a6d5.jpg'
    };

    return (
        <>
            <div className={styles.container_luar}>
                <div className={styles.container_dalam}>
                    <h1>ini hasil dari moudule css</h1>
                    <br/>
                    <h2>Nama: {data.name}</h2>
                    <h2>Umur: {data.age}</h2>
                    <h3>Alamat: {data.country}</h3>

                    <div>
                        <img
                            src={data.image}
                            alt={data.name}
                            className={styles.gambar}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
