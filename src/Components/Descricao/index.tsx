import { color } from "@/assets/color";
import { StyleSheet, Text, TextInput, View } from "react-native";

type pros = {
  value: string;
  onChangeText: (text: string) => void;
};

const Descricao = ({ value, onChangeText }: pros) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textoheader}>Descrição (opcional)</Text>
      </View>
      <TextInput
        placeholder="Adicione uma descricao..."
        placeholderTextColor={color.textSecundario}
        value={value}
        onChangeText={onChangeText}
        style={styles.Input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: "100%",
    height: 30,
    gap: 10,
  },

  textoheader: {
    color: color.text,
    fontSize: 16,
    fontWeight: "bold",
  },

  Input: {
    width: "100%",
    height: 50,
    backgroundColor: color.Background,
    borderRadius: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    color: color.text,
  },
});

export default Descricao;
