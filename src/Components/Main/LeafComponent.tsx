import Leaf from '../../assets/Leaf.png';

function LeafComponent() {
  const leafs = [1, 2, 3, 4, 5];

  const percentResult: { top: number; left: number }[] = [{ top: 1, left: 1 }];
  
  const getRandomPercent = () => {
    let isUnique = false;
    // check if percent already exist so no leaf visually merges together
    while (!isUnique) {
      const top = Math.random() * 90;
      const left = Math.random() * 90;

      /*i needed help from ai with some and Math*/
      isUnique = !percentResult.some(
        (pos) =>
          Math.abs(pos.top - top) < 5 &&
          Math.abs(pos.left - left) < 5
      );

      if (isUnique) {
        const newPos = { top, left };
        percentResult.push(newPos);
        return newPos;
      }
    }
    return { top: 0, left: 0 };
  };
  /*just found out theres a library for the condition that i just did lmao*/

  return (
    <>
      <section className="w-full h-[56vh] relative">
        {leafs.map((e, i) => {
          const { top, left } = getRandomPercent();
          return (
            <img
              key={i}
              src={Leaf}
              alt="leaf"
              className="w-10 h-10"
              style={{
                position: 'absolute',
                top: `${top}%`,
                left: `${left}%`,
              }}
            />
          );
        })}
      </section>

      <section className="w-full h-[10vh] bg-amber-900 flex items-center justify-center">
        <button
          className="px-4 py-2 bg-gray-200 text-black border border-gray-400 font-semibold rounded-lg shadow hover:bg-gray-300 hover:text-black transition-colors duration-200"
        >
          Placeholder Button
        </button>
      </section>   

      <section className="w-full h-[5vh] bg-yellow-400 flex items-center justify-center">
        <p></p>
      </section>
    </>
  );
}

export default LeafComponent;
