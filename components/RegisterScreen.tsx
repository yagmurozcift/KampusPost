import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import CustomInput from './CustomInput';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  const handleRegister = () => {
    // 1) Şifreler eşit mi kontrol et
    if (password !== passwordAgain) {
      Alert.alert('Hata', 'Şifreler uyuşmuyor!');
      return;
    }

    // 2) Şifreler aynıysa şimdilik sadece log at
    console.log('Kayıt başarılı:', email);
    Alert.alert('Başarılı', 'Kayıt başarılı! (Sadece simülasyon)');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kayıt Ol</Text>

      <CustomInput
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
      />

      <CustomInput
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <CustomInput
        placeholder="Şifre Tekrar"
        value={passwordAgain}
        onChangeText={setPasswordAgain}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2979FF',
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 16,
  },
});
