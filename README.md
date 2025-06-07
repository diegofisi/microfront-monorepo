Microfront Multirepo

## Para revisión del proyecto:

# MicrofrontMonorepo

Para revisión del proyecto:
MicrofrontMonorepo
Para revisión del proyecto:

Puntos a cubrir en la rúbrica en este monorepo:

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

# Microfront Monorepo - Guía de Uso

## Instalación

```bash
pnpm install
```

## Levantar el Host en modo desarrollo o depuración

```bash
pnpm host
```

## Modo “watch o dev” para todos los proyectos

```bash
pnpm dev
```

## Ver los targets disponibles de un proyecto

```bash
pnpm nx show project first
```

---

# Cómo añadir nuevos remotos (Microfrontends)

Ejecuta el siguiente comando para generar un nuevo remote:

```bash
pnpx nx g @nx/react:remote --host=host --name=example --directory=apps/example
```

* `--host=host`: indica el proyecto host (donde se consumirá el remote).
* `--name=example`: nombre del nuevo remote.
* `--directory=apps/example`: ubicación del proyecto dentro de `apps/`.

---

# Ajustes de TypeScript

## `tsconfig.base.json` (raíz del monorepo)

Agrega las rutas necesarias:

```json
{
  "compilerOptions": {
    "paths": {
      "@app/example": ["apps/example/src/index.tsx"]
    }
  }
}
```

## `tsconfig.json` (raíz del monorepo)

Debe extender de `tsconfig.base.json`.

## `tsconfig.app.json` (en el host)

* Verifica que `rootDir` y `outDir` estén bien configurados.
* Agrega referencias si es necesario.

## `tsconfig.json` (en el host)

* Debe extender de `../../tsconfig.base.json`.
* Revisa que no existan rutas rotas al agregar el nuevo remote.

---

# Configuración de Rspack para producción

Edita `apps/host/rspack.config.prod.ts` y agrega tu nuevo remote:

```ts
export default {
  remotes: [
    ['catalog', 'http://localhost:4201/'],
    ['profile', 'http://localhost:4202/'],
    ['transfers', 'http://localhost:4203/'],
    ['example', 'http://localhost:8888/'], // <-- tu nuevo remote
  ],
};
```

> Ajusta puertos y rutas según el entorno de despliegue.

---

# Con estos pasos podrás:

* Instalar y ejecutar scripts usando `pnpm`.
* Generar nuevos microfrontends remotos.
* Mantener la configuración de TypeScript actualizada.
* Declarar remotos correctamente en `rspack.config.prod.ts`.


# Asegurarse lo siguiente:

* Generar nuevos remotos con el comando especificado.
* Mantener actualizados los archivos tsconfig.*.json.
* Configurar correctamente los remotos en rspack.config.prod.ts.
