import { color } from "@/assets/color";
import BoxMetas from "@/src/Components/BoxMetas";
import Header from "@/src/Components/Heades";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const metas = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header nome="Metas" />

      <BoxMetas meta={10000.0} nome="Vliagem" saldo={8029.0} />
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
export default metas;
