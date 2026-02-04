import { useRef } from "react";

export default function UseRef() {
  const InputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    InputRef.current?.focus();
    if (InputRef.current?.value === "") {
        return alert("masukan text");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <input ref={InputRef} type="text" placeholder="masukan text" />
      <button
        onClick={handleFocus}
        className="boreder-2 rounded py-1 px-6 bg-blue-500"
      >
        klik
      </button>
    </div>
  );
}
