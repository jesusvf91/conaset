import { TOPICS } from "./course";
import type { Topic } from "./course";

export type SignalKind =
  | "pare"
  | "ceda"
  | "reglamentaria"
  | "advertencia"
  | "luz-amarilla"
  | "luz-roja-intermitente"
  | "linea-continua"
  | "carabinero-frente"
  | "pista-cerrada";

export type LessonCheck = {
  prompt: string;
  choices: string[];
  answer: string;
  explain: string;
  signal?: SignalKind;
};

export type LessonStep = {
  key: string;
  heading: string;
  text: string;
  check: LessonCheck;
};

export function blockKey(topicId: string, heading: string) {
  return `${topicId}::${heading}`;
}

const checks: Record<string, LessonCheck> = {
  [blockKey("siniestros", "Por qué no se llaman accidentes")]: {
    prompt: "Llueve y en ese mismo camino hay más choques que en un día seco. ¿Qué quiere decir eso?",
    choices: [
      "No es suerte. La lluvia cambia el peligro. Se puede evitar.",
      "Sigue siendo un accidente, porque nadie quiso chocar.",
      "Hay más choques solo porque ese día hay más autos.",
    ],
    answer: "No es suerte. La lluvia cambia el peligro. Se puede evitar.",
    explain:
      "Si fuera solo suerte, la lluvia, la noche o el alcohol no cambiarían nada. Por eso el libro dice siniestro, no accidente.",
  },
  [blockKey("siniestros", "Cifras que el libro usa")]: {
    prompt: "En la ciudad ves un choque chico. En la carretera, un choque con muertos. ¿Qué dice el libro?",
    choices: [
      "La mayoría de los choques es en la ciudad. La mayoría de las muertes es en la carretera.",
      "Casi todos los choques y casi todas las muertes son en la carretera.",
      "La mayoría de las muertes es en la ciudad.",
    ],
    answer: "La mayoría de los choques es en la ciudad. La mayoría de las muertes es en la carretera.",
    explain:
      "8 de cada 10 choques pasan en la ciudad, sobre todo en cruces. La mayoría de las muertes pasa fuera de la ciudad. Carabineros cuenta un muerto solo si muere dentro de 48 horas.",
  },
  [blockKey("siniestros", "Velocidad y peatones")]: {
    prompt: "Un niño cruza delante de ti. Ibas a ir a 30 km/h y al final vas a 50. ¿Qué cambia para el niño?",
    choices: [
      "Es 8 veces más probable que muera.",
      "El peligro es casi el mismo. Las dos son velocidades de ciudad.",
      "A 50 km/h vive en cerca de 9 de cada 10 casos.",
    ],
    answer: "Es 8 veces más probable que muera.",
    explain:
      "A 30 km/h o menos, vive cerca de 9 de cada 10. A 50 km/h, es 8 veces más probable que muera. A 65 km/h, lo más probable es que muera.",
  },
  [blockKey("siniestros", "Sistema Seguro")]: {
    prompt: "Alguien dice: si choca, es solo su culpa. Las personas no deberían equivocarse. ¿Qué dice el Sistema Seguro?",
    choices: [
      "Las personas se equivocan. La calle y el auto tienen que evitar que ese error mate.",
      "La culpa es solo de quien hace la calle.",
      "Un error no se puede evitar y el daño tampoco.",
    ],
    answer: "Las personas se equivocan. La calle y el auto tienen que evitar que ese error mate.",
    explain:
      "Desde 2017 Chile usa Visión Cero. Nadie debería morir ni quedar grave. La culpa es de quien maneja y de quien hace la calle. Los siniestros cuestan cerca del 2% de lo que produce el país.",
  },
  [blockKey("vehiculo", "Frenos")]: {
    prompt: "Bajas una cuesta, el motor se apaga y el pedal de freno queda muy duro. ¿Qué pasa?",
    choices: [
      "El servofreno dejó de ayudar. Solo funciona con el motor encendido.",
      "Se acabó el líquido de frenos. Se gasta en cada bajada.",
      "El freno de mano tomó las cuatro ruedas.",
    ],
    answer: "El servofreno dejó de ayudar. Solo funciona con el motor encendido.",
    explain:
      "El pedal frena las cuatro ruedas con líquido. Ese líquido no se gasta. Si baja, hay una falla. El servofreno necesita el motor encendido.",
  },
  [blockKey("vehiculo", "ABS")]: {
    prompt: "Frenas fuerte. El pedal vibra y el auto todavía dobla. La luz del ABS estaba encendida desde antes. ¿Qué sigue siendo cierto?",
    choices: [
      "Si el ABS falla, los frenos siguen funcionando.",
      "Sin ABS el auto se queda sin frenos.",
      "Con ABS el frenazo de emergencia siempre es más corto.",
    ],
    answer: "Si el ABS falla, los frenos siguen funcionando.",
    explain:
      "El ABS evita que las ruedas se traben, para que puedas doblar. Si falla, el freno normal sigue. En un frenazo, a veces paras más lejos con ABS.",
  },
  [blockKey("vehiculo", "Neumáticos y dirección")]: {
    prompt: "En línea recta el auto se va a la izquierda. La rueda delantera izquierda tiene poco aire. ¿Qué tiene que ver?",
    choices: [
      "Poco aire en una rueda de adelante hace que el auto se vaya hacia ese lado.",
      "Poco aire solo gasta más bencina. No cambia la dirección.",
      "Hay que poner más aire en las ruedas de atrás.",
    ],
    answer: "Poco aire en una rueda de adelante hace que el auto se vaya hacia ese lado.",
    explain:
      "El dibujo del neumático debería tener 3 mm. Con menos de 1,6 mm, el piso mojado es peligroso. Un golpe contra la solera tuerce la dirección. Un amortiguador malo alarga la frenada.",
  },
  [blockKey("vehiculo", "Antes de mover el auto")]: {
    prompt: "Vas a salir del estacionamiento. El espejo se ve bien, pero hay una camioneta pegada a tu izquierda. ¿Qué falta?",
    choices: [
      "Girar la cabeza y mirar el punto ciego. El espejo no alcanza.",
      "Nada. Si el espejo está limpio, no hay punto ciego.",
      "Poner el freno de mano y salir igual.",
    ],
    answer: "Girar la cabeza y mirar el punto ciego. El espejo no alcanza.",
    explain:
      "Antes de moverte: cinturón, espejos, puertas, zapatos con los que sientas los pedales, vidrios limpios y una mirada alrededor, también al punto ciego.",
  },
  [blockKey("fisica", "Distancia de detención")]: {
    prompt: "Ves un hoyo y tardas un segundo en pisar el freno. Ibas a 50 km/h. ¿Cuánto recorriste antes de que el freno empezara a actuar?",
    choices: [
      "Unos 15 metros. Eso es solo antes de frenar.",
      "Unos 5 metros.",
      "Nada. El auto para cuando ves el hoyo.",
    ],
    answer: "Unos 15 metros. Eso es solo antes de frenar.",
    explain:
      "Para parar se suman dos partes: lo que recorres mientras reaccionas y lo que recorres frenando. Hasta 99 km/h, toma el primer número de la velocidad y multiplícalo por 3. A 50: 5 × 3 = 15 metros.",
  },
  [blockKey("fisica", "La velocidad al cuadrado")]: {
    prompt: "En una bajada larga pones neutro para no forzar el motor y dejas que el auto ruede. ¿Qué dice el libro?",
    choices: [
      "No pongas neutro. Pierdes el control y los frenos se calientan.",
      "Está bien. En neutro el auto frena solo.",
      "Está bien si después usas el freno de mano.",
    ],
    answer: "No pongas neutro. Pierdes el control y los frenos se calientan.",
    explain:
      "En bajada usa un cambio bajo. El motor ayuda a frenar. Si vas al doble de velocidad, necesitas 4 veces más metros para parar.",
  },
  [blockKey("fisica", "Cómo frenar")]: {
    prompt: "El auto no tiene ABS. Frenas, las ruedas chirrían y el volante no responde. ¿Qué haces?",
    choices: [
      "Sueltas de inmediato un poco el pedal para que las ruedas vuelvan a girar.",
      "Aprietas más fuerte y mantienes el volante firme.",
      "Pasas a neutro sin soltar el freno.",
    ],
    answer: "Sueltas de inmediato un poco el pedal para que las ruedas vuelvan a girar.",
    explain:
      "Si las ruedas se traban, no puedes doblar. Sin ABS, suelta un poco el pedal. Con ABS, déjalo a fondo.",
  },
  [blockKey("fisica", "Cinturón")]: {
    prompt: "Viaja una persona embarazada adelante. ¿Dónde queda la banda de la cintura?",
    choices: [
      "Sobre la cadera, debajo de la guata.",
      "Sobre la guata, para no apretar las caderas.",
      "Debajo del muslo, si le molesta el cinturón.",
    ],
    answer: "Sobre la cadera, debajo de la guata.",
    explain:
      "La banda del hombro va entre el hombro y el cuello. Atrás, el cinturón es obligatorio si el auto es del año 2002 o más nuevo. Nunca dos personas con el mismo cinturón.",
  },
  [blockKey("persona", "Tolerancia Cero y Ley Emilia")]: {
    prompt: "Un control marca 0,5 gramos por litro. La persona dice que está bien para manejar. ¿Qué pasa de verdad?",
    choices: [
      "Está bajo la influencia del alcohol. El peligro de chocar es cerca de 5 veces mayor.",
      "Está ebria, porque pasó de 0,3.",
      "Puede manejar. La ebriedad parte en 0,8 y antes no hay peligro.",
    ],
    answer: "Está bajo la influencia del alcohol. El peligro de chocar es cerca de 5 veces mayor.",
    explain:
      "De 0,31 a 0,79 es bajo la influencia. Desde 0,8 es ebriedad. Con 0,5 a 0,8 el peligro es 5 veces mayor. Si manejas ebrio y matas o dejas a alguien muy grave, la Ley Emilia pide cárcel de al menos 1 año.",
  },
  [blockKey("persona", "Cómo sube y baja el alcohol")]: {
    prompt: "Tomó hace una hora, se duchó con agua fría y tomó un café. Cree que ya puede manejar. ¿Qué pasó con el alcohol?",
    choices: [
      "No se puede apurar. Una persona de unos 70 kilos elimina, en promedio, solo 0,10 a 0,15 g/l por hora.",
      "El café lo baja a la mitad en una hora.",
      "Comer después de beber borra el alcohol que ya está en la sangre.",
    ],
    answer: "No se puede apurar. Una persona de unos 70 kilos elimina, en promedio, solo 0,10 a 0,15 g/l por hora.",
    explain:
      "El alcohol aparece en la sangre a los 5 minutos. Lo más alto llega cerca de 1 hora después. Comer baja lo que entra a la sangre. No borra lo que ya está. Con el mismo peso, es más fácil que una mujer quede con más alcohol.",
  },
  [blockKey("persona", "Drogas")]: {
    prompt: "Alguien fumó marihuana para ir más despierto y espera media hora a que se le pase. ¿Qué corresponde?",
    choices: [
      "No manejar. La marihuana no despierta. Esperar no asegura que ya sea seguro.",
      "Manejar. A la media hora ya no cambia lo que ves.",
      "Manejar solo de día. De noche el efecto es menor.",
    ],
    answer: "No manejar. La marihuana no despierta. Esperar no asegura que ya sea seguro.",
    explain:
      "La marihuana baja la alerta y puede hacer ver cosas que no están. Cualquier droga cambia la atención, el movimiento y el tiempo para reaccionar. Esperar no asegura que ya puedas manejar.",
  },
  [blockKey("persona", "Sueño y fatiga")]: {
    prompt: "En una carretera recta, de noche y sin autos, empiezas a bostezar y subes la calefacción porque sientes frío. ¿Qué está pasando?",
    choices: [
      "Es el primer aviso de sueño. Subir la calefacción da más sueño.",
      "El frío te despierta. Conviene seguir.",
      "El peligro empieza solo cuando ya te dormiste.",
    ],
    answer: "Es el primer aviso de sueño. Subir la calefacción da más sueño.",
    explain:
      "El sueño te hace reaccionar más lento mucho antes de dormirte. También de día. Una carretera recta da más sueño que una calle con cambios.",
  },
  [blockKey("vulnerables", "Peatones y ciclistas")]: {
    prompt: "Vas por la pista izquierda. En la derecha, un auto está parado justo antes del paso de cebra. La calle se ve vacía. ¿Qué haces?",
    choices: [
      "Bajas la velocidad y te preparas para detenerte: puede haber alguien cruzando.",
      "Sigues a la misma velocidad, porque tu pista está libre.",
      "Adelantas por la berma para no quedar detrás.",
    ],
    answer: "Bajas la velocidad y te preparas para detenerte: puede haber alguien cruzando.",
    explain:
      "En el paso de cebra, la persona a pie pasa primero. No pases a un ciclista en un cruce si vas a doblar a la derecha. Al doblar, pierdes la prioridad. No uses la ciclovía. Mira antes de abrir la puerta.",
  },
  [blockKey("vulnerables", "Señas de quien va en bicicleta")]: {
    prompt: "Quien va en bicicleta estira el brazo izquierdo hacia abajo. ¿Qué está diciendo?",
    choices: [
      "Que va a bajar la velocidad o a detenerse.",
      "Que va a virar a la izquierda.",
      "Que te cede el paso para que lo adelantes.",
    ],
    answer: "Que va a bajar la velocidad o a detenerse.",
    explain:
      "Brazo izquierdo estirado al lado: dobla a la izquierda. Brazo izquierdo hacia arriba, o el derecho estirado: dobla a la derecha. Brazo izquierdo hacia abajo: va a frenar o parar.",
  },
  [blockKey("vulnerables", "Sistemas de retención")]: {
    prompt: "Un niño de 7 años quiere ir adelante porque el viaje es corto. Se pone el cinturón de adulto. ¿Qué corresponde?",
    choices: [
      "Atrás, en silla. Tiene 8 años o menos.",
      "Adelante, si el cinturón le queda más o menos bien.",
      "Atrás, pero sin silla, porque el viaje es corto.",
    ],
    answer: "Atrás, en silla. Tiene 8 años o menos.",
    explain:
      "La silla es obligatoria hasta los 8 años, o hasta 135 cm y 33 kg. Los menores de 12 van atrás, salvo en un auto de cabina simple. Llevarlos adelante o no usar la silla es una falta gravísima.",
  },
  [blockKey("senales", "Semáforo")]: {
    prompt: "La luz amarilla te encuentra tan cerca del cruce que frenar te dejaría en medio. ¿Qué haces?",
    choices: [
      "Sigues con precaución.",
      "Frenas de golpe, aunque quedes sobre el paso de peatones.",
      "Aceleras para alcanzar a pasar antes de la roja.",
    ],
    answer: "Sigues con precaución.",
    explain:
      "Con amarilla, párate si alcanzas a hacerlo bien. Si ya no es seguro, o si ya estás dentro, sigue con cuidado. La roja que parpadea no es un alto total. Es ceder el paso.",
    signal: "luz-amarilla",
  },
  [blockKey("senales", "Grupos de señales")]: {
    prompt: "Ves esta señal antes de una curva. ¿Para qué está?",
    choices: [
      "Para advertir un peligro. Conviene bajar la velocidad y no adelantar.",
      "Para prohibir el paso. Hay que detenerse.",
      "Para indicar el nombre del camino.",
    ],
    answer: "Para advertir un peligro. Conviene bajar la velocidad y no adelantar.",
    explain:
      "El rombo amarillo avisa un peligro. El círculo con borde rojo, en general, manda. El rectángulo azul o verde informa. Las de trabajos son naranjas. La primera es amarilla.",
    signal: "advertencia",
  },
  [blockKey("senales", "Líneas en la calzada")]: {
    prompt: "Quieres cambiarte a la pista de la izquierda y entre las dos hay esta línea. ¿Puedes pasarla?",
    choices: [
      "No. La línea continua no se traspasa.",
      "Sí, si señalizas y no viene nadie.",
      "Sí, porque el lado izquierdo de una línea mixta siempre puede cruzar.",
    ],
    answer: "No. La línea continua no se traspasa.",
    explain:
      "La línea cortada se puede pasar si avisas y no hay peligro. En una línea mixta, solo pasa quien va por el lado cortado. La cuadrícula amarilla no se tapa. Entra solo si puedes salir.",
    signal: "linea-continua",
  },
  [blockKey("senales", "Carabineros y pista")]: {
    prompt: "Un carabinero regula el cruce y queda de frente a ti. Sobre tu pista, además, hay una equis roja. ¿Qué haces?",
    choices: [
      "Te detienes. De frente indica detención, y la equis cierra la pista.",
      "Avanzas, porque de frente significa vía libre.",
      "Avanzas solo si la equis es roja, porque ese color reemplaza al verde.",
    ],
    answer: "Te detienes. De frente indica detención, y la equis cierra la pista.",
    explain:
      "De frente o de espalda: párate. De lado: puedes avanzar. El brazo arriba avisa que el paso va a cambiar. La flecha sobre la pista quiere decir que está abierta.",
    signal: "carabinero-frente",
  },
  [blockKey("reglas", "Quién tiene la preferencia")]: {
    prompt: "La calle se ve vacía, pero esta señal está en tu esquina. ¿Puedes cruzar sin parar?",
    choices: [
      "No. Hay que detenerse por completo y seguir solo cuando no hay riesgo.",
      "Sí, si no se ve ningún auto: la señal solo obliga cuando hay tráfico.",
      "Basta con bajar la velocidad, como en un ceda el paso.",
    ],
    answer: "No. Hay que detenerse por completo y seguir solo cuando no hay riesgo.",
    explain:
      "PARE es parar del todo. Ceda el paso es bajar la velocidad y parar solo si hace falta. Sin señales ni semáforo, deja pasar a quien viene por tu derecha. Si doblas, pierdes la prioridad. En una rotonda, deja pasar a quien ya va dentro.",
    signal: "pare",
  },
  [blockKey("reglas", "Límites cuando no hay otra señal")]: {
    prompt: "Son las 13:30, sales de un colegio y los niños están en la vereda. No hay una señal de velocidad. ¿A cuánto puedes ir?",
    choices: [
      "A no más de 30 km/h.",
      "A 50 km/h, porque sigues en zona urbana.",
      "A 40 km/h, que es el máximo frente a cualquier escuela todo el día.",
    ],
    answer: "A no más de 30 km/h.",
    explain:
      "Sin otra señal, en la ciudad el máximo es 50 km/h. Fuera, un auto liviano va a 100 si hay una pista por lado, y a 120 si hay dos o más hacia el mismo lado. Frente a un colegio, a la entrada y a la salida, el máximo es 30.",
  },
  [blockKey("reglas", "Adelantar")]: {
    prompt: "Faltan unos 150 metros para un puente angosto y la pista contraria se ve libre. ¿Adelantas?",
    choices: [
      "No. Está prohibido adelantar a menos de 200 metros de un puente, túnel o cruce ferroviario.",
      "Sí, porque 150 metros alcanzan si el otro auto va lento.",
      "Sí, por la derecha, para no pasar el eje.",
    ],
    answer: "No. Está prohibido adelantar a menos de 200 metros de un puente, túnel o cruce ferroviario.",
    explain:
      "Se adelanta por la izquierda. Tampoco en un cruce, un paso de peatones, una cima o una curva. Por la derecha solo si el otro va a doblar a la izquierda, o en la ciudad con 3 o más pistas hacia tu lado.",
  },
  [blockKey("reglas", "Dónde y cómo estacionar")]: {
    prompt: "Estacionas en bajada, de noche, en una calle sin alumbrado. ¿Qué dejas hecho antes de bajarte?",
    choices: [
      "Ruedas hacia la cuneta, marcha puesta, freno de mano, y luces de estacionamiento.",
      "Ruedas hacia el centro de la calzada, que es la posición de bajada.",
      "Motor en neutro y sin luces, para no gastar batería.",
    ],
    answer: "Ruedas hacia la cuneta, marcha puesta, freno de mano, y luces de estacionamiento.",
    explain:
      "En subida, las ruedas miran al centro de la calle. Quedas a no más de 30 cm de la cuneta y al menos a 60 cm de otros autos. De una esquina, a no menos de 10 metros. Si la calle no tiene luces, deja las luces de estacionamiento.",
  },
  [blockKey("condiciones", "Oscuridad y niebla")]: {
    prompt: "Entra niebla espesa y enciendes las luces altas para ver más lejos. ¿Es lo que pide el libro?",
    choices: [
      "No. Con niebla van las luces bajas: las altas se reflejan en las gotas.",
      "Sí. Las altas son obligatorias cuando no se ve el camino.",
      "Da lo mismo, si además llevas las luces de estacionamiento.",
    ],
    answer: "No. Con niebla van las luces bajas: las altas se reflejan en las gotas.",
    explain:
      "Los neblineros de adelante van junto con las luces bajas. La luz de niebla de atrás solo si la niebla es muy espesa. De noche, el auto de enfrente parece más lejos de lo que está. Si te encandilan, baja la velocidad o párate.",
  },
  [blockKey("condiciones", "Autopista")]: {
    prompt: "En la pista de aceleración no aparece un hueco. Quienes van por la autopista no bajan la velocidad. ¿Quién tiene la prioridad?",
    choices: [
      "Quienes ya circulan. Tú esperas, incluso detenido, hasta que haya un espacio seguro.",
      "Tú, porque la pista de aceleración sirve para imponer la entrada.",
      "El vehículo más rápido, venga de donde venga.",
    ],
    answer: "Quienes ya circulan. Tú esperas, incluso detenido, hasta que haya un espacio seguro.",
    explain:
      "Igualas la velocidad de los autos y entras cuando hay un espacio. Mira el espejo y gira la cabeza antes de salir de la pista de aceleración. Si andas sin TAG o sin pase, hay multa.",
  },
  [blockKey("condiciones", "Cruce ferroviario")]: {
    prompt: "La luz del cruce está blanca y no se oye un tren. El auto de adelante acaba de pasar. ¿Cruzas sin mirar?",
    choices: [
      "No. La luz blanca no autoriza a pasar sin comprobar que el cruce esté libre.",
      "Sí. La blanca confirma que el sistema no detecta un tren.",
      "Sí, si el auto de adelante ya cruzó: la preferencia quedó despejada.",
    ],
    answer: "No. La luz blanca no autoriza a pasar sin comprobar que el cruce esté libre.",
    explain:
      "La luz roja avisa que viene un tren. A 100 km/h, un tren puede necesitar 800 a 1.000 metros para parar. Si el auto se apaga sobre las vías, haz bajar a las personas. Muévelo solo si todavía hay tiempo.",
  },
  [blockKey("condiciones", "Gastar menos combustible")]: {
    prompt: "En el taco aceleras y frenas cada pocos metros, “para no perder el lugar”. ¿Ahorras bencina?",
    choices: [
      "No. Frenar y volver a acelerar aumenta el consumo.",
      "Sí, porque el motor gasta menos en primera.",
      "Sí, si entre medio pones neutro.",
    ],
    answer: "No. Frenar y volver a acelerar aumenta el consumo.",
    explain:
      "Suelta el acelerador con el cambio puesto. Así el motor deja de echar bencina. En un auto manual, a 70 km/h gasta menos el cambio más alto. Un filtro de aire sucio puede hacer gastar cerca de un 1,5% más.",
  },
  [blockKey("licencia", "Si hay un siniestro")]: {
    prompt: "Chocaste. Hay una persona herida. No fuiste tú quien pasó en rojo. Piensas seguir porque no tuviste la culpa. ¿Qué tienes que hacer?",
    choices: [
      "Parar, ayudar y avisar a la policía, aunque no hayas tenido la culpa.",
      "Seguir hasta tu casa y dejar el parte al día siguiente.",
      "Mover al herido a la vereda antes que nada.",
    ],
    answer: "Parar, ayudar y avisar a la policía, aunque no hayas tenido la culpa.",
    explain:
      "Irte del lugar puede quitarte la licencia para siempre y llevarte a la cárcel al menos 1 año. No muevas a la persona salvo un peligro de ahora. No le des de comer ni de beber. No le saques el casco. En un auto eléctrico, no toques el cable naranjo.",
  },
  [blockKey("licencia", "Ley No Chat e infracciones")]: {
    prompt: "Estás detenido en un rojo y contestas un mensaje con el celular en la mano. ¿Hay infracción?",
    choices: [
      "Sí. La prohibición incluye el rojo, el taco y el PARE, y es gravísima.",
      "No, porque el auto está detenido.",
      "Solo si el mensaje se envía cuando ya está la verde.",
    ],
    answer: "Sí. La prohibición incluye el rojo, el taco y el PARE, y es gravísima.",
    explain:
      "Solo se puede el manos libres, si el aparato no viene de fábrica. También es gravísimo pasarte del límite entre 20 y 60 km/h, no parar en un PARE o en un rojo, y no usar la silla de niño. Dos faltas graves o gravísimas en 12 meses te suspenden la licencia.",
  },
  [blockKey("licencia", "Quién puede obtenerla y cómo")]: {
    prompt: "Tienes 17 años, autorización de tu madre y el curso de la escuela aprobado. Hasta los 18, ¿con quién puedes manejar?",
    choices: [
      "Acompañado adelante por alguien con licencia clase B de al menos 5 años.",
      "Solo, de día y dentro de la ciudad.",
      "Con cualquier adulto en el asiento de atrás.",
    ],
    answer: "Acompañado adelante por alguien con licencia clase B de al menos 5 años.",
    explain:
      "La licencia se pide en la municipalidad donde vives. Cada examen se puede dar dos veces. La repetición tiene que ser dentro de 25 días hábiles. Después de la primera negativa esperas 30 días hábiles. Después de la segunda, 6 meses.",
  },
};

const signalDrills: LessonStep[] = [
  {
    key: "senales::reconoce-pare",
    heading: "Reconocer el PARE",
    text: "Todavía no leas el nombre. Mira la forma: ocho lados, fondo rojo. Esa forma manda, aunque la calle se vea vacía.",
    check: {
      prompt: "Llegas a esta señal y no viene nadie. ¿Qué corresponde?",
      choices: [
        "Detenerte por completo y seguir solo cuando no haya riesgo.",
        "Bajar la velocidad y seguir si la esquina está despejada.",
        "Tocar la bocina y cruzar, porque tienes la preferencia.",
      ],
      answer: "Detenerte por completo y seguir solo cuando no haya riesgo.",
      explain: "El octágono rojo es PARE. No es un ceda el paso: hay que quedar detenido.",
      signal: "pare",
    },
  },
  {
    key: "senales::reconoce-ceda",
    heading: "Reconocer el ceda el paso",
    text: "Ahora la forma cambia: un triángulo al revés. No pide lo mismo que la señal de ocho lados.",
    check: {
      prompt: "Por la otra calle viene un auto cerca. ¿Qué haces ante esta señal?",
      choices: [
        "Bajas la velocidad y te detienes si hace falta para dejarlo pasar.",
        "Te detienes siempre, aunque el otro esté muy lejos.",
        "Sigues: esta señal solo informa que hay un cruce.",
      ],
      answer: "Bajas la velocidad y te detienes si hace falta para dejarlo pasar.",
      explain: "El triángulo invertido es Ceda el paso. Se reduce la velocidad y se para solo si hay riesgo.",
      signal: "ceda",
    },
  },
  {
    key: "senales::reconoce-reglamentaria",
    heading: "Reconocer una reglamentaria",
    text: "Círculo y borde rojo. No avisa un peligro más adelante. Manda en el lugar donde está.",
    check: {
      prompt: "¿Qué te pide esta forma?",
      choices: [
        "Una orden: algo está prohibido o es obligatorio. Hay que cumplirla.",
        "Un aviso de curva o de cruce, para bajar la velocidad.",
        "Una dirección hacia un destino.",
      ],
      answer: "Una orden: algo está prohibido o es obligatorio. Hay que cumplirla.",
      explain:
        "Estas señales suelen ser redondas o rectangulares, con borde rojo. El PARE y el Ceda el paso tienen otra forma.",
      signal: "reglamentaria",
    },
  },
  {
    key: "senales::reconoce-pista",
    heading: "Reconocer una pista cerrada",
    text: "Esta marca va sobre la pista, no al lado del camino. La equis roja dice que no puedes seguir por ahí.",
    check: {
      prompt: "Tu pista tiene esta marca. ¿Qué haces?",
      choices: [
        "No entras: la equis roja significa que la pista está cerrada.",
        "Sigues, porque la equis reemplaza a la flecha verde.",
        "La usas solo para virar, si no hay otro lugar.",
      ],
      answer: "No entras: la equis roja significa que la pista está cerrada.",
      explain: "La equis, en general roja, cierra la pista. La flecha indica que está abierta.",
      signal: "pista-cerrada",
    },
  },
];

export const QUESTION_LESSON: Record<string, string> = {
  s1: blockKey("siniestros", "Por qué no se llaman accidentes"),
  s2: blockKey("siniestros", "Cifras que el libro usa"),
  s3: blockKey("siniestros", "Velocidad y peatones"),
  s4: blockKey("siniestros", "Sistema Seguro"),
  s5: blockKey("siniestros", "Cifras que el libro usa"),
  s6: blockKey("siniestros", "Cifras que el libro usa"),
  s7: blockKey("siniestros", "Velocidad y peatones"),
  s8: blockKey("siniestros", "Sistema Seguro"),
  v1: blockKey("vehiculo", "Frenos"),
  v2: blockKey("vehiculo", "ABS"),
  v3: blockKey("vehiculo", "ABS"),
  v4: blockKey("vehiculo", "Neumáticos y dirección"),
  v5: blockKey("vehiculo", "Neumáticos y dirección"),
  v6: blockKey("vehiculo", "Frenos"),
  v7: blockKey("vehiculo", "Neumáticos y dirección"),
  v8: blockKey("vehiculo", "Antes de mover el auto"),
  f1: blockKey("fisica", "Distancia de detención"),
  f2: blockKey("fisica", "Distancia de detención"),
  f3: blockKey("fisica", "La velocidad al cuadrado"),
  f4: blockKey("fisica", "Cómo frenar"),
  f5: blockKey("fisica", "La velocidad al cuadrado"),
  f6: blockKey("fisica", "Cinturón"),
  f7: blockKey("fisica", "Cinturón"),
  f8: blockKey("fisica", "Cinturón"),
  p1: blockKey("persona", "Tolerancia Cero y Ley Emilia"),
  p2: blockKey("persona", "Tolerancia Cero y Ley Emilia"),
  p3: blockKey("persona", "Tolerancia Cero y Ley Emilia"),
  p4: blockKey("persona", "Cómo sube y baja el alcohol"),
  p5: blockKey("persona", "Drogas"),
  p6: blockKey("persona", "Sueño y fatiga"),
  p7: blockKey("persona", "Sueño y fatiga"),
  p8: blockKey("persona", "Cómo sube y baja el alcohol"),
  u1: blockKey("vulnerables", "Sistemas de retención"),
  u2: blockKey("vulnerables", "Sistemas de retención"),
  u3: blockKey("vulnerables", "Peatones y ciclistas"),
  u4: blockKey("vulnerables", "Peatones y ciclistas"),
  u5: blockKey("vulnerables", "Señas de quien va en bicicleta"),
  u6: blockKey("vulnerables", "Peatones y ciclistas"),
  u7: blockKey("vulnerables", "Peatones y ciclistas"),
  u8: blockKey("vulnerables", "Sistemas de retención"),
  n1: blockKey("senales", "Semáforo"),
  n2: blockKey("senales", "Semáforo"),
  n3: blockKey("senales", "Semáforo"),
  n4: blockKey("senales", "Grupos de señales"),
  n5: blockKey("senales", "Líneas en la calzada"),
  n6: blockKey("senales", "Líneas en la calzada"),
  n7: blockKey("senales", "Carabineros y pista"),
  n8: blockKey("senales", "Grupos de señales"),
  r1: blockKey("reglas", "Quién tiene la preferencia"),
  r2: blockKey("reglas", "Quién tiene la preferencia"),
  r3: blockKey("reglas", "Límites cuando no hay otra señal"),
  r4: blockKey("reglas", "Límites cuando no hay otra señal"),
  r5: blockKey("reglas", "Adelantar"),
  r6: blockKey("reglas", "Adelantar"),
  r7: blockKey("reglas", "Dónde y cómo estacionar"),
  r8: blockKey("reglas", "Dónde y cómo estacionar"),
  c1: blockKey("condiciones", "Oscuridad y niebla"),
  c2: blockKey("condiciones", "Oscuridad y niebla"),
  c3: blockKey("condiciones", "Autopista"),
  c4: blockKey("condiciones", "Cruce ferroviario"),
  c5: blockKey("condiciones", "Cruce ferroviario"),
  c6: blockKey("condiciones", "Cruce ferroviario"),
  c7: blockKey("condiciones", "Gastar menos combustible"),
  c8: blockKey("condiciones", "Gastar menos combustible"),
  l1: blockKey("licencia", "Si hay un siniestro"),
  l2: blockKey("licencia", "Si hay un siniestro"),
  l3: blockKey("licencia", "Si hay un siniestro"),
  l4: blockKey("licencia", "Ley No Chat e infracciones"),
  l5: blockKey("licencia", "Ley No Chat e infracciones"),
  l6: blockKey("licencia", "Ley No Chat e infracciones"),
  l7: blockKey("licencia", "Quién puede obtenerla y cómo"),
  l8: blockKey("licencia", "Quién puede obtenerla y cómo"),
};

export function lessonSteps(topic: Topic): LessonStep[] {
  const steps = topic.blocks.map((block) => {
    const key = blockKey(topic.id, block.heading);
    const check = checks[key];
    if (!check) throw new Error(`Falta el caso de ${key}`);
    return { key, heading: block.heading, text: block.text, check };
  });
  if (topic.id === "senales") steps.push(...signalDrills);
  return steps;
}

export function lessonReady(topic: Topic, done: readonly string[]) {
  return lessonSteps(topic).every((step) => done.includes(step.key));
}

for (const check of [...Object.values(checks), ...signalDrills.map((step) => step.check)]) {
  if (!check.choices.includes(check.answer)) {
    throw new Error(`Caso sin respuesta válida: ${check.prompt}`);
  }
}

for (const topic of TOPICS) {
  lessonSteps(topic);
  for (const question of topic.questions) {
    if (!QUESTION_LESSON[question.id]) throw new Error(`Pregunta sin idea: ${question.id}`);
  }
}
