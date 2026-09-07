import BoxOrcamento from "@/src/Components/BoxOrcamento";
import GraficoResumoMensal from "@/src/Components/GraficoResumoMensal";
import Header from "@/src/Components/Heades";
import Saldo from "@/src/Components/Saldo";
import Transacoesrecentes from "@/src/Components/TransacoesRecente";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Header nome="Home" hellcome="Bem-vindo ao BolsoCerto!" />
      <Saldo saldo="R$ 4.865,53" pocentagem="+12,5% este Mês" />

      <View style={styles.orcamento}>
        <BoxOrcamento
          nome="Total Receita"
          valor="100,20"
          icon="arrow-outward"
          colorIcon="#35D39A"
          sizeIcon={20}
          corBackgroudIcon="#35d39939"
          corBorderBoxIcon="#35D39A"
        />
        <BoxOrcamento
          nome="Total despesa"
          valor="85,20"
          icon="arrow-downward"
          colorIcon="#FF6678"
          sizeIcon={20}
          corBackgroudIcon="#FF667839"
          corBorderBoxIcon="#FF6678"
        />
      </View>
      <GraficoResumoMensal />
      <Transacoesrecentes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#090d12",
    gap: 20,
  },

  orcamento: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
});
