import { Text, View } from "@tarojs/components";
import MainLayout from "~/components/layouts/main";
import ImageDisplay from "~/components/imgGen/imageDisplay";
import ModePicker from "~/components/imgGen/modePicker";
import SettingsPanel from "~/components/imgGen/settingsPanel";

function Index() {
  return (
    <MainLayout>
      <>
        <View className="no-scrollbar flex flex-col items-stretch gap-2 overflow-y-auto p-2">
          <Text className="mr-4 text-right text-sm font-bold">History</Text>
          <Text className="py-4 text-center text-4xl font-bold">
            AI Painting
          </Text>
          <View className="flex flex-col items-stretch gap-2">
            <ImageDisplay />
            <ModePicker />
          </View>
        </View>
        <View className="flex-1" />
        <SettingsPanel />
      </>
    </MainLayout>
  );
}

export default Index;
