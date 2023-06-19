import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function BlogPage() {
  return (
    <View>
      {/* either comment out unstable_settings or Stack.Screen(title) will work */}
      <Stack.Screen options={{ title: "Blog" }} />
      <Text>Blog</Text>
    </View>
  );
}
