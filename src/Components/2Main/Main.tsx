import LeafComponent from "./Components/LeafComponent";


function Main({itemStorage, setItemStorage }) {

  return (
    <main className="w-full min-h-[85vh] bg-black relative overflow-hidden ">
<LeafComponent itemStorage={itemStorage}           
  setItemStorage={setItemStorage} />
    </main>
  );
}

export default Main;
