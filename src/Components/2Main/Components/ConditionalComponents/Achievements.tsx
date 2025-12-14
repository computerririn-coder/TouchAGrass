function Shop({ setComponentVisibility }: any) {
    return (
        <div className="w-screen h-screen flex items-center justify-center absolute top-[45%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-20">
            <section className="relative w-[80%] h-[75%] bg-gradient-to-b from-blue-500 to-green-400 text-white border-5 border-blue-600 rounded-lg p-1 
            overflow-hidden overflow-y-auto overscroll-contain pl-4">
   <button 
  className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-yellow-300 text-black text-xl shadow-md hover:opacity-70"
  onClick={() => setComponentVisibility((prev) => ({
    ...prev,
    achievementsVisibility: false,
  }))}
>
  X
</button>
            </section>
        </div>
    );
}

export default Shop;
