import NavBg from '../../../assets/NavBarBackground.jpg';

function Amounts({ state, setItemConfig, count1, setCount1 }) {
  return (
    <section
      className="w-full min-h-[10vh] items-center justify-center px-4 p-3"
      style={{ backgroundImage: `url(${NavBg})` }}
    >
      <div className="flex flex-col md:flex-row w-full items-center md:justify-between gap-4">
        <div className="flex flex-wrap gap-4">
          {state.map((element, index) => (
            <p
              key={index}
              className="px-4 py-2 font-semibold rounded-lg shadow bg-gradient-to-r from-green-500 to-green-700 text-white border-green-600 border hover:border-gray-400 text-center text-2xl w-32 h-20 ml-2"
            >
              {element.name}:<br />
              <span className="block">{element.amount}</span>
            </p>
          ))}
        </div>

        <div className="flex gap-4 mt-2 md:mt-0">
          {/* New Clear Button */}
          <button
            className="px-4 py-2 font-semibold rounded-lg shadow bg-gradient-to-r from-red-500 to-red-700 text-white border-red-600 border hover:border-gray-400"
            onClick={() => {
              localStorage.clear();       // clear localStorage
              window.location.reload();   // refresh page
            }}
          >
            Clear
          </button>

          {/* Shop Button */}
          <button
            className="px-4 py-2 font-semibold rounded-lg shadow bg-gradient-to-r from-green-500 to-green-700 text-white border-green-600 border hover:border-gray-400"
            onClick={() => {
              setCount1(prev => prev + 1); // increment count
              window.location.reload();     // refresh page
            }}
          >
            Spawn More 🛒{count1}
          </button>

          {/* Spawn More Button */}
          <button className="px-4 py-2 font-semibold rounded-lg shadow bg-gradient-to-r from-green-500 to-green-700 text-white border-green-600 border hover:border-gray-400">
           Shop
          </button>
        </div>
      </div>
    </section>
  );
}

export default Amounts;
