import FirstPersonChat from "./components/FirstPersonChat";
import SecondPersonChat from "./components/SecondPersonChat";
import TotalMessagesSendPersons from "./components/TotalMessagesSendPersons";


function App() {
  return (
    <>
      <FirstPersonChat />
      <SecondPersonChat />

      <TotalMessagesSendPersons />
    </>
  );
}

export default App;
