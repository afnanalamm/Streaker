import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import { Tabs } from "expo-router";
import { NativeTabs  } from 'expo-router/unstable-native-tabs';
import { AntDesign } from '@react-native-vector-icons/ant-design';



// export default function RootLayout() {
//   return <Tabs>
//        <Tabs.Screen name='Trends' options={{
//           title: 'Trends',
//           tabBarIcon: ({color, focused}) => (
//           <AntDesign name="bar-chart" color="#ff0000" size={20} />
//           )}}/>
//         <Tabs.Screen name='Home' options={{
//           title: 'Home',
//           tabBarIcon: ({color, focused}) => (
//           <AntDesign name="home" color="#ff0000" size={20}/>
//           )}}/>
//         <Tabs.Screen name='Settings' options={{
//           title: 'Settings',
//           tabBarIcon: ({color, focused}) => (
//           <AntDesign name="setting" color="#ff0000" size={20} />
//           )}}/>
//   </Tabs>
// }



export default function TabLayout() {
  return (
    <NativeTabs minimizeBehavior="onScrollDown">
      <NativeTabs.Trigger name="Home">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="rectangle.stack" md= "playing_cards" />
      </NativeTabs.Trigger>

    <NativeTabs.Trigger name="Trends">
        <NativeTabs.Trigger.Label>Trends</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="chart.line.uptrend.xyaxis" md="analytics" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="Settings">
        <NativeTabs.Trigger.Icon sf="gear" md="settings" />
        <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

    </NativeTabs>
  );
}

