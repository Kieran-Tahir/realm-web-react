import './styles/index.scss'
import * as Realm from "realm-web";

const REALM_APP_ID = "<Your App ID>"; // e.g. myapp-abcde
const app = new Realm.App({ id: REALM_APP_ID });

function App() {
  return (
    <div className="App">
      Realm Web App
    </div>
  );
}

export default App;
