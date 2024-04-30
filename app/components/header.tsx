import HeaderDefault from "@/components/(headers)/header-default";
import HeaderOne from "./(headers)/header-one/header-one";
import HeaderTwo from "./(headers)/header-two/header-two";
import HeaderThree from "./(headers)/header-three/header-three";
import HeaderFour from "./(headers)/header-four/header-four";
import HeaderFive from "./(headers)/header-five/header-five";
import HeaderSix from "./(headers)/header-six/header-six";
import HeaderSeven from "./(headers)/header-seven/header-seven";
import HeaderEight from "./(headers)/header-eight/header-eight";
import HeaderNine from "./(headers)/header-nine/header-nine";
import HeaderTen from "./(headers)/header-ten/header-ten";
import HeaderEleven from "./(headers)/header-eleven/header-eleven";
import HeaderTwelve from "./(headers)/header-twelve/header-twelve";
import HeaderThirteen from "./(headers)/header-thirteen/header-thirteen";

const Header = ({ theme, headerSetting, menu, navigation }: any) => {
  return (
    <>
      {/* <HeaderDefault
        headerSetting={headerSetting}
        menu={menu}
        navigation={navigation}
      /> */}
      <HeaderThirteen />
    </>
  );
};

export default Header;
