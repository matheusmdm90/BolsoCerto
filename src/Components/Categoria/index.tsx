import { color } from "@/assets/color";
import { dataCategorias } from "@/src/data/dataCategoria";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface categoriaprops {
  tipoTransacao: number;
  categoriaSelecionada: string;
  tipocategoria: (dados: string) => void;
}

const Categoria = ({
  tipoTransacao,
  categoriaSelecionada,
  tipocategoria,
}: categoriaprops) => {
  const filtrarcategoria = dataCategorias.filter(
    (item) => item.tipo === tipoTransacao,
  );

  const handleCategoria = (nomeCategoria: string) => {
    tipocategoria(nomeCategoria);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textoheader}>Categoria</Text>
      </View>

      <View style={styles.boxCategoria}>
        {filtrarcategoria.map((item) => (
          <Pressable
            key={item.id}
            style={styles.boxBtn}
            onPress={() => handleCategoria(item.nome)}
          >
            <View
              style={[
                styles.btn,
                categoriaSelecionada === item.nome && {
                  backgroundColor:
                    tipoTransacao === 1 ? "#69f0afd6" : "#FF5252",
                },
              ]}
            >
              <MaterialIcons
                name={item.icone}
                size={24}
                color={
                  categoriaSelecionada === item.nome
                    ? color.text
                    : color.textSecundario
                }
              />
            </View>
            <Text style={[styles.textcategoria]}> {item.nome}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 180,
    gap: 10,
    marginTop: 20,
  },

  textoheader: {
    color: color.text,
    fontSize: 16,
    fontWeight: "bold",
  },

  boxCategoria: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },

  boxBtn: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },

  btn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.BackgroundBtn,
    borderRadius: 50,
    width: 55,
    height: 55,
  },

  textcategoria: {
    color: color.text,
    fontSize: 12,
  },
});
export default Categoria;
