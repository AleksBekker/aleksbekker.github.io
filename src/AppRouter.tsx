import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/card" element={<ResumeRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}

function ResumeRedirect() {
  window.location.href = "/AleksBekker_Resume.pdf";
  return null;
}
