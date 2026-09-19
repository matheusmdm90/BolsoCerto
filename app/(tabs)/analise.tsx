import { color } from "@/assets/color";
import GraficoCircular from "@/src/Components/GraficoCircular";
import Header from "@/src/Components/Heades";
import OpcaoTransacoes from "@/src/Components/OpcaoTransacoes/indez";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const analise = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header nome="Analize" />

      <OpcaoTransacoes />

      <GraficoCircular />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: color.corPrimaria,
    gap: 20,
  },
});
export default analise;
