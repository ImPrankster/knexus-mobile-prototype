import { Text, View } from "@tarojs/components";
import MainLayout from "~/components/layouts/main";
import ImageComparison from "~/components/imgGen/imageComparison";
import ModePicker from "~/components/imgGen/modePicker";
import SettingsPanel from "~/components/imgGen/settingsPanel";

function Index() {
  return (
    <MainLayout>
      <>
        <View className="no-scrollbar flex flex-col items-stretch gap-2 overflow-y-auto p-2">
          <Text className="mr-4 text-right text-sm font-bold">History</Text>
          <Text className="py-2 text-center text-4xl font-bold">
            AI Painting
          </Text>
          <View className="flex flex-col items-stretch gap-2">
            <View className="px-4">
              <ImageComparison
                original="https://fastly.picsum.photos/id/367/500/500.jpg?hmac=Wzm0QDfnRl9RI_ViqGafJD9vlS12uturZnvzQkRyk0w"
                modified="https://fastly.picsum.photos/id/569/500/500.jpg?hmac=ehWrTx8EtAj6iSA-Wv78CBS2J-eAnucsXU-WJmartg8"
              />
            </View>
            <ModePicker />
          </View>
          <View style={{ height: 256 }} />
        </View>
        <SettingsPanel />
      </>
    </MainLayout>
  );
}

export default Index;
