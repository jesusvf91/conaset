import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Quiz } from "./pages/Quiz";
import { TopicStudy } from "./pages/TopicStudy";
import { ProgressProvider } from "./progress";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "")

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <ProgressProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tema/:topicId" element={<TopicStudy />} />
          <Route path="/tema/:topicId/test" element={<Quiz mode="topic" />} />
          <Route path="/examen" element={<Quiz mode="final" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ProgressProvider>
    </BrowserRouter>
  );
}
