const GameResult = () => {
  const point = localStorage.getItem("point") | 0;
  // or 연산자임. if문의 생략버전. 값이 없으면 0이라는 것.

  return (
    <div className="bg-pink-300 w-full grow flex flex-col justify-end items-center text-white pb-8 shadow-pink-300 shadow-lg">
      <div className="text-8xl font-black">Up & Down</div>
      <div className="text-2xl font-bold mt-12">현재 점수 : {point}</div>
    </div>
  );
};

export default GameResult;
