function Mail(){
  return(
    <Box
      islogged={true}
      unreadMessage={['makan','ma :makan','ma : ma : makan']}
    />
  )
}


function Box({ unreadMessage = [],islogged }) {
  return (
    <>
      <h1>Hallo</h1>
     
     {islogged ? (
        <p>Selamat datang kembali</p>
     ) : (
        <p>Login Terlebih dahulu</p>
     )}

     {unreadMessage.length > 2 && (<p>anda memiliki {unreadMessage.length} belum terbaca</p>)}
      
    </>
  );
}
export default Mail;