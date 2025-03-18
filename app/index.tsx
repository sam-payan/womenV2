import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import { StatusBar } from "expo-status-bar"
import bg from "../assets/bg.png"
import hat from "../assets/hat.png"
import globals from "../globals"
import { SafeAreaView } from "react-native-safe-area-context"
import { Link } from "expo-router"

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={globals.bgImg} source={bg} />
      <View style={[globals.gap]}>
        <Text style={globals.heading}>Welcome Onboard</Text>
        <Text style={[globals.textCenter]}>
          Your Mission is our mission. Together, let's create a safer world for
          every woman.
        </Text>
        <Image style={globals.hat} source={hat} />
        <TouchableOpacity style={globals.btn}>
          <Text style={globals.textCenter}>Job Holder</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globals.btn}>
          <Text style={globals.textCenter}>Collage Student</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[globals.btn, globals.btnBlack, { marginTop: 100 }]}
        >
          <Link
            href={"/register"}
            style={[globals.textCenter, globals.textWhite]}
          >
            Continue
          </Link>
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
