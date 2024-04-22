import HeaderDefault from "@/components/(headers)/header-default";

const Header = ({ theme, headerSetting, menu, navigation }: any) => {
  return (
    <>
      <HeaderDefault
        headerSetting={headerSetting}
        menu={menu}
        navigation={navigation}
      />
    </>
  );
};

export default Header;
