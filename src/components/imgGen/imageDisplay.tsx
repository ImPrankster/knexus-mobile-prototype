import { View } from "@tarojs/components";
import { Image } from "@nutui/nutui-react-taro";

const url =
  "https://res.cloudinary.com/leow/image/upload/f_auto,q_auto/cld-sample-3";

const ImageDisplay = () => {
  return (
    <View>
      <Image
        src={url}
        width="100%"
        radius={8}
        className="ring-4 ring-primary"
      />
    </View>
  );
};

export default ImageDisplay;
