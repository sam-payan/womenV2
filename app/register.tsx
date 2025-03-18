import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native"
import { StatusBar } from "expo-status-bar"
import bg from "../assets/bg.png"
import globals from "../globals"
import { SafeAreaView } from "react-native-safe-area-context"
import { Link, useRouter } from "expo-router"

export default function Page() {
  const { push } = useRouter()
  const handleRegister = () => {
    alert("Registered!")
    push("/otp")
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image style={globals.bgImg} source={bg} />
      <View style={[globals.gap]}>
        <Text style={globals.heading}>Welcome Onboard</Text>
        <Text style={[globals.textCenter]}>
          Your Mission is our mission. Together, let's create a safer world for
          every woman.
        </Text>
        <TextInput
          style={[globals.input, { marginTop: 20 }]}
          placeholder="Full Name"
          placeholderTextColor="#666"
        />
        <TextInput
          style={[globals.input]}
          placeholder="Aadhar Number"
          placeholderTextColor="#666"
          keyboardType="numeric"
        />
        <TextInput
          style={[globals.input]}
          placeholder="Phone Number"
          placeholderTextColor="#666"
          keyboardType="phone-pad"
        />
        <TextInput
          style={[globals.input]}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry
        />
        <TextInput
          style={[globals.input]}
          placeholder="Confirm Password"
          placeholderTextColor="#666"
          secureTextEntry
        />
        <TouchableOpacity
          onPress={handleRegister}
          style={[globals.btn, globals.btnBlack]}
        >
          <Text style={[globals.textCenter, globals.textWhite]}>Register</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ marginTop: 20 }}>
        Already have one?{" "}
        <Link style={{ color: "blue" }} href={"/otp"}>
          Sign In
        </Link>
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
  },
})
