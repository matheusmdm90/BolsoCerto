import { StyleSheet, Text, View } from "react-native";

type typeHeander = {
  nome: string;
  hellcome?: string;
};

const Header = ({ nome, hellcome }: typeHeander) => {
  return (
    <View>
      <Text style={styles.title}>{nome}</Text>
      {hellcome ? <Text style={styles.text}>{hellcome}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#F7F7FA",
    fontSize: 25,
    fontWeight: "bold",
  },

  text: {
    color: "#8B929D",
    fontSize: 12,
    fontWeight: "500",
  },
});

export default Header;
