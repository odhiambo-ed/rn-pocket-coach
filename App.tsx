import "./global.css";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-gray-800">
        Welcome to RN Pocket Coach!
      </Text>
      <Text className="mt-2 text-gray-600">
        Personal finance + habit tracking app
      </Text>
      <View className="mt-4 rounded-lg bg-blue-500 px-6 py-3">
        <Text className="text-white font-semibold">Get Started</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
