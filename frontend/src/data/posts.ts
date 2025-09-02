// Articles de blog du portfolio (exportés depuis Django)
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: string[];
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
  published: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    "id": 1,
    "title": "De la passion du lycée à l’ingénierie logicielle : mon parcours et mes apprentissages",
    "slug": "de-la-passion-du-lycee-a-lingenierie-logicielle-mon-parcours-et-mes-apprentissages",
    "excerpt": "L'informatique n'était pas un choix, mais une évidence. Mais la route n'a pas été simple. De mes premiers clics au collège à un échec cuisant en stage, mon parcours est un condensé de passion, de défis et de découvertes. J'ai cherché ma place dans le code, pour finalement la trouver dans l'art de la conception.",
    "content": "<p>L'odeur de la salle d'informatique du <strong>Collège Vogt</strong> est un de mes premiers souvenirs d'enfant. D'aussi loin que je me souvienne, j'ai été fasciné par tout ce qui avait un processeur, des clients-légers du labo d’informatique, en passant par les téléphones et les tablettes, jusqu’aux consoles de jeux vidéos. Même sans avoir de PC à la maison, j'ai développé une relation intime avec l'outil informatique. Pour chaque exposé, de la sixième à la terminale, j'insistais pour être celui qui se chargeait de la saisie. C'est comme ça que, très tôt, j'ai appris à maîtriser le clavier, à naviguer sur internet, à installer des logiciels et à comprendre le fonctionnement d'un ordinateur.</p><p>La révélation a eu lieu en classe de Première, grâce à mon enseignante d'informatique. Elle a décomposé l'algorithmique et le HTML avec une clarté si absolue que je me suis senti transporté. Je courais chez mon voisin pour mettre en pratique ce que j'apprenais. Le jour où ma première page web est apparue, simple (aucun CSS, je me rends compte aujourd’hui de la mocheté que c’était 😂😂), mais bien là, j'ai su, avec une certitude absolue, que je ferais du génie logiciel.</p><p>La route vers la maîtrise a été semée d'embûches. Dès mon premier cours à l'université, la dure réalité de Java m'est tombée dessus. Ce langage, devenu aujourd’hui l’un de mes préféres, n’avait rien à voir avec le HTML ou même le SQL abordés au lycée, mais j'ai tenu bon. J'ai ensuite passé trois années en <strong>Gestion des Systèmes d'Information (GSI)</strong>, où j'ai pu mettre la théorie à l'épreuve lors de deux stages. Le premier, en développement, a été un véritable baptême du feu. Je tournais en rond, incapable de livrer un projet. C'était un échec total. Mais cet échec a été la meilleure chose qui pouvait m'arriver.</p><p>Il m'a forcé à prendre mon destin en main. J'ai fait mes propres recherches, dévoré des tonnes de tutoriels et appris des outils de maquettage comme <strong>Figma, Adobe XD</strong> et <strong>InDesign</strong> pour structurer mes idées. Mon second stage, en réseaux, a confirmé une chose : sertir des câbles et créer des simulations avec Cisco Packet Tracer ne me passionnait pas. Je m'ennuyais.</p><p>C'est finalement lors de ma licence en génie logiciel et de mon troisième stage, en tant que responsable du développement, que j'ai pu exprimer pleinement mon potentiel. J'ai eu la chance d'être encadré par des enseignants ingénieurs et docteurs, des puristes de la conception logicielle. C'est à leurs côtés que j'ai compris que mon plaisir ne se trouvait pas dans l'interface, mais dans les fondations.</p><p><strong>Aujourd'hui, bien plus qu'un développeur, je suis un</strong> <strong>architecte logiciel</strong>. Je conçois des systèmes robustes, évolutifs et performants, en m'appuyant sur les leçons que j'ai tirées de mes échecs et de mes réussites. Mon parcours est la preuve que la persévérance et la passion sont les meilleurs carburants, et que la véritable vocation se trouve souvent là où on s'y attend le moins.</p>",
    "tags": [
      "Génie Logiciel",
      "Parcours",
      "Apprentissage",
      "Résilience"
    ],
    "publishedAt": "2025-08-25T21:23:14+00:00",
    "createdAt": "2025-08-25T21:23:17.264022+00:00",
    "updatedAt": "2025-08-25T21:52:00.100464+00:00",
    "published": true
  },
  {
    "id": 2,
    "title": "Développeur ou Ingénieur Logiciel : Pourquoi cette nuance peut faire toute la différence dans votre carrière ?",
    "slug": "developpeur-ou-ingenieur-logiciel-pourquoi-cette-nuance-peut-faire-toute-la-difference-dans-votre-carriere",
    "excerpt": "Coder ou concevoir ? Ces deux termes souvent confondus cachent pourtant des réalités professionnelles très différentes. Découvrez pourquoi comprendre cette distinction pourrait transformer votre approche du métier et accélérer votre évolution de carrière dans la tech.",
    "content": "<p>Dans l'écosystème technologique actuel, la frontière entre « <strong>développeur </strong>» et « <strong>ingénieur logiciel </strong>» suscite de nombreux débats. Bien que ces termes soient souvent utilisés de manière interchangeable, ils reflètent en réalité deux niveaux de responsabilité et d'approche distincts dans la création de solutions numériques.</p><h2><strong>Le développeur : maitre de l'exécution</strong></h2><p>Le développeur excelle dans l'art de la programmation. Il transforme des spécifications en code fonctionnel, maîtrise les langages et frameworks, et donne vie aux fonctionnalités imaginées. Son expertise technique est indispensable : sans lui, aucune application ne voit le jour.</p><p>Cette spécialisation représente déjà un niveau d'expertise considérable. Maîtriser les subtilités d'un langage, optimiser les performances, déboguer des systèmes complexes – autant de compétences qui demandent des années de pratique.</p><h2><strong>L'ingénieur logiciel : architecte de solutions</strong></h2><p>L'ingénieur logiciel englobe les compétences du développeur, mais y ajoute une dimension stratégique. Sa mission commence bien avant la première ligne de code et se prolonge bien après la mise en production.</p><h3>Une approche méthodique</h3><p>Cette différence d'approche se manifeste concrètement. Lors d'un de mes projets récents, j'ai passé plusieurs jours à observer les workflows d'une équipe, à identifier leurs points de friction et à comprendre leur écosystème technologique existant. Cette phase d'analyse a orienté toute la conception qui a suivi : choix d'architecture, technologies utilisées, interfaces utilisateur.</p><p>L'ingénieur logiciel ne code pas pour coder – il résout des problèmes métier à travers la technologie.</p><h3>Responsabilités étendues</h3><p>Son périmètre d'action inclut :</p><ul><li><p><strong>L'analyse des besoins</strong> : traduction des enjeux métier en contraintes techniques</p></li><li><p><strong>La conception d'architecture</strong> : anticipation de la scalabilité, de la maintenabilité</p></li><li><p><strong>La gestion de projet</strong> : planification, suivi, coordination des équipes</p></li><li><p><strong>La veille technologique</strong> : évaluation et intégration de nouvelles solutions</p></li><li><p><strong>La documentation</strong> : transmission du savoir et pérennisation des projets</p></li></ul><h2>Une évolution naturelle, pas une opposition</h2><p>Cette distinction ne doit pas être perçue comme une hiérarchie figée. Dans la réalité :</p><p><strong>Les contextes façonnent les rôles.</strong> Un développeur dans une startup peut naturellement endosser des responsabilités d'ingénieur, tandis qu'un ingénieur dans une grande structure peut se concentrer sur des aspects très techniques.</p><p><strong>L'expérience transforme la perspective.</strong> Un développeur senior développe souvent, avec le temps, cette vision globale qui caractérise l'approche ingénieur. C'est une progression naturelle de carrière.</p><p><strong>Les équipes modernes favorisent la polyvalence.</strong> Les méthodologies agiles encouragent chaque membre à comprendre l'ensemble du produit, estompant parfois ces frontières.</p><h2>Formation et parcours : des chemins variés vers l'expertise</h2><h3>Devenir développeur : focus sur la pratique</h3><p>Le métier de développeur peut s'apprendre par <strong>multiples voies</strong> :</p><ul><li><p><strong>Formations courtes et intensives</strong> : bootcamps, formations accélérées (3-6 mois)</p></li><li><p><strong>Autodidacte</strong> : apprentissage par la pratique, tutoriels en ligne, projets personnels</p></li><li><p><strong>Formations techniques</strong> : BTS, DUT informatique (2-3 ans)</p></li><li><p><strong>Cursus universitaire</strong> : licence informatique</p></li></ul><p>L'accent est mis sur la <strong>maîtrise technique</strong> : langages de programmation, frameworks, outils de développement. Ces formations privilégient souvent l'aspect pratique avec beaucoup de projets concrets.</p><h3>Devenir ingénieur logiciel : une formation plus transversale</h3><p>L'ingénieur logiciel nécessite généralement un <strong>bagage académique plus large</strong> :</p><ul><li><p><strong>École d'ingénieurs</strong> (5 ans) : formation complète alliant technique, gestion et sciences humaines</p></li><li><p><strong>Master en informatique</strong> : spécialisations en génie logiciel, architecture des systèmes</p></li><li><p><strong>Formations en gestion de projet</strong> : méthodes agiles, management, analyse des besoins</p></li></ul><p>Ces cursus incluent des <strong>matières transversales</strong> essentielles :</p><ul><li><p>Gestion de projet et méthodologies</p></li><li><p>Communication et relations humaines</p></li><li><p>Économie et stratégie d'entreprise</p></li><li><p>Analyse des systèmes et modélisation</p></li><li><p>Anglais technique et rédactionnel</p></li></ul><h3>L'expérience, facteur déterminant</h3><p>Quelle que soit la formation initiale, <strong>l'expérience terrain</strong> reste cruciale. Un développeur peut évoluer vers l'ingénierie logicielle en :</p><ul><li><p>Participant à des projets complexes</p></li><li><p>Développant ses compétences en analyse métier</p></li><li><p>Se formant aux méthodologies projet (certifications Scrum, PMP...)</p></li><li><p>Cultivant ses soft skills (communication, leadership)</p></li></ul><h3>Formation continue : un impératif</h3><p>Dans les deux cas, la <strong>veille technologique</strong> et la formation continue sont indispensables. L'évolution rapide des technologies exige une remise à niveau permanente, que ce soit par :</p><ul><li><p>Des certifications techniques</p></li><li><p>La participation à des conférences</p></li><li><p>Des formations internes en entreprise</p></li><li><p>L'auto-formation et la pratique personnelle</p></li></ul><h2>Deux approches complémentaires pour un objectif commun</h2><p>Plutôt que d'opposer ces profils, il faut les voir comme deux facettes d'un même métier :</p><ul><li><p>Le <strong>développeur</strong> garantit l'excellence technique et la qualité du code</p></li><li><p>L'<strong>ingénieur logiciel</strong> assure la cohérence globale et la pertinence métier</p></li></ul><p>Les meilleures solutions naissent souvent de la collaboration entre ces deux approches, ou de professionnels capables de jongler entre les deux selon les besoins du projet.</p><h2>Conclusion</h2><p>La valeur d'un professionnel du logiciel ne se mesure pas uniquement à sa capacité à produire du code fonctionnel, mais aussi à sa faculté de comprendre les enjeux, d'anticiper les évolutions et de concevoir des solutions durables.</p><p>Que vous vous identifiez comme développeur ou ingénieur logiciel, l'important est de cultiver cette curiosité qui pousse à comprendre le \"pourquoi\" derrière chaque ligne de code. Car au final, notre mission commune reste la même : créer de la technologie qui améliore concrètement la vie des utilisateurs.</p>",
    "tags": [
      "Ingénierie logicielle",
      "développeur",
      "Conception logicielle",
      "Analyse des besoins",
      "Gestion de projet"
    ],
    "publishedAt": "2025-08-25T18:08:36+00:00",
    "createdAt": "2025-08-25T17:50:08.942300+00:00",
    "updatedAt": "2025-08-25T18:34:06.458379+00:00",
    "published": true
  },
  {
    "id": 3,
    "title": "L'IA : révolution ou menace ?",
    "slug": "lintelligence-artificielle-revolution-ou-menace",
    "excerpt": "L’intelligence artificielle transforme nos vies à une vitesse fulgurante. Entre opportunités incroyables et défis éthiques, elle redessine l’avenir du travail, de la santé et même de la créativité.",
    "content": "Depuis quelques années, l’intelligence artificielle (IA) s’impose comme une technologie incontournable. \r\n\r\nDes modèles comme GPT, Gemini ou LLaMA permettent de générer du texte, d’assister les développeurs, de traduire des langues ou même de créer des œuvres artistiques.\r\n\r\nMais cette avancée rapide pose aussi des questions majeures : automatisation des emplois, biais algorithmiques, protection des données et régulation éthique.\r\n\r\nL’IA peut être un formidable levier de progrès si elle est utilisée de manière responsable, avec un encadrement transparent et humain au centre des décisions.\r\n\r\nL’avenir dépendra de notre capacité à équilibrer innovation et responsabilité.",
    "tags": [
      "intelligence artificielle",
      "technologie",
      "innovation",
      "futur",
      "éthique",
      "apprentissage automatique",
      "transformation digitale"
    ],
    "publishedAt": "2025-08-23T08:09:33+00:00",
    "createdAt": "2025-08-23T08:15:05.535486+00:00",
    "updatedAt": "2025-08-23T11:13:17.003856+00:00",
    "published": true
  }
];

// Helpers pour la manipulation des données
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug && post.published);
};

export const getPublishedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.published);
};

export const getPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => post.published && post.tags.includes(tag));
};

export const getAllTags = (): string[] => {
  const allTags = blogPosts.filter(post => post.published).flatMap(post => post.tags);
  return Array.from(new Set(allTags)).sort();
};

export const getRecentPosts = (limit: number = 5): BlogPost[] => {
  return blogPosts
    .filter(post => post.published)
    .sort((a, b) => new Date(b.publishedAt || 0).getTime() - new Date(a.publishedAt || 0).getTime())
    .slice(0, limit);
};