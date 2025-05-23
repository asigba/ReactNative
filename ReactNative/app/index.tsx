import { Text, TouchableOpacity, View, Image } from "react-native";
import { useRouter } from "expo-router";


export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{
          color: "#1976D2",           // A nice blue shade
          fontSize: 50,
          fontFamily: "Arial",        // Common, readable font
          fontWeight: "bold",         // Make it bold
          letterSpacing: 2,           // Add some spacing between letters
          textShadowColor: "#90caf9", // Light blue shadow
          textShadowOffset: { width: 2, height: 2 },
          textShadowRadius: 2,
      }}>Welcome</Text>
      <TouchableOpacity onPress={() => router.push("/pages/shapeGame")}><Image source={require("../images/shape.png")}
       style={{width: 60, height: 60}}/></TouchableOpacity>      
    </View>
  );
}
