# Renuvia Care – Shopify Theme

Custom Shopify Online Store 2.0 Theme für die Schweizer Selfcare-Brand **Renuvia Care**.

## Theme installieren

### Option A (am einfachsten): Pre-built ZIP aus dem Repo

Direkter Download:
👉 **`dist/renuvia-care-theme.zip`** im Repo öffnen → rechts oben **Download** klicken.

Diese ZIP ist bereits korrekt strukturiert (Theme-Ordner direkt im Root) und kann ohne Umpacken direkt in **Online Store → Themes → Add theme → Upload zip file** hochgeladen werden.

### Option B: Fertige theme.zip aus GitHub Actions

1. Geh zu **Actions → Build Shopify Theme ZIP** im Repo
2. Wähle den letzten erfolgreichen Run, scrolle zu **Artifacts** und lade `renuvia-care-theme` herunter (enthält die `renuvia-care-theme.zip`)
3. In Shopify: **Online Store → Themes → Add theme → Upload zip file**

### Option B: Repo als ZIP von GitHub herunterladen

1. **Code → Download ZIP**
2. ZIP entpacken — der Theme-Ordner enthält den Repo-Namen als Wrapper, das funktioniert leider nicht direkt mit Shopify
3. Alle Theme-Ordner (`assets`, `config`, `layout`, `locales`, `sections`, `snippets`, `templates`) markieren und neu zippen
4. In Shopify hochladen wie oben

> Tipp: Option A liefert direkt eine kompatible ZIP — kein Umpacken nötig.

### Option C: Shopify CLI (für Entwickler)

```bash
shopify theme dev --store=dein-shop.myshopify.com
shopify theme push
```

## Struktur

```
assets/          application.css, application.js
config/          settings_schema.json, settings_data.json
layout/          theme.liquid (Wrapper)
locales/         de.default.json, en.json
sections/        header, footer, hero, marquee, features, testimonials,
                 product-showcase, guarantees, newsletter,
                 main-product, main-collection, main-cart, main-page,
                 main-contact, main-search,
                 announcement-group, header-group, footer-group
snippets/        cart-drawer, product-card, icons (cart, menu, star, etc.)
templates/       index.json, product.json, collection.json, cart.json,
                 page.json, page.contact.json, search.json,
                 list-collections.json, 404.liquid
```

## Features

- **Online Store 2.0** – Section Groups, JSON Templates, Theme Editor Settings
- **Modulare Sections** – alle Homepage-Bereiche im Editor anpassbar
- **AJAX Cart Drawer** – fügt Produkte ohne Reload hinzu
- **Variant Picker** – Farb-Swatches mit Preisaktualisierung
- **Produktgalerie** – Thumbnails wechseln das Hauptbild
- **Mobile Navigation** – Off-Canvas Menu
- **Newsletter & Kontaktformular** – über Shopify Customer- und Contact-Form-API
- **Mehrsprachig** – Deutsch (Default) + Englisch
- **Brand Tokens** – Farben (Ink/Cream/Rose) im Theme Editor anpassbar
- **Schweizer Spa-Ästhetik** – Fraunces (display) + Inter (sans), 1’000+ Reviews Rating

## Setup nach dem Theme-Upload

### 1. Produkte anlegen (vor allem anderen!)

In **Shopify Admin → Products → Add product**:

- **Title:** `Renuvia SilkTouch™`
- **Description:** Bewerbungstext (z. B. "Antibakterielles Peeling-Duschtuch")
- **Media:** Produktbilder hochladen
- **Pricing:** CHF 44.95 (Compare at: CHF 49.95)
- **Variants:** Optionsname "Farbe", Werte: `Pure White`, `Blossom Pink`
- **Theme template** (rechte Seitenleiste): **silktouch** auswählen

> Das Theme bringt die Vorlage `templates/product.silktouch.json` mit – sie sorgt für das spezifische Messaging (Sanft wirksam · Erreicht den Rücken · Hygienisch & schnell trocken · Spa-Erlebnis) auf der Produktseite.

### 2. Hauptmenü konfigurieren

**Online Store → Navigation → Main menu**, Links hinzufügen:

- Home → `/`
- SilkTouch™ → das eben erstellte Produkt verlinken
- Über uns → Page (anlegen unter Online Store → Pages)
- FAQ → Page
- Kontakt → Page (Template "contact" zuweisen)

### 3. Pages anlegen

**Online Store → Pages → Add page**:

- **Über uns** – Template: `page` (default)
- **FAQ** – Template: `page`
- **Kontakt** – Template: **`contact`** ← wichtig für das Kontaktformular

### 4. Theme Editor – Customize

**Online Store → Themes → Customize** (auf dem Renuvia Theme):

1. **Home** auswählen oben in der Dropdown-Leiste
2. **Hero** Section anklicken → Bild hochladen, Headline & Buttons setzen
3. **Produkt Showcase** Section anklicken → Bestseller-Produkt (`Renuvia SilkTouch™`) verlinken
4. **Footer** Section → Footer-Menüs verknüpfen
5. **Theme Settings → Farben** – falls gewünscht anpassen
6. **Save** oben rechts

### 5. Theme als aktiv setzen

**Online Store → Themes → Renuvia Care → Actions → Publish**

## Lizenz

© Renuvia Care – proprietär.
