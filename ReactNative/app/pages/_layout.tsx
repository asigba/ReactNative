import { Stack } from "expo-router";
import ShapeGame from "./shapeGame";

export default function _Layout() {
    return(<Stack>
        <Stack.Screen name="pages" options={{headerShown: false}} />
        <Stack.Screen name="shapeGame" options={{headerShown: false}} />
    </Stack>);
}