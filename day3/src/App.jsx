import CardUser from "./components/CardUser"
import Greeting from "./components/Greeting"
import ProductCard from "./components/ProductCard"
import Center from "./page/Center"


function App() {

  return (
    <>
      <div>
        <Greeting name={'sugiono'} />

        <ProductCard namaProduk={"telur"} stok={20} harga={10000} isAvailabel={true} />
      </div>
      <div>
        <CardUser>
          <div className="flex justify-center">
            <div className="border rounded-lg p-4 w-64 space-y-3">
              <h1 className="text-lg font-bold">Kartu User</h1>

              <p>Nama: Joko</p>

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0fbJuRpyqbxAB9OVgSbpS_fcwD0Osr3fEew&s"
                alt="Foto user"
                className="w-full rounded"
              />

              <button className="bg-blue-500 text-white px-3 py-1 rounded block mx-auto">
                Klik saya
              </button>
            </div>

            <div>
              <Center />
            </div>
          </div>
        </CardUser>

      </div>
    </>
  )
}

export default App
