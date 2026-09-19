import { color } from "@/assets/color";
import { totalFormatado } from "@/src/utils/FormatarMoeda";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { StyleSheet, Text, View } from "react-native";

interface boxMetasprops {
  nome: string;
  meta: number;
  saldo: number;
}

const BoxMetas = ({ nome, meta, saldo }: boxMetasprops) => {
  const pocentagem = Number(((saldo / meta) * 100).toFixed(1));

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <View style={styles.boxIcon}>
          <MaterialIcons name="map" size={24} color={"#FFFF"} />
        </View>
        <View>
          <Text style={styles.texto}>{nome}</Text>
        </View>
      </View>

      <Text style={styles.metaTexto}>
        {String(totalFormatado(saldo))}/{String(totalFormatado(meta))}
      </Text>

      <View style={styles.barraPocentagem}>
        <View style={styles.barraVazia}>
          <View
            style={[
              styles.preencherBarra,
              {
                width: `${pocentagem}%`,
              },
            ]}
          />
        </View>

        <View>
          <Text style={styles.metaTexto}>{String(pocentagem)}%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 140,
    backgroundColor: color.Background,
    borderRadius: 20,
    padding: 20,
    gap: 10,
  },

  boxIcon: {
    width: 40,
    height: 40,
    backgroundColor: color.corPrimaria,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  texto: {
    fontSize: 16,
    color: color.text,
    fontWeight: "bold",
  },

  metaTexto: {
    fontSize: 14,
    color: color.textSecundario,
    fontWeight: "bold",
  },

  barraPocentagem: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },

  barraVazia: {
    width: "85%",
    height: 13,
    backgroundColor: color.corPrimaria,
    borderRadius: 5,
  },

  preencherBarra: {
    height: 13,
    backgroundColor: color.colorBtn,
    borderRadius: 5,
  },
});

export default BoxMetas;
