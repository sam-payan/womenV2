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
import globals from "../globals";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Page() {
  const { push } = useRouter();

  // form input handler state
  const [formData, setFormData] = useState({
    name: "",
    aadhar: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateInputs = async () => {
    const { name, aadhar, phone, email, password, confirmPassword } = formData;

    if (!name || !aadhar || !phone || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return false;
    }

    if (aadhar.length !== 12 || !/^\d{12}$/.test(aadhar)) {
      alert("Aadhaar number must be exactly 12 digits.");
      return false;
    }

    if (phone.length !== 10 || !/^\d{10}$/.test(phone)) {
      alert("Phone number must be exactly 10 digits.");
      return false;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }

    // Simulating API call to check if email and phone exist
    const emailExists = await checkEmailExists(email);
    const phoneExists = await checkPhoneExists(phone);

    //if (!emailExists) {
    //  alert("Email does not exist.");
    //  return false;
    //}

    //if (!phoneExists) {
    //  alert("Phone number does not exist.");
    // return false;
    //}

    return true;
  };

  const checkEmailExists = async (email) => {
    // Replace with actual API call
    const existingEmails = ["test@example.com", "user@email.com"];
    return existingEmails.includes(email);
  };

  const checkPhoneExists = async (phone) => {
    // Replace with actual API call
    const existingPhones = ["9876543210", "1234567890"];
    return existingPhones.includes(phone);
  };

  const handleRegister = async () => {
    const isValid = await validateInputs();
    if (!isValid) return;

    console.log("Form Data:", formData);
    alert("Registration successful!");
    push("/otp");
  };

  return (
    <SafeAreaView style={styles.container}>
       <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

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
          value={formData.name}
          onChangeText={(text) => handleInputChange("name", text)}
        />

        <TextInput
          style={[globals.input]}
          placeholder="Aadhar Number"
          placeholderTextColor="#666"
          keyboardType="numeric"
          maxLength={12}
          value={formData.aadhar}
          onChangeText={(text) => handleInputChange("aadhar", text)}
        />

        <TextInput
          style={[globals.input]}
          placeholder="Phone Number"
          placeholderTextColor="#666"
          keyboardType="phone-pad"
          maxLength={10}
          value={formData.phone}
          onChangeText={(text) => handleInputChange("phone", text)}
        />

        <TextInput
          style={[globals.input]}
          placeholder="Enter Email"
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

        <TextInput
          style={[globals.input]}
          placeholder="Confirm Password"
          placeholderTextColor="#666"
          secureTextEntry
          value={formData.confirmPassword}
          onChangeText={(text) => handleInputChange("confirmPassword", text)}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
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
