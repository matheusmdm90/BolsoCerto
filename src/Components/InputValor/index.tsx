import { color } from "@/assets/color";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type props = {
  value: string;
  onChangeText: (texto: string) => void;
};

const InputValor = ({ value, onChangeText }: props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Valor</Text>
      <View style={styles.boxInput}>
        <TextInput
          style={styles.input}
          placeholder="R$ 0,00"
          keyboardType="numeric"
          placeholderTextColor={color.textSecundario}
          value={value}
          onChangeText={onChangeText}
        />
        <Pressable style={styles.calculadora}>
          <MaterialIcons name="calculate" size={26} color={color.text} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },

  boxInput: {
    flexDirection: "row",
    width: "100%",
    height: 80,
    backgroundColor: color.Background,
    borderRadius: 20,
    padding: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },

  input: {
    width: "85%",
    height: 80,
    fontSize: 24,
    color: color.text,
  },

  texto: {
    color: color.text,
    fontSize: 16,
    fontWeight: "bold",
  },
  calculadora: {
    width: "15%",
    height: 55,
    borderRadius: 20,
    backgroundColor: color.BackgroundBtn,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default InputValor;
