import './App.scss';
// --------------------- Projects ---------------------
import Project1 from '@/components/Projects/Project1';

// --------------------- UseState ---------------------
// import Count from '@/components/UseState/Exercise0';
// import FlagImage from '@/components/UseState/Exercise1';
// import ChangeStyleColor from '@/components/UseState/Exercise2';
// import FormRegister from '@/components/UseState/Exercise3';
// --------------------- UseEffects ---------------------
// import Slide from '@/components/UseEffect/Exercise0';
// import Exercise1 from '@/components/UseEffect/Exercise1';
// import Exercise2 from '@/components/UseEffect/Exercise2';

function App() {
  return (
    <>
      <div className="App">
        {/* ----------- Project ----------- */}
        <Project1 />
        {/* ----------- UseState ----------- */}
        {/* <Count /> */}
        {/* <FlagImage /> */}
        {/* <ChangeStyleColor /> */}
        {/* <FormRegister /> */}

        {/* ----------- UseEffect ----------- */}
        {/* <Slide /> */}
        {/* <Exercise1 /> */}
        {/* <Exercise2 /> */}
      </div>
    </>
  );
}

export default App;
