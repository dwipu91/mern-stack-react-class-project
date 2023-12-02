import { RouterProvider } from "react-router-dom";
import "./App.scss";
import router from "./router/Router";
import { ToastContainer } from "react-toastify";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

function App() {
  const [progress, setProgress] = useState(100);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" theme="dark" />
      <LoadingBar
        color="#f00"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        style={{ padding: "2px 0px" }}
      />
    </>
  );
}

export default App;
