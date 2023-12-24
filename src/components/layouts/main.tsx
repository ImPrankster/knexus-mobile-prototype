import { Find, Home, User } from "@nutui/icons-react-taro";
import { Tabbar } from "@nutui/nutui-react-taro";
import { View } from "@tarojs/components";
import { ReactElement } from "react";

const MainLayout = ({ children }: { children: ReactElement }) => {
  return (
    <View className="bg-ne flex min-h-screen w-screen flex-col bg-background bg-zinc-100">
      <View className="flex flex-1 flex-col">{children}</View>
      <Tabbar inactiveColor="gray" activeColor="black">
        <Tabbar.Item title="画廊" icon={<Find size={18} />} />
        <Tabbar.Item title="生成" icon={<Home size={18} />} />
        <Tabbar.Item title="我的" icon={<User size={18} />} />
      </Tabbar>
    </View>
  );
};

export default MainLayout;
