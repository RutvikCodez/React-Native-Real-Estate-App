import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { Redirect } from "expo-router";

const SignIn = () => {
  const {refetch,loading,isLogged} = useGlobalContext()
  if (!loading && isLogged) return <Redirect href="/" />;
  const handleLogin = async () => {
    const result = await login();
    if (result) {
      refetch()
    } else {
      Alert.alert("Error", "Failed")
    }
  };
  return (
    <SafeAreaView className="bg-white w-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="flex flex-col gap-4">
          <View className="flex flex-col gap-12">
            <View className="flex flex-col gap-2">
              <Text className="text-base text-center uppercase font-rubik text-black-200">
                Welcome to ReState
              </Text>
              <Text className="text-3xl font-rubik-bold text-black-300 text-center">
                Let&apos;s Get You Closer to {"\n"}
                <Text className="text-primary-300">Your Ideal Home</Text>
              </Text>
            </View>
            <Text className="text-lg font-rubik text-black-200 text-center">
              Login to ReState with Google
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 android:elevation-5"
          >
            <View className="flex flex-row justify-center items-center gap-2">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik-medium  text-black-300">
                Continue With Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
