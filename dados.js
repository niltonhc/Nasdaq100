let dados = [
    {
        titulo: "Adobe",
        descricao: "A Adobe é uma empresa americana de software conhecida por seus produtos de criação digital como Photoshop, Illustrator e Acrobat, além de oferecer serviços na nuvem para profissionais criativos.",
        link: "https://pt.wikipedia.org/wiki/Adobe_Inc.",
        tags: "software design criatividade"
    },
    {
        titulo: "ADP",
        descricao: "A ADP (Automatic Data Processing) é uma empresa global de gestão de folha de pagamento e recursos humanos, oferecendo soluções para processamento de salários e benefícios.",
        link: "https://pt.wikipedia.org/wiki/ADP",
        tags: "RH folha de pagamento serviços"
    },
    {
        titulo: "Airbnb",
        descricao: "Airbnb é uma plataforma online que conecta anfitriões que oferecem acomodações temporárias com viajantes em todo o mundo. É uma das maiores empresas de hospedagem alternativa.",
        link: "https://pt.wikipedia.org/wiki/Airbnb",
        tags: "hospedagem viagens aluguel"
    },
    {
        titulo: "Alphabet A",
        descricao: "Alphabet Inc. é a holding que controla o Google e suas subsidiárias. As ações de classe A (GOOGL) conferem aos investidores poder de voto na empresa.",
        link: "https://pt.wikipedia.org/wiki/Alphabet_Inc.",
        tags: "tecnologia internet Google"
    },
    {
        titulo: "Alphabet C",
        descricao: "Alphabet Inc. também possui ações de classe C (GOOG), que diferem das ações de classe A, pois não conferem poder de voto aos acionistas, mas são negociadas livremente no mercado.",
        link: "https://pt.wikipedia.org/wiki/Alphabet_Inc.",
        tags: "tecnologia ações Google"
    },
    {
        titulo: "Amazon.com",
        descricao: "A Amazon é uma gigante do comércio eletrônico e serviços de tecnologia em nuvem. A empresa começou como uma livraria online, mas hoje oferece uma vasta gama de produtos e serviços digitais.",
        link: "https://pt.wikipedia.org/wiki/Amazon.com",
        tags: "e-commerce nuvem tecnologia"
    },
    {
        titulo: "AMD",
        descricao: "A AMD (Advanced Micro Devices) é uma empresa americana que desenvolve processadores e placas de vídeo, competindo diretamente com gigantes como Intel e NVIDIA.",
        link: "https://pt.wikipedia.org/wiki/Advanced_Micro_Devices",
        tags: "processadores hardware tecnologia"
    },
    {
        titulo: "American Electric Power",
        descricao: "A American Electric Power (AEP) é uma das maiores empresas de fornecimento de energia elétrica nos Estados Unidos, operando em vários estados e oferecendo serviços a milhões de clientes.",
        link: "https://pt.wikipedia.org/wiki/American_Electric_Power",
        tags: "energia eletricidade infraestrutura"
    },
    {
        titulo: "Amgen",
        descricao: "A Amgen é uma das maiores empresas de biotecnologia do mundo, focada no desenvolvimento de medicamentos inovadores para tratar doenças graves como câncer e doenças autoimunes.",
        link: "https://pt.wikipedia.org/wiki/Amgen",
        tags: "biotecnologia saúde medicamentos"
    },
    {
        titulo: "Analog Devices",
        descricao: "A Analog Devices é uma empresa líder em semicondutores, especializada no desenvolvimento de circuitos analógicos e digitais, usados em diversas indústrias, incluindo telecomunicações e automotiva.",
        link: "https://pt.wikipedia.org/wiki/Analog_Devices",
        tags: "semicondutores eletrônica tecnologia"
    },
    {
        titulo: "ANSYS",
        descricao: "ANSYS é uma empresa que desenvolve software de simulação de engenharia usados para prever como os produtos funcionarão no mundo real.",
        link: "https://pt.wikipedia.org/wiki/ANSYS",
        tags: "software simulação engenharia"
    },
    {
        titulo: "Apple",
        descricao: "Apple Inc. é uma empresa multinacional americana que desenvolve e vende eletrônicos de consumo, software e serviços online, famosa por produtos como iPhone e MacBook.",
        link: "https://pt.wikipedia.org/wiki/Apple_Inc.",
        tags: "tecnologia eletrônicos software"
    },
    {
        titulo: "Applied Materials",
        descricao: "Applied Materials é uma empresa que fornece equipamentos, serviços e software para a fabricação de semicondutores e telas para eletrônicos.",
        link: "https://pt.wikipedia.org/wiki/Applied_Materials",
        tags: "semicondutores eletrônicos tecnologia"
    },
    {
        titulo: "Arm",
        descricao: "Arm é uma empresa britânica que projeta chips e desenvolve arquiteturas de processadores amplamente usados em dispositivos móveis.",
        link: "https://pt.wikipedia.org/wiki/Arm_Limited",
        tags: "chips processadores tecnologia"
    },
    {
        titulo: "ASML ADR",
        descricao: "ASML é uma empresa holandesa que desenvolve e fabrica equipamentos de litografia usados na produção de semicondutores.",
        link: "https://pt.wikipedia.org/wiki/ASML_Holding",
        tags: "semicondutores litografia tecnologia"
    },
    {
        titulo: "AstraZeneca ADR",
        descricao: "AstraZeneca é uma empresa biofarmacêutica global que desenvolve medicamentos para tratar doenças como câncer e doenças cardiovasculares.",
        link: "https://pt.wikipedia.org/wiki/AstraZeneca",
        tags: "biofarmacêutica saúde medicamentos"
    },
    {
        titulo: "Atlassian Corp Plc",
        descricao: "Atlassian é uma empresa de software australiana que desenvolve ferramentas de colaboração e produtividade, como Jira e Trello.",
        link: "https://pt.wikipedia.org/wiki/Atlassian",
        tags: "software colaboração produtividade"
    },
    {
        titulo: "Autodesk",
        descricao: "Autodesk é uma empresa americana que desenvolve software de design em 3D, engenharia e entretenimento, conhecida por produtos como AutoCAD.",
        link: "https://pt.wikipedia.org/wiki/Autodesk",
        tags: "software design engenharia"
    },
    {
        titulo: "Baker Hughes",
        descricao: "Baker Hughes é uma empresa de serviços e equipamentos para a indústria de energia, especializada em petróleo e gás.",
        link: "https://pt.wikipedia.org/wiki/Baker_Hughes",
        tags: "energia petróleo gás"
    },
    {
        titulo: "Biogen",
        descricao: "Biogen é uma empresa de biotecnologia focada no desenvolvimento de tratamentos para doenças neurodegenerativas como Alzheimer.",
        link: "https://pt.wikipedia.org/wiki/Biogen",
        tags: "biotecnologia saúde medicamentos"
    },
    {
        titulo: "Booking",
        descricao: "Booking.com é uma plataforma online de reservas de acomodações e serviços de viagem, uma das maiores do mundo.",
        link: "https://pt.wikipedia.org/wiki/Booking.com",
        tags: "viagens hospedagem reservas"
    },
    {
        titulo: "Broadcom",
        descricao: "Broadcom é uma empresa de tecnologia americana que fabrica semicondutores e produtos de software para várias indústrias.",
        link: "https://pt.wikipedia.org/wiki/Broadcom_Inc.",
        tags: "semicondutores software tecnologia"
    },
    {
        titulo: "Cadence Design",
        descricao: "Cadence Design Systems é uma empresa que desenvolve software de automação eletrônica usado no design de circuitos integrados.",
        link: "https://pt.wikipedia.org/wiki/Cadence_Design_Systems",
        tags: "software eletrônica semicondutores"
    },
    {
        titulo: "CDW Corp",
        descricao: "CDW é uma empresa americana que oferece produtos e serviços de tecnologia, incluindo hardware, software e soluções de TI.",
        link: "https://pt.wikipedia.org/wiki/CDW",
        tags: "tecnologia TI hardware"
    },
    {
        titulo: "Charter Communications",
        descricao: "Charter Communications é uma empresa americana de telecomunicações que oferece serviços de internet, TV a cabo e telefonia.",
        link: "https://pt.wikipedia.org/wiki/Charter_Communications",
        tags: "telecomunicações internet TV"
    },
    {
        titulo: "Cintas",
        descricao: "Cintas é uma empresa americana que fornece serviços e produtos como uniformes corporativos e soluções de segurança no trabalho.",
        link: "https://pt.wikipedia.org/wiki/Cintas_Corporation",
        tags: "uniformes segurança corporativo"
    },
    {
        titulo: "Cisco",
        descricao: "Cisco Systems é uma empresa global de tecnologia especializada em soluções de rede e comunicação, como roteadores e switches.",
        link: "https://pt.wikipedia.org/wiki/Cisco_Systems",
        tags: "redes comunicação TI"
    },
    {
        titulo: "Coca-Cola European",
        descricao: "Coca-Cola European Partners é a maior engarrafadora de Coca-Cola na Europa, responsável pela distribuição da marca.",
        link: "https://pt.wikipedia.org/wiki/Coca-Cola",
        tags: "bebidas distribuição alimentos"
    },
    {
        titulo: "Cognizant A",
        descricao: "Cognizant é uma empresa multinacional de serviços de TI, focada em consultoria e terceirização de processos de negócios.",
        link: "https://pt.wikipedia.org/wiki/Cognizant",
        tags: "TI consultoria terceirização"
    },
    {
        titulo: "Comcast",
        descricao: "Comcast é uma empresa de telecomunicações americana, maior provedora de TV a cabo e internet de banda larga nos EUA.",
        link: "https://pt.wikipedia.org/wiki/Comcast",
        tags: "telecomunicações TV internet"
    },
    {
        titulo: "Constellation Energy",
        descricao: "Constellation Energy é uma empresa americana de geração e fornecimento de energia, incluindo energia nuclear e renovável.",
        link: "https://pt.wikipedia.org/wiki/Constellation_Energy",
        tags: "energia eletricidade renovável"
    },
    {
        titulo: "Copart",
        descricao: "Copart é uma empresa americana que fornece uma plataforma online para leilões de veículos, incluindo carros danificados e recuperados.",
        link: "https://pt.wikipedia.org/wiki/Copart",
        tags: "leilões veículos carros"
    },
    {
        titulo: "CoStar",
        descricao: "CoStar Group é uma empresa de dados e análises de imóveis comerciais, oferecendo informações detalhadas para o setor imobiliário.",
        link: "https://pt.wikipedia.org/wiki/CoStar_Group",
        tags: "imóveis dados análise"
    },
    {
        titulo: "Costco",
        descricao: "Costco é uma das maiores redes de varejo do mundo, conhecida por seus clubes de compras que vendem produtos em grandes quantidades.",
        link: "https://pt.wikipedia.org/wiki/Costco",
        tags: "varejo atacado compras"
    },
    {
        titulo: "CrowdStrike Holdings",
        descricao: "CrowdStrike é uma empresa de cibersegurança que fornece soluções de proteção para endpoints e monitoramento de ameaças.",
        link: "https://pt.wikipedia.org/wiki/CrowdStrike",
        tags: "cibersegurança TI proteção"
    },
    {
        titulo: "CSX",
        descricao: "CSX é uma das maiores empresas ferroviárias dos EUA, especializada no transporte de carga e logística.",
        link: "https://pt.wikipedia.org/wiki/CSX_Transportation",
        tags: "ferrovias transporte logística"
    },
    {
        titulo: "Datadog",
        descricao: "Datadog é uma plataforma de monitoramento de TI que oferece insights sobre desempenho e segurança para ambientes de nuvem.",
        link: "https://pt.wikipedia.org/wiki/Datadog",
        tags: "TI monitoramento nuvem"
    },
    {
        titulo: "DexCom",
        descricao: "DexCom é uma empresa de dispositivos médicos que desenvolve sistemas de monitoramento contínuo de glicose para diabetes.",
        link: "https://pt.wikipedia.org/wiki/DexCom",
        tags: "saúde dispositivos diabetes"
    },
    {
        titulo: "Diamondback",
        descricao: "Diamondback Energy é uma empresa de exploração e produção de petróleo e gás nos EUA, focada em operações no Texas.",
        link: "https://pt.wikipedia.org/wiki/Diamondback_Energy",
        tags: "energia petróleo gás"
    },
    {
        titulo: "Dollar Tree",
        descricao: "Dollar Tree é uma cadeia de lojas de desconto nos EUA, conhecida por vender produtos a preços muito baixos.",
        link: "https://pt.wikipedia.org/wiki/Dollar_Tree",
        tags: "varejo descontos compras"
    },
    {
        titulo: "DoorDash",
        descricao: "DoorDash é uma empresa de entrega de alimentos, conectando restaurantes com consumidores através de sua plataforma online.",
        link: "https://pt.wikipedia.org/wiki/DoorDash",
        tags: "entregas alimentos tecnologia"
    },
    {
        titulo: "Electronic Arts",
        descricao: "Electronic Arts é uma das maiores desenvolvedoras e publicadoras de videogames do mundo, conhecida por franquias como FIFA e The Sims.",
        link: "https://pt.wikipedia.org/wiki/Electronic_Arts",
        tags: "jogos videogames entretenimento"
    },
    {
        titulo: "Exelon",
        descricao: "Exelon é uma empresa de energia que opera grandes usinas nucleares e fornece energia elétrica para milhões de consumidores nos EUA.",
        link: "https://pt.wikipedia.org/wiki/Exelon",
        tags: "energia eletricidade nuclear"
    },
    {
        titulo: "Fastenal",
        descricao: "Fastenal é uma empresa americana que fornece produtos de suprimentos industriais, incluindo ferramentas, fixadores e equipamentos de segurança.",
        link: "https://pt.wikipedia.org/wiki/Fastenal",
        tags: "indústria ferramentas suprimentos"
    },
    {
        titulo: "Fortinet",
        descricao: "Fortinet é uma empresa de cibersegurança que desenvolve soluções de segurança de rede, incluindo firewalls e software de proteção.",
        link: "https://pt.wikipedia.org/wiki/Fortinet",
        tags: "cibersegurança rede TI"
    },
    {
        titulo: "GE HealthCare",
        descricao: "GE HealthCare é uma divisão da General Electric que fabrica equipamentos médicos e oferece soluções de diagnóstico por imagem e cuidados com a saúde.",
        link: "https://pt.wikipedia.org/wiki/GE_Healthcare",
        tags: "saúde equipamentos médicos diagnóstico"
    },
    {
        titulo: "Gilead",
        descricao: "Gilead Sciences é uma empresa biofarmacêutica focada no desenvolvimento de medicamentos para tratar HIV, hepatite e outras doenças graves.",
        link: "https://pt.wikipedia.org/wiki/Gilead_Sciences",
        tags: "biofarmacêutica saúde medicamentos"
    },
    {
        titulo: "GlobalFoundries",
        descricao: "GlobalFoundries é uma das maiores fabricantes de semicondutores do mundo, produzindo chips para uma ampla gama de indústrias.",
        link: "https://pt.wikipedia.org/wiki/GlobalFoundries",
        tags: "semicondutores chips tecnologia"
    },
    {
        titulo: "Honeywell",
        descricao: "Honeywell é uma empresa americana que desenvolve tecnologia para diversas indústrias, incluindo aeroespacial, automação e construção.",
        link: "https://pt.wikipedia.org/wiki/Honeywell",
        tags: "tecnologia aeroespacial automação"
    },
    {
        titulo: "IDEXX Labs",
        descricao: "IDEXX Laboratories é uma empresa que fornece produtos de diagnóstico veterinário, equipamentos e software para cuidados com animais.",
        link: "https://pt.wikipedia.org/wiki/IDEXX_Laboratories",
        tags: "veterinário diagnóstico saúde animal"
    },
    {
        titulo: "Illumina",
        descricao: "Illumina é uma empresa americana de biotecnologia que desenvolve e comercializa produtos e serviços de sequenciamento de DNA.",
        link: "https://pt.wikipedia.org/wiki/Illumina",
        tags: "biotecnologia DNA saúde"
    },
    {
        titulo: "Intel",
        descricao: "Intel é uma das maiores fabricantes de semicondutores do mundo, conhecida por seus processadores usados em computadores e dispositivos móveis.",
        link: "https://pt.wikipedia.org/wiki/Intel",
        tags: "semicondutores processadores tecnologia"
    },
    {
        titulo: "Intuit",
        descricao: "Intuit é uma empresa de software americana que desenvolve soluções para gestão financeira e tributária, como o TurboTax e o QuickBooks.",
        link: "https://pt.wikipedia.org/wiki/Intuit",
        tags: "software finanças tributação"
    },
    {
        titulo: "Intuitive Surgical",
        descricao: "Intuitive Surgical é uma empresa que desenvolve sistemas robóticos para cirurgias minimamente invasivas, conhecida por seu sistema Da Vinci.",
        link: "https://pt.wikipedia.org/wiki/Intuitive_Surgical",
        tags: "saúde cirurgia robótica"
    },
    {
        titulo: "Keurig Dr Pepper",
        descricao: "Keurig Dr Pepper é uma empresa de bebidas americana, produtora de marcas conhecidas de refrigerantes e sistemas de café em cápsulas.",
        link: "https://pt.wikipedia.org/wiki/Keurig_Dr_Pepper",
        tags: "bebidas refrigerantes café"
    },
    {
        titulo: "KLA Corp",
        descricao: "KLA Corporation é uma empresa que fornece equipamentos de controle e medição para a fabricação de semicondutores.",
        link: "https://pt.wikipedia.org/wiki/KLA_Corporation",
        tags: "semicondutores controle tecnologia"
    },
    {
        titulo: "Kraft Heinz",
        descricao: "Kraft Heinz é uma empresa americana de alimentos, conhecida por suas marcas populares de produtos alimentícios e bebidas.",
        link: "https://pt.wikipedia.org/wiki/Kraft_Heinz",
        tags: "alimentos bebidas marcas"
    },
    {
        titulo: "Lam Research",
        descricao: "Lam Research é uma empresa americana que fabrica equipamentos de processamento para a produção de semicondutores.",
        link: "https://pt.wikipedia.org/wiki/Lam_Research",
        tags: "semicondutores tecnologia fabricação"
    },
    {
        titulo: "Linde PLC",
        descricao: "Linde PLC é uma empresa multinacional que fornece gases industriais e engenharia de processos para várias indústrias.",
        link: "https://pt.wikipedia.org/wiki/Linde_plc",
        tags: "gases engenharia indústrias"
    },
    {
        titulo: "Lululemon Athletica",
        descricao: "Lululemon Athletica é uma empresa de vestuário especializada em roupas de ioga e fitness, famosa por sua linha de produtos premium.",
        link: "https://pt.wikipedia.org/wiki/Lululemon_Athletica",
        tags: "vestuário fitness ioga"
    },
    {
        titulo: "Marriott Int",
        descricao: "Marriott International é uma das maiores redes de hotéis do mundo, operando uma ampla variedade de marcas de hospitalidade.",
        link: "https://pt.wikipedia.org/wiki/Marriott_International",
        tags: "hotéis hospitalidade viagens"
    },
    {
        titulo: "Marvell",
        descricao: "Marvell Technology é uma empresa americana que desenvolve soluções de semicondutores para armazenamento, rede e processamento de dados.",
        link: "https://pt.wikipedia.org/wiki/Marvell_Technology",
        tags: "semicondutores tecnologia armazenamento"
    },
    {
        titulo: "MercadoLibre",
        descricao: "MercadoLibre é uma plataforma de comércio eletrônico e serviços financeiros que opera na América Latina.",
        link: "https://pt.wikipedia.org/wiki/Mercado_Libre",
        tags: "comércio eletrônico serviços financeiros"
    },
    {
        titulo: "Meta Platforms",
        descricao: "Meta Platforms, anteriormente Facebook, é uma das maiores empresas de redes sociais e tecnologia do mundo.",
        link: "https://pt.wikipedia.org/wiki/Meta_Platforms",
        tags: "redes sociais tecnologia comunicação"
    },
    {
        titulo: "Microchip",
        descricao: "Microchip Technology é uma empresa americana que fabrica microcontroladores, chips de memória e outros produtos eletrônicos.",
        link: "https://pt.wikipedia.org/wiki/Microchip_Technology",
        tags: "semicondutores eletrônica microcontroladores"
    },
    {
        titulo: "Micron",
        descricao: "Micron Technology é uma empresa americana que fabrica memória DRAM e armazenamento de dados em semicondutores.",
        link: "https://pt.wikipedia.org/wiki/Micron_Technology",
        tags: "memória semicondutores tecnologia"
    },
    {
        titulo: "Microsoft",
        descricao: "Microsoft é uma das maiores empresas de tecnologia do mundo, conhecida por seu sistema operacional Windows e a suíte de software Office.",
        link: "https://pt.wikipedia.org/wiki/Microsoft",
        tags: "tecnologia software nuvem"
    },
    {
        titulo: "Moderna",
        descricao: "Moderna é uma empresa biofarmacêutica americana que desenvolve vacinas e tratamentos baseados em mRNA, famosa pela vacina COVID-19.",
        link: "https://pt.wikipedia.org/wiki/Moderna",
        tags: "vacinas mRNA saúde"
    },
    {
        titulo: "Mondelez",
        descricao: "Mondelez International é uma empresa global de alimentos, dona de marcas como Oreo, Toblerone e Trident.",
        link: "https://pt.wikipedia.org/wiki/Mondelez_International",
        tags: "alimentos marcas lanches"
    },
    {
        titulo: "MongoDB",
        descricao: "MongoDB é uma empresa de tecnologia que desenvolve banco de dados NoSQL utilizado para aplicativos modernos de alta escalabilidade.",
        link: "https://pt.wikipedia.org/wiki/MongoDB",
        tags: "banco de dados NoSQL tecnologia"
    },
    {
        titulo: "Monster Beverage",
        descricao: "Monster Beverage é uma empresa americana que fabrica e distribui bebidas energéticas, conhecida por sua marca Monster Energy.",
        link: "https://pt.wikipedia.org/wiki/Monster_Beverage",
        tags: "bebidas energéticas marcas"
    },
    {
        titulo: "Netflix",
        descricao: "Netflix é uma plataforma de streaming de vídeo que oferece uma ampla variedade de conteúdo, incluindo séries e filmes originais.",
        link: "https://pt.wikipedia.org/wiki/Netflix",
        tags: "streaming vídeo entretenimento"
    },
    {
        titulo: "NVIDIA",
        descricao: "NVIDIA é uma empresa de tecnologia que fabrica GPUs e soluções de computação para inteligência artificial e processamento gráfico.",
        link: "https://pt.wikipedia.org/wiki/Nvidia",
        tags: "tecnologia GPU IA"
    },
    {
        titulo: "NXP",
        descricao: "NXP Semiconductors é uma empresa que fabrica semicondutores usados em dispositivos automotivos, IoT e segurança.",
        link: "https://pt.wikipedia.org/wiki/NXP_Semiconductors",
        tags: "semicondutores IoT automotivo"
    },
    {
        titulo: "O’Reilly Automotive",
        descricao: "O’Reilly Automotive é uma rede americana de lojas de autopeças, que oferece uma ampla gama de peças e acessórios para veículos.",
        link: "https://pt.wikipedia.org/wiki/O%27Reilly_Auto_Parts",
        tags: "autopeças veículos acessórios"
    },
    {
        titulo: "Old Dominion Freight Line",
        descricao: "Old Dominion Freight Line é uma das maiores empresas de transporte e logística dos EUA, especializada em frete de carga.",
        link: "https://pt.wikipedia.org/wiki/Old_Dominion_Freight_Line",
        tags: "logística transporte frete"
    },
    {
        titulo: "ON Semiconductor",
        descricao: "ON Semiconductor é uma empresa americana que fabrica semicondutores e soluções de energia para eletrônicos.",
        link: "https://pt.wikipedia.org/wiki/ON_Semiconductor",
        tags: "semicondutores energia eletrônicos"
    },
    {
        titulo: "PACCAR",
        descricao: "PACCAR é uma empresa americana que fabrica caminhões comerciais, incluindo as marcas Kenworth e Peterbilt.",
        link: "https://pt.wikipedia.org/wiki/PACCAR",
        tags: "caminhões automotivo transporte"
    },
    {
        titulo: "Palo Alto Networks",
        descricao: "Palo Alto Networks é uma empresa de cibersegurança que oferece soluções de firewall e proteção de rede para empresas.",
        link: "https://pt.wikipedia.org/wiki/Palo_Alto_Networks",
        tags: "cibersegurança firewall TI"
    },
    {
        titulo: "Paychex",
        descricao: "Paychex é uma empresa americana que fornece soluções de gerenciamento de folha de pagamento, recursos humanos e benefícios.",
        link: "https://pt.wikipedia.org/wiki/Paychex",
        tags: "folha de pagamento RH benefícios"
    },
    {
        titulo: "PayPal",
        descricao: "PayPal é uma plataforma de pagamentos online que permite transações financeiras entre usuários e empresas de forma segura e rápida.",
        link: "https://pt.wikipedia.org/wiki/PayPal",
        tags: "pagamentos online finanças tecnologia"
    },
    {
        titulo: "PDD Holdings DRC",
        descricao: "PDD Holdings é uma empresa de comércio eletrônico chinesa, conhecida por sua plataforma de compras coletivas Pinduoduo.",
        link: "https://pt.wikipedia.org/wiki/Pinduoduo",
        tags: "comércio eletrônico China compras"
    },
    {
        titulo: "PepsiCo",
        descricao: "PepsiCo é uma multinacional americana de alimentos e bebidas, dona de marcas como Pepsi, Gatorade e Lay's.",
        link: "https://pt.wikipedia.org/wiki/PepsiCo",
        tags: "bebidas alimentos marcas"
    },
    {
        titulo: "Qualcomm",
        descricao: "Qualcomm é uma empresa americana que desenvolve tecnologias e chips para comunicações móveis, como smartphones e redes 5G.",
        link: "https://pt.wikipedia.org/wiki/Qualcomm",
        tags: "semicondutores comunicações 5G"
    },
    {
        titulo: "Regeneron Pharma",
        descricao: "Regeneron Pharmaceuticals é uma empresa de biotecnologia que desenvolve medicamentos para doenças graves, como o tratamento de doenças oculares e câncer.",
        link: "https://pt.wikipedia.org/wiki/Regeneron_Pharmaceuticals",
        tags: "biotecnologia saúde medicamentos"
    },
    {
        titulo: "Roper Technologies",
        descricao: "Roper Technologies é uma empresa que fabrica produtos e software para uma ampla variedade de indústrias, incluindo saúde e engenharia.",
        link: "https://pt.wikipedia.org/wiki/Roper_Technologies",
        tags: "tecnologia engenharia software"
    },
    {
        titulo: "Ross Stores",
        descricao: "Ross Stores é uma rede americana de lojas de descontos que oferece uma variedade de produtos de moda, casa e decoração.",
        link: "https://pt.wikipedia.org/wiki/Ross_Stores",
        tags: "varejo moda descontos"
    },
    {
        titulo: "Starbucks",
        descricao: "Starbucks é uma das maiores cadeias de cafeterias do mundo, famosa por seu café de alta qualidade e ambiente acolhedor.",
        link: "https://pt.wikipedia.org/wiki/Starbucks",
        tags: "café bebidas restaurante"
    },
    {
        titulo: "Super Micro Computer",
        descricao: "Super Micro Computer é uma empresa que fabrica servidores e soluções de armazenamento para data centers e computação em nuvem.",
        link: "https://pt.wikipedia.org/wiki/Super_Micro_Computer",
        tags: "servidores TI nuvem"
    },
    {
        titulo: "Synopsys",
        descricao: "Synopsys é uma empresa que desenvolve software de design de circuitos integrados, usada para criar semicondutores.",
        link: "https://pt.wikipedia.org/wiki/Synopsys",
        tags: "semicondutores software design"
    },
    {
        titulo: "T-Mobile US",
        descricao: "T-Mobile US é uma das maiores operadoras de telefonia móvel dos EUA, oferecendo serviços de rede 5G e planos de telefonia.",
        link: "https://pt.wikipedia.org/wiki/T-Mobile_US",
        tags: "telecomunicações 5G telefonia"
    },
    {
        titulo: "Take-Two",
        descricao: "Take-Two Interactive é uma empresa americana de videogames, dona de franquias populares como Grand Theft Auto e NBA 2K.",
        link: "https://pt.wikipedia.org/wiki/Take-Two_Interactive",
        tags: "videogames entretenimento jogos"
    },
    {
        titulo: "Tesla",
        descricao: "Tesla é uma empresa americana que desenvolve carros elétricos e soluções de energia sustentável, como baterias e painéis solares.",
        link: "https://pt.wikipedia.org/wiki/Tesla,_Inc.",
        tags: "carros elétricos energia sustentável"
    },
    {
        titulo: "Texas Instruments",
        descricao: "Texas Instruments é uma empresa que fabrica semicondutores e produtos de tecnologia, incluindo chips analógicos e processadores.",
        link: "https://pt.wikipedia.org/wiki/Texas_Instruments",
        tags: "semicondutores chips tecnologia"
    },
    {
        titulo: "The Trade Desk",
        descricao: "The Trade Desk é uma plataforma de publicidade digital que ajuda anunciantes a comprar e otimizar anúncios programáticos.",
        link: "https://pt.wikipedia.org/wiki/The_Trade_Desk",
        tags: "publicidade digital tecnologia"
    },
    {
        titulo: "Verisk",
        descricao: "Verisk Analytics é uma empresa de dados e análise que fornece insights para seguros, saúde e outros setores.",
        link: "https://pt.wikipedia.org/wiki/Verisk_Analytics",
        tags: "dados análise seguros"
    },
    {
        titulo: "Vertex",
        descricao: "Vertex Pharmaceuticals é uma empresa de biotecnologia que desenvolve tratamentos para doenças raras e graves, como fibrose cística.",
        link: "https://pt.wikipedia.org/wiki/Vertex_Pharmaceuticals",
        tags: "biotecnologia saúde medicamentos"
    },
    {
        titulo: "Warner Bros Discovery",
        descricao: "Warner Bros. Discovery é uma empresa de entretenimento que produz filmes, séries e outros conteúdos, com marcas conhecidas como HBO e Warner Bros.",
        link: "https://pt.wikipedia.org/wiki/Warner_Bros._Discovery",
        tags: "entretenimento filmes séries"
    },
    {
        titulo: "Workday",
        descricao: "Workday é uma empresa de software que oferece soluções de gestão de capital humano e finanças para empresas.",
        link: "https://pt.wikipedia.org/wiki/Workday,_Inc.",
        tags: "software RH finanças"
    },
    {
        titulo: "Xcel Energy",
        descricao: "Xcel Energy é uma empresa americana que fornece energia elétrica e gás natural, com foco em fontes renováveis de energia.",
        link: "https://pt.wikipedia.org/wiki/Xcel_Energy",
        tags: "energia renovável eletricidade"
    },
    {
        titulo: "Zscaler",
        descricao: "Zscaler é uma empresa de cibersegurança que oferece soluções baseadas em nuvem para proteger dados e redes de empresas.",
        link: "https://pt.wikipedia.org/wiki/Zscaler",
        tags: "cibersegurança nuvem dados"
    }    
];