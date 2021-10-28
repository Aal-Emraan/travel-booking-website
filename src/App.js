import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useFirebase from './hooks/Firebase/useFirebase';

function App() {

  const {signInWithGoogle} = useFirebase();

  return (
    <div className="App">
      <button onClick={signInWithGoogle}>google sign in</button>
    </div>
  );
}

export default App;



// git repository: https://github.com/programming-hero-web-course1/tourism-or-delivery-website-client-side-Aal-Emraan