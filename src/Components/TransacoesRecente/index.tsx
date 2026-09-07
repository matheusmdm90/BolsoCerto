import { StyleSheet, Text, View } from "react-native";
import FlatListTransacoes from "../FlatListTransacoes";

const Transacoesrecentes = () => {
  return (
    <View style={{ height: "100%" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <Text style={styles.textTransacoes}>Transações Recentes </Text>
        <Text style={styles.textVerTodas}> ver Todas</Text>
      </View>
      <FlatListTransacoes />
    </View>
  );
};

const styles = StyleSheet.create({
  textTransacoes: {
    color: "#FFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  textVerTodas: {
    color: "#6840F5",
    fontSize: 16,
  },
});

export default Transacoesrecentes;
