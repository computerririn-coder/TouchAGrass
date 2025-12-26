import type { ComponentVisibility, ItemStorageProps } from "./ExportstypeScriptEtc/Typescript/TypescriptCompilationtypes";


function ItemStorageComponent({ itemStorage, setComponentVisibility }: ItemStorageProps) {
  return (
    <section className="absolute top-[46%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-20 w-screen h-screen flex items-center justify-center">
      <div className="relative w-[80%] h-[75%]">
        <button
          className="absolute top-4 right-4 z-50 text-black text-2xl font-light hover:opacity-90 rounded-full bg-linear-to-br from-green-400 to-yellow-300 h-10 w-10 flex items-center justify-center shadow-md"
          onClick={() =>
            setComponentVisibility((prev: ComponentVisibility) => ({
              ...prev,
              itemStorageVisibility: false,
            }))
          }
        >
          X
        </button>

        <div className="w-full h-full border-2 border-white rounded-lg shadow-lg p-4 bg-gradient-to-br from-green-700 via-emerald-600 to-yellow-600 overflow-auto">
  <div className="flex flex-row flex-wrap gap-4">
    {itemStorage.map((e, i) => (
      <div
        key={i}
        className="w-[24vw] max-w-[15rem] h-[24vw] max-h-[15rem] border-2 border-white rounded-lg flex flex-col items-center justify-end shadow-md p-2"
        style={{
          backgroundImage: `url(${e.IMGSRC})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="bg-black/70 rounded px-2 py-1 w-full">
          <p className="text-white font-semibold text-sm">Type: {e.type}</p>
          <p className="text-white font-semibold text-sm">Name: {e.name}</p>
          <p className="text-yellow-300 font-bold text-sm">Price: {e.price}</p>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}

export default ItemStorageComponent;
