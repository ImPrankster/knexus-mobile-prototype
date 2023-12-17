import { Find, Home, User } from "@nutui/icons-react-taro";
import { Tabbar } from "@nutui/nutui-react-taro";
import { View } from "@tarojs/components";
import { ReactElement } from "react";

const MainLayout = ({ children }: { children: ReactElement }) => {
  return (
    <View className="min-h-screen w-screen bg-background">
      <View className="p-4">{children}</View>
      <Tabbar fixed inactiveColor="gray" activeColor="black">
        <Tabbar.Item title="画廊" icon={<Find size={18} />} />
        <Tabbar.Item title="生成" icon={<Home size={18} />} />
        <Tabbar.Item title="我的" icon={<User size={18} />} />
      </Tabbar>
    </View>
  );
};

export default MainLayout;
