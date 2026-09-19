import { color } from "@/assets/color";
import { StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

const GraficoCircular = () => {
  const dataGasto = [
    {
      id: 1,
      nome: "Alimentação",
      valor: 435.3,
    },
    {
      id: 3,
      nome: "Transporte",
      valor: 855.3,
    },
    {
      id: 4,
      nome: "Lazer",
      valor: 1050.63,
    },
    {
      id: 4,
      nome: "Outros",
      valor: 150.5,
    },
  ];

  const total = dataGasto.reduce(
    (acumulado, item) => acumulado + item.valor,
    0,
  );

  const CORES_CATEGORIA: Record<string, string> = {
    Alimentação: "#FF6B6B",
    Transporte: "#4D96FF",
    Lazer: "#FFD93D",
    Outros: "#6BCB77",
  };

  const pieData = dataGasto.map((item) => ({
    value: Number(((item.valor / total) * 100).toFixed(1)),
    color: CORES_CATEGORIA[item.nome] ?? "#999999", // cor padrão caso a categoria não esteja no mapa
    text: item.nome,
    valorReal: item.valor,
  }));

  const totalFormatado = (valor: number) =>
    valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <View
      style={{ padding: 20, alignItems: "center", height: 500, width: "100%" }}
    >
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
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text
                style={{ fontSize: 22, color: "white", fontWeight: "bold" }}
              >
                Total
              </Text>
              <Text style={{ fontSize: 14, color: "white" }}>R$4.520,63</Text>
            </View>
          );
        }}
      />
      <View style={{ width: "100%", height: 450 }}>
        <View>
          {pieData.map((item) => {
            return (
              <View
                key={item.text}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    height: 15,
                    width: 15,
                    backgroundColor: item.color,
                    borderRadius: 100,
                  }}
                />

                <Text style={styles.Texto}>{item.text}</Text>
                <Text style={styles.Texto}>{item.value}%</Text>
                <Text style={styles.valor}>
                  {totalFormatado(item.valorReal)}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Texto: {
    color: color.text,
    fontSize: 14,
  },
  valor: {
    color: color.textSecundario,
    fontSize: 14,
  },
});

export default GraficoCircular;
