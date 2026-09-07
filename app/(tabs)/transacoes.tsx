import { color } from "@/assets/color";
import FlatListTransacoes from "@/src/Components/FlatListTransacoes";
import Header from "@/src/Components/Heades";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Transacoes = () => {
  const [selecionado, setSelecionado] = useState("");

  const opcaoheader = [
    {
      nome: "Todas",
      value: "",
    },

    {
      nome: "Despesa",
      value: "0",
    },
    {
      nome: "receita",
      value: "1",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header nome="Transações" />

      <View style={styles.boxHeader}>
        {opcaoheader.map((item) => (
          <Pressable
            key={item.nome}
            onPress={() => setSelecionado(item.value)}
            style={
              selecionado === item.value
                ? styles.selecionado
                : styles.naoSelecionado
            }
          >
            <Text
              style={
                selecionado === item.value
                  ? styles.textHeaderSelecionado
                  : styles.textHeaderNaoSelecionado
              }
            >
              {item.nome}
            </Text>
          </Pressable>
        ))}
      </View>
      <View style={{ height: "85%" }}>
        <FlatListTransacoes opcao={selecionado} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: color.corPrimaria,
    gap: 20,
  },

  principal: {
    color: color.text,
    fontSize: 16,
    fontWeight: "bold",
  },

  boxHeader: {
    width: "100%",
    height: 45,
    backgroundColor: color.Background,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderRadius: 25,
  },

  textHeaderSelecionado: {
    color: color.text,
    fontSize: 14,
  },
  textHeaderNaoSelecionado: {
    color: color.textSecundario,
    fontSize: 14,
  },

  selecionado: {
    backgroundColor: color.colorBtn,
    width: 76,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },

  naoSelecionado: {
    alignItems: "center",
    justifyContent: "center",
    width: 76,
    height: 30,
  },
});

export default Transacoes;
