import { Link } from "expo-router";
import { View } from "react-native";

export default function () {
  return (
    <View>
      <Link href="/blogs/1">First Blog (with unstable_settings)</Link>
    </View>
  );
}
