import { color } from "@/assets/color";
import { Pressable, Text, View } from "react-native";

type props = {
  onPress: () => void;
};

const BtnSalvar = ({ onPress }: props) => {
  return (
    <View style={{ width: "100%", height: "20%", justifyContent: "flex-end" }}>
      <Pressable
        style={{
          width: "100%",
          height: 60,
          borderRadius: 15,
          backgroundColor: color.colorBtn,
          marginTop: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={onPress}
      >
        <Text style={{ color: color.text, fontSize: 16, fontWeight: "bold" }}>
          Salvar Transação
        </Text>
      </Pressable>
    </View>
  );
};

export default BtnSalvar;
