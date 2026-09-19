import { color } from "@/assets/color";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const OpcaoTransacoes = () => {
  const [selecionado, setSelecionado] = useState("0");
  return (
    <View style={styles.box}>
      <Pressable
        style={
          selecionado === "0" ? styles.btnDespesa : styles.btnNaoSelecionado
        }
        onPress={() => setSelecionado("0")}
      >
        <Text
          style={
            selecionado === "0"
              ? styles.textSelecionado
              : styles.textNaoSelecionado
          }
        >
          Despesa
        </Text>
      </Pressable>
      <Pressable
        style={
          selecionado === "1" ? styles.btnReceita : styles.btnNaoSelecionado
        }
        onPress={() => setSelecionado("1")}
      >
        <Text
          style={
            selecionado === "1"
              ? styles.textSelecionado
              : styles.textNaoSelecionado
          }
        >
          Receita
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    width: "100%",
    height: 45,
    backgroundColor: color.Background,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 25,
  },

  btnReceita: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: 40,
    backgroundColor: "#35D39A",
    borderRadius: 25,
  },
  btnDespesa: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: 40,
    backgroundColor: "#FF6678",
    borderRadius: 25,
  },

  btnNaoSelecionado: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: 40,
    borderRadius: 25,
  },

  textSelecionado: {
    color: color.text,
    fontSize: 16,
    fontWeight: "bold",
  },

  textNaoSelecionado: {
    color: color.textSecundario,
    fontSize: 14,
  },
});

export default OpcaoTransacoes;
