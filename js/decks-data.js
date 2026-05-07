/* ═══════════════════════════════════════════════════════════
   decks-data.js  —  Fonte única de dados dos 12 decks
   Gerado a partir dos arquivos .txt e .md da análise
═══════════════════════════════════════════════════════════ */

const DECKS = [
  {
    id: "world-shaper",
    name: "World Shaper",
    commander: "Hearthhull, the Worldseed",
    altCommander: null,
    colors: ["B","R","G"],
    colorName: "Jund",
    type: "alterado",
    typeLbl: "Precon Alterado",
    bracket: 3,
    precon: "World Shaper — Edge of Eternities (2025)",
    arquetipo: "Lands / Landfall / Graveyard",
    nota: 7.0,
    nota2v2: 7.5,
    role2v2: "Controlador / Ramp",
    scores: { vel:7, con:7, int:6, combo:7, mana:7, sin:9 },
    pontosFortesGeral: [
      "Engine de Lands extremamente sinérgica",
      "Lord Windgrace + Gitrog Monster + Titania formam uma tríade devastadora",
      "Ramp massivo via Azusa e Oracle of Mul Daya",
      "Recursão de cemitério com Ramunap Excavator e Splendid Reclamation",
      "Multiple win-cons simultâneas"
    ],
    pontosFracos: [
      "Vulnerável a hate de terrenos (Ghost Quarter em massa)",
      "Base de mana inicial dependente dos próprios terrenos do tema",
      "Lento nos primeiros 1–2 turnos"
    ],
    why2v2: "Omnath, Locus of Rage causa dano toda vez que um terreno entra — pode redirecionar para criaturas ameaçadoras dos dois oponentes. Moraug dá combates extras em landfall. Ramp massivo cria espaço para o parceiro se desenvolver livremente.",
    wincons: [
      "Omnath + Moraug + landfall = combates extras infinitos",
      "Scute Swarm com 6+ terrenos = tokens exponenciais",
      "Splendid Reclamation + Titania = horda de elementais",
      "Lord Windgrace ultimado = board letal"
    ],
    cardsAdicionados: [
      "Lord Windgrace","The Gitrog Monster","Korvold, Fae-Cursed King",
      "Oracle of Mul Daya","Titania, Protector of Argoth","Azusa, Lost but Seeking",
      "Lotus Cobra","Tireless Tracker","Zuran Orb","Sylvan Safekeeper",
      "Scute Swarm","Ancient Greenwarden","Ramunap Excavator",
      "Conduit of Worlds","Omnath, Locus of Rage","Moraug, Fury of Akoum",
      "World Shaper","Splendid Reclamation","Sol Ring"
    ],
    cardsRemovidos: ["Crucible of Worlds (movido ao sideboard)","Valakut Exploration","Multani, Yavimaya's Avatar"],
    analise: "O deck de Lands mais sólido da coleção. As adições transformaram um precon num mecanismo de Lands verdadeiramente competitivo para pods casuais. A combinação Lord Windgrace + The Gitrog Monster permite jogar 3–4 terrenos por turno enquanto Omnath e Moraug fecham o jogo de formas distintas.",
    moxfield: "https://moxfield.com/decks/IYaQBBVNDES9GLP2oP-wOQ"
  },
  {
    id: "riveteers-rampage",
    name: "Riveteers Rampage",
    commander: "Henzie \"Toolbox\" Torre",
    altCommander: null,
    colors: ["B","R","G"],
    colorName: "Jund",
    type: "alterado",
    typeLbl: "Precon Alterado",
    bracket: 3,
    precon: "Riveteers Rampage — Streets of New Capenna (2022)",
    arquetipo: "Reanimator / ETB de criaturas grandes",
    nota: 7.0,
    nota2v2: 7.0,
    role2v2: "Finalizador / Pressão",
    scores: { vel:7, con:7, int:7, combo:7, mana:6, sin:8 },
    pontosFortesGeral: [
      "Birthing Pod é devastador no contexto de Henzie",
      "Criaturas Blitz voltam ao cemitério grátis para serem buscadas novamente",
      "Warstorm Surge causa dano sem precisar de combate",
      "Etali rouba o jogo inteiro em um único turno",
      "Toxic Deluge é um dos melhores boardwipes do Commander"
    ],
    pontosFracos: [
      "Sem fetchlands — base de mana pode emperrar em mão ruim",
      "Vulnerável a exile (criaturas no cemitério são necessárias)",
      "Birthing Pod é alvo garantido de remoção"
    ],
    why2v2: "Criaturas gigantes ameaçam os dois oponentes simultaneamente. Warstorm Surge causa dano em ETB sem precisar de combate — funciona mesmo quando bloqueado. Toxic Deluge limpa boards problemáticos. Bom finalizador quando o parceiro já controlou a mesa.",
    wincons: [
      "Birthing Pod chain buscando criatura certa para cada situação",
      "Warstorm Surge + qualquer ETB = dano massivo",
      "Etali, Primal Storm rouba as melhores cartas dos oponentes",
      "Living Death com cemitério cheio = ressurreição em massa"
    ],
    cardsAdicionados: [
      "Birthing Pod","Birthing Ritual","Animate Dead","Living Death",
      "Toxic Deluge","Ignoble Hierarch","Birds of Paradise",
      "Junji, the Midnight Sky","Ilharg, the Raze-Boar","Etali, Primal Storm",
      "Ojer Kaslem","Gruff Triplets","Noxious Gearhulk",
      "Disciple of Bolas","Kethek, Crucible Goliath","Woodfall Primus",
      "Sepulchral Primordial","Warstorm Surge","Stalking Vengeance","Heartless Summoning"
    ],
    cardsRemovidos: [
      "Riveteers Ascendancy","Riveteers Charm","Riveteers Overlook",
      "Mr. Orfeo, the Boulder","Ognis, the Dragon's Lash","Ziatora's Envoy"
    ],
    analise: "Birthing Pod no contexto de Henzie é absolutamente devastador. Você sacrifica criaturas jogadas com Blitz (que voltam de graça para o cemitério) para buscar criaturas ainda maiores na cadeia. O deck ganhou consistência, remoção de qualidade e combo-potential significativos.",
    moxfield: "https://moxfield.com/decks/PvO4l-TOb0S6oJJAUzVIFA"
  },
  {
    id: "paradox-power",
    name: "Paradox Power",
    commander: "The Thirteenth Doctor",
    altCommander: "Ryan Sinclair",
    colors: ["G","U","R"],
    colorName: "Temur",
    type: "alterado",
    typeLbl: "Precon Alterado",
    bracket: 3,
    precon: "Paradox Power — Doctor Who Commander (2023)",
    arquetipo: "Proliferate / Counters +1/+1",
    nota: 6.0,
    nota2v2: 4.0,
    role2v2: "Solo / Counters (não recomendado)",
    scores: { vel:5, con:6, int:5, combo:5, mana:7, sin:7 },
    pontosFortesGeral: [
      "Base de mana excelente para 3 cores (Breeding Pool, Dreamroot Cascade)",
      "Ozolith preserva contadores ao morrer",
      "Thrummingbird e Evolution Sage proliferam consistentemente",
      "Hadana's Climb cria criatura com evasão poderosa",
      "Contadores em múltiplos permanentes ao mesmo tempo"
    ],
    pontosFracos: [
      "Estratégia lenta — leva múltiplos turnos para ser relevante",
      "Sem combos de vitória rápida",
      "Muito individual — não contribui para o parceiro em 2v2",
      "Vulnerável a bounce e removal de criaturas grandes"
    ],
    why2v2: "Proliferate é uma estratégia individual — os contadores ficam nas suas próprias criaturas sem benefício direto para o parceiro. O deck é lento para construir pressão. Counterspell ajuda mas o plano geral não contribui ativamente para a dupla. Funciona melhor em pods de 4.",
    wincons: [
      "Managorger Hydra crescendo com cada magia jogada",
      "Hadana's Climb ativado = criatura com voo e power alto",
      "Contadores em Planeswalker até ultimate",
      "Iraxxa, Empress of Mars com muitos contadores"
    ],
    cardsAdicionados: [
      "Iraxxa, Empress of Mars","Bristly Bill, Spine Sower",
      "Laelia, the Blade Reforged","Ozolith, the Shattered Spire",
      "Plargg and Nassari","Wild-Magic Sorcerer",
      "Faldorn, Dread Wolf Herald","K-9 Mark I"
    ],
    cardsRemovidos: [
      "Cultivate","Tezzeret's Gambit","Flux Channeler",
      "Branching Evolution","Danny Pink","Osgood, Operation Double"
    ],
    analise: "As alterações são coerentes com o tema de counters mas o deck ainda é moderado em poder. Proliferate em EDH precisa de muita configuração antes de ser eficiente. A mistura de Doctor Who com cartas de outros sets cria uma identidade temática interessante.",
    moxfield: "https://moxfield.com/decks/WFNb1UGbHk-SgLyRID0ixA"
  },
  {
    id: "sultai-arisen",
    name: "Sultai Arisen",
    commander: "Teval, the Balanced Scale",
    altCommander: "Kotis, Sibsig Champion",
    colors: ["B","G","U"],
    colorName: "Sultai",
    type: "intacto",
    typeLbl: "Precon Intacto",
    bracket: 2,
    precon: "Sultai Arisen — Tarkir: Dragonstorm (2025)",
    arquetipo: "Self-Mill / Graveyard / Reanimator",
    nota: 5.0,
    nota2v2: 5.0,
    role2v2: "Controlador Lento",
    scores: { vel:4, con:5, int:5, combo:3, mana:4, sin:8 },
    pontosFortesGeral: [
      "Meren of Clan Nel Toth é uma das melhores cartas de Commander já impressas",
      "Dauthi Voidwalker: hatebear de 2 manas muito eficiente",
      "Life from the Loam + terrenos cíclicos = card advantage passivo",
      "Living Death pode virar o jogo em um único turno",
      "Colossal Grave-Reaver e Teval's Judgment são novas cartas potentes"
    ],
    pontosFracos: [
      "Base de mana fraca para tri-color",
      "Sem tutores eficientes",
      "Dependente de cemitério — vulnerável a Rest in Peace / Leyline",
      "Velocidade baixa, curva cara",
      "Kotis como comandante principal é pouco testado"
    ],
    why2v2: "Funciona como controlador paciente — deixa o parceiro pressionar enquanto acumula valor pelo cemitério. Casualties of War e Living Death podem ser decisivos em momentos certos. Porém é muito lento nos primeiros turnos contra dois oponentes agressivos.",
    wincons: [
      "Living Death com cemitério cheio de criaturas poderosas",
      "Meren recursão infinita de criaturas com ETB",
      "Avenger of Zendikar + tokens de planta",
      "Jarad sacrificando criatura enorme"
    ],
    cardsAdicionados: [],
    cardsRemovidos: [],
    analise: "Deck intacto verificado carta a carta. Meren of Clan Nel Toth eleva o poder do deck muito acima de um precon comum. O arquétipo de graveyard é naturalmente resiliente mas precisa de alguns turnos para se estabelecer.",
    moxfield: "https://moxfield.com/decks/PKj1G43WoUSjPlvQR9jR_g"
  },
  {
    id: "cabaretti-cacophony",
    name: "Cabaretti Cacophony",
    commander: "Kitt Kanto, Mayhem Diva",
    altCommander: "Phabine, Boss's Confidant",
    colors: ["W","R","G"],
    colorName: "Naya",
    type: "intacto",
    typeLbl: "Precon Intacto",
    bracket: 2,
    precon: "Cabaretti Cacophony — Streets of New Capenna (2022)",
    arquetipo: "Tokens / Política (Goad)",
    nota: 5.0,
    nota2v2: 8.0,
    role2v2: "Agressor / Político ⭐ Melhor para 2v2",
    scores: { vel:5, con:5, int:5, combo:3, mana:4, sin:8 },
    pontosFortesGeral: [
      "Kitt Kanto goa criaturas — política natural muito eficaz",
      "Scute Swarm pode ser devastador com muitos terrenos",
      "March of the Multitudes e Grand Crescendo são finalizadores instantâneos",
      "Gahiji dá +2/+0 para criaturas aliadas — melhor em multiplayer",
      "Selvala Explorer Returned gera recursos para todos"
    ],
    pontosFracos: [
      "Base de mana ruim — muitos terrenos ETB-tapped",
      "Sem recursão de cemitério",
      "Tokens vulneráveis a boardwipes",
      "Pouca proteção para o comandante"
    ],
    why2v2: "Kitt Kanto goa criaturas dos DOIS oponentes — eles se atacam entre si protegendo você e seu parceiro automaticamente. Selvala gera recursos para todos. Gahiji dá +2/+0 para criaturas aliadas atacando inimigos. É o precon mais politicamente eficiente em 2v2.",
    wincons: [
      "Tokens + Beastmaster Ascension = ataque letal",
      "March of the Multitudes instantâneo com convoke",
      "Scute Swarm com 6+ terrenos em campo",
      "Grand Crescendo com tokens indestrutíveis"
    ],
    cardsAdicionados: [],
    cardsRemovidos: [],
    analise: "O melhor precon intacto para Commander em Duplas da coleção. A mecânica de Goad de Kitt Kanto naturalmente força os dois oponentes a se atacarem entre si. Apesar de ter nota de poder geral baixa para pods de 4, é extraordinariamente eficiente em 2v2.",
    moxfield: "https://moxfield.com/decks/34XD7On6CE-mqVeZ2LvfLQ"
  },
  {
    id: "food-and-fellowship",
    name: "Food and Fellowship",
    commander: "Frodo, Adventurous Hobbit",
    altCommander: "Sam, Loyal Attendant",
    colors: ["W","B","G"],
    colorName: "Abzan",
    type: "alterado",
    typeLbl: "Precon Alterado",
    bracket: 3,
    precon: "Food and Fellowship — Tales of Middle-Earth (2023)",
    arquetipo: "Food Tokens / Lifegain / Combo",
    nota: 6.0,
    nota2v2: 7.0,
    role2v2: "Suporte / Lifegain",
    scores: { vel:5, con:6, int:7, combo:7, mana:6, sin:7 },
    pontosFortesGeral: [
      "COMBO: Sanguine Bond + Beacon of Immortality = vitória instantânea",
      "Cat-Oven (Cauldron Familiar + Witch's Oven) = recursão gratuita",
      "Alto lifegain dificulta vitória por combate dos oponentes",
      "Trail of Crumbs + Enduring Innocence = draw constante via Food",
      "Interação forte com Swords to Plowshares, Farewell, Toxic Deluge"
    ],
    pontosFracos: [
      "Sem motor de aceleração forte nos primeiros turnos",
      "Combo pode ser interrompido com respostas baratas",
      "Dependente do tema Food para gerar valor"
    ],
    why2v2: "Alto lifegain mantém a dupla viva muito mais tempo. Gyome cria Food para todos. Swords to Plowshares e Farewell removem ameaças antes de atingirem o parceiro. Sanguine Bond + Beacon pode vencer de surpresa beneficiando toda a dupla.",
    wincons: [
      "Sanguine Bond + Beacon of Immortality (vitória instantânea)",
      "Cauldron Familiar + Witch's Oven = recursão + drain infinito",
      "Lifegain massivo + Mirkwood Bats = drain passivo",
      "Pressão de board com criaturas do Shire"
    ],
    cardsAdicionados: [
      "Sanguine Bond","Beacon of Immortality",
      "Cauldron Familiar","Witch's Oven",
      "Chatterfang, Squirrel General","Jaheira, Friend of the Forest",
      "Land Tax","Toxic Deluge","Farewell","Meekstone",
      "Horizon Canopy","Mirkwood Bats","Enduring Tenacity",
      "Enduring Innocence","Dusk/Dawn"
    ],
    cardsRemovidos: [],
    analise: "A adição mais notável é o combo Sanguine Bond + Beacon of Immortality — vitória instantânea ao dobrar a vida. O Cat-Oven adiciona recursão gratuita e tokens persistentes. Com Land Tax e Horizon Canopy, o deck raramente fica sem recursos.",
    moxfield: "https://moxfield.com/decks/HPmLg7FQKEeWDo_p9QPQ6g"
  },
  {
    id: "hyrules-arsenal",
    name: "Hyrule's Arsenal",
    commander: "Galea, Kindler of Hope",
    altCommander: null,
    colors: ["W","U","G"],
    colorName: "Bant",
    type: "proxy",
    typeLbl: "Proxy",
    bracket: 3,
    precon: "Deck Proxy (não é precon)",
    arquetipo: "Voltron — Auras + Equipment",
    nota: 8.0,
    nota2v2: 6.0,
    role2v2: "Finalizador Rápido (egoísta)",
    scores: { vel:8, con:8, int:7, combo:8, mana:9, sin:8 },
    pontosFortesGeral: [
      "O mais poderoso dos 12 decks em poder individual",
      "Fetchlands + Mox Opal = desenvolvimento de mana de cEDH",
      "Galea joga Auras do topo do deck sem custo adicional",
      "Invisible Stalker + All That Glitters = commander damage em 2 combates",
      "Múltiplos tutores de artefato: Fabricate, Trophy Mage, Stonehewer Giant",
      "Sram + Puresteel Paladin = draw massivo com cada equipamento"
    ],
    pontosFracos: [
      "100% focado em Voltron — egoísta em multiplayer",
      "Perde muito para respostas de evasão (Humility, Oubliette)",
      "Dependente do comandante em jogo"
    ],
    why2v2: "Muito poderoso individualmente, mas 100% focado em Voltron — não contribui diretamente para o parceiro. Counterspell e Heroic Intervention podem proteger emergências. Fecha jogos rápido, mas depende do parceiro controlar a mesa.",
    wincons: [
      "Invisible Stalker + All That Glitters = indetectável + enorme",
      "Colossus Hammer + Sigarda's Aid = equip grátis + 10/10",
      "Commander damage em 2 combates com Kaldra Compleat",
      "Nettlecyst + múltiplos artefatos = criatura gigante"
    ],
    cardsAdicionados: [
      "Mox Opal","Flooded Strand","Misty Rainforest","Windswept Heath",
      "Scroll Rack","Stoneforge Mystic","Urza's Saga","Boseiju, Who Endures",
      "Stonehewer Giant","Hall of Heliod's Generosity","Brainstorm"
    ],
    cardsRemovidos: [],
    proxyEvidence: "Nome do arquivo contém 'proxy'. Cartas de R$3.000–5.000+ no total: Mox Opal (~R$800), 3 Fetchlands (~R$600 cada), Urza's Saga (~R$300), Scroll Rack (~R$200), Stoneforge Mystic (~R$180).",
    analise: "O mais poderoso dos 12 decks. Base de mana de cEDH com Fetchlands e Mox Opal. Tutores eficientes e win-cons rápidas. Em um pod casual, esse deck desequilibra o nível de poder — mas dentro da coleção é o teto de referência.",
    moxfield: "https://moxfield.com/decks/XxD9bYDTO0qcCkTJnvrDOQ"
  },
  {
    id: "bumbum-guloso",
    name: "Bumbum Guloso",
    commander: "Arcades, the Strategist",
    altCommander: null,
    colors: ["W","U","G"],
    colorName: "Bant",
    type: "custom",
    typeLbl: "Customizado",
    bracket: 3,
    precon: "Deck Customizado",
    arquetipo: "Walls / Defenders",
    nota: 6.5,
    nota2v2: 6.5,
    role2v2: "Controlador / Defesa",
    scores: { vel:6, con:7, int:6, combo:6, mana:6, sin:9 },
    pontosFortesGeral: [
      "Arcades dá draw para CADA Defender que entra — engine automática",
      "Altíssima coesão — CADA carta serve ao plano principal",
      "Tower Defense com muitas Walls pode fechar em um único turno",
      "Walls baratas com toughness alto = bloqueio impossível de superar",
      "Counterspell protege tanto o próprio deck quanto o parceiro"
    ],
    pontosFracos: [
      "Completamente dependente de Arcades estar em jogo",
      "Fraco contra decks que não atacam (combo puro)",
      "Poucas formas de vencer além do combate"
    ],
    why2v2: "Walls bloqueiam qualquer criatura. Counterspell protege o parceiro. Dusk/Dawn e Fell the Mighty limpam criaturas grandes sem derrubar as Walls. O deck não precisa atacar para ser útil — segura a mesa enquanto o parceiro pressiona com criaturas.",
    wincons: [
      "Tower Defense + Arcades = todas as Walls atacam com toughness",
      "High Alert / Assault Formation como alternativas permanentes",
      "Arcades + múltiplas Walls = dano massivo de uma vez",
      "Wingmantle Chaplain criando tokens de Pássaro"
    ],
    cardsAdicionados: [],
    cardsRemovidos: [],
    analise: "Deck customizado construído do zero em torno de Arcades. Nenhum precon oficial usa esse arquétipo. A coesão é extraordinária — praticamente toda carta no deck cria, suporta ou maximiza Walls. Unico entre os 12 decks por ser 100% temático sem base em precon.",
    moxfield: "https://moxfield.com/decks/6ODWG_0Pt0mf18FTX3HufA"
  },
  {
    id: "blast-from-the-past",
    name: "Blast from the Past",
    commander: "The Fourth Doctor",
    altCommander: "Sarah Jane Smith",
    colors: ["W","U","G"],
    colorName: "Bant",
    type: "alterado",
    typeLbl: "Precon Alterado",
    bracket: 3,
    precon: "Blast from the Past — Doctor Who Commander (2023)",
    arquetipo: "Artefatos Históricos / Legendários",
    nota: 6.0,
    nota2v2: 5.5,
    role2v2: "Suporte / Artefatos",
    scores: { vel:5, con:6, int:6, combo:6, mana:6, sin:6 },
    pontosFortesGeral: [
      "Urza, Lord High Artificer gera mana massiva com artefatos",
      "Panharmonicon dobra todos os ETBs do deck",
      "Academy Manufactor triplicando tokens Clue/Food/Treasure",
      "Mistura Doctor Who + Senhor dos Anéis cria charme temático",
      "Reki dá draw por cada permanente histórico jogado"
    ],
    pontosFracos: [
      "Identidade temática dividida: Doctor Who + LotR + Artefatos genéricos",
      "Deck de mid-game sem aceleração forte no early",
      "Sinergia incompleta — nem toda carta serve ao mesmo plano"
    ],
    why2v2: "Urza gera mana massiva que beneficia o parceiro indiretamente. Panharmonicon dobra ETBs. Counterspell e Swords to Plowshares protegem a dupla. A identidade dispersa reduz o impacto direto em 2v2.",
    wincons: [
      "Urza + artefatos = mana para magias gigantes",
      "Cyberdrive Awakener = exército de artefatos criaturas",
      "Academy Manufactor + qualquer token = recursos ilimitados",
      "Rise and Shine + artefatos = criaturas 0/0 com counters"
    ],
    cardsAdicionados: [
      "Chulane, Teller of Tales","Urza, Lord High Artificer",
      "Panharmonicon","Displaced Dinosaurs","Dance of the Manse",
      "Academy Manufactor","Cyberdrive Awakener","Rise and Shine",
      "Lonis, Cryptozoologist","Inspiring Statuary","Helm of the Host",
      "Wilderness Reclamation","Vedalken Orrery",
      "Merry, Warden of Isengard","Peregrin Took","Samwise Gamgee","Rosie Cotton"
    ],
    cardsRemovidos: [
      "The Thirteenth Doctor","Osgood, Operation Double",
      "Cultivate","Farseek","Sword of Forge and Frontier"
    ],
    analise: "O deck ganhou poder com Urza e Panharmonicon, mas perdeu coesão temática ao misturar Doctor Who com Senhor dos Anéis e artefatos genéricos. Funcionalmente mais capaz que o precon original, mas com identidade dispersa.",
    moxfield: "https://moxfield.com/decks/sHW9MtbT_Uem47s64AZkKw"
  },
  {
    id: "timey-wimey",
    name: "Timey-Wimey",
    commander: "The Tenth Doctor",
    altCommander: "Rose Tyler",
    colors: ["W","U","R"],
    colorName: "Jeskai",
    type: "intacto",
    typeLbl: "Precon Intacto",
    bracket: 2,
    precon: "Timey-Wimey — Doctor Who Commander (2023)",
    arquetipo: "Suspend / Tokens de Tempo",
    nota: 5.0,
    nota2v2: 3.5,
    role2v2: "Solo — Pior para 2v2 ❌",
    scores: { vel:4, con:4, int:5, combo:3, mana:4, sin:6 },
    pontosFortesGeral: [
      "Fractured Identity: uma das melhores remoções do Commander",
      "As Foretold pode jogar cartas de suspend de graça",
      "The Moment: histórico devastador de jogar",
      "TARDIS e terrenos temáticos do Doctor Who são únicos",
      "Muitas cartas exclusivas com efeitos interessantes"
    ],
    pontosFracos: [
      "Suspend é o arquétipo mais lento e previsível do Commander",
      "Estratégia 100% individual — não contribui para aliados",
      "Base de mana inconsistente para 3 cores",
      "Sem combos ou win-cons rápidas",
      "Fraco contra qualquer deck que pressione nos primeiros turnos"
    ],
    why2v2: "Suspend é o pior arquétipo para Commander em Dupla. Enquanto espera cartas suspensas resolverem, você não protege o parceiro, não pressiona os oponentes e não contribui para o board. Dois oponentes criam pressão rápida demais para um deck que 'espera'.",
    wincons: [
      "Fractured Identity em ameaça poderosa dos oponentes",
      "As Foretold + cartas com suspend = magias grátis",
      "The Moment — histórico devastador",
      "Acumulação de tokens de tempo ao longo da partida"
    ],
    cardsAdicionados: [],
    cardsRemovidos: [],
    analise: "Deck intacto confirmado. Fractured Identity e As Foretold são pontos fortes genuínos. O problema é estrutural: Suspend requer múltiplos turnos de espera em um formato onde cada turno conta. O melhor deck da coleção para partidas temáticas e narrativas.",
    moxfield: "https://moxfield.com/decks/FYiFj26whk2iQterJwqYcQ"
  },
  {
    id: "silverquill-influence",
    name: "Silverquill Influence",
    commander: "Killian, Decisive Mentor",
    altCommander: "Breena, the Demagogue",
    colors: ["W","B"],
    colorName: "Orzhov",
    type: "alterado",
    typeLbl: "Precon Alterado",
    bracket: 3,
    precon: "Silverquill Statement (2021) / Silverquill Influence (2026)",
    arquetipo: "Auras / Encantamentos com custo reduzido",
    nota: 5.5,
    nota2v2: 5.0,
    role2v2: "Suporte / Encantamentos",
    scores: { vel:5, con:6, int:6, combo:5, mana:5, sin:7 },
    pontosFortesGeral: [
      "Killian desconta Auras — engine de custo reduzido",
      "Kor Spiritdancer cresce com cada Aura e gera draw",
      "Sram, Senior Edificer dá draw massivo com Auras/Equipamentos",
      "Winds of Rath: boardwipe assimétrico que poupa criaturas encantadas",
      "Eriette of the Charmed Apple: win-con alternativa via controle"
    ],
    pontosFracos: [
      "Winds of Rath derruba o board do parceiro se ele não tiver Auras",
      "Auras são lentas de acumular",
      "Sem tutor de Aura específico",
      "Sem combo rápido"
    ],
    why2v2: "Winds of Rath derruba criaturas não encantadas — mas isso inclui as do parceiro se ele não tiver Auras. Deck focado em crescer as próprias criaturas. Eriette cria win-con de controle interessante mas não contribui ativamente para o parceiro.",
    wincons: [
      "Eriette of the Charmed Apple — controle de permanentes",
      "Eldrazi Conscription em criatura com evasão = game over",
      "Winds of Rath assimétrico limpando apenas inimigos",
      "All That Glitters em criatura com múltiplas Auras"
    ],
    cardsAdicionados: [
      "Sram, Senior Edificer","Kor Spiritdancer",
      "Eriette of the Charmed Apple","Land Tax",
      "Eldrazi Conscription","Gift of Immortality",
      "Redemption Arc","Intermediate Chirography",
      "Forum Filibuster","Forum of Amity"
    ],
    cardsRemovidos: [],
    analise: "Sram e Kor Spiritdancer são melhorias óbvias e muito bem-vindas. Eriette cria um plano B de controle criativo. Incerteza parcial se é o precon Silverquill Statement 2021 atualizado ou o novo Silverquill Influence 2026.",
    moxfield: "https://moxfield.com/decks/FoJamjpn_0Oh15iHOPKEjg"
  },
  {
    id: "necron-dynasties",
    name: "Necron Dynasties",
    commander: "Szarekh, the Silent King",
    altCommander: "Imotekh the Stormlord",
    colors: ["B"],
    colorName: "Mono Preto",
    type: "proxy",
    typeLbl: "Proxy",
    bracket: 3,
    precon: "Necron Dynasties — Warhammer 40,000 (2022) Proxy",
    arquetipo: "Artefatos / Reanimator / Self-Mill",
    nota: 5.5,
    nota2v2: 4.5,
    role2v2: "Agressor Lento",
    scores: { vel:4, con:5, int:6, combo:5, mana:4, sin:7 },
    pontosFortesGeral: [
      "Tema Necron completamente coeso e temático",
      "Biotransference transforma criaturas em artefatos ininterruptamente",
      "Living Death com cemitério cheio é devastador",
      "Ghost Ark + Unearth criam recursão constante",
      "Cranial Plating em Szarekh voador = commander damage surpresa"
    ],
    pontosFracos: [
      "Mono-color limita opções de resposta",
      "Base de mana muito fraca (30 Swamps básicos)",
      "Muito lento — maioria das criaturas custa 4+ manas",
      "Sem tutores eficientes",
      "Sem hate de outros cemitérios"
    ],
    why2v2: "Mono-color limita a flexibilidade de respostas. Lento e passivo nos primeiros turnos, deixando o parceiro vulnerável. Sem cartas que beneficiem diretamente o aliado. Living Death é poderoso mas chega tarde demais em duplas com ritmo alto.",
    wincons: [
      "Living Death com cemitério repleto de Necrons",
      "Cranial Plating em Szarekh (voa) = commander damage surpresa",
      "Ghost Ark + Unearth = recursão constante de criaturas",
      "Biotransference + Mystic Forge = jogar o deck todo"
    ],
    cardsAdicionados: [],
    cardsRemovidos: [],
    proxyEvidence: "Nome do arquivo contém 'proxy'. Lista apresenta 30 Swamps em 3 blocos de '10 Swamp' — anomalia típica de impressão em lotes. Lista coincide ~95% com o precon oficial.",
    analise: "Proxy do precon oficial Necron Dynasties. A lista é praticamente idêntica ao precon original — o proxy serve para jogar sem danificar as cartas físicas ou duplicar o deck. Boa sinergia temática mas limitado pela mono-color e falta de upgrades.",
    moxfield: "https://moxfield.com/decks/CgGkeNjql0uV4mIIOhG8DA"
  }
];

const DUPLAS = [
  {
    rank: 1, stars: 5,
    title: "A Dupla Dominante",
    emoji: "⚔️",
    decksIds: ["world-shaper","riveteers-rampage"],
    desc: "Ambos em Jund — compartilham terrenos e toda a base de cores. World Shaper faz ramp e controla com Omnath enquanto Riveteers pressiona com criaturas gigantes. Dois eixos de ataque (terrenos + criaturas) impossíveis de defender ao mesmo tempo.",
    roleA: "Controlador / Ramp",
    roleB: "Finalizador",
    sinergia: "Alta",
    velocidade: "Média-Alta",
    nota: 9.0,
    dica: "Abrir com World Shaper fazendo ramp nos primeiros turnos enquanto Riveteers usa Henzie com Blitz para pressão imediata."
  },
  {
    rank: 2, stars: 4,
    title: "A Mais Divertida",
    emoji: "🎭",
    decksIds: ["cabaretti-cacophony","bumbum-guloso"],
    desc: "Kitt Kanto goa criaturas dos oponentes — eles ficam sem conseguir atacar. Arcades bloqueia tudo com Walls de toughness alto enquanto os tokens do Cabaretti atacam livres. Os oponentes ficam completamente travados entre Goad e bloqueio perfeito.",
    roleA: "Agressor / Político",
    roleB: "Controlador / Defesa",
    sinergia: "Alta",
    velocidade: "Média",
    nota: 7.5,
    dica: "Comunicação é fundamental: Kitt Kanto goa as ameaças certas enquanto Arcades mantém Walls que bloqueiam as criaturas goadas que chegam."
  },
  {
    rank: 3, stars: 4,
    title: "A Dupla Equilibrada",
    emoji: "⚖️",
    decksIds: ["riveteers-rampage","hyrules-arsenal"],
    desc: "Dois finalizadores poderosos atacando por eixos diferentes. Riveteers por terra com criaturas imensas. Hyrule's Arsenal por voo com Galea equipada. Os oponentes precisam dividir remoção entre terrestre e aéreo — e geralmente não têm o suficiente para ambos.",
    roleA: "Finalizador por terra",
    roleB: "Finalizador por voo",
    sinergia: "Média",
    velocidade: "Alta",
    nota: 7.0,
    dica: "Hyrule's Arsenal usa Counterspell e Heroic Intervention para proteger as criaturas de ambos. Riveteers finaliza quando o caminho estiver livre."
  },
  {
    rank: 4, stars: 3,
    title: "A Dupla Resistente",
    emoji: "🛡️",
    decksIds: ["food-and-fellowship","sultai-arisen"],
    desc: "Food mantém ambos vivos com lifegain alto — o parceiro raramente morre. Sultai acumula valor do cemitério no longo prazo e pode reanimar criaturas que Food sacrificou via Cat-Oven. Muito difíceis de eliminar definitivamente, mas lentos contra aggro.",
    roleA: "Suporte / Lifegain",
    roleB: "Controlador / Recursão",
    sinergia: "Média",
    velocidade: "Baixa",
    nota: 6.0,
    dica: "Food deve usar Sanguine Bond + Beacon como win-con de surpresa. Sultai mantém o cemitério cheio para Living Death recuperar os dois boards ao mesmo tempo."
  },
  {
    rank: 5, stars: 1,
    title: "A Dupla a Evitar",
    emoji: "❌",
    decksIds: ["timey-wimey","paradox-power"],
    desc: "Dois decks completamente solos que não se complementam. Timey-Wimey espera vários turnos por cartas suspensas. Paradox Power coloca contadores só no próprio board. Nenhum protege o parceiro nem pressiona com consistência. Derrota garantida contra qualquer dupla coordenada.",
    roleA: "Solo (suspend)",
    roleB: "Solo (counters)",
    sinergia: "Nenhuma",
    velocidade: "Baixa",
    nota: 2.0,
    dica: "Evite essa combinação. Se precisar usar um desses, combine-o com Cabaretti ou World Shaper para compensar."
  }
];

const BRACKETS_INFO = [
  {
    num: 1,
    name: "Exhibition",
    cor: "#888",
    desc: "Decks temáticos e narrativos. Sem tutores eficientes, sem ramp agressivo, sem combos. Vitória por combate simples. Ideal para apresentar o jogo.",
    decksNomes: []
  },
  {
    num: 2,
    name: "Core",
    cor: "#4caf82",
    desc: "Precons oficiais out of the box. Ramp moderado, tutores básicos, sem combos consistentes. Jogos casuais entre amigos.",
    decksNomes: ["Sultai Arisen","Cabaretti Cacophony","Timey-Wimey"]
  },
  {
    num: 3,
    name: "Upgraded",
    cor: "#d4a017",
    desc: "Tutores eficientes, combos de 2–3 peças, interação consistente. Precons bem alterados e proxies com upgrades. Nível competitivo casual.",
    decksNomes: ["World Shaper","Riveteers Rampage","Paradox Power","Food & Fellowship","Bumbum Guloso","Blast from the Past","Silverquill Influence","Hyrule's Arsenal","Necron Dynasties"]
  },
  {
    num: 4,
    name: "Optimized (cEDH)",
    cor: "#e05555",
    desc: "Tutores perfeitos, combos de 2 cartas acessíveis, muito hate. Máximo nível competitivo. Nenhum deck desta coleção está neste bracket.",
    decksNomes: []
  }
];

// helpers de acesso rápido
function getDeckById(id) { return DECKS.find(d => d.id === id); }
function getDupla(rank) { return DUPLAS.find(d => d.rank === rank); }
function getDecksSortedByNota() { return [...DECKS].sort((a,b) => b.nota - a.nota); }
function getDecksSortedByNota2v2() { return [...DECKS].sort((a,b) => b.nota2v2 - a.nota2v2); }
