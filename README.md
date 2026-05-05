# M510_BSAE - Benutzerschnittstelle für komplexe Applikation entwerfen

Unterlagen zum Modul 510 für die Bildungsorganisation.

## 📚 Struktur

### Unit 1: React Kursverwaltungs-App

Unit 1 enthält eine umfassende React-Anwendung zur Verwaltung von Kursen und Teilnehmenden. Die Unit ist in zwei Teile unterteilt:

#### 1️⃣ **Uebungen** - Unvollständige Version für Studierende
   
**Pfad:** `Unit1/Uebungen/course-management-app`

Dies ist die **Basis-Version** mit bewusst fehlenden Funktionen. Studierende sollen diese Lücken analysieren und selbst füllen.

**Features der Übungs-Version:**
- ✅ Dashboard mit Statistiken
- ✅ Kursübersicht (Tabelle)
- ✅ Teilnehmerübersicht (Tabelle)
- ✅ Navigation zwischen Seiten
- ✅ Responsive Design
- ✅ TypeScript für Typsicherheit

**Absichtlich NICHT implementiert (für Studierende zu ergänzen):**
- ❌ Suchfunktion
- ❌ Filterfunktion
- ❌ Detailansichten
- ❌ Teilnehmerstatus
- ❌ Anzahl Teilnehmende pro Kurs
- ❌ CRUD-Operationen (Hinzufügen/Bearbeiten/Löschen)
- ❌ LocalStorage Persistierung

**Use Case:** 
- Studierende analysieren die Codestruktur
- Identifizieren fehlende Anforderungen
- Implementieren die fehlenden Features selbst
- Lernen professionelle React-Praktiken

**Start:**
```bash
cd Unit1/Uebungen/course-management-app
npm install
npm run dev
```

---

#### 2️⃣ **Loesungen** - Vollständig implementierte Lösung

**Pfad:** `Unit1/Loesungen/course-management-app-solution`

Dies ist die **vollständige Referenz-Implementation** mit allen Funktionen.

**Alle Features implementiert:**
- ✅ Dashboard mit erweiterten Statistiken
- ✅ Suchfunktion (Kurse & Teilnehmende)
- ✅ Filterfunktion (Status, Kurs)
- ✅ Modal-basierte Detailansichten
- ✅ Vollständige Datenmodelle mit Status
- ✅ CRUD-Operationen
- ✅ LocalStorage für persistente Datenspeicherung
- ✅ Formular-Validierung
- ✅ Benutzerfreundliche UI mit Modals
- ✅ Anzahl Teilnehmende pro Kurs

**Use Case:**
- Referenz für Studierende
- Vergleich mit eigener Implementierung
- Lernen von Best Practices
- Basis für weitere Erweiterungen

**Start:**
```bash
cd Unit1/Loesungen/course-management-app-solution
npm install
npm run dev
```

---

### 📊 Vergleich: Übungen vs. Lösung

| Feature | Übungen | Lösung |
|---------|---------|--------|
| Dashboard | ✅ Basic | ✅ Advanced |
| Suchfunktion | ❌ | ✅ |
| Filterfunktion | ❌ | ✅ |
| Detailansichten | ❌ | ✅ |
| Teilnehmerstatus | ❌ | ✅ |
| Teilnehmerzahl/Kurs | ❌ | ✅ |
| CRUD-Operationen | ❌ | ✅ |
| LocalStorage | ❌ | ✅ |
| Validierung | ❌ | ✅ |
| Modals | ❌ | ✅ |

---

## 🛠️ Technischer Stack

Beide Anwendungen verwenden:

- **React 18**: Funktionale Komponenten mit Hooks
- **TypeScript**: Vollständige Typsicherheit
- **React Router v6**: Navigation zwischen Seiten
- **Vite**: Moderner Build-Tool und Dev-Server
- **CSS3**: Responsive Design mit Flexbox/Grid
- **LocalStorage**: Persistente Datenspeicherung (Lösung)

### Projektstruktur

```
Unit1/
├── Uebungen/
│   └── course-management-app/           # Unvollständige Version
│       ├── src/
│       │   ├── pages/
│       │   │   ├── Dashboard.tsx
│       │   │   ├── Courses.tsx
│       │   │   └── Participants.tsx
│       │   ├── data/
│       │   │   └── mockData.ts
│       │   ├── App.tsx
│       │   └── index.css
│       ├── package.json
│       ├── vite.config.ts
│       ├── tsconfig.json
│       └── README.md
│
└── Loesungen/
    └── course-management-app-solution/  # Vollständige Lösung
        ├── src/
        │   ├── pages/
        │   │   ├── Dashboard.tsx
        │   │   ├── Courses.tsx
        │   │   └── Participants.tsx
        │   ├── data/
        │   │   └── mockData.ts
        │   ├── App.tsx
        │   └── index.css
        ├── package.json
        ├── vite.config.ts
        ├── tsconfig.json
        └── README.md
```

---

## 📋 Datenmodelle

### Kurs (Course)
```typescript
interface Course {
  id: number
  title: string
  date: string
  status: 'active' | 'inactive'
  description: string
  instructor: string           // Nur in Lösung
  capacity: number            // Nur in Lösung
}
```

### Teilnehmender (Participant)
```typescript
interface Participant {
  id: number
  name: string
  email: string
  courseId: number
  status: 'active' | 'inactive' | 'completed'  // Nur in Lösung
  enrollmentDate: string                         // Nur in Lösung
}
```

---

## 🎯 Lernziele

Studierende sollen durch diese Unit lernen:

1. **Codeanalyse**: Bestehenden React-Code verstehen und analysieren
2. **Anforderungsanalyse**: Fehlende Features identifizieren
3. **Implementierung**: Features selbst implementieren
4. **Best Practices**: Professionelle React-Patterns anwenden
5. **TypeScript**: Typsicherheit in React ausnutzen
6. **State Management**: Lokale State und Persistierung
7. **UI/UX**: Benutzerfreundliche Komponenten gestalten
8. **Testing**: Funktionen gegen Lösung vergleichen

---

## 💡 Erweiterungsmöglichkeiten

Nach Unit 1 könnten Studierende erweitern um:

- Backend-Integration mit REST API
- Authentifizierung und Autorisierung
- Datenbank-Anbindung
- Reporting und Export-Funktionen
- Rollen-basierte Zugriffskontrolle
- E-Mail-Benachrichtigungen
- Pagination für große Datenmengen
- Sortierung und erweiterte Filter
- Tests mit Jest/React Testing Library
- Deployment auf einem Server

---

## 📖 Dokumentation

Jede Anwendung hat ein detailliertes **README.md**:
- `Unit1/Uebungen/course-management-app/README.md`
- `Unit1/Loesungen/course-management-app-solution/README.md`

Diese READMEs enthalten:
- Detaillierte Installation
- Feature-Übersicht
- Codebeispiele
- Architektur-Erklärungen
- Best Practices

---

## 🚀 Quick Start

### Übungs-Version starten
```bash
cd Unit1/Uebungen/course-management-app
npm install
npm run dev
# Öffnet http://localhost:3000
```

### Lösung starten
```bash
cd Unit1/Loesungen/course-management-app-solution
npm install
npm run dev
# Öffnet http://localhost:3000
```

---

## 📝 Hinweise für Lehrende

- **Woche 1-2:** Studierende analysieren die Übungs-Version
- **Woche 3-4:** Studierende implementieren fehlende Features
- **Woche 5:** Vergleich mit Lösungs-Version
- **Woche 6+:** Erweiterungen und Vertiefung

Die Lösung kann als Referenz in Code-Reviews verwendet werden.

---

**Viel Erfolg bei Unit 1! 🎓**
