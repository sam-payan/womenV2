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
import signin from "../assets/signin.png"
import globals from "../globals"
import { SafeAreaView } from "react-native-safe-area-context"
import { Link, useRouter } from "expo-router"

export default function Page() {
  const { push } = useRouter()
  const handleRegister = () => {
    push("/home")
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image style={globals.bgImg} source={bg} />
      <Text style={globals.heading}>Welcome Back User</Text>
      <Image style={globals.otp} source={signin} />
      <View style={[globals.gap]}>
        <TextInput
          style={[globals.input]}
          placeholder="Aadhar Number"
          placeholderTextColor="#666"
          keyboardType="numeric"
        />
        <TextInput
          style={[globals.input]}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry
        />
      </View>
      <TouchableOpacity
        onPress={handleRegister}
        style={[globals.btn, globals.btnBlack, { marginTop: 20 }]}
      >
        <Text style={[globals.textCenter, globals.textWhite]}>Sign In</Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 20 }}>
        Don't have an Account?{" "}
        <Link style={{ color: "blue" }} href={"/dashboard"}>
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
    padding: 20,
    justifyContent: "center",
  },
})
