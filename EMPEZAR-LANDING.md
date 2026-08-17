# Cómo arrancar la landing de Gnome con Claude Code

## 1. Abrí la terminal en ESTA carpeta

```bash
cd ~/Documents/homeIQ/deliverables/landing-page
claude
```

Importante que sea acá y no en la raíz: Claude Code lee el `CLAUDE.md` de esta carpeta **y** el de
`~/Documents/homeIQ/`, así que se carga el contexto de la landing más el del proyecto entero.

## 2. Pegale este prompt

```
Read CLAUDE.md in this folder completely before doing anything.

The Project details block is already filled in — do NOT run the first-time
onboarding flow and do not ask me the seven product questions. The answers are
already there.

Then read these, in this order:
  ../../context/gnome-brand-strategy.md    ← the brand. Authority for all copy.
  ../../context/task-map.md                ← dates, owners, gates
  ../../context/mis-pendientes.md          ← my open tasks and the P-0NN blockers
  ../../context/meetings/                  ← the 2026-08-17 kickoff note

Do not write any code or copy yet. Instead, report back:

1. What you understand the product to be, in three sentences, in your own words.
2. The copy guardrails you will be working under, listed.
3. Every blocker in the CLAUDE.md "Open blockers" table that stops you from
   shipping this page on Thursday Aug 20 — and for each one, tell me whether
   there is a way to proceed without it or whether it is a hard stop.
4. A recommendation on the one thing in the blockers table that I should decide
   first, and why that one.

Answer in Spanish. Do not start the Astro scaffold until I say so.
```

## 3. Cuando te responda y estés de acuerdo, seguí con

```
Bien. Ahora, antes de tocar código: redactá los 9 bloques de copy que pide la
sección "Landing page content" del CLAUDE.md, sacándolos del brand strategy.

Reglas: el tono es "expert underneath, human on top" — warm pero no cute, clear
pero no simplista, reassuring pero NUNCA alarmista, smart pero no fanfarrón.
"The home, worth knowing" es la idea creativa interna, NO es headline: si la
querés proponer como copy, marcala como propuesta y decime por qué.

De estadísticas solo podés usar las dos que están sourced en el deck. Nada más.
Nada de precios, nada de módulos que el cliente dejó fuera.

Dame 2 opciones por bloque, en inglés, con una línea de por qué cada una.
No las escribas en código todavía.
```

## 4. Recién después

```
Aprobado. Scaffoldeá el proyecto Astro como dice el CLAUDE.md y construí la
página con esa copy. Marcá con un comentario TODO cada lugar donde metas un
color, tipografía o logo provisional, para que sea fácil reskinearlo cuando
Together Agency entregue los assets.

No deployees nada todavía.
```

---

## Lo que está bloqueado y no depende de Claude Code

| ID | Qué falta |
|---|---|
| P-114 | **No hay logo, ni colores, ni tipografía.** Together Agency entrega en "a few weeks" y la landing es el jueves 20. |
| P-002 | El dominio no está confirmado. Y cambió con el rename a Gnome. |
| P-016 | La propuesta de valor no está escrita ni aprobada. Es el prerrequisito del headline. |
| P-117 | PostHog **no se mencionó ni una vez** en el kickoff, y el task map lo asume como espina dorsal. Confirmalo antes de cablear eventos. |
| P-004 | Sin cuenta de PostHog no hay API key. |
| P-116 | Basecamp es el canal oficial con el cliente; el task map dice que el tracker es GitHub. Definir dónde caen los issues del widget de feedback. |

La decisión más urgente es **P-114**: o la página sale con una identidad visual provisional
deliberada y fácil de reskinear, o se mueve la fecha. Las dos son válidas; lo que no sirve es
inventar una marca permanente sin que Together Agency la haya entregado.
