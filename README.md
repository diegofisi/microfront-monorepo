Microfront Multirepo

## Para revisión del proyecto:

# MicrofrontMonorepo

Para revisión del proyecto:

Puntos a cubrir en la rúbrica:

* **Diseño conceptual**: (#1) revisar la carpeta `binaries` y la imagen 
* **PoC del monorepo** (#2) App de monorepo con Nx
* **Aplicación Host** (#5) : aplicacion host donde consume los remotos CATALOG PROFILE Y TRANSFERS
* **Aplicaciones** (#6): las aplicaciones remotas son `CATALOG`, `PROFILE` y `TRANSFERS`
* **Comunicación** (#7): uso de contextos para compartir información entre microfronts
* **Librerías** (#8): uso de librerías personalizadas en `libs/shared` para componente de bienvenida

El resto de la rúbrica se estará tratando en otro proyecto que es \[[https://github.com/diegofisi/microfront-multirepo](https://github.com/diegofisi/microfront-multirepo)] y se esta cubriendo lo siguiente
* **Diseño conceptual** (#3): PoC Multirepo añadido Loan (para préstamos)
* **PoC + Servicios** (#4): Loan está consumiendo su propio backend bff-loan
* **Comunicación** (#7): se está usando Pub/Sub para la comunicación entre Loan y Host
* **Contenedores** (#9): se está dockerizando Loan y su backend asociado
* **Otros** (#10) : Se esta usando el patron iFrame para un widget de noticias financieras

## Prerequisites

* Asegúrate de tener instalado [pnpm](https://pnpm.io/).

## Instalación y primeros pasos

1. Instala las dependencias:

   ```sh
   pnpm install
   ```

2. Para levantar el host en modo desarrollo o depuración:

   ```sh
   pnpm host
   ```

   Si prefieres un comando genérico para todos los proyectos en modo “watch”:

   ```sh
   pnpm dev
   ```

3. Para crear un bundle de producción de un proyecto específico (por ejemplo, `first`):

   ```sh
   pnpm nx build first
   ```

4. Para ver los targets disponibles de un proyecto:

   ```sh
   pnpm nx show project first
   ```

## Cómo añadir nuevos remotos (Microfrontends)

Para generar un nuevo remote en tu monorepo, ejecuta:

```sh
pnpx nx g @nx/react:remote --host=host --name=example --directory=apps/example
```

* `--host=host`: indica el proyecto host (host principal en el que se consumirá el remote).
* `--name=example`: nombre del nuevo remote.
* `--directory=apps/example`: ubicación del proyecto dentro de `apps/`.

### Ajustes de TypeScript

Después de generar el remote, actualiza manualmente estos archivos:

1. **`tsconfig.base.json` (en la raíz del monorepo)**
   Asegúrate de que incluyan las rutas necesarias para tu nuevo remote. Por ejemplo:

   ```jsonc
   {
     "compilerOptions": {
       // ...
       "paths": {
         "@app/example": ["apps/example/src/index.tsx"],
         // otras rutas existentes...
       }
     }
   }
   ```

2. **`tsconfig.json` (en la raíz del monorepo)**
   Verifica que extienda del `tsconfig.base.json`. No suelen requerir cambios adicionales, salvo que uses referencias a proyectos recién creados.

3. **`tsconfig.app.json` (en el host)**

   * Asegúrate de que el `rootDir` y `outDir` apunten correctamente.
   * Si tienes referencias a tu nuevo remote, agrégalas aquí (por ejemplo, en `"paths"` o en `"references"` si usas proyecto referenciado).

4. **`tsconfig.json` (en el host)**
   Este suele extender de `../../tsconfig.base.json`. Solo verifica que no haya rutas rotas al agregar el remote.

## Configuración de Rspack para producción

En `apps/host/rspack.config.prod.ts`, dentro de la sección de `remotes`, agrega tu nuevo remote con su URL de despliegue. Ejemplo:

```ts
export default {
  // ...
  remotes: [
    ['catalog', 'http://localhost:4201/'],
    ['profile', 'http://localhost:4202/'],
    ['transfers', 'http://localhost:4203/'],
    ['example', 'http://localhost:8888/'], // <-- tu nuevo remote
  ],
  // ...
};
```

Asegúrate de ajustar los puertos y rutas según dónde despliegues cada microfrontend.

---

Con estos pasos podrás:

1. Cambiar a `pnpm` para instalar y correr todos los scripts.
2. Generar nuevos remotos con el comando especificado.
3. Mantener actualizados los archivos `tsconfig.*.json`.
4. Configurar correctamente los remotos en `rspack.config.prod.ts`.
