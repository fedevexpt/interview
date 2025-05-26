import Header from "../components/Header";
import RandomBtn from "../components/RandomBtn";
function Home() {
  return (
    <div>
      <Header />
      <h1 className="text-center text-[30px] text-bold my-6">
        진짜 면접처럼 연습해보세요
      </h1>
      <RandomBtn />
      <h1 className="text-center text-[25px] text-bold my-6">
        카테고리별 연습하기
      </h1>
    </div>
  );
}

export default Home;
