import emotion1 from "../assets/emotion1.png";
import emotion2 from "../assets/emotion2.png";
import emotion3 from "../assets/emotion3.png";
import emotion4 from "../assets/emotion4.png";
import emotion5 from "../assets/emotion5.png";

// [리팩토링] switch문 대신 객체 매핑
/// 감정이 추가될 때 case를 늘리는 대신 한줄 추가만 하면 된다.
const emotionImages = {
  1: emotion1,
  2: emotion2,
  3: emotion3,
  4: emotion4,
  5: emotion5,
};

export function getEmotionImage(emotionId) {
  return emotionImages[emotionId] ?? null;
}
