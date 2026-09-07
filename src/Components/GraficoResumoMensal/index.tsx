import { StyleSheet, Text, View } from "react-native";

const GraficoResumoMensal = () => {
  const meses = [
    { nome: "Jan", valor: 523 },
    { nome: "Fev", valor: 847 },
    { nome: "Mar", valor: 126 },
    { nome: "Abr", valor: 932 },
    { nome: "Mai", valor: 415 },
    { nome: "Jun", valor: 701 },
    { nome: "Jul", valor: 284 },
    { nome: "Ago", valor: 659 },
    { nome: "Set", valor: 78 },
    { nome: "Out", valor: 543 },
    { nome: "Nov", valor: 891 },
    { nome: "Dez", valor: 367 },
  ];

  const ultimosMeses = Array.from({ length: 7 }, (_, i) => {
    const data = new Date();
    // aqui e e rapetição do codigo onde ele sunbtrai o que esta em parentes (4 - i) o "i" e quantras vzs vai rodar esse codigo i = 0 a conta entre parentes ira ficar (4 - 0(i))
    // depois ele vai pegar o mes que eu estou data.getMonth() vai suntrai pela operção entre parentes
    // data.getMonth() - 4 (primeira vez que rodou o codigo )
    //data.getMonth() - 3 (primeira vez que rodou o codigo )

    data.setMonth(data.getMonth() - (6 - i));
    return meses[data.getMonth()];
  });

  //aqui eu pego o index do mes atual que nos estamos
  const indiceMesAtual = new Date().getMonth();

  // pecorro todo o array e pego o maior item
  const maxValue = Math.max(...ultimosMeses.map((d) => d.valor));
  //determino qual vai ser o tamanho maximo
  const MAX_BAR_HEIGHT = 100;

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.textResumo}>Resulmo mensal</Text>
        <Text style={styles.textRelatorio}>ver relatorio</Text>
      </View>

      <View style={styles.boxgrafico}>
        {ultimosMeses.map((mes) => (
          <View
            key={mes.nome}
            style={{
              alignItems: "center",
              gap: 10,
            }}
          >
            <View
              style={[
                styles.grafico,
                //aqui e o calculo para que respeite o tamno do box
                { height: (mes.valor / maxValue) * MAX_BAR_HEIGHT },
              ]}
            ></View>
            <Text
              style={
                meses.indexOf(mes) === indiceMesAtual
                  ? { color: "#6840F5" }
                  : { color: "#ffff" }
              }
            >
              {mes.nome}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 10,
    backgroundColor: "#111821",
    padding: 10,
    borderRadius: 10,
  },

  textResumo: {
    color: "#FFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  textRelatorio: {
    color: "#6840F5",
    fontSize: 12,
  },

  boxgrafico: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    width: "100%",
  },

  grafico: {
    width: 25,
    backgroundColor: "#6840F5",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default GraficoResumoMensal;
