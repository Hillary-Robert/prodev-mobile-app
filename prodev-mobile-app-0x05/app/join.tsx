import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/_join";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        
        
        <View style={styles.iconsection}>
          <Ionicons name="arrow-back" size={25} />
          <Image source={require("@/assets/images/logo.png")} />
        </View>

       
        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Create Your</Text>
          <Text style={styles.titleText}>Account</Text>
        </View>

        <Text style={styles.subText}>
          Enter your edetails to create your account.
        </Text>

        
        <View style={styles.formGroup}>
          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
              keyboardType="email-address"
              style={styles.formControl}
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput
                style={styles.passwordControl}
                secureTextEntry
              />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>


          <View style={{ marginTop: 20 }}>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput
                style={styles.passwordControl}
                secureTextEntry
              />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>

          
        </View>

  
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>

       
        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider}></View>
        </View>


        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={require("@/assets/images/google.png")} />
            <Text style={styles.secondaryButtonText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={require("@/assets/images/facebook.png")} />
            <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>

        {/* Signup prompt */}
        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>Already have an account? </Text>
          <Text style={styles.signupSubTitleText}>Sign</Text>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

