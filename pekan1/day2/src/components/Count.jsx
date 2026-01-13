function Count({ diskon, harga }) {
  const totalDiskon = harga - (harga * diskon) / 100;

  return (
    <div className="mt-4">
      {diskon > 0 ? (
        <div className="space-y-1">
          <p className="text-gray-500 line-through">
            Harga awal: Rp {harga.toLocaleString()}
          </p>
          <p className="font-semibold text-red-600">
            Harga setelah diskon: Rp {totalDiskon.toLocaleString()}
          </p>
          <p className="text-sm text-red-500">
            Diskon: {diskon}%
          </p>
        </div>
      ) : (
        <p className="font-semibold">
          Harga: Rp {harga.toLocaleString()}
        </p>
      )}
    </div>
  );
}

export default Count;
