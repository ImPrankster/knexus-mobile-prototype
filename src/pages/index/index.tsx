import { Text, View } from "@tarojs/components";
import { Button } from "@nutui/nutui-react-taro";
import MainLayout from "~/components/layouts/main";
import ImageDisplay from "~/components/imgGen/imageDisplay";
import ModePicker from "~/components/imgGen/modePicker";

function Index() {
  return (
    <MainLayout>
      <View className="flex flex-col items-stretch gap-2 p-2">
        <Text className="mr-4 text-right text-sm">History</Text>
        <View className="flex flex-col items-stretch gap-2">
          <ImageDisplay />
          <ModePicker />
          <Button type="primary" size="large" className="w-full">
            Generate
          </Button>
        </View>
      </View>
    </MainLayout>
  );
}

export default Index;
