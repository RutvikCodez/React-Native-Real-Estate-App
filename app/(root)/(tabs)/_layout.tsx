import React from "react";
import { Tabs } from "expo-router";
import TabBarIcon from "@/components/TabBarIcon";
import { tabs } from "@/constants/data";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      {tabs.map(({ name, title, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} icon={icon} title={title} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsLayout;
