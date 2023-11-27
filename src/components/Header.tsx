import logo from "../images/logo.png";

export const Header = () => {
  const onClickHeader = () => {
    console.log("Header");
  };
  return (
    <header
      className="flex flex-row justify-center items-center text-2xl my-6 cursor-default"
      onClick={onClickHeader}
    >
      <img
        className={"h-24 w-24 object-contain"}
        src={logo.src}
        alt="巣の中の卵を温めている鳥。"
      />
      <div className="font-kiwi text-main align-bottom ">
        龍ちゃんズ
        <span className="font-dm text-4xl">Home</span>
      </div>
    </header>
  );
};
