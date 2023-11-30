import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

const DiaryEdit = () => {
  return (
    <>
      <Header>My Diary 수정</Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "green" }}>
          다이어리 수정 화면
        </h2>
      </Main>
      <Footer></Footer>
    </>
  );
};

export default DiaryEdit;
