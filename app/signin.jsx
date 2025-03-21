import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import bg from "../assets/bg.png";
import signin from "../assets/signin.png";
import globals from "../globals";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Page() {
  const { push } = useRouter();

  // form input handler state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  } 

  const handleSignIn = () => {
    // alert(formData.email)
    // alert(formData.password)
    push("/welcome");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Image style={globals.bgImg} source={bg} />
      <Text style={globals.heading}>Welcome Back User</Text>
      <Image style={globals.otp} source={signin} />

      <View style={[globals.gap]}>
        <TextInput
          style={[globals.input]}
          placeholder="Email"
          placeholderTextColor="#666"
          keyboardType="email-address"
          value={formData.email}
          onChangeText={(text) => handleInputChange("email", text)}
        />
        <TextInput
          style={[globals.input]}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry
          value={formData.password}
          onChangeText={(text) => handleInputChange("password", text)}
        />
      </View>

      <TouchableOpacity
        onPress={handleSignIn}
        style={[globals.btn, globals.btnBlack, { marginTop: 20 }]}
      >
        <Text style={[globals.textCenter, globals.textWhite]}>  <Link href="/welcome">Sign In</Link></Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 20 }}>
        Don't have an Account?{" "}
        <Link style={{ color: "blue" }} href="/register">
          Register
        </Link>
      </Text>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    padding: 30,
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 50,
    padding: 10,
  },
});

