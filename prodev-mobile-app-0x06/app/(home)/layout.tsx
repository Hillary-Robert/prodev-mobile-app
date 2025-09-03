import {
  AntDesign,
  EvilIcons,
  Feather,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import "../../styles/global.css";


const HomeRootLayout = () => {
  return (
    <Tabs
      screenOptions={{ tabBarActiveTintColor: "#34967c", headerShown: false }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",

          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "search",
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "saved",
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <EvilIcons name="heart" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbubbles-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-o" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};


export default HomeRootLayout;
