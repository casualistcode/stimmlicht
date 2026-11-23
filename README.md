# Stimmlicht

Kleine Hilfe beim Legen einer Temperatur nach Gehör, ausgelegt für den Orgelbau.
In der Mitte eines Quintenzirkels pulsiert ein Licht im Takt der Schwebung des
aktuellen Intervalls – orange bei engen, blau bei weiten Intervallen, ruhig weiß bei
der reinen Oktave.

Drei Stimmzirkel stehen zur Wahl:

- **Quintenzirkel a–a¹ (4′):** zwölf Quinten und Quarten, Tasten a–a¹ auf einem 4′-Register
  (klingend a¹–a², 440–880 Hz).
- **Steinway e–e¹ (Klavier):** nach Ulrich van Aaken,
  [„Der Steinway-Stimmzirkel von e–e'“](https://www.ulrich-van-aaken.de/blind/DerSteinwayStimmzirkelvonee)
  (EUROPIANO 1985). Beginnt mit der Terz f–a, stimmt drei große Terzen direkt und
  zeigt nach den meisten Schritten Kontrollintervalle („Proben“) mit ihrer Schwebung.
- **Vallotti d–d¹ (4′):** ungleichstufige Stimmung, Tasten d–d¹ auf einem 4′-Register. Die Quinten F–C–G–D–A–E–H sind um je
  1/6 pythagoreisches Komma verengt, H–Fis–Cis–Gis–Dis–B–F sind rein. Bei reinen
  Intervallen leuchtet das Licht ruhig – stimmen, bis keine Schwebung mehr da ist.

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

- **◀ Zurück** / **Weiter ▶** schalten durch die Schritte; nach dem letzten geht
  es wieder zum ersten.
- **Zirkel wählen:** In der Kopfzeile auf den Zirkelnamen tippen (z. B.
  „Quintenzirkel a–a¹ (4′)“) und einen anderen auswählen. Die Wahl bleibt auf dem Gerät
  gespeichert.
- **Tastennamen:** Bei den Orgel-Zirkeln (4′) stehen die Namen der Tasten, die man im
  4′ greift – die Taste a klingt dort mit 440 Hz (= a¹). Beim Steinway-Zirkel (Klavier)
  sind Taste und Klang gleich. Gerechnet wird immer mit dem klingenden Ton.
- **Proben ansehen (Steinway, Vallotti):** Jede Probe ist im Ring als innerer Bogen von
  Ton zu Ton eingezeichnet (orange = eng, blau = weit). Auf den Bogen oder die
  Probe-Zeile tippen – das Licht pulsiert dann im Takt und in der Farbe dieser Probe,
  ihre beiden Töne leuchten mit, das Hauptintervall wird blasser. Nochmal tippen, aufs
  Licht tippen oder weiterschalten führt zurück zum Hauptintervall.
- **Springen:** Auf einen Tonnamen am Ring tippen – die Seite springt zu dem Schritt,
  in dem dieser Ton gestimmt wird. Der Ring zeigt nebenbei, wie weit man im Zirkel ist
  und welches Intervall gerade gestimmt wird.
- **Kammerton:** In der Kopfzeile auf „a¹ = 440 Hz“ tippen, Zahl eingeben (200–520 Hz,
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
const START_MIDI   = 69;    // Startton des Quintenzirkels, klingend (69 = a1 = Taste a im 4')
```

Die Schritte des Steinway-Zirkels stehen weiter unten im Skript in `ZIRKEL.steinway`.

Wert ändern, Datei speichern, erneut hochladen (bzw. direkt auf GitHub über das
Stift-Symbol bearbeiten) – nach kurzer Zeit ist die Seite aktualisiert.

## Rechenweg

- Gleichstufige Frequenz: `f = 440 · 2^((n − 69)/12)`, n = MIDI-Notennummer (a1 = 69)
- Schwebung über die Koinzidenzteiltöne, `f_oben`/`f_unten` = oberer/unterer Ton:
  - Quinte (3:2): `|2 · f_oben − 3 · f_unten|` (eng)
  - Quarte (4:3): `|3 · f_oben − 4 · f_unten|` (weit)
  - große Terz (5:4): `|4 · f_oben − 5 · f_unten|` (weit)
  - kleine Terz (6:5): `|5 · f_oben − 6 · f_unten|` (eng)
  - große Sexte (5:3): `|3 · f_oben − 5 · f_unten|` (weit)
  - Oktave (2:1): `|f_oben − 2 · f_unten|` (rein, 0)
- Helligkeit des Lichts: `|cos(π · Schwebungsrate · t)|`

### Quintenzirkel a–a¹ (4′)

Tasten im 4′, Schwebungen für a¹ = 440 Hz:

| Schritt | Intervall | | Schwebungen/s |
|---|---|---|---|
| 1 | Quinte a – e1 | eng | 1,49 |
| 2 | Quarte e1 – h | weit | 2,23 |
| 3 | Quinte h – fis1 | eng | 1,67 |
| 4 | Quarte fis1 – cis1 | weit | 2,51 |
| 5 | Quinte cis1 – gis1 | eng | 1,88 |
| 6 | Quarte gis1 – dis1 | weit | 2,81 |
| 7 | Quarte dis1 – b | weit | 2,11 |
| 8 | Quinte b – f1 | eng | 1,58 |
| 9 | Quarte f1 – c1 | weit | 2,36 |
| 10 | Quinte c1 – g1 | eng | 1,77 |
| 11 | Quarte g1 – d1 | weit | 2,65 |
| 12 | Quinte d1 – a1 | eng | 1,99 |

### Steinway e–e¹ (Klavier)

Taste = Klang, das a ist das kleine a mit 220 Hz.

| Schritt | gestimmt | | Schw./s | Proben (Schw./s) |
|---|---|---|---|---|
| 1 | Terz a → f | weit | 6,93 | – |
| 2 | Quarte a → d1 | weit | 0,99 | Sexte f–d1 weit 7,92 |
| 3 | Quarte f → b | weit | 0,79 | Terz b–d1 weit 9,25 |
| 4 | Quinte d1 → g | eng | 0,66 | kleine Terz g–b eng 10,58 |
| 5 | Quarte g → c1 | weit | 0,89 | Quinte f–c1 eng 0,59 · kleine Terz a–c1 eng 11,87 |
| 6 | Terz b → fis | weit | 7,34 | – |
| 7 | Quarte fis → h | weit | 0,84 | Terz g–h weit 7,78 · Sexte f–d1 weit 7,92 |
| 8 | Quarte h → e1 | weit | 1,12 | Quinte a–e1 eng 0,74 · Terz c1–e1 weit 10,38 · Sexte g–e1 weit 8,89 |
| 9 | Oktave e1 → e | rein | 0,00 | Quarte e–a weit 0,74 · Quinte e–h eng 0,56 |
| 10 | Terz e → gis | weit | 6,54 | Terz gis–c1 weit 8,24 |
| 11 | Quarte gis → cis1 | weit | 0,94 | Terz a–cis1 weit 8,73 · Quinte fis–cis1 eng 0,63 · Sexte e–cis1 weit 7,48 |
| 12 | Quarte b → es1 | weit | 1,05 | – |

Anmerkungen zur Umsetzung:

- Schritt 4 heißt im Artikel „Quarte abwärts“; d¹ → g ist aber eine Quinte (der
  Artikel nennt g–d¹ später selbst „Nachbarquint“). Stimmlicht rechnet mit der Quinte.
- Für Schritt 11 nennt der Artikel nur „Terz, Quint und Sext“; gewählt sind a–cis¹,
  fis–cis¹ und e–cis¹.
- Proben, die der Artikel als Vergleich zu früheren Schritten nennt, sind nur
  teilweise übernommen (höchstens drei pro Schritt).

### Vallotti d–d¹ (4′)

Abweichung von gleichstufig in Cent (a = 0):

| c | cis | d | es | e | f | fis | g | gis | a | b | h |
|---|---|---|---|---|---|---|---|---|---|---|---|
| +5,87 | 0 | +1,96 | +3,91 | −1,96 | +7,82 | −1,96 | +3,91 | +1,96 | 0 | +5,87 | −3,91 |

Tasten im 4′ (Taste a = 440 Hz). Von a aus Terz, Quarte und Quinte abwärts, dann von f aus die reinen Quinten bis h,
zuletzt die verengten Quinten d–g–c¹:

| Schritt | gestimmt | | Schw./s | Proben (Schw./s) |
|---|---|---|---|---|
| 1 | Terz a → f | weit | 5,95 | – |
| 2 | Quarte a → e | weit | 2,98 | – |
| 3 | Quinte a → d | eng | 1,99 | kleine Terz d–f eng 9,93 |
| 4 | Quarte f → b | rein | 0 | – |
| 5 | Quinte b → es | rein | 0 | – |
| 6 | Quarte es → gis | rein | 0 | – |
| 7 | Quarte gis → cis1 | rein | 0 | – |
| 8 | Quinte cis1 → fis | rein | 0 | Terz d–fis weit 8,32 |
| 9 | Quarte fis → h | rein | 0 | Quinte e–h eng 2,23 |
| 10 | Quarte d → g | weit | 2,66 | Terz g–h weit 6,67 |
| 11 | Quarte g → c1 | weit | 3,55 | Quinte f–c1 eng 2,37 · Terz gis–c1 weit 21,24 · Terz a–cis1 weit 17,46 |
