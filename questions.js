/* Fragenbank. Format je Frage: [Frage, Optionen, Lösung, Erklärung]
   Lösung: Zahl = Einzelauswahl (Index), Array = Mehrfachauswahl (Indizes), "o" = Reihenfolge (Optionen stehen in korrekter Reihenfolge).
   Optionen werden beim Anzeigen immer gemischt, die Position im Code verrät also nichts. */
var QB={
"komm":[
["Die Pflegekraft sagt: „Sie müssen jetzt wirklich mal etwas trinken!“ Welche Ebene der Nachricht steht hier vor allem im Vordergrund?",["Appellebene (Aufforderung)","Sachebene (Information über Flüssigkeit)","Selbstoffenbarungsebene (Sorge der Pflegekraft)","Beziehungsebene (Bewertung der Person)"],0,"Eine Aufforderung, etwas zu tun, ist der Appell der Nachricht. Die anderen Ebenen schwingen mit, stehen aber nicht im Vordergrund."],
["Herr K. (Demenz) sagt: „Ich muss gleich zur Arbeit, die warten auf mich.“ Welche Reaktion entspricht validierender Kommunikation?",["„Die Arbeit war Ihnen wichtig. Erzählen Sie mir, was Sie gearbeitet haben?“","„Sie sind seit Jahren in Rente, Sie müssen nirgends mehr hin.“","„Setzen Sie sich bitte wieder, das ist jetzt nicht dran.“","„Heute ist frei, kommen Sie, wir gehen zum Frühstück.“"],0,"Validation nimmt das Gefühl hinter der Aussage ernst und knüpft daran an, statt zu korrigieren oder abzulenken."],
["Welche Elemente gehören zum aktiven Zuhören? (mehrere richtig)",["Zusammenfassen in eigenen Worten","Gefühle spiegeln","Sofort eine Lösung vorschlagen","Bei Unklarheit nachfragen"],[0,1,3],"Aktives Zuhören heißt verstehen wollen: zusammenfassen, spiegeln, nachfragen. Vorschnelle Ratschläge unterbrechen das Zuhören."]
],
"proph":[
["Welche Maßnahme ist zur Dekubitusprophylaxe NICHT geeignet?",["Gerötete Hautstellen kräftig massieren","Fersen frei lagern","30°-Schräglage statt 90°-Seitenlage","Tägliche Hautinspektion"],0,"Gerötete Stellen dürfen nicht massiert werden, das schädigt das Gewebe zusätzlich."],
["Bei Frau S. ist die Haut an der Ferse in allen Schichten verloren, Fettgewebe ist sichtbar, Knochen und Sehnen liegen nicht frei. Welche Kategorie?",["Kategorie 1","Kategorie 2","Kategorie 3","Kategorie 4"],2,"Kategorie 3: Verlust aller Hautschichten, Fettgewebe sichtbar. Ab Kategorie 4 liegen Knochen, Sehne oder Muskel frei."],
["Welche Aussagen zur Thrombose treffen zu? (mehrere richtig)",["Einseitige Schwellung und Überwärmung sind typische Zeichen","Das betroffene Bein sollte kräftig massiert werden","Virchow-Trias: Gefäßwandschaden, verlangsamter Blutfluss, erhöhte Gerinnungsneigung","Plötzliche Atemnot kann auf eine Lungenembolie hinweisen"],[0,2,3],"Bei Thromboseverdacht nie massieren, Bein ruhig stellen und Arzt informieren. Atemnot danach ist ein Notfallzeichen."]
],
"div":[
["Bei einer Patientin mit Divertikulitis wird der Bauch plötzlich bretthart, Fieber und Puls steigen, der Blutdruck fällt. Was ist am wahrscheinlichsten und was tust du?",["Perforation mit Peritonitis, sofort Arzt informieren","Verstopfung, Abführmaßnahme nach Plan vorbereiten","Blähungen, Wärme anbieten und beobachten","Normale Schwankung, bei der nächsten Visite ansprechen"],0,"Bretthartes Abdomen mit Kreislaufzeichen deutet auf Perforation/Peritonitis hin: Notfall, sofort ärztlich abklären."],
["Wann wird bei Divertikulitis typischerweise eine Koloskopie durchgeführt?",["Nicht im akuten Schub, später zum Tumorausschluss","Sofort bei Aufnahme zur Diagnosesicherung","Täglich im Schub zur Verlaufskontrolle","Nur wenn der Stuhl unauffällig ist"],0,"Im akuten Schub besteht Perforationsgefahr, die Koloskopie erfolgt im Intervall."],
["Was unterscheidet Divertikulose von Divertikulitis?",["Bei der Divertikulitis sind die vorhandenen Ausstülpungen zusätzlich entzündet","Die Divertikulose betrifft den Dünndarm, die Divertikulitis den Dickdarm","Die Divertikulose ist immer operationspflichtig","Die Divertikulitis entsteht nur durch Fremdkörper im Darm"],0,"Divertikulose = Ausstülpungen ohne Entzündung, Divertikulitis = Entzündung dieser Divertikel."]
],
"stoma":[
["Wodurch unterscheidet sich ein Ileostoma typischerweise von einem Colostoma?",["Dünnflüssiger, hautaggressiver Stuhl und höheres Dehydratationsrisiko","Fester geformter Stuhl und geringere Hautprobleme","Ableitung von Urin statt Stuhl","Es ist immer endständig und nie temporär"],0,"Beim Dünndarmstoma ist der Stuhl flüssig und enthält Verdauungsenzyme, daher Hautschutz und Flüssigkeitsbilanz beachten."],
["Der Ausschnitt der Stomaplatte ist deutlich größer als das Stoma. Welche Folge ist wahrscheinlich?",["Hautschäden durch Stuhlkontakt (Mazeration)","Das Stoma zieht sich zurück (Retraktion)","Das Stoma wird besser durchblutet","Keine, ein größerer Ausschnitt ist sicherer"],0,"Haut, die nicht von der Platte geschützt ist, kommt mit aggressivem Stuhl in Kontakt."],
["Welche Beobachtungen am Stoma sind Warnzeichen für die ärztliche Information? (mehrere richtig)",["Blasse oder bläuliche Verfärbung","Schwarze Verfärbung","Rosig-rote, feuchte Schleimhaut","Deutlicher Vorfall (Prolaps) oder Zurückziehen des Stomas"],[0,1,3],"Rosig-rot und feucht ist normal. Verfärbung weist auf Durchblutungsstörung hin, Prolaps oder Retraktion sind Komplikationen."]
],
"zvk":[
["Wann darf ein frisch gelegter ZVK in der Regel erstmals genutzt werden?",["Nach Lagekontrolle (z. B. Röntgen/EKG) und ärztlicher Freigabe","Sofort nach der Anlage, wenn Blut aspiriert werden kann","Immer erst nach 24 Stunden","Nur wenn der Patient keine Schmerzen hat"],0,"Fehllage und Pneumothorax müssen vor der Nutzung ausgeschlossen sein."],
["Ein Patient mit ZVK hat gerötete, geschwollene Einstichstelle und Schüttelfrost. Was ist richtig?",["Arzt informieren (Verdacht auf Katheterinfektion/Sepsis), Vitalzeichen kontrollieren","Verband verstärken und abwarten","Katheter selbst entfernen","Mit antiseptischer Salbe behandeln und am nächsten Tag prüfen"],0,"Infektionszeichen mit Fieber/Schüttelfrost sind ein Alarmzeichen und müssen ärztlich abgeklärt werden."],
["Bringe die Schritte der Sondenkostgabe in eine sinnvolle Reihenfolge.",["Hände desinfizieren","Oberkörper auf 30–45° hochlagern","Sondenlage nach Standard prüfen","Sondenkost anschließen und starten","Nach der Gabe die Sonde spülen"],"o","Hygiene zuerst, dann Position und Lagekontrolle (Aspirationsschutz), Gabe und abschließend Spülen gegen Verstopfung."]
],
"cu":[
["Welche Aussage passt zu Morbus Crohn und NICHT zur Colitis ulcerosa?",["Segmentaler Befall des gesamten Verdauungstrakts, alle Wandschichten","Beginn im Rektum","Kontinuierliche Ausbreitung","Nur der Dickdarm ist betroffen"],0,"CU: Rektum, kontinuierlich, nur Dickdarm, nur Schleimhaut. Crohn: überall möglich, segmental, transmural."],
["Ein CU-Patient hat Fieber, einen stark geblähten Bauch und Kreislaufprobleme. Woran denkst du?",["Toxisches Megakolon, Notfall","Normaler Schub, Beobachtung reicht","Reizdarm","Einfache Verstopfung"],0,"Das toxische Megakolon ist eine lebensbedrohliche Komplikation und muss sofort ärztlich abgeklärt werden."],
["Welche Pflegemaßnahmen sind im Schub sinnvoll? (mehrere richtig)",["Stuhlfrequenz, Blutbeimengung und Gewicht dokumentieren","Flüssigkeits- und Elektrolytbilanz beachten","Perianalpflege zum Hautschutz","Für alle Betroffenen die gleiche strenge Einheitsdiät anordnen"],[0,1,2],"Ernährung wird individuell beraten, es gibt keine Einheitsdiät."]
],
"kult":[
["Eine Patientin möchte im Ramadan fasten und nimmt regelmäßig Medikamente. Was ist richtig?",["Das Gespräch suchen und mit der ärztlichen Person einen individuellen Plan klären","Das Fasten untersagen, weil sie krank ist","Die Medikamente unbemerkt ins Essen mischen","Nichts besprechen, sie wird schon selbst wissen, was sie tut"],0,"Selbstbestimmung respektieren, Risiken offen besprechen und ärztlich abstimmen."],
["Was bedeutet Kulturalisierung?",["Verhalten allein mit „der Kultur“ erklären und Menschen in Schubladen stecken","Kulturelle Angebote in der Einrichtung fördern","Dolmetschende professionell einsetzen","Religiöse Rituale am Lebensende ermöglichen"],0,"Kulturalisierung führt zu Stereotypen. Immer die einzelne Person fragen."],
["Was gehört zur transkulturellen Kompetenz? (mehrere richtig)",["Selbstreflexion eigener Vorurteile","Individuell erfragen statt annehmen","Alle Menschen eines Herkunftslandes gleich behandeln","Wissen und Fertigkeiten im Umgang mit Vielfalt"],[0,1,3],"Gleichbehandlung aller aus einem Land wäre Stereotypisierung."]
],
"copd":[
["Was gilt für Sauerstoffgabe bei COPD?",["Nur nach ärztlicher Anordnung und dosiert, wegen Gefahr der CO2-Retention","So hoch dosieren wie möglich, damit die Atemnot verschwindet","Sauerstoff ist bei COPD grundsätzlich verboten","Nur nachts und ohne Kontrolle"],0,"Zu viel Sauerstoff kann bei manchen Betroffenen den Atemantrieb dämpfen und CO2 ansteigen lassen."],
["Womit wird die COPD-Diagnose gesichert?",["Spirometrie (FEV1/FVC unter 0,7 nach Bronchodilatation)","Pulsoximetrie allein","Einfache Röntgenaufnahme","Peak-Flow-Messung allein"],0,"Die Lungenfunktionsprüfung weist die nicht vollständig reversible Obstruktion nach."],
["Ein Patient mit COPD unter Sauerstoff wird zunehmend müde, hat Kopfschmerzen und wirkt verwirrt. Was tust du?",["Arzt informieren (Verdacht CO2-Retention), Sauerstoff nicht eigenmächtig erhöhen","Sauerstoff zügig erhöhen","Schlafen lassen und am Morgen erneut schauen","Sauerstoff ohne Rücksprache abstellen"],0,"Die Symptome können eine CO2-Retention anzeigen. Anpassung nur ärztlich."]
],
"hilf":[
["Ein Pflegebett für zu Hause soll die Pflege erleichtern, es liegt ein Pflegegrad vor. Wer ist in der Regel Kostenträger?",["Pflegekasse (technisches Pflegehilfsmittel)","Rentenversicherung","Sozialamt in jedem Fall","Der Hausarzt"],0,"Pflegehilfsmittel zur Erleichterung der Pflege fallen unter § 40 SGB XI."],
["Bringe den Ablauf der Hilfsmittelversorgung in die richtige Reihenfolge.",["Bedarf erheben","Verordnung bzw. Antrag stellen","Bewilligung durch den Kostenträger","Einweisung und Anpassung","Nutzung kontrollieren"],"o","Erst der Bedarf, dann Verordnung/Antrag, Bewilligung, Anpassung und schließlich die Kontrolle."],
["Der Antrag auf ein Hilfsmittel wurde abgelehnt. Was ist möglich?",["Widerspruch innerhalb der Frist (meist ein Monat)","Nichts, die Entscheidung ist endgültig","Erst nach einem Jahr neu beantragen","Sofort Klage ohne vorheriges Verfahren"],0,"Die Frist steht in der Rechtsbehelfsbelehrung des Bescheids."]
],
"pp":[
["Bringe die Schritte des Pflegeprozesses nach Fiechter und Meier in die richtige Reihenfolge.",["Informationen sammeln","Probleme und Ressourcen erkennen","Pflegeziele festlegen","Maßnahmen planen","Maßnahmen durchführen","Evaluieren"],"o","Sechs Schritte als Regelkreis, die Evaluation führt zurück in die Planung."],
["Welches Pflegeziel ist gut formuliert?",["Frau M. geht bis Freitag mit dem Rollator 20 m ohne Hilfe.","Frau M. soll insgesamt mobiler werden.","Die Pflegekraft mobilisiert Frau M. täglich.","Frau M. hat keine Sturzgefahr mehr."],0,"Ziele beschreiben das Verhalten der Person, sind konkret, realistisch, überprüfbar und haben einen Zeitpunkt."],
["Wofür steht das PES-Schema bei der Formulierung von Pflegeproblemen?",["Problem, Ursache (Etiology), Symptome","Planung, Evaluation, Steuerung","Patient, Einrichtung, Setting","Prozess, Ergebnis, Struktur"],0,"PES beschreibt das Problem, seine Ursache und die erkennbaren Symptome."]
],
"infos":[
["Welche Themenfelder gehören zum Strukturmodell (SIS)? (mehrere richtig)",["Mobilität und Beweglichkeit","Selbstversorgung","Einkommen der Familie","Wohnen und Häuslichkeit"],[0,1,3],"Die sechs Felder: Kognition/Kommunikation, Mobilität, krankheitsbezogene Anforderungen, Selbstversorgung, soziale Beziehungen, Wohnen/Häuslichkeit."],
["Welche Dokumentation ist fachlich richtig?",["„Herr B. lehnt das Frühstück ab und sagt: ‚Mir ist schlecht.‘“","„Herr B. ist störrisch beim Essen.“","„Herr B. hat keinen Appetit, er ist faul.“","„Herr B. stellt sich beim Frühstück an.“"],0,"Beobachtung und eigene Worte der Person dokumentieren, nicht werten."],
["Welches Instrument erfasst das Dekubitusrisiko?",["Braden-Skala","Barthel-Index","MMST","MNA"],0,"Barthel = Alltagsaktivitäten, MMST = Kognition, MNA = Mangelernährung."]
],
"schm":[
["Welches Instrument eignet sich zur Schmerzeinschätzung bei Menschen mit fortgeschrittener Demenz?",["BESD (Fremdbeobachtung)","NRS 0–10","VAS (Schmerzlineal)","Verbale Ratingskala (Selbstauskunft)"],0,"NRS, VAS und VRS setzen Selbstauskunft voraus, BESD beobachtet Mimik, Lautäußerung und Körpersprache."],
["Welche Aussage zum WHO-Stufenschema stimmt?",["Stufe 2 umfasst schwache, Stufe 3 starke Opioide","Stufe 1 sind starke Opioide","Stufe 3 sind ausschließlich Nicht-Opioide","Co-Analgetika sind nur auf Stufe 1 erlaubt"],0,"Stufe 1 Nicht-Opioide, Stufe 2 schwache Opioide, Stufe 3 starke Opioide, Co-Analgetika zusätzlich."],
["Welche nicht-medikamentösen Maßnahmen sind sinnvoll? (mehrere richtig)",["Schmerzarme Lagerung","Wärme oder Kälte nach Prüfung der Kontraindikationen","Entspannung und Ablenkung","Schmerzäußerungen bis zur Visite ignorieren"],[0,1,2],"Schmerz ernst nehmen und Maßnahmen nach Anordnung und Möglichkeit ergänzen."]
],
"lung":[
["Husten länger als drei Wochen, Blut im Auswurf, Gewichtsverlust. Was ist der wichtigste Risikofaktor für ein Lungenkarzinom?",["Rauchen","Bewegungsmangel","Hoher Zuckerkonsum","Schichtdienst"],0,"Rauchen ist die Hauptursache."],
["Welche Struktur ermöglicht ambulante spezialisierte Palliativversorgung zu Hause?",["SAPV (§ 37b SGB V)","Verhinderungspflege","Tagespflege","Kurzzeitpflege (§ 42 SGB XI)"],0,"SAPV ergänzt die Versorgung bei komplexen Symptomen im häuslichen Umfeld."],
["Ein Mensch in palliativer Situation äußert, nicht reanimiert werden zu wollen. Was ist richtig?",["Wunsch ernst nehmen, ansprechen, ärztlich klären und schriftlich festhalten","Ignorieren, bis ein Angehöriger entscheidet","Immer sofort Reanimation einleiten, dokumentieren spart Zeit","Nur das Pflegeteam entscheidet"],0,"Wünsche gehören in Patientenverfügung oder Vorsorgevollmacht. Der Wille der Person zählt."]
],
"exp":[
["Wer entwickelt die nationalen Expertenstandards in der Pflege?",["DNQP (Hochschule Osnabrück)","G-BA","Bundesärztekammer","Medizinischer Dienst"],0,"Das Deutsche Netzwerk für Qualitätsentwicklung in der Pflege."],
["Was gehört zur Prozessebene eines Expertenstandards?",["Einschätzung, Planung, Beratung, Durchführung, Evaluation","Qualifikation der Mitarbeitenden","Der gewünschte Effekt bei den Betroffenen","Bauliche Voraussetzungen der Einrichtung"],0,"Struktur = Voraussetzungen, Prozess = Handlungsschritte, Ergebnis = angestrebter Effekt."],
["Wozu dient das Ergebniskriterium?",["Es beschreibt den angestrebten Effekt, z. B. kein neuer Dekubitus","Es legt die Qualifikation der Pflegenden fest","Es nennt die Dokumentationsvorlage","Es regelt die Finanzierung"],0,"Am Ergebnis wird die Wirkung der Maßnahmen gemessen."]
],
"schw":[
["Ein Angehöriger ruft an und fragt nach dem Befund. Was ist richtig?",["Ohne Einwilligung der Person keine Auskunft","Auskunft, wenn er glaubhaft klingt","Nur den Befund nennen, die Diagnose nicht","Auskunft, wenn er das Familienbuch nennt"],0,"Schweigepflicht gilt auch gegenüber Angehörigen. Die Einwilligung kommt von der betroffenen Person."],
["Wann ist die Offenbarung eines Geheimnisses befugt? (mehrere richtig)",["Mit Einwilligung der betroffenen Person","Bei einer gesetzlichen Meldepflicht","Im rechtfertigenden Notstand (§ 34 StGB)","Wenn Kollegen neugierig sind"],[0,1,2],"Neugier ist keine Rechtfertigung."],
["Welcher Strafrahmen gilt für den Verstoß gegen § 203 StGB (Abs. 1)?",["Freiheitsstrafe bis 1 Jahr oder Geldstrafe","Nur ein Bußgeld","Freiheitsstrafe bis 10 Jahre","Ausschließlich Abmahnung"],0,"Ein Verstoß ist strafbar, die Tat wird nur auf Antrag verfolgt."]
],
"ber":[
["Du zeigst einem Patienten, wie er Insulin spritzt, und übst es mit ihm. Welche Form ist das?",["Anleitung","Information","Schulung","Beratung"],0,"Anleitung = Handlung zeigen und üben. Information = Wissen weitergeben. Schulung = geplante Gruppe/Serie. Beratung = gemeinsam Lösung finden."],
["Was bedeutet Teach-back?",["Die Person erklärt in eigenen Worten, was sie verstanden hat","Die Pflegekraft wiederholt ihre Erklärung langsamer","Eine schriftliche Prüfung nach der Beratung","Das Zurückgeben von Hilfsmitteln"],0,"So lässt sich prüfen, ob die Information angekommen ist."],
["Welche Vorschrift regelt den Beratungseinsatz bei Pflegegeld?",["§ 37 Abs. 3 SGB XI","§ 7a SGB XI","§ 42 SGB XI","§ 33 SGB V"],0,"§ 7a = Pflegeberatung, § 42 = Kurzzeitpflege, § 33 SGB V = Hilfsmittel."]
],
"leuk":[
["Ein Patient mit Leukämie unter Chemotherapie hat Fieber bei Neutropenie. Wie ist das einzuordnen?",["Notfall, sofort ärztlich abklären","Harmlos, abwarten","Nur Paracetamol geben und morgen messen","Normale Nebenwirkung ohne Handlungsbedarf"],0,"Ohne Abwehrzellen kann eine Infektion rasch lebensbedrohlich werden."],
["Welche Maßnahmen gehören zur Blutungsprophylaxe bei Thrombozytopenie? (mehrere richtig)",["Weiche Zahnbürste","Keine intramuskulären Injektionen","Elektrorasierer statt Nassrasur","Acetylsalicylsäure selbstständig geben"],[0,1,2],"Acetylsalicylsäure hemmt die Blutgerinnung zusätzlich und wird nicht selbstständig gegeben."],
["Warum führt eine Anämie zu Müdigkeit und Blässe?",["Weniger Erythrozyten transportieren weniger Sauerstoff","Es fehlen Thrombozyten","Es fehlen Abwehrzellen","Die Leber produziert zu viel Eisen"],0,"Erythrozyten transportieren Sauerstoff."]
],
"epi":[
["Was gehört zur Ersten Hilfe bei einem tonisch-klonischen Anfall?",["Verletzungen verhindern, Zeit messen, nichts in den Mund legen","Die Person festhalten, damit sie ruhig wird","Einen Löffel zwischen die Zähne schieben","Wasser einflößen"],0,"Nicht festhalten und nichts in den Mund stecken, Schutz vor Verletzungen und Beobachtung."],
["Bringe die Maßnahmen bei einem Anfall in sinnvolle Reihenfolge.",["Ruhe bewahren, Uhrzeit notieren","Gefahren entfernen, Kopf schützen","Anfall beobachten (Dauer, Ablauf)","Nach Ende stabile Seitenlage","Betreuung und Dokumentation"],"o","Erst Sicherheit und Zeitmessung, dann Beobachtung, danach Lagerung und Dokumentation."],
["Welche Auslöser können Anfälle begünstigen? (mehrere richtig)",["Schlafmangel","Alkohol","Flackerlicht","Regelmäßige Medikamenteneinnahme"],[0,1,2],"Regelmäßige Einnahme schützt, vergessene Tabletten sind ein Auslöser."]
],
"qm":[
["Bringe die Phasen des PDCA-Zyklus in die richtige Reihenfolge.",["Plan: planen","Do: umsetzen","Check: überprüfen","Act: anpassen und standardisieren"],"o","Der Zyklus beginnt von vorn und sorgt für kontinuierliche Verbesserung."],
["Was ist CIRS?",["Ein anonymes, freiwilliges Fehlermeldesystem","Ein Zertifikat für Pflegeheime","Eine externe Prüfbehörde","Ein Beschwerdeformular für Angehörige"],0,"Ziel ist das Lernen aus Fehlern, nicht die Suche nach Schuldigen."],
["Welcher Qualitätsdimension gehört die Dekubitusrate an?",["Ergebnisqualität","Strukturqualität","Prozessqualität","Keiner der drei"],0,"Sie misst das Ergebnis der Pflege."]
],
"amg":[
["Welche Punkte gehören zur 6-R-Regel? (mehrere richtig)",["Richtige Person","Richtige Dosis","Richtige Applikation","Richtige Tablettenfarbe"],[0,1,2],"Außerdem: richtiges Arzneimittel, richtiger Zeitpunkt, richtige Dokumentation."],
["Welche Präparate dürfen nicht zerkleinert oder geteilt werden?",["Retard- und magensaftresistente Präparate","Alle Tabletten","Brausetabletten","Tropfen"],0,"Die Wirkstofffreisetzung würde verändert, Überdosierung oder Magenreizung sind möglich."],
["Bei der Medikamentengabe ist ein Fehler passiert. Was ist richtig?",["Sofort ärztlich informieren, dokumentieren und im Fehlermeldesystem erfassen","Verschweigen, wenn kein Schaden sichtbar ist","Selbst gegensteuern und nichts melden","Erst bei der nächsten Teamsitzung ansprechen"],0,"Fehler offen melden schützt die Person und ermöglicht Lernen im System."]
],
"btm":[
["Wo werden Zugang, Abgang und Bestand von BtM nachgewiesen?",["Im Bestandsbuch oder auf der Karteikarte","Nur im Pflegebericht","Auf einem Notizzettel im Dienstzimmer","Eine Dokumentation ist nicht nötig"],0,"Lückenloser Nachweis mit Datum, Menge und Unterschrift ist Pflicht."],
["Wer darf ein BtM-Rezept ausstellen?",["Berechtigte Ärztinnen und Ärzte","Jede Pflegefachperson","Die Apotheke","Die Stationsleitung"],0,"Verschreibung nur durch Berechtigte auf BtM-Rezept."],
["Wie erfolgt die Vernichtung von BtM?",["Durch zwei Personen, dokumentiert","Allein im Ausguss","Im Hausmüll","Rückgabe an die Person ohne Dokumentation"],0,"Das Vier-Augen-Prinzip und Dokumentation sichern die Nachvollziehbarkeit."]
],
"del":[
["Die Ärztin ordnet eine i.m.-Injektion an. Du hast keine Einweisung und fühlst dich unsicher. Was ist richtig?",["Bedenken äußern (Remonstration) und ablehnen, bis eine Einweisung erfolgt ist","Durchführen, weil eine Anordnung vorliegt","An eine Auszubildende weitergeben","Dosis heimlich anpassen"],0,"Wer ohne Qualifikation übernimmt, haftet für Übernahmeverschulden."],
["Was ist NICHT delegierbar? (mehrere richtig)",["Diagnose","Indikationsstellung","Therapieentscheidung","Verabreichung einer Injektion nach Anordnung"],[0,1,2],"Diese Aufgaben bleiben ärztlich, die Durchführung nach Anordnung kann delegiert werden."],
["Was unterscheidet Substitution von Delegation?",["Pflegefachpersonen üben bestimmte Heilkunde eigenverantwortlich aus","Der Arzt ordnet an, die Pflege führt aus","Die Fachperson überträgt Aufgaben an Pflegeassistenz","Heilkunde wird ohne Qualifikation übernommen"],0,"Bei Delegation bleibt die ärztliche Person verantwortlich, bei Substitution handeln qualifizierte Pflegefachpersonen eigenverantwortlich."]
],
"rolle":[
["Eine Pflegekraft ist alleinerziehend und soll kurzfristig einen Spätdienst übernehmen. Welcher Konflikt liegt vor?",["Interrollenkonflikt","Intrarollenkonflikt","Person-Rolle-Konflikt","Rollenambiguität"],0,"Zwei verschiedene Rollen (Pflegekraft, Elternteil) stellen unvereinbare Anforderungen."],
["Eine neue Kollegin weiß nicht, wofür sie zuständig ist. Wie heißt das?",["Rollenambiguität","Intrarollenkonflikt","Interrollenkonflikt","Rollendistanz"],0,"Rollenambiguität bedeutet unklare Erwartungen an die Rolle."],
["Eine Pflegekraft soll bei einer Maßnahme mitwirken, die ihren Werten widerspricht. Welche Konfliktart?",["Person-Rolle-Konflikt","Interrollenkonflikt","Intrarollenkonflikt","Kein Konflikt"],0,"Eigene Werte und Rollenanforderung passen nicht zusammen."]
],
"sett":[
["Was ist typisch für die Akutpflege im Krankenhaus?",["Kurze Verweildauer und hohe Taktung","Dauerhaftes Wohnen","Gast im Haushalt","Tageweiser Aufenthalt ohne Übernachtung"],0,"Akutpflege ist auf Diagnostik, Therapie und rasche Entlassung ausgerichtet."],
["Welche Regelung betrifft die Kurzzeitpflege?",["§ 42 SGB XI","§ 7a SGB XI","§ 37 SGB XI","§ 40 SGB XI"],0,"§ 7a Pflegeberatung, § 37 Pflegegeld, § 40 Pflegehilfsmittel."],
["Behandlungspflege nach ärztlicher Verordnung in der ambulanten Pflege (z. B. Verbandwechsel) gehört zu welchem Sozialgesetzbuch?",["SGB V","SGB XI","SGB IX","SGB XII"],0,"Häusliche Krankenpflege ist SGB V, Grundpflege als Sachleistung SGB XI."]
],
"team":[
["Pflegefachperson und Praxisanleitung arbeiten zusammen. Wie nennt man das?",["Intradisziplinär","Interdisziplinär","Delegation","Substitution"],0,"Innerhalb derselben Berufsgruppe: intradisziplinär."],
["Wofür steht SBAR?",["Situation, Background, Assessment, Recommendation","Struktur, Beratung, Anleitung, Reflexion","Schicht, Bericht, Anordnung, Rückmeldung","Sicherheit, Bedarf, Auftrag, Ressourcen"],0,"Ein Schema für strukturierte Übergaben."],
["Bringe die Teamphasen nach Tuckman in die richtige Reihenfolge.",["Forming","Storming","Norming","Performing"],"o","Orientierung, Konflikt, Regelfindung, Leistung."]
],
"bel":[
["Welche Maßnahme ist Verhältnisprävention?",["Verlässliche Dienstpläne","Rückenschule","Entspannungstraining","Meditations-App für Mitarbeitende"],0,"Verhältnisprävention verändert Arbeitsbedingungen, Verhaltensprävention das Verhalten der Person."],
["Welche Dimensionen des Burnouts nennt Maslach? (mehrere richtig)",["Emotionale Erschöpfung","Zynismus/Distanzierung","Nachlassende Leistungsfähigkeit","Gesteigerte Begeisterung"],[0,1,2],"Burnout geht mit Erschöpfung, Distanzierung und Leistungsabfall einher."],
["Was gehört zum Kohärenzgefühl nach Antonovsky?",["Verstehbarkeit, Handhabbarkeit, Bedeutsamkeit","Struktur, Prozess, Ergebnis","Erschöpfung, Zynismus, Leistung","Plan, Do, Check"],0,"Salutogenese fragt, was Menschen gesund hält."]
],
"ausl":[
["Bei einer Anerkennung aus einem Drittstaat bestehen wesentliche Unterschiede in der Ausbildung. Was folgt?",["Anpassungsmaßnahme oder Kenntnisprüfung","Automatische Anerkennung","Nur ein Deutschtest","Ablehnung ohne Möglichkeit der Nachqualifizierung"],0,"Bei Defiziten ist eine Ausgleichsmaßnahme vorgesehen."],
["Was unterstützt die Integration ausländischer Fachkräfte? (mehrere richtig)",["Mentoring","Strukturierte Einarbeitung","Sprachförderung","Sofort volle Verantwortung ohne Einarbeitung"],[0,1,2],"Überforderung erhöht die Fluktuation."],
["Welche Sprachanforderung gilt in der Regel für die Pflege?",["B2 plus Fachsprache","A1","C2","Keine"],0,"Länder können abweichen, bitte aktuell prüfen."]
],
"pflbg":[
["Wie lange dauert die generalistische Pflegeausbildung in Vollzeit?",["3 Jahre","2 Jahre","4 Jahre","5 Jahre"],0,"Teilzeit ist bis zu 5 Jahren möglich."],
["Welche Aufgaben gehören zu den vorbehaltenen Aufgaben nach § 4 Abs. 2 PflBG? (mehrere richtig)",["Pflegebedarf erheben und Pflege planen","Pflegeprozess organisieren und steuern","Qualität analysieren, sichern und entwickeln","Medikamente verordnen"],[0,1,2],"Verordnung von Medikamenten ist keine vorbehaltene Pflegeaufgabe."],
["Welche Mindeststunden gelten für die Ausbildung?",["2.100 Stunden Unterricht und 2.500 Stunden praktische Ausbildung","1.000 Stunden Unterricht und 1.000 Stunden Praxis","3.000 Stunden Unterricht und 500 Stunden Praxis","1.200 Stunden Unterricht und 4.000 Stunden Praxis"],0,"Mindestens 2.100 Stunden theoretischer und praktischer Unterricht und 2.500 Stunden praktische Ausbildung."]
],
"hyg":[
["Welche gehören zu den Fünf Momenten der Händedesinfektion? (mehrere richtig)",["Vor Patientenkontakt","Vor aseptischen Tätigkeiten","Nach Kontakt mit potenziell infektiösem Material","Beim Betreten des Dienstzimmers"],[0,1,2],"Weitere Momente: nach Patientenkontakt und nach Kontakt mit der Patientenumgebung."],
["Was gilt bei Norovirus-Verdacht?",["Kontaktisolierung und Händedesinfektion mit gegen Noroviren wirksamem Mittel","Nur Händewaschen genügt","Keine besonderen Maßnahmen","Besuch ausdrücklich erwünschen"],0,"Noro ist sehr ansteckend, Wirksamkeit des Mittels nach Herstellerangabe prüfen."],
["Für wen gilt die Standardhygiene?",["Für alle Patientinnen und Patienten","Nur für Personen mit bekannter Infektion","Nur im OP","Nur bei Isolierung"],0,"Standardhygiene ist die Basis, zusätzliche Maßnahmen kommen bei Bedarf hinzu."]
],
"dm":[
["Frau T. (Typ 1) schwitzt, zittert und ist verwirrt, aber ansprechbar. Was tust du zuerst?",["Schnell wirksame Kohlenhydrate (Traubenzucker/Saft) geben, dann Blutzucker kontrollieren","Insulin spritzen","Nüchtern lassen und abwarten","Schlafen lassen"],0,"Es handelt sich wahrscheinlich um Unterzucker. Bei Bewusstsein Kohlenhydrate, danach langsam wirksame."],
["Welche Zeichen sprechen für eine Ketoazidose?",["Acetongeruch, tiefe Atmung, Übelkeit","Zittern und kalter Schweiß","Blässe und Frieren","Heißhunger und Unruhe"],0,"Die Ketoazidose ist bei Typ 1 ein Notfall."],
["Was gehört zur Fußpflege bei Diabetes? (mehrere richtig)",["Tägliche Inspektion der Füße","Nicht barfuß gehen","Hornhaut selbst mit dem Messer entfernen","Fußpflege durch Fachpersonal"],[0,1,3],"Nerven- und Durchblutungsstörungen lassen Verletzungen unbemerkt."]
],
"dem":[
["Herr W. ist seit gestern plötzlich verwirrt, wechselhaft wach und hat Fieber. Woran denkst du zuerst?",["Delir, Ursache suchen und Arzt informieren","Normale Verschlechterung der Demenz","Aufmerksamkeitssuche","Medikamente selbstständig erhöhen"],0,"Akuter Beginn und Schwankungen sprechen für ein Delir."],
["Herausforderndes Verhalten bei Demenz ist oft …",["Ausdruck unerfüllter Bedürfnisse","Absicht, das Team zu ärgern","Unveränderlich und unbehandelbar","Ein Zeichen von Verweigerung"],0,"Schmerz, Angst, Toilette oder Langeweile können dahinterstehen."],
["Welche Demenzform ist am häufigsten?",["Alzheimer-Krankheit","Vaskuläre Demenz","Lewy-Körper-Demenz","Frontotemporale Demenz"],0,"Alzheimer ist die häufigste Ursache."]
],
"rea":[
["Bringe die Maßnahmen bei der Reanimation in die richtige Reihenfolge.",["Bewusstsein prüfen","Atmung prüfen (höchstens 10 Sekunden)","Notruf 112, AED holen lassen","Herzdruckmassage 30:2 beginnen","AED einsetzen und Sprachanweisungen folgen"],"o","Prüfen, Notruf, Kompression, sobald vorhanden AED."],
["Welche Frequenz gilt für die Herzdruckmassage beim Erwachsenen?",["100–120 pro Minute","60 pro Minute","80 pro Minute","140 pro Minute"],0,"Tiefe etwa 5–6 cm, Brustkorb vollständig entlasten."],
["Wie lange darf die Atemkontrolle höchstens dauern?",["10 Sekunden","30 Sekunden","1 Minute","2 Minuten"],0,"Keine oder keine normale Atmung bedeutet Reanimation."]
]
};
