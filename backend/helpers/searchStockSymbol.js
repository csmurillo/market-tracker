const stockSymbolByName = [
  {
    "Symbol": "A",
    "Name": "Agilent Technologies Inc."
  },
  {
    "Symbol": "AA",
    "Name": "Alcoa Corporation"
  },
  {
    "Symbol": "AAC",
    "Name": "Ares Acquisition Corporation "
  },
  {
    "Symbol": "AACI",
    "Name": "Armada Acquisition I"
  },
  {
    "Symbol": "AADI",
    "Name": "Aadi Bioscience Inc."
  },
  {
    "Symbol": "AAIC",
    "Name": "Arlington Asset Investment Corp  (new)"
  },
  {
    "Symbol": "AAL",
    "Name": "American Airlines Group Inc."
  },
  {
    "Symbol": "AAMC",
    "Name": "Altisource Asset Management Corp Com"
  },
  {
    "Symbol": "AAME",
    "Name": "Atlantic American Corporation"
  },
  {
    "Symbol": "AAN",
    "Name": "Aarons Holdings Company Inc."
  },
  {
    "Symbol": "AAOI",
    "Name": "Applied Optoelectronics Inc."
  },
  {
    "Symbol": "AAON",
    "Name": "AAON Inc."
  },
  {
    "Symbol": "AAP",
    "Name": "Advance Auto Parts Inc."
  },
  {
    "Symbol": "AAPL",
    "Name": "Apple Inc."
  },
  {
    "Symbol": "AAQC",
    "Name": "Accelerate Acquisition "
  },
  {
    "Symbol": "AAT",
    "Name": "American Assets Trust Inc."
  },
  {
    "Symbol": "AATC",
    "Name": "Autoscope Technologies Corporation"
  },
  {
    "Symbol": "AAU",
    "Name": "Almaden Minerals Ltd."
  },
  {
    "Symbol": "AAWW",
    "Name": "Atlas Air Worldwide Holdings NEW"
  },
  {
    "Symbol": "AB",
    "Name": "AllianceBernstein Holding L.P.  Units"
  },
  {
    "Symbol": "ABB",
    "Name": "ABB Ltd"
  },
  {
    "Symbol": "ABBV",
    "Name": "AbbVie Inc."
  },
  {
    "Symbol": "ABC",
    "Name": "AmerisourceBergen Corporation"
  },
  {
    "Symbol": "ABCB",
    "Name": "Ameris Bancorp"
  },
  {
    "Symbol": "ABCL",
    "Name": "AbCellera Biologics Inc."
  },
  {
    "Symbol": "ABEO",
    "Name": "Abeona Therapeutics Inc."
  },
  {
    "Symbol": "ABG",
    "Name": "Asbury Automotive Group Inc"
  },
  {
    "Symbol": "ABGI",
    "Name": "ABG Acquisition I "
  },
  {
    "Symbol": "ABIO",
    "Name": "ARCA biopharma Inc."
  },
  {
    "Symbol": "ABM",
    "Name": "ABM Industries Incorporated"
  },
  {
    "Symbol": "ABMD",
    "Name": "ABIOMED Inc."
  },
  {
    "Symbol": "ABNB",
    "Name": "Airbnb Inc. "
  },
  {
    "Symbol": "ABOS",
    "Name": "Acumen Pharmaceuticals Inc."
  },
  {
    "Symbol": "ABR",
    "Name": "Arbor Realty Trust"
  },
  {
    "Symbol": "ABSI",
    "Name": "Absci Corporation"
  },
  {
    "Symbol": "ABST",
    "Name": "Absolute Software Corporation"
  },
  {
    "Symbol": "ABT",
    "Name": "Abbott Laboratories"
  },
  {
    "Symbol": "ABTX",
    "Name": "Allegiance Bancshares Inc."
  },
  {
    "Symbol": "ABUS",
    "Name": "Arbutus Biopharma Corporation"
  },
  {
    "Symbol": "ABVC",
    "Name": "ABVC BioPharma Inc."
  },
  {
    "Symbol": "AC",
    "Name": "Associated Capital Group Inc."
  },
  {
    "Symbol": "ACA",
    "Name": "Arcosa Inc."
  },
  {
    "Symbol": "ACAD",
    "Name": "ACADIA Pharmaceuticals Inc."
  },
  {
    "Symbol": "ACAH",
    "Name": "Atlantic Coastal Acquisition "
  },
  {
    "Symbol": "ACAHU",
    "Name": "Atlantic Coastal Acquisition Unit"
  },
  {
    "Symbol": "ACAX",
    "Name": "Alset Capital Acquisition "
  },
  {
    "Symbol": "ACAXR",
    "Name": "Alset Capital Acquisition Right"
  },
  {
    "Symbol": "ACB",
    "Name": "Aurora Cannabis Inc."
  },
  {
    "Symbol": "ACC",
    "Name": "American Campus Communities Inc"
  },
  {
    "Symbol": "ACCD",
    "Name": "Accolade Inc."
  },
  {
    "Symbol": "ACCO",
    "Name": "Acco Brands Corporation"
  },
  {
    "Symbol": "ACEL",
    "Name": "Accel Entertainment Inc."
  },
  {
    "Symbol": "ACER",
    "Name": "Acer Therapeutics Inc.  (DE)"
  },
  {
    "Symbol": "ACET",
    "Name": "Adicet Bio Inc."
  },
  {
    "Symbol": "ACEV",
    "Name": "ACE Convergence Acquisition "
  },
  {
    "Symbol": "ACGL",
    "Name": "Arch Capital Group Ltd."
  },
  {
    "Symbol": "ACHC",
    "Name": "Acadia Healthcare Company Inc."
  },
  {
    "Symbol": "ACHR",
    "Name": "Archer Aviation Inc. "
  },
  {
    "Symbol": "ACHV",
    "Name": "Achieve Life Sciences Inc."
  },
  {
    "Symbol": "ACI",
    "Name": "Albertsons Companies Inc. "
  },
  {
    "Symbol": "ACIU",
    "Name": "AC Immune SA"
  },
  {
    "Symbol": "ACIW",
    "Name": "ACI Worldwide Inc."
  },
  {
    "Symbol": "ACKIT",
    "Name": "Ackrell SPAC Partners I Co. Subunits"
  },
  {
    "Symbol": "ACKIU",
    "Name": "Ackrell SPAC Partners I Co. Units"
  },
  {
    "Symbol": "ACLS",
    "Name": "Axcelis Technologies Inc."
  },
  {
    "Symbol": "ACLX",
    "Name": "Arcellx Inc."
  },
  {
    "Symbol": "ACM",
    "Name": "AECOM"
  },
  {
    "Symbol": "ACMR",
    "Name": "ACM Research Inc. "
  },
  {
    "Symbol": "ACN",
    "Name": "Accenture plc   (Ireland)"
  },
  {
    "Symbol": "ACNB",
    "Name": "ACNB Corporation"
  },
  {
    "Symbol": "ACOR",
    "Name": "Acorda Therapeutics Inc."
  },
  {
    "Symbol": "ACP",
    "Name": "Aberdeen Income Credit Strategies Fund"
  },
  {
    "Symbol": "ACQR",
    "Name": "Independence Holdings  Ordinary Share"
  },
  {
    "Symbol": "ACQRU",
    "Name": "Independence Holdings Units"
  },
  {
    "Symbol": "ACR",
    "Name": "ACRES Commercial Realty"
  },
  {
    "Symbol": "ACRE",
    "Name": "Ares Commercial Real Estate Corporation"
  },
  {
    "Symbol": "ACRO",
    "Name": "Acropolis Infrastructure Acquisition "
  },
  {
    "Symbol": "ACRS",
    "Name": "Aclaris Therapeutics Inc."
  },
  {
    "Symbol": "ACRX",
    "Name": "AcelRx Pharmaceuticals Inc."
  },
  {
    "Symbol": "ACST",
    "Name": "Acasti Pharma Inc. "
  },
  {
    "Symbol": "ACT",
    "Name": "Enact Holdings Inc."
  },
  {
    "Symbol": "ACTG",
    "Name": "Acacia Research Corporation (Acacia Tech)"
  },
  {
    "Symbol": "ACU",
    "Name": "Acme United Corporation."
  },
  {
    "Symbol": "ACVA",
    "Name": "ACV Auctions Inc. "
  },
  {
    "Symbol": "ACXP",
    "Name": "Acurx Pharmaceuticals Inc."
  },
  {
    "Symbol": "ADAL",
    "Name": "Anthemis Digital Acquisitions I Corp "
  },
  {
    "Symbol": "ADALU",
    "Name": "Anthemis Digital Acquisitions I Corp Unit"
  },
  {
    "Symbol": "ADBE",
    "Name": "Adobe Inc."
  },
  {
    "Symbol": "ADC",
    "Name": "Agree Realty Corporation"
  },
  {
    "Symbol": "ADCT",
    "Name": "ADC Therapeutics SA"
  },
  {
    "Symbol": "ADER",
    "Name": "26 Capital Acquisition "
  },
  {
    "Symbol": "ADERU",
    "Name": "26 Capital Acquisition Unit"
  },
  {
    "Symbol": "ADES",
    "Name": "Advanced Emissions Solutions Inc."
  },
  {
    "Symbol": "ADEX",
    "Name": "Adit EdTech Acquisition"
  },
  {
    "Symbol": "ADGI",
    "Name": "Adagio Therapeutics Inc."
  },
  {
    "Symbol": "ADI",
    "Name": "Analog Devices Inc."
  },
  {
    "Symbol": "ADIL",
    "Name": "Adial Pharmaceuticals Inc"
  },
  {
    "Symbol": "ADM",
    "Name": "Archer-Daniels-Midland Company"
  },
  {
    "Symbol": "ADMA",
    "Name": "ADMA Biologics Inc"
  },
  {
    "Symbol": "ADMP",
    "Name": "Adamis Pharmaceuticals Corporation"
  },
  {
    "Symbol": "ADN",
    "Name": "Advent Technologies Holdings Inc. "
  },
  {
    "Symbol": "ADNT",
    "Name": "Adient plc"
  },
  {
    "Symbol": "ADOC",
    "Name": "Edoc Acquisition  Ordinary Share"
  },
  {
    "Symbol": "ADP",
    "Name": "Automatic Data Processing Inc."
  },
  {
    "Symbol": "ADPT",
    "Name": "Adaptive Biotechnologies Corporation"
  },
  {
    "Symbol": "ADRA",
    "Name": "Adara Acquisition "
  },
  {
    "Symbol": "ADRT",
    "Name": "Ault Disruptive Technologies Corporation"
  },
  {
    "Symbol": "ADSE",
    "Name": "ADS-TEC ENERGY PLC"
  },
  {
    "Symbol": "ADSK",
    "Name": "Autodesk Inc."
  },
  {
    "Symbol": "ADT",
    "Name": "ADT Inc."
  },
  {
    "Symbol": "ADTH",
    "Name": "AdTheorent Holding Company Inc."
  },
  {
    "Symbol": "ADTN",
    "Name": "ADTRAN Inc."
  },
  {
    "Symbol": "ADTX",
    "Name": "Aditxt Inc."
  },
  {
    "Symbol": "ADUS",
    "Name": "Addus HomeCare Corporation"
  },
  {
    "Symbol": "ADV",
    "Name": "Advantage Solutions Inc. "
  },
  {
    "Symbol": "ADVM",
    "Name": "Adverum Biotechnologies Inc."
  },
  {
    "Symbol": "ADX",
    "Name": "Adams Diversified Equity Fund Inc."
  },
  {
    "Symbol": "AE",
    "Name": "Adams Resources & Energy Inc."
  },
  {
    "Symbol": "AEAC",
    "Name": "Authentic Equity Acquisition  ordinary share"
  },
  {
    "Symbol": "AEACU",
    "Name": "Authentic Equity Acquisition Unit"
  },
  {
    "Symbol": "AEAE",
    "Name": "AltEnergy Acquisition "
  },
  {
    "Symbol": "AEAEU",
    "Name": "AltEnergy Acquisition Unit"
  },
  {
    "Symbol": "AEE",
    "Name": "Ameren Corporation"
  },
  {
    "Symbol": "AEF",
    "Name": "Aberdeen Emerging Markets Equity Income Fund Inc."
  },
  {
    "Symbol": "AEG",
    "Name": "AEGON N.V."
  },
  {
    "Symbol": "AEHA",
    "Name": "Aesther Healthcare Acquisition Corp "
  },
  {
    "Symbol": "AEHL",
    "Name": "Antelope Enterprise Holdings Limited  (0.024 par)"
  },
  {
    "Symbol": "AEHR",
    "Name": "Aehr Test Systems"
  },
  {
    "Symbol": "AEI",
    "Name": "Alset EHome International Inc."
  },
  {
    "Symbol": "AEIS",
    "Name": "Advanced Energy Industries Inc."
  },
  {
    "Symbol": "AEL",
    "Name": "American Equity Investment Life Holding Company"
  },
  {
    "Symbol": "AEM",
    "Name": "Agnico Eagle Mines Limited"
  },
  {
    "Symbol": "AEMD",
    "Name": "Aethlon Medical Inc."
  },
  {
    "Symbol": "AEO",
    "Name": "American Eagle Outfitters Inc."
  },
  {
    "Symbol": "AEP",
    "Name": "American Electric Power Company Inc."
  },
  {
    "Symbol": "AEPPZ",
    "Name": "American Electric Power Company Inc. Corporate Units"
  },
  {
    "Symbol": "AER",
    "Name": "AerCap Holdings N.V."
  },
  {
    "Symbol": "AERC",
    "Name": "AeroClean Technologies Inc."
  },
  {
    "Symbol": "AERI",
    "Name": "Aerie Pharmaceuticals Inc."
  },
  {
    "Symbol": "AES",
    "Name": "The AES Corporation"
  },
  {
    "Symbol": "AESC",
    "Name": "The AES Corporation Corporate Units"
  },
  {
    "Symbol": "AESE",
    "Name": "Allied Esports Entertainment Inc."
  },
  {
    "Symbol": "AEVA",
    "Name": "Aeva Technologies Inc."
  },
  {
    "Symbol": "AEY",
    "Name": "ADDvantage Technologies Group Inc."
  },
  {
    "Symbol": "AEYE",
    "Name": "AudioEye Inc."
  },
  {
    "Symbol": "AEZS",
    "Name": "Aeterna Zentaris Inc."
  },
  {
    "Symbol": "AFACU",
    "Name": "Arena Fortify Acquisition Unit"
  },
  {
    "Symbol": "AFAQ",
    "Name": "AF Acquisition "
  },
  {
    "Symbol": "AFAQU",
    "Name": "AF Acquisition Units"
  },
  {
    "Symbol": "AFARU",
    "Name": "Aura FAT Projects Acquisition Corp Unit"
  },
  {
    "Symbol": "AFB",
    "Name": "AllianceBernstein National Municipal Income Fund Inc"
  },
  {
    "Symbol": "AFBI",
    "Name": "Affinity Bancshares Inc.  (MD)"
  },
  {
    "Symbol": "AFCG",
    "Name": "AFC Gamma Inc."
  },
  {
    "Symbol": "AFG",
    "Name": "American Financial Group Inc."
  },
  {
    "Symbol": "AFI",
    "Name": "Armstrong Flooring Inc."
  },
  {
    "Symbol": "AFIB",
    "Name": "Acutus Medical Inc."
  },
  {
    "Symbol": "AFL",
    "Name": "AFLAC Incorporated"
  },
  {
    "Symbol": "AFMD",
    "Name": "Affimed N.V."
  },
  {
    "Symbol": "AFRM",
    "Name": "Affirm Holdings Inc. "
  },
  {
    "Symbol": "AFT",
    "Name": "Apollo Senior Floating Rate Fund Inc."
  },
  {
    "Symbol": "AFTR",
    "Name": "AfterNext HealthTech Acquisition "
  },
  {
    "Symbol": "AFYA",
    "Name": "Afya Limited "
  },
  {
    "Symbol": "AG",
    "Name": "First Majestic Silver  (Canada)"
  },
  {
    "Symbol": "AGAC",
    "Name": "African Gold Acquisition Corporation "
  },
  {
    "Symbol": "AGBA",
    "Name": "AGBA Acquisition Limited Ordinary Share"
  },
  {
    "Symbol": "AGBAR",
    "Name": "AGBA Acquisition Limited Right"
  },
  {
    "Symbol": "AGCB",
    "Name": "Altimeter Growth 2 "
  },
  {
    "Symbol": "AGCO",
    "Name": "AGCO Corporation"
  },
  {
    "Symbol": "AGD",
    "Name": "Aberdeen Global Dynamic Dividend Fund"
  },
  {
    "Symbol": "AGE",
    "Name": "AgeX Therapeutics Inc."
  },
  {
    "Symbol": "AGEN",
    "Name": "Agenus Inc."
  },
  {
    "Symbol": "AGFS",
    "Name": "AgroFresh Solutions Inc."
  },
  {
    "Symbol": "AGFY",
    "Name": "Agrify Corporation"
  },
  {
    "Symbol": "AGGR",
    "Name": "Agile Growth  Ordinary Share"
  },
  {
    "Symbol": "AGGRU",
    "Name": "Agile Growth Units"
  },
  {
    "Symbol": "AGI",
    "Name": "Alamos Gold Inc. "
  },
  {
    "Symbol": "AGIL",
    "Name": "AgileThought Inc. "
  },
  {
    "Symbol": "AGIO",
    "Name": "Agios Pharmaceuticals Inc."
  },
  {
    "Symbol": "AGL",
    "Name": "agilon health inc."
  },
  {
    "Symbol": "AGLE",
    "Name": "Aeglea BioTherapeutics Inc."
  },
  {
    "Symbol": "AGM",
    "Name": "Federal Agricultural Mortgage Corporation"
  },
  {
    "Symbol": "AGMH",
    "Name": "AGM Group Holdings Inc. "
  },
  {
    "Symbol": "AGNC",
    "Name": "AGNC Investment"
  },
  {
    "Symbol": "AGO",
    "Name": "Assured Guaranty Ltd."
  },
  {
    "Symbol": "AGR",
    "Name": "Avangrid Inc."
  },
  {
    "Symbol": "AGRI",
    "Name": "AgriFORCE  Growing Systems Ltd."
  },
  {
    "Symbol": "AGRO",
    "Name": "Adecoagro S.A."
  },
  {
    "Symbol": "AGRX",
    "Name": "Agile Therapeutics Inc."
  },
  {
    "Symbol": "AGS",
    "Name": "PlayAGS Inc."
  },
  {
    "Symbol": "AGTC",
    "Name": "Applied Genetic Technologies Corporation"
  },
  {
    "Symbol": "AGTI",
    "Name": "Agiliti Inc."
  },
  {
    "Symbol": "AGX",
    "Name": "Argan Inc."
  },
  {
    "Symbol": "AGYS",
    "Name": "Agilysys Inc.  (DE)"
  },
  {
    "Symbol": "AHCO",
    "Name": "AdaptHealth"
  },
  {
    "Symbol": "AHG",
    "Name": "Akso Health Group ADS"
  },
  {
    "Symbol": "AHH",
    "Name": "Armada Hoffler Properties Inc."
  },
  {
    "Symbol": "AHPI",
    "Name": "Allied Healthcare Products Inc."
  },
  {
    "Symbol": "AHRN",
    "Name": "Ahren Acquisition "
  },
  {
    "Symbol": "AHRNU",
    "Name": "Ahren Acquisition Unit"
  },
  {
    "Symbol": "AHT",
    "Name": "Ashford Hospitality Trust Inc"
  },
  {
    "Symbol": "AI",
    "Name": "C3.ai Inc. "
  },
  {
    "Symbol": "AIB",
    "Name": "AIB Acquisition Corporation "
  },
  {
    "Symbol": "AIBBR",
    "Name": "AIB Acquisition Corporation Right"
  },
  {
    "Symbol": "AIBBU",
    "Name": "AIB Acquisition Corporation Unit"
  },
  {
    "Symbol": "AIF",
    "Name": "Apollo Tactical Income Fund Inc."
  },
  {
    "Symbol": "AIG",
    "Name": "American International Group Inc. New"
  },
  {
    "Symbol": "AIHS",
    "Name": "Senmiao Technology Limited"
  },
  {
    "Symbol": "AIKI",
    "Name": "AIkido Pharma Inc."
  },
  {
    "Symbol": "AIM",
    "Name": "AIM ImmunoTech Inc."
  },
  {
    "Symbol": "AIMC",
    "Name": "Altra Industrial Motion"
  },
  {
    "Symbol": "AIN",
    "Name": "Albany International Corporation"
  },
  {
    "Symbol": "AINC",
    "Name": "Ashford Inc. (Holding Company)"
  },
  {
    "Symbol": "AINV",
    "Name": "Apollo Investment Corporation"
  },
  {
    "Symbol": "AIO",
    "Name": "Virtus AllianzGI Artificial Intelligence & Technology Opportunities Fund"
  },
  {
    "Symbol": "AIP",
    "Name": "Arteris Inc."
  },
  {
    "Symbol": "AIR",
    "Name": "AAR"
  },
  {
    "Symbol": "AIRC",
    "Name": "Apartment Income REIT"
  },
  {
    "Symbol": "AIRG",
    "Name": "Airgain Inc."
  },
  {
    "Symbol": "AIRI",
    "Name": "Air Industries Group"
  },
  {
    "Symbol": "AIRS",
    "Name": "AirSculpt Technologies Inc."
  },
  {
    "Symbol": "AIRT",
    "Name": "Air T Inc."
  },
  {
    "Symbol": "AIRTP",
    "Name": "Air T Inc. Air T Funding Alpha Income Trust Preferred Securities"
  },
  {
    "Symbol": "AIT",
    "Name": "Applied Industrial Technologies Inc."
  },
  {
    "Symbol": "AIV",
    "Name": "Apartment Investment and Management Company"
  },
  {
    "Symbol": "AIZ",
    "Name": "Assurant Inc."
  },
  {
    "Symbol": "AJG",
    "Name": "Arthur J. Gallagher & Co."
  },
  {
    "Symbol": "AJRD",
    "Name": "Aerojet Rocketdyne Holdings Inc."
  },
  {
    "Symbol": "AJX",
    "Name": "Great Ajax"
  },
  {
    "Symbol": "AKA",
    "Name": "a.k.a. Brands Holding"
  },
  {
    "Symbol": "AKAM",
    "Name": "Akamai Technologies Inc."
  },
  {
    "Symbol": "AKAN",
    "Name": "Akanda"
  },
  {
    "Symbol": "AKBA",
    "Name": "Akebia Therapeutics Inc."
  },
  {
    "Symbol": "AKIC",
    "Name": "Sports Ventures Acquisition "
  },
  {
    "Symbol": "AKICU",
    "Name": "Sports Ventures Acquisition Unit"
  },
  {
    "Symbol": "AKR",
    "Name": "Acadia Realty Trust"
  },
  {
    "Symbol": "AKRO",
    "Name": "Akero Therapeutics Inc."
  },
  {
    "Symbol": "AKTS",
    "Name": "Akoustis Technologies Inc."
  },
  {
    "Symbol": "AKTX",
    "Name": "Akari Therapeutics plc ADS"
  },
  {
    "Symbol": "AKU",
    "Name": "Akumin Inc."
  },
  {
    "Symbol": "AKUS",
    "Name": "Akouos Inc."
  },
  {
    "Symbol": "AKYA",
    "Name": "Akoya BioSciences Inc."
  },
  {
    "Symbol": "AL",
    "Name": "Air Lease Corporation "
  },
  {
    "Symbol": "ALB",
    "Name": "Albemarle Corporation"
  },
  {
    "Symbol": "ALBO",
    "Name": "Albireo Pharma Inc."
  },
  {
    "Symbol": "ALC",
    "Name": "Alcon Inc."
  },
  {
    "Symbol": "ALCC",
    "Name": "AltC Acquisition "
  },
  {
    "Symbol": "ALCO",
    "Name": "Alico Inc."
  },
  {
    "Symbol": "ALDX",
    "Name": "Aldeyra Therapeutics Inc."
  },
  {
    "Symbol": "ALE",
    "Name": "Allete Inc."
  },
  {
    "Symbol": "ALEC",
    "Name": "Alector Inc."
  },
  {
    "Symbol": "ALEX",
    "Name": "Alexander & Baldwin Inc.  REIT Holding Company"
  },
  {
    "Symbol": "ALF",
    "Name": "ALFI Inc."
  },
  {
    "Symbol": "ALG",
    "Name": "Alamo Group Inc."
  },
  {
    "Symbol": "ALGM",
    "Name": "Allegro MicroSystems Inc."
  },
  {
    "Symbol": "ALGN",
    "Name": "Align Technology Inc."
  },
  {
    "Symbol": "ALGS",
    "Name": "Aligos Therapeutics Inc."
  },
  {
    "Symbol": "ALGT",
    "Name": "Allegiant Travel Company"
  },
  {
    "Symbol": "ALHC",
    "Name": "Alignment Healthcare Inc."
  },
  {
    "Symbol": "ALIM",
    "Name": "Alimera Sciences Inc."
  },
  {
    "Symbol": "ALIT",
    "Name": "Alight Inc. "
  },
  {
    "Symbol": "ALJJ",
    "Name": "ALJ Regional Holdings Inc."
  },
  {
    "Symbol": "ALK",
    "Name": "Alaska Air Group Inc."
  },
  {
    "Symbol": "ALKS",
    "Name": "Alkermes plc"
  },
  {
    "Symbol": "ALKT",
    "Name": "Alkami Technology Inc."
  },
  {
    "Symbol": "ALL",
    "Name": "Allstate Corporation (The)"
  },
  {
    "Symbol": "ALLE",
    "Name": "Allegion plc"
  },
  {
    "Symbol": "ALLG",
    "Name": "Allego N.V. Ordinary Share"
  },
  {
    "Symbol": "ALLK",
    "Name": "Allakos Inc."
  },
  {
    "Symbol": "ALLO",
    "Name": "Allogene Therapeutics Inc."
  },
  {
    "Symbol": "ALLR",
    "Name": "Allarity Therapeutics Inc."
  },
  {
    "Symbol": "ALLT",
    "Name": "Allot Ltd."
  },
  {
    "Symbol": "ALLY",
    "Name": "Ally Financial Inc."
  },
  {
    "Symbol": "ALNA",
    "Name": "Allena Pharmaceuticals Inc."
  },
  {
    "Symbol": "ALNY",
    "Name": "Alnylam Pharmaceuticals Inc."
  },
  {
    "Symbol": "ALOR",
    "Name": "ALSP Orchid Acquisition Corporation I  Ordinary Share"
  },
  {
    "Symbol": "ALORU",
    "Name": "ALSP Orchid Acquisition Corporation I Unit"
  },
  {
    "Symbol": "ALOT",
    "Name": "AstroNova Inc."
  },
  {
    "Symbol": "ALPN",
    "Name": "Alpine Immune Sciences Inc."
  },
  {
    "Symbol": "ALPP",
    "Name": "Alpine 4 Holdings Inc. "
  },
  {
    "Symbol": "ALR",
    "Name": "AlerisLife Inc."
  },
  {
    "Symbol": "ALRM",
    "Name": "Alarm.com Holdings Inc."
  },
  {
    "Symbol": "ALRN",
    "Name": "Aileron Therapeutics Inc."
  },
  {
    "Symbol": "ALRS",
    "Name": "Alerus Financial Corporation"
  },
  {
    "Symbol": "ALSA",
    "Name": "Alpha Star Acquisition Corporation"
  },
  {
    "Symbol": "ALSAR",
    "Name": "Alpha Star Acquisition Corporation Rights"
  },
  {
    "Symbol": "ALSAU",
    "Name": "Alpha Star Acquisition Corporation Units"
  },
  {
    "Symbol": "ALSN",
    "Name": "Allison Transmission Holdings Inc."
  },
  {
    "Symbol": "ALT",
    "Name": "Altimmune Inc."
  },
  {
    "Symbol": "ALTG",
    "Name": "Alta Equipment Group Inc. "
  },
  {
    "Symbol": "ALTO",
    "Name": "Alto Ingredients Inc."
  },
  {
    "Symbol": "ALTR",
    "Name": "Altair Engineering Inc. "
  },
  {
    "Symbol": "ALTU",
    "Name": "Altitude Acquisition "
  },
  {
    "Symbol": "ALTUU",
    "Name": "Altitude Acquisition Unit"
  },
  {
    "Symbol": "ALV",
    "Name": "Autoliv Inc."
  },
  {
    "Symbol": "ALVR",
    "Name": "AlloVir Inc."
  },
  {
    "Symbol": "ALX",
    "Name": "Alexander's Inc."
  },
  {
    "Symbol": "ALXO",
    "Name": "ALX Oncology Holdings Inc."
  },
  {
    "Symbol": "ALYA",
    "Name": "Alithya Group inc.  Subordinate Voting Shares"
  },
  {
    "Symbol": "ALZN",
    "Name": "Alzamend Neuro Inc."
  },
  {
    "Symbol": "AM",
    "Name": "Antero Midstream Corporation"
  },
  {
    "Symbol": "AMAL",
    "Name": "Amalgamated Financial  (DE)"
  },
  {
    "Symbol": "AMAO",
    "Name": "American Acquisition Opportunity Inc. "
  },
  {
    "Symbol": "AMAOU",
    "Name": "American Acquisition Opportunity Inc. Units"
  },
  {
    "Symbol": "AMAT",
    "Name": "Applied Materials Inc."
  },
  {
    "Symbol": "AMBA",
    "Name": "Ambarella Inc."
  },
  {
    "Symbol": "AMBC",
    "Name": "Ambac Financial Group Inc."
  },
  {
    "Symbol": "AMBP",
    "Name": "Ardagh Metal Packaging S.A."
  },
  {
    "Symbol": "AMC",
    "Name": "AMC Entertainment Holdings Inc. "
  },
  {
    "Symbol": "AMCR",
    "Name": "Amcor plc"
  },
  {
    "Symbol": "AMCX",
    "Name": "AMC Networks Inc. "
  },
  {
    "Symbol": "AMD",
    "Name": "Advanced Micro Devices Inc."
  },
  {
    "Symbol": "AME",
    "Name": "AMETEK Inc."
  },
  {
    "Symbol": "AMED",
    "Name": "Amedisys Inc"
  },
  {
    "Symbol": "AMEH",
    "Name": "Apollo Medical Holdings Inc."
  },
  {
    "Symbol": "AMG",
    "Name": "Affiliated Managers Group Inc."
  },
  {
    "Symbol": "AMGN",
    "Name": "Amgen Inc."
  },
  {
    "Symbol": "AMK",
    "Name": "AssetMark Financial Holdings Inc."
  },
  {
    "Symbol": "AMKR",
    "Name": "Amkor Technology Inc."
  },
  {
    "Symbol": "AMLX",
    "Name": "Amylyx Pharmaceuticals Inc."
  },
  {
    "Symbol": "AMN",
    "Name": "AMN Healthcare Services Inc AMN Healthcare Services Inc"
  },
  {
    "Symbol": "AMNB",
    "Name": "American National Bankshares Inc."
  },
  {
    "Symbol": "AMOT",
    "Name": "Allied Motion Technologies Inc."
  },
  {
    "Symbol": "AMP",
    "Name": "Ameriprise Financial Inc."
  },
  {
    "Symbol": "AMPE",
    "Name": "Ampio Pharmaceuticals Inc."
  },
  {
    "Symbol": "AMPG",
    "Name": "Amplitech Group Inc."
  },
  {
    "Symbol": "AMPH",
    "Name": "Amphastar Pharmaceuticals Inc."
  },
  {
    "Symbol": "AMPI",
    "Name": "Advanced Merger Partners Inc. "
  },
  {
    "Symbol": "AMPL",
    "Name": "Amplitude Inc. "
  },
  {
    "Symbol": "AMPS",
    "Name": "Altus Power Inc. "
  },
  {
    "Symbol": "AMPY",
    "Name": "Amplify Energy"
  },
  {
    "Symbol": "AMR",
    "Name": "Alpha Metallurgical Resources Inc."
  },
  {
    "Symbol": "AMRC",
    "Name": "Ameresco Inc. "
  },
  {
    "Symbol": "AMRK",
    "Name": "A-Mark Precious Metals Inc."
  },
  {
    "Symbol": "AMRN",
    "Name": "Amarin Corporation plc"
  },
  {
    "Symbol": "AMRS",
    "Name": "Amyris Inc."
  },
  {
    "Symbol": "AMRX",
    "Name": "Amneal Pharmaceuticals Inc. "
  },
  {
    "Symbol": "AMS",
    "Name": "American Shared Hospital Services"
  },
  {
    "Symbol": "AMSC",
    "Name": "American Superconductor Corporation"
  },
  {
    "Symbol": "AMSF",
    "Name": "AMERISAFE Inc."
  },
  {
    "Symbol": "AMST",
    "Name": "Amesite Inc."
  },
  {
    "Symbol": "AMSWA",
    "Name": "American Software Inc. "
  },
  {
    "Symbol": "AMT",
    "Name": "American Tower Corporation (REIT)"
  },
  {
    "Symbol": "AMTB",
    "Name": "Amerant Bancorp Inc. "
  },
  {
    "Symbol": "AMTI",
    "Name": "Applied Molecular Transport Inc."
  },
  {
    "Symbol": "AMTX",
    "Name": "Aemetis Inc. (DE)"
  },
  {
    "Symbol": "AMWD",
    "Name": "American Woodmark Corporation"
  },
  {
    "Symbol": "AMWL",
    "Name": "American Well Corporation "
  },
  {
    "Symbol": "AMZN",
    "Name": "Amazon.com Inc."
  },
  {
    "Symbol": "AN",
    "Name": "AutoNation Inc."
  },
  {
    "Symbol": "ANAB",
    "Name": "AnaptysBio Inc."
  },
  {
    "Symbol": "ANAC",
    "Name": "Arctos NorthStar Acquisition "
  },
  {
    "Symbol": "ANAT",
    "Name": "American National Group Inc."
  },
  {
    "Symbol": "ANDE",
    "Name": "Andersons Inc. (The)"
  },
  {
    "Symbol": "ANEB",
    "Name": "Anebulo Pharmaceuticals Inc."
  },
  {
    "Symbol": "ANET",
    "Name": "Arista Networks Inc."
  },
  {
    "Symbol": "ANF",
    "Name": "Abercrombie & Fitch Company"
  },
  {
    "Symbol": "ANGH",
    "Name": "Anghami Inc."
  },
  {
    "Symbol": "ANGI",
    "Name": "Angi Inc. "
  },
  {
    "Symbol": "ANGN",
    "Name": "Angion Biomedica"
  },
  {
    "Symbol": "ANGO",
    "Name": "AngioDynamics Inc."
  },
  {
    "Symbol": "ANIK",
    "Name": "Anika Therapeutics Inc."
  },
  {
    "Symbol": "ANIP",
    "Name": "ANI Pharmaceuticals Inc."
  },
  {
    "Symbol": "ANIX",
    "Name": "Anixa Biosciences Inc."
  },
  {
    "Symbol": "ANNX",
    "Name": "Annexon Inc."
  },
  {
    "Symbol": "ANSS",
    "Name": "ANSYS Inc."
  },
  {
    "Symbol": "ANTM",
    "Name": "Anthem Inc."
  },
  {
    "Symbol": "ANTX",
    "Name": "AN2 Therapeutics Inc."
  },
  {
    "Symbol": "ANVS",
    "Name": "Annovis Bio Inc."
  },
  {
    "Symbol": "ANY",
    "Name": "Sphere 3D"
  },
  {
    "Symbol": "ANZU",
    "Name": "Anzu Special Acquisition Corp I "
  },
  {
    "Symbol": "ANZUU",
    "Name": "Anzu Special Acquisition Corp I Units"
  },
  {
    "Symbol": "AOGO",
    "Name": "Arogo Capital Acquisition "
  },
  {
    "Symbol": "AOGOU",
    "Name": "Arogo Capital Acquisition Unit"
  },
  {
    "Symbol": "AOMR",
    "Name": "Angel Oak Mortgage Inc."
  },
  {
    "Symbol": "AORT",
    "Name": "Artivion Inc."
  },
  {
    "Symbol": "AOS",
    "Name": "A.O. Smith Corporation"
  },
  {
    "Symbol": "AOSL",
    "Name": "Alpha and Omega Semiconductor Limited"
  },
  {
    "Symbol": "AOUT",
    "Name": "American Outdoor Brands Inc."
  },
  {
    "Symbol": "AP",
    "Name": "Ampco-Pittsburgh Corporation"
  },
  {
    "Symbol": "APA",
    "Name": "APA Corporation"
  },
  {
    "Symbol": "APAC",
    "Name": "StoneBridge Acquisition Corporation "
  },
  {
    "Symbol": "APACU",
    "Name": "StoneBridge Acquisition Corporation Unit"
  },
  {
    "Symbol": "APAM",
    "Name": "Artisan Partners Asset Management Inc. "
  },
  {
    "Symbol": "APCA",
    "Name": "AP Acquisition Corp "
  },
  {
    "Symbol": "APCX",
    "Name": "AppTech Payments"
  },
  {
    "Symbol": "APD",
    "Name": "Air Products and Chemicals Inc."
  },
  {
    "Symbol": "APDN",
    "Name": "Applied DNA Sciences Inc."
  },
  {
    "Symbol": "APEI",
    "Name": "American Public Education Inc."
  },
  {
    "Symbol": "APEN",
    "Name": "Apollo Endosurgery Inc."
  },
  {
    "Symbol": "APG",
    "Name": "APi Group Corporation"
  },
  {
    "Symbol": "APH",
    "Name": "Amphenol Corporation"
  },
  {
    "Symbol": "APLD",
    "Name": "Applied Blockchain Inc."
  },
  {
    "Symbol": "APLE",
    "Name": "Apple Hospitality REIT Inc."
  },
  {
    "Symbol": "APLS",
    "Name": "Apellis Pharmaceuticals Inc."
  },
  {
    "Symbol": "APLT",
    "Name": "Applied Therapeutics Inc."
  },
  {
    "Symbol": "APM",
    "Name": "Aptorum Group Limited "
  },
  {
    "Symbol": "APMI",
    "Name": "AxonPrime Infrastructure Acquisition Corporation "
  },
  {
    "Symbol": "APMIU",
    "Name": "AxonPrime Infrastructure Acquisition Corporation Unit"
  },
  {
    "Symbol": "APN",
    "Name": "Apeiron Capital Investment "
  },
  {
    "Symbol": "APO",
    "Name": "Apollo Global Management Inc. (New)"
  },
  {
    "Symbol": "APOG",
    "Name": "Apogee Enterprises Inc."
  },
  {
    "Symbol": "APP",
    "Name": "Applovin Corporation "
  },
  {
    "Symbol": "APPF",
    "Name": "AppFolio Inc. "
  },
  {
    "Symbol": "APPH",
    "Name": "AppHarvest Inc."
  },
  {
    "Symbol": "APPN",
    "Name": "Appian Corporation "
  },
  {
    "Symbol": "APPS",
    "Name": "Digital Turbine Inc."
  },
  {
    "Symbol": "APRE",
    "Name": "Aprea Therapeutics Inc."
  },
  {
    "Symbol": "APRN",
    "Name": "Blue Apron Holdings Inc. "
  },
  {
    "Symbol": "APSG",
    "Name": "Apollo Strategic Growth Capital "
  },
  {
    "Symbol": "APT",
    "Name": "Alpha Pro Tech Ltd."
  },
  {
    "Symbol": "APTM",
    "Name": "Alpha Partners Technology Merger "
  },
  {
    "Symbol": "APTMU",
    "Name": "Alpha Partners Technology Merger Unit"
  },
  {
    "Symbol": "APTO",
    "Name": "Aptose Biosciences Inc."
  },
  {
    "Symbol": "APTS",
    "Name": "Preferred Apartment Communities Inc."
  },
  {
    "Symbol": "APTV",
    "Name": "Aptiv PLC"
  },
  {
    "Symbol": "APTX",
    "Name": "Aptinyx Inc."
  },
  {
    "Symbol": "APVO",
    "Name": "Aptevo Therapeutics Inc."
  },
  {
    "Symbol": "APXI",
    "Name": "APx Acquisition I  Ordinary Share"
  },
  {
    "Symbol": "APXIU",
    "Name": "APx Acquisition I Unit"
  },
  {
    "Symbol": "APYX",
    "Name": "Apyx Medical Corporation"
  },
  {
    "Symbol": "AQB",
    "Name": "AquaBounty Technologies Inc."
  },
  {
    "Symbol": "AQMS",
    "Name": "Aqua Metals Inc."
  },
  {
    "Symbol": "AQN",
    "Name": "Algonquin Power & Utilities"
  },
  {
    "Symbol": "AQNU",
    "Name": "Algonquin Power & Utilities Corporate Units"
  },
  {
    "Symbol": "AQST",
    "Name": "Aquestive Therapeutics Inc."
  },
  {
    "Symbol": "AQUA",
    "Name": "Evoqua Water Technologies"
  },
  {
    "Symbol": "AR",
    "Name": "Antero Resources Corporation"
  },
  {
    "Symbol": "ARAV",
    "Name": "Aravive Inc."
  },
  {
    "Symbol": "ARAY",
    "Name": "Accuray Incorporated"
  },
  {
    "Symbol": "ARBE",
    "Name": "Arbe Robotics Ltd."
  },
  {
    "Symbol": "ARBG",
    "Name": "Aequi Acquisition "
  },
  {
    "Symbol": "ARBGU",
    "Name": "Aequi Acquisition Unit"
  },
  {
    "Symbol": "ARBGW",
    "Name": "Aequi Acquisition warrants"
  },
  {
    "Symbol": "ARC",
    "Name": "ARC Document Solutions Inc."
  },
  {
    "Symbol": "ARCB",
    "Name": "ArcBest Corporation"
  },
  {
    "Symbol": "ARCC",
    "Name": "Ares Capital Corporation"
  },
  {
    "Symbol": "ARCE",
    "Name": "Arco Platform Limited "
  },
  {
    "Symbol": "ARCH",
    "Name": "Arch Resources Inc. "
  },
  {
    "Symbol": "ARCK",
    "Name": "Arbor Rapha Capital Bioholdings I "
  },
  {
    "Symbol": "ARCO",
    "Name": "Arcos Dorados Holdings Inc.  Shares"
  },
  {
    "Symbol": "ARCT",
    "Name": "Arcturus Therapeutics Holdings Inc."
  },
  {
    "Symbol": "ARDC",
    "Name": "Ares Dynamic Credit Allocation Fund Inc."
  },
  {
    "Symbol": "ARDS",
    "Name": "Aridis Pharmaceuticals Inc."
  },
  {
    "Symbol": "ARDX",
    "Name": "Ardelyx Inc."
  },
  {
    "Symbol": "ARE",
    "Name": "Alexandria Real Estate Equities Inc."
  },
  {
    "Symbol": "AREB",
    "Name": "American Rebel Holdings Inc."
  },
  {
    "Symbol": "AREC",
    "Name": "American Resources Corporation "
  },
  {
    "Symbol": "AREN",
    "Name": "The Arena Group Holdings Inc."
  },
  {
    "Symbol": "ARES",
    "Name": "Ares Management Corporation "
  },
  {
    "Symbol": "ARGO",
    "Name": "Argo Group International Holdings Ltd."
  },
  {
    "Symbol": "ARGU",
    "Name": "Argus Capital "
  },
  {
    "Symbol": "ARGUU",
    "Name": "Argus Capital Unit"
  },
  {
    "Symbol": "ARHS",
    "Name": "Arhaus Inc. "
  },
  {
    "Symbol": "ARI",
    "Name": "Apollo Commercial Real Estate Finance Inc"
  },
  {
    "Symbol": "ARIS",
    "Name": "Aris Water Solutions Inc. "
  },
  {
    "Symbol": "ARIZ",
    "Name": "Arisz Acquisition"
  },
  {
    "Symbol": "ARIZR",
    "Name": "Arisz Acquisition Right"
  },
  {
    "Symbol": "ARIZU",
    "Name": "Arisz Acquisition Unit"
  },
  {
    "Symbol": "ARKO",
    "Name": "ARKO"
  },
  {
    "Symbol": "ARKR",
    "Name": "Ark Restaurants"
  },
  {
    "Symbol": "ARL",
    "Name": "American Realty Investors Inc."
  },
  {
    "Symbol": "ARLO",
    "Name": "Arlo Technologies Inc."
  },
  {
    "Symbol": "ARLP",
    "Name": "Alliance Resource Partners L.P. Common Units representing Limited Partners Interests"
  },
  {
    "Symbol": "ARMK",
    "Name": "Aramark"
  },
  {
    "Symbol": "ARMP",
    "Name": "Armata Pharmaceuticals Inc."
  },
  {
    "Symbol": "ARNC",
    "Name": "Arconic Corporation"
  },
  {
    "Symbol": "AROC",
    "Name": "Archrock Inc."
  },
  {
    "Symbol": "AROW",
    "Name": "Arrow Financial Corporation"
  },
  {
    "Symbol": "ARQQ",
    "Name": "Arqit Quantum Inc."
  },
  {
    "Symbol": "ARQT",
    "Name": "Arcutis Biotherapeutics Inc."
  },
  {
    "Symbol": "ARR",
    "Name": "ARMOUR Residential REIT Inc."
  },
  {
    "Symbol": "ARRW",
    "Name": "Arrowroot Acquisition "
  },
  {
    "Symbol": "ARRWU",
    "Name": "Arrowroot Acquisition Unit"
  },
  {
    "Symbol": "ARRY",
    "Name": "Array Technologies Inc."
  },
  {
    "Symbol": "ARTA",
    "Name": "Artisan Acquisition "
  },
  {
    "Symbol": "ARTAU",
    "Name": "Artisan Acquisition Units"
  },
  {
    "Symbol": "ARTE",
    "Name": "Artemis Strategic Investment Corporation "
  },
  {
    "Symbol": "ARTL",
    "Name": "Artelo Biosciences Inc."
  },
  {
    "Symbol": "ARTNA",
    "Name": "Artesian Resources Corporation "
  },
  {
    "Symbol": "ARTW",
    "Name": "Art's-Way Manufacturing Co. Inc."
  },
  {
    "Symbol": "ARVL",
    "Name": "Arrival"
  },
  {
    "Symbol": "ARVN",
    "Name": "Arvinas Inc."
  },
  {
    "Symbol": "ARW",
    "Name": "Arrow Electronics Inc."
  },
  {
    "Symbol": "ARWR",
    "Name": "Arrowhead Pharmaceuticals Inc."
  },
  {
    "Symbol": "ARYD",
    "Name": "ARYA Sciences Acquisition Corp IV  Odinary Shares"
  },
  {
    "Symbol": "ARYE",
    "Name": "ARYA Sciences Acquisition Corp V "
  },
  {
    "Symbol": "ASA",
    "Name": "ASA  Gold and Precious Metals Limited"
  },
  {
    "Symbol": "ASAI",
    "Name": "Sendas Distribuidora S A ADS"
  },
  {
    "Symbol": "ASAN",
    "Name": "Asana Inc. "
  },
  {
    "Symbol": "ASAQ",
    "Name": "Atlantic Street Acquisition Corp "
  },
  {
    "Symbol": "ASAX",
    "Name": "Astrea Acquisition "
  },
  {
    "Symbol": "ASAXU",
    "Name": "Astrea Acquisition Unit"
  },
  {
    "Symbol": "ASB",
    "Name": "Associated Banc-Corp"
  },
  {
    "Symbol": "ASC",
    "Name": "Ardmore Shipping Corporation"
  },
  {
    "Symbol": "ASCA",
    "Name": "A SPAC I Acquisition  Ordinary Share"
  },
  {
    "Symbol": "ASCAR",
    "Name": "A SPAC I Acquisition Right"
  },
  {
    "Symbol": "ASCAU",
    "Name": "A SPAC I Acquisition Unit"
  },
  {
    "Symbol": "ASG",
    "Name": "Liberty All-Star Growth Fund Inc."
  },
  {
    "Symbol": "ASGN",
    "Name": "ASGN Incorporated"
  },
  {
    "Symbol": "ASH",
    "Name": "Ashland Global Holdings Inc."
  },
  {
    "Symbol": "ASIX",
    "Name": "AdvanSix Inc."
  },
  {
    "Symbol": "ASLE",
    "Name": "AerSale Corporation"
  },
  {
    "Symbol": "ASM",
    "Name": "Avino Silver & Gold Mines Ltd.  (Canada)"
  },
  {
    "Symbol": "ASMB",
    "Name": "Assembly Biosciences Inc."
  },
  {
    "Symbol": "ASML",
    "Name": "ASML Holding N.V. New York Registry Shares"
  },
  {
    "Symbol": "ASO",
    "Name": "Academy Sports and Outdoors Inc."
  },
  {
    "Symbol": "ASPA",
    "Name": "ABRI SPAC I INC."
  },
  {
    "Symbol": "ASPC",
    "Name": "Alpha Capital Acquisition Company One  Ordinary Share"
  },
  {
    "Symbol": "ASPN",
    "Name": "Aspen Aerogels Inc."
  },
  {
    "Symbol": "ASPS",
    "Name": "Altisource Portfolio Solutions S.A."
  },
  {
    "Symbol": "ASPU",
    "Name": "Aspen Group Inc."
  },
  {
    "Symbol": "ASR",
    "Name": "Grupo Aeroportuario del Sureste S.A. de C.V."
  },
  {
    "Symbol": "ASRT",
    "Name": "Assertio Holdings Inc."
  },
  {
    "Symbol": "ASRV",
    "Name": "AmeriServ Financial Inc."
  },
  {
    "Symbol": "ASTC",
    "Name": "Astrotech Corporation (DE)"
  },
  {
    "Symbol": "ASTE",
    "Name": "Astec Industries Inc."
  },
  {
    "Symbol": "ASTL",
    "Name": "Algoma Steel Group Inc."
  },
  {
    "Symbol": "ASTR",
    "Name": "Astra Space Inc. "
  },
  {
    "Symbol": "ASTS",
    "Name": "AST SpaceMobile Inc. "
  },
  {
    "Symbol": "ASUR",
    "Name": "Asure Software Inc"
  },
  {
    "Symbol": "ASXC",
    "Name": "Asensus Surgical Inc."
  },
  {
    "Symbol": "ASYS",
    "Name": "Amtech Systems Inc."
  },
  {
    "Symbol": "ATA",
    "Name": "Americas Technology Acquisition"
  },
  {
    "Symbol": "ATAI",
    "Name": "ATAI Life Sciences N.V."
  },
  {
    "Symbol": "ATAK",
    "Name": "Aurora Technology Acquisition "
  },
  {
    "Symbol": "ATAKR",
    "Name": "Aurora Technology Acquisition Rights"
  },
  {
    "Symbol": "ATAKU",
    "Name": "Aurora Technology Acquisition Unit"
  },
  {
    "Symbol": "ATAX",
    "Name": "America First Multifamily Investors L.P. Beneficial Unit Certificates (BUCs) representing Limited Partnership Interests"
  },
  {
    "Symbol": "ATC",
    "Name": "Atotech Limited"
  },
  {
    "Symbol": "ATCO",
    "Name": "Atlas"
  },
  {
    "Symbol": "ATCX",
    "Name": "Atlas Technical Consultants Inc. "
  },
  {
    "Symbol": "ATEC",
    "Name": "Alphatec Holdings Inc."
  },
  {
    "Symbol": "ATEN",
    "Name": "A10 Networks Inc."
  },
  {
    "Symbol": "ATER",
    "Name": "Aterian Inc."
  },
  {
    "Symbol": "ATEX",
    "Name": "Anterix Inc."
  },
  {
    "Symbol": "ATGE",
    "Name": "Adtalem Global Education Inc."
  },
  {
    "Symbol": "ATHA",
    "Name": "Athira Pharma Inc."
  },
  {
    "Symbol": "ATHX",
    "Name": "Athersys Inc."
  },
  {
    "Symbol": "ATI",
    "Name": "Allegheny Technologies Incorporated"
  },
  {
    "Symbol": "ATIF",
    "Name": "ATIF Holdings Limited"
  },
  {
    "Symbol": "ATIP",
    "Name": "ATI Physical Therapy Inc. "
  },
  {
    "Symbol": "ATKR",
    "Name": "Atkore Inc."
  },
  {
    "Symbol": "ATLC",
    "Name": "Atlanticus Holdings Corporation"
  },
  {
    "Symbol": "ATLO",
    "Name": "Ames National Corporation"
  },
  {
    "Symbol": "ATNF",
    "Name": "180 Life Sciences"
  },
  {
    "Symbol": "ATNI",
    "Name": "ATN International Inc."
  },
  {
    "Symbol": "ATNM",
    "Name": "Actinium Pharmaceuticals Inc. (Delaware)"
  },
  {
    "Symbol": "ATNX",
    "Name": "Athenex Inc."
  },
  {
    "Symbol": "ATO",
    "Name": "Atmos Energy Corporation"
  },
  {
    "Symbol": "ATOM",
    "Name": "Atomera Incorporated"
  },
  {
    "Symbol": "ATOS",
    "Name": "Atossa Therapeutics Inc."
  },
  {
    "Symbol": "ATR",
    "Name": "AptarGroup Inc."
  },
  {
    "Symbol": "ATRA",
    "Name": "Atara Biotherapeutics Inc."
  },
  {
    "Symbol": "ATRC",
    "Name": "AtriCure Inc."
  },
  {
    "Symbol": "ATRI",
    "Name": "Atrion Corporation"
  },
  {
    "Symbol": "ATRO",
    "Name": "Astronics Corporation"
  },
  {
    "Symbol": "ATRS",
    "Name": "Antares Pharma Inc."
  },
  {
    "Symbol": "ATSG",
    "Name": "Air Transport Services Group Inc"
  },
  {
    "Symbol": "ATSPT",
    "Name": "Archimedes Tech SPAC Partners Co. Subunit"
  },
  {
    "Symbol": "ATSPU",
    "Name": "Archimedes Tech SPAC Partners Co. Unit"
  },
  {
    "Symbol": "ATTO",
    "Name": "Atento S.A."
  },
  {
    "Symbol": "ATUS",
    "Name": "Altice USA Inc. "
  },
  {
    "Symbol": "ATVC",
    "Name": "Tribe Capital Growth Corp I "
  },
  {
    "Symbol": "ATVCU",
    "Name": "Tribe Capital Growth Corp I Units"
  },
  {
    "Symbol": "ATVI",
    "Name": "Activision Blizzard Inc."
  },
  {
    "Symbol": "ATXI",
    "Name": "Avenue Therapeutics Inc."
  },
  {
    "Symbol": "ATXS",
    "Name": "Astria Therapeutics Inc."
  },
  {
    "Symbol": "ATY",
    "Name": "AcuityAds Holdings Inc."
  },
  {
    "Symbol": "AU",
    "Name": "AngloGold Ashanti Limited"
  },
  {
    "Symbol": "AUB",
    "Name": "Atlantic Union Bankshares Corporation"
  },
  {
    "Symbol": "AUBN",
    "Name": "Auburn National Bancorporation Inc."
  },
  {
    "Symbol": "AUD",
    "Name": "Audacy"
  },
  {
    "Symbol": "AUDC",
    "Name": "AudioCodes Ltd."
  },
  {
    "Symbol": "AUGX",
    "Name": "Augmedix Inc."
  },
  {
    "Symbol": "AUID",
    "Name": "Ipsidy Inc."
  },
  {
    "Symbol": "AUMN",
    "Name": "Golden Minerals Company"
  },
  {
    "Symbol": "AUPH",
    "Name": "Aurinia Pharmaceuticals Inc"
  },
  {
    "Symbol": "AUR",
    "Name": "Aurora Innovation Inc. "
  },
  {
    "Symbol": "AURA",
    "Name": "Aura Biosciences Inc."
  },
  {
    "Symbol": "AURC",
    "Name": "Aurora Acquisition "
  },
  {
    "Symbol": "AUS",
    "Name": "Austerlitz Acquisition Corporation I "
  },
  {
    "Symbol": "AUTO",
    "Name": "AutoWeb Inc."
  },
  {
    "Symbol": "AUUD",
    "Name": "Auddia Inc."
  },
  {
    "Symbol": "AUVI",
    "Name": "Applied UV Inc."
  },
  {
    "Symbol": "AUY",
    "Name": "Yamana Gold Inc.  (Canada)"
  },
  {
    "Symbol": "AVA",
    "Name": "Avista Corporation"
  },
  {
    "Symbol": "AVAC",
    "Name": "Avalon Acquisition Inc. "
  },
  {
    "Symbol": "AVAH",
    "Name": "Aveanna Healthcare Holdings Inc."
  },
  {
    "Symbol": "AVAL",
    "Name": "Grupo Aval Acciones y Valores S.A. ADR (Each representing 20 preferred shares)"
  },
  {
    "Symbol": "AVAN",
    "Name": "Avanti Acquisition "
  },
  {
    "Symbol": "AVAV",
    "Name": "AeroVironment Inc."
  },
  {
    "Symbol": "AVB",
    "Name": "AvalonBay Communities Inc."
  },
  {
    "Symbol": "AVCO",
    "Name": "Avalon GloboCare"
  },
  {
    "Symbol": "AVCT",
    "Name": "American Virtual Cloud Technologies Inc."
  },
  {
    "Symbol": "AVDX",
    "Name": "AvidXchange Holdings Inc."
  },
  {
    "Symbol": "AVEO",
    "Name": "AVEO Pharmaceuticals Inc."
  },
  {
    "Symbol": "AVGO",
    "Name": "Broadcom Inc."
  },
  {
    "Symbol": "AVGR",
    "Name": "Avinger Inc."
  },
  {
    "Symbol": "AVHI",
    "Name": "Achari Ventures Holdings I"
  },
  {
    "Symbol": "AVHIU",
    "Name": "Achari Ventures Holdings I Unit"
  },
  {
    "Symbol": "AVID",
    "Name": "Avid Technology Inc."
  },
  {
    "Symbol": "AVIR",
    "Name": "Atea Pharmaceuticals Inc."
  },
  {
    "Symbol": "AVK",
    "Name": "Advent Convertible and Income Fund"
  },
  {
    "Symbol": "AVLR",
    "Name": "Avalara Inc."
  },
  {
    "Symbol": "AVNS",
    "Name": "Avanos Medical Inc."
  },
  {
    "Symbol": "AVNT",
    "Name": "Avient Corporation"
  },
  {
    "Symbol": "AVNW",
    "Name": "Aviat Networks Inc."
  },
  {
    "Symbol": "AVO",
    "Name": "Mission Produce Inc."
  },
  {
    "Symbol": "AVPT",
    "Name": "AvePoint Inc. "
  },
  {
    "Symbol": "AVRO",
    "Name": "AVROBIO Inc."
  },
  {
    "Symbol": "AVT",
    "Name": "Avnet Inc."
  },
  {
    "Symbol": "AVTE",
    "Name": "Aerovate Therapeutics Inc."
  },
  {
    "Symbol": "AVTR",
    "Name": "Avantor Inc."
  },
  {
    "Symbol": "AVTX",
    "Name": "Avalo Therapeutics Inc."
  },
  {
    "Symbol": "AVXL",
    "Name": "Anavex Life Sciences"
  },
  {
    "Symbol": "AVY",
    "Name": "Avery Dennison Corporation"
  },
  {
    "Symbol": "AVYA",
    "Name": "Avaya Holdings"
  },
  {
    "Symbol": "AWF",
    "Name": "Alliancebernstein Global High Income Fund"
  },
  {
    "Symbol": "AWH",
    "Name": "Aspira Women's Health Inc."
  },
  {
    "Symbol": "AWI",
    "Name": "Armstrong World Industries Inc"
  },
  {
    "Symbol": "AWK",
    "Name": "American Water Works Company Inc."
  },
  {
    "Symbol": "AWR",
    "Name": "American States Water Company"
  },
  {
    "Symbol": "AWRE",
    "Name": "Aware Inc."
  },
  {
    "Symbol": "AWX",
    "Name": "Avalon Holdings Corporation"
  },
  {
    "Symbol": "AX",
    "Name": "Axos Financial Inc."
  },
  {
    "Symbol": "AXAC",
    "Name": "AXIOS Sustainable Growth Acquisition Corporation "
  },
  {
    "Symbol": "AXDX",
    "Name": "Accelerate Diagnostics Inc."
  },
  {
    "Symbol": "AXGN",
    "Name": "Axogen Inc."
  },
  {
    "Symbol": "AXH",
    "Name": "Industrial Human Capital Inc."
  },
  {
    "Symbol": "AXL",
    "Name": "American Axle & Manufacturing Holdings Inc."
  },
  {
    "Symbol": "AXLA",
    "Name": "Axcella Health Inc."
  },
  {
    "Symbol": "AXNX",
    "Name": "Axonics Inc."
  },
  {
    "Symbol": "AXON",
    "Name": "Axon Enterprise Inc."
  },
  {
    "Symbol": "AXP",
    "Name": "American Express Company"
  },
  {
    "Symbol": "AXR",
    "Name": "AMREP Corporation"
  },
  {
    "Symbol": "AXS",
    "Name": "Axis Capital Holdings Limited"
  },
  {
    "Symbol": "AXSM",
    "Name": "Axsome Therapeutics Inc."
  },
  {
    "Symbol": "AXTA",
    "Name": "Axalta Coating Systems Ltd."
  },
  {
    "Symbol": "AXTI",
    "Name": "AXT Inc"
  },
  {
    "Symbol": "AXU",
    "Name": "Alexco Resource Corp  (Canada)"
  },
  {
    "Symbol": "AY",
    "Name": "Atlantica Sustainable Infrastructure plc"
  },
  {
    "Symbol": "AYI",
    "Name": "Acuity Brands Inc."
  },
  {
    "Symbol": "AYLA",
    "Name": "Ayala Pharmaceuticals Inc."
  },
  {
    "Symbol": "AYRO",
    "Name": "AYRO Inc."
  },
  {
    "Symbol": "AYTU",
    "Name": "Aytu BioPharma Inc."
  },
  {
    "Symbol": "AYX",
    "Name": "Alteryx Inc. "
  },
  {
    "Symbol": "AZ",
    "Name": "A2Z Smart Technologies"
  },
  {
    "Symbol": "AZEK",
    "Name": "The AZEK Company Inc. "
  },
  {
    "Symbol": "AZO",
    "Name": "AutoZone Inc."
  },
  {
    "Symbol": "AZPN",
    "Name": "Aspen Technology Inc."
  },
  {
    "Symbol": "AZRE",
    "Name": "Azure Power Global Limited Equity Shares"
  },
  {
    "Symbol": "AZTA",
    "Name": "Azenta Inc."
  },
  {
    "Symbol": "AZYO",
    "Name": "Aziyo Biologics Inc. "
  },
  {
    "Symbol": "AZZ",
    "Name": "AZZ Inc."
  },
  {
    "Symbol": "B",
    "Name": "Barnes Group Inc."
  },
  {
    "Symbol": "BA",
    "Name": "Boeing Company (The)"
  },
  {
    "Symbol": "BAC",
    "Name": "Bank of America Corporation"
  },
  {
    "Symbol": "BACA",
    "Name": "Berenson Acquisition I "
  },
  {
    "Symbol": "BAFN",
    "Name": "BayFirst Financial"
  },
  {
    "Symbol": "BAH",
    "Name": "Booz Allen Hamilton Holding Corporation"
  },
  {
    "Symbol": "BAK",
    "Name": "Braskem SA ADR"
  },
  {
    "Symbol": "BALY",
    "Name": "Bally's Corporation"
  },
  {
    "Symbol": "BAM",
    "Name": "Brookfield Asset Management Inc."
  },
  {
    "Symbol": "BAMR",
    "Name": "Brookfield Asset Management Reinsurance Partners Ltd.  Exchangeable Limited Voting Shares"
  },
  {
    "Symbol": "BANC",
    "Name": "Banc of California Inc."
  },
  {
    "Symbol": "BAND",
    "Name": "Bandwidth Inc. "
  },
  {
    "Symbol": "BANF",
    "Name": "BancFirst Corporation"
  },
  {
    "Symbol": "BANR",
    "Name": "Banner Corporation"
  },
  {
    "Symbol": "BANX",
    "Name": "ArrowMark Financial"
  },
  {
    "Symbol": "BAOS",
    "Name": "Baosheng Media Group Holdings Limited"
  },
  {
    "Symbol": "BAP",
    "Name": "Credicorp Ltd."
  },
  {
    "Symbol": "BARK",
    "Name": "BARK Inc. "
  },
  {
    "Symbol": "BASE",
    "Name": "Couchbase Inc."
  },
  {
    "Symbol": "BATL",
    "Name": "Battalion Oil Corporation"
  },
  {
    "Symbol": "BATRA",
    "Name": "Liberty Media Corporation Series A Liberty Braves"
  },
  {
    "Symbol": "BATRK",
    "Name": "Liberty Media Corporation Series C Liberty Braves"
  },
  {
    "Symbol": "BAX",
    "Name": "Baxter International Inc."
  },
  {
    "Symbol": "BB",
    "Name": "BlackBerry Limited"
  },
  {
    "Symbol": "BBAI",
    "Name": "BigBear.ai Inc."
  },
  {
    "Symbol": "BBAR",
    "Name": "Banco BBVA Argentina S.A. ADS"
  },
  {
    "Symbol": "BBBY",
    "Name": "Bed Bath & Beyond Inc."
  },
  {
    "Symbol": "BBCP",
    "Name": "Concrete Pumping Holdings Inc."
  },
  {
    "Symbol": "BBDC",
    "Name": "Barings BDC Inc."
  },
  {
    "Symbol": "BBGI",
    "Name": "Beasley Broadcast Group Inc. "
  },
  {
    "Symbol": "BBI",
    "Name": "Brickell Biotech Inc."
  },
  {
    "Symbol": "BBIG",
    "Name": "Vinco Ventures Inc."
  },
  {
    "Symbol": "BBIO",
    "Name": "BridgeBio Pharma Inc."
  },
  {
    "Symbol": "BBLG",
    "Name": "Bone Biologics Corp"
  },
  {
    "Symbol": "BBLN",
    "Name": "Babylon Holdings Limited "
  },
  {
    "Symbol": "BBQ",
    "Name": "BBQ Holdings Inc."
  },
  {
    "Symbol": "BBSI",
    "Name": "Barrett Business Services Inc."
  },
  {
    "Symbol": "BBU",
    "Name": "Brookfield Business Partners L.P. Limited Partnership Units"
  },
  {
    "Symbol": "BBUC",
    "Name": "Brookfield Business Corporation  Exchangeable Subordinate Voting Shares"
  },
  {
    "Symbol": "BBVA",
    "Name": "Banco Bilbao Vizcaya Argentaria S.A."
  },
  {
    "Symbol": "BBW",
    "Name": "Build-A-Bear Workshop Inc."
  },
  {
    "Symbol": "BBWI",
    "Name": "Bath & Body Works Inc."
  },
  {
    "Symbol": "BBY",
    "Name": "Best Buy Co. Inc."
  },
  {
    "Symbol": "BC",
    "Name": "Brunswick Corporation"
  },
  {
    "Symbol": "BCAB",
    "Name": "BioAtla Inc."
  },
  {
    "Symbol": "BCAC",
    "Name": "Brookline Capital Acquisition"
  },
  {
    "Symbol": "BCACU",
    "Name": "Brookline Capital Acquisition Units"
  },
  {
    "Symbol": "BCBP",
    "Name": "BCB Bancorp Inc. (NJ)"
  },
  {
    "Symbol": "BCC",
    "Name": "Boise Cascade L.L.C."
  },
  {
    "Symbol": "BCDA",
    "Name": "BioCardia Inc."
  },
  {
    "Symbol": "BCE",
    "Name": "BCE Inc."
  },
  {
    "Symbol": "BCEL",
    "Name": "Atreca Inc. "
  },
  {
    "Symbol": "BCH",
    "Name": "Banco De Chile Banco De Chile ADS"
  },
  {
    "Symbol": "BCLI",
    "Name": "Brainstorm Cell Therapeutics Inc."
  },
  {
    "Symbol": "BCML",
    "Name": "BayCom Corp"
  },
  {
    "Symbol": "BCO",
    "Name": "Brinks Company (The)"
  },
  {
    "Symbol": "BCOR",
    "Name": "Blucora Inc."
  },
  {
    "Symbol": "BCOV",
    "Name": "Brightcove Inc."
  },
  {
    "Symbol": "BCOW",
    "Name": "1895 Bancorp of Wisconsin Inc. (MD)"
  },
  {
    "Symbol": "BCPC",
    "Name": "Balchem Corporation"
  },
  {
    "Symbol": "BCRX",
    "Name": "BioCryst Pharmaceuticals Inc."
  },
  {
    "Symbol": "BCS",
    "Name": "Barclays PLC"
  },
  {
    "Symbol": "BCSA",
    "Name": "Blockchain Coinvestors Acquisition I "
  },
  {
    "Symbol": "BCSAU",
    "Name": "Blockchain Coinvestors Acquisition I Unit"
  },
  {
    "Symbol": "BCSF",
    "Name": "Bain Capital Specialty Finance Inc."
  },
  {
    "Symbol": "BCTX",
    "Name": "BriaCell Therapeutics"
  },
  {
    "Symbol": "BCV",
    "Name": "Bancroft Fund Ltd."
  },
  {
    "Symbol": "BDC",
    "Name": "Belden Inc"
  },
  {
    "Symbol": "BDJ",
    "Name": "Blackrock Enhanced Equity Dividend Trust"
  },
  {
    "Symbol": "BDL",
    "Name": "Flanigan's Enterprises Inc."
  },
  {
    "Symbol": "BDN",
    "Name": "Brandywine Realty Trust"
  },
  {
    "Symbol": "BDR",
    "Name": "Blonder Tongue Laboratories Inc."
  },
  {
    "Symbol": "BDSX",
    "Name": "Biodesix Inc."
  },
  {
    "Symbol": "BDTX",
    "Name": "Black Diamond Therapeutics Inc."
  },
  {
    "Symbol": "BDX",
    "Name": "Becton Dickinson and Company"
  },
  {
    "Symbol": "BE",
    "Name": "Bloom Energy Corporation "
  },
  {
    "Symbol": "BEAM",
    "Name": "Beam Therapeutics Inc."
  },
  {
    "Symbol": "BEAT",
    "Name": "Heartbeam Inc."
  },
  {
    "Symbol": "BECN",
    "Name": "Beacon Roofing Supply Inc."
  },
  {
    "Symbol": "BEEM",
    "Name": "Beam Global"
  },
  {
    "Symbol": "BELFA",
    "Name": "Bel Fuse Inc. "
  },
  {
    "Symbol": "BELFB",
    "Name": "Bel Fuse Inc. Class B"
  },
  {
    "Symbol": "BEN",
    "Name": "Franklin Resources Inc."
  },
  {
    "Symbol": "BENE",
    "Name": "Benessere Capital Acquisition "
  },
  {
    "Symbol": "BENER",
    "Name": "Benessere Capital Acquisition Right"
  },
  {
    "Symbol": "BENEU",
    "Name": "Benessere Capital Acquisition Unit"
  },
  {
    "Symbol": "BEP",
    "Name": "Brookfield Renewable Partners L.P."
  },
  {
    "Symbol": "BEPC",
    "Name": "Brookfield Renewable Corporation  Subordinate Voting Shares"
  },
  {
    "Symbol": "BERY",
    "Name": "Berry Global Group Inc."
  },
  {
    "Symbol": "BF/A",
    "Name": "Brown Forman Corporation"
  },
  {
    "Symbol": "BF/B",
    "Name": "Brown Forman Corporation"
  },
  {
    "Symbol": "BFAC",
    "Name": "Battery Future Acquisition "
  },
  {
    "Symbol": "BFAM",
    "Name": "Bright Horizons Family Solutions Inc."
  },
  {
    "Symbol": "BFC",
    "Name": "Bank First Corporation"
  },
  {
    "Symbol": "BFH",
    "Name": "Bread Financial Holdings Inc."
  },
  {
    "Symbol": "BFI",
    "Name": "BurgerFi International Inc."
  },
  {
    "Symbol": "BFIN",
    "Name": "BankFinancial Corporation"
  },
  {
    "Symbol": "BFK",
    "Name": "BlackRock Municipal Income Trust"
  },
  {
    "Symbol": "BFLY",
    "Name": "Butterfly Network Inc. "
  },
  {
    "Symbol": "BFRI",
    "Name": "Biofrontera Inc."
  },
  {
    "Symbol": "BFS",
    "Name": "Saul Centers Inc."
  },
  {
    "Symbol": "BFST",
    "Name": "Business First Bancshares Inc."
  },
  {
    "Symbol": "BFZ",
    "Name": "BlackRock California Municipal Income Trust"
  },
  {
    "Symbol": "BG",
    "Name": "Bunge Limited Bunge Limited"
  },
  {
    "Symbol": "BGB",
    "Name": "Blackstone Strategic Credit Fund"
  },
  {
    "Symbol": "BGCP",
    "Name": "BGC Partners Inc "
  },
  {
    "Symbol": "BGFV",
    "Name": "Big 5 Sporting Goods Corporation"
  },
  {
    "Symbol": "BGI",
    "Name": "Birks Group Inc."
  },
  {
    "Symbol": "BGR",
    "Name": "BlackRock Energy and Resources Trust"
  },
  {
    "Symbol": "BGRY",
    "Name": "Berkshire Grey Inc. "
  },
  {
    "Symbol": "BGS",
    "Name": "B&G Foods Inc. B&G Foods Inc."
  },
  {
    "Symbol": "BGSF",
    "Name": "BGSF Inc."
  },
  {
    "Symbol": "BGSX",
    "Name": "Build Acquisition "
  },
  {
    "Symbol": "BGT",
    "Name": "BlackRock Floating Rate Income Trust"
  },
  {
    "Symbol": "BGX",
    "Name": "Blackstone Long Short Credit Income Fund"
  },
  {
    "Symbol": "BGY",
    "Name": "Blackrock Enhanced International Dividend Trust"
  },
  {
    "Symbol": "BH",
    "Name": "Biglari Holdings Inc. Class B"
  },
  {
    "Symbol": "BHAC",
    "Name": "Crixus BH3 Acquisition Company "
  },
  {
    "Symbol": "BHACU",
    "Name": "Crixus BH3 Acquisition Company Units"
  },
  {
    "Symbol": "BHAT",
    "Name": "Blue Hat Interactive Entertainment Technology"
  },
  {
    "Symbol": "BHB",
    "Name": "Bar Harbor Bankshares Inc."
  },
  {
    "Symbol": "BHC",
    "Name": "Bausch Health Companies Inc."
  },
  {
    "Symbol": "BHE",
    "Name": "Benchmark Electronics Inc."
  },
  {
    "Symbol": "BHF",
    "Name": "Brighthouse Financial Inc."
  },
  {
    "Symbol": "BHG",
    "Name": "Bright Health Group Inc."
  },
  {
    "Symbol": "BHIL",
    "Name": "Benson Hill Inc."
  },
  {
    "Symbol": "BHK",
    "Name": "Blackrock Core Bond Trust Blackrock Core Bond Trust"
  },
  {
    "Symbol": "BHLB",
    "Name": "Berkshire Hills Bancorp Inc."
  },
  {
    "Symbol": "BHR",
    "Name": "Braemar Hotels & Resorts Inc."
  },
  {
    "Symbol": "BHSE",
    "Name": "Bull Horn Holdings"
  },
  {
    "Symbol": "BHSEU",
    "Name": "Bull Horn Holdings Unit"
  },
  {
    "Symbol": "BHV",
    "Name": "BlackRock Virginia Municipal Bond Trust"
  },
  {
    "Symbol": "BHVN",
    "Name": "Biohaven Pharmaceutical Holding Company Ltd."
  },
  {
    "Symbol": "BIDU",
    "Name": "Baidu Inc. ADS"
  },
  {
    "Symbol": "BIG",
    "Name": "Big Lots Inc."
  },
  {
    "Symbol": "BIGC",
    "Name": "BigCommerce Holdings Inc. Series 1"
  },
  {
    "Symbol": "BILL",
    "Name": "Bill.com Holdings Inc."
  },
  {
    "Symbol": "BIMI",
    "Name": "BIMI International Medical Inc."
  },
  {
    "Symbol": "BIO",
    "Name": "Bio-Rad Laboratories Inc. "
  },
  {
    "Symbol": "BIO/B",
    "Name": "Bio-Rad Laboratories Inc."
  },
  {
    "Symbol": "BIOC",
    "Name": "Biocept Inc."
  },
  {
    "Symbol": "BIOL",
    "Name": "Biolase Inc."
  },
  {
    "Symbol": "BIOS",
    "Name": "BioPlus Acquisition "
  },
  {
    "Symbol": "BIOSU",
    "Name": "BioPlus Acquisition Unit"
  },
  {
    "Symbol": "BIOT",
    "Name": "Biotech Acquisition Company "
  },
  {
    "Symbol": "BIOTU",
    "Name": "Biotech Acquisition Company Unit"
  },
  {
    "Symbol": "BIOX",
    "Name": "Bioceres Crop Solutions"
  },
  {
    "Symbol": "BIP",
    "Name": "Brookfield Infrastructure Partners LP Limited Partnership Units"
  },
  {
    "Symbol": "BIPC",
    "Name": "Brookfield Infrastructure Partners LP  Subordinate Voting Shares"
  },
  {
    "Symbol": "BIRD",
    "Name": "Allbirds Inc. "
  },
  {
    "Symbol": "BITE",
    "Name": "Bite Acquisition"
  },
  {
    "Symbol": "BITF",
    "Name": "Bitfarms Ltd."
  },
  {
    "Symbol": "BIVI",
    "Name": "BioVie Inc. "
  },
  {
    "Symbol": "BJ",
    "Name": "BJ's Wholesale Club Holdings Inc."
  },
  {
    "Symbol": "BJDX",
    "Name": "Bluejay Diagnostics Inc."
  },
  {
    "Symbol": "BJRI",
    "Name": "BJ's Restaurants Inc."
  },
  {
    "Symbol": "BK",
    "Name": "The Bank of New York Mellon Corporation"
  },
  {
    "Symbol": "BKCC",
    "Name": "BlackRock Capital Investment Corporation"
  },
  {
    "Symbol": "BKD",
    "Name": "Brookdale Senior Living Inc."
  },
  {
    "Symbol": "BKE",
    "Name": "Buckle Inc. (The)"
  },
  {
    "Symbol": "BKEP",
    "Name": "Blueknight Energy Partners L.P. Common Units"
  },
  {
    "Symbol": "BKEPP",
    "Name": "Blueknight Energy Partners L.P. Series A Preferred Units"
  },
  {
    "Symbol": "BKH",
    "Name": "Black Hills Corporation"
  },
  {
    "Symbol": "BKI",
    "Name": "Black Knight Inc."
  },
  {
    "Symbol": "BKKT",
    "Name": "Bakkt Holdings Inc. "
  },
  {
    "Symbol": "BKN",
    "Name": "BlackRock Investment Quality Municipal Trust Inc. (The)"
  },
  {
    "Symbol": "BKNG",
    "Name": "Booking Holdings Inc."
  },
  {
    "Symbol": "BKR",
    "Name": "Baker Hughes Company "
  },
  {
    "Symbol": "BKSC",
    "Name": "Bank of South Carolina"
  },
  {
    "Symbol": "BKSY",
    "Name": "BlackSky Technology Inc. "
  },
  {
    "Symbol": "BKT",
    "Name": "BlackRock Income Trust Inc. (The)"
  },
  {
    "Symbol": "BKTI",
    "Name": "BK Technologies Corporation"
  },
  {
    "Symbol": "BKU",
    "Name": "BankUnited Inc."
  },
  {
    "Symbol": "BKYI",
    "Name": "BIO-key International Inc."
  },
  {
    "Symbol": "BL",
    "Name": "BlackLine Inc."
  },
  {
    "Symbol": "BLBD",
    "Name": "Blue Bird Corporation"
  },
  {
    "Symbol": "BLBX",
    "Name": "Blackboxstocks Inc."
  },
  {
    "Symbol": "BLCM",
    "Name": "Bellicum Pharmaceuticals Inc."
  },
  {
    "Symbol": "BLD",
    "Name": "TopBuild"
  },
  {
    "Symbol": "BLDE",
    "Name": "Blade Air Mobility Inc. "
  },
  {
    "Symbol": "BLDP",
    "Name": "Ballard Power Systems Inc."
  },
  {
    "Symbol": "BLDR",
    "Name": "Builders FirstSource Inc."
  },
  {
    "Symbol": "BLEU",
    "Name": "bleuacacia ltd "
  },
  {
    "Symbol": "BLEUR",
    "Name": "bleuacacia ltd Rights"
  },
  {
    "Symbol": "BLEUU",
    "Name": "bleuacacia ltd Unit"
  },
  {
    "Symbol": "BLFS",
    "Name": "BioLife Solutions Inc."
  },
  {
    "Symbol": "BLFY",
    "Name": "Blue Foundry Bancorp"
  },
  {
    "Symbol": "BLI",
    "Name": "Berkeley Lights Inc."
  },
  {
    "Symbol": "BLIN",
    "Name": "Bridgeline Digital Inc."
  },
  {
    "Symbol": "BLK",
    "Name": "BlackRock Inc."
  },
  {
    "Symbol": "BLKB",
    "Name": "Blackbaud Inc."
  },
  {
    "Symbol": "BLL",
    "Name": "Ball Corporation"
  },
  {
    "Symbol": "BLMN",
    "Name": "Bloomin' Brands Inc."
  },
  {
    "Symbol": "BLND",
    "Name": "Blend Labs Inc. "
  },
  {
    "Symbol": "BLNG",
    "Name": "Belong Acquisition "
  },
  {
    "Symbol": "BLNK",
    "Name": "Blink Charging Co."
  },
  {
    "Symbol": "BLPH",
    "Name": "Bellerophon Therapeutics Inc."
  },
  {
    "Symbol": "BLSA",
    "Name": "BCLS Acquisition "
  },
  {
    "Symbol": "BLTS",
    "Name": "Bright Lights Acquisition "
  },
  {
    "Symbol": "BLTSU",
    "Name": "Bright Lights Acquisition Unit"
  },
  {
    "Symbol": "BLU",
    "Name": "BELLUS Health Inc."
  },
  {
    "Symbol": "BLUA",
    "Name": "BlueRiver Acquisition "
  },
  {
    "Symbol": "BLUE",
    "Name": "bluebird bio Inc."
  },
  {
    "Symbol": "BLW",
    "Name": "Blackrock Limited Duration Income Trust"
  },
  {
    "Symbol": "BLX",
    "Name": "Banco Latinoamericano de Comercio Exterior S.A."
  },
  {
    "Symbol": "BLZE",
    "Name": "Backblaze Inc. "
  },
  {
    "Symbol": "BMA",
    "Name": "Banco Macro S.A.  ADR (representing Ten Class B )"
  },
  {
    "Symbol": "BMAC",
    "Name": "Black Mountain Acquisition "
  },
  {
    "Symbol": "BMAQ",
    "Name": "Blockchain Moon Acquisition"
  },
  {
    "Symbol": "BMAQR",
    "Name": "Blockchain Moon Acquisition Rights"
  },
  {
    "Symbol": "BMAQU",
    "Name": "Blockchain Moon Acquisition Units"
  },
  {
    "Symbol": "BMBL",
    "Name": "Bumble Inc. "
  },
  {
    "Symbol": "BME",
    "Name": "Blackrock Health Sciences Trust"
  },
  {
    "Symbol": "BMEA",
    "Name": "Biomea Fusion Inc."
  },
  {
    "Symbol": "BMI",
    "Name": "Badger Meter Inc."
  },
  {
    "Symbol": "BMO",
    "Name": "Bank Of Montreal"
  },
  {
    "Symbol": "BMRA",
    "Name": "Biomerica Inc."
  },
  {
    "Symbol": "BMRC",
    "Name": "Bank of Marin Bancorp"
  },
  {
    "Symbol": "BMRN",
    "Name": "BioMarin Pharmaceutical Inc."
  },
  {
    "Symbol": "BMTX",
    "Name": "BM Technologies Inc."
  },
  {
    "Symbol": "BMY",
    "Name": "Bristol-Myers Squibb Company"
  },
  {
    "Symbol": "BNED",
    "Name": "Barnes & Noble Education Inc"
  },
  {
    "Symbol": "BNFT",
    "Name": "Benefitfocus Inc."
  },
  {
    "Symbol": "BNGO",
    "Name": "Bionano Genomics Inc."
  },
  {
    "Symbol": "BNIX",
    "Name": "Bannix Acquisition"
  },
  {
    "Symbol": "BNL",
    "Name": "Broadstone Net Lease Inc."
  },
  {
    "Symbol": "BNNR",
    "Name": "Banner Acquisition "
  },
  {
    "Symbol": "BNNRU",
    "Name": "Banner Acquisition Units"
  },
  {
    "Symbol": "BNOX",
    "Name": "Bionomics Limited American Depository Shares"
  },
  {
    "Symbol": "BNS",
    "Name": "Bank Nova Scotia Halifax Pfd 3"
  },
  {
    "Symbol": "BNSO",
    "Name": "Bonso Electronics International Inc."
  },
  {
    "Symbol": "BNTC",
    "Name": "Benitec Biopharma Inc."
  },
  {
    "Symbol": "BNY",
    "Name": "BlackRock New York Municipal Income Trust"
  },
  {
    "Symbol": "BOAC",
    "Name": "Bluescape Opportunities Acquisition "
  },
  {
    "Symbol": "BOAS",
    "Name": "BOA Acquisition "
  },
  {
    "Symbol": "BOC",
    "Name": "Boston Omaha Corporation "
  },
  {
    "Symbol": "BOCN",
    "Name": "Blue Ocean Acquisition Corp "
  },
  {
    "Symbol": "BODY",
    "Name": "The Beachbody Company Inc. "
  },
  {
    "Symbol": "BOH",
    "Name": "Bank of Hawaii Corporation"
  },
  {
    "Symbol": "BOKF",
    "Name": "BOK Financial Corporation"
  },
  {
    "Symbol": "BOLT",
    "Name": "Bolt Biotherapeutics Inc."
  },
  {
    "Symbol": "BON",
    "Name": "Bon Natural Life Limited"
  },
  {
    "Symbol": "BOOM",
    "Name": "DMC Global Inc."
  },
  {
    "Symbol": "BOOT",
    "Name": "Boot Barn Holdings Inc."
  },
  {
    "Symbol": "BORR",
    "Name": "Borr Drilling Limited"
  },
  {
    "Symbol": "BOSC",
    "Name": "B.O.S. Better Online Solutions"
  },
  {
    "Symbol": "BOTJ",
    "Name": "Bank of the James Financial Group Inc."
  },
  {
    "Symbol": "BOWL",
    "Name": "Bowlero "
  },
  {
    "Symbol": "BOX",
    "Name": "Box Inc. "
  },
  {
    "Symbol": "BOXD",
    "Name": "Boxed Inc."
  },
  {
    "Symbol": "BOXL",
    "Name": "Boxlight Corporation "
  },
  {
    "Symbol": "BP",
    "Name": "BP p.l.c."
  },
  {
    "Symbol": "BPACU",
    "Name": "Bullpen Parlay Acquisition Company Unit"
  },
  {
    "Symbol": "BPMC",
    "Name": "Blueprint Medicines Corporation"
  },
  {
    "Symbol": "BPOP",
    "Name": "Popular Inc."
  },
  {
    "Symbol": "BPRN",
    "Name": "The Bank of Princeton"
  },
  {
    "Symbol": "BPT",
    "Name": "BP Prudhoe Bay Royalty Trust"
  },
  {
    "Symbol": "BPTH",
    "Name": "Bio-Path Holdings Inc."
  },
  {
    "Symbol": "BR",
    "Name": "Broadridge Financial Solutions Inc."
  },
  {
    "Symbol": "BRAC",
    "Name": "Broad Capital Acquisition Corp"
  },
  {
    "Symbol": "BRACR",
    "Name": "Broad Capital Acquisition Corp Rights"
  },
  {
    "Symbol": "BRACU",
    "Name": "Broad Capital Acquisition Corp Unit"
  },
  {
    "Symbol": "BRAG",
    "Name": "Bragg Gaming Group Inc."
  },
  {
    "Symbol": "BRBR",
    "Name": "BellRing Brands Inc."
  },
  {
    "Symbol": "BRBS",
    "Name": "Blue Ridge Bankshares Inc."
  },
  {
    "Symbol": "BRC",
    "Name": "Brady Corporation"
  },
  {
    "Symbol": "BRCC",
    "Name": "BRC Inc. "
  },
  {
    "Symbol": "BRCN",
    "Name": "Burcon NutraScience"
  },
  {
    "Symbol": "BRDG",
    "Name": "Bridge Investment Group Holdings Inc. "
  },
  {
    "Symbol": "BRDS",
    "Name": "Bird Global Inc. "
  },
  {
    "Symbol": "BREZ",
    "Name": "Breeze Holdings Acquisition"
  },
  {
    "Symbol": "BREZR",
    "Name": "Breeze Holdings Acquisition Right"
  },
  {
    "Symbol": "BRFH",
    "Name": "Barfresh Food Group Inc."
  },
  {
    "Symbol": "BRFS",
    "Name": "BRF S.A."
  },
  {
    "Symbol": "BRG",
    "Name": "Bluerock Residential Growth REIT Inc. "
  },
  {
    "Symbol": "BRID",
    "Name": "Bridgford Foods Corporation"
  },
  {
    "Symbol": "BRIV",
    "Name": "B. Riley Principal 250 Merger "
  },
  {
    "Symbol": "BRIVU",
    "Name": "B. Riley Principal 250 Merger Units"
  },
  {
    "Symbol": "BRK/A",
    "Name": "Berkshire Hathaway Inc."
  },
  {
    "Symbol": "BRKH",
    "Name": "BurTech Acquisition "
  },
  {
    "Symbol": "BRKL",
    "Name": "Brookline Bancorp Inc."
  },
  {
    "Symbol": "BRKR",
    "Name": "Bruker Corporation"
  },
  {
    "Symbol": "BRLI",
    "Name": "Brilliant Acquisition Corporation"
  },
  {
    "Symbol": "BRLT",
    "Name": "Brilliant Earth Group Inc. "
  },
  {
    "Symbol": "BRMK",
    "Name": "Broadmark Realty Capital Inc."
  },
  {
    "Symbol": "BRN",
    "Name": "Barnwell Industries Inc."
  },
  {
    "Symbol": "BRO",
    "Name": "Brown & Brown Inc."
  },
  {
    "Symbol": "BROG",
    "Name": "Brooge Energy Limited"
  },
  {
    "Symbol": "BROS",
    "Name": "Dutch Bros Inc. "
  },
  {
    "Symbol": "BRP",
    "Name": "BRP Group Inc. (Insurance Company) "
  },
  {
    "Symbol": "BRPM",
    "Name": "B. Riley Principal 150 Merger "
  },
  {
    "Symbol": "BRQS",
    "Name": "Borqs Technologies Inc."
  },
  {
    "Symbol": "BRSP",
    "Name": "BrightSpire Capital Inc. "
  },
  {
    "Symbol": "BRT",
    "Name": "BRT Apartments (MD)"
  },
  {
    "Symbol": "BRTX",
    "Name": "BioRestorative Therapies Inc."
  },
  {
    "Symbol": "BRW",
    "Name": "Saba Capital Income & Opportunities Fund SBI"
  },
  {
    "Symbol": "BRX",
    "Name": "Brixmor Property Group Inc."
  },
  {
    "Symbol": "BRY",
    "Name": "Berry Corporation (bry)"
  },
  {
    "Symbol": "BRZE",
    "Name": "Braze Inc. "
  },
  {
    "Symbol": "BSAC",
    "Name": "Banco Santander - Chile ADS"
  },
  {
    "Symbol": "BSAQ",
    "Name": "Black Spade Acquisition Co "
  },
  {
    "Symbol": "BSBK",
    "Name": "Bogota Financial"
  },
  {
    "Symbol": "BSET",
    "Name": "Bassett Furniture Industries Incorporated"
  },
  {
    "Symbol": "BSFC",
    "Name": "Blue Star Foods"
  },
  {
    "Symbol": "BSGA",
    "Name": "Blue Safari Group Acquisition  Ordinary Share"
  },
  {
    "Symbol": "BSGAR",
    "Name": "Blue Safari Group Acquisition Right"
  },
  {
    "Symbol": "BSGM",
    "Name": "BioSig Technologies Inc."
  },
  {
    "Symbol": "BSIG",
    "Name": "BrightSphere Investment Group Inc."
  },
  {
    "Symbol": "BSKY",
    "Name": "Big Sky Growth Partners Inc. "
  },
  {
    "Symbol": "BSKYU",
    "Name": "Big Sky Growth Partners Inc. Unit"
  },
  {
    "Symbol": "BSM",
    "Name": "Black Stone Minerals L.P. Common units representing limited partner interests"
  },
  {
    "Symbol": "BSMX",
    "Name": "Banco Santander Mexico S.A. Institucion de Banca Multiple Grupo Financiero Santander Mexico"
  },
  {
    "Symbol": "BSQR",
    "Name": "BSQUARE Corporation"
  },
  {
    "Symbol": "BSRR",
    "Name": "Sierra Bancorp"
  },
  {
    "Symbol": "BSVN",
    "Name": "Bank7"
  },
  {
    "Symbol": "BSX",
    "Name": "Boston Scientific Corporation"
  },
  {
    "Symbol": "BSY",
    "Name": "Bentley Systems Incorporated Class B"
  },
  {
    "Symbol": "BTAI",
    "Name": "BioXcel Therapeutics Inc."
  },
  {
    "Symbol": "BTB",
    "Name": "Bit Brother Limited "
  },
  {
    "Symbol": "BTBD",
    "Name": "BT Brands Inc."
  },
  {
    "Symbol": "BTBT",
    "Name": "Bit Digital Inc."
  },
  {
    "Symbol": "BTCM",
    "Name": "BIT Mining Limited ADS"
  },
  {
    "Symbol": "BTCS",
    "Name": "BTCS Inc."
  },
  {
    "Symbol": "BTCY",
    "Name": "Biotricity Inc."
  },
  {
    "Symbol": "BTG",
    "Name": "B2Gold Corp  (Canada)"
  },
  {
    "Symbol": "BTI",
    "Name": "British American Tobacco  Industries p.l.c.  ADR"
  },
  {
    "Symbol": "BTN",
    "Name": "Ballantyne Strong Inc."
  },
  {
    "Symbol": "BTO",
    "Name": "John Hancock Financial Opportunities Fund"
  },
  {
    "Symbol": "BTOG",
    "Name": "China Xiangtai Food Co. Ltd."
  },
  {
    "Symbol": "BTRS",
    "Name": "BTRS Holdings Inc. Class 1"
  },
  {
    "Symbol": "BTT",
    "Name": "BlackRock Municipal 2030 Target Term Trust"
  },
  {
    "Symbol": "BTTR",
    "Name": "Better Choice Company Inc."
  },
  {
    "Symbol": "BTTX",
    "Name": "Better Therapeutics Inc."
  },
  {
    "Symbol": "BTU",
    "Name": "Peabody Energy Corporation"
  },
  {
    "Symbol": "BTWN",
    "Name": "Bridgetown Holdings Limited "
  },
  {
    "Symbol": "BTWNU",
    "Name": "Bridgetown Holdings Limited Units"
  },
  {
    "Symbol": "BTX",
    "Name": "Brooklyn ImmunoTherapeutics Inc."
  },
  {
    "Symbol": "BTZ",
    "Name": "BlackRock Credit Allocation Income Trust"
  },
  {
    "Symbol": "BUD",
    "Name": "Anheuser-Busch Inbev SA Sponsored ADR (Belgium)"
  },
  {
    "Symbol": "BUI",
    "Name": "BlackRock Utility Infrastructure & Power Opportunities Trust"
  },
  {
    "Symbol": "BUR",
    "Name": "Burford Capital Limited"
  },
  {
    "Symbol": "BURL",
    "Name": "Burlington Stores Inc."
  },
  {
    "Symbol": "BUSE",
    "Name": "First Busey Corporation "
  },
  {
    "Symbol": "BV",
    "Name": "BrightView Holdings Inc."
  },
  {
    "Symbol": "BVH",
    "Name": "Bluegreen Vacations Holding Corporation "
  },
  {
    "Symbol": "BVN",
    "Name": "Buenaventura Mining Company Inc."
  },
  {
    "Symbol": "BVS",
    "Name": "Bioventus Inc. "
  },
  {
    "Symbol": "BW",
    "Name": "Babcock & Wilcox Enterprises Inc."
  },
  {
    "Symbol": "BWA",
    "Name": "BorgWarner Inc."
  },
  {
    "Symbol": "BWAC",
    "Name": "Better World Acquisition"
  },
  {
    "Symbol": "BWAQ",
    "Name": "Blue World Acquisition Corporation "
  },
  {
    "Symbol": "BWAQR",
    "Name": "Blue World Acquisition Corporation Right"
  },
  {
    "Symbol": "BWAQU",
    "Name": "Blue World Acquisition Corporation Unit"
  },
  {
    "Symbol": "BWB",
    "Name": "Bridgewater Bancshares Inc."
  },
  {
    "Symbol": "BWC",
    "Name": "Blue Whale Acquisition Corp I "
  },
  {
    "Symbol": "BWCAU",
    "Name": "Blue Whale Acquisition Corp I Unit"
  },
  {
    "Symbol": "BWEN",
    "Name": "Broadwind Inc."
  },
  {
    "Symbol": "BWFG",
    "Name": "Bankwell Financial Group Inc."
  },
  {
    "Symbol": "BWG",
    "Name": "BrandywineGLOBAL Global Income Opportunities Fund Inc."
  },
  {
    "Symbol": "BWMN",
    "Name": "Bowman Consulting Group Ltd."
  },
  {
    "Symbol": "BWMX",
    "Name": "Betterware de Mexico S.A.B. de C.V."
  },
  {
    "Symbol": "BWV",
    "Name": "Blue Water Vaccines Inc."
  },
  {
    "Symbol": "BWXT",
    "Name": "BWX Technologies Inc."
  },
  {
    "Symbol": "BX",
    "Name": "Blackstone Inc."
  },
  {
    "Symbol": "BXC",
    "Name": "Bluelinx Holdings Inc."
  },
  {
    "Symbol": "BXMT",
    "Name": "Blackstone Mortgage Trust Inc."
  },
  {
    "Symbol": "BXP",
    "Name": "Boston Properties Inc."
  },
  {
    "Symbol": "BXRX",
    "Name": "Baudax Bio Inc."
  },
  {
    "Symbol": "BY",
    "Name": "Byline Bancorp Inc."
  },
  {
    "Symbol": "BYD",
    "Name": "Boyd Gaming Corporation"
  },
  {
    "Symbol": "BYFC",
    "Name": "Broadway Financial Corporation"
  },
  {
    "Symbol": "BYN",
    "Name": "Banyan Acquisition Corporation "
  },
  {
    "Symbol": "BYND",
    "Name": "Beyond Meat Inc."
  },
  {
    "Symbol": "BYNO",
    "Name": "byNordic Acquisition Corporation "
  },
  {
    "Symbol": "BYNOU",
    "Name": "byNordic Acquisition Corporation Units"
  },
  {
    "Symbol": "BYRN",
    "Name": "Byrna Technologies Inc."
  },
  {
    "Symbol": "BYSI",
    "Name": "BeyondSpring Inc."
  },
  {
    "Symbol": "BYTS",
    "Name": "BYTE Acquisition "
  },
  {
    "Symbol": "BZ",
    "Name": "KANZHUN LIMITED American Depository Shares"
  },
  {
    "Symbol": "BZFD",
    "Name": "BuzzFeed Inc. "
  },
  {
    "Symbol": "BZH",
    "Name": "Beazer Homes USA Inc."
  },
  {
    "Symbol": "C",
    "Name": "Citigroup Inc."
  },
  {
    "Symbol": "CAAP",
    "Name": "Corporacion America Airports SA"
  },
  {
    "Symbol": "CAAS",
    "Name": "China Automotive Systems Inc."
  },
  {
    "Symbol": "CABA",
    "Name": "Cabaletta Bio Inc."
  },
  {
    "Symbol": "CABO",
    "Name": "Cable One Inc."
  },
  {
    "Symbol": "CAC",
    "Name": "Camden National Corporation"
  },
  {
    "Symbol": "CACC",
    "Name": "Credit Acceptance Corporation"
  },
  {
    "Symbol": "CACI",
    "Name": "CACI International Inc. "
  },
  {
    "Symbol": "CADE",
    "Name": "Cadence Bank"
  },
  {
    "Symbol": "CADL",
    "Name": "Candel Therapeutics Inc."
  },
  {
    "Symbol": "CAE",
    "Name": "CAE Inc."
  },
  {
    "Symbol": "CAF",
    "Name": "Morgan Stanley China A Share Fund Inc."
  },
  {
    "Symbol": "CAG",
    "Name": "ConAgra Brands Inc."
  },
  {
    "Symbol": "CAH",
    "Name": "Cardinal Health Inc."
  },
  {
    "Symbol": "CAKE",
    "Name": "Cheesecake Factory Incorporated (The)"
  },
  {
    "Symbol": "CAL",
    "Name": "Caleres Inc."
  },
  {
    "Symbol": "CALA",
    "Name": "Calithera Biosciences Inc."
  },
  {
    "Symbol": "CALB",
    "Name": "California BanCorp"
  },
  {
    "Symbol": "CALM",
    "Name": "Cal-Maine Foods Inc."
  },
  {
    "Symbol": "CALX",
    "Name": "Calix Inc"
  },
  {
    "Symbol": "CAMP",
    "Name": "CalAmp"
  },
  {
    "Symbol": "CAMT",
    "Name": "Camtek Ltd."
  },
  {
    "Symbol": "CANF",
    "Name": "Can-Fite Biopharma Ltd Sponsored ADR (Israel)"
  },
  {
    "Symbol": "CANO",
    "Name": "Cano Health Inc. "
  },
  {
    "Symbol": "CAPL",
    "Name": "CrossAmerica Partners LP Common Units representing limited partner interests"
  },
  {
    "Symbol": "CAPR",
    "Name": "Capricor Therapeutics Inc."
  },
  {
    "Symbol": "CAR",
    "Name": "Avis Budget Group Inc."
  },
  {
    "Symbol": "CARA",
    "Name": "Cara Therapeutics Inc."
  },
  {
    "Symbol": "CARE",
    "Name": "Carter Bankshares Inc."
  },
  {
    "Symbol": "CARG",
    "Name": "CarGurus Inc. "
  },
  {
    "Symbol": "CARR",
    "Name": "Carrier Global Corporation"
  },
  {
    "Symbol": "CARS",
    "Name": "Cars.com Inc."
  },
  {
    "Symbol": "CARV",
    "Name": "Carver Bancorp Inc."
  },
  {
    "Symbol": "CAS",
    "Name": "Cascade Acquisition "
  },
  {
    "Symbol": "CASA",
    "Name": "Casa Systems Inc."
  },
  {
    "Symbol": "CASH",
    "Name": "Meta Financial Group Inc."
  },
  {
    "Symbol": "CASI",
    "Name": "CASI Pharmaceuticals Inc."
  },
  {
    "Symbol": "CASS",
    "Name": "Cass Information Systems Inc"
  },
  {
    "Symbol": "CASY",
    "Name": "Casey's General Stores Inc."
  },
  {
    "Symbol": "CAT",
    "Name": "Caterpillar Inc."
  },
  {
    "Symbol": "CATC",
    "Name": "Cambridge Bancorp"
  },
  {
    "Symbol": "CATO",
    "Name": "Cato Corporation (The) "
  },
  {
    "Symbol": "CATY",
    "Name": "Cathay General Bancorp"
  },
  {
    "Symbol": "CB",
    "Name": "Chubb Limited"
  },
  {
    "Symbol": "CBAN",
    "Name": "Colony Bankcorp Inc."
  },
  {
    "Symbol": "CBAT",
    "Name": "CBAK Energy Technology Inc."
  },
  {
    "Symbol": "CBAY",
    "Name": "CymaBay Therapeutics Inc."
  },
  {
    "Symbol": "CBD",
    "Name": "Companhia Brasileira de Distribuicao American Depsitary Shares; each representing one Common Share"
  },
  {
    "Symbol": "CBFV",
    "Name": "CB Financial Services Inc."
  },
  {
    "Symbol": "CBIO",
    "Name": "Catalyst Biosciences Inc."
  },
  {
    "Symbol": "CBL",
    "Name": "CBL & Associates Properties Inc."
  },
  {
    "Symbol": "CBNK",
    "Name": "Capital Bancorp Inc."
  },
  {
    "Symbol": "CBOE",
    "Name": "Cboe Global Markets Inc."
  },
  {
    "Symbol": "CBRE",
    "Name": "CBRE Group Inc  "
  },
  {
    "Symbol": "CBRG",
    "Name": "Chain Bridge I "
  },
  {
    "Symbol": "CBRGU",
    "Name": "Chain Bridge I Units"
  },
  {
    "Symbol": "CBRL",
    "Name": "Cracker Barrel Old Country Store Inc"
  },
  {
    "Symbol": "CBSH",
    "Name": "Commerce Bancshares Inc."
  },
  {
    "Symbol": "CBT",
    "Name": "Cabot Corporation"
  },
  {
    "Symbol": "CBTX",
    "Name": "CBTX Inc."
  },
  {
    "Symbol": "CBU",
    "Name": "Community Bank System Inc."
  },
  {
    "Symbol": "CBZ",
    "Name": "CBIZ Inc."
  },
  {
    "Symbol": "CC",
    "Name": "Chemours Company (The)"
  },
  {
    "Symbol": "CCAI",
    "Name": "Cascadia Acquisition "
  },
  {
    "Symbol": "CCAP",
    "Name": "Crescent Capital BDC Inc."
  },
  {
    "Symbol": "CCB",
    "Name": "Coastal Financial Corporation"
  },
  {
    "Symbol": "CCBG",
    "Name": "Capital City Bank Group"
  },
  {
    "Symbol": "CCCC",
    "Name": "C4 Therapeutics Inc."
  },
  {
    "Symbol": "CCCS",
    "Name": "CCC Intelligent Solutions Holdings Inc."
  },
  {
    "Symbol": "CCD",
    "Name": "Calamos Dynamic Convertible & Income Fund"
  },
  {
    "Symbol": "CCEL",
    "Name": "Cryo-Cell International Inc."
  },
  {
    "Symbol": "CCEP",
    "Name": "Coca-Cola Europacific Partners plc"
  },
  {
    "Symbol": "CCF",
    "Name": "Chase Corporation"
  },
  {
    "Symbol": "CCI",
    "Name": "Crown Castle International (REIT)"
  },
  {
    "Symbol": "CCJ",
    "Name": "Cameco Corporation"
  },
  {
    "Symbol": "CCK",
    "Name": "Crown Holdings Inc."
  },
  {
    "Symbol": "CCL",
    "Name": "Carnival Corporation"
  },
  {
    "Symbol": "CCLP",
    "Name": "CSI Compressco LP Common Units"
  },
  {
    "Symbol": "CCM",
    "Name": "Concord Medical Services Holdings Limited ADS (Each represents three )"
  },
  {
    "Symbol": "CCMP",
    "Name": "CMC Materials Inc."
  },
  {
    "Symbol": "CCNC",
    "Name": "Code Chain New Continent Limited"
  },
  {
    "Symbol": "CCNE",
    "Name": "CNB Financial Corporation"
  },
  {
    "Symbol": "CCO",
    "Name": "Clear Channel Outdoor Holdings Inc."
  },
  {
    "Symbol": "CCOI",
    "Name": "Cogent Communications Holdings Inc."
  },
  {
    "Symbol": "CCRD",
    "Name": "CoreCard Corporation"
  },
  {
    "Symbol": "CCS",
    "Name": "Century Communities Inc."
  },
  {
    "Symbol": "CCSI",
    "Name": "Consensus Cloud Solutions Inc."
  },
  {
    "Symbol": "CCTS",
    "Name": "Cactus Acquisition 1 Limited  Ordinary Share"
  },
  {
    "Symbol": "CCTSU",
    "Name": "Cactus Acquisition 1 Limited Unit"
  },
  {
    "Symbol": "CCU",
    "Name": "Compania Cervecerias Unidas S.A."
  },
  {
    "Symbol": "CCV",
    "Name": "Churchill Capital Corp V "
  },
  {
    "Symbol": "CCVI",
    "Name": "Churchill Capital Corp VI "
  },
  {
    "Symbol": "CCXI",
    "Name": "ChemoCentryx Inc."
  },
  {
    "Symbol": "CCZ",
    "Name": "Comcast Holdings ZONES"
  },
  {
    "Symbol": "CDAK",
    "Name": "Codiak BioSciences Inc."
  },
  {
    "Symbol": "CDAQ",
    "Name": "Compass Digital Acquisition "
  },
  {
    "Symbol": "CDAQU",
    "Name": "Compass Digital Acquisition Unit"
  },
  {
    "Symbol": "CDAY",
    "Name": "Ceridian HCM Holding Inc."
  },
  {
    "Symbol": "CDE",
    "Name": "Coeur Mining Inc."
  },
  {
    "Symbol": "CDEV",
    "Name": "Centennial Resource Development Inc. "
  },
  {
    "Symbol": "CDK",
    "Name": "CDK Global Inc."
  },
  {
    "Symbol": "CDLX",
    "Name": "Cardlytics Inc."
  },
  {
    "Symbol": "CDMO",
    "Name": "Avid Bioservices Inc."
  },
  {
    "Symbol": "CDNA",
    "Name": "CareDx Inc."
  },
  {
    "Symbol": "CDNS",
    "Name": "Cadence Design Systems Inc."
  },
  {
    "Symbol": "CDR",
    "Name": "Cedar Realty Trust Inc."
  },
  {
    "Symbol": "CDRE",
    "Name": "Cadre Holdings Inc."
  },
  {
    "Symbol": "CDRO",
    "Name": "Codere Online Luxembourg S.A."
  },
  {
    "Symbol": "CDTX",
    "Name": "Cidara Therapeutics Inc."
  },
  {
    "Symbol": "CDW",
    "Name": "CDW Corporation"
  },
  {
    "Symbol": "CDXC",
    "Name": "ChromaDex Corporation"
  },
  {
    "Symbol": "CDXS",
    "Name": "Codexis Inc."
  },
  {
    "Symbol": "CDZI",
    "Name": "CADIZ Inc."
  },
  {
    "Symbol": "CE",
    "Name": "Celanese Corporation Celanese Corporation"
  },
  {
    "Symbol": "CEA",
    "Name": "China Eastern Airlines Corporation Ltd."
  },
  {
    "Symbol": "CEAD",
    "Name": "CEA Industries Inc."
  },
  {
    "Symbol": "CECE",
    "Name": "CECO Environmental"
  },
  {
    "Symbol": "CEE",
    "Name": "The Central and Eastern Europe Fund Inc. (The)"
  },
  {
    "Symbol": "CEG",
    "Name": "Constellation Energy Corporation"
  },
  {
    "Symbol": "CEI",
    "Name": "Camber Energy Inc."
  },
  {
    "Symbol": "CEIX",
    "Name": "CONSOL Energy Inc."
  },
  {
    "Symbol": "CELC",
    "Name": "Celcuity Inc."
  },
  {
    "Symbol": "CELH",
    "Name": "Celsius Holdings Inc."
  },
  {
    "Symbol": "CELP",
    "Name": "Cypress Environmental Partners L.P. Common Units representing limited partner interests"
  },
  {
    "Symbol": "CELU",
    "Name": "Celularity Inc. "
  },
  {
    "Symbol": "CELZ",
    "Name": "Creative Medical Technology Holdings Inc."
  },
  {
    "Symbol": "CEM",
    "Name": "ClearBridge MLP and Midstream Fund Inc."
  },
  {
    "Symbol": "CEMI",
    "Name": "Chembio Diagnostics Inc."
  },
  {
    "Symbol": "CEN",
    "Name": "Center Coast Brookfield MLP & Energy Infrastructure Fund"
  },
  {
    "Symbol": "CENN",
    "Name": "Cenntro Electric Group Limited"
  },
  {
    "Symbol": "CENQ",
    "Name": "CENAQ Energy "
  },
  {
    "Symbol": "CENQU",
    "Name": "CENAQ Energy Unit"
  },
  {
    "Symbol": "CENT",
    "Name": "Central Garden & Pet Company"
  },
  {
    "Symbol": "CENTA",
    "Name": "Central Garden & Pet Company   Nonvoting"
  },
  {
    "Symbol": "CENX",
    "Name": "Century Aluminum Company"
  },
  {
    "Symbol": "CEQP",
    "Name": "Crestwood Equity Partners LP"
  },
  {
    "Symbol": "CERE",
    "Name": "Cerevel Therapeutics Holdings Inc."
  },
  {
    "Symbol": "CERN",
    "Name": "Cerner Corporation"
  },
  {
    "Symbol": "CERS",
    "Name": "Cerus Corporation"
  },
  {
    "Symbol": "CERT",
    "Name": "Certara Inc."
  },
  {
    "Symbol": "CET",
    "Name": "Central Securities Corporation"
  },
  {
    "Symbol": "CETX",
    "Name": "Cemtrex Inc."
  },
  {
    "Symbol": "CETXP",
    "Name": "Cemtrex Inc. Series 1 Preferred Stock"
  },
  {
    "Symbol": "CEVA",
    "Name": "CEVA Inc."
  },
  {
    "Symbol": "CF",
    "Name": "CF Industries Holdings Inc."
  },
  {
    "Symbol": "CFB",
    "Name": "CrossFirst Bankshares Inc."
  },
  {
    "Symbol": "CFBK",
    "Name": "CF Bankshares Inc."
  },
  {
    "Symbol": "CFFI",
    "Name": "C&F Financial Corporation"
  },
  {
    "Symbol": "CFFN",
    "Name": "Capitol Federal Financial Inc."
  },
  {
    "Symbol": "CFG",
    "Name": "Citizens Financial Group Inc."
  },
  {
    "Symbol": "CFIV",
    "Name": "CF Acquisition IV "
  },
  {
    "Symbol": "CFIVU",
    "Name": "CF Acquisition IV Unit"
  },
  {
    "Symbol": "CFLT",
    "Name": "Confluent Inc. "
  },
  {
    "Symbol": "CFMS",
    "Name": "Conformis Inc."
  },
  {
    "Symbol": "CFR",
    "Name": "Cullen/Frost Bankers Inc."
  },
  {
    "Symbol": "CFRX",
    "Name": "ContraFect Corporation"
  },
  {
    "Symbol": "CFSB",
    "Name": "CFSB Bancorp Inc."
  },
  {
    "Symbol": "CFVI",
    "Name": "CF Acquisition VI "
  },
  {
    "Symbol": "CFVIU",
    "Name": "CF Acquisition VI Unit"
  },
  {
    "Symbol": "CG",
    "Name": "The Carlyle Group Inc."
  },
  {
    "Symbol": "CGA",
    "Name": "China Green Agriculture Inc."
  },
  {
    "Symbol": "CGAU",
    "Name": "Centerra Gold Inc."
  },
  {
    "Symbol": "CGBD",
    "Name": "TCG BDC Inc."
  },
  {
    "Symbol": "CGC",
    "Name": "Canopy Growth Corporation"
  },
  {
    "Symbol": "CGEM",
    "Name": "Cullinan Oncology Inc."
  },
  {
    "Symbol": "CGEN",
    "Name": "Compugen Ltd."
  },
  {
    "Symbol": "CGNT",
    "Name": "Cognyte Software Ltd."
  },
  {
    "Symbol": "CGNX",
    "Name": "Cognex Corporation"
  },
  {
    "Symbol": "CGO",
    "Name": "Calamos Global Total Return Fund"
  },
  {
    "Symbol": "CGRN",
    "Name": "Capstone Green Energy Corporation"
  },
  {
    "Symbol": "CGTX",
    "Name": "Cognition Therapeutics Inc."
  },
  {
    "Symbol": "CHAA",
    "Name": "Catcha Investment "
  },
  {
    "Symbol": "CHCI",
    "Name": "Comstock Holding Companies Inc. "
  },
  {
    "Symbol": "CHCO",
    "Name": "City Holding Company"
  },
  {
    "Symbol": "CHCT",
    "Name": "Community Healthcare Trust Incorporated"
  },
  {
    "Symbol": "CHD",
    "Name": "Church & Dwight Company Inc."
  },
  {
    "Symbol": "CHDN",
    "Name": "Churchill Downs Incorporated"
  },
  {
    "Symbol": "CHE",
    "Name": "Chemed Corp"
  },
  {
    "Symbol": "CHEF",
    "Name": "The Chefs' Warehouse Inc."
  },
  {
    "Symbol": "CHEK",
    "Name": "Check-Cap Ltd. Ordinary Share"
  },
  {
    "Symbol": "CHGG",
    "Name": "Chegg Inc."
  },
  {
    "Symbol": "CHH",
    "Name": "Choice Hotels International Inc."
  },
  {
    "Symbol": "CHI",
    "Name": "Calamos Convertible Opportunities and Income Fund"
  },
  {
    "Symbol": "CHK",
    "Name": "Chesapeake Energy Corporation"
  },
  {
    "Symbol": "CHKP",
    "Name": "Check Point Software Technologies Ltd."
  },
  {
    "Symbol": "CHMG",
    "Name": "Chemung Financial Corp"
  },
  {
    "Symbol": "CHMI",
    "Name": "Cherry Hill Mortgage Investment Corporation"
  },
  {
    "Symbol": "CHN",
    "Name": "China Fund Inc. (The)"
  },
  {
    "Symbol": "CHNG",
    "Name": "Change Healthcare Inc."
  },
  {
    "Symbol": "CHNGU",
    "Name": "Change Healthcare Inc. Tangible Equity Units"
  },
  {
    "Symbol": "CHNR",
    "Name": "China Natural Resources Inc."
  },
  {
    "Symbol": "CHPM",
    "Name": "CHP Merger "
  },
  {
    "Symbol": "CHPMU",
    "Name": "CHP Merger Unit"
  },
  {
    "Symbol": "CHPT",
    "Name": "ChargePoint Holdings Inc."
  },
  {
    "Symbol": "CHRA",
    "Name": "Charah Solutions Inc."
  },
  {
    "Symbol": "CHRS",
    "Name": "Coherus BioSciences Inc."
  },
  {
    "Symbol": "CHRW",
    "Name": "C.H. Robinson Worldwide Inc."
  },
  {
    "Symbol": "CHS",
    "Name": "Chico's FAS Inc."
  },
  {
    "Symbol": "CHSCL",
    "Name": "CHS Inc Class B Cumulative Redeemable Preferred Stock Series 4"
  },
  {
    "Symbol": "CHSCM",
    "Name": "CHS Inc Class B Reset Rate Cumulative Redeemable Preferred Stock Series 3"
  },
  {
    "Symbol": "CHSCN",
    "Name": "CHS Inc Preferred Class B Series 2 Reset Rate"
  },
  {
    "Symbol": "CHSCO",
    "Name": "CHS Inc. Class B Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "CHT",
    "Name": "Chunghwa Telecom Co. Ltd."
  },
  {
    "Symbol": "CHTR",
    "Name": "Charter Communications Inc.   New"
  },
  {
    "Symbol": "CHUY",
    "Name": "Chuy's Holdings Inc."
  },
  {
    "Symbol": "CHW",
    "Name": "Calamos Global Dynamic Income Fund"
  },
  {
    "Symbol": "CHWA",
    "Name": "CHW Acquisition Corporation Ordinary Share"
  },
  {
    "Symbol": "CHWAU",
    "Name": "CHW Acquisition Corporation Unit"
  },
  {
    "Symbol": "CHWY",
    "Name": "Chewy Inc. "
  },
  {
    "Symbol": "CHX",
    "Name": "ChampionX Corporation"
  },
  {
    "Symbol": "CHY",
    "Name": "Calamos Convertible and High Income Fund"
  },
  {
    "Symbol": "CI",
    "Name": "Cigna Corporation"
  },
  {
    "Symbol": "CIB",
    "Name": "BanColombia S.A."
  },
  {
    "Symbol": "CIDM",
    "Name": "Cinedigm "
  },
  {
    "Symbol": "CIEN",
    "Name": "Ciena Corporation"
  },
  {
    "Symbol": "CIF",
    "Name": "MFS Intermediate High Income Fund"
  },
  {
    "Symbol": "CIFR",
    "Name": "Cipher Mining Inc."
  },
  {
    "Symbol": "CIGI",
    "Name": "Colliers International Group Inc. Subordinate Voting Shares"
  },
  {
    "Symbol": "CIH",
    "Name": "China Index Holdings Limited American Depository Shares"
  },
  {
    "Symbol": "CIK",
    "Name": "Credit Suisse Asset Management Income Fund Inc."
  },
  {
    "Symbol": "CIM",
    "Name": "Chimera Investment Corporation"
  },
  {
    "Symbol": "CINC",
    "Name": "CinCor Pharma Inc."
  },
  {
    "Symbol": "CINF",
    "Name": "Cincinnati Financial Corporation"
  },
  {
    "Symbol": "CING",
    "Name": "Cingulate Inc."
  },
  {
    "Symbol": "CINT",
    "Name": "CI&T Inc "
  },
  {
    "Symbol": "CIO",
    "Name": "City Office REIT Inc."
  },
  {
    "Symbol": "CION",
    "Name": "CION Investment Corporation"
  },
  {
    "Symbol": "CIR",
    "Name": "CIRCOR International Inc."
  },
  {
    "Symbol": "CISO",
    "Name": "Cerberus Cyber Sentinel Corporation"
  },
  {
    "Symbol": "CITEU",
    "Name": "Cartica Acquisition Corp Unit"
  },
  {
    "Symbol": "CIVB",
    "Name": "Civista Bancshares Inc."
  },
  {
    "Symbol": "CIVI",
    "Name": "Civitas Resources Inc."
  },
  {
    "Symbol": "CIX",
    "Name": "CompX International Inc."
  },
  {
    "Symbol": "CIXX",
    "Name": "CI Financial"
  },
  {
    "Symbol": "CIZN",
    "Name": "Citizens Holding Company"
  },
  {
    "Symbol": "CJJD",
    "Name": "China Jo-Jo Drugstores Inc. (Cayman Islands)"
  },
  {
    "Symbol": "CKPT",
    "Name": "Checkpoint Therapeutics Inc."
  },
  {
    "Symbol": "CKX",
    "Name": "CKX Lands Inc."
  },
  {
    "Symbol": "CL",
    "Name": "Colgate-Palmolive Company"
  },
  {
    "Symbol": "CLAQ",
    "Name": "CleanTech Acquisition"
  },
  {
    "Symbol": "CLAQR",
    "Name": "CleanTech Acquisition Rights"
  },
  {
    "Symbol": "CLAQU",
    "Name": "CleanTech Acquisition Units"
  },
  {
    "Symbol": "CLAR",
    "Name": "Clarus Corporation"
  },
  {
    "Symbol": "CLAS",
    "Name": "cceleration "
  },
  {
    "Symbol": "CLAY",
    "Name": "Chavant Capital Acquisition"
  },
  {
    "Symbol": "CLB",
    "Name": "Core Laboratories N.V."
  },
  {
    "Symbol": "CLBK",
    "Name": "Columbia Financial Inc."
  },
  {
    "Symbol": "CLBR",
    "Name": "Colombier Acquisition "
  },
  {
    "Symbol": "CLBS",
    "Name": "Caladrius Biosciences Inc."
  },
  {
    "Symbol": "CLBT",
    "Name": "Cellebrite DI Ltd."
  },
  {
    "Symbol": "CLDX",
    "Name": "Celldex Therapeutics Inc."
  },
  {
    "Symbol": "CLEU",
    "Name": "China Liberal Education Holdings Limited"
  },
  {
    "Symbol": "CLF",
    "Name": "Cleveland-Cliffs Inc."
  },
  {
    "Symbol": "CLFD",
    "Name": "Clearfield Inc."
  },
  {
    "Symbol": "CLGN",
    "Name": "CollPlant Biotechnologies Ltd"
  },
  {
    "Symbol": "CLH",
    "Name": "Clean Harbors Inc."
  },
  {
    "Symbol": "CLIN",
    "Name": "Clean Earth Acquisitions "
  },
  {
    "Symbol": "CLINR",
    "Name": "Clean Earth Acquisitions Right"
  },
  {
    "Symbol": "CLINU",
    "Name": "Clean Earth Acquisitions Unit"
  },
  {
    "Symbol": "CLIR",
    "Name": "ClearSign Technologies Corporation"
  },
  {
    "Symbol": "CLM",
    "Name": "Cornerstone Strategic Value Fund Inc. New"
  },
  {
    "Symbol": "CLMT",
    "Name": "Calumet Specialty Products Partners L.P. Common Units"
  },
  {
    "Symbol": "CLNE",
    "Name": "Clean Energy Fuels"
  },
  {
    "Symbol": "CLNN",
    "Name": "Clene Inc."
  },
  {
    "Symbol": "CLOE",
    "Name": "Clover Leaf Capital "
  },
  {
    "Symbol": "CLOER",
    "Name": "Clover Leaf Capital Rights"
  },
  {
    "Symbol": "CLOEU",
    "Name": "Clover Leaf Capital Unit"
  },
  {
    "Symbol": "CLOV",
    "Name": "Clover Health Investments "
  },
  {
    "Symbol": "CLPR",
    "Name": "Clipper Realty Inc."
  },
  {
    "Symbol": "CLPS",
    "Name": "CLPS Incorporation"
  },
  {
    "Symbol": "CLPT",
    "Name": "ClearPoint Neuro Inc."
  },
  {
    "Symbol": "CLR",
    "Name": "Continental Resources Inc."
  },
  {
    "Symbol": "CLRB",
    "Name": "Cellectar Biosciences Inc."
  },
  {
    "Symbol": "CLRM",
    "Name": "Clarim Acquisition "
  },
  {
    "Symbol": "CLRMU",
    "Name": "Clarim Acquisition Unit"
  },
  {
    "Symbol": "CLRO",
    "Name": "ClearOne Inc. (DE)"
  },
  {
    "Symbol": "CLS",
    "Name": "Celestica Inc."
  },
  {
    "Symbol": "CLSD",
    "Name": "Clearside Biomedical Inc."
  },
  {
    "Symbol": "CLSK",
    "Name": "CleanSpark Inc."
  },
  {
    "Symbol": "CLSN",
    "Name": "Celsion Corporation"
  },
  {
    "Symbol": "CLST",
    "Name": "Catalyst Bancorp Inc."
  },
  {
    "Symbol": "CLVR",
    "Name": "Clever Leaves Holdings Inc."
  },
  {
    "Symbol": "CLVS",
    "Name": "Clovis Oncology Inc."
  },
  {
    "Symbol": "CLVT",
    "Name": "Clarivate Plc"
  },
  {
    "Symbol": "CLW",
    "Name": "Clearwater Paper Corporation"
  },
  {
    "Symbol": "CLWT",
    "Name": "Euro Tech Holdings Company Limited"
  },
  {
    "Symbol": "CLX",
    "Name": "Clorox Company (The)"
  },
  {
    "Symbol": "CLXT",
    "Name": "Calyxt Inc."
  },
  {
    "Symbol": "CM",
    "Name": "Canadian Imperial Bank of Commerce"
  },
  {
    "Symbol": "CMA",
    "Name": "Comerica Incorporated"
  },
  {
    "Symbol": "CMAX",
    "Name": "CareMax Inc. "
  },
  {
    "Symbol": "CMBM",
    "Name": "Cambium Networks Corporation"
  },
  {
    "Symbol": "CMC",
    "Name": "Commercial Metals Company"
  },
  {
    "Symbol": "CMCA",
    "Name": "Capitalworks Emerging Markets Acquisition Corp "
  },
  {
    "Symbol": "CMCL",
    "Name": "Caledonia Mining Corporation Plc"
  },
  {
    "Symbol": "CMCO",
    "Name": "Columbus McKinnon Corporation"
  },
  {
    "Symbol": "CMCSA",
    "Name": "Comcast Corporation "
  },
  {
    "Symbol": "CMCT",
    "Name": "Creative Media & Community Trust Corporation"
  },
  {
    "Symbol": "CMCTP",
    "Name": "Creative Media & Community Trust Corporation Series L Preferred Stock"
  },
  {
    "Symbol": "CME",
    "Name": "CME Group Inc. "
  },
  {
    "Symbol": "CMG",
    "Name": "Chipotle Mexican Grill Inc."
  },
  {
    "Symbol": "CMI",
    "Name": "Cummins Inc."
  },
  {
    "Symbol": "CMLS",
    "Name": "Cumulus Media Inc. "
  },
  {
    "Symbol": "CMP",
    "Name": "Compass Minerals Intl Inc"
  },
  {
    "Symbol": "CMPI",
    "Name": "Checkmate Pharmaceuticals Inc."
  },
  {
    "Symbol": "CMPO",
    "Name": "CompoSecure Inc. "
  },
  {
    "Symbol": "CMPR",
    "Name": "Cimpress plc  (Ireland)"
  },
  {
    "Symbol": "CMPS",
    "Name": "COMPASS Pathways Plc American Depository Shares"
  },
  {
    "Symbol": "CMPX",
    "Name": "Compass Therapeutics Inc."
  },
  {
    "Symbol": "CMRX",
    "Name": "Chimerix Inc."
  },
  {
    "Symbol": "CMS",
    "Name": "CMS Energy Corporation"
  },
  {
    "Symbol": "CMT",
    "Name": "Core Molding Technologies Inc"
  },
  {
    "Symbol": "CMTG",
    "Name": "Claros Mortgage Trust Inc."
  },
  {
    "Symbol": "CMTL",
    "Name": "Comtech Telecommunications"
  },
  {
    "Symbol": "CMU",
    "Name": "MFS Municipal Income Trust"
  },
  {
    "Symbol": "CNA",
    "Name": "CNA Financial Corporation"
  },
  {
    "Symbol": "CNC",
    "Name": "Centene Corporation"
  },
  {
    "Symbol": "CNCE",
    "Name": "Concert Pharmaceuticals Inc."
  },
  {
    "Symbol": "CND",
    "Name": "Concord Acquisition "
  },
  {
    "Symbol": "CNDT",
    "Name": "Conduent Incorporated"
  },
  {
    "Symbol": "CNET",
    "Name": "ZW Data Action Technologies Inc."
  },
  {
    "Symbol": "CNEY",
    "Name": "CN Energy Group Inc."
  },
  {
    "Symbol": "CNFR",
    "Name": "Conifer Holdings Inc."
  },
  {
    "Symbol": "CNGL",
    "Name": "Canna-Global Acquisition "
  },
  {
    "Symbol": "CNGLU",
    "Name": "Canna-Global Acquisition Corp Unit"
  },
  {
    "Symbol": "CNHI",
    "Name": "CNH Industrial N.V."
  },
  {
    "Symbol": "CNI",
    "Name": "Canadian National Railway Company"
  },
  {
    "Symbol": "CNK",
    "Name": "Cinemark Holdings Inc Cinemark Holdings Inc."
  },
  {
    "Symbol": "CNM",
    "Name": "Core & Main Inc. "
  },
  {
    "Symbol": "CNMD",
    "Name": "CONMED Corporation"
  },
  {
    "Symbol": "CNNB",
    "Name": "Cincinnati Bancorp Inc."
  },
  {
    "Symbol": "CNNE",
    "Name": "Cannae Holdings Inc."
  },
  {
    "Symbol": "CNO",
    "Name": "CNO Financial Group Inc."
  },
  {
    "Symbol": "CNOB",
    "Name": "ConnectOne Bancorp Inc."
  },
  {
    "Symbol": "CNP",
    "Name": "CenterPoint Energy Inc (Holding Co)"
  },
  {
    "Symbol": "CNQ",
    "Name": "Canadian Natural Resources Limited"
  },
  {
    "Symbol": "CNR",
    "Name": "Cornerstone Building Brands Inc."
  },
  {
    "Symbol": "CNS",
    "Name": "Cohen & Steers Inc"
  },
  {
    "Symbol": "CNSL",
    "Name": "Consolidated Communications Holdings Inc."
  },
  {
    "Symbol": "CNSP",
    "Name": "CNS Pharmaceuticals Inc."
  },
  {
    "Symbol": "CNTG",
    "Name": "Centogene N.V."
  },
  {
    "Symbol": "CNTQ",
    "Name": "Chardan NexTech Acquisition 2 "
  },
  {
    "Symbol": "CNTQU",
    "Name": "Chardan NexTech Acquisition 2 Unit"
  },
  {
    "Symbol": "CNTX",
    "Name": "Context Therapeutics Inc."
  },
  {
    "Symbol": "CNTY",
    "Name": "Century Casinos Inc."
  },
  {
    "Symbol": "CNVY",
    "Name": "Convey Health Solutions Holdings Inc."
  },
  {
    "Symbol": "CNX",
    "Name": "CNX Resources Corporation"
  },
  {
    "Symbol": "CNXC",
    "Name": "Concentrix Corporation"
  },
  {
    "Symbol": "CNXN",
    "Name": "PC Connection Inc."
  },
  {
    "Symbol": "CO",
    "Name": "Global Cord Blood Corporation"
  },
  {
    "Symbol": "COCO",
    "Name": "The Vita Coco Company Inc."
  },
  {
    "Symbol": "COCP",
    "Name": "Cocrystal Pharma Inc."
  },
  {
    "Symbol": "CODA",
    "Name": "Coda Octopus Group Inc."
  },
  {
    "Symbol": "CODX",
    "Name": "Co-Diagnostics Inc."
  },
  {
    "Symbol": "COF",
    "Name": "Capital One Financial Corporation"
  },
  {
    "Symbol": "COFS",
    "Name": "ChoiceOne Financial Services Inc."
  },
  {
    "Symbol": "COGT",
    "Name": "Cogent Biosciences Inc."
  },
  {
    "Symbol": "COHN",
    "Name": "Cohen & Company Inc."
  },
  {
    "Symbol": "COHR",
    "Name": "Coherent Inc."
  },
  {
    "Symbol": "COHU",
    "Name": "Cohu Inc."
  },
  {
    "Symbol": "COIN",
    "Name": "Coinbase Global Inc. "
  },
  {
    "Symbol": "COKE",
    "Name": "Coca-Cola Consolidated Inc."
  },
  {
    "Symbol": "COLB",
    "Name": "Columbia Banking System Inc."
  },
  {
    "Symbol": "COLD",
    "Name": "Americold Realty Trust"
  },
  {
    "Symbol": "COLI",
    "Name": "Colicity Inc. "
  },
  {
    "Symbol": "COLIU",
    "Name": "Colicity Inc. Units"
  },
  {
    "Symbol": "COLL",
    "Name": "Collegium Pharmaceutical Inc."
  },
  {
    "Symbol": "COLM",
    "Name": "Columbia Sportswear Company"
  },
  {
    "Symbol": "COMM",
    "Name": "CommScope Holding Company Inc."
  },
  {
    "Symbol": "COMP",
    "Name": "Compass Inc. "
  },
  {
    "Symbol": "COMS",
    "Name": "ComSovereign Holding"
  },
  {
    "Symbol": "CONN",
    "Name": "Conn's Inc."
  },
  {
    "Symbol": "CONX",
    "Name": "CONX "
  },
  {
    "Symbol": "CONXU",
    "Name": "CONX Unit"
  },
  {
    "Symbol": "COO",
    "Name": "The Cooper Companies Inc."
  },
  {
    "Symbol": "COOK",
    "Name": "Traeger Inc."
  },
  {
    "Symbol": "COOL",
    "Name": "Corner Growth Acquisition "
  },
  {
    "Symbol": "COOLU",
    "Name": "Corner Growth Acquisition Unit"
  },
  {
    "Symbol": "COOP",
    "Name": "Mr. Cooper Group Inc."
  },
  {
    "Symbol": "COP",
    "Name": "ConocoPhillips"
  },
  {
    "Symbol": "CORR",
    "Name": "CorEnergy Infrastructure Trust Inc."
  },
  {
    "Symbol": "CORS",
    "Name": "Corsair Partnering Corporation "
  },
  {
    "Symbol": "CORT",
    "Name": "Corcept Therapeutics Incorporated"
  },
  {
    "Symbol": "CORZ",
    "Name": "Core Scientific Inc."
  },
  {
    "Symbol": "COSM",
    "Name": "Cosmos Holdings Inc."
  },
  {
    "Symbol": "COST",
    "Name": "Costco Wholesale Corporation"
  },
  {
    "Symbol": "COTY",
    "Name": "Coty Inc. "
  },
  {
    "Symbol": "COUP",
    "Name": "Coupa Software Incorporated"
  },
  {
    "Symbol": "COUR",
    "Name": "Coursera Inc."
  },
  {
    "Symbol": "COVA",
    "Name": "COVA Acquisition  Ordinary Share"
  },
  {
    "Symbol": "COVAU",
    "Name": "COVA Acquisition Unit"
  },
  {
    "Symbol": "COWN",
    "Name": "Cowen Inc. "
  },
  {
    "Symbol": "CP",
    "Name": "Canadian Pacific Railway Limited"
  },
  {
    "Symbol": "CPA",
    "Name": "Copa Holdings S.A. Copa Holdings S.A. "
  },
  {
    "Symbol": "CPAQ",
    "Name": "Counter Press Acquisition Corporation  Ordinary Share"
  },
  {
    "Symbol": "CPAQU",
    "Name": "Counter Press Acquisition Corporation Unit"
  },
  {
    "Symbol": "CPAR",
    "Name": "Catalyst Partners Acquisition  Ordinary Share"
  },
  {
    "Symbol": "CPARU",
    "Name": "Catalyst Partners Acquisition Unit"
  },
  {
    "Symbol": "CPB",
    "Name": "Campbell Soup Company"
  },
  {
    "Symbol": "CPE",
    "Name": "Callon Petroleum Company"
  },
  {
    "Symbol": "CPF",
    "Name": "Central Pacific Financial Corp New"
  },
  {
    "Symbol": "CPG",
    "Name": "Crescent Point Energy Corporation  (Canada)"
  },
  {
    "Symbol": "CPHC",
    "Name": "Canterbury Park Holding Corporation 'New'"
  },
  {
    "Symbol": "CPHI",
    "Name": "China Pharma Holdings Inc."
  },
  {
    "Symbol": "CPIX",
    "Name": "Cumberland Pharmaceuticals Inc."
  },
  {
    "Symbol": "CPK",
    "Name": "Chesapeake Utilities Corporation"
  },
  {
    "Symbol": "CPLP",
    "Name": "Capital Product Partners L.P. Common Units"
  },
  {
    "Symbol": "CPNG",
    "Name": "Coupang Inc. "
  },
  {
    "Symbol": "CPOP",
    "Name": "Pop Culture Group Co. Ltd "
  },
  {
    "Symbol": "CPRI",
    "Name": "Capri Holdings Limited"
  },
  {
    "Symbol": "CPRT",
    "Name": "Copart Inc. (DE)"
  },
  {
    "Symbol": "CPRX",
    "Name": "Catalyst Pharmaceuticals Inc."
  },
  {
    "Symbol": "CPS",
    "Name": "Cooper-Standard Holdings Inc."
  },
  {
    "Symbol": "CPSH",
    "Name": "CPS Technologies"
  },
  {
    "Symbol": "CPSI",
    "Name": "Computer Programs and Systems Inc."
  },
  {
    "Symbol": "CPSS",
    "Name": "Consumer Portfolio Services Inc."
  },
  {
    "Symbol": "CPT",
    "Name": "Camden Property Trust"
  },
  {
    "Symbol": "CPTK",
    "Name": "Crown PropTech Acquisitions "
  },
  {
    "Symbol": "CPTN",
    "Name": "Cepton Inc."
  },
  {
    "Symbol": "CPUH",
    "Name": "Compute Health Acquisition "
  },
  {
    "Symbol": "CPZ",
    "Name": "Calamos Long/Short Equity & Dynamic Income Trust"
  },
  {
    "Symbol": "CQP",
    "Name": "Cheniere Energy Partners LP Cheniere Energy Partners LP Common Units"
  },
  {
    "Symbol": "CR",
    "Name": "Crane Co."
  },
  {
    "Symbol": "CRAI",
    "Name": "CRA International Inc."
  },
  {
    "Symbol": "CRBP",
    "Name": "Corbus Pharmaceuticals Holdings Inc."
  },
  {
    "Symbol": "CRBU",
    "Name": "Caribou Biosciences Inc."
  },
  {
    "Symbol": "CRC",
    "Name": "California Resources Corporation"
  },
  {
    "Symbol": "CRCT",
    "Name": "Cricut Inc. "
  },
  {
    "Symbol": "CRD/A",
    "Name": "Crawford & Company"
  },
  {
    "Symbol": "CRD/B",
    "Name": "Crawford & Company"
  },
  {
    "Symbol": "CRDF",
    "Name": "Cardiff Oncology Inc."
  },
  {
    "Symbol": "CRDL",
    "Name": "Cardiol Therapeutics Inc. "
  },
  {
    "Symbol": "CRDO",
    "Name": "Credo Technology Group Holding Ltd"
  },
  {
    "Symbol": "CREC",
    "Name": "Crescera Capital Acquisition Corp "
  },
  {
    "Symbol": "CRECU",
    "Name": "Crescera Capital Acquisition Corp Unit"
  },
  {
    "Symbol": "CREG",
    "Name": "Smart Powerr"
  },
  {
    "Symbol": "CREX",
    "Name": "Creative Realities Inc."
  },
  {
    "Symbol": "CRF",
    "Name": "Cornerstone Total Return Fund Inc. (The)"
  },
  {
    "Symbol": "CRGE",
    "Name": "Charge Enterprises Inc."
  },
  {
    "Symbol": "CRGY",
    "Name": "Crescent Energy Company "
  },
  {
    "Symbol": "CRHC",
    "Name": "Cohn Robbins Holdings "
  },
  {
    "Symbol": "CRI",
    "Name": "Carter's Inc."
  },
  {
    "Symbol": "CRIS",
    "Name": "Curis Inc."
  },
  {
    "Symbol": "CRK",
    "Name": "Comstock Resources Inc."
  },
  {
    "Symbol": "CRKN",
    "Name": "Crown Electrokinetics"
  },
  {
    "Symbol": "CRL",
    "Name": "Charles River Laboratories International Inc."
  },
  {
    "Symbol": "CRM",
    "Name": "Salesforce Inc."
  },
  {
    "Symbol": "CRMD",
    "Name": "CorMedix Inc."
  },
  {
    "Symbol": "CRMT",
    "Name": "America's Car-Mart Inc"
  },
  {
    "Symbol": "CRNC",
    "Name": "Cerence Inc."
  },
  {
    "Symbol": "CRNT",
    "Name": "Ceragon Networks Ltd."
  },
  {
    "Symbol": "CRNX",
    "Name": "Crinetics Pharmaceuticals Inc."
  },
  {
    "Symbol": "CRON",
    "Name": "Cronos Group Inc. Common Share"
  },
  {
    "Symbol": "CROX",
    "Name": "Crocs Inc."
  },
  {
    "Symbol": "CRS",
    "Name": "Carpenter Technology Corporation"
  },
  {
    "Symbol": "CRSP",
    "Name": "CRISPR Therapeutics AG"
  },
  {
    "Symbol": "CRSR",
    "Name": "Corsair Gaming Inc."
  },
  {
    "Symbol": "CRT",
    "Name": "Cross Timbers Royalty Trust"
  },
  {
    "Symbol": "CRTD",
    "Name": "Creatd Inc."
  },
  {
    "Symbol": "CRTX",
    "Name": "Cortexyme Inc."
  },
  {
    "Symbol": "CRU",
    "Name": "Crucible Acquisition Corporation "
  },
  {
    "Symbol": "CRUS",
    "Name": "Cirrus Logic Inc."
  },
  {
    "Symbol": "CRVL",
    "Name": "CorVel"
  },
  {
    "Symbol": "CRVS",
    "Name": "Corvus Pharmaceuticals Inc."
  },
  {
    "Symbol": "CRWD",
    "Name": "CrowdStrike Holdings Inc. "
  },
  {
    "Symbol": "CRWS",
    "Name": "Crown Crafts Inc"
  },
  {
    "Symbol": "CRXT",
    "Name": "Clarus Therapeutics Holdings Inc."
  },
  {
    "Symbol": "CRZN",
    "Name": "Corazon Capital V838 Monoceros Corp "
  },
  {
    "Symbol": "CRZNU",
    "Name": "Corazon Capital V838 Monoceros Corp Unit"
  },
  {
    "Symbol": "CSAN",
    "Name": "Cosan S.A. ADS"
  },
  {
    "Symbol": "CSBR",
    "Name": "Champions Oncology Inc."
  },
  {
    "Symbol": "CSCO",
    "Name": "Cisco Systems Inc.  (DE)"
  },
  {
    "Symbol": "CSCW",
    "Name": "Color Star Technology Co. Ltd."
  },
  {
    "Symbol": "CSGP",
    "Name": "CoStar Group Inc."
  },
  {
    "Symbol": "CSGS",
    "Name": "CSG Systems International Inc."
  },
  {
    "Symbol": "CSIQ",
    "Name": "Canadian Solar Inc.  (BC)"
  },
  {
    "Symbol": "CSL",
    "Name": "Carlisle Companies Incorporated"
  },
  {
    "Symbol": "CSLM",
    "Name": "Consilium Acquisition Corp I Ltd.  Ordinary Share"
  },
  {
    "Symbol": "CSPI",
    "Name": "CSP Inc."
  },
  {
    "Symbol": "CSQ",
    "Name": "Calamos Strategic Total Return"
  },
  {
    "Symbol": "CSR",
    "Name": "D/B/A Centerspace"
  },
  {
    "Symbol": "CSSE",
    "Name": "Chicken Soup for the Soul Entertainment Inc. "
  },
  {
    "Symbol": "CSTA",
    "Name": "Constellation Acquisition Corp I "
  },
  {
    "Symbol": "CSTE",
    "Name": "Caesarstone Ltd."
  },
  {
    "Symbol": "CSTL",
    "Name": "Castle Biosciences Inc."
  },
  {
    "Symbol": "CSTM",
    "Name": "Constellium SE  (France)"
  },
  {
    "Symbol": "CSTR",
    "Name": "CapStar Financial Holdings Inc."
  },
  {
    "Symbol": "CSV",
    "Name": "Carriage Services Inc."
  },
  {
    "Symbol": "CSWC",
    "Name": "Capital Southwest Corporation"
  },
  {
    "Symbol": "CSWI",
    "Name": "CSW Industrials Inc."
  },
  {
    "Symbol": "CSX",
    "Name": "CSX Corporation"
  },
  {
    "Symbol": "CTAS",
    "Name": "Cintas Corporation"
  },
  {
    "Symbol": "CTBI",
    "Name": "Community Trust Bancorp Inc."
  },
  {
    "Symbol": "CTEK",
    "Name": "CynergisTek Inc."
  },
  {
    "Symbol": "CTG",
    "Name": "Computer Task Group Inc."
  },
  {
    "Symbol": "CTGO",
    "Name": "Contango ORE Inc."
  },
  {
    "Symbol": "CTHR",
    "Name": "Charles & Colvard Ltd"
  },
  {
    "Symbol": "CTIB",
    "Name": "Yunhong CTI Ltd."
  },
  {
    "Symbol": "CTIC",
    "Name": "CTI BioPharma (DE)"
  },
  {
    "Symbol": "CTKB",
    "Name": "Cytek Biosciences Inc."
  },
  {
    "Symbol": "CTLP",
    "Name": "Cantaloupe Inc."
  },
  {
    "Symbol": "CTLT",
    "Name": "Catalent Inc."
  },
  {
    "Symbol": "CTMX",
    "Name": "CytomX Therapeutics Inc."
  },
  {
    "Symbol": "CTO",
    "Name": "CTO Realty Growth Inc."
  },
  {
    "Symbol": "CTOS",
    "Name": "Custom Truck One Source Inc."
  },
  {
    "Symbol": "CTR",
    "Name": "ClearBridge MLP and Midstream Total Return Fund Inc."
  },
  {
    "Symbol": "CTRA",
    "Name": "Coterra Energy Inc."
  },
  {
    "Symbol": "CTRE",
    "Name": "CareTrust REIT Inc."
  },
  {
    "Symbol": "CTRM",
    "Name": "Castor Maritime Inc."
  },
  {
    "Symbol": "CTRN",
    "Name": "Citi Trends Inc."
  },
  {
    "Symbol": "CTS",
    "Name": "CTS Corporation"
  },
  {
    "Symbol": "CTSH",
    "Name": "Cognizant Technology Solutions Corporation "
  },
  {
    "Symbol": "CTSO",
    "Name": "Cytosorbents Corporation"
  },
  {
    "Symbol": "CTT",
    "Name": "CatchMark Timber Trust Inc. "
  },
  {
    "Symbol": "CTV",
    "Name": "Innovid"
  },
  {
    "Symbol": "CTVA",
    "Name": "Corteva Inc."
  },
  {
    "Symbol": "CTXR",
    "Name": "Citius Pharmaceuticals Inc."
  },
  {
    "Symbol": "CTXS",
    "Name": "Citrix Systems Inc."
  },
  {
    "Symbol": "CUBA",
    "Name": "Herzfeld Caribbean Basin Fund Inc. (The)"
  },
  {
    "Symbol": "CUBE",
    "Name": "CubeSmart"
  },
  {
    "Symbol": "CUBI",
    "Name": "Customers Bancorp Inc"
  },
  {
    "Symbol": "CUE",
    "Name": "Cue Biopharma Inc."
  },
  {
    "Symbol": "CUEN",
    "Name": "Cuentas Inc."
  },
  {
    "Symbol": "CUK",
    "Name": "Carnival Plc ADS ADS"
  },
  {
    "Symbol": "CULL",
    "Name": "Cullman Bancorp Inc."
  },
  {
    "Symbol": "CULP",
    "Name": "Culp Inc."
  },
  {
    "Symbol": "CURI",
    "Name": "CuriosityStream Inc. "
  },
  {
    "Symbol": "CURO",
    "Name": "CURO Group Holdings"
  },
  {
    "Symbol": "CURV",
    "Name": "Torrid Holdings Inc."
  },
  {
    "Symbol": "CUTR",
    "Name": "Cutera Inc."
  },
  {
    "Symbol": "CUZ",
    "Name": "Cousins Properties Incorporated"
  },
  {
    "Symbol": "CVAC",
    "Name": "CureVac N.V."
  },
  {
    "Symbol": "CVBF",
    "Name": "CVB Financial Corporation"
  },
  {
    "Symbol": "CVCO",
    "Name": "Cavco Industries Inc.  When Issued"
  },
  {
    "Symbol": "CVCY",
    "Name": "Central Valley Community Bancorp"
  },
  {
    "Symbol": "CVE",
    "Name": "Cenovus Energy Inc"
  },
  {
    "Symbol": "CVEO",
    "Name": "Civeo Corporation (Canada)"
  },
  {
    "Symbol": "CVET",
    "Name": "Covetrus Inc."
  },
  {
    "Symbol": "CVGI",
    "Name": "Commercial Vehicle Group Inc."
  },
  {
    "Symbol": "CVGW",
    "Name": "Calavo Growers Inc."
  },
  {
    "Symbol": "CVI",
    "Name": "CVR Energy Inc."
  },
  {
    "Symbol": "CVLG",
    "Name": "Covenant Logistics Group Inc. "
  },
  {
    "Symbol": "CVLT",
    "Name": "Commvault Systems Inc."
  },
  {
    "Symbol": "CVLY",
    "Name": "Codorus Valley Bancorp Inc"
  },
  {
    "Symbol": "CVM",
    "Name": "Cel-Sci Corporation"
  },
  {
    "Symbol": "CVNA",
    "Name": "Carvana Co. "
  },
  {
    "Symbol": "CVR",
    "Name": "Chicago Rivet & Machine Co."
  },
  {
    "Symbol": "CVRX",
    "Name": "CVRx Inc."
  },
  {
    "Symbol": "CVS",
    "Name": "CVS Health Corporation"
  },
  {
    "Symbol": "CVT",
    "Name": "Cvent Holding"
  },
  {
    "Symbol": "CVU",
    "Name": "CPI Aerostructures Inc."
  },
  {
    "Symbol": "CVV",
    "Name": "CVD Equipment Corporation"
  },
  {
    "Symbol": "CVX",
    "Name": "Chevron Corporation"
  },
  {
    "Symbol": "CW",
    "Name": "Curtiss-Wright Corporation"
  },
  {
    "Symbol": "CWAN",
    "Name": "Clearwater Analytics Holdings Inc. "
  },
  {
    "Symbol": "CWBC",
    "Name": "Community West Bancshares"
  },
  {
    "Symbol": "CWBR",
    "Name": "CohBar Inc."
  },
  {
    "Symbol": "CWCO",
    "Name": "Consolidated Water Co. Ltd."
  },
  {
    "Symbol": "CWEN",
    "Name": "Clearway Energy Inc. Class C"
  },
  {
    "Symbol": "CWH",
    "Name": "Camping World Holdings Inc.  Commom Stock"
  },
  {
    "Symbol": "CWK",
    "Name": "Cushman & Wakefield plc"
  },
  {
    "Symbol": "CWST",
    "Name": "Casella Waste Systems Inc. "
  },
  {
    "Symbol": "CWT",
    "Name": "California Water Service Group"
  },
  {
    "Symbol": "CX",
    "Name": "Cemex S.A.B. de C.V. Sponsored ADR"
  },
  {
    "Symbol": "CXAC",
    "Name": "C5 Acquisition Corporation "
  },
  {
    "Symbol": "CXDO",
    "Name": "Crexendo Inc."
  },
  {
    "Symbol": "CXE",
    "Name": "MFS High Income Municipal Trust"
  },
  {
    "Symbol": "CXH",
    "Name": "MFS Investment Grade Municipal Trust"
  },
  {
    "Symbol": "CXM",
    "Name": "Sprinklr Inc. "
  },
  {
    "Symbol": "CXW",
    "Name": "CoreCivic Inc."
  },
  {
    "Symbol": "CYAN",
    "Name": "Cyanotech Corporation"
  },
  {
    "Symbol": "CYBE",
    "Name": "CyberOptics Corporation"
  },
  {
    "Symbol": "CYBN",
    "Name": "Cybin Inc."
  },
  {
    "Symbol": "CYBR",
    "Name": "CyberArk Software Ltd."
  },
  {
    "Symbol": "CYCC",
    "Name": "Cyclacel Pharmaceuticals Inc."
  },
  {
    "Symbol": "CYCN",
    "Name": "Cyclerion Therapeutics Inc."
  },
  {
    "Symbol": "CYD",
    "Name": "China Yuchai International Limited"
  },
  {
    "Symbol": "CYH",
    "Name": "Community Health Systems Inc."
  },
  {
    "Symbol": "CYN",
    "Name": "Cyngn Inc."
  },
  {
    "Symbol": "CYRN",
    "Name": "CYREN Ltd."
  },
  {
    "Symbol": "CYRX",
    "Name": "CryoPort Inc."
  },
  {
    "Symbol": "CYT",
    "Name": "Cyteir Therapeutics Inc."
  },
  {
    "Symbol": "CYTH",
    "Name": "Cyclo Therapeutics Inc."
  },
  {
    "Symbol": "CYTK",
    "Name": "Cytokinetics Incorporated"
  },
  {
    "Symbol": "CYTO",
    "Name": "Altamira Therapeutics Ltd.  0.01 SF (Bermuda)"
  },
  {
    "Symbol": "CYXT",
    "Name": "Cyxtera Technologies Inc. "
  },
  {
    "Symbol": "CZNC",
    "Name": "Citizens & Northern Corp"
  },
  {
    "Symbol": "CZOO",
    "Name": "Cazoo Group Ltd "
  },
  {
    "Symbol": "CZR",
    "Name": "Caesars Entertainment Inc."
  },
  {
    "Symbol": "CZWI",
    "Name": "Citizens Community Bancorp Inc."
  },
  {
    "Symbol": "D",
    "Name": "Dominion Energy Inc."
  },
  {
    "Symbol": "DAC",
    "Name": "Danaos Corporation"
  },
  {
    "Symbol": "DAIO",
    "Name": "Data I/O Corporation"
  },
  {
    "Symbol": "DAKT",
    "Name": "Daktronics Inc."
  },
  {
    "Symbol": "DAL",
    "Name": "Delta Air Lines Inc."
  },
  {
    "Symbol": "DALN",
    "Name": "DallasNews Corporation Series A"
  },
  {
    "Symbol": "DALS",
    "Name": "DA32 Life Science Tech Acquisition "
  },
  {
    "Symbol": "DAN",
    "Name": "Dana Incorporated"
  },
  {
    "Symbol": "DAOO",
    "Name": "Crypto 1 Acquisition Corp "
  },
  {
    "Symbol": "DAOOU",
    "Name": "Crypto 1 Acquisition Corp Unit"
  },
  {
    "Symbol": "DAR",
    "Name": "Darling Ingredients Inc."
  },
  {
    "Symbol": "DARE",
    "Name": "Dare Bioscience Inc."
  },
  {
    "Symbol": "DASH",
    "Name": "DoorDash Inc. "
  },
  {
    "Symbol": "DATS",
    "Name": "DatChat Inc."
  },
  {
    "Symbol": "DAVE",
    "Name": "Dave Inc. "
  },
  {
    "Symbol": "DAWN",
    "Name": "Day One Biopharmaceuticals Inc."
  },
  {
    "Symbol": "DB",
    "Name": "Deutsche Bank AG"
  },
  {
    "Symbol": "DBD",
    "Name": "Diebold Nixdorf Incorporated"
  },
  {
    "Symbol": "DBGI",
    "Name": "Digital Brands Group Inc."
  },
  {
    "Symbol": "DBI",
    "Name": "Designer Brands Inc. "
  },
  {
    "Symbol": "DBRG",
    "Name": "DigitalBridge Group Inc."
  },
  {
    "Symbol": "DBTX",
    "Name": "Decibel Therapeutics Inc."
  },
  {
    "Symbol": "DBX",
    "Name": "Dropbox Inc. "
  },
  {
    "Symbol": "DC",
    "Name": "Dakota Gold"
  },
  {
    "Symbol": "DCBO",
    "Name": "Docebo Inc."
  },
  {
    "Symbol": "DCF",
    "Name": "BNY Mellon Alcentra Global Credit Income 2024 Target Term Fund Inc."
  },
  {
    "Symbol": "DCFC",
    "Name": "Tritium DCFC Limited"
  },
  {
    "Symbol": "DCGO",
    "Name": "DocGo Inc."
  },
  {
    "Symbol": "DCI",
    "Name": "Donaldson Company Inc."
  },
  {
    "Symbol": "DCO",
    "Name": "Ducommun Incorporated"
  },
  {
    "Symbol": "DCOM",
    "Name": "Dime Community Bancshares Inc."
  },
  {
    "Symbol": "DCOMP",
    "Name": "Dime Community Bancshares Inc. Fixed-Rate Non-Cumulative Perpetual Preferred Stock Series A"
  },
  {
    "Symbol": "DCP",
    "Name": "DCP Midstream  LP Common Units"
  },
  {
    "Symbol": "DCPH",
    "Name": "Deciphera Pharmaceuticals Inc."
  },
  {
    "Symbol": "DCRD",
    "Name": "Decarbonization Plus Acquisition Corporation IV  Ordinary Share"
  },
  {
    "Symbol": "DCRDU",
    "Name": "Decarbonization Plus Acquisition Corporation IV Unit"
  },
  {
    "Symbol": "DCT",
    "Name": "Duck Creek Technologies Inc."
  },
  {
    "Symbol": "DCTH",
    "Name": "Delcath Systems Inc."
  },
  {
    "Symbol": "DCUE",
    "Name": "Dominion Energy Inc. 2019 Series A Corporate Units"
  },
  {
    "Symbol": "DD",
    "Name": "DuPont de Nemours Inc."
  },
  {
    "Symbol": "DDD",
    "Name": "3D Systems Corporation"
  },
  {
    "Symbol": "DDF",
    "Name": "Delaware Investments Dividend & Income Fund Inc."
  },
  {
    "Symbol": "DDI",
    "Name": "DoubleDown Interactive Co. Ltd. American Depository Shares"
  },
  {
    "Symbol": "DDOG",
    "Name": "Datadog Inc. "
  },
  {
    "Symbol": "DDS",
    "Name": "Dillard's Inc."
  },
  {
    "Symbol": "DDT",
    "Name": "Dillard's Capital Trust I"
  },
  {
    "Symbol": "DE",
    "Name": "Deere & Company"
  },
  {
    "Symbol": "DEA",
    "Name": "Easterly Government Properties Inc."
  },
  {
    "Symbol": "DECAU",
    "Name": "Denali Capital Acquisition Unit"
  },
  {
    "Symbol": "DECK",
    "Name": "Deckers Outdoor Corporation"
  },
  {
    "Symbol": "DEI",
    "Name": "Douglas Emmett Inc."
  },
  {
    "Symbol": "DELL",
    "Name": "Dell Technologies Inc. Class C"
  },
  {
    "Symbol": "DEN",
    "Name": "Denbury Inc."
  },
  {
    "Symbol": "DENN",
    "Name": "Denny's Corporation"
  },
  {
    "Symbol": "DEO",
    "Name": "Diageo plc"
  },
  {
    "Symbol": "DERM",
    "Name": "Journey Medical Corporation"
  },
  {
    "Symbol": "DESP",
    "Name": "Despegar.com"
  },
  {
    "Symbol": "DFFN",
    "Name": "Diffusion Pharmaceuticals Inc."
  },
  {
    "Symbol": "DFH",
    "Name": "Dream Finders Homes Inc. "
  },
  {
    "Symbol": "DFIN",
    "Name": "Donnelley Financial Solutions Inc."
  },
  {
    "Symbol": "DFP",
    "Name": "Flaherty & Crumrine Dynamic Preferred and Income Fund Inc."
  },
  {
    "Symbol": "DFS",
    "Name": "Discover Financial Services"
  },
  {
    "Symbol": "DG",
    "Name": "Dollar General Corporation"
  },
  {
    "Symbol": "DGHI",
    "Name": "Digihost Technology Inc. Common Subordinate Voting Shares"
  },
  {
    "Symbol": "DGICA",
    "Name": "Donegal Group Inc. "
  },
  {
    "Symbol": "DGICB",
    "Name": "Donegal Group Inc. Class B"
  },
  {
    "Symbol": "DGLY",
    "Name": "Digital Ally Inc."
  },
  {
    "Symbol": "DGX",
    "Name": "Quest Diagnostics Incorporated"
  },
  {
    "Symbol": "DH",
    "Name": "Definitive Healthcare "
  },
  {
    "Symbol": "DHAC",
    "Name": "Digital Health Acquisition"
  },
  {
    "Symbol": "DHACU",
    "Name": "Digital Health Acquisition Unit"
  },
  {
    "Symbol": "DHBC",
    "Name": "DHB Capital "
  },
  {
    "Symbol": "DHBCU",
    "Name": "DHB Capital Unit"
  },
  {
    "Symbol": "DHCA",
    "Name": "DHC Acquisition  ordinary share"
  },
  {
    "Symbol": "DHCAU",
    "Name": "DHC Acquisition Unit"
  },
  {
    "Symbol": "DHF",
    "Name": "BNY Mellon High Yield Strategies Fund"
  },
  {
    "Symbol": "DHHC",
    "Name": "DiamondHead Holdings "
  },
  {
    "Symbol": "DHHCU",
    "Name": "DiamondHead Holdings Unit"
  },
  {
    "Symbol": "DHI",
    "Name": "D.R. Horton Inc."
  },
  {
    "Symbol": "DHIL",
    "Name": "Diamond Hill Investment Group Inc. "
  },
  {
    "Symbol": "DHR",
    "Name": "Danaher Corporation"
  },
  {
    "Symbol": "DHT",
    "Name": "DHT Holdings Inc."
  },
  {
    "Symbol": "DHX",
    "Name": "DHI Group Inc."
  },
  {
    "Symbol": "DHY",
    "Name": "Credit Suisse High Yield Bond Fund"
  },
  {
    "Symbol": "DIBS",
    "Name": "1stdibs.com Inc."
  },
  {
    "Symbol": "DICE",
    "Name": "DICE Therapeutics Inc."
  },
  {
    "Symbol": "DIN",
    "Name": "Dine Brands Global Inc."
  },
  {
    "Symbol": "DINO",
    "Name": "HF Sinclair Corporation"
  },
  {
    "Symbol": "DIOD",
    "Name": "Diodes Incorporated"
  },
  {
    "Symbol": "DIS",
    "Name": "Walt Disney Company (The)"
  },
  {
    "Symbol": "DISA",
    "Name": "Disruptive Acquisition Corporation I "
  },
  {
    "Symbol": "DISH",
    "Name": "DISH Network Corporation "
  },
  {
    "Symbol": "DIT",
    "Name": "AMCON Distributing Company"
  },
  {
    "Symbol": "DJCO",
    "Name": "Daily Journal (S.C.)"
  },
  {
    "Symbol": "DK",
    "Name": "Delek US Holdings Inc."
  },
  {
    "Symbol": "DKDCA",
    "Name": "Data Knights Acquisition "
  },
  {
    "Symbol": "DKL",
    "Name": "Delek Logistics Partners L.P. Common Units representing Limited Partner Interests"
  },
  {
    "Symbol": "DKNG",
    "Name": "DraftKings Inc. "
  },
  {
    "Symbol": "DKS",
    "Name": "Dick's Sporting Goods Inc"
  },
  {
    "Symbol": "DLA",
    "Name": "Delta Apparel Inc."
  },
  {
    "Symbol": "DLB",
    "Name": "Dolby Laboratories"
  },
  {
    "Symbol": "DLCA",
    "Name": "Deep Lake Capital Acquisition "
  },
  {
    "Symbol": "DLCAU",
    "Name": "Deep Lake Capital Acquisition Unit"
  },
  {
    "Symbol": "DLHC",
    "Name": "DLH Holdings Corp."
  },
  {
    "Symbol": "DLNG",
    "Name": "Dynagas LNG Partners LP Common Units"
  },
  {
    "Symbol": "DLO",
    "Name": "DLocal Limited "
  },
  {
    "Symbol": "DLPN",
    "Name": "Dolphin Entertainment Inc."
  },
  {
    "Symbol": "DLR",
    "Name": "Digital Realty Trust Inc."
  },
  {
    "Symbol": "DLTH",
    "Name": "Duluth Holdings Inc. Class B"
  },
  {
    "Symbol": "DLTR",
    "Name": "Dollar Tree Inc."
  },
  {
    "Symbol": "DLX",
    "Name": "Deluxe Corporation"
  },
  {
    "Symbol": "DM",
    "Name": "Desktop Metal Inc. "
  },
  {
    "Symbol": "DMA",
    "Name": "Destra Multi-Alternative Fund"
  },
  {
    "Symbol": "DMAC",
    "Name": "DiaMedica Therapeutics Inc."
  },
  {
    "Symbol": "DMAQ",
    "Name": "Deep Medicine Acquisition "
  },
  {
    "Symbol": "DMAQR",
    "Name": "Deep Medicine Acquisition Rights"
  },
  {
    "Symbol": "DMB",
    "Name": "BNY Mellon Municipal Bond Infrastructure Fund Inc."
  },
  {
    "Symbol": "DMF",
    "Name": "BNY Mellon Municipal Income Inc."
  },
  {
    "Symbol": "DMLP",
    "Name": "Dorchester Minerals L.P. Common Units Representing Limited Partnership Interests"
  },
  {
    "Symbol": "DMO",
    "Name": "Western Asset Mortgage Opportunity Fund Inc."
  },
  {
    "Symbol": "DMRC",
    "Name": "Digimarc Corporation"
  },
  {
    "Symbol": "DMS",
    "Name": "Digital Media Solutions Inc. "
  },
  {
    "Symbol": "DMTK",
    "Name": "DermTech Inc."
  },
  {
    "Symbol": "DMYS",
    "Name": "dMY Technology Group Inc. VI "
  },
  {
    "Symbol": "DNA",
    "Name": "Ginkgo Bioworks Holdings Inc. "
  },
  {
    "Symbol": "DNAA",
    "Name": "Social Capital Suvretta Holdings I  Ordinary Share"
  },
  {
    "Symbol": "DNAD",
    "Name": "Social Capital Suvretta Holdings IV "
  },
  {
    "Symbol": "DNAY",
    "Name": "Codex DNA Inc."
  },
  {
    "Symbol": "DNB",
    "Name": "Dun & Bradstreet Holdings Inc."
  },
  {
    "Symbol": "DNLI",
    "Name": "Denali Therapeutics Inc."
  },
  {
    "Symbol": "DNMR",
    "Name": "Danimer Scientific Inc."
  },
  {
    "Symbol": "DNN",
    "Name": "Denison Mines Corp  (Canada)"
  },
  {
    "Symbol": "DNOW",
    "Name": "NOW Inc."
  },
  {
    "Symbol": "DNP",
    "Name": "DNP Select Income Fund Inc."
  },
  {
    "Symbol": "DNUT",
    "Name": "Krispy Kreme Inc."
  },
  {
    "Symbol": "DNZ",
    "Name": "D and Z Media Acquisition "
  },
  {
    "Symbol": "DO",
    "Name": "Diamond Offshore Drilling Inc."
  },
  {
    "Symbol": "DOCN",
    "Name": "DigitalOcean Holdings Inc."
  },
  {
    "Symbol": "DOCS",
    "Name": "Doximity Inc. "
  },
  {
    "Symbol": "DOCU",
    "Name": "DocuSign Inc."
  },
  {
    "Symbol": "DOGZ",
    "Name": "Dogness (International) Corporation "
  },
  {
    "Symbol": "DOLE",
    "Name": "Dole plc"
  },
  {
    "Symbol": "DOMA",
    "Name": "Doma Holdings Inc."
  },
  {
    "Symbol": "DOMO",
    "Name": "Domo Inc. Class B"
  },
  {
    "Symbol": "DOOO",
    "Name": "BRP Inc. (Recreational Products) Common Subordinate Voting Shares"
  },
  {
    "Symbol": "DOOR",
    "Name": "Masonite International Corporation  (Canada)"
  },
  {
    "Symbol": "DORM",
    "Name": "Dorman Products Inc."
  },
  {
    "Symbol": "DOUG",
    "Name": "Douglas Elliman Inc."
  },
  {
    "Symbol": "DOV",
    "Name": "Dover Corporation"
  },
  {
    "Symbol": "DOW",
    "Name": "Dow Inc."
  },
  {
    "Symbol": "DOX",
    "Name": "Amdocs Limited"
  },
  {
    "Symbol": "DOYU",
    "Name": "DouYu International Holdings Limited ADS"
  },
  {
    "Symbol": "DPCS",
    "Name": "DP Cap Acquisition Corp I "
  },
  {
    "Symbol": "DPCSU",
    "Name": "DP Cap Acquisition Corp I Unit"
  },
  {
    "Symbol": "DPG",
    "Name": "Duff & Phelps Utility and Infrastructure Fund Inc."
  },
  {
    "Symbol": "DPRO",
    "Name": "Draganfly Inc."
  },
  {
    "Symbol": "DPZ",
    "Name": "Domino's Pizza Inc"
  },
  {
    "Symbol": "DRAY",
    "Name": "Macondray Capital Acquisition I "
  },
  {
    "Symbol": "DRCT",
    "Name": "Direct Digital Holdings Inc. "
  },
  {
    "Symbol": "DRE",
    "Name": "Duke Realty Corporation"
  },
  {
    "Symbol": "DRH",
    "Name": "Diamondrock Hospitality Company"
  },
  {
    "Symbol": "DRI",
    "Name": "Darden Restaurants Inc."
  },
  {
    "Symbol": "DRIO",
    "Name": "DarioHealth"
  },
  {
    "Symbol": "DRMA",
    "Name": "Dermata Therapeutics Inc."
  },
  {
    "Symbol": "DRQ",
    "Name": "Dril-Quip Inc."
  },
  {
    "Symbol": "DRRX",
    "Name": "DURECT Corporation"
  },
  {
    "Symbol": "DRTS",
    "Name": "Alpha Tau Medical Ltd."
  },
  {
    "Symbol": "DRTT",
    "Name": "DIRTT Environmental Solutions Ltd."
  },
  {
    "Symbol": "DRUG",
    "Name": "Bright Minds Biosciences Inc."
  },
  {
    "Symbol": "DRVN",
    "Name": "Driven Brands Holdings Inc."
  },
  {
    "Symbol": "DS",
    "Name": "Drive Shack Inc."
  },
  {
    "Symbol": "DSAC",
    "Name": "Duddell Street Acquisition "
  },
  {
    "Symbol": "DSAQ",
    "Name": "Direct Selling Acquisition "
  },
  {
    "Symbol": "DSEY",
    "Name": "Diversey Holdings Ltd."
  },
  {
    "Symbol": "DSGN",
    "Name": "Design Therapeutics Inc."
  },
  {
    "Symbol": "DSGX",
    "Name": "Descartes Systems Group Inc. (The)"
  },
  {
    "Symbol": "DSKE",
    "Name": "Daseke Inc."
  },
  {
    "Symbol": "DSM",
    "Name": "BNY Mellon Strategic Municipal Bond Fund Inc."
  },
  {
    "Symbol": "DSP",
    "Name": "Viant Technology Inc. "
  },
  {
    "Symbol": "DSS",
    "Name": "DSS Inc."
  },
  {
    "Symbol": "DSU",
    "Name": "Blackrock Debt Strategies Fund Inc."
  },
  {
    "Symbol": "DSWL",
    "Name": "Deswell Industries Inc."
  },
  {
    "Symbol": "DSX",
    "Name": "Diana Shipping inc."
  },
  {
    "Symbol": "DT",
    "Name": "Dynatrace Inc."
  },
  {
    "Symbol": "DTC",
    "Name": "Solo Brands Inc. "
  },
  {
    "Symbol": "DTE",
    "Name": "DTE Energy Company"
  },
  {
    "Symbol": "DTEA",
    "Name": "DAVIDsTEA Inc."
  },
  {
    "Symbol": "DTF",
    "Name": "DTF Tax-Free Income 2028 Term Fund Inc."
  },
  {
    "Symbol": "DTIL",
    "Name": "Precision BioSciences Inc."
  },
  {
    "Symbol": "DTM",
    "Name": "DT Midstream Inc."
  },
  {
    "Symbol": "DTOC",
    "Name": "Digital Transformation Opportunities "
  },
  {
    "Symbol": "DTRT",
    "Name": "DTRT Health Acquisition "
  },
  {
    "Symbol": "DTSS",
    "Name": "Datasea Inc."
  },
  {
    "Symbol": "DTST",
    "Name": "Data Storage Corporation"
  },
  {
    "Symbol": "DUET",
    "Name": "DUET Acquisition "
  },
  {
    "Symbol": "DUETU",
    "Name": "DUET Acquisition Unit"
  },
  {
    "Symbol": "DUK",
    "Name": "Duke Energy Corporation (Holding Company)"
  },
  {
    "Symbol": "DUNE",
    "Name": "Dune Acquisition Corporation "
  },
  {
    "Symbol": "DUNEU",
    "Name": "Dune Acquisition Corporation Unit"
  },
  {
    "Symbol": "DUOL",
    "Name": "Duolingo Inc. "
  },
  {
    "Symbol": "DUOT",
    "Name": "Duos Technologies Group Inc."
  },
  {
    "Symbol": "DV",
    "Name": "DoubleVerify Holdings Inc."
  },
  {
    "Symbol": "DVA",
    "Name": "DaVita Inc."
  },
  {
    "Symbol": "DVAX",
    "Name": "Dynavax Technologies Corporation"
  },
  {
    "Symbol": "DVN",
    "Name": "Devon Energy Corporation"
  },
  {
    "Symbol": "DWAC",
    "Name": "Digital World Acquisition "
  },
  {
    "Symbol": "DWACU",
    "Name": "Digital World Acquisition Units"
  },
  {
    "Symbol": "DWIN",
    "Name": "Delwinds Insurance Acquisition "
  },
  {
    "Symbol": "DWSN",
    "Name": "Dawson Geophysical Company"
  },
  {
    "Symbol": "DX",
    "Name": "Dynex Capital Inc."
  },
  {
    "Symbol": "DXC",
    "Name": "DXC Technology Company"
  },
  {
    "Symbol": "DXCM",
    "Name": "DexCom Inc."
  },
  {
    "Symbol": "DXLG",
    "Name": "Destination XL Group Inc."
  },
  {
    "Symbol": "DXPE",
    "Name": "DXP Enterprises Inc."
  },
  {
    "Symbol": "DXR",
    "Name": "Daxor Corporation"
  },
  {
    "Symbol": "DXYN",
    "Name": "Dixie Group Inc. (The)"
  },
  {
    "Symbol": "DY",
    "Name": "Dycom Industries Inc."
  },
  {
    "Symbol": "DYAI",
    "Name": "Dyadic International Inc."
  },
  {
    "Symbol": "DYN",
    "Name": "Dyne Therapeutics Inc."
  },
  {
    "Symbol": "DYNS",
    "Name": "Dynamics Special Purpose "
  },
  {
    "Symbol": "DYNT",
    "Name": "Dynatronics Corporation"
  },
  {
    "Symbol": "DZSI",
    "Name": "DZS Inc."
  },
  {
    "Symbol": "E",
    "Name": "ENI S.p.A."
  },
  {
    "Symbol": "EA",
    "Name": "Electronic Arts Inc."
  },
  {
    "Symbol": "EAC",
    "Name": "Edify Acquisition "
  },
  {
    "Symbol": "EACPU",
    "Name": "Edify Acquisition Units"
  },
  {
    "Symbol": "EAD",
    "Name": "Allspring Income Opportunities Fund"
  },
  {
    "Symbol": "EAF",
    "Name": "GrafTech International Ltd."
  },
  {
    "Symbol": "EAR",
    "Name": "Eargo Inc."
  },
  {
    "Symbol": "EAST",
    "Name": "Eastside Distilling Inc."
  },
  {
    "Symbol": "EAT",
    "Name": "Brinker International Inc."
  },
  {
    "Symbol": "EB",
    "Name": "Eventbrite Inc. "
  },
  {
    "Symbol": "EBAC",
    "Name": "European Biotech Acquisition "
  },
  {
    "Symbol": "EBAY",
    "Name": "eBay Inc."
  },
  {
    "Symbol": "EBC",
    "Name": "Eastern Bankshares Inc."
  },
  {
    "Symbol": "EBET",
    "Name": "Esports Technologies Inc."
  },
  {
    "Symbol": "EBF",
    "Name": "Ennis Inc."
  },
  {
    "Symbol": "EBIX",
    "Name": "Ebix Inc."
  },
  {
    "Symbol": "EBMT",
    "Name": "Eagle Bancorp Montana Inc."
  },
  {
    "Symbol": "EBON",
    "Name": "Ebang International Holdings Inc. "
  },
  {
    "Symbol": "EBS",
    "Name": "Emergent Biosolutions Inc."
  },
  {
    "Symbol": "EBTC",
    "Name": "Enterprise Bancorp Inc"
  },
  {
    "Symbol": "ECC",
    "Name": "Eagle Point Credit Company Inc."
  },
  {
    "Symbol": "ECF",
    "Name": "Ellsworth Growth and Income Fund Ltd."
  },
  {
    "Symbol": "ECL",
    "Name": "Ecolab Inc."
  },
  {
    "Symbol": "ECOL",
    "Name": "US Ecology Inc"
  },
  {
    "Symbol": "ECOM",
    "Name": "ChannelAdvisor Corporation"
  },
  {
    "Symbol": "ECOR",
    "Name": "electroCore Inc."
  },
  {
    "Symbol": "ECPG",
    "Name": "Encore Capital Group Inc"
  },
  {
    "Symbol": "ECVT",
    "Name": "Ecovyst Inc."
  },
  {
    "Symbol": "ED",
    "Name": "Consolidated Edison Inc."
  },
  {
    "Symbol": "EDD",
    "Name": "Morgan Stanley Emerging Markets Domestic Debt Fund Inc. Morgan Stanley Emerging Markets Domestic Debt Fund Inc."
  },
  {
    "Symbol": "EDIT",
    "Name": "Editas Medicine Inc."
  },
  {
    "Symbol": "EDNC",
    "Name": "Endurance Acquisition "
  },
  {
    "Symbol": "EDNCU",
    "Name": "Endurance Acquisition Unit"
  },
  {
    "Symbol": "EDR",
    "Name": "Endeavor Group Holdings Inc. "
  },
  {
    "Symbol": "EDRY",
    "Name": "EuroDry Ltd."
  },
  {
    "Symbol": "EDSA",
    "Name": "Edesa Biotech Inc."
  },
  {
    "Symbol": "EDTK",
    "Name": "Skillful Craftsman Education Technology Limited Ordinary Share"
  },
  {
    "Symbol": "EDU",
    "Name": "New Oriental Education & Technology Group Inc. Sponsored ADR representing 10 Ordinary Share (Cayman Islands)"
  },
  {
    "Symbol": "EDUC",
    "Name": "Educational Development Corporation"
  },
  {
    "Symbol": "EE",
    "Name": "Excelerate Energy Inc. "
  },
  {
    "Symbol": "EEA",
    "Name": "The European Equity Fund Inc."
  },
  {
    "Symbol": "EEFT",
    "Name": "Euronet Worldwide Inc."
  },
  {
    "Symbol": "EEIQ",
    "Name": "Elite Education Group International Ltd."
  },
  {
    "Symbol": "EEX",
    "Name": "Emerald Holding Inc."
  },
  {
    "Symbol": "EFC",
    "Name": "Ellington Financial Inc."
  },
  {
    "Symbol": "EFOI",
    "Name": "Energy Focus Inc."
  },
  {
    "Symbol": "EFSC",
    "Name": "Enterprise Financial Services Corporation"
  },
  {
    "Symbol": "EFTR",
    "Name": "eFFECTOR Therapeutics Inc."
  },
  {
    "Symbol": "EFX",
    "Name": "Equifax Inc."
  },
  {
    "Symbol": "EGAN",
    "Name": "eGain Corporation"
  },
  {
    "Symbol": "EGBN",
    "Name": "Eagle Bancorp Inc."
  },
  {
    "Symbol": "EGF",
    "Name": "Blackrock Enhanced Government Fund Inc."
  },
  {
    "Symbol": "EGGF",
    "Name": "EG Acquisition "
  },
  {
    "Symbol": "EGHT",
    "Name": "8x8 Inc"
  },
  {
    "Symbol": "EGLE",
    "Name": "Eagle Bulk Shipping Inc."
  },
  {
    "Symbol": "EGLX",
    "Name": "Enthusiast Gaming Holdings Inc."
  },
  {
    "Symbol": "EGO",
    "Name": "Eldorado Gold Corporation"
  },
  {
    "Symbol": "EGP",
    "Name": "EastGroup Properties Inc."
  },
  {
    "Symbol": "EGRX",
    "Name": "Eagle Pharmaceuticals Inc."
  },
  {
    "Symbol": "EGY",
    "Name": "VAALCO Energy Inc."
  },
  {
    "Symbol": "EH",
    "Name": "EHang Holdings Limited ADS"
  },
  {
    "Symbol": "EHC",
    "Name": "Encompass Health Corporation"
  },
  {
    "Symbol": "EHI",
    "Name": "Western Asset Global High Income Fund Inc"
  },
  {
    "Symbol": "EHTH",
    "Name": "eHealth Inc."
  },
  {
    "Symbol": "EIC",
    "Name": "Eagle Point Income Company Inc."
  },
  {
    "Symbol": "EIG",
    "Name": "Employers Holdings Inc"
  },
  {
    "Symbol": "EIGR",
    "Name": "Eiger BioPharmaceuticals Inc."
  },
  {
    "Symbol": "EIX",
    "Name": "Edison International"
  },
  {
    "Symbol": "EJFA",
    "Name": "EJF Acquisition  Ordinary Share"
  },
  {
    "Symbol": "EJFAU",
    "Name": "EJF Acquisition Unit"
  },
  {
    "Symbol": "EJH",
    "Name": "E-Home Household Service Holdings Limited"
  },
  {
    "Symbol": "EKSO",
    "Name": "Ekso Bionics Holdings Inc."
  },
  {
    "Symbol": "EL",
    "Name": "Estee Lauder Companies Inc. (The)"
  },
  {
    "Symbol": "ELA",
    "Name": "Envela Corporation"
  },
  {
    "Symbol": "ELAN",
    "Name": "Elanco Animal Health Incorporated"
  },
  {
    "Symbol": "ELDN",
    "Name": "Eledon Pharmaceuticals Inc."
  },
  {
    "Symbol": "ELEV",
    "Name": "Elevation Oncology Inc."
  },
  {
    "Symbol": "ELF",
    "Name": "e.l.f. Beauty Inc."
  },
  {
    "Symbol": "ELLO",
    "Name": "Ellomay Capital Ltd  (Israel)"
  },
  {
    "Symbol": "ELMD",
    "Name": "Electromed Inc."
  },
  {
    "Symbol": "ELMS",
    "Name": "Electric Last Mile Solutions Inc. "
  },
  {
    "Symbol": "ELOX",
    "Name": "Eloxx Pharmaceuticals Inc."
  },
  {
    "Symbol": "ELS",
    "Name": "Equity Lifestyle Properties Inc."
  },
  {
    "Symbol": "ELSE",
    "Name": "Electro-Sensors Inc."
  },
  {
    "Symbol": "ELTK",
    "Name": "Eltek Ltd."
  },
  {
    "Symbol": "ELVT",
    "Name": "Elevate Credit Inc."
  },
  {
    "Symbol": "ELY",
    "Name": "Callaway Golf Company"
  },
  {
    "Symbol": "ELYM",
    "Name": "Eliem Therapeutics Inc"
  },
  {
    "Symbol": "ELYS",
    "Name": "Elys Game Technology"
  },
  {
    "Symbol": "EMAN",
    "Name": "eMagin Corporation"
  },
  {
    "Symbol": "EMBC",
    "Name": "Embecta"
  },
  {
    "Symbol": "EMBK",
    "Name": "Embark Technology Inc."
  },
  {
    "Symbol": "EMCF",
    "Name": "Emclaire Financial Corp"
  },
  {
    "Symbol": "EMD",
    "Name": "Western Asset Emerging Markets Debt Fund Inc"
  },
  {
    "Symbol": "EME",
    "Name": "EMCOR Group Inc."
  },
  {
    "Symbol": "EMF",
    "Name": "Templeton Emerging Markets Fund"
  },
  {
    "Symbol": "EMKR",
    "Name": "EMCORE Corporation"
  },
  {
    "Symbol": "EML",
    "Name": "Eastern Company (The)"
  },
  {
    "Symbol": "EMLD",
    "Name": "FTAC Emerald Acquisition "
  },
  {
    "Symbol": "EMLDU",
    "Name": "FTAC Emerald Acquisition Unit"
  },
  {
    "Symbol": "EMN",
    "Name": "Eastman Chemical Company"
  },
  {
    "Symbol": "EMO",
    "Name": "ClearBridge Energy Midstream Opportunity Fund Inc."
  },
  {
    "Symbol": "EMR",
    "Name": "Emerson Electric Company"
  },
  {
    "Symbol": "EMX",
    "Name": "EMX Royalty Corporation  (Canada)"
  },
  {
    "Symbol": "ENB",
    "Name": "Enbridge Inc"
  },
  {
    "Symbol": "ENCP",
    "Name": "Energem Corp "
  },
  {
    "Symbol": "ENCPU",
    "Name": "Energem Corp Unit"
  },
  {
    "Symbol": "ENDP",
    "Name": "Endo International plc"
  },
  {
    "Symbol": "ENER",
    "Name": "Accretion Acquisition"
  },
  {
    "Symbol": "ENERR",
    "Name": "Accretion Acquisition Right"
  },
  {
    "Symbol": "ENERU",
    "Name": "Accretion Acquisition Unit"
  },
  {
    "Symbol": "ENFN",
    "Name": "Enfusion Inc. "
  },
  {
    "Symbol": "ENG",
    "Name": "ENGlobal Corporation"
  },
  {
    "Symbol": "ENJY",
    "Name": "Enjoy Technology Inc."
  },
  {
    "Symbol": "ENLC",
    "Name": "EnLink Midstream LLC Common Units representing Limited Partner Interests"
  },
  {
    "Symbol": "ENLV",
    "Name": "Enlivex Therapeutics Ltd."
  },
  {
    "Symbol": "ENOB",
    "Name": "Enochian Biosciences Inc."
  },
  {
    "Symbol": "ENOV",
    "Name": "Enovis Corporation"
  },
  {
    "Symbol": "ENPC",
    "Name": "Executive Network Partnering Corporation "
  },
  {
    "Symbol": "ENPH",
    "Name": "Enphase Energy Inc."
  },
  {
    "Symbol": "ENR",
    "Name": "Energizer Holdings Inc."
  },
  {
    "Symbol": "ENS",
    "Name": "EnerSys"
  },
  {
    "Symbol": "ENSC",
    "Name": "Ensysce Biosciences Inc."
  },
  {
    "Symbol": "ENSG",
    "Name": "The Ensign Group Inc."
  },
  {
    "Symbol": "ENSV",
    "Name": "Enservco Corporation"
  },
  {
    "Symbol": "ENTA",
    "Name": "Enanta Pharmaceuticals Inc."
  },
  {
    "Symbol": "ENTF",
    "Name": "Enterprise 4.0 Technology Acquisition "
  },
  {
    "Symbol": "ENTFU",
    "Name": "Enterprise 4.0 Technology Acquisition Unit"
  },
  {
    "Symbol": "ENTG",
    "Name": "Entegris Inc."
  },
  {
    "Symbol": "ENTX",
    "Name": "Entera Bio Ltd."
  },
  {
    "Symbol": "ENV",
    "Name": "Envestnet Inc"
  },
  {
    "Symbol": "ENVA",
    "Name": "Enova International Inc."
  },
  {
    "Symbol": "ENVB",
    "Name": "Enveric Biosciences Inc."
  },
  {
    "Symbol": "ENVX",
    "Name": "Enovix Corporation"
  },
  {
    "Symbol": "EOG",
    "Name": "EOG Resources Inc."
  },
  {
    "Symbol": "EOLS",
    "Name": "Evolus Inc."
  },
  {
    "Symbol": "EOSE",
    "Name": "Eos Energy Enterprises Inc. "
  },
  {
    "Symbol": "EOT",
    "Name": "Eaton Vance Municipal Income Trust EATON VANCE NATIONAL MUNICIPAL OPPORTUNITIES TRUST"
  },
  {
    "Symbol": "EP",
    "Name": "Empire Petroleum Corporation"
  },
  {
    "Symbol": "EPAC",
    "Name": "Enerpac Tool Group"
  },
  {
    "Symbol": "EPAM",
    "Name": "EPAM Systems Inc."
  },
  {
    "Symbol": "EPAY",
    "Name": "Bottomline Technologies Inc."
  },
  {
    "Symbol": "EPC",
    "Name": "Edgewell Personal Care Company"
  },
  {
    "Symbol": "EPD",
    "Name": "Enterprise Products Partners L.P."
  },
  {
    "Symbol": "EPHY",
    "Name": "Epiphany Technology Acquisition "
  },
  {
    "Symbol": "EPHYU",
    "Name": "Epiphany Technology Acquisition Unit"
  },
  {
    "Symbol": "EPIX",
    "Name": "ESSA Pharma Inc."
  },
  {
    "Symbol": "EPM",
    "Name": "Evolution Petroleum Corporation Inc."
  },
  {
    "Symbol": "EPR",
    "Name": "EPR Properties"
  },
  {
    "Symbol": "EPRT",
    "Name": "Essential Properties Realty Trust Inc."
  },
  {
    "Symbol": "EPSN",
    "Name": "Epsilon Energy Ltd. Common Share"
  },
  {
    "Symbol": "EPWR",
    "Name": "Empowerment & Inclusion Capital I "
  },
  {
    "Symbol": "EPZM",
    "Name": "Epizyme Inc."
  },
  {
    "Symbol": "EQ",
    "Name": "Equillium Inc."
  },
  {
    "Symbol": "EQBK",
    "Name": "Equity Bancshares Inc. "
  },
  {
    "Symbol": "EQD",
    "Name": "Equity Distribution Acquisition "
  },
  {
    "Symbol": "EQH",
    "Name": "Equitable Holdings Inc."
  },
  {
    "Symbol": "EQHA",
    "Name": "EQ Health Acquisition "
  },
  {
    "Symbol": "EQIX",
    "Name": "Equinix Inc.  REIT"
  },
  {
    "Symbol": "EQNR",
    "Name": "Equinor ASA"
  },
  {
    "Symbol": "EQOS",
    "Name": "EQONEX LIMITED"
  },
  {
    "Symbol": "EQRX",
    "Name": "EQRx Inc."
  },
  {
    "Symbol": "EQS",
    "Name": "Equus Total Return Inc."
  },
  {
    "Symbol": "EQT",
    "Name": "EQT Corporation"
  },
  {
    "Symbol": "EQX",
    "Name": "Equinox Gold"
  },
  {
    "Symbol": "ERAS",
    "Name": "Erasca Inc."
  },
  {
    "Symbol": "ERC",
    "Name": "Allspring Multi-Sector Income Fund"
  },
  {
    "Symbol": "ERES",
    "Name": "East Resources Acquisition Company "
  },
  {
    "Symbol": "ERESU",
    "Name": "East Resources Acquisition Company Unit"
  },
  {
    "Symbol": "ERF",
    "Name": "Enerplus Corporation"
  },
  {
    "Symbol": "ERH",
    "Name": "Allspring Utilities and High Income Fund"
  },
  {
    "Symbol": "ERIE",
    "Name": "Erie Indemnity Company "
  },
  {
    "Symbol": "ERJ",
    "Name": "Embraer S.A."
  },
  {
    "Symbol": "ERO",
    "Name": "Ero Copper"
  },
  {
    "Symbol": "ES",
    "Name": "Eversource Energy (D/B/A)"
  },
  {
    "Symbol": "ESAB",
    "Name": "ESAB Corporation"
  },
  {
    "Symbol": "ESAC",
    "Name": "ESGEN Acquisition Corporation "
  },
  {
    "Symbol": "ESACU",
    "Name": "ESGEN Acquisition Corporation Unit"
  },
  {
    "Symbol": "ESBK",
    "Name": "Elmira Savings Bank Elmira NY"
  },
  {
    "Symbol": "ESCA",
    "Name": "Escalade Incorporated"
  },
  {
    "Symbol": "ESE",
    "Name": "ESCO Technologies Inc."
  },
  {
    "Symbol": "ESEA",
    "Name": "Euroseas Ltd.  (Marshall Islands)"
  },
  {
    "Symbol": "ESGC",
    "Name": "Eros STX Global Corporation A"
  },
  {
    "Symbol": "ESGR",
    "Name": "Enstar Group Limited"
  },
  {
    "Symbol": "ESI",
    "Name": "Element Solutions Inc."
  },
  {
    "Symbol": "ESLT",
    "Name": "Elbit Systems Ltd."
  },
  {
    "Symbol": "ESM",
    "Name": "ESM Acquisition Corporation "
  },
  {
    "Symbol": "ESMT",
    "Name": "EngageSmart Inc."
  },
  {
    "Symbol": "ESNT",
    "Name": "Essent Group Ltd."
  },
  {
    "Symbol": "ESOA",
    "Name": "Energy Services of America Corporation"
  },
  {
    "Symbol": "ESP",
    "Name": "Espey Mfg. & Electronics"
  },
  {
    "Symbol": "ESPR",
    "Name": "Esperion Therapeutics Inc."
  },
  {
    "Symbol": "ESQ",
    "Name": "Esquire Financial Holdings Inc."
  },
  {
    "Symbol": "ESRT",
    "Name": "Empire State Realty Trust Inc. "
  },
  {
    "Symbol": "ESS",
    "Name": "Essex Property Trust Inc."
  },
  {
    "Symbol": "ESSA",
    "Name": "ESSA Bancorp Inc."
  },
  {
    "Symbol": "ESSC",
    "Name": "East Stone Acquisition Corporation"
  },
  {
    "Symbol": "ESSCR",
    "Name": "East Stone Acquisition Corporation Right"
  },
  {
    "Symbol": "ESTA",
    "Name": "Establishment Labs Holdings Inc."
  },
  {
    "Symbol": "ESTC",
    "Name": "Elastic N.V."
  },
  {
    "Symbol": "ESTE",
    "Name": "Earthstone Energy Inc. "
  },
  {
    "Symbol": "ET",
    "Name": "Energy Transfer LP Common Units"
  },
  {
    "Symbol": "ETAC",
    "Name": "E.Merge Technology Acquisition "
  },
  {
    "Symbol": "ETACU",
    "Name": "E.Merge Technology Acquisition Unit"
  },
  {
    "Symbol": "ETD",
    "Name": "Ethan Allen Interiors Inc."
  },
  {
    "Symbol": "ETN",
    "Name": "Eaton Corporation PLC"
  },
  {
    "Symbol": "ETNB",
    "Name": "89bio Inc."
  },
  {
    "Symbol": "ETO",
    "Name": "Eaton Vance Tax-Advantage Global Dividend Opp"
  },
  {
    "Symbol": "ETON",
    "Name": "Eton Pharmaceuticals Inc."
  },
  {
    "Symbol": "ETR",
    "Name": "Entergy Corporation"
  },
  {
    "Symbol": "ETRN",
    "Name": "Equitrans Midstream Corporation"
  },
  {
    "Symbol": "ETSY",
    "Name": "Etsy Inc."
  },
  {
    "Symbol": "ETTX",
    "Name": "Entasis Therapeutics Holdings Inc."
  },
  {
    "Symbol": "ETWO",
    "Name": "E2open Parent Holdings Inc."
  },
  {
    "Symbol": "EUCR",
    "Name": "Eucrates Biomedical Acquisition"
  },
  {
    "Symbol": "EUCRU",
    "Name": "Eucrates Biomedical Acquisition Unit"
  },
  {
    "Symbol": "EURN",
    "Name": "Euronav NV"
  },
  {
    "Symbol": "EVA",
    "Name": "Enviva Inc."
  },
  {
    "Symbol": "EVBG",
    "Name": "Everbridge Inc."
  },
  {
    "Symbol": "EVBN",
    "Name": "Evans Bancorp Inc."
  },
  {
    "Symbol": "EVC",
    "Name": "Entravision Communications Corporation"
  },
  {
    "Symbol": "EVCM",
    "Name": "EverCommerce Inc."
  },
  {
    "Symbol": "EVER",
    "Name": "EverQuote Inc. "
  },
  {
    "Symbol": "EVF",
    "Name": "Eaton Vance Senior Income Trust"
  },
  {
    "Symbol": "EVFM",
    "Name": "Evofem Biosciences Inc."
  },
  {
    "Symbol": "EVGN",
    "Name": "Evogene Ltd"
  },
  {
    "Symbol": "EVGO",
    "Name": "EVgo Inc. "
  },
  {
    "Symbol": "EVGR",
    "Name": "Evergreen Corporation  Ordinary Share"
  },
  {
    "Symbol": "EVGRU",
    "Name": "Evergreen Corporation Unit"
  },
  {
    "Symbol": "EVH",
    "Name": "Evolent Health Inc "
  },
  {
    "Symbol": "EVI",
    "Name": "EVI Industries Inc."
  },
  {
    "Symbol": "EVK",
    "Name": "Ever-Glory International Group Inc."
  },
  {
    "Symbol": "EVLO",
    "Name": "Evelo Biosciences Inc."
  },
  {
    "Symbol": "EVLV",
    "Name": "Evolv Technologies Holdings Inc. "
  },
  {
    "Symbol": "EVN",
    "Name": "Eaton Vance Municipal Income Trust"
  },
  {
    "Symbol": "EVOJ",
    "Name": "Evo Acquisition "
  },
  {
    "Symbol": "EVOK",
    "Name": "Evoke Pharma Inc."
  },
  {
    "Symbol": "EVOL",
    "Name": "Evolving Systems Inc."
  },
  {
    "Symbol": "EVOP",
    "Name": "EVO Payments Inc. "
  },
  {
    "Symbol": "EVR",
    "Name": "Evercore Inc. "
  },
  {
    "Symbol": "EVRG",
    "Name": "Evergy Inc."
  },
  {
    "Symbol": "EVRI",
    "Name": "Everi Holdings Inc."
  },
  {
    "Symbol": "EVTC",
    "Name": "Evertec Inc."
  },
  {
    "Symbol": "EVTL",
    "Name": "Vertical Aerospace Ltd."
  },
  {
    "Symbol": "EW",
    "Name": "Edwards Lifesciences Corporation"
  },
  {
    "Symbol": "EWBC",
    "Name": "East West Bancorp Inc."
  },
  {
    "Symbol": "EWCZ",
    "Name": "European Wax Center Inc. "
  },
  {
    "Symbol": "EWTX",
    "Name": "Edgewise Therapeutics Inc."
  },
  {
    "Symbol": "EXAS",
    "Name": "Exact Sciences Corporation"
  },
  {
    "Symbol": "EXC",
    "Name": "Exelon Corporation"
  },
  {
    "Symbol": "EXEL",
    "Name": "Exelixis Inc."
  },
  {
    "Symbol": "EXFY",
    "Name": "Expensify Inc. "
  },
  {
    "Symbol": "EXK",
    "Name": "Endeavour Silver Corporation  (Canada)"
  },
  {
    "Symbol": "EXLS",
    "Name": "ExlService Holdings Inc."
  },
  {
    "Symbol": "EXN",
    "Name": "Excellon Resources Inc."
  },
  {
    "Symbol": "EXP",
    "Name": "Eagle Materials Inc"
  },
  {
    "Symbol": "EXPD",
    "Name": "Expeditors International of Washington Inc."
  },
  {
    "Symbol": "EXPE",
    "Name": "Expedia Group Inc."
  },
  {
    "Symbol": "EXPI",
    "Name": "eXp World Holdings Inc."
  },
  {
    "Symbol": "EXPO",
    "Name": "Exponent Inc."
  },
  {
    "Symbol": "EXPR",
    "Name": "Express Inc."
  },
  {
    "Symbol": "EXR",
    "Name": "Extra Space Storage Inc"
  },
  {
    "Symbol": "EXTN",
    "Name": "Exterran Corporation"
  },
  {
    "Symbol": "EXTR",
    "Name": "Extreme Networks Inc."
  },
  {
    "Symbol": "EYE",
    "Name": "National Vision Holdings Inc."
  },
  {
    "Symbol": "EYEN",
    "Name": "Eyenovia Inc."
  },
  {
    "Symbol": "EYES",
    "Name": "Second Sight Medical Products Inc."
  },
  {
    "Symbol": "EYPT",
    "Name": "EyePoint Pharmaceuticals Inc."
  },
  {
    "Symbol": "EZFL",
    "Name": "EzFill Holdings Inc."
  },
  {
    "Symbol": "EZGO",
    "Name": "EZGO Technologies Ltd."
  },
  {
    "Symbol": "EZPW",
    "Name": "EZCORP Inc.  Non Voting"
  },
  {
    "Symbol": "F",
    "Name": "Ford Motor Company"
  },
  {
    "Symbol": "FA",
    "Name": "First Advantage Corporation"
  },
  {
    "Symbol": "FACA",
    "Name": "Figure Acquisition I "
  },
  {
    "Symbol": "FACT",
    "Name": "Freedom Acquisition I "
  },
  {
    "Symbol": "FAF",
    "Name": "First American Corporation (New)"
  },
  {
    "Symbol": "FAMI",
    "Name": "Farmmi Inc."
  },
  {
    "Symbol": "FANG",
    "Name": "Diamondback Energy Inc. Commmon Stock"
  },
  {
    "Symbol": "FARM",
    "Name": "Farmer Brothers Company"
  },
  {
    "Symbol": "FARO",
    "Name": "FARO Technologies Inc."
  },
  {
    "Symbol": "FAST",
    "Name": "Fastenal Company"
  },
  {
    "Symbol": "FAT",
    "Name": "FAT Brands Inc. "
  },
  {
    "Symbol": "FATBB",
    "Name": "FAT Brands Inc. Class B"
  },
  {
    "Symbol": "FATE",
    "Name": "Fate Therapeutics Inc."
  },
  {
    "Symbol": "FATH",
    "Name": "Fathom Digital Manufacturing Corporation "
  },
  {
    "Symbol": "FATP",
    "Name": "Fat Projects Acquisition Corp  Ordinary Share"
  },
  {
    "Symbol": "FAX",
    "Name": "Aberdeen Asia-Pacific Income Fund Inc"
  },
  {
    "Symbol": "FB",
    "Name": "Meta Platforms Inc. "
  },
  {
    "Symbol": "FBC",
    "Name": "Flagstar Bancorp Inc."
  },
  {
    "Symbol": "FBHS",
    "Name": "Fortune Brands Home & Security Inc."
  },
  {
    "Symbol": "FBIO",
    "Name": "Fortress Biotech Inc."
  },
  {
    "Symbol": "FBIZ",
    "Name": "First Business Financial Services Inc."
  },
  {
    "Symbol": "FBK",
    "Name": "FB Financial Corporation"
  },
  {
    "Symbol": "FBMS",
    "Name": "First Bancshares Inc."
  },
  {
    "Symbol": "FBNC",
    "Name": "First Bancorp"
  },
  {
    "Symbol": "FBP",
    "Name": "First BanNew"
  },
  {
    "Symbol": "FBRT",
    "Name": "Franklin BSP Realty Trust Inc."
  },
  {
    "Symbol": "FBRX",
    "Name": "Forte Biosciences Inc."
  },
  {
    "Symbol": "FC",
    "Name": "Franklin Covey Company"
  },
  {
    "Symbol": "FCAP",
    "Name": "First Capital Inc."
  },
  {
    "Symbol": "FCAX",
    "Name": "Fortress Capital Acquisition "
  },
  {
    "Symbol": "FCBC",
    "Name": "First Community Bankshares Inc. (VA)"
  },
  {
    "Symbol": "FCCO",
    "Name": "First Community Corporation"
  },
  {
    "Symbol": "FCEL",
    "Name": "FuelCell Energy Inc."
  },
  {
    "Symbol": "FCF",
    "Name": "First Commonwealth Financial Corporation"
  },
  {
    "Symbol": "FCFS",
    "Name": "FirstCash Holdings Inc."
  },
  {
    "Symbol": "FCN",
    "Name": "FTI Consulting Inc."
  },
  {
    "Symbol": "FCNCA",
    "Name": "First Citizens BancShares Inc. "
  },
  {
    "Symbol": "FCO",
    "Name": "Aberdeen Global Income Fund Inc."
  },
  {
    "Symbol": "FCPT",
    "Name": "Four Corners Property Trust Inc."
  },
  {
    "Symbol": "FCRD",
    "Name": "First Eagle Alternative Capital BDC Inc."
  },
  {
    "Symbol": "FCUV",
    "Name": "Focus Universal Inc."
  },
  {
    "Symbol": "FCX",
    "Name": "Freeport-McMoRan Inc."
  },
  {
    "Symbol": "FDBC",
    "Name": "Fidelity D & D Bancorp Inc."
  },
  {
    "Symbol": "FDMT",
    "Name": "4D Molecular Therapeutics Inc."
  },
  {
    "Symbol": "FDP",
    "Name": "Fresh Del Monte Produce Inc."
  },
  {
    "Symbol": "FDS",
    "Name": "FactSet Research Systems Inc."
  },
  {
    "Symbol": "FDUS",
    "Name": "Fidus Investment Corporation"
  },
  {
    "Symbol": "FDX",
    "Name": "FedEx Corporation"
  },
  {
    "Symbol": "FE",
    "Name": "FirstEnergy"
  },
  {
    "Symbol": "FEAM",
    "Name": "5E Advanced Materials Inc."
  },
  {
    "Symbol": "FEIM",
    "Name": "Frequency Electronics Inc."
  },
  {
    "Symbol": "FELE",
    "Name": "Franklin Electric Co. Inc."
  },
  {
    "Symbol": "FEMY",
    "Name": "Femasys Inc."
  },
  {
    "Symbol": "FEN",
    "Name": "First Trust Energy Income and Growth Fund"
  },
  {
    "Symbol": "FENC",
    "Name": "Fennec Pharmaceuticals Inc."
  },
  {
    "Symbol": "FERG",
    "Name": "Ferguson plc"
  },
  {
    "Symbol": "FET",
    "Name": "Forum Energy Technologies Inc."
  },
  {
    "Symbol": "FEXD",
    "Name": "Fintech Ecosystem Development "
  },
  {
    "Symbol": "FEXDR",
    "Name": "Fintech Ecosystem Development Right"
  },
  {
    "Symbol": "FEXDU",
    "Name": "Fintech Ecosystem Development Units"
  },
  {
    "Symbol": "FF",
    "Name": "FutureFuel"
  },
  {
    "Symbol": "FFA",
    "Name": "First Trust Enhanced Equity Income Fund"
  },
  {
    "Symbol": "FFBC",
    "Name": "First Financial Ban"
  },
  {
    "Symbol": "FFBW",
    "Name": "FFBW Inc.  (MD)"
  },
  {
    "Symbol": "FFC",
    "Name": "Flaherty & Crumrine Preferred and Income Securities Fund Incorporated"
  },
  {
    "Symbol": "FFHL",
    "Name": "Fuwei Films (Holdings) Co. Ltd."
  },
  {
    "Symbol": "FFIC",
    "Name": "Flushing Financial Corporation"
  },
  {
    "Symbol": "FFIE",
    "Name": "Faraday Future Intelligent Electric Inc."
  },
  {
    "Symbol": "FFIN",
    "Name": "First Financial Bankshares Inc."
  },
  {
    "Symbol": "FFIV",
    "Name": "F5 Inc."
  },
  {
    "Symbol": "FFNW",
    "Name": "First Financial Northwest Inc."
  },
  {
    "Symbol": "FFWM",
    "Name": "First Foundation Inc."
  },
  {
    "Symbol": "FGB",
    "Name": "First Trust Specialty Finance and Financial Opportunities Fund"
  },
  {
    "Symbol": "FGBI",
    "Name": "First Guaranty Bancshares Inc."
  },
  {
    "Symbol": "FGEN",
    "Name": "FibroGen Inc"
  },
  {
    "Symbol": "FGF",
    "Name": "FG Financial Group Inc."
  },
  {
    "Symbol": "FGI",
    "Name": "FGI Industries Ltd."
  },
  {
    "Symbol": "FGMC",
    "Name": "FG Merger"
  },
  {
    "Symbol": "FGMCU",
    "Name": "FG Merger Unit"
  },
  {
    "Symbol": "FHB",
    "Name": "First Hawaiian Inc."
  },
  {
    "Symbol": "FHI",
    "Name": "Federated Hermes Inc."
  },
  {
    "Symbol": "FHLT",
    "Name": "Future Health ESG"
  },
  {
    "Symbol": "FHLTU",
    "Name": "Future Health ESG Unit"
  },
  {
    "Symbol": "FHN",
    "Name": "First Horizon Corporation"
  },
  {
    "Symbol": "FHTX",
    "Name": "Foghorn Therapeutics Inc."
  },
  {
    "Symbol": "FIAC",
    "Name": "Focus Impact Acquisition "
  },
  {
    "Symbol": "FIACU",
    "Name": "Focus Impact Acquisition Unit"
  },
  {
    "Symbol": "FIBK",
    "Name": "First Interstate BancSystem Inc. "
  },
  {
    "Symbol": "FICO",
    "Name": "Fair Isaac Corproation"
  },
  {
    "Symbol": "FICV",
    "Name": "Frontier Investment Corp "
  },
  {
    "Symbol": "FIGS",
    "Name": "FIGS Inc. "
  },
  {
    "Symbol": "FINM",
    "Name": "Marlin Technology Corporation  Ordinary Share"
  },
  {
    "Symbol": "FINMU",
    "Name": "Marlin Technology Corporation Unit"
  },
  {
    "Symbol": "FINW",
    "Name": "FinWise Bancorp"
  },
  {
    "Symbol": "FIS",
    "Name": "Fidelity National Information Services Inc."
  },
  {
    "Symbol": "FISI",
    "Name": "Financial Institutions Inc."
  },
  {
    "Symbol": "FISV",
    "Name": "Fiserv Inc."
  },
  {
    "Symbol": "FITB",
    "Name": "Fifth Third Bancorp"
  },
  {
    "Symbol": "FIVE",
    "Name": "Five Below Inc."
  },
  {
    "Symbol": "FIVN",
    "Name": "Five9 Inc."
  },
  {
    "Symbol": "FIX",
    "Name": "Comfort Systems USA Inc."
  },
  {
    "Symbol": "FIXX",
    "Name": "Homology Medicines Inc."
  },
  {
    "Symbol": "FIZZ",
    "Name": "National Beverage"
  },
  {
    "Symbol": "FKWL",
    "Name": "Franklin Wireless"
  },
  {
    "Symbol": "FL",
    "Name": "Foot Locker Inc."
  },
  {
    "Symbol": "FLAC",
    "Name": "Frazier Lifesciences Acquisition Corporation "
  },
  {
    "Symbol": "FLACU",
    "Name": "Frazier Lifesciences Acquisition Corporation Unit"
  },
  {
    "Symbol": "FLAG",
    "Name": "First Light Acquisition Group Inc. "
  },
  {
    "Symbol": "FLC",
    "Name": "Flaherty & Crumrine Total Return Fund Inc"
  },
  {
    "Symbol": "FLEX",
    "Name": "Flex Ltd."
  },
  {
    "Symbol": "FLGC",
    "Name": "Flora Growth"
  },
  {
    "Symbol": "FLGT",
    "Name": "Fulgent Genetics Inc."
  },
  {
    "Symbol": "FLIC",
    "Name": "First of Long Island Corporation (The)"
  },
  {
    "Symbol": "FLL",
    "Name": "Full House Resorts Inc."
  },
  {
    "Symbol": "FLME",
    "Name": "Flame Acquisition "
  },
  {
    "Symbol": "FLMN",
    "Name": "Falcon Minerals Corporation "
  },
  {
    "Symbol": "FLNC",
    "Name": "Fluence Energy Inc. "
  },
  {
    "Symbol": "FLNG",
    "Name": "FLEX LNG Ltd."
  },
  {
    "Symbol": "FLNT",
    "Name": "Fluent Inc."
  },
  {
    "Symbol": "FLO",
    "Name": "Flowers Foods Inc."
  },
  {
    "Symbol": "FLR",
    "Name": "Fluor Corporation"
  },
  {
    "Symbol": "FLS",
    "Name": "Flowserve Corporation"
  },
  {
    "Symbol": "FLT",
    "Name": "FleetCor Technologies Inc."
  },
  {
    "Symbol": "FLUX",
    "Name": "Flux Power Holdings Inc."
  },
  {
    "Symbol": "FLWS",
    "Name": "1-800-FLOWERS.COM Inc."
  },
  {
    "Symbol": "FLXS",
    "Name": "Flexsteel Industries Inc."
  },
  {
    "Symbol": "FLYA",
    "Name": "SOAR Technology Acquisition "
  },
  {
    "Symbol": "FLYW",
    "Name": "Flywire Corporation Voting"
  },
  {
    "Symbol": "FMAO",
    "Name": "Farmers & Merchants Bancorp Inc."
  },
  {
    "Symbol": "FMBH",
    "Name": "First Mid Bancshares Inc."
  },
  {
    "Symbol": "FMC",
    "Name": "FMC Corporation"
  },
  {
    "Symbol": "FMIV",
    "Name": "Forum Merger IV Corporation "
  },
  {
    "Symbol": "FMIVU",
    "Name": "Forum Merger IV Corporation Unit"
  },
  {
    "Symbol": "FMN",
    "Name": "Federated Hermes Premier Municipal Income Fund"
  },
  {
    "Symbol": "FMNB",
    "Name": "Farmers National Banc"
  },
  {
    "Symbol": "FMS",
    "Name": "Fresenius Medical Care AG"
  },
  {
    "Symbol": "FMTX",
    "Name": "Forma Therapeutics Holdings Inc."
  },
  {
    "Symbol": "FMX",
    "Name": "Fomento Economico Mexicano S.A.B. de C.V."
  },
  {
    "Symbol": "FN",
    "Name": "Fabrinet"
  },
  {
    "Symbol": "FNA",
    "Name": "Paragon 28 Inc."
  },
  {
    "Symbol": "FNB",
    "Name": "F.N.B. Corporation"
  },
  {
    "Symbol": "FNCB",
    "Name": "FNCB Bancorp Inc."
  },
  {
    "Symbol": "FNCH",
    "Name": "Finch Therapeutics Group Inc."
  },
  {
    "Symbol": "FND",
    "Name": "Floor & Decor Holdings Inc."
  },
  {
    "Symbol": "FNF",
    "Name": "FNF Group of Fidelity National Financial Inc."
  },
  {
    "Symbol": "FNGR",
    "Name": "FingerMotion Inc."
  },
  {
    "Symbol": "FNHC",
    "Name": "FedNat Holding Company"
  },
  {
    "Symbol": "FNKO",
    "Name": "Funko Inc. "
  },
  {
    "Symbol": "FNLC",
    "Name": "First Bancorp Inc  (ME)"
  },
  {
    "Symbol": "FNV",
    "Name": "Franco-Nevada Corporation"
  },
  {
    "Symbol": "FNVT",
    "Name": "Finnovate Acquisition "
  },
  {
    "Symbol": "FNVTU",
    "Name": "Finnovate Acquisition Units"
  },
  {
    "Symbol": "FNWB",
    "Name": "First Northwest Bancorp"
  },
  {
    "Symbol": "FNWD",
    "Name": "Finward Bancorp"
  },
  {
    "Symbol": "FOA",
    "Name": "Finance of America Companies Inc. "
  },
  {
    "Symbol": "FOCS",
    "Name": "Focus Financial Partners Inc. "
  },
  {
    "Symbol": "FOE",
    "Name": "Ferro Corporation"
  },
  {
    "Symbol": "FOF",
    "Name": "Cohen & Steers Closed-End Opportunity Fund Inc."
  },
  {
    "Symbol": "FOLD",
    "Name": "Amicus Therapeutics Inc."
  },
  {
    "Symbol": "FONR",
    "Name": "Fonar Corporation"
  },
  {
    "Symbol": "FOR",
    "Name": "Forestar Group Inc"
  },
  {
    "Symbol": "FORA",
    "Name": "Forian Inc."
  },
  {
    "Symbol": "FORD",
    "Name": "Forward Industries Inc."
  },
  {
    "Symbol": "FORG",
    "Name": "ForgeRock Inc. "
  },
  {
    "Symbol": "FORM",
    "Name": "FormFactor Inc. FormFactor Inc."
  },
  {
    "Symbol": "FORR",
    "Name": "Forrester Research Inc."
  },
  {
    "Symbol": "FOSL",
    "Name": "Fossil Group Inc."
  },
  {
    "Symbol": "FOUN",
    "Name": "Founder SPAC "
  },
  {
    "Symbol": "FOUNU",
    "Name": "Founder SPAC Units"
  },
  {
    "Symbol": "FOUR",
    "Name": "Shift4 Payments Inc. "
  },
  {
    "Symbol": "FOX",
    "Name": "Fox Corporation Class B"
  },
  {
    "Symbol": "FOXA",
    "Name": "Fox Corporation "
  },
  {
    "Symbol": "FOXF",
    "Name": "Fox Factory Holding"
  },
  {
    "Symbol": "FOXW",
    "Name": "FoxWayne Enterprises Acquisition "
  },
  {
    "Symbol": "FOXWU",
    "Name": "FoxWayne Enterprises Acquisition Unit"
  },
  {
    "Symbol": "FPAC",
    "Name": "Far Peak Acquisition Corporation "
  },
  {
    "Symbol": "FPAY",
    "Name": "FlexShopper Inc."
  },
  {
    "Symbol": "FPH",
    "Name": "Five Point Holdings LLC "
  },
  {
    "Symbol": "FPI",
    "Name": "Farmland Partners Inc."
  },
  {
    "Symbol": "FR",
    "Name": "First Industrial Realty Trust Inc."
  },
  {
    "Symbol": "FRA",
    "Name": "Blackrock Floating Rate Income Strategies Fund Inc"
  },
  {
    "Symbol": "FRAF",
    "Name": "Franklin Financial Services Corporation"
  },
  {
    "Symbol": "FRBA",
    "Name": "First Bank"
  },
  {
    "Symbol": "FRBK",
    "Name": "Republic First Bancorp Inc."
  },
  {
    "Symbol": "FRBNU",
    "Name": "Forbion European Acquisition Unit"
  },
  {
    "Symbol": "FRC",
    "Name": "FIRST REPUBLIC BANK"
  },
  {
    "Symbol": "FRD",
    "Name": "Friedman Industries Inc."
  },
  {
    "Symbol": "FREE",
    "Name": "Whole Earth Brands Inc. "
  },
  {
    "Symbol": "FREQ",
    "Name": "Frequency Therapeutics Inc."
  },
  {
    "Symbol": "FREY",
    "Name": "FREYR Battery"
  },
  {
    "Symbol": "FRG",
    "Name": "Franchise Group Inc."
  },
  {
    "Symbol": "FRGE",
    "Name": "Forge Global Holdings Inc."
  },
  {
    "Symbol": "FRGI",
    "Name": "Fiesta Restaurant Group Inc."
  },
  {
    "Symbol": "FRHC",
    "Name": "Freedom Holding"
  },
  {
    "Symbol": "FRLA",
    "Name": "Fortune Rise Acquisition Corporation "
  },
  {
    "Symbol": "FRLAU",
    "Name": "Fortune Rise Acquisition Corporation Units"
  },
  {
    "Symbol": "FRME",
    "Name": "First Merchants Corporation"
  },
  {
    "Symbol": "FRMEP",
    "Name": "First Merchants Corporation Depository Shares"
  },
  {
    "Symbol": "FRO",
    "Name": "Frontline Ltd."
  },
  {
    "Symbol": "FROG",
    "Name": "JFrog Ltd."
  },
  {
    "Symbol": "FRON",
    "Name": "Frontier Acquisition "
  },
  {
    "Symbol": "FRONU",
    "Name": "Frontier Acquisition Units"
  },
  {
    "Symbol": "FRPH",
    "Name": "FRP Holdings Inc."
  },
  {
    "Symbol": "FRPT",
    "Name": "Freshpet Inc."
  },
  {
    "Symbol": "FRSG",
    "Name": "First Reserve Sustainable Growth "
  },
  {
    "Symbol": "FRSH",
    "Name": "Freshworks Inc. "
  },
  {
    "Symbol": "FRST",
    "Name": "Primis Financial"
  },
  {
    "Symbol": "FRT",
    "Name": "Federal Realty Investment Trust"
  },
  {
    "Symbol": "FRW",
    "Name": "PWP Forward Acquisition I "
  },
  {
    "Symbol": "FRWAU",
    "Name": "PWP Forward Acquisition I Units"
  },
  {
    "Symbol": "FSBC",
    "Name": "Five Star Bancorp"
  },
  {
    "Symbol": "FSBW",
    "Name": "FS Bancorp Inc."
  },
  {
    "Symbol": "FSEA",
    "Name": "First Seacoast Bancorp"
  },
  {
    "Symbol": "FSFG",
    "Name": "First Savings Financial Group Inc."
  },
  {
    "Symbol": "FSI",
    "Name": "Flexible Solutions International Inc.  (CDA)"
  },
  {
    "Symbol": "FSK",
    "Name": "FS KKR Capital"
  },
  {
    "Symbol": "FSLR",
    "Name": "First Solar Inc."
  },
  {
    "Symbol": "FSLY",
    "Name": "Fastly Inc. "
  },
  {
    "Symbol": "FSM",
    "Name": "Fortuna Silver Mines Inc  (Canada)"
  },
  {
    "Symbol": "FSP",
    "Name": "Franklin Street Properties"
  },
  {
    "Symbol": "FSR",
    "Name": "Fisker Inc. "
  },
  {
    "Symbol": "FSRD",
    "Name": "Fast Radius Inc. "
  },
  {
    "Symbol": "FSS",
    "Name": "Federal Signal Corporation"
  },
  {
    "Symbol": "FSSI",
    "Name": "Fortistar Sustainable Solutions "
  },
  {
    "Symbol": "FSSIU",
    "Name": "Fortistar Sustainable Solutions Unit"
  },
  {
    "Symbol": "FST",
    "Name": "FAST Acquisition "
  },
  {
    "Symbol": "FSTR",
    "Name": "L.B. Foster Company"
  },
  {
    "Symbol": "FSTX",
    "Name": "F-star Therapeutics Inc."
  },
  {
    "Symbol": "FSV",
    "Name": "FirstService Corporation"
  },
  {
    "Symbol": "FT",
    "Name": "Franklin Universal Trust"
  },
  {
    "Symbol": "FTAA",
    "Name": "FTAC Athena Acquisition  Ordinary Share"
  },
  {
    "Symbol": "FTAAU",
    "Name": "FTAC Athena Acquisition Unit"
  },
  {
    "Symbol": "FTAI",
    "Name": "Fortress Transportation and Infrastructure Investors LLC"
  },
  {
    "Symbol": "FTCH",
    "Name": "Farfetch Limited "
  },
  {
    "Symbol": "FTCI",
    "Name": "FTC Solar Inc."
  },
  {
    "Symbol": "FTCV",
    "Name": "FinTech Acquisition V "
  },
  {
    "Symbol": "FTCVU",
    "Name": "FinTech Acquisition V Unit"
  },
  {
    "Symbol": "FTDR",
    "Name": "Frontdoor Inc."
  },
  {
    "Symbol": "FTEK",
    "Name": "Fuel Tech Inc."
  },
  {
    "Symbol": "FTEV",
    "Name": "FinTech Evolution Acquisition Group "
  },
  {
    "Symbol": "FTFT",
    "Name": "Future FinTech Group Inc."
  },
  {
    "Symbol": "FTHM",
    "Name": "Fathom Holdings Inc."
  },
  {
    "Symbol": "FTHY",
    "Name": "First Trust High Yield Opportunities 2027 Term Fund"
  },
  {
    "Symbol": "FTI",
    "Name": "TechnipFMC plc Ordinary Share"
  },
  {
    "Symbol": "FTK",
    "Name": "Flotek Industries Inc."
  },
  {
    "Symbol": "FTNT",
    "Name": "Fortinet Inc."
  },
  {
    "Symbol": "FTPA",
    "Name": "FTAC Parnassus Acquisition "
  },
  {
    "Symbol": "FTRP",
    "Name": "Field Trip Health Ltd."
  },
  {
    "Symbol": "FTS",
    "Name": "Fortis Inc."
  },
  {
    "Symbol": "FTV",
    "Name": "Fortive Corporation"
  },
  {
    "Symbol": "FTVI",
    "Name": "FinTech Acquisition VI "
  },
  {
    "Symbol": "FTVIU",
    "Name": "FinTech Acquisition VI Units"
  },
  {
    "Symbol": "FUBO",
    "Name": "fuboTV Inc."
  },
  {
    "Symbol": "FUL",
    "Name": "H. B. Fuller Company"
  },
  {
    "Symbol": "FULC",
    "Name": "Fulcrum Therapeutics Inc."
  },
  {
    "Symbol": "FULT",
    "Name": "Fulton Financial Corporation"
  },
  {
    "Symbol": "FUN",
    "Name": "Cedar Fair L.P."
  },
  {
    "Symbol": "FUNC",
    "Name": "First United Corporation"
  },
  {
    "Symbol": "FUND",
    "Name": "Sprott Focus Trust Inc."
  },
  {
    "Symbol": "FURY",
    "Name": "Fury Gold Mines Limited"
  },
  {
    "Symbol": "FUSB",
    "Name": "First US Bancshares Inc."
  },
  {
    "Symbol": "FUSN",
    "Name": "Fusion Pharmaceuticals Inc."
  },
  {
    "Symbol": "FUV",
    "Name": "Arcimoto Inc."
  },
  {
    "Symbol": "FVAM",
    "Name": "5:01 Acquisition "
  },
  {
    "Symbol": "FVCB",
    "Name": "FVCBankcorp Inc."
  },
  {
    "Symbol": "FVIV",
    "Name": "Fortress Value Acquisition IV "
  },
  {
    "Symbol": "FVRR",
    "Name": "Fiverr International Ltd.  no par value"
  },
  {
    "Symbol": "FWBI",
    "Name": "First Wave BioPharma Inc."
  },
  {
    "Symbol": "FWONA",
    "Name": "Liberty Media Corporation Series A Liberty Formula One"
  },
  {
    "Symbol": "FWONK",
    "Name": "Liberty Media Corporation Series C Liberty Formula One"
  },
  {
    "Symbol": "FWRD",
    "Name": "Forward Air Corporation"
  },
  {
    "Symbol": "FWRG",
    "Name": "First Watch Restaurant Group Inc."
  },
  {
    "Symbol": "FXCO",
    "Name": "Financial Strategies Acquisition "
  },
  {
    "Symbol": "FXCOR",
    "Name": "Financial Strategies Acquisition Rights"
  },
  {
    "Symbol": "FXLV",
    "Name": "F45 Training Holdings Inc."
  },
  {
    "Symbol": "FXNC",
    "Name": "First National Corporation"
  },
  {
    "Symbol": "FYBR",
    "Name": "Frontier Communications Parent Inc."
  },
  {
    "Symbol": "G",
    "Name": "Genpact Limited"
  },
  {
    "Symbol": "GAB",
    "Name": "Gabelli Equity Trust Inc. (The)"
  },
  {
    "Symbol": "GABC",
    "Name": "German American Bancorp Inc."
  },
  {
    "Symbol": "GACQ",
    "Name": "Global Consumer Acquisition"
  },
  {
    "Symbol": "GACQU",
    "Name": "Global Consumer Acquisition Unit"
  },
  {
    "Symbol": "GAIA",
    "Name": "Gaia Inc. "
  },
  {
    "Symbol": "GAIN",
    "Name": "Gladstone Investment Corporation Business Development Company"
  },
  {
    "Symbol": "GALT",
    "Name": "Galectin Therapeutics Inc."
  },
  {
    "Symbol": "GAM",
    "Name": "General American Investors Inc."
  },
  {
    "Symbol": "GAMB",
    "Name": "Gambling.com Group Limited"
  },
  {
    "Symbol": "GAMC",
    "Name": "Golden Arrow Merger "
  },
  {
    "Symbol": "GAMCU",
    "Name": "Golden Arrow Merger Unit"
  },
  {
    "Symbol": "GAME",
    "Name": "Engine Gaming and Media Inc."
  },
  {
    "Symbol": "GAN",
    "Name": "GAN Limited"
  },
  {
    "Symbol": "GANX",
    "Name": "Gain Therapeutics Inc."
  },
  {
    "Symbol": "GAPA",
    "Name": "G&P Acquisition "
  },
  {
    "Symbol": "GAQ",
    "Name": "Generation Asia I Acquisition Limited "
  },
  {
    "Symbol": "GASS",
    "Name": "StealthGas Inc."
  },
  {
    "Symbol": "GATEU",
    "Name": "Marblegate Acquisition Unit"
  },
  {
    "Symbol": "GATO",
    "Name": "Gatos Silver Inc."
  },
  {
    "Symbol": "GATX",
    "Name": "GATX Corporation"
  },
  {
    "Symbol": "GAU",
    "Name": "Galiano Gold Inc."
  },
  {
    "Symbol": "GB",
    "Name": "Global Blue Group Holding AG"
  },
  {
    "Symbol": "GBCI",
    "Name": "Glacier Bancorp Inc."
  },
  {
    "Symbol": "GBDC",
    "Name": "Golub Capital BDC Inc."
  },
  {
    "Symbol": "GBIO",
    "Name": "Generation Bio Co."
  },
  {
    "Symbol": "GBL",
    "Name": "Gamco Investors Inc."
  },
  {
    "Symbol": "GBLI",
    "Name": "Global Indemnity Group LLC   (DE)"
  },
  {
    "Symbol": "GBNH",
    "Name": "Greenbrook TMS Inc."
  },
  {
    "Symbol": "GBNY",
    "Name": "Generations Bancorp NY Inc."
  },
  {
    "Symbol": "GBOX",
    "Name": "Greenbox POS"
  },
  {
    "Symbol": "GBR",
    "Name": "New Concept Energy Inc"
  },
  {
    "Symbol": "GBRGR",
    "Name": "Goldenbridge Acquisition Limited Right"
  },
  {
    "Symbol": "GBRGU",
    "Name": "Goldenbridge Acquisition Limited Unit"
  },
  {
    "Symbol": "GBS",
    "Name": "GBS Inc."
  },
  {
    "Symbol": "GBT",
    "Name": "Global Blood Therapeutics Inc."
  },
  {
    "Symbol": "GBX",
    "Name": "Greenbrier Companies Inc. (The)"
  },
  {
    "Symbol": "GCBC",
    "Name": "Greene County Bancorp Inc."
  },
  {
    "Symbol": "GCI",
    "Name": "Gannett Co. Inc."
  },
  {
    "Symbol": "GCMG",
    "Name": "GCM Grosvenor Inc. "
  },
  {
    "Symbol": "GCO",
    "Name": "Genesco Inc."
  },
  {
    "Symbol": "GCP",
    "Name": "GCP Applied Technologies Inc."
  },
  {
    "Symbol": "GCTK",
    "Name": "GlucoTrack Inc."
  },
  {
    "Symbol": "GCV",
    "Name": "Gabelli Convertible and Income Securities Fund Inc. (The)"
  },
  {
    "Symbol": "GD",
    "Name": "General Dynamics Corporation"
  },
  {
    "Symbol": "GDDY",
    "Name": "GoDaddy Inc. "
  },
  {
    "Symbol": "GDEN",
    "Name": "Golden Entertainment Inc."
  },
  {
    "Symbol": "GDNR",
    "Name": "Gardiner Healthcare Acquisitions"
  },
  {
    "Symbol": "GDNRU",
    "Name": "Gardiner Healthcare Acquisitions Unit"
  },
  {
    "Symbol": "GDO",
    "Name": "Western Asset Global Corporate Defined Opportunity Fund Inc. Western Asset Global Corporate Defined Opportunity Fund Inc."
  },
  {
    "Symbol": "GDRX",
    "Name": "GoodRx Holdings Inc. "
  },
  {
    "Symbol": "GDS",
    "Name": "GDS Holdings Limited ADS"
  },
  {
    "Symbol": "GDST",
    "Name": "Goldenstone Acquisition Limited"
  },
  {
    "Symbol": "GDSTR",
    "Name": "Goldenstone Acquisition Limited Rights"
  },
  {
    "Symbol": "GDSTU",
    "Name": "Goldenstone Acquisition Limited Units"
  },
  {
    "Symbol": "GDYN",
    "Name": "Grid Dynamics Holdings Inc. "
  },
  {
    "Symbol": "GE",
    "Name": "General Electric Company"
  },
  {
    "Symbol": "GECC",
    "Name": "Great Elm Capital"
  },
  {
    "Symbol": "GEEX",
    "Name": "Games & Esports Experience Acquisition "
  },
  {
    "Symbol": "GEEXU",
    "Name": "Games & Esports Experience Acquisition Unit"
  },
  {
    "Symbol": "GEF",
    "Name": "Greif Inc. "
  },
  {
    "Symbol": "GEG",
    "Name": "Great Elm Group Inc."
  },
  {
    "Symbol": "GEL",
    "Name": "Genesis Energy L.P. Common Units"
  },
  {
    "Symbol": "GENC",
    "Name": "Gencor Industries Inc."
  },
  {
    "Symbol": "GENE",
    "Name": "Genetic Technologies Ltd ADS"
  },
  {
    "Symbol": "GENI",
    "Name": "Genius Sports Limited"
  },
  {
    "Symbol": "GENQ",
    "Name": "Genesis Unicorn Capital "
  },
  {
    "Symbol": "GENQU",
    "Name": "Genesis Unicorn Capital Unit"
  },
  {
    "Symbol": "GEO",
    "Name": "Geo Group Inc (The) REIT"
  },
  {
    "Symbol": "GEOS",
    "Name": "Geospace Technologies Corporation  (Texas)"
  },
  {
    "Symbol": "GER",
    "Name": "Goldman Sachs MLP Energy Renaissance Fund"
  },
  {
    "Symbol": "GERN",
    "Name": "Geron Corporation"
  },
  {
    "Symbol": "GES",
    "Name": "Guess? Inc."
  },
  {
    "Symbol": "GEVO",
    "Name": "Gevo Inc."
  },
  {
    "Symbol": "GF",
    "Name": "New Germany Fund Inc. (The)"
  },
  {
    "Symbol": "GFAI",
    "Name": "Guardforce AI Co. Limited"
  },
  {
    "Symbol": "GFF",
    "Name": "Griffon Corporation"
  },
  {
    "Symbol": "GFGD",
    "Name": "The Growth for Good Acquisition Corporation "
  },
  {
    "Symbol": "GFGDU",
    "Name": "The Growth for Good Acquisition Corporation Unit"
  },
  {
    "Symbol": "GFL",
    "Name": "GFL Environmental Inc. Subordinate voting shares no par value"
  },
  {
    "Symbol": "GFLU",
    "Name": "GFL Environmental Inc. Tangible Equity Units"
  },
  {
    "Symbol": "GFOR",
    "Name": "Graf Acquisition IV"
  },
  {
    "Symbol": "GFS",
    "Name": "GlobalFoundries Inc."
  },
  {
    "Symbol": "GFX",
    "Name": "Golden Falcon Acquisition "
  },
  {
    "Symbol": "GGAA",
    "Name": "Genesis Growth Tech Acquisition "
  },
  {
    "Symbol": "GGAAU",
    "Name": "Genesis Growth Tech Acquisition Unit"
  },
  {
    "Symbol": "GGB",
    "Name": "Gerdau S.A."
  },
  {
    "Symbol": "GGE",
    "Name": "Green Giant Inc."
  },
  {
    "Symbol": "GGG",
    "Name": "Graco Inc."
  },
  {
    "Symbol": "GGGV",
    "Name": "G3 VRM Acquisition "
  },
  {
    "Symbol": "GGGVR",
    "Name": "G3 VRM Acquisition Rights"
  },
  {
    "Symbol": "GGMC",
    "Name": "Glenfarne Merger "
  },
  {
    "Symbol": "GGN",
    "Name": "GAMCO Global Gold Natural Resources & Income Trust"
  },
  {
    "Symbol": "GGPI",
    "Name": "Gores Guggenheim Inc. "
  },
  {
    "Symbol": "GGPIU",
    "Name": "Gores Guggenheim Inc. Unit"
  },
  {
    "Symbol": "GGR",
    "Name": "Gogoro Inc."
  },
  {
    "Symbol": "GGT",
    "Name": "Gabelli Multi-Media Trust Inc. (The)"
  },
  {
    "Symbol": "GH",
    "Name": "Guardant Health Inc."
  },
  {
    "Symbol": "GHAC",
    "Name": "Gaming & Hospitality Acquisition "
  },
  {
    "Symbol": "GHACU",
    "Name": "Gaming & Hospitality Acquisition Unit"
  },
  {
    "Symbol": "GHC",
    "Name": "Graham Holdings Company"
  },
  {
    "Symbol": "GHIX",
    "Name": "Gores Holdings IX Inc. "
  },
  {
    "Symbol": "GHIXU",
    "Name": "Gores Holdings IX Inc. Unit"
  },
  {
    "Symbol": "GHL",
    "Name": "Greenhill & Co. Inc."
  },
  {
    "Symbol": "GHLD",
    "Name": "Guild Holdings Company "
  },
  {
    "Symbol": "GHM",
    "Name": "Graham Corporation"
  },
  {
    "Symbol": "GHRS",
    "Name": "GH Research PLC"
  },
  {
    "Symbol": "GHSI",
    "Name": "Guardion Health Sciences Inc."
  },
  {
    "Symbol": "GHY",
    "Name": "PGIM Global High Yield Fund Inc."
  },
  {
    "Symbol": "GIA",
    "Name": "GigCapital 5 Inc."
  },
  {
    "Symbol": "GIAC",
    "Name": "Gesher I Acquisition "
  },
  {
    "Symbol": "GIACU",
    "Name": "Gesher I Acquisition Corp.Unit"
  },
  {
    "Symbol": "GIB",
    "Name": "CGI Inc."
  },
  {
    "Symbol": "GIC",
    "Name": "Global Industrial Company"
  },
  {
    "Symbol": "GIFI",
    "Name": "Gulf Island Fabrication Inc."
  },
  {
    "Symbol": "GIGM",
    "Name": "GigaMedia Limited"
  },
  {
    "Symbol": "GIL",
    "Name": "Gildan Activewear Inc.  Sub. Vot."
  },
  {
    "Symbol": "GILD",
    "Name": "Gilead Sciences Inc."
  },
  {
    "Symbol": "GILT",
    "Name": "Gilat Satellite Networks Ltd."
  },
  {
    "Symbol": "GIM",
    "Name": "Templeton Global Income Fund Inc."
  },
  {
    "Symbol": "GIPR",
    "Name": "Generation Income Properties Inc."
  },
  {
    "Symbol": "GIS",
    "Name": "General Mills Inc."
  },
  {
    "Symbol": "GIW",
    "Name": "GigInternational1 Inc."
  },
  {
    "Symbol": "GJO",
    "Name": "Synthetic Fixed-Income Securities Inc. Synthetic Fixed-Income Securities Inc. on behalf of STRATS(SM) Trust for Wal-Mart Stores Inc. Securities Series 2004-5"
  },
  {
    "Symbol": "GJR",
    "Name": "Synthetic Fixed-Income Securities Inc. STRATS Trust for Procter&Gamble Securities Series 2006-1"
  },
  {
    "Symbol": "GJS",
    "Name": "Goldman Sachs Group Securities STRATS Trust for Goldman Sachs Group Securities Series 2006-2"
  },
  {
    "Symbol": "GKOS",
    "Name": "Glaukos Corporation"
  },
  {
    "Symbol": "GL",
    "Name": "Globe Life Inc."
  },
  {
    "Symbol": "GLAD",
    "Name": "Gladstone Capital Corporation"
  },
  {
    "Symbol": "GLAQ",
    "Name": "Globis Acquisition"
  },
  {
    "Symbol": "GLBE",
    "Name": "Global-E Online Ltd."
  },
  {
    "Symbol": "GLBL",
    "Name": "Cartesian Growth Corporation  Ordinary Share"
  },
  {
    "Symbol": "GLBLU",
    "Name": "Cartesian Growth Corporation Unit"
  },
  {
    "Symbol": "GLBS",
    "Name": "Globus Maritime Limited"
  },
  {
    "Symbol": "GLBZ",
    "Name": "Glen Burnie Bancorp"
  },
  {
    "Symbol": "GLDD",
    "Name": "Great Lakes Dredge & Dock Corporation"
  },
  {
    "Symbol": "GLDG",
    "Name": "GoldMining Inc."
  },
  {
    "Symbol": "GLEE",
    "Name": "Gladstone Acquisition "
  },
  {
    "Symbol": "GLEEU",
    "Name": "Gladstone Acquisition Unit"
  },
  {
    "Symbol": "GLG",
    "Name": "TD Holdings Inc."
  },
  {
    "Symbol": "GLHA",
    "Name": "Glass Houses Acquisition "
  },
  {
    "Symbol": "GLHAU",
    "Name": "Glass Houses Acquisition Unit"
  },
  {
    "Symbol": "GLLI",
    "Name": "Globalink Investment Inc."
  },
  {
    "Symbol": "GLLIR",
    "Name": "Globalink Investment Inc. Rights"
  },
  {
    "Symbol": "GLLIU",
    "Name": "Globalink Investment Inc. Unit"
  },
  {
    "Symbol": "GLMD",
    "Name": "Galmed Pharmaceuticals Ltd."
  },
  {
    "Symbol": "GLNG",
    "Name": "Golar Lng Ltd"
  },
  {
    "Symbol": "GLO",
    "Name": "Clough Global Opportunities Fund"
  },
  {
    "Symbol": "GLOB",
    "Name": "Globant S.A."
  },
  {
    "Symbol": "GLOP",
    "Name": "GasLog Partners LP Common Units representing limited partnership interests"
  },
  {
    "Symbol": "GLP",
    "Name": "Global Partners LP Global Partners LP Common Units representing Limited Partner Interests"
  },
  {
    "Symbol": "GLPI",
    "Name": "Gaming and Leisure Properties Inc."
  },
  {
    "Symbol": "GLRE",
    "Name": "Greenlight Capital Re Ltd. "
  },
  {
    "Symbol": "GLS",
    "Name": "Gelesis Holdings Inc."
  },
  {
    "Symbol": "GLSI",
    "Name": "Greenwich LifeSciences Inc."
  },
  {
    "Symbol": "GLSPT",
    "Name": "Global SPAC Partners Co. Subunit"
  },
  {
    "Symbol": "GLSPU",
    "Name": "Global SPAC Partners Co. Unit"
  },
  {
    "Symbol": "GLT",
    "Name": "Glatfelter Corporation"
  },
  {
    "Symbol": "GLTA",
    "Name": "Galata Acquisition "
  },
  {
    "Symbol": "GLTO",
    "Name": "Galecto Inc."
  },
  {
    "Symbol": "GLU",
    "Name": "Gabelli Global Utility  of Beneficial Ownership"
  },
  {
    "Symbol": "GLUE",
    "Name": "Monte Rosa Therapeutics Inc."
  },
  {
    "Symbol": "GLV",
    "Name": "Clough Global Dividend and Income Fund  of beneficial interest"
  },
  {
    "Symbol": "GLW",
    "Name": "Corning Incorporated"
  },
  {
    "Symbol": "GLYC",
    "Name": "GlycoMimetics Inc."
  },
  {
    "Symbol": "GM",
    "Name": "General Motors Company"
  },
  {
    "Symbol": "GMAB",
    "Name": "Genmab A/S ADS"
  },
  {
    "Symbol": "GMBL",
    "Name": "Esports Entertainment Group Inc."
  },
  {
    "Symbol": "GMDA",
    "Name": "Gamida Cell Ltd."
  },
  {
    "Symbol": "GME",
    "Name": "GameStop Corporation"
  },
  {
    "Symbol": "GMED",
    "Name": "Globus Medical Inc. "
  },
  {
    "Symbol": "GMFI",
    "Name": "Aetherium Acquisition "
  },
  {
    "Symbol": "GMFIU",
    "Name": "Aetherium Acquisition Unit"
  },
  {
    "Symbol": "GMGI",
    "Name": "Golden Matrix Group Inc."
  },
  {
    "Symbol": "GMRE",
    "Name": "Global Medical REIT Inc."
  },
  {
    "Symbol": "GMS",
    "Name": "GMS Inc."
  },
  {
    "Symbol": "GMTX",
    "Name": "Gemini Therapeutics Inc."
  },
  {
    "Symbol": "GMVD",
    "Name": "G Medical Innovations Holdings Ltd."
  },
  {
    "Symbol": "GNAC",
    "Name": "Group Nine Acquisition "
  },
  {
    "Symbol": "GNACU",
    "Name": "Group Nine Acquisition Unit"
  },
  {
    "Symbol": "GNCA",
    "Name": "Genocea Biosciences Inc."
  },
  {
    "Symbol": "GNE",
    "Name": "Genie Energy Ltd. Class B  Stock"
  },
  {
    "Symbol": "GNK",
    "Name": "Genco Shipping & Trading Limited  New (Marshall Islands)"
  },
  {
    "Symbol": "GNL",
    "Name": "Global Net Lease Inc."
  },
  {
    "Symbol": "GNLN",
    "Name": "Greenlane Holdings Inc. "
  },
  {
    "Symbol": "GNOG",
    "Name": "Golden Nugget Online Gaming Inc. "
  },
  {
    "Symbol": "GNPX",
    "Name": "Genprex Inc."
  },
  {
    "Symbol": "GNRC",
    "Name": "Generac Holdlings Inc."
  },
  {
    "Symbol": "GNS",
    "Name": "Genius Group Limited"
  },
  {
    "Symbol": "GNSS",
    "Name": "Genasys Inc."
  },
  {
    "Symbol": "GNT",
    "Name": "GAMCO Natural Resources Gold & Income Trust"
  },
  {
    "Symbol": "GNTX",
    "Name": "Gentex Corporation"
  },
  {
    "Symbol": "GNTY",
    "Name": "Guaranty Bancshares Inc."
  },
  {
    "Symbol": "GNUS",
    "Name": "Genius Brands International Inc."
  },
  {
    "Symbol": "GNW",
    "Name": "Genworth Financial Inc"
  },
  {
    "Symbol": "GO",
    "Name": "Grocery Outlet Holding"
  },
  {
    "Symbol": "GOAC",
    "Name": "GO Acquisition "
  },
  {
    "Symbol": "GOBI",
    "Name": "Gobi Acquisition "
  },
  {
    "Symbol": "GOCO",
    "Name": "GoHealth Inc. "
  },
  {
    "Symbol": "GOED",
    "Name": "1847 Goedeker Inc. Commom Stock"
  },
  {
    "Symbol": "GOEV",
    "Name": "Canoo Inc. "
  },
  {
    "Symbol": "GOGL",
    "Name": "Golden Ocean Group Limited"
  },
  {
    "Symbol": "GOGN",
    "Name": "GoGreen Investments Corporation "
  },
  {
    "Symbol": "GOGO",
    "Name": "Gogo Inc."
  },
  {
    "Symbol": "GOL",
    "Name": "Gol Linhas Aereas Inteligentes S.A. Sponsored ADR representing 2 Pfd Shares"
  },
  {
    "Symbol": "GOLD",
    "Name": "Barrick Gold Corporation  (BC)"
  },
  {
    "Symbol": "GOLF",
    "Name": "Acushnet Holdings"
  },
  {
    "Symbol": "GOOD",
    "Name": "Gladstone Commercial Corporation Real Estate Investment Trust"
  },
  {
    "Symbol": "GOOG",
    "Name": "Alphabet Inc. Class C Capital Stock"
  },
  {
    "Symbol": "GOOGL",
    "Name": "Alphabet Inc. "
  },
  {
    "Symbol": "GOOS",
    "Name": "Canada Goose Holdings Inc. Subordinate Voting Shares"
  },
  {
    "Symbol": "GORO",
    "Name": "Gold Resource Corporation"
  },
  {
    "Symbol": "GOSS",
    "Name": "Gossamer Bio Inc."
  },
  {
    "Symbol": "GOVX",
    "Name": "GeoVax Labs Inc."
  },
  {
    "Symbol": "GP",
    "Name": "GreenPower Motor Company Inc."
  },
  {
    "Symbol": "GPC",
    "Name": "Genuine Parts Company"
  },
  {
    "Symbol": "GPCO",
    "Name": "Golden Path Acquisition Corporation"
  },
  {
    "Symbol": "GPCOR",
    "Name": "Golden Path Acquisition Corporation Rights"
  },
  {
    "Symbol": "GPI",
    "Name": "Group 1 Automotive Inc."
  },
  {
    "Symbol": "GPK",
    "Name": "Graphic Packaging Holding Company"
  },
  {
    "Symbol": "GPL",
    "Name": "Great Panther Mining Limited  (Canada)"
  },
  {
    "Symbol": "GPMT",
    "Name": "Granite Point Mortgage Trust Inc."
  },
  {
    "Symbol": "GPN",
    "Name": "Global Payments Inc."
  },
  {
    "Symbol": "GPOR",
    "Name": "Gulfport Energy Corporation"
  },
  {
    "Symbol": "GPP",
    "Name": "Green Plains Partners LP Common Units"
  },
  {
    "Symbol": "GPRE",
    "Name": "Green Plains Inc."
  },
  {
    "Symbol": "GPRK",
    "Name": "Geopark Ltd"
  },
  {
    "Symbol": "GPRO",
    "Name": "GoPro Inc. "
  },
  {
    "Symbol": "GPS",
    "Name": "Gap Inc. (The)"
  },
  {
    "Symbol": "GRAB",
    "Name": "Grab Holdings Limited "
  },
  {
    "Symbol": "GRAY",
    "Name": "Graybug Vision Inc."
  },
  {
    "Symbol": "GRBK",
    "Name": "Green Brick Partners Inc."
  },
  {
    "Symbol": "GRC",
    "Name": "Gorman-Rupp Company (The)"
  },
  {
    "Symbol": "GRCY",
    "Name": "Greencity Acquisition Corporation"
  },
  {
    "Symbol": "GRCYU",
    "Name": "Greencity Acquisition Corporation Unit"
  },
  {
    "Symbol": "GREE",
    "Name": "Greenidge Generation Holdings Inc. "
  },
  {
    "Symbol": "GRF",
    "Name": "Eagle Capital Growth Fund Inc."
  },
  {
    "Symbol": "GRIL",
    "Name": "Muscle Maker Inc"
  },
  {
    "Symbol": "GRIN",
    "Name": "Grindrod Shipping Holdings Ltd."
  },
  {
    "Symbol": "GRMN",
    "Name": "Garmin Ltd.  (Switzerland)"
  },
  {
    "Symbol": "GRNA",
    "Name": "GreenLight Biosciences Holdings PBC"
  },
  {
    "Symbol": "GRNQ",
    "Name": "Greenpro Capital"
  },
  {
    "Symbol": "GROM",
    "Name": "Grom Social Enterprises Inc."
  },
  {
    "Symbol": "GROW",
    "Name": "U.S. Global Investors Inc. "
  },
  {
    "Symbol": "GROY",
    "Name": "Gold Royalty"
  },
  {
    "Symbol": "GRPH",
    "Name": "Graphite Bio Inc."
  },
  {
    "Symbol": "GRPN",
    "Name": "Groupon Inc."
  },
  {
    "Symbol": "GRTS",
    "Name": "Gritstone bio Inc."
  },
  {
    "Symbol": "GRTX",
    "Name": "Galera Therapeutics Inc."
  },
  {
    "Symbol": "GRVI",
    "Name": "Grove Inc."
  },
  {
    "Symbol": "GRVY",
    "Name": "GRAVITY Co. Ltd. American Depository Shares"
  },
  {
    "Symbol": "GRWG",
    "Name": "GrowGeneration"
  },
  {
    "Symbol": "GS",
    "Name": "Goldman Sachs Group Inc. (The)"
  },
  {
    "Symbol": "GSAQ",
    "Name": "Global Synergy Acquisition "
  },
  {
    "Symbol": "GSAQU",
    "Name": "Global Synergy Acquisition Units"
  },
  {
    "Symbol": "GSAT",
    "Name": "Globalstar Inc."
  },
  {
    "Symbol": "GSBC",
    "Name": "Great Southern Bancorp Inc."
  },
  {
    "Symbol": "GSBD",
    "Name": "Goldman Sachs BDC Inc."
  },
  {
    "Symbol": "GSHD",
    "Name": "Goosehead Insurance Inc. "
  },
  {
    "Symbol": "GSIT",
    "Name": "GSI Technology"
  },
  {
    "Symbol": "GSK",
    "Name": "GlaxoSmithKline PLC"
  },
  {
    "Symbol": "GSL",
    "Name": "Global Ship Lease Inc New "
  },
  {
    "Symbol": "GSM",
    "Name": "Ferroglobe PLC"
  },
  {
    "Symbol": "GSMG",
    "Name": "Glory Star New Media Group Holdings Limited Ordinary Share"
  },
  {
    "Symbol": "GSQD",
    "Name": "G Squared Ascend I Inc. "
  },
  {
    "Symbol": "GSV",
    "Name": "Gold Standard Ventures Corporation  (Canada)"
  },
  {
    "Symbol": "GT",
    "Name": "The Goodyear Tire & Rubber Company"
  },
  {
    "Symbol": "GTACU",
    "Name": "Global Technology Acquisition I Unit"
  },
  {
    "Symbol": "GTBP",
    "Name": "GT Biopharma Inc."
  },
  {
    "Symbol": "GTE",
    "Name": "Gran Tierra Energy Inc."
  },
  {
    "Symbol": "GTEC",
    "Name": "Greenland Technologies Holding Corporation"
  },
  {
    "Symbol": "GTES",
    "Name": "Gates Industrial Corporation plc"
  },
  {
    "Symbol": "GTH",
    "Name": "Genetron Holdings Limited ADS"
  },
  {
    "Symbol": "GTHX",
    "Name": "G1 Therapeutics Inc."
  },
  {
    "Symbol": "GTIM",
    "Name": "Good Times Restaurants Inc."
  },
  {
    "Symbol": "GTLB",
    "Name": "GitLab Inc. "
  },
  {
    "Symbol": "GTLS",
    "Name": "Chart Industries Inc."
  },
  {
    "Symbol": "GTN",
    "Name": "Gray Television Inc."
  },
  {
    "Symbol": "GTPA",
    "Name": "Gores Technology Partners Inc. "
  },
  {
    "Symbol": "GTPAU",
    "Name": "Gores Technology Partners Inc. Units"
  },
  {
    "Symbol": "GTX",
    "Name": "Garrett Motion Inc."
  },
  {
    "Symbol": "GTXAP",
    "Name": "Garrett Motion Inc. Series A Cumulative Convertible Preferred Stock"
  },
  {
    "Symbol": "GTY",
    "Name": "Getty Realty Corporation"
  },
  {
    "Symbol": "GTYH",
    "Name": "GTY Technology Holdings Inc."
  },
  {
    "Symbol": "GURE",
    "Name": "Gulf Resources Inc. (NV)"
  },
  {
    "Symbol": "GUT",
    "Name": "Gabelli Utility Trust (The)"
  },
  {
    "Symbol": "GVA",
    "Name": "Granite Construction Incorporated"
  },
  {
    "Symbol": "GVCI",
    "Name": "Green Visor Financial Technology Acquisition I "
  },
  {
    "Symbol": "GVCIU",
    "Name": "Green Visor Financial Technology Acquisition I Units"
  },
  {
    "Symbol": "GVP",
    "Name": "GSE Systems Inc."
  },
  {
    "Symbol": "GWGH",
    "Name": "GWG Holdings Inc"
  },
  {
    "Symbol": "GWH",
    "Name": "ESS Tech Inc."
  },
  {
    "Symbol": "GWRE",
    "Name": "Guidewire Software Inc."
  },
  {
    "Symbol": "GWRS",
    "Name": "Global Water Resources Inc."
  },
  {
    "Symbol": "GWW",
    "Name": "W.W. Grainger Inc."
  },
  {
    "Symbol": "GXO",
    "Name": "GXO Logistics Inc."
  },
  {
    "Symbol": "GYRO",
    "Name": "Gyrodyne LLC"
  },
  {
    "Symbol": "H",
    "Name": "Hyatt Hotels Corporation "
  },
  {
    "Symbol": "HA",
    "Name": "Hawaiian Holdings Inc."
  },
  {
    "Symbol": "HAAC",
    "Name": "Health Assurance Acquisition "
  },
  {
    "Symbol": "HAACU",
    "Name": "Health Assurance Acquisition SAIL Securities"
  },
  {
    "Symbol": "HAE",
    "Name": "Haemonetics Corporation"
  },
  {
    "Symbol": "HAFC",
    "Name": "Hanmi Financial Corporation"
  },
  {
    "Symbol": "HAIA",
    "Name": "Healthcare AI Acquisition "
  },
  {
    "Symbol": "HAIN",
    "Name": "Hain Celestial Group Inc. (The)"
  },
  {
    "Symbol": "HAL",
    "Name": "Halliburton Company"
  },
  {
    "Symbol": "HALL",
    "Name": "Hallmark Financial Services Inc."
  },
  {
    "Symbol": "HALO",
    "Name": "Halozyme Therapeutics Inc."
  },
  {
    "Symbol": "HAPP",
    "Name": "Happiness Development Group Limited "
  },
  {
    "Symbol": "HARP",
    "Name": "Harpoon Therapeutics Inc."
  },
  {
    "Symbol": "HAS",
    "Name": "Hasbro Inc."
  },
  {
    "Symbol": "HASI",
    "Name": "Hannon Armstrong Sustainable Infrastructure Capital Inc."
  },
  {
    "Symbol": "HAYN",
    "Name": "Haynes International Inc."
  },
  {
    "Symbol": "HAYW",
    "Name": "Hayward Holdings Inc."
  },
  {
    "Symbol": "HBAN",
    "Name": "Huntington Bancshares Incorporated"
  },
  {
    "Symbol": "HBB",
    "Name": "Hamilton Beach Brands Holding Company "
  },
  {
    "Symbol": "HBCP",
    "Name": "Home Bancorp Inc."
  },
  {
    "Symbol": "HBI",
    "Name": "Hanesbrands Inc."
  },
  {
    "Symbol": "HBIO",
    "Name": "Harvard Bioscience Inc."
  },
  {
    "Symbol": "HBM",
    "Name": "Hudbay Minerals Inc.  (Canada)"
  },
  {
    "Symbol": "HBNC",
    "Name": "Horizon Bancorp Inc."
  },
  {
    "Symbol": "HBP",
    "Name": "Huttig Building Products Inc."
  },
  {
    "Symbol": "HBT",
    "Name": "HBT Financial Inc."
  },
  {
    "Symbol": "HCA",
    "Name": "HCA Healthcare Inc."
  },
  {
    "Symbol": "HCAR",
    "Name": "Healthcare Services Acquisition Corporation "
  },
  {
    "Symbol": "HCAT",
    "Name": "Health Catalyst Inc"
  },
  {
    "Symbol": "HCC",
    "Name": "Warrior Met Coal Inc."
  },
  {
    "Symbol": "HCCI",
    "Name": "Heritage-Crystal Clean Inc."
  },
  {
    "Symbol": "HCDI",
    "Name": "Harbor Custom Development Inc."
  },
  {
    "Symbol": "HCI",
    "Name": "HCI Group Inc."
  },
  {
    "Symbol": "HCIC",
    "Name": "Hennessy Capital Investment V "
  },
  {
    "Symbol": "HCICU",
    "Name": "Hennessy Capital Investment V Units"
  },
  {
    "Symbol": "HCKT",
    "Name": "Hackett Group Inc (The)."
  },
  {
    "Symbol": "HCMA",
    "Name": "HCM Acquisition Corp "
  },
  {
    "Symbol": "HCMAU",
    "Name": "HCM Acquisition Corp Unit"
  },
  {
    "Symbol": "HCNE",
    "Name": "Jaws Hurricane Acquisition "
  },
  {
    "Symbol": "HCNEU",
    "Name": "Jaws Hurricane Acquisition Unit"
  },
  {
    "Symbol": "HCP",
    "Name": "HashiCorp Inc. "
  },
  {
    "Symbol": "HCSG",
    "Name": "Healthcare Services Group Inc."
  },
  {
    "Symbol": "HCTI",
    "Name": "Healthcare Triangle Inc."
  },
  {
    "Symbol": "HCVI",
    "Name": "Hennessy Capital Investment VI "
  },
  {
    "Symbol": "HCVIU",
    "Name": "Hennessy Capital Investment VI Unit"
  },
  {
    "Symbol": "HCWB",
    "Name": "HCW Biologics Inc."
  },
  {
    "Symbol": "HD",
    "Name": "Home Depot Inc. (The)"
  },
  {
    "Symbol": "HDB",
    "Name": "HDFC Bank Limited"
  },
  {
    "Symbol": "HDSN",
    "Name": "Hudson Technologies Inc."
  },
  {
    "Symbol": "HE",
    "Name": "Hawaiian Electric Industries Inc."
  },
  {
    "Symbol": "HEAR",
    "Name": "Turtle Beach Corporation"
  },
  {
    "Symbol": "HEES",
    "Name": "H&E Equipment Services Inc."
  },
  {
    "Symbol": "HEI",
    "Name": "Heico Corporation"
  },
  {
    "Symbol": "HEI/A",
    "Name": "Heico Corporation"
  },
  {
    "Symbol": "HELE",
    "Name": "Helen of Troy Limited"
  },
  {
    "Symbol": "HEP",
    "Name": "Holly Energy Partners L.P."
  },
  {
    "Symbol": "HEPA",
    "Name": "Hepion Pharmaceuticals Inc."
  },
  {
    "Symbol": "HERA",
    "Name": "FTAC Hera Acquisition "
  },
  {
    "Symbol": "HERAU",
    "Name": "FTAC Hera Acquisition Units"
  },
  {
    "Symbol": "HES",
    "Name": "Hess Corporation"
  },
  {
    "Symbol": "HESM",
    "Name": "Hess Midstream LP  Share"
  },
  {
    "Symbol": "HEXO",
    "Name": "HEXO"
  },
  {
    "Symbol": "HFBL",
    "Name": "Home Federal Bancorp Inc. of Louisiana"
  },
  {
    "Symbol": "HFFG",
    "Name": "HF Foods Group Inc."
  },
  {
    "Symbol": "HFRO",
    "Name": "Highland Income Fund"
  },
  {
    "Symbol": "HFWA",
    "Name": "Heritage Financial Corporation"
  },
  {
    "Symbol": "HGBL",
    "Name": "Heritage Global Inc."
  },
  {
    "Symbol": "HGEN",
    "Name": "Humanigen Inc."
  },
  {
    "Symbol": "HGLB",
    "Name": "Highland Global Allocation Fund"
  },
  {
    "Symbol": "HGTY",
    "Name": "Hagerty Inc. "
  },
  {
    "Symbol": "HGV",
    "Name": "Hilton Grand Vacations Inc."
  },
  {
    "Symbol": "HHC",
    "Name": "Howard Hughes Corporation (The)"
  },
  {
    "Symbol": "HHGC",
    "Name": "HHG Capital Corporation"
  },
  {
    "Symbol": "HHLA",
    "Name": "HH&L Acquisition Co. "
  },
  {
    "Symbol": "HHS",
    "Name": "Harte-Hanks Inc."
  },
  {
    "Symbol": "HI",
    "Name": "Hillenbrand Inc"
  },
  {
    "Symbol": "HIBB",
    "Name": "Hibbett Inc."
  },
  {
    "Symbol": "HIFS",
    "Name": "Hingham Institution for Savings"
  },
  {
    "Symbol": "HIG",
    "Name": "Hartford Financial Services Group Inc. (The)"
  },
  {
    "Symbol": "HIGA",
    "Name": "H.I.G. Acquisition "
  },
  {
    "Symbol": "HIHO",
    "Name": "Highway Holdings Limited"
  },
  {
    "Symbol": "HIL",
    "Name": "Hill International Inc."
  },
  {
    "Symbol": "HILS",
    "Name": "Hillstream BioPharma Inc."
  },
  {
    "Symbol": "HIMS",
    "Name": "Hims & Hers Health Inc. "
  },
  {
    "Symbol": "HIO",
    "Name": "Western Asset High Income Opportunity Fund Inc."
  },
  {
    "Symbol": "HIPO",
    "Name": "Hippo Holdings Inc."
  },
  {
    "Symbol": "HITI",
    "Name": "High Tide Inc."
  },
  {
    "Symbol": "HIVE",
    "Name": "Hive Blockchain Technologies Ltd."
  },
  {
    "Symbol": "HIW",
    "Name": "Highwoods Properties Inc."
  },
  {
    "Symbol": "HL",
    "Name": "Hecla Mining Company"
  },
  {
    "Symbol": "HLAH",
    "Name": "Hamilton Lane Alliance Holdings I Inc. "
  },
  {
    "Symbol": "HLAHU",
    "Name": "Hamilton Lane Alliance Holdings I Inc. Unit"
  },
  {
    "Symbol": "HLBZ",
    "Name": "Helbiz Inc. "
  },
  {
    "Symbol": "HLF",
    "Name": "Herbalife Nutrition Ltd."
  },
  {
    "Symbol": "HLGN",
    "Name": "Heliogen Inc."
  },
  {
    "Symbol": "HLI",
    "Name": "Houlihan Lokey Inc. "
  },
  {
    "Symbol": "HLIO",
    "Name": "Helios Technologies Inc."
  },
  {
    "Symbol": "HLIT",
    "Name": "Harmonic Inc."
  },
  {
    "Symbol": "HLLY",
    "Name": "Holley Inc."
  },
  {
    "Symbol": "HLMN",
    "Name": "Hillman Solutions"
  },
  {
    "Symbol": "HLNE",
    "Name": "Hamilton Lane Incorporated "
  },
  {
    "Symbol": "HLT",
    "Name": "Hilton Worldwide Holdings Inc."
  },
  {
    "Symbol": "HLTH",
    "Name": "Cue Health Inc."
  },
  {
    "Symbol": "HLX",
    "Name": "Helix Energy Solutions Group Inc."
  },
  {
    "Symbol": "HMA",
    "Name": "Heartland Media Acquisition "
  },
  {
    "Symbol": "HMC",
    "Name": "Honda Motor Company Ltd."
  },
  {
    "Symbol": "HMCO",
    "Name": "HumanCo Acquisition "
  },
  {
    "Symbol": "HMCOU",
    "Name": "HumanCo Acquisition Unit"
  },
  {
    "Symbol": "HMLP",
    "Name": "Hoegh LNG Partners LP Common Units representing Limited Partner Interests"
  },
  {
    "Symbol": "HMN",
    "Name": "Horace Mann Educators Corporation"
  },
  {
    "Symbol": "HMNF",
    "Name": "HMN Financial Inc."
  },
  {
    "Symbol": "HMPT",
    "Name": "Home Point Capital Inc"
  },
  {
    "Symbol": "HMST",
    "Name": "HomeStreet Inc."
  },
  {
    "Symbol": "HMTV",
    "Name": "Hemisphere Media Group Inc. "
  },
  {
    "Symbol": "HMY",
    "Name": "Harmony Gold Mining Company Limited"
  },
  {
    "Symbol": "HNGR",
    "Name": "Hanger Inc."
  },
  {
    "Symbol": "HNI",
    "Name": "HNI Corporation"
  },
  {
    "Symbol": "HNNA",
    "Name": "Hennessy Advisors Inc."
  },
  {
    "Symbol": "HNP",
    "Name": "Huaneng Power Intl"
  },
  {
    "Symbol": "HNRA",
    "Name": "HNR Acquisition Corp"
  },
  {
    "Symbol": "HNRG",
    "Name": "Hallador Energy Company"
  },
  {
    "Symbol": "HNST",
    "Name": "The Honest Company Inc."
  },
  {
    "Symbol": "HNW",
    "Name": "Pioneer Diversified High Income Fund Inc."
  },
  {
    "Symbol": "HOFT",
    "Name": "Hooker Furnishings Corporation"
  },
  {
    "Symbol": "HOFV",
    "Name": "Hall of Fame Resort & Entertainment Company"
  },
  {
    "Symbol": "HOG",
    "Name": "Harley-Davidson Inc."
  },
  {
    "Symbol": "HOLI",
    "Name": "Hollysys Automation Technologies Ltd.  (British Virgin Islands)"
  },
  {
    "Symbol": "HOLX",
    "Name": "Hologic Inc."
  },
  {
    "Symbol": "HOMB",
    "Name": "Home BancShares Inc."
  },
  {
    "Symbol": "HON",
    "Name": "Honeywell International Inc."
  },
  {
    "Symbol": "HONE",
    "Name": "HarborOne Bancorp Inc."
  },
  {
    "Symbol": "HOOD",
    "Name": "Robinhood Markets Inc. "
  },
  {
    "Symbol": "HOOK",
    "Name": "HOOKIPA Pharma Inc."
  },
  {
    "Symbol": "HOPE",
    "Name": "Hope Bancorp Inc."
  },
  {
    "Symbol": "HORI",
    "Name": "Emerging Markets Horizon "
  },
  {
    "Symbol": "HORIU",
    "Name": "Emerging Markets Horizon Unit"
  },
  {
    "Symbol": "HOTH",
    "Name": "Hoth Therapeutics Inc."
  },
  {
    "Symbol": "HOUR",
    "Name": "Hour Loop Inc."
  },
  {
    "Symbol": "HOV",
    "Name": "Hovnanian Enterprises Inc. "
  },
  {
    "Symbol": "HOVNP",
    "Name": "Hovnanian Enterprises Inc Dep Shr Srs A Pfd"
  },
  {
    "Symbol": "HOWL",
    "Name": "Werewolf Therapeutics Inc."
  },
  {
    "Symbol": "HP",
    "Name": "Helmerich & Payne Inc."
  },
  {
    "Symbol": "HPE",
    "Name": "Hewlett Packard Enterprise Company"
  },
  {
    "Symbol": "HPK",
    "Name": "HighPeak Energy Inc."
  },
  {
    "Symbol": "HPLT",
    "Name": "Home Plate Acquisition Corporation "
  },
  {
    "Symbol": "HPP",
    "Name": "Hudson Pacific Properties Inc."
  },
  {
    "Symbol": "HPQ",
    "Name": "HP Inc."
  },
  {
    "Symbol": "HPX",
    "Name": "HPX "
  },
  {
    "Symbol": "HQH",
    "Name": "Tekla Healthcare Investors"
  },
  {
    "Symbol": "HQI",
    "Name": "HireQuest Inc.  (DE)"
  },
  {
    "Symbol": "HQL",
    "Name": "TeklaLife Sciences Investors"
  },
  {
    "Symbol": "HQY",
    "Name": "HealthEquity Inc."
  },
  {
    "Symbol": "HR",
    "Name": "Healthcare Realty Trust Incorporated"
  },
  {
    "Symbol": "HRB",
    "Name": "H&R Block Inc."
  },
  {
    "Symbol": "HRI",
    "Name": "Herc Holdings Inc."
  },
  {
    "Symbol": "HRL",
    "Name": "Hormel Foods Corporation"
  },
  {
    "Symbol": "HRMY",
    "Name": "Harmony Biosciences Holdings Inc."
  },
  {
    "Symbol": "HROW",
    "Name": "Harrow Health Inc."
  },
  {
    "Symbol": "HRT",
    "Name": "HireRight Holdings Corporation"
  },
  {
    "Symbol": "HRTG",
    "Name": "Heritage Insurance Holdings Inc."
  },
  {
    "Symbol": "HRTX",
    "Name": "Heron Therapeutics Inc."
  },
  {
    "Symbol": "HRZN",
    "Name": "Horizon Technology Finance Corporation"
  },
  {
    "Symbol": "HSAQ",
    "Name": "Health Sciences Acquisitions Corporation 2"
  },
  {
    "Symbol": "HSBC",
    "Name": "HSBC Holdings plc."
  },
  {
    "Symbol": "HSC",
    "Name": "Harsco Corporation"
  },
  {
    "Symbol": "HSDT",
    "Name": "Helius Medical Technologies Inc.   (DE)"
  },
  {
    "Symbol": "HSIC",
    "Name": "Henry Schein Inc."
  },
  {
    "Symbol": "HSKA",
    "Name": "Heska Corporation"
  },
  {
    "Symbol": "HSON",
    "Name": "Hudson Global Inc."
  },
  {
    "Symbol": "HST",
    "Name": "Host Hotels & Resorts Inc."
  },
  {
    "Symbol": "HSTM",
    "Name": "HealthStream Inc."
  },
  {
    "Symbol": "HSTO",
    "Name": "Histogen Inc."
  },
  {
    "Symbol": "HSY",
    "Name": "The Hershey Company"
  },
  {
    "Symbol": "HTA",
    "Name": "Healthcare Trust of America Inc. "
  },
  {
    "Symbol": "HTAQ",
    "Name": "Hunt Companies Acquisition I "
  },
  {
    "Symbol": "HTBI",
    "Name": "HomeTrust Bancshares Inc."
  },
  {
    "Symbol": "HTBK",
    "Name": "Heritage Commerce Corp"
  },
  {
    "Symbol": "HTBX",
    "Name": "Heat Biologics Inc."
  },
  {
    "Symbol": "HTCR",
    "Name": "Heartcore Enterprises Inc."
  },
  {
    "Symbol": "HTGC",
    "Name": "Hercules Capital Inc."
  },
  {
    "Symbol": "HTGM",
    "Name": "HTG Molecular Diagnostics Inc."
  },
  {
    "Symbol": "HTH",
    "Name": "Hilltop Holdings Inc."
  },
  {
    "Symbol": "HTLD",
    "Name": "Heartland Express Inc."
  },
  {
    "Symbol": "HTLF",
    "Name": "Heartland Financial USA Inc."
  },
  {
    "Symbol": "HTOO",
    "Name": "Fusion Fuel Green PLC "
  },
  {
    "Symbol": "HTPA",
    "Name": "Highland Transcend Partners I "
  },
  {
    "Symbol": "HTZ",
    "Name": "Hertz Global Holdings Inc"
  },
  {
    "Symbol": "HUBB",
    "Name": "Hubbell Inc"
  },
  {
    "Symbol": "HUBG",
    "Name": "Hub Group Inc. "
  },
  {
    "Symbol": "HUBS",
    "Name": "HubSpot Inc."
  },
  {
    "Symbol": "HUDI",
    "Name": "Huadi International Group Co. Ltd."
  },
  {
    "Symbol": "HUGE",
    "Name": "FSD Pharma Inc. Class B Subordinate Voting Shares"
  },
  {
    "Symbol": "HUGS",
    "Name": "USHG Acquisition "
  },
  {
    "Symbol": "HUM",
    "Name": "Humana Inc."
  },
  {
    "Symbol": "HUMA",
    "Name": "Humacyte Inc."
  },
  {
    "Symbol": "HUN",
    "Name": "Huntsman Corporation"
  },
  {
    "Symbol": "HURC",
    "Name": "Hurco Companies Inc."
  },
  {
    "Symbol": "HURN",
    "Name": "Huron Consulting Group Inc."
  },
  {
    "Symbol": "HUSA",
    "Name": "Houston American Energy Corporation"
  },
  {
    "Symbol": "HUSN",
    "Name": "Hudson Capital Inc."
  },
  {
    "Symbol": "HUT",
    "Name": "Hut 8 Mining"
  },
  {
    "Symbol": "HVBC",
    "Name": "HV Bancorp Inc."
  },
  {
    "Symbol": "HVT",
    "Name": "Haverty Furniture Companies Inc."
  },
  {
    "Symbol": "HVT/A",
    "Name": "Haverty Furniture Companies Inc."
  },
  {
    "Symbol": "HWBK",
    "Name": "Hawthorn Bancshares Inc."
  },
  {
    "Symbol": "HWC",
    "Name": "Hancock Whitney Corporation"
  },
  {
    "Symbol": "HWEL",
    "Name": "Healthwell Acquisition I "
  },
  {
    "Symbol": "HWELU",
    "Name": "Healthwell Acquisition I Unit"
  },
  {
    "Symbol": "HWKN",
    "Name": "Hawkins Inc."
  },
  {
    "Symbol": "HWKZ",
    "Name": "Hawks Acquisition Corp "
  },
  {
    "Symbol": "HWM",
    "Name": "Howmet Aerospace Inc."
  },
  {
    "Symbol": "HXL",
    "Name": "Hexcel Corporation"
  },
  {
    "Symbol": "HY",
    "Name": "Hyster-Yale Materials Handling Inc. "
  },
  {
    "Symbol": "HYB",
    "Name": "New America High Income Fund Inc. (The)"
  },
  {
    "Symbol": "HYFM",
    "Name": "Hydrofarm Holdings Group Inc."
  },
  {
    "Symbol": "HYI",
    "Name": "Western Asset High Yield Defined Opportunity Fund Inc."
  },
  {
    "Symbol": "HYLN",
    "Name": "Hyliion Holdings "
  },
  {
    "Symbol": "HYMC",
    "Name": "Hycroft Mining Holding Corporation "
  },
  {
    "Symbol": "HYPR",
    "Name": "Hyperfine Inc. "
  },
  {
    "Symbol": "HYRE",
    "Name": "HyreCar Inc."
  },
  {
    "Symbol": "HYT",
    "Name": "Blackrock Corporate High Yield Fund Inc."
  },
  {
    "Symbol": "HYZN",
    "Name": "Hyzon Motors Inc. "
  },
  {
    "Symbol": "HZN",
    "Name": "Horizon Global Corporation"
  },
  {
    "Symbol": "HZNP",
    "Name": "Horizon Therapeutics Public Limited Company"
  },
  {
    "Symbol": "HZO",
    "Name": "MarineMax Inc.  (FL)"
  },
  {
    "Symbol": "IAA",
    "Name": "IAA Inc."
  },
  {
    "Symbol": "IAC",
    "Name": "IAC/InterActiveCorp"
  },
  {
    "Symbol": "IACC",
    "Name": "ION Acquisition Corp 3 Ltd. "
  },
  {
    "Symbol": "IAF",
    "Name": "Aberdeen Australia Equity Fund Inc"
  },
  {
    "Symbol": "IAG",
    "Name": "Iamgold Corporation"
  },
  {
    "Symbol": "IART",
    "Name": "Integra LifeSciences Holdings Corporation"
  },
  {
    "Symbol": "IAS",
    "Name": "Integral Ad Science Holding"
  },
  {
    "Symbol": "IBA",
    "Name": "Industrias Bachoco S.A.B. de C.V."
  },
  {
    "Symbol": "IBCP",
    "Name": "Independent Bank Corporation"
  },
  {
    "Symbol": "IBER",
    "Name": "Ibere Pharmaceuticals "
  },
  {
    "Symbol": "IBEX",
    "Name": "IBEX Limited"
  },
  {
    "Symbol": "IBIO",
    "Name": "iBio Inc."
  },
  {
    "Symbol": "IBKR",
    "Name": "Interactive Brokers Group Inc. "
  },
  {
    "Symbol": "IBM",
    "Name": "International Business Machines Corporation"
  },
  {
    "Symbol": "IBN",
    "Name": "ICICI Bank Limited"
  },
  {
    "Symbol": "IBOC",
    "Name": "International Bancshares Corporation"
  },
  {
    "Symbol": "IBP",
    "Name": "Installed Building Products Inc."
  },
  {
    "Symbol": "IBRX",
    "Name": "ImmunityBio Inc."
  },
  {
    "Symbol": "IBTX",
    "Name": "Independent Bank Group Inc"
  },
  {
    "Symbol": "ICAD",
    "Name": "iCAD Inc."
  },
  {
    "Symbol": "ICCC",
    "Name": "ImmuCell Corporation"
  },
  {
    "Symbol": "ICCH",
    "Name": "ICC Holdings Inc."
  },
  {
    "Symbol": "ICCM",
    "Name": "IceCure Medical Ltd."
  },
  {
    "Symbol": "ICD",
    "Name": "Independence Contract Drilling Inc."
  },
  {
    "Symbol": "ICE",
    "Name": "Intercontinental Exchange Inc."
  },
  {
    "Symbol": "ICFI",
    "Name": "ICF International Inc."
  },
  {
    "Symbol": "ICHR",
    "Name": "Ichor Holdings"
  },
  {
    "Symbol": "ICL",
    "Name": "ICL Group Ltd."
  },
  {
    "Symbol": "ICLR",
    "Name": "ICON plc"
  },
  {
    "Symbol": "ICMB",
    "Name": "Investcorp Credit Management BDC Inc."
  },
  {
    "Symbol": "ICNC",
    "Name": "Iconic Sports Acquisition "
  },
  {
    "Symbol": "ICPT",
    "Name": "Intercept Pharmaceuticals Inc."
  },
  {
    "Symbol": "ICUI",
    "Name": "ICU Medical Inc."
  },
  {
    "Symbol": "ICVX",
    "Name": "Icosavax Inc."
  },
  {
    "Symbol": "ID",
    "Name": "PARTS iD Inc. "
  },
  {
    "Symbol": "IDA",
    "Name": "IDACORP Inc."
  },
  {
    "Symbol": "IDAI",
    "Name": "T Stamp Inc. "
  },
  {
    "Symbol": "IDCC",
    "Name": "InterDigital Inc."
  },
  {
    "Symbol": "IDEX",
    "Name": "Ideanomics Inc."
  },
  {
    "Symbol": "IDN",
    "Name": "Intellicheck Inc."
  },
  {
    "Symbol": "IDR",
    "Name": "Idaho Strategic Resources Inc."
  },
  {
    "Symbol": "IDRA",
    "Name": "Idera Pharmaceuticals Inc."
  },
  {
    "Symbol": "IDT",
    "Name": "IDT Corporation Class B"
  },
  {
    "Symbol": "IDW",
    "Name": "IDW Media Holdings Class B"
  },
  {
    "Symbol": "IDXX",
    "Name": "IDEXX Laboratories Inc."
  },
  {
    "Symbol": "IDYA",
    "Name": "IDEAYA Biosciences Inc."
  },
  {
    "Symbol": "IEA",
    "Name": "Infrastructure and Energy Alternatives Inc."
  },
  {
    "Symbol": "IEP",
    "Name": "Icahn Enterprises L.P."
  },
  {
    "Symbol": "IESC",
    "Name": "IES Holdings Inc."
  },
  {
    "Symbol": "IEX",
    "Name": "IDEX Corporation"
  },
  {
    "Symbol": "IFBD",
    "Name": "Infobird Co. Ltd"
  },
  {
    "Symbol": "IFF",
    "Name": "International Flavors & Fragrances Inc."
  },
  {
    "Symbol": "IFIN",
    "Name": "InFinT Acquisition Corporation "
  },
  {
    "Symbol": "IFN",
    "Name": "India Fund Inc. (The)"
  },
  {
    "Symbol": "IFRX",
    "Name": "InflaRx N.V."
  },
  {
    "Symbol": "IFS",
    "Name": "Intercorp Financial Services Inc."
  },
  {
    "Symbol": "IGAC",
    "Name": "IG Acquisition "
  },
  {
    "Symbol": "IGACU",
    "Name": "IG Acquisition Unit"
  },
  {
    "Symbol": "IGC",
    "Name": "India Globalization Capital Inc."
  },
  {
    "Symbol": "IGD",
    "Name": "Voya Global Equity Dividend and Premium Opportunity Fund"
  },
  {
    "Symbol": "IGI",
    "Name": "Western Asset Investment Grade Defined Opportunity Trust Inc."
  },
  {
    "Symbol": "IGIC",
    "Name": "International General Insurance Holdings Ltd. Ordinary Share"
  },
  {
    "Symbol": "IGMS",
    "Name": "IGM Biosciences Inc."
  },
  {
    "Symbol": "IGNY",
    "Name": "Ignyte Acquisition"
  },
  {
    "Symbol": "IGNYU",
    "Name": "Ignyte Acquisition Unit"
  },
  {
    "Symbol": "IGT",
    "Name": "International Game Technology"
  },
  {
    "Symbol": "IGTA",
    "Name": "Inception Growth Acquisition Limited"
  },
  {
    "Symbol": "IGTAR",
    "Name": "Inception Growth Acquisition Limited Rights"
  },
  {
    "Symbol": "IGTAU",
    "Name": "Inception Growth Acquisition Limited Unit"
  },
  {
    "Symbol": "IHD",
    "Name": "Voya Emerging Markets High Income Dividend Equity Fund"
  },
  {
    "Symbol": "IHRT",
    "Name": "iHeartMedia Inc. "
  },
  {
    "Symbol": "IHS",
    "Name": "IHS Holding Limited"
  },
  {
    "Symbol": "IKNA",
    "Name": "Ikena Oncology Inc."
  },
  {
    "Symbol": "IKT",
    "Name": "Inhibikase Therapeutics Inc."
  },
  {
    "Symbol": "ILMN",
    "Name": "Illumina Inc."
  },
  {
    "Symbol": "IMAC",
    "Name": "IMAC Holdings Inc."
  },
  {
    "Symbol": "IMAQ",
    "Name": "International Media Acquisition "
  },
  {
    "Symbol": "IMAQR",
    "Name": "International Media Acquisition Rights"
  },
  {
    "Symbol": "IMAQU",
    "Name": "International Media Acquisition Unit"
  },
  {
    "Symbol": "IMAX",
    "Name": "Imax Corporation"
  },
  {
    "Symbol": "IMBI",
    "Name": "iMedia Brands Inc. "
  },
  {
    "Symbol": "IMCC",
    "Name": "IM Cannabis"
  },
  {
    "Symbol": "IMGN",
    "Name": "ImmunoGen Inc."
  },
  {
    "Symbol": "IMGO",
    "Name": "Imago BioSciences Inc."
  },
  {
    "Symbol": "IMH",
    "Name": "Impac Mortgage Holdings Inc."
  },
  {
    "Symbol": "IMKTA",
    "Name": "Ingles Markets Incorporated "
  },
  {
    "Symbol": "IMMR",
    "Name": "Immersion Corporation"
  },
  {
    "Symbol": "IMMX",
    "Name": "Immix Biopharma Inc."
  },
  {
    "Symbol": "IMNM",
    "Name": "Immunome Inc."
  },
  {
    "Symbol": "IMO",
    "Name": "Imperial Oil Limited"
  },
  {
    "Symbol": "IMPL",
    "Name": "Impel NeuroPharma Inc."
  },
  {
    "Symbol": "IMPP",
    "Name": "Imperial Petroleum Inc."
  },
  {
    "Symbol": "IMPX",
    "Name": "AEA-Bridges Impact "
  },
  {
    "Symbol": "IMRA",
    "Name": "IMARA Inc."
  },
  {
    "Symbol": "IMRX",
    "Name": "Immuneering Corporation "
  },
  {
    "Symbol": "IMTE",
    "Name": "Integrated Media Technology Limited"
  },
  {
    "Symbol": "IMTX",
    "Name": "Immatics N.V."
  },
  {
    "Symbol": "IMUX",
    "Name": "Immunic Inc."
  },
  {
    "Symbol": "IMV",
    "Name": "IMV Inc."
  },
  {
    "Symbol": "IMVT",
    "Name": "Immunovant Inc."
  },
  {
    "Symbol": "IMXI",
    "Name": "International Money Express Inc."
  },
  {
    "Symbol": "INAB",
    "Name": "IN8bio Inc."
  },
  {
    "Symbol": "INAQ",
    "Name": "Insight Acquisition "
  },
  {
    "Symbol": "INBK",
    "Name": "First Internet Bancorp"
  },
  {
    "Symbol": "INBX",
    "Name": "Inhibrx Inc."
  },
  {
    "Symbol": "INCR",
    "Name": "Intercure Ltd."
  },
  {
    "Symbol": "INCY",
    "Name": "Incyte"
  },
  {
    "Symbol": "INDB",
    "Name": "Independent Bank"
  },
  {
    "Symbol": "INDI",
    "Name": "indie Semiconductor Inc. "
  },
  {
    "Symbol": "INDO",
    "Name": "Indonesia Energy Corporation Limited"
  },
  {
    "Symbol": "INDP",
    "Name": "Indaptus Therapeutics Inc."
  },
  {
    "Symbol": "INDT",
    "Name": "INDUS Realty Trust Inc. (MD)"
  },
  {
    "Symbol": "INFA",
    "Name": "Informatica Inc. "
  },
  {
    "Symbol": "INFI",
    "Name": "Infinity Pharmaceuticals Inc."
  },
  {
    "Symbol": "INFN",
    "Name": "Infinera Corporation"
  },
  {
    "Symbol": "INFU",
    "Name": "InfuSystems Holdings Inc."
  },
  {
    "Symbol": "ING",
    "Name": "ING Group N.V."
  },
  {
    "Symbol": "INGN",
    "Name": "Inogen Inc"
  },
  {
    "Symbol": "INGR",
    "Name": "Ingredion Incorporated"
  },
  {
    "Symbol": "INKA",
    "Name": "KludeIn I Acquisition "
  },
  {
    "Symbol": "INKAU",
    "Name": "KludeIn I Acquisition Unit"
  },
  {
    "Symbol": "INKT",
    "Name": "MiNK Therapeutics Inc."
  },
  {
    "Symbol": "INM",
    "Name": "InMed Pharmaceuticals Inc."
  },
  {
    "Symbol": "INMB",
    "Name": "INmune Bio Inc."
  },
  {
    "Symbol": "INMD",
    "Name": "InMode Ltd."
  },
  {
    "Symbol": "INN",
    "Name": "Summit Hotel Properties Inc."
  },
  {
    "Symbol": "INNV",
    "Name": "InnovAge Holding"
  },
  {
    "Symbol": "INO",
    "Name": "Inovio Pharmaceuticals Inc."
  },
  {
    "Symbol": "INOD",
    "Name": "Innodata Inc."
  },
  {
    "Symbol": "INPX",
    "Name": "Inpixon"
  },
  {
    "Symbol": "INSE",
    "Name": "Inspired Entertainment Inc."
  },
  {
    "Symbol": "INSG",
    "Name": "Inseego"
  },
  {
    "Symbol": "INSI",
    "Name": "Insight Select Income Fund"
  },
  {
    "Symbol": "INSM",
    "Name": "Insmed Inc."
  },
  {
    "Symbol": "INSP",
    "Name": "Inspire Medical Systems Inc."
  },
  {
    "Symbol": "INST",
    "Name": "Instructure Holdings Inc."
  },
  {
    "Symbol": "INSW",
    "Name": "International Seaways Inc."
  },
  {
    "Symbol": "INT",
    "Name": "World Fuel Services Corporation"
  },
  {
    "Symbol": "INTA",
    "Name": "Intapp Inc."
  },
  {
    "Symbol": "INTC",
    "Name": "Intel Corporation"
  },
  {
    "Symbol": "INTE",
    "Name": "Integral Acquisition Corporation 1 "
  },
  {
    "Symbol": "INTEU",
    "Name": "Integral Acquisition Corporation 1 Unit"
  },
  {
    "Symbol": "INTG",
    "Name": "Intergroup Corporation (The)"
  },
  {
    "Symbol": "INTT",
    "Name": "inTest Corporation"
  },
  {
    "Symbol": "INTU",
    "Name": "Intuit Inc."
  },
  {
    "Symbol": "INTZ",
    "Name": "Intrusion Inc."
  },
  {
    "Symbol": "INUV",
    "Name": "Inuvo Inc."
  },
  {
    "Symbol": "INVA",
    "Name": "Innoviva Inc."
  },
  {
    "Symbol": "INVE",
    "Name": "Identiv Inc."
  },
  {
    "Symbol": "INVH",
    "Name": "Invitation Homes Inc."
  },
  {
    "Symbol": "INVO",
    "Name": "INVO BioScience Inc."
  },
  {
    "Symbol": "INVZ",
    "Name": "Innoviz Technologies Ltd."
  },
  {
    "Symbol": "INZY",
    "Name": "Inozyme Pharma Inc."
  },
  {
    "Symbol": "IO",
    "Name": "Ion Geophysical Corporation"
  },
  {
    "Symbol": "IOAC",
    "Name": "Innovative International Acquisition "
  },
  {
    "Symbol": "IOACU",
    "Name": "Innovative International Acquisition Unit"
  },
  {
    "Symbol": "IOBT",
    "Name": "IO Biotech Inc."
  },
  {
    "Symbol": "IONM",
    "Name": "Assure Holdings"
  },
  {
    "Symbol": "IONQ",
    "Name": "IonQ Inc."
  },
  {
    "Symbol": "IONS",
    "Name": "Ionis Pharmaceuticals Inc."
  },
  {
    "Symbol": "IOR",
    "Name": "Income Opportunity Realty Investors Inc."
  },
  {
    "Symbol": "IOSP",
    "Name": "Innospec Inc."
  },
  {
    "Symbol": "IOT",
    "Name": "Samsara Inc. "
  },
  {
    "Symbol": "IOVA",
    "Name": "Iovance Biotherapeutics Inc."
  },
  {
    "Symbol": "IP",
    "Name": "International Paper Company"
  },
  {
    "Symbol": "IPA",
    "Name": "ImmunoPrecise Antibodies Ltd."
  },
  {
    "Symbol": "IPAR",
    "Name": "Inter Parfums Inc."
  },
  {
    "Symbol": "IPAX",
    "Name": "Inflection Point Acquisition  Ordinary Share"
  },
  {
    "Symbol": "IPAXU",
    "Name": "Inflection Point Acquisition Units"
  },
  {
    "Symbol": "IPDN",
    "Name": "Professional Diversity Network Inc."
  },
  {
    "Symbol": "IPG",
    "Name": "Interpublic Group of Companies Inc. (The)"
  },
  {
    "Symbol": "IPGP",
    "Name": "IPG Photonics Corporation"
  },
  {
    "Symbol": "IPHA",
    "Name": "Innate Pharma S.A. ADS"
  },
  {
    "Symbol": "IPI",
    "Name": "Intrepid Potash Inc"
  },
  {
    "Symbol": "IPOD",
    "Name": "Social Capital Hedosophia Holdings IV "
  },
  {
    "Symbol": "IPOF",
    "Name": "Social Capital Hedosophia Holdings VI "
  },
  {
    "Symbol": "IPSC",
    "Name": "Century Therapeutics Inc."
  },
  {
    "Symbol": "IPVI",
    "Name": "InterPrivate IV InfraTech Partners Inc. "
  },
  {
    "Symbol": "IPVIU",
    "Name": "InterPrivate IV InfraTech Partners Inc. Units"
  },
  {
    "Symbol": "IPW",
    "Name": "iPower Inc."
  },
  {
    "Symbol": "IPWR",
    "Name": "Ideal Power Inc."
  },
  {
    "Symbol": "IQI",
    "Name": "Invesco Quality Municipal Income Trust"
  },
  {
    "Symbol": "IQMD",
    "Name": "Intelligent Medicine Acquisition "
  },
  {
    "Symbol": "IQMDU",
    "Name": "Intelligent Medicine Acquisition Unit"
  },
  {
    "Symbol": "IQV",
    "Name": "IQVIA Holdings Inc."
  },
  {
    "Symbol": "IR",
    "Name": "Ingersoll Rand Inc."
  },
  {
    "Symbol": "IRBT",
    "Name": "iRobot Corporation"
  },
  {
    "Symbol": "IRDM",
    "Name": "Iridium Communications Inc"
  },
  {
    "Symbol": "IREN",
    "Name": "Iris Energy Limited"
  },
  {
    "Symbol": "IRIX",
    "Name": "IRIDEX Corporation"
  },
  {
    "Symbol": "IRL",
    "Name": "New Ireland Fund Inc (The)"
  },
  {
    "Symbol": "IRM",
    "Name": "Iron Mountain Incorporated (Delaware) REIT"
  },
  {
    "Symbol": "IRMD",
    "Name": "iRadimed Corporation"
  },
  {
    "Symbol": "IRNT",
    "Name": "IronNet Inc."
  },
  {
    "Symbol": "IROQ",
    "Name": "IF Bancorp Inc."
  },
  {
    "Symbol": "IRRX",
    "Name": "Integrated Rail and Resources Acquisition "
  },
  {
    "Symbol": "IRS",
    "Name": "IRSA Inversiones Y Representaciones S.A."
  },
  {
    "Symbol": "IRT",
    "Name": "Independence Realty Trust Inc."
  },
  {
    "Symbol": "IRTC",
    "Name": "iRhythm Technologies Inc."
  },
  {
    "Symbol": "IRWD",
    "Name": "Ironwood Pharmaceuticals Inc. "
  },
  {
    "Symbol": "IS",
    "Name": "ironSource Ltd. "
  },
  {
    "Symbol": "ISAA",
    "Name": "Iron Spark I Inc. "
  },
  {
    "Symbol": "ISD",
    "Name": "PGIM High Yield Bond Fund Inc."
  },
  {
    "Symbol": "ISDR",
    "Name": "Issuer Direct Corporation"
  },
  {
    "Symbol": "ISEE",
    "Name": "IVERIC bio Inc."
  },
  {
    "Symbol": "ISIG",
    "Name": "Insignia Systems Inc."
  },
  {
    "Symbol": "ISLE",
    "Name": "Isleworth Healthcare Acquisition Corporation"
  },
  {
    "Symbol": "ISO",
    "Name": "IsoPlexis Corporation"
  },
  {
    "Symbol": "ISPC",
    "Name": "iSpecimen Inc."
  },
  {
    "Symbol": "ISPO",
    "Name": "Inspirato Incorporated "
  },
  {
    "Symbol": "ISR",
    "Name": "IsoRay Inc.  (DE)"
  },
  {
    "Symbol": "ISRG",
    "Name": "Intuitive Surgical Inc."
  },
  {
    "Symbol": "ISSC",
    "Name": "Innovative Solutions and Support Inc."
  },
  {
    "Symbol": "ISTR",
    "Name": "Investar Holding Corporation"
  },
  {
    "Symbol": "ISUN",
    "Name": "iSun Inc."
  },
  {
    "Symbol": "IT",
    "Name": "Gartner Inc."
  },
  {
    "Symbol": "ITCI",
    "Name": "Intra-Cellular Therapies Inc."
  },
  {
    "Symbol": "ITGR",
    "Name": "Integer Holdings Corporation"
  },
  {
    "Symbol": "ITHX",
    "Name": "ITHAX Acquisition "
  },
  {
    "Symbol": "ITHXU",
    "Name": "ITHAX Acquisition Unit"
  },
  {
    "Symbol": "ITI",
    "Name": "Iteris Inc."
  },
  {
    "Symbol": "ITIC",
    "Name": "Investors Title Company"
  },
  {
    "Symbol": "ITOS",
    "Name": "iTeos Therapeutics Inc."
  },
  {
    "Symbol": "ITP",
    "Name": "IT Tech Packaging Inc."
  },
  {
    "Symbol": "ITQ",
    "Name": "Itiquira Acquisition "
  },
  {
    "Symbol": "ITQRU",
    "Name": "Itiquira Acquisition Unit"
  },
  {
    "Symbol": "ITRG",
    "Name": "Integra Resources"
  },
  {
    "Symbol": "ITRI",
    "Name": "Itron Inc."
  },
  {
    "Symbol": "ITRM",
    "Name": "Iterum Therapeutics plc Ordinary Share"
  },
  {
    "Symbol": "ITRN",
    "Name": "Ituran Location and Control Ltd."
  },
  {
    "Symbol": "ITT",
    "Name": "ITT Inc."
  },
  {
    "Symbol": "ITW",
    "Name": "Illinois Tool Works Inc."
  },
  {
    "Symbol": "IVA",
    "Name": "Inventiva S.A. American Depository Shares"
  },
  {
    "Symbol": "IVAC",
    "Name": "Intevac Inc."
  },
  {
    "Symbol": "IVC",
    "Name": "Invacare Corporation"
  },
  {
    "Symbol": "IVCB",
    "Name": "Investcorp Europe Acquisition Corp I "
  },
  {
    "Symbol": "IVCBU",
    "Name": "Investcorp Europe Acquisition Corp I Unit"
  },
  {
    "Symbol": "IVCP",
    "Name": "Swiftmerge Acquisition  Ordinary Share"
  },
  {
    "Symbol": "IVCPU",
    "Name": "Swiftmerge Acquisition Unit"
  },
  {
    "Symbol": "IVDA",
    "Name": "Iveda Solutions Inc."
  },
  {
    "Symbol": "IVH",
    "Name": "Delaware Ivy High Income Opportunities Fund"
  },
  {
    "Symbol": "IVR",
    "Name": "INVESCO MORTGAGE CAPITAL INC"
  },
  {
    "Symbol": "IVT",
    "Name": "InvenTrust Properties"
  },
  {
    "Symbol": "IVZ",
    "Name": "Invesco Ltd"
  },
  {
    "Symbol": "IX",
    "Name": "Orix Corp Ads"
  },
  {
    "Symbol": "IXAQ",
    "Name": "IX Acquisition  Ordinary Share"
  },
  {
    "Symbol": "IXAQU",
    "Name": "IX Acquisition Unit"
  },
  {
    "Symbol": "IZEA",
    "Name": "IZEA Worldwide Inc."
  },
  {
    "Symbol": "J",
    "Name": "Jacobs Engineering Group Inc."
  },
  {
    "Symbol": "JACK",
    "Name": "Jack In The Box Inc."
  },
  {
    "Symbol": "JAGX",
    "Name": "Jaguar Health Inc."
  },
  {
    "Symbol": "JAKK",
    "Name": "JAKKS Pacific Inc."
  },
  {
    "Symbol": "JAMF",
    "Name": "Jamf Holding"
  },
  {
    "Symbol": "JAN",
    "Name": "JanOne Inc.  (NV)"
  },
  {
    "Symbol": "JANX",
    "Name": "Janux Therapeutics Inc."
  },
  {
    "Symbol": "JAQC",
    "Name": "Jupiter Acquisition Corporation"
  },
  {
    "Symbol": "JATT",
    "Name": "JATT Acquisition Corp "
  },
  {
    "Symbol": "JAZZ",
    "Name": "Jazz Pharmaceuticals plc  (Ireland)"
  },
  {
    "Symbol": "JBGS",
    "Name": "JBG SMITH Properties"
  },
  {
    "Symbol": "JBHT",
    "Name": "J.B. Hunt Transport Services Inc."
  },
  {
    "Symbol": "JBI",
    "Name": "Janus International Group Inc."
  },
  {
    "Symbol": "JBL",
    "Name": "Jabil Inc."
  },
  {
    "Symbol": "JBLU",
    "Name": "JetBlue Airways Corporation"
  },
  {
    "Symbol": "JBSS",
    "Name": "John B. Sanfilippo & Son Inc."
  },
  {
    "Symbol": "JBT",
    "Name": "John Bean Technologies Corporation"
  },
  {
    "Symbol": "JCI",
    "Name": "Johnson Controls International plc Ordinary Share"
  },
  {
    "Symbol": "JCIC",
    "Name": "Jack Creek Investment "
  },
  {
    "Symbol": "JCICU",
    "Name": "Jack Creek Investment Units"
  },
  {
    "Symbol": "JCTCF",
    "Name": "Jewett-Cameron Trading Company"
  },
  {
    "Symbol": "JEF",
    "Name": "Jefferies Financial Group Inc."
  },
  {
    "Symbol": "JELD",
    "Name": "JELD-WEN Holding Inc."
  },
  {
    "Symbol": "JEQ",
    "Name": "Aberdeen Japan Equity Fund Inc."
  },
  {
    "Symbol": "JFR",
    "Name": "Nuveen Floating Rate Income Fund"
  },
  {
    "Symbol": "JGGCU",
    "Name": "Jaguar Global Growth Corporation I Unit"
  },
  {
    "Symbol": "JHAA",
    "Name": "Nuveen Corporate Income 2023 Target Term Fund"
  },
  {
    "Symbol": "JHG",
    "Name": "Janus Henderson Group plc"
  },
  {
    "Symbol": "JHI",
    "Name": "John Hancock Investors Trust"
  },
  {
    "Symbol": "JHS",
    "Name": "John Hancock Income Securities Trust"
  },
  {
    "Symbol": "JILL",
    "Name": "J. Jill Inc."
  },
  {
    "Symbol": "JJSF",
    "Name": "J & J Snack Foods"
  },
  {
    "Symbol": "JKHY",
    "Name": "Jack Henry & Associates Inc."
  },
  {
    "Symbol": "JLL",
    "Name": "Jones Lang LaSalle Incorporated"
  },
  {
    "Symbol": "JLS",
    "Name": "Nuveen Mortgage and Income Fund"
  },
  {
    "Symbol": "JMAC",
    "Name": "Maxpro Capital Acquisition "
  },
  {
    "Symbol": "JMACU",
    "Name": "Maxpro Capital Acquisition Units"
  },
  {
    "Symbol": "JMM",
    "Name": "Nuveen Multi-Market Income Fund (MA)"
  },
  {
    "Symbol": "JNCE",
    "Name": "Jounce Therapeutics Inc."
  },
  {
    "Symbol": "JNJ",
    "Name": "Johnson & Johnson"
  },
  {
    "Symbol": "JNPR",
    "Name": "Juniper Networks Inc."
  },
  {
    "Symbol": "JOAN",
    "Name": "JOANN Inc."
  },
  {
    "Symbol": "JOB",
    "Name": "GEE Group Inc."
  },
  {
    "Symbol": "JOBY",
    "Name": "Joby Aviation Inc."
  },
  {
    "Symbol": "JOE",
    "Name": "St. Joe Company (The)"
  },
  {
    "Symbol": "JOF",
    "Name": "Japan Smaller Capitalization Fund Inc"
  },
  {
    "Symbol": "JOFF",
    "Name": "JOFF Fintech Acquisition "
  },
  {
    "Symbol": "JOFFU",
    "Name": "JOFF Fintech Acquisition Unit"
  },
  {
    "Symbol": "JOUT",
    "Name": "Johnson Outdoors Inc. "
  },
  {
    "Symbol": "JPC",
    "Name": "Nuveen Preferred & Income Opportunities Fund"
  },
  {
    "Symbol": "JPM",
    "Name": "JP Morgan Chase & Co."
  },
  {
    "Symbol": "JPS",
    "Name": "Nuveen Preferred & Income Securities Fund"
  },
  {
    "Symbol": "JRSH",
    "Name": "Jerash Holdings (US) Inc."
  },
  {
    "Symbol": "JRVR",
    "Name": "James River Group Holdings Ltd."
  },
  {
    "Symbol": "JSPR",
    "Name": "Jasper Therapeutics Inc."
  },
  {
    "Symbol": "JUGG",
    "Name": "Jaws Juggernaut Acquisition Corporation  Ordinary Share"
  },
  {
    "Symbol": "JUPW",
    "Name": "Jupiter Wellness Inc."
  },
  {
    "Symbol": "JVA",
    "Name": "Coffee Holding Co. Inc."
  },
  {
    "Symbol": "JWAC",
    "Name": "Jupiter Wellness Acquisition "
  },
  {
    "Symbol": "JWEL",
    "Name": "Jowell Global Ltd."
  },
  {
    "Symbol": "JWN",
    "Name": "Nordstrom Inc."
  },
  {
    "Symbol": "JWSM",
    "Name": "Jaws Mustang Acquisition "
  },
  {
    "Symbol": "JXN",
    "Name": "Jackson Financial Inc. "
  },
  {
    "Symbol": "JYAC",
    "Name": "Jiya Acquisition "
  },
  {
    "Symbol": "JYNT",
    "Name": "The Joint"
  },
  {
    "Symbol": "JZXN",
    "Name": "Jiuzi Holdings Inc."
  },
  {
    "Symbol": "K",
    "Name": "Kellogg Company"
  },
  {
    "Symbol": "KACL",
    "Name": "Kairous Acquisition Limited"
  },
  {
    "Symbol": "KACLR",
    "Name": "Kairous Acquisition Limited Rights"
  },
  {
    "Symbol": "KAHC",
    "Name": "KKR Acquisition Holdings I "
  },
  {
    "Symbol": "KAI",
    "Name": "Kadant Inc"
  },
  {
    "Symbol": "KAIR",
    "Name": "Kairos Acquisition "
  },
  {
    "Symbol": "KAIRU",
    "Name": "Kairos Acquisition Unit"
  },
  {
    "Symbol": "KALA",
    "Name": "Kala Pharmaceuticals Inc."
  },
  {
    "Symbol": "KALU",
    "Name": "Kaiser Aluminum Corporation"
  },
  {
    "Symbol": "KALV",
    "Name": "KalVista Pharmaceuticals Inc."
  },
  {
    "Symbol": "KAMN",
    "Name": "Kaman Corporation"
  },
  {
    "Symbol": "KAR",
    "Name": "KAR Auction Services Inc"
  },
  {
    "Symbol": "KARO",
    "Name": "Karooooo Ltd."
  },
  {
    "Symbol": "KAVL",
    "Name": "Kaival Brands Innovations Group Inc."
  },
  {
    "Symbol": "KB",
    "Name": "KB Financial Group Inc"
  },
  {
    "Symbol": "KBAL",
    "Name": "Kimball International Inc. Class B"
  },
  {
    "Symbol": "KBH",
    "Name": "KB Home"
  },
  {
    "Symbol": "KBNT",
    "Name": "Kubient Inc."
  },
  {
    "Symbol": "KBR",
    "Name": "KBR Inc."
  },
  {
    "Symbol": "KCGI",
    "Name": "Kensington Capital Acquisition V "
  },
  {
    "Symbol": "KD",
    "Name": "Kyndryl Holdings Inc."
  },
  {
    "Symbol": "KDNY",
    "Name": "Chinook Therapeutics Inc."
  },
  {
    "Symbol": "KDP",
    "Name": "Keurig Dr Pepper Inc."
  },
  {
    "Symbol": "KE",
    "Name": "Kimball Electronics Inc."
  },
  {
    "Symbol": "KELYA",
    "Name": "Kelly Services Inc. "
  },
  {
    "Symbol": "KELYB",
    "Name": "Kelly Services Inc. Class B"
  },
  {
    "Symbol": "KEN",
    "Name": "Kenon Holdings Ltd."
  },
  {
    "Symbol": "KEP",
    "Name": "Korea Electric Power Corporation"
  },
  {
    "Symbol": "KEQU",
    "Name": "Kewaunee Scientific Corporation"
  },
  {
    "Symbol": "KERN",
    "Name": "Akerna"
  },
  {
    "Symbol": "KEX",
    "Name": "Kirby Corporation"
  },
  {
    "Symbol": "KEY",
    "Name": "KeyCorp"
  },
  {
    "Symbol": "KEYS",
    "Name": "Keysight Technologies Inc."
  },
  {
    "Symbol": "KF",
    "Name": "Korea Fund Inc. (The) New"
  },
  {
    "Symbol": "KFFB",
    "Name": "Kentucky First Federal Bancorp"
  },
  {
    "Symbol": "KFRC",
    "Name": "Kforce Inc."
  },
  {
    "Symbol": "KFS",
    "Name": "Kingsway Financial Services Inc.  (DE)"
  },
  {
    "Symbol": "KFY",
    "Name": "Korn Ferry"
  },
  {
    "Symbol": "KGC",
    "Name": "Kinross Gold Corporation"
  },
  {
    "Symbol": "KHC",
    "Name": "The Kraft Heinz Company"
  },
  {
    "Symbol": "KIDS",
    "Name": "OrthoPediatrics"
  },
  {
    "Symbol": "KIM",
    "Name": "Kimco Realty Corporation"
  },
  {
    "Symbol": "KIND",
    "Name": "Nextdoor Holdings Inc. "
  },
  {
    "Symbol": "KINS",
    "Name": "Kingstone Companies Inc."
  },
  {
    "Symbol": "KINZ",
    "Name": "KINS Technology Group Inc. "
  },
  {
    "Symbol": "KINZU",
    "Name": "KINS Technology Group Inc. Unit"
  },
  {
    "Symbol": "KIO",
    "Name": "KKR Income Opportunities Fund"
  },
  {
    "Symbol": "KIQ",
    "Name": "Kelso Technologies Inc"
  },
  {
    "Symbol": "KIRK",
    "Name": "Kirkland's Inc. COMMONSTOCK"
  },
  {
    "Symbol": "KKR",
    "Name": "KKR & Co. Inc."
  },
  {
    "Symbol": "KLAC",
    "Name": "KLA Corporation"
  },
  {
    "Symbol": "KLAQ",
    "Name": "KL Acquisition Corp "
  },
  {
    "Symbol": "KLIC",
    "Name": "Kulicke and Soffa Industries Inc."
  },
  {
    "Symbol": "KLR",
    "Name": "Kaleyra Inc."
  },
  {
    "Symbol": "KLTR",
    "Name": "Kaltura Inc."
  },
  {
    "Symbol": "KLXE",
    "Name": "KLX Energy Services Holdings Inc."
  },
  {
    "Symbol": "KMB",
    "Name": "Kimberly-Clark Corporation"
  },
  {
    "Symbol": "KMDA",
    "Name": "Kamada Ltd."
  },
  {
    "Symbol": "KMF",
    "Name": "Kayne Anderson NextGen Energy & Infrastructure Inc."
  },
  {
    "Symbol": "KMI",
    "Name": "Kinder Morgan Inc."
  },
  {
    "Symbol": "KMPH",
    "Name": "KemPharm Inc."
  },
  {
    "Symbol": "KMPR",
    "Name": "Kemper Corporation"
  },
  {
    "Symbol": "KMT",
    "Name": "Kennametal Inc."
  },
  {
    "Symbol": "KMX",
    "Name": "CarMax Inc"
  },
  {
    "Symbol": "KN",
    "Name": "Knowles Corporation"
  },
  {
    "Symbol": "KNBE",
    "Name": "KnowBe4 Inc. "
  },
  {
    "Symbol": "KNDI",
    "Name": "Kandi Technologies Group Inc"
  },
  {
    "Symbol": "KNOP",
    "Name": "KNOT Offshore Partners LP Common Units representing Limited Partner Interests"
  },
  {
    "Symbol": "KNSA",
    "Name": "Kiniksa Pharmaceuticals Ltd. "
  },
  {
    "Symbol": "KNSL",
    "Name": "Kinsale Capital Group Inc."
  },
  {
    "Symbol": "KNSW",
    "Name": "KnightSwan Acquisition Corporation "
  },
  {
    "Symbol": "KNTE",
    "Name": "Kinnate Biopharma Inc."
  },
  {
    "Symbol": "KNTK",
    "Name": "Kinetik Holdings Inc. "
  },
  {
    "Symbol": "KNX",
    "Name": "Knight-Swift Transportation Holdings Inc."
  },
  {
    "Symbol": "KO",
    "Name": "Coca-Cola Company (The)"
  },
  {
    "Symbol": "KOD",
    "Name": "Kodiak Sciences Inc"
  },
  {
    "Symbol": "KODK",
    "Name": "Eastman Kodak Company Common New"
  },
  {
    "Symbol": "KOP",
    "Name": "Koppers Holdings Inc. Koppers Holdings Inc."
  },
  {
    "Symbol": "KOPN",
    "Name": "Kopin Corporation"
  },
  {
    "Symbol": "KORE",
    "Name": "KORE Group Holdings Inc."
  },
  {
    "Symbol": "KOS",
    "Name": "Kosmos Energy Ltd.  (DE)"
  },
  {
    "Symbol": "KOSS",
    "Name": "Koss Corporation"
  },
  {
    "Symbol": "KPLT",
    "Name": "Katapult Holdings Inc."
  },
  {
    "Symbol": "KPRX",
    "Name": "Kiora Pharmaceuticals Inc."
  },
  {
    "Symbol": "KPTI",
    "Name": "Karyopharm Therapeutics Inc."
  },
  {
    "Symbol": "KR",
    "Name": "Kroger Company (The)"
  },
  {
    "Symbol": "KRBP",
    "Name": "Kiromic BioPharma Inc."
  },
  {
    "Symbol": "KRC",
    "Name": "Kilroy Realty Corporation"
  },
  {
    "Symbol": "KREF",
    "Name": "KKR Real Estate Finance Trust Inc."
  },
  {
    "Symbol": "KRG",
    "Name": "Kite Realty Group Trust"
  },
  {
    "Symbol": "KRMD",
    "Name": "Repro Med Systems Inc."
  },
  {
    "Symbol": "KRNL",
    "Name": "Kernel Group Holdings Inc. "
  },
  {
    "Symbol": "KRNLU",
    "Name": "Kernel Group Holdings Inc. Units"
  },
  {
    "Symbol": "KRNT",
    "Name": "Kornit Digital Ltd."
  },
  {
    "Symbol": "KRNY",
    "Name": "Kearny Financial Corp"
  },
  {
    "Symbol": "KRO",
    "Name": "Kronos Worldwide Inc"
  },
  {
    "Symbol": "KRON",
    "Name": "Kronos Bio Inc."
  },
  {
    "Symbol": "KROS",
    "Name": "Keros Therapeutics Inc."
  },
  {
    "Symbol": "KRP",
    "Name": "Kimbell Royalty Partners Common Units Representing Limited Partner Interests"
  },
  {
    "Symbol": "KRT",
    "Name": "Karat Packaging Inc."
  },
  {
    "Symbol": "KRTX",
    "Name": "Karuna Therapeutics Inc."
  },
  {
    "Symbol": "KRUS",
    "Name": "Kura Sushi USA Inc. "
  },
  {
    "Symbol": "KRYS",
    "Name": "Krystal Biotech Inc."
  },
  {
    "Symbol": "KSCP",
    "Name": "Knightscope Inc. "
  },
  {
    "Symbol": "KSI",
    "Name": "Kadem Sustainable Impact Corporation "
  },
  {
    "Symbol": "KSICU",
    "Name": "Kadem Sustainable Impact Corporation Unit"
  },
  {
    "Symbol": "KSM",
    "Name": "DWS Strategic Municipal Income Trust"
  },
  {
    "Symbol": "KSPN",
    "Name": "Kaspien Holdings Inc."
  },
  {
    "Symbol": "KSS",
    "Name": "Kohl's Corporation"
  },
  {
    "Symbol": "KT",
    "Name": "KT Corporation"
  },
  {
    "Symbol": "KTB",
    "Name": "Kontoor Brands Inc."
  },
  {
    "Symbol": "KTCC",
    "Name": "Key Tronic Corporation"
  },
  {
    "Symbol": "KTF",
    "Name": "DWS Municipal Income Trust"
  },
  {
    "Symbol": "KTOS",
    "Name": "Kratos Defense & Security Solutions Inc."
  },
  {
    "Symbol": "KTRA",
    "Name": "Kintara Therapeutics Inc."
  },
  {
    "Symbol": "KTTA",
    "Name": "Pasithea Therapeutics"
  },
  {
    "Symbol": "KULR",
    "Name": "KULR Technology Group Inc."
  },
  {
    "Symbol": "KURA",
    "Name": "Kura Oncology Inc."
  },
  {
    "Symbol": "KVHI",
    "Name": "KVH Industries Inc."
  },
  {
    "Symbol": "KVSA",
    "Name": "Khosla Ventures Acquisition Co. "
  },
  {
    "Symbol": "KW",
    "Name": "Kennedy-Wilson Holdings Inc."
  },
  {
    "Symbol": "KWAC",
    "Name": "Kingswood Acquisition "
  },
  {
    "Symbol": "KWR",
    "Name": "Quaker Houghton"
  },
  {
    "Symbol": "KXIN",
    "Name": "Kaixin Auto Holdings"
  },
  {
    "Symbol": "KYCH",
    "Name": "Keyarch Acquisition Corporation"
  },
  {
    "Symbol": "KYCHR",
    "Name": "Keyarch Acquisition Corporation Rights"
  },
  {
    "Symbol": "KYCHU",
    "Name": "Keyarch Acquisition Corporation Unit"
  },
  {
    "Symbol": "KYMR",
    "Name": "Kymera Therapeutics Inc."
  },
  {
    "Symbol": "KYN",
    "Name": "Kayne Anderson Energy Infrastructure Fund Inc."
  },
  {
    "Symbol": "KZR",
    "Name": "Kezar Life Sciences Inc."
  },
  {
    "Symbol": "L",
    "Name": "Loews Corporation"
  },
  {
    "Symbol": "LAAA",
    "Name": "Lakeshore Acquisition I"
  },
  {
    "Symbol": "LAB",
    "Name": "Standard BioTools Inc."
  },
  {
    "Symbol": "LABP",
    "Name": "Landos Biopharma Inc."
  },
  {
    "Symbol": "LAC",
    "Name": "Lithium Americas"
  },
  {
    "Symbol": "LAD",
    "Name": "Lithia Motors Inc."
  },
  {
    "Symbol": "LADR",
    "Name": "Ladder Capital Corp "
  },
  {
    "Symbol": "LAKE",
    "Name": "Lakeland Industries Inc."
  },
  {
    "Symbol": "LAMR",
    "Name": "Lamar Advertising Company "
  },
  {
    "Symbol": "LANC",
    "Name": "Lancaster Colony Corporation"
  },
  {
    "Symbol": "LAND",
    "Name": "Gladstone Land Corporation"
  },
  {
    "Symbol": "LARK",
    "Name": "Landmark Bancorp Inc."
  },
  {
    "Symbol": "LASR",
    "Name": "nLIGHT Inc."
  },
  {
    "Symbol": "LATGU",
    "Name": "LatAmGrowth SPAC Unit"
  },
  {
    "Symbol": "LAUR",
    "Name": "Laureate Education Inc."
  },
  {
    "Symbol": "LAW",
    "Name": "CS Disco Inc."
  },
  {
    "Symbol": "LAWS",
    "Name": "Lawson Products Inc."
  },
  {
    "Symbol": "LAX",
    "Name": "8i Acquisition 2"
  },
  {
    "Symbol": "LAXXR",
    "Name": "8i Acquisition 2 Rights"
  },
  {
    "Symbol": "LAXXU",
    "Name": "8i Acquisition 2 Unit"
  },
  {
    "Symbol": "LAZ",
    "Name": "Lazard LTD. Lazard LTD. "
  },
  {
    "Symbol": "LAZR",
    "Name": "Luminar Technologies Inc.  "
  },
  {
    "Symbol": "LAZY",
    "Name": "Lazydays Holdings Inc."
  },
  {
    "Symbol": "LBAI",
    "Name": "Lakeland Bancorp Inc."
  },
  {
    "Symbol": "LBC",
    "Name": "Luther Burbank Corporation"
  },
  {
    "Symbol": "LBPH",
    "Name": "Longboard Pharmaceuticals Inc."
  },
  {
    "Symbol": "LBRDA",
    "Name": "Liberty Broadband Corporation "
  },
  {
    "Symbol": "LBRDK",
    "Name": "Liberty Broadband Corporation Class C"
  },
  {
    "Symbol": "LBRDP",
    "Name": "Liberty Broadband Corporation Series A Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "LBRT",
    "Name": "Liberty Oilfield Services Inc. "
  },
  {
    "Symbol": "LBTYA",
    "Name": "Liberty Global plc "
  },
  {
    "Symbol": "LBTYB",
    "Name": "Liberty Global plc Class B"
  },
  {
    "Symbol": "LBTYK",
    "Name": "Liberty Global plc Class C"
  },
  {
    "Symbol": "LC",
    "Name": "LendingClub Corporation"
  },
  {
    "Symbol": "LCA",
    "Name": "Landcadia Holdings IV Inc. "
  },
  {
    "Symbol": "LCAA",
    "Name": "L Catterton Asia Acquisition Corp "
  },
  {
    "Symbol": "LCAAU",
    "Name": "L Catterton Asia Acquisition Corp Units"
  },
  {
    "Symbol": "LCAHU",
    "Name": "Landcadia Holdings IV Inc. Units"
  },
  {
    "Symbol": "LCFY",
    "Name": "Locafy Limited Ordinary Share"
  },
  {
    "Symbol": "LCI",
    "Name": "Lannett Co Inc"
  },
  {
    "Symbol": "LCID",
    "Name": "Lucid Group Inc."
  },
  {
    "Symbol": "LCNB",
    "Name": "LCNB Corporation"
  },
  {
    "Symbol": "LCTX",
    "Name": "Lineage Cell Therapeutics Inc."
  },
  {
    "Symbol": "LCUT",
    "Name": "Lifetime Brands Inc."
  },
  {
    "Symbol": "LCW",
    "Name": "Learn CW Investment Corporation "
  },
  {
    "Symbol": "LDHA",
    "Name": "LDH Growth Corp I "
  },
  {
    "Symbol": "LDHAU",
    "Name": "LDH Growth Corp I Units"
  },
  {
    "Symbol": "LDI",
    "Name": "loanDepot Inc. "
  },
  {
    "Symbol": "LDOS",
    "Name": "Leidos Holdings Inc."
  },
  {
    "Symbol": "LDP",
    "Name": "Cohen & Steers Limited Duration Preferred and Income Fund Inc."
  },
  {
    "Symbol": "LE",
    "Name": "Lands' End Inc."
  },
  {
    "Symbol": "LEA",
    "Name": "Lear Corporation"
  },
  {
    "Symbol": "LEAP",
    "Name": "Ribbit LEAP Ltd. "
  },
  {
    "Symbol": "LECO",
    "Name": "Lincoln Electric Holdings Inc."
  },
  {
    "Symbol": "LEDS",
    "Name": "SemiLEDS Corporation"
  },
  {
    "Symbol": "LEE",
    "Name": "Lee Enterprises Incorporated"
  },
  {
    "Symbol": "LEG",
    "Name": "Leggett & Platt Incorporated"
  },
  {
    "Symbol": "LEGA",
    "Name": "Lead Edge Growth Opportunities Ltd "
  },
  {
    "Symbol": "LEGAU",
    "Name": "Lead Edge Growth Opportunities Ltd Units"
  },
  {
    "Symbol": "LEGH",
    "Name": "Legacy Housing Corporation  (TX)"
  },
  {
    "Symbol": "LEN",
    "Name": "Lennar Corporation "
  },
  {
    "Symbol": "LEO",
    "Name": "BNY Mellon Strategic Municipals Inc."
  },
  {
    "Symbol": "LESL",
    "Name": "Leslie's Inc."
  },
  {
    "Symbol": "LEU",
    "Name": "Centrus Energy "
  },
  {
    "Symbol": "LEV",
    "Name": "The Lion Electric Company"
  },
  {
    "Symbol": "LEVI",
    "Name": "Levi Strauss & Co "
  },
  {
    "Symbol": "LEXX",
    "Name": "Lexaria Bioscience"
  },
  {
    "Symbol": "LFG",
    "Name": "Archaea Energy Inc. "
  },
  {
    "Symbol": "LFLY",
    "Name": "Leafly Holdings Inc."
  },
  {
    "Symbol": "LFMD",
    "Name": "LifeMD Inc."
  },
  {
    "Symbol": "LFST",
    "Name": "LifeStance Health Group Inc."
  },
  {
    "Symbol": "LFT",
    "Name": "Lument Finance Trust Inc."
  },
  {
    "Symbol": "LFTR",
    "Name": "Lefteris Acquisition "
  },
  {
    "Symbol": "LFUS",
    "Name": "Littelfuse Inc."
  },
  {
    "Symbol": "LFVN",
    "Name": "Lifevantage Corporation  (Delaware)"
  },
  {
    "Symbol": "LGAC",
    "Name": "Lazard Growth Acquisition I"
  },
  {
    "Symbol": "LGACU",
    "Name": "Lazard Growth Acquisition I Units"
  },
  {
    "Symbol": "LGI",
    "Name": "Lazard Global Total Return and Income Fund"
  },
  {
    "Symbol": "LGIH",
    "Name": "LGI Homes Inc."
  },
  {
    "Symbol": "LGL",
    "Name": "LGL Group Inc. (The)"
  },
  {
    "Symbol": "LGMK",
    "Name": "LogicMark Inc."
  },
  {
    "Symbol": "LGND",
    "Name": "Ligand Pharmaceuticals Incorporated"
  },
  {
    "Symbol": "LGO",
    "Name": "Largo Inc."
  },
  {
    "Symbol": "LGST",
    "Name": "Semper Paratus Acquisition Corporation "
  },
  {
    "Symbol": "LGSTU",
    "Name": "Semper Paratus Acquisition Corporation Unit"
  },
  {
    "Symbol": "LGVCU",
    "Name": "LAMF Global Ventures I Unit"
  },
  {
    "Symbol": "LGVN",
    "Name": "Longeveron Inc. "
  },
  {
    "Symbol": "LH",
    "Name": "Laboratory Corporation of America Holdings"
  },
  {
    "Symbol": "LHAA",
    "Name": "Lerer Hippeau Acquisition "
  },
  {
    "Symbol": "LHCG",
    "Name": "LHC Group"
  },
  {
    "Symbol": "LHDX",
    "Name": "Lucira Health Inc."
  },
  {
    "Symbol": "LHX",
    "Name": "L3Harris Technologies Inc."
  },
  {
    "Symbol": "LIBY",
    "Name": "Liberty Resources Acquisition "
  },
  {
    "Symbol": "LICY",
    "Name": "Li-Cycle Holdings"
  },
  {
    "Symbol": "LIDR",
    "Name": "AEye Inc. "
  },
  {
    "Symbol": "LIFE",
    "Name": "aTyr Pharma Inc."
  },
  {
    "Symbol": "LILA",
    "Name": "Liberty Latin America Ltd. "
  },
  {
    "Symbol": "LILAK",
    "Name": "Liberty Latin America Ltd. Class C"
  },
  {
    "Symbol": "LILM",
    "Name": "Lilium N.V. "
  },
  {
    "Symbol": "LIN",
    "Name": "Linde plc Ordinary Share"
  },
  {
    "Symbol": "LINC",
    "Name": "Lincoln Educational Services Corporation"
  },
  {
    "Symbol": "LIND",
    "Name": "Lindblad Expeditions Holdings Inc."
  },
  {
    "Symbol": "LINK",
    "Name": "Interlink Electronics Inc."
  },
  {
    "Symbol": "LIQT",
    "Name": "LiqTech International Inc."
  },
  {
    "Symbol": "LITE",
    "Name": "Lumentum Holdings Inc."
  },
  {
    "Symbol": "LITM",
    "Name": "Snow Lake Resources Ltd."
  },
  {
    "Symbol": "LITT",
    "Name": "Logistics Innovation Technologies "
  },
  {
    "Symbol": "LITTU",
    "Name": "Logistics Innovation Technologies Units"
  },
  {
    "Symbol": "LIVE",
    "Name": "Live Ventures Incorporated"
  },
  {
    "Symbol": "LIVN",
    "Name": "LivaNova PLC"
  },
  {
    "Symbol": "LIXT",
    "Name": "Lixte Biotechnology Holdings Inc."
  },
  {
    "Symbol": "LJAQ",
    "Name": "LightJump Acquisition Corporation"
  },
  {
    "Symbol": "LJAQU",
    "Name": "LightJump Acquisition Corporation Unit"
  },
  {
    "Symbol": "LJPC",
    "Name": "La Jolla Pharmaceutical Company  (DE)"
  },
  {
    "Symbol": "LKCO",
    "Name": "Luokung Technology Corp"
  },
  {
    "Symbol": "LKFN",
    "Name": "Lakeland Financial Corporation"
  },
  {
    "Symbol": "LKQ",
    "Name": "LKQ Corporation"
  },
  {
    "Symbol": "LL",
    "Name": "LL Flooring Holdings Inc."
  },
  {
    "Symbol": "LLAP",
    "Name": "Terran Orbital Corporation"
  },
  {
    "Symbol": "LLL",
    "Name": "JX Luxventure Limited"
  },
  {
    "Symbol": "LLNW",
    "Name": "Limelight Networks Inc."
  },
  {
    "Symbol": "LLY",
    "Name": "Eli Lilly and Company"
  },
  {
    "Symbol": "LMACA",
    "Name": "Liberty Media Acquisition Corporation Series A"
  },
  {
    "Symbol": "LMACU",
    "Name": "Liberty Media Acquisition Corporation Unit"
  },
  {
    "Symbol": "LMAO",
    "Name": "LMF Acquisition Opportunities Inc. "
  },
  {
    "Symbol": "LMAOU",
    "Name": "LMF Acquisition Opportunities Inc. Unit"
  },
  {
    "Symbol": "LMAT",
    "Name": "LeMaitre Vascular Inc."
  },
  {
    "Symbol": "LMB",
    "Name": "Limbach Holdings Inc."
  },
  {
    "Symbol": "LMDX",
    "Name": "LumiraDx Limited"
  },
  {
    "Symbol": "LMFA",
    "Name": "LM Funding America Inc."
  },
  {
    "Symbol": "LMND",
    "Name": "Lemonade Inc."
  },
  {
    "Symbol": "LMNL",
    "Name": "Liminal BioSciences Inc."
  },
  {
    "Symbol": "LMNR",
    "Name": "Limoneira Co"
  },
  {
    "Symbol": "LMPX",
    "Name": "LMP Automotive Holdings Inc."
  },
  {
    "Symbol": "LMST",
    "Name": "Limestone Bancorp Inc."
  },
  {
    "Symbol": "LMT",
    "Name": "Lockheed Martin Corporation"
  },
  {
    "Symbol": "LNC",
    "Name": "Lincoln National Corporation"
  },
  {
    "Symbol": "LND",
    "Name": "Brasilagro Brazilian Agric Real Estate Co Sponsored ADR (Brazil)"
  },
  {
    "Symbol": "LNDC",
    "Name": "Landec Corporation  (DE)"
  },
  {
    "Symbol": "LNFA",
    "Name": "L&amp;F Acquisition "
  },
  {
    "Symbol": "LNG",
    "Name": "Cheniere Energy Inc."
  },
  {
    "Symbol": "LNN",
    "Name": "Lindsay Corporation"
  },
  {
    "Symbol": "LNSR",
    "Name": "LENSAR Inc."
  },
  {
    "Symbol": "LNT",
    "Name": "Alliant Energy Corporation"
  },
  {
    "Symbol": "LNTH",
    "Name": "Lantheus Holdings Inc."
  },
  {
    "Symbol": "LOAN",
    "Name": "Manhattan Bridge Capital Inc"
  },
  {
    "Symbol": "LOB",
    "Name": "Live Oak Bancshares Inc."
  },
  {
    "Symbol": "LOCC",
    "Name": "Live Oak Crestview Climate Acquisition "
  },
  {
    "Symbol": "LOCL",
    "Name": "Local Bounti Corporation"
  },
  {
    "Symbol": "LOCO",
    "Name": "El Pollo Loco Holdings Inc."
  },
  {
    "Symbol": "LODE",
    "Name": "Comstock Mining Inc."
  },
  {
    "Symbol": "LOGC",
    "Name": "LogicBio Therapeutics Inc."
  },
  {
    "Symbol": "LOGI",
    "Name": "Logitech International S.A."
  },
  {
    "Symbol": "LOKM",
    "Name": "Live Oak Mobility Acquisition "
  },
  {
    "Symbol": "LOMA",
    "Name": "Loma Negra Compania Industrial Argentina Sociedad Anonima ADS"
  },
  {
    "Symbol": "LOOP",
    "Name": "Loop Industries Inc."
  },
  {
    "Symbol": "LOPE",
    "Name": "Grand Canyon Education Inc."
  },
  {
    "Symbol": "LOTZ",
    "Name": "CarLotz Inc. "
  },
  {
    "Symbol": "LOVE",
    "Name": "The Lovesac Company"
  },
  {
    "Symbol": "LOW",
    "Name": "Lowe's Companies Inc."
  },
  {
    "Symbol": "LPCN",
    "Name": "Lipocine Inc."
  },
  {
    "Symbol": "LPG",
    "Name": "Dorian LPG Ltd."
  },
  {
    "Symbol": "LPI",
    "Name": "Laredo Petroleum Inc."
  },
  {
    "Symbol": "LPL",
    "Name": "LG Display Co Ltd AMERICAN DEPOSITORY SHARES"
  },
  {
    "Symbol": "LPLA",
    "Name": "LPL Financial Holdings Inc."
  },
  {
    "Symbol": "LPRO",
    "Name": "Open Lending Corporation "
  },
  {
    "Symbol": "LPSN",
    "Name": "LivePerson Inc."
  },
  {
    "Symbol": "LPTH",
    "Name": "LightPath Technologies Inc. "
  },
  {
    "Symbol": "LPTX",
    "Name": "Leap Therapeutics Inc."
  },
  {
    "Symbol": "LPX",
    "Name": "Louisiana-Pacific Corporation"
  },
  {
    "Symbol": "LQDA",
    "Name": "Liquidia Corporation"
  },
  {
    "Symbol": "LQDT",
    "Name": "Liquidity Services Inc."
  },
  {
    "Symbol": "LRCX",
    "Name": "Lam Research Corporation"
  },
  {
    "Symbol": "LRFC",
    "Name": "Logan Ridge Finance Corporation"
  },
  {
    "Symbol": "LRMR",
    "Name": "Larimar Therapeutics Inc."
  },
  {
    "Symbol": "LRN",
    "Name": "Stride Inc."
  },
  {
    "Symbol": "LSBK",
    "Name": "Lake Shore Bancorp Inc."
  },
  {
    "Symbol": "LSCC",
    "Name": "Lattice Semiconductor Corporation"
  },
  {
    "Symbol": "LSEA",
    "Name": "Landsea Homes Corporation"
  },
  {
    "Symbol": "LSF",
    "Name": "Laird Superfood Inc."
  },
  {
    "Symbol": "LSI",
    "Name": "Life Storage Inc."
  },
  {
    "Symbol": "LSPD",
    "Name": "Lightspeed Commerce Inc. Subordinate Voting Shares"
  },
  {
    "Symbol": "LSPRU",
    "Name": "Larkspur Health Acquisition Unit"
  },
  {
    "Symbol": "LSTR",
    "Name": "Landstar System Inc."
  },
  {
    "Symbol": "LSXMA",
    "Name": "Liberty Media Corporation Series A Liberty SiriusXM"
  },
  {
    "Symbol": "LSXMK",
    "Name": "Liberty Media Corporation Series C Liberty SiriusXM"
  },
  {
    "Symbol": "LTBR",
    "Name": "Lightbridge Corporation"
  },
  {
    "Symbol": "LTC",
    "Name": "LTC Properties Inc."
  },
  {
    "Symbol": "LTCH",
    "Name": "Latch Inc."
  },
  {
    "Symbol": "LTH",
    "Name": "Life Time Group Holdings Inc."
  },
  {
    "Symbol": "LTHM",
    "Name": "Livent Corporation"
  },
  {
    "Symbol": "LTRN",
    "Name": "Lantern Pharma Inc."
  },
  {
    "Symbol": "LTRPA",
    "Name": "Liberty TripAdvisor Holdings Inc. Series A"
  },
  {
    "Symbol": "LTRX",
    "Name": "Lantronix Inc."
  },
  {
    "Symbol": "LTRY",
    "Name": "Lottery.com Inc."
  },
  {
    "Symbol": "LUB",
    "Name": "Luby's Inc."
  },
  {
    "Symbol": "LUCD",
    "Name": "Lucid Diagnostics Inc."
  },
  {
    "Symbol": "LULU",
    "Name": "lululemon athletica inc."
  },
  {
    "Symbol": "LUMN",
    "Name": "Lumen Technologies Inc."
  },
  {
    "Symbol": "LUMO",
    "Name": "Lumos Pharma Inc."
  },
  {
    "Symbol": "LUNA",
    "Name": "Luna Innovations Incorporated"
  },
  {
    "Symbol": "LUNG",
    "Name": "Pulmonx Corporation"
  },
  {
    "Symbol": "LUV",
    "Name": "Southwest Airlines Company"
  },
  {
    "Symbol": "LUXA",
    "Name": "Lux Health Tech Acquisition "
  },
  {
    "Symbol": "LUXAU",
    "Name": "Lux Health Tech Acquisition Units"
  },
  {
    "Symbol": "LVACU",
    "Name": "LAVA Medtech Acquisition Unit"
  },
  {
    "Symbol": "LVLU",
    "Name": "Lulu's Fashion Lounge Holdings Inc."
  },
  {
    "Symbol": "LVO",
    "Name": "LiveOne Inc."
  },
  {
    "Symbol": "LVOX",
    "Name": "LiveVox Holdings Inc. "
  },
  {
    "Symbol": "LVRA",
    "Name": "Levere Holdings "
  },
  {
    "Symbol": "LVS",
    "Name": "Las Vegas Sands"
  },
  {
    "Symbol": "LVTX",
    "Name": "LAVA Therapeutics N.V."
  },
  {
    "Symbol": "LW",
    "Name": "Lamb Weston Holdings Inc."
  },
  {
    "Symbol": "LWAY",
    "Name": "Lifeway Foods Inc."
  },
  {
    "Symbol": "LWLG",
    "Name": "Lightwave Logic Inc."
  },
  {
    "Symbol": "LXFR",
    "Name": "Luxfer Holdings PLC"
  },
  {
    "Symbol": "LXP",
    "Name": "LXP Industrial Trust  (Maryland REIT)"
  },
  {
    "Symbol": "LXRX",
    "Name": "Lexicon Pharmaceuticals Inc."
  },
  {
    "Symbol": "LXU",
    "Name": "LSB Industries Inc."
  },
  {
    "Symbol": "LYB",
    "Name": "LyondellBasell Industries NV   (Netherlands)"
  },
  {
    "Symbol": "LYEL",
    "Name": "Lyell Immunopharma Inc."
  },
  {
    "Symbol": "LYFT",
    "Name": "Lyft Inc. "
  },
  {
    "Symbol": "LYL",
    "Name": "Dragon Victory International Limited"
  },
  {
    "Symbol": "LYLT",
    "Name": "Loyalty Ventures Inc."
  },
  {
    "Symbol": "LYRA",
    "Name": "Lyra Therapeutics Inc."
  },
  {
    "Symbol": "LYTS",
    "Name": "LSI Industries Inc."
  },
  {
    "Symbol": "LYV",
    "Name": "Live Nation Entertainment Inc."
  },
  {
    "Symbol": "LZ",
    "Name": "LegalZoom.com Inc."
  },
  {
    "Symbol": "LZB",
    "Name": "La-Z-Boy Incorporated"
  },
  {
    "Symbol": "M",
    "Name": "Macy's Inc"
  },
  {
    "Symbol": "MA",
    "Name": "Mastercard Incorporated"
  },
  {
    "Symbol": "MAA",
    "Name": "Mid-America Apartment Communities Inc."
  },
  {
    "Symbol": "MAAQ",
    "Name": "Mana Capital Acquisition"
  },
  {
    "Symbol": "MAAQR",
    "Name": "Mana Capital Acquisition Rights"
  },
  {
    "Symbol": "MAAQU",
    "Name": "Mana Capital Acquisition Unit"
  },
  {
    "Symbol": "MAC",
    "Name": "Macerich Company (The)"
  },
  {
    "Symbol": "MACA",
    "Name": "Moringa Acquisition Corp "
  },
  {
    "Symbol": "MACAU",
    "Name": "Moringa Acquisition Corp Units"
  },
  {
    "Symbol": "MACC",
    "Name": "Mission Advancement "
  },
  {
    "Symbol": "MACK",
    "Name": "Merrimack Pharmaceuticals Inc."
  },
  {
    "Symbol": "MACU",
    "Name": "Mallard Acquisition"
  },
  {
    "Symbol": "MACUU",
    "Name": "Mallard Acquisition Unit"
  },
  {
    "Symbol": "MAG",
    "Name": "MAG Silver Corporation"
  },
  {
    "Symbol": "MAIN",
    "Name": "Main Street Capital Corporation"
  },
  {
    "Symbol": "MAN",
    "Name": "ManpowerGroup"
  },
  {
    "Symbol": "MANH",
    "Name": "Manhattan Associates Inc."
  },
  {
    "Symbol": "MANU",
    "Name": "Manchester United Ltd. "
  },
  {
    "Symbol": "MAPS",
    "Name": "WM Technology Inc. "
  },
  {
    "Symbol": "MAQC",
    "Name": "Maquia Capital Acquisition Corporation "
  },
  {
    "Symbol": "MAR",
    "Name": "Marriott International "
  },
  {
    "Symbol": "MARA",
    "Name": "Marathon Digital Holdings Inc."
  },
  {
    "Symbol": "MARK",
    "Name": "Remark Holdings Inc."
  },
  {
    "Symbol": "MAS",
    "Name": "Masco Corporation"
  },
  {
    "Symbol": "MASI",
    "Name": "Masimo Corporation"
  },
  {
    "Symbol": "MASS",
    "Name": "908 Devices Inc."
  },
  {
    "Symbol": "MAT",
    "Name": "Mattel Inc."
  },
  {
    "Symbol": "MATW",
    "Name": "Matthews International Corporation "
  },
  {
    "Symbol": "MATX",
    "Name": "Matson Inc."
  },
  {
    "Symbol": "MAV",
    "Name": "Pioneer Municipal High Income Advantage Fund Inc."
  },
  {
    "Symbol": "MAX",
    "Name": "MediaAlpha Inc. "
  },
  {
    "Symbol": "MAXN",
    "Name": "Maxeon Solar Technologies Ltd."
  },
  {
    "Symbol": "MAXR",
    "Name": "Maxar Technologies Inc."
  },
  {
    "Symbol": "MAYS",
    "Name": "J. W. Mays Inc."
  },
  {
    "Symbol": "MBCN",
    "Name": "Middlefield Banc"
  },
  {
    "Symbol": "MBI",
    "Name": "MBIA Inc."
  },
  {
    "Symbol": "MBIN",
    "Name": "Merchants Bancorp"
  },
  {
    "Symbol": "MBIO",
    "Name": "Mustang Bio Inc."
  },
  {
    "Symbol": "MBNKP",
    "Name": "Medallion Bank Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series F"
  },
  {
    "Symbol": "MBOT",
    "Name": "Microbot Medical Inc."
  },
  {
    "Symbol": "MBRX",
    "Name": "Moleculin Biotech Inc."
  },
  {
    "Symbol": "MBTC",
    "Name": "Nocturne Acquisition Corporation"
  },
  {
    "Symbol": "MBTCR",
    "Name": "Nocturne Acquisition Corporation Right"
  },
  {
    "Symbol": "MBUU",
    "Name": "Malibu Boats Inc. "
  },
  {
    "Symbol": "MBWM",
    "Name": "Mercantile Bank Corporation"
  },
  {
    "Symbol": "MC",
    "Name": "Moelis & Company "
  },
  {
    "Symbol": "MCAA",
    "Name": "Mountain & Co. I Acquisition "
  },
  {
    "Symbol": "MCB",
    "Name": "Metropolitan Bank Holding"
  },
  {
    "Symbol": "MCBC",
    "Name": "Macatawa Bank Corporation"
  },
  {
    "Symbol": "MCBS",
    "Name": "MetroCity Bankshares Inc."
  },
  {
    "Symbol": "MCD",
    "Name": "McDonald's Corporation"
  },
  {
    "Symbol": "MCFT",
    "Name": "MasterCraft Boat Holdings Inc."
  },
  {
    "Symbol": "MCG",
    "Name": "Membership Collective Group Inc. "
  },
  {
    "Symbol": "MCHP",
    "Name": "Microchip Technology Incorporated"
  },
  {
    "Symbol": "MCHX",
    "Name": "Marchex Inc. Class B"
  },
  {
    "Symbol": "MCI",
    "Name": "Barings Corporate Investors"
  },
  {
    "Symbol": "MCK",
    "Name": "McKesson Corporation"
  },
  {
    "Symbol": "MCLD",
    "Name": "mCloud Technologies"
  },
  {
    "Symbol": "MCN",
    "Name": "Madison Covered Call & Equity Strategy Fund"
  },
  {
    "Symbol": "MCO",
    "Name": "Moody's Corporation"
  },
  {
    "Symbol": "MCR",
    "Name": "MFS Charter Income Trust"
  },
  {
    "Symbol": "MCRB",
    "Name": "Seres Therapeutics Inc."
  },
  {
    "Symbol": "MCRI",
    "Name": "Monarch Casino & Resort Inc."
  },
  {
    "Symbol": "MCS",
    "Name": "Marcus Corporation (The)"
  },
  {
    "Symbol": "MCW",
    "Name": "Mister Car Wash Inc."
  },
  {
    "Symbol": "MCY",
    "Name": "Mercury General Corporation"
  },
  {
    "Symbol": "MD",
    "Name": "Mednax Inc."
  },
  {
    "Symbol": "MDB",
    "Name": "MongoDB Inc. "
  },
  {
    "Symbol": "MDC",
    "Name": "M.D.C. Holdings Inc."
  },
  {
    "Symbol": "MDGL",
    "Name": "Madrigal Pharmaceuticals Inc."
  },
  {
    "Symbol": "MDH",
    "Name": "MDH Acquisition "
  },
  {
    "Symbol": "MDIA",
    "Name": "Mediaco Holding Inc. "
  },
  {
    "Symbol": "MDJH",
    "Name": "MDJM LTD Ordinary Share"
  },
  {
    "Symbol": "MDLZ",
    "Name": "Mondelez International Inc. "
  },
  {
    "Symbol": "MDNA",
    "Name": "Medicenna Therapeutics"
  },
  {
    "Symbol": "MDRR",
    "Name": "Medalist Diversified REIT Inc."
  },
  {
    "Symbol": "MDRRP",
    "Name": "Medalist Diversified REIT Inc. Series A Cumulative Redeemable Preferred Stock"
  },
  {
    "Symbol": "MDRX",
    "Name": "Allscripts Healthcare Solutions Inc."
  },
  {
    "Symbol": "MDT",
    "Name": "Medtronic plc."
  },
  {
    "Symbol": "MDU",
    "Name": "MDU Resources Group Inc.  (Holding Company)"
  },
  {
    "Symbol": "MDV",
    "Name": "Modiv Inc. Class C"
  },
  {
    "Symbol": "MDVL",
    "Name": "MedAvail Holdings Inc."
  },
  {
    "Symbol": "MDWD",
    "Name": "MediWound Ltd."
  },
  {
    "Symbol": "MDWT",
    "Name": "Midwest Holding Inc."
  },
  {
    "Symbol": "MDXG",
    "Name": "MiMedx Group Inc"
  },
  {
    "Symbol": "ME",
    "Name": "23andMe Holding Co. "
  },
  {
    "Symbol": "MEAC",
    "Name": "Mercury Ecommerce Acquisition Corp "
  },
  {
    "Symbol": "MEC",
    "Name": "Mayville Engineering Company Inc."
  },
  {
    "Symbol": "MED",
    "Name": "MEDIFAST INC"
  },
  {
    "Symbol": "MEDP",
    "Name": "Medpace Holdings Inc."
  },
  {
    "Symbol": "MEDS",
    "Name": "TRxADE HEALTH Inc."
  },
  {
    "Symbol": "MEG",
    "Name": "Montrose Environmental Group Inc."
  },
  {
    "Symbol": "MEGI",
    "Name": "MainStay CBRE Global Infrastructure Megatrends Fund"
  },
  {
    "Symbol": "MEI",
    "Name": "Methode Electronics Inc."
  },
  {
    "Symbol": "MEIP",
    "Name": "MEI Pharma Inc."
  },
  {
    "Symbol": "MEKA",
    "Name": "MELI Kaszek Pioneer Corp "
  },
  {
    "Symbol": "MELI",
    "Name": "MercadoLibre Inc."
  },
  {
    "Symbol": "MEOA",
    "Name": "Minority Equality Opportunities Acquisition Inc. "
  },
  {
    "Symbol": "MEOAU",
    "Name": "Minority Equality Opportunities Acquisition Inc. Units"
  },
  {
    "Symbol": "MEOH",
    "Name": "Methanex Corporation"
  },
  {
    "Symbol": "MERC",
    "Name": "Mercer International Inc."
  },
  {
    "Symbol": "MESA",
    "Name": "Mesa Air Group Inc."
  },
  {
    "Symbol": "MET",
    "Name": "MetLife Inc."
  },
  {
    "Symbol": "METC",
    "Name": "Ramaco Resources Inc."
  },
  {
    "Symbol": "METX",
    "Name": "Meten Holding Group Ltd."
  },
  {
    "Symbol": "MFA",
    "Name": "MFA Financial Inc."
  },
  {
    "Symbol": "MFC",
    "Name": "Manulife Financial Corporation"
  },
  {
    "Symbol": "MFD",
    "Name": "Macquarie First Trust Global"
  },
  {
    "Symbol": "MFG",
    "Name": "Mizuho Financial Group Inc. Sponosred ADR (Japan)"
  },
  {
    "Symbol": "MFGP",
    "Name": "Micro Focus Intl PLC ADS each representing One Ord Sh"
  },
  {
    "Symbol": "MFH",
    "Name": "Mercurity Fintech Holding Inc. ADS"
  },
  {
    "Symbol": "MFIN",
    "Name": "Medallion Financial"
  },
  {
    "Symbol": "MFM",
    "Name": "MFS Municipal Income Trust"
  },
  {
    "Symbol": "MFV",
    "Name": "MFS Special Value Trust"
  },
  {
    "Symbol": "MG",
    "Name": "Mistras Group Inc"
  },
  {
    "Symbol": "MGA",
    "Name": "Magna International Inc."
  },
  {
    "Symbol": "MGEE",
    "Name": "MGE Energy Inc"
  },
  {
    "Symbol": "MGF",
    "Name": "MFS Government Markets Income Trust"
  },
  {
    "Symbol": "MGI",
    "Name": "Moneygram International Inc."
  },
  {
    "Symbol": "MGIC",
    "Name": "Magic Software Enterprises Ltd."
  },
  {
    "Symbol": "MGLD",
    "Name": "The Marygold Companies Inc."
  },
  {
    "Symbol": "MGM",
    "Name": "MGM Resorts International"
  },
  {
    "Symbol": "MGNI",
    "Name": "Magnite Inc."
  },
  {
    "Symbol": "MGNX",
    "Name": "MacroGenics Inc."
  },
  {
    "Symbol": "MGP",
    "Name": "MGM Growth Properties LLC   representing limited liability company interests"
  },
  {
    "Symbol": "MGPI",
    "Name": "MGP Ingredients Inc."
  },
  {
    "Symbol": "MGRC",
    "Name": "McGrath RentCorp"
  },
  {
    "Symbol": "MGTA",
    "Name": "Magenta Therapeutics Inc."
  },
  {
    "Symbol": "MGTX",
    "Name": "MeiraGTx Holdings plc"
  },
  {
    "Symbol": "MGU",
    "Name": "Macquarie Global Infrastructure Total Return Fund Inc."
  },
  {
    "Symbol": "MGY",
    "Name": "Magnolia Oil & Gas Corporation "
  },
  {
    "Symbol": "MGYR",
    "Name": "Magyar Bancorp Inc."
  },
  {
    "Symbol": "MHD",
    "Name": "Blackrock MuniHoldings Fund Inc."
  },
  {
    "Symbol": "MHF",
    "Name": "Western Asset Municipal High Income Fund Inc."
  },
  {
    "Symbol": "MHH",
    "Name": "Mastech Digital Inc"
  },
  {
    "Symbol": "MHI",
    "Name": "Pioneer Municipal High Income Fund Inc."
  },
  {
    "Symbol": "MHK",
    "Name": "Mohawk Industries Inc."
  },
  {
    "Symbol": "MHLD",
    "Name": "Maiden Holdings Ltd."
  },
  {
    "Symbol": "MHN",
    "Name": "Blackrock MuniHoldings New York Quality Fund Inc."
  },
  {
    "Symbol": "MHO",
    "Name": "M/I Homes Inc."
  },
  {
    "Symbol": "MHUA",
    "Name": "Meihua International Medical Technologies Co. Ltd."
  },
  {
    "Symbol": "MIC",
    "Name": "Macquarie Infrastructure Holdings LLC Common Unit"
  },
  {
    "Symbol": "MICT",
    "Name": "MICT Inc."
  },
  {
    "Symbol": "MIDD",
    "Name": "Middleby Corporation (The)"
  },
  {
    "Symbol": "MIGI",
    "Name": "Mawson Infrastructure Group Inc."
  },
  {
    "Symbol": "MILE",
    "Name": "Metromile Inc."
  },
  {
    "Symbol": "MIME",
    "Name": "Mimecast Limited"
  },
  {
    "Symbol": "MIMO",
    "Name": "Airspan Networks Holdings Inc."
  },
  {
    "Symbol": "MIN",
    "Name": "MFS Intermediate Income Trust"
  },
  {
    "Symbol": "MIND",
    "Name": "MIND Technology Inc.  (DE)"
  },
  {
    "Symbol": "MINM",
    "Name": "Minim Inc."
  },
  {
    "Symbol": "MIO",
    "Name": "Pioneer Municipal High Income Opportunities Fund Inc."
  },
  {
    "Symbol": "MIR",
    "Name": "Mirion Technologies Inc. "
  },
  {
    "Symbol": "MIRM",
    "Name": "Mirum Pharmaceuticals Inc."
  },
  {
    "Symbol": "MIRO",
    "Name": "Miromatrix Medical Inc."
  },
  {
    "Symbol": "MIST",
    "Name": "Milestone Pharmaceuticals Inc."
  },
  {
    "Symbol": "MIT",
    "Name": "Mason Industrial Technology Inc. "
  },
  {
    "Symbol": "MITA",
    "Name": "Coliseum Acquisition  Ordinary Share"
  },
  {
    "Symbol": "MITAU",
    "Name": "Coliseum Acquisition Unit"
  },
  {
    "Symbol": "MITK",
    "Name": "Mitek Systems Inc."
  },
  {
    "Symbol": "MITO",
    "Name": "Stealth BioTherapeutics ADS"
  },
  {
    "Symbol": "MITQ",
    "Name": "Moving iMage Technologies Inc."
  },
  {
    "Symbol": "MITT",
    "Name": "AG Mortgage Investment Trust Inc."
  },
  {
    "Symbol": "MIY",
    "Name": "Blackrock MuniYield Michigan Quality Fund Inc."
  },
  {
    "Symbol": "MKC",
    "Name": "McCormick & Company Incorporated"
  },
  {
    "Symbol": "MKFG",
    "Name": "Markforged Holding Corporation"
  },
  {
    "Symbol": "MKL",
    "Name": "Markel Corporation"
  },
  {
    "Symbol": "MKSI",
    "Name": "MKS Instruments Inc."
  },
  {
    "Symbol": "MKTW",
    "Name": "MarketWise Inc. "
  },
  {
    "Symbol": "MKTX",
    "Name": "MarketAxess Holdings Inc."
  },
  {
    "Symbol": "ML",
    "Name": "MoneyLion Inc. "
  },
  {
    "Symbol": "MLAB",
    "Name": "Mesa Laboratories Inc."
  },
  {
    "Symbol": "MLAC",
    "Name": "Malacca Straits Acquisition Company Limited "
  },
  {
    "Symbol": "MLACU",
    "Name": "Malacca Straits Acquisition Company Limited Units"
  },
  {
    "Symbol": "MLAIU",
    "Name": "McLaren Technology Acquisition Unit"
  },
  {
    "Symbol": "MLI",
    "Name": "Mueller Industries Inc."
  },
  {
    "Symbol": "MLKN",
    "Name": "MillerKnoll Inc."
  },
  {
    "Symbol": "MLM",
    "Name": "Martin Marietta Materials Inc."
  },
  {
    "Symbol": "MLNK",
    "Name": "MeridianLink Inc."
  },
  {
    "Symbol": "MLP",
    "Name": "Maui Land & Pineapple Company Inc."
  },
  {
    "Symbol": "MLR",
    "Name": "Miller Industries Inc."
  },
  {
    "Symbol": "MLSS",
    "Name": "Milestone Scientific Inc."
  },
  {
    "Symbol": "MLTX",
    "Name": "MoonLake Immunotherapeutics "
  },
  {
    "Symbol": "MLVF",
    "Name": "Malvern Bancorp Inc."
  },
  {
    "Symbol": "MMAT",
    "Name": "Meta Materials Inc."
  },
  {
    "Symbol": "MMC",
    "Name": "Marsh & McLennan Companies Inc."
  },
  {
    "Symbol": "MMD",
    "Name": "MainStay MacKay DefinedTerm Municipal Opportunities Fund"
  },
  {
    "Symbol": "MMI",
    "Name": "Marcus & Millichap Inc."
  },
  {
    "Symbol": "MMLP",
    "Name": "Martin Midstream Partners L.P. Limited Partnership"
  },
  {
    "Symbol": "MMM",
    "Name": "3M Company"
  },
  {
    "Symbol": "MMMB",
    "Name": "MamaMancini's Holdings Inc."
  },
  {
    "Symbol": "MMP",
    "Name": "Magellan Midstream Partners L.P. Limited Partnership"
  },
  {
    "Symbol": "MMS",
    "Name": "Maximus Inc."
  },
  {
    "Symbol": "MMSI",
    "Name": "Merit Medical Systems Inc."
  },
  {
    "Symbol": "MMT",
    "Name": "MFS Multimarket Income Trust"
  },
  {
    "Symbol": "MMU",
    "Name": "Western Asset Managed Municipals Fund Inc."
  },
  {
    "Symbol": "MMX",
    "Name": "Maverix Metals Inc."
  },
  {
    "Symbol": "MMYT",
    "Name": "MakeMyTrip Limited"
  },
  {
    "Symbol": "MN",
    "Name": "Manning & Napier Inc. "
  },
  {
    "Symbol": "MNDO",
    "Name": "MIND C.T.I. Ltd."
  },
  {
    "Symbol": "MNDT",
    "Name": "Mandiant Inc."
  },
  {
    "Symbol": "MNDY",
    "Name": "monday.com Ltd."
  },
  {
    "Symbol": "MNKD",
    "Name": "MannKind Corporation"
  },
  {
    "Symbol": "MNMD",
    "Name": "Mind Medicine (MindMed) Inc. Subordinate Voting Shares"
  },
  {
    "Symbol": "MNOV",
    "Name": "Medicinova Inc"
  },
  {
    "Symbol": "MNP",
    "Name": "Western Asset Municipal Partners Fund Inc."
  },
  {
    "Symbol": "MNPR",
    "Name": "Monopar Therapeutics Inc."
  },
  {
    "Symbol": "MNRL",
    "Name": "Brigham Minerals Inc. "
  },
  {
    "Symbol": "MNRO",
    "Name": "Monro Inc."
  },
  {
    "Symbol": "MNSB",
    "Name": "MainStreet Bancshares Inc."
  },
  {
    "Symbol": "MNST",
    "Name": "Monster Beverage Corporation"
  },
  {
    "Symbol": "MNTK",
    "Name": "Montauk Renewables Inc."
  },
  {
    "Symbol": "MNTN",
    "Name": "Everest Consolidator Acquisition Corporation "
  },
  {
    "Symbol": "MNTS",
    "Name": "Momentus Inc. "
  },
  {
    "Symbol": "MNTV",
    "Name": "Momentive Global Inc."
  },
  {
    "Symbol": "MNTX",
    "Name": "Manitex International Inc."
  },
  {
    "Symbol": "MO",
    "Name": "Altria Group Inc."
  },
  {
    "Symbol": "MOBQ",
    "Name": "Mobiquity Technologies Inc."
  },
  {
    "Symbol": "MOD",
    "Name": "Modine Manufacturing Company"
  },
  {
    "Symbol": "MODD",
    "Name": "Modular Medical Inc."
  },
  {
    "Symbol": "MODN",
    "Name": "Model N Inc."
  },
  {
    "Symbol": "MODV",
    "Name": "ModivCare Inc."
  },
  {
    "Symbol": "MOFG",
    "Name": "MidWestOne Financial Gp"
  },
  {
    "Symbol": "MOGO",
    "Name": "Mogo Inc."
  },
  {
    "Symbol": "MOH",
    "Name": "Molina Healthcare Inc"
  },
  {
    "Symbol": "MON",
    "Name": "Monument Circle Acquisition "
  },
  {
    "Symbol": "MORF",
    "Name": "Morphic Holding Inc."
  },
  {
    "Symbol": "MORN",
    "Name": "Morningstar Inc."
  },
  {
    "Symbol": "MOS",
    "Name": "Mosaic Company (The)"
  },
  {
    "Symbol": "MOTS",
    "Name": "Motus GI Holdings Inc."
  },
  {
    "Symbol": "MOV",
    "Name": "Movado Group Inc."
  },
  {
    "Symbol": "MOVE",
    "Name": "Movano Inc."
  },
  {
    "Symbol": "MOXC",
    "Name": "Moxian (BVI) Inc"
  },
  {
    "Symbol": "MP",
    "Name": "MP Materials"
  },
  {
    "Symbol": "MPA",
    "Name": "Blackrock MuniYield Pennsylvania Quality Fund"
  },
  {
    "Symbol": "MPAA",
    "Name": "Motorcar Parts  of America Inc."
  },
  {
    "Symbol": "MPAC",
    "Name": "Model Performance Acquisition  Ordinary Share"
  },
  {
    "Symbol": "MPACR",
    "Name": "Model Performance Acquisition Right"
  },
  {
    "Symbol": "MPB",
    "Name": "Mid Penn Bancorp"
  },
  {
    "Symbol": "MPC",
    "Name": "Marathon Petroleum Corporation"
  },
  {
    "Symbol": "MPLN",
    "Name": "MultiPlan Corporation "
  },
  {
    "Symbol": "MPLX",
    "Name": "MPLX LP Common Units Representing Limited Partner Interests"
  },
  {
    "Symbol": "MPRA",
    "Name": "Mercato Partners Acquisition Corporation "
  },
  {
    "Symbol": "MPRAU",
    "Name": "Mercato Partners Acquisition Corporation Unit"
  },
  {
    "Symbol": "MPV",
    "Name": "Barings Participation Investors"
  },
  {
    "Symbol": "MPW",
    "Name": "Medical Properties Trust Inc."
  },
  {
    "Symbol": "MPWR",
    "Name": "Monolithic Power Systems Inc."
  },
  {
    "Symbol": "MPX",
    "Name": "Marine Products Corporation"
  },
  {
    "Symbol": "MQ",
    "Name": "Marqeta Inc. "
  },
  {
    "Symbol": "MQY",
    "Name": "Blackrock MuniYield Quality Fund Inc."
  },
  {
    "Symbol": "MRAI",
    "Name": "Marpai Inc. "
  },
  {
    "Symbol": "MRAM",
    "Name": "Everspin Technologies Inc."
  },
  {
    "Symbol": "MRBK",
    "Name": "Meridian Corporation"
  },
  {
    "Symbol": "MRC",
    "Name": "MRC Global Inc."
  },
  {
    "Symbol": "MRCC",
    "Name": "Monroe Capital Corporation"
  },
  {
    "Symbol": "MRCY",
    "Name": "Mercury Systems Inc"
  },
  {
    "Symbol": "MRIN",
    "Name": "Marin Software Incorporated"
  },
  {
    "Symbol": "MRK",
    "Name": "Merck & Company Inc.  (new)"
  },
  {
    "Symbol": "MRKR",
    "Name": "Marker Therapeutics Inc."
  },
  {
    "Symbol": "MRNA",
    "Name": "Moderna Inc."
  },
  {
    "Symbol": "MRNS",
    "Name": "Marinus Pharmaceuticals Inc."
  },
  {
    "Symbol": "MRO",
    "Name": "Marathon Oil Corporation"
  },
  {
    "Symbol": "MRSN",
    "Name": "Mersana Therapeutics Inc."
  },
  {
    "Symbol": "MRTN",
    "Name": "Marten Transport Ltd."
  },
  {
    "Symbol": "MRTX",
    "Name": "Mirati Therapeutics Inc."
  },
  {
    "Symbol": "MRUS",
    "Name": "Merus N.V."
  },
  {
    "Symbol": "MRVI",
    "Name": "Maravai LifeSciences Holdings Inc. "
  },
  {
    "Symbol": "MRVL",
    "Name": "Marvell Technology Inc."
  },
  {
    "Symbol": "MS",
    "Name": "Morgan Stanley"
  },
  {
    "Symbol": "MSA",
    "Name": "MSA Safety Incorporated"
  },
  {
    "Symbol": "MSAC",
    "Name": "Medicus Sciences Acquisition  Ordinary Share"
  },
  {
    "Symbol": "MSB",
    "Name": "Mesabi Trust"
  },
  {
    "Symbol": "MSBI",
    "Name": "Midland States Bancorp Inc."
  },
  {
    "Symbol": "MSCI",
    "Name": "MSCI Inc"
  },
  {
    "Symbol": "MSD",
    "Name": "Morgan Stanley Emerging Markets Debt Fund Inc."
  },
  {
    "Symbol": "MSDA",
    "Name": "MSD Acquisition "
  },
  {
    "Symbol": "MSDAU",
    "Name": "MSD Acquisition Unit"
  },
  {
    "Symbol": "MSEX",
    "Name": "Middlesex Water Company"
  },
  {
    "Symbol": "MSFT",
    "Name": "Microsoft Corporation"
  },
  {
    "Symbol": "MSGE",
    "Name": "Madison Square Garden Entertainment "
  },
  {
    "Symbol": "MSGM",
    "Name": "Motorsport Games Inc. "
  },
  {
    "Symbol": "MSGS",
    "Name": "Madison Square Garden Sports   (New)"
  },
  {
    "Symbol": "MSI",
    "Name": "Motorola Solutions Inc."
  },
  {
    "Symbol": "MSM",
    "Name": "MSC Industrial Direct Company Inc."
  },
  {
    "Symbol": "MSN",
    "Name": "Emerson Radio Corporation"
  },
  {
    "Symbol": "MSP",
    "Name": "Datto Holding"
  },
  {
    "Symbol": "MSSAU",
    "Name": "Metal Sky Star Acquisition Corporation Unit"
  },
  {
    "Symbol": "MSTR",
    "Name": "MicroStrategy Incorporated  "
  },
  {
    "Symbol": "MSVB",
    "Name": "Mid-Southern Bancorp Inc."
  },
  {
    "Symbol": "MT",
    "Name": "Arcelor Mittal NY Registry Shares NEW"
  },
  {
    "Symbol": "MTA",
    "Name": "Metalla Royalty & Streaming Ltd."
  },
  {
    "Symbol": "MTAC",
    "Name": "MedTech Acquisition Corporation "
  },
  {
    "Symbol": "MTACU",
    "Name": "MedTech Acquisition Corporation Unit"
  },
  {
    "Symbol": "MTAL",
    "Name": "Metals Acquisition Corp "
  },
  {
    "Symbol": "MTB",
    "Name": "M&T Bank Corporation"
  },
  {
    "Symbol": "MTBC",
    "Name": "CareCloud Inc."
  },
  {
    "Symbol": "MTC",
    "Name": "MMTec Inc."
  },
  {
    "Symbol": "MTCH",
    "Name": "Match Group Inc."
  },
  {
    "Symbol": "MTCR",
    "Name": "Metacrine Inc."
  },
  {
    "Symbol": "MTD",
    "Name": "Mettler-Toledo International Inc."
  },
  {
    "Symbol": "MTDR",
    "Name": "Matador Resources Company"
  },
  {
    "Symbol": "MTEK",
    "Name": "Maris-Tech Ltd."
  },
  {
    "Symbol": "MTEM",
    "Name": "Molecular Templates Inc."
  },
  {
    "Symbol": "MTEX",
    "Name": "Mannatech Incorporated"
  },
  {
    "Symbol": "MTG",
    "Name": "MGIC Investment Corporation"
  },
  {
    "Symbol": "MTH",
    "Name": "Meritage Homes Corporation"
  },
  {
    "Symbol": "MTMT",
    "Name": "Mega Matrix"
  },
  {
    "Symbol": "MTN",
    "Name": "Vail Resorts Inc."
  },
  {
    "Symbol": "MTNB",
    "Name": "Matinas Biopharma Holdings Inc."
  },
  {
    "Symbol": "MTOR",
    "Name": "Meritor Inc."
  },
  {
    "Symbol": "MTP",
    "Name": "Midatech Pharma PLC American Depositary Shs"
  },
  {
    "Symbol": "MTR",
    "Name": "Mesa Royalty Trust"
  },
  {
    "Symbol": "MTRN",
    "Name": "Materion Corporation"
  },
  {
    "Symbol": "MTRX",
    "Name": "Matrix Service Company"
  },
  {
    "Symbol": "MTRY",
    "Name": "Monterey Bio Acquisition Corporation"
  },
  {
    "Symbol": "MTRYU",
    "Name": "Monterey Bio Acquisition Corporation Unit"
  },
  {
    "Symbol": "MTSI",
    "Name": "MACOM Technology Solutions Holdings Inc."
  },
  {
    "Symbol": "MTTR",
    "Name": "Matterport Inc. "
  },
  {
    "Symbol": "MTW",
    "Name": "Manitowoc Company Inc. (The)"
  },
  {
    "Symbol": "MTX",
    "Name": "Minerals Technologies Inc."
  },
  {
    "Symbol": "MTZ",
    "Name": "MasTec Inc."
  },
  {
    "Symbol": "MU",
    "Name": "Micron Technology Inc."
  },
  {
    "Symbol": "MUA",
    "Name": "Blackrock MuniAssets Fund Inc"
  },
  {
    "Symbol": "MUC",
    "Name": "Blackrock MuniHoldings California Quality Fund Inc."
  },
  {
    "Symbol": "MUFG",
    "Name": "Mitsubishi UFJ Financial Group Inc."
  },
  {
    "Symbol": "MUI",
    "Name": "BlackRock Municipal Income Fund Inc."
  },
  {
    "Symbol": "MUJ",
    "Name": "Blackrock MuniHoldings New Jersey Quality Fund Inc."
  },
  {
    "Symbol": "MULN",
    "Name": "Mullen Automotive Inc."
  },
  {
    "Symbol": "MUR",
    "Name": "Murphy Oil Corporation"
  },
  {
    "Symbol": "MURF",
    "Name": "Murphy Canyon Acquisition "
  },
  {
    "Symbol": "MUSA",
    "Name": "Murphy USA Inc."
  },
  {
    "Symbol": "MUX",
    "Name": "McEwen Mining Inc."
  },
  {
    "Symbol": "MVBF",
    "Name": "MVB Financial"
  },
  {
    "Symbol": "MVF",
    "Name": "Blackrock MuniVest Fund Inc."
  },
  {
    "Symbol": "MVIS",
    "Name": "MicroVision Inc."
  },
  {
    "Symbol": "MVST",
    "Name": "Microvast Holdings Inc."
  },
  {
    "Symbol": "MWA",
    "Name": "MUELLER WATER PRODUCTS"
  },
  {
    "Symbol": "MX",
    "Name": "Magnachip Semiconductor Corporation"
  },
  {
    "Symbol": "MXC",
    "Name": "Mexco Energy Corporation"
  },
  {
    "Symbol": "MXCT",
    "Name": "MaxCyte Inc."
  },
  {
    "Symbol": "MXE",
    "Name": "Mexico Equity and Income Fund Inc. (The)"
  },
  {
    "Symbol": "MXF",
    "Name": "Mexico Fund Inc. (The)"
  },
  {
    "Symbol": "MXL",
    "Name": "MaxLinear Inc."
  },
  {
    "Symbol": "MYD",
    "Name": "Blackrock MuniYield Fund Inc."
  },
  {
    "Symbol": "MYE",
    "Name": "Myers Industries Inc."
  },
  {
    "Symbol": "MYFW",
    "Name": "First Western Financial Inc."
  },
  {
    "Symbol": "MYGN",
    "Name": "Myriad Genetics Inc."
  },
  {
    "Symbol": "MYMD",
    "Name": "MyMD Pharmaceuticals Inc."
  },
  {
    "Symbol": "MYN",
    "Name": "Blackrock MuniYield New York Quality Fund Inc."
  },
  {
    "Symbol": "MYNA",
    "Name": "Mynaric AG American Depository Shares"
  },
  {
    "Symbol": "MYNZ",
    "Name": "Mainz Biomed B.V."
  },
  {
    "Symbol": "MYO",
    "Name": "Myomo Inc."
  },
  {
    "Symbol": "MYOV",
    "Name": "Myovant Sciences Ltd."
  },
  {
    "Symbol": "MYPS",
    "Name": "PLAYSTUDIOS Inc.  "
  },
  {
    "Symbol": "MYRG",
    "Name": "MYR Group Inc."
  },
  {
    "Symbol": "MYSZ",
    "Name": "My Size Inc."
  },
  {
    "Symbol": "NAAC",
    "Name": "North Atlantic Acquisition Corporation  Ordinary Share"
  },
  {
    "Symbol": "NAACU",
    "Name": "North Atlantic Acquisition Corporation Unit"
  },
  {
    "Symbol": "NABL",
    "Name": "N-able Inc."
  },
  {
    "Symbol": "NAC",
    "Name": "Nuveen California Quality Municipal Income Fund"
  },
  {
    "Symbol": "NAD",
    "Name": "Nuveen Quality Municipal Income Fund"
  },
  {
    "Symbol": "NAK",
    "Name": "Northern Dynasty Minerals Ltd."
  },
  {
    "Symbol": "NAN",
    "Name": "Nuveen New York Quality Municipal Income Fund"
  },
  {
    "Symbol": "NAOV",
    "Name": "NanoVibronix Inc."
  },
  {
    "Symbol": "NAPA",
    "Name": "The Duckhorn Portfolio Inc."
  },
  {
    "Symbol": "NARI",
    "Name": "Inari Medical Inc."
  },
  {
    "Symbol": "NAT",
    "Name": "Nordic American Tankers Limited"
  },
  {
    "Symbol": "NATH",
    "Name": "Nathan's Famous Inc."
  },
  {
    "Symbol": "NATI",
    "Name": "National Instruments Corporation"
  },
  {
    "Symbol": "NATR",
    "Name": "Nature's Sunshine Products Inc."
  },
  {
    "Symbol": "NAUT",
    "Name": "Nautilus Biotechnolgy Inc."
  },
  {
    "Symbol": "NAVB",
    "Name": "Navidea Biopharmaceuticals Inc."
  },
  {
    "Symbol": "NAVI",
    "Name": "Navient Corporation"
  },
  {
    "Symbol": "NAZ",
    "Name": "Nuveen Arizona Quality Municipal Income Fund"
  },
  {
    "Symbol": "NBEV",
    "Name": "NewAge Inc.  (Delaware)"
  },
  {
    "Symbol": "NBH",
    "Name": "Neuberger Berman Municipal Fund Inc."
  },
  {
    "Symbol": "NBHC",
    "Name": "National Bank Holdings Corporation"
  },
  {
    "Symbol": "NBIX",
    "Name": "Neurocrine Biosciences Inc."
  },
  {
    "Symbol": "NBN",
    "Name": "Northeast Bank"
  },
  {
    "Symbol": "NBO",
    "Name": "Neuberger Berman New York Municipal Fund Inc."
  },
  {
    "Symbol": "NBR",
    "Name": "Nabors Industries Ltd."
  },
  {
    "Symbol": "NBRV",
    "Name": "Nabriva Therapeutics plc  Ireland"
  },
  {
    "Symbol": "NBSE",
    "Name": "NeuBase Therapeutics Inc."
  },
  {
    "Symbol": "NBST",
    "Name": "Newbury Street Acquisition Corporation"
  },
  {
    "Symbol": "NBSTU",
    "Name": "Newbury Street Acquisition Corporation Units"
  },
  {
    "Symbol": "NBTB",
    "Name": "NBT Bancorp Inc."
  },
  {
    "Symbol": "NBW",
    "Name": "Neuberger Berman California Municipal Fund Inc"
  },
  {
    "Symbol": "NBXG",
    "Name": "Neuberger Berman Next Generation Connectivity Fund Inc."
  },
  {
    "Symbol": "NBY",
    "Name": "NovaBay Pharmaceuticals Inc."
  },
  {
    "Symbol": "NC",
    "Name": "NACCO Industries Inc."
  },
  {
    "Symbol": "NCA",
    "Name": "Nuveen California Municipal Value Fund"
  },
  {
    "Symbol": "NCAC",
    "Name": "Newcourt Acquisition Corp  Ordinary Share"
  },
  {
    "Symbol": "NCACU",
    "Name": "Newcourt Acquisition Corp Unit"
  },
  {
    "Symbol": "NCBS",
    "Name": "Nicolet Bankshares Inc."
  },
  {
    "Symbol": "NCLH",
    "Name": "Norwegian Cruise Line Holdings Ltd."
  },
  {
    "Symbol": "NCMI",
    "Name": "National CineMedia Inc."
  },
  {
    "Symbol": "NCNO",
    "Name": "nCino Inc."
  },
  {
    "Symbol": "NCR",
    "Name": "NCR Corporation"
  },
  {
    "Symbol": "NCSM",
    "Name": "NCS Multistage Holdings Inc."
  },
  {
    "Symbol": "NCTY",
    "Name": "The9 Limited American Depository Shares"
  },
  {
    "Symbol": "NDAC",
    "Name": "NightDragon Acquisition "
  },
  {
    "Symbol": "NDACU",
    "Name": "NightDragon Acquisition SCALE Units"
  },
  {
    "Symbol": "NDAQ",
    "Name": "Nasdaq Inc."
  },
  {
    "Symbol": "NDLS",
    "Name": "Noodles & Company "
  },
  {
    "Symbol": "NDP",
    "Name": "Tortoise Energy Independence Fund Inc."
  },
  {
    "Symbol": "NDRA",
    "Name": "ENDRA Life Sciences Inc."
  },
  {
    "Symbol": "NDSN",
    "Name": "Nordson Corporation"
  },
  {
    "Symbol": "NE",
    "Name": "Noble Corporation plc"
  },
  {
    "Symbol": "NECB",
    "Name": "NorthEast Community Bancorp Inc."
  },
  {
    "Symbol": "NEE",
    "Name": "NextEra Energy Inc."
  },
  {
    "Symbol": "NEGG",
    "Name": "Newegg Commerce Inc."
  },
  {
    "Symbol": "NEM",
    "Name": "Newmont Corporation"
  },
  {
    "Symbol": "NEN",
    "Name": "New England Realty Associates Limited Partnership  Depositary Receipts Evidencing Units of Limited Partnership"
  },
  {
    "Symbol": "NEO",
    "Name": "NeoGenomics Inc."
  },
  {
    "Symbol": "NEOG",
    "Name": "Neogen Corporation"
  },
  {
    "Symbol": "NEON",
    "Name": "Neonode Inc."
  },
  {
    "Symbol": "NEP",
    "Name": "NextEra Energy Partners LP Common Units representing limited partner interests"
  },
  {
    "Symbol": "NEPH",
    "Name": "Nephros Inc."
  },
  {
    "Symbol": "NEPT",
    "Name": "Neptune Wellness Solutions Inc."
  },
  {
    "Symbol": "NERV",
    "Name": "Minerva Neurosciences Inc"
  },
  {
    "Symbol": "NESR",
    "Name": "National Energy Services Reunited"
  },
  {
    "Symbol": "NET",
    "Name": "Cloudflare Inc. "
  },
  {
    "Symbol": "NETC",
    "Name": "Nabors Energy Transition "
  },
  {
    "Symbol": "NETI",
    "Name": "Eneti Inc."
  },
  {
    "Symbol": "NEU",
    "Name": "NewMarket Corp"
  },
  {
    "Symbol": "NEWP",
    "Name": "New Pacific Metals"
  },
  {
    "Symbol": "NEWR",
    "Name": "New Relic Inc."
  },
  {
    "Symbol": "NEWT",
    "Name": "Newtek Business Services  (Maryland)"
  },
  {
    "Symbol": "NEX",
    "Name": "NexTier Oilfield Solutions Inc."
  },
  {
    "Symbol": "NEXA",
    "Name": "Nexa Resources S.A."
  },
  {
    "Symbol": "NEXI",
    "Name": "NexImmune Inc."
  },
  {
    "Symbol": "NEXT",
    "Name": "NextDecade Corporation"
  },
  {
    "Symbol": "NFBK",
    "Name": "Northfield Bancorp Inc.  (Delaware)"
  },
  {
    "Symbol": "NFE",
    "Name": "New Fortress Energy Inc. "
  },
  {
    "Symbol": "NFG",
    "Name": "National Fuel Gas Company"
  },
  {
    "Symbol": "NFGC",
    "Name": "New Found Gold Corp"
  },
  {
    "Symbol": "NFLX",
    "Name": "Netflix Inc."
  },
  {
    "Symbol": "NFNT",
    "Name": "Infinite Acquisition "
  },
  {
    "Symbol": "NFYS",
    "Name": "Enphys Acquisition "
  },
  {
    "Symbol": "NG",
    "Name": "Novagold Resources Inc."
  },
  {
    "Symbol": "NGD",
    "Name": "New Gold Inc."
  },
  {
    "Symbol": "NGL",
    "Name": "NGL ENERGY PARTNERS LP Common Units representing Limited Partner Interests"
  },
  {
    "Symbol": "NGM",
    "Name": "NGM Biopharmaceuticals Inc."
  },
  {
    "Symbol": "NGMS",
    "Name": "NeoGames S.A."
  },
  {
    "Symbol": "NGS",
    "Name": "Natural Gas Services Group Inc."
  },
  {
    "Symbol": "NGVC",
    "Name": "Natural Grocers by Vitamin Cottage Inc."
  },
  {
    "Symbol": "NGVT",
    "Name": "Ingevity Corporation"
  },
  {
    "Symbol": "NH",
    "Name": "NantHealth Inc."
  },
  {
    "Symbol": "NHC",
    "Name": "National HealthCare Corporation"
  },
  {
    "Symbol": "NHI",
    "Name": "National Health Investors Inc."
  },
  {
    "Symbol": "NHS",
    "Name": "Neuberger Berman High Yield Strategies Fund"
  },
  {
    "Symbol": "NHTC",
    "Name": "Natural Health Trends"
  },
  {
    "Symbol": "NI",
    "Name": "NiSource Inc"
  },
  {
    "Symbol": "NICK",
    "Name": "Nicholas Financial Inc."
  },
  {
    "Symbol": "NILE",
    "Name": "BitNile Holdings Inc."
  },
  {
    "Symbol": "NIM",
    "Name": "Nuveen Select Maturities Municipal Fund"
  },
  {
    "Symbol": "NIMC",
    "Name": "NiSource Inc Series A Corporate Units"
  },
  {
    "Symbol": "NINE",
    "Name": "Nine Energy Service Inc."
  },
  {
    "Symbol": "NISN",
    "Name": "NiSun International Enterprise Development Group Co. Ltd. "
  },
  {
    "Symbol": "NJR",
    "Name": "NewJersey Resources Corporation"
  },
  {
    "Symbol": "NKE",
    "Name": "Nike Inc."
  },
  {
    "Symbol": "NKG",
    "Name": "Nuveen Georgia Quality Municipal Income Fund"
  },
  {
    "Symbol": "NKLA",
    "Name": "Nikola Corporation"
  },
  {
    "Symbol": "NKSH",
    "Name": "National Bankshares Inc."
  },
  {
    "Symbol": "NKTR",
    "Name": "Nektar Therapeutics"
  },
  {
    "Symbol": "NKTX",
    "Name": "Nkarta Inc."
  },
  {
    "Symbol": "NKX",
    "Name": "Nuveen California AMT-Free Quality Municipal Income Fund"
  },
  {
    "Symbol": "NL",
    "Name": "NL Industries Inc."
  },
  {
    "Symbol": "NLIT",
    "Name": "Northern Lights Acquisition "
  },
  {
    "Symbol": "NLOK",
    "Name": "NortonLifeLock Inc."
  },
  {
    "Symbol": "NLS",
    "Name": "Nautilus Inc."
  },
  {
    "Symbol": "NLSN",
    "Name": "Nielsen N.V."
  },
  {
    "Symbol": "NLSP",
    "Name": "NLS Pharmaceutics Ltd."
  },
  {
    "Symbol": "NLTX",
    "Name": "Neoleukin Therapeutics Inc."
  },
  {
    "Symbol": "NLY",
    "Name": "Annaly Capital Management Inc"
  },
  {
    "Symbol": "NM",
    "Name": "Navios Maritime Holdings Inc."
  },
  {
    "Symbol": "NMCO",
    "Name": "Nuveen Municipal Credit Opportunities Fund"
  },
  {
    "Symbol": "NMFC",
    "Name": "New Mountain Finance Corporation"
  },
  {
    "Symbol": "NMG",
    "Name": "Nouveau Monde Graphite Inc."
  },
  {
    "Symbol": "NMI",
    "Name": "Nuveen Municipal Income Fund Inc."
  },
  {
    "Symbol": "NMIH",
    "Name": "NMI Holdings Inc. "
  },
  {
    "Symbol": "NML",
    "Name": "Neuberger Berman MLP and Energy Income Fund Inc."
  },
  {
    "Symbol": "NMM",
    "Name": "Navios Maritime Partners LP Common Units Representing Limited Partner Interests"
  },
  {
    "Symbol": "NMMC",
    "Name": "North Mountain Merger "
  },
  {
    "Symbol": "NMMCU",
    "Name": "North Mountain Merger Unit"
  },
  {
    "Symbol": "NMRD",
    "Name": "Nemaura Medical Inc."
  },
  {
    "Symbol": "NMRK",
    "Name": "Newmark Group Inc. "
  },
  {
    "Symbol": "NMS",
    "Name": "Nuveen Minnesota Quality Municipal Income Fund"
  },
  {
    "Symbol": "NMT",
    "Name": "Nuveen Massachusetts Quality Municipal Income Fund"
  },
  {
    "Symbol": "NMTC",
    "Name": "NeuroOne Medical Technologies Corporation"
  },
  {
    "Symbol": "NMTR",
    "Name": "9 Meters Biopharma Inc."
  },
  {
    "Symbol": "NN",
    "Name": "NextNav Inc."
  },
  {
    "Symbol": "NNBR",
    "Name": "NN Inc."
  },
  {
    "Symbol": "NNI",
    "Name": "Nelnet Inc."
  },
  {
    "Symbol": "NNN",
    "Name": "National Retail Properties"
  },
  {
    "Symbol": "NNOX",
    "Name": "NANO-X IMAGING LTD"
  },
  {
    "Symbol": "NNVC",
    "Name": "NanoViricides Inc."
  },
  {
    "Symbol": "NNY",
    "Name": "Nuveen New York Municipal Value Fund"
  },
  {
    "Symbol": "NOA",
    "Name": "North American Construction Group Ltd.  (no par)"
  },
  {
    "Symbol": "NOAC",
    "Name": "Natural Order Acquisition"
  },
  {
    "Symbol": "NOACU",
    "Name": "Natural Order Acquisition Unit"
  },
  {
    "Symbol": "NOAH",
    "Name": "Noah Holdings Limited"
  },
  {
    "Symbol": "NOC",
    "Name": "Northrop Grumman Corporation"
  },
  {
    "Symbol": "NODK",
    "Name": "NI Holdings Inc."
  },
  {
    "Symbol": "NOG",
    "Name": "Northern Oil and Gas Inc."
  },
  {
    "Symbol": "NOM",
    "Name": "Nuveen Missouri Quality Municipal Income Fund"
  },
  {
    "Symbol": "NOMD",
    "Name": "Nomad Foods Limited"
  },
  {
    "Symbol": "NOTV",
    "Name": "Inotiv Inc."
  },
  {
    "Symbol": "NOV",
    "Name": "NOV Inc."
  },
  {
    "Symbol": "NOVA",
    "Name": "Sunnova Energy International Inc."
  },
  {
    "Symbol": "NOVN",
    "Name": "Novan Inc."
  },
  {
    "Symbol": "NOVT",
    "Name": "Novanta Inc."
  },
  {
    "Symbol": "NOVVR",
    "Name": "Nova Vision Acquisition Rights"
  },
  {
    "Symbol": "NOW",
    "Name": "ServiceNow Inc."
  },
  {
    "Symbol": "NP",
    "Name": "Neenah Inc."
  },
  {
    "Symbol": "NPCE",
    "Name": "Neuropace Inc."
  },
  {
    "Symbol": "NPFD",
    "Name": "Nuveen Variable Rate Preferred & Income Fund"
  },
  {
    "Symbol": "NPK",
    "Name": "National Presto Industries Inc."
  },
  {
    "Symbol": "NPO",
    "Name": "EnPro Industries Inc"
  },
  {
    "Symbol": "NPTN",
    "Name": "NeoPhotonics Corporation"
  },
  {
    "Symbol": "NPV",
    "Name": "Nuveen Virginia Quality Municipal Income Fund"
  },
  {
    "Symbol": "NQP",
    "Name": "Nuveen Pennsylvania Quality Municipal Income Fund"
  },
  {
    "Symbol": "NR",
    "Name": "Newpark Resources Inc."
  },
  {
    "Symbol": "NRAC",
    "Name": "Noble Rock Acquisition Corporation  Ordinary Share"
  },
  {
    "Symbol": "NRACU",
    "Name": "Noble Rock Acquisition Corporation Unit"
  },
  {
    "Symbol": "NRBO",
    "Name": "NeuroBo Pharmaceuticals Inc."
  },
  {
    "Symbol": "NRC",
    "Name": "National Research Corporation  (Delaware)"
  },
  {
    "Symbol": "NRDS",
    "Name": "NerdWallet Inc. "
  },
  {
    "Symbol": "NRDY",
    "Name": "Nerdy Inc. "
  },
  {
    "Symbol": "NREF",
    "Name": "NexPoint Real Estate Finance Inc."
  },
  {
    "Symbol": "NRG",
    "Name": "NRG Energy Inc."
  },
  {
    "Symbol": "NRGV",
    "Name": "Energy Vault Holdings Inc."
  },
  {
    "Symbol": "NRIM",
    "Name": "Northrim BanCorp Inc"
  },
  {
    "Symbol": "NRIX",
    "Name": "Nurix Therapeutics Inc."
  },
  {
    "Symbol": "NRK",
    "Name": "Nuveen New York AMT-Free Quality Municipal Income Fund"
  },
  {
    "Symbol": "NRO",
    "Name": "Neuberger Berman Real Estate Securities Income Fund Inc. Neuberger Berman Real Estate Securities Income Fund Inc."
  },
  {
    "Symbol": "NRP",
    "Name": "Natural Resource Partners LP Limited Partnership"
  },
  {
    "Symbol": "NRSN",
    "Name": "NeuroSense Therapeutics Ltd."
  },
  {
    "Symbol": "NRT",
    "Name": "North European Oil Royality Trust"
  },
  {
    "Symbol": "NRXP",
    "Name": "NRX Pharmaceuticals Inc."
  },
  {
    "Symbol": "NRZ",
    "Name": "New Residential Investment"
  },
  {
    "Symbol": "NS",
    "Name": "Nustar Energy L.P.  Common Units"
  },
  {
    "Symbol": "NSC",
    "Name": "Norfolk Southern Corporation"
  },
  {
    "Symbol": "NSEC",
    "Name": "National Security Group Inc."
  },
  {
    "Symbol": "NSIT",
    "Name": "Insight Enterprises Inc."
  },
  {
    "Symbol": "NSL",
    "Name": "Nuveen Senior Income Fund"
  },
  {
    "Symbol": "NSP",
    "Name": "Insperity Inc."
  },
  {
    "Symbol": "NSPR",
    "Name": "InspireMD Inc."
  },
  {
    "Symbol": "NSR",
    "Name": "Nomad Royalty Company Ltd."
  },
  {
    "Symbol": "NSSC",
    "Name": "NAPCO Security Technologies Inc."
  },
  {
    "Symbol": "NSTD",
    "Name": "Northern Star Investment IV "
  },
  {
    "Symbol": "NSTG",
    "Name": "NanoString Technologies Inc."
  },
  {
    "Symbol": "NSTS",
    "Name": "NSTS Bancorp Inc."
  },
  {
    "Symbol": "NSYS",
    "Name": "Nortech Systems Incorporated"
  },
  {
    "Symbol": "NTAP",
    "Name": "NetApp Inc."
  },
  {
    "Symbol": "NTB",
    "Name": "Bank of N.T. Butterfield & Son Limited (The) Voting"
  },
  {
    "Symbol": "NTCT",
    "Name": "NetScout Systems Inc."
  },
  {
    "Symbol": "NTG",
    "Name": "Tortoise Midstream Energy Fund Inc."
  },
  {
    "Symbol": "NTGR",
    "Name": "NETGEAR Inc."
  },
  {
    "Symbol": "NTIC",
    "Name": "Northern Technologies International Corporation"
  },
  {
    "Symbol": "NTIP",
    "Name": "Network-1 Technologies Inc."
  },
  {
    "Symbol": "NTLA",
    "Name": "Intellia Therapeutics Inc."
  },
  {
    "Symbol": "NTNX",
    "Name": "Nutanix Inc. "
  },
  {
    "Symbol": "NTP",
    "Name": "Nam Tai Property Inc."
  },
  {
    "Symbol": "NTR",
    "Name": "Nutrien Ltd."
  },
  {
    "Symbol": "NTRA",
    "Name": "Natera Inc."
  },
  {
    "Symbol": "NTRB",
    "Name": "Nutriband Inc."
  },
  {
    "Symbol": "NTRS",
    "Name": "Northern Trust Corporation"
  },
  {
    "Symbol": "NTST",
    "Name": "NetSTREIT"
  },
  {
    "Symbol": "NTUS",
    "Name": "Natus Medical Incorporated"
  },
  {
    "Symbol": "NTWK",
    "Name": "NetSol Technologies Inc. Common  Stock"
  },
  {
    "Symbol": "NTZ",
    "Name": "Natuzzi S.p.A."
  },
  {
    "Symbol": "NU",
    "Name": "Nu Holdings Ltd. "
  },
  {
    "Symbol": "NUBIU",
    "Name": "Nubia Brand International Unit"
  },
  {
    "Symbol": "NUE",
    "Name": "Nucor Corporation"
  },
  {
    "Symbol": "NUO",
    "Name": "Nuveen Ohio Quality Municipal Income Fund"
  },
  {
    "Symbol": "NURO",
    "Name": "NeuroMetrix Inc."
  },
  {
    "Symbol": "NUS",
    "Name": "Nu Skin Enterprises Inc."
  },
  {
    "Symbol": "NUTX",
    "Name": "Nutex Health Inc."
  },
  {
    "Symbol": "NUV",
    "Name": "Nuveen Municipal Value Fund Inc."
  },
  {
    "Symbol": "NUVA",
    "Name": "NuVasive Inc."
  },
  {
    "Symbol": "NUVB",
    "Name": "Nuvation Bio Inc. "
  },
  {
    "Symbol": "NUVL",
    "Name": "Nuvalent Inc. "
  },
  {
    "Symbol": "NUW",
    "Name": "Nuveen AMT-Free Municipal Value Fund"
  },
  {
    "Symbol": "NUWE",
    "Name": "Nuwellis Inc."
  },
  {
    "Symbol": "NUZE",
    "Name": "NuZee Inc."
  },
  {
    "Symbol": "NVAC",
    "Name": "NorthView Acquisition Corporation"
  },
  {
    "Symbol": "NVACR",
    "Name": "NorthView Acquisition Corporation Rights"
  },
  {
    "Symbol": "NVAX",
    "Name": "Novavax Inc."
  },
  {
    "Symbol": "NVCN",
    "Name": "Neovasc Inc."
  },
  {
    "Symbol": "NVCR",
    "Name": "NovoCure Limited"
  },
  {
    "Symbol": "NVCT",
    "Name": "Nuvectis Pharma Inc."
  },
  {
    "Symbol": "NVDA",
    "Name": "NVIDIA Corporation"
  },
  {
    "Symbol": "NVEC",
    "Name": "NVE Corporation"
  },
  {
    "Symbol": "NVEE",
    "Name": "NV5 Global Inc."
  },
  {
    "Symbol": "NVEI",
    "Name": "Nuvei Corporation Subordinate Voting Shares"
  },
  {
    "Symbol": "NVFY",
    "Name": "Nova Lifestyle Inc."
  },
  {
    "Symbol": "NVG",
    "Name": "Nuveen AMT-Free Municipal Credit Income Fund"
  },
  {
    "Symbol": "NVGS",
    "Name": "Navigator Holdings Ltd.  (Marshall Islands)"
  },
  {
    "Symbol": "NVIV",
    "Name": "InVivo Therapeutics Holdings Corp"
  },
  {
    "Symbol": "NVMI",
    "Name": "Nova Ltd."
  },
  {
    "Symbol": "NVNO",
    "Name": "enVVeno Medical Corporation"
  },
  {
    "Symbol": "NVO",
    "Name": "Novo Nordisk A/S"
  },
  {
    "Symbol": "NVOS",
    "Name": "Novo Integrated Sciences Inc."
  },
  {
    "Symbol": "NVR",
    "Name": "NVR Inc."
  },
  {
    "Symbol": "NVRO",
    "Name": "Nevro"
  },
  {
    "Symbol": "NVS",
    "Name": "Novartis AG"
  },
  {
    "Symbol": "NVSA",
    "Name": "New Vista Acquisition Corp "
  },
  {
    "Symbol": "NVSAU",
    "Name": "New Vista Acquisition Corp Unit"
  },
  {
    "Symbol": "NVST",
    "Name": "Envista Holdings Corporation"
  },
  {
    "Symbol": "NVT",
    "Name": "nVent Electric plc"
  },
  {
    "Symbol": "NVTA",
    "Name": "Invitae Corporation"
  },
  {
    "Symbol": "NVTS",
    "Name": "Navitas Semiconductor Corporation"
  },
  {
    "Symbol": "NVVE",
    "Name": "Nuvve Holding"
  },
  {
    "Symbol": "NVX",
    "Name": "NOVONIX Limited American Depository Shares"
  },
  {
    "Symbol": "NWBI",
    "Name": "Northwest Bancshares Inc."
  },
  {
    "Symbol": "NWE",
    "Name": "NorthWestern Corporation"
  },
  {
    "Symbol": "NWFL",
    "Name": "Norwood Financial"
  },
  {
    "Symbol": "NWL",
    "Name": "Newell Brands Inc."
  },
  {
    "Symbol": "NWLI",
    "Name": "National Western Life Group Inc. "
  },
  {
    "Symbol": "NWN",
    "Name": "Northwest Natural Holding Company"
  },
  {
    "Symbol": "NWPX",
    "Name": "Northwest Pipe Company"
  },
  {
    "Symbol": "NWS",
    "Name": "News Corporation Class B"
  },
  {
    "Symbol": "NWSA",
    "Name": "News Corporation "
  },
  {
    "Symbol": "NX",
    "Name": "Quanex Building Products Corporation"
  },
  {
    "Symbol": "NXDT",
    "Name": "NexPoint Diversified Real Estate Trust"
  },
  {
    "Symbol": "NXE",
    "Name": "Nexgen Energy Ltd."
  },
  {
    "Symbol": "NXGL",
    "Name": "NexGel Inc"
  },
  {
    "Symbol": "NXGN",
    "Name": "NextGen Healthcare Inc."
  },
  {
    "Symbol": "NXJ",
    "Name": "Nuveen New Jersey Qualified Municipal Fund"
  },
  {
    "Symbol": "NXPI",
    "Name": "NXP Semiconductors N.V."
  },
  {
    "Symbol": "NXPL",
    "Name": "NextPlat Corp"
  },
  {
    "Symbol": "NXRT",
    "Name": "NexPoint Residential Trust Inc."
  },
  {
    "Symbol": "NXST",
    "Name": "Nexstar Media Group Inc. "
  },
  {
    "Symbol": "NXTC",
    "Name": "NextCure Inc."
  },
  {
    "Symbol": "NXTP",
    "Name": "NextPlay Technologies Inc."
  },
  {
    "Symbol": "NYC",
    "Name": "New York City REIT Inc. "
  },
  {
    "Symbol": "NYCB",
    "Name": "New York Community Bancorp Inc."
  },
  {
    "Symbol": "NYMT",
    "Name": "New York Mortgage Trust Inc."
  },
  {
    "Symbol": "NYMX",
    "Name": "Nymox Pharmaceutical Corporation"
  },
  {
    "Symbol": "NYT",
    "Name": "New York Times Company (The)"
  },
  {
    "Symbol": "NYXH",
    "Name": "Nyxoah SA"
  },
  {
    "Symbol": "NZF",
    "Name": "Nuveen Municipal Credit Income Fund"
  },
  {
    "Symbol": "O",
    "Name": "Realty Income Corporation"
  },
  {
    "Symbol": "OAS",
    "Name": "Oasis Petroleum Inc."
  },
  {
    "Symbol": "OB",
    "Name": "Outbrain Inc."
  },
  {
    "Symbol": "OBCI",
    "Name": "Ocean Bio-Chem Inc."
  },
  {
    "Symbol": "OBE",
    "Name": "Obsidian Energy Ltd."
  },
  {
    "Symbol": "OBLG",
    "Name": "Oblong Inc."
  },
  {
    "Symbol": "OBNK",
    "Name": "Origin Bancorp Inc."
  },
  {
    "Symbol": "OBSV",
    "Name": "ObsEva SA"
  },
  {
    "Symbol": "OBT",
    "Name": "Orange County Bancorp Inc."
  },
  {
    "Symbol": "OC",
    "Name": "Owens Corning Inc  New"
  },
  {
    "Symbol": "OCA",
    "Name": "Omnichannel Acquisition "
  },
  {
    "Symbol": "OCAX",
    "Name": "OCA Acquisition "
  },
  {
    "Symbol": "OCC",
    "Name": "Optical Cable Corporation"
  },
  {
    "Symbol": "OCCI",
    "Name": "OFS Credit Company Inc."
  },
  {
    "Symbol": "OCDX",
    "Name": "Ortho Clinical Diagnostics Holdings plc"
  },
  {
    "Symbol": "OCFC",
    "Name": "OceanFirst Financial"
  },
  {
    "Symbol": "OCG",
    "Name": "Oriental Culture Holding LTD"
  },
  {
    "Symbol": "OCGN",
    "Name": "Ocugen Inc."
  },
  {
    "Symbol": "OCN",
    "Name": "Ocwen Financial Corporation NEW"
  },
  {
    "Symbol": "OCSL",
    "Name": "Oaktree Specialty Lending Corporation"
  },
  {
    "Symbol": "OCUL",
    "Name": "Ocular Therapeutix Inc."
  },
  {
    "Symbol": "OCUP",
    "Name": "Ocuphire Pharma Inc."
  },
  {
    "Symbol": "OCX",
    "Name": "Oncocyte Corporation"
  },
  {
    "Symbol": "ODC",
    "Name": "Oil-Dri Corporation Of America"
  },
  {
    "Symbol": "ODFL",
    "Name": "Old Dominion Freight Line Inc."
  },
  {
    "Symbol": "ODP",
    "Name": "The ODP Corporation"
  },
  {
    "Symbol": "OEC",
    "Name": "Orion Engineered Carbons S.A"
  },
  {
    "Symbol": "OEG",
    "Name": "Orbital Energy Group Inc."
  },
  {
    "Symbol": "OEPW",
    "Name": "One Equity Partners Open Water I "
  },
  {
    "Symbol": "OEPWU",
    "Name": "One Equity Partners Open Water I Unit"
  },
  {
    "Symbol": "OESX",
    "Name": "Orion Energy Systems Inc."
  },
  {
    "Symbol": "OFC",
    "Name": "Corporate Office Properties Trust"
  },
  {
    "Symbol": "OFED",
    "Name": "Oconee Federal Financial"
  },
  {
    "Symbol": "OFG",
    "Name": "OFG Bancorp"
  },
  {
    "Symbol": "OFIX",
    "Name": "Orthofix Medical Inc.  (DE)"
  },
  {
    "Symbol": "OFLX",
    "Name": "Omega Flex Inc."
  },
  {
    "Symbol": "OFS",
    "Name": "OFS Capital Corporation"
  },
  {
    "Symbol": "OGE",
    "Name": "OGE Energy Corp"
  },
  {
    "Symbol": "OGEN",
    "Name": "Oragenics Inc."
  },
  {
    "Symbol": "OGI",
    "Name": "Organigram Holdings Inc."
  },
  {
    "Symbol": "OGN",
    "Name": "Organon & Co."
  },
  {
    "Symbol": "OGS",
    "Name": "ONE Gas Inc."
  },
  {
    "Symbol": "OHI",
    "Name": "Omega Healthcare Investors Inc."
  },
  {
    "Symbol": "OHPA",
    "Name": "Orion Acquisition "
  },
  {
    "Symbol": "OHPAU",
    "Name": "Orion Acquisition Unit"
  },
  {
    "Symbol": "OI",
    "Name": "O-I Glass Inc."
  },
  {
    "Symbol": "OIA",
    "Name": "Invesco Municipal Income Opportunities Trust"
  },
  {
    "Symbol": "OIS",
    "Name": "Oil States International Inc."
  },
  {
    "Symbol": "OKE",
    "Name": "ONEOK Inc."
  },
  {
    "Symbol": "OKTA",
    "Name": "Okta Inc. "
  },
  {
    "Symbol": "OLB",
    "Name": "The OLB Group Inc."
  },
  {
    "Symbol": "OLED",
    "Name": "Universal Display Corporation"
  },
  {
    "Symbol": "OLIT",
    "Name": "OmniLit Acquisition "
  },
  {
    "Symbol": "OLITU",
    "Name": "OmniLit Acquisition Units"
  },
  {
    "Symbol": "OLLI",
    "Name": "Ollie's Bargain Outlet Holdings Inc."
  },
  {
    "Symbol": "OLMA",
    "Name": "Olema Pharmaceuticals Inc."
  },
  {
    "Symbol": "OLN",
    "Name": "Olin Corporation"
  },
  {
    "Symbol": "OLO",
    "Name": "Olo Inc. "
  },
  {
    "Symbol": "OLP",
    "Name": "One Liberty Properties Inc."
  },
  {
    "Symbol": "OLPX",
    "Name": "Olaplex Holdings Inc."
  },
  {
    "Symbol": "OM",
    "Name": "Outset Medical Inc."
  },
  {
    "Symbol": "OMAB",
    "Name": "Grupo Aeroportuario del Centro Norte S.A.B. de C.V. ADS"
  },
  {
    "Symbol": "OMC",
    "Name": "Omnicom Group Inc."
  },
  {
    "Symbol": "OMEG",
    "Name": "Omega Alpha SPAC "
  },
  {
    "Symbol": "OMER",
    "Name": "Omeros Corporation"
  },
  {
    "Symbol": "OMEX",
    "Name": "Odyssey Marine Exploration Inc."
  },
  {
    "Symbol": "OMF",
    "Name": "OneMain Holdings Inc."
  },
  {
    "Symbol": "OMGA",
    "Name": "Omega Therapeutics Inc."
  },
  {
    "Symbol": "OMI",
    "Name": "Owens & Minor Inc."
  },
  {
    "Symbol": "OMIC",
    "Name": "Singular Genomics Systems Inc."
  },
  {
    "Symbol": "OMQS",
    "Name": "OMNIQ"
  },
  {
    "Symbol": "ON",
    "Name": "ON Semiconductor Corporation"
  },
  {
    "Symbol": "ONB",
    "Name": "Old National Bancorp"
  },
  {
    "Symbol": "ONCR",
    "Name": "Oncorus Inc."
  },
  {
    "Symbol": "ONCS",
    "Name": "OncoSec Medical Incorporated"
  },
  {
    "Symbol": "ONCT",
    "Name": "Oncternal Therapeutics Inc."
  },
  {
    "Symbol": "ONCY",
    "Name": "Oncolytics Biotech Inc."
  },
  {
    "Symbol": "ONDS",
    "Name": "Ondas Holdings Inc."
  },
  {
    "Symbol": "ONE",
    "Name": "OneSmart International Education Group Limited ADS"
  },
  {
    "Symbol": "ONEM",
    "Name": "1Life Healthcare Inc."
  },
  {
    "Symbol": "ONEW",
    "Name": "OneWater Marine Inc. "
  },
  {
    "Symbol": "ONL",
    "Name": "Orion Office REIT Inc."
  },
  {
    "Symbol": "ONON",
    "Name": "On Holding AG "
  },
  {
    "Symbol": "ONTF",
    "Name": "ON24 Inc."
  },
  {
    "Symbol": "ONTO",
    "Name": "Onto Innovation Inc."
  },
  {
    "Symbol": "ONTX",
    "Name": "Onconova Therapeutics Inc."
  },
  {
    "Symbol": "ONVO",
    "Name": "Organovo Holdings Inc."
  },
  {
    "Symbol": "ONYX",
    "Name": "Onyx Acquisition Co. I "
  },
  {
    "Symbol": "ONYXU",
    "Name": "Onyx Acquisition Co. I Unit"
  },
  {
    "Symbol": "OOMA",
    "Name": "Ooma Inc."
  },
  {
    "Symbol": "OP",
    "Name": "OceanPal Inc."
  },
  {
    "Symbol": "OPA",
    "Name": "Magnum Opus Acquisition Limited "
  },
  {
    "Symbol": "OPAD",
    "Name": "Offerpad Solutions Inc. "
  },
  {
    "Symbol": "OPBK",
    "Name": "OP Bancorp"
  },
  {
    "Symbol": "OPCH",
    "Name": "Option Care Health Inc."
  },
  {
    "Symbol": "OPEN",
    "Name": "Opendoor Technologies Inc"
  },
  {
    "Symbol": "OPFI",
    "Name": "OppFi Inc. "
  },
  {
    "Symbol": "OPGN",
    "Name": "OpGen Inc."
  },
  {
    "Symbol": "OPHC",
    "Name": "OptimumBank Holdings Inc."
  },
  {
    "Symbol": "OPK",
    "Name": "OPKO Health Inc."
  },
  {
    "Symbol": "OPNT",
    "Name": "Opiant Pharmaceuticals Inc."
  },
  {
    "Symbol": "OPOF",
    "Name": "Old Point Financial Corporation"
  },
  {
    "Symbol": "OPP",
    "Name": "RiverNorth/DoubleLine Strategic Opportunity Fund Inc."
  },
  {
    "Symbol": "OPRT",
    "Name": "Oportun Financial Corporation"
  },
  {
    "Symbol": "OPRX",
    "Name": "OptimizeRx Corporation"
  },
  {
    "Symbol": "OPTN",
    "Name": "OptiNose Inc."
  },
  {
    "Symbol": "OPTT",
    "Name": "Ocean Power Technologies Inc."
  },
  {
    "Symbol": "OPY",
    "Name": "Oppenheimer Holdings Inc.   (DE)"
  },
  {
    "Symbol": "OR",
    "Name": "Osisko Gold Royalties Ltd"
  },
  {
    "Symbol": "ORA",
    "Name": "Ormat Technologies Inc."
  },
  {
    "Symbol": "ORAN",
    "Name": "Orange"
  },
  {
    "Symbol": "ORC",
    "Name": "Orchid Island Capital Inc."
  },
  {
    "Symbol": "ORCC",
    "Name": "Owl Rock Capital Corporation"
  },
  {
    "Symbol": "ORCL",
    "Name": "Oracle Corporation"
  },
  {
    "Symbol": "ORGN",
    "Name": "Origin Materials Inc."
  },
  {
    "Symbol": "ORGO",
    "Name": "Organogenesis Holdings Inc. "
  },
  {
    "Symbol": "ORGS",
    "Name": "Orgenesis Inc."
  },
  {
    "Symbol": "ORI",
    "Name": "Old Republic International Corporation"
  },
  {
    "Symbol": "ORIA",
    "Name": "Orion Biotech Opportunities  Ordinary Share"
  },
  {
    "Symbol": "ORIAU",
    "Name": "Orion Biotech Opportunities Units"
  },
  {
    "Symbol": "ORIC",
    "Name": "Oric Pharmaceuticals Inc."
  },
  {
    "Symbol": "ORLA",
    "Name": "Orla Mining Ltd."
  },
  {
    "Symbol": "ORLY",
    "Name": "O'Reilly Automotive Inc."
  },
  {
    "Symbol": "ORMP",
    "Name": "Oramed Pharmaceuticals Inc."
  },
  {
    "Symbol": "ORN",
    "Name": "Orion Group Holdings Inc. Common"
  },
  {
    "Symbol": "ORRF",
    "Name": "Orrstown Financial Services Inc"
  },
  {
    "Symbol": "OSBC",
    "Name": "Old Second Bancorp Inc."
  },
  {
    "Symbol": "OSCR",
    "Name": "Oscar Health Inc. "
  },
  {
    "Symbol": "OSG",
    "Name": "Overseas Shipholding Group Inc. "
  },
  {
    "Symbol": "OSH",
    "Name": "Oak Street Health Inc."
  },
  {
    "Symbol": "OSI",
    "Name": "Osiris Acquisition "
  },
  {
    "Symbol": "OSIS",
    "Name": "OSI Systems Inc.  (DE)"
  },
  {
    "Symbol": "OSK",
    "Name": "Oshkosh Corporation (Holding Company)"
  },
  {
    "Symbol": "OSPN",
    "Name": "OneSpan Inc."
  },
  {
    "Symbol": "OSS",
    "Name": "One Stop Systems Inc."
  },
  {
    "Symbol": "OSTK",
    "Name": "Overstock.com Inc."
  },
  {
    "Symbol": "OSTR",
    "Name": "Oyster Enterprises Acquisition "
  },
  {
    "Symbol": "OSTRU",
    "Name": "Oyster Enterprises Acquisition Unit"
  },
  {
    "Symbol": "OSUR",
    "Name": "OraSure Technologies Inc."
  },
  {
    "Symbol": "OSW",
    "Name": "OneSpaWorld Holdings Limited"
  },
  {
    "Symbol": "OTEC",
    "Name": "OceanTech Acquisitions I "
  },
  {
    "Symbol": "OTEX",
    "Name": "Open Text Corporation"
  },
  {
    "Symbol": "OTIC",
    "Name": "Otonomy Inc."
  },
  {
    "Symbol": "OTIS",
    "Name": "Otis Worldwide Corporation"
  },
  {
    "Symbol": "OTLK",
    "Name": "Outlook Therapeutics Inc."
  },
  {
    "Symbol": "OTMO",
    "Name": "Otonomo Technologies Ltd."
  },
  {
    "Symbol": "OTRA",
    "Name": "OTR Acquisition "
  },
  {
    "Symbol": "OTRAU",
    "Name": "OTR Acquisition Unit"
  },
  {
    "Symbol": "OTRK",
    "Name": "Ontrak Inc."
  },
  {
    "Symbol": "OTTR",
    "Name": "Otter Tail Corporation"
  },
  {
    "Symbol": "OUST",
    "Name": "Ouster Inc."
  },
  {
    "Symbol": "OUT",
    "Name": "OUTFRONT Media Inc."
  },
  {
    "Symbol": "OVBC",
    "Name": "Ohio Valley Banc"
  },
  {
    "Symbol": "OVID",
    "Name": "Ovid Therapeutics Inc."
  },
  {
    "Symbol": "OVLY",
    "Name": "Oak Valley Bancorp (CA)"
  },
  {
    "Symbol": "OVV",
    "Name": "Ovintiv Inc. (DE)"
  },
  {
    "Symbol": "OWL",
    "Name": "Blue Owl Capital Inc. "
  },
  {
    "Symbol": "OWLT",
    "Name": "Owlet Inc. "
  },
  {
    "Symbol": "OXAC",
    "Name": "Oxbridge Acquisition "
  },
  {
    "Symbol": "OXBR",
    "Name": "Oxbridge Re Holdings Limited"
  },
  {
    "Symbol": "OXLC",
    "Name": "Oxford Lane Capital"
  },
  {
    "Symbol": "OXM",
    "Name": "Oxford Industries Inc."
  },
  {
    "Symbol": "OXSQ",
    "Name": "Oxford Square Capital"
  },
  {
    "Symbol": "OXUS",
    "Name": "Oxus Acquisition "
  },
  {
    "Symbol": "OXUSU",
    "Name": "Oxus Acquisition Unit"
  },
  {
    "Symbol": "OXY",
    "Name": "Occidental Petroleum Corporation"
  },
  {
    "Symbol": "OYST",
    "Name": "Oyster Point Pharma Inc."
  },
  {
    "Symbol": "OZ",
    "Name": "Belpointe PREP LLC  Units"
  },
  {
    "Symbol": "OZK",
    "Name": "Bank OZK"
  },
  {
    "Symbol": "PAA",
    "Name": "Plains All American Pipeline L.P. Common Units representing Limited Partner Interests"
  },
  {
    "Symbol": "PAAS",
    "Name": "Pan American Silver"
  },
  {
    "Symbol": "PACB",
    "Name": "Pacific Biosciences of California Inc."
  },
  {
    "Symbol": "PACI",
    "Name": "PROOF Acquisition Corp I "
  },
  {
    "Symbol": "PACK",
    "Name": "Ranpak Holdings Corp "
  },
  {
    "Symbol": "PACW",
    "Name": "PacWest Bancorp"
  },
  {
    "Symbol": "PACX",
    "Name": "Pioneer Merger  Ordinary Share"
  },
  {
    "Symbol": "PACXU",
    "Name": "Pioneer Merger Unit"
  },
  {
    "Symbol": "PAFOR",
    "Name": "Pacifico Acquisition Rights"
  },
  {
    "Symbol": "PAFOU",
    "Name": "Pacifico Acquisition Units"
  },
  {
    "Symbol": "PAG",
    "Name": "Penske Automotive Group Inc."
  },
  {
    "Symbol": "PAGP",
    "Name": "Plains GP Holdings L.P.  Units representing Limited Partner Interests"
  },
  {
    "Symbol": "PAGS",
    "Name": "PagSeguro Digital Ltd. "
  },
  {
    "Symbol": "PAHC",
    "Name": "Phibro Animal Health Corporation "
  },
  {
    "Symbol": "PAI",
    "Name": "Western Asset Investment Grade Income Fund Inc."
  },
  {
    "Symbol": "PALI",
    "Name": "Palisade Bio Inc."
  },
  {
    "Symbol": "PALT",
    "Name": "Paltalk Inc."
  },
  {
    "Symbol": "PAM",
    "Name": "Pampa Energia S.A. Pampa Energia S.A."
  },
  {
    "Symbol": "PANL",
    "Name": "Pangaea Logistics Solutions Ltd."
  },
  {
    "Symbol": "PANW",
    "Name": "Palo Alto Networks Inc."
  },
  {
    "Symbol": "PAQC",
    "Name": "Provident Acquisition "
  },
  {
    "Symbol": "PAQCU",
    "Name": "Provident Acquisition Units"
  },
  {
    "Symbol": "PAR",
    "Name": "PAR Technology Corporation"
  },
  {
    "Symbol": "PARA",
    "Name": "Paramount Global Class B"
  },
  {
    "Symbol": "PARAA",
    "Name": "Paramount Global "
  },
  {
    "Symbol": "PARR",
    "Name": "Par Pacific Holdings Inc."
  },
  {
    "Symbol": "PASG",
    "Name": "Passage Bio Inc."
  },
  {
    "Symbol": "PATH",
    "Name": "UiPath Inc. "
  },
  {
    "Symbol": "PATI",
    "Name": "Patriot Transportation Holding Inc."
  },
  {
    "Symbol": "PATK",
    "Name": "Patrick Industries Inc."
  },
  {
    "Symbol": "PAVM",
    "Name": "PAVmed Inc."
  },
  {
    "Symbol": "PAX",
    "Name": "Patria Investments Limited "
  },
  {
    "Symbol": "PAY",
    "Name": "Paymentus Holdings Inc. "
  },
  {
    "Symbol": "PAYA",
    "Name": "Paya Holdings Inc. "
  },
  {
    "Symbol": "PAYC",
    "Name": "Paycom Software Inc."
  },
  {
    "Symbol": "PAYO",
    "Name": "Payoneer Global Inc."
  },
  {
    "Symbol": "PAYS",
    "Name": "Paysign Inc."
  },
  {
    "Symbol": "PAYX",
    "Name": "Paychex Inc."
  },
  {
    "Symbol": "PB",
    "Name": "Prosperity Bancshares Inc."
  },
  {
    "Symbol": "PBA",
    "Name": "Pembina Pipeline  (Canada)"
  },
  {
    "Symbol": "PBAX",
    "Name": "Phoenix Biotech Acquisition "
  },
  {
    "Symbol": "PBAXU",
    "Name": "Phoenix Biotech Acquisition Unit"
  },
  {
    "Symbol": "PBBK",
    "Name": "PB Bankshares Inc."
  },
  {
    "Symbol": "PBF",
    "Name": "PBF Energy Inc. "
  },
  {
    "Symbol": "PBFS",
    "Name": "Pioneer Bancorp Inc."
  },
  {
    "Symbol": "PBFX",
    "Name": "PBF Logistics LP Common Units representing limited partner interests"
  },
  {
    "Symbol": "PBH",
    "Name": "Prestige Consumer Healthcare Inc."
  },
  {
    "Symbol": "PBHC",
    "Name": "Pathfinder Bancorp Inc.  (MD)"
  },
  {
    "Symbol": "PBI",
    "Name": "Pitney Bowes Inc."
  },
  {
    "Symbol": "PBIP",
    "Name": "Prudential Bancorp Inc."
  },
  {
    "Symbol": "PBLA",
    "Name": "Panbela Therapeutics Inc."
  },
  {
    "Symbol": "PBPB",
    "Name": "Potbelly Corporation"
  },
  {
    "Symbol": "PBR",
    "Name": "Petroleo Brasileiro S.A.- Petrobras"
  },
  {
    "Symbol": "PBT",
    "Name": "Permian Basin Royalty Trust"
  },
  {
    "Symbol": "PBTS",
    "Name": "Powerbridge Technologies Co. Ltd."
  },
  {
    "Symbol": "PBYI",
    "Name": "Puma Biotechnology Inc"
  },
  {
    "Symbol": "PCAR",
    "Name": "PACCAR Inc."
  },
  {
    "Symbol": "PCB",
    "Name": "PCB Bancorp"
  },
  {
    "Symbol": "PCF",
    "Name": "High Income Securities Fund"
  },
  {
    "Symbol": "PCG",
    "Name": "Pacific Gas & Electric Co."
  },
  {
    "Symbol": "PCGU",
    "Name": "Pacific Gas & Electric Co. Equity Unit"
  },
  {
    "Symbol": "PCH",
    "Name": "PotlatchDeltic Corporation"
  },
  {
    "Symbol": "PCM",
    "Name": "PCM Fund Inc."
  },
  {
    "Symbol": "PCN",
    "Name": "Pimco Corporate & Income Strategy Fund"
  },
  {
    "Symbol": "PCOM",
    "Name": "Points.com Inc."
  },
  {
    "Symbol": "PCOR",
    "Name": "Procore Technologies Inc."
  },
  {
    "Symbol": "PCPC",
    "Name": "Periphas Capital Partnering Corporation "
  },
  {
    "Symbol": "PCQ",
    "Name": "PIMCO California Municipal Income Fund"
  },
  {
    "Symbol": "PCRX",
    "Name": "Pacira BioSciences Inc."
  },
  {
    "Symbol": "PCSA",
    "Name": "Processa Pharmaceuticals Inc."
  },
  {
    "Symbol": "PCSB",
    "Name": "PCSB Financial Corporation"
  },
  {
    "Symbol": "PCT",
    "Name": "PureCycle Technologies Inc."
  },
  {
    "Symbol": "PCTI",
    "Name": "PCTEL Inc."
  },
  {
    "Symbol": "PCTTU",
    "Name": "PureCycle Technologies Inc. Unit"
  },
  {
    "Symbol": "PCTY",
    "Name": "Paylocity Holding Corporation"
  },
  {
    "Symbol": "PCVX",
    "Name": "Vaxcyte Inc."
  },
  {
    "Symbol": "PCXCU",
    "Name": "Parsec Capital Acquisitions Corp Unit"
  },
  {
    "Symbol": "PCYG",
    "Name": "Park City Group Inc."
  },
  {
    "Symbol": "PCYO",
    "Name": "Pure Cycle Corporation"
  },
  {
    "Symbol": "PD",
    "Name": "PagerDuty Inc."
  },
  {
    "Symbol": "PDCE",
    "Name": "PDC Energy Inc.  (Delaware)"
  },
  {
    "Symbol": "PDCO",
    "Name": "Patterson Companies Inc."
  },
  {
    "Symbol": "PDEX",
    "Name": "Pro-Dex Inc."
  },
  {
    "Symbol": "PDFS",
    "Name": "PDF Solutions Inc."
  },
  {
    "Symbol": "PDI",
    "Name": "PIMCO Dynamic Income Fund"
  },
  {
    "Symbol": "PDLB",
    "Name": "Ponce Financial Group Inc."
  },
  {
    "Symbol": "PDM",
    "Name": "Piedmont Office Realty Trust Inc. "
  },
  {
    "Symbol": "PDS",
    "Name": "Precision Drilling Corporation"
  },
  {
    "Symbol": "PDSB",
    "Name": "PDS Biotechnology Corporation"
  },
  {
    "Symbol": "PDT",
    "Name": "John Hancock Premium Dividend Fund"
  },
  {
    "Symbol": "PEAK",
    "Name": "Healthpeak Properties Inc."
  },
  {
    "Symbol": "PEAR",
    "Name": "Pear Therapeutics Inc. "
  },
  {
    "Symbol": "PEBK",
    "Name": "Peoples Bancorp of North Carolina Inc."
  },
  {
    "Symbol": "PEBO",
    "Name": "Peoples Bancorp Inc."
  },
  {
    "Symbol": "PECO",
    "Name": "Phillips Edison & Company Inc."
  },
  {
    "Symbol": "PED",
    "Name": "Pedevco"
  },
  {
    "Symbol": "PEG",
    "Name": "Public Service Enterprise Group Incorporated"
  },
  {
    "Symbol": "PEGA",
    "Name": "Pegasystems Inc."
  },
  {
    "Symbol": "PEGR",
    "Name": "Project Energy Reimagined Acquisition  Ordinary Share"
  },
  {
    "Symbol": "PEGRU",
    "Name": "Project Energy Reimagined Acquisition Unit"
  },
  {
    "Symbol": "PEGY",
    "Name": "Pineapple Energy Inc."
  },
  {
    "Symbol": "PEI",
    "Name": "Pennsylvania Real Estate Investment Trust"
  },
  {
    "Symbol": "PEN",
    "Name": "Penumbra Inc."
  },
  {
    "Symbol": "PENN",
    "Name": "Penn National Gaming Inc."
  },
  {
    "Symbol": "PEO",
    "Name": "Adams Natural Resources Fund Inc."
  },
  {
    "Symbol": "PEP",
    "Name": "PepsiCo Inc."
  },
  {
    "Symbol": "PEPL",
    "Name": "PepperLime Health Acquisition Corporation  Ordinary Share"
  },
  {
    "Symbol": "PEPLU",
    "Name": "PepperLime Health Acquisition Corporation Unit"
  },
  {
    "Symbol": "PEPLW",
    "Name": "PepperLime Health Acquisition Corporation Warrrant"
  },
  {
    "Symbol": "PERI",
    "Name": "Perion Network Ltd."
  },
  {
    "Symbol": "PESI",
    "Name": "Perma-Fix Environmental Services Inc."
  },
  {
    "Symbol": "PETQ",
    "Name": "PetIQ Inc. "
  },
  {
    "Symbol": "PETS",
    "Name": "PetMed Express Inc."
  },
  {
    "Symbol": "PETV",
    "Name": "PetVivo Holdings Inc."
  },
  {
    "Symbol": "PETZ",
    "Name": "TDH Holdings Inc."
  },
  {
    "Symbol": "PFBC",
    "Name": "Preferred Bank"
  },
  {
    "Symbol": "PFC",
    "Name": "Premier Financial"
  },
  {
    "Symbol": "PFD",
    "Name": "Flaherty & Crumrine Preferred and Income Fund Incorporated"
  },
  {
    "Symbol": "PFDR",
    "Name": "Pathfinder Acquisition Corporation "
  },
  {
    "Symbol": "PFDRU",
    "Name": "Pathfinder Acquisition Corporation Unit"
  },
  {
    "Symbol": "PFE",
    "Name": "Pfizer Inc."
  },
  {
    "Symbol": "PFG",
    "Name": "Principal Financial Group Inc"
  },
  {
    "Symbol": "PFGC",
    "Name": "Performance Food Group Company"
  },
  {
    "Symbol": "PFHD",
    "Name": "Professional Holding "
  },
  {
    "Symbol": "PFIE",
    "Name": "Profire Energy Inc."
  },
  {
    "Symbol": "PFIN",
    "Name": "P & F Industries Inc. "
  },
  {
    "Symbol": "PFIS",
    "Name": "Peoples Financial Services"
  },
  {
    "Symbol": "PFLT",
    "Name": "PennantPark Floating Rate Capital Ltd."
  },
  {
    "Symbol": "PFMT",
    "Name": "Performant Financial Corporation"
  },
  {
    "Symbol": "PFO",
    "Name": "Flaherty & Crumrine Preferred and Income Opportunity Fund Incorporated"
  },
  {
    "Symbol": "PFS",
    "Name": "Provident Financial Services Inc"
  },
  {
    "Symbol": "PFSI",
    "Name": "PennyMac Financial Services Inc."
  },
  {
    "Symbol": "PFSW",
    "Name": "PFSweb Inc."
  },
  {
    "Symbol": "PFTA",
    "Name": "Portage Fintech Acquisition Corporation  Ordinary Share"
  },
  {
    "Symbol": "PFTAU",
    "Name": "Portage Fintech Acquisition Corporation Unit"
  },
  {
    "Symbol": "PFX",
    "Name": "PhenixFIN Corporation"
  },
  {
    "Symbol": "PG",
    "Name": "Procter & Gamble Company (The)"
  },
  {
    "Symbol": "PGC",
    "Name": "Peapack-Gladstone Financial Corporation"
  },
  {
    "Symbol": "PGEN",
    "Name": "Precigen Inc."
  },
  {
    "Symbol": "PGNY",
    "Name": "Progyny Inc."
  },
  {
    "Symbol": "PGR",
    "Name": "Progressive Corporation (The)"
  },
  {
    "Symbol": "PGRE",
    "Name": "Paramount Group Inc."
  },
  {
    "Symbol": "PGRU",
    "Name": "PropertyGuru Group Limited"
  },
  {
    "Symbol": "PGRW",
    "Name": "Progress Acquisition "
  },
  {
    "Symbol": "PGRWU",
    "Name": "Progress Acquisition Units"
  },
  {
    "Symbol": "PGSS",
    "Name": "Pegasus Digital Mobility Acquisition "
  },
  {
    "Symbol": "PGTI",
    "Name": "PGT Innovations Inc."
  },
  {
    "Symbol": "PH",
    "Name": "Parker-Hannifin Corporation"
  },
  {
    "Symbol": "PHAS",
    "Name": "PhaseBio Pharmaceuticals Inc."
  },
  {
    "Symbol": "PHAT",
    "Name": "Phathom Pharmaceuticals Inc."
  },
  {
    "Symbol": "PHCF",
    "Name": "Puhui Wealth Investment Management Co. Ltd."
  },
  {
    "Symbol": "PHD",
    "Name": "Pioneer Floating Rate Fund Inc."
  },
  {
    "Symbol": "PHG",
    "Name": "Koninklijke Philips N.V. NY Registry Shares"
  },
  {
    "Symbol": "PHGE",
    "Name": "BiomX Inc."
  },
  {
    "Symbol": "PHI",
    "Name": "PLDT Inc. Sponsored ADR"
  },
  {
    "Symbol": "PHIC",
    "Name": "Population Health Investment Co."
  },
  {
    "Symbol": "PHIO",
    "Name": "Phio Pharmaceuticals"
  },
  {
    "Symbol": "PHK",
    "Name": "Pimco High Income Fund Pimco High Income Fund"
  },
  {
    "Symbol": "PHM",
    "Name": "PulteGroup Inc."
  },
  {
    "Symbol": "PHR",
    "Name": "Phreesia Inc."
  },
  {
    "Symbol": "PHT",
    "Name": "Pioneer High Income Fund Inc."
  },
  {
    "Symbol": "PHUN",
    "Name": "Phunware Inc."
  },
  {
    "Symbol": "PHVS",
    "Name": "Pharvaris N.V."
  },
  {
    "Symbol": "PHX",
    "Name": "PHX Minerals Inc."
  },
  {
    "Symbol": "PHYT",
    "Name": "Pyrophyte Acquisition "
  },
  {
    "Symbol": "PI",
    "Name": "Impinj Inc."
  },
  {
    "Symbol": "PIAI",
    "Name": "Prime Impact Acquisition I "
  },
  {
    "Symbol": "PIK",
    "Name": "Kidpik"
  },
  {
    "Symbol": "PIM",
    "Name": "Putnam Master Intermediate Income Trust"
  },
  {
    "Symbol": "PINC",
    "Name": "Premier Inc. "
  },
  {
    "Symbol": "PINE",
    "Name": "Alpine Income Property Trust Inc."
  },
  {
    "Symbol": "PING",
    "Name": "Ping Identity Holding"
  },
  {
    "Symbol": "PINS",
    "Name": "Pinterest Inc. "
  },
  {
    "Symbol": "PIPP",
    "Name": "Pine Island Acquisition "
  },
  {
    "Symbol": "PIPR",
    "Name": "Piper Sandler Companies"
  },
  {
    "Symbol": "PIRS",
    "Name": "Pieris Pharmaceuticals Inc."
  },
  {
    "Symbol": "PIXY",
    "Name": "ShiftPixy Inc."
  },
  {
    "Symbol": "PJT",
    "Name": "PJT Partners Inc. "
  },
  {
    "Symbol": "PK",
    "Name": "Park Hotels & Resorts Inc."
  },
  {
    "Symbol": "PKBK",
    "Name": "Parke Bancorp Inc."
  },
  {
    "Symbol": "PKE",
    "Name": "Park Aerospace"
  },
  {
    "Symbol": "PKG",
    "Name": "Packaging Corporation of America"
  },
  {
    "Symbol": "PKI",
    "Name": "PerkinElmer Inc."
  },
  {
    "Symbol": "PKOH",
    "Name": "Park-Ohio Holdings"
  },
  {
    "Symbol": "PL",
    "Name": "Planet Labs PBC "
  },
  {
    "Symbol": "PLAB",
    "Name": "Photronics Inc."
  },
  {
    "Symbol": "PLAG",
    "Name": "Planet Green Holdings"
  },
  {
    "Symbol": "PLAN",
    "Name": "Anaplan Inc."
  },
  {
    "Symbol": "PLAOU",
    "Name": "Patria Latin American Opportunity Acquisition Unit"
  },
  {
    "Symbol": "PLAY",
    "Name": "Dave & Buster's Entertainment Inc."
  },
  {
    "Symbol": "PLBC",
    "Name": "Plumas Bancorp"
  },
  {
    "Symbol": "PLBY",
    "Name": "PLBY Group Inc."
  },
  {
    "Symbol": "PLCE",
    "Name": "Children's Place Inc. (The)"
  },
  {
    "Symbol": "PLD",
    "Name": "Prologis Inc."
  },
  {
    "Symbol": "PLG",
    "Name": "Platinum Group Metals Ltd.  (Canada)"
  },
  {
    "Symbol": "PLL",
    "Name": "Piedmont Lithium Inc."
  },
  {
    "Symbol": "PLM",
    "Name": "Polymet Mining Corporation  (Canada)"
  },
  {
    "Symbol": "PLMI",
    "Name": "Plum Acquisition I  Ordinary Share"
  },
  {
    "Symbol": "PLMIU",
    "Name": "Plum Acquisition I Units"
  },
  {
    "Symbol": "PLMR",
    "Name": "Palomar Holdings Inc."
  },
  {
    "Symbol": "PLNT",
    "Name": "Planet Fitness Inc."
  },
  {
    "Symbol": "PLOW",
    "Name": "Douglas Dynamics Inc."
  },
  {
    "Symbol": "PLPC",
    "Name": "Preformed Line Products Company"
  },
  {
    "Symbol": "PLRX",
    "Name": "Pliant Therapeutics Inc."
  },
  {
    "Symbol": "PLSE",
    "Name": "Pulse Biosciences Inc  (DE)"
  },
  {
    "Symbol": "PLTK",
    "Name": "Playtika Holding"
  },
  {
    "Symbol": "PLTR",
    "Name": "Palantir Technologies Inc. "
  },
  {
    "Symbol": "PLUG",
    "Name": "Plug Power Inc."
  },
  {
    "Symbol": "PLUS",
    "Name": "ePlus inc."
  },
  {
    "Symbol": "PLX",
    "Name": "Protalix BioTherapeutics Inc. (DE)"
  },
  {
    "Symbol": "PLXP",
    "Name": "PLx Pharma Inc."
  },
  {
    "Symbol": "PLXS",
    "Name": "Plexus"
  },
  {
    "Symbol": "PLYA",
    "Name": "Playa Hotels & Resorts N.V."
  },
  {
    "Symbol": "PLYM",
    "Name": "Plymouth Industrial REIT Inc."
  },
  {
    "Symbol": "PM",
    "Name": "Philip Morris International Inc"
  },
  {
    "Symbol": "PMCB",
    "Name": "PharmaCyte  Biotech Inc."
  },
  {
    "Symbol": "PMD",
    "Name": "Psychemedics Corporation"
  },
  {
    "Symbol": "PME",
    "Name": "Pingtan Marine Enterprise Ltd."
  },
  {
    "Symbol": "PMF",
    "Name": "PIMCO Municipal Income Fund"
  },
  {
    "Symbol": "PMGM",
    "Name": "Priveterra Acquisition "
  },
  {
    "Symbol": "PMGMU",
    "Name": "Priveterra Acquisition Units"
  },
  {
    "Symbol": "PMM",
    "Name": "Putnam Managed Municipal Income Trust"
  },
  {
    "Symbol": "PMO",
    "Name": "Putnam Municipal Opportunities Trust"
  },
  {
    "Symbol": "PMTS",
    "Name": "CPI Card Group Inc."
  },
  {
    "Symbol": "PMVC",
    "Name": "PMV Consumer Acquisition "
  },
  {
    "Symbol": "PMVP",
    "Name": "PMV Pharmaceuticals Inc."
  },
  {
    "Symbol": "PNBK",
    "Name": "Patriot National Bancorp Inc."
  },
  {
    "Symbol": "PNC",
    "Name": "PNC Financial Services Group Inc. (The)"
  },
  {
    "Symbol": "PNF",
    "Name": "PIMCO New York Municipal Income Fund"
  },
  {
    "Symbol": "PNFP",
    "Name": "Pinnacle Financial Partners Inc."
  },
  {
    "Symbol": "PNM",
    "Name": "PNM Resources Inc. (Holding Co.)"
  },
  {
    "Symbol": "PNNT",
    "Name": "PennantPark Investment Corporation"
  },
  {
    "Symbol": "PNR",
    "Name": "Pentair plc. Ordinary Share"
  },
  {
    "Symbol": "PNRG",
    "Name": "PrimeEnergy Resources Corporation"
  },
  {
    "Symbol": "PNT",
    "Name": "POINT Biopharma Global Inc."
  },
  {
    "Symbol": "PNTG",
    "Name": "The Pennant Group Inc."
  },
  {
    "Symbol": "PNTM",
    "Name": "Pontem Corporation "
  },
  {
    "Symbol": "PNW",
    "Name": "Pinnacle West Capital Corporation"
  },
  {
    "Symbol": "POAI",
    "Name": "Predictive Oncology Inc."
  },
  {
    "Symbol": "PODD",
    "Name": "Insulet Corporation"
  },
  {
    "Symbol": "POET",
    "Name": "POET Technologies Inc."
  },
  {
    "Symbol": "POLA",
    "Name": "Polar Power Inc."
  },
  {
    "Symbol": "POLY",
    "Name": "Plantronics Inc."
  },
  {
    "Symbol": "POND",
    "Name": "Angel Pond Holdings Corporation "
  },
  {
    "Symbol": "PONO",
    "Name": "Pono Capital Corp "
  },
  {
    "Symbol": "POOL",
    "Name": "Pool Corporation"
  },
  {
    "Symbol": "POR",
    "Name": "Portland General Electric Co"
  },
  {
    "Symbol": "PORT",
    "Name": "Southport Acquisition Corporation "
  },
  {
    "Symbol": "POSH",
    "Name": "Poshmark Inc. "
  },
  {
    "Symbol": "POST",
    "Name": "Post Holdings Inc."
  },
  {
    "Symbol": "POW",
    "Name": "Powered Brands "
  },
  {
    "Symbol": "POWI",
    "Name": "Power Integrations Inc."
  },
  {
    "Symbol": "POWL",
    "Name": "Powell Industries Inc."
  },
  {
    "Symbol": "POWRU",
    "Name": "Powered Brands Units"
  },
  {
    "Symbol": "POWW",
    "Name": "AMMO Inc."
  },
  {
    "Symbol": "PPBI",
    "Name": "Pacific Premier Bancorp Inc"
  },
  {
    "Symbol": "PPC",
    "Name": "Pilgrim's Pride Corporation"
  },
  {
    "Symbol": "PPG",
    "Name": "PPG Industries Inc."
  },
  {
    "Symbol": "PPHP",
    "Name": "PHP Ventures Acquisition "
  },
  {
    "Symbol": "PPHPR",
    "Name": "PHP Ventures Acquisition Rights"
  },
  {
    "Symbol": "PPIH",
    "Name": "Perma-Pipe International Holdings Inc."
  },
  {
    "Symbol": "PPL",
    "Name": "PPL Corporation"
  },
  {
    "Symbol": "PPSI",
    "Name": "Pioneer Power Solutions Inc."
  },
  {
    "Symbol": "PPT",
    "Name": "Putnam Premier Income Trust"
  },
  {
    "Symbol": "PPTA",
    "Name": "Perpetua Resources"
  },
  {
    "Symbol": "PPYA",
    "Name": "Papaya Growth Opportunity I "
  },
  {
    "Symbol": "PPYAU",
    "Name": "Papaya Growth Opportunity I Unit"
  },
  {
    "Symbol": "PRA",
    "Name": "ProAssurance Corporation"
  },
  {
    "Symbol": "PRAA",
    "Name": "PRA Group Inc."
  },
  {
    "Symbol": "PRAX",
    "Name": "Praxis Precision Medicines Inc."
  },
  {
    "Symbol": "PRBM",
    "Name": "Parabellum Acquisition "
  },
  {
    "Symbol": "PRCH",
    "Name": "Porch Group Inc."
  },
  {
    "Symbol": "PRCT",
    "Name": "PROCEPT BioRobotics Corporation"
  },
  {
    "Symbol": "PRDO",
    "Name": "Perdoceo Education Corporation"
  },
  {
    "Symbol": "PRDS",
    "Name": "Pardes Biosciences Inc."
  },
  {
    "Symbol": "PRFT",
    "Name": "Perficient Inc."
  },
  {
    "Symbol": "PRFX",
    "Name": "PainReform Ltd."
  },
  {
    "Symbol": "PRG",
    "Name": "PROG Holdings Inc."
  },
  {
    "Symbol": "PRGO",
    "Name": "Perrigo Company plc"
  },
  {
    "Symbol": "PRGS",
    "Name": "Progress Software Corporation  (DE)"
  },
  {
    "Symbol": "PRI",
    "Name": "Primerica Inc."
  },
  {
    "Symbol": "PRIM",
    "Name": "Primoris Services Corporation"
  },
  {
    "Symbol": "PRK",
    "Name": "Park National Corporation"
  },
  {
    "Symbol": "PRLB",
    "Name": "Proto Labs Inc."
  },
  {
    "Symbol": "PRLD",
    "Name": "Prelude Therapeutics Incorporated"
  },
  {
    "Symbol": "PRLH",
    "Name": "Pearl Holdings Acquisition Corp "
  },
  {
    "Symbol": "PRLHU",
    "Name": "Pearl Holdings Acquisition Corp Unit"
  },
  {
    "Symbol": "PRM",
    "Name": "Perimeter Solutions SA"
  },
  {
    "Symbol": "PRMW",
    "Name": "Primo Water Corporation"
  },
  {
    "Symbol": "PRO",
    "Name": "PROS Holdings Inc."
  },
  {
    "Symbol": "PROC",
    "Name": "Procaps Group S.A."
  },
  {
    "Symbol": "PROF",
    "Name": "Profound Medical"
  },
  {
    "Symbol": "PROG",
    "Name": "Progenity Inc."
  },
  {
    "Symbol": "PROV",
    "Name": "Provident Financial Holdings Inc."
  },
  {
    "Symbol": "PRPH",
    "Name": "ProPhase Labs Inc.  (DE)"
  },
  {
    "Symbol": "PRPL",
    "Name": "Purple Innovation Inc."
  },
  {
    "Symbol": "PRPO",
    "Name": "Precipio Inc."
  },
  {
    "Symbol": "PRQR",
    "Name": "ProQR Therapeutics N.V."
  },
  {
    "Symbol": "PRSO",
    "Name": "Peraso Inc."
  },
  {
    "Symbol": "PRSR",
    "Name": "Prospector Capital "
  },
  {
    "Symbol": "PRSRU",
    "Name": "Prospector Capital Unit"
  },
  {
    "Symbol": "PRT",
    "Name": "PermRock Royalty Trust Trust Units"
  },
  {
    "Symbol": "PRTA",
    "Name": "Prothena Corporation plc"
  },
  {
    "Symbol": "PRTG",
    "Name": "Portage Biotech Inc."
  },
  {
    "Symbol": "PRTH",
    "Name": "Priority Technology Holdings Inc."
  },
  {
    "Symbol": "PRTK",
    "Name": "Paratek Pharmaceuticals Inc."
  },
  {
    "Symbol": "PRTS",
    "Name": "CarParts.com Inc."
  },
  {
    "Symbol": "PRTY",
    "Name": "Party City Holdco Inc."
  },
  {
    "Symbol": "PRU",
    "Name": "Prudential Financial Inc."
  },
  {
    "Symbol": "PRVA",
    "Name": "Privia Health Group Inc."
  },
  {
    "Symbol": "PRVB",
    "Name": "Provention Bio Inc."
  },
  {
    "Symbol": "PSA",
    "Name": "Public Storage"
  },
  {
    "Symbol": "PSB",
    "Name": "PS Business Parks Inc. (MD)"
  },
  {
    "Symbol": "PSEC",
    "Name": "Prospect Capital Corporation"
  },
  {
    "Symbol": "PSF",
    "Name": "Cohen & Steers Select Preferred and Income Fund Inc."
  },
  {
    "Symbol": "PSFE",
    "Name": "Paysafe Limited"
  },
  {
    "Symbol": "PSHG",
    "Name": "Performance Shipping Inc."
  },
  {
    "Symbol": "PSMT",
    "Name": "PriceSmart Inc."
  },
  {
    "Symbol": "PSN",
    "Name": "Parsons Corporation"
  },
  {
    "Symbol": "PSNL",
    "Name": "Personalis Inc."
  },
  {
    "Symbol": "PSO",
    "Name": "Pearson Plc"
  },
  {
    "Symbol": "PSPC",
    "Name": "Post Holdings Partnering Corporation Series A"
  },
  {
    "Symbol": "PSTG",
    "Name": "Pure Storage Inc. "
  },
  {
    "Symbol": "PSTH",
    "Name": "Pershing Square Tontine Holdings Ltd. "
  },
  {
    "Symbol": "PSTI",
    "Name": "Pluristem Therapeutics Inc."
  },
  {
    "Symbol": "PSTL",
    "Name": "Postal Realty Trust Inc. "
  },
  {
    "Symbol": "PSTV",
    "Name": "PLUS THERAPEUTICS Inc."
  },
  {
    "Symbol": "PSTX",
    "Name": "Poseida Therapeutics Inc."
  },
  {
    "Symbol": "PSX",
    "Name": "Phillips 66"
  },
  {
    "Symbol": "PTC",
    "Name": "PTC Inc."
  },
  {
    "Symbol": "PTCT",
    "Name": "PTC Therapeutics Inc."
  },
  {
    "Symbol": "PTE",
    "Name": "PolarityTE Inc."
  },
  {
    "Symbol": "PTEN",
    "Name": "Patterson-UTI Energy Inc."
  },
  {
    "Symbol": "PTGX",
    "Name": "Protagonist Therapeutics Inc."
  },
  {
    "Symbol": "PTIX",
    "Name": "Protagenic Therapeutics Inc."
  },
  {
    "Symbol": "PTLO",
    "Name": "Portillo's Inc. "
  },
  {
    "Symbol": "PTMN",
    "Name": "Portman Ridge Finance Corporation"
  },
  {
    "Symbol": "PTN",
    "Name": "Palatin Technologies Inc."
  },
  {
    "Symbol": "PTOC",
    "Name": "Pine Technology Acquisition "
  },
  {
    "Symbol": "PTOCU",
    "Name": "Pine Technology Acquisition Unit"
  },
  {
    "Symbol": "PTON",
    "Name": "Peloton Interactive Inc. "
  },
  {
    "Symbol": "PTPI",
    "Name": "Petros Pharmaceuticals Inc."
  },
  {
    "Symbol": "PTR",
    "Name": "PetroChina Company Limited"
  },
  {
    "Symbol": "PTRA",
    "Name": "Proterra Inc."
  },
  {
    "Symbol": "PTRS",
    "Name": "Partners Bancorp"
  },
  {
    "Symbol": "PTSI",
    "Name": "P.A.M. Transportation Services Inc."
  },
  {
    "Symbol": "PTVE",
    "Name": "Pactiv Evergreen Inc."
  },
  {
    "Symbol": "PTY",
    "Name": "Pimco Corporate & Income Opportunity Fund"
  },
  {
    "Symbol": "PUBM",
    "Name": "PubMatic Inc. "
  },
  {
    "Symbol": "PUCK",
    "Name": "Goal Acquisitions"
  },
  {
    "Symbol": "PUK",
    "Name": "Prudential Public Limited Company"
  },
  {
    "Symbol": "PULM",
    "Name": "Pulmatrix Inc."
  },
  {
    "Symbol": "PUMP",
    "Name": "ProPetro Holding"
  },
  {
    "Symbol": "PUYI",
    "Name": "Puyi Inc. American Depository Shares"
  },
  {
    "Symbol": "PV",
    "Name": "Primavera Capital Acquisition Corporation "
  },
  {
    "Symbol": "PVBC",
    "Name": "Provident Bancorp Inc. (MD)"
  },
  {
    "Symbol": "PVH",
    "Name": "PVH"
  },
  {
    "Symbol": "PVL",
    "Name": "Permianville Royalty Trust Trust Units"
  },
  {
    "Symbol": "PW",
    "Name": "Power REIT (MD)"
  },
  {
    "Symbol": "PWFL",
    "Name": "PowerFleet Inc."
  },
  {
    "Symbol": "PWOD",
    "Name": "Penns Woods Bancorp Inc."
  },
  {
    "Symbol": "PWP",
    "Name": "Perella Weinberg Partners "
  },
  {
    "Symbol": "PWR",
    "Name": "Quanta Services Inc."
  },
  {
    "Symbol": "PWSC",
    "Name": "PowerSchool Holdings Inc. "
  },
  {
    "Symbol": "PWUP",
    "Name": "PowerUp Acquisition "
  },
  {
    "Symbol": "PWUPU",
    "Name": "PowerUp Acquisition Unit"
  },
  {
    "Symbol": "PX",
    "Name": "P10 Inc. "
  },
  {
    "Symbol": "PXD",
    "Name": "Pioneer Natural Resources Company"
  },
  {
    "Symbol": "PXLW",
    "Name": "Pixelworks Inc."
  },
  {
    "Symbol": "PXS",
    "Name": "Pyxis Tankers Inc."
  },
  {
    "Symbol": "PYCR",
    "Name": "Paycor HCM Inc."
  },
  {
    "Symbol": "PYPD",
    "Name": "PolyPid Ltd."
  },
  {
    "Symbol": "PYPL",
    "Name": "PayPal Holdings Inc."
  },
  {
    "Symbol": "PYR",
    "Name": "PyroGenesis Canada Inc."
  },
  {
    "Symbol": "PYS",
    "Name": "Merrill Lynch Depositor Inc PPlus Tr Ser RRD-1 Tr Ctf Cl A"
  },
  {
    "Symbol": "PYT",
    "Name": "PPlus Tr GSC-2 Tr Ctf Fltg Rate"
  },
  {
    "Symbol": "PYXS",
    "Name": "Pyxis Oncology Inc."
  },
  {
    "Symbol": "PZG",
    "Name": "Paramount Gold Nevada"
  },
  {
    "Symbol": "PZN",
    "Name": "Pzena Investment Management Inc "
  },
  {
    "Symbol": "PZZA",
    "Name": "Papa John's International Inc."
  },
  {
    "Symbol": "QCOM",
    "Name": "QUALCOMM Incorporated"
  },
  {
    "Symbol": "QCRH",
    "Name": "QCR Holdings Inc."
  },
  {
    "Symbol": "QDEL",
    "Name": "Quidel Corporation"
  },
  {
    "Symbol": "QFTA",
    "Name": "Quantum FinTech Acquisition Corporation"
  },
  {
    "Symbol": "QGEN",
    "Name": "Qiagen N.V."
  },
  {
    "Symbol": "QH",
    "Name": "Quhuo Limited American Depository Shares"
  },
  {
    "Symbol": "QIPT",
    "Name": "Quipt Home Medical"
  },
  {
    "Symbol": "QLGN",
    "Name": "Qualigen Therapeutics Inc."
  },
  {
    "Symbol": "QLI",
    "Name": "Qilian International Holding Group Ltd."
  },
  {
    "Symbol": "QLYS",
    "Name": "Qualys Inc."
  },
  {
    "Symbol": "QMCO",
    "Name": "Quantum Corporation"
  },
  {
    "Symbol": "QNGY",
    "Name": "Quanergy Systems Inc."
  },
  {
    "Symbol": "QNST",
    "Name": "QuinStreet Inc."
  },
  {
    "Symbol": "QRHC",
    "Name": "Quest Resource Holding Corporation"
  },
  {
    "Symbol": "QRTEA",
    "Name": "Qurate Retail Inc. Series A"
  },
  {
    "Symbol": "QRVO",
    "Name": "Qorvo Inc."
  },
  {
    "Symbol": "QS",
    "Name": "QuantumScape Corporation "
  },
  {
    "Symbol": "QSAM",
    "Name": "QSAM Biosciences Inc."
  },
  {
    "Symbol": "QSI",
    "Name": "Quantum-Si Incorporated "
  },
  {
    "Symbol": "QSR",
    "Name": "Restaurant Brands International Inc."
  },
  {
    "Symbol": "QTEK",
    "Name": "QualTek Services Inc. "
  },
  {
    "Symbol": "QTNT",
    "Name": "Quotient Limited"
  },
  {
    "Symbol": "QTRX",
    "Name": "Quanterix Corporation"
  },
  {
    "Symbol": "QTWO",
    "Name": "Q2 Holdings Inc."
  },
  {
    "Symbol": "QUAD",
    "Name": "Quad Graphics Inc "
  },
  {
    "Symbol": "QUBT",
    "Name": "Quantum Computing Inc."
  },
  {
    "Symbol": "QUIK",
    "Name": "QuickLogic Corporation"
  },
  {
    "Symbol": "QUMU",
    "Name": "Qumu Corporation"
  },
  {
    "Symbol": "QUOT",
    "Name": "Quotient Technology Inc."
  },
  {
    "Symbol": "QURE",
    "Name": "uniQure N.V."
  },
  {
    "Symbol": "R",
    "Name": "Ryder System Inc."
  },
  {
    "Symbol": "RA",
    "Name": "Brookfield Real Assets Income Fund Inc."
  },
  {
    "Symbol": "RACE",
    "Name": "Ferrari N.V."
  },
  {
    "Symbol": "RACY",
    "Name": "Relativity Acquisition "
  },
  {
    "Symbol": "RACYU",
    "Name": "Relativity Acquisition Unit"
  },
  {
    "Symbol": "RAD",
    "Name": "Rite Aid Corporation"
  },
  {
    "Symbol": "RADA",
    "Name": "RADA Electronic Industries Ltd."
  },
  {
    "Symbol": "RADI",
    "Name": "Radius Global Infrastructure Inc. "
  },
  {
    "Symbol": "RAIL",
    "Name": "FreightCar America Inc."
  },
  {
    "Symbol": "RAIN",
    "Name": "Rain Therapeutics Inc."
  },
  {
    "Symbol": "RAM",
    "Name": "Aries I Acquisition Corporation  Ordinary Share"
  },
  {
    "Symbol": "RAMMU",
    "Name": "Aries I Acquisition Corporation Unit"
  },
  {
    "Symbol": "RAMP",
    "Name": "LiveRamp Holdings Inc."
  },
  {
    "Symbol": "RAND",
    "Name": "Rand Capital Corporation"
  },
  {
    "Symbol": "RANI",
    "Name": "Rani Therapeutics Holdings Inc. "
  },
  {
    "Symbol": "RAPT",
    "Name": "RAPT Therapeutics Inc."
  },
  {
    "Symbol": "RARE",
    "Name": "Ultragenyx Pharmaceutical Inc."
  },
  {
    "Symbol": "RAVE",
    "Name": "Rave Restaurant Group Inc."
  },
  {
    "Symbol": "RBA",
    "Name": "Ritchie Bros. Auctioneers Incorporated"
  },
  {
    "Symbol": "RBAC",
    "Name": "RedBall Acquisition "
  },
  {
    "Symbol": "RBB",
    "Name": "RBB Bancorp"
  },
  {
    "Symbol": "RBBN",
    "Name": "Ribbon Communications Inc."
  },
  {
    "Symbol": "RBCAA",
    "Name": "Republic Bancorp Inc. "
  },
  {
    "Symbol": "RBCN",
    "Name": "Rubicon Technology Inc."
  },
  {
    "Symbol": "RBKB",
    "Name": "Rhinebeck Bancorp Inc."
  },
  {
    "Symbol": "RBLX",
    "Name": "Roblox Corporation "
  },
  {
    "Symbol": "RBOT",
    "Name": "Vicarious Surgical Inc. "
  },
  {
    "Symbol": "RC",
    "Name": "Ready Capital Corproation"
  },
  {
    "Symbol": "RCAC",
    "Name": "Revelstone Capital Acquisition "
  },
  {
    "Symbol": "RCACU",
    "Name": "Revelstone Capital Acquisition Unit"
  },
  {
    "Symbol": "RCAT",
    "Name": "Red Cat Holdings Inc."
  },
  {
    "Symbol": "RCEL",
    "Name": "Avita Medical Inc."
  },
  {
    "Symbol": "RCG",
    "Name": "RENN Fund Inc"
  },
  {
    "Symbol": "RCHG",
    "Name": "Recharge Acquisition "
  },
  {
    "Symbol": "RCHGU",
    "Name": "Recharge Acquisition Unit"
  },
  {
    "Symbol": "RCI",
    "Name": "Rogers Communication Inc."
  },
  {
    "Symbol": "RCKT",
    "Name": "Rocket Pharmaceuticals Inc."
  },
  {
    "Symbol": "RCKY",
    "Name": "Rocky Brands Inc."
  },
  {
    "Symbol": "RCL",
    "Name": "D/B/A Royal Caribbean Cruises Ltd."
  },
  {
    "Symbol": "RCLF",
    "Name": "Rosecliff Acquisition Corp I "
  },
  {
    "Symbol": "RCM",
    "Name": "R1 RCM Inc."
  },
  {
    "Symbol": "RCMT",
    "Name": "RCM Technologies Inc."
  },
  {
    "Symbol": "RCON",
    "Name": "Recon Technology Ltd. "
  },
  {
    "Symbol": "RCOR",
    "Name": "Renovacor Inc."
  },
  {
    "Symbol": "RCRT",
    "Name": "Recruiter.com Group Inc."
  },
  {
    "Symbol": "RCS",
    "Name": "PIMCO Strategic Income Fund Inc."
  },
  {
    "Symbol": "RCUS",
    "Name": "Arcus Biosciences Inc."
  },
  {
    "Symbol": "RDBX",
    "Name": "Redbox Entertainment Inc. "
  },
  {
    "Symbol": "RDCM",
    "Name": "Radcom Ltd."
  },
  {
    "Symbol": "RDFN",
    "Name": "Redfin Corporation"
  },
  {
    "Symbol": "RDI",
    "Name": "Reading International Inc "
  },
  {
    "Symbol": "RDIB",
    "Name": "Reading International Inc Class B"
  },
  {
    "Symbol": "RDN",
    "Name": "Radian Group Inc."
  },
  {
    "Symbol": "RDNT",
    "Name": "RadNet Inc."
  },
  {
    "Symbol": "RDUS",
    "Name": "Radius Health Inc."
  },
  {
    "Symbol": "RDVT",
    "Name": "Red Violet Inc."
  },
  {
    "Symbol": "RDW",
    "Name": "Redwire Corporation"
  },
  {
    "Symbol": "RDWR",
    "Name": "Radware Ltd."
  },
  {
    "Symbol": "RDY",
    "Name": "Dr. Reddy's Laboratories Ltd"
  },
  {
    "Symbol": "RE",
    "Name": "Everest Re Group Ltd."
  },
  {
    "Symbol": "REAL",
    "Name": "The RealReal Inc."
  },
  {
    "Symbol": "REAX",
    "Name": "The Real Brokerage Inc."
  },
  {
    "Symbol": "REE",
    "Name": "REE Automotive Ltd. "
  },
  {
    "Symbol": "REED",
    "Name": "Reeds Inc."
  },
  {
    "Symbol": "REFI",
    "Name": "Chicago Atlantic Real Estate Finance Inc."
  },
  {
    "Symbol": "REFR",
    "Name": "Research Frontiers Incorporated"
  },
  {
    "Symbol": "REG",
    "Name": "Regency Centers Corporation"
  },
  {
    "Symbol": "REGI",
    "Name": "Renewable Energy Group Inc."
  },
  {
    "Symbol": "REGN",
    "Name": "Regeneron Pharmaceuticals Inc."
  },
  {
    "Symbol": "REI",
    "Name": "Ring Energy Inc."
  },
  {
    "Symbol": "REKR",
    "Name": "Rekor Systems Inc."
  },
  {
    "Symbol": "RELI",
    "Name": "Reliance Global Group Inc."
  },
  {
    "Symbol": "RELL",
    "Name": "Richardson Electronics Ltd."
  },
  {
    "Symbol": "RELY",
    "Name": "Remitly Global Inc."
  },
  {
    "Symbol": "RENO",
    "Name": "Renovare Environmental Inc."
  },
  {
    "Symbol": "RENT",
    "Name": "Rent the Runway Inc. "
  },
  {
    "Symbol": "REPL",
    "Name": "Replimune Group Inc."
  },
  {
    "Symbol": "REPX",
    "Name": "Riley Exploration Permian Inc."
  },
  {
    "Symbol": "RES",
    "Name": "RPC Inc."
  },
  {
    "Symbol": "RETA",
    "Name": "Reata Pharmaceuticals Inc. "
  },
  {
    "Symbol": "RETO",
    "Name": "ReTo Eco-Solutions Inc."
  },
  {
    "Symbol": "REV",
    "Name": "Revlon Inc. New"
  },
  {
    "Symbol": "REVB",
    "Name": "Revelation Biosciences Inc."
  },
  {
    "Symbol": "REVE",
    "Name": "Alpine Acquisition Corporation"
  },
  {
    "Symbol": "REVG",
    "Name": "REV Group Inc."
  },
  {
    "Symbol": "REVH",
    "Name": "Revolution Healthcare Acquisition SAIL "
  },
  {
    "Symbol": "REVHU",
    "Name": "Revolution Healthcare Acquisition SAIL Units"
  },
  {
    "Symbol": "REX",
    "Name": "REX American Resources Corporation"
  },
  {
    "Symbol": "REXR",
    "Name": "Rexford Industrial Realty Inc."
  },
  {
    "Symbol": "REYN",
    "Name": "Reynolds Consumer Products Inc."
  },
  {
    "Symbol": "REZI",
    "Name": "Resideo Technologies Inc."
  },
  {
    "Symbol": "RF",
    "Name": "Regions Financial Corporation"
  },
  {
    "Symbol": "RFACR",
    "Name": "RF Acquisition Rights"
  },
  {
    "Symbol": "RFACU",
    "Name": "RF Acquisition Unit"
  },
  {
    "Symbol": "RFI",
    "Name": "Cohen & Steers Total Return Realty Fund Inc."
  },
  {
    "Symbol": "RFIL",
    "Name": "RF Industries Ltd."
  },
  {
    "Symbol": "RFL",
    "Name": "Rafael Holdings Inc. Class B"
  },
  {
    "Symbol": "RFM",
    "Name": "RiverNorth Flexible Municipal Income Fund Inc."
  },
  {
    "Symbol": "RFP",
    "Name": "Resolute Forest Products Inc."
  },
  {
    "Symbol": "RGA",
    "Name": "Reinsurance Group of America Incorporated"
  },
  {
    "Symbol": "RGC",
    "Name": "Regencell Bioscience Holdings Limited"
  },
  {
    "Symbol": "RGCO",
    "Name": "RGC Resources Inc."
  },
  {
    "Symbol": "RGEN",
    "Name": "Repligen Corporation"
  },
  {
    "Symbol": "RGF",
    "Name": "The Real Good Food Company Inc. "
  },
  {
    "Symbol": "RGLD",
    "Name": "Royal Gold Inc."
  },
  {
    "Symbol": "RGLS",
    "Name": "Regulus Therapeutics Inc."
  },
  {
    "Symbol": "RGNX",
    "Name": "REGENXBIO Inc."
  },
  {
    "Symbol": "RGP",
    "Name": "Resources Connection Inc."
  },
  {
    "Symbol": "RGR",
    "Name": "Sturm Ruger & Company Inc."
  },
  {
    "Symbol": "RGS",
    "Name": "Regis Corporation"
  },
  {
    "Symbol": "RGT",
    "Name": "Royce Global Value Trust Inc."
  },
  {
    "Symbol": "RGTI",
    "Name": "Rigetti Computing Inc."
  },
  {
    "Symbol": "RH",
    "Name": "RH"
  },
  {
    "Symbol": "RHE",
    "Name": "Regional Health Properties Inc."
  },
  {
    "Symbol": "RHI",
    "Name": "Robert Half International Inc."
  },
  {
    "Symbol": "RHP",
    "Name": "Ryman Hospitality Properties Inc. (REIT)"
  },
  {
    "Symbol": "RIBT",
    "Name": "RiceBran Technologies"
  },
  {
    "Symbol": "RICK",
    "Name": "RCI Hospitality Holdings Inc."
  },
  {
    "Symbol": "RICO",
    "Name": "Agrico Acquisition "
  },
  {
    "Symbol": "RIDE",
    "Name": "Lordstown Motors "
  },
  {
    "Symbol": "RIG",
    "Name": "Transocean Ltd (Switzerland)"
  },
  {
    "Symbol": "RIGL",
    "Name": "Rigel Pharmaceuticals Inc."
  },
  {
    "Symbol": "RILY",
    "Name": "B. Riley Financial Inc."
  },
  {
    "Symbol": "RIO",
    "Name": "Rio Tinto Plc"
  },
  {
    "Symbol": "RIOT",
    "Name": "Riot Blockchain Inc."
  },
  {
    "Symbol": "RIV",
    "Name": "RiverNorth Opportunities Fund Inc."
  },
  {
    "Symbol": "RIVN",
    "Name": "Rivian Automotive Inc. "
  },
  {
    "Symbol": "RJAC",
    "Name": "Jackson Acquisition Company "
  },
  {
    "Symbol": "RJF",
    "Name": "Raymond James Financial Inc."
  },
  {
    "Symbol": "RKDA",
    "Name": "Arcadia Biosciences Inc."
  },
  {
    "Symbol": "RKLB",
    "Name": "Rocket Lab USA Inc."
  },
  {
    "Symbol": "RKLY",
    "Name": "Rockley Photonics Holdings Limited"
  },
  {
    "Symbol": "RKT",
    "Name": "Rocket Companies Inc. "
  },
  {
    "Symbol": "RKTA",
    "Name": "Rocket Internet Growth Opportunities "
  },
  {
    "Symbol": "RL",
    "Name": "Ralph Lauren Corporation"
  },
  {
    "Symbol": "RLAY",
    "Name": "Relay Therapeutics Inc."
  },
  {
    "Symbol": "RLGT",
    "Name": "Radiant Logistics Inc."
  },
  {
    "Symbol": "RLGY",
    "Name": "Realogy Holdings"
  },
  {
    "Symbol": "RLI",
    "Name": "RLI  (DE)"
  },
  {
    "Symbol": "RLMD",
    "Name": "Relmada Therapeutics Inc."
  },
  {
    "Symbol": "RLYB",
    "Name": "Rallybio Corporation"
  },
  {
    "Symbol": "RM",
    "Name": "Regional Management"
  },
  {
    "Symbol": "RMAX",
    "Name": "RE/MAX Holdings Inc. "
  },
  {
    "Symbol": "RMBI",
    "Name": "Richmond Mutual Bancorporation Inc."
  },
  {
    "Symbol": "RMBL",
    "Name": "RumbleOn Inc. Class B"
  },
  {
    "Symbol": "RMBS",
    "Name": "Rambus Inc."
  },
  {
    "Symbol": "RMCF",
    "Name": "Rocky Mountain Chocolate Factory Inc."
  },
  {
    "Symbol": "RMD",
    "Name": "ResMed Inc."
  },
  {
    "Symbol": "RMED",
    "Name": "Ra Medical Systems Inc."
  },
  {
    "Symbol": "RMI",
    "Name": "RiverNorth Opportunistic Municipal Income Fund Inc."
  },
  {
    "Symbol": "RMM",
    "Name": "RiverNorth Managed Duration Municipal Income Fund Inc."
  },
  {
    "Symbol": "RMNI",
    "Name": "Rimini Street Inc. (DE)"
  },
  {
    "Symbol": "RMO",
    "Name": "Romeo Power Inc. "
  },
  {
    "Symbol": "RMR",
    "Name": "The RMR Group Inc. "
  },
  {
    "Symbol": "RMT",
    "Name": "Royce Micro-Cap Trust Inc."
  },
  {
    "Symbol": "RMTI",
    "Name": "Rockwell Medical Inc. (DE)"
  },
  {
    "Symbol": "RNA",
    "Name": "Avidity Biosciences Inc."
  },
  {
    "Symbol": "RNAZ",
    "Name": "TransCode Therapeutics Inc."
  },
  {
    "Symbol": "RNDB",
    "Name": "Randolph Bancorp Inc."
  },
  {
    "Symbol": "RNER",
    "Name": "Mount Rainier Acquisition"
  },
  {
    "Symbol": "RNG",
    "Name": "RingCentral Inc. "
  },
  {
    "Symbol": "RNGR",
    "Name": "Ranger Energy Services Inc. "
  },
  {
    "Symbol": "RNP",
    "Name": "Cohen & Steers REIT and Preferred and Income Fund Inc."
  },
  {
    "Symbol": "RNR",
    "Name": "RenaissanceRe Holdings Ltd."
  },
  {
    "Symbol": "RNST",
    "Name": "Renasant Corporation"
  },
  {
    "Symbol": "RNW",
    "Name": "ReNew Energy Global plc "
  },
  {
    "Symbol": "RNWK",
    "Name": "RealNetworks Inc."
  },
  {
    "Symbol": "RNXT",
    "Name": "RenovoRx Inc."
  },
  {
    "Symbol": "ROAD",
    "Name": "Construction Partners Inc. "
  },
  {
    "Symbol": "ROC",
    "Name": "ROC Energy Acquisition"
  },
  {
    "Symbol": "ROCAR",
    "Name": "ROC Energy Acquisition Rights"
  },
  {
    "Symbol": "ROCAU",
    "Name": "ROC Energy Acquisition Unit"
  },
  {
    "Symbol": "ROCC",
    "Name": "Ranger Oil Corporation "
  },
  {
    "Symbol": "ROCG",
    "Name": "Roth CH Acquisition IV Co."
  },
  {
    "Symbol": "ROCGU",
    "Name": "Roth CH Acquisition IV Co. Unit"
  },
  {
    "Symbol": "ROCK",
    "Name": "Gibraltar Industries Inc."
  },
  {
    "Symbol": "ROCL",
    "Name": "Roth CH Acquisition V Co."
  },
  {
    "Symbol": "ROCLU",
    "Name": "Roth CH Acquisition V Co. Unit"
  },
  {
    "Symbol": "ROG",
    "Name": "Rogers Corporation"
  },
  {
    "Symbol": "ROIC",
    "Name": "Retail Opportunity Investments  (MD)"
  },
  {
    "Symbol": "ROIV",
    "Name": "Roivant Sciences Ltd."
  },
  {
    "Symbol": "ROK",
    "Name": "Rockwell Automation Inc."
  },
  {
    "Symbol": "ROKU",
    "Name": "Roku Inc. "
  },
  {
    "Symbol": "ROL",
    "Name": "Rollins Inc."
  },
  {
    "Symbol": "ROLL",
    "Name": "RBC Bearings Incorporated"
  },
  {
    "Symbol": "ROOT",
    "Name": "Root Inc. "
  },
  {
    "Symbol": "ROP",
    "Name": "Roper Technologies Inc."
  },
  {
    "Symbol": "ROSE",
    "Name": "Rose Hill Acquisition Corporation "
  },
  {
    "Symbol": "ROSEU",
    "Name": "Rose Hill Acquisition Corporation Unit"
  },
  {
    "Symbol": "ROST",
    "Name": "Ross Stores Inc."
  },
  {
    "Symbol": "ROVR",
    "Name": "Rover Group Inc. "
  },
  {
    "Symbol": "RPAY",
    "Name": "Repay Holdings Corporation "
  },
  {
    "Symbol": "RPD",
    "Name": "Rapid7 Inc."
  },
  {
    "Symbol": "RPHM",
    "Name": "Reneo Pharmaceuticals Inc."
  },
  {
    "Symbol": "RPID",
    "Name": "Rapid Micro Biosystems Inc. "
  },
  {
    "Symbol": "RPM",
    "Name": "RPM International Inc."
  },
  {
    "Symbol": "RPRX",
    "Name": "Royalty Pharma plc "
  },
  {
    "Symbol": "RPT",
    "Name": "RPT Realty"
  },
  {
    "Symbol": "RPTX",
    "Name": "Repare Therapeutics Inc."
  },
  {
    "Symbol": "RQI",
    "Name": "Cohen & Steers Quality Income Realty Fund Inc"
  },
  {
    "Symbol": "RRAC",
    "Name": "Rigel Resource Acquisition "
  },
  {
    "Symbol": "RRBI",
    "Name": "Red River Bancshares Inc."
  },
  {
    "Symbol": "RRC",
    "Name": "Range Resources Corporation"
  },
  {
    "Symbol": "RRGB",
    "Name": "Red Robin Gourmet Burgers Inc."
  },
  {
    "Symbol": "RRR",
    "Name": "Red Rock Resorts Inc. "
  },
  {
    "Symbol": "RRX",
    "Name": "Regal Rexnord Corporation"
  },
  {
    "Symbol": "RS",
    "Name": "Reliance Steel & Aluminum Co.  (DE)"
  },
  {
    "Symbol": "RSF",
    "Name": "RiverNorth Specialty Finance Corporation"
  },
  {
    "Symbol": "RSG",
    "Name": "Republic Services Inc."
  },
  {
    "Symbol": "RSI",
    "Name": "Rush Street Interactive Inc. "
  },
  {
    "Symbol": "RSKD",
    "Name": "Riskified Ltd. "
  },
  {
    "Symbol": "RSLS",
    "Name": "ReShape Lifesciences Inc."
  },
  {
    "Symbol": "RSSS",
    "Name": "Research Solutions Inc"
  },
  {
    "Symbol": "RSVR",
    "Name": "Reservoir Media Inc."
  },
  {
    "Symbol": "RTL",
    "Name": "The Necessity Retail REIT Inc. "
  },
  {
    "Symbol": "RTLR",
    "Name": "Rattler Midstream LP Common Units"
  },
  {
    "Symbol": "RTX",
    "Name": "Raytheon Technologies Corporation"
  },
  {
    "Symbol": "RUBY",
    "Name": "Rubius Therapeutics Inc."
  },
  {
    "Symbol": "RUN",
    "Name": "Sunrun Inc."
  },
  {
    "Symbol": "RUSHA",
    "Name": "Rush Enterprises Inc.  Cl A"
  },
  {
    "Symbol": "RUSHB",
    "Name": "Rush Enterprises Inc. Class B"
  },
  {
    "Symbol": "RUTH",
    "Name": "Ruth's Hospitality Group Inc."
  },
  {
    "Symbol": "RVAC",
    "Name": "Riverview Acquisition "
  },
  {
    "Symbol": "RVACU",
    "Name": "Riverview Acquisition Unit"
  },
  {
    "Symbol": "RVLP",
    "Name": "RVL Pharmaceuticals plc"
  },
  {
    "Symbol": "RVLV",
    "Name": "Revolve Group Inc. "
  },
  {
    "Symbol": "RVMD",
    "Name": "Revolution Medicines Inc."
  },
  {
    "Symbol": "RVNC",
    "Name": "Revance Therapeutics Inc."
  },
  {
    "Symbol": "RVP",
    "Name": "Retractable Technologies Inc."
  },
  {
    "Symbol": "RVPH",
    "Name": "Reviva Pharmaceuticals Holdings Inc."
  },
  {
    "Symbol": "RVSB",
    "Name": "Riverview Bancorp Inc"
  },
  {
    "Symbol": "RVSN",
    "Name": "Rail Vision Ltd. Ordinary Share"
  },
  {
    "Symbol": "RVT",
    "Name": "Royce Value Trust Inc."
  },
  {
    "Symbol": "RWAY",
    "Name": "Runway Growth Finance"
  },
  {
    "Symbol": "RWLK",
    "Name": "ReWalk Robotics Ltd."
  },
  {
    "Symbol": "RWODU",
    "Name": "Redwoods Acquisition Unit"
  },
  {
    "Symbol": "RWT",
    "Name": "Redwood Trust Inc."
  },
  {
    "Symbol": "RXDX",
    "Name": "Prometheus Biosciences Inc."
  },
  {
    "Symbol": "RXRA",
    "Name": "RXR Acquisition "
  },
  {
    "Symbol": "RXRX",
    "Name": "Recursion Pharmaceuticals Inc. "
  },
  {
    "Symbol": "RXST",
    "Name": "RxSight Inc."
  },
  {
    "Symbol": "RXT",
    "Name": "Rackspace Technology Inc."
  },
  {
    "Symbol": "RY",
    "Name": "Royal Bank Of Canada"
  },
  {
    "Symbol": "RYAM",
    "Name": "Rayonier Advanced Materials Inc."
  },
  {
    "Symbol": "RYAN",
    "Name": "Ryan Specialty Group Holdings Inc. "
  },
  {
    "Symbol": "RYI",
    "Name": "Ryerson Holding Corporation"
  },
  {
    "Symbol": "RYN",
    "Name": "Rayonier Inc. REIT"
  },
  {
    "Symbol": "RYTM",
    "Name": "Rhythm Pharmaceuticals Inc."
  },
  {
    "Symbol": "RZLT",
    "Name": "Rezolute Inc.  (NV)"
  },
  {
    "Symbol": "S",
    "Name": "SentinelOne Inc. "
  },
  {
    "Symbol": "SA",
    "Name": "Seabridge Gold Inc.  (Canada)"
  },
  {
    "Symbol": "SABR",
    "Name": "Sabre Corporation"
  },
  {
    "Symbol": "SABS",
    "Name": "SAB Biotherapeutics Inc."
  },
  {
    "Symbol": "SACH",
    "Name": "Sachem Capital"
  },
  {
    "Symbol": "SAFE",
    "Name": "Safehold Inc."
  },
  {
    "Symbol": "SAFM",
    "Name": "Sanderson Farms Inc."
  },
  {
    "Symbol": "SAFT",
    "Name": "Safety Insurance Group Inc."
  },
  {
    "Symbol": "SAGA",
    "Name": "Sagaliam Acquisition "
  },
  {
    "Symbol": "SAGAR",
    "Name": "Sagaliam Acquisition Rights"
  },
  {
    "Symbol": "SAGAU",
    "Name": "Sagaliam Acquisition Units"
  },
  {
    "Symbol": "SAGE",
    "Name": "Sage Therapeutics Inc."
  },
  {
    "Symbol": "SAH",
    "Name": "Sonic Automotive Inc."
  },
  {
    "Symbol": "SAIA",
    "Name": "Saia Inc."
  },
  {
    "Symbol": "SAIC",
    "Name": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION"
  },
  {
    "Symbol": "SAIL",
    "Name": "SailPoint Technologies Holdings Inc."
  },
  {
    "Symbol": "SAL",
    "Name": "Salisbury Bancorp Inc."
  },
  {
    "Symbol": "SALM",
    "Name": "Salem Media Group Inc. "
  },
  {
    "Symbol": "SAM",
    "Name": "Boston Beer Company Inc. (The)"
  },
  {
    "Symbol": "SAMG",
    "Name": "Silvercrest Asset Management Group Inc. "
  },
  {
    "Symbol": "SAN",
    "Name": "Banco Santander S.A. Sponsored ADR (Spain)"
  },
  {
    "Symbol": "SANA",
    "Name": "Sana Biotechnology Inc."
  },
  {
    "Symbol": "SAND",
    "Name": "Sandstorm Gold Ltd.  (Canada)"
  },
  {
    "Symbol": "SANG",
    "Name": "Sangoma Technologies Corporation"
  },
  {
    "Symbol": "SANM",
    "Name": "Sanmina Corporation"
  },
  {
    "Symbol": "SANW",
    "Name": "S&W Seed Company  (NV)"
  },
  {
    "Symbol": "SAP",
    "Name": "SAP  SE ADS"
  },
  {
    "Symbol": "SAR",
    "Name": "Saratoga Investment Corp New"
  },
  {
    "Symbol": "SASR",
    "Name": "Sandy Spring Bancorp Inc."
  },
  {
    "Symbol": "SATL",
    "Name": "Satellogic Inc. "
  },
  {
    "Symbol": "SATS",
    "Name": "EchoStar  Corporation"
  },
  {
    "Symbol": "SAVA",
    "Name": "Cassava Sciences Inc."
  },
  {
    "Symbol": "SAVE",
    "Name": "Spirit Airlines Inc."
  },
  {
    "Symbol": "SBAC",
    "Name": "SBA Communications Corporation "
  },
  {
    "Symbol": "SBCF",
    "Name": "Seacoast Banking Corporation of Florida"
  },
  {
    "Symbol": "SBET",
    "Name": "SharpLink Gaming Ltd."
  },
  {
    "Symbol": "SBEV",
    "Name": "Splash Beverage Group Inc. (NV)"
  },
  {
    "Symbol": "SBFG",
    "Name": "SB Financial Group Inc."
  },
  {
    "Symbol": "SBFM",
    "Name": "Sunshine Biopharma Inc."
  },
  {
    "Symbol": "SBGI",
    "Name": "Sinclair Broadcast Group Inc. "
  },
  {
    "Symbol": "SBH",
    "Name": "Sally Beauty Holdings Inc. (Name to be changed from Sally Holdings Inc.)"
  },
  {
    "Symbol": "SBI",
    "Name": "Western Asset Intermediate Muni Fund Inc"
  },
  {
    "Symbol": "SBLK",
    "Name": "Star Bulk Carriers"
  },
  {
    "Symbol": "SBNY",
    "Name": "Signature Bank"
  },
  {
    "Symbol": "SBOW",
    "Name": "SilverBow Resorces Inc."
  },
  {
    "Symbol": "SBR",
    "Name": "Sabine Royalty Trust"
  },
  {
    "Symbol": "SBRA",
    "Name": "Sabra Health Care REIT Inc."
  },
  {
    "Symbol": "SBSI",
    "Name": "Southside Bancshares Inc."
  },
  {
    "Symbol": "SBSW",
    "Name": "D/B/A Sibanye-Stillwater Limited ADS"
  },
  {
    "Symbol": "SBT",
    "Name": "Sterling Bancorp Inc."
  },
  {
    "Symbol": "SBTX",
    "Name": "Silverback Therapeutics Inc."
  },
  {
    "Symbol": "SBUX",
    "Name": "Starbucks Corporation"
  },
  {
    "Symbol": "SCAQU",
    "Name": "Stratim Cloud Acquisition Unit"
  },
  {
    "Symbol": "SCCO",
    "Name": "Southern Copper Corporation"
  },
  {
    "Symbol": "SCD",
    "Name": "LMP Capital and Income Fund Inc."
  },
  {
    "Symbol": "SCHL",
    "Name": "Scholastic Corporation"
  },
  {
    "Symbol": "SCHN",
    "Name": "Schnitzer Steel Industries Inc. "
  },
  {
    "Symbol": "SCHW",
    "Name": "Charles Schwab Corporation (The)"
  },
  {
    "Symbol": "SCI",
    "Name": "Service Corporation International"
  },
  {
    "Symbol": "SCKT",
    "Name": "Socket Mobile Inc."
  },
  {
    "Symbol": "SCL",
    "Name": "Stepan Company"
  },
  {
    "Symbol": "SCLE",
    "Name": "Broadscale Acquisition "
  },
  {
    "Symbol": "SCLEU",
    "Name": "Broadscale Acquisition Units"
  },
  {
    "Symbol": "SCM",
    "Name": "Stellus Capital Investment Corporation"
  },
  {
    "Symbol": "SCMA",
    "Name": "Seaport Calibre Materials Acquisition "
  },
  {
    "Symbol": "SCMAU",
    "Name": "Seaport Calibre Materials Acquisition Unit"
  },
  {
    "Symbol": "SCOA",
    "Name": "ScION Tech Growth I "
  },
  {
    "Symbol": "SCOAU",
    "Name": "ScION Tech Growth I Unit"
  },
  {
    "Symbol": "SCOR",
    "Name": "comScore Inc."
  },
  {
    "Symbol": "SCPH",
    "Name": "scPharmaceuticals Inc."
  },
  {
    "Symbol": "SCPL",
    "Name": "SciPlay Corporation "
  },
  {
    "Symbol": "SCPS",
    "Name": "Scopus BioPharma Inc."
  },
  {
    "Symbol": "SCRM",
    "Name": "Screaming Eagle Acquisition "
  },
  {
    "Symbol": "SCRMU",
    "Name": "Screaming Eagle Acquisition Unit"
  },
  {
    "Symbol": "SCS",
    "Name": "Steelcase Inc."
  },
  {
    "Symbol": "SCSC",
    "Name": "ScanSource Inc."
  },
  {
    "Symbol": "SCTL",
    "Name": "Societal CDMO Inc."
  },
  {
    "Symbol": "SCU",
    "Name": "Sculptor Capital Management Inc. "
  },
  {
    "Symbol": "SCUA",
    "Name": "Sculptor Acquisition Corp I "
  },
  {
    "Symbol": "SCVL",
    "Name": "Shoe Carnival Inc."
  },
  {
    "Symbol": "SCWX",
    "Name": "SecureWorks "
  },
  {
    "Symbol": "SCX",
    "Name": "L.S. Starrett Company (The)"
  },
  {
    "Symbol": "SCYX",
    "Name": "SCYNEXIS Inc."
  },
  {
    "Symbol": "SD",
    "Name": "SandRidge Energy Inc."
  },
  {
    "Symbol": "SDAC",
    "Name": "Sustainable Development Acquisition I "
  },
  {
    "Symbol": "SDACU",
    "Name": "Sustainable Development Acquisition I Unit"
  },
  {
    "Symbol": "SDC",
    "Name": "SmileDirectClub Inc. "
  },
  {
    "Symbol": "SDGR",
    "Name": "Schrodinger Inc."
  },
  {
    "Symbol": "SDH",
    "Name": "Global Internet of People Inc."
  },
  {
    "Symbol": "SDHY",
    "Name": "PGIM Short Duration High Yield Opportunities Fund"
  },
  {
    "Symbol": "SDIG",
    "Name": "Stronghold Digital Mining Inc. "
  },
  {
    "Symbol": "SDPI",
    "Name": "Superior Drilling Products Inc."
  },
  {
    "Symbol": "SEAC",
    "Name": "SeaChange International Inc."
  },
  {
    "Symbol": "SEAS",
    "Name": "SeaWorld Entertainment Inc."
  },
  {
    "Symbol": "SEAT",
    "Name": "Vivid Seats Inc. "
  },
  {
    "Symbol": "SEB",
    "Name": "Seaboard Corporation"
  },
  {
    "Symbol": "SECO",
    "Name": "Secoo Holding Limited ADS"
  },
  {
    "Symbol": "SEDG",
    "Name": "SolarEdge Technologies Inc."
  },
  {
    "Symbol": "SEE",
    "Name": "Sealed Air Corporation"
  },
  {
    "Symbol": "SEED",
    "Name": "Origin Agritech Limited"
  },
  {
    "Symbol": "SEEL",
    "Name": "Seelos Therapeutics Inc."
  },
  {
    "Symbol": "SEER",
    "Name": "Seer Inc. "
  },
  {
    "Symbol": "SEIC",
    "Name": "SEI Investments Company"
  },
  {
    "Symbol": "SELB",
    "Name": "Selecta Biosciences Inc."
  },
  {
    "Symbol": "SELF",
    "Name": "Global Self Storage Inc."
  },
  {
    "Symbol": "SEM",
    "Name": "Select Medical Holdings Corporation"
  },
  {
    "Symbol": "SEMR",
    "Name": "SEMrush Holdings Inc. "
  },
  {
    "Symbol": "SENEA",
    "Name": "Seneca Foods "
  },
  {
    "Symbol": "SENEB",
    "Name": "Seneca Foods Class B"
  },
  {
    "Symbol": "SENS",
    "Name": "Senseonics Holdings Inc."
  },
  {
    "Symbol": "SERA",
    "Name": "Sera Prognostics Inc. "
  },
  {
    "Symbol": "SES",
    "Name": "SES AI Corporation "
  },
  {
    "Symbol": "SESN",
    "Name": "Sesen Bio Inc."
  },
  {
    "Symbol": "SEV",
    "Name": "Sono Group N.V."
  },
  {
    "Symbol": "SEVN",
    "Name": "Seven Hills Realty Trust"
  },
  {
    "Symbol": "SF",
    "Name": "Stifel Financial Corporation"
  },
  {
    "Symbol": "SFBC",
    "Name": "Sound Financial Bancorp Inc."
  },
  {
    "Symbol": "SFBS",
    "Name": "ServisFirst Bancshares Inc."
  },
  {
    "Symbol": "SFE",
    "Name": "Safeguard Scientifics Inc. New"
  },
  {
    "Symbol": "SFIX",
    "Name": "Stitch Fix Inc. "
  },
  {
    "Symbol": "SFL",
    "Name": "SFL Corporation Ltd"
  },
  {
    "Symbol": "SFM",
    "Name": "Sprouts Farmers Market Inc."
  },
  {
    "Symbol": "SFNC",
    "Name": "Simmons First National Corporation "
  },
  {
    "Symbol": "SFST",
    "Name": "Southern First Bancshares Inc."
  },
  {
    "Symbol": "SFT",
    "Name": "Shift Technologies Inc. "
  },
  {
    "Symbol": "SG",
    "Name": "Sweetgreen Inc. "
  },
  {
    "Symbol": "SGA",
    "Name": "Saga Communications Inc.   (FL)"
  },
  {
    "Symbol": "SGBX",
    "Name": "SG Blocks Inc."
  },
  {
    "Symbol": "SGC",
    "Name": "Superior Group of Companies Inc."
  },
  {
    "Symbol": "SGEN",
    "Name": "Seagen Inc."
  },
  {
    "Symbol": "SGFY",
    "Name": "Signify Health Inc. "
  },
  {
    "Symbol": "SGH",
    "Name": "SMART Global Holdings Inc."
  },
  {
    "Symbol": "SGHC",
    "Name": "Super Group (SGHC) Limited"
  },
  {
    "Symbol": "SGHL",
    "Name": "Signal Hill Acquisition "
  },
  {
    "Symbol": "SGHLU",
    "Name": "Signal Hill Acquisition Unit"
  },
  {
    "Symbol": "SGHT",
    "Name": "Sight Sciences Inc."
  },
  {
    "Symbol": "SGLB",
    "Name": "Sigma Labs Inc."
  },
  {
    "Symbol": "SGLY",
    "Name": "Singularity Future Technology Ltd."
  },
  {
    "Symbol": "SGMA",
    "Name": "SigmaTron International Inc."
  },
  {
    "Symbol": "SGML",
    "Name": "Sigma Lithium Corporation"
  },
  {
    "Symbol": "SGMO",
    "Name": "Sangamo Therapeutics Inc."
  },
  {
    "Symbol": "SGMS",
    "Name": "Scientific Games Corp"
  },
  {
    "Symbol": "SGRP",
    "Name": "SPAR Group Inc."
  },
  {
    "Symbol": "SGRY",
    "Name": "Surgery Partners Inc."
  },
  {
    "Symbol": "SGTX",
    "Name": "Sigilon Therapeutics Inc."
  },
  {
    "Symbol": "SGU",
    "Name": "Star Group L.P."
  },
  {
    "Symbol": "SHAC",
    "Name": "SCP & CO Healthcare Acquisition Company "
  },
  {
    "Symbol": "SHACU",
    "Name": "SCP & CO Healthcare Acquisition Company Unit"
  },
  {
    "Symbol": "SHAK",
    "Name": "Shake Shack Inc. "
  },
  {
    "Symbol": "SHAP",
    "Name": "Spree Acquisition 1 Limited "
  },
  {
    "Symbol": "SHBI",
    "Name": "Shore Bancshares Inc"
  },
  {
    "Symbol": "SHC",
    "Name": "Sotera Health Company"
  },
  {
    "Symbol": "SHCA",
    "Name": "Spindletop Health Acquisition "
  },
  {
    "Symbol": "SHCAU",
    "Name": "Spindletop Health Acquisition Unit"
  },
  {
    "Symbol": "SHCR",
    "Name": "Sharecare Inc. "
  },
  {
    "Symbol": "SHEN",
    "Name": "Shenandoah Telecommunications Co"
  },
  {
    "Symbol": "SHI",
    "Name": "SINOPEC Shangai Petrochemical Company Ltd."
  },
  {
    "Symbol": "SHIP",
    "Name": "Seanergy Maritime Holdings Corp"
  },
  {
    "Symbol": "SHLS",
    "Name": "Shoals Technologies Group Inc. "
  },
  {
    "Symbol": "SHLX",
    "Name": "Shell Midstream Partners L.P. Common Units representing Limited Partner Interests"
  },
  {
    "Symbol": "SHO",
    "Name": "Sunstone Hotel Investors Inc. Sunstone Hotel Investors Inc."
  },
  {
    "Symbol": "SHOO",
    "Name": "Steven Madden Ltd."
  },
  {
    "Symbol": "SHOP",
    "Name": "Shopify Inc.  Subordinate Voting Shares"
  },
  {
    "Symbol": "SHPW",
    "Name": "Shapeways Holdings Inc."
  },
  {
    "Symbol": "SHQA",
    "Name": "Shelter Acquisition Corporation I "
  },
  {
    "Symbol": "SHQAU",
    "Name": "Shelter Acquisition Corporation I Units"
  },
  {
    "Symbol": "SHUAU",
    "Name": "SHUAA Partners Acquisition Corp I Unit"
  },
  {
    "Symbol": "SHW",
    "Name": "Sherwin-Williams Company (The)"
  },
  {
    "Symbol": "SHYF",
    "Name": "The Shyft Group Inc."
  },
  {
    "Symbol": "SI",
    "Name": "Silvergate Capital Corporation "
  },
  {
    "Symbol": "SIBN",
    "Name": "SI-BONE Inc."
  },
  {
    "Symbol": "SID",
    "Name": "Companhia Siderurgica Nacional S.A."
  },
  {
    "Symbol": "SIDU",
    "Name": "Sidus Space Inc. "
  },
  {
    "Symbol": "SIEB",
    "Name": "Siebert Financial"
  },
  {
    "Symbol": "SIEN",
    "Name": "Sientra Inc."
  },
  {
    "Symbol": "SIER",
    "Name": "Sierra Lake Acquisition "
  },
  {
    "Symbol": "SIF",
    "Name": "SIFCO Industries Inc."
  },
  {
    "Symbol": "SIG",
    "Name": "Signet Jewelers Limited"
  },
  {
    "Symbol": "SIGA",
    "Name": "SIGA Technologies Inc."
  },
  {
    "Symbol": "SIGI",
    "Name": "Selective Insurance Group Inc."
  },
  {
    "Symbol": "SILC",
    "Name": "Silicom Ltd"
  },
  {
    "Symbol": "SILK",
    "Name": "Silk Road Medical Inc."
  },
  {
    "Symbol": "SILV",
    "Name": "SilverCrest Metals Inc."
  },
  {
    "Symbol": "SINT",
    "Name": "SiNtx Technologies Inc."
  },
  {
    "Symbol": "SIOX",
    "Name": "Sio Gene Therapies Inc."
  },
  {
    "Symbol": "SIRE",
    "Name": "Sisecam Resources LP Common Units representing limited partner interests"
  },
  {
    "Symbol": "SIRI",
    "Name": "Sirius XM Holdings Inc."
  },
  {
    "Symbol": "SISI",
    "Name": "Shineco Inc."
  },
  {
    "Symbol": "SITC",
    "Name": "SITE Centers"
  },
  {
    "Symbol": "SITE",
    "Name": "SiteOne Landscape Supply Inc."
  },
  {
    "Symbol": "SITM",
    "Name": "SiTime Corporation"
  },
  {
    "Symbol": "SIVB",
    "Name": "SVB Financial Group"
  },
  {
    "Symbol": "SIX",
    "Name": "Six Flags Entertainment Corporation New"
  },
  {
    "Symbol": "SJ",
    "Name": "Scienjoy Holding Corporation "
  },
  {
    "Symbol": "SJI",
    "Name": "South Jersey Industries Inc."
  },
  {
    "Symbol": "SJIV",
    "Name": "South Jersey Industries Inc. Corporate Units"
  },
  {
    "Symbol": "SJM",
    "Name": "J.M. Smucker Company (The) New"
  },
  {
    "Symbol": "SJR",
    "Name": "Shaw Communications Inc."
  },
  {
    "Symbol": "SJT",
    "Name": "San Juan Basin Royalty Trust"
  },
  {
    "Symbol": "SJW",
    "Name": "SJW Group  (DE)"
  },
  {
    "Symbol": "SKE",
    "Name": "Skeena Resources Limited"
  },
  {
    "Symbol": "SKIL",
    "Name": "Skillsoft "
  },
  {
    "Symbol": "SKIN",
    "Name": "The Beauty Health Company "
  },
  {
    "Symbol": "SKLZ",
    "Name": "Skillz Inc. "
  },
  {
    "Symbol": "SKM",
    "Name": "SK Telecom Co. Ltd."
  },
  {
    "Symbol": "SKT",
    "Name": "Tanger Factory Outlet Centers Inc."
  },
  {
    "Symbol": "SKX",
    "Name": "Skechers U.S.A. Inc."
  },
  {
    "Symbol": "SKY",
    "Name": "Skyline Champion Corporation"
  },
  {
    "Symbol": "SKYA",
    "Name": "Skydeck Acquisition "
  },
  {
    "Symbol": "SKYAU",
    "Name": "Skydeck Acquisition Units"
  },
  {
    "Symbol": "SKYH",
    "Name": "Sky Harbour Group Corporation "
  },
  {
    "Symbol": "SKYT",
    "Name": "SkyWater Technology Inc."
  },
  {
    "Symbol": "SKYW",
    "Name": "SkyWest Inc."
  },
  {
    "Symbol": "SKYX",
    "Name": "SQL Technologies"
  },
  {
    "Symbol": "SLAB",
    "Name": "Silicon Laboratories Inc."
  },
  {
    "Symbol": "SLAC",
    "Name": "Social Leverage Acquisition Corp I "
  },
  {
    "Symbol": "SLAM",
    "Name": "Slam  Ordinary Share"
  },
  {
    "Symbol": "SLAMU",
    "Name": "Slam Unit"
  },
  {
    "Symbol": "SLAMW",
    "Name": "Slam warrant"
  },
  {
    "Symbol": "SLB",
    "Name": "Schlumberger N.V."
  },
  {
    "Symbol": "SLCA",
    "Name": "U.S. Silica Holdings Inc."
  },
  {
    "Symbol": "SLCR",
    "Name": "Silver Crest Acquisition Corporation  Ordinary Share"
  },
  {
    "Symbol": "SLDB",
    "Name": "Solid Biosciences Inc."
  },
  {
    "Symbol": "SLDP",
    "Name": "Solid Power Inc. "
  },
  {
    "Symbol": "SLF",
    "Name": "Sun Life Financial Inc."
  },
  {
    "Symbol": "SLG",
    "Name": "SL Green Realty Corp"
  },
  {
    "Symbol": "SLGC",
    "Name": "SomaLogic Inc. "
  },
  {
    "Symbol": "SLGG",
    "Name": "Super League Gaming Inc."
  },
  {
    "Symbol": "SLGL",
    "Name": "Sol-Gel Technologies Ltd."
  },
  {
    "Symbol": "SLGN",
    "Name": "Silgan Holdings Inc."
  },
  {
    "Symbol": "SLHG",
    "Name": "Skylight Health Group Inc."
  },
  {
    "Symbol": "SLI",
    "Name": "Standard Lithium Ltd."
  },
  {
    "Symbol": "SLM",
    "Name": "SLM Corporation"
  },
  {
    "Symbol": "SLN",
    "Name": "Silence Therapeutics Plc American Depository Share"
  },
  {
    "Symbol": "SLNG",
    "Name": "Stabilis Solutions Inc."
  },
  {
    "Symbol": "SLNH",
    "Name": "Soluna Holdings Inc."
  },
  {
    "Symbol": "SLNO",
    "Name": "Soleno Therapeutics Inc."
  },
  {
    "Symbol": "SLP",
    "Name": "Simulations Plus Inc."
  },
  {
    "Symbol": "SLQT",
    "Name": "SelectQuote Inc."
  },
  {
    "Symbol": "SLRC",
    "Name": "SLR Investment"
  },
  {
    "Symbol": "SLRX",
    "Name": "Salarius Pharmaceuticals Inc."
  },
  {
    "Symbol": "SLS",
    "Name": "SELLAS Life Sciences Group Inc."
  },
  {
    "Symbol": "SLVM",
    "Name": "Sylvamo Corporation"
  },
  {
    "Symbol": "SLVR",
    "Name": "SilverSPAC Inc.  Ordinary Share"
  },
  {
    "Symbol": "SLVRU",
    "Name": "SilverSPAC Inc. Unit"
  },
  {
    "Symbol": "SM",
    "Name": "SM Energy Company"
  },
  {
    "Symbol": "SMAP",
    "Name": "SportsMap Tech Acquisition"
  },
  {
    "Symbol": "SMAR",
    "Name": "Smartsheet Inc. "
  },
  {
    "Symbol": "SMBC",
    "Name": "Southern Missouri Bancorp Inc."
  },
  {
    "Symbol": "SMBK",
    "Name": "SmartFinancial Inc."
  },
  {
    "Symbol": "SMCI",
    "Name": "Super Micro Computer Inc."
  },
  {
    "Symbol": "SMED",
    "Name": "Sharps Compliance"
  },
  {
    "Symbol": "SMFL",
    "Name": "Smart for Life Inc."
  },
  {
    "Symbol": "SMFR",
    "Name": "Sema4 Holdings "
  },
  {
    "Symbol": "SMG",
    "Name": "Scotts Miracle-Gro Company (The)"
  },
  {
    "Symbol": "SMHI",
    "Name": "SEACOR Marine Holdings Inc."
  },
  {
    "Symbol": "SMID",
    "Name": "Smith-Midland Corporation"
  },
  {
    "Symbol": "SMIH",
    "Name": "Summit Healthcare Acquisition  Ordinary Share"
  },
  {
    "Symbol": "SMIHU",
    "Name": "Summit Healthcare Acquisition Units"
  },
  {
    "Symbol": "SMIT",
    "Name": "Schmitt Industries Inc."
  },
  {
    "Symbol": "SMLP",
    "Name": "Summit Midstream Partners LP Common Units Representing Limited Partner Interests"
  },
  {
    "Symbol": "SMLR",
    "Name": "Semler Scientific Inc."
  },
  {
    "Symbol": "SMMF",
    "Name": "Summit Financial Group Inc."
  },
  {
    "Symbol": "SMMT",
    "Name": "Summit Therapeutics Inc."
  },
  {
    "Symbol": "SMP",
    "Name": "Standard Motor Products Inc."
  },
  {
    "Symbol": "SMPL",
    "Name": "The Simply Good Foods Company"
  },
  {
    "Symbol": "SMRT",
    "Name": "SmartRent Inc. "
  },
  {
    "Symbol": "SMSI",
    "Name": "Smith Micro Software Inc."
  },
  {
    "Symbol": "SMTC",
    "Name": "Semtech Corporation"
  },
  {
    "Symbol": "SMTI",
    "Name": "Sanara MedTech Inc."
  },
  {
    "Symbol": "SMTS",
    "Name": "Sierra Metals Inc."
  },
  {
    "Symbol": "SMWB",
    "Name": "Similarweb Ltd."
  },
  {
    "Symbol": "SNA",
    "Name": "Snap-On Incorporated"
  },
  {
    "Symbol": "SNAP",
    "Name": "Snap Inc. "
  },
  {
    "Symbol": "SNAX",
    "Name": "Stryve Foods Inc. "
  },
  {
    "Symbol": "SNBR",
    "Name": "Sleep Number Corporation"
  },
  {
    "Symbol": "SNCE",
    "Name": "Science 37 Holdings Inc."
  },
  {
    "Symbol": "SNCR",
    "Name": "Synchronoss Technologies Inc."
  },
  {
    "Symbol": "SNCY",
    "Name": "Sun Country Airlines Holdings Inc."
  },
  {
    "Symbol": "SND",
    "Name": "Smart Sand Inc."
  },
  {
    "Symbol": "SNDA",
    "Name": "Sonida Senior Living Inc."
  },
  {
    "Symbol": "SNDL",
    "Name": "Sundial Growers Inc."
  },
  {
    "Symbol": "SNDR",
    "Name": "Schneider National Inc."
  },
  {
    "Symbol": "SNDX",
    "Name": "Syndax Pharmaceuticals Inc."
  },
  {
    "Symbol": "SNES",
    "Name": "SenesTech Inc."
  },
  {
    "Symbol": "SNEX",
    "Name": "StoneX Group Inc."
  },
  {
    "Symbol": "SNFCA",
    "Name": "Security National Financial Corporation "
  },
  {
    "Symbol": "SNGX",
    "Name": "Soligenix Inc."
  },
  {
    "Symbol": "SNMP",
    "Name": "Evolve Transition Infrastructure LP"
  },
  {
    "Symbol": "SNN",
    "Name": "Smith & Nephew SNATS Inc."
  },
  {
    "Symbol": "SNOA",
    "Name": "Sonoma Pharmaceuticals Inc."
  },
  {
    "Symbol": "SNOW",
    "Name": "Snowflake Inc. "
  },
  {
    "Symbol": "SNP",
    "Name": "China Petroleum & Chemical Corporation"
  },
  {
    "Symbol": "SNPO",
    "Name": "Snap One Holdings"
  },
  {
    "Symbol": "SNPS",
    "Name": "Synopsys Inc."
  },
  {
    "Symbol": "SNPX",
    "Name": "Synaptogenix Inc."
  },
  {
    "Symbol": "SNRH",
    "Name": "Senior Connect Acquisition I "
  },
  {
    "Symbol": "SNRHU",
    "Name": "Senior Connect Acquisition I Unit"
  },
  {
    "Symbol": "SNSE",
    "Name": "Sensei Biotherapeutics Inc."
  },
  {
    "Symbol": "SNT",
    "Name": "Senstar Technologies Ltd."
  },
  {
    "Symbol": "SNTG",
    "Name": "Sentage Holdings Inc."
  },
  {
    "Symbol": "SNV",
    "Name": "Synovus Financial"
  },
  {
    "Symbol": "SNX",
    "Name": "TD SYNNEX Corporation"
  },
  {
    "Symbol": "SNY",
    "Name": "Sanofi ADS"
  },
  {
    "Symbol": "SO",
    "Name": "Southern Company (The)"
  },
  {
    "Symbol": "SOFI",
    "Name": "SoFi Technologies Inc."
  },
  {
    "Symbol": "SOFO",
    "Name": "Sonic Foundry Inc."
  },
  {
    "Symbol": "SOHO",
    "Name": "Sotherly Hotels Inc."
  },
  {
    "Symbol": "SOI",
    "Name": "Solaris Oilfield Infrastructure Inc. "
  },
  {
    "Symbol": "SOL",
    "Name": "Renesola Ltd. American Depsitary Shares (Each representing 10 shares)"
  },
  {
    "Symbol": "SOLN",
    "Name": "Southern Company (The) 2019 Series A Corporate Units"
  },
  {
    "Symbol": "SOLO",
    "Name": "Electrameccanica Vehicles Ltd."
  },
  {
    "Symbol": "SON",
    "Name": "Sonoco Products Company"
  },
  {
    "Symbol": "SOND",
    "Name": "Sonder Holdings Inc. "
  },
  {
    "Symbol": "SONM",
    "Name": "Sonim Technologies Inc."
  },
  {
    "Symbol": "SONN",
    "Name": "Sonnet BioTherapeutics Holdings Inc."
  },
  {
    "Symbol": "SONO",
    "Name": "Sonos Inc."
  },
  {
    "Symbol": "SONX",
    "Name": "Sonendo Inc."
  },
  {
    "Symbol": "SOPA",
    "Name": "Society Pass Incorporated"
  },
  {
    "Symbol": "SOPH",
    "Name": "SOPHiA GENETICS SA"
  },
  {
    "Symbol": "SOR",
    "Name": "Source Capital Inc."
  },
  {
    "Symbol": "SOTK",
    "Name": "Sono-Tek Corporation"
  },
  {
    "Symbol": "SOVO",
    "Name": "Sovos Brands Inc."
  },
  {
    "Symbol": "SP",
    "Name": "SP Plus Corporation"
  },
  {
    "Symbol": "SPB",
    "Name": "Spectrum Brands Holdings Inc."
  },
  {
    "Symbol": "SPCB",
    "Name": "SuperCom Ltd.  (Israel)"
  },
  {
    "Symbol": "SPCE",
    "Name": "Virgin Galactic Holdings Inc."
  },
  {
    "Symbol": "SPCMU",
    "Name": "Sound Point Acquisition Corp I Ltd Unit"
  },
  {
    "Symbol": "SPE",
    "Name": "Special Opportunities Fund Inc"
  },
  {
    "Symbol": "SPFI",
    "Name": "South Plains Financial Inc."
  },
  {
    "Symbol": "SPG",
    "Name": "Simon Property Group Inc."
  },
  {
    "Symbol": "SPGI",
    "Name": "S&P Global Inc."
  },
  {
    "Symbol": "SPGS",
    "Name": "Simon Property Group Acquisition Holdings Inc. "
  },
  {
    "Symbol": "SPH",
    "Name": "Suburban Propane Partners L.P."
  },
  {
    "Symbol": "SPI",
    "Name": "SPI Energy Co. Ltd."
  },
  {
    "Symbol": "SPIR",
    "Name": "Spire Global Inc. "
  },
  {
    "Symbol": "SPK",
    "Name": "SPK Acquisition"
  },
  {
    "Symbol": "SPKAR",
    "Name": "SPK Acquisition Right"
  },
  {
    "Symbol": "SPKAU",
    "Name": "SPK Acquisition Corp Unit"
  },
  {
    "Symbol": "SPLK",
    "Name": "Splunk Inc."
  },
  {
    "Symbol": "SPLP",
    "Name": "Steel Partners Holdings LP LTD PARTNERSHIP UNIT"
  },
  {
    "Symbol": "SPNE",
    "Name": "SeaSpine Holdings Corporation"
  },
  {
    "Symbol": "SPNS",
    "Name": "Sapiens International Corporation N.V.  (Cayman Islands)"
  },
  {
    "Symbol": "SPNT",
    "Name": "SiriusPoint Ltd."
  },
  {
    "Symbol": "SPOK",
    "Name": "Spok Holdings Inc."
  },
  {
    "Symbol": "SPOT",
    "Name": "Spotify Technology S.A."
  },
  {
    "Symbol": "SPPI",
    "Name": "Spectrum Pharmaceuticals Inc."
  },
  {
    "Symbol": "SPR",
    "Name": "Spirit Aerosystems Holdings Inc."
  },
  {
    "Symbol": "SPRB",
    "Name": "Spruce Biosciences Inc."
  },
  {
    "Symbol": "SPRC",
    "Name": "SciSparc Ltd."
  },
  {
    "Symbol": "SPRO",
    "Name": "Spero Therapeutics Inc."
  },
  {
    "Symbol": "SPSC",
    "Name": "SPS Commerce Inc."
  },
  {
    "Symbol": "SPT",
    "Name": "Sprout Social Inc "
  },
  {
    "Symbol": "SPTK",
    "Name": "SportsTek Acquisition "
  },
  {
    "Symbol": "SPTN",
    "Name": "SpartanNash Company"
  },
  {
    "Symbol": "SPWH",
    "Name": "Sportsman's Warehouse Holdings Inc."
  },
  {
    "Symbol": "SPWR",
    "Name": "SunPower Corporation"
  },
  {
    "Symbol": "SPXC",
    "Name": "SPX Corporation"
  },
  {
    "Symbol": "SPXX",
    "Name": "Nuveen S&P 500 Dynamic Overwrite Fund"
  },
  {
    "Symbol": "SQ",
    "Name": "Block Inc. "
  },
  {
    "Symbol": "SQFT",
    "Name": "Presidio Property Trust Inc. "
  },
  {
    "Symbol": "SQL",
    "Name": "SeqLL Inc."
  },
  {
    "Symbol": "SQM",
    "Name": "Sociedad Quimica y Minera S.A."
  },
  {
    "Symbol": "SQSP",
    "Name": "Squarespace Inc. "
  },
  {
    "Symbol": "SQZ",
    "Name": "SQZ Biotechnologies Company"
  },
  {
    "Symbol": "SR",
    "Name": "Spire Inc."
  },
  {
    "Symbol": "SRAD",
    "Name": "Sportradar Group AG "
  },
  {
    "Symbol": "SRAX",
    "Name": "SRAX Inc. "
  },
  {
    "Symbol": "SRC",
    "Name": "Spirit Realty Capital Inc."
  },
  {
    "Symbol": "SRCE",
    "Name": "1st Source Corporation"
  },
  {
    "Symbol": "SRCL",
    "Name": "Stericycle Inc."
  },
  {
    "Symbol": "SRDX",
    "Name": "Surmodics Inc."
  },
  {
    "Symbol": "SRE",
    "Name": "DBA Sempra"
  },
  {
    "Symbol": "SREV",
    "Name": "ServiceSource International Inc."
  },
  {
    "Symbol": "SRG",
    "Name": "Seritage Growth Properties "
  },
  {
    "Symbol": "SRGA",
    "Name": "Surgalign Holdings Inc."
  },
  {
    "Symbol": "SRI",
    "Name": "Stoneridge Inc."
  },
  {
    "Symbol": "SRL",
    "Name": "Scully Royalty Ltd."
  },
  {
    "Symbol": "SRLP",
    "Name": "Sprague Resources LP Common Units representing Limited Partner Interests"
  },
  {
    "Symbol": "SRNE",
    "Name": "Sorrento Therapeutics Inc."
  },
  {
    "Symbol": "SRPT",
    "Name": "Sarepta Therapeutics Inc.  (DE)"
  },
  {
    "Symbol": "SRRA",
    "Name": "Sierra Oncology Inc."
  },
  {
    "Symbol": "SRRK",
    "Name": "Scholar Rock Holding Corporation"
  },
  {
    "Symbol": "SRSAU",
    "Name": "Sarissa Capital Acquisition Unit"
  },
  {
    "Symbol": "SRT",
    "Name": "StarTek Inc."
  },
  {
    "Symbol": "SRTS",
    "Name": "Sensus Healthcare Inc."
  },
  {
    "Symbol": "SRV",
    "Name": "Cushing MLP & Infrastructure Total Return Fund"
  },
  {
    "Symbol": "SRZN",
    "Name": "Surrozen Inc."
  },
  {
    "Symbol": "SSAA",
    "Name": "Science Strategic Acquisition Alpha "
  },
  {
    "Symbol": "SSAAU",
    "Name": "Science Strategic Acquisition Alpha Unit"
  },
  {
    "Symbol": "SSB",
    "Name": "SouthState Corporation"
  },
  {
    "Symbol": "SSBI",
    "Name": "Summit State Bank"
  },
  {
    "Symbol": "SSBK",
    "Name": "Southern States Bancshares Inc."
  },
  {
    "Symbol": "SSD",
    "Name": "Simpson Manufacturing Company Inc."
  },
  {
    "Symbol": "SSIC",
    "Name": "Silver Spike Investment"
  },
  {
    "Symbol": "SSKN",
    "Name": "Strata Skin Sciences Inc."
  },
  {
    "Symbol": "SSNC",
    "Name": "SS&C Technologies Holdings Inc."
  },
  {
    "Symbol": "SSNT",
    "Name": "SilverSun Technologies Inc."
  },
  {
    "Symbol": "SSP",
    "Name": "E.W. Scripps Company (The) "
  },
  {
    "Symbol": "SSRM",
    "Name": "SSR Mining Inc."
  },
  {
    "Symbol": "SSSS",
    "Name": "SuRo Capital"
  },
  {
    "Symbol": "SST",
    "Name": "System1 Inc. "
  },
  {
    "Symbol": "SSTI",
    "Name": "ShotSpotter Inc."
  },
  {
    "Symbol": "SSTK",
    "Name": "Shutterstock Inc."
  },
  {
    "Symbol": "SSU",
    "Name": "SIGNA Sports United N.V. Ordinary Share"
  },
  {
    "Symbol": "SSY",
    "Name": "SunLink Health Systems Inc."
  },
  {
    "Symbol": "SSYS",
    "Name": "Stratasys Ltd.  (Israel)"
  },
  {
    "Symbol": "ST",
    "Name": "Sensata Technologies Holding plc"
  },
  {
    "Symbol": "STAA",
    "Name": "STAAR Surgical Company"
  },
  {
    "Symbol": "STAB",
    "Name": "Statera Biopharma Inc."
  },
  {
    "Symbol": "STAF",
    "Name": "Staffing 360 Solutions Inc.  (DE)"
  },
  {
    "Symbol": "STAG",
    "Name": "Stag Industrial Inc."
  },
  {
    "Symbol": "STAR",
    "Name": "iStar Inc."
  },
  {
    "Symbol": "STBA",
    "Name": "S&T Bancorp Inc."
  },
  {
    "Symbol": "STC",
    "Name": "Stewart Information Services Corporation"
  },
  {
    "Symbol": "STCN",
    "Name": "Steel Connect Inc."
  },
  {
    "Symbol": "STE",
    "Name": "STERIS plc (Ireland)"
  },
  {
    "Symbol": "STEM",
    "Name": "Stem Inc. "
  },
  {
    "Symbol": "STEP",
    "Name": "StepStone Group Inc. "
  },
  {
    "Symbol": "STER",
    "Name": "Sterling Check"
  },
  {
    "Symbol": "STEW",
    "Name": "SRH Total Return Fund Inc."
  },
  {
    "Symbol": "STGW",
    "Name": "Stagwell Inc. "
  },
  {
    "Symbol": "STIM",
    "Name": "Neuronetics Inc."
  },
  {
    "Symbol": "STK",
    "Name": "Columbia Seligman Premium Technology Growth Fund Inc"
  },
  {
    "Symbol": "STKL",
    "Name": "SunOpta Inc."
  },
  {
    "Symbol": "STKS",
    "Name": "The ONE Group Hospitality Inc."
  },
  {
    "Symbol": "STLA",
    "Name": "Stellantis N.V."
  },
  {
    "Symbol": "STLD",
    "Name": "Steel Dynamics Inc."
  },
  {
    "Symbol": "STM",
    "Name": "STMicroelectronics N.V."
  },
  {
    "Symbol": "STN",
    "Name": "Stantec Inc"
  },
  {
    "Symbol": "STNE",
    "Name": "StoneCo Ltd. "
  },
  {
    "Symbol": "STNG",
    "Name": "Scorpio Tankers Inc."
  },
  {
    "Symbol": "STOK",
    "Name": "Stoke Therapeutics Inc."
  },
  {
    "Symbol": "STON",
    "Name": "StoneMor Inc."
  },
  {
    "Symbol": "STOR",
    "Name": "STORE Capital Corporation"
  },
  {
    "Symbol": "STRA",
    "Name": "Strategic Education Inc."
  },
  {
    "Symbol": "STRC",
    "Name": "Sarcos Technology and Robotics Corporation"
  },
  {
    "Symbol": "STRL",
    "Name": "Sterling Construction Company Inc"
  },
  {
    "Symbol": "STRM",
    "Name": "Streamline Health Solutions Inc."
  },
  {
    "Symbol": "STRN",
    "Name": "Stran & Company Inc."
  },
  {
    "Symbol": "STRO",
    "Name": "Sutro Biopharma Inc."
  },
  {
    "Symbol": "STRR",
    "Name": "Star Equity Holdings Inc."
  },
  {
    "Symbol": "STRRP",
    "Name": "Star Equity Holdings Inc. Series A Cumulative Perpetual Preferred Stock"
  },
  {
    "Symbol": "STRS",
    "Name": "Stratus Properties Inc."
  },
  {
    "Symbol": "STRT",
    "Name": "STRATTEC SECURITY CORPORATION"
  },
  {
    "Symbol": "STRY",
    "Name": "Starry Group Holdings Inc. "
  },
  {
    "Symbol": "STSA",
    "Name": "Satsuma Pharmaceuticals Inc."
  },
  {
    "Symbol": "STSS",
    "Name": "Sharps Technology Inc."
  },
  {
    "Symbol": "STT",
    "Name": "State Street Corporation"
  },
  {
    "Symbol": "STTK",
    "Name": "Shattuck Labs Inc."
  },
  {
    "Symbol": "STVN",
    "Name": "Stevanato Group S.p.A."
  },
  {
    "Symbol": "STWD",
    "Name": "STARWOOD PROPERTY TRUST INC. Starwood Property Trust Inc."
  },
  {
    "Symbol": "STX",
    "Name": "Seagate Technology Holdings PLC  (Ireland)"
  },
  {
    "Symbol": "STXS",
    "Name": "Stereotaxis Inc."
  },
  {
    "Symbol": "STZ",
    "Name": "Constellation Brands Inc."
  },
  {
    "Symbol": "STZ/B",
    "Name": "Constellation Brands Inc"
  },
  {
    "Symbol": "SU",
    "Name": "Suncor Energy  Inc."
  },
  {
    "Symbol": "SUI",
    "Name": "Sun Communities Inc."
  },
  {
    "Symbol": "SUM",
    "Name": "Summit Materials Inc. "
  },
  {
    "Symbol": "SUMO",
    "Name": "Sumo Logic Inc."
  },
  {
    "Symbol": "SUMR",
    "Name": "Summer Infant Inc."
  },
  {
    "Symbol": "SUN",
    "Name": "Sunoco LP Common Units representing limited partner interests"
  },
  {
    "Symbol": "SUNL",
    "Name": "Sunlight Financial Holdings Inc. "
  },
  {
    "Symbol": "SUNW",
    "Name": "Sunworks Inc."
  },
  {
    "Symbol": "SUP",
    "Name": "Superior Industries International Inc.  (DE)"
  },
  {
    "Symbol": "SUPN",
    "Name": "Supernus Pharmaceuticals Inc."
  },
  {
    "Symbol": "SURF",
    "Name": "Surface Oncology Inc."
  },
  {
    "Symbol": "SURG",
    "Name": "SurgePays Inc."
  },
  {
    "Symbol": "SV",
    "Name": "Spring Valley Acquisition  Ordinary Share"
  },
  {
    "Symbol": "SVC",
    "Name": "Service Properties Trust"
  },
  {
    "Symbol": "SVFA",
    "Name": "SVF Investment "
  },
  {
    "Symbol": "SVFAU",
    "Name": "SVF Investment Unit"
  },
  {
    "Symbol": "SVFB",
    "Name": "SVF Investment 2 "
  },
  {
    "Symbol": "SVFC",
    "Name": "SVF Investment 3 "
  },
  {
    "Symbol": "SVFD",
    "Name": "Save Foods Inc."
  },
  {
    "Symbol": "SVM",
    "Name": "Silvercorp Metals Inc."
  },
  {
    "Symbol": "SVNA",
    "Name": "7 Acquisition Corporation "
  },
  {
    "Symbol": "SVRA",
    "Name": "Savara Inc."
  },
  {
    "Symbol": "SVSVU",
    "Name": "Spring Valley Acquisition Unit"
  },
  {
    "Symbol": "SVT",
    "Name": "Servotronics Inc."
  },
  {
    "Symbol": "SVVC",
    "Name": "Firsthand Technology Value Fund Inc."
  },
  {
    "Symbol": "SWAV",
    "Name": "ShockWave Medical Inc."
  },
  {
    "Symbol": "SWBI",
    "Name": "Smith & Wesson Brands Inc."
  },
  {
    "Symbol": "SWCH",
    "Name": "Switch Inc. "
  },
  {
    "Symbol": "SWET",
    "Name": "Athlon Acquisition "
  },
  {
    "Symbol": "SWETU",
    "Name": "Athlon Acquisition Unit"
  },
  {
    "Symbol": "SWI",
    "Name": "SolarWinds Corporation"
  },
  {
    "Symbol": "SWIM",
    "Name": "Latham Group Inc."
  },
  {
    "Symbol": "SWIR",
    "Name": "Sierra Wireless Inc."
  },
  {
    "Symbol": "SWK",
    "Name": "Stanley Black & Decker Inc."
  },
  {
    "Symbol": "SWKH",
    "Name": "SWK Holdings Corporation"
  },
  {
    "Symbol": "SWKS",
    "Name": "Skyworks Solutions Inc."
  },
  {
    "Symbol": "SWM",
    "Name": "Schweitzer-Mauduit International Inc."
  },
  {
    "Symbol": "SWN",
    "Name": "Southwestern Energy Company"
  },
  {
    "Symbol": "SWSS",
    "Name": "Springwater Special Situations"
  },
  {
    "Symbol": "SWSSU",
    "Name": "Springwater Special Situations Unit"
  },
  {
    "Symbol": "SWT",
    "Name": "Stanley Black & Decker Inc. Corporate Unit"
  },
  {
    "Symbol": "SWTX",
    "Name": "SpringWorks Therapeutics Inc."
  },
  {
    "Symbol": "SWVL",
    "Name": "Swvl Holdings Corp "
  },
  {
    "Symbol": "SWX",
    "Name": "Southwest Gas Holdings Inc.  (DE)"
  },
  {
    "Symbol": "SWZ",
    "Name": "Swiss Helvetia Fund Inc. (The)"
  },
  {
    "Symbol": "SXC",
    "Name": "SunCoke Energy Inc."
  },
  {
    "Symbol": "SXI",
    "Name": "Standex International Corporation"
  },
  {
    "Symbol": "SXT",
    "Name": "Sensient Technologies Corporation"
  },
  {
    "Symbol": "SXTC",
    "Name": "China SXT Pharmaceuticals Inc."
  },
  {
    "Symbol": "SY",
    "Name": "So-Young International Inc. American Depository Shares"
  },
  {
    "Symbol": "SYBT",
    "Name": "Stock Yards Bancorp Inc."
  },
  {
    "Symbol": "SYBX",
    "Name": "Synlogic Inc."
  },
  {
    "Symbol": "SYF",
    "Name": "Synchrony Financial"
  },
  {
    "Symbol": "SYK",
    "Name": "Stryker Corporation"
  },
  {
    "Symbol": "SYN",
    "Name": "Synthetic Biologics Inc."
  },
  {
    "Symbol": "SYNH",
    "Name": "Syneos Health Inc. "
  },
  {
    "Symbol": "SYNL",
    "Name": "Synalloy Corporation"
  },
  {
    "Symbol": "SYPR",
    "Name": "Sypris Solutions Inc."
  },
  {
    "Symbol": "SYRS",
    "Name": "Syros Pharmaceuticals Inc."
  },
  {
    "Symbol": "SYTA",
    "Name": "Siyata Mobile Inc."
  },
  {
    "Symbol": "SYY",
    "Name": "Sysco Corporation"
  },
  {
    "Symbol": "SZZL",
    "Name": "Sizzle Acquisition"
  },
  {
    "Symbol": "SZZLU",
    "Name": "Sizzle Acquisition Unit"
  },
  {
    "Symbol": "T",
    "Name": "AT&T Inc."
  },
  {
    "Symbol": "TA",
    "Name": "TravelCenters of America Inc."
  },
  {
    "Symbol": "TAC",
    "Name": "TransAlta Corporation"
  },
  {
    "Symbol": "TACA",
    "Name": "Trepont Acquisition Corp I "
  },
  {
    "Symbol": "TACT",
    "Name": "TransAct Technologies Incorporated"
  },
  {
    "Symbol": "TAIT",
    "Name": "Taitron Components Incorporated "
  },
  {
    "Symbol": "TALK",
    "Name": "Talkspace Inc."
  },
  {
    "Symbol": "TALO",
    "Name": "Talos Energy Inc."
  },
  {
    "Symbol": "TALS",
    "Name": "Talaris Therapeutics Inc."
  },
  {
    "Symbol": "TANH",
    "Name": "Tantech Holdings Ltd."
  },
  {
    "Symbol": "TAOP",
    "Name": "Taoping Inc."
  },
  {
    "Symbol": "TAP",
    "Name": "Molson Coors Beverage Company Class B"
  },
  {
    "Symbol": "TARA",
    "Name": "Protara Therapeutics Inc."
  },
  {
    "Symbol": "TARO",
    "Name": "Taro Pharmaceutical Industries Ltd."
  },
  {
    "Symbol": "TARS",
    "Name": "Tarsus Pharmaceuticals Inc."
  },
  {
    "Symbol": "TASK",
    "Name": "TaskUs Inc. "
  },
  {
    "Symbol": "TAST",
    "Name": "Carrols Restaurant Group Inc."
  },
  {
    "Symbol": "TATT",
    "Name": "TAT Technologies Ltd."
  },
  {
    "Symbol": "TAYD",
    "Name": "Taylor Devices Inc."
  },
  {
    "Symbol": "TBBK",
    "Name": "The Bancorp Inc"
  },
  {
    "Symbol": "TBI",
    "Name": "TrueBlue Inc."
  },
  {
    "Symbol": "TBK",
    "Name": "Triumph Bancorp Inc."
  },
  {
    "Symbol": "TBLA",
    "Name": "Taboola.com Ltd."
  },
  {
    "Symbol": "TBLD",
    "Name": "Thornburg Income Builder Opportunities Trust"
  },
  {
    "Symbol": "TBLT",
    "Name": "ToughBuilt Industries Inc."
  },
  {
    "Symbol": "TBNK",
    "Name": "Territorial Bancorp Inc."
  },
  {
    "Symbol": "TBPH",
    "Name": "Theravance Biopharma Inc."
  },
  {
    "Symbol": "TBSA",
    "Name": "TB SA Acquisition Corp  Ordinary Share"
  },
  {
    "Symbol": "TCAC",
    "Name": "Tuatara Capital Acquisition Corporation "
  },
  {
    "Symbol": "TCACU",
    "Name": "Tuatara Capital Acquisition Corporation Unit"
  },
  {
    "Symbol": "TCBC",
    "Name": "TC Bancshares Inc."
  },
  {
    "Symbol": "TCBI",
    "Name": "Texas Capital Bancshares Inc."
  },
  {
    "Symbol": "TCBK",
    "Name": "TriCo Bancshares"
  },
  {
    "Symbol": "TCBS",
    "Name": "Texas Community Bancshares Inc."
  },
  {
    "Symbol": "TCBX",
    "Name": "Third Coast Bancshares Inc."
  },
  {
    "Symbol": "TCDA",
    "Name": "Tricida Inc."
  },
  {
    "Symbol": "TCFC",
    "Name": "The Community Financial Corporation"
  },
  {
    "Symbol": "TCI",
    "Name": "Transcontinental Realty Investors Inc."
  },
  {
    "Symbol": "TCMD",
    "Name": "Tactile Systems Technology Inc."
  },
  {
    "Symbol": "TCN",
    "Name": "Tricon Residential Inc."
  },
  {
    "Symbol": "TCOA",
    "Name": "Trajectory Alpha Acquisition "
  },
  {
    "Symbol": "TCON",
    "Name": "TRACON Pharmaceuticals Inc."
  },
  {
    "Symbol": "TCPC",
    "Name": "BlackRock TCP Capital"
  },
  {
    "Symbol": "TCRR",
    "Name": "TCR2 Therapeutics Inc."
  },
  {
    "Symbol": "TCRT",
    "Name": "Alaunos Therapeutics Inc."
  },
  {
    "Symbol": "TCRX",
    "Name": "TScan Therapeutics Inc."
  },
  {
    "Symbol": "TCS",
    "Name": "Container Store (The)"
  },
  {
    "Symbol": "TCVA",
    "Name": "TCV Acquisition "
  },
  {
    "Symbol": "TCX",
    "Name": "Tucows Inc. "
  },
  {
    "Symbol": "TD",
    "Name": "Toronto Dominion Bank (The)"
  },
  {
    "Symbol": "TDC",
    "Name": "Teradata Corporation"
  },
  {
    "Symbol": "TDF",
    "Name": "Templeton Dragon Fund Inc."
  },
  {
    "Symbol": "TDG",
    "Name": "Transdigm Group Incorporated"
  },
  {
    "Symbol": "TDOC",
    "Name": "Teladoc Health Inc."
  },
  {
    "Symbol": "TDS",
    "Name": "Telephone and Data Systems Inc."
  },
  {
    "Symbol": "TDUP",
    "Name": "ThredUp Inc. "
  },
  {
    "Symbol": "TDW",
    "Name": "Tidewater Inc."
  },
  {
    "Symbol": "TDY",
    "Name": "Teledyne Technologies Incorporated"
  },
  {
    "Symbol": "TEAF",
    "Name": "Ecofin Sustainable and Social Impact Term Fund"
  },
  {
    "Symbol": "TEAM",
    "Name": "Atlassian Corporation Plc "
  },
  {
    "Symbol": "TECH",
    "Name": "Bio-Techne Corp"
  },
  {
    "Symbol": "TECK",
    "Name": "Teck Resources Ltd"
  },
  {
    "Symbol": "TEF",
    "Name": "Telefonica SA"
  },
  {
    "Symbol": "TEI",
    "Name": "Templeton Emerging Markets Income Fund Inc."
  },
  {
    "Symbol": "TEKK",
    "Name": "Tekkorp Digital Acquisition "
  },
  {
    "Symbol": "TEKKU",
    "Name": "Tekkorp Digital Acquisition Unit"
  },
  {
    "Symbol": "TEL",
    "Name": "TE Connectivity Ltd. New Switzerland Registered Shares"
  },
  {
    "Symbol": "TELA",
    "Name": "TELA Bio Inc."
  },
  {
    "Symbol": "TELL",
    "Name": "Tellurian Inc."
  },
  {
    "Symbol": "TEN",
    "Name": "Tenneco Inc.  Voting"
  },
  {
    "Symbol": "TENB",
    "Name": "Tenable Holdings Inc."
  },
  {
    "Symbol": "TENX",
    "Name": "Tenax Therapeutics Inc."
  },
  {
    "Symbol": "TEO",
    "Name": "Telecom Argentina SA"
  },
  {
    "Symbol": "TER",
    "Name": "Teradyne Inc."
  },
  {
    "Symbol": "TERN",
    "Name": "Terns Pharmaceuticals Inc."
  },
  {
    "Symbol": "TESS",
    "Name": "TESSCO Technologies Incorporated"
  },
  {
    "Symbol": "TETC",
    "Name": "Tech and Energy Transition Corporation "
  },
  {
    "Symbol": "TETCU",
    "Name": "Tech and Energy Transition Corporation Unit"
  },
  {
    "Symbol": "TETE",
    "Name": "Technology & Telecommunication Acquisition Corporation "
  },
  {
    "Symbol": "TETEU",
    "Name": "Technology & Telecommunication Acquisition Corporation Unit"
  },
  {
    "Symbol": "TEX",
    "Name": "Terex Corporation"
  },
  {
    "Symbol": "TFC",
    "Name": "Truist Financial Corporation"
  },
  {
    "Symbol": "TFFP",
    "Name": "TFF Pharmaceuticals Inc."
  },
  {
    "Symbol": "TFSL",
    "Name": "TFS Financial Corporation"
  },
  {
    "Symbol": "TFX",
    "Name": "Teleflex Incorporated"
  },
  {
    "Symbol": "TG",
    "Name": "Tredegar Corporation"
  },
  {
    "Symbol": "TGA",
    "Name": "TransGlobe Energy Corporation  (Canada)"
  },
  {
    "Symbol": "TGAA",
    "Name": "Target Global Acquisition I  Ordinary Share"
  },
  {
    "Symbol": "TGAAU",
    "Name": "Target Global Acquisition I Unit"
  },
  {
    "Symbol": "TGAN",
    "Name": "Transphorm Inc."
  },
  {
    "Symbol": "TGB",
    "Name": "Taseko Mines Ltd."
  },
  {
    "Symbol": "TGH",
    "Name": "Textainer Group Holdings Limited"
  },
  {
    "Symbol": "TGI",
    "Name": "Triumph Group Inc."
  },
  {
    "Symbol": "TGLS",
    "Name": "Tecnoglass Inc."
  },
  {
    "Symbol": "TGNA",
    "Name": "TEGNA Inc"
  },
  {
    "Symbol": "TGR",
    "Name": "Kimbell Tiger Acquisition Corporation "
  },
  {
    "Symbol": "TGS",
    "Name": "Transportadora de Gas del Sur SA TGS"
  },
  {
    "Symbol": "TGT",
    "Name": "Target Corporation"
  },
  {
    "Symbol": "TGTX",
    "Name": "TG Therapeutics Inc."
  },
  {
    "Symbol": "TGVC",
    "Name": "TG Venture Acquisition "
  },
  {
    "Symbol": "TGVCU",
    "Name": "TG Venture Acquisition Units"
  },
  {
    "Symbol": "TH",
    "Name": "Target Hospitality"
  },
  {
    "Symbol": "THAC",
    "Name": "Thrive Acquisition Corporation "
  },
  {
    "Symbol": "THACU",
    "Name": "Thrive Acquisition Corporation Unit"
  },
  {
    "Symbol": "THC",
    "Name": "Tenet Healthcare Corporation"
  },
  {
    "Symbol": "THCP",
    "Name": "Thunder Bridge Capital Partners IV Inc. "
  },
  {
    "Symbol": "THCPU",
    "Name": "Thunder Bridge Capital Partners IV Inc. Unit"
  },
  {
    "Symbol": "THFF",
    "Name": "First Financial Corporation Indiana"
  },
  {
    "Symbol": "THG",
    "Name": "Hanover Insurance Group Inc"
  },
  {
    "Symbol": "THM",
    "Name": "International Tower Hill Mines Ltd.  (Canada)"
  },
  {
    "Symbol": "THMO",
    "Name": "ThermoGenesis Holdings Inc."
  },
  {
    "Symbol": "THO",
    "Name": "Thor Industries Inc."
  },
  {
    "Symbol": "THR",
    "Name": "Thermon Group Holdings Inc."
  },
  {
    "Symbol": "THRM",
    "Name": "Gentherm Inc"
  },
  {
    "Symbol": "THRN",
    "Name": "Thorne Healthtech Inc."
  },
  {
    "Symbol": "THRX",
    "Name": "Theseus Pharmaceuticals Inc."
  },
  {
    "Symbol": "THRY",
    "Name": "Thryv Holdings Inc."
  },
  {
    "Symbol": "THS",
    "Name": "Treehouse Foods Inc."
  },
  {
    "Symbol": "THTX",
    "Name": "Theratechnologies Inc."
  },
  {
    "Symbol": "TIG",
    "Name": "Trean Insurance Group Inc."
  },
  {
    "Symbol": "TIGO",
    "Name": "Millicom International Cellular S.A."
  },
  {
    "Symbol": "TIL",
    "Name": "Instil Bio Inc."
  },
  {
    "Symbol": "TILE",
    "Name": "Interface Inc."
  },
  {
    "Symbol": "TINV",
    "Name": "Tiga Acquisition "
  },
  {
    "Symbol": "TIOA",
    "Name": "Tio Tech A  Ordinary Share"
  },
  {
    "Symbol": "TIOAU",
    "Name": "Tio Tech A Units"
  },
  {
    "Symbol": "TIPT",
    "Name": "Tiptree Inc."
  },
  {
    "Symbol": "TIRX",
    "Name": "TIAN RUIXIANG Holdings Ltd "
  },
  {
    "Symbol": "TISI",
    "Name": "Team Inc."
  },
  {
    "Symbol": "TITN",
    "Name": "Titan Machinery Inc."
  },
  {
    "Symbol": "TIVC",
    "Name": "Tivic Health Systems Inc."
  },
  {
    "Symbol": "TIXT",
    "Name": "TELUS International (Cda) Inc. Subordinate Voting Shares"
  },
  {
    "Symbol": "TJX",
    "Name": "TJX Companies Inc. (The)"
  },
  {
    "Symbol": "TK",
    "Name": "Teekay Corporation"
  },
  {
    "Symbol": "TKAT",
    "Name": "Takung Art Co. Ltd."
  },
  {
    "Symbol": "TKC",
    "Name": "Turkcell Iletisim Hizmetleri AS"
  },
  {
    "Symbol": "TKNO",
    "Name": "Alpha Teknova Inc."
  },
  {
    "Symbol": "TKR",
    "Name": "Timken Company (The)"
  },
  {
    "Symbol": "TLGA",
    "Name": "TLG Acquisition One "
  },
  {
    "Symbol": "TLGY",
    "Name": "TLGY Acquisition Corporation  Ordinary Share"
  },
  {
    "Symbol": "TLGYU",
    "Name": "TLGY Acquisition Corporation Unit"
  },
  {
    "Symbol": "TLIS",
    "Name": "Talis Biomedical Corporation"
  },
  {
    "Symbol": "TLK",
    "Name": "PT Telekomunikasi Indonesia Tbk"
  },
  {
    "Symbol": "TLRY",
    "Name": "Tilray Brands Inc. Class 2"
  },
  {
    "Symbol": "TLS",
    "Name": "Telos Corporation"
  },
  {
    "Symbol": "TLSA",
    "Name": "Tiziana Life Sciences Ltd."
  },
  {
    "Symbol": "TLYS",
    "Name": "Tilly's Inc."
  },
  {
    "Symbol": "TM",
    "Name": "Toyota Motor Corporation"
  },
  {
    "Symbol": "TMAC",
    "Name": "The Music Acquisition Corporation "
  },
  {
    "Symbol": "TMBR",
    "Name": "Timber Pharmaceuticals Inc."
  },
  {
    "Symbol": "TMC",
    "Name": "TMC the metals company Inc."
  },
  {
    "Symbol": "TMCI",
    "Name": "Treace Medical Concepts Inc."
  },
  {
    "Symbol": "TMDI",
    "Name": "Titan Medical Inc."
  },
  {
    "Symbol": "TMDX",
    "Name": "TransMedics Group Inc."
  },
  {
    "Symbol": "TMHC",
    "Name": "Taylor Morrison Home Corporation"
  },
  {
    "Symbol": "TMKR",
    "Name": "Tastemaker Acquisition "
  },
  {
    "Symbol": "TMKRU",
    "Name": "Tastemaker Acquisition Unit"
  },
  {
    "Symbol": "TMO",
    "Name": "Thermo Fisher Scientific Inc"
  },
  {
    "Symbol": "TMP",
    "Name": "Tompkins Financial Corporation"
  },
  {
    "Symbol": "TMPM",
    "Name": "Turmeric Acquisition "
  },
  {
    "Symbol": "TMQ",
    "Name": "Trilogy Metals Inc."
  },
  {
    "Symbol": "TMST",
    "Name": "TimkenSteel Corporation"
  },
  {
    "Symbol": "TMUS",
    "Name": "T-Mobile US Inc."
  },
  {
    "Symbol": "TMX",
    "Name": "Terminix Global Holdings Inc."
  },
  {
    "Symbol": "TNC",
    "Name": "Tennant Company"
  },
  {
    "Symbol": "TNDM",
    "Name": "Tandem Diabetes Care Inc."
  },
  {
    "Symbol": "TNET",
    "Name": "TriNet Group Inc."
  },
  {
    "Symbol": "TNGX",
    "Name": "Tango Therapeutics Inc."
  },
  {
    "Symbol": "TNK",
    "Name": "Teekay Tankers Ltd."
  },
  {
    "Symbol": "TNL",
    "Name": "Travel   Leisure Co. Common  Stock"
  },
  {
    "Symbol": "TNP",
    "Name": "Tsakos Energy Navigation Ltd"
  },
  {
    "Symbol": "TNXP",
    "Name": "Tonix Pharmaceuticals Holding"
  },
  {
    "Symbol": "TNYA",
    "Name": "Tenaya Therapeutics Inc."
  },
  {
    "Symbol": "TOAC",
    "Name": "Talon 1 Acquisition "
  },
  {
    "Symbol": "TOACU",
    "Name": "Talon 1 Acquisition Unit"
  },
  {
    "Symbol": "TOI",
    "Name": "The Oncology Institute Inc."
  },
  {
    "Symbol": "TOL",
    "Name": "Toll Brothers Inc."
  },
  {
    "Symbol": "TOMZ",
    "Name": "TOMI Environmental Solutions Inc."
  },
  {
    "Symbol": "TOPS",
    "Name": "TOP Ships Inc."
  },
  {
    "Symbol": "TOST",
    "Name": "Toast Inc. "
  },
  {
    "Symbol": "TOWN",
    "Name": "TowneBank"
  },
  {
    "Symbol": "TPB",
    "Name": "Turning Point Brands Inc."
  },
  {
    "Symbol": "TPBAU",
    "Name": "TPB Acquisition Corporation I Unit"
  },
  {
    "Symbol": "TPC",
    "Name": "Tutor Perini Corporation"
  },
  {
    "Symbol": "TPG",
    "Name": "TPG Inc. "
  },
  {
    "Symbol": "TPGY",
    "Name": "TPG Pace Beneficial Finance "
  },
  {
    "Symbol": "TPH",
    "Name": "Tri Pointe Homes Inc."
  },
  {
    "Symbol": "TPHS",
    "Name": "Trinity Place Holdings Inc."
  },
  {
    "Symbol": "TPIC",
    "Name": "TPI Composites Inc."
  },
  {
    "Symbol": "TPL",
    "Name": "Texas Pacific Land Corporation"
  },
  {
    "Symbol": "TPR",
    "Name": "Tapestry Inc."
  },
  {
    "Symbol": "TPST",
    "Name": "Tempest Therapeutics Inc."
  },
  {
    "Symbol": "TPTX",
    "Name": "Turning Point Therapeutics Inc."
  },
  {
    "Symbol": "TPVG",
    "Name": "TriplePoint Venture Growth BDC"
  },
  {
    "Symbol": "TPX",
    "Name": "Tempur Sealy International Inc."
  },
  {
    "Symbol": "TPZ",
    "Name": "Tortoise Power and Energy Infrastructure Fund Inc"
  },
  {
    "Symbol": "TR",
    "Name": "Tootsie Roll Industries Inc."
  },
  {
    "Symbol": "TRC",
    "Name": "Tejon Ranch Co"
  },
  {
    "Symbol": "TRDA",
    "Name": "Entrada Therapeutics Inc."
  },
  {
    "Symbol": "TREC",
    "Name": "Trecora Resources"
  },
  {
    "Symbol": "TREE",
    "Name": "LendingTree Inc."
  },
  {
    "Symbol": "TREX",
    "Name": "Trex Company Inc."
  },
  {
    "Symbol": "TRGP",
    "Name": "Targa Resources Inc."
  },
  {
    "Symbol": "TRHC",
    "Name": "Tabula Rasa HealthCare Inc."
  },
  {
    "Symbol": "TRI",
    "Name": "Thomson Reuters Corp"
  },
  {
    "Symbol": "TRIN",
    "Name": "Trinity Capital Inc."
  },
  {
    "Symbol": "TRIP",
    "Name": "TripAdvisor Inc."
  },
  {
    "Symbol": "TRIS",
    "Name": "Tristar Acquisition I "
  },
  {
    "Symbol": "TRKA",
    "Name": "Troika Media Group Inc."
  },
  {
    "Symbol": "TRMB",
    "Name": "Trimble Inc."
  },
  {
    "Symbol": "TRMD",
    "Name": "TORM plc "
  },
  {
    "Symbol": "TRMK",
    "Name": "Trustmark Corporation"
  },
  {
    "Symbol": "TRMR",
    "Name": "Tremor International Ltd. American Depository Shares"
  },
  {
    "Symbol": "TRN",
    "Name": "Trinity Industries Inc."
  },
  {
    "Symbol": "TRNO",
    "Name": "Terreno Realty Corporation"
  },
  {
    "Symbol": "TRNS",
    "Name": "Transcat Inc."
  },
  {
    "Symbol": "TRON",
    "Name": "Corner Growth Acquisition 2  Ordinary Share"
  },
  {
    "Symbol": "TROO",
    "Name": "TROOPS Inc."
  },
  {
    "Symbol": "TROW",
    "Name": "T. Rowe Price Group Inc."
  },
  {
    "Symbol": "TROX",
    "Name": "Tronox Holdings plc  (UK)"
  },
  {
    "Symbol": "TRP",
    "Name": "TC Energy Corporation"
  },
  {
    "Symbol": "TRQ",
    "Name": "Turquoise Hill Resources Ltd."
  },
  {
    "Symbol": "TRS",
    "Name": "TriMas Corporation"
  },
  {
    "Symbol": "TRST",
    "Name": "TrustCo Bank Corp NY"
  },
  {
    "Symbol": "TRT",
    "Name": "Trio-Tech International"
  },
  {
    "Symbol": "TRTN",
    "Name": "Triton International Limited"
  },
  {
    "Symbol": "TRTX",
    "Name": "TPG RE Finance Trust Inc."
  },
  {
    "Symbol": "TRU",
    "Name": "TransUnion"
  },
  {
    "Symbol": "TRUE",
    "Name": "TrueCar Inc."
  },
  {
    "Symbol": "TRUP",
    "Name": "Trupanion Inc."
  },
  {
    "Symbol": "TRV",
    "Name": "The Travelers Companies Inc."
  },
  {
    "Symbol": "TRVI",
    "Name": "Trevi Therapeutics Inc."
  },
  {
    "Symbol": "TRVN",
    "Name": "Trevena Inc."
  },
  {
    "Symbol": "TRX",
    "Name": "Tanzanian Gold Corporation"
  },
  {
    "Symbol": "TSAT",
    "Name": "Telesat Corporation   and Class B Variable Voting Shares"
  },
  {
    "Symbol": "TSBK",
    "Name": "Timberland Bancorp Inc."
  },
  {
    "Symbol": "TSC",
    "Name": "TriState Capital Holdings Inc."
  },
  {
    "Symbol": "TSCO",
    "Name": "Tractor Supply Company"
  },
  {
    "Symbol": "TSE",
    "Name": "Trinseo PLC"
  },
  {
    "Symbol": "TSEM",
    "Name": "Tower Semiconductor Ltd."
  },
  {
    "Symbol": "TSHA",
    "Name": "Taysha Gene Therapies Inc."
  },
  {
    "Symbol": "TSI",
    "Name": "TCW Strategic Income Fund Inc."
  },
  {
    "Symbol": "TSLA",
    "Name": "Tesla Inc."
  },
  {
    "Symbol": "TSLX",
    "Name": "Sixth Street Specialty Lending Inc."
  },
  {
    "Symbol": "TSM",
    "Name": "Taiwan Semiconductor Manufacturing Company Ltd."
  },
  {
    "Symbol": "TSN",
    "Name": "Tyson Foods Inc."
  },
  {
    "Symbol": "TSP",
    "Name": "TuSimple Holdings Inc. "
  },
  {
    "Symbol": "TSPQ",
    "Name": "TCW Special Purpose Acquisition "
  },
  {
    "Symbol": "TSQ",
    "Name": "Townsquare Media Inc. "
  },
  {
    "Symbol": "TSRI",
    "Name": "TSR Inc."
  },
  {
    "Symbol": "TSVT",
    "Name": "2seventy bio Inc."
  },
  {
    "Symbol": "TT",
    "Name": "Trane Technologies plc"
  },
  {
    "Symbol": "TTC",
    "Name": "Toro Company (The)"
  },
  {
    "Symbol": "TTCF",
    "Name": "Tattooed Chef Inc "
  },
  {
    "Symbol": "TTD",
    "Name": "The Trade Desk Inc. "
  },
  {
    "Symbol": "TTE",
    "Name": "TotalEnergies SE"
  },
  {
    "Symbol": "TTEC",
    "Name": "TTEC Holdings Inc."
  },
  {
    "Symbol": "TTEK",
    "Name": "Tetra Tech Inc."
  },
  {
    "Symbol": "TTGT",
    "Name": "TechTarget Inc."
  },
  {
    "Symbol": "TTI",
    "Name": "Tetra Technologies Inc."
  },
  {
    "Symbol": "TTM",
    "Name": "Tata Motors Ltd Tata Motors Limited"
  },
  {
    "Symbol": "TTMI",
    "Name": "TTM Technologies Inc."
  },
  {
    "Symbol": "TTNP",
    "Name": "Titan Pharmaceuticals Inc."
  },
  {
    "Symbol": "TTOO",
    "Name": "T2 Biosystems Inc."
  },
  {
    "Symbol": "TTP",
    "Name": "Tortoise Pipeline & Energy Fund Inc."
  },
  {
    "Symbol": "TTSH",
    "Name": "Tile Shop Holdings Inc."
  },
  {
    "Symbol": "TTWO",
    "Name": "Take-Two Interactive Software Inc."
  },
  {
    "Symbol": "TU",
    "Name": "Telus Corporation"
  },
  {
    "Symbol": "TUEM",
    "Name": "Tuesday Morning"
  },
  {
    "Symbol": "TUFN",
    "Name": "Tufin Software Technologies Ltd."
  },
  {
    "Symbol": "TUGC",
    "Name": "TradeUP Global Corporation "
  },
  {
    "Symbol": "TUGCU",
    "Name": "TradeUP Global Corporation Unit"
  },
  {
    "Symbol": "TUP",
    "Name": "Tupperware Brands Corporation"
  },
  {
    "Symbol": "TURN",
    "Name": "180 Degree Capital"
  },
  {
    "Symbol": "TUSK",
    "Name": "Mammoth Energy Services Inc."
  },
  {
    "Symbol": "TV",
    "Name": "Grupo Televisa S.A."
  },
  {
    "Symbol": "TVC",
    "Name": "Tennessee Valley Authority"
  },
  {
    "Symbol": "TVE",
    "Name": "Tennessee Valley Authority"
  },
  {
    "Symbol": "TVTX",
    "Name": "Travere Therapeutics Inc."
  },
  {
    "Symbol": "TVTY",
    "Name": "Tivity Health Inc."
  },
  {
    "Symbol": "TW",
    "Name": "Tradeweb Markets Inc. "
  },
  {
    "Symbol": "TWCB",
    "Name": "Bilander Acquisition "
  },
  {
    "Symbol": "TWI",
    "Name": "Titan International Inc. (DE)"
  },
  {
    "Symbol": "TWIN",
    "Name": "Twin Disc Incorporated"
  },
  {
    "Symbol": "TWKS",
    "Name": "Thoughtworks Holding Inc."
  },
  {
    "Symbol": "TWLO",
    "Name": "Twilio Inc. "
  },
  {
    "Symbol": "TWN",
    "Name": "Taiwan Fund Inc. (The)"
  },
  {
    "Symbol": "TWND",
    "Name": "Tailwind Acquisition "
  },
  {
    "Symbol": "TWNI",
    "Name": "Tailwind International Acquisition "
  },
  {
    "Symbol": "TWNK",
    "Name": "Hostess Brands Inc. "
  },
  {
    "Symbol": "TWO",
    "Name": "Two Harbors Investment Corp"
  },
  {
    "Symbol": "TWOA",
    "Name": "two "
  },
  {
    "Symbol": "TWOU",
    "Name": "2U Inc."
  },
  {
    "Symbol": "TWST",
    "Name": "Twist Bioscience Corporation"
  },
  {
    "Symbol": "TWTR",
    "Name": "Twitter Inc."
  },
  {
    "Symbol": "TXG",
    "Name": "10x Genomics Inc. "
  },
  {
    "Symbol": "TXMD",
    "Name": "TherapeuticsMD Inc."
  },
  {
    "Symbol": "TXN",
    "Name": "Texas Instruments Incorporated"
  },
  {
    "Symbol": "TXRH",
    "Name": "Texas Roadhouse Inc."
  },
  {
    "Symbol": "TXT",
    "Name": "Textron Inc."
  },
  {
    "Symbol": "TY",
    "Name": "Tri Continental Corporation"
  },
  {
    "Symbol": "TYG",
    "Name": "Tortoise Energy Infrastructure Corporation"
  },
  {
    "Symbol": "TYL",
    "Name": "Tyler Technologies Inc."
  },
  {
    "Symbol": "TYME",
    "Name": "Tyme Technologies Inc."
  },
  {
    "Symbol": "TYRA",
    "Name": "Tyra Biosciences Inc."
  },
  {
    "Symbol": "TZOO",
    "Name": "Travelzoo"
  },
  {
    "Symbol": "TZPS",
    "Name": "TZP Strategies Acquisition  Ordinary Share"
  },
  {
    "Symbol": "TZPSU",
    "Name": "TZP Strategies Acquisition Unit"
  },
  {
    "Symbol": "U",
    "Name": "Unity Software Inc."
  },
  {
    "Symbol": "UA",
    "Name": "Under Armour Inc. Class C"
  },
  {
    "Symbol": "UAA",
    "Name": "Under Armour Inc. "
  },
  {
    "Symbol": "UAL",
    "Name": "United Airlines Holdings Inc."
  },
  {
    "Symbol": "UAMY",
    "Name": "United States Antimony Corporation"
  },
  {
    "Symbol": "UAN",
    "Name": "CVR Partners LP Common Units representing Limited Partner Interests"
  },
  {
    "Symbol": "UAVS",
    "Name": "AgEagle Aerial Systems Inc."
  },
  {
    "Symbol": "UBA",
    "Name": "Urstadt Biddle Properties Inc."
  },
  {
    "Symbol": "UBCP",
    "Name": "United Bancorp Inc."
  },
  {
    "Symbol": "UBER",
    "Name": "Uber Technologies Inc."
  },
  {
    "Symbol": "UBFO",
    "Name": "United Security Bancshares"
  },
  {
    "Symbol": "UBOH",
    "Name": "United Bancshares Inc."
  },
  {
    "Symbol": "UBP",
    "Name": "Urstadt Biddle Properties Inc."
  },
  {
    "Symbol": "UBS",
    "Name": "UBS Group AG Registered"
  },
  {
    "Symbol": "UBSI",
    "Name": "United Bankshares Inc."
  },
  {
    "Symbol": "UBX",
    "Name": "Unity Biotechnology Inc."
  },
  {
    "Symbol": "UCBI",
    "Name": "United Community Banks Inc."
  },
  {
    "Symbol": "UCTT",
    "Name": "Ultra Clean Holdings Inc."
  },
  {
    "Symbol": "UDMY",
    "Name": "Udemy Inc."
  },
  {
    "Symbol": "UDR",
    "Name": "UDR Inc."
  },
  {
    "Symbol": "UEC",
    "Name": "Uranium Energy"
  },
  {
    "Symbol": "UEIC",
    "Name": "Universal Electronics Inc."
  },
  {
    "Symbol": "UEPS",
    "Name": "Net 1 UEPS Technologies Inc."
  },
  {
    "Symbol": "UFAB",
    "Name": "Unique Fabricating Inc."
  },
  {
    "Symbol": "UFCS",
    "Name": "United Fire Group Inc."
  },
  {
    "Symbol": "UFI",
    "Name": "Unifi Inc. New"
  },
  {
    "Symbol": "UFPI",
    "Name": "UFP Industries Inc."
  },
  {
    "Symbol": "UFPT",
    "Name": "UFP Technologies Inc."
  },
  {
    "Symbol": "UG",
    "Name": "United-Guardian Inc."
  },
  {
    "Symbol": "UGI",
    "Name": "UGI Corporation"
  },
  {
    "Symbol": "UGIC",
    "Name": "UGI Corporation Corporate Units"
  },
  {
    "Symbol": "UGRO",
    "Name": "urban-gro Inc."
  },
  {
    "Symbol": "UHAL",
    "Name": "Amerco"
  },
  {
    "Symbol": "UHS",
    "Name": "Universal Health Services Inc."
  },
  {
    "Symbol": "UHT",
    "Name": "Universal Health Realty Income Trust"
  },
  {
    "Symbol": "UI",
    "Name": "Ubiquiti Inc."
  },
  {
    "Symbol": "UIHC",
    "Name": "United Insurance Holdings"
  },
  {
    "Symbol": "UIS",
    "Name": "Unisys Corporation New"
  },
  {
    "Symbol": "UK",
    "Name": "Ucommune International Ltd"
  },
  {
    "Symbol": "UL",
    "Name": "Unilever PLC"
  },
  {
    "Symbol": "ULBI",
    "Name": "Ultralife Corporation"
  },
  {
    "Symbol": "ULCC",
    "Name": "Frontier Group Holdings Inc."
  },
  {
    "Symbol": "ULH",
    "Name": "Universal Logistics Holdings Inc."
  },
  {
    "Symbol": "ULTA",
    "Name": "Ulta Beauty Inc."
  },
  {
    "Symbol": "UMBF",
    "Name": "UMB Financial Corporation"
  },
  {
    "Symbol": "UMC",
    "Name": "United Microelectronics Corporation (NEW)"
  },
  {
    "Symbol": "UMH",
    "Name": "UMH Properties Inc."
  },
  {
    "Symbol": "UMPQ",
    "Name": "Umpqua Holdings Corporation"
  },
  {
    "Symbol": "UNAM",
    "Name": "Unico American Corporation"
  },
  {
    "Symbol": "UNB",
    "Name": "Union Bankshares Inc."
  },
  {
    "Symbol": "UNCY",
    "Name": "Unicycive Therapeutics Inc."
  },
  {
    "Symbol": "UNF",
    "Name": "Unifirst Corporation"
  },
  {
    "Symbol": "UNFI",
    "Name": "United Natural Foods Inc."
  },
  {
    "Symbol": "UNH",
    "Name": "UnitedHealth Group Incorporated  (DE)"
  },
  {
    "Symbol": "UNIT",
    "Name": "Uniti Group Inc."
  },
  {
    "Symbol": "UNM",
    "Name": "Unum Group"
  },
  {
    "Symbol": "UNP",
    "Name": "Union Pacific Corporation"
  },
  {
    "Symbol": "UNTY",
    "Name": "Unity Bancorp Inc."
  },
  {
    "Symbol": "UNVR",
    "Name": "Univar Solutions Inc."
  },
  {
    "Symbol": "UONE",
    "Name": "Urban One Inc. "
  },
  {
    "Symbol": "UONEK",
    "Name": "Urban One Inc. Class D"
  },
  {
    "Symbol": "UP",
    "Name": "Wheels Up Experience Inc. "
  },
  {
    "Symbol": "UPC",
    "Name": "Universe Pharmaceuticals Inc."
  },
  {
    "Symbol": "UPH",
    "Name": "UpHealth Inc."
  },
  {
    "Symbol": "UPLD",
    "Name": "Upland Software Inc."
  },
  {
    "Symbol": "UPS",
    "Name": "United Parcel Service Inc."
  },
  {
    "Symbol": "UPST",
    "Name": "Upstart Holdings Inc."
  },
  {
    "Symbol": "UPTD",
    "Name": "TradeUP Acquisition"
  },
  {
    "Symbol": "UPTDU",
    "Name": "TradeUP Acquisition Unit"
  },
  {
    "Symbol": "UPWK",
    "Name": "Upwork Inc."
  },
  {
    "Symbol": "URBN",
    "Name": "Urban Outfitters Inc."
  },
  {
    "Symbol": "URG",
    "Name": "Ur Energy Inc  (Canada)"
  },
  {
    "Symbol": "URGN",
    "Name": "UroGen Pharma Ltd."
  },
  {
    "Symbol": "URI",
    "Name": "United Rentals Inc."
  },
  {
    "Symbol": "UROY",
    "Name": "Uranium Royalty"
  },
  {
    "Symbol": "USA",
    "Name": "Liberty All-Star Equity Fund"
  },
  {
    "Symbol": "USAC",
    "Name": "USA Compression Partners LP Common Units Representing Limited Partner Interests"
  },
  {
    "Symbol": "USAK",
    "Name": "USA Truck Inc."
  },
  {
    "Symbol": "USAP",
    "Name": "Universal Stainless & Alloy Products Inc."
  },
  {
    "Symbol": "USAS",
    "Name": "Americas Gold and Silver Corporation  no par value"
  },
  {
    "Symbol": "USAU",
    "Name": "U.S. Gold"
  },
  {
    "Symbol": "USB",
    "Name": "U.S. Bancorp"
  },
  {
    "Symbol": "USCB",
    "Name": "USCB Financial Holdings Inc. "
  },
  {
    "Symbol": "USCT",
    "Name": "TKB Critical Technologies 1 "
  },
  {
    "Symbol": "USCTU",
    "Name": "TKB Critical Technologies 1 Unit"
  },
  {
    "Symbol": "USDP",
    "Name": "USD Partners LP Common Units representing limited partner interest"
  },
  {
    "Symbol": "USEG",
    "Name": "U.S. Energy"
  },
  {
    "Symbol": "USER",
    "Name": "UserTesting Inc."
  },
  {
    "Symbol": "USFD",
    "Name": "US Foods Holding"
  },
  {
    "Symbol": "USIO",
    "Name": "Usio Inc."
  },
  {
    "Symbol": "USLM",
    "Name": "United States Lime & Minerals Inc."
  },
  {
    "Symbol": "USM",
    "Name": "United States Cellular Corporation"
  },
  {
    "Symbol": "USNA",
    "Name": "USANA Health Sciences Inc."
  },
  {
    "Symbol": "USPH",
    "Name": "U.S. Physical Therapy Inc."
  },
  {
    "Symbol": "USWS",
    "Name": "U.S. Well Services Inc. "
  },
  {
    "Symbol": "USX",
    "Name": "U.S. Xpress Enterprises Inc. "
  },
  {
    "Symbol": "UTAA",
    "Name": "UTA Acquisition Corporation "
  },
  {
    "Symbol": "UTAAU",
    "Name": "UTA Acquisition Corporation Units"
  },
  {
    "Symbol": "UTF",
    "Name": "Cohen & Steers Infrastructure Fund Inc"
  },
  {
    "Symbol": "UTHR",
    "Name": "United Therapeutics Corporation"
  },
  {
    "Symbol": "UTI",
    "Name": "Universal Technical Institute Inc"
  },
  {
    "Symbol": "UTL",
    "Name": "UNITIL Corporation"
  },
  {
    "Symbol": "UTMD",
    "Name": "Utah Medical Products Inc."
  },
  {
    "Symbol": "UTME",
    "Name": "UTime Limited"
  },
  {
    "Symbol": "UTRS",
    "Name": "Minerva Surgical Inc."
  },
  {
    "Symbol": "UTSI",
    "Name": "UTStarcom Holdings Corp."
  },
  {
    "Symbol": "UTZ",
    "Name": "Utz Brands Inc "
  },
  {
    "Symbol": "UUU",
    "Name": "Universal Security Instruments Inc."
  },
  {
    "Symbol": "UUUU",
    "Name": "Energy Fuels Inc  (Canada)"
  },
  {
    "Symbol": "UVE",
    "Name": "UNIVERSAL INSURANCE HOLDINGS INC"
  },
  {
    "Symbol": "UVSP",
    "Name": "Univest Financial Corporation"
  },
  {
    "Symbol": "UVV",
    "Name": "Universal Corporation"
  },
  {
    "Symbol": "UWMC",
    "Name": "UWM Holdings Corporation "
  },
  {
    "Symbol": "UXIN",
    "Name": "Uxin Limited ADS"
  },
  {
    "Symbol": "V",
    "Name": "Visa Inc."
  },
  {
    "Symbol": "VABK",
    "Name": "Virginia National Bankshares Corporation"
  },
  {
    "Symbol": "VAC",
    "Name": "Marriott Vacations Worldwide Corporation"
  },
  {
    "Symbol": "VAL",
    "Name": "Valaris Limited"
  },
  {
    "Symbol": "VALU",
    "Name": "Value Line Inc."
  },
  {
    "Symbol": "VAPO",
    "Name": "Vapotherm Inc."
  },
  {
    "Symbol": "VATE",
    "Name": "INNOVATE"
  },
  {
    "Symbol": "VAXX",
    "Name": "Vaxxinity Inc. "
  },
  {
    "Symbol": "VBF",
    "Name": "Invesco Bond Fund"
  },
  {
    "Symbol": "VBFC",
    "Name": "Village Bank and Trust Financial"
  },
  {
    "Symbol": "VBIV",
    "Name": "VBI Vaccines Inc. New  (Canada)"
  },
  {
    "Symbol": "VBLT",
    "Name": "Vascular Biogenics Ltd."
  },
  {
    "Symbol": "VBNK",
    "Name": "VersaBank"
  },
  {
    "Symbol": "VBOCU",
    "Name": "Viscogliosi Brothers Acquisition Corp Unit"
  },
  {
    "Symbol": "VBTX",
    "Name": "Veritex Holdings Inc."
  },
  {
    "Symbol": "VC",
    "Name": "Visteon Corporation"
  },
  {
    "Symbol": "VCEL",
    "Name": "Vericel Corporation"
  },
  {
    "Symbol": "VCKA",
    "Name": "Vickers Vantage I"
  },
  {
    "Symbol": "VCNX",
    "Name": "Vaccinex Inc."
  },
  {
    "Symbol": "VCSA",
    "Name": "Vacasa Inc. "
  },
  {
    "Symbol": "VCTR",
    "Name": "Victory Capital Holdings Inc. "
  },
  {
    "Symbol": "VCV",
    "Name": "Invesco California Value Municipal Income Trust"
  },
  {
    "Symbol": "VCYT",
    "Name": "Veracyte Inc."
  },
  {
    "Symbol": "VEC",
    "Name": "Vectrus Inc."
  },
  {
    "Symbol": "VECO",
    "Name": "Veeco Instruments Inc."
  },
  {
    "Symbol": "VECT",
    "Name": "VectivBio Holding AG"
  },
  {
    "Symbol": "VEEE",
    "Name": "Twin Vee PowerCats Co."
  },
  {
    "Symbol": "VEEV",
    "Name": "Veeva Systems Inc. "
  },
  {
    "Symbol": "VEL",
    "Name": "Velocity Financial Inc."
  },
  {
    "Symbol": "VELO",
    "Name": "Velocity Acquisition "
  },
  {
    "Symbol": "VELOU",
    "Name": "Velocity Acquisition Units"
  },
  {
    "Symbol": "VENA",
    "Name": "Venus Acquisition Corporation"
  },
  {
    "Symbol": "VENAR",
    "Name": "Venus Acquisition Corporation Rights"
  },
  {
    "Symbol": "VENAU",
    "Name": "Venus Acquisition Corporation Units"
  },
  {
    "Symbol": "VEON",
    "Name": "VEON Ltd. ADS"
  },
  {
    "Symbol": "VERA",
    "Name": "Vera Therapeutics Inc. "
  },
  {
    "Symbol": "VERB",
    "Name": "Verb Technology Company Inc."
  },
  {
    "Symbol": "VERI",
    "Name": "Veritone Inc."
  },
  {
    "Symbol": "VERO",
    "Name": "Venus Concept Inc."
  },
  {
    "Symbol": "VERU",
    "Name": "Veru Inc."
  },
  {
    "Symbol": "VERV",
    "Name": "Verve Therapeutics Inc."
  },
  {
    "Symbol": "VERX",
    "Name": "Vertex Inc. "
  },
  {
    "Symbol": "VERY",
    "Name": "Vericity Inc."
  },
  {
    "Symbol": "VET",
    "Name": "Vermilion Energy Inc. Common (Canada)"
  },
  {
    "Symbol": "VEV",
    "Name": "Vicinity Motor"
  },
  {
    "Symbol": "VFC",
    "Name": "V.F. Corporation"
  },
  {
    "Symbol": "VFF",
    "Name": "Village Farms International Inc."
  },
  {
    "Symbol": "VFL",
    "Name": "Delaware Investments National Municipal Income Fund"
  },
  {
    "Symbol": "VG",
    "Name": "Vonage Holdings"
  },
  {
    "Symbol": "VGFC",
    "Name": "The Very Good Food Company Inc."
  },
  {
    "Symbol": "VGM",
    "Name": "Invesco Trust for Investment Grade Municipals  (DE)"
  },
  {
    "Symbol": "VGR",
    "Name": "Vector Group Ltd."
  },
  {
    "Symbol": "VGZ",
    "Name": "Vista Gold Corp"
  },
  {
    "Symbol": "VHAQ",
    "Name": "Viveon Health Acquisition"
  },
  {
    "Symbol": "VHC",
    "Name": "VirnetX Holding Corp"
  },
  {
    "Symbol": "VHI",
    "Name": "Valhi Inc."
  },
  {
    "Symbol": "VHNAU",
    "Name": "Vahanna Tech Edge Acquisition I Units"
  },
  {
    "Symbol": "VIA",
    "Name": "Via Renewables Inc. "
  },
  {
    "Symbol": "VIAV",
    "Name": "Viavi Solutions Inc."
  },
  {
    "Symbol": "VICI",
    "Name": "VICI Properties Inc."
  },
  {
    "Symbol": "VICR",
    "Name": "Vicor Corporation"
  },
  {
    "Symbol": "VIEW",
    "Name": "View Inc. "
  },
  {
    "Symbol": "VIGL",
    "Name": "Vigil Neuroscience Inc."
  },
  {
    "Symbol": "VINC",
    "Name": "Vincerx Pharma Inc."
  },
  {
    "Symbol": "VINE",
    "Name": "Fresh Vine Wine Inc."
  },
  {
    "Symbol": "VINO",
    "Name": "Gaucho Group Holdings Inc."
  },
  {
    "Symbol": "VINP",
    "Name": "Vinci Partners Investments Ltd. "
  },
  {
    "Symbol": "VIR",
    "Name": "Vir Biotechnology Inc."
  },
  {
    "Symbol": "VIRC",
    "Name": "Virco Manufacturing Corporation"
  },
  {
    "Symbol": "VIRI",
    "Name": "Virios Therapeutics Inc."
  },
  {
    "Symbol": "VIRT",
    "Name": "Virtu Financial Inc. "
  },
  {
    "Symbol": "VIRX",
    "Name": "Viracta Therapeutics Inc."
  },
  {
    "Symbol": "VISL",
    "Name": "Vislink Technologies Inc."
  },
  {
    "Symbol": "VITL",
    "Name": "Vital Farms Inc."
  },
  {
    "Symbol": "VIVE",
    "Name": "Viveve Medical Inc."
  },
  {
    "Symbol": "VIVK",
    "Name": "Vivakor Inc."
  },
  {
    "Symbol": "VIVO",
    "Name": "Meridian Bioscience Inc."
  },
  {
    "Symbol": "VKQ",
    "Name": "Invesco Municipal Trust"
  },
  {
    "Symbol": "VKTX",
    "Name": "Viking Therapeutics Inc."
  },
  {
    "Symbol": "VLAT",
    "Name": "Valor Latitude Acquisition "
  },
  {
    "Symbol": "VLCN",
    "Name": "Volcon Inc."
  },
  {
    "Symbol": "VLD",
    "Name": "Velo3D Inc."
  },
  {
    "Symbol": "VLDR",
    "Name": "Velodyne Lidar Inc."
  },
  {
    "Symbol": "VLGEA",
    "Name": "Village Super Market Inc. "
  },
  {
    "Symbol": "VLN",
    "Name": "Valens Semiconductor Ltd."
  },
  {
    "Symbol": "VLNS",
    "Name": "The Valens Company Inc."
  },
  {
    "Symbol": "VLO",
    "Name": "Valero Energy Corporation"
  },
  {
    "Symbol": "VLON",
    "Name": "Vallon Pharmaceuticals Inc."
  },
  {
    "Symbol": "VLTA",
    "Name": "Volta Inc. "
  },
  {
    "Symbol": "VLY",
    "Name": "Valley National Bancorp"
  },
  {
    "Symbol": "VMAR",
    "Name": "Vision Marine Technologies Inc."
  },
  {
    "Symbol": "VMC",
    "Name": "Vulcan Materials Company (Holding Company)"
  },
  {
    "Symbol": "VMCAU",
    "Name": "Valuence Merger I Unit"
  },
  {
    "Symbol": "VMD",
    "Name": "Viemed Healthcare Inc."
  },
  {
    "Symbol": "VMEO",
    "Name": "Vimeo Inc."
  },
  {
    "Symbol": "VMGA",
    "Name": "VMG Consumer Acquisition "
  },
  {
    "Symbol": "VMGAU",
    "Name": "VMG Consumer Acquisition Unit"
  },
  {
    "Symbol": "VMI",
    "Name": "Valmont Industries Inc."
  },
  {
    "Symbol": "VMO",
    "Name": "Invesco Municipal Opportunity Trust"
  },
  {
    "Symbol": "VMW",
    "Name": "Vmware Inc.  "
  },
  {
    "Symbol": "VNCE",
    "Name": "Vince Holding"
  },
  {
    "Symbol": "VNDA",
    "Name": "Vanda Pharmaceuticals Inc."
  },
  {
    "Symbol": "VNO",
    "Name": "Vornado Realty Trust"
  },
  {
    "Symbol": "VNOM",
    "Name": "Viper Energy Partners LP Common Unit"
  },
  {
    "Symbol": "VNRX",
    "Name": "VolitionRX Limited"
  },
  {
    "Symbol": "VNT",
    "Name": "Vontier Corporation"
  },
  {
    "Symbol": "VNTR",
    "Name": "Venator Materials PLC"
  },
  {
    "Symbol": "VOLT",
    "Name": "Volt Information Sciences Inc."
  },
  {
    "Symbol": "VOR",
    "Name": "Vor Biopharma Inc."
  },
  {
    "Symbol": "VORB",
    "Name": "Virgin Orbit Holdings Inc."
  },
  {
    "Symbol": "VOXX",
    "Name": "VOXX International Corporation "
  },
  {
    "Symbol": "VOYA",
    "Name": "Voya Financial Inc."
  },
  {
    "Symbol": "VPG",
    "Name": "Vishay Precision Group Inc."
  },
  {
    "Symbol": "VPV",
    "Name": "Invesco Pennsylvania Value Municipal Income Trust  (DE)"
  },
  {
    "Symbol": "VQS",
    "Name": "VIQ Solutions Inc."
  },
  {
    "Symbol": "VRA",
    "Name": "Vera Bradley Inc."
  },
  {
    "Symbol": "VRAR",
    "Name": "The Glimpse Group Inc."
  },
  {
    "Symbol": "VRAY",
    "Name": "ViewRay Inc."
  },
  {
    "Symbol": "VRCA",
    "Name": "Verrica Pharmaceuticals Inc."
  },
  {
    "Symbol": "VRDN",
    "Name": "Viridian Therapeutics Inc."
  },
  {
    "Symbol": "VRE",
    "Name": "Veris Residential Inc."
  },
  {
    "Symbol": "VREX",
    "Name": "Varex Imaging Corporation"
  },
  {
    "Symbol": "VRM",
    "Name": "Vroom Inc."
  },
  {
    "Symbol": "VRME",
    "Name": "VerifyMe Inc."
  },
  {
    "Symbol": "VRNS",
    "Name": "Varonis Systems Inc."
  },
  {
    "Symbol": "VRNT",
    "Name": "Verint Systems Inc."
  },
  {
    "Symbol": "VRPX",
    "Name": "Virpax Pharmaceuticals Inc."
  },
  {
    "Symbol": "VRRM",
    "Name": "Verra Mobility Corporation "
  },
  {
    "Symbol": "VRSK",
    "Name": "Verisk Analytics Inc."
  },
  {
    "Symbol": "VRSN",
    "Name": "VeriSign Inc."
  },
  {
    "Symbol": "VRT",
    "Name": "Vertiv Holdings LLC "
  },
  {
    "Symbol": "VRTS",
    "Name": "Virtus Investment Partners Inc."
  },
  {
    "Symbol": "VRTV",
    "Name": "Veritiv Corporation"
  },
  {
    "Symbol": "VRTX",
    "Name": "Vertex Pharmaceuticals Incorporated"
  },
  {
    "Symbol": "VS",
    "Name": "Versus Systems Inc."
  },
  {
    "Symbol": "VSAC",
    "Name": "Vision Sensing Acquisition "
  },
  {
    "Symbol": "VSACU",
    "Name": "Vision Sensing Acquisition Unit"
  },
  {
    "Symbol": "VSAT",
    "Name": "ViaSat Inc."
  },
  {
    "Symbol": "VSCO",
    "Name": "Victorias Secret & Co."
  },
  {
    "Symbol": "VSEC",
    "Name": "VSE Corporation"
  },
  {
    "Symbol": "VSH",
    "Name": "Vishay Intertechnology Inc."
  },
  {
    "Symbol": "VST",
    "Name": "Vistra"
  },
  {
    "Symbol": "VSTA",
    "Name": "Vasta Platform Limited "
  },
  {
    "Symbol": "VSTM",
    "Name": "Verastem Inc."
  },
  {
    "Symbol": "VSTO",
    "Name": "Vista Outdoor Inc."
  },
  {
    "Symbol": "VTAQ",
    "Name": "Ventoux CCM Acquisition"
  },
  {
    "Symbol": "VTAQR",
    "Name": "Ventoux CCM Acquisition Right"
  },
  {
    "Symbol": "VTAQU",
    "Name": "Ventoux CCM Acquisition Unit"
  },
  {
    "Symbol": "VTEX",
    "Name": "VTEX "
  },
  {
    "Symbol": "VTGN",
    "Name": "VistaGen Therapeutics Inc."
  },
  {
    "Symbol": "VTN",
    "Name": "Invesco Trust for Investment Grade New York Municipals"
  },
  {
    "Symbol": "VTNR",
    "Name": "Vertex Energy Inc"
  },
  {
    "Symbol": "VTOL",
    "Name": "Bristow Group Inc."
  },
  {
    "Symbol": "VTR",
    "Name": "Ventas Inc."
  },
  {
    "Symbol": "VTRS",
    "Name": "Viatris Inc."
  },
  {
    "Symbol": "VTRU",
    "Name": "Vitru Limited"
  },
  {
    "Symbol": "VTSI",
    "Name": "VirTra Inc."
  },
  {
    "Symbol": "VTVT",
    "Name": "vTv Therapeutics Inc. "
  },
  {
    "Symbol": "VTYX",
    "Name": "Ventyx Biosciences Inc."
  },
  {
    "Symbol": "VUZI",
    "Name": "Vuzix Corporation"
  },
  {
    "Symbol": "VVI",
    "Name": "Viad Corp"
  },
  {
    "Symbol": "VVNT",
    "Name": "Vivint Smart Home Inc."
  },
  {
    "Symbol": "VVOS",
    "Name": "Vivos Therapeutics Inc."
  },
  {
    "Symbol": "VVPR",
    "Name": "VivoPower International PLC"
  },
  {
    "Symbol": "VVR",
    "Name": "Invesco Senior Income Trust  (DE)"
  },
  {
    "Symbol": "VVV",
    "Name": "Valvoline Inc."
  },
  {
    "Symbol": "VWE",
    "Name": "Vintage Wine Estates Inc."
  },
  {
    "Symbol": "VWTR",
    "Name": "Vidler Water Resources Inc."
  },
  {
    "Symbol": "VXRT",
    "Name": "Vaxart Inc"
  },
  {
    "Symbol": "VYGG",
    "Name": "Vy Global Growth "
  },
  {
    "Symbol": "VYGR",
    "Name": "Voyager Therapeutics Inc."
  },
  {
    "Symbol": "VYNE",
    "Name": "VYNE Therapeutics Inc."
  },
  {
    "Symbol": "VYNT",
    "Name": "Vyant Bio Inc."
  },
  {
    "Symbol": "VZ",
    "Name": "Verizon Communications Inc."
  },
  {
    "Symbol": "VZIO",
    "Name": "VIZIO Holding "
  },
  {
    "Symbol": "VZLA",
    "Name": "Vizsla Silver"
  },
  {
    "Symbol": "W",
    "Name": "Wayfair Inc. "
  },
  {
    "Symbol": "WAB",
    "Name": "Westinghouse Air Brake Technologies Corporation"
  },
  {
    "Symbol": "WABC",
    "Name": "Westamerica Bancorporation"
  },
  {
    "Symbol": "WAFD",
    "Name": "Washington Federal Inc."
  },
  {
    "Symbol": "WAFU",
    "Name": "Wah Fu Education Group Limited"
  },
  {
    "Symbol": "WAL",
    "Name": "Western Alliance Bancorporation  (DE)"
  },
  {
    "Symbol": "WALD",
    "Name": "Waldencast Acquisition  Ordinary Share"
  },
  {
    "Symbol": "WALDU",
    "Name": "Waldencast Acquisition Units"
  },
  {
    "Symbol": "WARR",
    "Name": "Warrior Technologies Acquisition Company "
  },
  {
    "Symbol": "WASH",
    "Name": "Washington Trust Bancorp Inc."
  },
  {
    "Symbol": "WAT",
    "Name": "Waters Corporation"
  },
  {
    "Symbol": "WATT",
    "Name": "Energous Corporation"
  },
  {
    "Symbol": "WAVC",
    "Name": "Waverley Capital Acquisition 1 "
  },
  {
    "Symbol": "WAVD",
    "Name": "WaveDancer Inc."
  },
  {
    "Symbol": "WAVS",
    "Name": "Western Acquisition Ventures"
  },
  {
    "Symbol": "WBA",
    "Name": "Walgreens Boots Alliance Inc."
  },
  {
    "Symbol": "WBD",
    "Name": "Warner Bros. Discovery Inc. Series A"
  },
  {
    "Symbol": "WBEV",
    "Name": "Winc Inc."
  },
  {
    "Symbol": "WBS",
    "Name": "Webster Financial Corporation"
  },
  {
    "Symbol": "WBT",
    "Name": "Welbilt Inc."
  },
  {
    "Symbol": "WBX",
    "Name": "Wallbox N.V. "
  },
  {
    "Symbol": "WCC",
    "Name": "WESCO International Inc."
  },
  {
    "Symbol": "WCN",
    "Name": "Waste Connections Inc."
  },
  {
    "Symbol": "WD",
    "Name": "Walker & Dunlop Inc"
  },
  {
    "Symbol": "WDAY",
    "Name": "Workday Inc. "
  },
  {
    "Symbol": "WDC",
    "Name": "Western Digital Corporation"
  },
  {
    "Symbol": "WDFC",
    "Name": "WD-40 Company"
  },
  {
    "Symbol": "WE",
    "Name": "WeWork Inc. "
  },
  {
    "Symbol": "WEAV",
    "Name": "Weave Communications Inc."
  },
  {
    "Symbol": "WEBR",
    "Name": "Weber Inc. "
  },
  {
    "Symbol": "WEC",
    "Name": "WEC Energy Group Inc."
  },
  {
    "Symbol": "WEJO",
    "Name": "Wejo Group Limited"
  },
  {
    "Symbol": "WEL",
    "Name": "Integrated Wellness Acquisition Corp "
  },
  {
    "Symbol": "WELL",
    "Name": "Welltower Inc."
  },
  {
    "Symbol": "WEN",
    "Name": "Wendy's Company (The)"
  },
  {
    "Symbol": "WERN",
    "Name": "Werner Enterprises Inc."
  },
  {
    "Symbol": "WETF",
    "Name": "WisdomTree Investments Inc."
  },
  {
    "Symbol": "WEX",
    "Name": "WEX Inc."
  },
  {
    "Symbol": "WEYS",
    "Name": "Weyco Group Inc."
  },
  {
    "Symbol": "WFC",
    "Name": "Wells Fargo & Company"
  },
  {
    "Symbol": "WFCF",
    "Name": "Where Food Comes From Inc."
  },
  {
    "Symbol": "WFG",
    "Name": "West Fraser Timber Co. Ltd"
  },
  {
    "Symbol": "WFRD",
    "Name": "Weatherford International plc"
  },
  {
    "Symbol": "WGO",
    "Name": "Winnebago Industries Inc."
  },
  {
    "Symbol": "WH",
    "Name": "Wyndham Hotels & Resorts Inc."
  },
  {
    "Symbol": "WHD",
    "Name": "Cactus Inc. "
  },
  {
    "Symbol": "WHF",
    "Name": "WhiteHorse Finance Inc."
  },
  {
    "Symbol": "WHG",
    "Name": "Westwood Holdings Group Inc"
  },
  {
    "Symbol": "WHLM",
    "Name": "Wilhelmina International Inc."
  },
  {
    "Symbol": "WHLR",
    "Name": "Wheeler Real Estate Investment Trust Inc."
  },
  {
    "Symbol": "WHLRD",
    "Name": "Wheeler Real Estate Investment Trust Inc. Series D Cumulative Preferred Stock"
  },
  {
    "Symbol": "WHLRP",
    "Name": "Wheeler Real Estate Investment Trust Inc. Class B Preferred Stock"
  },
  {
    "Symbol": "WHR",
    "Name": "Whirlpool Corporation"
  },
  {
    "Symbol": "WIA",
    "Name": "Western Asset Inflation-Linked Income Fund"
  },
  {
    "Symbol": "WILC",
    "Name": "G. Willi-Food International  Ltd."
  },
  {
    "Symbol": "WINA",
    "Name": "Winmark Corporation"
  },
  {
    "Symbol": "WING",
    "Name": "Wingstop Inc."
  },
  {
    "Symbol": "WINT",
    "Name": "Windtree Therapeutics Inc."
  },
  {
    "Symbol": "WINV",
    "Name": "WinVest Acquisition"
  },
  {
    "Symbol": "WINVR",
    "Name": "WinVest Acquisition Right"
  },
  {
    "Symbol": "WINVU",
    "Name": "WinVest Acquisition Unit"
  },
  {
    "Symbol": "WIRE",
    "Name": "Encore Wire Corporation"
  },
  {
    "Symbol": "WISA",
    "Name": "WiSA Technologies Inc."
  },
  {
    "Symbol": "WISH",
    "Name": "ContextLogic Inc. "
  },
  {
    "Symbol": "WIT",
    "Name": "Wipro Limited"
  },
  {
    "Symbol": "WIW",
    "Name": "Western Asset Inflation-Linked Opportunities & Income Fund"
  },
  {
    "Symbol": "WIX",
    "Name": "Wix.com Ltd."
  },
  {
    "Symbol": "WK",
    "Name": "Workiva Inc. "
  },
  {
    "Symbol": "WKHS",
    "Name": "Workhorse Group Inc."
  },
  {
    "Symbol": "WKME",
    "Name": "WalkMe Ltd."
  },
  {
    "Symbol": "WKSP",
    "Name": "Worksport Ltd."
  },
  {
    "Symbol": "WLDN",
    "Name": "Willdan Group Inc."
  },
  {
    "Symbol": "WLFC",
    "Name": "Willis Lease Finance Corporation"
  },
  {
    "Symbol": "WLK",
    "Name": "Westlake Corporation"
  },
  {
    "Symbol": "WLKP",
    "Name": "Westlake Chemical Partners LP Common Units representing limited partner interests"
  },
  {
    "Symbol": "WLL",
    "Name": "Whiting Petroleum Corporation  (New)"
  },
  {
    "Symbol": "WLMS",
    "Name": "Williams Industrial Services Group Inc."
  },
  {
    "Symbol": "WLY",
    "Name": "John Wiley & Sons Inc."
  },
  {
    "Symbol": "WLYB",
    "Name": "John Wiley & Sons Inc."
  },
  {
    "Symbol": "WM",
    "Name": "Waste Management Inc."
  },
  {
    "Symbol": "WMB",
    "Name": "Williams Companies Inc. (The)"
  },
  {
    "Symbol": "WMC",
    "Name": "Western Asset Mortgage Capital Corporation"
  },
  {
    "Symbol": "WMG",
    "Name": "Warner Music Group "
  },
  {
    "Symbol": "WMK",
    "Name": "Weis Markets Inc."
  },
  {
    "Symbol": "WMPN",
    "Name": "William Penn Bancorporation"
  },
  {
    "Symbol": "WMS",
    "Name": "Advanced Drainage Systems Inc."
  },
  {
    "Symbol": "WMT",
    "Name": "Walmart Inc."
  },
  {
    "Symbol": "WNC",
    "Name": "Wabash National Corporation"
  },
  {
    "Symbol": "WNEB",
    "Name": "Western New England Bancorp Inc."
  },
  {
    "Symbol": "WNNR",
    "Name": "Andretti Acquisition "
  },
  {
    "Symbol": "WNS",
    "Name": "WNS (Holdings) Limited Sponsored ADR (Jersey)"
  },
  {
    "Symbol": "WNW",
    "Name": "Meiwu Technology Company Limited"
  },
  {
    "Symbol": "WOLF",
    "Name": "Wolfspeed Inc."
  },
  {
    "Symbol": "WOOF",
    "Name": "Petco Health and Wellness Company Inc. "
  },
  {
    "Symbol": "WOR",
    "Name": "Worthington Industries Inc."
  },
  {
    "Symbol": "WORX",
    "Name": "SCWorx"
  },
  {
    "Symbol": "WOW",
    "Name": "WideOpenWest Inc."
  },
  {
    "Symbol": "WPC",
    "Name": "W. P. Carey Inc. REIT"
  },
  {
    "Symbol": "WPCA",
    "Name": "Warburg Pincus Capital Corporation IA "
  },
  {
    "Symbol": "WPCB",
    "Name": "Warburg Pincus Capital Corporation IB "
  },
  {
    "Symbol": "WPM",
    "Name": "Wheaton Precious Metals Corp  (Canada)"
  },
  {
    "Symbol": "WPRT",
    "Name": "Westport Fuel Systems Inc"
  },
  {
    "Symbol": "WQGA",
    "Name": "World Quantum Growth Acquisition "
  },
  {
    "Symbol": "WRAC",
    "Name": "Williams Rowland Acquisition"
  },
  {
    "Symbol": "WRAP",
    "Name": "Wrap Technologies Inc."
  },
  {
    "Symbol": "WRB",
    "Name": "W.R. Berkley Corporation"
  },
  {
    "Symbol": "WRBY",
    "Name": "Warby Parker Inc. "
  },
  {
    "Symbol": "WRE",
    "Name": "Washington Real Estate Investment Trust"
  },
  {
    "Symbol": "WRK",
    "Name": "Westrock Company"
  },
  {
    "Symbol": "WRLD",
    "Name": "World Acceptance Corporation"
  },
  {
    "Symbol": "WRN",
    "Name": "Western Copper and Gold Corporation"
  },
  {
    "Symbol": "WSBC",
    "Name": "WesBanco Inc."
  },
  {
    "Symbol": "WSBF",
    "Name": "Waterstone Financial Inc.  (MD)"
  },
  {
    "Symbol": "WSC",
    "Name": "WillScot Mobile Mini Holdings "
  },
  {
    "Symbol": "WSFS",
    "Name": "WSFS Financial Corporation"
  },
  {
    "Symbol": "WSM",
    "Name": "Williams-Sonoma Inc.  (DE)"
  },
  {
    "Symbol": "WSO",
    "Name": "Watsco Inc."
  },
  {
    "Symbol": "WSO/B",
    "Name": "Watsco Inc."
  },
  {
    "Symbol": "WSR",
    "Name": "Whitestone REIT"
  },
  {
    "Symbol": "WST",
    "Name": "West Pharmaceutical Services Inc."
  },
  {
    "Symbol": "WSTG",
    "Name": "Wayside Technology Group Inc."
  },
  {
    "Symbol": "WTBA",
    "Name": "West Bancorporation"
  },
  {
    "Symbol": "WTER",
    "Name": "The Alkaline Water Company Inc."
  },
  {
    "Symbol": "WTFC",
    "Name": "Wintrust Financial Corporation"
  },
  {
    "Symbol": "WTFCM",
    "Name": "Wintrust Financial Corporation Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series D"
  },
  {
    "Symbol": "WTI",
    "Name": "W&T Offshore Inc."
  },
  {
    "Symbol": "WTM",
    "Name": "White Mountains Insurance Group Ltd."
  },
  {
    "Symbol": "WTMA",
    "Name": "Welsbach Technology Metals Acquisition"
  },
  {
    "Symbol": "WTMAR",
    "Name": "Welsbach Technology Metals Acquisition one right to receive 1/10th of a share of"
  },
  {
    "Symbol": "WTMAU",
    "Name": "Welsbach Technology Metals Acquisition Unit"
  },
  {
    "Symbol": "WTRG",
    "Name": "Essential Utilities Inc."
  },
  {
    "Symbol": "WTRH",
    "Name": "Waitr Holdings Inc."
  },
  {
    "Symbol": "WTS",
    "Name": "Watts Water Technologies Inc. "
  },
  {
    "Symbol": "WTT",
    "Name": "Wireless Telecom Group  Inc."
  },
  {
    "Symbol": "WTTR",
    "Name": "Select Energy Services Inc. "
  },
  {
    "Symbol": "WTW",
    "Name": "Willis Towers Watson Public Limited Company"
  },
  {
    "Symbol": "WU",
    "Name": "Western Union Company (The)"
  },
  {
    "Symbol": "WULF",
    "Name": "TeraWulf Inc."
  },
  {
    "Symbol": "WVE",
    "Name": "Wave Life Sciences Ltd."
  },
  {
    "Symbol": "WVFC",
    "Name": "WVS Financial"
  },
  {
    "Symbol": "WVVI",
    "Name": "Willamette Valley Vineyards Inc."
  },
  {
    "Symbol": "WVVIP",
    "Name": "Willamette Valley Vineyards Inc. Series A Redeemable Preferred Stock"
  },
  {
    "Symbol": "WW",
    "Name": "WW International Inc."
  },
  {
    "Symbol": "WWAC",
    "Name": "Worldwide Webb Acquisition  Ordinary Share"
  },
  {
    "Symbol": "WWACU",
    "Name": "Worldwide Webb Acquisition Unit"
  },
  {
    "Symbol": "WWD",
    "Name": "Woodward Inc."
  },
  {
    "Symbol": "WWE",
    "Name": "World Wrestling Entertainment Inc. "
  },
  {
    "Symbol": "WWR",
    "Name": "Westwater Resources Inc."
  },
  {
    "Symbol": "WWW",
    "Name": "Wolverine World Wide Inc."
  },
  {
    "Symbol": "WY",
    "Name": "Weyerhaeuser Company"
  },
  {
    "Symbol": "WYNN",
    "Name": "Wynn Resorts Limited"
  },
  {
    "Symbol": "WYY",
    "Name": "WidePoint Corporation"
  },
  {
    "Symbol": "X",
    "Name": "United States Steel Corporation"
  },
  {
    "Symbol": "XAIR",
    "Name": "Beyond Air Inc."
  },
  {
    "Symbol": "XBIO",
    "Name": "Xenetic Biosciences Inc."
  },
  {
    "Symbol": "XBIT",
    "Name": "XBiotech Inc."
  },
  {
    "Symbol": "XCUR",
    "Name": "Exicure Inc."
  },
  {
    "Symbol": "XEL",
    "Name": "Xcel Energy Inc."
  },
  {
    "Symbol": "XELA",
    "Name": "Exela Technologies Inc."
  },
  {
    "Symbol": "XELB",
    "Name": "Xcel Brands Inc."
  },
  {
    "Symbol": "XENE",
    "Name": "Xenon Pharmaceuticals Inc."
  },
  {
    "Symbol": "XENT",
    "Name": "Intersect ENT Inc."
  },
  {
    "Symbol": "XERS",
    "Name": "Xeris Biopharma Holdings Inc."
  },
  {
    "Symbol": "XFIN",
    "Name": "ExcelFin Acquisition Corp "
  },
  {
    "Symbol": "XFOR",
    "Name": "X4 Pharmaceuticals Inc."
  },
  {
    "Symbol": "XGN",
    "Name": "Exagen Inc."
  },
  {
    "Symbol": "XHR",
    "Name": "Xenia Hotels & Resorts Inc."
  },
  {
    "Symbol": "XL",
    "Name": "XL Fleet "
  },
  {
    "Symbol": "XLO",
    "Name": "Xilio Therapeutics Inc."
  },
  {
    "Symbol": "XM",
    "Name": "Qualtrics International Inc. "
  },
  {
    "Symbol": "XMTR",
    "Name": "Xometry Inc. "
  },
  {
    "Symbol": "XNCR",
    "Name": "Xencor Inc."
  },
  {
    "Symbol": "XOM",
    "Name": "Exxon Mobil Corporation"
  },
  {
    "Symbol": "XOMA",
    "Name": "XOMA Corporation"
  },
  {
    "Symbol": "XOS",
    "Name": "Xos Inc."
  },
  {
    "Symbol": "XP",
    "Name": "XP Inc. "
  },
  {
    "Symbol": "XPAX",
    "Name": "XPAC Acquisition "
  },
  {
    "Symbol": "XPEL",
    "Name": "XPEL Inc."
  },
  {
    "Symbol": "XPER",
    "Name": "Xperi Holding Corporation"
  },
  {
    "Symbol": "XPL",
    "Name": "Solitario Zinc"
  },
  {
    "Symbol": "XPO",
    "Name": "XPO Logistics Inc."
  },
  {
    "Symbol": "XPOA",
    "Name": "DPCM Capital Inc. "
  },
  {
    "Symbol": "XPOF",
    "Name": "Xponential Fitness Inc. "
  },
  {
    "Symbol": "XPON",
    "Name": "Expion360 Inc."
  },
  {
    "Symbol": "XPRO",
    "Name": "Expro Group Holdings N.V."
  },
  {
    "Symbol": "XRAY",
    "Name": "DENTSPLY SIRONA Inc."
  },
  {
    "Symbol": "XRTX",
    "Name": "XORTX Therapeutics Inc."
  },
  {
    "Symbol": "XRX",
    "Name": "Xerox Holdings Corporation"
  },
  {
    "Symbol": "XSPA",
    "Name": "XpresSpa Group Inc."
  },
  {
    "Symbol": "XTNT",
    "Name": "Xtant Medical Holdings Inc."
  },
  {
    "Symbol": "XYL",
    "Name": "Xylem Inc.  New"
  },
  {
    "Symbol": "Y",
    "Name": "Alleghany Corporation"
  },
  {
    "Symbol": "YCBD",
    "Name": "cbdMD Inc."
  },
  {
    "Symbol": "YELL",
    "Name": "Yellow Corporation"
  },
  {
    "Symbol": "YELP",
    "Name": "Yelp Inc."
  },
  {
    "Symbol": "YETI",
    "Name": "YETI Holdings Inc."
  },
  {
    "Symbol": "YEXT",
    "Name": "Yext Inc."
  },
  {
    "Symbol": "YGMZ",
    "Name": "MingZhu Logistics Holdings Limited"
  },
  {
    "Symbol": "YJ",
    "Name": "Yunji Inc. American Depository Shares"
  },
  {
    "Symbol": "YMAB",
    "Name": "Y-mAbs Therapeutics Inc."
  },
  {
    "Symbol": "YMTX",
    "Name": "Yumanity Therapeutics Inc."
  },
  {
    "Symbol": "YORW",
    "Name": "York Water Company (The)"
  },
  {
    "Symbol": "YOTAU",
    "Name": "Yotta Acquisition Corporation Unit"
  },
  {
    "Symbol": "YOU",
    "Name": "Clear Secure Inc. "
  },
  {
    "Symbol": "YPF",
    "Name": "YPF Sociedad Anonima"
  },
  {
    "Symbol": "YTEN",
    "Name": "Yield10 Bioscience Inc."
  },
  {
    "Symbol": "YTRA",
    "Name": "Yatra Online Inc."
  },
  {
    "Symbol": "YUM",
    "Name": "Yum! Brands Inc."
  },
  {
    "Symbol": "YUMC",
    "Name": "Yum China Holdings Inc."
  },
  {
    "Symbol": "YVR",
    "Name": "Liquid Media Group Ltd."
  },
  {
    "Symbol": "Z",
    "Name": "Zillow Group Inc. Class C Capital Stock"
  },
  {
    "Symbol": "ZBH",
    "Name": "Zimmer Biomet Holdings Inc."
  },
  {
    "Symbol": "ZBRA",
    "Name": "Zebra Technologies Corporation "
  },
  {
    "Symbol": "ZCMD",
    "Name": "Zhongchao Inc. "
  },
  {
    "Symbol": "ZD",
    "Name": "Ziff Davis Inc."
  },
  {
    "Symbol": "ZDGE",
    "Name": "Zedge Inc. Class B"
  },
  {
    "Symbol": "ZEN",
    "Name": "Zendesk Inc."
  },
  {
    "Symbol": "ZENV",
    "Name": "Zenvia Inc. "
  },
  {
    "Symbol": "",
    "Name": ""
  },
  {
    "Symbol": "ZEST",
    "Name": "Ecoark Holdings Inc."
  },
  {
    "Symbol": "ZETA",
    "Name": "Zeta Global Holdings "
  },
  {
    "Symbol": "ZEUS",
    "Name": "Olympic Steel Inc."
  },
  {
    "Symbol": "ZEV",
    "Name": "Lightning eMotors Inc"
  },
  {
    "Symbol": "ZG",
    "Name": "Zillow Group Inc. "
  },
  {
    "Symbol": "ZGN",
    "Name": "Ermenegildo Zegna N.V."
  },
  {
    "Symbol": "",
    "Name": ""
  },
  {
    "Symbol": "ZI",
    "Name": "ZoomInfo Technologies Inc "
  },
  {
    "Symbol": "ZIM",
    "Name": "ZIM Integrated Shipping Services Ltd."
  },
  {
    "Symbol": "ZIMV",
    "Name": "ZimVie Inc."
  },
  {
    "Symbol": "ZING",
    "Name": "FTAC Zeus Acquisition "
  },
  {
    "Symbol": "ZINGU",
    "Name": "FTAC Zeus Acquisition Unit"
  },
  {
    "Symbol": "ZION",
    "Name": "Zions Bancorporation N.A."
  },
  {
    "Symbol": "ZIP",
    "Name": "ZipRecruiter Inc. "
  },
  {
    "Symbol": "ZIVO",
    "Name": "Zivo Bioscience Inc."
  },
  {
    "Symbol": "ZKIN",
    "Name": "ZK International Group Co. Ltd Ordinary Share"
  },
  {
    "Symbol": "ZM",
    "Name": "Zoom Video Communications Inc. "
  },
  {
    "Symbol": "ZNGA",
    "Name": "Zynga Inc. "
  },
  {
    "Symbol": "ZNH",
    "Name": "China Southern Airlines Company Limited"
  },
  {
    "Symbol": "ZNTE",
    "Name": "Zanite Acquisition "
  },
  {
    "Symbol": "ZNTEU",
    "Name": "Zanite Acquisition Unit"
  },
  {
    "Symbol": "ZNTL",
    "Name": "Zentalis Pharmaceuticals Inc."
  },
  {
    "Symbol": "ZOM",
    "Name": "Zomedica"
  },
  {
    "Symbol": "ZS",
    "Name": "Zscaler Inc."
  },
  {
    "Symbol": "ZSAN",
    "Name": "Zosano Pharma Corporation"
  },
  {
    "Symbol": "ZT",
    "Name": "Zimmer Energy Transition Acquisition "
  },
  {
    "Symbol": "ZTEK",
    "Name": "Zentek Ltd."
  },
  {
    "Symbol": "ZTR",
    "Name": "Virtus Total Return Fund Inc."
  },
  {
    "Symbol": "ZTS",
    "Name": "Zoetis Inc. "
  },
  {
    "Symbol": "ZUMZ",
    "Name": "Zumiez Inc."
  },
  {
    "Symbol": "ZUO",
    "Name": "Zuora Inc. "
  },
  {
    "Symbol": "ZVIA",
    "Name": "Zevia PBC "
  },
  {
    "Symbol": "ZVO",
    "Name": "Zovio Inc."
  },
  {
    "Symbol": "ZWRK",
    "Name": "Z-Work Acquisition "
  },
  {
    "Symbol": "ZWS",
    "Name": "Zurn Water Solutions Corporation"
  },
  {
    "Symbol": "ZY",
    "Name": "Zymergen Inc."
  },
  {
    "Symbol": "ZYME",
    "Name": "Zymeworks Inc."
  },
  {
    "Symbol": "ZYNE",
    "Name": "Zynerba Pharmaceuticals Inc."
  },
  {
    "Symbol": "ZYXI",
    "Name": "Zynex Inc."
  },
  {
    "Symbol": "ACOPY",
    "Name": "a2 Milk Co. Ltd."
  },
  {
    "Symbol": "AACAY",
    "Name": "AAC Technologies Holdings Inc."
  },
  {
    "Symbol": "ABB",
    "Name": "ABB Ltd."
  },
  {
    "Symbol": "ABCM",
    "Name": "Abcam PLC"
  },
  {
    "Symbol": "AAVMY",
    "Name": "ABN AMRO Bank N.V."
  },
  {
    "Symbol": "ABTZY",
    "Name": "Aboitiz Equity Ventures Inc."
  },
  {
    "Symbol": "ABZPY",
    "Name": "Aboitiz Power Corp."
  },
  {
    "Symbol": "SLFPY",
    "Name": "abrdn PLC"
  },
  {
    "Symbol": "AGRPY",
    "Name": "Absa Group Ltd."
  },
  {
    "Symbol": "ACCYY",
    "Name": "Accor S.A."
  },
  {
    "Symbol": "ANIOY",
    "Name": "Acerinox S.A."
  },
  {
    "Symbol": "ACHL",
    "Name": "Achilles Therapeutics PLC"
  },
  {
    "Symbol": "ACSAY",
    "Name": "Actividades de Construccion y Servicios S.A."
  },
  {
    "Symbol": "ADAG",
    "Name": "Adagene Inc."
  },
  {
    "Symbol": "ADAP",
    "Name": "Adaptimmune Therapeutics PLC"
  },
  {
    "Symbol": "ADOOY",
    "Name": "Adaro Energy"
  },
  {
    "Symbol": "ADXN",
    "Name": "Addex Therapeutics Ltd."
  },
  {
    "Symbol": "AHEXY",
    "Name": "Adecco Group A.G."
  },
  {
    "Symbol": "ADEVY",
    "Name": "Adevinta ASA"
  },
  {
    "Symbol": "ADDYY",
    "Name": "adidas AG"
  },
  {
    "Symbol": "AMIGY",
    "Name": "Admiral Group PLC"
  },
  {
    "Symbol": "AHI",
    "Name": "Advanced Human Imaging Ltd."
  },
  {
    "Symbol": "AVIFY",
    "Name": "Advanced Info Service PCL"
  },
  {
    "Symbol": "ATEYY",
    "Name": "Advantest Corp."
  },
  {
    "Symbol": "ADYEY",
    "Name": "Adyen N.V."
  },
  {
    "Symbol": "AEG",
    "Name": "Aegon N.V."
  },
  {
    "Symbol": "ANYYY",
    "Name": "Aena SME S.A."
  },
  {
    "Symbol": "AENZ",
    "Name": "Aenza S.A.A."
  },
  {
    "Symbol": "AONNY",
    "Name": "Aeon Co. Ltd."
  },
  {
    "Symbol": "ARRPY",
    "Name": "Aeroports de Paris"
  },
  {
    "Symbol": "AIH",
    "Name": "Aesthetic Medical International Holdings Group Ltd."
  },
  {
    "Symbol": "ASGLY",
    "Name": "AGC Inc."
  },
  {
    "Symbol": "AGESY",
    "Name": "Ageas N.V."
  },
  {
    "Symbol": "AFGVY",
    "Name": "Agfa-Gevaert N.V."
  },
  {
    "Symbol": "AGPYY",
    "Name": "Agile Group Holdings Ltd."
  },
  {
    "Symbol": "AGLXY",
    "Name": "AGL Energy Ltd."
  },
  {
    "Symbol": "API",
    "Name": "Agora Inc."
  },
  {
    "Symbol": "ACGBY",
    "Name": "Agricultural Bank of China Ltd."
  },
  {
    "Symbol": "AAGIY",
    "Name": "AIA Group Ltd."
  },
  {
    "Symbol": "AIRYY",
    "Name": "Air China Ltd."
  },
  {
    "Symbol": "AFLYY",
    "Name": "Air France-KLM"
  },
  {
    "Symbol": "AIQUY",
    "Name": "Air Liquide S.A."
  },
  {
    "Symbol": "EADSY",
    "Name": "Airbus SE"
  },
  {
    "Symbol": "ANTE",
    "Name": "AirNet Technology Inc."
  },
  {
    "Symbol": "AIPUY",
    "Name": "Airports of Thailand PCL"
  },
  {
    "Symbol": "AARTY",
    "Name": "Airtel Africa PLC"
  },
  {
    "Symbol": "ASEKY",
    "Name": "Aisin Corp."
  },
  {
    "Symbol": "AJINY",
    "Name": "Ajinomoto Co. Inc."
  },
  {
    "Symbol": "AKTX",
    "Name": "Akari Therapeutics PLC"
  },
  {
    "Symbol": "AKBTY",
    "Name": "Akbank T.A.S."
  },
  {
    "Symbol": "PKCPY",
    "Name": "AKR Corporindo"
  },
  {
    "Symbol": "AHG",
    "Name": "Akso Health Group"
  },
  {
    "Symbol": "AKZOY",
    "Name": "Akzo Nobel N.V."
  },
  {
    "Symbol": "ALFVY",
    "Name": "Alfa Laval AB"
  },
  {
    "Symbol": "",
    "Name": ""
  },
  {
    "Symbol": "",
    "Name": ""
  },
  {
    "Symbol": "ALBBY",
    "Name": "Alibaba Health Information Technology Ltd."
  },
  {
    "Symbol": "ALGGY",
    "Name": "Alliance Global Group Inc."
  },
  {
    "Symbol": "ALIZY",
    "Name": "Allianz SE"
  },
  {
    "Symbol": "ALBKY",
    "Name": "Alpha Services & Holdings S.A."
  },
  {
    "Symbol": "APELY",
    "Name": "Alps Alpine Co. Ltd."
  },
  {
    "Symbol": "ALSMY",
    "Name": "Alstom S.A."
  },
  {
    "Symbol": "ATHE",
    "Name": "Alterity Therapeutics Ltd."
  },
  {
    "Symbol": "AWCMY",
    "Name": "Alumina Ltd."
  },
  {
    "Symbol": "ACH",
    "Name": "Aluminum of China Ltd."
  },
  {
    "Symbol": "AMDLY",
    "Name": "Amada Co. Ltd."
  },
  {
    "Symbol": "AMADY",
    "Name": "Amadeus IT Group S.A."
  },
  {
    "Symbol": "AMRN",
    "Name": "Amarin PLC"
  },
  {
    "Symbol": "ABEV",
    "Name": "Ambev S.A."
  },
  {
    "Symbol": "AMBO",
    "Name": "Ambow Education Holding Ltd."
  },
  {
    "Symbol": "AMAM",
    "Name": "Ambrx Biopharma Inc."
  },
  {
    "Symbol": "AMBBY",
    "Name": "Ambu A/S"
  },
  {
    "Symbol": "AMOV",
    "Name": "America Movil S.A.B. de C.V."
  },
  {
    "Symbol": "AMX",
    "Name": "America Movil S.A.B. de C.V.  Series L"
  },
  {
    "Symbol": "AMLYY",
    "Name": "AMP Ltd."
  },
  {
    "Symbol": "CTXAY",
    "Name": "Ampol Ltd."
  },
  {
    "Symbol": "AMYT",
    "Name": "Amryt Pharma PLC"
  },
  {
    "Symbol": "AMSSY",
    "Name": "ams-OSRAM AG"
  },
  {
    "Symbol": "AMTD",
    "Name": "AMTD IDEA Group"
  },
  {
    "Symbol": "ALNPY",
    "Name": "ANA Holdings Inc."
  },
  {
    "Symbol": "AEBZY",
    "Name": "Anadolu Efes Biracilik ve Malt Sanayi A.S."
  },
  {
    "Symbol": "ADRZY",
    "Name": "Andritz AG"
  },
  {
    "Symbol": "PAEKY",
    "Name": "Aneka Tambang"
  },
  {
    "Symbol": "ANGPY",
    "Name": "Anglo American Platinum Ltd."
  },
  {
    "Symbol": "NGLOY",
    "Name": "Anglo American PLC"
  },
  {
    "Symbol": "AU",
    "Name": "AngloGold Ashanti Ltd."
  },
  {
    "Symbol": "BUD",
    "Name": "Anheuser-Busch InBev S.A."
  },
  {
    "Symbol": "AHCHY",
    "Name": "Anhui Conch Cement Co. Ltd."
  },
  {
    "Symbol": "ANPC",
    "Name": "AnPac Bio-Medical Science Co. Ltd."
  },
  {
    "Symbol": "AITUY",
    "Name": "Anritsu Corp."
  },
  {
    "Symbol": "ANSLY",
    "Name": "Ansell Ltd."
  },
  {
    "Symbol": "ANPDY",
    "Name": "Anta Sports Products Ltd."
  },
  {
    "Symbol": "ATONY",
    "Name": "Anton Oilfield Services Group"
  },
  {
    "Symbol": "AOZOY",
    "Name": "Aozora Bank Ltd."
  },
  {
    "Symbol": "APEMY",
    "Name": "Aperam S.A."
  },
  {
    "Symbol": "APXYY",
    "Name": "Appen Ltd."
  },
  {
    "Symbol": "ARCAY",
    "Name": "ARCADIS N.V."
  },
  {
    "Symbol": "ACKAY",
    "Name": "Arcelik A.S."
  },
  {
    "Symbol": "MT",
    "Name": "ArcelorMittal"
  },
  {
    "Symbol": "AMSIY",
    "Name": "ArcelorMittal South Africa Ltd."
  },
  {
    "Symbol": "ARGX",
    "Name": "arGEN-X SE"
  },
  {
    "Symbol": "ARBK",
    "Name": "Argo Blockchain PLC"
  },
  {
    "Symbol": "ARKAY",
    "Name": "Arkema"
  },
  {
    "Symbol": "ARZTY",
    "Name": "Aryzta AG"
  },
  {
    "Symbol": "AHKSY",
    "Name": "Asahi Kasei Corp."
  },
  {
    "Symbol": "ASND",
    "Name": "Ascendis Pharma A/S"
  },
  {
    "Symbol": "ASX",
    "Name": "ASE Technology Holding Co. Ltd."
  },
  {
    "Symbol": "ASHTY",
    "Name": "Ashtead Group PLC"
  },
  {
    "Symbol": "ASCCY",
    "Name": "Asics Corp."
  },
  {
    "Symbol": "ASLN",
    "Name": "Aslan Pharmaceuticals Ltd."
  },
  {
    "Symbol": "ASMIY",
    "Name": "ASM International N.V."
  },
  {
    "Symbol": "ASMVY",
    "Name": "ASM Pacific Technology Ltd."
  },
  {
    "Symbol": "ASML",
    "Name": "ASML Holding N.V."
  },
  {
    "Symbol": "ASOMY",
    "Name": "ASOS PLC"
  },
  {
    "Symbol": "APNHY",
    "Name": "Aspen Pharmacare Holdings Ltd."
  },
  {
    "Symbol": "ASAZY",
    "Name": "Assa Abloy AB"
  },
  {
    "Symbol": "ASOZY",
    "Name": "Asseco Poland S.A."
  },
  {
    "Symbol": "ARZGY",
    "Name": "Assicurazioni Generali S.p.A."
  },
  {
    "Symbol": "ASBFY",
    "Name": "Associated British Foods PLC"
  },
  {
    "Symbol": "ALPMY",
    "Name": "Astellas Pharma Inc."
  },
  {
    "Symbol": "ARGGY",
    "Name": "Aston Martin Lagonda Global Holdings PLC"
  },
  {
    "Symbol": "AAGRY",
    "Name": "Astra Agro Lestari"
  },
  {
    "Symbol": "PTAIY",
    "Name": "Astra International"
  },
  {
    "Symbol": "AZN",
    "Name": "AstraZeneca PLC"
  },
  {
    "Symbol": "ASUUY",
    "Name": "ASUSTeK Computer Inc. GDR"
  },
  {
    "Symbol": "ASXFY",
    "Name": "ASX Ltd."
  },
  {
    "Symbol": "AACG",
    "Name": "ATA Creativity Global"
  },
  {
    "Symbol": "ATASY",
    "Name": "Atlantia S.p.A."
  },
  {
    "Symbol": "ATLKY",
    "Name": "Atlas Copco AB"
  },
  {
    "Symbol": "AEXAY",
    "Name": "Atos"
  },
  {
    "Symbol": "RERE",
    "Name": "ATRenew Inc."
  },
  {
    "Symbol": "ATVDY",
    "Name": "Atresmedia de Medios de Comunicacion S.A."
  },
  {
    "Symbol": "AUOTY",
    "Name": "AU Optronics Corp."
  },
  {
    "Symbol": "AUKNY",
    "Name": "Auckland International Airport Ltd."
  },
  {
    "Symbol": "ADPXY",
    "Name": "Audio Pixels Holdings Ltd."
  },
  {
    "Symbol": "JG",
    "Name": "Aurora Mobile Ltd."
  },
  {
    "Symbol": "AIAGY",
    "Name": "Aurubis AG"
  },
  {
    "Symbol": "ANZBY",
    "Name": "Australia & New Zealand Banking Group Ltd."
  },
  {
    "Symbol": "AAYYY",
    "Name": "Australian Agricultural Co. Ltd."
  },
  {
    "Symbol": "ATDRY",
    "Name": "Auto Trader Group PLC"
  },
  {
    "Symbol": "ATHM",
    "Name": "Autohome Inc."
  },
  {
    "Symbol": "AUTL",
    "Name": "Autolus Therapeutics Ltd."
  },
  {
    "Symbol": "AVDL",
    "Name": "Avadel Pharmaceuticals PLC"
  },
  {
    "Symbol": "AVVYY",
    "Name": "Aveva Group PLC"
  },
  {
    "Symbol": "AVVIY",
    "Name": "Aviva PLC"
  },
  {
    "Symbol": "AXAHY",
    "Name": "AXA S.A."
  },
  {
    "Symbol": "AYALY",
    "Name": "Ayala Corp."
  },
  {
    "Symbol": "AZIHY",
    "Name": "Azimut Holding S.p.A."
  },
  {
    "Symbol": "AZTGY",
    "Name": "Aztech Global Ltd."
  },
  {
    "Symbol": "AZUL",
    "Name": "Azul S.A."
  },
  {
    "Symbol": "BMRRY",
    "Name": "B&M European Value Retail S.A."
  },
  {
    "Symbol": "BOLSY",
    "Name": "B3 S/A Brasil Bolsa Balcao"
  },
  {
    "Symbol": "BAESY",
    "Name": "BAE Systems PLC"
  },
  {
    "Symbol": "BIDU",
    "Name": "Baidu Inc."
  },
  {
    "Symbol": "BAFYY",
    "Name": "Balfour Beatty PLC"
  },
  {
    "Symbol": "BLHEY",
    "Name": "Baloise-Holding AG"
  },
  {
    "Symbol": "BNCDY",
    "Name": "Banca Mediolanum S.p.A."
  },
  {
    "Symbol": "BBAR",
    "Name": "Banco BBVA Argentina S.A."
  },
  {
    "Symbol": "BBVA",
    "Name": "Banco Bilbao Vizcaya Argentaria S.A."
  },
  {
    "Symbol": "BBDO",
    "Name": "Banco Bradesco S/A Ord"
  },
  {
    "Symbol": "BBD",
    "Name": "Banco Bradesco S/A Pref"
  },
  {
    "Symbol": "BCH",
    "Name": "Banco de Chile"
  },
  {
    "Symbol": "BNDSY",
    "Name": "Banco de Sabadell S.A."
  },
  {
    "Symbol": "BDORY",
    "Name": "Banco do Brasil S/A"
  },
  {
    "Symbol": "BMA",
    "Name": "Banco Macro S.A."
  },
  {
    "Symbol": "BSBR",
    "Name": "Banco Santander Brasil S.A."
  },
  {
    "Symbol": "BSMX",
    "Name": "Banco Santander Mexico, S.A., Institucion de Banca Multiple, Grupo Financiero Santander Mexico"
  },
  {
    "Symbol": "SAN",
    "Name": "Banco Santander S.A."
  },
  {
    "Symbol": "BSAC",
    "Name": "Banco Santander-Chile"
  },
  {
    "Symbol": "CIB",
    "Name": "BanColombia S.A."
  },
  {
    "Symbol": "NCBDY",
    "Name": "BANDAI NAMCO Holdings Inc."
  },
  {
    "Symbol": "BKKLY",
    "Name": "Bangkok Bank PCL"
  },
  {
    "Symbol": "PBCRY",
    "Name": "Bank Central Asia"
  },
  {
    "Symbol": "BKHYY",
    "Name": "Bank Hapoalim B.M."
  },
  {
    "Symbol": "PPERY",
    "Name": "Bank Mandiri Persero"
  },
  {
    "Symbol": "PTBRY",
    "Name": "Bank Negara Indonesia"
  },
  {
    "Symbol": "BACHY",
    "Name": "Bank of China Ltd."
  },
  {
    "Symbol": "BCMXY",
    "Name": "Bank of Communications Co. Ltd."
  },
  {
    "Symbol": "BKEAY",
    "Name": "Bank of East Asia Ltd."
  },
  {
    "Symbol": "BKRIY",
    "Name": "Bank of Ireland Group PLC"
  },
  {
    "Symbol": "BPHLY",
    "Name": "Bank of the Philippine Islands"
  },
  {
    "Symbol": "BKRKY",
    "Name": "Bank Rakyat Indonesia  Rep B Shares"
  },
  {
    "Symbol": "BKNIY",
    "Name": "Bankinter S.A."
  },
  {
    "Symbol": "BZUN",
    "Name": "Baozun Inc."
  },
  {
    "Symbol": "BCS",
    "Name": "Barclays PLC"
  },
  {
    "Symbol": "BCNAY",
    "Name": "Barco N.V."
  },
  {
    "Symbol": "BRRAY",
    "Name": "Barloworld Ltd."
  },
  {
    "Symbol": "BTDPY",
    "Name": "Barratt Developments PLC"
  },
  {
    "Symbol": "BRRLY",
    "Name": "Barry Callebaut AG"
  },
  {
    "Symbol": "BASFY",
    "Name": "BASF SE"
  },
  {
    "Symbol": "BVNRY",
    "Name": "Bavarian Nordic A/S"
  },
  {
    "Symbol": "BAYRY",
    "Name": "Bayer AG"
  },
  {
    "Symbol": "BMWYY",
    "Name": "Bayerische Motoren Werke AG"
  },
  {
    "Symbol": "BBSEY",
    "Name": "BB Seguridade Participacoes S/A"
  },
  {
    "Symbol": "BBMPY",
    "Name": "BBMG Corp."
  },
  {
    "Symbol": "BDOUY",
    "Name": "BDO Unibank Inc."
  },
  {
    "Symbol": "BESIY",
    "Name": "BE Semiconductor Industries N.V."
  },
  {
    "Symbol": "BCHEY",
    "Name": "Beach Energy Ltd."
  },
  {
    "Symbol": "BECTY",
    "Name": "Bechtle AG"
  },
  {
    "Symbol": "BDRFY",
    "Name": "Beiersdorf AG"
  },
  {
    "Symbol": "BGNE",
    "Name": "BeiGene Ltd."
  },
  {
    "Symbol": "BJCHY",
    "Name": "Beijing Capital International Airport Co. Ltd."
  },
  {
    "Symbol": "BJWTY",
    "Name": "Beijing Enterprises Water Group Ltd."
  },
  {
    "Symbol": "BLTE",
    "Name": "Belite Bio Inc."
  },
  {
    "Symbol": "BSEFY",
    "Name": "Benesse Holdings Inc."
  },
  {
    "Symbol": "BKBSY",
    "Name": "Berkah Beton Sadaya"
  },
  {
    "Symbol": "BKGFY",
    "Name": "Berkeley Group Holdings PLC"
  },
  {
    "Symbol": "BEST",
    "Name": "BEST Inc."
  },
  {
    "Symbol": "BHP",
    "Name": "BHP Group Ltd."
  },
  {
    "Symbol": "BCCOY",
    "Name": "BICO Group AB"
  },
  {
    "Symbol": "BCYC",
    "Name": "Bicycle Therapeutics Ltd."
  },
  {
    "Symbol": "BDDDY",
    "Name": "Bid Ltd."
  },
  {
    "Symbol": "BDVSY",
    "Name": "Bidvest Group Ltd."
  },
  {
    "Symbol": "BFLBY",
    "Name": "Bilfinger SE"
  },
  {
    "Symbol": "BILI",
    "Name": "Bilibili Inc."
  },
  {
    "Symbol": "BFAGY",
    "Name": "Biofrontera AG"
  },
  {
    "Symbol": "BIOGY",
    "Name": "BioGaia AB"
  },
  {
    "Symbol": "BLRX",
    "Name": "BioLine RX Ltd."
  },
  {
    "Symbol": "BVXV",
    "Name": "BiondVax Pharmaceuticals Ltd."
  },
  {
    "Symbol": "BNOX",
    "Name": "Bionomics Ltd."
  },
  {
    "Symbol": "BNTX",
    "Name": "BioNTech SE"
  },
  {
    "Symbol": "22UA",
    "Name": "BioNTech SE"
  },
  {
    "Symbol": "BPTS",
    "Name": "Biophytis S.A."
  },
  {
    "Symbol": "BTCM",
    "Name": "BIT Mining Ltd."
  },
  {
    "Symbol": "BLCT",
    "Name": "BlueCity Holdings Ltd."
  },
  {
    "Symbol": "BLSFY",
    "Name": "Bluescope Steel Ltd."
  },
  {
    "Symbol": "BNPQY",
    "Name": "BNP Paribas S.A."
  },
  {
    "Symbol": "BHKLY",
    "Name": "BOC Hong Kong Holdings Ltd."
  },
  {
    "Symbol": "BDNNY",
    "Name": "Boliden AB"
  },
  {
    "Symbol": "BHOOY",
    "Name": "Boohoo Group PLC"
  },
  {
    "Symbol": "BOZTY",
    "Name": "Boozt AB"
  },
  {
    "Symbol": "BQ",
    "Name": "Boqii Holding Ltd."
  },
  {
    "Symbol": "BOALY",
    "Name": "Boral Ltd."
  },
  {
    "Symbol": "BRGAY",
    "Name": "Borregaard ASA"
  },
  {
    "Symbol": "BSDGY",
    "Name": "Bosideng International Holdings Ltd."
  },
  {
    "Symbol": "BOUYY",
    "Name": "Bouygues S.A."
  },
  {
    "Symbol": "BP",
    "Name": "BP PLC"
  },
  {
    "Symbol": "BPOSY",
    "Name": "bpost"
  },
  {
    "Symbol": "BRMSY",
    "Name": "BR Malls Participacoes S.A."
  },
  {
    "Symbol": "BCHPY",
    "Name": "BrainChip Holdings Ltd."
  },
  {
    "Symbol": "BWAY",
    "Name": "Brainsway Ltd."
  },
  {
    "Symbol": "BXBLY",
    "Name": "Brambles Ltd."
  },
  {
    "Symbol": "LND",
    "Name": "BrasilAgro-Companhia Brasileira de Propriedades Agricolas"
  },
  {
    "Symbol": "BAK",
    "Name": "Braskem S/A"
  },
  {
    "Symbol": "BNTGY",
    "Name": "Brenntag SE"
  },
  {
    "Symbol": "BRFS",
    "Name": "BRF S.A."
  },
  {
    "Symbol": "BRDCY",
    "Name": "Bridgestone Corp."
  },
  {
    "Symbol": "BEDU",
    "Name": "Bright Scholar Education Holdings Ltd."
  },
  {
    "Symbol": "BTI",
    "Name": "British American Tobacco PLC"
  },
  {
    "Symbol": "BTLCY",
    "Name": "British Land Co. PLC"
  },
  {
    "Symbol": "BTVCY",
    "Name": "Britvic PLC"
  },
  {
    "Symbol": "BRTHY",
    "Name": "Brother Industries Ltd."
  },
  {
    "Symbol": "BCUCY",
    "Name": "Brunello Cucinelli S.p.A."
  },
  {
    "Symbol": "BDWBY",
    "Name": "Budweiser Brewing Co. APAC Ltd."
  },
  {
    "Symbol": "TBNGY",
    "Name": "Bukit Asam"
  },
  {
    "Symbol": "BZLFY",
    "Name": "Bunzl PLC"
  },
  {
    "Symbol": "BURBY",
    "Name": "Burberry Group PLC"
  },
  {
    "Symbol": "BVVBY",
    "Name": "Bureau Veritas S.A."
  },
  {
    "Symbol": "BNR",
    "Name": "Burning Rock Biotech Ltd."
  },
  {
    "Symbol": "BZZUY",
    "Name": "Buzzi Unicem S.p.A."
  },
  {
    "Symbol": "BWLLY",
    "Name": "BW LPG Ltd."
  },
  {
    "Symbol": "BYDDY",
    "Name": "BYD Co. Ltd."
  },
  {
    "Symbol": "BYDIY",
    "Name": "BYD Electronic International Co. Ltd."
  },
  {
    "Symbol": "CCGPY",
    "Name": "C&C Group PLC"
  },
  {
    "Symbol": "CVHSY",
    "Name": "Cablevision Holding S.A."
  },
  {
    "Symbol": "CAIXY",
    "Name": "CaixaBank S.A."
  },
  {
    "Symbol": "CLBEY",
    "Name": "Calbee Inc."
  },
  {
    "Symbol": "CALT",
    "Name": "Calliditas Therapeutics AB"
  },
  {
    "Symbol": "CAN",
    "Name": "Canaan Inc."
  },
  {
    "Symbol": "CANF",
    "Name": "Can-Fite Biopharma Ltd."
  },
  {
    "Symbol": "CANG",
    "Name": "Cango Inc."
  },
  {
    "Symbol": "CAJ",
    "Name": "Canon Inc."
  },
  {
    "Symbol": "CCOEY",
    "Name": "Capcom Co. Ltd."
  },
  {
    "Symbol": "CGEMY",
    "Name": "Capgemini SE"
  },
  {
    "Symbol": "CTAGY",
    "Name": "Capita PLC"
  },
  {
    "Symbol": "CKHGY",
    "Name": "Capitec Bank Holdings Ltd."
  },
  {
    "Symbol": "CRNCY",
    "Name": "Capricorn Energy"
  },
  {
    "Symbol": "CZMWY",
    "Name": "Carl Zeiss Meditec AG"
  },
  {
    "Symbol": "CABGY",
    "Name": "Carlsberg  Rep B Shares"
  },
  {
    "Symbol": "CUK",
    "Name": "Carnival PLC"
  },
  {
    "Symbol": "CRRFY",
    "Name": "Carrefour S.A."
  },
  {
    "Symbol": "CSXXY",
    "Name": "carsales.com Ltd."
  },
  {
    "Symbol": "CGUSY",
    "Name": "Casino Guichard-Perrachon S.A."
  },
  {
    "Symbol": "CSIOY",
    "Name": "Casio Computer Co. Ltd."
  },
  {
    "Symbol": "CPCAY",
    "Name": "Cathay Pacific Airways Ltd."
  },
  {
    "Symbol": "OTGLY",
    "Name": "CD Projekt S.A."
  },
  {
    "Symbol": "MTTRY",
    "Name": "Ceconomy AG"
  },
  {
    "Symbol": "CLLS",
    "Name": "Cellectis S.A."
  },
  {
    "Symbol": "CLLNY",
    "Name": "Cellnex Telecom S.A."
  },
  {
    "Symbol": "CYAD",
    "Name": "Celyad Oncology S.A."
  },
  {
    "Symbol": "CPAC",
    "Name": "Cementos Pacasmayo S.A.A."
  },
  {
    "Symbol": "CX",
    "Name": "Cemex S.A.B. de C.V."
  },
  {
    "Symbol": "CNTA",
    "Name": "Centessa Pharmaceuticals PLC"
  },
  {
    "Symbol": "EBR",
    "Name": "Centrais Eletricas Brasileiras S/A"
  },
  {
    "Symbol": "EBR.B",
    "Name": "Centrais Eletricas Brasileiras S/A Pfd."
  },
  {
    "Symbol": "CJPRY",
    "Name": "Central Japan Railway Co."
  },
  {
    "Symbol": "CEPU",
    "Name": "Central Puerto S.A."
  },
  {
    "Symbol": "CPYYY",
    "Name": "Centrica PLC"
  },
  {
    "Symbol": "CRPHY",
    "Name": "Ceres Power Holdings PLC"
  },
  {
    "Symbol": "CGGYY",
    "Name": "CGG"
  },
  {
    "Symbol": "CMCM",
    "Name": "Cheetah Mobile Inc."
  },
  {
    "Symbol": "CMMB",
    "Name": "Chemomab Therapeutics Ltd."
  },
  {
    "Symbol": "CMGMY",
    "Name": "Chemring Group PLC"
  },
  {
    "Symbol": "CHBAY",
    "Name": "Chiba Bank Ltd."
  },
  {
    "Symbol": "CHCJY",
    "Name": "China CITIC Bank"
  },
  {
    "Symbol": "CCOZY",
    "Name": "China Coal Energy Co. Ltd."
  },
  {
    "Symbol": "CICHY",
    "Name": "China Construction Bank Corp."
  },
  {
    "Symbol": "CEA",
    "Name": "China Eastern Airlines Ltd."
  },
  {
    "Symbol": "EGRNY",
    "Name": "China Evergrande Group"
  },
  {
    "Symbol": "CFEIY",
    "Name": "China Feihe Ltd."
  },
  {
    "Symbol": "JRJCY",
    "Name": "China Finance Online Co. Ltd."
  },
  {
    "Symbol": "CHFHY",
    "Name": "China Foods Ltd."
  },
  {
    "Symbol": "CGHLY",
    "Name": "China Gas Holdings Ltd."
  },
  {
    "Symbol": "CHHQY",
    "Name": "China Hongqiao Group Ltd."
  },
  {
    "Symbol": "CIH",
    "Name": "China Index Holdings Ltd."
  },
  {
    "Symbol": "LFC",
    "Name": "China Life Insurance Co. Ltd."
  },
  {
    "Symbol": "CLPXY",
    "Name": "China Longyuan Power Group Ltd."
  },
  {
    "Symbol": "CIADY",
    "Name": "China Mengniu Dairy Co. Ltd."
  },
  {
    "Symbol": "CIHKY",
    "Name": "China Merchants Bank Co. Ltd."
  },
  {
    "Symbol": "CMAKY",
    "Name": "China Minsheng Banking Ltd."
  },
  {
    "Symbol": "CBUMY",
    "Name": "China National Building Material Co. Ltd."
  },
  {
    "Symbol": "COE",
    "Name": "China Online Education Group"
  },
  {
    "Symbol": "CAOVY",
    "Name": "China Overseas Land & Investment Ltd."
  },
  {
    "Symbol": "CHPXY",
    "Name": "China Pacific Insurance Group Co. Ltd"
  },
  {
    "Symbol": "CRHKY",
    "Name": "China Resources Beer Holdings Co. Ltd."
  },
  {
    "Symbol": "CARCY",
    "Name": "China Resources Cement Holdings Ltd."
  },
  {
    "Symbol": "CRBJY",
    "Name": "China Resources Land Ltd."
  },
  {
    "Symbol": "CRPJY",
    "Name": "China Resources Power Holdings Co. Ltd."
  },
  {
    "Symbol": "CSUAY",
    "Name": "China Shenhua Energy Co. Ltd."
  },
  {
    "Symbol": "ZNH",
    "Name": "China Southern Airlines Co. Ltd."
  },
  {
    "Symbol": "CHVKY",
    "Name": "China Vanke Co. Ltd."
  },
  {
    "Symbol": "CD",
    "Name": "Chindata Group Holdings Ltd."
  },
  {
    "Symbol": "IMOS",
    "Name": "ChipMOS Technologies Inc."
  },
  {
    "Symbol": "CHRYY",
    "Name": "Chorus Ltd."
  },
  {
    "Symbol": "CJEWY",
    "Name": "Chow Tai Fook Jewellery Group Ltd."
  },
  {
    "Symbol": "CHYHY",
    "Name": "Chr. Hansen Holding A/S"
  },
  {
    "Symbol": "CHDRY",
    "Name": "Christian Dior SE"
  },
  {
    "Symbol": "CHGCY",
    "Name": "Chugai Pharmaceutical Co. Ltd."
  },
  {
    "Symbol": "CHT",
    "Name": "Chunghwa Telecom Co. Ltd."
  },
  {
    "Symbol": "CIOXY",
    "Name": "Cielo S/A"
  },
  {
    "Symbol": "CNWGY",
    "Name": "Cineworld Group PLC"
  },
  {
    "Symbol": "CTPCY",
    "Name": "CITIC Ltd."
  },
  {
    "Symbol": "CDEVY",
    "Name": "City Developments Ltd."
  },
  {
    "Symbol": "CKHUY",
    "Name": "CK Hutchison Holdings Ltd."
  },
  {
    "Symbol": "CKISY",
    "Name": "CK Infrastructure Holdings Ltd."
  },
  {
    "Symbol": "CLZNY",
    "Name": "Clariant AG"
  },
  {
    "Symbol": "CLCGY",
    "Name": "Clicks Group Ltd."
  },
  {
    "Symbol": "CLVLY",
    "Name": "Clinuvel Pharmaceuticals Ltd."
  },
  {
    "Symbol": "RAAS",
    "Name": "Cloopen Group Holding Ltd."
  },
  {
    "Symbol": "CBGPY",
    "Name": "Close Brothers Group PLC"
  },
  {
    "Symbol": "CLPHY",
    "Name": "CLP Holdings Ltd."
  },
  {
    "Symbol": "CNF",
    "Name": "CNFinance Holdings Ltd."
  },
  {
    "Symbol": "CNPAY",
    "Name": "CNP Assurances SA"
  },
  {
    "Symbol": "CCOJY",
    "Name": "Coca-Cola Bottlers Japan Holdings Inc."
  },
  {
    "Symbol": "KOF",
    "Name": "Coca-Cola Femsa S.A.B. de C.V."
  },
  {
    "Symbol": "CCHGY",
    "Name": "Coca-Cola HBC AG"
  },
  {
    "Symbol": "CHEOY",
    "Name": "Cochlear Ltd."
  },
  {
    "Symbol": "COGNY",
    "Name": "Cogna Educacional S/A"
  },
  {
    "Symbol": "CLPBY",
    "Name": "Coloplast A/S"
  },
  {
    "Symbol": "CIBEY",
    "Name": "Commercial International Bank Egypt S.A.E."
  },
  {
    "Symbol": "CMGGF",
    "Name": "Commercial International Bank Egypt S.A.E. GDR Reg S"
  },
  {
    "Symbol": "CRZBY",
    "Name": "Commerzbank AG"
  },
  {
    "Symbol": "CMWAY",
    "Name": "Commonwealth Bank of Australia"
  },
  {
    "Symbol": "CODYY",
    "Name": "Compagnie de Saint-Gobain S.A."
  },
  {
    "Symbol": "CFRUY",
    "Name": "Compagnie Financiere Richemont S.A."
  },
  {
    "Symbol": "MGDDY",
    "Name": "Compagnie Generale des Etablissements Michelin"
  },
  {
    "Symbol": "CBD",
    "Name": "Companhia Brasileira de Distribuicao Grupo Pao de Acucar"
  },
  {
    "Symbol": "SBS",
    "Name": "Companhia de Saneamento Basico do Estado de Sao Paulo"
  },
  {
    "Symbol": "CTPZY",
    "Name": "Companhia de Transmissao de Energia Eletrica Paulista"
  },
  {
    "Symbol": "CIG.C",
    "Name": "Companhia Energetica de Minas Gerais-Cemig"
  },
  {
    "Symbol": "CIG",
    "Name": "Companhia Energetica de Minas Gerais-Cemig"
  },
  {
    "Symbol": "ELP",
    "Name": "Companhia Paranaense de Energia-COPEL"
  },
  {
    "Symbol": "SID",
    "Name": "Companhia Siderurgica Nacional"
  },
  {
    "Symbol": "CCU",
    "Name": "Compania Cervecerias Unidas S.A."
  },
  {
    "Symbol": "BVN",
    "Name": "Compania de Minas Buenaventura S.A."
  },
  {
    "Symbol": "CMPGY",
    "Name": "Compass Group PLC"
  },
  {
    "Symbol": "CMPS",
    "Name": "COMPASS Pathways PLC"
  },
  {
    "Symbol": "CMSQY",
    "Name": "Computershare Ltd."
  },
  {
    "Symbol": "CCM",
    "Name": "Concord Medical Services Holdings Ltd."
  },
  {
    "Symbol": "CNTB",
    "Name": "Connect Biopharma Holdings Ltd."
  },
  {
    "Symbol": "CTTAY",
    "Name": "Continental AG"
  },
  {
    "Symbol": "VLRS",
    "Name": "Controladora Vuela Compania de Aviacion S.A.B. de C.V."
  },
  {
    "Symbol": "CNVVY",
    "Name": "ConvaTec Group PLC"
  },
  {
    "Symbol": "CTK",
    "Name": "CooTek Cayman Inc."
  },
  {
    "Symbol": "CSNVY",
    "Name": "Corbion N.V."
  },
  {
    "Symbol": "CSAN",
    "Name": "Cosan S.A."
  },
  {
    "Symbol": "CICOY",
    "Name": "COSCO SHIPPING Holdings Co. Ltd."
  },
  {
    "Symbol": "CTRYY",
    "Name": "Country Garden Holdings Co. Ltd."
  },
  {
    "Symbol": "CGSHY",
    "Name": "Country Garden Services Holdings Co. Ltd."
  },
  {
    "Symbol": "COVTY",
    "Name": "Covestro AG"
  },
  {
    "Symbol": "FNCDY",
    "Name": "Covivio S.A."
  },
  {
    "Symbol": "CRARY",
    "Name": "Credit Agricole S.A."
  },
  {
    "Symbol": "CS",
    "Name": "Credit Suisse Group AG"
  },
  {
    "Symbol": "CRESY",
    "Name": "Cresud S.A.C.I.F. y A."
  },
  {
    "Symbol": "CRH",
    "Name": "CRH PLC"
  },
  {
    "Symbol": "CRTO",
    "Name": "Criteo S.A."
  },
  {
    "Symbol": "COIHY",
    "Name": "Croda International PLC"
  },
  {
    "Symbol": "CSYJY",
    "Name": "CSE Global Ltd."
  },
  {
    "Symbol": "CSLLY",
    "Name": "CSL Ltd."
  },
  {
    "Symbol": "CSPCY",
    "Name": "CSPC Pharmaceutical Group Ltd."
  },
  {
    "Symbol": "CEVMY",
    "Name": "CTS Eventim AG"
  },
  {
    "Symbol": "CTTPY",
    "Name": "CTT-Correios de Portugal S.A."
  },
  {
    "Symbol": "CYGIY",
    "Name": "CyberAgent Inc. GDR"
  },
  {
    "Symbol": "CYBQY",
    "Name": "Cyberdyne Inc."
  },
  {
    "Symbol": "CYRBY",
    "Name": "Cyrela Brazil Realty S.A."
  },
  {
    "Symbol": "DLNDY",
    "Name": "D&L Industries Inc."
  },
  {
    "Symbol": "DADA",
    "Name": "Dada Nexus Ltd."
  },
  {
    "Symbol": "DSFGY",
    "Name": "Dah Sing Financial Holdings Ltd."
  },
  {
    "Symbol": "DNPLY",
    "Name": "Dai Nippon Printing Co. Ltd."
  },
  {
    "Symbol": "DFKCY",
    "Name": "Daifuku Co. Ltd."
  },
  {
    "Symbol": "DLICY",
    "Name": "Dai-ichi Life Holdings Inc."
  },
  {
    "Symbol": "DSNKY",
    "Name": "Daiichi Sankyo Co. Ltd."
  },
  {
    "Symbol": "DKILY",
    "Name": "Daikin Industries Ltd."
  },
  {
    "Symbol": "DTRUY",
    "Name": "Daimler Truck Holding AG"
  },
  {
    "Symbol": "DFIHY",
    "Name": "Dairy Farm International Holdings Ltd."
  },
  {
    "Symbol": "DIFTY",
    "Name": "Daito Trust Construction Co. Ltd."
  },
  {
    "Symbol": "DWAHY",
    "Name": "Daiwa House Industry Co. Ltd."
  },
  {
    "Symbol": "DSEEY",
    "Name": "Daiwa Securities Group Inc."
  },
  {
    "Symbol": "DNKLY",
    "Name": "Danakali Ltd."
  },
  {
    "Symbol": "DNIYY",
    "Name": "Danieli & C. Officine Meccaniche S.p.A."
  },
  {
    "Symbol": "DANOY",
    "Name": "Danone S.A."
  },
  {
    "Symbol": "DNKEY",
    "Name": "Danske Bank A/S"
  },
  {
    "Symbol": "DQ",
    "Name": "Daqo New Energy Corp."
  },
  {
    "Symbol": "DRKTY",
    "Name": "Darktrace PLC"
  },
  {
    "Symbol": "DASTY",
    "Name": "Dassault Systemes SE"
  },
  {
    "Symbol": "DVCMY",
    "Name": "Davide Campari-Milano N.V."
  },
  {
    "Symbol": "DBSDY",
    "Name": "DBS Group Holdings Ltd."
  },
  {
    "Symbol": "DBVT",
    "Name": "DBV Technologies S.A."
  },
  {
    "Symbol": "DCCPY",
    "Name": "DCC PLC"
  },
  {
    "Symbol": "DLUEY",
    "Name": "De La Rue PLC"
  },
  {
    "Symbol": "DPHAY",
    "Name": "Dechra Pharmaceuticals PLC"
  },
  {
    "Symbol": "DELKY",
    "Name": "Delek Group Ltd."
  },
  {
    "Symbol": "DELHY",
    "Name": "Delivery Hero SE"
  },
  {
    "Symbol": "WILYY",
    "Name": "Demant A/S"
  },
  {
    "Symbol": "DNZOY",
    "Name": "Denso Corp."
  },
  {
    "Symbol": "DNTUY",
    "Name": "Dentsu Group Inc."
  },
  {
    "Symbol": "DBOEY",
    "Name": "Deutsche Boerse AG"
  },
  {
    "Symbol": "DLAKY",
    "Name": "Deutsche Lufthansa AG"
  },
  {
    "Symbol": "DPSGY",
    "Name": "Deutsche Post AG"
  },
  {
    "Symbol": "DTEGY",
    "Name": "Deutsche Telekom AG"
  },
  {
    "Symbol": "DTCWY",
    "Name": "Deutsche Wohnen SE"
  },
  {
    "Symbol": "DEO",
    "Name": "Diageo PLC"
  },
  {
    "Symbol": "DIDI",
    "Name": "DiDi Global Inc."
  },
  {
    "Symbol": "SIETY",
    "Name": "D'Ieteren N.V. S.A."
  },
  {
    "Symbol": "DDL",
    "Name": "Dingdong Cayman Ltd."
  },
  {
    "Symbol": "DNOPY",
    "Name": "Dino Polska S.A."
  },
  {
    "Symbol": "DSCSY",
    "Name": "Disco Corp."
  },
  {
    "Symbol": "DIDAY",
    "Name": "Distribuidora Internacional de Alimentacion S.A."
  },
  {
    "Symbol": "HEPS",
    "Name": "D-Market Electronic Services & Trading"
  },
  {
    "Symbol": "DMCHY",
    "Name": "DMCI Holdings Inc."
  },
  {
    "Symbol": "DNBBY",
    "Name": "DnB Bank ASA"
  },
  {
    "Symbol": "DMZPY",
    "Name": "Domino's Pizza Enterprises Ltd."
  },
  {
    "Symbol": "DPUKY",
    "Name": "Domino's Pizza Group PLC"
  },
  {
    "Symbol": "DNFGY",
    "Name": "Dongfeng Motor Group Co. Ltd."
  },
  {
    "Symbol": "DRMKY",
    "Name": "dormakaba Holding AG"
  },
  {
    "Symbol": "DDI",
    "Name": "DoubleDown Interactive Co. Ltd."
  },
  {
    "Symbol": "DOYU",
    "Name": "DouYu International Holdings Ltd."
  },
  {
    "Symbol": "RDY",
    "Name": "Dr. Reddy's Laboratories Ltd."
  },
  {
    "Symbol": "DRXGY",
    "Name": "Drax Group PLC"
  },
  {
    "Symbol": "DRD",
    "Name": "DRDGOLD Ltd."
  },
  {
    "Symbol": "DSDVY",
    "Name": "DSV A/S"
  },
  {
    "Symbol": "DURYY",
    "Name": "Duerr AG"
  },
  {
    "Symbol": "DUFRY",
    "Name": "Dufry AG"
  },
  {
    "Symbol": "DXF",
    "Name": "Dunxin Financial Holdings Ltd."
  },
  {
    "Symbol": "EONGY",
    "Name": "E.ON SE"
  },
  {
    "Symbol": "EJPRY",
    "Name": "East Japan Railway Co."
  },
  {
    "Symbol": "ESYJY",
    "Name": "easyJet PLC"
  },
  {
    "Symbol": "EBCOY",
    "Name": "Ebara Corp."
  },
  {
    "Symbol": "EBRPY",
    "Name": "Ebro Foods S.A."
  },
  {
    "Symbol": "MOHO",
    "Name": "ECMOHO Ltd."
  },
  {
    "Symbol": "WAVE",
    "Name": "Eco Wave Power Global AB"
  },
  {
    "Symbol": "EC",
    "Name": "Ecopetrol S.A."
  },
  {
    "Symbol": "EDAP",
    "Name": "EDAP TMS S.A."
  },
  {
    "Symbol": "EDNMY",
    "Name": "Edenred"
  },
  {
    "Symbol": "EDPFY",
    "Name": "EDP-Energias de Portugal S.A."
  },
  {
    "Symbol": "EFGXY",
    "Name": "EFG International AG"
  },
  {
    "Symbol": "EH",
    "Name": "EHang Holdings Ltd."
  },
  {
    "Symbol": "EFGSY",
    "Name": "Eiffage S.A."
  },
  {
    "Symbol": "ESALY",
    "Name": "Eisai Co. Ltd."
  },
  {
    "Symbol": "EDESY",
    "Name": "Elders Ltd."
  },
  {
    "Symbol": "ECIFY",
    "Name": "Electricite de France"
  },
  {
    "Symbol": "ELUXY",
    "Name": "Electrolux AB"
  },
  {
    "Symbol": "EKTAY",
    "Name": "Elekta AB"
  },
  {
    "Symbol": "ELMTY",
    "Name": "Elementis PLC"
  },
  {
    "Symbol": "ELMUY",
    "Name": "Elisa Oyj"
  },
  {
    "Symbol": "ELLRY",
    "Name": "ElringKlinger AG"
  },
  {
    "Symbol": "AKO.A",
    "Name": "Embotelladora Andina S.A. Series A"
  },
  {
    "Symbol": "ERJ",
    "Name": "Embraer S/A"
  },
  {
    "Symbol": "EDN",
    "Name": "Empresa Distribuidora y Comercializadora Norte S.A. Cl B"
  },
  {
    "Symbol": "ENGGY",
    "Name": "Enagas S.A."
  },
  {
    "Symbol": "DAVA",
    "Name": "Endava Ltd."
  },
  {
    "Symbol": "ELEZY",
    "Name": "Endesa S.A."
  },
  {
    "Symbol": "ENIA",
    "Name": "Enel Americas S.A."
  },
  {
    "Symbol": "ENIC",
    "Name": "Enel Chile S.A."
  },
  {
    "Symbol": "ENLAY",
    "Name": "Enel S.p.A."
  },
  {
    "Symbol": "JXHLY",
    "Name": "Eneos Holdings Inc."
  },
  {
    "Symbol": "EGIEY",
    "Name": "ENGIE Brasil Energia S/A"
  },
  {
    "Symbol": "ENGIY",
    "Name": "Engie S.A."
  },
  {
    "Symbol": "E",
    "Name": "ENI S.p.A."
  },
  {
    "Symbol": "XNGSY",
    "Name": "ENN Energy Holdings Ltd."
  },
  {
    "Symbol": "ENMPY",
    "Name": "Ensurge Micropower ASA"
  },
  {
    "Symbol": "GMVHY",
    "Name": "Entain PLC"
  },
  {
    "Symbol": "EPGNY",
    "Name": "Epigenomics AG"
  },
  {
    "Symbol": "EPOKY",
    "Name": "Epiroc AB"
  },
  {
    "Symbol": "EQUEY",
    "Name": "Equatorial Energia S/A"
  },
  {
    "Symbol": "EQNR",
    "Name": "Equinor ASA"
  },
  {
    "Symbol": "ERMAY",
    "Name": "Eramet S.A."
  },
  {
    "Symbol": "ERELY",
    "Name": "Eregli Demir ve Celik Fabrikalari T.A.S."
  },
  {
    "Symbol": "EBKDY",
    "Name": "Erste Group Bank AG"
  },
  {
    "Symbol": "ERYP",
    "Name": "Erytech Pharma"
  },
  {
    "Symbol": "ESPGY",
    "Name": "Esprit Holdings Ltd."
  },
  {
    "Symbol": "ESLOY",
    "Name": "EssilorLuxottica S.A."
  },
  {
    "Symbol": "CUYTY",
    "Name": "Etablissementen Franz Colruyt N.V."
  },
  {
    "Symbol": "EGFEY",
    "Name": "Eurobank Ergasias S.A."
  },
  {
    "Symbol": "ETCMY",
    "Name": "Eutelsat Communications"
  },
  {
    "Symbol": "EVAX",
    "Name": "Evaxion Biotech A/S"
  },
  {
    "Symbol": "EVVTY",
    "Name": "Evolution AB"
  },
  {
    "Symbol": "EVKIY",
    "Name": "Evonik Industries AG"
  },
  {
    "Symbol": "EVO",
    "Name": "Evotec SE"
  },
  {
    "Symbol": "EXPGY",
    "Name": "Experian PLC"
  },
  {
    "Symbol": "EXAI",
    "Name": "Exscientia PLC"
  },
  {
    "Symbol": "SFUN",
    "Name": "Fang Holdings Ltd."
  },
  {
    "Symbol": "DUO",
    "Name": "Fangdd Network Group Ltd."
  },
  {
    "Symbol": "FANH",
    "Name": "Fanhua Inc."
  },
  {
    "Symbol": "FANUY",
    "Name": "Fanuc Corp."
  },
  {
    "Symbol": "FRCOY",
    "Name": "Fast Retailing Co. Ltd."
  },
  {
    "Symbol": "FRRVY",
    "Name": "Ferrovial S.A."
  },
  {
    "Symbol": "FLMNY",
    "Name": "Fielmann AG"
  },
  {
    "Symbol": "FXCNY",
    "Name": "FIH Mobile Ltd."
  },
  {
    "Symbol": "FINV",
    "Name": "FinVolution Group"
  },
  {
    "Symbol": "FHS",
    "Name": "First High-School Education Group Co. Ltd."
  },
  {
    "Symbol": "FPAFY",
    "Name": "First Pacific Co. Ltd."
  },
  {
    "Symbol": "FGROY",
    "Name": "FirstGroup PLC"
  },
  {
    "Symbol": "FANDY",
    "Name": "FirstRand Ltd."
  },
  {
    "Symbol": "FCREY",
    "Name": "Fletcher Building Ltd."
  },
  {
    "Symbol": "FLIDY",
    "Name": "FLSmidth & Co. A/S"
  },
  {
    "Symbol": "FLGZY",
    "Name": "Flughafen Zuerich AG"
  },
  {
    "Symbol": "PDYPY",
    "Name": "Flutter Entertainment PLC"
  },
  {
    "Symbol": "FMX",
    "Name": "Fomento Economico Mexicano S.A.B. de C.V."
  },
  {
    "Symbol": "FOVSY",
    "Name": "Ford Otomotiv Sanayi A.S."
  },
  {
    "Symbol": "FRSX",
    "Name": "Foresight Autonomous Holdings Ltd."
  },
  {
    "Symbol": "FORTY",
    "Name": "Formula Systems 1985 Ltd."
  },
  {
    "Symbol": "FSUGY",
    "Name": "Fortescue Metals Group Ltd."
  },
  {
    "Symbol": "FOJCY",
    "Name": "Fortum Oyj"
  },
  {
    "Symbol": "FWP",
    "Name": "Forward Pharma A/S"
  },
  {
    "Symbol": "FHNGY",
    "Name": "Foschini Group Ltd."
  },
  {
    "Symbol": "FOSUY",
    "Name": "Fosun International Ltd."
  },
  {
    "Symbol": "FEDU",
    "Name": "Four Seasons Education Cayman Inc."
  },
  {
    "Symbol": "FXTGY",
    "Name": "Foxtons Group PLC"
  },
  {
    "Symbol": "FPRUY",
    "Name": "Fraport AG"
  },
  {
    "Symbol": "FNEVY",
    "Name": "Fraser & Neave Ltd."
  },
  {
    "Symbol": "FRLN",
    "Name": "Freeline Therapeutics Holdings PLC"
  },
  {
    "Symbol": "FRTAY",
    "Name": "Freenet AG"
  },
  {
    "Symbol": "FMS",
    "Name": "Fresenius Medical Care AG & Co. KGaA"
  },
  {
    "Symbol": "FSNUY",
    "Name": "Fresenius SE & Co. KGaA"
  },
  {
    "Symbol": "FUPBY",
    "Name": "Fuchs Petrolub SE Pfd."
  },
  {
    "Symbol": "FELTY",
    "Name": "Fuji Electric Co. Ltd."
  },
  {
    "Symbol": "FJTNY",
    "Name": "Fuji Media Holdings Inc."
  },
  {
    "Symbol": "FUJIY",
    "Name": "FUJIFILM Holdings Corp."
  },
  {
    "Symbol": "FJTCY",
    "Name": "Fujitec Co. Ltd."
  },
  {
    "Symbol": "FJTSY",
    "Name": "Fujitsu Ltd."
  },
  {
    "Symbol": "FKKFY",
    "Name": "Fukuoka Financial Group Inc."
  },
  {
    "Symbol": "YMM",
    "Name": "Full Truck Alliance Co. Ltd."
  },
  {
    "Symbol": "FUWAY",
    "Name": "Furukawa Electric Co. Ltd."
  },
  {
    "Symbol": "FUTU",
    "Name": "Futu Holdings Ltd."
  },
  {
    "Symbol": "GFASY",
    "Name": "Gafisa S/A"
  },
  {
    "Symbol": "GAILF",
    "Name": "GAIL India Ltd.GDR Reg S"
  },
  {
    "Symbol": "GLPG",
    "Name": "Galapagos N.V."
  },
  {
    "Symbol": "GXYYY",
    "Name": "Galaxy Entertainment Group Ltd."
  },
  {
    "Symbol": "GLPEY",
    "Name": "Galp Energia SGPS S/A"
  },
  {
    "Symbol": "GMHLY",
    "Name": "GAM Holding AG"
  },
  {
    "Symbol": "GNENY",
    "Name": "Ganfeng Lithium Co. Ltd."
  },
  {
    "Symbol": "GOTU",
    "Name": "Gaotu Techedu Inc."
  },
  {
    "Symbol": "GDS",
    "Name": "GDS Holdings Ltd."
  },
  {
    "Symbol": "GBERY",
    "Name": "Geberit AG"
  },
  {
    "Symbol": "GELYY",
    "Name": "Geely Automobile Holdings Ltd."
  },
  {
    "Symbol": "GEGYY",
    "Name": "Genel Energy PLC"
  },
  {
    "Symbol": "GNTA",
    "Name": "Genenta Science S.p.A."
  },
  {
    "Symbol": "GENE",
    "Name": "Genetic Technologies Ltd."
  },
  {
    "Symbol": "GTH",
    "Name": "Genetron Holdings Ltd."
  },
  {
    "Symbol": "GNFT",
    "Name": "Genfit S.A."
  },
  {
    "Symbol": "GMAB",
    "Name": "Genmab A/S"
  },
  {
    "Symbol": "GEBHY",
    "Name": "Genting Bhd"
  },
  {
    "Symbol": "GGB",
    "Name": "Gerdau S/A"
  },
  {
    "Symbol": "GNGBY",
    "Name": "Getinge AB"
  },
  {
    "Symbol": "GET",
    "Name": "Getnet Adquirencia e Servicos Para Meios de Pagamento S/A  Wi"
  },
  {
    "Symbol": "GVDNY",
    "Name": "Givaudan S.A."
  },
  {
    "Symbol": "GJNSY",
    "Name": "Gjensidige Forsikring ASA"
  },
  {
    "Symbol": "GLAPY",
    "Name": "Glanbia PLC"
  },
  {
    "Symbol": "GSK",
    "Name": "GlaxoSmithKline PLC"
  },
  {
    "Symbol": "GLNCY",
    "Name": "Glencore PLC"
  },
  {
    "Symbol": "GBCMY",
    "Name": "Global Bio-Chem Technology Group Co. Ltd."
  },
  {
    "Symbol": "GLTR",
    "Name": "Globaltrans Investment PLC GDR"
  },
  {
    "Symbol": "GLYYY",
    "Name": "Glory Ltd."
  },
  {
    "Symbol": "GNNDY",
    "Name": "GN Store Nord A/S"
  },
  {
    "Symbol": "GOL",
    "Name": "GOL Linhas Aereas Inteligentes S.A."
  },
  {
    "Symbol": "GFI",
    "Name": "Gold Fields Ltd."
  },
  {
    "Symbol": "GARPY",
    "Name": "Golden Agri-Resources Ltd."
  },
  {
    "Symbol": "GMELY",
    "Name": "GOME Retail Holdings Ltd."
  },
  {
    "Symbol": "GRCL",
    "Name": "Gracell Biotechnologies Inc."
  },
  {
    "Symbol": "GRDDY",
    "Name": "Grand City Properties S.A."
  },
  {
    "Symbol": "GRFXY",
    "Name": "Graphex Group Ltd."
  },
  {
    "Symbol": "GRVY",
    "Name": "GRAVITY Co. Ltd."
  },
  {
    "Symbol": "GWLLY",
    "Name": "Great Wall Motor Co. Ltd."
  },
  {
    "Symbol": "GOFPY",
    "Name": "Greek Organisation of Football Prognostics S.A."
  },
  {
    "Symbol": "GNCGY",
    "Name": "Greencore Group PLC"
  },
  {
    "Symbol": "GHG",
    "Name": "GreenTree Hospitality Group Ltd."
  },
  {
    "Symbol": "GIKLY",
    "Name": "Grifols S.A."
  },
  {
    "Symbol": "GRFS",
    "Name": "Grifols S.A."
  },
  {
    "Symbol": "GBLBY",
    "Name": "Groupe Bruxelles Lambert S.A."
  },
  {
    "Symbol": "OMAB",
    "Name": "Grupo Aeroportuario del Centro Norte S.A.B. de C.V."
  },
  {
    "Symbol": "PAC",
    "Name": "Grupo Aeroportuario del Pacifico S.A.B. de C.V."
  },
  {
    "Symbol": "ASR",
    "Name": "Grupo Aeroportuario del Sureste S.A.B. de C.V."
  },
  {
    "Symbol": "AVAL",
    "Name": "Grupo Aval Acciones y Valores S.A."
  },
  {
    "Symbol": "BMBOY",
    "Name": "Grupo Bimbo S.A.B. de C.V."
  },
  {
    "Symbol": "GPOVY",
    "Name": "Grupo Carso S.A.B. de C.V."
  },
  {
    "Symbol": "GBOOY",
    "Name": "Grupo Financiero Banorte S.A.B. de C.V."
  },
  {
    "Symbol": "GGAL",
    "Name": "Grupo Financiero Galicia S.A."
  },
  {
    "Symbol": "SIM",
    "Name": "Grupo Simec S.A.B. de C.V."
  },
  {
    "Symbol": "SUPV",
    "Name": "Grupo Supervielle S.A."
  },
  {
    "Symbol": "TV",
    "Name": "Grupo Televisa S.A.B."
  },
  {
    "Symbol": "GTMAY",
    "Name": "Grupo TMM S.A.B."
  },
  {
    "Symbol": "GGDVY",
    "Name": "Guangdong Investment Ltd."
  },
  {
    "Symbol": "GZUHY",
    "Name": "Guangzhou R&F Properties Co. Ltd."
  },
  {
    "Symbol": "GDNGY",
    "Name": "Gudang Garam"
  },
  {
    "Symbol": "GFKSY",
    "Name": "Gulf Keystone Petroleum Ltd."
  },
  {
    "Symbol": "HNNMY",
    "Name": "H&M Hennes & Mauritz AB"
  },
  {
    "Symbol": "HLUYY",
    "Name": "H. Lundbeck A/S"
  },
  {
    "Symbol": "HACBY",
    "Name": "Hachijuni Bank Ltd."
  },
  {
    "Symbol": "HSHCY",
    "Name": "Haier Smart Home Co. Ltd."
  },
  {
    "Symbol": "HLG",
    "Name": "Hailiang Education Group Inc."
  },
  {
    "Symbol": "HKUOY",
    "Name": "Hakuhodo DY Holdings Inc."
  },
  {
    "Symbol": "HALMY",
    "Name": "Halma PLC"
  },
  {
    "Symbol": "HHULY",
    "Name": "Hamburger Hafen und Logistik AG"
  },
  {
    "Symbol": "HLPPY",
    "Name": "Hang Lung Properties Ltd."
  },
  {
    "Symbol": "HSNGY",
    "Name": "Hang Seng Bank Ltd."
  },
  {
    "Symbol": "HVRRY",
    "Name": "Hannover Rueck SE"
  },
  {
    "Symbol": "HPGLY",
    "Name": "Hapag-Lloyd AG"
  },
  {
    "Symbol": "HBRIY",
    "Name": "Harbour Energy PLC"
  },
  {
    "Symbol": "HRGLY",
    "Name": "Hargreaves Lansdown PLC"
  },
  {
    "Symbol": "HMY",
    "Name": "Harmony Gold Mining Co. Ltd."
  },
  {
    "Symbol": "HAWPY",
    "Name": "Haw Par Ltd."
  },
  {
    "Symbol": "HAYPY",
    "Name": "Hays PLC"
  },
  {
    "Symbol": "HDB",
    "Name": "HDFC Bank Ltd."
  },
  {
    "Symbol": "HDELY",
    "Name": "HeidelbergCement AG"
  },
  {
    "Symbol": "HBGRY",
    "Name": "Heidelberger Druckmaschinen AG"
  },
  {
    "Symbol": "HKHHY",
    "Name": "Heineken Holding N.V."
  },
  {
    "Symbol": "HEINY",
    "Name": "Heineken N.V."
  },
  {
    "Symbol": "HLLGY",
    "Name": "HELLA GmbH & Co. KGaA"
  },
  {
    "Symbol": "HLTOY",
    "Name": "Hellenic Telecommunications Organization S.A."
  },
  {
    "Symbol": "MOMO",
    "Name": "Hello Group Inc."
  },
  {
    "Symbol": "HELFY",
    "Name": "HelloFresh SE"
  },
  {
    "Symbol": "HMNTY",
    "Name": "Hemnet Group AB"
  },
  {
    "Symbol": "HDVTY",
    "Name": "Henderson Investment Ltd."
  },
  {
    "Symbol": "HLDCY",
    "Name": "Henderson Land Development Co. Ltd."
  },
  {
    "Symbol": "HEGIY",
    "Name": "Hengan International Group Co. Ltd."
  },
  {
    "Symbol": "HENKY",
    "Name": "Henkel AG & Co. KGaA"
  },
  {
    "Symbol": "HENOY",
    "Name": "Henkel AG & Co. KGaA Pfd."
  },
  {
    "Symbol": "HAGHY",
    "Name": "Hensoldt AG"
  },
  {
    "Symbol": "HESAY",
    "Name": "Hermes International S.C.A."
  },
  {
    "Symbol": "HXGBY",
    "Name": "Hexagon AB"
  },
  {
    "Symbol": "HKMPY",
    "Name": "Hikma Pharmaceuticals PLC"
  },
  {
    "Symbol": "HIMX",
    "Name": "Himax Technologies Inc."
  },
  {
    "Symbol": "HINOY",
    "Name": "Hino Motors Ltd."
  },
  {
    "Symbol": "HCXLY",
    "Name": "Hiscox Ltd."
  },
  {
    "Symbol": "HTCMY",
    "Name": "Hitachi Construction Machinery Co. Ltd."
  },
  {
    "Symbol": "HTHIY",
    "Name": "Hitachi Ltd."
  },
  {
    "Symbol": "HMTLY",
    "Name": "Hitachi Metals Ltd."
  },
  {
    "Symbol": "HKTTY",
    "Name": "HKT Trust"
  },
  {
    "Symbol": "HCMLY",
    "Name": "Holcim Ltd."
  },
  {
    "Symbol": "HHPD",
    "Name": "Hon Hai Precision Industry Co. Ltd. GDR"
  },
  {
    "Symbol": "HNHPF",
    "Name": "Hon Hai Precision Industry Co. Ltd. GDR Reg S"
  },
  {
    "Symbol": "HMC",
    "Name": "Honda Motor Co. Ltd."
  },
  {
    "Symbol": "HOKCY",
    "Name": "Hong Kong & China Gas Co. Ltd."
  },
  {
    "Symbol": "HKXCY",
    "Name": "Hong Kong Exchanges & Clearing Ltd."
  },
  {
    "Symbol": "HKTVY",
    "Name": "Hong Kong Technology Venture Co. Ltd."
  },
  {
    "Symbol": "HNGKY",
    "Name": "Hongkong Land Holdings Ltd."
  },
  {
    "Symbol": "HWDJY",
    "Name": "Howden Joinery Group PLC"
  },
  {
    "Symbol": "HOCPY",
    "Name": "Hoya Corp."
  },
  {
    "Symbol": "HSBC",
    "Name": "HSBC Holdings PLC"
  },
  {
    "Symbol": "HPIFY",
    "Name": "Huadian Power International Ltd."
  },
  {
    "Symbol": "HNP",
    "Name": "Huaneng Power International Inc."
  },
  {
    "Symbol": "HTHT",
    "Name": "Huazhu Group Ltd."
  },
  {
    "Symbol": "BOSSY",
    "Name": "Hugo Boss AG"
  },
  {
    "Symbol": "HUIZ",
    "Name": "Huize Holding Ltd."
  },
  {
    "Symbol": "HSQVY",
    "Name": "Husqvarna AB"
  },
  {
    "Symbol": "HUPHY",
    "Name": "Hutchison Port Holdings Trust"
  },
  {
    "Symbol": "HUTCY",
    "Name": "Hutchison Telecommunications Hong Kong Holdings Ltd."
  },
  {
    "Symbol": "HCM",
    "Name": "HUTCHMED China Ltd."
  },
  {
    "Symbol": "HUYA",
    "Name": "HUYA Inc."
  },
  {
    "Symbol": "HYPMY",
    "Name": "Hypera S/A"
  },
  {
    "Symbol": "HYSNY",
    "Name": "Hysan Development Co. Ltd."
  },
  {
    "Symbol": "HYMTF",
    "Name": "Hyundai Motor Co. Ltd. GDR Non-Voting"
  },
  {
    "Symbol": "HYW",
    "Name": "Hywin Holdings Ltd."
  },
  {
    "Symbol": "IBDRY",
    "Name": "Iberdrola S.A."
  },
  {
    "Symbol": "ICABY",
    "Name": "i-CABLE Communications Ltd."
  },
  {
    "Symbol": "IBN",
    "Name": "ICICI Bank Ltd."
  },
  {
    "Symbol": "ICLK",
    "Name": "iClick Interactive Asia Group Ltd."
  },
  {
    "Symbol": "IDKOY",
    "Name": "Idemitsu Kosan Co. Ltd."
  },
  {
    "Symbol": "IDBA",
    "Name": "Idex Biometrics ASA"
  },
  {
    "Symbol": "IGGHY",
    "Name": "IG Group Holdings PLC"
  },
  {
    "Symbol": "IHICY",
    "Name": "IHI Corp."
  },
  {
    "Symbol": "IH",
    "Name": "iHuman Inc."
  },
  {
    "Symbol": "ILKAY",
    "Name": "Iluka Resources Ltd."
  },
  {
    "Symbol": "IMAB",
    "Name": "I-Mab"
  },
  {
    "Symbol": "IMCDY",
    "Name": "IMCD N.V."
  },
  {
    "Symbol": "IMIAY",
    "Name": "IMI PLC"
  },
  {
    "Symbol": "IMCR",
    "Name": "Immunocore Holdings PLC"
  },
  {
    "Symbol": "IMRN",
    "Name": "Immuron Ltd."
  },
  {
    "Symbol": "IMMP",
    "Name": "Immutep Ltd."
  },
  {
    "Symbol": "IMPUY",
    "Name": "Impala Platinum Holdings Ltd."
  },
  {
    "Symbol": "IMBBY",
    "Name": "Imperial Brands PLC"
  },
  {
    "Symbol": "IXHL",
    "Name": "Incannex Healthcare Ltd."
  },
  {
    "Symbol": "ICHPY",
    "Name": "Inchcape PLC"
  },
  {
    "Symbol": "INCZY",
    "Name": "Incitec Pivot Ltd."
  },
  {
    "Symbol": "INVVY",
    "Name": "Indivior PLC"
  },
  {
    "Symbol": "ITAYY",
    "Name": "Indo Tambangraya Megah"
  },
  {
    "Symbol": "PIFFY",
    "Name": "Indofood Sukses Makmur"
  },
  {
    "Symbol": "PIFMY",
    "Name": "Indofood Sukses Makmur"
  },
  {
    "Symbol": "ISMAY",
    "Name": "Indra Sistemas S.A."
  },
  {
    "Symbol": "IDEXY",
    "Name": "Industria de Diseno Textil S.A."
  },
  {
    "Symbol": "IDCBY",
    "Name": "Industrial & Commercial Bank of China Ltd."
  },
  {
    "Symbol": "IBA",
    "Name": "Industrias Bachoco S.A.B. de C.V."
  },
  {
    "Symbol": "IFNNY",
    "Name": "Infineon Technologies AG"
  },
  {
    "Symbol": "IFJPY",
    "Name": "Informa PLC"
  },
  {
    "Symbol": "INFY",
    "Name": "Infosys Ltd."
  },
  {
    "Symbol": "ING",
    "Name": "ING Groep N.V."
  },
  {
    "Symbol": "IPHA",
    "Name": "Innate Pharma S.A."
  },
  {
    "Symbol": "IPXHY",
    "Name": "Inpex Corp."
  },
  {
    "Symbol": "INPOY",
    "Name": "InPost S.A."
  },
  {
    "Symbol": "IAUGY",
    "Name": "Insurance Australia Group Ltd."
  },
  {
    "Symbol": "IHG",
    "Name": "InterContinental Hotels Group PLC"
  },
  {
    "Symbol": "ICAGY",
    "Name": "International Consolidated Airlines Group S.A."
  },
  {
    "Symbol": "IKTSY",
    "Name": "Intertek Group PLC"
  },
  {
    "Symbol": "ISNPY",
    "Name": "Intesa Sanpaolo S.p.A."
  },
  {
    "Symbol": "ITJTY",
    "Name": "Intrum AB"
  },
  {
    "Symbol": "IVA",
    "Name": "Inventiva S.A."
  },
  {
    "Symbol": "IPSEY",
    "Name": "Ipsen"
  },
  {
    "Symbol": "IQEPY",
    "Name": "IQE PLC"
  },
  {
    "Symbol": "IQ",
    "Name": "iQIYI Inc."
  },
  {
    "Symbol": "IRCP",
    "Name": "IRSA Propiedades Comerciales S.A."
  },
  {
    "Symbol": "IRS",
    "Name": "IRSA-Inversiones y Representaciones S.A. GDR"
  },
  {
    "Symbol": "ISDAY",
    "Name": "Israel Discount Bank Ltd."
  },
  {
    "Symbol": "ISSDY",
    "Name": "ISS A/S"
  },
  {
    "Symbol": "ISUZY",
    "Name": "Isuzu Motors Ltd."
  },
  {
    "Symbol": "ITCB",
    "Name": "Itau CorpBanca"
  },
  {
    "Symbol": "ITUB",
    "Name": "Itau Unibanco Holding S/A"
  },
  {
    "Symbol": "ITOCY",
    "Name": "Itochu Corp."
  },
  {
    "Symbol": "ITTOY",
    "Name": "Itochu Techno-Solutions Corp."
  },
  {
    "Symbol": "ITVPY",
    "Name": "ITV PCL"
  },
  {
    "Symbol": "JSAIY",
    "Name": "J Sainsbury PLC"
  },
  {
    "Symbol": "JDWPY",
    "Name": "J.D. Wetherspoon PLC"
  },
  {
    "Symbol": "JHX",
    "Name": "James Hardie Industries PLC"
  },
  {
    "Symbol": "JAPSY",
    "Name": "Japan Airlines Co. Ltd."
  },
  {
    "Symbol": "JTTRY",
    "Name": "Japan Airport Terminal Co. Ltd."
  },
  {
    "Symbol": "JPDYY",
    "Name": "Japan Display Inc."
  },
  {
    "Symbol": "JPXGY",
    "Name": "Japan Exchange Group Inc."
  },
  {
    "Symbol": "JPPHY",
    "Name": "Japan Post Holdings Co. Ltd."
  },
  {
    "Symbol": "JPSWY",
    "Name": "Japan Steel Works Ltd."
  },
  {
    "Symbol": "JAPAY",
    "Name": "Japan Tobacco Inc."
  },
  {
    "Symbol": "JCYGY",
    "Name": "Jardine Cycle & Carriage Ltd."
  },
  {
    "Symbol": "JMHLY",
    "Name": "Jardine Matheson Holdings Ltd."
  },
  {
    "Symbol": "JBSAY",
    "Name": "JBS S/A"
  },
  {
    "Symbol": "JDSPY",
    "Name": "JD Sports Fashion PLC"
  },
  {
    "Symbol": "JD",
    "Name": "JD.com Inc."
  },
  {
    "Symbol": "JRONY",
    "Name": "Jeronimo Martins SGPS S/A"
  },
  {
    "Symbol": "JGCCY",
    "Name": "JGC Holdings Corp."
  },
  {
    "Symbol": "JEXYY",
    "Name": "Jiangsu Expressway Co. Ltd."
  },
  {
    "Symbol": "JT",
    "Name": "Jianpu Technology Inc."
  },
  {
    "Symbol": "JFIN",
    "Name": "Jiayin Group Inc."
  },
  {
    "Symbol": "JKS",
    "Name": "JinkoSolar Holding Co. Ltd."
  },
  {
    "Symbol": "WDGJY",
    "Name": "John Wood Group PLC"
  },
  {
    "Symbol": "JEHLY",
    "Name": "Johnson Electric Holdings Ltd."
  },
  {
    "Symbol": "JMPLY",
    "Name": "Johnson Matthey PLC"
  },
  {
    "Symbol": "JBFCY",
    "Name": "Jollibee Foods Corp."
  },
  {
    "Symbol": "YY",
    "Name": "JOYY Inc."
  },
  {
    "Symbol": "JSCPY",
    "Name": "JSR Corp."
  },
  {
    "Symbol": "JTEKY",
    "Name": "JTEKT Corp."
  },
  {
    "Symbol": "JBAXY",
    "Name": "Julius Baer Group AG"
  },
  {
    "Symbol": "JMIA",
    "Name": "Jumia Technologies AG"
  },
  {
    "Symbol": "JP",
    "Name": "Jupai Holdings Ltd."
  },
  {
    "Symbol": "JTKWY",
    "Name": "Just Eat Takeaway.com N.V."
  },
  {
    "Symbol": "JVCZY",
    "Name": "JVCKenwood Corp."
  },
  {
    "Symbol": "KPLUY",
    "Name": "K+S AG"
  },
  {
    "Symbol": "KAJMY",
    "Name": "Kajima Corp."
  },
  {
    "Symbol": "PTKFY",
    "Name": "Kalbe Farma"
  },
  {
    "Symbol": "KAEPY",
    "Name": "Kansai Electric Power Co. Inc."
  },
  {
    "Symbol": "KPTCY",
    "Name": "Kansai Paint Co. Ltd."
  },
  {
    "Symbol": "BZ",
    "Name": "Kanzhun Ltd."
  },
  {
    "Symbol": "KAOOY",
    "Name": "Kao Corp."
  },
  {
    "Symbol": "KPCPY",
    "Name": "Kasikornbank PCL"
  },
  {
    "Symbol": "KSPI",
    "Name": "Kaspi.kz JSC"
  },
  {
    "Symbol": "KWHIY",
    "Name": "Kawasaki Heavy Industries Ltd."
  },
  {
    "Symbol": "KAIKY",
    "Name": "Kawasaki Kisen Kaisha Ltd."
  },
  {
    "Symbol": "KZIA",
    "Name": "Kazia Therapeutics Ltd."
  },
  {
    "Symbol": "KB",
    "Name": "KB Financial Group Inc."
  },
  {
    "Symbol": "KBCSY",
    "Name": "KBC Group N.V."
  },
  {
    "Symbol": "KDDIY",
    "Name": "KDDI Corp."
  },
  {
    "Symbol": "BEKE",
    "Name": "KE Holdings Inc."
  },
  {
    "Symbol": "KPELY",
    "Name": "Keppel Ltd."
  },
  {
    "Symbol": "PPRUY",
    "Name": "Kering"
  },
  {
    "Symbol": "KRYAY",
    "Name": "Kerry Group PLC"
  },
  {
    "Symbol": "KRYPY",
    "Name": "Kerry Properties Ltd."
  },
  {
    "Symbol": "KKOYY",
    "Name": "Kesko Oyj"
  },
  {
    "Symbol": "KWPCY",
    "Name": "Kewpie Corp."
  },
  {
    "Symbol": "KIKOY",
    "Name": "Kikkoman Corp."
  },
  {
    "Symbol": "KCDMY",
    "Name": "Kimberly-Clark de Mexico S.A.B. de C.V."
  },
  {
    "Symbol": "KGDEY",
    "Name": "Kingdee International Software Group Co. Ltd."
  },
  {
    "Symbol": "KGFHY",
    "Name": "Kingfisher PLC"
  },
  {
    "Symbol": "KC",
    "Name": "Kingsoft Cloud Holdings Ltd."
  },
  {
    "Symbol": "KGSPY",
    "Name": "Kingspan Group PLC"
  },
  {
    "Symbol": "KIGRY",
    "Name": "Kion Group AG"
  },
  {
    "Symbol": "KNBWY",
    "Name": "Kirin Holdings Co. Ltd."
  },
  {
    "Symbol": "KLBAY",
    "Name": "Klabin S/A"
  },
  {
    "Symbol": "KLMR",
    "Name": "KLM Royal Dutch Airlines"
  },
  {
    "Symbol": "KNRRY",
    "Name": "Knorr-Bremse AG"
  },
  {
    "Symbol": "KHOLY",
    "Name": "KOC Holding A.S."
  },
  {
    "Symbol": "KOTMY",
    "Name": "Koito Manufacturing Co. Ltd."
  },
  {
    "Symbol": "KMTUY",
    "Name": "Komatsu Ltd."
  },
  {
    "Symbol": "KONMY",
    "Name": "Konami Holdings Corp."
  },
  {
    "Symbol": "KNYJY",
    "Name": "Kone Oyj"
  },
  {
    "Symbol": "KNCAY",
    "Name": "Konica Minolta Inc."
  },
  {
    "Symbol": "ADRNY",
    "Name": "Koninklijke Ahold Delhaize N.V."
  },
  {
    "Symbol": "RDSMY",
    "Name": "Koninklijke DSM N.V."
  },
  {
    "Symbol": "PHG",
    "Name": "Koninklijke Philips N.V."
  },
  {
    "Symbol": "VOPKY",
    "Name": "Koninklijke Vopak N.V."
  },
  {
    "Symbol": "KEP",
    "Name": "Korea Electric Power Corp."
  },
  {
    "Symbol": "KSRYY",
    "Name": "KOSE Corp."
  },
  {
    "Symbol": "KRNTY",
    "Name": "Krones AG"
  },
  {
    "Symbol": "KGTFY",
    "Name": "Krung Thai Bank PCL"
  },
  {
    "Symbol": "KGTHY",
    "Name": "Krungthai Card PCL"
  },
  {
    "Symbol": "KT",
    "Name": "KT Corp."
  },
  {
    "Symbol": "KUBTY",
    "Name": "Kubota Corp."
  },
  {
    "Symbol": "KHNGY",
    "Name": "Kuehne + Nagel International AG"
  },
  {
    "Symbol": "KUKAY",
    "Name": "KUKA AG"
  },
  {
    "Symbol": "KUKE",
    "Name": "Kuke Music Holding Ltd."
  },
  {
    "Symbol": "KIROY",
    "Name": "Kumba Iron Ore Ltd."
  },
  {
    "Symbol": "KLYCY",
    "Name": "Kunlun Energy Co. Ltd."
  },
  {
    "Symbol": "KURRY",
    "Name": "Kuraray Co. Ltd."
  },
  {
    "Symbol": "KTWIY",
    "Name": "Kurita Water Industries Ltd."
  },
  {
    "Symbol": "KYOCY",
    "Name": "Kyocera Corp."
  },
  {
    "Symbol": "LAIXY",
    "Name": "LAIX Inc."
  },
  {
    "Symbol": "LDSCY",
    "Name": "Land Securities Group PLC"
  },
  {
    "Symbol": "LDGYY",
    "Name": "Landis+Gyr Group AG"
  },
  {
    "Symbol": "LNXSY",
    "Name": "Lanxess AG"
  },
  {
    "Symbol": "LTOUF",
    "Name": "Larsen & Toubro Ltd. GDR"
  },
  {
    "Symbol": "LSRCY",
    "Name": "Lasertec Corp."
  },
  {
    "Symbol": "LTMAQ",
    "Name": "LATAM Airlines Group S.A."
  },
  {
    "Symbol": "LMPMY",
    "Name": "Lee & Man Paper Manufacturing Ltd."
  },
  {
    "Symbol": "LGGNY",
    "Name": "Legal & General Group PLC"
  },
  {
    "Symbol": "LEGN",
    "Name": "Legend Biotech Corp."
  },
  {
    "Symbol": "LGRDY",
    "Name": "Legrand S.A."
  },
  {
    "Symbol": "LEJU",
    "Name": "Leju Holdings Ltd."
  },
  {
    "Symbol": "LLESY",
    "Name": "Lendlease Ltd."
  },
  {
    "Symbol": "LNVGY",
    "Name": "Lenovo Group Ltd."
  },
  {
    "Symbol": "FINMY",
    "Name": "Leonardo S.p.A."
  },
  {
    "Symbol": "LNNNY",
    "Name": "Leoni AG"
  },
  {
    "Symbol": "LX",
    "Name": "LexinFintech Holdings Ltd."
  },
  {
    "Symbol": "LPL",
    "Name": "LG Display Co. Ltd."
  },
  {
    "Symbol": "LI",
    "Name": "Li Auto Inc."
  },
  {
    "Symbol": "LNNGY",
    "Name": "Li Ning Co. Ltd."
  },
  {
    "Symbol": "LIAN",
    "Name": "LianBio"
  },
  {
    "Symbol": "LTGHY",
    "Name": "Life Healthcare Group Holdings Ltd."
  },
  {
    "Symbol": "LFSYY",
    "Name": "Lifestyle International Holdings Ltd."
  },
  {
    "Symbol": "LITB",
    "Name": "LightInTheBox Holding Co. Ltd."
  },
  {
    "Symbol": "LGHL",
    "Name": "Lion Group Holding Ltd."
  },
  {
    "Symbol": "LVCLY",
    "Name": "Living Cell Technologies Ltd."
  },
  {
    "Symbol": "LXEH",
    "Name": "Lixiang Education Holding Co. Ltd."
  },
  {
    "Symbol": "JSGRY",
    "Name": "LIXIL Corp."
  },
  {
    "Symbol": "LIZI",
    "Name": "Lizhi Inc."
  },
  {
    "Symbol": "LYG",
    "Name": "Lloyds Banking Group PLC"
  },
  {
    "Symbol": "LZRFY",
    "Name": "Localiza Rent A Car S/A"
  },
  {
    "Symbol": "LRENY",
    "Name": "Lojas Renner S/A"
  },
  {
    "Symbol": "LOMA",
    "Name": "Loma Negra Compania Industrial Argentina S.A."
  },
  {
    "Symbol": "LNSTY",
    "Name": "London Stock Exchange Group PLC"
  },
  {
    "Symbol": "PPLFY",
    "Name": "London Sumatra Indonesia"
  },
  {
    "Symbol": "LGFRY",
    "Name": "Longfor Group Holdings Ltd."
  },
  {
    "Symbol": "LKHLY",
    "Name": "Lonking Holdings Ltd."
  },
  {
    "Symbol": "LZAGY",
    "Name": "Lonza Group AG"
  },
  {
    "Symbol": "LRLCY",
    "Name": "L'Oreal S.A."
  },
  {
    "Symbol": "LOTBY",
    "Name": "Lotus Bakeries N.V."
  },
  {
    "Symbol": "LKNCY",
    "Name": "Luckin Coffee Inc."
  },
  {
    "Symbol": "LU",
    "Name": "Lufax Holding Ltd."
  },
  {
    "Symbol": "LVMUY",
    "Name": "LVMH Moet Hennessy Louis Vuitton"
  },
  {
    "Symbol": "LYSDY",
    "Name": "Lynas Rare Earths Ltd."
  },
  {
    "Symbol": "MTHRY",
    "Name": "M3 Inc."
  },
  {
    "Symbol": "MTPVY",
    "Name": "M6-Metropole Television S.A."
  },
  {
    "Symbol": "MBUMY",
    "Name": "Mabuchi Motor Co. Ltd."
  },
  {
    "Symbol": "MQBKY",
    "Name": "Macquarie Group Ltd."
  },
  {
    "Symbol": "MGLUY",
    "Name": "Magazine Luiza S.A."
  },
  {
    "Symbol": "MYTAY",
    "Name": "Magyar Telekom Telecommunications PLC"
  },
  {
    "Symbol": "MTENY",
    "Name": "Mahanagar Telephone Nigam Ltd."
  },
  {
    "Symbol": "MAHMF",
    "Name": "Mahindra & Mahindra Ltd. GDR"
  },
  {
    "Symbol": "MKTAY",
    "Name": "Makita Corp."
  },
  {
    "Symbol": "MLYBY",
    "Name": "Malayan Banking Bhd"
  },
  {
    "Symbol": "MAEOY",
    "Name": "Manila Electric Co."
  },
  {
    "Symbol": "MPFRY",
    "Name": "Mapfre S.A."
  },
  {
    "Symbol": "MRRTY",
    "Name": "Marfrig Global Foods S/A"
  },
  {
    "Symbol": "MAKSY",
    "Name": "Marks & Spencer Group PLC"
  },
  {
    "Symbol": "MARUY",
    "Name": "Marubeni Corp."
  },
  {
    "Symbol": "MAURY",
    "Name": "Marui Group Co. Ltd."
  },
  {
    "Symbol": "MMRTY",
    "Name": "Massmart Holdings Ltd."
  },
  {
    "Symbol": "MTLS",
    "Name": "Materialise N.V."
  },
  {
    "Symbol": "MZDAY",
    "Name": "Mazda Motor Corp."
  },
  {
    "Symbol": "MDXH",
    "Name": "MDxHealth S.A."
  },
  {
    "Symbol": "MITC",
    "Name": "MeaTech 3D Ltd."
  },
  {
    "Symbol": "GETVY",
    "Name": "Mediaset Espana Comunicacion S.A."
  },
  {
    "Symbol": "MCVEY",
    "Name": "Medicover AB"
  },
  {
    "Symbol": "MDGS",
    "Name": "Medigus Ltd."
  },
  {
    "Symbol": "MDIBY",
    "Name": "Mediobanca Banca di Credito Finanziario S.p.A."
  },
  {
    "Symbol": "MAHLY",
    "Name": "Medipal Holdings Corp."
  },
  {
    "Symbol": "MRM",
    "Name": "MEDIROM Healthcare Technologies Inc."
  },
  {
    "Symbol": "MGAWY",
    "Name": "MegaWorld Corp."
  },
  {
    "Symbol": "MEGGY",
    "Name": "Meggitt PLC"
  },
  {
    "Symbol": "MEJHY",
    "Name": "Meiji Holdings Co. Ltd."
  },
  {
    "Symbol": "MPNGY",
    "Name": "Meituan"
  },
  {
    "Symbol": "MLCO",
    "Name": "Melco Resorts & Entertainment Ltd."
  },
  {
    "Symbol": "MCARY",
    "Name": "Mercari Inc."
  },
  {
    "Symbol": "DMLRY",
    "Name": "Mercedes-Benz Group AG"
  },
  {
    "Symbol": "MKKGY",
    "Name": "Merck KGaA"
  },
  {
    "Symbol": "MFH",
    "Name": "Mercurity Fintech Holding Inc."
  },
  {
    "Symbol": "MREO",
    "Name": "Mereo BioPharma Group PLC"
  },
  {
    "Symbol": "MESO",
    "Name": "Mesoblast Ltd."
  },
  {
    "Symbol": "AIU",
    "Name": "Meta Data Ltd."
  },
  {
    "Symbol": "MTPOY",
    "Name": "Metropolitan Bank & Trust Co."
  },
  {
    "Symbol": "OUKPY",
    "Name": "Metso Outotec Oyj"
  },
  {
    "Symbol": "MCHVY",
    "Name": "MGM China Holdings Ltd."
  },
  {
    "Symbol": "MFGP",
    "Name": "Micro Focus International PLC"
  },
  {
    "Symbol": "MTP",
    "Name": "Midatech Pharma PLC"
  },
  {
    "Symbol": "MNBEY",
    "Name": "Minebea Mitsumi Inc."
  },
  {
    "Symbol": "MALRY",
    "Name": "Mineral Resources Ltd."
  },
  {
    "Symbol": "MRVSY",
    "Name": "Minerva S/A"
  },
  {
    "Symbol": "MNSO",
    "Name": "MINISO Group Holding Ltd."
  },
  {
    "Symbol": "MNTHY",
    "Name": "Minth Group Ltd."
  },
  {
    "Symbol": "MF",
    "Name": "Missfresh Ltd."
  },
  {
    "Symbol": "MSSMY",
    "Name": "Misumi Group Inc."
  },
  {
    "Symbol": "MITFY",
    "Name": "Mitie Group PLC"
  },
  {
    "Symbol": "MTLHY",
    "Name": "Mitsubishi Chemical Holdings Corp."
  },
  {
    "Symbol": "MIELY",
    "Name": "Mitsubishi Electric Corp."
  },
  {
    "Symbol": "MITEY",
    "Name": "Mitsubishi Estate Co. Ltd."
  },
  {
    "Symbol": "MUFG",
    "Name": "Mitsubishi UFJ Financial Group Inc."
  },
  {
    "Symbol": "MITSY",
    "Name": "Mitsui & Co. Ltd."
  },
  {
    "Symbol": "MITUY",
    "Name": "Mitsui Chemicals Inc."
  },
  {
    "Symbol": "MTSFY",
    "Name": "Mitsui Fudosan Co. Ltd."
  },
  {
    "Symbol": "MMSMY",
    "Name": "Mitsui Mining & Smelting Co. Ltd."
  },
  {
    "Symbol": "MSLOY",
    "Name": "Mitsui O.S.K. Lines Ltd."
  },
  {
    "Symbol": "MIXT",
    "Name": "MiX Telematics Ltd."
  },
  {
    "Symbol": "MFG",
    "Name": "Mizuho Financial Group Inc."
  },
  {
    "Symbol": "MOGU",
    "Name": "MOGU Inc."
  },
  {
    "Symbol": "MGYOY",
    "Name": "MOL Hungarian Oil & Gas PLC"
  },
  {
    "Symbol": "MKD",
    "Name": "Molecular Data Inc."
  },
  {
    "Symbol": "MOLN",
    "Name": "Molecular Partners AG"
  },
  {
    "Symbol": "MOPHY",
    "Name": "Monadelphous Group Ltd."
  },
  {
    "Symbol": "MONRY",
    "Name": "Moncler S.p.A."
  },
  {
    "Symbol": "MONDY",
    "Name": "Mondi PLC"
  },
  {
    "Symbol": "MONOY",
    "Name": "MonotaRO Co. Ltd."
  },
  {
    "Symbol": "MOR",
    "Name": "MorphoSys AG"
  },
  {
    "Symbol": "MOTUY",
    "Name": "Motus Holdings Ltd."
  },
  {
    "Symbol": "MHGVY",
    "Name": "Mowi ASA"
  },
  {
    "Symbol": "MRPLY",
    "Name": "Mr. Price Group Ltd."
  },
  {
    "Symbol": "MSADY",
    "Name": "MS&AD Insurance Group Holdings Inc."
  },
  {
    "Symbol": "MTNOY",
    "Name": "MTN Group Ltd."
  },
  {
    "Symbol": "MTCPY",
    "Name": "MTR Ltd."
  },
  {
    "Symbol": "MTUAY",
    "Name": "MTU Aero Engines AG"
  },
  {
    "Symbol": "MURGY",
    "Name": "Muenchener Rueckversicherungs-Gesellschaft AG"
  },
  {
    "Symbol": "MCHOY",
    "Name": "Multichoice Group Ltd."
  },
  {
    "Symbol": "MRAAY",
    "Name": "Murata Manufacturing Co. Ltd."
  },
  {
    "Symbol": "MYNA",
    "Name": "Mynaric AG"
  },
  {
    "Symbol": "MYTE",
    "Name": "MYT Netherlands Parent B.V."
  },
  {
    "Symbol": "MYTHY",
    "Name": "Mytilineos S.A."
  },
  {
    "Symbol": "MJWNY",
    "Name": "Naked Wines PLC"
  },
  {
    "Symbol": "NPKLY",
    "Name": "Nampak Ltd."
  },
  {
    "Symbol": "NNDM",
    "Name": "Nano Dimension Ltd."
  },
  {
    "Symbol": "NBTX",
    "Name": "Nanobiotix S.A."
  },
  {
    "Symbol": "NPSNY",
    "Name": "Naspers Ltd."
  },
  {
    "Symbol": "NABZY",
    "Name": "National Australia Bank Ltd."
  },
  {
    "Symbol": "NBGRY",
    "Name": "National Bank of Greece S.A."
  },
  {
    "Symbol": "NGG",
    "Name": "National Grid PLC"
  },
  {
    "Symbol": "NTCO",
    "Name": "Natura & Co. Holding S.A."
  },
  {
    "Symbol": "GASNY",
    "Name": "Naturgy Energy Group S.A."
  },
  {
    "Symbol": "NTZ",
    "Name": "Natuzzi S.p.A."
  },
  {
    "Symbol": "NWG",
    "Name": "NatWest Group PLC"
  },
  {
    "Symbol": "NEMKY",
    "Name": "Nemetschek SE"
  },
  {
    "Symbol": "RDRUY",
    "Name": "Neometals Ltd."
  },
  {
    "Symbol": "NTOIY",
    "Name": "Neste Oyj"
  },
  {
    "Symbol": "NSRGY",
    "Name": "Nestle S.A."
  },
  {
    "Symbol": "NTES",
    "Name": "NetEase Inc."
  },
  {
    "Symbol": "NWITY",
    "Name": "Network International Holdings PLC"
  },
  {
    "Symbol": "EDU",
    "Name": "New Oriental Education & Technology Group Inc."
  },
  {
    "Symbol": "NWRLY",
    "Name": "New World Department Store China Ltd."
  },
  {
    "Symbol": "NDVLY",
    "Name": "New World Development Co. Ltd."
  },
  {
    "Symbol": "NCMGY",
    "Name": "Newcrest Mining Ltd."
  },
  {
    "Symbol": "NEXNY",
    "Name": "Nexans"
  },
  {
    "Symbol": "NEXXY",
    "Name": "Nexi S.p.A."
  },
  {
    "Symbol": "NEXOY",
    "Name": "NEXON Co. Ltd."
  },
  {
    "Symbol": "NXGPY",
    "Name": "Next PLC"
  },
  {
    "Symbol": "NGKSY",
    "Name": "NGK Spark Plug Co. Ltd."
  },
  {
    "Symbol": "NICE",
    "Name": "NICE Ltd."
  },
  {
    "Symbol": "NJDCY",
    "Name": "Nidec Corp."
  },
  {
    "Symbol": "NIFCY",
    "Name": "Nifco Inc."
  },
  {
    "Symbol": "NHNKY",
    "Name": "Nihon Kohden Corp."
  },
  {
    "Symbol": "NINOY",
    "Name": "Nikon Corp."
  },
  {
    "Symbol": "NDGPY",
    "Name": "Nine Dragons Paper Holdings Ltd."
  },
  {
    "Symbol": "NTDOY",
    "Name": "Nintendo Co. Ltd."
  },
  {
    "Symbol": "NIO",
    "Name": "NIO Inc."
  },
  {
    "Symbol": "NPPHY",
    "Name": "Nippon Paint Holdings Co. Ltd."
  },
  {
    "Symbol": "NPPNY",
    "Name": "Nippon Shinyaku Co. Ltd."
  },
  {
    "Symbol": "NPSCY",
    "Name": "Nippon Steel Corp."
  },
  {
    "Symbol": "NTTYY",
    "Name": "Nippon Telegraph & Telephone Corp."
  },
  {
    "Symbol": "NPNYY",
    "Name": "Nippon Yusen K.K."
  },
  {
    "Symbol": "NSANY",
    "Name": "Nissan Motor Co. Ltd."
  },
  {
    "Symbol": "NCLTY",
    "Name": "Nitori Holdings Co. Ltd."
  },
  {
    "Symbol": "NDEKY",
    "Name": "Nitto Denko Corp."
  },
  {
    "Symbol": "NIU",
    "Name": "Niu Technologies"
  },
  {
    "Symbol": "NMHLY",
    "Name": "NMC Health PLC"
  },
  {
    "Symbol": "NNGRY",
    "Name": "NN Group N.V."
  },
  {
    "Symbol": "NOAH",
    "Name": "Noah Holdings Ltd."
  },
  {
    "Symbol": "NOK",
    "Name": "Nokia Corp."
  },
  {
    "Symbol": "NKRKY",
    "Name": "Nokian Renkaat Oyj"
  },
  {
    "Symbol": "NMR",
    "Name": "Nomura Holdings Inc."
  },
  {
    "Symbol": "NRILY",
    "Name": "Nomura Research Institute Ltd."
  },
  {
    "Symbol": "NRDBY",
    "Name": "Nordea Bank AB"
  },
  {
    "Symbol": "NRXXY",
    "Name": "Nordex SE"
  },
  {
    "Symbol": "NENTY",
    "Name": "Nordic Entertainment Group AB"
  },
  {
    "Symbol": "NRSDY",
    "Name": "Nordic Semiconductor ASA"
  },
  {
    "Symbol": "NHYDY",
    "Name": "Norsk Hydro ASA"
  },
  {
    "Symbol": "NSTYY",
    "Name": "Northern Star Resources Ltd."
  },
  {
    "Symbol": "NVO",
    "Name": "Novo Nordisk A/S"
  },
  {
    "Symbol": "NVX",
    "Name": "Novonix Ltd."
  },
  {
    "Symbol": "NVZMY",
    "Name": "Novozymes A/S"
  },
  {
    "Symbol": "NPSKY",
    "Name": "NSK Ltd."
  },
  {
    "Symbol": "NTDTY",
    "Name": "NTT Data Corp."
  },
  {
    "Symbol": "NCNA",
    "Name": "NuCana PLC"
  },
  {
    "Symbol": "NWSGY",
    "Name": "NWS Holdings Ltd."
  },
  {
    "Symbol": "OTLY",
    "Name": "Oatly Group AB"
  },
  {
    "Symbol": "OCDDY",
    "Name": "Ocado Group PLC"
  },
  {
    "Symbol": "DNNGY",
    "Name": "Oersted A/S"
  },
  {
    "Symbol": "OSTIY",
    "Name": "Oesterreichische Post AG"
  },
  {
    "Symbol": "OIBZQ",
    "Name": "Oi S.A."
  },
  {
    "Symbol": "OJIPY",
    "Name": "Oji Holdings Corp."
  },
  {
    "Symbol": "OLK",
    "Name": "Olink Holding AB"
  },
  {
    "Symbol": "OCPNY",
    "Name": "Olympus Corp."
  },
  {
    "Symbol": "OMRNY",
    "Name": "OMRON Corp."
  },
  {
    "Symbol": "OMVKY",
    "Name": "OMV AG"
  },
  {
    "Symbol": "OCFT",
    "Name": "OneConnect Financial Technology Co. Ltd."
  },
  {
    "Symbol": "OG",
    "Name": "Onion Global Ltd."
  },
  {
    "Symbol": "OPHLY",
    "Name": "Ono Pharmaceutical Co. Ltd."
  },
  {
    "Symbol": "OPRA",
    "Name": "Opera Ltd."
  },
  {
    "Symbol": "OPT",
    "Name": "Opthea Ltd."
  },
  {
    "Symbol": "ORAN",
    "Name": "Orange"
  },
  {
    "Symbol": "MXCHY",
    "Name": "Orbia Advance S.A.B. de C.V."
  },
  {
    "Symbol": "ORTX",
    "Name": "Orchard Therapeutics PLC"
  },
  {
    "Symbol": "OCLDY",
    "Name": "Orica Ltd."
  },
  {
    "Symbol": "OROVY",
    "Name": "Orient Overseas International Ltd."
  },
  {
    "Symbol": "OLCLY",
    "Name": "Oriental Land Co. Ltd."
  },
  {
    "Symbol": "OGFGY",
    "Name": "Origin Energy Ltd."
  },
  {
    "Symbol": "ORINY",
    "Name": "Orion Oyj"
  },
  {
    "Symbol": "IX",
    "Name": "Orix Corp."
  },
  {
    "Symbol": "ORKLY",
    "Name": "Orkla ASA"
  },
  {
    "Symbol": "ORRRY",
    "Name": "Orpea S.A."
  },
  {
    "Symbol": "ORPHY",
    "Name": "Orphazyme A/S"
  },
  {
    "Symbol": "OSAGY",
    "Name": "Osram Licht AG"
  },
  {
    "Symbol": "OTSKY",
    "Name": "Otsuka Holdings Co. Ltd."
  },
  {
    "Symbol": "OUTKY",
    "Name": "Outokumpu Oyj"
  },
  {
    "Symbol": "OVCHY",
    "Name": "Oversea-Chinese Banking Ltd."
  },
  {
    "Symbol": "PCFBY",
    "Name": "Pacific Basin Shipping Ltd."
  },
  {
    "Symbol": "PLFRY",
    "Name": "Palfinger AG"
  },
  {
    "Symbol": "PAM",
    "Name": "Pampa Energia S.A."
  },
  {
    "Symbol": "DQJCY",
    "Name": "Pan Pacific International Holdings Corp."
  },
  {
    "Symbol": "PCRFY",
    "Name": "Panasonic Holdings Corp."
  },
  {
    "Symbol": "PANDY",
    "Name": "Pandora A/S"
  },
  {
    "Symbol": "PKCOY",
    "Name": "PARK24 Co. Ltd."
  },
  {
    "Symbol": "PTNR",
    "Name": "Partner Communications Co. Ltd."
  },
  {
    "Symbol": "PCCWY",
    "Name": "PCCW Ltd."
  },
  {
    "Symbol": "PSO",
    "Name": "Pearson PLC"
  },
  {
    "Symbol": "PEGRY",
    "Name": "Pennon Group PLC"
  },
  {
    "Symbol": "PRNDY",
    "Name": "Pernod Ricard S.A."
  },
  {
    "Symbol": "PSMMY",
    "Name": "Persimmon PLC"
  },
  {
    "Symbol": "PPAAY",
    "Name": "Perusahaan Gas Negara"
  },
  {
    "Symbol": "PTR",
    "Name": "PetroChina Co. Ltd."
  },
  {
    "Symbol": "POFCY",
    "Name": "Petrofac Ltd."
  },
  {
    "Symbol": "PBR",
    "Name": "Petroleo Brasileiro S/A"
  },
  {
    "Symbol": "PBR.A",
    "Name": "Petroleo Brasileiro S/A  A"
  },
  {
    "Symbol": "PHAR",
    "Name": "Pharming Group N.V."
  },
  {
    "Symbol": "FENG",
    "Name": "Phoenix New Media Ltd. Cl A"
  },
  {
    "Symbol": "PPCCY",
    "Name": "PICC Property & Casualty Co. Ltd."
  },
  {
    "Symbol": "PGENY",
    "Name": "Pigeon Corp."
  },
  {
    "Symbol": "PDD",
    "Name": "Pinduoduo Inc."
  },
  {
    "Symbol": "PNGAY",
    "Name": "Ping An Insurance Group Co. of China Ltd."
  },
  {
    "Symbol": "PT",
    "Name": "Pintec Technology Holdings Ltd."
  },
  {
    "Symbol": "BPIRY",
    "Name": "Piraeus Financial Holdings S.A."
  },
  {
    "Symbol": "PHI",
    "Name": "PLDT Inc."
  },
  {
    "Symbol": "POAHY",
    "Name": "Porsche Automobil Holding SE"
  },
  {
    "Symbol": "PKX",
    "Name": "POSCO Holdings Inc."
  },
  {
    "Symbol": "PSTVY",
    "Name": "Postal Savings Bank of China Co. Ltd."
  },
  {
    "Symbol": "PSTNY",
    "Name": "PostNL N.V."
  },
  {
    "Symbol": "HGKGY",
    "Name": "Power Assets Holdings Ltd."
  },
  {
    "Symbol": "PRDSY",
    "Name": "Prada S.p.A."
  },
  {
    "Symbol": "PRRFY",
    "Name": "Premier Foods PLC"
  },
  {
    "Symbol": "PRISY",
    "Name": "Promotora de Informaciones S.A.  Cl A"
  },
  {
    "Symbol": "PUODY",
    "Name": "Promotora y Operadora de Infraestructura S.A. de C.V."
  },
  {
    "Symbol": "PGUCY",
    "Name": "Prosegur Cash S.A."
  },
  {
    "Symbol": "PBSFY",
    "Name": "ProSiebenSat.1 Media SE"
  },
  {
    "Symbol": "PROSY",
    "Name": "Prosus N.V."
  },
  {
    "Symbol": "FPLPY",
    "Name": "Provident Financial PLC"
  },
  {
    "Symbol": "BGAOY",
    "Name": "Proximus Group"
  },
  {
    "Symbol": "PUK",
    "Name": "Prudential PLC"
  },
  {
    "Symbol": "PRYMY",
    "Name": "Prysmian S.p.A."
  },
  {
    "Symbol": "PUBGY",
    "Name": "Publicis Groupe S.A."
  },
  {
    "Symbol": "PUMSY",
    "Name": "Puma SE"
  },
  {
    "Symbol": "PRTC",
    "Name": "PureTech Health PLC"
  },
  {
    "Symbol": "PPBT",
    "Name": "Purple Biotech Ltd."
  },
  {
    "Symbol": "NEW",
    "Name": "Puxin Ltd."
  },
  {
    "Symbol": "PUYI",
    "Name": "Puyi Inc."
  },
  {
    "Symbol": "QK",
    "Name": "Q&K International Group Ltd."
  },
  {
    "Symbol": "QABSY",
    "Name": "Qantas Airways Ltd."
  },
  {
    "Symbol": "QBIEY",
    "Name": "QBE Insurance Group Ltd."
  },
  {
    "Symbol": "QNTQY",
    "Name": "QinetiQ Group PLC"
  },
  {
    "Symbol": "NPACY",
    "Name": "Quadient S.A."
  },
  {
    "Symbol": "QBBHY",
    "Name": "Qube Holdings Ltd."
  },
  {
    "Symbol": "QD",
    "Name": "Qudian Inc."
  },
  {
    "Symbol": "QH",
    "Name": "Quhuo Ltd."
  },
  {
    "Symbol": "QNRX",
    "Name": "Quoin Pharmaceuticals Ltd."
  },
  {
    "Symbol": "QTT",
    "Name": "Qutoutiao Inc."
  },
  {
    "Symbol": "RADLY",
    "Name": "Raia Drogasil S/A"
  },
  {
    "Symbol": "RAIFY",
    "Name": "Raiffeisen Bank International AG"
  },
  {
    "Symbol": "RKUNY",
    "Name": "Rakuten Group Inc."
  },
  {
    "Symbol": "RMYHY",
    "Name": "Ramsay Health Care Ltd."
  },
  {
    "Symbol": "RANJY",
    "Name": "Randstad N.V."
  },
  {
    "Symbol": "RZZRY",
    "Name": "Razer Inc."
  },
  {
    "Symbol": "RNWEY",
    "Name": "REC Silicon ASA"
  },
  {
    "Symbol": "RBGLY",
    "Name": "Reckitt Benckiser Group PLC"
  },
  {
    "Symbol": "RCRUY",
    "Name": "Recruit Holdings Co. Ltd."
  },
  {
    "Symbol": "RDEIY",
    "Name": "Red Electrica S.A."
  },
  {
    "Symbol": "RDBBY",
    "Name": "RedBubble Ltd."
  },
  {
    "Symbol": "RDHL",
    "Name": "RedHill Biopharma Ltd."
  },
  {
    "Symbol": "RELFF",
    "Name": "Reliance Infrastructure Ltd. GDR"
  },
  {
    "Symbol": "RLFTY",
    "Name": "RELIEF THERAPEUTICS Holding AG"
  },
  {
    "Symbol": "RELX",
    "Name": "RELX PLC"
  },
  {
    "Symbol": "REMYY",
    "Name": "Remy Cointreau S.A."
  },
  {
    "Symbol": "RNLX",
    "Name": "Renalytix PLC"
  },
  {
    "Symbol": "RNLSY",
    "Name": "Renault S.A."
  },
  {
    "Symbol": "RNECY",
    "Name": "Renesas Electronics Corp."
  },
  {
    "Symbol": "SOL",
    "Name": "ReneSola Ltd."
  },
  {
    "Symbol": "RENN",
    "Name": "Renren Inc."
  },
  {
    "Symbol": "RTOKY",
    "Name": "Rentokil Initial PLC"
  },
  {
    "Symbol": "REPYY",
    "Name": "Repsol S.A."
  },
  {
    "Symbol": "RXEEY",
    "Name": "Rexel S.A."
  },
  {
    "Symbol": "RNMBY",
    "Name": "Rheinmetall AG"
  },
  {
    "Symbol": "RICOY",
    "Name": "Ricoh Co. Ltd."
  },
  {
    "Symbol": "RTMVY",
    "Name": "Rightmove PLC"
  },
  {
    "Symbol": "RIO",
    "Name": "Rio Tinto PLC"
  },
  {
    "Symbol": "REDU",
    "Name": "RISE Education Cayman Ltd."
  },
  {
    "Symbol": "RLX",
    "Name": "RLX Technology Inc."
  },
  {
    "Symbol": "RRETY",
    "Name": "Robinsons Retail Holdings Inc."
  },
  {
    "Symbol": "RHHBY",
    "Name": "Roche Holding AG"
  },
  {
    "Symbol": "ROHCY",
    "Name": "Rohm Co. Ltd."
  },
  {
    "Symbol": "RYCEY",
    "Name": "Rolls-Royce Holdings PLC"
  },
  {
    "Symbol": "KKPNY",
    "Name": "Royal KPN N.V."
  },
  {
    "Symbol": "ROYMY",
    "Name": "Royal Mail PLC"
  },
  {
    "Symbol": "RGLXY",
    "Name": "RTL Group S.A."
  },
  {
    "Symbol": "RBSFY",
    "Name": "Rubis SCA"
  },
  {
    "Symbol": "RWEOY",
    "Name": "RWE AG"
  },
  {
    "Symbol": "RYAAY",
    "Name": "Ryanair Holdings PLC"
  },
  {
    "Symbol": "RYB",
    "Name": "RYB Education Inc."
  },
  {
    "Symbol": "RYHTY",
    "Name": "Ryman Healthcare Ltd."
  },
  {
    "Symbol": "RYKKY",
    "Name": "Ryohin Keikaku Co. Ltd."
  },
  {
    "Symbol": "SAABY",
    "Name": "Saab AB"
  },
  {
    "Symbol": "SFET",
    "Name": "Safe-T Group Ltd."
  },
  {
    "Symbol": "SAFRY",
    "Name": "SAFRAN S.A."
  },
  {
    "Symbol": "SGPYY",
    "Name": "Sage Group PLC"
  },
  {
    "Symbol": "SAPMY",
    "Name": "Saipem S.p.A."
  },
  {
    "Symbol": "SALRY",
    "Name": "SalMar ASA"
  },
  {
    "Symbol": "SFRGY",
    "Name": "Salvatore Ferragamo S.p.A."
  },
  {
    "Symbol": "SZGPY",
    "Name": "Salzgitter AG"
  },
  {
    "Symbol": "SAXPY",
    "Name": "Sampo Oyj Series A"
  },
  {
    "Symbol": "SMSEY",
    "Name": "Samsonite International S.A."
  },
  {
    "Symbol": "SMGBY",
    "Name": "San Miguel B"
  },
  {
    "Symbol": "SCHYY",
    "Name": "Sands China Ltd."
  },
  {
    "Symbol": "SDVKY",
    "Name": "Sandvik AB"
  },
  {
    "Symbol": "SARDY",
    "Name": "Sanford Ltd."
  },
  {
    "Symbol": "SLLDY",
    "Name": "Sanlam Ltd."
  },
  {
    "Symbol": "SNY",
    "Name": "Sanofi"
  },
  {
    "Symbol": "SNW2",
    "Name": "Sanofi S.A."
  },
  {
    "Symbol": "SNPHY",
    "Name": "Santen Pharmaceutical Co. Ltd."
  },
  {
    "Symbol": "SSLZY",
    "Name": "Santos Ltd."
  },
  {
    "Symbol": "SAP",
    "Name": "SAP SE"
  },
  {
    "Symbol": "SPPJY",
    "Name": "Sappi Ltd."
  },
  {
    "Symbol": "SOAGY",
    "Name": "Sartorius AG"
  },
  {
    "Symbol": "SRTOY",
    "Name": "Sartorius Stedim Biotech S.A."
  },
  {
    "Symbol": "SASDY",
    "Name": "SAS AB"
  },
  {
    "Symbol": "SSL",
    "Name": "Sasol Ltd."
  },
  {
    "Symbol": "SFFLY",
    "Name": "Schaeffler AG"
  },
  {
    "Symbol": "SBSNY",
    "Name": "Schibsted ASA"
  },
  {
    "Symbol": "SBGSY",
    "Name": "Schneider Electric SE"
  },
  {
    "Symbol": "SCRYY",
    "Name": "Scor S.E."
  },
  {
    "Symbol": "SE",
    "Name": "Sea Ltd."
  },
  {
    "Symbol": "SEBYY",
    "Name": "SEB S.A."
  },
  {
    "Symbol": "SOMLY",
    "Name": "Secom Co. Ltd."
  },
  {
    "Symbol": "SECO",
    "Name": "Secoo Holding Ltd."
  },
  {
    "Symbol": "SKLTY",
    "Name": "SEEK Ltd."
  },
  {
    "Symbol": "SGAMY",
    "Name": "Sega Sammy Holdings Inc."
  },
  {
    "Symbol": "SEKEY",
    "Name": "Seiko Epson Corp."
  },
  {
    "Symbol": "SKSUY",
    "Name": "Sekisui Chemical Co. Ltd."
  },
  {
    "Symbol": "SKHSY",
    "Name": "Sekisui House Ltd."
  },
  {
    "Symbol": "SMBMY",
    "Name": "SembCorp Marine Ltd."
  },
  {
    "Symbol": "PSGTY",
    "Name": "Semen Indonesia Persero"
  },
  {
    "Symbol": "ASAI",
    "Name": "Sendas Distribuidora S.A."
  },
  {
    "Symbol": "SQNS",
    "Name": "Sequans Communications S.A."
  },
  {
    "Symbol": "SCGPY",
    "Name": "Serco Group PLC"
  },
  {
    "Symbol": "SVNDY",
    "Name": "Seven & I Holdings Co. Ltd."
  },
  {
    "Symbol": "STRNY",
    "Name": "Severn Trent PLC"
  },
  {
    "Symbol": "SGSOY",
    "Name": "SGS S.A."
  },
  {
    "Symbol": "SHWGY",
    "Name": "Shandong Weigao Group Medical Polymer Co. Ltd."
  },
  {
    "Symbol": "SIELY",
    "Name": "Shanghai Electric Group Co. Ltd."
  },
  {
    "Symbol": "SGHIY",
    "Name": "Shanghai Industrial Holdings Ltd."
  },
  {
    "Symbol": "SHPMY",
    "Name": "Shanghai Pharmaceuticals Holding Co. Ltd."
  },
  {
    "Symbol": "SHCAY",
    "Name": "Sharp Corp."
  },
  {
    "Symbol": "SHEL",
    "Name": "Shell PLC"
  },
  {
    "Symbol": "SIHBY",
    "Name": "Shenzhen Investment Holdings Bay Area Development Co. Ltd."
  },
  {
    "Symbol": "SHZHY",
    "Name": "Shenzhou International Group Holdings Ltd."
  },
  {
    "Symbol": "TSHMY",
    "Name": "Shibaura Machine Co. Ltd."
  },
  {
    "Symbol": "SHMUY",
    "Name": "Shimizu Corp."
  },
  {
    "Symbol": "SHECY",
    "Name": "Shin-Etsu Chemical Co. Ltd."
  },
  {
    "Symbol": "SHG",
    "Name": "Shinhan Financial Group Co. Ltd."
  },
  {
    "Symbol": "SKLKY",
    "Name": "Shinsei Bank Ltd."
  },
  {
    "Symbol": "SGIOY",
    "Name": "Shionogi & Co. Ltd."
  },
  {
    "Symbol": "SSDOY",
    "Name": "Shiseido Co. Ltd."
  },
  {
    "Symbol": "SHZUY",
    "Name": "Shizuoka Bank Ltd."
  },
  {
    "Symbol": "SAEYY",
    "Name": "Shop Apotheke Europe N.V."
  },
  {
    "Symbol": "SRGHY",
    "Name": "Shoprite Holdings Ltd."
  },
  {
    "Symbol": "SHWDY",
    "Name": "Showa Denko K.K."
  },
  {
    "Symbol": "SBSW",
    "Name": "Sibanye-Stillwater Ltd."
  },
  {
    "Symbol": "SIEGY",
    "Name": "Siemens AG"
  },
  {
    "Symbol": "SMNEY",
    "Name": "Siemens Energy AG"
  },
  {
    "Symbol": "GCTAY",
    "Name": "Siemens Gamesa Renewable Energy S.A."
  },
  {
    "Symbol": "SMMNY",
    "Name": "Siemens Healthineers AG"
  },
  {
    "Symbol": "SIFY",
    "Name": "Sify Technologies Ltd."
  },
  {
    "Symbol": "PHPPY",
    "Name": "Signify N.V."
  },
  {
    "Symbol": "SXYAY",
    "Name": "Sika AG"
  },
  {
    "Symbol": "SLN",
    "Name": "Silence Therapeutics PLC"
  },
  {
    "Symbol": "SILXY",
    "Name": "Silex Systems Ltd."
  },
  {
    "Symbol": "SIMO",
    "Name": "Silicon Motion Technology Corp."
  },
  {
    "Symbol": "SMSMY",
    "Name": "Sims Ltd."
  },
  {
    "Symbol": "SINGY",
    "Name": "Singapore Airlines Ltd."
  },
  {
    "Symbol": "SPXCY",
    "Name": "Singapore Exchange Ltd."
  },
  {
    "Symbol": "SPSTY",
    "Name": "Singapore Post Ltd."
  },
  {
    "Symbol": "SGGKY",
    "Name": "Singapore Technologies Engineering Ltd."
  },
  {
    "Symbol": "SGAPY",
    "Name": "Singapore Telecommunications Ltd."
  },
  {
    "Symbol": "SGTSY",
    "Name": "Singulus Technologies AG"
  },
  {
    "Symbol": "SBHMY",
    "Name": "Sino Biopharmaceutical Ltd."
  },
  {
    "Symbol": "SNLAY",
    "Name": "Sino Land Co. Ltd."
  },
  {
    "Symbol": "SHI",
    "Name": "SINOPEC Shanghai Petrochemical Co. Ltd."
  },
  {
    "Symbol": "SHTDY",
    "Name": "Sinopharm Group Co. Ltd."
  },
  {
    "Symbol": "SHKLY",
    "Name": "Sinotruk Hong Kong Ltd."
  },
  {
    "Symbol": "SITIY",
    "Name": "SITC International Holdings Co. Ltd."
  },
  {
    "Symbol": "SJMHY",
    "Name": "SJM Holdings Ltd."
  },
  {
    "Symbol": "SKM",
    "Name": "SK Telecom Co. Ltd."
  },
  {
    "Symbol": "SKBSY",
    "Name": "Skanska AB"
  },
  {
    "Symbol": "SKFRY",
    "Name": "SKF AB"
  },
  {
    "Symbol": "SWDHY",
    "Name": "Skyworth Group Ltd."
  },
  {
    "Symbol": "SLCJY",
    "Name": "SLC Agricola S/A"
  },
  {
    "Symbol": "SMTGY",
    "Name": "SMA Solar Technology AG"
  },
  {
    "Symbol": "EM",
    "Name": "Smart Share Global Ltd."
  },
  {
    "Symbol": "SMCAY",
    "Name": "SMC Corp."
  },
  {
    "Symbol": "SNN",
    "Name": "Smith & Nephew PLC"
  },
  {
    "Symbol": "SMGZY",
    "Name": "Smiths Group PLC"
  },
  {
    "Symbol": "SMFKY",
    "Name": "Smurfit Kappa Group PLC"
  },
  {
    "Symbol": "SNMRY",
    "Name": "Snam S.p.A."
  },
  {
    "Symbol": "SQM",
    "Name": "Sociedad Quimica y Minera De Chile S.A."
  },
  {
    "Symbol": "BICEY",
    "Name": "Societe BIC"
  },
  {
    "Symbol": "SCGLY",
    "Name": "Societe Generale France"
  },
  {
    "Symbol": "SDXAY",
    "Name": "Sodexo S.A."
  },
  {
    "Symbol": "SFTBY",
    "Name": "SoftBank Group Corp."
  },
  {
    "Symbol": "SFTL",
    "Name": "Softline Holding PLC GDR"
  },
  {
    "Symbol": "STWRY",
    "Name": "Software AG"
  },
  {
    "Symbol": "SOHU",
    "Name": "Sohu.com Ltd."
  },
  {
    "Symbol": "SLOIY",
    "Name": "Soitec S.A."
  },
  {
    "Symbol": "SLVYY",
    "Name": "Solvay S.A."
  },
  {
    "Symbol": "SMPNY",
    "Name": "Sompo Japan Nipponkoa Holdings Inc."
  },
  {
    "Symbol": "SKHHY",
    "Name": "Sonic Healthcare Ltd."
  },
  {
    "Symbol": "SONVY",
    "Name": "Sonova Holding AG"
  },
  {
    "Symbol": "SONY",
    "Name": "Sony Group Corp."
  },
  {
    "Symbol": "SOS",
    "Name": "SOS Ltd."
  },
  {
    "Symbol": "SOUHY",
    "Name": "South32 Ltd."
  },
  {
    "Symbol": "SY",
    "Name": "So-Young International Inc."
  },
  {
    "Symbol": "LOV",
    "Name": "Spark Networks SE"
  },
  {
    "Symbol": "SPKKY",
    "Name": "Spark New Zealand Ltd."
  },
  {
    "Symbol": "SEPJY",
    "Name": "Spectris PLC"
  },
  {
    "Symbol": "SPXSY",
    "Name": "Spirax-Sarco Engineering PLC"
  },
  {
    "Symbol": "SPMYY",
    "Name": "Spirent Communication PLC"
  },
  {
    "Symbol": "SQNNY",
    "Name": "Square Enix Holdings Co. Ltd."
  },
  {
    "Symbol": "SSAAY",
    "Name": "SSAB AB"
  },
  {
    "Symbol": "SSEZY",
    "Name": "SSE PLC"
  },
  {
    "Symbol": "STBMY",
    "Name": "St. Barbara Ltd."
  },
  {
    "Symbol": "SBLUY",
    "Name": "Stabilus S.E."
  },
  {
    "Symbol": "SGBLY",
    "Name": "Standard Bank Group Ltd."
  },
  {
    "Symbol": "SCBFY",
    "Name": "Standard Chartered PLC"
  },
  {
    "Symbol": "SRHBY",
    "Name": "Starhub Ltd."
  },
  {
    "Symbol": "SPHRY",
    "Name": "Starpharma Holdings Ltd."
  },
  {
    "Symbol": "SBKFF",
    "Name": "State Bank of India GDR"
  },
  {
    "Symbol": "MITO",
    "Name": "Stealth BioTherapeutics Corp."
  },
  {
    "Symbol": "STM",
    "Name": "STMicroelectronics N.V."
  },
  {
    "Symbol": "SEOAY",
    "Name": "Stora Enso Oyj"
  },
  {
    "Symbol": "SAUHY",
    "Name": "Straumann Holding AG"
  },
  {
    "Symbol": "MSC",
    "Name": "Studio City International Holdings Ltd."
  },
  {
    "Symbol": "FUJHY",
    "Name": "Subaru Corp."
  },
  {
    "Symbol": "SUBCY",
    "Name": "Subsea 7 S.A."
  },
  {
    "Symbol": "SUOPY",
    "Name": "Sumco Corp."
  },
  {
    "Symbol": "SOMMY",
    "Name": "Sumitomo Chemical Co. Ltd."
  },
  {
    "Symbol": "SSUMY",
    "Name": "Sumitomo Corp."
  },
  {
    "Symbol": "SMTOY",
    "Name": "Sumitomo Electric Industries Ltd."
  },
  {
    "Symbol": "SOHVY",
    "Name": "Sumitomo Heavy Industries Ltd."
  },
  {
    "Symbol": "SMMYY",
    "Name": "Sumitomo Metal Mining Co. Ltd."
  },
  {
    "Symbol": "SMFG",
    "Name": "Sumitomo Mitsui Financial Group Inc."
  },
  {
    "Symbol": "SUTNY",
    "Name": "Sumitomo Mitsui Trust Holdings Inc."
  },
  {
    "Symbol": "SURRY",
    "Name": "Sun Art Retail Group Ltd."
  },
  {
    "Symbol": "SUHJY",
    "Name": "Sun Hung Kai Properties Ltd."
  },
  {
    "Symbol": "SNMCY",
    "Name": "Suncorp Group Ltd."
  },
  {
    "Symbol": "STG",
    "Name": "Sunlands Technology Group"
  },
  {
    "Symbol": "SOTGY",
    "Name": "Sunny Optical Technology Group Co. Ltd."
  },
  {
    "Symbol": "STBFY",
    "Name": "Suntory Beverage & Food Ltd."
  },
  {
    "Symbol": "SUZ",
    "Name": "Suzano S/A"
  },
  {
    "Symbol": "SZKMY",
    "Name": "Suzuki Motor Corp."
  },
  {
    "Symbol": "SVNLY",
    "Name": "Svenska Handelsbanken AB"
  },
  {
    "Symbol": "SWGAY",
    "Name": "Swatch Group AG"
  },
  {
    "Symbol": "SWDBY",
    "Name": "Swedbank AB"
  },
  {
    "Symbol": "SWMAY",
    "Name": "Swedish Match AB"
  },
  {
    "Symbol": "SWRAY",
    "Name": "Swire Pacific Ltd."
  },
  {
    "Symbol": "SWRBY",
    "Name": "Swire Pacific Ltd. B"
  },
  {
    "Symbol": "SZLMY",
    "Name": "Swiss Life Holding AG"
  },
  {
    "Symbol": "SSREY",
    "Name": "Swiss Re Ltd."
  },
  {
    "Symbol": "SCMWY",
    "Name": "Swisscom AG"
  },
  {
    "Symbol": "SYIEY",
    "Name": "Symrise AG"
  },
  {
    "Symbol": "SYYNY",
    "Name": "Syn Prop e Tech S.A. GDR"
  },
  {
    "Symbol": "SSMXY",
    "Name": "Sysmex Corp."
  },
  {
    "Symbol": "TDHOY",
    "Name": "T&D Holdings Inc."
  },
  {
    "Symbol": "TACBY",
    "Name": "TABCorp Holdings Ltd."
  },
  {
    "Symbol": "THYCY",
    "Name": "Taiheiyo Cement Corp."
  },
  {
    "Symbol": "TISCY",
    "Name": "Taisei Corp."
  },
  {
    "Symbol": "TAIPY",
    "Name": "Taisho Pharmaceutical Holdings Co. Ltd."
  },
  {
    "Symbol": "TSM",
    "Name": "Taiwan Semiconductor Manufacturing Co. Ltd."
  },
  {
    "Symbol": "TYOYY",
    "Name": "Taiyo Yuden Co. Ltd."
  },
  {
    "Symbol": "TAK",
    "Name": "Takeda Pharmaceutical Co. Ltd."
  },
  {
    "Symbol": "TAL",
    "Name": "TAL Education Group"
  },
  {
    "Symbol": "TEDU",
    "Name": "Tarena International Inc."
  },
  {
    "Symbol": "TTM",
    "Name": "Tata Motors Ltd."
  },
  {
    "Symbol": "TTST",
    "Name": "Tata Steel Ltd. GDR Reg S"
  },
  {
    "Symbol": "TATYY",
    "Name": "Tate & Lyle PLC"
  },
  {
    "Symbol": "TAVHY",
    "Name": "TAV Havalimanlari Holding A.S."
  },
  {
    "Symbol": "TWODY",
    "Name": "Taylor Wimpey PLC"
  },
  {
    "Symbol": "TCBP",
    "Name": "TC BioPharm Holdings PLC"
  },
  {
    "Symbol": "TCS",
    "Name": "TCS Group Holding PLC GDR"
  },
  {
    "Symbol": "TDCX",
    "Name": "TDCX Inc."
  },
  {
    "Symbol": "TTDKY",
    "Name": "TDK Corp."
  },
  {
    "Symbol": "TMVWY",
    "Name": "TeamViewer AG"
  },
  {
    "Symbol": "TCGGY",
    "Name": "Tecan Group AG"
  },
  {
    "Symbol": "TCLRY",
    "Name": "Technicolor"
  },
  {
    "Symbol": "TCCPY",
    "Name": "TechnoPro Holdings Inc."
  },
  {
    "Symbol": "TTNDY",
    "Name": "Techtronic Industries Co. Ltd."
  },
  {
    "Symbol": "TINLY",
    "Name": "Teijin Ltd."
  },
  {
    "Symbol": "TEO",
    "Name": "Telecom Argentina S.A."
  },
  {
    "Symbol": "TIAIY",
    "Name": "Telecom Italia S.p.A."
  },
  {
    "Symbol": "ERIC",
    "Name": "Telefon AB L.M. Ericsson"
  },
  {
    "Symbol": "VIV",
    "Name": "Telefonica Brasil S.A."
  },
  {
    "Symbol": "TEF",
    "Name": "Telefonica S.A."
  },
  {
    "Symbol": "TKAGY",
    "Name": "Telekom Austria AG"
  },
  {
    "Symbol": "TLK",
    "Name": "Telekomunikasi Indonesia"
  },
  {
    "Symbol": "TLGHY",
    "Name": "Telenet Group Holding N.V."
  },
  {
    "Symbol": "TELNY",
    "Name": "Telenor ASA"
  },
  {
    "Symbol": "TLPFY",
    "Name": "Teleperformance SE"
  },
  {
    "Symbol": "TLSNY",
    "Name": "Telia Co. AB"
  },
  {
    "Symbol": "TLKGY",
    "Name": "Telkom SA SOC Ltd."
  },
  {
    "Symbol": "TLSYY",
    "Name": "Telstra Ltd."
  },
  {
    "Symbol": "TMSNY",
    "Name": "Temenos AG"
  },
  {
    "Symbol": "TNABY",
    "Name": "Tenaga Nasional Bhd"
  },
  {
    "Symbol": "TS",
    "Name": "Tenaris S.A."
  },
  {
    "Symbol": "TCEHY",
    "Name": "Tencent Holdings Ltd."
  },
  {
    "Symbol": "TME",
    "Name": "Tencent Music Entertainment Group"
  },
  {
    "Symbol": "TEZNY",
    "Name": "TERNA S.p.A."
  },
  {
    "Symbol": "TX",
    "Name": "TERNIUM S.A."
  },
  {
    "Symbol": "TRUMY",
    "Name": "Terumo Corp."
  },
  {
    "Symbol": "TSCDY",
    "Name": "Tesco PLC"
  },
  {
    "Symbol": "TEVA",
    "Name": "Teva Pharmaceutical Industries Ltd."
  },
  {
    "Symbol": "TGSGY",
    "Name": "TGS ASA"
  },
  {
    "Symbol": "TOIPY",
    "Name": "Thai Oil PCL"
  },
  {
    "Symbol": "TUFBY",
    "Name": "Thai Union Group PCL"
  },
  {
    "Symbol": "THLLY",
    "Name": "Thales S.A."
  },
  {
    "Symbol": "NCTY",
    "Name": "The9 Ltd."
  },
  {
    "Symbol": "THKLY",
    "Name": "THK Co. Ltd."
  },
  {
    "Symbol": "THUPY",
    "Name": "Thule Group AB"
  },
  {
    "Symbol": "TKAMY",
    "Name": "Thyssenkrupp AG"
  },
  {
    "Symbol": "TBLMY",
    "Name": "Tiger Brands Ltd."
  },
  {
    "Symbol": "TIMB",
    "Name": "TIM S/A"
  },
  {
    "Symbol": "TYCMY",
    "Name": "Tingyi Cayman Islands Holding Corp."
  },
  {
    "Symbol": "TOKTY",
    "Name": "Tokai Tokyo Financial Holdings Inc."
  },
  {
    "Symbol": "TKOMY",
    "Name": "Tokio Marine Holdings Inc."
  },
  {
    "Symbol": "TKYMY",
    "Name": "Tokuyama Corp."
  },
  {
    "Symbol": "TKECY",
    "Name": "Tokyo Electric Power Co. Holdings"
  },
  {
    "Symbol": "TOELY",
    "Name": "Tokyo Electron Ltd."
  },
  {
    "Symbol": "TKGSY",
    "Name": "Tokyo Gas Co. Ltd."
  },
  {
    "Symbol": "TOKUY",
    "Name": "Tokyu Corp."
  },
  {
    "Symbol": "TKFOY",
    "Name": "Tokyu Fudosan Holdings Corp."
  },
  {
    "Symbol": "TMRAY",
    "Name": "Tomra Systems ASA"
  },
  {
    "Symbol": "TMOAY",
    "Name": "TomTom N.V."
  },
  {
    "Symbol": "TOMYY",
    "Name": "Tomy Co. Ltd."
  },
  {
    "Symbol": "TGLVY",
    "Name": "Top Glove Bhd"
  },
  {
    "Symbol": "TPDKY",
    "Name": "Topdanmark A/S"
  },
  {
    "Symbol": "TOPPY",
    "Name": "Toppan Inc."
  },
  {
    "Symbol": "TRYIY",
    "Name": "Toray Industries Inc."
  },
  {
    "Symbol": "TOSYY",
    "Name": "Toshiba Corp."
  },
  {
    "Symbol": "TTE",
    "Name": "TotalEnergies SE"
  },
  {
    "Symbol": "TOTDY",
    "Name": "Toto Ltd."
  },
  {
    "Symbol": "TSUKY",
    "Name": "Toyo Suisan Kaisha Ltd."
  },
  {
    "Symbol": "TYIDY",
    "Name": "Toyota Industries Corp."
  },
  {
    "Symbol": "TM",
    "Name": "Toyota Motor Corp."
  },
  {
    "Symbol": "TGS",
    "Name": "Transportadora de Gas del Sur S.A."
  },
  {
    "Symbol": "TSYHY",
    "Name": "TravelSky Technology Ltd."
  },
  {
    "Symbol": "TPRKY",
    "Name": "Travis Perkins PLC"
  },
  {
    "Symbol": "TSRYY",
    "Name": "Treasury Wine Estates Ltd."
  },
  {
    "Symbol": "TRMR",
    "Name": "Tremor International Ltd."
  },
  {
    "Symbol": "TMICY",
    "Name": "Trend Micro Inc."
  },
  {
    "Symbol": "TRNLY",
    "Name": "Trendlines Group Ltd."
  },
  {
    "Symbol": "TRIB",
    "Name": "Trinity Biotech PLC"
  },
  {
    "Symbol": "0I50",
    "Name": "Trip.com Group Ltd."
  },
  {
    "Symbol": "TCOM",
    "Name": "Trip.com Group Ltd."
  },
  {
    "Symbol": "TRVG",
    "Name": "trivago N.V."
  },
  {
    "Symbol": "TRUHY",
    "Name": "Truly International Holdings Ltd."
  },
  {
    "Symbol": "TSGTY",
    "Name": "Tsingtao Brewery Co. Ltd."
  },
  {
    "Symbol": "TC",
    "Name": "TuanChe Ltd."
  },
  {
    "Symbol": "TUIFY",
    "Name": "TUI AG"
  },
  {
    "Symbol": "TUWOY",
    "Name": "Tullow Oil PLC"
  },
  {
    "Symbol": "TOUR",
    "Name": "Tuniu Corp."
  },
  {
    "Symbol": "TKHVY",
    "Name": "Turk Hava Yollari A.O."
  },
  {
    "Symbol": "TRKNY",
    "Name": "Turk Telekomunikasyon A.S."
  },
  {
    "Symbol": "TKC",
    "Name": "Turkcell Iletisim Hizmetleri A.S."
  },
  {
    "Symbol": "TKGBY",
    "Name": "Turkiye Garanti Bankasi A.S."
  },
  {
    "Symbol": "TUYA",
    "Name": "Tuya Inc."
  },
  {
    "Symbol": "THDDY",
    "Name": "TV Asahi Holdings Corp."
  },
  {
    "Symbol": "UBEOY",
    "Name": "UBE Corp."
  },
  {
    "Symbol": "UBSFY",
    "Name": "Ubisoft Entertainment S.A."
  },
  {
    "Symbol": "UCBJY",
    "Name": "UCB S.A."
  },
  {
    "Symbol": "UCL",
    "Name": "uCloudlink Group Inc."
  },
  {
    "Symbol": "UELKY",
    "Name": "Ulker Biskuvi Sanayi A.S."
  },
  {
    "Symbol": "UEHPY",
    "Name": "Ultra Electronics Holdings PLC"
  },
  {
    "Symbol": "UGP",
    "Name": "Ultrapar Participacoes S/A"
  },
  {
    "Symbol": "UMICY",
    "Name": "Umicore SA"
  },
  {
    "Symbol": "UNICY",
    "Name": "Unicharm Corp."
  },
  {
    "Symbol": "UNCRY",
    "Name": "UniCredit S.p.A."
  },
  {
    "Symbol": "UL",
    "Name": "Unilever PLC"
  },
  {
    "Symbol": "UPCHY",
    "Name": "Uni-President China Holdings Ltd."
  },
  {
    "Symbol": "UMC",
    "Name": "United Microelectronics Corp."
  },
  {
    "Symbol": "UOVEY",
    "Name": "United Overseas Bank Ltd."
  },
  {
    "Symbol": "PUTKY",
    "Name": "United Tractors"
  },
  {
    "Symbol": "UUGRY",
    "Name": "United Utilities Group PLC"
  },
  {
    "Symbol": "UNVGY",
    "Name": "Universal Music Group N.V."
  },
  {
    "Symbol": "UOLGY",
    "Name": "UOL Group Ltd."
  },
  {
    "Symbol": "TIGR",
    "Name": "Up Fintech Holding Ltd."
  },
  {
    "Symbol": "UPMMY",
    "Name": "UPM-Kymmene Oyj"
  },
  {
    "Symbol": "USNZY",
    "Name": "Usinas Siderurgicas de Minas Gerais S/A Pfd."
  },
  {
    "Symbol": "UXIN",
    "Name": "Uxin Ltd."
  },
  {
    "Symbol": "VACC",
    "Name": "Vaccitech PLC"
  },
  {
    "Symbol": "PTNDY",
    "Name": "Vale Indonesia"
  },
  {
    "Symbol": "VALE",
    "Name": "Vale S.A."
  },
  {
    "Symbol": "VLEEY",
    "Name": "Valeo SE"
  },
  {
    "Symbol": "VLOWY",
    "Name": "Vallourec S.A."
  },
  {
    "Symbol": "VLMTY",
    "Name": "Valmet Corp."
  },
  {
    "Symbol": "VALN",
    "Name": "Valneva SE"
  },
  {
    "Symbol": "VTAGY",
    "Name": "Vantage Towers AG"
  },
  {
    "Symbol": "VARTY",
    "Name": "Varta AG"
  },
  {
    "Symbol": "VACNY",
    "Name": "VAT Group AG"
  },
  {
    "Symbol": "VEMLY",
    "Name": "Venture Ltd."
  },
  {
    "Symbol": "VEOEY",
    "Name": "Veolia Environnement S.A."
  },
  {
    "Symbol": "VEON",
    "Name": "VEON Ltd."
  },
  {
    "Symbol": "OEZVY",
    "Name": "Verbund AG"
  },
  {
    "Symbol": "VRNA",
    "Name": "Verona Pharma PLC"
  },
  {
    "Symbol": "VWDRY",
    "Name": "Vestas Wind Systems A/S"
  },
  {
    "Symbol": "VIAO",
    "Name": "VIA optronics AG"
  },
  {
    "Symbol": "PETRY",
    "Name": "Vibra Energia S/A"
  },
  {
    "Symbol": "GNHAY",
    "Name": "Vifor Pharma AG"
  },
  {
    "Symbol": "VCISY",
    "Name": "Vinci S.A."
  },
  {
    "Symbol": "VIOT",
    "Name": "Viomi Technology Co. Ltd."
  },
  {
    "Symbol": "VIPS",
    "Name": "Vipshop Holdings Ltd."
  },
  {
    "Symbol": "VIST",
    "Name": "Vista Energy S.A.B. de C.V."
  },
  {
    "Symbol": "VTSCY",
    "Name": "Vitesco Technologies Group AG"
  },
  {
    "Symbol": "VIVHY",
    "Name": "Vivendi SE"
  },
  {
    "Symbol": "OASMY",
    "Name": "Vivesto AB"
  },
  {
    "Symbol": "VNET",
    "Name": "VNET Group Inc."
  },
  {
    "Symbol": "VDMCY",
    "Name": "Vodacom Group Ltd."
  },
  {
    "Symbol": "VOD",
    "Name": "Vodafone Group PLC"
  },
  {
    "Symbol": "VLPNY",
    "Name": "voestalpine AG"
  },
  {
    "Symbol": "VWAGY",
    "Name": "Volkswagen AG 1/10th"
  },
  {
    "Symbol": "VWAPY",
    "Name": "Volkswagen AG  Pfd."
  },
  {
    "Symbol": "VLVLY",
    "Name": "Volvo AB"
  },
  {
    "Symbol": "VONOY",
    "Name": "Vonovia SE"
  },
  {
    "Symbol": "VOSSY",
    "Name": "Vossloh AG"
  },
  {
    "Symbol": "VJET",
    "Name": "voxeljet AG"
  },
  {
    "Symbol": "VTKLY",
    "Name": "VTech Holdings Ltd."
  },
  {
    "Symbol": "WACLY",
    "Name": "Wacoal Holdings Corp."
  },
  {
    "Symbol": "WACMY",
    "Name": "WACOM Co. Ltd."
  },
  {
    "Symbol": "WMMVY",
    "Name": "Wal-Mart de Mexico S.A.B. de C.V."
  },
  {
    "Symbol": "WWNTY",
    "Name": "Want Want China Holdings Ltd."
  },
  {
    "Symbol": "WRTBY",
    "Name": "Wartsila Oyj"
  },
  {
    "Symbol": "WDH",
    "Name": "Waterdrop Inc."
  },
  {
    "Symbol": "IMPJY",
    "Name": "Webuild S.p.A."
  },
  {
    "Symbol": "WEGZY",
    "Name": "Weg S/A"
  },
  {
    "Symbol": "WB",
    "Name": "Weibo Corp."
  },
  {
    "Symbol": "WEICY",
    "Name": "Weichai Power Co. Ltd."
  },
  {
    "Symbol": "WEI",
    "Name": "Weidai Ltd."
  },
  {
    "Symbol": "WEGRY",
    "Name": "Weir Group PLC"
  },
  {
    "Symbol": "WFAFY",
    "Name": "Wesfarmers Ltd."
  },
  {
    "Symbol": "WJRYY",
    "Name": "West Japan Railway Co."
  },
  {
    "Symbol": "WHGLY",
    "Name": "WH Group Ltd."
  },
  {
    "Symbol": "WARFY",
    "Name": "Wharf Holdings Ltd."
  },
  {
    "Symbol": "WTBDY",
    "Name": "Whitbread PLC"
  },
  {
    "Symbol": "WHITY",
    "Name": "Whitehaven Coal Ltd."
  },
  {
    "Symbol": "WBRBY",
    "Name": "Wienerberger AG"
  },
  {
    "Symbol": "WIHLY",
    "Name": "Wihlborgs Fastigheter AB"
  },
  {
    "Symbol": "WLMIY",
    "Name": "Wilmar International Ltd."
  },
  {
    "Symbol": "WIMI",
    "Name": "WiMi Hologram Cloud Inc."
  },
  {
    "Symbol": "WIT",
    "Name": "Wipro Ltd."
  },
  {
    "Symbol": "WIZEY",
    "Name": "Wise PLC"
  },
  {
    "Symbol": "WKEY",
    "Name": "WISeKey International Holding Ltd."
  },
  {
    "Symbol": "WIGBY",
    "Name": "WiseTech Global Ltd."
  },
  {
    "Symbol": "WZZZY",
    "Name": "Wizz Air Holdings PLC"
  },
  {
    "Symbol": "WNS",
    "Name": "WNS Holdings Ltd."
  },
  {
    "Symbol": "WLFDY",
    "Name": "Wolford AG"
  },
  {
    "Symbol": "WTKWY",
    "Name": "Wolters Kluwer N.V."
  },
  {
    "Symbol": "WOPEY",
    "Name": "Woodside Petroleum Ltd."
  },
  {
    "Symbol": "WLWHY",
    "Name": "Woolworths Holdings Ltd."
  },
  {
    "Symbol": "WF",
    "Name": "Woori Financial Group Inc."
  },
  {
    "Symbol": "WRDLY",
    "Name": "Worldline"
  },
  {
    "Symbol": "WYGPY",
    "Name": "Worley Ltd."
  },
  {
    "Symbol": "WPP",
    "Name": "WPP PLC"
  },
  {
    "Symbol": "WUXAY",
    "Name": "WuXi AppTec Co. Ltd."
  },
  {
    "Symbol": "WYNMY",
    "Name": "Wynn Macau Ltd."
  },
  {
    "Symbol": "XYF",
    "Name": "X Financial"
  },
  {
    "Symbol": "XYIGY",
    "Name": "Xinyi Glass Holdings Ltd."
  },
  {
    "Symbol": "XISHY",
    "Name": "Xinyi Solar Holdings Ltd."
  },
  {
    "Symbol": "XIN",
    "Name": "Xinyuan Real Estate Co. Ltd."
  },
  {
    "Symbol": "PTXKY",
    "Name": "XL Axiata"
  },
  {
    "Symbol": "XPEV",
    "Name": "XPeng Inc."
  },
  {
    "Symbol": "XTLB",
    "Name": "XTL Biopharmaceuticals Ltd."
  },
  {
    "Symbol": "XNET",
    "Name": "Xunlei Ltd."
  },
  {
    "Symbol": "YAGOY",
    "Name": "Yageo GDR Reg S"
  },
  {
    "Symbol": "YKLTY",
    "Name": "Yakult Honsha Co. Ltd."
  },
  {
    "Symbol": "YALA",
    "Name": "Yalla Group Ltd."
  },
  {
    "Symbol": "YAMCY",
    "Name": "Yamaha Corp."
  },
  {
    "Symbol": "YAMHY",
    "Name": "Yamaha Motor Co. Ltd."
  },
  {
    "Symbol": "YATRY",
    "Name": "Yamato Holdings Co. Ltd."
  },
  {
    "Symbol": "YZCAY",
    "Name": "Yankuang Energy Group Co. Ltd."
  },
  {
    "Symbol": "YARIY",
    "Name": "Yara International ASA"
  },
  {
    "Symbol": "YASKY",
    "Name": "Yaskawa Electric Corp."
  },
  {
    "Symbol": "YSG",
    "Name": "Yatsen Holding Ltd."
  },
  {
    "Symbol": "YDUQY",
    "Name": "YDUQS Participacoes S.A."
  },
  {
    "Symbol": "YRD",
    "Name": "Yiren Digital Ltd."
  },
  {
    "Symbol": "YOKEY",
    "Name": "Yokogawa Electric Corp."
  },
  {
    "Symbol": "TKLF",
    "Name": "Yoshitsu Co. Ltd."
  },
  {
    "Symbol": "DAO",
    "Name": "Youdao Inc."
  },
  {
    "Symbol": "YPF",
    "Name": "YPF S.A."
  },
  {
    "Symbol": "YUEIY",
    "Name": "Yue Yuen Industrial Holdings Ltd."
  },
  {
    "Symbol": "YJ",
    "Name": "Yunji Inc."
  },
  {
    "Symbol": "YAHOY",
    "Name": "Z Holdings Corp."
  },
  {
    "Symbol": "ZLAB",
    "Name": "Zai Lab Ltd."
  },
  {
    "Symbol": "ZLNDY",
    "Name": "Zalando SE"
  },
  {
    "Symbol": "ZEAL",
    "Name": "Zealand Pharma A/S"
  },
  {
    "Symbol": "ZNKKY",
    "Name": "Zenkoku Hosho Co. Ltd."
  },
  {
    "Symbol": "ZEOOY",
    "Name": "Zeon Corp."
  },
  {
    "Symbol": "ZEPP",
    "Name": "Zepp Health Corp."
  },
  {
    "Symbol": "ZME",
    "Name": "Zhangmen Education Inc."
  },
  {
    "Symbol": "ZH",
    "Name": "Zhihu Inc."
  },
  {
    "Symbol": "ZSHGY",
    "Name": "Zhongsheng Group Holdings Ltd."
  },
  {
    "Symbol": "ZIJMY",
    "Name": "Zijin Mining Group Co. Ltd. Cl H"
  },
  {
    "Symbol": "ZLIOY",
    "Name": "Zoomlion Heavy Industry Science & Technology Co. Ltd."
  },
  {
    "Symbol": "ZOPLY",
    "Name": "zooplus AG"
  },
  {
    "Symbol": "SRTTY",
    "Name": "ZOZO Inc."
  },
  {
    "Symbol": "ZTCOY",
    "Name": "ZTE Corp."
  },
  {
    "Symbol": "ZTO",
    "Name": "ZTO Express Cayman Inc."
  },
  {
    "Symbol": "ZURVY",
    "Name": "Zurich Insurance Group AG"
  }
];

function search(stockSymbol){
    let searchResult=[];
    const regex=new RegExp('^'+stockSymbol);
    for (var key of Object.keys(stockSymbolByName)) {
        if(stockSymbolByName[key].Symbol.includes(stockSymbol) && regex.test(stockSymbolByName[key].Symbol)){
            // if(regex.test(stockSymbolByName[key].Symbol)){}
            let searchSymbolName=stockSymbolByName[key].Name;
            let searchSymbolSymbol=stockSymbolByName[key].Symbol;
            // document.getElementById('demo').innerHTML+=', '+searchSymbolName+searchSymbolSymbol;
            if(searchResult.length<=10){
              searchResult.push({
                symbol:searchSymbolSymbol,
                name:searchSymbolName
              });  
            }          
        }
    }
    for (var key1 of Object.keys(stockSymbolByName)) {
      if(stockSymbolByName[key1].Name.toLowerCase().includes(stockSymbol.toLowerCase())){
        let searchSymbolName=stockSymbolByName[key1].Name;
        let searchSymbolSymbol=stockSymbolByName[key1].Symbol;

        if(searchResult.length<=10){
          searchResult.push({
            symbol:searchSymbolSymbol,
            name:searchSymbolName
          });  
        } 
      }
    }
    return searchResult;
}
//search('AA');
function searchSymbol(stockSymbol){
    let searchSymbolName=null;
    for (var key of Object.keys(stockSymbolByName)) {
        if(stockSymbol==stockSymbolByName[key].Symbol){
        searchSymbolName=stockSymbolByName[key].Name;
        }
    }
    return searchSymbolName;
}

module.exports = {searchSymbol, search};
