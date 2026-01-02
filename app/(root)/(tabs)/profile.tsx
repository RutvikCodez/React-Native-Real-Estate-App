import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import SettingsItem from "@/components/SettingsItem";
import { settings } from "@/constants/data";
import { useGlobalContext } from "@/lib/global-provider";
import { logout } from "@/lib/appwrite";

const Profile = () => {
  const { refetch, user } = useGlobalContext();
  console.log(user);

  const handleLogout = async () => {
    const result = await logout();
    if (result) {
      Alert.alert("Success", "You have been logged out successfully");
      await refetch();
    } else {
      Alert.alert("Error", "An error occurred while logging out");
    }
  };
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 w-11/12 mx-auto flex flex-col gap-5"
      >
        <View className="flex flex-row items-center justify-between">
          <Text className="text-xl font-rubik-bold">Profile</Text>
          <Image source={icons.bell} className="size-5" />
        </View>
        <View className="flex flex-row justify-center">
          <View className="flex flex-col items-center relative gap-2">
            <Image
              source={{ uri: user?.avatar }}
              className="size-44 relative rounded-full border "
            />
            <TouchableOpacity className="absolute bottom-11 right-2">
              <Image source={icons.edit} className="size-9" />
            </TouchableOpacity>
            <Text className=" text-2xl font-rubik-bold">{user?.name}</Text>
          </View>
        </View>
        <View className="flex flex-col gap-3">
          {settings.slice(0, 2).map((item, index) => (
            <SettingsItem key={index} {...item} />
          ))}
        </View>
        <View className="flex flex-col border-t pt-5 border-primary-200 gap-3">
          {settings.slice(2).map((item, index) => (
            <SettingsItem key={index} {...item} />
          ))}
        </View>
        <View className="flex flex-col border-t pt-5 border-primary-200 gap-3">
          <SettingsItem
            icon={icons.logout}
            title="Logout"
            textStyle={"text-danger"}
            showArrow={false}
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
