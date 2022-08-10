import "bootstrap/dist/css/bootstrap.min.css";
// import ErrorBoundary from "./Components/ErrorBoundary";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Shop from "./Components/Shop";
import Links from "./Components/Links";
import Example1 from "./Components/Example1";
import Example2 from "./Components/Example2";
import Example3 from "./Components/Example3";

// exerzise 2
import PostList from "./Components/PostList";
import "./App.css";
async function fetchapi() {
  const response = await fetch(
    "https://webhook.site/0057bea1-10e6-4f4b-8e5f-22179a001f90",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        key1: "myusername",
        email: "mymail@gmail.com",
        name: "Isaac",
        lastname: "Doe",
        age: 27,
      }),
    }
  );
  // waits until the request completes...
  console.log(response);
}
function App() {
  return (
    <div>
      {/* exerzise 1 */}
      {/* <BrowserRouter> */}
      <div>
        <>
          <Links />
        </>
        <Routes>
          {/* <ErrorBoundary> */}
          <Route path="/" element={<Home />} />
          {/* </ErrorBoundary> */}
          {/* <ErrorBoundary> */}
          <Route path="/profile" element={<Profile />} />
          {/* </ErrorBoundary> */}
          {/* <ErrorBoundary> */}
          <Route path="/shop" element={<Shop />} />
          {/* </ErrorBoundary> */}
        </Routes>
      </div>
      {/* exerzise 2 */}
      <div>
        <PostList />
        <Example1 />
        <Example2 />
        {/* <Example3 /> */}
      </div>
      <div>
        <button onClick={fetchapi}>click me</button>
      </div>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
