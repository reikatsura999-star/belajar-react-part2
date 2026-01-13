function Greeting(props) {

  return (
    <>
      <div className=" border-2 border-gray-50 p-2 m-2 flex items-center justify-center bg-gray-200">
        <p>Hallo,{props.name}</p>
      </div>
    </>
  )
}
export default Greeting;