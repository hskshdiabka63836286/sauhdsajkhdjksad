'use client'


export default function Btn({children}) {
    function abcd(){
        alert("Hello Bro")
    }
  return (
    <div>
      <button onClick={abcd} className="bg-blue-500 p-2 rounded-md hover:bg-blue-600 text-white">
        {children}
      </button>
    </div>
  )
}
