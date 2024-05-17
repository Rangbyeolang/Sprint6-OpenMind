const OPENMIND_API = "https://openmind-api.vercel.app/6-7/";
const SUBJECTS = "subjects";
const QUESTIONS = "questions";
const ANSWERS = "answers";

export async function getQuestions(subjectId, params = {}) {
  const query = new URLSearchParams(params).toString();

  try {
    const response = await fetch(
      `${OPENMIND_API}${SUBJECTS}/${subjectId}/${QUESTIONS}/?${query}/`
    ); //subjectId 동적으로 받도록 수정

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}

export async function getSubject(params={}) {
  const query = new URLSearchParams(params).toString();

  const response = await fetch(
  `${OPENMIND_API}${SUBJECTS}/?${query}/`,
    { method: "GET" }
  );
  const body = await response.json();
  return body;
}

export async function postSubject() {

}


export default getQuestions;
