import { Image } from "@nutui/nutui-react-taro";
import { Text, View } from "@tarojs/components";

const modes = [
  "001",
  "002",
  "003",
  "004",
  "005",
  "006",
  "007",
  "008",
  "009",
  "010",
];

const ModePicker = () => {
  return (
    <View className="no-scrollbar overflow-x-auto px-2">
      <View className="flex w-full gap-2">
        {modes.map((mode, i) => (
          <View
            key={i}
            className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border-4 border-primary"
          >
            <Image
              src="https://res.cloudinary.com/leow/image/upload/f_auto,q_auto/cld-sample-3"
              width="100%"
              height="100%"
            />
            <Text className="absolute bottom-0 w-full rounded-b-md bg-black px-2 text-white opacity-60">
              {mode}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ModePicker;
