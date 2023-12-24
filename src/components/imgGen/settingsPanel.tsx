import { FilterH } from "@nutui/icons-react-taro";
import { Animate, Button, Input } from "@nutui/nutui-react-taro";
import { Text, View } from "@tarojs/components";
import { imgGenStore } from "~/utils/stores/imgGen";

const settings = [
  {
    icon: <FilterH color="black" />,
    comp: <Text>COOL</Text>,
  },
  {
    icon: <FilterH color="black" />,
    comp: <Text>COOL</Text>,
  },
];

const SettingsPanel = () => {
  const { mode, setting, setSetting } = imgGenStore((state) => ({
    mode: state.mode,
    setting: state.setting,
    setSetting: state.setSetting,
  }));
  return (
    <View className="flex flex-col gap-2 rounded-t-lg bg-white p-2 shadow-xl">
      <View className="flex rounded-md border-2 border-primary bg-[#f4f4f5] px-2">
        <Input placeholder="" />
        <View
          className="right"
          style={{ display: "flex px-2", alignItems: "center" }}
        >
          <Button type="primary">自动解析</Button>
        </View>
      </View>
      <View className="flex gap-1">
        {settings.map((s, i) => (
          <Button
            key={i}
            fill={setting === i ? "solid" : "none"}
            onClick={() => setSetting(i)}
            shape="round"
            icon={s.icon}
          />
        ))}
      </View>
      <View>
        {settings.map(
          (s, i) =>
            setting === i && (
              // <Animate type="slide-left" action="initial">
              <View>{s.comp}</View>
              // </Animate>
            ),
        )}
      </View>
    </View>
  );
};

export default SettingsPanel;
