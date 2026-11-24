# Stimmlicht

Kleine Hilfe beim Legen einer Temperatur nach Gehör, ausgelegt für den Orgelbau.
In der Mitte eines Quintenzirkels pulsiert ein Licht im Takt der Schwebung des
aktuellen Intervalls – orange bei engen, blau bei weiten Intervallen, ruhig weiß bei
der reinen Oktave.

Sechs Stimmzirkel stehen zur Wahl:

- **Quintenzirkel a–a¹ (4′):** zwölf Quinten und Quarten, Tasten a–a¹ auf einem 4′-Register
  (klingend a¹–a², 440–880 Hz).
- **Steinway e–e¹ (Klavier):** nach Ulrich van Aaken,
  [„Der Steinway-Stimmzirkel von e–e'“](https://www.ulrich-van-aaken.de/blind/DerSteinwayStimmzirkelvonee)
  (EUROPIANO 1985). Beginnt mit der Terz f–a, stimmt drei große Terzen direkt und
  zeigt nach den meisten Schritten Kontrollintervalle („Proben“) mit ihrer Schwebung.
- **Vallotti:** ungleichstufige Stimmung, im 4′ auf den Tasten D–d (große Oktave; Start auf
  Taste A, dem ersten a von unten, klingend 220 Hz). Die Quinten F–C–G–D–A–E–H sind um je
  1/6 pythagoreisches Komma verengt, H–Fis–Cis–Gis–Dis–B–F sind rein. Bei reinen
  Intervallen leuchtet das Licht ruhig – stimmen, bis keine Schwebung mehr da ist.
- **Neidhardt „Dorf“ 1732, „Kleine Stadt“ 1732, „Große Stadt“ 1724:** Werte nach den Tabellen
  von Orgelbau Rohlf, Stimmfolgen nach Bradley Lehman
  ([larips.com](https://bpl.rf.gd/larips/practical.html)). Start wie Vallotti auf Taste A im 4′.
  Langsame 1/12-Komma-Quinten werden, wo möglich, nicht gezählt, sondern gleichschwebend zwischen
  ihre Nachbarn gelegt („ausgleichen“). Die Jahreszahl gehört zum Namen, weil Neidhardt 1724 und
  1732 unterschiedliche Fassungen unter ähnlichen Namen veröffentlicht hat.

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
- **Proben ansehen (alle außer Quintenzirkel):** Jede Probe ist im Ring als innerer Bogen von
  Ton zu Ton eingezeichnet (orange = eng, blau = weit). Auf den Bogen oder die
  Probe-Zeile tippen – das Licht pulsiert dann im Takt und in der Farbe dieser Probe,
  ihre beiden Töne leuchten mit, das Hauptintervall wird blasser. Nochmal tippen, aufs
  Licht tippen oder weiterschalten führt zurück zum Hauptintervall.
- **Springen:** Auf einen Tonnamen am Ring tippen – die Seite springt zu dem Schritt,
  in dem dieser Ton gestimmt wird. Der Ring zeigt nebenbei, wie weit man im Zirkel ist
  und welches Intervall gerade gestimmt wird.
- **Kammerton:** In der Kopfzeile auf „Kammerton 440 Hz“ tippen, Zahl eingeben (200–520 Hz,
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

### Vallotti

Abweichung von gleichstufig in Cent (a = 0):

| c | cis | d | es | e | f | fis | g | gis | a | b | h |
|---|---|---|---|---|---|---|---|---|---|---|---|
| +5,87 | 0 | +1,96 | +3,91 | −1,96 | +7,82 | −1,96 | +3,91 | +1,96 | 0 | +5,87 | −3,91 |

Tasten im 4′ (Taste A = erstes a von unten, klingt 220 Hz). Von A aus Terz, Quarte und
Quinte abwärts – mit 3 / 1,5 / 1 Schwebungen gut hörbar –, dann von F aus die reinen
Quinten bis H, zuletzt die verengten Quinten D–G–c:

| Schritt | gestimmt | | Schw./s | Proben (Schw./s) |
|---|---|---|---|---|
| 1 | Terz A → F | weit | 2,98 | – |
| 2 | Quarte A → E | weit | 1,49 | – |
| 3 | Quinte A → D | eng | 0,99 | kleine Terz D–F eng 4,97 |
| 4 | Quarte F → B | rein | 0 | – |
| 5 | Quinte B → Es | rein | 0 | – |
| 6 | Quarte Es → Gis | rein | 0 | – |
| 7 | Quarte Gis → cis | rein | 0 | – |
| 8 | Quinte cis → Fis | rein | 0 | Terz D–Fis weit 4,16 |
| 9 | Quarte Fis → H | rein | 0 | Quinte E–H eng 1,11 |
| 10 | Quarte D → G | weit | 1,33 | Terz G–H weit 3,33 |
| 11 | Quarte G → c | weit | 1,78 | Quinte F–c eng 1,19 · Terz Gis–c weit 10,62 · Terz A–cis weit 8,73 |

### Neidhardt „Kleine Stadt“ 1732

Quinten C–G–D–A–E um je 1/6 pythagoreisches Komma verengt, E–H, H–Fis, Gis–Dis und Dis–B um
je 1/12, F–C, B–F, Fis–Cis und Cis–Gis rein. Abweichung von gleichstufig in Cent (a = 0):

| c | cis | d | dis | e | f | fis | g | gis | a | b | h |
|---|---|---|---|---|---|---|---|---|---|---|---|
| +5,87 | 0 | +1,96 | +1,96 | −1,96 | +3,91 | −1,96 | +3,91 | +1,96 | 0 | +1,96 | −1,96 |

Tasten im 4′ (Taste A = erstes a von unten, klingt 220 Hz). Die Schwebungen sind halb so
schnell wie in der Rohlf-Tabelle, weil sie eine Oktave tiefer liegen (dort klingend a¹–e²
2,98, hier A–E 1,49).

| Schritt | gestimmt | | Schw./s | Proben (Schw./s) |
|---|---|---|---|---|
| 1 | Quarte A → E | weit | 1,49 | – |
| 2 | Quinte A → D | eng | 0,99 | – |
| 3 | Quarte D → G | weit | 1,33 | – |
| 4 | Quarte G → c | weit | 1,78 | – |
| 5 | Quinte c → F | rein | 0 | Terz F–A weit 4,96 |
| 6 | Quarte F → B | rein | 0 | – |
| 7 | Quinte E → H, **vorläufig** (wie die 1/6-Quinten) | eng | 1,11 | – |
| 8 | Quarte H → Fis (vom vorläufigen H) | rein | 0 | Terz D–Fis weit 4,16 |
| 9 | Quinte Fis → cis | rein | 0 | Terz A–cis weit 8,73 |
| 10 | Quarte cis → Gis | rein | 0 | Terz E–Gis weit 8,41 |
| 11 | **H ausgleichen:** E–H und Fis–H gleich klingend | eng | 0,56 | Quarte Fis–H weit 0,84 · Terz G–H weit 4,45 |
| 12 | **Dis ausgleichen:** Gis–Dis und Dis–B gleich klingend | weit | 0,70 | Quinte Dis–B eng 0,53 |

„Gleich klingend“ heißt gleiche Verstimmung, nicht gleiche Schwebungszahl: Der höhere Ton
schwebt schneller. Mit Tipp auf die Probe lässt das Licht das zweite Intervall pulsieren.

### Neidhardt „Dorf“ 1732

Rohlf: „Für das Dorf 1732“. Quinten D–A und A–E um je 1/4 Komma verengt, G–D um 1/6,
C–G, B–F, H–Fis und Cis–Gis um 1/12, F–C, B–Es, Es–Gis(As), E–H und Fis–Cis rein.
Abweichung von gleichstufig in Cent (a = 0):

| c | cis | d | dis | e | f | fis | g | gis | a | b | h |
|---|---|---|---|---|---|---|---|---|---|---|---|
| +5,87 | 0 | +3,91 | +1,96 | −3,91 | +3,91 | −1,96 | +5,87 | 0 | 0 | +3,91 | −1,96 |

Lehman beschreibt diese Fassung nicht (seine „1724 Village“ ist die Kleine Stadt von 1732).
Die Stimmfolge ist im selben Stil gebaut. Weil hier keine 1/12-Quinte einen gleich temperierten
Nachbarn hat, werden G → c, F → B und H → Fis direkt gestimmt; die Terz-Proben helfen dabei.

| Schritt | gestimmt | | Schw./s | Proben (Schw./s) |
|---|---|---|---|---|
| 1 | Quarte A → E | weit | 2,23 | – |
| 2 | Quinte A → D | eng | 1,49 | – |
| 3 | Quarte D → G | weit | 1,33 | – |
| 4 | Quarte G → c | weit | 0,89 | – |
| 5 | Quinte c → F | rein | 0 | Terz F–A weit 4,96 |
| 6 | Quarte F → B | weit | 0,79 | – |
| 7 | Quinte B → Dis | rein | 0 | – |
| 8 | Quarte Dis → Gis | rein | 0 | – |
| 9 | Quinte E → H | rein | 0 | Terz G–H weit 3,34 |
| 10 | Quarte H → Fis | weit | 0,84 | Terz D–Fis weit 3,33 |
| 11 | Quinte Fis → cis | rein | 0 | Quarte Gis–cis weit 0,94 (Zirkel schließt) · Terz A–cis 8,73 · Terz E–Gis 8,40 |

### Neidhardt „Große Stadt“ 1724

Quinten C–G, G–D, D–A um je 1/6 Komma verengt, F–C, E–H und Gis–Dis rein, die übrigen sechs
um 1/12. Abweichung von gleichstufig in Cent (a = 0):

| c | cis | d | dis | e | f | fis | g | gis | a | b | h |
|---|---|---|---|---|---|---|---|---|---|---|---|
| +5,87 | +1,96 | +1,96 | +3,91 | 0 | +3,91 | +1,96 | +3,91 | +1,96 | 0 | +3,91 | +1,96 |

Stimmfolge nach Lehman („1724 Big City“): Erst F–C–G–D–A–E alle als 1/6-Quinten (F und E
vorläufig), davon rein F–B–Es–Gis und E–H–Fis, dann ausgleichen und nachstimmen:

| Schritt | gestimmt | | Schw./s | Proben (Schw./s) |
|---|---|---|---|---|
| 1 | Quarte A → E, **vorläufig** | weit | 1,49 | – |
| 2 | Quinte A → D | eng | 0,99 | – |
| 3 | Quarte D → G | weit | 1,33 | – |
| 4 | Quarte G → c | weit | 1,78 | – |
| 5 | Quinte c → F, **vorläufig** | eng | 1,19 | – |
| 6 | Quarte F → B, **vorläufig** (rein vom vorläufigen F) | rein | 0 | – |
| 7 | Quinte B → Dis | rein | 0 | – |
| 8 | Quarte Dis → Gis | rein | 0 | – |
| 9 | Quinte E → H, **vorläufig** (rein vom vorläufigen E) | rein | 0 | – |
| 10 | Quarte H → Fis | rein | 0 | – |
| 11 | **Cis ausgleichen** zwischen Fis und Gis | eng | 0,63 | Quarte Gis–cis weit 0,94 |
| 12 | **E ausgleichen** zwischen A und H (H noch vorläufig) | weit | 0,74 | Quinte E–H eng 0,56 |
| 13 | **H nachstimmen:** Quinte E → H rein | rein | 0 | Terz G–H weit 6,68 |
| 14 | **F nachstimmen:** Quinte c → F rein | rein | 0 | Terz F–A weit 4,96 |
| 15 | **B ausgleichen** zwischen F und Dis | weit | 0,79 | Quinte Dis–B eng 0,53 |

Alle drei Neidhardt-Fassungen sind gegen die Rohlf-Tabellen geprüft: Eine Oktave höher
(klingend c¹–h¹) ergeben sich deren Quint- und Terzschwebungen auf die Hundertstel genau.
