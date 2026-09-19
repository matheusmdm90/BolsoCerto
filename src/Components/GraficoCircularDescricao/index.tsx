import { color } from "@/assets/color";
import { totalFormatado } from "@/src/utils/FormatarMoeda";
import { StyleSheet, Text, View } from "react-native";

type itemProps = {
  item: {
    text: string;
    color: string;
    value: number;
    valorReal: number;
  };
};

const Graficocirculardescricao = ({ item }: itemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.boxleft}>
        <View
          style={{
            height: 15,
            width: 15,
            backgroundColor: item.color,
            borderRadius: 8,
          }}
        />
        <Text style={styles.texto}>{item.text}</Text>
      </View>

      <View style={styles.boxright}>
        <Text style={styles.texto}>{`${item.value}%`}</Text>
        <Text style={styles.valor}>
          {String(totalFormatado(item.valorReal))}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
  },

  boxleft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "50%",
    gap: 10,
  },

  boxright: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "50%",
  },

  texto: {
    color: color.text,
    fontSize: 14,
    textAlign: "center",
  },
  valor: {
    color: color.textSecundario,
    fontSize: 14,
    textAlign: "center",
  },
});

export default Graficocirculardescricao;
