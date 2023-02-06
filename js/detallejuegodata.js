class JuegoEsp {
  constructor(sistemaOperativoMin, sistemaOperativoRecom) {
    this.sistemaOperativoMin = sistemaOperativoMin;
    this.sistemaOperativoRecom = sistemaOperativoRecom;
  }
}
const juegosEsp = JSON.parse(localStorage.getItem("especificaciones"));

const inicializacionEsp = () => {
  const data = [
    {
      sistemaOperativoMin: "Windows 10 de 64 bits",
      sistemaOperativoRecom: "Windows 10 de 64 bits",
      procesadorMin:
        "Intel Core I5-6600 (3,3 GHz) o AMD Ryzen 5 1400 (3,2 GHz)",
      procesadorRecom:
        "Intel Core I7-8700 (3,2 GHz) o AMD Ryzen 5 3600 (3,6 GHz)",
      memoriaMin: "16 GB",
      memoriaRecom: "16 GB",
      almacenamientoMin: "85 GB en HDD",
      almacenamientoRecom: "85 GB en SSD",
      directXMin: "DX 12",
      directXRecom: "DX 12",
      tarjetagraficaMin:
        "NVIDIA GeForce GTX 960 (4GB) o AMD Radeon RX 470 (4GB)",
      tarjetagraficaRecom:
        "NVIDIA GeForce 1080 Ti o AMD Radeon RX 5700 XT o INTEL Arc A770",
      otrosMin:
        "SDD (preferiblemente), HDD (compatible), 1080p/60 FPS, ajustes de baja calidad, ajustes de rendimiento",
      otrosRecom:
        "SSD, 1080p/60 FPS, ajustes de alta calidad, ajustes de calidad",
      idiomasDisponibles:
        "Voces: inglés, italiano, español (España), español (Latinoamérica), japonés, portugués (Brasil), francés, alemán. Texto: inglés, italiano, español (España), español (Latinoamérica), árabe, japonés, portugués (Brasil), chino simplificado, chino tradicional, francés, alemán, coreano, polaco, ruso.",
    },
  ];

  data.forEach((item) => {
    let juEsp = new JuegoEsp(
      item.sistemaOperativoMin,
      item.sistemaOperativoRecom
    );
    juegosEsp.push(juEsp);
  });

  localStorage.setItem("especificaciones", JSON.stringify(juegosEsp));
};

inicializacionEsp();
