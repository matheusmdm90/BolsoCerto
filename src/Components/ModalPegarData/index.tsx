import DateTimePicker from "@react-native-community/datetimepicker";

import { color } from "@/assets/color";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

type props = {
  mostrarModal: boolean;
  setMostrarModal: (e: boolean) => void;
  pegaDate: Date;
  setpegarDate: (date: Date) => void;
};

const ModalPegarData = ({
  mostrarModal,
  setMostrarModal,
  pegaDate,
  setpegarDate,
}: props) => {
  const pegarData = () => {
    setMostrarModal(false);
  };

  return (
    <Modal
      animationType="fade"
      transparent
      visible={mostrarModal}
      onRequestClose={() => setMostrarModal(false)}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <DateTimePicker
            value={pegaDate}
            mode="date"
            display="spinner"
            onValueChange={(_event, date) => {
              if (date) {
                setpegarDate(date);
              }
            }}
            themeVariant="dark"
            accentColor="#FFFF"
          />

          <Pressable
            accessibilityRole="button"
            onPress={pegarData}
            style={styles.confirmButton}
          >
            <Text style={styles.confirmText}>Confirmar data</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  container: {
    width: "100%",
    maxWidth: 380,
    alignItems: "center",
    padding: 16,
    borderRadius: 20,
    backgroundColor: color.Background,
  },
  confirmButton: {
    width: "100%",
    minHeight: 52,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
    borderRadius: 15,
    backgroundColor: color.colorBtn,
  },
  confirmText: {
    color: color.text,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ModalPegarData;
