/**
 * Single source of truth — all content sourced directly from
 * Dr. Guntheti Bharath Kumar's official CV. Edit here to update the site.
 */

export const profile = {
  name: "Dr. Guntheti Bharath Kumar",
  shortName: "Dr. Bharath Kumar",
  initials: "GBK",
  title: "Professor & Head — Forensic Medicine & Toxicology",
  institution: "Mamata Medical College, Khammam",
  location: "Khammam, Telangana, India",
  phone: "+91 99083 39507",
  phoneHref: "+919908339507",
  email: "bk62743@gmail.com",
  // Cinematic studio portrait — dark background, mounted gallery-style in the hero.
  headshot: "/headshot.png",
  // Wide cinematic portrait used as the full-bleed hero background (subject right, dark left).
  heroImage: "/hero-bg.png",
  summary:
    "Senior academician and medico-legal expert with over twenty years of teaching experience in Forensic Medicine & Toxicology — spanning undergraduate and postgraduate instruction, academic leadership, medico-legal examination, autopsy practice, curriculum alignment, and faculty development.",
  longBio:
    "Across two decades at Mamata Medical College, Dr. Bharath Kumar has shaped how forensic medicine is taught, examined, and practised in Telangana — building the department's Clinical Forensic Medicine and survivor examination units, steering CBME alignment for the state, and mentoring generations of undergraduate and postgraduate physicians toward rigorous medico-legal practice.",
} as const;

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Teaching", href: "/teaching" },
  { label: "Research", href: "/research" },
  { label: "Credentials", href: "/credentials" },
  { label: "Contact", href: "/contact" },
] as const;

/** Headline metrics — intentionally specific, sourced from the CV. */
export const stats = [
  { value: 20, suffix: "+", label: "Years teaching Forensic Medicine", note: "Undergraduate instruction" },
  { value: 16, suffix: "+", label: "Years of postgraduate teaching", note: "MD-level supervision" },
  { value: 23, suffix: "+", label: "Universities served as examiner", note: "KNRUHS, RGUHS, KUHS, MUHS, MAHE" },
  { value: 100, suffix: "", label: "Postgraduate autopsies conducted", note: "Plus 50 foetal autopsies" },
  { value: 82, suffix: "", label: "Medico-legal expert opinions", note: "Provided to courts & institutions" },
  { value: 30, suffix: "+", label: "Publications & papers authored", note: "National & international journals" },
] as const;

export const coreExpertise = [
  "Forensic Medicine & Toxicology",
  "Medico-legal examination & expert opinion",
  "Undergraduate & postgraduate teaching",
  "Competency-Based Medical Education (CBME)",
  "Clinical Forensic Medicine",
  "Autopsy & forensic case analysis",
  "Faculty development & curriculum planning",
  "Academic administration & committees",
  "Research guidance & scientific writing",
] as const;

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  current?: boolean;
};

/** Reverse-chronological career timeline. */
export const experience: ExperienceItem[] = [
  {
    role: "Professor & Head, Forensic Medicine & Toxicology",
    org: "Mamata Medical College, Khammam",
    period: "Jun 2023 — Present",
    current: true,
  },
  {
    role: "Professor & Head",
    org: "Mamata Academy of Medical Sciences, Hyderabad",
    period: "Mar 2023 — Jun 2023",
  },
  {
    role: "Professor",
    org: "Mamata Medical College, Khammam",
    period: "Dec 2019 — Mar 2023",
  },
  {
    role: "Professor",
    org: "Mamata Academy of Medical Sciences, Hyderabad",
    period: "Jul 2019 — Dec 2019",
  },
  {
    role: "Professor",
    org: "Mamata Medical College, Khammam",
    period: "Jun 2017 — Jul 2019",
  },
  {
    role: "Associate Professor",
    org: "Mamata Medical College",
    period: "Jun 2014 — May 2017",
  },
  {
    role: "Assistant Professor",
    org: "Mamata Medical College",
    period: "Jun 2010 — May 2014",
  },
  {
    role: "Tutor, Forensic Medicine",
    org: "Mamata Medical College",
    period: "Jun 2006 — May 2010",
  },
  {
    role: "Medico-Legal In-charge",
    org: "Mamata Medical College",
    period: "Oct 2004 — Apr 2007",
  },
];

export const leadershipRoles = [
  { role: "Editor-in-Chief", body: "Research Bulletin" },
  { role: "Chairman", body: "Academic & Research Committee" },
  { role: "Chairman", body: "SC & ST Committee" },
  { role: "Registrar", body: "NAAC Committee" },
  { role: "State Co-ordinator", body: "CBME Alignment, Telangana" },
  { role: "Member", body: "IEC & IRB committees" },
] as const;

export const medicoLegalWork = [
  { title: "Clinical Forensic Medicine Unit", detail: "Established and headed the department's clinical forensic unit." },
  { title: "Survivor Examination Unit", detail: "Managed the Sexual Survivor Victim Examination Unit." },
  { title: "100 postgraduate autopsies", detail: "Conducted, alongside 50 foetal autopsies." },
  { title: "82 expert opinions", detail: "Provided medico-legal expert opinions to courts and institutions." },
] as const;

export const teaching = {
  intro:
    "Mentorship is the throughline of a twenty-year career — guiding undergraduates into clinical reasoning, supervising postgraduate research, and setting the examination standards that define the discipline across the region.",
  pillars: [
    {
      title: "Undergraduate Instruction",
      detail:
        "More than 20 years guiding MBBS students through Forensic Medicine — from foundational concepts to clinical forensic reasoning under the CBME framework.",
    },
    {
      title: "Postgraduate Supervision",
      detail:
        "Over 16 years mentoring MD candidates through dissertations, autopsy practice, and the medico-legal casework that builds true forensic expertise.",
    },
    {
      title: "Examiner & Paper Setter",
      detail:
        "Examiner and paper setter for 23+ universities — including KNRUHS, RGUHS, KUHS, MUHS, and Manipal Academy of Higher Education.",
    },
    {
      title: "Curriculum & CBME Alignment",
      detail:
        "State Co-ordinator for CBME Alignment in Telangana and Coordinator for CISP 3rd Professional Alignment & Integration.",
    },
  ],
  facultyDevelopment: [
    "Resource Faculty, Medical Education Technology Unit (METU)",
    "Coordinator, CISP 3rd Professional Alignment & Integration",
    "Faculty / participant across 80+ workshops, conferences & CMEs",
    "Academic participation: TG Forensic Medicon 2026, METCON-2024, VICHPE-2021 & CISP workshops",
  ],
} as const;

export const research = {
  intro:
    "Author and co-author of more than thirty publications, with a research programme that moves between forensic toxicology, medical-education pedagogy, and the realities of clinical medico-legal practice.",
  areas: [
    {
      title: "Forensic Toxicology",
      detail: "Paraquat poisoning patterns and snakebite epidemiology in clinical practice.",
    },
    {
      title: "Medical Education",
      detail: "Flipped-classroom teaching and student perception of Competency-Based Medical Education.",
    },
    {
      title: "Medico-Legal Practice",
      detail: "Clinical forensic methodology, autopsy findings, and expert-opinion frameworks.",
    },
    {
      title: "Forensic Education",
      detail: "Pedagogy and assessment design for Forensic Medicine & Toxicology curricula.",
    },
  ],
  highlights: [
    { value: "30+", label: "Publications & papers" },
    { value: "80+", label: "Workshops, conferences & CMEs" },
    { value: "2024", label: "METCON faculty participation" },
  ],
} as const;

export const education = [
  {
    qualification: "Advanced Course in Medical Education (ACME Course 2025)",
    org: "MCI Nodal Centre, BMC Hyderabad",
    year: "2025",
  },
  {
    qualification: "MD, Forensic Medicine & Toxicology",
    org: "Mamata Medical College / Dr. NTR University of Health Sciences",
    year: "2010",
  },
  {
    qualification: "MBBS",
    org: "Gandhi Medical College, Hyderabad / Dr. NTR University of Health Sciences",
    year: "1997 — 98",
  },
] as const;

export const certifications = [
  { name: "Scientific Writing in Health Research", meta: "Score 85%" },
  { name: "Base Course in Biomedical Research", meta: "Score 63%" },
  { name: "Ethics Review of Health Research", meta: "WHO / ICMR" },
  { name: "AI in Medical Education", meta: "Ongoing" },
] as const;

export const memberships = [
  "Life Member — Indian Academy of Forensic Medicine",
  "Life Member — AP Academy of Forensic Medicine",
  "Life Member — Telangana Academy of Forensic Medicine",
  "Life Member — Karnataka Medico Legal Society",
] as const;

export const awards = [
  { title: "Best Medical Teacher", org: "Mamata Medical College" },
  {
    title: "Certificates of Excellence & Appreciation",
    org: "IASR — Jury & Scientific Committee roles, 2021",
  },
] as const;

export const languages = ["English", "Hindi", "Telugu", "Malayalam"] as const;

export const addresses = {
  professional:
    "Department of Forensic Medicine & Toxicology, Mamata Medical College, Mamata Road, Khammam, Telangana — 507002",
  permanent:
    "H.No. 16-8-190, Srinagar Colony, Road No. 7, Khanapuram Haveli, Khammam, Telangana — 507002",
} as const;
