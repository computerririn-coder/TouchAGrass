import NavBg from '../../../assets/NavBarBackground.jpg';

interface AmountsProps {
  state: { name: string; amount: number }[];
  countImg: number;
  setCountImg: React.Dispatch<React.SetStateAction<number>>;
  setLeafTreasureCount: React.Dispatch<React.SetStateAction<number[]>>;
  itemsCollected: { name: string; amount: number }[];
  setShopVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

function Amounts({
  state,
  countImg,
  itemsCollected,
  setCountImg,
  setLeafTreasureCount,
  setShopVisibility
}: AmountsProps) {
  return (
    <section
      className="w-full min-h-[10vh] flex flex-col justify-center px-4 py-3 bg-gradient-to-b   to-blue-700 from-green-600"
      
    >
      <div className="flex flex-col md:flex-row w-full items-center md:justify-between gap-4">

        {/* Item counts */}
        <div className="flex flex-wrap gap-4">
          {itemsCollected.map((item, index) => (
            <p
              key={index}
              className="px-4 py-2 font-semibold rounded-lg shadow bg-gradient-to-r from-green-500 to-green-700 text-white border-green-600 border hover:border-gray-400 text-center text-2xl w-32 h-20 ml-2"
            >
              {item.name}:<br />
              <span className="block">{item.amount}</span>
            </p>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-2 md:mt-0">

          <button
            className="px-4 py-2 font-semibold rounded-lg shadow bg-gradient-to-r from-red-500 to-red-700 text-white border-red-600 border hover:border-gray-400"
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Clear
          </button>

          <button
            className="px-4 py-2 font-semibold rounded-lg shadow bg-gradient-to-r from-green-500 to-green-700 text-white border-green-600 border hover:border-gray-400"
            onClick={() => {
              setCountImg(prev => prev + 1);
              window.location.reload();
            }}
          >
            Spawn More Leaf
          </button>

          <button
            className="px-4 py-2 font-semibold rounded-lg shadow bg-gradient-to-r from-green-500 to-green-700 text-white border-green-600 border hover:border-gray-400"
            onClick={() => {
              const randomIncrement = Math.floor(Math.random() * 2);

              setLeafTreasureCount(prev => {
                const updated = [...prev];
                updated[0] += randomIncrement;
                updated[1] += randomIncrement;
                return updated;
              });

              window.location.reload();
            }}
          >
            Spawn More Special Type
          </button>

          <button
            className="px-4 py-2 font-semibold rounded-lg shadow bg-gradient-to-r from-green-500 to-green-700 text-white border-green-600 border hover:border-gray-400"
            onClick={() => setShopVisibility(true)}
          >
            Shop🛒
          </button>

        </div>
      </div>
    </section>
  );
}

export default Amounts;
