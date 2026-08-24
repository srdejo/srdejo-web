export interface FaqPoint {
  label?: string;
  text: string;
}

export interface FaqItem {
  question: string;
  intro?: string;
  points: FaqPoint[];
}

export interface FaqCategory {
  title: string;
  items: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    title: 'Principios de diseño',
    items: [
      {
        question: '¿Qué es SOLID? Explica cada principio',
        intro: 'SOLID son 5 principios de diseño orientado a objetos que ayudan a escribir código mantenible y fácil de extender:',
        points: [
          { label: 'S – Responsabilidad Única: ', text: 'Una clase debe tener una sola responsabilidad, un solo motivo para cambiar. Ejemplo: separa la lógica de guardar una factura en base de datos de la lógica de enviarla por correo; son responsabilidades distintas.' },
          { label: 'O – Abierto/Cerrado: ', text: 'El código debe estar abierto a extensión, pero cerrado a modificación. Ejemplo: para agregar un nuevo medio de pago, creas una clase nueva que implemente una interfaz PaymentMethod, sin tocar el código que ya funciona.' },
          { label: 'L – Sustitución de Liskov: ', text: 'Una subclase debe poder reemplazar a su clase padre sin romper el comportamiento del programa. Ejemplo: si Ave tiene el método volar(), no deberías heredar Pinguino de Ave, porque un pingüino no vuela.' },
          { label: 'I – Segregación de Interfaces: ', text: 'Es mejor tener varias interfaces pequeñas y específicas que una sola interfaz grande. Ejemplo: separa una interfaz Trabajador en Comestible y Programable, para que una clase Robot no tenga que implementar comer().' },
          { label: 'D – Inversión de Dependencias: ', text: 'Los módulos de alto nivel no deben depender de módulos de bajo nivel, sino de abstracciones. Ejemplo: un servicio de notificaciones debe depender de una interfaz NotificationSender, no directamente de una clase EmailSender.' },
        ],
      },
      {
        question: '¿Qué es DRY?',
        points: [
          { text: '"Don\'t Repeat Yourself" (no te repitas): evita duplicar la misma lógica o regla de negocio en varias partes del código. Si algo está escrito en dos lugares, un cambio futuro puede actualizar uno y olvidar el otro, generando bugs. Ejemplo: si validas el formato de un correo en tres controladores distintos, mejor crea un solo método de validación y reúsalo.' },
        ],
      },
      {
        question: '¿Qué es YAGNI?',
        points: [
          { text: '"You Aren\'t Gonna Need It" (no lo vas a necesitar): no construyas funcionalidad extra "por si acaso" se necesita en el futuro. Ejemplo: si hoy solo necesitas guardar usuarios en una base de datos relacional, no construyas de entrada una capa para soportar 5 tipos de bases de datos que quizás nunca uses — es complejidad innecesaria.' },
        ],
      },
      {
        question: '¿Qué es alta cohesión y bajo acoplamiento?',
        points: [
          { label: 'Alta cohesión: ', text: 'los elementos dentro de una misma clase o módulo están fuertemente relacionados y enfocados en una sola responsabilidad.' },
          { label: 'Bajo acoplamiento: ', text: 'los módulos o clases dependen lo menos posible unos de otros, idealmente comunicándose a través de interfaces.' },
          { text: 'Un sistema con alta cohesión y bajo acoplamiento es más fácil de entender, probar y modificar, sin que un cambio en una parte rompa otras.' },
        ],
      },
    ],
  },
  {
    title: 'Arquitectura y microservicios',
    items: [
      {
        question: '¿Qué son los microservicios?',
        points: [
          { text: 'Un estilo de arquitectura donde una aplicación se divide en varios servicios pequeños e independientes, cada uno enfocado en una función de negocio específica (pagos, usuarios, notificaciones...). Cada servicio tiene su propia base de datos, se despliega por separado y se comunica con los demás por red (REST, colas o eventos). Esto permite escalar y evolucionar cada parte del sistema de forma independiente.' },
        ],
      },
      {
        question: '¿Cuáles son los patrones de microservicios más comunes?',
        points: [
          { label: 'API Gateway: ', text: 'un único punto de entrada que enruta las peticiones del cliente hacia el microservicio correcto, y puede manejar autenticación y límites de tasa.' },
          { label: 'Circuit Breaker: ', text: 'evita que un servicio siga llamando a otro que está fallando; "corta el circuito" temporalmente para no saturar el sistema.' },
          { label: 'Resiliencia (Retry, Timeout, Bulkhead): ', text: 'patrones que permiten que un sistema tolere fallos parciales sin caerse completo. Retry reintenta una llamada fallida (con backoff); Timeout evita esperas indefinidas por un servicio lento; Bulkhead aísla recursos (pools de hilos/conexiones) por dependencia para que la falla de una no consuma todos los recursos y arrastre al resto del sistema.' },
          { label: 'Saga: ', text: 'coordina transacciones que abarcan varios microservicios mediante una secuencia de pasos con acciones compensatorias si algo falla, ya que no existe una transacción distribuida única.' },
          { label: 'Service Discovery: ', text: 'permite que los servicios se encuentren entre sí dinámicamente en la red, sin direcciones fijas.' },
          { label: 'Strangler Fig: ', text: 'permite migrar un monolito a microservicios poco a poco, reemplazando funcionalidades una por una en vez de reescribir todo de golpe.' },
        ],
      },
      {
        question: '¿Qué diferencia hay entre ACID y BASE?',
        points: [
          { label: 'ACID: ', text: '(Atomicidad, Consistencia, Aislamiento, Durabilidad) son las garantías clásicas de las bases de datos relacionales: una transacción se ejecuta completa o no se ejecuta, y el sistema siempre queda consistente.' },
          { label: 'BASE: ', text: '(Basically Available, Soft state, Eventually consistent) es el enfoque típico de muchas bases NoSQL y sistemas distribuidos: priorizan disponibilidad y escalabilidad, aceptando que los datos tarden un poco en ser consistentes en todos los nodos.' },
        ],
      },
      {
        question: '¿Qué es la idempotencia en una API?',
        points: [
          { text: 'Una operación es idempotente si ejecutarla una o varias veces produce el mismo resultado final. Un PUT que actualiza un recurso a un valor específico es idempotente; repetirlo no cambia nada más. Un POST que crea un registro nuevo cada vez normalmente no lo es. Es clave en sistemas de pagos, para evitar cobrar dos veces si una petición se reintenta por un error de red.' },
        ],
      },
    ],
  },
  {
    title: 'Patrones y buenas prácticas',
    items: [
      {
        question: '¿Qué patrones de diseño de software conoces?',
        points: [
          { label: 'Singleton: ', text: 'garantiza que una clase tenga una única instancia en toda la aplicación, por ejemplo una configuración compartida.' },
          { label: 'Factory: ', text: 'centraliza la creación de objetos en un método, para no repetir la lógica de instanciación por toda la app.' },
          { label: 'Builder: ', text: 'permite construir un objeto complejo paso a paso, útil cuando tiene muchos parámetros opcionales.' },
          { label: 'Strategy: ', text: 'permite intercambiar un algoritmo por otro en tiempo de ejecución, por ejemplo distintas formas de calcular un descuento.' },
          { label: 'Observer: ', text: 'permite que varios objetos se suscriban y sean notificados cuando algo cambia, como en sistemas basados en eventos.' },
          { label: 'Adapter: ', text: 'permite que dos interfaces incompatibles trabajen juntas, por ejemplo al integrar una librería externa con una interfaz distinta a la que espera tu código.' },
        ],
      },
      {
        question: '¿Qué es la Inyección de Dependencias (IoC)?',
        points: [
          { text: 'Un objeto no crea directamente las dependencias que necesita, sino que las recibe desde afuera (por ejemplo, por el constructor). Frameworks como Spring gestionan estas dependencias mediante un contenedor de IoC. Ejemplo: un PagoService no debería hacer "new EmailSender()" dentro de sí mismo; en vez de eso recibe una interfaz NotificationSender ya lista, así es más fácil cambiarla o probarla con un mock.' },
        ],
      },
      {
        question: '¿Diferencia entre autenticación y autorización?',
        points: [
          { label: 'Autenticación: ', text: 'responde "¿quién eres?" — verificar la identidad de un usuario, por ejemplo con usuario/contraseña o un token.' },
          { label: 'Autorización: ', text: 'responde "¿qué puedes hacer?" — una vez identificado, verificar si tiene permiso para una acción o recurso. Ejemplo: iniciar sesión es autenticación; que solo un usuario "admin" pueda borrar registros es autorización.' },
        ],
      },
      {
        question: '¿Qué es un modelo de dominio anémico (objetos anémicos)?',
        points: [
          { text: 'Es un antipatrón donde las clases del dominio solo tienen atributos con getters/setters, pero toda la lógica de negocio vive afuera, en clases de servicio. El objeto es solo una "bolsa de datos" sin comportamiento propio. Ejemplo: una clase Factura con getTotal()/setTotal() donde toda la lógica para calcular impuestos vive en FacturaService.' },
          { text: 'Se prefiere un modelo rico, donde el propio objeto encapsula sus reglas: factura.calcularTotal(), factura.aplicarDescuento(), etc. Así la lógica queda junto a los datos que usa, con mayor cohesión.' },
        ],
      },
    ],
  },
  {
    title: 'Programación orientada a objetos',
    items: [
      {
        question: '¿Qué es la abstracción?',
        points: [
          { text: 'Consiste en modelar un objeto quedándote solo con lo esencial para el problema, ocultando los detalles de implementación. Ejemplo: una interfaz Notificador expone enviar(mensaje), sin exponer si por dentro usa correo, SMS o push.' },
        ],
      },
      {
        question: '¿Qué es el encapsulamiento?',
        points: [
          { text: 'Consiste en ocultar el estado interno de un objeto y exponer solo lo necesario a través de métodos públicos, protegiendo los datos de modificaciones inválidas. Ejemplo: una clase CuentaBancaria no permite modificar el saldo directamente; solo lo hace a través de métodos como depositar() o retirar(), que validan las reglas de negocio.' },
        ],
      },
      {
        question: '¿Qué es la herencia?',
        points: [
          { text: 'Permite que una clase (subclase) reutilice atributos y comportamiento de otra clase (superclase), estableciendo una relación "es un". Ejemplo: TarjetaCredito y TarjetaDebito pueden heredar de una clase Tarjeta que ya define el número y el titular. Debe usarse con cuidado para no violar Liskov: solo hereda si la subclase realmente "es un tipo de" la clase padre.' },
        ],
      },
      {
        question: '¿Qué es el polimorfismo?',
        points: [
          { text: 'Permite que distintos objetos respondan de forma distinta a un mismo mensaje o método. Ejemplo: si Tarjeta tiene el método calcularInteres(), TarjetaCredito y TarjetaDebito pueden implementarlo cada una a su manera, y el código que las usa solo llama tarjeta.calcularInteres() sin saber (ni importarle) de qué tipo específico es.' },
        ],
      },
      {
        question: '¿Qué diferencia hay entre sobrecarga (overload) y sobreescritura (override)?',
        points: [
          { label: 'Sobrecarga (Overload): ', text: 'definir varios métodos con el mismo nombre en la misma clase, pero con distinta firma (número o tipo de parámetros). Se resuelve en tiempo de compilación. Ejemplo: calcularTotal(double precio) y calcularTotal(double precio, double descuento).' },
          { label: 'Sobreescritura (Override): ', text: 'una subclase redefine un método que ya existe en su superclase, manteniendo la misma firma, para cambiar su comportamiento. Se resuelve en tiempo de ejecución y es la base del polimorfismo. Ejemplo: TarjetaCredito sobreescribe calcularInteres() de Tarjeta con su propia lógica.' },
        ],
      },
    ],
  },
  {
    title: 'Estructuras de datos y colecciones',
    items: [
      {
        question: '¿Diferencia entre HashMap y LinkedList?',
        intro: 'Son estructuras de Java que resuelven problemas distintos:',
        points: [
          { label: 'HashMap: ', text: 'guarda pares clave-valor. El acceso, inserción y búsqueda por clave son casi instantáneos (O(1) en promedio) gracias a una función de hash. Úsalo cuando necesitas buscar algo rápido por un identificador, como un usuario por su ID.' },
          { label: 'LinkedList: ', text: 'es una lista donde cada nodo apunta al siguiente. Insertar o eliminar al inicio o en medio es rápido (O(1)), pero buscar un elemento por posición es lento (O(n)) porque hay que recorrer nodo por nodo.' },
          { label: 'Extra: ArrayList: ', text: 'a diferencia de LinkedList, guarda los elementos en un arreglo contiguo: acceder por índice es muy rápido (O(1)), pero insertar en medio es más costoso porque hay que desplazar elementos.' },
        ],
      },
      {
        question: '¿Diferencia entre List, Set y Map?',
        points: [
          { label: 'List: ', text: 'una colección ordenada que permite elementos duplicados y acceso por índice, como ArrayList o LinkedList.' },
          { label: 'Set: ', text: 'una colección que no permite elementos duplicados, como HashSet. Útil cuando solo te importa si un elemento existe o no.' },
          { label: 'Map: ', text: 'una colección de pares clave-valor, sin claves duplicadas, como HashMap. Útil para buscar un valor a partir de un identificador.' },
        ],
      },
      {
        question: '¿Diferencia entre HashMap, LinkedHashMap y TreeMap?',
        points: [
          { label: 'HashMap: ', text: 'no garantiza ningún orden de las claves; es la opción más rápida cuando el orden no importa.' },
          { label: 'LinkedHashMap: ', text: 'mantiene el orden de inserción de las claves, útil cuando necesitas recorrerlas en el mismo orden en que las agregaste.' },
          { label: 'TreeMap: ', text: 'mantiene las claves ordenadas (por orden natural o un comparador), a costo de operaciones un poco más lentas (O(log n) en vez de O(1)).' },
        ],
      },
      {
        question: '¿Por qué usar ConcurrentHashMap en vez de HashMap?',
        points: [
          { text: 'HashMap no es seguro para usarse desde varios hilos al mismo tiempo (puede corromperse o entrar en bucles infinitos). ConcurrentHashMap permite lecturas y escrituras concurrentes de forma segura, dividiendo internamente el mapa en segmentos, sin bloquear toda la estructura como haría un HashMap sincronizado manualmente. Se usa mucho en servicios backend con alta concurrencia, como cachés en memoria.' },
        ],
      },
    ],
  },
];
