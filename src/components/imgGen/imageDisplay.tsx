import { View } from "@tarojs/components";
import { ConfigProvider, Image, Range } from "@nutui/nutui-react-taro";

const url =
  "https://res.cloudinary.com/leow/image/upload/f_auto,q_auto/cld-sample-3";

const ImageDisplay = () => {
  return (
    <View
      className="relative p-4"
      style="--nutui-range-active-color: rgba(0,0,0,0); --nutui-range-inactive-color: rgba(0,0,0,0);"
    >
      <Range
        className="custom-slider absolute top-1/2 z-10 h-full w-full"
        color="#000000"
        maxDescription={null}
        minDescription={null}
        currentDescription={null}
        defaultValue={50}
        button={<View className="h-8 w-2 rounded-full bg-white"></View>}
      />
      <Image src={url} width="100%" radius={8} />
    </View>
  );
};

export default ImageDisplay;
