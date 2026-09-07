import {
  MaterialIcons,
  MaterialIconsIconName,
} from "@react-native-vector-icons/material-icons";
import { StyleSheet, Text, View } from "react-native";

type typeBoxOrcamento = {
  nome: string;
  valor: string;
  icon: typeMaterialIcom;
  colorIcon: string;
  sizeIcon: number;
  corBorderBoxIcon: string;
  corBackgroudIcon: string;
};
type typeMaterialIcom = MaterialIconsIconName;

const BoxOrcamento = ({
  nome,
  valor,
  icon,
  colorIcon,
  sizeIcon,
  corBorderBoxIcon,
  corBackgroudIcon,
}: typeBoxOrcamento) => {
  return (
    <View style={styles.box}>
      <View>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.valor}>R${valor}</Text>
      </View>
      <View>
        <View
          style={[
            {
              borderColor: corBorderBoxIcon,
              backgroundColor: corBackgroudIcon,
            },
            styles.boxIcon,
          ]}
        >
          <MaterialIcons name={icon} color={colorIcon} size={sizeIcon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#1D2630",
    backgroundColor: "#111821",
    width: "49%",
    height: 76,
    padding: 13,
  },

  boxIcon: {
    borderWidth: 1,
    borderRadius: 100,
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },

  nome: {
    color: "#8F97A4",
    fontSize: 12,
    marginBottom: 6,
  },

  valor: {
    color: "#F7F7FA",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BoxOrcamento;
