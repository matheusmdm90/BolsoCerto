import Vector from "@/assets/svg/vector";
import { StyleSheet, Text, View } from "react-native";

type typeSaldo = {
  saldo: string;
  pocentagem: string;
};

const Saldo = ({ saldo, pocentagem }: typeSaldo) => {
  return (
    <View style={styles.box}>
      <View style={{ padding: 25 }}>
        <Text style={styles.texto}>Saldo Atual</Text>
        <Text style={styles.saldo}>{saldo}</Text>
        <Text style={styles.pocentagem}>{pocentagem}</Text>
      </View>
      <View style={styles.svg}>
        <Vector />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    position: "relative",
    borderWidth: 1,
    borderColor: "#242B35",
    borderRadius: 35,
    backgroundColor: "#111821",
    width: "100%",
    height: 143,
    overflow: "hidden",
  },

  texto: {
    color: "#A6ACB7",
    fontSize: 13,
    marginBottom: 11,
  },

  saldo: {
    color: "#ffff",
    fontSize: 29,
    fontWeight: "bold",
    marginBottom: 4,
  },

  pocentagem: {
    color: "#35D39A",
    fontSize: 12,
    fontWeight: "bold",
  },
  svg: {
    position: "absolute",
    bottom: 0,
    right: -10,
  },
});

export default Saldo;
