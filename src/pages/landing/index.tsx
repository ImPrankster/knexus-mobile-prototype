import { Navigator, Text, View } from "@tarojs/components";
import { Button, Step, Steps } from "@nutui/nutui-react-taro";

function Index() {
  return (
    <View
      className="flex min-h-screen w-screen flex-col items-stretch bg-black p-2
    "
    >
      <View className="flex flex-1 flex-col place-content-center">
        <Text className="text-center text-xl font-bold text-white">
          Welcome to KNexus
        </Text>
        <Text className="text-center text-lg text-white">
          只需1分钟, AI创造您想要的专属NFT
        </Text>
      </View>
      <Steps
        direction="vertical"
        className="flex flex-1 flex-col items-center font-bold"
      >
        <Step
          className="w-40"
          title="填写Prompt, 选择模型"
          icon={<Text>1</Text>}
        />
        <Step className="w-40" title="选择您喜欢的风格" icon={<Text>2</Text>} />
        <Step className="w-40" title="选择具体尺寸" icon={<Text>3</Text>} />
        <Step className="w-40" title="点击生成！" icon={<Text>4</Text>} />
      </Steps>
      <View className="flex flex-1 flex-col place-content-center gap-2 p-4">
        <Button type="primary" className="w-full">
          Sign in / Sign up
        </Button>
        <Text className="text-center text-xs text-white">
          使用此服务表示您同意{" "}
          <Navigator target="miniProgram" className="text-primary">
            《KNexus协议》
          </Navigator>
        </Text>
      </View>
    </View>
  );
}

export default Index;
