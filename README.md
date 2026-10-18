# PratShop v1 — Catàleg, Carro i Compra

Pràctica avaluable de l'AEA1 per al mòdul **0488 Desenvolupament d'interfícies** (2n curs de CFGS DAM, grup DAM2 - Prat Educació).

## 🛍️ Temàtica
Botiga en línia de moda i complements contemporanis. Disposa d'un catàleg amb diferents categories (abrics, camises, jerseis, pantalons, vestits i complements), control d'estoc en temps real, cistella de la compra persistent i formulari de comanda validat.

## 🚀 Instal·lació i execució
Per executar el projecte en local:

```bash
# 1. Instal·lar les dependències
npm install

# 2. Executar el servidor de desenvolupament
npm run dev

# 3. Comprovar que compila sense errors
npm run build

# 4. Passar el linter
npm run lint
```

## 🛠️ Tecnologies utilitzades
- **React 19** + **TypeScript**
- **Vite** com a entorn de construcció
- **React Router 8** per a la navegació SPA
- **CSS Modules** amb tokens de disseny a `:root` (sense colors hexadecimals fora de root)
- **clsx** per a la gestió d'estats visuals (variants normals i esgotades)
- **LocalStorage** per a la persistència del carret de compra

## 📁 Estructura del projecte
```
src/
├── dades/
│   └── productes.ts       # 12 productes amb 6 categories i 2 esgotats
├── components/
│   ├── Boto.tsx           # Botó reutilitzable amb variants
│   ├── Capcalera.tsx      # Menú de navegació i comptador del carret
│   ├── Disposicio.tsx     # Layout comú amb <Outlet />
│   ├── SelectorQuantitat.tsx  # Selector d'unitats amb límits d'estoc
│   └── TargetaProducte.tsx    # Targeta de producte amb estat esgotat
├── pagines/
│   ├── Inici.tsx          # Pàgina principal amb productes destacats
│   ├── Cataleg.tsx        # Catàleg amb cerca a la URL i filtre per categoria
│   ├── DetallProducte.tsx # Fitxa de producte (/producte/:id)
│   ├── Carro.tsx          # Gestió del carret, unitats i totals
│   ├── Compra.tsx         # Formulari de compra controlat i validat
│   └── NoTrobada.tsx      # Pàgina 404 per a rutes inexistents
├── tipus.ts               # Tipus TypeScript de l'aplicació (sense cap any)
├── validacio.ts           # Lògica de validació del formulari de compra
├── App.tsx                # Estat aixecat del carret i definició de rutes
└── index.css              # Tokens globals de disseny
```

## 🎨 Disseny previ
- La documentació i les instruccions de disseny generat es troben a la carpeta `docs/generat/prompts.md`.
