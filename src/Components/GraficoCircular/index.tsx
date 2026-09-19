import { CORES_CATEGORIA } from "@/assets/color";
import { dataGasto } from "@/src/data/dataGasto";

import { StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import Graficocirculardescricao from "../GraficoCircularDescricao";

const GraficoCircular = () => {
  const total = dataGasto.reduce(
    (acumulado, item) => acumulado + item.valor,
    0,
  );

  const pieData = dataGasto.map((item) => ({
    value: Number(((item.valor / total) * 100).toFixed(1)),
    color: CORES_CATEGORIA[item.nome] ?? "#999999", // cor padrão caso a categoria não esteja no mapa
    text: item.nome,
    valorReal: item.valor,
  }));

  return (
    <View style={styles.container}>
      <PieChart
        data={pieData}
        donut
        showGradient
        sectionAutoFocus
        radius={130}
        innerRadius={90}
        innerCircleColor={"#232B5D"}
        centerLabelComponent={() => {
          return (
            <View style={styles.pieChartbox}>
              <Text style={styles.pieChartText1}>Total</Text>
              <Text style={styles.pieChartText2}>R$4.520,63</Text>
            </View>
          );
        }}
      />
      <View style={{ width: "100%", height: 450, marginTop: 30 }}>
        {pieData.map((item) => {
          return <Graficocirculardescricao item={item} key={item.text} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    height: 500,
    width: "100%",
  },

  pieChartbox: {
    justifyContent: "center",
    alignItems: "center",
  },

  pieChartText1: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
  pieChartText2: {
    fontSize: 14,
    color: "white",
  },
});

export default GraficoCircular;
