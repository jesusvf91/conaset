export type Stake = "alcohol" | "velocidad" | "sri";

export type Question = {
  id: string;
  prompt: string;
  choices: string[];
  answer: string;
  explain: string;
  stake?: Stake;
};

export type Block = {
  heading: string;
  text: string;
};

export type Topic = {
  id: string;
  title: string;
  pages: string;
  lead: string;
  blocks: Block[];
  questions: Question[];
};

export const QUIZ_SIZE = 8;
export const TOPIC_PASS = 7;
export const FINAL_SIZE = 35;
export const FINAL_PASS = 33;
export const FINAL_MAX = 38;

export const TOPICS: Topic[] = [
  {
    id: "siniestros",
    title: "Los siniestros de tránsito",
    pages: "6 a 9",
    lead: "El libro no dice accidente. Dice siniestro. Casi siempre alguien se equivocó. Eso pasa en más de 90 de cada 100 choques.",
    blocks: [
      {
        heading: "Por qué no se llaman accidentes",
        text: "Accidente quiere decir que pasó por suerte. Nadie podía saberlo. Un siniestro de tránsito no es así. Hay más choques cuando llueve. Hay más choques de noche. Hay más choques si alguien tomó alcohol. Por eso se pueden evitar.",
      },
      {
        heading: "Cifras que el libro usa",
        text: "En Chile hay más de 82.000 siniestros al año. Mueren unas 1.600 personas. Son 4 o 5 personas cada día. Unas 450 de esas muertes son atropellos. 8 de cada 10 choques pasan en la ciudad, sobre todo en un cruce. La mayoría de las muertes pasa en la carretera, fuera de la ciudad. En más de 90 de cada 100 choques hubo una falla de una persona. Carabineros cuenta a un fallecido solo si muere dentro de 48 horas.",
      },
      {
        heading: "Velocidad y peatones",
        text: "Si un auto va a 30 km/h o menos y atropella a una persona, esa persona vive en cerca de 9 de cada 10 casos. Si el auto va a 50 km/h, es 8 veces más probable que muera. A 45 km/h o más, muere más de la mitad. A 65 km/h, lo más probable es que muera.",
      },
      {
        heading: "Sistema Seguro",
        text: "Desde 2017 Chile usa el Sistema Seguro. También se llama Visión Cero. La idea es simple: nadie debería morir ni quedar grave en la calle. Las personas se equivocan. Eso va a pasar. La calle y el auto tienen que estar hechos para que un error no mate. La culpa no es solo de quien maneja. También es de quien hace la calle. Los siniestros cuestan cerca del 2% de todo lo que produce el país. Eso se llama PIB.",
      },
    ],
    questions: [
      {
        id: "s1",
        prompt: "¿Por qué el libro dice siniestro y no accidente?",
        choices: [
          "Porque un siniestro se puede evitar. No es solo mala suerte.",
          "Porque la ley usa esa palabra solo cuando alguien muere.",
          "Porque accidente es la palabra que usa Carabineros.",
        ],
        answer: "Porque un siniestro se puede evitar. No es solo mala suerte.",
        explain:
          "Hay más choques con lluvia, de noche y con alcohol. Si fuera solo suerte, eso no cambiaría nada. Por eso el libro dice siniestro.",
      },
      {
        id: "s2",
        prompt: "¿Dónde hay más choques?",
        choices: [
          "En la ciudad, sobre todo en los cruces.",
          "En la carretera. Ahí también mueren más personas.",
          "En el campo. Ahí está cerca del 80%.",
        ],
        answer: "En la ciudad, sobre todo en los cruces.",
        explain:
          "Cerca de 8 de cada 10 choques pasan en la ciudad. La mayoría de las muertes pasa fuera de la ciudad.",
      },
      {
        id: "s3",
        prompt: "Un auto iba a 30 km/h y ahora va a 50. Atropella a una persona. ¿Qué pasa?",
        choices: [
          "Es 8 veces más probable que muera.",
          "El peligro es el doble.",
          "Casi no cambia. 50 km/h sigue siendo velocidad de ciudad.",
        ],
        answer: "Es 8 veces más probable que muera.",
        explain:
          "A 30 km/h o menos, la persona vive en cerca de 9 de cada 10 casos. A 50 km/h, es 8 veces más probable que muera.",
        stake: "velocidad",
      },
      {
        id: "s4",
        prompt: "¿Qué dice el Sistema Seguro?",
        choices: [
          "Las personas se equivocan. La calle y el auto tienen que evitar que ese error mate.",
          "Si hay un choque, la culpa es solo de quien maneja.",
          "Hay que sacar las normas y confiar en la experiencia.",
        ],
        answer:
          "Las personas se equivocan. La calle y el auto tienen que evitar que ese error mate.",
        explain:
          "Desde 2017 Chile usa Visión Cero. Nadie debería morir ni quedar grave. La culpa es de quien maneja y de quien hace la calle.",
      },
      {
        id: "s5",
        prompt: "En los siniestros, ¿cuántas veces hay una falla de una persona?",
        choices: [
          "En más de 90 de cada 100.",
          "En cerca de la mitad.",
          "En menos de 20 de cada 100. Casi siempre falla el auto.",
        ],
        answer: "En más de 90 de cada 100.",
        explain: "El libro dice que la falla de una persona está en más de 90 de cada 100 siniestros.",
      },
      {
        id: "s6",
        prompt: "Carabineros cuenta a una persona fallecida solo si…",
        choices: [
          "Muere dentro de las 48 horas.",
          "Muere dentro de los 30 días.",
          "Muere en el mismo lugar del choque.",
        ],
        answer: "Muere dentro de las 48 horas.",
        explain: "Esas cifras cuentan a un fallecido solo si muere dentro de las 48 horas del siniestro.",
      },
      {
        id: "s7",
        prompt: "Un auto va a 65 km/h y atropella a una persona. ¿Qué dice el libro?",
        choices: [
          "Lo más probable es que muera.",
          "Vive en cerca de 9 de cada 10 casos.",
          "El peligro es igual que a 30 km/h si el auto tiene ABS.",
        ],
        answer: "Lo más probable es que muera.",
        explain: "A 45 km/h o más muere más de la mitad. A 65 km/h, lo más probable es que muera.",
        stake: "velocidad",
      },
      {
        id: "s8",
        prompt: "¿Cuánto cuestan los siniestros, según el libro?",
        choices: [
          "Cerca del 2% de todo lo que produce el país.",
          "Menos del 0,2%. Solo cuenta el daño de los autos.",
          "Todo el gasto en salud del país.",
        ],
        answer: "Cerca del 2% de todo lo que produce el país.",
        explain:
          "El libro dice que los siniestros cuestan cerca del 2% del PIB. PIB es todo lo que produce el país. No todo ese costo se puede poner en plata.",
      },
    ],
  },
  {
    id: "vehiculo",
    title: "Cómo funciona el automóvil",
    pages: "11 a 22",
    lead: "Antes de salir hay que saber cómo frena el auto y qué revisar. Lo más importante: frenos, neumáticos y una lista antes de partir.",
    blocks: [
      {
        heading: "Frenos",
        text: "El freno del pedal funciona con líquido. Frena las cuatro ruedas. El freno de mano funciona con un cable. En general frena las ruedas de atrás. El servofreno ayuda para que el pedal no quede duro. Solo funciona si el motor está encendido. Cuidado si te remolcan. Cuidado si el motor se apaga en una bajada. El líquido de frenos no se gasta. Si baja el nivel, el auto tiene una falla.",
      },
      {
        heading: "ABS",
        text: "El ABS evita que las ruedas se traben al frenar fuerte. Si las ruedas siguen girando, puedes doblar. El pedal puede vibrar. Déjalo apretado a fondo. Si el ABS falla, los frenos siguen funcionando. En un frenazo de emergencia, el auto con ABS a veces se detiene más lejos que uno sin ABS.",
      },
      {
        heading: "Neumáticos y dirección",
        text: "Las ruedas son lo único que toca el suelo. El dibujo del neumático debería tener 3 mm. Si tiene menos de 1,6 mm, en piso mojado el auto agarra mal. La presión del aire tiene que ser la que dice el fabricante, todo el año. Si una rueda de adelante tiene poco aire, el auto se va hacia ese lado. Un golpe contra la solera o un hoyo puede dejar la dirección torcida. Un amortiguador malo alarga la frenada, sobre todo en piso mojado. El ABS ayuda menos.",
      },
      {
        heading: "Antes de mover el auto",
        text: "Antes de salir revisa neumáticos, luces, frenos, espejos, puertas y bocina. Ponte el cinturón. Los brazos van un poco doblados. Usa zapatos con los que sientas los pedales. Limpia los vidrios. Mira el punto ciego: gira la cabeza, el espejo no alcanza. Nada suelto dentro del auto. En un frenazo sale disparado. Lleva triángulos, extintor, rueda de repuesto y herramientas.",
      },
    ],
    questions: [
      {
        id: "v1",
        prompt: "El nivel del líquido de frenos bajó. ¿Qué quiere decir?",
        choices: [
          "Hay una falla. El líquido no se gasta con el uso normal.",
          "Los frenos están bien. Hay que rellenar cada mes.",
          "El ABS está funcionando.",
        ],
        answer: "Hay una falla. El líquido no se gasta con el uso normal.",
        explain: "El líquido de frenos no se gasta. Si baja, el auto tiene una falla. Un nivel bajo puede causar un choque.",
      },
      {
        id: "v2",
        prompt: "Si el ABS falla, ¿qué pasa con los frenos?",
        choices: [
          "Siguen funcionando.",
          "Se pierde el freno en las cuatro ruedas.",
          "Solo queda el freno de mano.",
        ],
        answer: "Siguen funcionando.",
        explain:
          "El ABS evita que las ruedas se traben. Si falla, el freno normal sigue funcionando.",
      },
      {
        id: "v3",
        prompt: "En un frenazo de emergencia, ¿qué puede pasar si el auto tiene ABS?",
        choices: [
          "Puede detenerse más lejos que un auto sin ABS.",
          "Siempre se detiene en la mitad de los metros.",
          "Ya no hay metros de reacción.",
        ],
        answer: "Puede detenerse más lejos que un auto sin ABS.",
        explain:
          "En un frenazo, a veces paras más lejos con ABS que sin ABS. A cambio, puedes seguir doblando.",
      },
      {
        id: "v4",
        prompt: "¿Cuándo el dibujo del neumático ya no es seguro en piso mojado?",
        choices: [
          "Cuando tiene menos de 1,6 mm.",
          "Cuando baja de 5 mm.",
          "Solo si el aire está muy alto. El dibujo no importa.",
        ],
        answer: "Cuando tiene menos de 1,6 mm.",
        explain:
          "Lo recomendable es 3 mm. Con menos de 1,6 mm, en piso mojado el auto agarra mal. Puede flotar sobre el agua.",
      },
      {
        id: "v5",
        prompt: "Una rueda delantera con poca presión de aire hace que el vehículo…",
        choices: [
          "Tienda a torcer hacia ese lado.",
          "Frenar más corto en mojado.",
          "Gire menos y quede más estable en curva.",
        ],
        answer: "Tienda a torcer hacia ese lado.",
        explain:
          "Poca presión en una delantera desvía el auto hacia ese lado y vuelve la dirección más pesada.",
      },
      {
        id: "v6",
        prompt: "¿En qué momento funciona el servofreno?",
        choices: [
          "Solo con el motor en marcha.",
          "Siempre, incluso con el motor apagado o al ser remolcado.",
          "Solo cuando el freno de mano está puesto.",
        ],
        answer: "Solo con el motor en marcha.",
        explain:
          "Por eso hay que tener cuidado si el motor se detiene en una bajada o si el auto va siendo remolcado.",
      },
      {
        id: "v7",
        prompt: "¿Qué pasa si los amortiguadores están malos?",
        choices: [
          "El auto se mueve de más al frenar o en una curva, y puede tardar más en parar.",
          "Solo se siente más cómodo. No cambia la seguridad.",
          "El ABS funciona mejor en piso mojado.",
        ],
        answer:
          "El auto se mueve de más al frenar o en una curva, y puede tardar más en parar.",
        explain:
          "Un amortiguador malo alarga la frenada, sobre todo en piso malo o mojado. El ABS ayuda menos.",
      },
      {
        id: "v8",
        prompt: "Antes de poner el vehículo en movimiento, el libro pide mirar…",
        choices: [
          "Alrededor y los puntos ciegos.",
          "Solo el espejo central, porque los laterales son opcionales.",
          "El velocímetro, para confirmar que marca cero.",
        ],
        answer: "Alrededor y los puntos ciegos.",
        explain:
          "Antes de moverte: espejos, cinturón, puertas, zapatos con los que sientas los pedales, y mirar los puntos ciegos.",
      },
    ],
  },
  {
    id: "fisica",
    title: "Energía y elementos de seguridad",
    pages: "23 a 27",
    lead: "Mientras más rápido vas, mucho más cuesta parar. El cinturón evita que tu cuerpo siga solo.",
    blocks: [
      {
        heading: "Distancia de detención",
        text: "Para parar hacen falta dos tiempos. Primero reaccionas: el auto sigue igual de rápido. Eso dura cerca de 1 segundo. Después frenas. A 36 km/h, en ese segundo recorres 10 metros. A 72 km/h, recorres 20 metros. Un truco hasta 99 km/h: toma el primer número de la velocidad y multiplícalo por 3. A 50 km/h: 5 × 3 = 15 metros. Eso es solo la reacción. El frenado va aparte. Si vas a más de 100 km/h, usa los dos primeros números.",
      },
      {
        heading: "La velocidad al cuadrado",
        text: "Si vas al doble de velocidad, el auto necesita 4 veces más metros para frenar. Si vas al triple, necesita 9 veces más metros. Por eso baja la velocidad antes de la curva. Acelera suave al salir. En una bajada fuerte, usa un cambio bajo. El motor ayuda a frenar. No pongas neutro. Si el motor queda suelto, pierdes el control.",
      },
      {
        heading: "Cómo frenar",
        text: "Si el auto no tiene ABS y las ruedas se traban, suelta un poco el pedal. Así puedes doblar. Si el auto tiene ABS, deja el pedal a fondo. Quien maneja con tiempo suelta el acelerador antes y usa menos el freno.",
      },
      {
        heading: "Cinturón",
        text: "Neumáticos, frenos y luces evitan el choque. Eso se llama seguridad activa. El cinturón y el airbag no evitan el choque. Bajan el daño. Eso se llama seguridad pasiva. Todas las personas van con cinturón. Nunca dos personas con el mismo cinturón. Atrás, el cinturón es obligatorio si el auto es del año 2002 o más nuevo. La banda del hombro pasa por la clavícula, entre el hombro y el cuello. La banda de la cintura va sobre la cadera, también si la persona está embarazada. No va sobre la guata. Un choque a 50 km/h sin cinturón es como caer de un cuarto piso. A 70 km/h, de un séptimo piso. A 90 km/h, del piso 11. Después de un choque, el cinturón puede quedar dañado. Hay que cambiarlo.",
      },
    ],
    questions: [
      {
        id: "f1",
        prompt: "¿Cómo se calcula la distancia de detención?",
        choices: [
          "Sumando la distancia de reacción y la de frenado.",
          "Contando solo los metros que recorre el auto con el freno apretado.",
          "Multiplicando la velocidad por el peso del vehículo.",
        ],
        answer: "Sumando la distancia de reacción y la de frenado.",
        explain:
          "Durante la reacción el auto sigue a la misma velocidad. Recién después empieza el frenado. Las dos distancias se suman.",
      },
      {
        id: "f2",
        prompt: "A 50 km/h, ¿cuál es la distancia de reacción aproximada que enseña el libro?",
        choices: ["15 metros.", "5 metros.", "50 metros."],
        answer: "15 metros.",
        explain:
          "Se multiplica por 3 la primera cifra: 5 × 3 = 15 metros. Vale hasta 99 km/h. Sobre 100 se usan los dos primeros dígitos.",
        stake: "velocidad",
      },
      {
        id: "f3",
        prompt: "Si la velocidad se duplica, la distancia de frenado…",
        choices: [
          "Se multiplica por 4.",
          "Se duplica.",
          "Aumenta solo unos metros, porque el ABS compensa.",
        ],
        answer: "Se multiplica por 4.",
        explain:
          "Si vas al doble de velocidad, necesitas 4 veces más metros para frenar. Si vas al triple, 9 veces más.",
        stake: "velocidad",
      },
      {
        id: "f4",
        prompt: "Sin ABS, si las ruedas se bloquean al frenar, ¿qué hay que hacer?",
        choices: [
          "Soltar enseguida la presión del pedal para recuperar la dirección.",
          "Apretar más fuerte y mantener el volante recto.",
          "Pasar a neutro y seguir con el freno a fondo.",
        ],
        answer: "Soltar enseguida la presión del pedal para recuperar la dirección.",
        explain:
          "Con las ruedas bloqueadas no se puede guiar el auto. Hay que reducir la presión de inmediato.",
      },
      {
        id: "f5",
        prompt: "En una bajada fuerte, ¿qué pide el libro?",
        choices: [
          "Ir en un cambio bajo y no poner neutro.",
          "Poner neutro para que el motor no frene el auto.",
          "Apagar el motor y usar solo el freno de mano.",
        ],
        answer: "Ir en un cambio bajo y no poner neutro.",
        explain:
          "El cambio bajo ayuda a que el motor frene. Así los frenos no se calientan. En neutro pierdes el control.",
      },
      {
        id: "f6",
        prompt: "¿Desde qué año de fabricación es obligatorio el cinturón en los asientos traseros?",
        choices: [
          "2002 o posterior.",
          "2016 o posterior.",
          "Siempre, en cualquier año de fabricación.",
        ],
        answer: "2002 o posterior.",
        explain:
          "El libro dice que el uso en asientos traseros es obligatorio solo si el vehículo es año 2002 o posterior. Nunca dos personas con un mismo cinturón.",
      },
      {
        id: "f7",
        prompt: "¿Dónde va la banda de la cintura del cinturón?",
        choices: [
          "Sobre la cadera, debajo de la guata. También en el embarazo.",
          "Sobre la guata, para no apretar las caderas.",
          "Debajo del muslo, si la persona es baja.",
        ],
        answer: "Sobre la cadera, debajo de la guata. También en el embarazo.",
        explain:
          "Sobre la guata puede lastimar por dentro. La banda del hombro va entre el hombro y el cuello.",
      },
      {
        id: "f8",
        prompt: "Un choque a 50 km/h sin cinturón equivale, según el libro, a…",
        choices: [
          "Caer desde un cuarto piso.",
          "Caer desde el piso 11.",
          "Un tropezón a pie, porque 50 km/h es velocidad urbana.",
        ],
        answer: "Caer desde un cuarto piso.",
        explain:
          "A 70 km/h equivale a un séptimo piso y a 90 km/h, al piso 11. Después de un siniestro el cinturón puede quedar inservible.",
      },
    ],
  },
  {
    id: "persona",
    title: "Alcohol, drogas y fatiga",
    pages: "50 a 64",
    lead: "Hay dos niveles de alcohol al manejar. Nada baja el alcohol más rápido. El sueño es peligroso mucho antes de quedarte dormido.",
    blocks: [
      {
        heading: "Tolerancia Cero y Ley Emilia",
        text: "Si tienes entre 0,31 y 0,79 gramos de alcohol por litro de sangre, manejas bajo la influencia del alcohol. Hay multa y te quitan la licencia por un tiempo. Desde 0,8 gramos hay ebriedad. Hay multa, te cancelan la licencia y puedes ir preso. Con 0,3 a 0,5 el peligro de chocar es el doble. Con 0,5 a 0,8 el peligro es 5 veces mayor. La Ley Emilia dice esto: si manejas ebrio y matas o dejas a alguien muy grave, hay cárcel de al menos 1 año. Esa cárcel se cumple. Si te niegas al examen de alcohol, también hay castigo.",
      },
      {
        heading: "Cómo sube y baja el alcohol",
        text: "El alcohol aparece en la sangre a los 5 minutos. Lo más alto llega, en promedio, cerca de 1 hora después de tomar. Una persona sana de unos 70 kilos baja entre 0,10 y 0,15 gramos por litro cada hora. Eso es un promedio. No es tu número. No se puede apurar. Comer hace que pase menos alcohol a la sangre. Si mezclas con bebida con gas, el alcohol sube más rápido. Con el mismo peso y la misma cantidad, es más fácil que una mujer quede con más alcohol en la sangre. Los menores de 18 y los mayores de 65 lo sienten más.",
      },
      {
        heading: "Drogas",
        text: "Todas las drogas cambian el cerebro. Cambian lo que ves, la atención, cómo mueves el cuerpo y cuánto tardas en reaccionar. La marihuana no despierta. Baja la alerta y puede hacer ver cosas que no están. Esperar a que se pase no asegura que ya puedas manejar. Si tomaste cualquier droga, no manejes. Si manejas bajo el efecto de drogas, te suspenden la licencia.",
      },
      {
        heading: "Sueño y fatiga",
        text: "Entre 15 y 30 de cada 100 siniestros tienen que ver con el sueño. No pasa solo de noche. No pasa solo cuando ya te dormiste. El sueño te hace reaccionar más lento. Te distraes más. Te equivocas más. La primera señal son los bostezos y las ganas de no hacer nada. Si subes la calefacción, te da más sueño. Una carretera recta, de noche y sin autos, da más sueño que una calle de la ciudad.",
      },
    ],
    questions: [
      {
        id: "p1",
        prompt: "¿Desde qué alcoholemia hay estado de ebriedad?",
        choices: [
          "0,8 gramos por litro o más.",
          "0,31 gramos por litro.",
          "Cualquier rastro de alcohol, aunque sea 0,1.",
        ],
        answer: "0,8 gramos por litro o más.",
        explain:
          "De 0,31 a 0,79 es bajo la influencia del alcohol. Desde 0,8 es ebriedad, con multa, cancelación y presidio.",
        stake: "alcohol",
      },
      {
        id: "p2",
        prompt: "Con una alcoholemia entre 0,5 y 0,8 g/l, el riesgo de siniestro…",
        choices: [
          "Es cinco veces mayor que sin haber bebido.",
          "Es el doble.",
          "No cambia si la persona se siente bien.",
        ],
        answer: "Es cinco veces mayor que sin haber bebido.",
        explain:
          "Entre 0,3 y 0,5 g/l el riesgo es el doble. Entre 0,5 y 0,8, cinco veces mayor.",
        stake: "alcohol",
      },
      {
        id: "p3",
        prompt: "¿Qué sanciona la Ley Emilia con cárcel efectiva de al menos un año?",
        choices: [
          "Causar lesiones gravísimas o la muerte conduciendo en estado de ebriedad.",
          "Cualquier infracción de velocidad, aunque no haya siniestro.",
          "Negarse a mostrar la licencia en un control.",
        ],
        answer:
          "Causar lesiones gravísimas o la muerte conduciendo en estado de ebriedad.",
        explain:
          "La reincidencia, conducir con licencia cancelada y el transporte de pasajeros o carga en servicio agravan el delito. Negarse a la prueba de alcohol también se sanciona.",
        stake: "alcohol",
      },
      {
        id: "p4",
        prompt: "¿Se puede acelerar la eliminación del alcohol del organismo?",
        choices: [
          "No. El promedio de una persona de 70 kilos es 0,10 a 0,15 g por litro cada hora, y no aplica igual a todo el mundo.",
          "Sí, con café, una ducha fría o un cigarrillo.",
          "Sí, si se come algo después de beber.",
        ],
        answer:
          "No. El promedio de una persona de 70 kilos es 0,10 a 0,15 g por litro cada hora, y no aplica igual a todo el mundo.",
        explain:
          "Comer antes o mientras se bebe reduce la absorción, pero no borra el alcohol ya presente. El máximo suele llegar cerca de una hora después.",
        stake: "alcohol",
      },
      {
        id: "p5",
        prompt: "¿Cómo clasifica el libro a la marihuana?",
        choices: [
          "Como depresor y alucinógeno, no como estimulante.",
          "Como estimulante que mejora el tiempo de reacción.",
          "Como una sustancia que no altera la conducción en dosis bajas.",
        ],
        answer: "Como depresor y alucinógeno, no como estimulante.",
        explain:
          "Altera percepción, atención y coordinación. Esperar a que bajen los efectos no asegura que ya se pueda conducir.",
      },
      {
        id: "p6",
        prompt: "¿Cuándo empieza el peligro de chocar por sueño?",
        choices: [
          "Mucho antes de quedarte dormido, y también de día.",
          "Solo de noche y solo si ya te dormiste.",
          "Solo si manejas más de ocho horas seguidas.",
        ],
        answer: "Mucho antes de quedarte dormido, y también de día.",
        explain:
          "El sueño te hace reaccionar más lento y te distrae. Una carretera recta, de noche, da más sueño que una calle de la ciudad.",
      },
      {
        id: "p7",
        prompt: "Sientes frío por el cansancio y subes la calefacción. ¿Qué pasa?",
        choices: [
          "Te da más sueño.",
          "Te despierta, porque el frío era la causa del sueño.",
          "Reaccionas más rápido.",
        ],
        answer: "Te da más sueño.",
        explain: "Ese frío engaña. Calentar el auto da más sueño. Los bostezos son la primera señal.",
      },
      {
        id: "p8",
        prompt: "A igual peso y la misma cantidad de alcohol, ¿qué dice el libro sobre hombres y mujeres?",
        choices: [
          "Es más probable que la mujer alcance una alcoholemia más alta.",
          "Siempre llegan a la misma tasa.",
          "El hombre llega más alto porque metaboliza más lento.",
        ],
        answer: "Es más probable que la mujer alcance una alcoholemia más alta.",
        explain:
          "También influyen la cantidad, el peso, el tiempo de ingesta y la comida. Por eso no se puede predecir la tasa solo contando tragos.",
        stake: "alcohol",
      },
    ],
  },
  {
    id: "vulnerables",
    title: "Usuarios vulnerables y niñas y niños",
    pages: "68 a 75",
    lead: "Quien va a pie, en bici o en moto se lastima más. Los niños van atrás y en silla.",
    blocks: [
      {
        heading: "Peatones y ciclistas",
        text: "Los atropellos son cerca de 15 de cada 100 choques. Pero son cerca de 28 de cada 100 muertes. Si vas por la pista izquierda y hay un auto parado en la derecha, justo antes de un paso de cebra, baja la velocidad. Prepárate para parar. Puede haber alguien cruzando. No pases a un ciclista justo antes de un cruce ni en el cruce. Menos si vas a doblar a la derecha. Al doblar, pierdes la prioridad. No manejes, no te detengas y no estaciones en una ciclovía. Mira antes de abrir la puerta.",
      },
      {
        heading: "Señas de quien va en bicicleta",
        text: "El ciclista avisa con el brazo. Va a doblar a la izquierda: estira el brazo izquierdo hacia el lado. Va a doblar a la derecha: sube el brazo izquierdo en ángulo, o estira el derecho. Va a bajar la velocidad o parar: baja el brazo izquierdo. La bici no tiene espejos. Puede usar un cruce de peatones.",
      },
      {
        heading: "Sistemas de retención",
        text: "Los niños de hasta 8 años tienen que ir en silla. Eso incluye el día antes de cumplir 9. También si miden hasta 135 cm y pesan 33 kg. Los menores de 12 años van atrás. La excepción es un auto de cabina simple: ahí no hay asiento de atrás. En la micro, en el furgón escolar y en vehículos parecidos, la silla no es obligatoria. Llevar a un menor de 12 adelante es una falta gravísima. No usar la silla cuando corresponde también es gravísima.",
      },
    ],
    questions: [
      {
        id: "u1",
        prompt: "¿Hasta cuándo es obligatorio el sistema de retención infantil?",
        choices: [
          "Hasta los 8 años inclusive, o hasta 135 cm y 33 kg.",
          "Solo hasta los 4 años, después basta el cinturón de adulto.",
          "Hasta los 12 años, siempre en silla, aunque mida más de 150 cm.",
        ],
        answer: "Hasta los 8 años inclusive, o hasta 135 cm y 33 kg.",
        explain:
          "Ocho años inclusive llega hasta el día anterior a cumplir 9. También cubre a quien mide hasta 135 cm y pesa 33 kg. Los menores de 12 van atrás, salvo cabina simple.",
        stake: "sri",
      },
      {
        id: "u2",
        prompt: "¿Dónde deben viajar las personas menores de 12 años?",
        choices: [
          "En el asiento trasero, salvo en vehículos de cabina simple.",
          "En el asiento delantero, si usan cinturón de adulto.",
          "Donde quieran, si el viaje es corto.",
        ],
        answer: "En el asiento trasero, salvo en vehículos de cabina simple.",
        explain:
          "Llevarlas adelante es infracción gravísima. El SRI no se exige al transporte público, al escolar ni a vehículos de características similares.",
        stake: "sri",
      },
      {
        id: "u3",
        prompt: "Hay un auto detenido en la pista derecha, justo antes de un paso de cebra. Tú vas por la izquierda. ¿Qué haces?",
        choices: [
          "Bajas la velocidad y te preparas para detenerte.",
          "Mantienes la velocidad: la pista izquierda no tiene que ceder.",
          "Adelantas por la berma para no quedar detrás.",
        ],
        answer: "Bajas la velocidad y te preparas para detenerte.",
        explain:
          "Ese auto puede estar detenido porque ya hay peatones cruzando. En el paso de cebra ellos tienen prioridad.",
      },
      {
        id: "u4",
        prompt: "Vas a virar a la derecha y delante hay una persona en bicicleta. ¿Qué corresponde?",
        choices: [
          "No adelantarla en el cruce: al virar se pierde la preferencia.",
          "Adelantarla justo en la esquina, porque el auto es más rápido.",
          "Tocar la bocina y pasar pegado, sin cambiar de pista.",
        ],
        answer: "No adelantarla en el cruce: al virar se pierde la preferencia.",
        explain:
          "El libro pide no adelantar a un ciclista antes o en un cruce, especialmente al virar a la derecha. Espera a que pase la intersección.",
      },
      {
        id: "u5",
        prompt: "¿Cómo señala un ciclista que va a virar a la izquierda?",
        choices: [
          "Con el brazo izquierdo extendido en horizontal.",
          "Con el brazo izquierdo hacia abajo.",
          "Solo con la luz de freno, porque la bici no se señala.",
        ],
        answer: "Con el brazo izquierdo extendido en horizontal.",
        explain:
          "Brazo izquierdo hacia abajo significa que va a bajar la velocidad o detenerse. A la derecha: brazo izquierdo en ángulo hacia arriba, o el derecho extendido.",
      },
      {
        id: "u6",
        prompt: "¿Puede un auto usar la ciclovía para detenerse un momento?",
        choices: [
          "No. No se puede circular, detener ni estacionar en ella.",
          "Sí, si se encienden las luces de emergencia.",
          "Sí, cuando no viene ningún ciclista.",
        ],
        answer: "No. No se puede circular, detener ni estacionar en ella.",
        explain:
          "Además, antes de abrir la puerta hay que mirar si viene una persona en bicicleta.",
      },
      {
        id: "u7",
        prompt: "Los atropellos son cerca del 15% de los siniestros. ¿Qué parte de las muertes representan?",
        choices: [
          "Cerca del 28%.",
          "También cerca del 15%.",
          "Menos del 5%, porque la velocidad urbana los protege.",
        ],
        answer: "Cerca del 28%.",
        explain:
          "Son menos frecuentes que otros siniestros, pero mucho más graves. Peatones, ciclistas y motociclistas son usuarios vulnerables.",
      },
      {
        id: "u8",
        prompt: "¿Quién está exceptuado de la obligación del sistema de retención infantil?",
        choices: [
          "El transporte público, el transporte escolar y vehículos similares.",
          "Cualquier auto particular en viajes de menos de 10 minutos.",
          "Nadie: la obligación es para todo vehículo, sin excepción.",
        ],
        answer: "El transporte público, el transporte escolar y vehículos similares.",
        explain:
          "En un auto particular la obligación es de quien conduce. No usar el SRI cuando corresponde es infracción gravísima.",
        stake: "sri",
      },
    ],
  },
  {
    id: "senales",
    title: "Semáforos, señales y demarcaciones",
    pages: "77 a 83",
    lead: "La calle se ordena con carabineros, semáforos, señales y reglas. La forma y el color dicen qué hacer.",
    blocks: [
      {
        heading: "Semáforo",
        text: "Verde: puedes seguir o doblar, salvo que una señal lo prohíba. Aunque esté verde, no entres si después del cruce no tienes al menos 10 metros libres en tu pista. Si vas a doblar, primero pasan las personas a pie y los ciclistas que cruzan. Roja fija: párate antes de la línea. Roja que parpadea: no es un alto total. Es ceder el paso. Amarilla: párate si alcanzas a hacerlo bien. Si ya estás muy cerca o dentro del cruce, sigue con cuidado. Roja con flecha verde: solo puedes ir hacia donde apunta la flecha. Igual dejas pasar a quien cruza a pie y a quien va bien por la calle. En la pista solo bus, la luz verde puede ser blanca. Ese semáforo no es para los autos.",
      },
      {
        heading: "Grupos de señales",
        text: "Señal redonda o rectangular, con borde rojo: manda. Puede prohibir, obligar o decir quién pasa primero. Hay excepciones de forma: el PARE, el Ceda el paso y el fin de una prohibición. Rombo amarillo con dibujo negro: avisa un peligro que siempre está ahí. Por ejemplo, una curva. La Cruz de San Andrés no es un rombo. Avisa un cruce de trenes. Cuadrado o rectángulo azul: informa en autopista. Verde: informa en otras calles. Café: informa un lugar turístico. Naranja: hay trabajos en la vía. La primera señal de los trabajos es amarilla, no naranja.",
      },
      {
        heading: "Líneas en la calzada",
        text: "Línea blanca cortada: puedes cambiar de pista si avisas y no hay peligro. Línea blanca continua: no la pases. Línea mixta, un lado continuo y el otro cortado: solo puede pasarla quien va por el lado cortado. No manejes por la berma. En el campo, solo si hay una emergencia. En la ciudad, la franja amarilla junto a la solera quiere decir: no estacionar. La cuadrícula amarilla de un cruce no se tapa. Entra solo si puedes salir. En un paso de cebra, la persona a pie pasa primero. Si no hay línea de detención pintada, imagínala a no menos de 1 metro antes.",
      },
      {
        heading: "Carabineros y pista",
        text: "Si el carabinero te mira de frente: párate. Si lo ves de espalda: párate. Si lo ves de lado: puedes avanzar. Si tiene el brazo arriba: es un aviso. El paso va a cambiar. Una equis roja sobre tu pista: esa pista está cerrada. Una flecha: la pista está abierta.",
      },
    ],
    questions: [
      {
        id: "n1",
        prompt: "Tienes luz verde, pero pasado el cruce tu pista está ocupada. ¿Qué exige el libro?",
        choices: [
          "No avanzar si no hay al menos 10 metros libres después del cruce.",
          "Entrar igual: el verde obliga a despejar el semáforo.",
          "Avanzar y detenerse sobre el paso de peatones.",
        ],
        answer: "No avanzar si no hay al menos 10 metros libres después del cruce.",
        explain:
          "El verde no autoriza a quedar atravesado. Además, si vas a virar, peatones y ciclistas que cruzan tienen prioridad.",
      },
      {
        id: "n2",
        prompt: "¿Qué indica una luz roja intermitente?",
        choices: [
          "Ceda el paso: se sigue solo cuando no hay riesgo.",
          "Lo mismo que la roja fija: detención hasta que cambie a verde.",
          "Que el semáforo está en pana y rige la preferencia de la pista más ancha.",
        ],
        answer: "Ceda el paso: se sigue solo cuando no hay riesgo.",
        explain:
          "La roja fija es detención. La intermitente permite continuar después de verificar que no se acerca nadie por la otra vía.",
      },
      {
        id: "n3",
        prompt: "La luz amarilla te sorprende tan cerca del cruce que ya no alcanzas a detenerte con seguridad. ¿Qué haces?",
        choices: [
          "Sigues con precaución.",
          "Frenas de golpe aunque quedes en medio del cruce.",
          "Aceleras para pasar antes de la roja, a cualquier costo.",
        ],
        answer: "Sigues con precaución.",
        explain:
          "La amarilla pide detenerse antes de entrar. Si ya no es seguro, o si ya estás dentro, se continúa con precaución.",
      },
      {
        id: "n4",
        prompt: "¿Cuál es la forma y el color habitual de una señal de advertencia de peligro?",
        choices: [
          "Rombo amarillo con símbolo negro.",
          "Círculo con borde rojo.",
          "Rectángulo azul.",
        ],
        answer: "Rombo amarillo con símbolo negro.",
        explain:
          "El círculo con borde rojo, en general, manda. El rectángulo azul o verde informa. La Cruz de San Andrés no es un rombo.",
      },
      {
        id: "n5",
        prompt: "¿Qué significa una línea longitudinal continua?",
        choices: [
          "Que no debe traspasarse.",
          "Que se puede cambiar de pista si se señaliza.",
          "Que el estacionamiento está permitido a ese lado.",
        ],
        answer: "Que no debe traspasarse.",
        explain:
          "La línea cortada sí se puede pasar si avisas y es seguro. En una línea mixta, solo pasa quien va por el lado cortado.",
      },
      {
        id: "n6",
        prompt: "Llegas a una cuadrícula amarilla en una intersección congestionada. ¿Cuándo puedes entrar?",
        choices: [
          "Solo cuando al salir del cruce haya espacio para no quedar detenido encima.",
          "Siempre que tengas verde, aunque la salida esté llena.",
          "Cuando quieras virar a la izquierda, porque esa zona es de viraje.",
        ],
        answer:
          "Solo cuando al salir del cruce haya espacio para no quedar detenido encima.",
        explain:
          "Esas marcas advierten que no se debe bloquear el cruce. Entrar y quedar parado encima es justo lo que prohíben.",
      },
      {
        id: "n7",
        prompt: "Un carabinero te mira de frente y regula el cruce. ¿Qué indica esa posición?",
        choices: [
          "Detención.",
          "Vía libre.",
          "Que solo deben parar los peatones.",
        ],
        answer: "Detención.",
        explain:
          "De frente o de espalda: detención. De costado: se puede avanzar. El brazo en alto es una advertencia de que el flujo va a cambiar.",
      },
      {
        id: "n8",
        prompt: "Las señales de trabajos en la vía son naranjas. ¿Cuál es la excepción?",
        choices: [
          "La primera señal que advierte los trabajos, que es amarilla.",
          "Las de desvío, que son azules.",
          "No hay excepción: todas las de trabajos son rojas.",
        ],
        answer: "La primera señal que advierte los trabajos, que es amarilla.",
        explain:
          "En una zona de trabajos hay que bajar la velocidad. Puede haber personas, ripio o maquinaria.",
      },
    ],
  },
  {
    id: "reglas",
    title: "Prioridad, velocidad y estacionamiento",
    pages: "84 a 107",
    lead: "Estas reglas salen mucho en la prueba: quién pasa primero, a cuánto puedes ir y dónde no dejar el auto.",
    blocks: [
      {
        heading: "Quién tiene la preferencia",
        text: "En un cruce sin semáforo, sin carabinero, sin PARE y sin Ceda el paso, deja pasar a quien viene por tu derecha. Si vas a doblar, pierdes la prioridad. Deja pasar a los autos y a las personas a pie. Para entrar a una rotonda, deja pasar a quien ya va dentro. En un PARE te detienes del todo. Sigues solo cuando no hay peligro. En un Ceda el paso bajas la velocidad. Paras solo si hace falta.",
      },
      {
        heading: "Límites cuando no hay otra señal",
        text: "Si no hay otra señal: en la ciudad, 50 km/h. Fuera de la ciudad, una pista por lado y auto liviano: 100 km/h. Fuera de la ciudad, dos o más pistas hacia el mismo lado: 120 km/h. Bus, camión y transporte escolar: no más de 90 km/h. Bus interurbano: no más de 100 km/h. Fuera de un colegio, a la hora de entrada o de salida: no más de 30 km/h. Siempre tienes que poder parar dentro de lo que alcanzas a ver.",
      },
      {
        heading: "Adelantar",
        text: "Se adelanta por la izquierda. No adelantes cerca de un cruce. No adelantes en un paso de peatones sin semáforo. No adelantes cerca de una cima ni en una curva. No adelantes a menos de 200 metros de un puente, un viaducto, un túnel o un cruce de trenes. No adelantes si el de adelante ya puso la señal para irse a la izquierda. Por la derecha solo en dos casos: el de adelante va a doblar a la izquierda, o estás en la ciudad en una calle con 3 o más pistas hacia tu lado. Si no te pasas al lado contrario, el libro lo llama sobrepaso, no adelantamiento.",
      },
      {
        heading: "Dónde y cómo estacionar",
        text: "Estaciona al lado derecho, en el sentido de los autos, paralelo a la cuneta. A no más de 30 cm de la cuneta. A no menos de 60 cm de los otros autos. A la izquierda solo si una señal lo permite. En bajada, las ruedas miran a la cuneta. En subida, las ruedas miran al centro de la calle. Deja un cambio puesto, el freno de mano y saca la llave. No estaciones si hay línea amarilla en la solera, ni frente a un portón. No a menos de 10 metros de una esquina. No a menos de 20 metros de un paradero o de un cruce de trenes. No a menos de 15 metros de la puerta de un recinto militar, de policía o de Gendarmería. Donde no se puede estacionar, sí puedes parar un momento para dejar o tomar pasajeros. De noche, si la calle no tiene luces, deja las luces de estacionamiento. Marcha atrás solo para no estorbar, para entrar a la vía o para estacionar. Nunca en un cruce, salvo que lo ordene un carabinero.",
      },
    ],
    questions: [
      {
        id: "r1",
        prompt: "Llegas a un cruce sin semáforo, sin carabinero y sin PARE ni Ceda el Paso. ¿A quién cedes el paso?",
        choices: [
          "A los vehículos que se acercan por tu derecha.",
          "A los que se acercan por tu izquierda.",
          "A nadie: quien llega primero pasa primero.",
        ],
        answer: "A los vehículos que se acercan por tu derecha.",
        explain:
          "Esa es la regla general. Cambia si hay semáforo, carabinero, PARE o Ceda el Paso.",
      },
      {
        id: "r2",
        prompt: "¿Qué pasa con tu preferencia cuando vas a virar?",
        choices: [
          "La pierdes: debes respetar a los demás vehículos y a los peatones.",
          "La mantienes si llegaste primero al cruce.",
          "Solo la pierdes si el cruce tiene semáforo en rojo.",
        ],
        answer: "La pierdes: debes respetar a los demás vehículos y a los peatones.",
        explain:
          "Al virar no hay preferencia. En una rotonda, además, se cede a quien ya está circulando dentro.",
      },
      {
        id: "r3",
        prompt: "En zona urbana, sin una señal que diga otra cosa, el máximo es…",
        choices: ["50 km/h.", "60 km/h.", "40 km/h."],
        answer: "50 km/h.",
        explain:
          "Fuera de la ciudad, un liviano puede ir a 100 km/h si hay una pista por sentido, y a 120 km/h si hay dos o más en el mismo sentido. Una señal puede bajar esos límites.",
        stake: "velocidad",
      },
      {
        id: "r4",
        prompt: "Pasas frente a un colegio a la hora de salida. ¿Cuál es el máximo?",
        choices: ["30 km/h.", "50 km/h, porque sigue siendo zona urbana.", "20 km/h, en cualquier hora del día."],
        answer: "30 km/h.",
        explain:
          "El libro fija no más de 30 km/h fuera de un colegio durante la entrada y la salida. También hay que bajar la velocidad cerca de niños, animales, trabajos o un siniestro.",
        stake: "velocidad",
      },
      {
        id: "r5",
        prompt: "¿A qué distancia mínima de un puente, túnel o cruce ferroviario está prohibido adelantar?",
        choices: ["200 metros.", "50 metros.", "20 metros."],
        answer: "200 metros.",
        explain:
          "Tampoco se adelanta al acercarse a una cima, una curva, un cruce o un paso de peatones no regulado por semáforo, aunque no haga falta pasar el eje.",
      },
      {
        id: "r6",
        prompt: "¿Cuándo puedes adelantar por la derecha?",
        choices: [
          "Si el vehículo de adelante va a virar a la izquierda, o en una vía urbana con tres o más pistas en tu sentido.",
          "Siempre que la pista derecha esté vacía.",
          "Nunca: adelantar por la derecha es infracción en cualquier caso.",
        ],
        answer:
          "Si el vehículo de adelante va a virar a la izquierda, o en una vía urbana con tres o más pistas en tu sentido.",
        explain:
          "Si no invades el sentido contrario, la ley habla de sobrepaso, no de adelantamiento. No se hace fuera de la calzada.",
      },
      {
        id: "r7",
        prompt: "Estacionas en paralelo junto a la cuneta. ¿Qué distancias exige el libro?",
        choices: [
          "A no más de 30 cm de la cuneta y al menos 60 cm de los otros vehículos.",
          "A 60 cm de la cuneta y pegado al auto de adelante.",
          "Sobre la acera, si la calzada es angosta.",
        ],
        answer: "A no más de 30 cm de la cuneta y al menos 60 cm de los otros vehículos.",
        explain:
          "Se estaciona a la derecha, salvo señal que permita el lado izquierdo. En bajada, ruedas a la cuneta; en subida, hacia el centro.",
      },
      {
        id: "r8",
        prompt: "¿A qué distancia de una esquina no se debe estacionar?",
        choices: [
          "A menos de 10 metros.",
          "A menos de 3 metros.",
          "A menos de 20 metros, igual que un cruce ferroviario.",
        ],
        answer: "A menos de 10 metros.",
        explain:
          "La esquina exige 10 metros. Un paradero de locomoción colectiva o un cruce ferroviario exigen 20 metros. La puerta de un recinto militar, policial o de Gendarmería exige 15 metros.",
      },
    ],
  },
  {
    id: "condiciones",
    title: "Clima, autopista, tren y conducción eficiente",
    pages: "109 a 132",
    lead: "De noche y con niebla las distancias engañan. En la autopista y en la línea del tren manda quien ya va por ahí.",
    blocks: [
      {
        heading: "Oscuridad y niebla",
        text: "De noche se ven mal los colores y las formas. El auto que viene de frente parece más lejos de lo que está. Si las luces de enfrente te encandilan, baja la velocidad o párate. Con niebla usa luces bajas. No uses las altas. Las altas rebotan en las gotas y ves menos. Los neblineros de adelante van junto con las luces bajas. La luz de niebla de atrás solo si la niebla es muy espesa. Si no, encandila. Deja más distancia.",
      },
      {
        heading: "Autopista",
        text: "En la pista de aceleración igualas la velocidad de los autos de la autopista. Entras cuando hay un espacio. Quienes ya van por la autopista pasan primero. Si no hay un espacio seguro, te detienes y esperas. Mira los espejos y gira la cabeza antes de salir de esa pista. Después quédate un rato en la pista derecha, hasta acostumbrarte a la velocidad. Si circulas sin TAG o sin pase diario, hay multa.",
      },
      {
        heading: "Cruce ferroviario",
        text: "Luz roja: viene un tren. Luz blanca: no se acerca un tren. Igual mira. El sistema puede fallar. El tren siempre pasa primero. A 100 km/h, un tren necesita entre 800 y 1.000 metros para parar. No entres si al otro lado no hay espacio. No estaciones a menos de 20 metros. No adelantes a menos de 200 metros. Si el auto se echa a perder sobre las vías, haz bajar a todas las personas. Saca el auto solo si todavía hay tiempo. Si ya empezaste a cruzar y suenan las alarmas, no te detengas en medio.",
      },
      {
        heading: "Gastar menos combustible",
        text: "Elige la ruta antes. Sal con tiempo. Evita la hora punta. Acelera suave. Los cambios altos gastan menos. A 70 km/h, en un auto manual, conviene más la quinta que la cuarta. Frenar y volver a acelerar gasta más. Si ves un rojo o un PARE, suelta el acelerador con el cambio puesto. Así el motor deja de echar bencina. Un filtro de aire sucio puede hacer gastar cerca de un 1,5% más. Un filtro de combustible en mal estado, cerca de un 0,5% más. A mucha velocidad suben el gasto y el humo.",
      },
    ],
    questions: [
      {
        id: "c1",
        prompt: "Con niebla espesa, ¿qué luces corresponde usar?",
        choices: [
          "Luces bajas. Las altas se reflejan y empeoran la visibilidad.",
          "Luces altas, porque alumbran más lejos.",
          "Solo luces de estacionamiento, para no encandilar.",
        ],
        answer: "Luces bajas. Las altas se reflejan y empeoran la visibilidad.",
        explain:
          "Los neblineros delanteros se encienden junto con las bajas. La luz de niebla trasera solo si la niebla es espesa. Hay que aumentar la distancia.",
      },
      {
        id: "c2",
        prompt: "De noche, el vehículo que viene de frente suele parecer…",
        choices: [
          "Más lejos de lo que realmente está.",
          "Más cerca, por el brillo de las luces.",
          "A la misma distancia que de día, si el camino está seco.",
        ],
        answer: "Más lejos de lo que realmente está.",
        explain:
          "Sin colores ni contornos claros se calculan mal las distancias. Si hay encandilamiento, baja la velocidad o detente.",
      },
      {
        id: "c3",
        prompt: "Para entrar a una autopista, ¿quién tiene la prioridad?",
        choices: [
          "Quienes ya circulan por ella. Tú igualas la velocidad y entras en un hueco seguro.",
          "Quien viene por la pista de aceleración, porque va incorporándose.",
          "El vehículo más rápido, sea cual sea su pista.",
        ],
        answer:
          "Quienes ya circulan por ella. Tú igualas la velocidad y entras en un hueco seguro.",
        explain:
          "Si no aparece un espacio seguro, hay que detenerse. No se entra siempre muy lento ni a la máxima de la autopista por obligación. Sin medio de pago, el uso se sanciona.",
      },
      {
        id: "c4",
        prompt: "En un cruce ferroviario la luz blanca está encendida. ¿Qué significa?",
        choices: [
          "Que no se acerca un tren, pero igual hay que comprobar que el cruce esté despejado.",
          "Que se puede cruzar sin mirar, porque el sistema confirma que no hay riesgo.",
          "Que el tren está a menos de 200 metros.",
        ],
        answer:
          "Que no se acerca un tren, pero igual hay que comprobar que el cruce esté despejado.",
        explain:
          "La luz roja avisa la proximidad del tren. La blanca no reemplaza la mirada: el sistema puede fallar. Apaga la radio y escucha.",
      },
      {
        id: "c5",
        prompt: "Un tren va a 100 km/h. ¿Qué distancia puede necesitar para detenerse?",
        choices: [
          "Entre 800 y 1.000 metros.",
          "Unos 100 metros, como un auto.",
          "Menos de 50 metros, porque tiene frenos de emergencia.",
        ],
        answer: "Entre 800 y 1.000 metros.",
        explain:
          "Por eso el tren siempre tiene la preferencia y la responsabilidad de cruzar es de quien conduce el auto. No te detengas sobre las vías.",
      },
      {
        id: "c6",
        prompt: "Tu auto se apaga encima de la línea del tren y todavía no viene el convoy. ¿Qué hay que hacer primero con las personas?",
        choices: [
          "Hacerlas salir del vehículo y despejar el cruce solo si hay tiempo.",
          "Dejarlas dentro, porque el auto las protege.",
          "Empujar el auto entre todos sin bajar.",
        ],
        answer: "Hacerlas salir del vehículo y despejar el cruce solo si hay tiempo.",
        explain:
          "Si no alcanzas a mover el auto, igual hay que salir del cruce. Si ya estabas cruzando y se activan las alarmas, no te detengas a mitad de vía.",
      },
      {
        id: "c7",
        prompt: "“Frenar y acelerar una y otra vez disminuye el gasto de combustible.” ¿Qué diría el libro?",
        choices: [
          "Es falso: ese hábito aumenta el consumo.",
          "Es verdadero en ciudad, y falso en carretera.",
          "Es verdadero si el auto es automático.",
        ],
        answer: "Es falso: ese hábito aumenta el consumo.",
        explain:
          "Conviene soltar el acelerador con anticipación y con la marcha puesta. Así se corta la inyección y se evita la frenada de último momento.",
      },
      {
        id: "c8",
        prompt: "En un auto manual que va a 70 km/h, ¿qué marcha recomienda el libro?",
        choices: [
          "La más alta posible, por ejemplo la quinta en vez de la cuarta.",
          "La más baja, para que el motor responda.",
          "Neutro, para no gastar bencina en recta.",
        ],
        answer: "La más alta posible, por ejemplo la quinta en vez de la cuarta.",
        explain:
          "Las marchas altas trabajan a menos revoluciones. En un automático, evitar el acelerador a fondo ayuda a que elija esa marcha. Un filtro de aire sucio puede empeorar el rendimiento cerca de un 1,5%.",
      },
    ],
  },
  {
    id: "licencia",
    title: "Siniestro, infracciones y la licencia",
    pages: "136 a 169",
    lead: "Qué hacer si ya chocaste, qué faltas te quitan la licencia y cómo se pide en la municipalidad.",
    blocks: [
      {
        heading: "Si hay un siniestro",
        text: "Si hay heridos o muertos, tienes que parar. Aunque no hayas tenido la culpa. Ayuda en lo que puedas. Avisa a la policía. Irte del lugar es un delito. Pueden quitarte la licencia para siempre y mandarte a la cárcel al menos 1 año. No muevas a una persona herida, salvo un peligro de ahora: incendio, explosión o que la vayan a atropellar. No le des de comer ni de beber. Si tiene casco, no se lo saques. En un auto eléctrico o híbrido hay una calcomanía en el vidrio de atrás. No toques el cable de alto voltaje. Va forrado de color naranjo.",
      },
      {
        heading: "Ley No Chat e infracciones",
        text: "No uses el celular ni otro aparato que no venga de fábrica. Tampoco si estás parado en un rojo, en un taco o en un PARE. Solo se puede con manos libres. Son faltas gravísimas, entre otras: no parar en una luz roja o en un PARE, manejar sin licencia, llevar a un menor de 12 adelante, no usar la silla de niño cuando corresponde, usar el teléfono, andar sin patente o con la patente tapada, y pasarte del límite entre 20 y 60 km/h. Pasarte del límite entre 11 y 20 km/h es falta grave, no gravísima. Dos faltas graves o gravísimas en 12 meses te suspenden la licencia. No poner la señal al doblar es una falta menos grave.",
      },
      {
        heading: "Quién puede obtenerla y cómo",
        text: "La licencia se pide en la municipalidad donde vives. No todas la dan. A los 17 años puedes sacar la clase B. Necesitas permiso de tu mamá, tu papá o quien te represente. También un curso aprobado en una escuela. Hasta los 18 años tienes que ir acompañado. La persona va adelante. Tiene que tener licencia clase B de al menos 5 años. Si el médico te exige lentes o audífono, tienes que usarlos siempre. Cada examen, el de la sala y el de la calle, se puede dar dos veces. La repetición tiene que ser dentro de 25 días hábiles. Si se te pasa el plazo, o repruebas de nuevo, te niegan la licencia. Después de la primera negativa esperas 30 días hábiles para empezar de nuevo. Después de la segunda, esperas 6 meses.",
      },
    ],
    questions: [
      {
        id: "l1",
        prompt: "Participas en un siniestro con personas lesionadas. ¿Qué obliga la ley?",
        choices: [
          "Detenerse, prestar ayuda y dar cuenta a la policía.",
          "Seguir hasta un lugar seguro y avisar después, si no fuiste culpable.",
          "Mover de inmediato a los heridos hasta la vereda.",
        ],
        answer: "Detenerse, prestar ayuda y dar cuenta a la policía.",
        explain:
          "La obligación existe con culpa o sin ella. Darse a la fuga puede llevar a inhabilidad de por vida y a cárcel efectiva de al menos un año.",
      },
      {
        id: "l2",
        prompt: "Una persona lesionada sigue con el casco puesto. ¿Qué hay que hacer?",
        choices: [
          "No quitárselo.",
          "Sacárselo para ver si respira mejor.",
          "Sacárselo solo si es ciclista; al motociclista se lo dejas.",
        ],
        answer: "No quitárselo.",
        explain:
          "Tampoco muevas a la persona, salvo un peligro de ahora. No le des de comer ni de beber.",
      },
      {
        id: "l3",
        prompt: "En un siniestro hay un auto eléctrico. ¿Qué no debes tocar?",
        choices: [
          "La línea de alto voltaje, aislada de color naranjo.",
          "La calcomanía de la luneta, porque indica el tipo de batería.",
          "El volante, aunque el motor esté apagado.",
        ],
        answer: "La línea de alto voltaje, aislada de color naranjo.",
        explain:
          "Esos vehículos llevan una calcomanía en la luneta. Sin capacitación no se manipulan, y nunca se toca ese cable.",
      },
      {
        id: "l4",
        prompt: "Estás detenido en un semáforo en rojo. ¿Puedes escribir un mensaje en el celular?",
        choices: [
          "No. La prohibición incluye el rojo, el taco y el PARE.",
          "Sí, porque el auto está detenido y no hay riesgo.",
          "Sí, si lo apoyas en el volante y usas una sola mano.",
        ],
        answer: "No. La prohibición incluye el rojo, el taco y el PARE.",
        explain:
          "Ley No Chat: no se manipula un aparato que no venga de fábrica. La excepción es el manos libres. Hacerlo es infracción gravísima.",
      },
      {
        id: "l5",
        prompt: "Superar el límite de velocidad entre 20 y 60 km/h es…",
        choices: [
          "Una infracción gravísima.",
          "Una infracción grave.",
          "Una falta menos grave, si no hay siniestro.",
        ],
        answer: "Una infracción gravísima.",
        explain:
          "Exceder de 11 a 20 km/h es grave. También son gravísimas no parar en un rojo o en un PARE, no usar SRI, llevar a un menor de 12 adelante y circular sin patente.",
        stake: "velocidad",
      },
      {
        id: "l6",
        prompt: "¿Qué produce acumular dos infracciones graves o gravísimas en doce meses?",
        choices: [
          "La suspensión de la licencia.",
          "Solo una amonestación, si se pagan las multas.",
          "La cancelación automática de por vida.",
        ],
        answer: "La suspensión de la licencia.",
        explain:
          "El libro lo dice de forma directa: dos graves o gravísimas en doce meses suspenden la licencia, además de las multas de cada infracción.",
      },
      {
        id: "l7",
        prompt: "Una persona de 17 años obtiene la clase B. Hasta los 18 debe conducir…",
        choices: [
          "Acompañada, adelante, por alguien con licencia clase B de al menos 5 años.",
          "Sola, pero solo de día y en zona urbana.",
          "Acompañada por cualquier adulto, aunque no tenga licencia.",
        ],
        answer:
          "Acompañada, adelante, por alguien con licencia clase B de al menos 5 años.",
        explain:
          "Además necesita autorización de madre, padre o representante y haber aprobado un curso en una escuela de conductores.",
      },
      {
        id: "l8",
        prompt: "Reprobaste el teórico. ¿Cuánto tiempo tienes para repetirlo dentro del mismo proceso?",
        choices: [
          "25 días hábiles, y solo una repetición.",
          "30 días corridos, con tres repeticiones.",
          "6 meses, que es el plazo de toda repetición.",
        ],
        answer: "25 días hábiles, y solo una repetición.",
        explain:
          "Si se te pasa ese plazo, o repruebas otra vez, se acaba el trámite. Después de la primera negativa esperas 30 días hábiles. Después de la segunda, 6 meses.",
      },
    ],
  },
];

for (const topic of TOPICS) {
  for (const question of topic.questions) {
    if (!question.choices.includes(question.answer)) {
      throw new Error(`Respuesta fuera de las alternativas: ${question.id}`);
    }
    if (new Set(question.choices).size !== question.choices.length) {
      throw new Error(`Alternativas repetidas: ${question.id}`);
    }
  }
}
