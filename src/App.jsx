import Faq from "./components/Faq/Faq";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Possible from "./components/possible/Possible";
import Question from "./components/Question/Question";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Possible />
        <Faq />
        <Question />
      </main>
    </>
  );
}

export default App;
