import NavBg from '../../../assets/NavBarBackground.jpg';

function Amounts({state}) {
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
              <button className="px-4 py-2 font-semibold rounded-lg shadow bg-gradient-to-r from-green-500 to-green-700 text-white border-green-600 border hover:border-gray-400">
                Spawn More Grass 🌿
              </button>
              <button className="px-4 py-2 font-semibold rounded-lg shadow bg-gradient-to-r from-green-500 to-green-700 text-white border-green-600 border hover:border-gray-400">
                Shop 🛒
              </button>
            </div>
          </div>
        </section>
     );
}

export default Amounts;