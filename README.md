# Stimmlicht

Kleine Hilfe beim Legen einer gleichstufigen Temperatur nach Gehör (Orgel/Klavier).
In der Mitte eines Quintenzirkels pulsiert ein Licht im Takt der Schwebung des
aktuellen Intervalls – orange bei engen Quinten, blau bei weiten Quarten.

**Zur Seite:** <https://casualistcode.github.io/stimmlicht/>

Die ganze Seite steckt in `index.html` (kein Framework, keine externen Bibliotheken).
Die übrigen Dateien machen daraus eine installierbare App, die ohne Netz läuft:
`manifest.webmanifest` (Name und Icon), `sw.js` (hält die Seite auf dem Gerät vor)
und die beiden Icons.

## Als App installieren

Einmal mit Internet die Seite öffnen, danach läuft Stimmlicht auch ohne Empfang.

- **Android (Chrome):** Menü ⋮ → **App installieren** bzw. **Zum Startbildschirm hinzufügen**.
- **iPhone/iPad (Safari):** Teilen-Symbol → **Zum Home-Bildschirm**.
- **Rechner (Chrome/Edge):** Installieren-Symbol rechts in der Adresszeile.

Nach einer Änderung an der Seite zeigt die App die neue Fassung beim zweiten Öffnen
(beim ersten wird sie im Hintergrund geholt).

## Bedienung

- **◀ Zurück** / **Weiter ▶** schalten durch die 12 Schritte in der Temperaturoktave
  a1–a2; nach Schritt 12 geht es wieder zu Schritt 1.
- **Springen:** Auf einen Tonnamen am Ring tippen – die Seite springt zu dem Schritt,
  in dem dieser Ton gestimmt wird. Der Ring zeigt nebenbei, wie weit man im Zirkel ist.
- **Kammerton:** In der Kopfzeile auf „a¹ = 440 Hz“ tippen, Zahl eingeben (350–520 Hz,
  auch mit Komma, z. B. 442,5) und bestätigen. Der Wert bleibt auf dem Gerät gespeichert.
- Am Rechner gehen auch die Pfeiltasten (und damit Bluetooth-Fußtaster zum Umblättern).
- Der Bildschirm bleibt an, solange die Seite zu sehen ist (wo der Browser das erlaubt).

## Repository anlegen

1. Auf <https://github.com> anmelden, oben rechts **+** → **New repository**.
2. Namen vergeben (z. B. `stimmlicht`), Sichtbarkeit **Public** wählen,
   **Create repository** klicken.
3. Auf der Seite des neuen Repositorys **uploading an existing file** anklicken
   (oder **Add file** → **Upload files**).
4. Alle Dateien (`index.html`, `manifest.webmanifest`, `sw.js`, `icon-192.png`,
   `icon-512.png`, `README.md`) ins Fenster ziehen und mit **Commit changes** bestätigen.

## GitHub Pages aktivieren

1. Im Repository **Settings** → links **Pages** öffnen.
2. Unter **Build and deployment** bei **Source** „Deploy from a branch“ wählen.
3. Bei **Branch** `main` und Ordner `/ (root)` einstellen, **Save** klicken.
4. Nach ein bis zwei Minuten ist die Seite erreichbar unter
   `https://<benutzername>.github.io/<repository-name>/`
   (die Adresse steht dann auch oben auf der Pages-Seite).

Die Dateien selbst lassen sich im Repository über **Code** → **Download ZIP**
herunterladen.

## Anpassen

Der Kammerton wird auf der Seite eingestellt (siehe Bedienung). Ganz oben im
`<script>`-Teil von `index.html` stehen die Vorgaben:

```js
const KAMMERTON_HZ = 440;   // Vorgabe für a1 in Hz, solange auf dem Gerät nichts eingestellt ist
const START_MIDI   = 69;    // Startton der Temperaturoktave (69 = a1)
```

Wert ändern, Datei speichern, erneut hochladen (bzw. direkt auf GitHub über das
Stift-Symbol bearbeiten) – nach kurzer Zeit ist die Seite aktualisiert.

## Rechenweg

- Gleichstufige Frequenz: `f = 440 · 2^((n − 69)/12)`, n = MIDI-Notennummer (a1 = 69)
- Schwebung der Quinte: `|2 · f_oben − 3 · f_unten|` (eng)
- Schwebung der Quarte: `|3 · f_oben − 4 · f_unten|` (weit)
- Helligkeit des Lichts: `|cos(π · Schwebungsrate · t)|`

| Schritt | Intervall | | Schwebungen/s (a1 = 440 Hz) |
|---|---|---|---|
| 1 | Quinte a1 – e2 | eng | 1,49 |
| 2 | Quarte e2 – h1 | weit | 2,23 |
| 3 | Quinte h1 – fis2 | eng | 1,67 |
| 4 | Quarte fis2 – cis2 | weit | 2,51 |
| 5 | Quinte cis2 – gis2 | eng | 1,88 |
| 6 | Quarte gis2 – dis2 | weit | 2,81 |
| 7 | Quarte dis2 – b1 | weit | 2,11 |
| 8 | Quinte b1 – f2 | eng | 1,58 |
| 9 | Quarte f2 – c2 | weit | 2,36 |
| 10 | Quinte c2 – g2 | eng | 1,77 |
| 11 | Quarte g2 – d2 | weit | 2,65 |
| 12 | Quinte d2 – a2 | eng | 1,99 |
