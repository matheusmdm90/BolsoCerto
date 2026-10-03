import { color } from "@/assets/color";

import MaterialIcons from "@react-native-vector-icons/material-icons";

import { Pressable, StyleSheet, Text, View } from "react-native";

type props = {
  date: Date;
  onSelectDate: (e: boolean) => void;
};

const DataTransacao = ({ date, onSelectDate }: props) => {
  const dataFormatada = date.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textoheader}>Data</Text>
      </View>

      <Pressable
        style={styles.boxBtn}
        onPress={() => onSelectDate(true)}
        accessibilityRole="button"
        accessibilityLabel="Selecionar data"
      >
        <View style={styles.btn}>
          <MaterialIcons
            name="calendar-month"
            size={24}
            color={color.textSecundario}
          />
        </View>
        <Text style={styles.textBtn}>{dataFormatada}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: "50%",
    minHeight: 50,
    gap: 10,
  },

  textoheader: {
    color: color.text,
    fontSize: 16,
    fontWeight: "bold",
  },

  boxBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  btn: {
    width: 40,
    height: 40,
    backgroundColor: color.BackgroundBtn,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  textBtn: {
    color: color.text,
    fontSize: 14,
  },
});

export default DataTransacao;
