import { ArrowMove, Edit } from "@nutui/icons-react-taro";
import { Animate, Button, Input } from "@nutui/nutui-react-taro";
import { Text, View } from "@tarojs/components";
import { imgGenStore } from "~/utils/stores/imgGen";
import RatioSelector from "./ratioSelector";
import Taro from "@tarojs/taro";

const settings = [
  {
    icon: <ArrowMove color="black" />,
    comp: <RatioSelector />,
  },
  {
    icon: <Edit color="black" />,
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
    <View className="fixed bottom-12 flex w-full flex-col gap-2 rounded-t-lg bg-white p-4 pb-2 shadow-xl">
      <View className="flex rounded-md border-4 border-black">
        <Input
          placeholder=""
          style={{ borderTopLeftRadius: 6, borderBottomLeftRadius: 6 }}
        />
        <View
          className="right"
          style={{
            display: "flex px-2",
            alignItems: "stretch",
          }}
        >
          <Button
            type="primary"
            shape="square"
            style={{
              height: "100%",
              borderTopRightRadius: 6,
              borderBottomRightRadius: 6,
            }}
          >
            自动解析
          </Button>
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
        <View className="flex-1" />
        <Button
          shape="round"
          onClick={() => {
            Taro.chooseImage({
              count: 1, // 默认9
              sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
              sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
              success: function (res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                var tempFilePaths = res.tempFilePaths;
              },
            });
          }}
        >
          选择照片
        </Button>
      </View>
      <View>
        {settings.map((s, i) => setting === i && <View key={i}>{s.comp}</View>)}
      </View>
    </View>
  );
};

export default SettingsPanel;
