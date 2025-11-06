# Fuentes Roboto

Esta guía explica cómo usar las fuentes Roboto en el proyecto, tanto con Tailwind/NativeWind como con estilos inline.

## Configuración

Las fuentes Roboto están configuradas en dos lugares:

1. **`app/_layout.tsx`**: Carga las fuentes usando `expo-font`
2. **`tailwind.config.js`**: Define las clases de utilidad para Tailwind

## Ejemplos de uso

### Usando Tailwind/NativeWind (Recomendado)

```tsx
import { Text } from 'react-native';

// Fuente normal
<Text className="font-roboto text-base">Texto con Roboto Regular</Text>

// Diferentes pesos
<Text className="font-roboto-light text-xl">Texto ligero</Text>
<Text className="font-roboto-medium text-xl">Texto medio</Text>
<Text className="font-roboto-bold text-xl">Texto en negrita</Text>
<Text className="font-roboto-semibold text-xl">Texto semi-bold</Text>
<Text className="font-roboto-black text-xl">Texto negro</Text>

// Versiones itálicas
<Text className="font-roboto-italic text-base">Texto en itálica</Text>
<Text className="font-roboto-bold-italic text-xl">Negrita e itálica</Text>

// Combinando con colores y tamaños
<Text className="font-roboto-bold text-2xl text-primary-500">
  Título principal
</Text>

<Text className="font-roboto-light text-sm text-typography-600">
  Texto secundario
</Text>

// Ejemplo completo de una tarjeta
<View className="p-4 bg-white rounded-lg">
  <Text className="font-roboto-bold text-xl text-typography-900 mb-2">
    Título de la tarjeta
  </Text>
  <Text className="font-roboto text-base text-typography-700 mb-4">
    Descripción con texto regular de Roboto
  </Text>
  <Text className="font-roboto-light text-sm text-typography-500">
    Información adicional en texto ligero
  </Text>
</View>
```

### Usando estilos inline

```tsx
import { Text, StyleSheet } from 'react-native';

// Estilo inline directo
<Text style={{ fontFamily: 'Roboto-Regular' }}>
  Texto con Roboto Regular
</Text>

<Text style={{ fontFamily: 'Roboto-Bold', fontSize: 24 }}>
  Texto en negrita
</Text>

// Usando StyleSheet
const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    color: '#000',
  },
  body: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 24,
  },
  caption: {
    fontFamily: 'Roboto-Light',
    fontSize: 12,
    color: '#666',
  },
});

<Text style={styles.title}>Título</Text>
<Text style={styles.body}>Cuerpo del texto</Text>
<Text style={styles.caption}>Texto pequeño</Text>
```

## Clases de Tailwind disponibles

### Pesos normales

| Clase | Fuente | Uso |
|-------|--------|-----|
| `font-roboto` | Roboto-Regular | Texto normal, uso general |
| `font-roboto-thin` | Roboto-Thin | Texto muy ligero, decorativo |
| `font-roboto-light` | Roboto-Light | Texto secundario, descripciones |
| `font-roboto-medium` | Roboto-Medium | Subtítulos, énfasis moderado |
| `font-roboto-semibold` | Roboto-SemiBold | Títulos secundarios |
| `font-roboto-bold` | Roboto-Bold | Títulos principales, énfasis |
| `font-roboto-extrabold` | Roboto-ExtraBold | Títulos destacados |
| `font-roboto-black` | Roboto-Black | Máximo énfasis, headers |

### Versiones itálicas

| Clase | Fuente |
|-------|--------|
| `font-roboto-italic` | Roboto-Italic |
| `font-roboto-thin-italic` | Roboto-ThinItalic |
| `font-roboto-light-italic` | Roboto-LightItalic |
| `font-roboto-medium-italic` | Roboto-MediumItalic |
| `font-roboto-semibold-italic` | Roboto-SemiBoldItalic |
| `font-roboto-bold-italic` | Roboto-BoldItalic |
| `font-roboto-extrabold-italic` | Roboto-ExtraBoldItalic |
| `font-roboto-black-italic` | Roboto-BlackItalic |

## Nombres de fuentes para estilos inline

Si prefieres usar estilos inline o `StyleSheet`, estos son los nombres exactos:

```typescript
// Pesos normales
'Roboto-Regular'
'Roboto-Thin'
'Roboto-Light'
'Roboto-Medium'
'Roboto-SemiBold'
'Roboto-Bold'
'Roboto-ExtraBold'
'Roboto-Black'

// Versiones itálicas
'Roboto-Italic'
'Roboto-ThinItalic'
'Roboto-LightItalic'
'Roboto-MediumItalic'
'Roboto-SemiBoldItalic'
'Roboto-BoldItalic'
'Roboto-ExtraBoldItalic'
'Roboto-BlackItalic'
```

## Ejemplos prácticos

### Pantalla de login

```tsx
<View className="flex-1 justify-center items-center p-6">
  <Text className="font-roboto-bold text-4xl text-typography-900 mb-2">
    Bienvenido
  </Text>
  <Text className="font-roboto-light text-base text-typography-600 mb-8 text-center">
    Inicia sesión para continuar
  </Text>
  {/* Resto de componentes */}
</View>
```

### Lista de elementos

```tsx
{items.map((item) => (
  <View key={item.id} className="p-4 border-b border-outline-200">
    <Text className="font-roboto-semibold text-lg text-typography-900">
      {item.title}
    </Text>
    <Text className="font-roboto text-sm text-typography-700 mt-1">
      {item.description}
    </Text>
    <Text className="font-roboto-light text-xs text-typography-500 mt-2">
      {item.date}
    </Text>
  </View>
))}
```

### Botones con texto

```tsx
// Botón primario
<TouchableOpacity className="bg-primary-500 px-6 py-3 rounded-lg">
  <Text className="font-roboto-semibold text-base text-white text-center">
    Confirmar
  </Text>
</TouchableOpacity>

// Botón secundario
<TouchableOpacity className="border border-outline-300 px-6 py-3 rounded-lg">
  <Text className="font-roboto-medium text-base text-typography-700 text-center">
    Cancelar
  </Text>
</TouchableOpacity>
```

### Formularios

```tsx
<View className="mb-4">
  <Text className="font-roboto-medium text-sm text-typography-800 mb-2">
    Correo electrónico
  </Text>
  <TextInput
    className="font-roboto text-base border border-outline-300 rounded-lg px-4 py-3"
    placeholder="tu@email.com"
  />
  <Text className="font-roboto-light text-xs text-typography-500 mt-1">
    Ingresa un correo válido
  </Text>
</View>
```

### Tarjetas de información

```tsx
<View className="bg-white rounded-xl p-6 shadow-soft-1">
  <Text className="font-roboto-bold text-2xl text-typography-900 mb-3">
    Estadísticas
  </Text>
  
  <View className="flex-row justify-between mb-4">
    <View>
      <Text className="font-roboto-black text-3xl text-primary-500">
        128
      </Text>
      <Text className="font-roboto text-sm text-typography-600">
        Total de usuarios
      </Text>
    </View>
    
    <View>
      <Text className="font-roboto-black text-3xl text-success-500">
        45
      </Text>
      <Text className="font-roboto text-sm text-typography-600">
        Activos hoy
      </Text>
    </View>
  </View>
  
  <Text className="font-roboto-light text-xs text-typography-500 italic">
    Última actualización: hace 5 minutos
  </Text>
</View>
```

## Mejores prácticas

### Jerarquía tipográfica

Usa diferentes pesos para crear jerarquía visual:

- **Headers/Títulos principales**: `font-roboto-bold` o `font-roboto-black`
- **Subtítulos**: `font-roboto-semibold` o `font-roboto-medium`
- **Cuerpo de texto**: `font-roboto` (Regular)
- **Texto secundario**: `font-roboto-light`
- **Captions/Notas**: `font-roboto-light` con tamaño pequeño

### Combinaciones recomendadas

```tsx
// Combinación para títulos de sección
<Text className="font-roboto-bold text-2xl text-typography-900">

// Combinación para texto de cuerpo
<Text className="font-roboto text-base text-typography-700 leading-6">

// Combinación para labels
<Text className="font-roboto-medium text-sm text-typography-800">

// Combinación para texto de ayuda
<Text className="font-roboto-light text-xs text-typography-500">
```

### Accesibilidad

- Mantén un tamaño mínimo de 14px para el texto de cuerpo
- Usa suficiente contraste de color
- No uses fuentes muy delgadas (Thin) para texto pequeño
- Considera el `lineHeight` para mejor legibilidad

```tsx
<Text className="font-roboto text-base leading-6 text-typography-900">
  Texto con buena legibilidad
</Text>
```

## Ubicación de los archivos

- **Fuentes**: `/assets/fonts/roboto/`
- **Configuración de carga**: `/app/_layout.tsx`
- **Configuración de Tailwind**: `/tailwind.config.js`
- **Documentación**: `/docs/roboto-fonts.md`

## Solución de problemas

### Las fuentes no se muestran

1. Verifica que las fuentes estén cargadas correctamente en `_layout.tsx`
2. Asegúrate de que el componente espera a que `fontsLoaded` sea `true`
3. Limpia el caché de Expo: `expo start -c`

### Las clases de Tailwind no funcionan

1. Verifica que estés usando `className` (no `class`)
2. Asegúrate de que el componente soporte NativeWind
3. Revisa que la configuración en `tailwind.config.js` esté correcta

### La fuente se ve diferente en iOS/Android

Esto es normal, cada plataforma renderiza las fuentes de forma ligeramente diferente. Si necesitas consistencia absoluta, considera usar una fuente web o ajustar el estilo por plataforma.

```tsx
import { Platform } from 'react-native';

const fontSize = Platform.select({
  ios: 16,
  android: 15,
  default: 16,
});
```

