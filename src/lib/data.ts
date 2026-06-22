// ──────────────────────────────────────────────────────────
//  Données centralisées — Nguedi JM Éditions
// ──────────────────────────────────────────────────────────

export type Genre = "Roman" | "Essai" | "BD" | "Jeu";

export interface Book {
  slug: string;
  title: string;
  author: string;
  /** Couverture. Absent ⇒ couverture générée (voir BookCover). */
  image?: string;
  genre: Genre;
  year?: number;
  publisher?: string;
  description?: string;
  price?: number;
  preface?: string;
  postPreface?: string;
  /** Couleur de la couverture générée si pas d'image. */
  coverColor?: string;
}

export const BOOKS: Book[] = [
  {
    slug: "la-destinee-de-baliama",
    title: "La Destinée de Baliama",
    author: "Grégoire Nguédi",
    image: "/images/la destinee de baliama.png",
    genre: "Roman",
    year: 2010,
    publisher: "L'Harmattan / Cameroun",
    description:
      "Le premier roman de Grégoire Nguédi. Une plongée dans la mémoire et les racines, là où se noue la destinée d'un homme et de sa terre natale.",
  },
  {
    slug: "voyage-entre-ciel-et-terre",
    title: "Voyage entre Ciel et Terre",
    author: "Grégoire Nguédi",
    image: "/images/cover_voyage_entre_ciel-et_terre.jpg",
    genre: "Roman",
    year: 2012,
    publisher: "L'Harmattan / Cameroun",
    coverColor: "#2D5A3D",
    description:
      "Deuxième roman de l'auteur, une traversée entre le réel et l'invisible, à la frontière des mondes et des consciences.",
  },
  {
    slug: "coup-de-foudre-a-bouraka",
    title: "Coup de foudre à Bouraka",
    author: "Grégoire Nguédi",
    image: "/images/coup de foudre a bouraka.png",
    genre: "Roman",
    year: 2013,
    publisher: "L'Harmattan / Cameroun",
    description:
      "Une histoire d'amour et de passions au cœur de Bouraka, où les sentiments se heurtent aux pesanteurs sociales.",
  },
  {
    slug: "les-ombres-oppressantes",
    title: "Les Ombres Oppressantes",
    author: "Grégoire Nguédi",
    image: "/images/les ombres ombressantes.png",
    genre: "Roman",
    year: 2015,
    publisher: "L'Harmattan / Cameroun",
    description:
      "Un roman qui explore les forces obscures, sociales et intimes, qui pèsent sur le destin des hommes.",
  },
  {
    slug: "les-trois-vies-de-farrha-gomis",
    title: "Les 3 Vies de Farrha Gomis",
    author: "Grégoire Nguédi",
    image: "/images/les vies de farrha gomis.png",
    genre: "Roman",
    year: 2022,
    publisher: "L'Harmattan / Cameroun",
    description:
      "Trois existences, trois visages d'une même quête. Farrha Gomis traverse les âges et les épreuves à la recherche d'elle-même.",
  },
  {
    slug: "le-bal-des-sept-collines",
    title: "Le bal des sept collines",
    author: "Grégoire Nguédi",
    image: "/images/couverture_bal_des7collines.jpg",
    genre: "Roman",
    year: 2023,
    publisher: "L'Harmattan / Cameroun",
    coverColor: "#7D1E1E",
    description:
      "Au rythme des sept collines de la cité, un roman choral qui fait danser histoire, mémoire et identité.",
  },
  {
    slug: "le-tresor-des-sept-collines",
    title: "Le Trésor des sept collines",
    author: "Grégoire Nguédi",
    genre: "BD",
    year: 2023,
    publisher: "Nguedi jm Éditions",
    coverColor: "#D9591A",
    description:
      "Une bande dessinée dynamique où un jeune homme et une historienne parcourent la ville à la découverte de ses trésors cachés. Un compagnon de l'univers Epsum Challenge.",
  },
  {
    slug: "controle-gestion-matieres",
    title: "Le Contrôle de la gestion des matières dans l'exécution des budgets publics",
    author: "Vincent Eric Banock Bambock",
    image: "/images/image_controle_delagestion.png",
    genre: "Essai",
    year: 2024,
    publisher: "Nguedi jm Éditions",
    price: 10000,
    preface: "Edou Alo'o Cyrill",
    postPreface: "Kongo Elanga Désiré",
    description:
      "L'adoption de la comptabilité patrimoniale en zone CEMAC introduit des règles strictes sur l'utilisation des biens publics. Cet ouvrage de référence éclaire les dispositifs de contrôle qui veillent au respect des procédures et garantissent le bon usage des biens publics.",
  },
];

// ── Extrait de l'essai « Vient de paraître » ──
export const NEW_BOOK_EXCERPT =
  "« L'adoption de la comptabilité patrimoniale en zone CEMAC introduit des règles strictes sur l'utilisation des biens publics. Cela nécessite des dispositifs de contrôle appropriés qui veillent au respect des procédures et garantissent le bon usage des biens publics. Le contrôle repose sur l'idée selon laquelle le respect des procédures assure le bon usage des biens publics. Aussi vise-t-il à prévenir plus qu'à sanctionner les erreurs de gestion. Ainsi, le déploiement du contrôle de la gestion des matières dans les ministères, les établissements publics et les collectivités territoriales décentralisées, vise à soutenir l'action managériale en apportant des correctifs ; et contribue à prévenir les mauvaises pratiques de gestion… »";

export const NEW_BOOK_AUTHOR_BIO =
  "Vincent Eric Banock Bambock est docteur en Sciences de gestion. Enseignant des universités et des grandes écoles, il cultive une réflexion exigeante sur le management et la gouvernance publique, qu'il confronte toujours à la réalité du terrain. Diplômé de l'Institut du Fonds monétaire international et de l'Institut d'audit social à Paris, il est aujourd'hui chef de la Brigade nationale de contrôle des opérations de gestion des matières au ministère des Finances du Cameroun. À la croisée du monde académique et de l'action publique, il défend l'idée qu'une gestion éclairée naît de la rencontre entre la pensée et l'action. Cet ouvrage est son premier livre.";

// ── L'éditeur / l'auteur : Grégoire Nguédi ──
export const FOUNDER = {
  name: "Grégoire Nguédi",
  birth: "Né le 03/09/1976 à Baliama, au Cameroun",
  role: "C.E.O de Nguedi jm Éditions",
  intro:
    "Grégoire Nguédi est un romancier camerounais. Amoureux d'écriture et de lecture depuis qu'il sait articuler et former des mots, c'est en 2010 qu'il publie son premier roman, La Destinée de Baliama (L'Harmattan/Cameroun), tout en peaufinant déjà « la maison d'édition de ses rêves, cette structure du livre qui remet simplement à jour les canons, les méthodes et même les habitudes qui font du texte de qualité une réalité ».",
  mission:
    "Depuis, il est le C.E.O de Nguedi jm Éditions, structure de formation, d'accompagnement et d'édition de textes ouverte à la littérature générale (roman, poésie, essai, nouvelles, contes, recherches, documentaires…) et dont la principale mission est de « faire du texte de qualité une réalité » dans un monde où lecture et écriture ont perdu leur rang sacré.",
};

// ── Présentation de la maison d'édition ──
export const EDITIONS = {
  founded: 2011,
  intro:
    "Nguédi jm Éditions est une maison d'édition, créée en 2011, spécialisée dans l'édition et la distribution de productions littéraires exclusives par la qualité des travaux d'édition et celle de la langue.",
  support:
    "Nguédi jm Éditions met à disposition de ses auteurs l'ensemble de ses compétences (relecture, réécriture, traduction, suggestions, expertise…) afin que ces derniers puissent présenter le meilleur travail possible, en respectant leur originalité et leur personnalité.",
  ten:
    "À travers la méthode T.E.N (Test d'Évaluation Nguédi), la maison a développé des unités autonomes de formation, de compréhension et d'analyse de l'écriture et de la lecture, lui permettant de produire une évaluation claire et détaillée d'une œuvre littéraire.",
  apps:
    "Nguédi jm Éditions développe également des applications informatiques de correction et de suggestion, en référence à ses unités autonomes, afin d'améliorer la rédaction et la compréhension des textes numériques.",
  training:
    "C'est aussi des formations en littérature et ses métiers, qui permettent aux auteurs d'acquérir les arguties, la quintessence de la littérature et les métiers qui y gravitent.",
};

// ── Unités autonomes de la méthode T.E.N ──
export const TEN_UNITS = [
  "Contexte", "Description", "Narration", "Vraisemblance", "Expression",
  "Ponctuation", "Syntaxe", "Concordance des temps", "Majuscules", "Abréviations",
  "Rythme & équilibre", "Bipolarité", "Logique", "Style", "Accessibilité", "Proportions",
];

// ── Epsum Challenge ──
export const EPSUM = {
  intro:
    "Epsum Challenge est un jeu de société éducatif qui a pour décor la ville de Epsum (Yaoundé). Des origines à nos jours, on redécouvre la ville aux 7 collines. Jeu éducatif et drôle, il réunit toute la famille pour de belles soirées de partage.",
  how:
    "Le jeu consiste en une promenade éducative (Histoire et traditions) dans les quartiers de la ville de Epsum (Yaoundé). Le promeneur, au hasard de ses déplacements, sera imprégné de la culture de Epsum et fera l'acquisition de terrains et de propriétés historiques. Il rencontrera à coup sûr d'autres promeneurs qui convoiteront lesdits terrains, ou qui en seront déjà propriétaires. Sa culture générale et ses connaissances sur l'Histoire et les traditions de la ville seront ses principaux atouts. Il devra aussi et surtout suivre les indications du Nkunkuma afin d'éviter les pièges sur son parcours.",
  goal:
    "En fin de compte, le promeneur qui maîtrise le mieux l'Histoire et les traditions de Epsum (Yaoundé) sera reconnu Zomloa des Zomloa — grand gardien des traditions.",
  price: 20000,
};

// ── Epsum Challenge Univers (ECU) ──
export const ECU = {
  intro:
    "Bienvenue au Epsum Challenge Univers (ECU) ! ECU est un mouvement d'hommes et de femmes, passionné·e·s ou curieux·euses, qui se rassemblent autour de la question de nos origines et de nos villes africaines : leurs histoires, leurs populations, leurs cultures et traditions, leurs géographies, leurs potentiels…",
  mission:
    "Créé depuis 2009, il met en place les moyens artistiques, logistiques, scientifiques et culturels afin que chaque citoyen qui s'interroge ou qui interroge ses origines puisse se retrouver et poursuivre sereinement son dessein.",
  catalog: [
    "Le jeu de société Epsum Challenge",
    "Le bal des 7 collines",
    "Le Trésor des 7 collines",
    "La frise chronologique de Epsum",
    "Les cartes culturelles, géographiques et administratives de Epsum (Yaoundé)",
  ],
  since: 2009,
};

export const SERVICES = [
  {
    id: "critique",
    name: "Critique",
    description: "Analyse critique et avis professionnel sur vos manuscrits pour identifier les forces et axes d'amélioration.",
    color: "#C0392B",
    icon: "?",
  },
  {
    id: "relecture",
    name: "Relecture",
    description: "Relecture approfondie pour assurer la cohérence narrative, le style et la fluidité de votre texte.",
    color: "#2D5A3D",
    icon: "lines",
  },
  {
    id: "formation",
    name: "Formation",
    description: "Ateliers et formations en écriture créative, techniques narratives et construction de personnages.",
    color: "#E8D4B5",
    icon: "pen",
  },
  {
    id: "correction",
    name: "Correction",
    description: "Correction orthographique, grammaticale et syntaxique pour un texte impeccable.",
    color: "#9C6A10",
    icon: "x",
  },
  {
    id: "traduction",
    name: "Traduction",
    description: "Traduction littéraire de qualité, respectant le style et l'âme de l'œuvre originale.",
    color: "#D9591A",
    icon: "Aa",
  },
  {
    id: "edition",
    name: "Édition",
    description: "Accompagnement complet de la mise en page à l'impression, pour donner vie à votre livre.",
    color: "#8A5530",
    icon: "book",
  },
];

export const NAV_LINKS = [
  { label: "ACCUEIL", href: "/" },
  { label: "NGUEDI JM ÉDITIONS", href: "/nguedi-jm-editions" },
  { label: "NOS SERVICES", href: "/nos-services" },
  { label: "NOS LIVRES", href: "/nos-livres" },
  { label: "CONTACT", href: "/contact" },
];
