import { transacoes } from "@/src/data/dataTrasacoes";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { FlatList, StyleSheet, Text, View } from "react-native";

type typeFlatListTransacoes = {
  opcao?: string | number;
};

const FlatListTransacoes = ({ opcao }: typeFlatListTransacoes) => {
  const transacoesFiltrado =
    opcao === undefined || opcao === ""
      ? transacoes
      : transacoes.filter((item) => item.tipo === Number(opcao));

  function formatarData(data: Date): string {
    return `${String(data.getDate()).padStart(2, "0")}-${String(
      data.getMonth() + 1,
    ).padStart(2, "0")}-${data.getFullYear()}`;
  }

  const hojeFormatado = formatarData(new Date());
  return (
    <FlatList
      data={transacoesFiltrado}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <View style={styles.boxLista}>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            {item.tipo === 1 ? (
              <View style={styles.boxIcon}>
                <MaterialIcons name="arrow-outward" size={20} color="#35D39A" />
              </View>
            ) : (
              <View style={styles.boxIconDispesa}>
                <MaterialIcons
                  name="arrow-downward"
                  size={20}
                  color="#FF6678"
                />
              </View>
            )}

            <View style={{ gap: 7 }}>
              <Text style={styles.textNome}>{item.nome}</Text>
              <Text style={styles.textTipo}>
                {item.tipo === 1 ? "Receita" : "Despesa"}
              </Text>
            </View>
          </View>

          <View style={{ gap: 7, alignItems: "flex-end" }}>
            <Text style={styles.textValor}>R$ {item.valor}</Text>
            <Text style={styles.textData}>
              {item.data === hojeFormatado ? "Hoje" : `${item.data}`}
            </Text>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  boxLista: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 62,
    backgroundColor: "#111821",
    marginBottom: 10,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },

  boxIcon: {
    borderWidth: 1,
    borderColor: "#35D39A",
    backgroundColor: "#35d39939",

    borderRadius: 100,
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },

  boxIconDispesa: {
    borderWidth: 1,
    borderColor: "#FF6678",
    backgroundColor: "#FF667839",

    borderRadius: 100,
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },

  textNome: {
    color: "#FFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  textTipo: {
    color: "#747C87",
    fontSize: 12,
  },
  textValor: {
    color: "#35D39A",
    fontSize: 12,
  },
  textData: {
    color: "#747C87",
    fontSize: 12,
  },
});

export default FlatListTransacoes;
