import { Text, View } from "@tarojs/components";

const ratios = [
  {
    name: "1:1",
    desc: "头像",
    ratio: 1,
  },
  {
    name: "2:3",
    desc: "人物",
    ratio: 2 / 3,
  },
  {
    name: "9:16",
    desc: "手机壁纸",
    ratio: 9 / 16,
  },
  {
    name: "3:2",
    desc: "风景照",
    ratio: 3 / 2,
  },
  {
    name: "16:9",
    desc: "电脑壁纸",
    ratio: 16 / 9,
  },
];

const RatioSelector = () => {
  return (
    <View className="no-scrollbar flex gap-1 overflow-x-auto">
      {ratios.map((ratio, i) => {
        return (
          <View
            key={i}
            className="flex flex-col gap-1 rounded-md p-1 font-bold transition-colors active:bg-black/10"
            onClick={() => {}}
          >
            <View className="flex h-14 w-14 flex-col place-content-center place-items-center rounded-md shadow-xl">
              <View
                className="rounded-sm bg-zinc-600"
                style={{ width: ratio.ratio * 27, height: 27 }}
              />
              <Text className="text-xs">{ratio.name}</Text>
            </View>
            <Text className="mx-1 text-center text-xs">{ratio.desc}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default RatioSelector;
