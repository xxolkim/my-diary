import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

const Index = () => {
  return (
    <>
      <Header></Header>

      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>다이어리 첫 화면</h2>
      </Main>

      <Footer></Footer>
    </>
  );
};

export default Index;
