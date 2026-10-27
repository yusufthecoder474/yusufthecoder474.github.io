# Mohammad Yusuf K A — Portfolio (Enhanced Edition)

A lightweight personal portfolio built with HTML, CSS and JavaScript. This **preserves the same dark blue/purple theme and existing layout** of the previously shared site.

## What's changed
- Optimized the hero for Software Engineer / Full-Stack Developer / AI Engineering roles.
- Removed the Experience and Internship section and **all public placeholders**.
- Updated the About/Skills sections and expanded to **18 curated project cards** with direct GitHub links where a repository exists.
- Added **3 hackathon/recognition entries** (detailed DeepCrop AI 2.0 and AuroConnect results; appropriately qualified early medical-hardware entry), 2 OCI certificates, Infosys certification and ISHRAE leadership.
- Preserved the page sections, visual style, mobile navigation, scroll reveal, back-to-top and contact form.
- Added filter `aria-pressed` state for keyboard/assistive technology users.

## Run on Windows 11
1. Extract this ZIP.
2. Open the folder in VS Code.
3. Right-click `index.html` -> **Open with Live Server** (requires VS Code Live Server extension and trusted workspace).
4. Open `http://127.0.0.1:5500/index.html` (actual port may vary). You can also double-click `index.html`.
5. After editing `index.html` or `style.css`, press Ctrl+S; Live Server refreshes the browser.

## Folder structure
```
index.html
style.css
script.js
assets/profile.jpg
README.md
```

## Integrity and what to verify before publishing
- **Early healthcare hardware hackathon:** You mentioned a medical hardware product, while the public LinkedIn page identifies a January 2024 Aravind Hackathon 5.0 achievement certificate. The exact device, ranking and link between these two descriptions are **not independently confirmed**. To avoid fabricating a win, the website presents them together as early healthcare-hardware work plus a separately documented certificate, without claiming first place or technical specifics.
- **AuroConnect cash prize:** Prior versions of your materials conflict between ₹5,000 and ₹6,000. The site intentionally omits an unverified prize amount and retains the consistent **sixth-place** result.
- **CampusFix:** The later 148-check UX upgrade was described in a resume as **unmerged**; the site explicitly says this. Consult repository evidence before updating the claim.
- **Public links:** Only projects with public GitHub repositories in your connected `yusufthecoder474` account have direct links. AuroConnect, CustomsDesk BI and the ESP32-CAM project have no invented repository links.
- **Project data:** Synthetic benchmarks, local prototypes, offline/mock AI runs and unexecuted deployments are named precisely. There are no fake internships, production deployments or testimonials.
- **Contacts:** The contact form uses a `mailto:` draft fallback unless you configure `FORM_ENDPOINT` in `script.js`. No message is sent automatically without external mail/app support.

## Source basis
- User-provided Honeywell, Danfoss and Yellow.ai résumés, prior described project evidence, and the existing HTML/CSS/JS files.
- Public GitHub READMEs: https://github.com/yusufthecoder474?tab=repositories
- Public LinkedIn profile: https://www.linkedin.com/in/mohammad-yusuf-0665b3265

## Publish for free
Create GitHub repository `yusufthecoder474.github.io`, upload all files at its root, then select **Settings → Pages → Deploy from a branch → main /(root)**. Do not upload the ZIP as a single site file.
