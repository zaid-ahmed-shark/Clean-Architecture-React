import MainPage from "./Pages/MainPage";

function App() {
  return (
    <MainPage
      a="Learn React"
      p="Hey Hello"
      code="src/components/App.tsx"
      button="Say Hello"
      onClick={() => {
        console.log("Hi i`m React");
      }}
    ></MainPage>
  );
}

export default App;
