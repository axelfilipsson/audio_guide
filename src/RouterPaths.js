import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import GuidePage from "./pages/GuidePage/GuidePage";

export default class RouterPaths  {
  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guidepage" element={<GuidePage />} />
      </Routes>
    );
  }
}