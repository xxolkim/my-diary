import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Intro from "./pages/Intro";
import DiaryAdd from "./pages/diary/DiaryAdd";
import DiaryEdit from "./pages/diary/DiaryEdit";
import DiaryIndex from "./pages/diary/Index";
import "./styles/App.css";

function App() {
  return (
    <div className="layout">
      <div className="wrap">
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route path="/home" element={<Index />}></Route>
          <Route path="/diary" element={<DiaryIndex />}></Route>
          <Route path="/diary/add" element={<DiaryAdd />}></Route>
          <Route path="/diary/edit" element={<DiaryEdit />}></Route>
        </Routes>
        {/* <Intro></Intro> */}
        {/* <Index></Index> */}
        {/* <DiaryIndex></DiaryIndex> */}
        {/* <DiaryAdd></DiaryAdd> */}
        {/* <DiaryEdit></DiaryEdit> */}
      </div>
    </div>
  );
}

export default App;
