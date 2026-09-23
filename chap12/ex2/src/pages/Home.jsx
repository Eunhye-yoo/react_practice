import { useContext } from "react";
import { DiaryStateContext } from "../App";
import Header from "../components/Header";


const Home = () => {
  const data = useContext(DiaryStateContext);
  return (<div>
    <Header />
      {data.map(item)=> (
               <div key={item.id}>{item.content}</div>))}
  </div>);
};

export default Home;
