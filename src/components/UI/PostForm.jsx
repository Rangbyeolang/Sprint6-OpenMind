import React, { useId, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getSubject } from "../../api/api";
import { Input,QuestionButton,InputContainer } from "../../pages/homepage/HomePage";


const PostForm = () => {
  const navigate = useNavigate();
  const userStorage = window.localStorage;

  const [userId, setUserId] = useState();

  const [userName, setUserName] = useState("");

  const handleInput = (event) => {
    setUserName(event.target.value);
    return userName;
  };

  const handleSubmit = async () => {
    try {
      const jsonObject = await getSubject();
      const nameArray = jsonObject.results.map((item) => item.name);
      userStorage.clear();
      if (nameArray.includes(userName)) {
        const nameIndex = nameArray.indexOf(userName);
        const nameObject = jsonObject.results[nameIndex];
        setUserId(nameObject.id);
        userStorage.setItem(`userId`, nameObject.id);
        navigate(`post/${nameObject.id}/answer`);
      } else {
        const response = await fetch(
          "https://openmind-api.vercel.app/6-7/subjects/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: userName,
              team: "6-7",
            }),
          }
        );
        console.log(response);
        const jsonResponse = await getSubject();
        const nameObject = jsonResponse.results[0];
        setUserId(nameObject.id);
        userStorage.setItem(`userId`, nameObject.id);
        navigate(`post/${nameObject.id}/answer`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <InputContainer>
      <Input
        placeholder="이름을 입력하세요"
        type="text"
        onChange={handleInput}
      />
      <QuestionButton onClick={handleSubmit}>질문 받기</QuestionButton>
    </InputContainer>
  );
};
export default PostForm;
