import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold">Edit app/index.tsx to edit this screen.</Text>
      <Link href={"/sign-in"}>Sign in</Link>
    </View>
  );
}
