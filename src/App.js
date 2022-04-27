import "./App.css";
import AuthContextProvider from "./contexts/AuthContext";
import BlogContextProvider from "./contexts/BlogContext";
import Router from "./router/Router";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <BlogContextProvider>
          <Router />
        </BlogContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
