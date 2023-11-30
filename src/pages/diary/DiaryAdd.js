import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

const DiaryAdd = () => {
  return (
    <>
      <Header>My Diary 추가</Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "blue" }}>
          다이어리 추가 화면
        </h2>
      </Main>
      <Footer></Footer>
    </>
  );
};

export default DiaryAdd;
