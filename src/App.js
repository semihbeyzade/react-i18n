import {useTranslation} from "react-i18next"
import {sayHello} from "./utils"


function App() {
  const {t, i18n} = useTranslation()

  const clickHandle =  (lng) => {
     i18n.changeLanguage(lng)
  }


  return (
    <div className="App">
      Aktif dil: {i18n.language} <br/>
      <nav>
        <button onClick={() => clickHandle("tr")} >Türkce</button>
        <button onClick={() => clickHandle("en")}>English</button>
        <button onClick={sayHello}>Say Hello</button>
      </nav> <br/>
      <h3>{t("welcome")}</h3>
    </div>
  );
}

export default App;
