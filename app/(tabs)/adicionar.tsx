import { color } from "@/assets/color";
import BtnSalvar from "@/src/Components/BtnSalvar";
import Categoria from "@/src/Components/Categoria";
import DataTransacao from "@/src/Components/DataTransacao";
import Descricao from "@/src/Components/Descricao";
import Header from "@/src/Components/Heades";
import InputValor from "@/src/Components/InputValor";
import KeyboardDismiss from "@/src/Components/KeyboardDismiss";
import ModalPegarData from "@/src/Components/ModalPegarData";
import OpcaoTransacoes from "@/src/Components/OpcaoTransacoes";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useFocusEffect } from "expo-router";

import { useCallback, useState } from "react";

import { Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Adicionar = () => {
  const [data, setData] = useState(new Date());
  const [transacaoSelecionada, setTransacaoSelecionada] = useState(0);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [valor, setValor] = useState("");
  const [mostarModalDate, setMostrarModalDate] = useState(false);
  const [descricao, setDescricao] = useState("");

  useFocusEffect(
    useCallback(() => {
      setData(new Date());
      setDescricao("");
      setValor("");
      setCategoriaSelecionada("");
    }, []),
  );

  const dataFormatada = data.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "2-digit",
    year: "numeric",
  });

  const submit = () => {
    console.log(categoriaSelecionada);
    console.log(transacaoSelecionada);
    console.log(dataFormatada);
    console.log(Number(valor.replace(",", ".")) || 0);
    console.log(descricao);
  };

  return (
    <KeyboardDismiss>
      <SafeAreaView edges={["top", "left", "right"]} style={styles.container}>
        <Header nome="Nova Transação" />
        <OpcaoTransacoes
          transacao={(tipoTransacao) => setTransacaoSelecionada(tipoTransacao)}
        />
        <InputValor value={valor} onChangeText={(texto) => setValor(texto)} />

        <Categoria
          tipoTransacao={transacaoSelecionada}
          categoriaSelecionada={categoriaSelecionada}
          tipocategoria={(categoria) => setCategoriaSelecionada(categoria)}
        />

        <DataTransacao date={data} onSelectDate={setMostrarModalDate} />

        <Descricao
          value={descricao}
          onChangeText={(text) => setDescricao(text)}
        />

        <BtnSalvar onPress={() => submit()} />

        {Platform.OS === "ios" && (
          <ModalPegarData
            mostrarModal={mostarModalDate}
            setMostrarModal={setMostrarModalDate}
            pegaDate={data}
            setpegarDate={setData}
          />
        )}

        {Platform.OS === "android" && mostarModalDate && (
          <DateTimePicker
            value={data}
            mode="date"
            display="spinner"
            onValueChange={(_event, date) => {
              setMostrarModalDate(false);
              setData(date);
            }}
          />
        )}
      </SafeAreaView>
    </KeyboardDismiss>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 8,
    backgroundColor: color.corPrimaria,
    gap: 5,
    marginBottom: 0,
    justifyContent: "space-between",
  },
});

export default Adicionar;
