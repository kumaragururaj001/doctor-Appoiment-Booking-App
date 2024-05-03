import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import HospitalDoctors from "../Screens/HospitalDoctors";
import HospitalDetailes from "../Screens/HospitalDetailes";
import BookAppointment from "../Screens/BookAppointment";

const Stack = createStackNavigator();

export default function Homenavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Hospital-Doctors" component={HospitalDoctors} />
      <Stack.Screen name="Hospital-Detailes" component={HospitalDetailes} />
      <Stack.Screen name="Book-Appointment" component={BookAppointment} />
    </Stack.Navigator>
  );
}
