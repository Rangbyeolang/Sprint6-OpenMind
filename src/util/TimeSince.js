export function timeSince(dateString) {
  //질문, 답변 시간 계산 함수
  const date = new Date(dateString);
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + "년전";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + "개월전";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + "일전";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + "시간전";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + "분전";
  }
  return Math.floor(seconds) + "초전";
}
