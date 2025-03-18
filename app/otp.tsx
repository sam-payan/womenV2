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
import otp from "../assets/otp.png"
import globals from "../globals"
import { SafeAreaView } from "react-native-safe-area-context"
import { Link } from "expo-router"

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={globals.bgImg} source={bg} />
      <View style={[globals.gap]}>
        <Text style={globals.heading}>Confirm OTP</Text>
        <Text style={[globals.textCenter]}>
          Your Mission is our mission. Together, let's create a safer world for
          every woman.
        </Text>
        <Image style={globals.otp} source={otp} />

        <TextInput
          style={[globals.input, { marginTop: 20 }]}
          placeholder="Enter OTP"
          placeholderTextColor="#666"
        />

        <TouchableOpacity style={[globals.btn, globals.btnBlack]}>
          <Link
            href={"/signin"}
            style={[globals.textCenter, globals.textWhite]}
          >
            Verify
          </Link >
        </TouchableOpacity>
      </View>

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
