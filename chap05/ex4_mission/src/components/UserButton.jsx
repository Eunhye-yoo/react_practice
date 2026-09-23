const UserButton = ({ name, btnText }) => {
  //   const onClickBtn = () => {
  //     console.log(name + "님의 나이는" + age + "입니다.");
  //     alert(`${name}님의 정보를 콘솔에 출력했습니다.`);
  //   };

  //   if (gender === "male") {
  //     return <button onClick={onClickBtn}>{name} 정보 출력</button>;
  //   } else {
  //     return <button onClick={onClickBtn}>{name} 프로필 확인</button>;
  //   }
  // };

  const clickBtn = () => {
    console.log(`${name}님의 정보 출력`);
    alert(`${name}님의 정보를 콘솔에 출력했습니다.`);
  };

  return <button onClick={clickBtn}>{btnText}</button>;
};

export default UserButton;
