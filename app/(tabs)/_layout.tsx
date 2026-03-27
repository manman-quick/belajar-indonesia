import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Platform, View, Text } from "react-native";
import { useColors } from "@/hooks/use-colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

function TabIcon({ name, color, label }: { name: string; color: string; label: string }) {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <MaterialIcons name={name as any} size={24} color={color} />
    </View>
  );
}

export default function TabLayout() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const bottomPadding = Platform.OS === "web" ? 12 : Math.max(insets.bottom, 8);
  const tabBarHeight = 60 + bottomPadding;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        headerShown: false,
        tabBarStyle: {
          paddingTop: 8,
          paddingBottom: bottomPadding,
          height: tabBarHeight,
          backgroundColor: colors.background,
          borderTopColor: colors.border,
          borderTopWidth: 0.5,
          elevation: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.05,
          shadowRadius: 4,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
          marginTop: 2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "学习",
          tabBarIcon: ({ color }) => <TabIcon name="school" color={color} label="学习" />,
        }}
      />
      <Tabs.Screen
        name="review"
        options={{
          title: "复习",
          tabBarIcon: ({ color }) => <TabIcon name="style" color={color} label="复习" />,
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: "统计",
          tabBarIcon: ({ color }) => <TabIcon name="bar-chart" color={color} label="统计" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "我的",
          tabBarIcon: ({ color }) => <TabIcon name="person" color={color} label="我的" />,
        }}
      />
    </Tabs>
  );
}
