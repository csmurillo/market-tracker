const stockSymbolByName = [
    {
    "Symbol":"A",
    "Name":"Agilent Technologies Inc."
    },
    {
    "Symbol":"AA",
    "Name":"Alcoa Corporation"
    },
    {
    "Symbol":"AAC",
    "Name":"Ares Acquisition Corporation"
    },
    {
    "Symbol":"AACG",
    "Name":"ATA Creativity Global American Depositary Shares"
    },
    {
    "Symbol":"AACI",
    "Name":"Armada Acquisition Corp. I"
    },
    {
    "Symbol":"AACIU",
    "Name":"Armada Acquisition Corp. I Unit"
    },
    {
    "Symbol":"AACIW",
    "Name":"Armada Acquisition Corp. I Warrant"
    },
    {
    "Symbol":"AADI",
    "Name":"Aadi Bioscience Inc."
    },
    {
    "Symbol":"AAIC",
    "Name":"Arlington Asset Investment Corp Class A (new)"
    },
    {
    "Symbol":"AAIC^B",
    "Name":"Arlington Asset Investment Corp 7.00%"
    },
    {
    "Symbol":"AAIC^C",
    "Name":"Arlington Asset Investment Corp 8.250% Seies C Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"AAIN",
    "Name":"Arlington Asset Investment Corp 6.000% Senior Notes Due 2026"
    },
    {
    "Symbol":"AAL",
    "Name":"American Airlines Group Inc."
    },
    {
    "Symbol":"AAM^A",
    "Name":"Apollo Asset Management Inc. 6.375% Series A Preferred Stock"
    },
    {
    "Symbol":"AAM^B",
    "Name":"Apollo Asset Management Inc. 6.375% Series B Preferred Stock"
    },
    {
    "Symbol":"AAME",
    "Name":"Atlantic American Corporation"
    },
    {
    "Symbol":"AAN",
    "Name":"Aarons Holdings Company Inc."
    },
    {
    "Symbol":"AAOI",
    "Name":"Applied Optoelectronics Inc."
    },
    {
    "Symbol":"AAON",
    "Name":"AAON Inc."
    },
    {
    "Symbol":"AAP",
    "Name":"Advance Auto Parts Inc."
    },
    {
    "Symbol":"AAPL",
    "Name":"Apple Inc."
    },
    {
    "Symbol":"AAQC",
    "Name":"Accelerate Acquisition Corp. Class A"
    },
    {
    "Symbol":"AAT",
    "Name":"American Assets Trust Inc."
    },
    {
    "Symbol":"AATC",
    "Name":"Autoscope Technologies Corporation"
    },
    {
    "Symbol":"AAU",
    "Name":"Almaden Minerals Ltd. Common Shares"
    },
    {
    "Symbol":"AAWW",
    "Name":"Atlas Air Worldwide Holdings NEW"
    },
    {
    "Symbol":"AB",
    "Name":"AllianceBernstein Holding L.P.  Units"
    },
    {
    "Symbol":"ABB",
    "Name":"ABB Ltd"
    },
    {
    "Symbol":"ABBV",
    "Name":"AbbVie Inc."
    },
    {
    "Symbol":"ABC",
    "Name":"AmerisourceBergen Corporation"
    },
    {
    "Symbol":"ABCB",
    "Name":"Ameris Bancorp"
    },
    {
    "Symbol":"ABCL",
    "Name":"AbCellera Biologics Inc. Common Shares"
    },
    {
    "Symbol":"ABCM",
    "Name":"Abcam plc American Depositary Shares"
    },
    {
    "Symbol":"ABEO",
    "Name":"Abeona Therapeutics Inc."
    },
    {
    "Symbol":"ABEV",
    "Name":"Ambev S.A. American Depositary Shares (Each representing 1 Common Share)"
    },
    {
    "Symbol":"ABG",
    "Name":"Asbury Automotive Group Inc"
    },
    {
    "Symbol":"ABGI",
    "Name":"ABG Acquisition Corp. I Class A Ordinary Shares"
    },
    {
    "Symbol":"ABIO",
    "Name":"ARCA biopharma Inc."
    },
    {
    "Symbol":"ABM",
    "Name":"ABM Industries Incorporated"
    },
    {
    "Symbol":"ABMD",
    "Name":"ABIOMED Inc."
    },
    {
    "Symbol":"ABNB",
    "Name":"Airbnb Inc. Class A"
    },
    {
    "Symbol":"ABOS",
    "Name":"Acumen Pharmaceuticals Inc."
    },
    {
    "Symbol":"ABR",
    "Name":"Arbor Realty Trust"
    },
    {
    "Symbol":"ABR^D",
    "Name":"Arbor Realty Trust 6.375% Series D Cumulative Redeemable Preferred Stock Liquidation Preference $25.00 per Share"
    },
    {
    "Symbol":"ABR^E",
    "Name":"Arbor Realty Trust 6.25% Series E Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"ABR^F",
    "Name":"Arbor Realty Trust 6.25% Series F Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock Liquidation Preference $25.00 per share"
    },
    {
    "Symbol":"ABSI",
    "Name":"Absci Corporation"
    },
    {
    "Symbol":"ABST",
    "Name":"Absolute Software Corporation"
    },
    {
    "Symbol":"ABT",
    "Name":"Abbott Laboratories"
    },
    {
    "Symbol":"ABTX",
    "Name":"Allegiance Bancshares Inc."
    },
    {
    "Symbol":"ABUS",
    "Name":"Arbutus Biopharma Corporation"
    },
    {
    "Symbol":"ABVC",
    "Name":"ABVC BioPharma Inc."
    },
    {
    "Symbol":"AC",
    "Name":"Associated Capital Group Inc."
    },
    {
    "Symbol":"ACA",
    "Name":"Arcosa Inc."
    },
    {
    "Symbol":"ACABU",
    "Name":"Atlantic Coastal Acquisition Corp. II Unit"
    },
    {
    "Symbol":"ACAD",
    "Name":"ACADIA Pharmaceuticals Inc."
    },
    {
    "Symbol":"ACAH",
    "Name":"Atlantic Coastal Acquisition Corp. Class A"
    },
    {
    "Symbol":"ACAHU",
    "Name":"Atlantic Coastal Acquisition Corp. Unit"
    },
    {
    "Symbol":"ACAHW",
    "Name":"Atlantic Coastal Acquisition Corp. Warrant"
    },
    {
    "Symbol":"ACAQ",
    "Name":"Athena Consumer Acquisition Corp. Class A"
    },
    {
    "Symbol":"ACB",
    "Name":"Aurora Cannabis Inc. Common Shares"
    },
    {
    "Symbol":"ACBA",
    "Name":"Ace Global Business Acquisition Limited Ordinary Shares"
    },
    {
    "Symbol":"ACBAW",
    "Name":"Ace Global Business Acquisition Limited Warrant"
    },
    {
    "Symbol":"ACBI",
    "Name":"Atlantic Capital Bancshares Inc."
    },
    {
    "Symbol":"ACC",
    "Name":"American Campus Communities Inc"
    },
    {
    "Symbol":"ACCD",
    "Name":"Accolade Inc."
    },
    {
    "Symbol":"ACCO",
    "Name":"Acco Brands Corporation"
    },
    {
    "Symbol":"ACDI",
    "Name":"Ascendant Digital Acquisition Corp. III Class A Ordinary Shares"
    },
    {
    "Symbol":"ACEL",
    "Name":"Accel Entertainment Inc."
    },
    {
    "Symbol":"ACER",
    "Name":"Acer Therapeutics Inc.   (DE)"
    },
    {
    "Symbol":"ACET",
    "Name":"Adicet Bio Inc."
    },
    {
    "Symbol":"ACEV",
    "Name":"ACE Convergence Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"ACEVU",
    "Name":"ACE Convergence Acquisition Corp. Unit"
    },
    {
    "Symbol":"ACEVW",
    "Name":"ACE Convergence Acquisition Corp. Warrant"
    },
    {
    "Symbol":"ACGL",
    "Name":"Arch Capital Group Ltd."
    },
    {
    "Symbol":"ACGLN",
    "Name":"Arch Capital Group Ltd. Depositary Shares each Representing a 1/1000th Interest in a 4.550% Non-Cumulative Preferred Share Series G"
    },
    {
    "Symbol":"ACGLO",
    "Name":"Arch Capital Group Ltd. Depositary Shares Each Representing 1/1000th Interest in a Share of 5.45% Non-Cumulative Preferred Shares Series F"
    },
    {
    "Symbol":"ACH",
    "Name":"Aluminum Corporation of China Limited American Depositary Shares"
    },
    {
    "Symbol":"ACHC",
    "Name":"Acadia Healthcare Company Inc."
    },
    {
    "Symbol":"ACHL",
    "Name":"Achilles Therapeutics plc American Depositary Shares"
    },
    {
    "Symbol":"ACHR",
    "Name":"Archer Aviation Inc. Class A"
    },
    {
    "Symbol":"ACHV",
    "Name":"Achieve Life Sciences Inc. Common Shares"
    },
    {
    "Symbol":"ACI",
    "Name":"Albertsons Companies Inc. Class A"
    },
    {
    "Symbol":"ACII",
    "Name":"Atlas Crest Investment Corp. II Class A"
    },
    {
    "Symbol":"ACIU",
    "Name":"AC Immune SA"
    },
    {
    "Symbol":"ACIW",
    "Name":"ACI Worldwide Inc."
    },
    {
    "Symbol":"ACKIT",
    "Name":"Ackrell SPAC Partners I Co. Subunits"
    },
    {
    "Symbol":"ACKIU",
    "Name":"Ackrell SPAC Partners I Co. Units"
    },
    {
    "Symbol":"ACKIW",
    "Name":"Ackrell SPAC Partners I Co. Warrants"
    },
    {
    "Symbol":"ACLS",
    "Name":"Axcelis Technologies Inc."
    },
    {
    "Symbol":"ACM",
    "Name":"AECOM"
    },
    {
    "Symbol":"ACMR",
    "Name":"ACM Research Inc. Class A"
    },
    {
    "Symbol":"ACN",
    "Name":"Accenture plc Class A Ordinary Shares (Ireland)"
    },
    {
    "Symbol":"ACNB",
    "Name":"ACNB Corporation"
    },
    {
    "Symbol":"ACOR",
    "Name":"Acorda Therapeutics Inc."
    },
    {
    "Symbol":"ACP",
    "Name":"Aberdeen Income Credit Strategies Fund Common Shares"
    },
    {
    "Symbol":"ACP^A",
    "Name":"Aberdeen Income Credit Strategies Fund 5.250% Series A Perpetual Preferred Stock"
    },
    {
    "Symbol":"ACQR",
    "Name":"Independence Holdings Corp. Class A Ordinary Share"
    },
    {
    "Symbol":"ACQRU",
    "Name":"Independence Holdings Corp. Units"
    },
    {
    "Symbol":"ACQRW",
    "Name":"Independence Holdings Corp. Warrant"
    },
    {
    "Symbol":"ACR",
    "Name":"ACRES Commercial Realty Corp."
    },
    {
    "Symbol":"ACR^C",
    "Name":"ACRES Commercial Realty Corp. 8.625% Fixed-to-Floating Series C Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"ACR^D",
    "Name":"ACRES Commercial Realty Corp. 7.875% Series D Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"ACRE",
    "Name":"Ares Commercial Real Estate Corporation"
    },
    {
    "Symbol":"ACRO",
    "Name":"Acropolis Infrastructure Acquisition Corp. Class A"
    },
    {
    "Symbol":"ACRS",
    "Name":"Aclaris Therapeutics Inc."
    },
    {
    "Symbol":"ACRX",
    "Name":"AcelRx Pharmaceuticals Inc."
    },
    {
    "Symbol":"ACST",
    "Name":"Acasti Pharma Inc. Class A"
    },
    {
    "Symbol":"ACT",
    "Name":"Enact Holdings Inc."
    },
    {
    "Symbol":"ACTD",
    "Name":"ArcLight Clean Transition Corp. II Class A Ordinary Share"
    },
    {
    "Symbol":"ACTDW",
    "Name":"ArcLight Clean Transition Corp. II Warrant"
    },
    {
    "Symbol":"ACTG",
    "Name":"Acacia Research Corporation (Acacia Tech)"
    },
    {
    "Symbol":"ACU",
    "Name":"Acme United Corporation."
    },
    {
    "Symbol":"ACV",
    "Name":"Virtus AllianzGI Diversified Income & Convertible Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"ACVA",
    "Name":"ACV Auctions Inc. Class A"
    },
    {
    "Symbol":"ACXP",
    "Name":"Acurx Pharmaceuticals Inc."
    },
    {
    "Symbol":"ACY",
    "Name":"AeroCentury Corp."
    },
    {
    "Symbol":"ADAG",
    "Name":"Adagene Inc. American Depositary Shares"
    },
    {
    "Symbol":"ADAL",
    "Name":"Anthemis Digital Acquisitions I Corp Class A Ordinary Shares"
    },
    {
    "Symbol":"ADALU",
    "Name":"Anthemis Digital Acquisitions I Corp Unit"
    },
    {
    "Symbol":"ADALW",
    "Name":"Anthemis Digital Acquisitions I Corp Warrant"
    },
    {
    "Symbol":"ADAP",
    "Name":"Adaptimmune Therapeutics plc American Depositary Shares"
    },
    {
    "Symbol":"ADBE",
    "Name":"Adobe Inc."
    },
    {
    "Symbol":"ADC",
    "Name":"Agree Realty Corporation"
    },
    {
    "Symbol":"ADC^A",
    "Name":"Agree Realty Corporation Depositary Shares each representing 1/1000th of a 4.250% Series A Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"ADCT",
    "Name":"ADC Therapeutics SA Common Shares"
    },
    {
    "Symbol":"ADER",
    "Name":"26 Capital Acquisition Corp. Class A"
    },
    {
    "Symbol":"ADERU",
    "Name":"26 Capital Acquisition Corp. Unit"
    },
    {
    "Symbol":"ADERW",
    "Name":"26 Capital Acquisition Corp. Warrant"
    },
    {
    "Symbol":"ADES",
    "Name":"Advanced Emissions Solutions Inc."
    },
    {
    "Symbol":"ADEX",
    "Name":"Adit EdTech Acquisition Corp."
    },
    {
    "Symbol":"ADGI",
    "Name":"Adagio Therapeutics Inc."
    },
    {
    "Symbol":"ADI",
    "Name":"Analog Devices Inc."
    },
    {
    "Symbol":"ADIL",
    "Name":"Adial Pharmaceuticals Inc"
    },
    {
    "Symbol":"ADILW",
    "Name":"Adial Pharmaceuticals Inc Warrant"
    },
    {
    "Symbol":"ADM",
    "Name":"Archer-Daniels-Midland Company"
    },
    {
    "Symbol":"ADMA",
    "Name":"ADMA Biologics Inc"
    },
    {
    "Symbol":"ADMP",
    "Name":"Adamis Pharmaceuticals Corporation"
    },
    {
    "Symbol":"ADN",
    "Name":"Advent Technologies Holdings Inc. Class A"
    },
    {
    "Symbol":"ADNT",
    "Name":"Adient plc Ordinary Shares"
    },
    {
    "Symbol":"ADNWW",
    "Name":"Advent Technologies Holdings Inc. Warrant"
    },
    {
    "Symbol":"ADOC",
    "Name":"Edoc Acquisition Corp. Class A Ordinary Share"
    },
    {
    "Symbol":"ADOCR",
    "Name":"Edoc Acquisition Corp. Right"
    },
    {
    "Symbol":"ADOCW",
    "Name":"Edoc Acquisition Corp. Warrant"
    },
    {
    "Symbol":"ADP",
    "Name":"Automatic Data Processing Inc."
    },
    {
    "Symbol":"ADPT",
    "Name":"Adaptive Biotechnologies Corporation"
    },
    {
    "Symbol":"ADRA",
    "Name":"Adara Acquisition Corp. Class A"
    },
    {
    "Symbol":"ADS",
    "Name":"Alliance Data Systems Corporation"
    },
    {
    "Symbol":"ADSE",
    "Name":"ADS-TEC ENERGY PLC Ordinary Shares"
    },
    {
    "Symbol":"ADSEW",
    "Name":"ADS-TEC ENERGY PLC Warrant"
    },
    {
    "Symbol":"ADSK",
    "Name":"Autodesk Inc."
    },
    {
    "Symbol":"ADT",
    "Name":"ADT Inc."
    },
    {
    "Symbol":"ADTH",
    "Name":"AdTheorent Holding Company Inc."
    },
    {
    "Symbol":"ADTHW",
    "Name":"AdTheorent Holding Company Inc. Warrants"
    },
    {
    "Symbol":"ADTN",
    "Name":"ADTRAN Inc."
    },
    {
    "Symbol":"ADTX",
    "Name":"Aditxt Inc."
    },
    {
    "Symbol":"ADUS",
    "Name":"Addus HomeCare Corporation"
    },
    {
    "Symbol":"ADV",
    "Name":"Advantage Solutions Inc. Class A"
    },
    {
    "Symbol":"ADVM",
    "Name":"Adverum Biotechnologies Inc."
    },
    {
    "Symbol":"ADX",
    "Name":"Adams Diversified Equity Fund Inc."
    },
    {
    "Symbol":"ADXN",
    "Name":"Addex Therapeutics Ltd American Depositary Shares"
    },
    {
    "Symbol":"AE",
    "Name":"Adams Resources & Energy Inc."
    },
    {
    "Symbol":"AEAC",
    "Name":"Authentic Equity Acquisition Corp. Class A ordinary share"
    },
    {
    "Symbol":"AEACU",
    "Name":"Authentic Equity Acquisition Corp. Unit"
    },
    {
    "Symbol":"AEACW",
    "Name":"Authentic Equity Acquisition Corp. Warrant"
    },
    {
    "Symbol":"AEAE",
    "Name":"AltEnergy Acquisition Corp. Class A"
    },
    {
    "Symbol":"AEAEU",
    "Name":"AltEnergy Acquisition Corp. Unit"
    },
    {
    "Symbol":"AEAEW",
    "Name":"AltEnergy Acquisition Corp. Warrant"
    },
    {
    "Symbol":"AEE",
    "Name":"Ameren Corporation"
    },
    {
    "Symbol":"AEF",
    "Name":"Aberdeen Emerging Markets Equity Income Fund Inc."
    },
    {
    "Symbol":"AEFC",
    "Name":"Aegon Funding Company LLC 5.10% Subordinated Notes due 2049"
    },
    {
    "Symbol":"AEG",
    "Name":"AEGON N.V."
    },
    {
    "Symbol":"AEHA",
    "Name":"Aesther Healthcare Acquisition Corp Class A"
    },
    {
    "Symbol":"AEHAU",
    "Name":"Aesther Healthcare Acquisition Corp Units"
    },
    {
    "Symbol":"AEHAW",
    "Name":"Aesther Healthcare Acquisition Corp Warrants"
    },
    {
    "Symbol":"AEHL",
    "Name":"Antelope Enterprise Holdings Limited   (0.024 par)"
    },
    {
    "Symbol":"AEHR",
    "Name":"Aehr Test Systems"
    },
    {
    "Symbol":"AEI",
    "Name":"Alset EHome International Inc."
    },
    {
    "Symbol":"AEIS",
    "Name":"Advanced Energy Industries Inc."
    },
    {
    "Symbol":"AEL",
    "Name":"American Equity Investment Life Holding Company"
    },
    {
    "Symbol":"AEL^A",
    "Name":"American Equity Investment Life Holding Company Depositary Shares each representing a 1/1000th interest in a share of 5.95% Fixed-Rate Reset Non-Cumulative Preferred Stock Series A"
    },
    {
    "Symbol":"AEL^B",
    "Name":"American Equity Investment Life Holding Company Depositary Shares each representing a 1/1000th interest in a share of 6.625% Fixed-Rate Reset Non-Cumulative Preferred Stock Series B"
    },
    {
    "Symbol":"AEM",
    "Name":"Agnico Eagle Mines Limited"
    },
    {
    "Symbol":"AEMD",
    "Name":"Aethlon Medical Inc."
    },
    {
    "Symbol":"AENZ",
    "Name":"Aenza S.A.A. American Depositary Shares"
    },
    {
    "Symbol":"AEO",
    "Name":"American Eagle Outfitters Inc."
    },
    {
    "Symbol":"AEP",
    "Name":"American Electric Power Company Inc."
    },
    {
    "Symbol":"AEPPL",
    "Name":"American Electric Power Company Inc. Corporate Unit"
    },
    {
    "Symbol":"AEPPZ",
    "Name":"American Electric Power Company Inc. Corporate Units"
    },
    {
    "Symbol":"AER",
    "Name":"AerCap Holdings N.V. Ordinary Shares"
    },
    {
    "Symbol":"AERC",
    "Name":"AeroClean Technologies Inc."
    },
    {
    "Symbol":"AERI",
    "Name":"Aerie Pharmaceuticals Inc."
    },
    {
    "Symbol":"AES",
    "Name":"The AES Corporation"
    },
    {
    "Symbol":"AESC",
    "Name":"The AES Corporation Corporate Units"
    },
    {
    "Symbol":"AESE",
    "Name":"Allied Esports Entertainment Inc."
    },
    {
    "Symbol":"AEVA",
    "Name":"Aeva Technologies Inc."
    },
    {
    "Symbol":"AEY",
    "Name":"ADDvantage Technologies Group Inc."
    },
    {
    "Symbol":"AEYE",
    "Name":"AudioEye Inc."
    },
    {
    "Symbol":"AEZS",
    "Name":"Aeterna Zentaris Inc."
    },
    {
    "Symbol":"AFAC",
    "Name":"Arena Fortify Acquisition Corp. Class A"
    },
    {
    "Symbol":"AFACU",
    "Name":"Arena Fortify Acquisition Corp. Unit"
    },
    {
    "Symbol":"AFACW",
    "Name":"Arena Fortify Acquisition Corp. Warrant"
    },
    {
    "Symbol":"AFAQ",
    "Name":"AF Acquisition Corp. Class A"
    },
    {
    "Symbol":"AFAQU",
    "Name":"AF Acquisition Corp. Units"
    },
    {
    "Symbol":"AFAQW",
    "Name":"AF Acquisition Corp. Warrants"
    },
    {
    "Symbol":"AFB",
    "Name":"AllianceBernstein National Municipal Income Fund Inc"
    },
    {
    "Symbol":"AFBI",
    "Name":"Affinity Bancshares Inc.   (MD)"
    },
    {
    "Symbol":"AFCG",
    "Name":"AFC Gamma Inc."
    },
    {
    "Symbol":"AFG",
    "Name":"American Financial Group Inc."
    },
    {
    "Symbol":"AFGB",
    "Name":"American Financial Group Inc. 5.875% Subordinated Debentures due 2059"
    },
    {
    "Symbol":"AFGC",
    "Name":"American Financial Group Inc. 5.125% Subordinated Debentures due 2059"
    },
    {
    "Symbol":"AFGD",
    "Name":"American Financial Group Inc. 5.625% Subordinated Debentures due 2060"
    },
    {
    "Symbol":"AFGE",
    "Name":"American Financial Group Inc. 4.500% Subordinated Debentures due 2060"
    },
    {
    "Symbol":"AFI",
    "Name":"Armstrong Flooring Inc."
    },
    {
    "Symbol":"AFIB",
    "Name":"Acutus Medical Inc."
    },
    {
    "Symbol":"AFIN",
    "Name":"American Finance Trust Inc. Class A"
    },
    {
    "Symbol":"AFINO",
    "Name":"American Finance Trust Inc. 7.375% Series C Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"AFINP",
    "Name":"American Finance Trust Inc. 7.50% Series A Cumulative Redeemable Perpetual Preferred Stock"
    },
    {
    "Symbol":"AFL",
    "Name":"AFLAC Incorporated"
    },
    {
    "Symbol":"AFMD",
    "Name":"Affimed N.V."
    },
    {
    "Symbol":"AFRM",
    "Name":"Affirm Holdings Inc. Class A"
    },
    {
    "Symbol":"AFT",
    "Name":"Apollo Senior Floating Rate Fund Inc."
    },
    {
    "Symbol":"AFTR",
    "Name":"AfterNext HealthTech Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"AFYA",
    "Name":"Afya Limited Class A Common Shares"
    },
    {
    "Symbol":"AG",
    "Name":"First Majestic Silver Corp. Ordinary Shares (Canada)"
    },
    {
    "Symbol":"AGAC",
    "Name":"African Gold Acquisition Corporation Class A Ordinary Shares"
    },
    {
    "Symbol":"AGBA",
    "Name":"AGBA Acquisition Limited Ordinary Share"
    },
    {
    "Symbol":"AGBAR",
    "Name":"AGBA Acquisition Limited Right"
    },
    {
    "Symbol":"AGBAW",
    "Name":"AGBA Acquisition Limited Warrant"
    },
    {
    "Symbol":"AGCB",
    "Name":"Altimeter Growth Corp. 2 Class A Ordinary Shares"
    },
    {
    "Symbol":"AGCO",
    "Name":"AGCO Corporation"
    },
    {
    "Symbol":"AGD",
    "Name":"Aberdeen Global Dynamic Dividend Fund"
    },
    {
    "Symbol":"AGE",
    "Name":"AgeX Therapeutics Inc."
    },
    {
    "Symbol":"AGEN",
    "Name":"Agenus Inc."
    },
    {
    "Symbol":"AGFS",
    "Name":"AgroFresh Solutions Inc."
    },
    {
    "Symbol":"AGFY",
    "Name":"Agrify Corporation"
    },
    {
    "Symbol":"AGGR",
    "Name":"Agile Growth Corp. Class A Ordinary Share"
    },
    {
    "Symbol":"AGGRU",
    "Name":"Agile Growth Corp. Units"
    },
    {
    "Symbol":"AGGRW",
    "Name":"Agile Growth Corp. Warrant."
    },
    {
    "Symbol":"AGI",
    "Name":"Alamos Gold Inc. Class A Common Shares"
    },
    {
    "Symbol":"AGIL",
    "Name":"AgileThought Inc. Class A"
    },
    {
    "Symbol":"AGILW",
    "Name":"AgileThought Inc. Warrant"
    },
    {
    "Symbol":"AGIO",
    "Name":"Agios Pharmaceuticals Inc."
    },
    {
    "Symbol":"AGL",
    "Name":"agilon health inc."
    },
    {
    "Symbol":"AGLE",
    "Name":"Aeglea BioTherapeutics Inc."
    },
    {
    "Symbol":"AGM",
    "Name":"Federal Agricultural Mortgage Corporation"
    },
    {
    "Symbol":"AGM^C",
    "Name":"Federal Agricultural Mortgage Corporation Preferred Series C Fixed to Fltg"
    },
    {
    "Symbol":"AGM^D",
    "Name":"Federal Agricultural Mortgage Corporation 5.700% Non-Cumulative Preferred Stock Series D"
    },
    {
    "Symbol":"AGM^E",
    "Name":"Federal Agricultural Mortgage Corporation 5.750% Non-Cumulative Preferred Stock Series E"
    },
    {
    "Symbol":"AGM^F",
    "Name":"Federal Agricultural Mortgage Corporation 5.250% Non-Cumulative Preferred Stock Series F"
    },
    {
    "Symbol":"AGM^G",
    "Name":"Federal Agricultural Mortgage Corporation 4.875% Non-Cumulative Preferred Stock Series G"
    },
    {
    "Symbol":"AGMH",
    "Name":"AGM Group Holdings Inc. Class A Ordinary Shares"
    },
    {
    "Symbol":"AGNC",
    "Name":"AGNC Investment Corp."
    },
    {
    "Symbol":"AGNCM",
    "Name":"AGNC Investment Corp. Depositary Shares rep 6.875% Series D Fixed-to-Floating Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"AGNCN",
    "Name":"AGNC Investment Corp. Depositary Shares Each Representing a 1/1000th Interest in a Share of 7.00% Series C Fixed-To-Floating Rate Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"AGNCO",
    "Name":"AGNC Investment Corp. Depositary Shares each representing a 1/1000th interest in a share of 6.50% Series E Fixed-to-Floating Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"AGNCP",
    "Name":"AGNC Investment Corp. Depositary Shares Each Representing a 1/1000th Interest in a Share of 6.125% Series F Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"AGO",
    "Name":"Assured Guaranty Ltd."
    },
    {
    "Symbol":"AGR",
    "Name":"Avangrid Inc."
    },
    {
    "Symbol":"AGRI",
    "Name":"AgriFORCE  Growing Systems Ltd. Common Shares"
    },
    {
    "Symbol":"AGRIW",
    "Name":"AgriFORCE  Growing Systems Ltd. Warrant"
    },
    {
    "Symbol":"AGRO",
    "Name":"Adecoagro S.A. Common Shares"
    },
    {
    "Symbol":"AGRX",
    "Name":"Agile Therapeutics Inc."
    },
    {
    "Symbol":"AGS",
    "Name":"PlayAGS Inc."
    },
    {
    "Symbol":"AGTC",
    "Name":"Applied Genetic Technologies Corporation"
    },
    {
    "Symbol":"AGTI",
    "Name":"Agiliti Inc."
    },
    {
    "Symbol":"AGX",
    "Name":"Argan Inc."
    },
    {
    "Symbol":"AGYS",
    "Name":"Agilysys Inc."
    },
    {
    "Symbol":"AHCO",
    "Name":"AdaptHealth Corp."
    },
    {
    "Symbol":"AHG",
    "Name":"Akso Health Group ADS"
    },
    {
    "Symbol":"AHH",
    "Name":"Armada Hoffler Properties Inc."
    },
    {
    "Symbol":"AHH^A",
    "Name":"Armada Hoffler Properties Inc. 6.75% Series A Cumulative Redeemable Perpetual Preferred Stock"
    },
    {
    "Symbol":"AHI",
    "Name":"Advanced Human Imaging Limited. American Depositary Shares"
    },
    {
    "Symbol":"AHL^C",
    "Name":"Aspen Insurance Holdings Limited 5.95% Fixed-to-Floating Rate Perpetual Non-Cumulative Preference Shares"
    },
    {
    "Symbol":"AHL^D",
    "Name":"Aspen Insurance Holdings Limited 5.625% Perpetual Non-Cumulative Preference Shares"
    },
    {
    "Symbol":"AHL^E",
    "Name":"Aspen Insurance Holdings Limited Depositary Shares each representing a 1/1000th interest in a share of 5.625% Perpetual Non-Cumulative Preference Shares"
    },
    {
    "Symbol":"AHPA",
    "Name":"Avista Public Acquisition Corp. II Class A Ordinary Shares"
    },
    {
    "Symbol":"AHPAU",
    "Name":"Avista Public Acquisition Corp. II Unit"
    },
    {
    "Symbol":"AHPAW",
    "Name":"Avista Public Acquisition Corp. II Warrant"
    },
    {
    "Symbol":"AHPI",
    "Name":"Allied Healthcare Products Inc."
    },
    {
    "Symbol":"AHRNU",
    "Name":"Ahren Acquisition Corp. Unit"
    },
    {
    "Symbol":"AHT",
    "Name":"Ashford Hospitality Trust Inc"
    },
    {
    "Symbol":"AHT^D",
    "Name":"Ashford Hospitality Trust Inc 8.45% Series D Cumulative Preferred Stock"
    },
    {
    "Symbol":"AHT^F",
    "Name":"Ashford Hospitality Trust Inc 7.375% Series F Cumulative Preferred Stock"
    },
    {
    "Symbol":"AHT^G",
    "Name":"Ashford Hospitality Trust Inc 7.375% Series G Cumulative Preferred Stock"
    },
    {
    "Symbol":"AHT^H",
    "Name":"Ashford Hospitality Trust Inc 7.50% Series H Cumulative Preferred Stock"
    },
    {
    "Symbol":"AI",
    "Name":"C3.ai Inc. Class A"
    },
    {
    "Symbol":"AIBBU",
    "Name":"AIB Acquisition Corporation Unit"
    },
    {
    "Symbol":"AIC",
    "Name":"Arlington Asset Investment Corp 6.750% Notes due 2025"
    },
    {
    "Symbol":"AIF",
    "Name":"Apollo Tactical Income Fund Inc."
    },
    {
    "Symbol":"AIG",
    "Name":"American International Group Inc. New"
    },
    {
    "Symbol":"AIG^A",
    "Name":"American International Group Inc. Depositary Shares Each Representing a 1/1000th Interest in a Share of Series A 5.85% Non-Cumulative Perpetual Preferred Stock"
    },
    {
    "Symbol":"AIH",
    "Name":"Aesthetic Medical International Holdings Group Ltd. American Depositary Shares"
    },
    {
    "Symbol":"AIHS",
    "Name":"Senmiao Technology Limited"
    },
    {
    "Symbol":"AIKI",
    "Name":"AIkido Pharma Inc."
    },
    {
    "Symbol":"AIM",
    "Name":"AIM ImmunoTech Inc."
    },
    {
    "Symbol":"AIMC",
    "Name":"Altra Industrial Motion Corp."
    },
    {
    "Symbol":"AIN",
    "Name":"Albany International Corporation"
    },
    {
    "Symbol":"AINC",
    "Name":"Ashford Inc. (Holding Company)"
    },
    {
    "Symbol":"AINV",
    "Name":"Apollo Investment Corporation"
    },
    {
    "Symbol":"AIO",
    "Name":"Virtus AllianzGI Artificial Intelligence & Technology Opportunities Fund Common Shares"
    },
    {
    "Symbol":"AIP",
    "Name":"Arteris Inc."
    },
    {
    "Symbol":"AIR",
    "Name":"AAR Corp."
    },
    {
    "Symbol":"AIRC",
    "Name":"Apartment Income REIT Corp."
    },
    {
    "Symbol":"AIRG",
    "Name":"Airgain Inc."
    },
    {
    "Symbol":"AIRI",
    "Name":"Air Industries Group"
    },
    {
    "Symbol":"AIRS",
    "Name":"AirSculpt Technologies Inc."
    },
    {
    "Symbol":"AIRT",
    "Name":"Air T Inc."
    },
    {
    "Symbol":"AIRTP",
    "Name":"Air T Inc. Air T Funding Alpha Income Trust Preferred Securities"
    },
    {
    "Symbol":"AIT",
    "Name":"Applied Industrial Technologies Inc."
    },
    {
    "Symbol":"AIV",
    "Name":"Apartment Investment and Management Company"
    },
    {
    "Symbol":"AIZ",
    "Name":"Assurant Inc."
    },
    {
    "Symbol":"AIZN",
    "Name":"Assurant Inc. 5.25% Subordinated Notes due 2061"
    },
    {
    "Symbol":"AJG",
    "Name":"Arthur J. Gallagher & Co."
    },
    {
    "Symbol":"AJRD",
    "Name":"Aerojet Rocketdyne Holdings Inc."
    },
    {
    "Symbol":"AJX",
    "Name":"Great Ajax Corp."
    },
    {
    "Symbol":"AJXA",
    "Name":"Great Ajax Corp. 7.25% Convertible Senior Notes due 2024"
    },
    {
    "Symbol":"AKA",
    "Name":"a.k.a. Brands Holding Corp."
    },
    {
    "Symbol":"AKAM",
    "Name":"Akamai Technologies Inc."
    },
    {
    "Symbol":"AKBA",
    "Name":"Akebia Therapeutics Inc."
    },
    {
    "Symbol":"AKIC",
    "Name":"Sports Ventures Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"AKICU",
    "Name":"Sports Ventures Acquisition Corp. Unit"
    },
    {
    "Symbol":"AKICW",
    "Name":"Sports Ventures Acquisition Corp. Warrant"
    },
    {
    "Symbol":"AKO/A",
    "Name":"Embotelladora Andina S.A."
    },
    {
    "Symbol":"AKO/B",
    "Name":"Embotelladora Andina S.A."
    },
    {
    "Symbol":"AKR",
    "Name":"Acadia Realty Trust"
    },
    {
    "Symbol":"AKRO",
    "Name":"Akero Therapeutics Inc."
    },
    {
    "Symbol":"AKTS",
    "Name":"Akoustis Technologies Inc."
    },
    {
    "Symbol":"AKTX",
    "Name":"Akari Therapeutics plc ADS"
    },
    {
    "Symbol":"AKU",
    "Name":"Akumin Inc. Common Shares"
    },
    {
    "Symbol":"AKUS",
    "Name":"Akouos Inc."
    },
    {
    "Symbol":"AKYA",
    "Name":"Akoya BioSciences Inc."
    },
    {
    "Symbol":"AL",
    "Name":"Air Lease Corporation Class A"
    },
    {
    "Symbol":"AL^A",
    "Name":"Air Lease Corporation 6.150% Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series A"
    },
    {
    "Symbol":"ALAC",
    "Name":"Alberton Acquisition Corporation Ordinary Shares"
    },
    {
    "Symbol":"ALACR",
    "Name":"Alberton Acquisition Corporation Rights exp April 26 2021"
    },
    {
    "Symbol":"ALACW",
    "Name":"Alberton Acquisition Corporation Warrant"
    },
    {
    "Symbol":"ALB",
    "Name":"Albemarle Corporation"
    },
    {
    "Symbol":"ALBO",
    "Name":"Albireo Pharma Inc."
    },
    {
    "Symbol":"ALC",
    "Name":"Alcon Inc. Ordinary Shares"
    },
    {
    "Symbol":"ALCC",
    "Name":"AltC Acquisition Corp. Class A"
    },
    {
    "Symbol":"ALCO",
    "Name":"Alico Inc."
    },
    {
    "Symbol":"ALDX",
    "Name":"Aldeyra Therapeutics Inc."
    },
    {
    "Symbol":"ALE",
    "Name":"Allete Inc."
    },
    {
    "Symbol":"ALEC",
    "Name":"Alector Inc."
    },
    {
    "Symbol":"ALEX",
    "Name":"Alexander & Baldwin Inc.   REIT Holding Company"
    },
    {
    "Symbol":"ALF",
    "Name":"ALFI Inc."
    },
    {
    "Symbol":"ALFIW",
    "Name":"ALFI Inc. Warrant"
    },
    {
    "Symbol":"ALG",
    "Name":"Alamo Group Inc."
    },
    {
    "Symbol":"ALGM",
    "Name":"Allegro MicroSystems Inc."
    },
    {
    "Symbol":"ALGN",
    "Name":"Align Technology Inc."
    },
    {
    "Symbol":"ALGS",
    "Name":"Aligos Therapeutics Inc."
    },
    {
    "Symbol":"ALGT",
    "Name":"Allegiant Travel Company"
    },
    {
    "Symbol":"ALHC",
    "Name":"Alignment Healthcare Inc."
    },
    {
    "Symbol":"ALIM",
    "Name":"Alimera Sciences Inc."
    },
    {
    "Symbol":"ALIN^A",
    "Name":"Altera Infrastructure L.P. 7.25% Series A"
    },
    {
    "Symbol":"ALIN^B",
    "Name":"Altera Infrastructure L.P. 8.50% Series B"
    },
    {
    "Symbol":"ALIN^E",
    "Name":"Altera Infrastructure L.P. 8.875% Series E"
    },
    {
    "Symbol":"ALIT",
    "Name":"Alight Inc. Class A"
    },
    {
    "Symbol":"ALJJ",
    "Name":"ALJ Regional Holdings Inc."
    },
    {
    "Symbol":"ALK",
    "Name":"Alaska Air Group Inc."
    },
    {
    "Symbol":"ALKS",
    "Name":"Alkermes plc Ordinary Shares"
    },
    {
    "Symbol":"ALKT",
    "Name":"Alkami Technology Inc."
    },
    {
    "Symbol":"ALL",
    "Name":"Allstate Corporation (The)"
    },
    {
    "Symbol":"ALL^B",
    "Name":"Allstate Corporation (The) 5.100% Fixed-to-Floating Rate Subordinated Debentures due 2053"
    },
    {
    "Symbol":"ALL^G",
    "Name":"Allstate Corporation (The) Depositary Shares each representing a 1/1000th interest in a share of Fixed Rate Noncumulative Perpetual Preferred Stock Series G"
    },
    {
    "Symbol":"ALL^H",
    "Name":"Allstate Corporation (The) Depositary Shares each representing a 1/1000th interest in a share of Fixed Rate Noncumulative Perpetual Preferred Stock Series H"
    },
    {
    "Symbol":"ALL^I",
    "Name":"Allstate Corporation (The) Depositary Shares each representing a 1/1000th interest in a share of Fixed Rate Noncumulative Perpetual Preferred Stock Series I"
    },
    {
    "Symbol":"ALLE",
    "Name":"Allegion plc Ordinary Shares"
    },
    {
    "Symbol":"ALLK",
    "Name":"Allakos Inc."
    },
    {
    "Symbol":"ALLO",
    "Name":"Allogene Therapeutics Inc."
    },
    {
    "Symbol":"ALLR",
    "Name":"Allarity Therapeutics Inc."
    },
    {
    "Symbol":"ALLT",
    "Name":"Allot Ltd. Ordinary Shares"
    },
    {
    "Symbol":"ALLY",
    "Name":"Ally Financial Inc."
    },
    {
    "Symbol":"ALNA",
    "Name":"Allena Pharmaceuticals Inc."
    },
    {
    "Symbol":"ALNY",
    "Name":"Alnylam Pharmaceuticals Inc."
    },
    {
    "Symbol":"ALOR",
    "Name":"ALSP Orchid Acquisition Corporation I Class A Ordinary Share"
    },
    {
    "Symbol":"ALORU",
    "Name":"ALSP Orchid Acquisition Corporation I Unit"
    },
    {
    "Symbol":"ALORW",
    "Name":"ALSP Orchid Acquisition Corporation I Warrant"
    },
    {
    "Symbol":"ALOT",
    "Name":"AstroNova Inc."
    },
    {
    "Symbol":"ALP^Q",
    "Name":"Alabama Power Company 5.00% Class A Preferred Stock Cumulative Par Value $1 Per Share (Stated Capital $25 Per Share)"
    },
    {
    "Symbol":"ALPA",
    "Name":"Alpha Healthcare Acquisition Corp. III Class A"
    },
    {
    "Symbol":"ALPAU",
    "Name":"Alpha Healthcare Acquisition Corp. III Units"
    },
    {
    "Symbol":"ALPAW",
    "Name":"Alpha Healthcare Acquisition Corp. III Warrant"
    },
    {
    "Symbol":"ALPN",
    "Name":"Alpine Immune Sciences Inc."
    },
    {
    "Symbol":"ALPP",
    "Name":"Alpine 4 Holdings Inc. Class A"
    },
    {
    "Symbol":"ALRM",
    "Name":"Alarm.com Holdings Inc."
    },
    {
    "Symbol":"ALRN",
    "Name":"Aileron Therapeutics Inc."
    },
    {
    "Symbol":"ALRS",
    "Name":"Alerus Financial Corporation"
    },
    {
    "Symbol":"ALSA",
    "Name":"Alpha Star Acquisition Corporation Ordinary Shares"
    },
    {
    "Symbol":"ALSAR",
    "Name":"Alpha Star Acquisition Corporation Rights"
    },
    {
    "Symbol":"ALSAU",
    "Name":"Alpha Star Acquisition Corporation Units"
    },
    {
    "Symbol":"ALSAW",
    "Name":"Alpha Star Acquisition Corporation Warrants"
    },
    {
    "Symbol":"ALSN",
    "Name":"Allison Transmission Holdings Inc."
    },
    {
    "Symbol":"ALT",
    "Name":"Altimmune Inc."
    },
    {
    "Symbol":"ALTG",
    "Name":"Alta Equipment Group Inc. Class A"
    },
    {
    "Symbol":"ALTG^A",
    "Name":"Alta Equipment Group Inc. Depositary Shares (each representing 1/1000th in a share of 10% Series A Cumulative Perpetual Preferred Stock)"
    },
    {
    "Symbol":"ALTM",
    "Name":"Altus Midstream Company Class A"
    },
    {
    "Symbol":"ALTO",
    "Name":"Alto Ingredients Inc."
    },
    {
    "Symbol":"ALTR",
    "Name":"Altair Engineering Inc. Class A"
    },
    {
    "Symbol":"ALTU",
    "Name":"Altitude Acquisition Corp. Class A"
    },
    {
    "Symbol":"ALTUU",
    "Name":"Altitude Acquisition Corp. Unit"
    },
    {
    "Symbol":"ALTUW",
    "Name":"Altitude Acquisition Corp. Warrant"
    },
    {
    "Symbol":"ALV",
    "Name":"Autoliv Inc."
    },
    {
    "Symbol":"ALVR",
    "Name":"AlloVir Inc."
    },
    {
    "Symbol":"ALX",
    "Name":"Alexander's Inc."
    },
    {
    "Symbol":"ALXO",
    "Name":"ALX Oncology Holdings Inc."
    },
    {
    "Symbol":"ALYA",
    "Name":"Alithya Group inc. Class A Subordinate Voting Shares"
    },
    {
    "Symbol":"ALZN",
    "Name":"Alzamend Neuro Inc."
    },
    {
    "Symbol":"AM",
    "Name":"Antero Midstream Corporation"
    },
    {
    "Symbol":"AMAL",
    "Name":"Amalgamated Financial Corp.   (DE)"
    },
    {
    "Symbol":"AMAM",
    "Name":"Ambrx Biopharma Inc. American Depositary Shares (each representing seven Ordinary Shares)"
    },
    {
    "Symbol":"AMAO",
    "Name":"American Acquisition Opportunity Inc. Class A"
    },
    {
    "Symbol":"AMAOW",
    "Name":"American Acquisition Opportunity Inc. Warrant"
    },
    {
    "Symbol":"AMAT",
    "Name":"Applied Materials Inc."
    },
    {
    "Symbol":"AMBA",
    "Name":"Ambarella Inc. Ordinary Shares"
    },
    {
    "Symbol":"AMBC",
    "Name":"Ambac Financial Group Inc."
    },
    {
    "Symbol":"AMBO",
    "Name":"Ambow Education Holding Ltd. American Depository Shares each representing two Class A ordinary shares"
    },
    {
    "Symbol":"AMBP",
    "Name":"Ardagh Metal Packaging S.A. Ordinary Shares"
    },
    {
    "Symbol":"AMC",
    "Name":"AMC Entertainment Holdings Inc. Class A"
    },
    {
    "Symbol":"AMCI",
    "Name":"AMCI Acquisition Corp. II Class A"
    },
    {
    "Symbol":"AMCIU",
    "Name":"AMCI Acquisition Corp. II Units"
    },
    {
    "Symbol":"AMCIW",
    "Name":"AMCI Acquisition Corp. II Warrant"
    },
    {
    "Symbol":"AMCR",
    "Name":"Amcor plc Ordinary Shares"
    },
    {
    "Symbol":"AMCX",
    "Name":"AMC Networks Inc. Class A"
    },
    {
    "Symbol":"AMD",
    "Name":"Advanced Micro Devices Inc."
    },
    {
    "Symbol":"AME",
    "Name":"AMETEK Inc."
    },
    {
    "Symbol":"AMED",
    "Name":"Amedisys Inc"
    },
    {
    "Symbol":"AMEH",
    "Name":"Apollo Medical Holdings Inc."
    },
    {
    "Symbol":"AMG",
    "Name":"Affiliated Managers Group Inc."
    },
    {
    "Symbol":"AMGN",
    "Name":"Amgen Inc."
    },
    {
    "Symbol":"AMH",
    "Name":"American Homes 4 Rent Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"AMH^F",
    "Name":"American Homes 4 Rent 5.875% Series F Cumulative Redeemable Perpetual Preferred Shares"
    },
    {
    "Symbol":"AMH^G",
    "Name":"American Homes 4 Rent Series G cumulative redeemable perpetual preferred shares of beneficial interest"
    },
    {
    "Symbol":"AMH^H",
    "Name":"American Homes 4 Rent Series H cumulative redeemable perpetual Preferred Shares of Beneficial Interest"
    },
    {
    "Symbol":"AMK",
    "Name":"AssetMark Financial Holdings Inc."
    },
    {
    "Symbol":"AMKR",
    "Name":"Amkor Technology Inc."
    },
    {
    "Symbol":"AMLX",
    "Name":"Amylyx Pharmaceuticals Inc."
    },
    {
    "Symbol":"AMN",
    "Name":"AMN Healthcare Services Inc AMN Healthcare Services Inc"
    },
    {
    "Symbol":"AMNB",
    "Name":"American National Bankshares Inc."
    },
    {
    "Symbol":"AMOT",
    "Name":"Allied Motion Technologies Inc."
    },
    {
    "Symbol":"AMOV",
    "Name":"America Movil S.A.B. de C.V. Class A American Depositary Shares"
    },
    {
    "Symbol":"AMP",
    "Name":"Ameriprise Financial Inc."
    },
    {
    "Symbol":"AMPE",
    "Name":"Ampio Pharmaceuticals Inc."
    },
    {
    "Symbol":"AMPG",
    "Name":"Amplitech Group Inc."
    },
    {
    "Symbol":"AMPGW",
    "Name":"Amplitech Group Inc. Warrants"
    },
    {
    "Symbol":"AMPH",
    "Name":"Amphastar Pharmaceuticals Inc."
    },
    {
    "Symbol":"AMPI",
    "Name":"Advanced Merger Partners Inc. Class A"
    },
    {
    "Symbol":"AMPL",
    "Name":"Amplitude Inc. Class A"
    },
    {
    "Symbol":"AMPS",
    "Name":"Altus Power Inc. Class A"
    },
    {
    "Symbol":"AMPY",
    "Name":"Amplify Energy Corp."
    },
    {
    "Symbol":"AMR",
    "Name":"Alpha Metallurgical Resources Inc."
    },
    {
    "Symbol":"AMRC",
    "Name":"Ameresco Inc. Class A"
    },
    {
    "Symbol":"AMRK",
    "Name":"A-Mark Precious Metals Inc."
    },
    {
    "Symbol":"AMRN",
    "Name":"Amarin Corporation plc"
    },
    {
    "Symbol":"AMRS",
    "Name":"Amyris Inc."
    },
    {
    "Symbol":"AMRX",
    "Name":"Amneal Pharmaceuticals Inc. Class A"
    },
    {
    "Symbol":"AMS",
    "Name":"American Shared Hospital Services"
    },
    {
    "Symbol":"AMSC",
    "Name":"American Superconductor Corporation"
    },
    {
    "Symbol":"AMSF",
    "Name":"AMERISAFE Inc."
    },
    {
    "Symbol":"AMST",
    "Name":"Amesite Inc."
    },
    {
    "Symbol":"AMSWA",
    "Name":"American Software Inc. Class A"
    },
    {
    "Symbol":"AMT",
    "Name":"American Tower Corporation (REIT)"
    },
    {
    "Symbol":"AMTB",
    "Name":"Amerant Bancorp Inc. Class A"
    },
    {
    "Symbol":"AMTI",
    "Name":"Applied Molecular Transport Inc."
    },
    {
    "Symbol":"AMTX",
    "Name":"Aemetis Inc. (DE)"
    },
    {
    "Symbol":"AMWD",
    "Name":"American Woodmark Corporation"
    },
    {
    "Symbol":"AMWL",
    "Name":"American Well Corporation Class A"
    },
    {
    "Symbol":"AMX",
    "Name":"America Movil S.A.B. de C.V. American Depository Receipt Series L"
    },
    {
    "Symbol":"AMYT",
    "Name":"Amryt Pharma plc American Depositary Shares"
    },
    {
    "Symbol":"AMZN",
    "Name":"Amazon.com Inc."
    },
    {
    "Symbol":"AN",
    "Name":"AutoNation Inc."
    },
    {
    "Symbol":"ANAB",
    "Name":"AnaptysBio Inc."
    },
    {
    "Symbol":"ANAC",
    "Name":"Arctos NorthStar Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"ANAT",
    "Name":"American National Group Inc."
    },
    {
    "Symbol":"ANDE",
    "Name":"Andersons Inc. (The)"
    },
    {
    "Symbol":"ANEB",
    "Name":"Anebulo Pharmaceuticals Inc."
    },
    {
    "Symbol":"ANET",
    "Name":"Arista Networks Inc."
    },
    {
    "Symbol":"ANF",
    "Name":"Abercrombie & Fitch Company"
    },
    {
    "Symbol":"ANGI",
    "Name":"Angi Inc. Class A"
    },
    {
    "Symbol":"ANGN",
    "Name":"Angion Biomedica Corp."
    },
    {
    "Symbol":"ANGO",
    "Name":"AngioDynamics Inc."
    },
    {
    "Symbol":"ANIK",
    "Name":"Anika Therapeutics Inc."
    },
    {
    "Symbol":"ANIP",
    "Name":"ANI Pharmaceuticals Inc."
    },
    {
    "Symbol":"ANIX",
    "Name":"Anixa Biosciences Inc."
    },
    {
    "Symbol":"ANNX",
    "Name":"Annexon Inc."
    },
    {
    "Symbol":"ANPC",
    "Name":"AnPac Bio-Medical Science Co. Ltd. American Depositary Shares"
    },
    {
    "Symbol":"ANSS",
    "Name":"ANSYS Inc."
    },
    {
    "Symbol":"ANTE",
    "Name":"AirNet Technology Inc. American Depositary Shares"
    },
    {
    "Symbol":"ANTM",
    "Name":"Anthem Inc."
    },
    {
    "Symbol":"ANVS",
    "Name":"Annovis Bio Inc."
    },
    {
    "Symbol":"ANY",
    "Name":"Sphere 3D Corp. Common Shares"
    },
    {
    "Symbol":"ANZU",
    "Name":"Anzu Special Acquisition Corp I Class A"
    },
    {
    "Symbol":"ANZUU",
    "Name":"Anzu Special Acquisition Corp I Units"
    },
    {
    "Symbol":"ANZUW",
    "Name":"Anzu Special Acquisition Corp I Warrant"
    },
    {
    "Symbol":"AOD",
    "Name":"Aberdeen Total Dynamic Dividend Fund"
    },
    {
    "Symbol":"AOGOU",
    "Name":"Arogo Capital Acquisition Corp. Unit"
    },
    {
    "Symbol":"AOMR",
    "Name":"Angel Oak Mortgage Inc."
    },
    {
    "Symbol":"AON",
    "Name":"Aon plc Class A Ordinary Shares (Ireland)"
    },
    {
    "Symbol":"AORT",
    "Name":"Artivion Inc."
    },
    {
    "Symbol":"AOS",
    "Name":"A.O. Smith Corporation"
    },
    {
    "Symbol":"AOSL",
    "Name":"Alpha and Omega Semiconductor Limited Common Shares"
    },
    {
    "Symbol":"AOUT",
    "Name":"American Outdoor Brands Inc."
    },
    {
    "Symbol":"AP",
    "Name":"Ampco-Pittsburgh Corporation"
    },
    {
    "Symbol":"APA",
    "Name":"APA Corporation"
    },
    {
    "Symbol":"APAC",
    "Name":"StoneBridge Acquisition Corporation Class A Ordinary Shares"
    },
    {
    "Symbol":"APACU",
    "Name":"StoneBridge Acquisition Corporation Unit"
    },
    {
    "Symbol":"APACW",
    "Name":"StoneBridge Acquisition Corporation Warrant"
    },
    {
    "Symbol":"APAM",
    "Name":"Artisan Partners Asset Management Inc. Class A"
    },
    {
    "Symbol":"APCX",
    "Name":"AppTech Payments Corp."
    },
    {
    "Symbol":"APCXW",
    "Name":"AppTech Payments Corp. Warrant"
    },
    {
    "Symbol":"APD",
    "Name":"Air Products and Chemicals Inc."
    },
    {
    "Symbol":"APDN",
    "Name":"Applied DNA Sciences Inc."
    },
    {
    "Symbol":"APEI",
    "Name":"American Public Education Inc."
    },
    {
    "Symbol":"APEN",
    "Name":"Apollo Endosurgery Inc."
    },
    {
    "Symbol":"APG",
    "Name":"APi Group Corporation"
    },
    {
    "Symbol":"APGB",
    "Name":"Apollo Strategic Growth Capital II Class A Ordinary Shares"
    },
    {
    "Symbol":"APH",
    "Name":"Amphenol Corporation"
    },
    {
    "Symbol":"API",
    "Name":"Agora Inc. American Depositary Shares"
    },
    {
    "Symbol":"APLE",
    "Name":"Apple Hospitality REIT Inc. Common Shares"
    },
    {
    "Symbol":"APLS",
    "Name":"Apellis Pharmaceuticals Inc."
    },
    {
    "Symbol":"APLT",
    "Name":"Applied Therapeutics Inc."
    },
    {
    "Symbol":"APM",
    "Name":"Aptorum Group Limited Class A Ordinary Shares"
    },
    {
    "Symbol":"APMI",
    "Name":"AxonPrime Infrastructure Acquisition Corporation Class A"
    },
    {
    "Symbol":"APMIU",
    "Name":"AxonPrime Infrastructure Acquisition Corporation Unit"
    },
    {
    "Symbol":"APMIW",
    "Name":"AxonPrime Infrastructure Acquisition Corporation Warrants"
    },
    {
    "Symbol":"APN",
    "Name":"Apeiron Capital Investment Corp. Class A"
    },
    {
    "Symbol":"APO",
    "Name":"Apollo Global Management Inc. (New)"
    },
    {
    "Symbol":"APOG",
    "Name":"Apogee Enterprises Inc."
    },
    {
    "Symbol":"APP",
    "Name":"Applovin Corporation Class A"
    },
    {
    "Symbol":"APPF",
    "Name":"AppFolio Inc. Class A"
    },
    {
    "Symbol":"APPH",
    "Name":"AppHarvest Inc."
    },
    {
    "Symbol":"APPHW",
    "Name":"AppHarvest Inc. Warrants"
    },
    {
    "Symbol":"APPN",
    "Name":"Appian Corporation Class A"
    },
    {
    "Symbol":"APPS",
    "Name":"Digital Turbine Inc."
    },
    {
    "Symbol":"APR",
    "Name":"Apria Inc."
    },
    {
    "Symbol":"APRE",
    "Name":"Aprea Therapeutics Inc."
    },
    {
    "Symbol":"APRN",
    "Name":"Blue Apron Holdings Inc. Class A"
    },
    {
    "Symbol":"APSG",
    "Name":"Apollo Strategic Growth Capital Class A Ordinary Shares"
    },
    {
    "Symbol":"APT",
    "Name":"Alpha Pro Tech Ltd."
    },
    {
    "Symbol":"APTM",
    "Name":"Alpha Partners Technology Merger Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"APTMU",
    "Name":"Alpha Partners Technology Merger Corp. Unit"
    },
    {
    "Symbol":"APTMW",
    "Name":"Alpha Partners Technology Merger Corp. Warrant"
    },
    {
    "Symbol":"APTO",
    "Name":"Aptose Biosciences Inc. Common Shares"
    },
    {
    "Symbol":"APTS",
    "Name":"Preferred Apartment Communities Inc."
    },
    {
    "Symbol":"APTV",
    "Name":"Aptiv PLC Ordinary Shares"
    },
    {
    "Symbol":"APTV^A",
    "Name":"Aptiv PLC 5.50% Series A Mandatory Convertible Preferred Shares"
    },
    {
    "Symbol":"APTX",
    "Name":"Aptinyx Inc."
    },
    {
    "Symbol":"APVO",
    "Name":"Aptevo Therapeutics Inc."
    },
    {
    "Symbol":"APWC",
    "Name":"Asia Pacific Wire & Cable Corporation Ltd. Ordinary Shares (Bermuda)"
    },
    {
    "Symbol":"APXIU",
    "Name":"APx Acquisition Corp. I Unit"
    },
    {
    "Symbol":"APYX",
    "Name":"Apyx Medical Corporation"
    },
    {
    "Symbol":"AQB",
    "Name":"AquaBounty Technologies Inc."
    },
    {
    "Symbol":"AQMS",
    "Name":"Aqua Metals Inc."
    },
    {
    "Symbol":"AQN",
    "Name":"Algonquin Power & Utilities Corp. Common Shares"
    },
    {
    "Symbol":"AQNA",
    "Name":"Algonquin Power & Utilities Corp. 6.875% Fixed-to-Floating Rate Subordinated Notes Series 2018-A due October 17 2078"
    },
    {
    "Symbol":"AQNB",
    "Name":"Algonquin Power & Utilities Corp. 6.20% Fixed-to-Floating Subordinated Notes Series 2019-A due July 1 2079"
    },
    {
    "Symbol":"AQNU",
    "Name":"Algonquin Power & Utilities Corp. Corporate Units"
    },
    {
    "Symbol":"AQST",
    "Name":"Aquestive Therapeutics Inc."
    },
    {
    "Symbol":"AQUA",
    "Name":"Evoqua Water Technologies Corp."
    },
    {
    "Symbol":"AR",
    "Name":"Antero Resources Corporation"
    },
    {
    "Symbol":"ARAV",
    "Name":"Aravive Inc."
    },
    {
    "Symbol":"ARAY",
    "Name":"Accuray Incorporated"
    },
    {
    "Symbol":"ARBE",
    "Name":"Arbe Robotics Ltd. Ordinary Shares"
    },
    {
    "Symbol":"ARBEW",
    "Name":"Arbe Robotics Ltd. Warrant"
    },
    {
    "Symbol":"ARBG",
    "Name":"Aequi Acquisition Corp. Class A"
    },
    {
    "Symbol":"ARBGU",
    "Name":"Aequi Acquisition Corp. Unit"
    },
    {
    "Symbol":"ARBGW",
    "Name":"Aequi Acquisition Corp. warrants"
    },
    {
    "Symbol":"ARBK",
    "Name":"Argo Blockchain plc American Depositary Shares"
    },
    {
    "Symbol":"ARBKL",
    "Name":"Argo Blockchain plc 8.75% Senior Notes due 2026"
    },
    {
    "Symbol":"ARC",
    "Name":"ARC Document Solutions Inc."
    },
    {
    "Symbol":"ARCB",
    "Name":"ArcBest Corporation"
    },
    {
    "Symbol":"ARCC",
    "Name":"Ares Capital Corporation"
    },
    {
    "Symbol":"ARCE",
    "Name":"Arco Platform Limited Class A Common Shares"
    },
    {
    "Symbol":"ARCH",
    "Name":"Arch Resources Inc. Class A"
    },
    {
    "Symbol":"ARCK",
    "Name":"Arbor Rapha Capital Bioholdings Corp. I Class A"
    },
    {
    "Symbol":"ARCKU",
    "Name":"Arbor Rapha Capital Bioholdings Corp. I Units"
    },
    {
    "Symbol":"ARCKW",
    "Name":"Arbor Rapha Capital Bioholdings Corp. I Warrants"
    },
    {
    "Symbol":"ARCO",
    "Name":"Arcos Dorados Holdings Inc. Class A Shares"
    },
    {
    "Symbol":"ARCT",
    "Name":"Arcturus Therapeutics Holdings Inc."
    },
    {
    "Symbol":"ARDC",
    "Name":"Ares Dynamic Credit Allocation Fund Inc. Common Shares"
    },
    {
    "Symbol":"ARDS",
    "Name":"Aridis Pharmaceuticals Inc."
    },
    {
    "Symbol":"ARDX",
    "Name":"Ardelyx Inc."
    },
    {
    "Symbol":"ARE",
    "Name":"Alexandria Real Estate Equities Inc."
    },
    {
    "Symbol":"AREB",
    "Name":"American Rebel Holdings Inc."
    },
    {
    "Symbol":"AREC",
    "Name":"American Resources Corporation Class A"
    },
    {
    "Symbol":"ARES",
    "Name":"Ares Management Corporation Class A"
    },
    {
    "Symbol":"ARGD",
    "Name":"Argo Group International Holdings Ltd. 6.5% Senior Notes Due 2042"
    },
    {
    "Symbol":"ARGO",
    "Name":"Argo Group International Holdings Ltd."
    },
    {
    "Symbol":"ARGO^A",
    "Name":"Argo Group International Holdings Ltd. Depositary Shares Each Representing a 1/1000th Interest in a 7.00% Resettable Fixed Rate Preference Share Series A"
    },
    {
    "Symbol":"ARGU",
    "Name":"Argus Capital Corp. Class A"
    },
    {
    "Symbol":"ARGUU",
    "Name":"Argus Capital Corp. Unit"
    },
    {
    "Symbol":"ARGUW",
    "Name":"Argus Capital Corp. Warrant"
    },
    {
    "Symbol":"ARGX",
    "Name":"argenx SE American Depositary Shares"
    },
    {
    "Symbol":"ARHS",
    "Name":"Arhaus Inc. Class A"
    },
    {
    "Symbol":"ARI",
    "Name":"Apollo Commercial Real Estate Finance Inc"
    },
    {
    "Symbol":"ARIS",
    "Name":"Aris Water Solutions Inc. Class A"
    },
    {
    "Symbol":"ARIZ",
    "Name":"Arisz Acquisition Corp."
    },
    {
    "Symbol":"ARIZR",
    "Name":"Arisz Acquisition Corp. Right"
    },
    {
    "Symbol":"ARIZU",
    "Name":"Arisz Acquisition Corp. Unit"
    },
    {
    "Symbol":"ARIZW",
    "Name":"Arisz Acquisition Corp. Warrant"
    },
    {
    "Symbol":"ARKO",
    "Name":"ARKO Corp."
    },
    {
    "Symbol":"ARKOW",
    "Name":"ARKO Corp. Warrant"
    },
    {
    "Symbol":"ARKR",
    "Name":"Ark Restaurants Corp."
    },
    {
    "Symbol":"ARL",
    "Name":"American Realty Investors Inc."
    },
    {
    "Symbol":"ARLO",
    "Name":"Arlo Technologies Inc."
    },
    {
    "Symbol":"ARLP",
    "Name":"Alliance Resource Partners L.P. Common Units representing Limited Partners Interests"
    },
    {
    "Symbol":"ARMK",
    "Name":"Aramark"
    },
    {
    "Symbol":"ARMP",
    "Name":"Armata Pharmaceuticals Inc."
    },
    {
    "Symbol":"ARNA",
    "Name":"Arena Pharmaceuticals Inc."
    },
    {
    "Symbol":"ARNC",
    "Name":"Arconic Corporation"
    },
    {
    "Symbol":"AROC",
    "Name":"Archrock Inc."
    },
    {
    "Symbol":"AROW",
    "Name":"Arrow Financial Corporation"
    },
    {
    "Symbol":"ARQQ",
    "Name":"Arqit Quantum Inc. Ordinary Shares"
    },
    {
    "Symbol":"ARQQW",
    "Name":"Arqit Quantum Inc. Warrants"
    },
    {
    "Symbol":"ARQT",
    "Name":"Arcutis Biotherapeutics Inc."
    },
    {
    "Symbol":"ARR",
    "Name":"ARMOUR Residential REIT Inc."
    },
    {
    "Symbol":"ARR^C",
    "Name":"ARMOUR Residential REIT Inc. 7% Series C Cumulative Redeemable Preferred Stock (liquidation preference $25.00 per share)"
    },
    {
    "Symbol":"ARRW",
    "Name":"Arrowroot Acquisition Corp. Class A"
    },
    {
    "Symbol":"ARRWU",
    "Name":"Arrowroot Acquisition Corp. Unit"
    },
    {
    "Symbol":"ARRWW",
    "Name":"Arrowroot Acquisition Corp. Warrant"
    },
    {
    "Symbol":"ARRY",
    "Name":"Array Technologies Inc."
    },
    {
    "Symbol":"ARTA",
    "Name":"Artisan Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"ARTAU",
    "Name":"Artisan Acquisition Corp. Units"
    },
    {
    "Symbol":"ARTAW",
    "Name":"Artisan Acquisition Corp. Warrants"
    },
    {
    "Symbol":"ARTE",
    "Name":"Artemis Strategic Investment Corporation Class A"
    },
    {
    "Symbol":"ARTEU",
    "Name":"Artemis Strategic Investment Corporation Unit"
    },
    {
    "Symbol":"ARTEW",
    "Name":"Artemis Strategic Investment Corporation Warrant"
    },
    {
    "Symbol":"ARTL",
    "Name":"Artelo Biosciences Inc."
    },
    {
    "Symbol":"ARTLW",
    "Name":"Artelo Biosciences Inc. Warrant"
    },
    {
    "Symbol":"ARTNA",
    "Name":"Artesian Resources Corporation Class A"
    },
    {
    "Symbol":"ARTW",
    "Name":"Art's-Way Manufacturing Co. Inc."
    },
    {
    "Symbol":"ARVL",
    "Name":"Arrival Ordinary Shares"
    },
    {
    "Symbol":"ARVN",
    "Name":"Arvinas Inc."
    },
    {
    "Symbol":"ARW",
    "Name":"Arrow Electronics Inc."
    },
    {
    "Symbol":"ARWR",
    "Name":"Arrowhead Pharmaceuticals Inc."
    },
    {
    "Symbol":"ARYD",
    "Name":"ARYA Sciences Acquisition Corp IV Class A Odinary Shares"
    },
    {
    "Symbol":"ARYE",
    "Name":"ARYA Sciences Acquisition Corp V Class A Ordinary Shares"
    },
    {
    "Symbol":"ASA",
    "Name":"ASA  Gold and Precious Metals Limited"
    },
    {
    "Symbol":"ASAI",
    "Name":"Sendas Distribuidora S A ADS"
    },
    {
    "Symbol":"ASAN",
    "Name":"Asana Inc. Class A"
    },
    {
    "Symbol":"ASAQ",
    "Name":"Atlantic Street Acquisition Corp Class A"
    },
    {
    "Symbol":"ASAX",
    "Name":"Astrea Acquisition Corp. Class A"
    },
    {
    "Symbol":"ASAXU",
    "Name":"Astrea Acquisition Corp. Unit"
    },
    {
    "Symbol":"ASAXW",
    "Name":"Astrea Acquisition Corp. Warrant"
    },
    {
    "Symbol":"ASB",
    "Name":"Associated Banc-Corp"
    },
    {
    "Symbol":"ASB^E",
    "Name":"Associated Banc-Corp Depositary Shares each representing a 1/40th interest in a share of 5.875% Non-Cumulative Perpetual Preferred Stock Series E"
    },
    {
    "Symbol":"ASB^F",
    "Name":"Associated Banc-Corp Depositary Shares each representing a 1/40th interest in a share of Associated Banc-Corp 5.625% Non-Cumulative Perpetual Preferred Stock Series F"
    },
    {
    "Symbol":"ASC",
    "Name":"Ardmore Shipping Corporation"
    },
    {
    "Symbol":"ASG",
    "Name":"Liberty All-Star Growth Fund Inc."
    },
    {
    "Symbol":"ASGI",
    "Name":"Aberdeen Standard Global Infrastructure Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"ASGN",
    "Name":"ASGN Incorporated"
    },
    {
    "Symbol":"ASH",
    "Name":"Ashland Global Holdings Inc."
    },
    {
    "Symbol":"ASIX",
    "Name":"AdvanSix Inc."
    },
    {
    "Symbol":"ASLE",
    "Name":"AerSale Corporation"
    },
    {
    "Symbol":"ASLN",
    "Name":"ASLAN Pharmaceuticals Limited American Depositary Shares"
    },
    {
    "Symbol":"ASM",
    "Name":"Avino Silver & Gold Mines Ltd. Common Shares (Canada)"
    },
    {
    "Symbol":"ASMB",
    "Name":"Assembly Biosciences Inc."
    },
    {
    "Symbol":"ASML",
    "Name":"ASML Holding N.V. New York Registry Shares"
    },
    {
    "Symbol":"ASND",
    "Name":"Ascendis Pharma A/S American Depositary Shares"
    },
    {
    "Symbol":"ASO",
    "Name":"Academy Sports and Outdoors Inc."
    },
    {
    "Symbol":"ASPA",
    "Name":"ABRI SPAC I INC."
    },
    {
    "Symbol":"ASPAU",
    "Name":"Abri SPAC I Inc. Unit"
    },
    {
    "Symbol":"ASPAW",
    "Name":"ABRI SPAC I INC. Warrant"
    },
    {
    "Symbol":"ASPC",
    "Name":"Alpha Capital Acquisition Company One Class A Ordinary Share"
    },
    {
    "Symbol":"ASPCU",
    "Name":"Alpha Capital Acquisition Company Unit"
    },
    {
    "Symbol":"ASPCW",
    "Name":"Alpha Capital Acquisition Company Warrant"
    },
    {
    "Symbol":"ASPN",
    "Name":"Aspen Aerogels Inc."
    },
    {
    "Symbol":"ASPS",
    "Name":"Altisource Portfolio Solutions S.A."
    },
    {
    "Symbol":"ASPU",
    "Name":"Aspen Group Inc."
    },
    {
    "Symbol":"ASR",
    "Name":"Grupo Aeroportuario del Sureste S.A. de C.V."
    },
    {
    "Symbol":"ASRT",
    "Name":"Assertio Holdings Inc."
    },
    {
    "Symbol":"ASRV",
    "Name":"AmeriServ Financial Inc."
    },
    {
    "Symbol":"ASTC",
    "Name":"Astrotech Corporation (DE)"
    },
    {
    "Symbol":"ASTE",
    "Name":"Astec Industries Inc."
    },
    {
    "Symbol":"ASTL",
    "Name":"Algoma Steel Group Inc. Common Shares"
    },
    {
    "Symbol":"ASTLW",
    "Name":"Algoma Steel Group Inc. Warrant"
    },
    {
    "Symbol":"ASTR",
    "Name":"Astra Space Inc. Class A"
    },
    {
    "Symbol":"ASTS",
    "Name":"AST SpaceMobile Inc. Class A"
    },
    {
    "Symbol":"ASTSW",
    "Name":"AST SpaceMobile Inc. Warrant"
    },
    {
    "Symbol":"ASUR",
    "Name":"Asure Software Inc"
    },
    {
    "Symbol":"ASX",
    "Name":"ASE Technology Holding Co. Ltd. American Depositary Shares (each representing Two Common Shares)"
    },
    {
    "Symbol":"ASXC",
    "Name":"Asensus Surgical Inc."
    },
    {
    "Symbol":"ASYS",
    "Name":"Amtech Systems Inc."
    },
    {
    "Symbol":"ASZ",
    "Name":"Austerlitz Acquisition Corporation II Class A Ordinary Shares"
    },
    {
    "Symbol":"ATA",
    "Name":"Americas Technology Acquisition Corp. Ordinary Shares"
    },
    {
    "Symbol":"ATAI",
    "Name":"ATAI Life Sciences N.V. Common Shares"
    },
    {
    "Symbol":"ATAQ",
    "Name":"Altimar Acquisition Corp. III Class A Ordinary Shares"
    },
    {
    "Symbol":"ATAX",
    "Name":"America First Multifamily Investors L.P. Beneficial Unit Certificates (BUCs) representing Limited Partnership Interests"
    },
    {
    "Symbol":"ATC",
    "Name":"Atotech Limited Common Shares"
    },
    {
    "Symbol":"ATCO",
    "Name":"Atlas Corp. Common Shares"
    },
    {
    "Symbol":"ATCO^D",
    "Name":"Atlas Corp. 7.95% Series D"
    },
    {
    "Symbol":"ATCO^H",
    "Name":"Atlas Corp. 7.875% Series H"
    },
    {
    "Symbol":"ATCO^I",
    "Name":"Atlas Corp. Series I Fixed-to-Floating"
    },
    {
    "Symbol":"ATCOL",
    "Name":"Atlas Corp. 7.125% Notes due 2027"
    },
    {
    "Symbol":"ATCX",
    "Name":"Atlas Technical Consultants Inc. Class A"
    },
    {
    "Symbol":"ATEC",
    "Name":"Alphatec Holdings Inc."
    },
    {
    "Symbol":"ATEN",
    "Name":"A10 Networks Inc."
    },
    {
    "Symbol":"ATER",
    "Name":"Aterian Inc."
    },
    {
    "Symbol":"ATEX",
    "Name":"Anterix Inc."
    },
    {
    "Symbol":"ATGE",
    "Name":"Adtalem Global Education Inc."
    },
    {
    "Symbol":"ATH^A",
    "Name":"Athene Holding Ltd. Depositary Shares Each Representing a 1/1000th Interest in a 6.35% Fixed-to-Floating Rate Perpetual Non-Cumulative Preference Share Series A"
    },
    {
    "Symbol":"ATH^B",
    "Name":"Athene Holding Ltd. Depositary Shares Each Representing a 1/1000th Interest in a 5.625% Fixed Rate Perpetual Non- Cumulative Preference Share Series B par value $1.00 per share"
    },
    {
    "Symbol":"ATH^C",
    "Name":"Athene Holding Ltd. Depositary Shares each representing a 1/1000th Interest in a Share of 6.375% Fixed-Rate Reset Perpetual Non-Cumulative Preference Shares Series C"
    },
    {
    "Symbol":"ATH^D",
    "Name":"Athene Holding Ltd. Depositary Shares Each Representing a 1/1000th Interest in a 4.875% Fixed-Rate Perpetual Non-Cumulative Preference Share Series D"
    },
    {
    "Symbol":"ATHA",
    "Name":"Athira Pharma Inc."
    },
    {
    "Symbol":"ATHE",
    "Name":"Alterity Therapeutics Limited American Depositary Shares"
    },
    {
    "Symbol":"ATHM",
    "Name":"Autohome Inc. American Depositary Shares each representing four class A ordinary shares."
    },
    {
    "Symbol":"ATHX",
    "Name":"Athersys Inc."
    },
    {
    "Symbol":"ATI",
    "Name":"Allegheny Technologies Incorporated"
    },
    {
    "Symbol":"ATIF",
    "Name":"ATIF Holdings Limited Ordinary Shares"
    },
    {
    "Symbol":"ATIP",
    "Name":"ATI Physical Therapy Inc. Class A"
    },
    {
    "Symbol":"ATKR",
    "Name":"Atkore Inc."
    },
    {
    "Symbol":"ATLC",
    "Name":"Atlanticus Holdings Corporation"
    },
    {
    "Symbol":"ATLCL",
    "Name":"Atlanticus Holdings Corporation 6.125% Senior Notes due 2026"
    },
    {
    "Symbol":"ATLCP",
    "Name":"Atlanticus Holdings Corporation 7.625% Series B Cumulative Perpetual Preferred Stock no par value per share"
    },
    {
    "Symbol":"ATLO",
    "Name":"Ames National Corporation"
    },
    {
    "Symbol":"ATNF",
    "Name":"180 Life Sciences Corp."
    },
    {
    "Symbol":"ATNFW",
    "Name":"180 Life Sciences Corp. Warrant"
    },
    {
    "Symbol":"ATNI",
    "Name":"ATN International Inc."
    },
    {
    "Symbol":"ATNM",
    "Name":"Actinium Pharmaceuticals Inc. (Delaware)"
    },
    {
    "Symbol":"ATNX",
    "Name":"Athenex Inc."
    },
    {
    "Symbol":"ATO",
    "Name":"Atmos Energy Corporation"
    },
    {
    "Symbol":"ATOM",
    "Name":"Atomera Incorporated"
    },
    {
    "Symbol":"ATOS",
    "Name":"Atossa Therapeutics Inc."
    },
    {
    "Symbol":"ATR",
    "Name":"AptarGroup Inc."
    },
    {
    "Symbol":"ATRA",
    "Name":"Atara Biotherapeutics Inc."
    },
    {
    "Symbol":"ATRC",
    "Name":"AtriCure Inc."
    },
    {
    "Symbol":"ATRI",
    "Name":"Atrion Corporation"
    },
    {
    "Symbol":"ATRO",
    "Name":"Astronics Corporation"
    },
    {
    "Symbol":"ATRS",
    "Name":"Antares Pharma Inc."
    },
    {
    "Symbol":"ATSG",
    "Name":"Air Transport Services Group Inc"
    },
    {
    "Symbol":"ATSPT",
    "Name":"Archimedes Tech SPAC Partners Co. Subunit"
    },
    {
    "Symbol":"ATSPU",
    "Name":"Archimedes Tech SPAC Partners Co. Unit"
    },
    {
    "Symbol":"ATSPW",
    "Name":"Archimedes Tech SPAC Partners Co. Warrant"
    },
    {
    "Symbol":"ATTO",
    "Name":"Atento S.A. Ordinary Shares"
    },
    {
    "Symbol":"ATUS",
    "Name":"Altice USA Inc. Class A"
    },
    {
    "Symbol":"ATVC",
    "Name":"Tribe Capital Growth Corp I Class A"
    },
    {
    "Symbol":"ATVCU",
    "Name":"Tribe Capital Growth Corp I Units"
    },
    {
    "Symbol":"ATVCW",
    "Name":"Tribe Capital Growth Corp I Warrant"
    },
    {
    "Symbol":"ATVI",
    "Name":"Activision Blizzard Inc."
    },
    {
    "Symbol":"ATXI",
    "Name":"Avenue Therapeutics Inc."
    },
    {
    "Symbol":"ATXS",
    "Name":"Astria Therapeutics Inc."
    },
    {
    "Symbol":"ATY",
    "Name":"AcuityAds Holdings Inc. Common Shares"
    },
    {
    "Symbol":"AU",
    "Name":"AngloGold Ashanti Limited"
    },
    {
    "Symbol":"AUB",
    "Name":"Atlantic Union Bankshares Corporation"
    },
    {
    "Symbol":"AUBAP",
    "Name":"Atlantic Union Bankshares Corporation Depositary Shares each representing a 1/400th ownership interest in a share of 6.875% Perpetual Non-Cumulative Preferred Stock Series A"
    },
    {
    "Symbol":"AUBN",
    "Name":"Auburn National Bancorporation Inc."
    },
    {
    "Symbol":"AUD",
    "Name":"Audacy"
    },
    {
    "Symbol":"AUDC",
    "Name":"AudioCodes Ltd."
    },
    {
    "Symbol":"AUGX",
    "Name":"Augmedix Inc."
    },
    {
    "Symbol":"AUID",
    "Name":"Ipsidy Inc."
    },
    {
    "Symbol":"AUMN",
    "Name":"Golden Minerals Company"
    },
    {
    "Symbol":"AUPH",
    "Name":"Aurinia Pharmaceuticals Inc Ordinary Shares"
    },
    {
    "Symbol":"AUR",
    "Name":"Aurora Innovation Inc. Class A"
    },
    {
    "Symbol":"AURA",
    "Name":"Aura Biosciences Inc."
    },
    {
    "Symbol":"AURC",
    "Name":"Aurora Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"AURCU",
    "Name":"Aurora Acquisition Corp. Unit"
    },
    {
    "Symbol":"AURCW",
    "Name":"Aurora Acquisition Corp. Warrant"
    },
    {
    "Symbol":"AUROW",
    "Name":"Aurora Innovation Inc. Warrant"
    },
    {
    "Symbol":"AUS",
    "Name":"Austerlitz Acquisition Corporation I Class A Ordinary Shares"
    },
    {
    "Symbol":"AUTL",
    "Name":"Autolus Therapeutics plc American Depositary Share"
    },
    {
    "Symbol":"AUTO",
    "Name":"AutoWeb Inc."
    },
    {
    "Symbol":"AUUD",
    "Name":"Auddia Inc."
    },
    {
    "Symbol":"AUUDW",
    "Name":"Auddia Inc. Warrants"
    },
    {
    "Symbol":"AUVI",
    "Name":"Applied UV Inc."
    },
    {
    "Symbol":"AUVIP",
    "Name":"Applied UV Inc. 10.5% Series A Cumulative Perpetual Preferred Stock $0.0001 par value per share"
    },
    {
    "Symbol":"AUY",
    "Name":"Yamana Gold Inc. Ordinary Shares (Canada)"
    },
    {
    "Symbol":"AVA",
    "Name":"Avista Corporation"
    },
    {
    "Symbol":"AVAC",
    "Name":"Avalon Acquisition Inc. Class A"
    },
    {
    "Symbol":"AVACU",
    "Name":"Avalon Acquisition Inc. Units"
    },
    {
    "Symbol":"AVACW",
    "Name":"Avalon Acquisition Inc. Warrant"
    },
    {
    "Symbol":"AVAH",
    "Name":"Aveanna Healthcare Holdings Inc."
    },
    {
    "Symbol":"AVAL",
    "Name":"Grupo Aval Acciones y Valores S.A. ADR (Each representing 20 preferred shares)"
    },
    {
    "Symbol":"AVAN",
    "Name":"Avanti Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"AVAV",
    "Name":"AeroVironment Inc."
    },
    {
    "Symbol":"AVB",
    "Name":"AvalonBay Communities Inc."
    },
    {
    "Symbol":"AVCO",
    "Name":"Avalon GloboCare Corp."
    },
    {
    "Symbol":"AVCT",
    "Name":"American Virtual Cloud Technologies Inc."
    },
    {
    "Symbol":"AVCTW",
    "Name":"American Virtual Cloud Technologies Inc. Warrant expiring 4/7/2025"
    },
    {
    "Symbol":"AVD",
    "Name":"American Vanguard Corporation   ($0.10 Par Value)"
    },
    {
    "Symbol":"AVDL",
    "Name":"Avadel Pharmaceuticals plc American Depositary Shares"
    },
    {
    "Symbol":"AVDX",
    "Name":"AvidXchange Holdings Inc."
    },
    {
    "Symbol":"AVEO",
    "Name":"AVEO Pharmaceuticals Inc."
    },
    {
    "Symbol":"AVGO",
    "Name":"Broadcom Inc."
    },
    {
    "Symbol":"AVGOP",
    "Name":"Broadcom Inc. 8.00% Mandatory Convertible Preferred Stock Series A"
    },
    {
    "Symbol":"AVGR",
    "Name":"Avinger Inc."
    },
    {
    "Symbol":"AVHI",
    "Name":"Achari Ventures Holdings Corp. I"
    },
    {
    "Symbol":"AVID",
    "Name":"Avid Technology Inc."
    },
    {
    "Symbol":"AVIR",
    "Name":"Atea Pharmaceuticals Inc."
    },
    {
    "Symbol":"AVK",
    "Name":"Advent Convertible and Income Fund"
    },
    {
    "Symbol":"AVLR",
    "Name":"Avalara Inc."
    },
    {
    "Symbol":"AVNS",
    "Name":"Avanos Medical Inc."
    },
    {
    "Symbol":"AVNT",
    "Name":"Avient Corporation"
    },
    {
    "Symbol":"AVNW",
    "Name":"Aviat Networks Inc."
    },
    {
    "Symbol":"AVO",
    "Name":"Mission Produce Inc."
    },
    {
    "Symbol":"AVPT",
    "Name":"AvePoint Inc. Class A"
    },
    {
    "Symbol":"AVPTW",
    "Name":"AvePoint Inc. Warrant"
    },
    {
    "Symbol":"AVRO",
    "Name":"AVROBIO Inc."
    },
    {
    "Symbol":"AVT",
    "Name":"Avnet Inc."
    },
    {
    "Symbol":"AVTE",
    "Name":"Aerovate Therapeutics Inc."
    },
    {
    "Symbol":"AVTR",
    "Name":"Avantor Inc."
    },
    {
    "Symbol":"AVTR^A",
    "Name":"Avantor Inc. Series A Mandatory Convertible Preferred Stock"
    },
    {
    "Symbol":"AVTX",
    "Name":"Avalo Therapeutics Inc."
    },
    {
    "Symbol":"AVXL",
    "Name":"Anavex Life Sciences Corp."
    },
    {
    "Symbol":"AVY",
    "Name":"Avery Dennison Corporation"
    },
    {
    "Symbol":"AVYA",
    "Name":"Avaya Holdings Corp."
    },
    {
    "Symbol":"AWF",
    "Name":"Alliancebernstein Global High Income Fund"
    },
    {
    "Symbol":"AWH",
    "Name":"Aspira Women's Health Inc."
    },
    {
    "Symbol":"AWI",
    "Name":"Armstrong World Industries Inc"
    },
    {
    "Symbol":"AWK",
    "Name":"American Water Works Company Inc."
    },
    {
    "Symbol":"AWP",
    "Name":"Aberdeen Global Premier Properties Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"AWR",
    "Name":"American States Water Company"
    },
    {
    "Symbol":"AWRE",
    "Name":"Aware Inc."
    },
    {
    "Symbol":"AWX",
    "Name":"Avalon Holdings Corporation"
    },
    {
    "Symbol":"AX",
    "Name":"Axos Financial Inc."
    },
    {
    "Symbol":"AXDX",
    "Name":"Accelerate Diagnostics Inc."
    },
    {
    "Symbol":"AXGN",
    "Name":"Axogen Inc."
    },
    {
    "Symbol":"AXH",
    "Name":"Industrial Human Capital Inc."
    },
    {
    "Symbol":"AXL",
    "Name":"American Axle & Manufacturing Holdings Inc."
    },
    {
    "Symbol":"AXLA",
    "Name":"Axcella Health Inc."
    },
    {
    "Symbol":"AXNX",
    "Name":"Axonics Inc."
    },
    {
    "Symbol":"AXON",
    "Name":"Axon Enterprise Inc."
    },
    {
    "Symbol":"AXP",
    "Name":"American Express Company"
    },
    {
    "Symbol":"AXR",
    "Name":"AMREP Corporation"
    },
    {
    "Symbol":"AXS",
    "Name":"Axis Capital Holdings Limited"
    },
    {
    "Symbol":"AXS^E",
    "Name":"Axis Capital Holdings Limited Depositary Shares each representing 1/100th interest in a share of a 5.50% Series E Preferred Shares"
    },
    {
    "Symbol":"AXSM",
    "Name":"Axsome Therapeutics Inc."
    },
    {
    "Symbol":"AXTA",
    "Name":"Axalta Coating Systems Ltd. Common Shares"
    },
    {
    "Symbol":"AXTI",
    "Name":"AXT Inc"
    },
    {
    "Symbol":"AXU",
    "Name":"Alexco Resource Corp Common Shares (Canada)"
    },
    {
    "Symbol":"AY",
    "Name":"Atlantica Sustainable Infrastructure plc Ordinary Shares"
    },
    {
    "Symbol":"AYI",
    "Name":"Acuity Brands Inc."
    },
    {
    "Symbol":"AYLA",
    "Name":"Ayala Pharmaceuticals Inc."
    },
    {
    "Symbol":"AYRO",
    "Name":"AYRO Inc."
    },
    {
    "Symbol":"AYTU",
    "Name":"Aytu BioPharma Inc. "
    },
    {
    "Symbol":"AYX",
    "Name":"Alteryx Inc. Class A"
    },
    {
    "Symbol":"AZ",
    "Name":"A2Z Smart Technologies Corp. Common Shares"
    },
    {
    "Symbol":"AZEK",
    "Name":"The AZEK Company Inc. Class A"
    },
    {
    "Symbol":"AZN",
    "Name":"AstraZeneca PLC American Depositary Shares"
    },
    {
    "Symbol":"AZO",
    "Name":"AutoZone Inc."
    },
    {
    "Symbol":"AZPN",
    "Name":"Aspen Technology Inc."
    },
    {
    "Symbol":"AZRE",
    "Name":"Azure Power Global Limited Equity Shares"
    },
    {
    "Symbol":"AZTA",
    "Name":"Azenta Inc."
    },
    {
    "Symbol":"AZUL",
    "Name":"Azul S.A. American Depositary Shares (each representing three preferred shares)"
    },
    {
    "Symbol":"AZYO",
    "Name":"Aziyo Biologics Inc. Class A"
    },
    {
    "Symbol":"AZZ",
    "Name":"AZZ Inc."
    },
    {
    "Symbol":"B",
    "Name":"Barnes Group Inc."
    },
    {
    "Symbol":"BA",
    "Name":"Boeing Company (The)"
    },
    {
    "Symbol":"BABA",
    "Name":"Alibaba Group Holding Limited American Depositary Shares each representing eight Ordinary share"
    },
    {
    "Symbol":"BAC",
    "Name":"Bank of America Corporation"
    },
    {
    "Symbol":"BAC^B",
    "Name":"Bank of America Corporation Depositary Shares each representing a 1/1000th interest in a share of 6.000% Non-Cumulative Preferred Stock Series GG"
    },
    {
    "Symbol":"BAC^E",
    "Name":"Bank of America Corporation Depositary Sh repstg 1/1000th Perp Pfd Ser E"
    },
    {
    "Symbol":"BAC^K",
    "Name":"Bank of America Corporation Depositary Shares each representing a 1/1000th interest in a share of 5.875% Non- Cumulative Preferred Stock Series HH"
    },
    {
    "Symbol":"BAC^L",
    "Name":"Bank of America Corporation Non Cumulative Perpetual Conv Pfd Ser L"
    },
    {
    "Symbol":"BAC^M",
    "Name":"Bank of America Corporation Depositary Shares each representing a 1/1000th interest in a share of 5.375% Non-Cumulative Preferred Stock Series KK"
    },
    {
    "Symbol":"BAC^N",
    "Name":"Bank of America Corporation Depositary shares each representing 1/1000th interest in a share of 5.000% Non-Cumulative Preferred Stock Series LL"
    },
    {
    "Symbol":"BAC^O",
    "Name":"Bank of America Corporation Depositary shares each representing 1/1000th interest in a share of 4.375% Non-Cumulative Preferred Stock Series NN"
    },
    {
    "Symbol":"BAC^P",
    "Name":"Bank of America Corporation Depositary Shares each representing a 1/1000th interest in a share of 4.125% Non-Cumulative Preferred Stock Series PP"
    },
    {
    "Symbol":"BAC^Q",
    "Name":"Bank of America Corporation Depositary shares each representing 1/1000th interest in a share of 4.250% Non-Cumulative Preferred Stock Series QQ"
    },
    {
    "Symbol":"BACA",
    "Name":"Berenson Acquisition Corp. I Class A"
    },
    {
    "Symbol":"BAFN",
    "Name":"BayFirst Financial Corp."
    },
    {
    "Symbol":"BAH",
    "Name":"Booz Allen Hamilton Holding Corporation"
    },
    {
    "Symbol":"BAK",
    "Name":"Braskem SA ADR"
    },
    {
    "Symbol":"BALY",
    "Name":"Bally's Corporation"
    },
    {
    "Symbol":"BAM",
    "Name":"Brookfield Asset Management Inc."
    },
    {
    "Symbol":"BAMH",
    "Name":"Brookfield Finance Inc. 4.625% Subordinated Notes due October 16 2080"
    },
    {
    "Symbol":"BAMI",
    "Name":"Brookfield Finance Inc. 4.50% Perpetual Subordinated Notes"
    },
    {
    "Symbol":"BAMR",
    "Name":"Brookfield Asset Management Reinsurance Partners Ltd. Class A Exchangeable Limited Voting Shares"
    },
    {
    "Symbol":"BANC",
    "Name":"Banc of California Inc."
    },
    {
    "Symbol":"BANC^E",
    "Name":"Banc of California Inc. Depositary Shares Each Representing a 1/40th Interest in a Share of 7.000% Non-Cumulative Perpetual Preferred Stock Series E"
    },
    {
    "Symbol":"BAND",
    "Name":"Bandwidth Inc. Class A"
    },
    {
    "Symbol":"BANF",
    "Name":"BancFirst Corporation"
    },
    {
    "Symbol":"BANFP",
    "Name":"BancFirst Corporation - BFC Capital Trust II Cumulative Trust Preferred Securities"
    },
    {
    "Symbol":"BANR",
    "Name":"Banner Corporation"
    },
    {
    "Symbol":"BANX",
    "Name":"StoneCastle Financial Corp"
    },
    {
    "Symbol":"BAOS",
    "Name":"Baosheng Media Group Holdings Limited Ordinary shares"
    },
    {
    "Symbol":"BAP",
    "Name":"Credicorp Ltd."
    },
    {
    "Symbol":"BARK",
    "Name":"BARK Inc. Class A"
    },
    {
    "Symbol":"BASE",
    "Name":"Couchbase Inc."
    },
    {
    "Symbol":"BATL",
    "Name":"Battalion Oil Corporation"
    },
    {
    "Symbol":"BATRA",
    "Name":"Liberty Media Corporation Series A Liberty Braves"
    },
    {
    "Symbol":"BATRK",
    "Name":"Liberty Media Corporation Series C Liberty Braves"
    },
    {
    "Symbol":"BAX",
    "Name":"Baxter International Inc."
    },
    {
    "Symbol":"BB",
    "Name":"BlackBerry Limited"
    },
    {
   "Symbol":"BBAI",
   "Name":"BigBear.ai Inc."
    },
    {
    "Symbol":"BBAR",
    "Name":"Banco BBVA Argentina S.A. ADS"
    },
    {
    "Symbol":"BBBY",
    "Name":"Bed Bath & Beyond Inc."
    },
    {
    "Symbol":"BBCP",
    "Name":"Concrete Pumping Holdings Inc."
    },
    {
    "Symbol":"BBD",
    "Name":"Banco Bradesco Sa American Depositary Shares"
    },
    {
    "Symbol":"BBDC",
    "Name":"Barings BDC Inc."
    },
    {
    "Symbol":"BBDO",
    "Name":"Banco Bradesco Sa American Depositary Shares (each representing one Common Share)"
    },
    {
    "Symbol":"BBGI",
    "Name":"Beasley Broadcast Group Inc. Class A"
    },
    {
    "Symbol":"BBI",
    "Name":"Brickell Biotech Inc."
    },
    {
    "Symbol":"BBIG",
    "Name":"Vinco Ventures Inc."
    },
    {
    "Symbol":"BBIO",
    "Name":"BridgeBio Pharma Inc."
    },
    {
    "Symbol":"BBL",
    "Name":"BHP Group PlcSponsored ADR"
    },
    {
    "Symbol":"BBLG",
    "Name":"Bone Biologics Corp"
    },
    {
    "Symbol":"BBLGW",
    "Name":"Bone Biologics Corp Warrants"
    },
    {
    "Symbol":"BBLN",
    "Name":"Babylon Holdings Limited Class A Ordinary Shares"
    },
    {
    "Symbol":"BBN",
    "Name":"BlackRock Taxable Municipal Bond Trust Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"BBQ",
    "Name":"BBQ Holdings Inc."
    },
    {
    "Symbol":"BBSI",
    "Name":"Barrett Business Services Inc."
    },
    {
    "Symbol":"BBU",
    "Name":"Brookfield Business Partners L.P. Limited Partnership Units"
    },
    {
    "Symbol":"BBVA",
    "Name":"Banco Bilbao Vizcaya Argentaria S.A."
    },
    {
    "Symbol":"BBW",
    "Name":"Build-A-Bear Workshop Inc."
    },
    {
    "Symbol":"BBWI",
    "Name":"Bath & Body Works Inc."
    },
    {
    "Symbol":"BBY",
    "Name":"Best Buy Co. Inc."
    },
    {
    "Symbol":"BC",
    "Name":"Brunswick Corporation"
    },
    {
    "Symbol":"BC^A",
    "Name":"Brunswick Corporation 6.500% Senior Notes due 2048"
    },
    {
    "Symbol":"BC^B",
    "Name":"Brunswick Corporation 6.625% Senior Notes due 2049"
    },
    {
    "Symbol":"BC^C",
    "Name":"Brunswick Corporation 6.375% Notes due 2049"
    },
    {
    "Symbol":"BCAB",
    "Name":"BioAtla Inc."
    },
    {
    "Symbol":"BCAC",
    "Name":"Brookline Capital Acquisition Corp."
    },
    {
    "Symbol":"BCACU",
    "Name":"Brookline Capital Acquisition Corp. Units"
    },
    {
    "Symbol":"BCACW",
    "Name":"Brookline Capital Acquisition Corp. Warrant"
    },
    {
    "Symbol":"BCAT",
    "Name":"BlackRock Capital Allocation Trust Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"BCBP",
    "Name":"BCB Bancorp Inc. (NJ)"
    },
    {
    "Symbol":"BCC",
    "Name":"Boise Cascade L.L.C."
    },
    {
    "Symbol":"BCDA",
    "Name":"BioCardia Inc."
    },
    {
    "Symbol":"BCDAW",
    "Name":"BioCardia Inc. Warrant"
    },
    {
    "Symbol":"BCE",
    "Name":"BCE Inc."
    },
    {
    "Symbol":"BCEL",
    "Name":"Atreca Inc. Class A"
    },
    {
    "Symbol":"BCH",
    "Name":"Banco De Chile Banco De Chile ADS"
    },
    {
    "Symbol":"BCLI",
    "Name":"Brainstorm Cell Therapeutics Inc."
    },
    {
    "Symbol":"BCML",
    "Name":"BayCom Corp"
    },
    {
    "Symbol":"BCO",
    "Name":"Brinks Company (The)"
    },
    {
    "Symbol":"BCOR",
    "Name":"Blucora Inc."
    },
    {
    "Symbol":"BCOV",
    "Name":"Brightcove Inc."
    },
    {
    "Symbol":"BCOW",
    "Name":"1895 Bancorp of Wisconsin Inc. (MD)"
    },
    {
    "Symbol":"BCPC",
    "Name":"Balchem Corporation"
    },
    {
    "Symbol":"BCRX",
    "Name":"BioCryst Pharmaceuticals Inc."
    },
    {
    "Symbol":"BCS",
    "Name":"Barclays PLC"
    },
    {
    "Symbol":"BCSA",
    "Name":"Blockchain Coinvestors Acquisition Corp. I Class A Ordinary Shares"
    },
    {
    "Symbol":"BCSAU",
    "Name":"Blockchain Coinvestors Acquisition Corp. I Unit"
    },
    {
    "Symbol":"BCSAW",
    "Name":"Blockchain Coinvestors Acquisition Corp. I Warrant"
    },
    {
    "Symbol":"BCSF",
    "Name":"Bain Capital Specialty Finance Inc."
    },
    {
    "Symbol":"BCTX",
    "Name":"BriaCell Therapeutics Corp. Common Shares"
    },
    {
    "Symbol":"BCTXW",
    "Name":"BriaCell Therapeutics Corp. Warrant"
    },
    {
    "Symbol":"BCV",
    "Name":"Bancroft Fund Ltd."
    },
    {
    "Symbol":"BCV^A",
    "Name":"Bancroft Fund Limited 5.375% Series A Cumulative Preferred Shares"
    },
    {
    "Symbol":"BCX",
    "Name":"BlackRock Resources Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"BCYC",
    "Name":"Bicycle Therapeutics plc American Depositary Shares"
    },
    {
    "Symbol":"BDC",
    "Name":"Belden Inc"
    },
    {
    "Symbol":"BDJ",
    "Name":"Blackrock Enhanced Equity Dividend Trust"
    },
    {
    "Symbol":"BDL",
    "Name":"Flanigan's Enterprises Inc."
    },
    {
    "Symbol":"BDN",
    "Name":"Brandywine Realty Trust"
    },
    {
    "Symbol":"BDR",
    "Name":"Blonder Tongue Laboratories Inc."
    },
    {
    "Symbol":"BDSI",
    "Name":"BioDelivery Sciences International Inc."
    },
    {
    "Symbol":"BDSX",
    "Name":"Biodesix Inc."
    },
    {
    "Symbol":"BDTX",
    "Name":"Black Diamond Therapeutics Inc."
    },
    {
    "Symbol":"BDX",
    "Name":"Becton Dickinson and Company"
    },
    {
    "Symbol":"BDXB",
    "Name":"Becton Dickinson and Company Depositary Shares each Representing a 1/20th Interest in a Share of 6.00% Mandatory Convertible Preferred Stock Series B"
    },
    {
    "Symbol":"BE",
    "Name":"Bloom Energy Corporation Class A"
    },
    {
    "Symbol":"BEAM",
    "Name":"Beam Therapeutics Inc."
    },
    {
    "Symbol":"BEAT",
    "Name":"Heartbeam Inc."
    },
    {
    "Symbol":"BEATW",
    "Name":"Heartbeam Inc. Warrant"
    },
    {
    "Symbol":"BECN",
    "Name":"Beacon Roofing Supply Inc."
    },
    {
    "Symbol":"BEDU",
    "Name":"Bright Scholar Education Holdings Limited American Depositary Shares each  representing one Class A Ordinary Share"
    },
    {
    "Symbol":"BEEM",
    "Name":"Beam Global"
    },
    {
    "Symbol":"BEEMW",
    "Name":"Beam Global Warrant"
    },
    {
    "Symbol":"BEKE",
    "Name":"KE Holdings Inc American Depositary Shares (each representing three Class A Ordinary Shares)"
    },
    {
    "Symbol":"BELFA",
    "Name":"Bel Fuse Inc. Class A"
    },
    {
    "Symbol":"BELFB",
    "Name":"Bel Fuse Inc. Class B"
    },
    {
    "Symbol":"BEN",
    "Name":"Franklin Resources Inc."
    },
    {
    "Symbol":"BENE",
    "Name":"Benessere Capital Acquisition Corp. Class A"
    },
    {
    "Symbol":"BENER",
    "Name":"Benessere Capital Acquisition Corp. Right"
    },
    {
    "Symbol":"BENEU",
    "Name":"Benessere Capital Acquisition Corp. Unit"
    },
    {
    "Symbol":"BENEW",
    "Name":"Benessere Capital Acquisition Corp. Warrant"
    },
    {
    "Symbol":"BEP",
    "Name":"Brookfield Renewable Partners L.P."
    },
    {
    "Symbol":"BEP^A",
    "Name":"Brookfield Renewable Partners L.P. 5.25% Class A Preferred Limited Partnership Units Series 17"
    },
    {
    "Symbol":"BEPC",
    "Name":"Brookfield Renewable Corporation Class A Subordinate Voting Shares"
    },
    {
    "Symbol":"BEPH",
    "Name":"Brookfield BRP Holdings (Canada) Inc. 4.625% Perpetual Subordinated Notes"
    },
    {
    "Symbol":"BEPI",
    "Name":"Brookfield BRP Holdings (Canada) Inc. 4.875% Perpetual Subordinated Notes"
    },
    {
    "Symbol":"BERY",
    "Name":"Berry Global Group Inc."
    },
    {
    "Symbol":"BEST",
    "Name":"BEST Inc. American Depositary Shares each representing one Class A Ordinary Share"
    },
    {
    "Symbol":"BF/A",
    "Name":"Brown Forman Corporation"
    },
    {
    "Symbol":"BF/B",
    "Name":"Brown Forman Corporation"
    },
    {
    "Symbol":"BFAM",
    "Name":"Bright Horizons Family Solutions Inc."
    },
    {
    "Symbol":"BFC",
    "Name":"Bank First Corporation"
    },
    {
    "Symbol":"BFI",
    "Name":"BurgerFi International Inc."
    },
    {
    "Symbol":"BFIIW",
    "Name":"BurgerFi International Inc. Warrant"
    },
    {
    "Symbol":"BFIN",
    "Name":"BankFinancial Corporation"
    },
    {
    "Symbol":"BFK",
    "Name":"BlackRock Municipal Income Trust"
    },
    {
    "Symbol":"BFLY",
    "Name":"Butterfly Network Inc. Class A"
    },
    {
    "Symbol":"BFRA",
    "Name":"Biofrontera AG American Depositary Shares"
    },
    {
    "Symbol":"BFRI",
    "Name":"Biofrontera Inc."
    },
    {
    "Symbol":"BFRIW",
    "Name":"Biofrontera Inc. Warrants"
    },
    {
    "Symbol":"BFS",
    "Name":"Saul Centers Inc."
    },
    {
    "Symbol":"BFS^D",
    "Name":"Saul Centers Inc. Depositary Shares each representing 1/100th of a share of 6.125% Series D Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"BFS^E",
    "Name":"Saul Centers Inc. Depositary shares each representing a 1/100th fractional interest in a share of 6.000% Series E Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"BFST",
    "Name":"Business First Bancshares Inc."
    },
    {
    "Symbol":"BFZ",
    "Name":"BlackRock California Municipal Income Trust"
    },
    {
    "Symbol":"BG",
    "Name":"Bunge Limited Bunge Limited"
    },
    {
    "Symbol":"BGB",
    "Name":"Blackstone Strategic Credit Fund Common Shares"
    },
    {
    "Symbol":"BGCP",
    "Name":"BGC Partners Inc Class A"
    },
    {
    "Symbol":"BGFV",
    "Name":"Big 5 Sporting Goods Corporation"
    },
    {
    "Symbol":"BGH",
    "Name":"Barings Global Short Duration High Yield Fund Common Shares of Beneficial Interests"
    },
    {
    "Symbol":"BGI",
    "Name":"Birks Group Inc."
    },
    {
    "Symbol":"BGNE",
    "Name":"BeiGene Ltd. American Depositary Shares"
    },
    {
    "Symbol":"BGR",
    "Name":"BlackRock Energy and Resources Trust"
    },
    {
    "Symbol":"BGRY",
    "Name":"Berkshire Grey Inc. Class A"
    },
    {
    "Symbol":"BGRYW",
    "Name":"Berkshire Grey Inc. Warrant"
    },
    {
    "Symbol":"BGS",
    "Name":"B&G Foods Inc. B&G Foods Inc."
    },
    {
    "Symbol":"BGSF",
    "Name":"BGSF Inc."
    },
    {
    "Symbol":"BGSX",
    "Name":"Build Acquisition Corp. Class A"
    },
    {
    "Symbol":"BGT",
    "Name":"BlackRock Floating Rate Income Trust"
    },
    {
    "Symbol":"BGX",
    "Name":"Blackstone Long Short Credit Income Fund Common Shares"
    },
    {
    "Symbol":"BGY",
    "Name":"Blackrock Enhanced International Dividend Trust"
    },
    {
    "Symbol":"BH",
    "Name":"Biglari Holdings Inc. Class B"
    },
    {
    "Symbol":"BHAC",
    "Name":"Crixus BH3 Acquisition Company Class A"
    },
    {
    "Symbol":"BHACU",
    "Name":"Crixus BH3 Acquisition Company Units"
    },
    {
    "Symbol":"BHACW",
    "Name":"Crixus BH3 Acquisition Company Warrants"
    },
    {
    "Symbol":"BHAT",
    "Name":"Blue Hat Interactive Entertainment Technology Ordinary Shares"
    },
    {
    "Symbol":"BHB",
    "Name":"Bar Harbor Bankshares Inc."
    },
    {
    "Symbol":"BHC",
    "Name":"Bausch Health Companies Inc."
    },
    {
    "Symbol":"BHE",
    "Name":"Benchmark Electronics Inc."
    },
    {
    "Symbol":"BHF",
    "Name":"Brighthouse Financial Inc."
    },
    {
    "Symbol":"BHFAL",
    "Name":"Brighthouse Financial Inc. 6.25% Junior Subordinated Debentures due 2058"
    },
    {
    "Symbol":"BHFAM",
    "Name":"Brighthouse Financial Inc. Depositary shares each representing a 1/1000th Interest in a Share of 4.625% Non-Cumulative Preferred Stock Series D"
    },
    {
    "Symbol":"BHFAN",
    "Name":"Brighthouse Financial Inc. Depositary shares each representing a 1/1000th interest in a share of 5.375% Non-Cumulative Preferred Stock Series C"
    },
    {
    "Symbol":"BHFAO",
    "Name":"Brighthouse Financial Inc. Depositary Shares 6.75% Non-Cumulative Preferred Stock Series B"
    },
    {
    "Symbol":"BHFAP",
    "Name":"Brighthouse Financial Inc. Depositary Shares 6.6% Non-Cumulative Preferred Stock Series A"
    },
    {
    "Symbol":"BHG",
    "Name":"Bright Health Group Inc."
    },
    {
    "Symbol":"BHIL",
    "Name":"Benson Hill Inc."
    },
    {
    "Symbol":"BHK",
    "Name":"Blackrock Core Bond Trust Blackrock Core Bond Trust"
    },
    {
    "Symbol":"BHLB",
    "Name":"Berkshire Hills Bancorp Inc."
    },
    {
    "Symbol":"BHP",
    "Name":"BHP Group Limited American Depositary Shares (Each representing two Ordinary Shares)"
    },
    {
    "Symbol":"BHR",
    "Name":"Braemar Hotels & Resorts Inc."
    },
    {
    "Symbol":"BHR^B",
    "Name":"Braemar Hotels & Resorts Inc. 5.50% Series B Cumulative Convertible Preferred Stock par value $0.01 per share"
    },
    {
    "Symbol":"BHR^D",
    "Name":"Braemar Hotels & Resorts Inc. 8.25% Series D Cumulative Preferred Stock  par value $0.01 per share"
    },
    {
    "Symbol":"BHSE",
    "Name":"Bull Horn Holdings Corp. Ordinary Shares"
    },
    {
    "Symbol":"BHSEU",
    "Name":"Bull Horn Holdings Corp. Unit"
    },
    {
    "Symbol":"BHSEW",
    "Name":"Bull Horn Holdings Corp. Warrants"
    },
    {
    "Symbol":"BHV",
    "Name":"BlackRock Virginia Municipal Bond Trust"
    },
    {
    "Symbol":"BHVN",
    "Name":"Biohaven Pharmaceutical Holding Company Ltd. Common Shares"
    },
    {
    "Symbol":"BIDU",
    "Name":"Baidu Inc. ADS"
    },
    {
    "Symbol":"BIF",
    "Name":"Boulder Growth & Income Fund Inc."
    },
    {
    "Symbol":"BIG",
    "Name":"Big Lots Inc."
    },
    {
    "Symbol":"BIGC",
    "Name":"BigCommerce Holdings Inc. Series 1"
    },
    {
    "Symbol":"BIGZ",
    "Name":"BlackRock Innovation and Growth Trust Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"BIIB",
    "Name":"Biogen Inc."
    },
    {
    "Symbol":"BILI",
    "Name":"Bilibili Inc. American Depositary Shares"
    },
    {
    "Symbol":"BILL",
    "Name":"Bill.com Holdings Inc."
    },
    {
    "Symbol":"BIMI",
    "Name":"BIMI International Medical Inc."
    },
    {
    "Symbol":"BIO",
    "Name":"Bio-Rad Laboratories Inc. Class A"
    },
    {
    "Symbol":"BIO/B",
    "Name":"Bio-Rad Laboratories Inc."
    },
    {
    "Symbol":"BIOC",
    "Name":"Biocept Inc."
    },
    {
    "Symbol":"BIOL",
    "Name":"Biolase Inc."
    },
    {
    "Symbol":"BIOSU",
    "Name":"BioPlus Acquisition Corp. Unit"
    },
    {
    "Symbol":"BIOSW",
    "Name":"BioPlus Acquisition Corp. Warrants"
    },
    {
    "Symbol":"BIOT",
    "Name":"Biotech Acquisition Company Class A Ordinary Shares"
    },
    {
    "Symbol":"BIOTU",
    "Name":"Biotech Acquisition Company Unit"
    },
    {
    "Symbol":"BIOTW",
    "Name":"Biotech Acquisition Company Warrant"
    },
    {
    "Symbol":"BIOX",
    "Name":"Bioceres Crop Solutions Corp. Ordinary Shares"
    },
    {
    "Symbol":"BIP",
    "Name":"Brookfield Infrastructure Partners LP Limited Partnership Units"
    },
    {
    "Symbol":"BIP^A",
    "Name":"Brookfield Infrastructure Partners LP 5.125% Class A Preferred Limited Partnership Units Series 13"
    },
    {
    "Symbol":"BIP^B",
    "Name":"Brookfield Infrastructure Partners LP 5.000% Class A Preferred Limited Partnership Units Series 14"
    },
    {
    "Symbol":"BIPC",
    "Name":"Brookfield Infrastructure Partners LP Class A Subordinate Voting Shares"
    },
    {
    "Symbol":"BIPH",
    "Name":"Brookfield Infrastructure Corporation 5.000% Subordinated Notes due 2081"
    },
    {
    "Symbol":"BIPI",
    "Name":"BIP Bermuda Holdings I Limited"
    },
    {
    "Symbol":"BIRD",
    "Name":"Allbirds Inc. Class A"
    },
    {
    "Symbol":"BIT",
    "Name":"BlackRock Multi-Sector Income Trust Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"BITE",
    "Name":"Bite Acquisition Corp."
    },
    {
    "Symbol":"BITF",
    "Name":"Bitfarms Ltd."
    },
    {
    "Symbol":"BIVI",
    "Name":"BioVie Inc. Class A"
    },
    {
    "Symbol":"BJ",
    "Name":"BJ's Wholesale Club Holdings Inc."
    },
    {
    "Symbol":"BJDX",
    "Name":"Bluejay Diagnostics Inc."
    },
    {
    "Symbol":"BJRI",
    "Name":"BJ's Restaurants Inc."
    },
    {
    "Symbol":"BK",
    "Name":"The Bank of New York Mellon Corporation"
    },
    {
    "Symbol":"BKCC",
    "Name":"BlackRock Capital Investment Corporation"
    },
    {
    "Symbol":"BKD",
    "Name":"Brookdale Senior Living Inc."
    },
    {
    "Symbol":"BKE",
    "Name":"Buckle Inc. (The)"
    },
    {
    "Symbol":"BKEP",
    "Name":"Blueknight Energy Partners L.P. Common Units"
    },
    {
    "Symbol":"BKEPP",
    "Name":"Blueknight Energy Partners L.P. Series A Preferred Units"
    },
    {
    "Symbol":"BKH",
    "Name":"Black Hills Corporation"
    },
    {
    "Symbol":"BKI",
    "Name":"Black Knight Inc."
    },
    {
    "Symbol":"BKKT",
    "Name":"Bakkt Holdings Inc. Class A"
    },
    {
    "Symbol":"BKN",
    "Name":"BlackRock Investment Quality Municipal Trust Inc. (The)"
    },
    {
    "Symbol":"BKNG",
    "Name":"Booking Holdings Inc."
    },
    {
    "Symbol":"BKR",
    "Name":"Baker Hughes Company Class A"
    },
    {
    "Symbol":"BKSC",
    "Name":"Bank of South Carolina Corp."
    },
    {
    "Symbol":"BKSY",
    "Name":"BlackSky Technology Inc. Class A"
    },
    {
    "Symbol":"BKT",
    "Name":"BlackRock Income Trust Inc. (The)"
    },
    {
    "Symbol":"BKTI",
    "Name":"BK Technologies Corporation"
    },
    {
    "Symbol":"BKU",
    "Name":"BankUnited Inc."
    },
    {
    "Symbol":"BKYI",
    "Name":"BIO-key International Inc."
    },
    {
    "Symbol":"BL",
    "Name":"BlackLine Inc."
    },
    {
    "Symbol":"BLBD",
    "Name":"Blue Bird Corporation"
    },
    {
    "Symbol":"BLBX",
    "Name":"Blackboxstocks Inc."
    },
    {
    "Symbol":"BLCM",
    "Name":"Bellicum Pharmaceuticals Inc."
    },
    {
    "Symbol":"BLCT",
    "Name":"BlueCity Holdings Limited American Depositary Shares"
    },
    {
    "Symbol":"BLD",
    "Name":"TopBuild Corp."
    },
    {
    "Symbol":"BLDE",
    "Name":"Blade Air Mobility Inc. Class A"
    },
    {
    "Symbol":"BLDEW",
    "Name":"Blade Air Mobility Inc. Warrants"
    },
    {
    "Symbol":"BLDP",
    "Name":"Ballard Power Systems Inc. Common Shares"
    },
    {
    "Symbol":"BLDR",
    "Name":"Builders FirstSource Inc."
    },
    {
    "Symbol":"BLE",
    "Name":"BlackRock Municipal Income Trust II"
    },
    {
    "Symbol":"BLEU",
    "Name":"bleuacacia ltd Class A Ordinary Shares"
    },
    {
    "Symbol":"BLEUR",
    "Name":"bleuacacia ltd Rights"
    },
    {
    "Symbol":"BLEUU",
    "Name":"bleuacacia ltd Unit"
    },
    {
    "Symbol":"BLEUW",
    "Name":"bleuacacia ltd Warrants"
    },
    {
    "Symbol":"BLFS",
    "Name":"BioLife Solutions Inc."
    },
    {
    "Symbol":"BLFY",
    "Name":"Blue Foundry Bancorp"
    },
    {
    "Symbol":"BLI",
    "Name":"Berkeley Lights Inc."
    },
    {
    "Symbol":"BLIN",
    "Name":"Bridgeline Digital Inc."
    },
    {
    "Symbol":"BLK",
    "Name":"BlackRock Inc."
    },
    {
    "Symbol":"BLKB",
    "Name":"Blackbaud Inc."
    },
    {
    "Symbol":"BLL",
    "Name":"Ball Corporation"
    },
    {
    "Symbol":"BLMN",
    "Name":"Bloomin' Brands Inc."
    },
    {
    "Symbol":"BLND",
    "Name":"Blend Labs Inc. Class A"
    },
    {
    "Symbol":"BLNG",
    "Name":"Belong Acquisition Corp. Class A"
    },
    {
    "Symbol":"BLNK",
    "Name":"Blink Charging Co."
    },
    {
    "Symbol":"BLNKW",
    "Name":"Blink Charging Co. Warrant"
    },
    {
    "Symbol":"BLPH",
    "Name":"Bellerophon Therapeutics Inc."
    },
    {
    "Symbol":"BLRX",
    "Name":"BioLineRx Ltd. American Depositary Shares"
    },
    {
    "Symbol":"BLSA",
    "Name":"BCLS Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"BLTS",
    "Name":"Bright Lights Acquisition Corp. Class A"
    },
    {
    "Symbol":"BLTSU",
    "Name":"Bright Lights Acquisition Corp. Unit"
    },
    {
    "Symbol":"BLTSW",
    "Name":"Bright Lights Acquisition Corp. Warrant"
    },
    {
    "Symbol":"BLU",
    "Name":"BELLUS Health Inc. Common Shares"
    },
    {
    "Symbol":"BLUA",
    "Name":"BlueRiver Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"BLUE",
    "Name":"bluebird bio Inc."
    },
    {
    "Symbol":"BLW",
    "Name":"Blackrock Limited Duration Income Trust"
    },
    {
    "Symbol":"BLX",
    "Name":"Banco Latinoamericano de Comercio Exterior S.A."
    },
    {
    "Symbol":"BLZE",
    "Name":"Backblaze Inc. Class A"
    },
    {
    "Symbol":"BMA",
    "Name":"Banco Macro S.A.  ADR (representing Ten Class B Common Shares)"
    },
    {
    "Symbol":"BMAC",
    "Name":"Black Mountain Acquisition Corp. Class A"
    },
    {
    "Symbol":"BMAQ",
    "Name":"Blockchain Moon Acquisition Corp."
    },
    {
    "Symbol":"BMAQR",
    "Name":"Blockchain Moon Acquisition Corp. Rights"
    },
    {
    "Symbol":"BMAQU",
    "Name":"Blockchain Moon Acquisition Corp. Units"
    },
    {
    "Symbol":"BMAQW",
    "Name":"Blockchain Moon Acquisition Corp. Warrants"
    },
    {
    "Symbol":"BMBL",
    "Name":"Bumble Inc. Class A"
    },
    {
    "Symbol":"BME",
    "Name":"Blackrock Health Sciences Trust"
    },
    {
    "Symbol":"BMEA",
    "Name":"Biomea Fusion Inc."
    },
    {
    "Symbol":"BMEZ",
    "Name":"BlackRock Health Sciences Trust II Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"BMI",
    "Name":"Badger Meter Inc."
    },
    {
    "Symbol":"BML^G",
    "Name":"Bank of America Corporation Bank of America Corporation Depositary Shares (Each representing a 1/1200th interest in a share of Floating Rate Non-Cumulative Preferred Stock  Series 1)"
    },
    {
    "Symbol":"BML^H",
    "Name":"Bank of America Corporation Bank of America Corporation Depositary Shares (Each representing a 1/1200th interest in a Share of Floating Rate Non-Cumulative Preferred Stock Series 2)"
    },
    {
    "Symbol":"BML^J",
    "Name":"Bank of America Corporation Bank of America Corporation Depositary Shares (Each representing a 1/1200th interest in a Share of Floating Rate Non-Cumulative Preferred Stock Series 4)"
    },
    {
    "Symbol":"BML^L",
    "Name":"Bank of America Corporation Bank of America Corporation Depositary Shares (Each representing a 1/1200th Interest in a Share of Floating Rate Non-Cumulative Preferred Stock Series 5)"
    },
    {
    "Symbol":"BMO",
    "Name":"Bank Of Montreal"
    },
    {
    "Symbol":"BMRA",
    "Name":"Biomerica Inc."
    },
    {
    "Symbol":"BMRC",
    "Name":"Bank of Marin Bancorp"
    },
    {
    "Symbol":"BMRN",
    "Name":"BioMarin Pharmaceutical Inc."
    },
    {
    "Symbol":"BMTX",
    "Name":"BM Technologies Inc."
    },
    {
    "Symbol":"BMY",
    "Name":"Bristol-Myers Squibb Company"
    },
    {
    "Symbol":"BNED",
    "Name":"Barnes & Noble Education Inc"
    },
    {
    "Symbol":"BNFT",
    "Name":"Benefitfocus Inc."
    },
    {
    "Symbol":"BNGO",
    "Name":"Bionano Genomics Inc."
    },
    {
    "Symbol":"BNGOW",
    "Name":"Bionano Genomics Inc. Warrant"
    },
    {
    "Symbol":"BNIX",
    "Name":"Bannix Acquisition Corp."
    },
    {
    "Symbol":"BNIXR",
    "Name":"Bannix Acquisition Corp. Right"
    },
    {
    "Symbol":"BNIXW",
    "Name":"Bannix Acquisition Corp. Warrant"
    },
    {
    "Symbol":"BNL",
    "Name":"Broadstone Net Lease Inc."
    },
    {
    "Symbol":"BNNR",
    "Name":"Banner Acquisition Corp. Class A"
    },
    {
    "Symbol":"BNNRU",
    "Name":"Banner Acquisition Corp. Units"
    },
    {
    "Symbol":"BNNRW",
    "Name":"Banner Acquisition Corp. Warrants"
    },
    {
    "Symbol":"BNOX",
    "Name":"Bionomics Limited American Depository Shares"
    },
    {
    "Symbol":"BNR",
    "Name":"Burning Rock Biotech Limited American Depositary Shares"
    },
    {
    "Symbol":"BNS",
    "Name":"Bank Nova Scotia Halifax Pfd 3 Ordinary Shares"
    },
    {
    "Symbol":"BNSO",
    "Name":"Bonso Electronics International Inc."
    },
    {
    "Symbol":"BNTC",
    "Name":"Benitec Biopharma Inc."
    },
    {
    "Symbol":"BNTX",
    "Name":"BioNTech SE American Depositary Share"
    },
    {
    "Symbol":"BNY",
    "Name":"BlackRock New York Municipal Income Trust"
    },
    {
    "Symbol":"BOAC",
    "Name":"Bluescape Opportunities Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"BOAS",
    "Name":"BOA Acquisition Corp. Class A"
    },
    {
    "Symbol":"BOCNU",
    "Name":"Blue Ocean Acquisition Corp Unit"
    },
    {
    "Symbol":"BODY",
    "Name":"The Beachbody Company Inc. Class A"
    },
    {
    "Symbol":"BOE",
    "Name":"Blackrock Enhanced Global Dividend Trust Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"BOH",
    "Name":"Bank of Hawaii Corporation"
    },
    {
    "Symbol":"BOH^A",
    "Name":"Bank of Hawaii Corporation Depositary Shares Each Representing a 1/40th Interest in a Share of 4.375% Fixed Rate Non-Cumulative Perpetual Preferred Stock Series A"
    },
    {
    "Symbol":"BOKF",
    "Name":"BOK Financial Corporation"
    },
    {
    "Symbol":"BOLT",
    "Name":"Bolt Biotherapeutics Inc."
    },
    {
    "Symbol":"BOMN",
    "Name":"Boston Omaha Corporation Class A"
    },
    {
    "Symbol":"BON",
    "Name":"Bon Natural Life Limited Ordinary Shares"
    },
    {
    "Symbol":"BOOM",
    "Name":"DMC Global Inc."
    },
    {
    "Symbol":"BOOT",
    "Name":"Boot Barn Holdings Inc."
    },
    {
    "Symbol":"BORR",
    "Name":"Borr Drilling Limited Common Shares"
    },
    {
    "Symbol":"BOSC",
    "Name":"B.O.S. Better Online Solutions"
    },
    {
    "Symbol":"BOTJ",
    "Name":"Bank of the James Financial Group Inc."
    },
    {
    "Symbol":"BOWL",
    "Name":"Bowlero Corp. Class A"
    },
    {
    "Symbol":"BOX",
    "Name":"Box Inc. Class A"
    },
    {
    "Symbol":"BOXD",
    "Name":"Boxed Inc."
    },
    {
    "Symbol":"BOXL",
    "Name":"Boxlight Corporation Class A"
    },
    {
    "Symbol":"BP",
    "Name":"BP p.l.c."
    },
    {
    "Symbol":"BPAC",
    "Name":"Bullpen Parlay Acquisition Company Class A Ordinary Share"
    },
    {
    "Symbol":"BPACU",
    "Name":"Bullpen Parlay Acquisition Company Unit"
    },
    {
    "Symbol":"BPACW",
    "Name":"Bullpen Parlay Acquisition Company Warrant"
    },
    {
    "Symbol":"BPMC",
    "Name":"Blueprint Medicines Corporation"
    },
    {
    "Symbol":"BPMP",
    "Name":"BP Midstream Partners LP Common Units representing Limited Partner Interests"
    },
    {
    "Symbol":"BPOP",
    "Name":"Popular Inc."
    },
    {
    "Symbol":"BPOPM",
    "Name":"Popular Inc. Popular Capital Trust II - 6.125% Cumulative Monthly Income Trust Preferred Securities"
    },
    {
    "Symbol":"BPRN",
    "Name":"The Bank of Princeton"
    },
    {
    "Symbol":"BPT",
    "Name":"BP Prudhoe Bay Royalty Trust"
    },
    {
    "Symbol":"BPTH",
    "Name":"Bio-Path Holdings Inc."
    },
    {
    "Symbol":"BPTS",
    "Name":"Biophytis SA American Depositary Share"
    },
    {
    "Symbol":"BPYPM",
    "Name":"Brookfield Property Partners L.P. 6.25% Class A Cumulative Redeemable Preferred Units Series 1"
    },
    {
    "Symbol":"BPYPN",
    "Name":"Brookfield Property Partners L.P. 5.750% Class A Cumulative Redeemable Perpetual Preferred Units Series 3"
    },
    {
    "Symbol":"BPYPO",
    "Name":"Brookfield Property Partners L.P. 6.375% Class A Cumulative Redeemable Perpetual Preferred Units Series 2"
    },
    {
    "Symbol":"BPYPP",
    "Name":"Brookfield Property Partners L.P. 6.50% Class A Cumulative Redeemable Perpetual Preferred Units"
    },
    {
    "Symbol":"BQ",
    "Name":"Boqii Holding Limited American Depositary Shares representing Class A Ordinary Shares"
    },
    {
    "Symbol":"BR",
    "Name":"Broadridge Financial Solutions Inc."
    },
    {
    "Symbol":"BRACU",
    "Name":"Broad Capital Acquisition Corp Unit"
    },
    {
    "Symbol":"BRAG",
    "Name":"Bragg Gaming Group Inc. Common Shares"
    },
    {
    "Symbol":"BRBR",
    "Name":"BellRing Brands Inc. Class A"
    },
    {
    "Symbol":"BRBS",
    "Name":"Blue Ridge Bankshares Inc."
    },
    {
    "Symbol":"BRC",
    "Name":"Brady Corporation"
    },
    {
    "Symbol":"BRCN",
    "Name":"Burcon NutraScience Corp."
    },
    {
    "Symbol":"BRD",
    "Name":"Beard Energy Transition Acquisition Corp. Class A"
    },
    {
    "Symbol":"BRDG",
    "Name":"Bridge Investment Group Holdings Inc. Class A"
    },
    {
    "Symbol":"BRDS",
    "Name":"Bird Global Inc. Class A"
    },
    {
    "Symbol":"BREZ",
    "Name":"Breeze Holdings Acquisition Corp."
    },
    {
    "Symbol":"BREZR",
    "Name":"Breeze Holdings Acquisition Corp. Right"
    },
    {
    "Symbol":"BREZW",
    "Name":"Breeze Holdings Acquisition Corp. Warrant"
    },
    {
    "Symbol":"BRFH",
    "Name":"Barfresh Food Group Inc."
    },
    {
    "Symbol":"BRFS",
    "Name":"BRF S.A."
    },
    {
    "Symbol":"BRG",
    "Name":"Bluerock Residential Growth REIT Inc. Class A"
    },
    {
    "Symbol":"BRG^C",
    "Name":"Bluerock Residential Growth REIT Inc. 7.625% Series C Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"BRG^D",
    "Name":"Bluerock Residential Growth REIT Inc. 7.125% Series D Cumulative Preferred Stock ($0.01 par value per share)"
    },
    {
    "Symbol":"BRID",
    "Name":"Bridgford Foods Corporation"
    },
    {
    "Symbol":"BRIV",
    "Name":"B. Riley Principal 250 Merger Corp. Class A"
    },
    {
    "Symbol":"BRIVU",
    "Name":"B. Riley Principal 250 Merger Corp. Units"
    },
    {
    "Symbol":"BRIVW",
    "Name":"B. Riley Principal 250 Merger Corp. Warrant"
    },
    {
    "Symbol":"BRK/A",
    "Name":"Berkshire Hathaway Inc."
    },
    {
    "Symbol":"BRK/B",
    "Name":"Berkshire Hathaway Inc."
    },
    {
    "Symbol":"BRKHU",
    "Name":"BurTech Acquisition Corp. Unit"
    },
    {
    "Symbol":"BRKL",
    "Name":"Brookline Bancorp Inc."
    },
    {
    "Symbol":"BRKR",
    "Name":"Bruker Corporation"
    },
    {
    "Symbol":"BRLI",
    "Name":"Brilliant Acquisition Corporation Ordinary Shares"
    },
    {
    "Symbol":"BRLIW",
    "Name":"Brilliant Acquisition Corporation Warrants"
    },
    {
    "Symbol":"BRLT",
    "Name":"Brilliant Earth Group Inc. Class A"
    },
    {
    "Symbol":"BRMK",
    "Name":"Broadmark Realty Capital Inc."
    },
    {
    "Symbol":"BRN",
    "Name":"Barnwell Industries Inc."
    },
    {
    "Symbol":"BRO",
    "Name":"Brown & Brown Inc."
    },
    {
    "Symbol":"BROG",
    "Name":"Brooge Energy Limited Ordinary Shares"
    },
    {
    "Symbol":"BROGW",
    "Name":"Brooge Holdings Limited Warrant expiring 12/20/2024"
    },
    {
    "Symbol":"BROS",
    "Name":"Dutch Bros Inc. Class A"
    },
    {
    "Symbol":"BRP",
    "Name":"BRP Group Inc. (Insurance Company) Class A"
    },
    {
    "Symbol":"BRPM",
    "Name":"B. Riley Principal 150 Merger Corp. Class A"
    },
    {
    "Symbol":"BRPMU",
    "Name":"B. Riley Principal 150 Merger Corp. Unit"
    },
    {
    "Symbol":"BRPMW",
    "Name":"B. Riley Principal 150 Merger Corp. Warrant"
    },
    {
    "Symbol":"BRQS",
    "Name":"Borqs Technologies Inc. Ordinary Shares"
    },
    {
    "Symbol":"BRSP",
    "Name":"BrightSpire Capital Inc. Class A"
    },
    {
    "Symbol":"BRT",
    "Name":"BRT Apartments Corp. (MD)"
    },
    {
    "Symbol":"BRTX",
    "Name":"BioRestorative Therapies Inc."
    },
    {
    "Symbol":"BRW",
    "Name":"Saba Capital Income & Opportunities Fund SBI"
    },
    {
    "Symbol":"BRX",
    "Name":"Brixmor Property Group Inc."
    },
    {
    "Symbol":"BRY",
    "Name":"Berry Corporation (bry)"
    },
    {
    "Symbol":"BRZE",
    "Name":"Braze Inc. Class A"
    },
    {
    "Symbol":"BSAC",
    "Name":"Banco Santander - Chile ADS"
    },
    {
    "Symbol":"BSAQ",
    "Name":"Black Spade Acquisition Co Class A Ordinary Shares"
    },
    {
    "Symbol":"BSBK",
    "Name":"Bogota Financial Corp."
    },
    {
    "Symbol":"BSBR",
    "Name":"Banco Santander Brasil SA American Depositary Shares each representing one unit"
    },
    {
    "Symbol":"BSET",
    "Name":"Bassett Furniture Industries Incorporated"
    },
    {
    "Symbol":"BSFC",
    "Name":"Blue Star Foods Corp."
    },
    {
    "Symbol":"BSGA",
    "Name":"Blue Safari Group Acquisition Corp. Class A Ordinary Share"
    },
    {
    "Symbol":"BSGAR",
    "Name":"Blue Safari Group Acquisition Corp. Right"
    },
    {
    "Symbol":"BSGM",
    "Name":"BioSig Technologies Inc."
    },
    {
    "Symbol":"BSIG",
    "Name":"BrightSphere Investment Group Inc."
    },
    {
    "Symbol":"BSKY",
    "Name":"Big Sky Growth Partners Inc. Class A"
    },
    {
    "Symbol":"BSKYU",
    "Name":"Big Sky Growth Partners Inc. Unit"
    },
    {
    "Symbol":"BSKYW",
    "Name":"Big Sky Growth Partners Inc. Warrant"
    },
    {
    "Symbol":"BSL",
    "Name":"Blackstone Senior Floating Rate Term Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"BSM",
    "Name":"Black Stone Minerals L.P. Common units representing limited partner interests"
    },
    {
    "Symbol":"BSMX",
    "Name":"Banco Santander Mexico S.A. Institucion de Banca Multiple Grupo Financiero Santander Mexico"
    },
    {
    "Symbol":"BSQR",
    "Name":"BSQUARE Corporation"
    },
    {
    "Symbol":"BSRR",
    "Name":"Sierra Bancorp"
    },
    {
    "Symbol":"BST",
    "Name":"BlackRock Science and Technology Trust Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"BSTZ",
    "Name":"BlackRock Science and Technology Trust II Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"BSVN",
    "Name":"Bank7 Corp."
    },
    {
    "Symbol":"BSX",
    "Name":"Boston Scientific Corporation"
    },
    {
    "Symbol":"BSX^A",
    "Name":"Boston Scientific Corporation 5.50% Mandatory Convertible Preferred Stock Series A"
    },
    {
    "Symbol":"BSY",
    "Name":"Bentley Systems Incorporated Class B"
    },
    {
    "Symbol":"BTA",
    "Name":"BlackRock Long-Term Municipal Advantage Trust BlackRock Long-Term Municipal Advantage Trust Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"BTAI",
    "Name":"BioXcel Therapeutics Inc."
    },
    {
    "Symbol":"BTAQ",
    "Name":"Burgundy Technology Acquisition Corporation Class A Ordinary shares"
    },
    {
    "Symbol":"BTAQU",
    "Name":"Burgundy Technology Acquisition Corporation Unit"
    },
    {
    "Symbol":"BTAQW",
    "Name":"Burgundy Technology Acquisition Corporation Warrant"
    },
    {
    "Symbol":"BTB",
    "Name":"Bit Brother Limited Ordinary Shares"
    },
    {
    "Symbol":"BTBD",
    "Name":"BT Brands Inc."
    },
    {
    "Symbol":"BTBDW",
    "Name":"BT Brands Inc. Warrant"
    },
    {
    "Symbol":"BTBT",
    "Name":"Bit Digital Inc. Ordinary Shares"
    },
    {
    "Symbol":"BTCM",
    "Name":"BIT Mining Limited ADS"
    },
    {
    "Symbol":"BTCS",
    "Name":"BTCS Inc."
    },
    {
    "Symbol":"BTCY",
    "Name":"Biotricity Inc."
    },
    {
    "Symbol":"BTG",
    "Name":"B2Gold Corp Common shares (Canada)"
    },
    {
    "Symbol":"BTI",
    "Name":"British American Tobacco  Industries p.l.c.   ADR"
    },
    {
    "Symbol":"BTN",
    "Name":"Ballantyne Strong Inc."
    },
    {
    "Symbol":"BTNB",
    "Name":"Bridgetown 2 Holdings Limited Class A Ordinary Shares"
    },
    {
    "Symbol":"BTO",
    "Name":"John Hancock Financial Opportunities Fund"
    },
    {
    "Symbol":"BTRS",
    "Name":"BTRS Holdings Inc. Class 1"
    },
    {
    "Symbol":"BTT",
    "Name":"BlackRock Municipal 2030 Target Term Trust"
    },
    {
    "Symbol":"BTTR",
    "Name":"Better Choice Company Inc."
    },
    {
    "Symbol":"BTTX",
    "Name":"Better Therapeutics Inc."
    },
    {
    "Symbol":"BTU",
    "Name":"Peabody Energy Corporation"
    },
    {
    "Symbol":"BTWN",
    "Name":"Bridgetown Holdings Limited Class A Ordinary Shares"
    },
    {
    "Symbol":"BTWNU",
    "Name":"Bridgetown Holdings Limited Units"
    },
    {
    "Symbol":"BTWNW",
    "Name":"Bridgetown Holdings Limited Warrants"
    },
    {
    "Symbol":"BTX",
    "Name":"Brooklyn ImmunoTherapeutics Inc."
    },
    {
    "Symbol":"BTZ",
    "Name":"BlackRock Credit Allocation Income Trust"
    },
    {
    "Symbol":"BUD",
    "Name":"Anheuser-Busch Inbev SA Sponsored ADR (Belgium)"
    },
    {
    "Symbol":"BUI",
    "Name":"BlackRock Utility Infrastructure & Power Opportunities Trust"
    },
    {
    "Symbol":"BUR",
    "Name":"Burford Capital Limited Ordinary Shares"
    },
    {
    "Symbol":"BURL",
    "Name":"Burlington Stores Inc."
    },
    {
    "Symbol":"BUSE",
    "Name":"First Busey Corporation Class A"
    },
    {
    "Symbol":"BV",
    "Name":"BrightView Holdings Inc."
    },
    {
    "Symbol":"BVH",
    "Name":"Bluegreen Vacations Holding Corporation Class A"
    },
    {
    "Symbol":"BVN",
    "Name":"Buenaventura Mining Company Inc."
    },
    {
    "Symbol":"BVS",
    "Name":"Bioventus Inc. Class A"
    },
    {
    "Symbol":"BVXV",
    "Name":"BiondVax Pharmaceuticals Ltd. American Depositary Shares"
    },
    {
    "Symbol":"BW",
    "Name":"Babcock & Wilcox Enterprises Inc."
    },
    {
    "Symbol":"BW^A",
    "Name":"Babcock & Wilcox Enterprises Inc. 7.75% Series A Cumulative Perpetual Preferred Stock"
    },
    {
    "Symbol":"BWA",
    "Name":"BorgWarner Inc."
    },
    {
    "Symbol":"BWAC",
    "Name":"Better World Acquisition Corp."
    },
    {
    "Symbol":"BWACU",
    "Name":"Better World Acquisition Corp. Unit"
    },
    {
    "Symbol":"BWACW",
    "Name":"Better World Acquisition Corp. Warrants"
    },
    {
    "Symbol":"BWAY",
    "Name":"BrainsWay Ltd. American Depositary Shares"
    },
    {
    "Symbol":"BWB",
    "Name":"Bridgewater Bancshares Inc."
    },
    {
    "Symbol":"BWBBP",
    "Name":"Bridgewater Bancshares Inc. Depositary Shares Each Representing a 1/100th Interest in a Share of 5.875% Non-Cumulative Perpetual Preferred Stock Series A"
    },
    {
    "Symbol":"BWC",
    "Name":"Blue Whale Acquisition Corp I Class A Ordinary Shares"
    },
    {
    "Symbol":"BWCAU",
    "Name":"Blue Whale Acquisition Corp I Unit"
    },
    {
    "Symbol":"BWCAW",
    "Name":"Blue Whale Acquisition Corp I Warrant"
    },
    {
    "Symbol":"BWEN",
    "Name":"Broadwind Inc."
    },
    {
    "Symbol":"BWFG",
    "Name":"Bankwell Financial Group Inc."
    },
    {
    "Symbol":"BWG",
    "Name":"BrandywineGLOBAL Global Income Opportunities Fund Inc."
    },
    {
    "Symbol":"BWMN",
    "Name":"Bowman Consulting Group Ltd."
    },
    {
    "Symbol":"BWMX",
    "Name":"Betterware de Mexico S.A.B. de C.V. Ordinary Shares"
    },
    {
    "Symbol":"BWNB",
    "Name":"Babcock & Wilcox Enterprises Inc. 6.50% Senior Notes due 2026"
    },
    {
    "Symbol":"BWSN",
    "Name":"Babcock & Wilcox Enterprises Inc. 8.125% Senior Notes due 2026"
    },
    {
    "Symbol":"BWXT",
    "Name":"BWX Technologies Inc."
    },
    {
    "Symbol":"BX",
    "Name":"Blackstone Inc."
    },
    {
    "Symbol":"BXC",
    "Name":"Bluelinx Holdings Inc."
    },
    {
    "Symbol":"BXMT",
    "Name":"Blackstone Mortgage Trust Inc."
    },
    {
    "Symbol":"BXMX",
    "Name":"Nuveen S&P 500 Buy-Write Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"BXP",
    "Name":"Boston Properties Inc."
    },
    {
    "Symbol":"BXRX",
    "Name":"Baudax Bio Inc."
    },
    {
    "Symbol":"BXSL",
    "Name":"Blackstone Secured Lending Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"BY",
    "Name":"Byline Bancorp Inc."
    },
    {
    "Symbol":"BYD",
    "Name":"Boyd Gaming Corporation"
    },
    {
    "Symbol":"BYFC",
    "Name":"Broadway Financial Corporation"
    },
    {
    "Symbol":"BYM",
    "Name":"Blackrock Municipal Income Quality Trust Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"BYND",
    "Name":"Beyond Meat Inc."
    },
    {
    "Symbol":"BYRN",
    "Name":"Byrna Technologies Inc."
    },
    {
    "Symbol":"BYSI",
    "Name":"BeyondSpring Inc. Ordinary Shares"
    },
    {
    "Symbol":"BYTS",
    "Name":"BYTE Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"BYTSU",
    "Name":"BYTE Acquisition Corp. Units"
    },
    {
    "Symbol":"BYTSW",
    "Name":"BYTE Acquisition Corp. Warrants"
    },
    {
    "Symbol":"BZ",
    "Name":"KANZHUN LIMITED American Depository Shares"
    },
    {
    "Symbol":"BZFD",
    "Name":"BuzzFeed Inc. Class A"
    },
    {
    "Symbol":"BZFDW",
    "Name":"BuzzFeed Inc. Warrant"
    },
    {
    "Symbol":"BZH",
    "Name":"Beazer Homes USA Inc."
    },
    {
    "Symbol":"BZUN",
    "Name":"Baozun Inc. American Depositary Shares"
    },
    {
    "Symbol":"C",
    "Name":"Citigroup Inc."
    },
    {
    "Symbol":"C^J",
    "Name":"Citigroup Inc. Dep Shs Repstg 1/1000 Pfd Ser J Fixed/Fltg"
    },
    {
    "Symbol":"C^K",
    "Name":"Citigroup Inc. Dep Shs Repstg 1/1000th Pfd Ser K"
    },
    {
    "Symbol":"C^N",
    "Name":"Citigroup Capital XIII 7.875% Fixed rate Floating Rate trust Preferred Securities (TruPS)"
    },
    {
    "Symbol":"CAAP",
    "Name":"Corporacion America Airports SA Common Shares"
    },
    {
    "Symbol":"CAAS",
    "Name":"China Automotive Systems Inc."
    },
    {
    "Symbol":"CABA",
    "Name":"Cabaletta Bio Inc."
    },
    {
    "Symbol":"CABO",
    "Name":"Cable One Inc."
    },
    {
    "Symbol":"CAC",
    "Name":"Camden National Corporation"
    },
    {
    "Symbol":"CACC",
    "Name":"Credit Acceptance Corporation"
    },
    {
    "Symbol":"CACI",
    "Name":"CACI International Inc. Class A"
    },
    {
    "Symbol":"CADE",
    "Name":"Cadence Bank"
    },
    {
    "Symbol":"CADE^A",
    "Name":"Cadence Bank 5.50% Series A"
    },
    {
    "Symbol":"CADL",
    "Name":"Candel Therapeutics Inc."
    },
    {
    "Symbol":"CAE",
    "Name":"CAE Inc. Ordinary Shares"
    },
    {
    "Symbol":"CAF",
    "Name":"Morgan Stanley China A Share Fund Inc."
    },
    {
    "Symbol":"CAG",
    "Name":"ConAgra Brands Inc."
    },
    {
    "Symbol":"CAH",
    "Name":"Cardinal Health Inc."
    },
    {
    "Symbol":"CAJ",
    "Name":"Canon Inc. American Depositary Shares"
    },
    {
    "Symbol":"CAKE",
    "Name":"Cheesecake Factory Incorporated (The)"
    },
    {
    "Symbol":"CAL",
    "Name":"Caleres Inc."
    },
    {
    "Symbol":"CALA",
    "Name":"Calithera Biosciences Inc."
    },
    {
    "Symbol":"CALB",
    "Name":"California BanCorp"
    },
    {
    "Symbol":"CALM",
    "Name":"Cal-Maine Foods Inc."
    },
    {
    "Symbol":"CALT",
    "Name":"Calliditas Therapeutics AB American Depositary Shares"
    },
    {
    "Symbol":"CALX",
    "Name":"Calix Inc"
    },
    {
    "Symbol":"CAMP",
    "Name":"CalAmp Corp."
    },
    {
    "Symbol":"CAMT",
    "Name":"Camtek Ltd. Ordinary Shares"
    },
    {
    "Symbol":"CAN",
    "Name":"Canaan Inc. American Depositary Shares"
    },
    {
    "Symbol":"CANF",
    "Name":"Can-Fite Biopharma Ltd Sponsored ADR (Israel)"
    },
    {
    "Symbol":"CANG",
    "Name":"Cango Inc. American Depositary Shares  each representing two (2) Class A Ordinary Shares"
    },
    {
    "Symbol":"CANO",
    "Name":"Cano Health Inc. Class A"
    },
    {
    "Symbol":"CAPL",
    "Name":"CrossAmerica Partners LP Common Units representing limited partner interests"
    },
    {
    "Symbol":"CAPR",
    "Name":"Capricor Therapeutics Inc."
    },
    {
    "Symbol":"CAR",
    "Name":"Avis Budget Group Inc."
    },
    {
    "Symbol":"CARA",
    "Name":"Cara Therapeutics Inc."
    },
    {
    "Symbol":"CARE",
    "Name":"Carter Bankshares Inc."
    },
    {
    "Symbol":"CARG",
    "Name":"CarGurus Inc. Class A"
    },
    {
    "Symbol":"CARR",
    "Name":"Carrier Global Corporation"
    },
    {
    "Symbol":"CARS",
    "Name":"Cars.com Inc."
    },
    {
    "Symbol":"CARV",
    "Name":"Carver Bancorp Inc."
    },
    {
    "Symbol":"CAS",
    "Name":"Cascade Acquisition Corp. Class A"
    },
    {
    "Symbol":"CASA",
    "Name":"Casa Systems Inc."
    },
    {
    "Symbol":"CASH",
    "Name":"Meta Financial Group Inc."
    },
    {
    "Symbol":"CASI",
    "Name":"CASI Pharmaceuticals Inc."
    },
    {
    "Symbol":"CASS",
    "Name":"Cass Information Systems Inc"
    },
    {
    "Symbol":"CASY",
    "Name":"Casey's General Stores Inc."
    },
    {
    "Symbol":"CAT",
    "Name":"Caterpillar Inc."
    },
    {
    "Symbol":"CATC",
    "Name":"Cambridge Bancorp"
    },
    {
    "Symbol":"CATO",
    "Name":"Cato Corporation (The) Class A"
    },
    {
    "Symbol":"CATY",
    "Name":"Cathay General Bancorp"
    },
    {
    "Symbol":"CB",
    "Name":"Chubb Limited "
    },
    {
    "Symbol":"CBAN",
    "Name":"Colony Bankcorp Inc."
    },
    {
    "Symbol":"CBAT",
    "Name":"CBAK Energy Technology Inc."
    },
    {
    "Symbol":"CBAY",
    "Name":"CymaBay Therapeutics Inc."
    },
    {
    "Symbol":"CBD",
    "Name":"Companhia Brasileira de Distribuicao American Depsitary Shares; each representing one Common Share"
    },
    {
    "Symbol":"CBFV",
    "Name":"CB Financial Services Inc."
    },
    {
    "Symbol":"CBH",
    "Name":"Virtus AllianzGI Convertible & Income 2024 Target Term Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"CBIO",
    "Name":"Catalyst Biosciences Inc."
    },
    {
    "Symbol":"CBL",
    "Name":"CBL & Associates Properties Inc."
    },
    {
    "Symbol":"CBNK",
    "Name":"Capital Bancorp Inc."
    },
    {
    "Symbol":"CBOE",
    "Name":"Cboe Global Markets Inc."
    },
    {
    "Symbol":"CBRE",
    "Name":"CBRE Group Inc   Class A"
    },
    {
    "Symbol":"CBRG",
    "Name":"Chain Bridge I Class A Ordinary Shares"
    },
    {
    "Symbol":"CBRGU",
    "Name":"Chain Bridge I Units"
    },
    {
    "Symbol":"CBRGW",
    "Name":"Chain Bridge I Warrants"
    },
    {
    "Symbol":"CBRL",
    "Name":"Cracker Barrel Old Country Store Inc"
    },
    {
    "Symbol":"CBSH",
    "Name":"Commerce Bancshares Inc."
    },
    {
    "Symbol":"CBT",
    "Name":"Cabot Corporation"
    },
    {
    "Symbol":"CBTX",
    "Name":"CBTX Inc."
    },
    {
    "Symbol":"CBU",
    "Name":"Community Bank System Inc."
    },
    {
    "Symbol":"CBZ",
    "Name":"CBIZ Inc."
    },
    {
    "Symbol":"CC",
    "Name":"Chemours Company (The)"
    },
    {
    "Symbol":"CCAC",
    "Name":"CITIC Capital Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"CCAI",
    "Name":"Cascadia Acquisition Corp. Class A"
    },
    {
    "Symbol":"CCAIU",
    "Name":"Cascadia Acquisition Corp. Unit"
    },
    {
    "Symbol":"CCAIW",
    "Name":"Cascadia Acquisition Corp. Warrant"
    },
    {
    "Symbol":"CCAP",
    "Name":"Crescent Capital BDC Inc."
    },
    {
    "Symbol":"CCB",
    "Name":"Coastal Financial Corporation"
    },
    {
    "Symbol":"CCBG",
    "Name":"Capital City Bank Group"
    },
    {
    "Symbol":"CCCC",
    "Name":"C4 Therapeutics Inc."
    },
    {
    "Symbol":"CCCS",
    "Name":"CCC Intelligent Solutions Holdings Inc."
    },
    {
    "Symbol":"CCD",
    "Name":"Calamos Dynamic Convertible & Income Fund"
    },
    {
    "Symbol":"CCEL",
    "Name":"Cryo-Cell International Inc."
    },
    {
    "Symbol":"CCEP",
    "Name":"Coca-Cola Europacific Partners plc Ordinary Shares"
    },
    {
    "Symbol":"CCF",
    "Name":"Chase Corporation"
    },
    {
    "Symbol":"CCI",
    "Name":"Crown Castle International Corp. (REIT)"
    },
    {
    "Symbol":"CCJ",
    "Name":"Cameco Corporation"
    },
    {
    "Symbol":"CCK",
    "Name":"Crown Holdings Inc."
    },
    {
    "Symbol":"CCL",
    "Name":"Carnival Corporation"
    },
    {
    "Symbol":"CCLP",
    "Name":"CSI Compressco LP Common Units"
    },
    {
    "Symbol":"CCM",
    "Name":"Concord Medical Services Holdings Limited ADS (Each represents three ordinary shares)"
    },
    {
    "Symbol":"CCMP",
    "Name":"CMC Materials Inc."
    },
    {
    "Symbol":"CCNC",
    "Name":"Code Chain New Continent Limited"
    },
    {
    "Symbol":"CCNE",
    "Name":"CNB Financial Corporation"
    },
    {
    "Symbol":"CCNEP",
    "Name":"CNB Financial Corporation Depositary Shares each representing a 1/40th ownership interest in a share of 7.125% Series A Fixed-Rate Non-Cumulative Perpetual Preferred Stock"
    },
    {
    "Symbol":"CCO",
    "Name":"Clear Channel Outdoor Holdings Inc."
    },
    {
    "Symbol":"CCOI",
    "Name":"Cogent Communications Holdings Inc."
    },
    {
    "Symbol":"CCRD",
    "Name":"CoreCard Corporation"
    },
    {
    "Symbol":"CCRN",
    "Name":"Cross Country Healthcare Inc.   $0.0001 Par Value"
    },
    {
    "Symbol":"CCS",
    "Name":"Century Communities Inc."
    },
    {
    "Symbol":"CCSI",
    "Name":"Consensus Cloud Solutions Inc."
    },
    {
    "Symbol":"CCTS",
    "Name":"Cactus Acquisition Corp. 1 Limited Class A Ordinary Share"
    },
    {
    "Symbol":"CCTSU",
    "Name":"Cactus Acquisition Corp. 1 Limited Unit"
    },
    {
    "Symbol":"CCTSW",
    "Name":"Cactus Acquisition Corp. 1 Limited Warrant"
    },
    {
    "Symbol":"CCU",
    "Name":"Compania Cervecerias Unidas S.A."
    },
    {
    "Symbol":"CCV",
    "Name":"Churchill Capital Corp V Class A"
    },
    {
    "Symbol":"CCVI",
    "Name":"Churchill Capital Corp VI Class A"
    },
    {
    "Symbol":"CCXI",
    "Name":"ChemoCentryx Inc."
    },
    {
    "Symbol":"CCZ",
    "Name":"Comcast Holdings ZONES"
    },
    {
    "Symbol":"CD",
    "Name":"Chindata Group Holdings Limited American Depositary Shares"
    },
    {
    "Symbol":"CDAK",
    "Name":"Codiak BioSciences Inc."
    },
    {
    "Symbol":"CDAQ",
    "Name":"Compass Digital Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"CDAQU",
    "Name":"Compass Digital Acquisition Corp. Unit"
    },
    {
    "Symbol":"CDAQW",
    "Name":"Compass Digital Acquisition Corp. Warrant"
    },
    {
    "Symbol":"CDAY",
    "Name":"Ceridian HCM Holding Inc."
    },
    {
    "Symbol":"CDE",
    "Name":"Coeur Mining Inc."
    },
    {
    "Symbol":"CDEV",
    "Name":"Centennial Resource Development Inc. Class A"
    },
    {
    "Symbol":"CDK",
    "Name":"CDK Global Inc."
    },
    {
    "Symbol":"CDLX",
    "Name":"Cardlytics Inc."
    },
    {
    "Symbol":"CDMO",
    "Name":"Avid Bioservices Inc."
    },
    {
    "Symbol":"CDNA",
    "Name":"CareDx Inc."
    },
    {
    "Symbol":"CDNS",
    "Name":"Cadence Design Systems Inc."
    },
    {
    "Symbol":"CDR",
    "Name":"Cedar Realty Trust Inc."
    },
    {
    "Symbol":"CDR^B",
    "Name":"Cedar Realty Trust Inc. 7.25% Series B Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"CDR^C",
    "Name":"Cedar Realty Trust Inc. 6.50% Series C Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"CDRE",
    "Name":"Cadre Holdings Inc."
    },
    {
    "Symbol":"CDRO",
    "Name":"Codere Online Luxembourg S.A. Ordinary Shares"
    },
    {
    "Symbol":"CDROW",
    "Name":"Codere Online Luxembourg S.A. Warrants"
    },
    {
    "Symbol":"CDTX",
    "Name":"Cidara Therapeutics Inc."
    },
    {
    "Symbol":"CDW",
    "Name":"CDW Corporation"
    },
    {
    "Symbol":"CDXC",
    "Name":"ChromaDex Corporation"
    },
    {
    "Symbol":"CDXS",
    "Name":"Codexis Inc."
    },
    {
    "Symbol":"CDZI",
    "Name":"CADIZ Inc."
    },
    {
    "Symbol":"CDZIP",
    "Name":"Cadiz Inc. Depositary Shares"
    },
    {
    "Symbol":"CE",
    "Name":"Celanese Corporation Celanese Corporation"
    },
    {
    "Symbol":"CEA",
    "Name":"China Eastern Airlines Corporation Ltd."
    },
    {
    "Symbol":"CECE",
    "Name":"CECO Environmental Corp."
    },
    {
    "Symbol":"CEE",
    "Name":"The Central and Eastern Europe Fund Inc. (The)"
    },
    {
    "Symbol":"CEGVV",
    "Name":"Constellation Energy Corporation   When-Issued"
    },
    {
    "Symbol":"CEI",
    "Name":"Camber Energy Inc."
    },
    {
    "Symbol":"CEIX",
    "Name":"CONSOL Energy Inc."
    },
    {
    "Symbol":"CELC",
    "Name":"Celcuity Inc."
    },
    {
    "Symbol":"CELH",
    "Name":"Celsius Holdings Inc."
    },
    {
    "Symbol":"CELP",
    "Name":"Cypress Environmental Partners L.P. Common Units representing limited partner interests"
    },
    {
    "Symbol":"CELU",
    "Name":"Celularity Inc. Class A"
    },
    {
    "Symbol":"CELUW",
    "Name":"Celularity Inc. Warrant"
    },
    {
    "Symbol":"CELZ",
    "Name":"Creative Medical Technology Holdings Inc."
    },
    {
    "Symbol":"CEM",
    "Name":"ClearBridge MLP and Midstream Fund Inc."
    },
    {
    "Symbol":"CEMI",
    "Name":"Chembio Diagnostics Inc."
    },
    {
    "Symbol":"CEN",
    "Name":"Center Coast Brookfield MLP & Energy Infrastructure Fund"
    },
    {
    "Symbol":"CENN",
    "Name":"Cenntro Electric Group Limited Ordinary Shares"
    },
    {
    "Symbol":"CENQ",
    "Name":"CENAQ Energy Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"CENQU",
    "Name":"CENAQ Energy Corp. Unit"
    },
    {
    "Symbol":"CENQW",
    "Name":"CENAQ Energy Corp. Warrant"
    },
    {
    "Symbol":"CENT",
    "Name":"Central Garden & Pet Company"
    },
    {
    "Symbol":"CENTA",
    "Name":"Central Garden & Pet Company Class A   Nonvoting"
    },
    {
    "Symbol":"CENX",
    "Name":"Century Aluminum Company"
    },
    {
    "Symbol":"CEPU",
    "Name":"Central Puerto S.A. American Depositary Shares (each represents ten Common Shares)"
    },
    {
    "Symbol":"CEQP",
    "Name":"Crestwood Equity Partners LP"
    },
    {
    "Symbol":"CEQP^",
    "Name":"Crestwood Equity Partners LP Preferred Units representing limited partner interests"
    },
    {
    "Symbol":"CERE",
    "Name":"Cerevel Therapeutics Holdings Inc."
    },
    {
    "Symbol":"CERN",
    "Name":"Cerner Corporation"
    },
    {
    "Symbol":"CERS",
    "Name":"Cerus Corporation"
    },
    {
    "Symbol":"CERT",
    "Name":"Certara Inc."
    },
    {
    "Symbol":"CET",
    "Name":"Central Securities Corporation"
    },
    {
    "Symbol":"CETX",
    "Name":"Cemtrex Inc."
    },
    {
    "Symbol":"CETXP",
    "Name":"Cemtrex Inc. Series 1 Preferred Stock"
    },
    {
    "Symbol":"CETXW",
    "Name":"Cemtrex Inc. Series 1 Warrant"
    },
    {
    "Symbol":"CEV",
    "Name":"Eaton Vance California Municipal Income Trust Shares of Beneficial Interest"
    },
    {
    "Symbol":"CEVA",
    "Name":"CEVA Inc."
    },
    {
    "Symbol":"CF",
    "Name":"CF Industries Holdings Inc."
    },
    {
    "Symbol":"CFB",
    "Name":"CrossFirst Bankshares Inc."
    },
    {
    "Symbol":"CFBK",
    "Name":"CF Bankshares Inc."
    },
    {
    "Symbol":"CFFE",
    "Name":"CF Acquisition Corp. VIII Class A"
    },
    {
    "Symbol":"CFFEW",
    "Name":"CF Acquisition Corp. VIII Warrant"
    },
    {
    "Symbol":"CFFI",
    "Name":"C&F Financial Corporation"
    },
    {
    "Symbol":"CFFN",
    "Name":"Capitol Federal Financial Inc."
    },
    {
    "Symbol":"CFFSU",
    "Name":"CF Acquisition Corp. VII Unit"
    },
    {
    "Symbol":"CFG",
    "Name":"Citizens Financial Group Inc."
    },
    {
    "Symbol":"CFG^D",
    "Name":"Citizens Financial Group Inc. Depositary Shares each representing a 1/40th Interest in a Share of 6.350% Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series D"
    },
    {
    "Symbol":"CFG^E",
    "Name":"Citizens Financial Group Inc. Depositary Shares Each Representing 1/40th Interest in a Share of 5.000% Fixed-Rate Non-Cumulative Perpetual Preferred Stock Series E"
    },
    {
    "Symbol":"CFIV",
    "Name":"CF Acquisition Corp. IV Class A"
    },
    {
    "Symbol":"CFIVU",
    "Name":"CF Acquisition Corp. IV Unit"
    },
    {
    "Symbol":"CFIVW",
    "Name":"CF Acquisition Corp. IV Warrant"
    },
    {
    "Symbol":"CFLT",
    "Name":"Confluent Inc. Class A"
    },
    {
    "Symbol":"CFMS",
    "Name":"Conformis Inc."
    },
    {
    "Symbol":"CFR",
    "Name":"Cullen/Frost Bankers Inc."
    },
    {
    "Symbol":"CFR^B",
    "Name":"Cullen/Frost Bankers Inc. Depositary Shares each representing a 1/40th ownership interest in a share of 4.450% non-cumulative perpetual preferred stock Series B"
    },
    {
    "Symbol":"CFRX",
    "Name":"ContraFect Corporation"
    },
    {
    "Symbol":"CFSB",
    "Name":"CFSB Bancorp Inc."
    },
    {
    "Symbol":"CFVI",
    "Name":"CF Acquisition Corp. VI Class A"
    },
    {
    "Symbol":"CFVIU",
    "Name":"CF Acquisition Corp. VI Unit"
    },
    {
    "Symbol":"CFVIW",
    "Name":"CF Acquisition Corp. VI Warrant"
    },
    {
    "Symbol":"CFX",
    "Name":"Colfax Corporation"
    },
    {
    "Symbol":"CG",
    "Name":"The Carlyle Group Inc."
    },
    {
    "Symbol":"CGA",
    "Name":"China Green Agriculture Inc."
    },
    {
    "Symbol":"CGABL",
    "Name":"The Carlyle Group Inc. 4.625% Subordinated Notes due 2061"
    },
    {
    "Symbol":"CGAU",
    "Name":"Centerra Gold Inc. Common Shares"
    },
    {
    "Symbol":"CGBD",
    "Name":"TCG BDC Inc."
    },
    {
    "Symbol":"CGC",
    "Name":"Canopy Growth Corporation Common Shares"
    },
    {
    "Symbol":"CGEM",
    "Name":"Cullinan Oncology Inc."
    },
    {
    "Symbol":"CGEN",
    "Name":"Compugen Ltd. Ordinary Shares"
    },
    {
    "Symbol":"CGNT",
    "Name":"Cognyte Software Ltd. Ordinary Shares"
    },
    {
    "Symbol":"CGNX",
    "Name":"Cognex Corporation"
    },
    {
    "Symbol":"CGO",
    "Name":"Calamos Global Total Return Fund"
    },
    {
    "Symbol":"CGRN",
    "Name":"Capstone Green Energy Corporation"
    },
    {
    "Symbol":"CGTX",
    "Name":"Cognition Therapeutics Inc."
    },
    {
    "Symbol":"CHAA",
    "Name":"Catcha Investment Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"CHCI",
    "Name":"Comstock Holding Companies Inc. Class A"
    },
    {
    "Symbol":"CHCO",
    "Name":"City Holding Company"
    },
    {
    "Symbol":"CHCT",
    "Name":"Community Healthcare Trust Incorporated"
    },
    {
    "Symbol":"CHD",
    "Name":"Church & Dwight Company Inc."
    },
    {
    "Symbol":"CHDN",
    "Name":"Churchill Downs Incorporated"
    },
    {
    "Symbol":"CHE",
    "Name":"Chemed Corp"
    },
    {
    "Symbol":"CHEF",
    "Name":"The Chefs' Warehouse Inc."
    },
    {
    "Symbol":"CHEK",
    "Name":"Check-Cap Ltd. Ordinary Share"
    },
    {
    "Symbol":"CHEKZ",
    "Name":"Check-Cap Ltd. Series C Warrant"
    },
    {
    "Symbol":"CHGG",
    "Name":"Chegg Inc."
    },
    {
    "Symbol":"CHH",
    "Name":"Choice Hotels International Inc."
    },
    {
    "Symbol":"CHI",
    "Name":"Calamos Convertible Opportunities and Income Fund"
    },
    {
    "Symbol":"CHK",
    "Name":"Chesapeake Energy Corporation"
    },
    {
    "Symbol":"CHKEL",
    "Name":"Chesapeake Energy Corporation Class C Warrants"
    },
    {
    "Symbol":"CHKEW",
    "Name":"Chesapeake Energy Corporation Class A Warrants"
    },
    {
    "Symbol":"CHKEZ",
    "Name":"Chesapeake Energy Corporation Class B Warrants"
    },
    {
    "Symbol":"CHKP",
    "Name":"Check Point Software Technologies Ltd. Ordinary Shares"
    },
    {
    "Symbol":"CHMG",
    "Name":"Chemung Financial Corp"
    },
    {
    "Symbol":"CHMI",
    "Name":"Cherry Hill Mortgage Investment Corporation"
    },
    {
    "Symbol":"CHMI^A",
    "Name":"Cherry Hill Mortgage Investment Corporation 8.20% Series A Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"CHMI^B",
    "Name":"Cherry Hill Mortgage Investment Corporation 8.250% Series B Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"CHN",
    "Name":"China Fund Inc. (The)"
    },
    {
    "Symbol":"CHNG",
    "Name":"Change Healthcare Inc."
    },
    {
    "Symbol":"CHNGU",
    "Name":"Change Healthcare Inc. Tangible Equity Units"
    },
    {
    "Symbol":"CHNR",
    "Name":"China Natural Resources Inc."
    },
    {
    "Symbol":"CHPM",
    "Name":"CHP Merger Corp. Class A"
    },
    {
    "Symbol":"CHPMW",
    "Name":"CHP Merger Corp. Warrant"
    },
    {
    "Symbol":"CHPT",
    "Name":"ChargePoint Holdings Inc."
    },
    {
    "Symbol":"CHRA",
    "Name":"Charah Solutions Inc."
    },
    {
    "Symbol":"CHRB",
    "Name":"Charah Solutions Inc. 8.50% Senior Notes due 2026"
    },
    {
    "Symbol":"CHRS",
    "Name":"Coherus BioSciences Inc."
    },
    {
    "Symbol":"CHRW",
    "Name":"C.H. Robinson Worldwide Inc."
    },
    {
    "Symbol":"CHS",
    "Name":"Chico's FAS Inc."
    },
    {
    "Symbol":"CHSCL",
    "Name":"CHS Inc Class B Cumulative Redeemable Preferred Stock Series 4"
    },
    {
    "Symbol":"CHSCM",
    "Name":"CHS Inc Class B Reset Rate Cumulative Redeemable Preferred Stock Series 3"
    },
    {
    "Symbol":"CHSCN",
    "Name":"CHS Inc Preferred Class B Series 2 Reset Rate"
    },
    {
    "Symbol":"CHSCO",
    "Name":"CHS Inc. Class B Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"CHSCP",
    "Name":"CHS Inc. 8%  Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"CHT",
    "Name":"Chunghwa Telecom Co. Ltd."
    },
    {
    "Symbol":"CHTR",
    "Name":"Charter Communications Inc. Class A   New"
    },
    {
    "Symbol":"CHUY",
    "Name":"Chuy's Holdings Inc."
    },
    {
    "Symbol":"CHW",
    "Name":"Calamos Global Dynamic Income Fund"
    },
    {
    "Symbol":"CHWA",
    "Name":"CHW Acquisition Corporation Ordinary Share"
    },
    {
    "Symbol":"CHWAU",
    "Name":"CHW Acquisition Corporation Unit"
    },
    {
    "Symbol":"CHWAW",
    "Name":"CHW Acquisition Corporation Warrant"
    },
    {
    "Symbol":"CHWY",
    "Name":"Chewy Inc. Class A"
    },
    {
    "Symbol":"CHX",
    "Name":"ChampionX Corporation"
    },
    {
    "Symbol":"CHY",
    "Name":"Calamos Convertible and High Income Fund"
    },
    {
    "Symbol":"CI",
    "Name":"Cigna Corporation"
    },
    {
    "Symbol":"CIA",
    "Name":"Citizens Inc. Class A   ($1.00 Par)"
    },
    {
    "Symbol":"CIAN",
    "Name":"Cian PLC American Depositary Shares each representing one Ordinary Share"
    },
    {
    "Symbol":"CIB",
    "Name":"BanColombia S.A."
    },
    {
    "Symbol":"CIDM",
    "Name":"Cinedigm Corp. Class A"
    },
    {
    "Symbol":"CIEN",
    "Name":"Ciena Corporation"
    },
    {
    "Symbol":"CIF",
    "Name":"MFS Intermediate High Income Fund"
    },
    {
    "Symbol":"CIFR",
    "Name":"Cipher Mining Inc."
    },
    {
    "Symbol":"CIFRW",
    "Name":"Cipher Mining Inc. Warrant"
    },
    {
    "Symbol":"CIG",
    "Name":"Comp En De Mn Cemig ADS American Depositary Shares"
    },
    {
    "Symbol":"CIGI",
    "Name":"Colliers International Group Inc. Subordinate Voting Shares"
    },
    {
    "Symbol":"CIH",
    "Name":"China Index Holdings Limited American Depository Shares"
    },
    {
    "Symbol":"CII",
    "Name":"Blackrock Capital and Income Fund Inc."
    },
    {
    "Symbol":"CIIG",
    "Name":"CIIG Capital Partners II Inc. Class A"
    },
    {
    "Symbol":"CIIGU",
    "Name":"CIIG Capital Partners II Inc. Unit"
    },
    {
    "Symbol":"CIIGW",
    "Name":"CIIG Capital Partners II Inc. Warrant"
    },
    {
    "Symbol":"CIK",
    "Name":"Credit Suisse Asset Management Income Fund Inc."
    },
    {
    "Symbol":"CIM",
    "Name":"Chimera Investment Corporation"
    },
    {
    "Symbol":"CIM^A",
    "Name":"Chimera Investment Corporation 8.00% Series A Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"CIM^B",
    "Name":"Chimera Investment Corporation 8.00% Series B Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"CIM^C",
    "Name":"Chimera Investment Corporation 7.75% Series C Fixed-to-Floating Rate  Cumulative Redeemable  Preferred Stock"
    },
    {
    "Symbol":"CIM^D",
    "Name":"Chimera Investment Corporation 8.00% Series D Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"CINC",
    "Name":"CinCor Pharma Inc."
    },
    {
    "Symbol":"CINF",
    "Name":"Cincinnati Financial Corporation"
    },
    {
    "Symbol":"CING",
    "Name":"Cingulate Inc."
    },
    {
    "Symbol":"CINGW",
    "Name":"Cingulate Inc. Warrants"
    },
    {
    "Symbol":"CINR",
    "Name":"Ciner Resources LP Common Units representing Limited Partner Interests"
    },
    {
    "Symbol":"CINT",
    "Name":"CI&T Inc Class A Common Shares"
    },
    {
    "Symbol":"CIO",
    "Name":"City Office REIT Inc."
    },
    {
    "Symbol":"CIO^A",
    "Name":"City Office REIT Inc. 6.625% Series A Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"CION",
    "Name":"CION Investment Corporation"
    },
    {
    "Symbol":"CIR",
    "Name":"CIRCOR International Inc."
    },
    {
    "Symbol":"CISO",
    "Name":"Cerberus Cyber Sentinel Corporation"
    },
    {
    "Symbol":"CITEU",
    "Name":"Cartica Acquisition Corp Unit"
    },
    {
    "Symbol":"CIVB",
    "Name":"Civista Bancshares Inc."
    },
    {
    "Symbol":"CIVI",
    "Name":"Civitas Resources Inc."
    },
    {
    "Symbol":"CIX",
    "Name":"CompX International Inc."
    },
    {
    "Symbol":"CIXX",
    "Name":"CI Financial Corp. Common Shares"
    },
    {
    "Symbol":"CIZN",
    "Name":"Citizens Holding Company"
    },
    {
    "Symbol":"CJJD",
    "Name":"China Jo-Jo Drugstores Inc. (Cayman Islands) Ordinary Shares"
    },
    {
    "Symbol":"CKPT",
    "Name":"Checkpoint Therapeutics Inc."
    },
    {
    "Symbol":"CKX",
    "Name":"CKX Lands Inc."
    },
    {
    "Symbol":"CL",
    "Name":"Colgate-Palmolive Company"
    },
    {
    "Symbol":"CLAA",
    "Name":"Colonnade Acquisition Corp. II Class A Ordinary Shares"
    },
    {
    "Symbol":"CLAQ",
    "Name":"CleanTech Acquisition Corp."
    },
    {
    "Symbol":"CLAQR",
    "Name":"CleanTech Acquisition Corp. Rights"
    },
    {
    "Symbol":"CLAQU",
    "Name":"CleanTech Acquisition Corp. Units"
    },
    {
    "Symbol":"CLAQW",
    "Name":"CleanTech Acquisition Corp. Warrant"
    },
    {
    "Symbol":"CLAR",
    "Name":"Clarus Corporation"
    },
    {
    "Symbol":"CLAS",
    "Name":"Class Acceleration Corp. Class A"
    },
    {
    "Symbol":"CLAYW",
    "Name":"Chavant Capital Acquisition Corp. Warrants"
    },
    {
    "Symbol":"CLB",
    "Name":"Core Laboratories N.V."
    },
    {
    "Symbol":"CLBK",
    "Name":"Columbia Financial Inc."
    },
    {
    "Symbol":"CLBR",
    "Name":"Colombier Acquisition Corp. Class A"
    },
    {
    "Symbol":"CLBS",
    "Name":"Caladrius Biosciences Inc."
    },
    {
    "Symbol":"CLBT",
    "Name":"Cellebrite DI Ltd. Ordinary Shares"
    },
    {
    "Symbol":"CLBTW",
    "Name":"Cellebrite DI Ltd. Warrants"
    },
    {
    "Symbol":"CLDT",
    "Name":"Chatham Lodging Trust (REIT) Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"CLDT^A",
    "Name":"Chatham Lodging Trust (REIT) 6.625% Series A Cumulative Redeemable Preferred Shares of Beneficial Interest"
    },
    {
    "Symbol":"CLDX",
    "Name":"Celldex Therapeutics Inc."
    },
    {
    "Symbol":"CLEU",
    "Name":"China Liberal Education Holdings Limited Ordinary Shares"
    },
    {
    "Symbol":"CLF",
    "Name":"Cleveland-Cliffs Inc."
    },
    {
    "Symbol":"CLFD",
    "Name":"Clearfield Inc."
    },
    {
    "Symbol":"CLGN",
    "Name":"CollPlant Biotechnologies Ltd Ordinary Shares"
    },
    {
    "Symbol":"CLH",
    "Name":"Clean Harbors Inc."
    },
    {
    "Symbol":"CLIM",
    "Name":"Climate Real Impact Solutions II Acquisition Corporation Class A"
    },
    {
    "Symbol":"CLIR",
    "Name":"ClearSign Technologies Corporation"
    },
    {
    "Symbol":"CLLS",
    "Name":"Cellectis S.A. American Depositary Shares"
    },
    {
    "Symbol":"CLM",
    "Name":"Cornerstone Strategic Value Fund Inc. New"
    },
    {
    "Symbol":"CLMT",
    "Name":"Calumet Specialty Products Partners L.P. Common Units"
    },
    {
    "Symbol":"CLNE",
    "Name":"Clean Energy Fuels Corp."
    },
    {
    "Symbol":"CLNN",
    "Name":"Clene Inc."
    },
    {
    "Symbol":"CLNNW",
    "Name":"Clene Inc. Warrant"
    },
    {
    "Symbol":"CLOE",
    "Name":"Clover Leaf Capital Corp. Class A"
    },
    {
    "Symbol":"CLOER",
    "Name":"Clover Leaf Capital Corp. Rights"
    },
    {
    "Symbol":"CLOV",
    "Name":"Clover Health Investments Corp. Class A"
    },
    {
    "Symbol":"CLPR",
    "Name":"Clipper Realty Inc."
    },
    {
    "Symbol":"CLPS",
    "Name":"CLPS Incorporation"
    },
    {
    "Symbol":"CLPT",
    "Name":"ClearPoint Neuro Inc."
    },
    {
    "Symbol":"CLR",
    "Name":"Continental Resources Inc."
    },
    {
    "Symbol":"CLRB",
    "Name":"Cellectar Biosciences Inc. "
    },
    {
    "Symbol":"CLRM",
    "Name":"Clarim Acquisition Corp. Class A"
    },
    {
    "Symbol":"CLRMU",
    "Name":"Clarim Acquisition Corp. Unit"
    },
    {
    "Symbol":"CLRMW",
    "Name":"Clarim Acquisition Corp. Warrant"
    },
    {
    "Symbol":"CLRO",
    "Name":"ClearOne Inc. (DE)"
    },
    {
    "Symbol":"CLS",
    "Name":"Celestica Inc."
    },
    {
    "Symbol":"CLSD",
    "Name":"Clearside Biomedical Inc."
    },
    {
    "Symbol":"CLSK",
    "Name":"CleanSpark Inc."
    },
    {
    "Symbol":"CLSN",
    "Name":"Celsion Corporation"
    },
    {
    "Symbol":"CLST",
    "Name":"Catalyst Bancorp Inc."
    },
    {
    "Symbol":"CLVR",
    "Name":"Clever Leaves Holdings Inc. Common Shares"
    },
    {
    "Symbol":"CLVRW",
    "Name":"Clever Leaves Holdings Inc. Warrant"
    },
    {
    "Symbol":"CLVS",
    "Name":"Clovis Oncology Inc."
    },
    {
    "Symbol":"CLVT",
    "Name":"Clarivate Plc Ordinary Shares"
    },
    {
    "Symbol":"CLVT^A",
    "Name":"Clarivate Plc 5.25% Series A Mandatory Convertible Preferred Shares"
    },
    {
    "Symbol":"CLW",
    "Name":"Clearwater Paper Corporation"
    },
    {
    "Symbol":"CLWT",
    "Name":"Euro Tech Holdings Company Limited"
    },
    {
    "Symbol":"CLX",
    "Name":"Clorox Company (The)"
    },
    {
    "Symbol":"CLXT",
    "Name":"Calyxt Inc."
    },
    {
    "Symbol":"CM",
    "Name":"Canadian Imperial Bank of Commerce"
    },
    {
    "Symbol":"CMA",
    "Name":"Comerica Incorporated"
    },
    {
    "Symbol":"CMAX",
    "Name":"CareMax Inc. Class A"
    },
    {
    "Symbol":"CMAXW",
    "Name":"CareMax Inc. Warrant"
    },
    {
    "Symbol":"CMBM",
    "Name":"Cambium Networks Corporation Ordinary Shares"
    },
    {
    "Symbol":"CMC",
    "Name":"Commercial Metals Company"
    },
    {
    "Symbol":"CMCA",
    "Name":"Capitalworks Emerging Markets Acquisition Corp Class A Ordinary Shares"
    },
    {
    "Symbol":"CMCAU",
    "Name":"Capitalworks Emerging Markets Acquisition Corp Unit"
    },
    {
    "Symbol":"CMCAW",
    "Name":"Capitalworks Emerging Markets Acquisition Corp Warrant"
    },
    {
    "Symbol":"CMCL",
    "Name":"Caledonia Mining Corporation Plc Common Shares"
    },
    {
    "Symbol":"CMCM",
    "Name":"Cheetah Mobile Inc. American Depositary Shares each representing 10 Class Ordinary Shares"
    },
    {
    "Symbol":"CMCO",
    "Name":"Columbus McKinnon Corporation"
    },
    {
    "Symbol":"CMCSA",
    "Name":"Comcast Corporation Class A"
    },
    {
    "Symbol":"CMCT",
    "Name":"CIM Commercial Trust Corporation"
    },
    {
    "Symbol":"CME",
    "Name":"CME Group Inc. Class A"
    },
    {
    "Symbol":"CMG",
    "Name":"Chipotle Mexican Grill Inc."
    },
    {
    "Symbol":"CMI",
    "Name":"Cummins Inc."
    },
    {
    "Symbol":"CMLS",
    "Name":"Cumulus Media Inc. Class A"
    },
    {
    "Symbol":"CMMB",
    "Name":"Chemomab Therapeutics Ltd. American Depositary Share"
    },
    {
    "Symbol":"CMP",
    "Name":"Compass Minerals Intl Inc"
    },
    {
    "Symbol":"CMPI",
    "Name":"Checkmate Pharmaceuticals Inc."
    },
    {
    "Symbol":"CMPO",
    "Name":"CompoSecure Inc. Class A"
    },
    {
    "Symbol":"CMPOW",
    "Name":"CompoSecure Inc. Warrant"
    },
    {
    "Symbol":"CMPR",
    "Name":"Cimpress plc Ordinary Shares (Ireland)"
    },
    {
    "Symbol":"CMPS",
    "Name":"COMPASS Pathways Plc American Depository Shares"
    },
    {
    "Symbol":"CMPX",
    "Name":"Compass Therapeutics Inc."
    },
    {
    "Symbol":"CMRE",
    "Name":"Costamare Inc.   $0.0001 par value"
    },
    {
    "Symbol":"CMRE^B",
    "Name":"Costamare Inc. Perpetual Preferred Stock Series B (Marshall Islands)"
    },
    {
    "Symbol":"CMRE^C",
    "Name":"Costamare Inc. Perpetual Preferred Series C (Marshall Islands)"
    },
    {
    "Symbol":"CMRE^D",
    "Name":"Costamare Inc. 8.75% Series D Cumulative Redeemable Perpetual Preferred Stock"
    },
    {
    "Symbol":"CMRE^E",
    "Name":"Costamare Inc. 8.875% Series E Cumulative Redeemable Perpetual Preferred Stock par value $0.0001"
    },
    {
    "Symbol":"CMRX",
    "Name":"Chimerix Inc."
    },
    {
    "Symbol":"CMS",
    "Name":"CMS Energy Corporation"
    },
    {
    "Symbol":"CMS^B",
    "Name":"CMS Energy Corporation Preferred Stock"
    },
    {
    "Symbol":"CMS^C",
    "Name":"CMS Energy Corporation Depositary Shares each representing a 1/1000th interest in a share of 4.200% Cumulative Redeemable Perpetual Preferred Stock Series C"
    },
    {
    "Symbol":"CMSA",
    "Name":"CMS Energy Corporation 5.625% Junior Subordinated Notes due 2078"
    },
    {
    "Symbol":"CMSC",
    "Name":"CMS Energy Corporation 5.875% Junior Subordinated Notes due 2078"
    },
    {
    "Symbol":"CMSD",
    "Name":"CMS Energy Corporation 5.875% Junior Subordinated Notes due 2079"
    },
    {
    "Symbol":"CMT",
    "Name":"Core Molding Technologies Inc"
    },
    {
    "Symbol":"CMTG",
    "Name":"Claros Mortgage Trust Inc."
    },
    {
    "Symbol":"CMTL",
    "Name":"Comtech Telecommunications Corp."
    },
    {
    "Symbol":"CMU",
    "Name":"MFS Municipal Income Trust"
    },
    {
    "Symbol":"CNA",
    "Name":"CNA Financial Corporation"
    },
    {
    "Symbol":"CNC",
    "Name":"Centene Corporation"
    },
    {
    "Symbol":"CNCE",
    "Name":"Concert Pharmaceuticals Inc."
    },
    {
    "Symbol":"CND",
    "Name":"Concord Acquisition Corp. Class A"
    },
    {
    "Symbol":"CNDA",
    "Name":"Concord Acquisition Corp II Class A"
    },
    {
    "Symbol":"CNDB",
    "Name":"Concord Acquisition Corp III Class A"
    },
    {
    "Symbol":"CNDT",
    "Name":"Conduent Incorporated"
    },
    {
    "Symbol":"CNET",
    "Name":"ZW Data Action Technologies Inc."
    },
    {
    "Symbol":"CNEY",
    "Name":"CN Energy Group Inc. Ordinary Shares"
    },
    {
    "Symbol":"CNF",
    "Name":"CNFinance Holdings Limited American Depositary Shares each representing  twenty (20) Ordinary Shares"
    },
    {
    "Symbol":"CNFR",
    "Name":"Conifer Holdings Inc."
    },
    {
    "Symbol":"CNFRL",
    "Name":"Conifer Holdings Inc. 6.75% Senior Unsecured Notes due 2023"
    },
    {
    "Symbol":"CNGL",
    "Name":"Canna-Global Acquisition Corp. Class A"
    },
    {
    "Symbol":"CNGLU",
    "Name":"Canna-Global Acquisition Corp Unit"
    },
    {
    "Symbol":"CNGLW",
    "Name":"Canna-Global Acquisition Corp Warrant"
    },
    {
    "Symbol":"CNHI",
    "Name":"CNH Industrial N.V. Common Shares"
    },
    {
    "Symbol":"CNI",
    "Name":"Canadian National Railway Company"
    },
    {
    "Symbol":"CNK",
    "Name":"Cinemark Holdings Inc Cinemark Holdings Inc."
    },
    {
    "Symbol":"CNM",
    "Name":"Core & Main Inc. Class A"
    },
    {
    "Symbol":"CNMD",
    "Name":"CONMED Corporation"
    },
    {
    "Symbol":"CNNB",
    "Name":"Cincinnati Bancorp Inc."
    },
    {
    "Symbol":"CNNE",
    "Name":"Cannae Holdings Inc."
    },
    {
    "Symbol":"CNO",
    "Name":"CNO Financial Group Inc."
    },
    {
    "Symbol":"CNO^A",
    "Name":"CNO Financial Group Inc. 5.125% Subordinated Debentures due 2060"
    },
    {
    "Symbol":"CNOB",
    "Name":"ConnectOne Bancorp Inc."
    },
    {
    "Symbol":"CNOBP",
    "Name":"ConnectOne Bancorp Inc. Depositary Shares each representing a 1/40th interest in a share of 5.25% Fixed-Rate Reset Non-Cumulative Perpetual Preferred Stock Series A"
    },
    {
    "Symbol":"CNP",
    "Name":"CenterPoint Energy Inc (Holding Co)"
    },
    {
    "Symbol":"CNQ",
    "Name":"Canadian Natural Resources Limited"
    },
    {
    "Symbol":"CNR",
    "Name":"Cornerstone Building Brands Inc."
    },
    {
    "Symbol":"CNS",
    "Name":"Cohen & Steers Inc"
    },
    {
    "Symbol":"CNSL",
    "Name":"Consolidated Communications Holdings Inc."
    },
    {
    "Symbol":"CNSP",
    "Name":"CNS Pharmaceuticals Inc."
    },
    {
    "Symbol":"CNTA",
    "Name":"Centessa Pharmaceuticals plc American Depositary Shares"
    },
    {
    "Symbol":"CNTB",
    "Name":"Connect Biopharma Holdings Limited American Depositary Shares"
    },
    {
    "Symbol":"CNTG",
    "Name":"Centogene N.V. Common Shares"
    },
    {
    "Symbol":"CNTQ",
    "Name":"Chardan NexTech Acquisition 2 Corp. Class A"
    },
    {
    "Symbol":"CNTQU",
    "Name":"Chardan NexTech Acquisition 2 Corp. Unit"
    },
    {
    "Symbol":"CNTQW",
    "Name":"Chardan NexTech Acquisition 2 Corp. Warrant"
    },
    {
    "Symbol":"CNTX",
    "Name":"Context Therapeutics Inc."
    },
    {
    "Symbol":"CNTY",
    "Name":"Century Casinos Inc."
    },
    {
    "Symbol":"CNVY",
    "Name":"Convey Health Solutions Holdings Inc."
    },
    {
    "Symbol":"CNX",
    "Name":"CNX Resources Corporation"
    },
    {
    "Symbol":"CNXC",
    "Name":"Concentrix Corporation"
    },
    {
    "Symbol":"CNXN",
    "Name":"PC Connection Inc."
    },
    {
    "Symbol":"CO",
    "Name":"Global Cord Blood Corporation"
    },
    {
    "Symbol":"COCO",
    "Name":"The Vita Coco Company Inc."
    },
    {
    "Symbol":"COCP",
    "Name":"Cocrystal Pharma Inc."
    },
    {
    "Symbol":"CODA",
    "Name":"Coda Octopus Group Inc."
    },
    {
    "Symbol":"CODI",
    "Name":"D/B/A Compass Diversified Holdings Shares of Beneficial Interest"
    },
    {
    "Symbol":"CODI^A",
    "Name":"Compass Diversified Holdings 7.250% Series A Preferred Shares representing beneficial interest in Compass Diversified Holdings"
    },
    {
    "Symbol":"CODI^B",
    "Name":"Compass Diversified Holdings 7.875% Series B Fixed-to-Floating Rate Cumulative Preferred Shares representing beneficial interests in Compass Diversified Holdings"
    },
    {
    "Symbol":"CODI^C",
    "Name":"Compass Diversified Holdings 7.875% Series C Cumulative Preferred Shares"
    },
    {
    "Symbol":"CODX",
    "Name":"Co-Diagnostics Inc."
    },
    {
    "Symbol":"COE",
    "Name":"China Online Education Group American depositary shares each representing 15 Class A ordinary shares"
    },
    {
    "Symbol":"COF",
    "Name":"Capital One Financial Corporation"
    },
    {
    "Symbol":"COF^I",
    "Name":"Capital One Financial Corporation Depositary shares each representing a 1/40th interest in a share of Fixed Rate Non-Cumulative Perpetual Preferred Stock Series I of the Issuer"
    },
    {
    "Symbol":"COF^J",
    "Name":"Capital One Financial Corporation Depositary Shares Each Representing a 1/40th Interest in a Share of Fixed Rate Non- Cumulative Perpetual Preferred Stock Series J"
    },
    {
    "Symbol":"COF^K",
    "Name":"Capital One Financial Corporation Depositary Shares Each Representing a 1/40th Ownership Interest in a Share of Fixed Rate Non-Cumulative Perpetual Preferred Stock Series K"
    },
    {
    "Symbol":"COF^L",
    "Name":"Capital One Financial Corporation Depositary Shares Each Representing a 1/40th Interest in a Share of Fixed Rate Non-Cumulative Perpetual Preferred Stock Series L"
    },
    {
    "Symbol":"COF^N",
    "Name":"Capital One Financial Corporation Depositary Shares Each Representing a 1/40th Ownership Interest in a Share of Fixed Rate Non-Cumulative Perpetual Preferred Stock Series N"
    },
    {
    "Symbol":"COFS",
    "Name":"ChoiceOne Financial Services Inc."
    },
    {
    "Symbol":"COGT",
    "Name":"Cogent Biosciences Inc."
    },
    {
    "Symbol":"COHN",
    "Name":"Cohen & Company Inc."
    },
    {
    "Symbol":"COHR",
    "Name":"Coherent Inc."
    },
    {
    "Symbol":"COHU",
    "Name":"Cohu Inc."
    },
    {
    "Symbol":"COIN",
    "Name":"Coinbase Global Inc. Class A"
    },
    {
    "Symbol":"COKE",
    "Name":"Coca-Cola Consolidated Inc."
    },
    {
    "Symbol":"COLB",
    "Name":"Columbia Banking System Inc."
    },
    {
    "Symbol":"COLD",
    "Name":"Americold Realty Trust Common Shares"
    },
    {
    "Symbol":"COLI",
    "Name":"Colicity Inc. Class A"
    },
    {
    "Symbol":"COLIU",
    "Name":"Colicity Inc. Units"
    },
    {
    "Symbol":"COLIW",
    "Name":"Colicity Inc. Warrant"
    },
    {
    "Symbol":"COLL",
    "Name":"Collegium Pharmaceutical Inc."
    },
    {
    "Symbol":"COLM",
    "Name":"Columbia Sportswear Company"
    },
    {
    "Symbol":"COMM",
    "Name":"CommScope Holding Company Inc."
    },
    {
    "Symbol":"COMP",
    "Name":"Compass Inc. Class A"
    },
    {
    "Symbol":"COMS",
    "Name":"ComSovereign Holding Corp."
    },
    {
    "Symbol":"COMSP",
    "Name":"ComSovereign Holding Corp. 9.25% Series A Cumulative Redeemable Perpetual Preferred Stock"
    },
    {
    "Symbol":"COMSW",
    "Name":"ComSovereign Holding Corp. Warrants"
    },
    {
    "Symbol":"CONE",
    "Name":"CyrusOne Inc"
    },
    {
    "Symbol":"CONN",
    "Name":"Conn's Inc."
    },
    {
    "Symbol":"CONX",
    "Name":"CONX Corp. Class A"
    },
    {
    "Symbol":"CONXU",
    "Name":"CONX Corp. Unit"
    },
    {
    "Symbol":"CONXW",
    "Name":"CONX Corp. Warrant"
    },
    {
    "Symbol":"COO",
    "Name":"The Cooper Companies Inc."
    },
    {
    "Symbol":"COOK",
    "Name":"Traeger Inc."
    },
    {
    "Symbol":"COOL",
    "Name":"Corner Growth Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"COOLU",
    "Name":"Corner Growth Acquisition Corp. Unit"
    },
    {
    "Symbol":"COOLW",
    "Name":"Corner Growth Acquisition Corp. Warrant"
    },
    {
    "Symbol":"COOP",
    "Name":"Mr. Cooper Group Inc."
    },
    {
    "Symbol":"COP",
    "Name":"ConocoPhillips"
    },
    {
    "Symbol":"CORR",
    "Name":"CorEnergy Infrastructure Trust Inc."
    },
    {
    "Symbol":"CORR^A",
    "Name":"CorEnergy Infrastructure Trust Inc. Depositary Shares each representing a 1/100th fractional interest of a share of 7.375% Series A Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"CORS",
    "Name":"Corsair Partnering Corporation Class A Ordinary Shares"
    },
    {
    "Symbol":"CORT",
    "Name":"Corcept Therapeutics Incorporated"
    },
    {
    "Symbol":"CORZ",
    "Name":"Core Scientific Inc."
    },
    {
    "Symbol":"CORZW",
    "Name":"Core Scientific Inc. Warrant"
    },
    {
    "Symbol":"COST",
    "Name":"Costco Wholesale Corporation"
    },
    {
    "Symbol":"COTY",
    "Name":"Coty Inc. Class A"
    },
    {
    "Symbol":"COUP",
    "Name":"Coupa Software Incorporated"
    },
    {
    "Symbol":"COUR",
    "Name":"Coursera Inc."
    },
    {
    "Symbol":"COVA",
    "Name":"COVA Acquisition Corp. Class A Ordinary Share"
    },
    {
    "Symbol":"COVAU",
    "Name":"COVA Acquisition Corp. Unit"
    },
    {
    "Symbol":"COVAW",
    "Name":"COVA Acquisition Corp. Warrants to purchase Class A ordinary shares"
    },
    {
    "Symbol":"COWN",
    "Name":"Cowen Inc. Class A"
    },
    {
    "Symbol":"COWNL",
    "Name":"Cowen Inc. 7.75% Senior Notes due 2033"
    },
    {
    "Symbol":"CP",
    "Name":"Canadian Pacific Railway Limited"
    },
    {
    "Symbol":"CPA",
    "Name":"Copa Holdings S.A. Copa Holdings S.A. Class A"
    },
    {
    "Symbol":"CPAA",
    "Name":"Conyers Park III Acquisition Corp. Class A"
    },
    {
    "Symbol":"CPAC",
    "Name":"Cementos Pacasmayo S.A.A. American Depositary Shares (Each representing five Common Shares)"
    },
    {
    "Symbol":"CPAR",
    "Name":"Catalyst Partners Acquisition Corp. Class A Ordinary Share"
    },
    {
    "Symbol":"CPARU",
    "Name":"Catalyst Partners Acquisition Corp. Unit"
    },
    {
    "Symbol":"CPARW",
    "Name":"Catalyst Partners Acquisition Corp. Warrant"
    },
    {
    "Symbol":"CPB",
    "Name":"Campbell Soup Company"
    },
    {
    "Symbol":"CPE",
    "Name":"Callon Petroleum Company"
    },
    {
    "Symbol":"CPF",
    "Name":"Central Pacific Financial Corp New"
    },
    {
    "Symbol":"CPG",
    "Name":"Crescent Point Energy Corporation Ordinary Shares (Canada)"
    },
    {
    "Symbol":"CPHC",
    "Name":"Canterbury Park Holding Corporation 'New'"
    },
    {
    "Symbol":"CPHI",
    "Name":"China Pharma Holdings Inc."
    },
    {
    "Symbol":"CPIX",
    "Name":"Cumberland Pharmaceuticals Inc."
    },
    {
    "Symbol":"CPK",
    "Name":"Chesapeake Utilities Corporation"
    },
    {
    "Symbol":"CPLG",
    "Name":"CorePoint Lodging Inc."
    },
    {
    "Symbol":"CPLP",
    "Name":"Capital Product Partners L.P. Common Units"
    },
    {
    "Symbol":"CPNG",
    "Name":"Coupang Inc. Class A"
    },
    {
    "Symbol":"CPOP",
    "Name":"Pop Culture Group Co. Ltd Class A Ordinary Shares"
    },
    {
    "Symbol":"CPRI",
    "Name":"Capri Holdings Limited Ordinary Shares"
    },
    {
    "Symbol":"CPRT",
    "Name":"Copart Inc. (DE)"
    },
    {
    "Symbol":"CPRX",
    "Name":"Catalyst Pharmaceuticals Inc."
    },
    {
    "Symbol":"CPS",
    "Name":"Cooper-Standard Holdings Inc."
    },
    {
    "Symbol":"CPSH",
    "Name":"CPS Technologies Corp."
    },
    {
    "Symbol":"CPSI",
    "Name":"Computer Programs and Systems Inc."
    },
    {
    "Symbol":"CPSS",
    "Name":"Consumer Portfolio Services Inc."
    },
    {
    "Symbol":"CPT",
    "Name":"Camden Property Trust"
    },
    {
    "Symbol":"CPTAG",
    "Name":"Capitala Finance Corp. 5.75% Convertible Notes Due 2022"
    },
    {
    "Symbol":"CPTAL",
    "Name":"Capitala Finance Corp. 6% Notes Due 2022"
    },
    {
    "Symbol":"CPTK",
    "Name":"Crown PropTech Acquisitions Class A Ordinary Shares"
    },
    {
    "Symbol":"CPUH",
    "Name":"Compute Health Acquisition Corp. Class A"
    },
    {
    "Symbol":"CPZ",
    "Name":"Calamos Long/Short Equity & Dynamic Income Trust"
    },
    {
    "Symbol":"CQP",
    "Name":"Cheniere Energy Partners LP Cheniere Energy Partners LP Common Units"
    },
    {
    "Symbol":"CR",
    "Name":"Crane Co."
    },
    {
    "Symbol":"CRAI",
    "Name":"CRA International Inc."
    },
    {
    "Symbol":"CRBP",
    "Name":"Corbus Pharmaceuticals Holdings Inc."
    },
    {
    "Symbol":"CRBU",
    "Name":"Caribou Biosciences Inc."
    },
    {
    "Symbol":"CRC",
    "Name":"California Resources Corporation"
    },
    {
    "Symbol":"CRCT",
    "Name":"Cricut Inc. Class A"
    },
    {
    "Symbol":"CRD/A",
    "Name":"Crawford & Company"
    },
    {
    "Symbol":"CRD/B",
    "Name":"Crawford & Company"
    },
    {
    "Symbol":"CRDF",
    "Name":"Cardiff Oncology Inc."
    },
    {
    "Symbol":"CRDL",
    "Name":"Cardiol Therapeutics Inc. Class A Common Shares"
    },
    {
    "Symbol":"CREC",
    "Name":"Crescera Capital Acquisition Corp Class A Ordinary Shares"
    },
    {
    "Symbol":"CRECU",
    "Name":"Crescera Capital Acquisition Corp Unit"
    },
    {
    "Symbol":"CRECW",
    "Name":"Crescera Capital Acquisition Corp Warrant"
    },
    {
    "Symbol":"CREG",
    "Name":"China Recycling Energy Corporation"
    },
    {
    "Symbol":"CRESW",
    "Name":"Cresud S.A.C.I.F. y A. Warrant"
    },
    {
    "Symbol":"CRESY",
    "Name":"Cresud S.A.C.I.F. y A. American Depositary Shares"
    },
    {
    "Symbol":"CREX",
    "Name":"Creative Realities Inc."
    },
    {
    "Symbol":"CREXW",
    "Name":"Creative Realities Inc. Warrant"
    },
    {
    "Symbol":"CRF",
    "Name":"Cornerstone Total Return Fund Inc. (The)"
    },
    {
    "Symbol":"CRGY",
    "Name":"Crescent Energy Company Class A"
    },
    {
    "Symbol":"CRH",
    "Name":"CRH PLC American Depositary Shares"
    },
    {
    "Symbol":"CRHC",
    "Name":"Cohn Robbins Holdings Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"CRI",
    "Name":"Carter's Inc."
    },
    {
    "Symbol":"CRIS",
    "Name":"Curis Inc."
    },
    {
    "Symbol":"CRK",
    "Name":"Comstock Resources Inc."
    },
    {
    "Symbol":"CRKN",
    "Name":"Crown Electrokinetics Corp."
    },
    {
    "Symbol":"CRL",
    "Name":"Charles River Laboratories International Inc."
    },
    {
    "Symbol":"CRM",
    "Name":"Salesforce.com Inc"
    },
    {
    "Symbol":"CRMD",
    "Name":"CorMedix Inc."
    },
    {
    "Symbol":"CRMT",
    "Name":"America's Car-Mart Inc"
    },
    {
    "Symbol":"CRNC",
    "Name":"Cerence Inc."
    },
    {
    "Symbol":"CRNT",
    "Name":"Ceragon Networks Ltd. Ordinary Shares"
    },
    {
    "Symbol":"CRNX",
    "Name":"Crinetics Pharmaceuticals Inc."
    },
    {
    "Symbol":"CRON",
    "Name":"Cronos Group Inc. Common Share"
    },
    {
    "Symbol":"CROX",
    "Name":"Crocs Inc."
    },
    {
    "Symbol":"CRS",
    "Name":"Carpenter Technology Corporation"
    },
    {
    "Symbol":"CRSP",
    "Name":"CRISPR Therapeutics AG Common Shares"
    },
    {
    "Symbol":"CRSR",
    "Name":"Corsair Gaming Inc."
    },
    {
    "Symbol":"CRT",
    "Name":"Cross Timbers Royalty Trust"
    },
    {
    "Symbol":"CRTD",
    "Name":"Creatd Inc."
    },
    {
    "Symbol":"CRTDW",
    "Name":"Creatd Inc. Warrant"
    },
    {
    "Symbol":"CRTO",
    "Name":"Criteo S.A. American Depositary Shares"
    },
    {
    "Symbol":"CRTX",
    "Name":"Cortexyme Inc."
    },
    {
    "Symbol":"CRU",
    "Name":"Crucible Acquisition Corporation Class A"
    },
    {
    "Symbol":"CRUS",
    "Name":"Cirrus Logic Inc."
    },
    {
    "Symbol":"CRVL",
    "Name":"CorVel Corp."
    },
    {
    "Symbol":"CRVS",
    "Name":"Corvus Pharmaceuticals Inc."
    },
    {
    "Symbol":"CRWD",
    "Name":"CrowdStrike Holdings Inc. Class A"
    },
    {
    "Symbol":"CRWS",
    "Name":"Crown Crafts Inc"
    },
    {
    "Symbol":"CRXT",
    "Name":"Clarus Therapeutics Holdings Inc."
    },
    {
    "Symbol":"CRXTW",
    "Name":"Clarus Therapeutics Holdings Inc. Warrants"
    },
    {
    "Symbol":"CRZN",
    "Name":"Corazon Capital V838 Monoceros Corp Class A Ordinary Shares"
    },
    {
    "Symbol":"CRZNW",
    "Name":"Corazon Capital V838 Monoceros Corp Warrant"
    },
    {
    "Symbol":"CS",
    "Name":"Credit Suisse Group American Depositary Shares"
    },
    {
    "Symbol":"CSAN",
    "Name":"Cosan S.A. ADS"
    },
    {
    "Symbol":"CSBR",
    "Name":"Champions Oncology Inc."
    },
    {
    "Symbol":"CSCO",
    "Name":"Cisco Systems Inc.   (DE)"
    },
    {
    "Symbol":"CSCW",
    "Name":"Color Star Technology Co. Ltd. Ordinary Shares"
    },
    {
    "Symbol":"CSGP",
    "Name":"CoStar Group Inc."
    },
    {
    "Symbol":"CSGS",
    "Name":"CSG Systems International Inc."
    },
    {
    "Symbol":"CSII",
    "Name":"Cardiovascular Systems Inc."
    },
    {
    "Symbol":"CSIQ",
    "Name":"Canadian Solar Inc. Common Shares (BC)"
    },
    {
    "Symbol":"CSL",
    "Name":"Carlisle Companies Incorporated"
    },
    {
    "Symbol":"CSLMU",
    "Name":"Consilium Acquisition Corp I Ltd. Unit"
    },
    {
    "Symbol":"CSLT",
    "Name":"Castlight Health Inc. Class B"
    },
    {
    "Symbol":"CSPI",
    "Name":"CSP Inc."
    },
    {
    "Symbol":"CSQ",
    "Name":"Calamos Strategic Total Return"
    },
    {
    "Symbol":"CSR",
    "Name":"D/B/A Centerspace"
    },
    {
    "Symbol":"CSR^C",
    "Name":"D/B/A Centerspace 6.625% Series C"
    },
    {
    "Symbol":"CSSE",
    "Name":"Chicken Soup for the Soul Entertainment Inc. Class A"
    },
    {
    "Symbol":"CSSEN",
    "Name":"Chicken Soup for the Soul Entertainment Inc. 9.50% Notes due 2025"
    },
    {
    "Symbol":"CSSEP",
    "Name":"Chicken Soup for the Soul Entertainment Inc. 9.75% Series A Cumulative Redeemable Perpetual Preferred Stock"
    },
    {
    "Symbol":"CSTA",
    "Name":"Constellation Acquisition Corp I Class A Ordinary Shares"
    },
    {
    "Symbol":"CSTE",
    "Name":"Caesarstone Ltd. Ordinary Shares"
    },
    {
    "Symbol":"CSTL",
    "Name":"Castle Biosciences Inc."
    },
    {
    "Symbol":"CSTM",
    "Name":"Constellium SE Ordinary Shares (France)"
    },
    {
    "Symbol":"CSTR",
    "Name":"CapStar Financial Holdings Inc."
    },
    {
    "Symbol":"CSV",
    "Name":"Carriage Services Inc."
    },
    {
    "Symbol":"CSWC",
    "Name":"Capital Southwest Corporation"
    },
    {
    "Symbol":"CSWI",
    "Name":"CSW Industrials Inc."
    },
    {
    "Symbol":"CSX",
    "Name":"CSX Corporation"
    },
    {
    "Symbol":"CTA^A",
    "Name":"E.I. du Pont de Nemours and Company Preferred Stock"
    },
    {
    "Symbol":"CTA^B",
    "Name":"E.I. du Pont de Nemours and Company Preferred Stock"
    },
    {
    "Symbol":"CTAQ",
    "Name":"Carney Technology Acquisition Corp. II Class A"
    },
    {
    "Symbol":"CTAQU",
    "Name":"Carney Technology Acquisition Corp. II Units"
    },
    {
    "Symbol":"CTAQW",
    "Name":"Carney Technology Acquisition Corp. II Warrant"
    },
    {
    "Symbol":"CTAS",
    "Name":"Cintas Corporation"
    },
    {
    "Symbol":"CTBB",
    "Name":"Qwest Corporation 6.5% Notes due 2056"
    },
    {
    "Symbol":"CTBI",
    "Name":"Community Trust Bancorp Inc."
    },
    {
    "Symbol":"CTDD",
    "Name":"Qwest Corporation 6.75% Notes due 2057"
    },
    {
    "Symbol":"CTEK",
    "Name":"CynergisTek Inc."
    },
    {
    "Symbol":"CTG",
    "Name":"Computer Task Group Inc."
    },
    {
    "Symbol":"CTGO",
    "Name":"Contango ORE Inc."
    },
    {
    "Symbol":"CTHR",
    "Name":"Charles & Colvard Ltd"
    },
    {
    "Symbol":"CTIB",
    "Name":"Yunhong CTI Ltd."
    },
    {
    "Symbol":"CTIC",
    "Name":"CTI BioPharma Corp. (DE)"
    },
    {
    "Symbol":"CTK",
    "Name":"CooTek (Cayman) Inc. American Depositary Shares each representing 50 Class A Ordinary Shares"
    },
    {
    "Symbol":"CTKB",
    "Name":"Cytek Biosciences Inc."
    },
    {
    "Symbol":"CTLP",
    "Name":"Cantaloupe Inc."
    },
    {
    "Symbol":"CTLT",
    "Name":"Catalent Inc."
    },
    {
    "Symbol":"CTMX",
    "Name":"CytomX Therapeutics Inc."
    },
    {
    "Symbol":"CTO",
    "Name":"CTO Realty Growth Inc."
    },
    {
    "Symbol":"CTO^A",
    "Name":"CTO Realty Growth Inc. 6.375% Series A Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"CTOS",
    "Name":"Custom Truck One Source Inc."
    },
    {
    "Symbol":"CTR",
    "Name":"ClearBridge MLP and Midstream Total Return Fund Inc."
    },
    {
    "Symbol":"CTRA",
    "Name":"Coterra Energy Inc."
    },
    {
    "Symbol":"CTRE",
    "Name":"CareTrust REIT Inc."
    },
    {
    "Symbol":"CTRM",
    "Name":"Castor Maritime Inc. Common Shares"
    },
    {
    "Symbol":"CTRN",
    "Name":"Citi Trends Inc."
    },
    {
    "Symbol":"CTS",
    "Name":"CTS Corporation"
    },
    {
    "Symbol":"CTSH",
    "Name":"Cognizant Technology Solutions Corporation Class A"
    },
    {
    "Symbol":"CTSO",
    "Name":"Cytosorbents Corporation"
    },
    {
    "Symbol":"CTT",
    "Name":"CatchMark Timber Trust Inc. Class A"
    },
    {
    "Symbol":"CTV",
    "Name":"Innovid Corp."
    },
    {
    "Symbol":"CTVA",
    "Name":"Corteva Inc."
    },
    {
    "Symbol":"CTXR",
    "Name":"Citius Pharmaceuticals Inc."
    },
    {
    "Symbol":"CTXRW",
    "Name":"Citius Pharmaceuticals Inc. Warrant"
    },
    {
    "Symbol":"CTXS",
    "Name":"Citrix Systems Inc."
    },
    {
    "Symbol":"CUBA",
    "Name":"Herzfeld Caribbean Basin Fund Inc. (The)"
    },
    {
    "Symbol":"CUBB",
    "Name":"Customers Bancorp Inc 5.375% Subordinated Notes Due 2034"
    },
    {
    "Symbol":"CUBE",
    "Name":"CubeSmart Common Shares"
    },
    {
    "Symbol":"CUBI",
    "Name":"Customers Bancorp Inc"
    },
    {
    "Symbol":"CUBI^E",
    "Name":"Customers Bancorp Inc Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series E"
    },
    {
    "Symbol":"CUBI^F",
    "Name":"Customers Bancorp Inc Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series F"
    },
    {
    "Symbol":"CUE",
    "Name":"Cue Biopharma Inc."
    },
    {
    "Symbol":"CUEN",
    "Name":"Cuentas Inc."
    },
    {
    "Symbol":"CUENW",
    "Name":"Cuentas Inc. Warrant"
    },
    {
    "Symbol":"CUK",
    "Name":"Carnival Plc ADS ADS"
    },
    {
    "Symbol":"CULL",
    "Name":"Cullman Bancorp Inc."
    },
    {
    "Symbol":"CULP",
    "Name":"Culp Inc."
    },
    {
    "Symbol":"CURI",
    "Name":"CuriosityStream Inc. Class A"
    },
    {
    "Symbol":"CURIW",
    "Name":"CuriosityStream Inc. Warrant"
    },
    {
    "Symbol":"CURO",
    "Name":"CURO Group Holdings Corp."
    },
    {
    "Symbol":"CURV",
    "Name":"Torrid Holdings Inc."
    },
    {
    "Symbol":"CUTR",
    "Name":"Cutera Inc."
    },
    {
    "Symbol":"CUZ",
    "Name":"Cousins Properties Incorporated"
    },
    {
    "Symbol":"CVAC",
    "Name":"CureVac N.V. Ordinary Shares"
    },
    {
    "Symbol":"CVBF",
    "Name":"CVB Financial Corporation"
    },
    {
    "Symbol":"CVCO",
    "Name":"Cavco Industries Inc.   When Issued"
    },
    {
    "Symbol":"CVCY",
    "Name":"Central Valley Community Bancorp"
    },
    {
    "Symbol":"CVE",
    "Name":"Cenovus Energy Inc"
    },
    {
    "Symbol":"CVEO",
    "Name":"Civeo Corporation (Canada) Common Shares"
    },
    {
    "Symbol":"CVET",
    "Name":"Covetrus Inc."
    },
    {
    "Symbol":"CVGI",
    "Name":"Commercial Vehicle Group Inc."
    },
    {
    "Symbol":"CVGW",
    "Name":"Calavo Growers Inc."
    },
    {
    "Symbol":"CVI",
    "Name":"CVR Energy Inc."
    },
    {
    "Symbol":"CVII",
    "Name":"Churchill Capital Corp VII Class A"
    },
    {
    "Symbol":"CVLG",
    "Name":"Covenant Logistics Group Inc. Class A"
    },
    {
    "Symbol":"CVLT",
    "Name":"Commvault Systems Inc."
    },
    {
    "Symbol":"CVLY",
    "Name":"Codorus Valley Bancorp Inc"
    },
    {
    "Symbol":"CVM",
    "Name":"Cel-Sci Corporation"
    },
    {
    "Symbol":"CVNA",
    "Name":"Carvana Co. Class A"
    },
    {
    "Symbol":"CVR",
    "Name":"Chicago Rivet & Machine Co."
    },
    {
    "Symbol":"CVRX",
    "Name":"CVRx Inc."
    },
    {
    "Symbol":"CVS",
    "Name":"CVS Health Corporation"
    },
    {
    "Symbol":"CVT",
    "Name":"Cvent Holding Corp."
    },
    {
    "Symbol":"CVU",
    "Name":"CPI Aerostructures Inc."
    },
    {
    "Symbol":"CVV",
    "Name":"CVD Equipment Corporation"
    },
    {
    "Symbol":"CVX",
    "Name":"Chevron Corporation"
    },
    {
    "Symbol":"CW",
    "Name":"Curtiss-Wright Corporation"
    },
    {
    "Symbol":"CWAN",
    "Name":"Clearwater Analytics Holdings Inc. Class A"
    },
    {
    "Symbol":"CWBC",
    "Name":"Community West Bancshares"
    },
    {
    "Symbol":"CWBR",
    "Name":"CohBar Inc."
    },
    {
    "Symbol":"CWCO",
    "Name":"Consolidated Water Co. Ltd. Ordinary Shares"
    },
    {
    "Symbol":"CWEN",
    "Name":"Clearway Energy Inc. Class C"
    },
    {
    "Symbol":"CWH",
    "Name":"Camping World Holdings Inc. Class A Commom Stock"
    },
    {
    "Symbol":"CWK",
    "Name":"Cushman & Wakefield plc Ordinary Shares"
    },
    {
    "Symbol":"CWST",
    "Name":"Casella Waste Systems Inc. Class A"
    },
    {
    "Symbol":"CWT",
    "Name":"California Water Service Group"
    },
    {
    "Symbol":"CX",
    "Name":"Cemex S.A.B. de C.V. Sponsored ADR"
    },
    {
    "Symbol":"CXDO",
    "Name":"Crexendo Inc."
    },
    {
    "Symbol":"CXE",
    "Name":"MFS High Income Municipal Trust"
    },
    {
    "Symbol":"CXH",
    "Name":"MFS Investment Grade Municipal Trust"
    },
    {
    "Symbol":"CXM",
    "Name":"Sprinklr Inc. Class A"
    },
    {
    "Symbol":"CXW",
    "Name":"CoreCivic Inc."
    },
    {
    "Symbol":"CYAD",
    "Name":"Celyad Oncology SA American Depositary Shares"
    },
    {
    "Symbol":"CYAN",
    "Name":"Cyanotech Corporation"
    },
    {
    "Symbol":"CYBE",
    "Name":"CyberOptics Corporation"
    },
    {
    "Symbol":"CYBN",
    "Name":"Cybin Inc. Common Shares"
    },
    {
    "Symbol":"CYBR",
    "Name":"CyberArk Software Ltd. Ordinary Shares"
    },
    {
    "Symbol":"CYCC",
    "Name":"Cyclacel Pharmaceuticals Inc."
    },
    {
    "Symbol":"CYCCP",
    "Name":"Cyclacel Pharmaceuticals Inc. 6% Convertible Preferred Stock"
    },
    {
    "Symbol":"CYCN",
    "Name":"Cyclerion Therapeutics Inc."
    },
    {
    "Symbol":"CYD",
    "Name":"China Yuchai International Limited"
    },
    {
    "Symbol":"CYH",
    "Name":"Community Health Systems Inc."
    },
    {
    "Symbol":"CYN",
    "Name":"Cyngn Inc."
    },
    {
    "Symbol":"CYRN",
    "Name":"CYREN Ltd. Ordinary Shares"
    },
    {
    "Symbol":"CYRX",
    "Name":"CryoPort Inc."
    },
    {
    "Symbol":"CYT",
    "Name":"Cyteir Therapeutics Inc."
    },
    {
    "Symbol":"CYTH",
    "Name":"Cyclo Therapeutics Inc."
    },
    {
    "Symbol":"CYTK",
    "Name":"Cytokinetics Incorporated"
    },
    {
    "Symbol":"CYTO",
    "Name":"Altamira Therapeutics Ltd. Common Shares 0.01 SF (Bermuda)"
    },
    {
    "Symbol":"CYXT",
    "Name":"Cyxtera Technologies Inc. Class A"
    },
    {
    "Symbol":"CZNC",
    "Name":"Citizens & Northern Corp"
    },
    {
    "Symbol":"CZOO",
    "Name":"Cazoo Group Ltd Class A Ordinary Shares"
    },
    {
    "Symbol":"CZR",
    "Name":"Caesars Entertainment Inc."
    },
    {
    "Symbol":"CZWI",
    "Name":"Citizens Community Bancorp Inc."
    },
    {
    "Symbol":"D",
    "Name":"Dominion Energy Inc."
    },
    {
    "Symbol":"DAC",
    "Name":"Danaos Corporation"
    },
    {
    "Symbol":"DADA",
    "Name":"Dada Nexus Limited American Depositary Shares"
    },
    {
    "Symbol":"DAIO",
    "Name":"Data I/O Corporation"
    },
    {
    "Symbol":"DAKT",
    "Name":"Daktronics Inc."
    },
    {
    "Symbol":"DAL",
    "Name":"Delta Air Lines Inc."
    },
    {
    "Symbol":"DALN",
    "Name":"DallasNews Corporation Series A"
    },
    {
    "Symbol":"DALS",
    "Name":"DA32 Life Science Tech Acquisition Corp. Class A"
    },
    {
    "Symbol":"DAN",
    "Name":"Dana Incorporated"
    },
    {
    "Symbol":"DAO",
    "Name":"Youdao Inc. American Depositary Shares each representing one Class A Ordinary Share"
    },
    {
    "Symbol":"DAOO",
    "Name":"Crypto 1 Acquisition Corp Class A Ordinary Shares"
    },
    {
    "Symbol":"DAOOU",
    "Name":"Crypto 1 Acquisition Corp Unit"
    },
    {
    "Symbol":"DAOOW",
    "Name":"Crypto 1 Acquisition Corp Warrants"
    },
    {
    "Symbol":"DAR",
    "Name":"Darling Ingredients Inc."
    },
    {
    "Symbol":"DARE",
    "Name":"Dare Bioscience Inc."
    },
    {
    "Symbol":"DASH",
    "Name":"DoorDash Inc. Class A"
    },
    {
    "Symbol":"DATS",
    "Name":"DatChat Inc."
    },
    {
    "Symbol":"DATSW",
    "Name":"DatChat Inc. Series A Warrant"
    },
    {
    "Symbol":"DAVA",
    "Name":"Endava plc American Depositary Shares (each representing one Class A Ordinary Share)"
    },
    {
    "Symbol":"DAVE",
    "Name":"Dave Inc. Class A"
    },
    {
    "Symbol":"DAVEW",
    "Name":"Dave Inc. Warrants"
    },
    {
    "Symbol":"DAWN",
    "Name":"Day One Biopharmaceuticals Inc."
    },
    {
    "Symbol":"DB",
    "Name":"Deutsche Bank AG"
    },
    {
    "Symbol":"DBD",
    "Name":"Diebold Nixdorf Incorporated"
    },
    {
    "Symbol":"DBGI",
    "Name":"Digital Brands Group Inc."
    },
    {
    "Symbol":"DBGIW",
    "Name":"Digital Brands Group Inc. Warrant"
    },
    {
    "Symbol":"DBI",
    "Name":"Designer Brands Inc. Class A"
    },
    {
    "Symbol":"DBL",
    "Name":"DoubleLine Opportunistic Credit Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"DBRG",
    "Name":"DigitalBridge Group Inc."
    },
    {
    "Symbol":"DBRG^H",
    "Name":"DigitalBridge Group Inc. 7.125% Series H"
    },
    {
    "Symbol":"DBRG^I",
    "Name":"DigitalBridge Group Inc. 7.15% Series I"
    },
    {
    "Symbol":"DBRG^J",
    "Name":"DigitalBridge Group Inc. 7.125% Series J"
    },
    {
    "Symbol":"DBTX",
    "Name":"Decibel Therapeutics Inc."
    },
    {
    "Symbol":"DBVT",
    "Name":"DBV Technologies S.A. American Depositary Shares"
    },
    {
    "Symbol":"DBX",
    "Name":"Dropbox Inc. Class A"
    },
    {
    "Symbol":"DCBO",
    "Name":"Docebo Inc. Common Shares"
    },
    {
    "Symbol":"DCF",
    "Name":"BNY Mellon Alcentra Global Credit Income 2024 Target Term Fund Inc."
    },
    {
    "Symbol":"DCFC",
    "Name":"Tritium DCFC Limited Ordinary Shares"
    },
    {
    "Symbol":"DCFCW",
    "Name":"Tritium DCFC Limited Warrant"
    },
    {
    "Symbol":"DCGO",
    "Name":"DocGo Inc."
    },
    {
    "Symbol":"DCGOW",
    "Name":"DocGo Inc. Warrants"
    },
    {
    "Symbol":"DCI",
    "Name":"Donaldson Company Inc."
    },
    {
    "Symbol":"DCO",
    "Name":"Ducommun Incorporated"
    },
    {
    "Symbol":"DCOM",
    "Name":"Dime Community Bancshares Inc."
    },
    {
    "Symbol":"DCOMP",
    "Name":"Dime Community Bancshares Inc. Fixed-Rate Non-Cumulative Perpetual Preferred Stock Series A"
    },
    {
    "Symbol":"DCP",
    "Name":"DCP Midstream  LP Common Units"
    },
    {
    "Symbol":"DCP^B",
    "Name":"DCP Midstream LP 7.875% Series B Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units"
    },
    {
    "Symbol":"DCP^C",
    "Name":"DCP Midstream LP 7.95% Series C Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units"
    },
    {
    "Symbol":"DCPH",
    "Name":"Deciphera Pharmaceuticals Inc."
    },
    {
    "Symbol":"DCRD",
    "Name":"Decarbonization Plus Acquisition Corporation IV Class A Ordinary Share"
    },
    {
    "Symbol":"DCRDW",
    "Name":"Decarbonization Plus Acquisition Corporation IV Warrant"
    },
    {
    "Symbol":"DCT",
    "Name":"Duck Creek Technologies Inc."
    },
    {
    "Symbol":"DCTH",
    "Name":"Delcath Systems Inc."
    },
    {
    "Symbol":"DCUE",
    "Name":"Dominion Energy Inc. 2019 Series A Corporate Units"
    },
    {
    "Symbol":"DD",
    "Name":"DuPont de Nemours Inc."
    },
    {
    "Symbol":"DDD",
    "Name":"3D Systems Corporation"
    },
    {
    "Symbol":"DDF",
    "Name":"Delaware Investments Dividend & Income Fund Inc."
    },
    {
    "Symbol":"DDI",
    "Name":"DoubleDown Interactive Co. Ltd. American Depository Shares"
    },
    {
    "Symbol":"DDL",
    "Name":"Dingdong (Cayman) Limited American Depositary Shares (each two representing three Ordinary Shares)"
    },
    {
    "Symbol":"DDOG",
    "Name":"Datadog Inc. Class A"
    },
    {
    "Symbol":"DDS",
    "Name":"Dillard's Inc."
    },
    {
    "Symbol":"DDT",
    "Name":"Dillard's Capital Trust I"
    },
    {
    "Symbol":"DE",
    "Name":"Deere & Company"
    },
    {
    "Symbol":"DEA",
    "Name":"Easterly Government Properties Inc."
    },
    {
    "Symbol":"DECK",
    "Name":"Deckers Outdoor Corporation"
    },
    {
    "Symbol":"DEI",
    "Name":"Douglas Emmett Inc."
    },
    {
    "Symbol":"DELL",
    "Name":"Dell Technologies Inc. Class C"
    },
    {
    "Symbol":"DEN",
    "Name":"Denbury Inc."
    },
    {
    "Symbol":"DENN",
    "Name":"Denny's Corporation"
    },
    {
    "Symbol":"DEO",
    "Name":"Diageo plc"
    },
    {
    "Symbol":"DERM",
    "Name":"Journey Medical Corporation"
    },
    {
    "Symbol":"DESP",
    "Name":"Despegar.com Corp. Ordinary Shares"
    },
    {
    "Symbol":"DEX",
    "Name":"Delaware Enhanced Global Dividend Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"DFFN",
    "Name":"Diffusion Pharmaceuticals Inc."
    },
    {
    "Symbol":"DFH",
    "Name":"Dream Finders Homes Inc. Class A"
    },
    {
    "Symbol":"DFIN",
    "Name":"Donnelley Financial Solutions Inc."
    },
    {
    "Symbol":"DFP",
    "Name":"Flaherty & Crumrine Dynamic Preferred and Income Fund Inc."
    },
    {
    "Symbol":"DFS",
    "Name":"Discover Financial Services"
    },
    {
    "Symbol":"DG",
    "Name":"Dollar General Corporation"
    },
    {
    "Symbol":"DGHI",
    "Name":"Digihost Technology Inc. Common Subordinate Voting Shares"
    },
    {
    "Symbol":"DGICA",
    "Name":"Donegal Group Inc. Class A"
    },
    {
    "Symbol":"DGICB",
    "Name":"Donegal Group Inc. Class B"
    },
    {
    "Symbol":"DGII",
    "Name":"Digi International Inc."
    },
    {
    "Symbol":"DGLY",
    "Name":"Digital Ally Inc."
    },
    {
    "Symbol":"DGNU",
    "Name":"Dragoneer Growth Opportunities Corp. III Class A Ordinary Shares"
    },
    {
    "Symbol":"DGX",
    "Name":"Quest Diagnostics Incorporated"
    },
    {
    "Symbol":"DH",
    "Name":"Definitive Healthcare Corp. Class A"
    },
    {
    "Symbol":"DHAC",
    "Name":"Digital Health Acquisition Corp."
    },
    {
    "Symbol":"DHACU",
    "Name":"Digital Health Acquisition Corp. Unit"
    },
    {
    "Symbol":"DHACW",
    "Name":"Digital Health Acquisition Corp. Warrant"
    },
    {
    "Symbol":"DHBC",
    "Name":"DHB Capital Corp. Class A"
    },
    {
    "Symbol":"DHBCU",
    "Name":"DHB Capital Corp. Unit"
    },
    {
    "Symbol":"DHBCW",
    "Name":"DHB Capital Corp. Warrant"
    },
    {
    "Symbol":"DHC",
    "Name":"Diversified Healthcare Trust Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"DHCA",
    "Name":"DHC Acquisition Corp. Class A ordinary share"
    },
    {
    "Symbol":"DHCAU",
    "Name":"DHC Acquisition Corp. Unit"
    },
    {
    "Symbol":"DHCAW",
    "Name":"DHC Acquisition Corp. Warrant"
    },
    {
    "Symbol":"DHCNI",
    "Name":"Diversified Healthcare Trust 5.625% Senior Notes due 2042"
    },
    {
    "Symbol":"DHCNL",
    "Name":"Diversified Healthcare Trust 6.25% Senior Notes Due 2046"
    },
    {
    "Symbol":"DHF",
    "Name":"BNY Mellon High Yield Strategies Fund"
    },
    {
    "Symbol":"DHHC",
    "Name":"DiamondHead Holdings Corp. Class A"
    },
    {
    "Symbol":"DHHCU",
    "Name":"DiamondHead Holdings Corp. Unit"
    },
    {
    "Symbol":"DHHCW",
    "Name":"DiamondHead Holdings Corp. Warrant"
    },
    {
    "Symbol":"DHI",
    "Name":"D.R. Horton Inc."
    },
    {
    "Symbol":"DHIL",
    "Name":"Diamond Hill Investment Group Inc. Class A"
    },
    {
    "Symbol":"DHR",
    "Name":"Danaher Corporation"
    },
    {
    "Symbol":"DHR^A",
    "Name":"Danaher Corporation 4.75% Mandatory Convertible Preferred Stock Series A"
    },
    {
    "Symbol":"DHR^B",
    "Name":"Danaher Corporation 5.00% Mandatory Convertible Preferred Stock Series B"
    },
    {
    "Symbol":"DHT",
    "Name":"DHT Holdings Inc."
    },
    {
    "Symbol":"DHX",
    "Name":"DHI Group Inc."
    },
    {
    "Symbol":"DHY",
    "Name":"Credit Suisse High Yield Bond Fund"
    },
    {
    "Symbol":"DIAX",
    "Name":"Nuveen Dow 30SM Dynamic Overwrite Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"DIBS",
    "Name":"1stdibs.com Inc."
    },
    {
    "Symbol":"DICE",
    "Name":"DICE Therapeutics Inc."
    },
    {
    "Symbol":"DIDI",
    "Name":"DiDi Global Inc. American Depositary Shares (each four representing one Class A Ordinary Share)"
    },
    {
    "Symbol":"DILA",
    "Name":"DILA Capital Acquisition Corp. Class A"
    },
    {
    "Symbol":"DILAU",
    "Name":"DILA Capital Acquisition Corp. Unit"
    },
    {
    "Symbol":"DILAW",
    "Name":"DILA Capital Acquisition Corp. Warrant"
    },
    {
    "Symbol":"DIN",
    "Name":"Dine Brands Global Inc."
    },
    {
    "Symbol":"DIOD",
    "Name":"Diodes Incorporated"
    },
    {
    "Symbol":"DIS",
    "Name":"Walt Disney Company (The)"
    },
    {
    "Symbol":"DISA",
    "Name":"Disruptive Acquisition Corporation I Class A Ordinary Shares"
    },
    {
    "Symbol":"DISAW",
    "Name":"Disruptive Acquisition Corporation I Warrant"
    },
    {
    "Symbol":"DISCA",
    "Name":"Discovery Inc. Series A"
    },
    {
    "Symbol":"DISCB",
    "Name":"Discovery Inc. Series B"
    },
    {
    "Symbol":"DISCK",
    "Name":"Discovery Inc. Series C"
    },
    {
    "Symbol":"DISH",
    "Name":"DISH Network Corporation Class A"
    },
    {
    "Symbol":"DIT",
    "Name":"AMCON Distributing Company"
    },
    {
    "Symbol":"DJCO",
    "Name":"Daily Journal Corp. (S.C.)"
    },
    {
    "Symbol":"DK",
    "Name":"Delek US Holdings Inc."
    },
    {
    "Symbol":"DKDCA",
    "Name":"Data Knights Acquisition Corp. Class A"
    },
    {
    "Symbol":"DKDCW",
    "Name":"Data Knights Acquisition Corp. Warrant"
    },
    {
    "Symbol":"DKL",
    "Name":"Delek Logistics Partners L.P. Common Units representing Limited Partner Interests"
    },
    {
    "Symbol":"DKNG",
    "Name":"DraftKings Inc. Class A"
    },
    {
    "Symbol":"DKS",
    "Name":"Dick's Sporting Goods Inc"
    },
    {
    "Symbol":"DLA",
    "Name":"Delta Apparel Inc."
    },
    {
    "Symbol":"DLB",
    "Name":"Dolby Laboratories"
    },
    {
    "Symbol":"DLCA",
    "Name":"Deep Lake Capital Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"DLCAU",
    "Name":"Deep Lake Capital Acquisition Corp. Unit"
    },
    {
    "Symbol":"DLCAW",
    "Name":"Deep Lake Capital Acquisition Corp. Warrant"
    },
    {
    "Symbol":"DLHC",
    "Name":"DLH Holdings Corp."
    },
    {
    "Symbol":"DLNG",
    "Name":"Dynagas LNG Partners LP Common Units"
    },
    {
    "Symbol":"DLNG^A",
    "Name":"Dynagas LNG Partners LP 9.00% Series A Cumulative Redeemable Preferred Units"
    },
    {
    "Symbol":"DLNG^B",
    "Name":"Dynagas LNG Partners LP 8.75% Series B Fixed to Floating Rate Cumulative Redeemable Perpetual Preferred Units liquidation preference $25.00 per Uni"
    },
    {
    "Symbol":"DLO",
    "Name":"DLocal Limited Class A Common Shares"
    },
    {
    "Symbol":"DLPN",
    "Name":"Dolphin Entertainment Inc."
    },
    {
    "Symbol":"DLR",
    "Name":"Digital Realty Trust Inc."
    },
    {
    "Symbol":"DLR^J",
    "Name":"Digital Realty Trust Inc. 5.250% Series J Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"DLR^K",
    "Name":"Digital Realty Trust Inc. 5.850% Series K Cumulative Redeemable Preferred Stock par value $0.01 per share"
    },
    {
    "Symbol":"DLR^L",
    "Name":"Digital Realty Trust Inc. 5.200% Series L Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"DLTH",
    "Name":"Duluth Holdings Inc. Class B"
    },
    {
    "Symbol":"DLTR",
    "Name":"Dollar Tree Inc."
    },
    {
    "Symbol":"DLX",
    "Name":"Deluxe Corporation"
    },
    {
    "Symbol":"DLY",
    "Name":"DoubleLine Yield Opportunities Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"DM",
    "Name":"Desktop Metal Inc. Class A"
    },
    {
    "Symbol":"DMA",
    "Name":"Destra Multi-Alternative Fund"
    },
    {
    "Symbol":"DMAC",
    "Name":"DiaMedica Therapeutics Inc."
    },
    {
    "Symbol":"DMAQ",
    "Name":"Deep Medicine Acquisition Corp. Class A"
    },
    {
    "Symbol":"DMAQR",
    "Name":"Deep Medicine Acquisition Corp. Rights"
    },
    {
    "Symbol":"DMB",
    "Name":"BNY Mellon Municipal Bond Infrastructure Fund Inc."
    },
    {
    "Symbol":"DMF",
    "Name":"BNY Mellon Municipal Income Inc."
    },
    {
    "Symbol":"DMLP",
    "Name":"Dorchester Minerals L.P. Common Units Representing Limited Partnership Interests"
    },
    {
    "Symbol":"DMO",
    "Name":"Western Asset Mortgage Opportunity Fund Inc."
    },
    {
    "Symbol":"DMRC",
    "Name":"Digimarc Corporation"
    },
    {
    "Symbol":"DMS",
    "Name":"Digital Media Solutions Inc. Class A Ordinary Shares"
    },
    {
    "Symbol":"DMTK",
    "Name":"DermTech Inc."
    },
    {
    "Symbol":"DMYS",
    "Name":"dMY Technology Group Inc. VI Class A"
    },
    {
    "Symbol":"DNA",
    "Name":"Ginkgo Bioworks Holdings Inc. Class A"
    },
    {
    "Symbol":"DNAA",
    "Name":"Social Capital Suvretta Holdings Corp. I Class A Ordinary Share"
    },
    {
    "Symbol":"DNAB",
    "Name":"Social Capital Suvretta Holdings Corp. II Class A Ordinary Shares"
    },
    {
    "Symbol":"DNAC",
    "Name":"Social Capital Suvretta Holdings Corp. III Class A ordinary shares"
    },
    {
    "Symbol":"DNAD",
    "Name":"Social Capital Suvretta Holdings Corp. IV Class A Ordinary Shares"
    },
    {
    "Symbol":"DNAY",
    "Name":"Codex DNA Inc."
    },
    {
    "Symbol":"DNB",
    "Name":"Dun & Bradstreet Holdings Inc."
    },
    {
    "Symbol":"DNLI",
    "Name":"Denali Therapeutics Inc."
    },
    {
    "Symbol":"DNMR",
    "Name":"Danimer Scientific Inc."
    },
    {
    "Symbol":"DNN",
    "Name":"Denison Mines Corp Ordinary Shares (Canada)"
    },
    {
    "Symbol":"DNOW",
    "Name":"NOW Inc."
    },
    {
    "Symbol":"DNP",
    "Name":"DNP Select Income Fund Inc."
    },
    {
    "Symbol":"DNUT",
    "Name":"Krispy Kreme Inc."
    },
    {
    "Symbol":"DNZ",
    "Name":"D and Z Media Acquisition Corp. Class A"
    },
    {
    "Symbol":"DOC",
    "Name":"Physicians Realty Trust Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"DOCN",
    "Name":"DigitalOcean Holdings Inc."
    },
    {
    "Symbol":"DOCS",
    "Name":"Doximity Inc. Class A"
    },
    {
    "Symbol":"DOCU",
    "Name":"DocuSign Inc."
    },
    {
    "Symbol":"DOGZ",
    "Name":"Dogness (International) Corporation Class A"
    },
    {
    "Symbol":"DOLE",
    "Name":"Dole plc Ordinary Shares"
    },
    {
    "Symbol":"DOMA",
    "Name":"Doma Holdings Inc."
    },
    {
    "Symbol":"DOMO",
    "Name":"Domo Inc. Class B"
    },
    {
    "Symbol":"DOOO",
    "Name":"BRP Inc. (Recreational Products) Common Subordinate Voting Shares"
    },
    {
    "Symbol":"DOOR",
    "Name":"Masonite International Corporation Ordinary Shares (Canada)"
    },
    {
    "Symbol":"DORM",
    "Name":"Dorman Products Inc."
    },
    {
    "Symbol":"DOUG",
    "Name":"Douglas Elliman Inc."
    },
    {
    "Symbol":"DOV",
    "Name":"Dover Corporation"
    },
    {
    "Symbol":"DOW",
    "Name":"Dow Inc."
    },
    {
    "Symbol":"DOX",
    "Name":"Amdocs Limited Ordinary Shares"
    },
    {
    "Symbol":"DOYU",
    "Name":"DouYu International Holdings Limited ADS"
    },
    {
    "Symbol":"DPCS",
    "Name":"DP Cap Acquisition Corp I Class A Ordinary Shares"
    },
    {
    "Symbol":"DPCSU",
    "Name":"DP Cap Acquisition Corp I Unit"
    },
    {
    "Symbol":"DPCSW",
    "Name":"DP Cap Acquisition Corp I Warrants"
    },
    {
    "Symbol":"DPG",
    "Name":"Duff & Phelps Utility and Infrastructure Fund Inc."
    },
    {
    "Symbol":"DPRO",
    "Name":"Draganfly Inc. Common Shares"
    },
    {
    "Symbol":"DPZ",
    "Name":"Domino's Pizza Inc"
    },
    {
    "Symbol":"DQ",
    "Name":"DAQO New Energy Corp. American Depositary Shares each representing five ordinary shares"
    },
    {
    "Symbol":"DRAY",
    "Name":"Macondray Capital Acquisition Corp. I Class A Ordinary Shares"
    },
    {
    "Symbol":"DRAYU",
    "Name":"Macondray Capital Acquisition Corp. I Unit"
    },
    {
    "Symbol":"DRAYW",
    "Name":"Macondray Capital Acquisition Corp. I Warrant"
    },
    {
    "Symbol":"DRD",
    "Name":"DRDGOLD Limited American Depositary Shares"
    },
    {
    "Symbol":"DRE",
    "Name":"Duke Realty Corporation"
    },
    {
    "Symbol":"DRH",
    "Name":"Diamondrock Hospitality Company"
    },
    {
    "Symbol":"DRH^A",
    "Name":"Diamondrock Hospitality Company 8.250% Series A Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"DRI",
    "Name":"Darden Restaurants Inc."
    },
    {
    "Symbol":"DRIO",
    "Name":"DarioHealth Corp."
    },
    {
    "Symbol":"DRMA",
    "Name":"Dermata Therapeutics Inc."
    },
    {
    "Symbol":"DRMAW",
    "Name":"Dermata Therapeutics Inc. Warrant"
    },
    {
    "Symbol":"DRQ",
    "Name":"Dril-Quip Inc."
    },
    {
    "Symbol":"DRRX",
    "Name":"DURECT Corporation"
    },
    {
    "Symbol":"DRTT",
    "Name":"DIRTT Environmental Solutions Ltd. Common Shares"
    },
    {
    "Symbol":"DRUG",
    "Name":"Bright Minds Biosciences Inc."
    },
    {
    "Symbol":"DRVN",
    "Name":"Driven Brands Holdings Inc."
    },
    {
    "Symbol":"DS",
    "Name":"Drive Shack Inc."
    },
    {
    "Symbol":"DS^B",
    "Name":"Drive Shack Inc. Preferred Series B"
    },
    {
    "Symbol":"DS^C",
    "Name":"Drive Shack Inc. Preferred Series C"
    },
    {
    "Symbol":"DS^D",
    "Name":"Drive Shack Inc. Pfd Ser D"
    },
    {
    "Symbol":"DSAC",
    "Name":"Duddell Street Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"DSACU",
    "Name":"Duddell Street Acquisition Corp. Unit"
    },
    {
    "Symbol":"DSACW",
    "Name":"Duddell Street Acquisition Corp. Warrant"
    },
    {
    "Symbol":"DSAQ",
    "Name":"Direct Selling Acquisition Corp. Class A"
    },
    {
    "Symbol":"DSEY",
    "Name":"Diversey Holdings Ltd. Ordinary Shares"
    },
    {
    "Symbol":"DSGN",
    "Name":"Design Therapeutics Inc."
    },
    {
    "Symbol":"DSGX",
    "Name":"Descartes Systems Group Inc. (The)"
    },
    {
    "Symbol":"DSKE",
    "Name":"Daseke Inc."
    },
    {
    "Symbol":"DSKEW",
    "Name":"Daseke Inc. Warrant"
    },
    {
    "Symbol":"DSL",
    "Name":"DoubleLine Income Solutions Fund Common Shares of Beneficial Interests"
    },
    {
    "Symbol":"DSM",
    "Name":"BNY Mellon Strategic Municipal Bond Fund Inc."
    },
    {
    "Symbol":"DSP",
    "Name":"Viant Technology Inc. Class A"
    },
    {
    "Symbol":"DSS",
    "Name":"DSS Inc."
    },
    {
    "Symbol":"DSU",
    "Name":"Blackrock Debt Strategies Fund Inc."
    },
    {
    "Symbol":"DSWL",
    "Name":"Deswell Industries Inc. Common Shares"
    },
    {
    "Symbol":"DSX",
    "Name":"Diana Shipping inc."
    },
    {
    "Symbol":"DSX^B",
    "Name":"Diana Shipping Inc. Perpetual Preferred Shares Series B (Marshall Islands)"
    },
    {
    "Symbol":"DT",
    "Name":"Dynatrace Inc."
    },
    {
    "Symbol":"DTB",
    "Name":"DTE Energy Company 2020 Series G 4.375% Junior Subordinated Debentures due 2080"
    },
    {
    "Symbol":"DTC",
    "Name":"Solo Brands Inc. Class A"
    },
    {
    "Symbol":"DTE",
    "Name":"DTE Energy Company"
    },
    {
    "Symbol":"DTEA",
    "Name":"DAVIDsTEA Inc."
    },
    {
    "Symbol":"DTF",
    "Name":"DTF Tax-Free Income 2028 Term Fund Inc."
    },
    {
    "Symbol":"DTG",
    "Name":"DTE Energy Company 2021 Series E 4.375% Junior Subordinated Debentures"
    },
    {
    "Symbol":"DTIL",
    "Name":"Precision BioSciences Inc."
    },
    {
    "Symbol":"DTLA^",
    "Name":"Brookfield DTLA Inc. 7.625% Series A Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"DTM",
    "Name":"DT Midstream Inc."
    },
    {
    "Symbol":"DTOC",
    "Name":"Digital Transformation Opportunities Corp. Class A"
    },
    {
    "Symbol":"DTOCW",
    "Name":"Digital Transformation Opportunities Corp. Warrant"
    },
    {
    "Symbol":"DTP",
    "Name":"DTE Energy Company 6.25% Corporate Units"
    },
    {
    "Symbol":"DTRT",
    "Name":"DTRT Health Acquisition Corp. Class A"
    },
    {
    "Symbol":"DTRTU",
    "Name":"DTRT Health Acquisition Corp. Unit"
    },
    {
    "Symbol":"DTRTW",
    "Name":"DTRT Health Acquisition Corp. Warrant"
    },
    {
    "Symbol":"DTSS",
    "Name":"Datasea Inc."
    },
    {
    "Symbol":"DTST",
    "Name":"Data Storage Corporation"
    },
    {
    "Symbol":"DTSTW",
    "Name":"Data Storage Corporation Warrant"
    },
    {
    "Symbol":"DTW",
    "Name":"DTE Energy Company 2017 Series E 5.25% Junior Subordinated Debentures due 2077"
    },
    {
    "Symbol":"DUETU",
    "Name":"DUET Acquisition Corp. Unit"
    },
    {
    "Symbol":"DUK",
    "Name":"Duke Energy Corporation (Holding Company)"
    },
    {
    "Symbol":"DUK^A",
    "Name":"Duke Energy Corporation Depositary Shares each representing a 1/1000th interest in a share of 5.75% Series A Cumulative Redeemable Perpetual Preferred Stock"
    },
    {
    "Symbol":"DUKB",
    "Name":"Duke Energy Corporation 5.625% Junior Subordinated Debentures due 2078"
    },
    {
    "Symbol":"DUNE",
    "Name":"Dune Acquisition Corporation Class A"
    },
    {
    "Symbol":"DUNEU",
    "Name":"Dune Acquisition Corporation Unit"
    },
    {
    "Symbol":"DUNEW",
    "Name":"Dune Acquisition Corporation Warrant"
    },
    {
    "Symbol":"DUO",
    "Name":"Fangdd Network Group Ltd. American Depositary Shares"
    },
    {
    "Symbol":"DUOL",
    "Name":"Duolingo Inc. Class A"
    },
    {
    "Symbol":"DUOT",
    "Name":"Duos Technologies Group Inc."
    },
    {
    "Symbol":"DV",
    "Name":"DoubleVerify Holdings Inc."
    },
    {
    "Symbol":"DVA",
    "Name":"DaVita Inc."
    },
    {
    "Symbol":"DVAX",
    "Name":"Dynavax Technologies Corporation"
    },
    {
    "Symbol":"DVN",
    "Name":"Devon Energy Corporation"
    },
    {
    "Symbol":"DWAC",
    "Name":"Digital World Acquisition Corp. Class A"
    },
    {
    "Symbol":"DWACU",
    "Name":"Digital World Acquisition Corp. Units"
    },
    {
    "Symbol":"DWACW",
    "Name":"Digital World Acquisition Corp. Warrants"
    },
    {
    "Symbol":"DWIN",
    "Name":"Delwinds Insurance Acquisition Corp. Class A"
    },
    {
    "Symbol":"DWSN",
    "Name":"Dawson Geophysical Company"
    },
    {
    "Symbol":"DX",
    "Name":"Dynex Capital Inc."
    },
    {
    "Symbol":"DX^C",
    "Name":"Dynex Capital Inc. 6.900% Series C Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"DXC",
    "Name":"DXC Technology Company"
    },
    {
    "Symbol":"DXCM",
    "Name":"DexCom Inc."
    },
    {
    "Symbol":"DXF",
    "Name":"Dunxin Financial Holdings Limited American Depositary Shares"
    },
    {
    "Symbol":"DXLG",
    "Name":"Destination XL Group Inc."
    },
    {
    "Symbol":"DXPE",
    "Name":"DXP Enterprises Inc."
    },
    {
    "Symbol":"DXR",
    "Name":"Daxor Corporation"
    },
    {
    "Symbol":"DXYN",
    "Name":"Dixie Group Inc. (The)"
    },
    {
    "Symbol":"DY",
    "Name":"Dycom Industries Inc."
    },
    {
    "Symbol":"DYAI",
    "Name":"Dyadic International Inc."
    },
    {
    "Symbol":"DYFN",
    "Name":"Angel Oak Dynamic Financial Strategies Income Term Trust Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"DYN",
    "Name":"Dyne Therapeutics Inc."
    },
    {
    "Symbol":"DYNS",
    "Name":"Dynamics Special Purpose Corp. Class A"
    },
    {
    "Symbol":"DYNT",
    "Name":"Dynatronics Corporation"
    },
    {
    "Symbol":"DZSI",
    "Name":"DZS Inc."
    },
    {
    "Symbol":"E",
    "Name":"ENI S.p.A."
    },
    {
    "Symbol":"EA",
    "Name":"Electronic Arts Inc."
    },
    {
    "Symbol":"EAC",
    "Name":"Edify Acquisition Corp. Class A"
    },
    {
    "Symbol":"EACPU",
    "Name":"Edify Acquisition Corp. Units"
    },
    {
    "Symbol":"EACPW",
    "Name":"Edify Acquisition Corp. Warrant"
    },
    {
    "Symbol":"EAD",
    "Name":"Allspring Income Opportunities Fund Common Shares"
    },
    {
    "Symbol":"EAF",
    "Name":"GrafTech International Ltd."
    },
    {
    "Symbol":"EAI",
    "Name":"Entergy Arkansas LLC First Mortgage Bonds 4.875% Series Due September 1 2066"
    },
    {
    "Symbol":"EAR",
    "Name":"Eargo Inc."
    },
    {
    "Symbol":"EARN",
    "Name":"Ellington Residential Mortgage REIT Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"EAST",
    "Name":"Eastside Distilling Inc."
    },
    {
    "Symbol":"EAT",
    "Name":"Brinker International Inc."
    },
    {
    "Symbol":"EB",
    "Name":"Eventbrite Inc. Class A"
    },
    {
    "Symbol":"EBAC",
    "Name":"European Biotech Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"EBACU",
    "Name":"European Biotech Acquisition Corp. Units"
    },
    {
    "Symbol":"EBACW",
    "Name":"European Biotech Acquisition Corp. Warrant"
    },
    {
    "Symbol":"EBAY",
    "Name":"eBay Inc."
    },
    {
    "Symbol":"EBC",
    "Name":"Eastern Bankshares Inc."
    },
    {
    "Symbol":"EBET",
    "Name":"Esports Technologies Inc."
    },
    {
    "Symbol":"EBF",
    "Name":"Ennis Inc."
    },
    {
    "Symbol":"EBIX",
    "Name":"Ebix Inc."
    },
    {
    "Symbol":"EBMT",
    "Name":"Eagle Bancorp Montana Inc."
    },
    {
    "Symbol":"EBON",
    "Name":"Ebang International Holdings Inc. Class A Ordinary Shares"
    },
    {
    "Symbol":"EBR",
    "Name":"Centrais Electricas Brasileiras S A American Depositary Shares (Each representing one Common Share)"
    },
    {
    "Symbol":"EBS",
    "Name":"Emergent Biosolutions Inc."
    },
    {
    "Symbol":"EBTC",
    "Name":"Enterprise Bancorp Inc"
    },
    {
    "Symbol":"EC",
    "Name":"Ecopetrol S.A. American Depositary Shares"
    },
    {
    "Symbol":"ECAT",
    "Name":"BlackRock ESG Capital Allocation Trust Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"ECC",
    "Name":"Eagle Point Credit Company Inc."
    },
    {
    "Symbol":"ECC^D",
    "Name":"Eagle Point Credit Company Inc. 6.75% Series D Preferred Stock"
    },
    {
    "Symbol":"ECCB",
    "Name":"Eagle Point Credit Company Inc. 7.75% Series B Term Preferred Stock due 2026"
    },
    {
    "Symbol":"ECCC",
    "Name":"Eagle Point Credit Company Inc. 6.50% Series C Term Preferred Stock due 2031"
    },
    {
    "Symbol":"ECCV",
    "Name":"Eagle Point Credit Company Inc."
    },
    {
    "Symbol":"ECCW",
    "Name":"Eagle Point Credit Company Inc. 6.75% Notes due 2031"
    },
    {
    "Symbol":"ECCX",
    "Name":"Eagle Point Credit Company Inc. 6.6875% Notes due 2028"
    },
    {
    "Symbol":"ECCY",
    "Name":"Eagle Point Credit Company Inc. 6.75% Notes due 2027"
    },
    {
    "Symbol":"ECF",
    "Name":"Ellsworth Growth and Income Fund Ltd."
    },
    {
    "Symbol":"ECF^A",
    "Name":"Ellsworth Growth and Income Fund Ltd. 5.25% Series A Cumulative Preferred Shares (Liquidation Preference $25.00 per share)"
    },
    {
    "Symbol":"ECL",
    "Name":"Ecolab Inc."
    },
    {
    "Symbol":"ECOL",
    "Name":"US Ecology Inc"
    },
    {
    "Symbol":"ECOM",
    "Name":"ChannelAdvisor Corporation"
    },
    {
    "Symbol":"ECOR",
    "Name":"electroCore Inc."
    },
    {
    "Symbol":"ECPG",
    "Name":"Encore Capital Group Inc"
    },
    {
    "Symbol":"ECVT",
    "Name":"Ecovyst Inc."
    },
    {
    "Symbol":"ED",
    "Name":"Consolidated Edison Inc."
    },
    {
    "Symbol":"EDAP",
    "Name":"EDAP TMS S.A. American Depositary Shares"
    },
    {
    "Symbol":"EDD",
    "Name":"Morgan Stanley Emerging Markets Domestic Debt Fund Inc. Morgan Stanley Emerging Markets Domestic Debt Fund Inc."
    },
    {
    "Symbol":"EDF",
    "Name":"Stone Harbor Emerging Markets Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"EDI",
    "Name":"Stone Harbor Emerging Markets Total Income Fund Common Shares of Beneficial Interests"
    },
    {
    "Symbol":"EDIT",
    "Name":"Editas Medicine Inc."
    },
    {
    "Symbol":"EDN",
    "Name":"Empresa Distribuidora Y Comercializadora Norte S.A. (Edenor) Empresa Distribuidora Y Comercializadora Norte S.A. (Edenor) American Depositary Shares"
    },
    {
    "Symbol":"EDNC",
    "Name":"Endurance Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"EDNCU",
    "Name":"Endurance Acquisition Corp. Unit"
    },
    {
    "Symbol":"EDNCW",
    "Name":"Endurance Acquisition Corp. Warrant"
    },
    {
    "Symbol":"EDR",
    "Name":"Endeavor Group Holdings Inc. Class A"
    },
    {
    "Symbol":"EDRY",
    "Name":"EuroDry Ltd. Common Shares"
    },
    {
    "Symbol":"EDSA",
    "Name":"Edesa Biotech Inc. Common Shares"
    },
    {
    "Symbol":"EDTK",
    "Name":"Skillful Craftsman Education Technology Limited Ordinary Share"
    },
    {
    "Symbol":"EDTX",
    "Name":"EdtechX Holdings Acquisition Corp. II Class A"
    },
    {
    "Symbol":"EDTXW",
    "Name":"EdtechX Holdings Acquisition Corp. II Warrant"
    },
    {
    "Symbol":"EDU",
    "Name":"New Oriental Education & Technology Group Inc. Sponsored ADR representing 1 Ordinary Share (Cayman Islands)"
    },
    {
    "Symbol":"EDUC",
    "Name":"Educational Development Corporation"
    },
    {
    "Symbol":"EEA",
    "Name":"The European Equity Fund Inc."
    },
    {
    "Symbol":"EEFT",
    "Name":"Euronet Worldwide Inc."
    },
    {
    "Symbol":"EEIQ",
    "Name":"Elite Education Group International Ltd."
    },
    {
    "Symbol":"EEX",
    "Name":"Emerald Holding Inc."
    },
    {
    "Symbol":"EFC",
    "Name":"Ellington Financial Inc."
    },
    {
    "Symbol":"EFC^A",
    "Name":"Ellington Financial Inc. 6.750% Series A Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"EFC^B",
    "Name":"Ellington Financial Inc. 6.250% Series B Fixed-Rate Reset Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"EFL",
    "Name":"Eaton Vance Floating-Rate 2022 Target Term Trust Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"EFOI",
    "Name":"Energy Focus Inc."
    },
    {
    "Symbol":"EFR",
    "Name":"Eaton Vance Senior Floating-Rate Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"EFSC",
    "Name":"Enterprise Financial Services Corporation"
    },
    {
    "Symbol":"EFSCP",
    "Name":"Enterprise Financial Services Corporation Depositary Shares Each Representing a 1/40th Interest in a Share of 5% Fixed Rate Non-Cumulative Perpetual Preferred Stock Series A"
    },
    {
    "Symbol":"EFT",
    "Name":"Eaton Vance Floating Rate Income Trust Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"EFTR",
    "Name":"eFFECTOR Therapeutics Inc."
    },
    {
    "Symbol":"EFTRW",
    "Name":"eFFECTOR Therapeutics Inc. Warrant"
    },
    {
    "Symbol":"EFX",
    "Name":"Equifax Inc."
    },
    {
    "Symbol":"EGAN",
    "Name":"eGain Corporation"
    },
    {
    "Symbol":"EGBN",
    "Name":"Eagle Bancorp Inc."
    },
    {
    "Symbol":"EGF",
    "Name":"Blackrock Enhanced Government Fund Inc."
    },
    {
    "Symbol":"EGGF",
    "Name":"EG Acquisition Corp. Class A"
    },
    {
    "Symbol":"EGHT",
    "Name":"8x8 Inc"
    },
    {
    "Symbol":"EGLE",
    "Name":"Eagle Bulk Shipping Inc."
    },
    {
    "Symbol":"EGLX",
    "Name":"Enthusiast Gaming Holdings Inc."
    },
    {
    "Symbol":"EGO",
    "Name":"Eldorado Gold Corporation Ordinary Shares"
    },
    {
    "Symbol":"EGP",
    "Name":"EastGroup Properties Inc."
    },
    {
    "Symbol":"EGRX",
    "Name":"Eagle Pharmaceuticals Inc."
    },
    {
    "Symbol":"EGY",
    "Name":"VAALCO Energy Inc. "
    },
    {
    "Symbol":"EH",
    "Name":"EHang Holdings Limited ADS"
    },
    {
    "Symbol":"EHC",
    "Name":"Encompass Health Corporation"
    },
    {
    "Symbol":"EHI",
    "Name":"Western Asset Global High Income Fund Inc"
    },
    {
    "Symbol":"EHTH",
    "Name":"eHealth Inc."
    },
    {
    "Symbol":"EIC",
    "Name":"Eagle Point Income Company Inc."
    },
    {
    "Symbol":"EICA",
    "Name":"Eagle Point Income Company Inc. 5.00% Series A Term Preferred Stock due 2026"
    },
    {
    "Symbol":"EIG",
    "Name":"Employers Holdings Inc"
    },
    {
    "Symbol":"EIGR",
    "Name":"Eiger BioPharmaceuticals Inc."
    },
    {
    "Symbol":"EIM",
    "Name":"Eaton Vance Municipal Bond Fund Common Shares of Beneficial Interest $.01 par value"
    },
    {
    "Symbol":"EIX",
    "Name":"Edison International"
    },
    {
    "Symbol":"EJFA",
    "Name":"EJF Acquisition Corp. Class A Ordinary Share"
    },
    {
    "Symbol":"EJFAU",
    "Name":"EJF Acquisition Corp. Unit"
    },
    {
    "Symbol":"EJFAW",
    "Name":"EJF Acquisition Corp. Warrant"
    },
    {
    "Symbol":"EJH",
    "Name":"E-Home Household Service Holdings Limited Ordinary Shares"
    },
    {
    "Symbol":"EKSO",
    "Name":"Ekso Bionics Holdings Inc."
    },
    {
    "Symbol":"EL",
    "Name":"Estee Lauder Companies Inc. (The)"
    },
    {
    "Symbol":"ELA",
    "Name":"Envela Corporation"
    },
    {
    "Symbol":"ELAN",
    "Name":"Elanco Animal Health Incorporated"
    },
    {
    "Symbol":"ELAT",
    "Name":"Elanco Animal Health Incorporated 5.00% Tangible Equity Units"
    },
    {
    "Symbol":"ELC",
    "Name":"Entergy Louisiana Inc. Collateral Trust Mortgage Bonds 4.875 % Series due September 1 2066"
    },
    {
    "Symbol":"ELDN",
    "Name":"Eledon Pharmaceuticals Inc."
    },
    {
    "Symbol":"ELEV",
    "Name":"Elevation Oncology Inc."
    },
    {
    "Symbol":"ELF",
    "Name":"e.l.f. Beauty Inc."
    },
    {
    "Symbol":"ELLO",
    "Name":"Ellomay Capital Ltd Ordinary Shares (Israel)"
    },
    {
    "Symbol":"ELMD",
    "Name":"Electromed Inc."
    },
    {
    "Symbol":"ELMS",
    "Name":"Electric Last Mile Solutions Inc. Class A"
    },
    {
    "Symbol":"ELMSW",
    "Name":"Electric Last Mile Solutions Inc. Warrant"
    },
    {
    "Symbol":"ELOX",
    "Name":"Eloxx Pharmaceuticals Inc."
    },
    {
    "Symbol":"ELP",
    "Name":"Companhia Paranaense de Energia (COPEL) American Depositary Shares (each representing one Unit consisting one Common Share and four non-voting Class B Preferred Shares)"
    },
    {
    "Symbol":"ELS",
    "Name":"Equity Lifestyle Properties Inc."
    },
    {
    "Symbol":"ELSE",
    "Name":"Electro-Sensors Inc."
    },
    {
    "Symbol":"ELTK",
    "Name":"Eltek Ltd. Ordinary Shares"
    },
    {
    "Symbol":"ELVT",
    "Name":"Elevate Credit Inc."
    },
    {
    "Symbol":"ELY",
    "Name":"Callaway Golf Company"
    },
    {
    "Symbol":"ELYM",
    "Name":"Eliem Therapeutics Inc"
    },
    {
    "Symbol":"ELYS",
    "Name":"Elys Game Technology Corp."
    },
    {
    "Symbol":"EM",
    "Name":"Smart Share Global Limited American Depositary Shares"
    },
    {
    "Symbol":"EMAN",
    "Name":"eMagin Corporation"
    },
    {
    "Symbol":"EMBK",
    "Name":"Embark Technology Inc."
    },
    {
    "Symbol":"EMBKW",
    "Name":"Embark Technology Inc. Warrants"
    },
    {
    "Symbol":"EMCF",
    "Name":"Emclaire Financial Corp"
    },
    {
    "Symbol":"EMD",
    "Name":"Western Asset Emerging Markets Debt Fund Inc"
    },
    {
    "Symbol":"EME",
    "Name":"EMCOR Group Inc."
    },
    {
    "Symbol":"EMF",
    "Name":"Templeton Emerging Markets Fund"
    },
    {
    "Symbol":"EMKR",
    "Name":"EMCORE Corporation"
    },
    {
    "Symbol":"EML",
    "Name":"Eastern Company (The)"
    },
    {
    "Symbol":"EMLDU",
    "Name":"FTAC Emerald Acquisition Corp. Unit"
    },
    {
    "Symbol":"EMN",
    "Name":"Eastman Chemical Company"
    },
    {
    "Symbol":"EMO",
    "Name":"ClearBridge Energy Midstream Opportunity Fund Inc."
    },
    {
    "Symbol":"EMP",
    "Name":"Entergy Mississippi LLC First Mortgage Bonds 4.90% Series Due October 1 2066"
    },
    {
    "Symbol":"EMR",
    "Name":"Emerson Electric Company"
    },
    {
    "Symbol":"EMX",
    "Name":"EMX Royalty Corporation Common Shares (Canada)"
    },
    {
    "Symbol":"ENB",
    "Name":"Enbridge Inc"
    },
    {
    "Symbol":"ENBA",
    "Name":"Enbridge Inc 6.375% Fixed-to-Floating Rate Subordinated Notes Series 2018-B due 2078"
    },
    {
    "Symbol":"ENCP",
    "Name":"Energem Corp Class A Ordinary Shares"
    },
    {
    "Symbol":"ENCPU",
    "Name":"Energem Corp Unit"
    },
    {
    "Symbol":"ENCPW",
    "Name":"Energem Corp Warrant"
    },
    {
    "Symbol":"ENDP",
    "Name":"Endo International plc Ordinary Shares"
    },
    {
    "Symbol":"ENER",
    "Name":"Accretion Acquisition Corp."
    },
    {
    "Symbol":"ENERR",
    "Name":"Accretion Acquisition Corp. Right"
    },
    {
    "Symbol":"ENERU",
    "Name":"Accretion Acquisition Corp. Unit"
    },
    {
    "Symbol":"ENERW",
    "Name":"Accretion Acquisition Corp. Warrant"
    },
    {
    "Symbol":"ENFN",
    "Name":"Enfusion Inc. Class A"
    },
    {
    "Symbol":"ENG",
    "Name":"ENGlobal Corporation"
    },
    {
    "Symbol":"ENIA",
    "Name":"Enel Americas S.A. American Depositary Shares"
    },
    {
    "Symbol":"ENIC",
    "Name":"Enel Chile S.A. American Depositary Shares (Each representing 50 shares of  )"
    },
    {
    "Symbol":"ENJ",
    "Name":"Entergy New Orleans LLC First Mortgage Bonds 5.0% Series due December 1 2052"
    },
    {
    "Symbol":"ENJY",
    "Name":"Enjoy Technology Inc."
    },
    {
    "Symbol":"ENJYW",
    "Name":"Enjoy Technology Inc. Warrant"
    },
    {
    "Symbol":"ENLC",
    "Name":"EnLink Midstream LLC Common Units representing Limited Partner Interests"
    },
    {
    "Symbol":"ENLV",
    "Name":"Enlivex Therapeutics Ltd. Ordinary Shares"
    },
    {
    "Symbol":"ENNV",
    "Name":"ECP Environmental Growth Opportunities Corp. Class A"
    },
    {
    "Symbol":"ENNVU",
    "Name":"ECP Environmental Growth Opportunities Corp. Unit"
    },
    {
    "Symbol":"ENNVW",
    "Name":"ECP Environmental Growth Opportunities Corp. Warrants"
    },
    {
    "Symbol":"ENO",
    "Name":"Entergy New Orleans LLC First Mortgage Bonds 5.50% Series due April 1 2066"
    },
    {
    "Symbol":"ENOB",
    "Name":"Enochian Biosciences Inc."
    },
    {
    "Symbol":"ENPC",
    "Name":"Executive Network Partnering Corporation Class A"
    },
    {
    "Symbol":"ENPH",
    "Name":"Enphase Energy Inc."
    },
    {
    "Symbol":"ENR",
    "Name":"Energizer Holdings Inc."
    },
    {
    "Symbol":"ENS",
    "Name":"EnerSys"
    },
    {
    "Symbol":"ENSC",
    "Name":"Ensysce Biosciences Inc."
    },
    {
    "Symbol":"ENSG",
    "Name":"The Ensign Group Inc."
    },
    {
    "Symbol":"ENSV",
    "Name":"Enservco Corporation"
    },
    {
    "Symbol":"ENTA",
    "Name":"Enanta Pharmaceuticals Inc."
    },
    {
    "Symbol":"ENTF",
    "Name":"Enterprise 4.0 Technology Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"ENTFU",
    "Name":"Enterprise 4.0 Technology Acquisition Corp. Unit"
    },
    {
    "Symbol":"ENTFW",
    "Name":"Enterprise 4.0 Technology Acquisition Corp. Warrant"
    },
    {
    "Symbol":"ENTG",
    "Name":"Entegris Inc."
    },
    {
    "Symbol":"ENTX",
    "Name":"Entera Bio Ltd. Ordinary Shares"
    },
    {
    "Symbol":"ENTXW",
    "Name":"Entera Bio Ltd. Warrant"
    },
    {
    "Symbol":"ENV",
    "Name":"Envestnet Inc"
    },
    {
    "Symbol":"ENVA",
    "Name":"Enova International Inc."
    },
    {
    "Symbol":"ENVB",
    "Name":"Enveric Biosciences Inc."
    },
    {
    "Symbol":"ENVI",
    "Name":"Environmental Impact Acquisition Corp. Class A"
    },
    {
    "Symbol":"ENVIU",
    "Name":"Environmental Impact Acquisition Corp. Unit"
    },
    {
    "Symbol":"ENVIW",
    "Name":"Environmental Impact Acquisition Corp. Warrant"
    },
    {
    "Symbol":"ENVX",
    "Name":"Enovix Corporation"
    },
    {
    "Symbol":"ENX",
    "Name":"Eaton Vance New York Municipal Bond Fund Common Shares of Beneficial Interest $.01 par value"
    },
    {
    "Symbol":"ENZ",
    "Name":"Enzo Biochem Inc.   ($0.01 Par Value)"
    },
    {
    "Symbol":"EOCW",
    "Name":"Elliott Opportunity II Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"EOD",
    "Name":"Allspring Global Dividend Opportunity Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"EOG",
    "Name":"EOG Resources Inc."
    },
    {
    "Symbol":"EOI",
    "Name":"Eaton Vance Enhance Equity Income Fund Eaton Vance Enhanced Equity Income Fund Shares of Beneficial Interest"
    },
    {
    "Symbol":"EOLS",
    "Name":"Evolus Inc."
    },
    {
    "Symbol":"EOS",
    "Name":"Eaton Vance Enhance Equity Income Fund II"
    },
    {
    "Symbol":"EOSE",
    "Name":"Eos Energy Enterprises Inc. Class A"
    },
    {
    "Symbol":"EOSEW",
    "Name":"Eos Energy Enterprises Inc. Warrant"
    },
    {
    "Symbol":"EOT",
    "Name":"Eaton Vance Municipal Income Trust EATON VANCE NATIONAL MUNICIPAL OPPORTUNITIES TRUST"
    },
    {
    "Symbol":"EP^C",
    "Name":"El Paso Corporation Preferred Stock"
    },
    {
    "Symbol":"EPAC",
    "Name":"Enerpac Tool Group Corp."
    },
    {
    "Symbol":"EPAM",
    "Name":"EPAM Systems Inc."
    },
    {
    "Symbol":"EPAY",
    "Name":"Bottomline Technologies Inc."
    },
    {
    "Symbol":"EPC",
    "Name":"Edgewell Personal Care Company"
    },
    {
    "Symbol":"EPD",
    "Name":"Enterprise Products Partners L.P."
    },
    {
    "Symbol":"EPHY",
    "Name":"Epiphany Technology Acquisition Corp. Class A"
    },
    {
    "Symbol":"EPHYU",
    "Name":"Epiphany Technology Acquisition Corp. Unit"
    },
    {
    "Symbol":"EPHYW",
    "Name":"Epiphany Technology Acquisition Corp. Warrant"
    },
    {
    "Symbol":"EPIX",
    "Name":"ESSA Pharma Inc."
    },
    {
    "Symbol":"EPM",
    "Name":"Evolution Petroleum Corporation Inc."
    },
    {
    "Symbol":"EPR",
    "Name":"EPR Properties"
    },
    {
    "Symbol":"EPR^C",
    "Name":"EPR Properties 5.75% Series C Cumulative Convertible Preferred Shares"
    },
    {
    "Symbol":"EPR^E",
    "Name":"EPR Properties Series E Cumulative Conv Pfd Shs Ser E"
    },
    {
    "Symbol":"EPR^G",
    "Name":"EPR Properties 5.750% Series G Cumulative Redeemable Preferred Shares"
    },
    {
    "Symbol":"EPRT",
    "Name":"Essential Properties Realty Trust Inc."
    },
    {
    "Symbol":"EPSN",
    "Name":"Epsilon Energy Ltd. Common Share"
    },
    {
    "Symbol":"EPWR",
    "Name":"Empowerment & Inclusion Capital I Corp. Class A"
    },
    {
    "Symbol":"EPZM",
    "Name":"Epizyme Inc."
    },
    {
    "Symbol":"EQ",
    "Name":"Equillium Inc."
    },
    {
    "Symbol":"EQBK",
    "Name":"Equity Bancshares Inc. Class A"
    },
    {
    "Symbol":"EQC",
    "Name":"Equity Commonwealth Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"EQC^D",
    "Name":"Equity Commonwealth 6.50% Pfd Conv Shs Ser D"
    },
    {
    "Symbol":"EQD",
    "Name":"Equity Distribution Acquisition Corp. Class A"
    },
    {
    "Symbol":"EQH",
    "Name":"Equitable Holdings Inc."
    },
    {
    "Symbol":"EQH^A",
    "Name":"Equitable Holdings Inc. Depositary Shares"
    },
    {
    "Symbol":"EQH^C",
    "Name":"Equitable Holdings Inc. Depositary Shares each representing a 1/1000th interest in a share of Fixed Rate Noncumulative Perpetual Preferred Stock Series C"
    },
    {
    "Symbol":"EQHA",
    "Name":"EQ Health Acquisition Corp. Class A"
    },
    {
    "Symbol":"EQIX",
    "Name":"Equinix Inc.   REIT"
    },
    {
    "Symbol":"EQNR",
    "Name":"Equinor ASA"
    },
    {
    "Symbol":"EQOS",
    "Name":"EQONEX LIMITED Ordinary Shares"
    },
    {
    "Symbol":"EQR",
    "Name":"Equity Residential Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"EQRX",
    "Name":"EQRx Inc. "
    },
    {
    "Symbol":"EQRXW",
    "Name":"EQRx Inc. Warrant"
    },
    {
    "Symbol":"EQS",
    "Name":"Equus Total Return Inc."
    },
    {
    "Symbol":"EQT",
    "Name":"EQT Corporation"
    },
    {
    "Symbol":"EQX",
    "Name":"Equinox Gold Corp. Common Shares"
    },
    {
    "Symbol":"ERAS",
    "Name":"Erasca Inc."
    },
    {
    "Symbol":"ERC",
    "Name":"Allspring Multi-Sector Income Fund"
    },
    {
    "Symbol":"ERES",
    "Name":"East Resources Acquisition Company Class A"
    },
    {
    "Symbol":"ERESU",
    "Name":"East Resources Acquisition Company Unit"
    },
    {
    "Symbol":"ERESW",
    "Name":"East Resources Acquisition Company Warrant"
    },
    {
    "Symbol":"ERF",
    "Name":"Enerplus Corporation"
    },
    {
    "Symbol":"ERH",
    "Name":"Allspring Utilities and High Income Fund Common Shares"
    },
    {
    "Symbol":"ERIC",
    "Name":"Ericsson American Depositary Shares"
    },
    {
    "Symbol":"ERIE",
    "Name":"Erie Indemnity Company Class A"
    },
    {
    "Symbol":"ERII",
    "Name":"Energy Recovery Inc."
    },
    {
    "Symbol":"ERJ",
    "Name":"Embraer S.A."
    },
    {
    "Symbol":"ERO",
    "Name":"Ero Copper Corp. Common Shares"
    },
    {
    "Symbol":"ERYP",
    "Name":"Erytech Pharma S.A. American Depositary Shares"
    },
    {
    "Symbol":"ES",
    "Name":"Eversource Energy (D/B/A)"
    },
    {
    "Symbol":"ESAC",
    "Name":"ESGEN Acquisition Corporation Class A Ordinary Shares"
    },
    {
    "Symbol":"ESACU",
    "Name":"ESGEN Acquisition Corporation Unit"
    },
    {
    "Symbol":"ESACW",
    "Name":"ESGEN Acquisition Corporation Warrants"
    },
    {
    "Symbol":"ESBK",
    "Name":"Elmira Savings Bank Elmira NY"
    },
    {
    "Symbol":"ESCA",
    "Name":"Escalade Incorporated"
    },
    {
    "Symbol":"ESE",
    "Name":"ESCO Technologies Inc."
    },
    {
    "Symbol":"ESEA",
    "Name":"Euroseas Ltd.   (Marshall Islands)"
    },
    {
    "Symbol":"ESGC",
    "Name":"Eros STX Global Corporation A Ordinary Shares"
    },
    {
    "Symbol":"ESGR",
    "Name":"Enstar Group Limited Ordinary Shares"
    },
    {
    "Symbol":"ESGRO",
    "Name":"Enstar Group Limited Depository Shares 7.00% Perpetual Non-Cumulative Preference Shares Series E"
    },
    {
    "Symbol":"ESGRP",
    "Name":"Enstar Group Limited Depositary Shares Each Representing 1/1000th of an interest in Preference Shares"
    },
    {
    "Symbol":"ESI",
    "Name":"Element Solutions Inc."
    },
    {
    "Symbol":"ESLT",
    "Name":"Elbit Systems Ltd. Ordinary Shares"
    },
    {
    "Symbol":"ESM",
    "Name":"ESM Acquisition Corporation Class A Ordinary Shares"
    },
    {
    "Symbol":"ESMT",
    "Name":"EngageSmart Inc."
    },
    {
    "Symbol":"ESNT",
    "Name":"Essent Group Ltd. Common Shares"
    },
    {
    "Symbol":"ESP",
    "Name":"Espey Mfg. & Electronics Corp."
    },
    {
    "Symbol":"ESPR",
    "Name":"Esperion Therapeutics Inc."
    },
    {
    "Symbol":"ESQ",
    "Name":"Esquire Financial Holdings Inc."
    },
    {
    "Symbol":"ESRT",
    "Name":"Empire State Realty Trust Inc. Class A"
    },
    {
    "Symbol":"ESS",
    "Name":"Essex Property Trust Inc."
    },
    {
    "Symbol":"ESSA",
    "Name":"ESSA Bancorp Inc."
    },
    {
    "Symbol":"ESSC",
    "Name":"East Stone Acquisition Corporation Ordinary Shares"
    },
    {
    "Symbol":"ESSCR",
    "Name":"East Stone Acquisition Corporation Right"
    },
    {
    "Symbol":"ESSCW",
    "Name":"East Stone Acquisition Corporation Warrant"
    },
    {
    "Symbol":"ESTA",
    "Name":"Establishment Labs Holdings Inc. Common Shares"
    },
    {
    "Symbol":"ESTC",
    "Name":"Elastic N.V. Ordinary Shares"
    },
    {
    "Symbol":"ESTE",
    "Name":"Earthstone Energy Inc. Class A"
    },
    {
    "Symbol":"ET",
    "Name":"Energy Transfer LP Common Units"
    },
    {
    "Symbol":"ET^C",
    "Name":"Energy Transfer L.P. 7.375% Series C Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Unit"
    },
    {
    "Symbol":"ET^D",
    "Name":"Energy Transfer L.P. 7.625% Series D Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Unit"
    },
    {
    "Symbol":"ET^E",
    "Name":"Energy Transfer L.P. 7.600% Series E Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Unit"
    },
    {
    "Symbol":"ETAC",
    "Name":"E.Merge Technology Acquisition Corp. Class A"
    },
    {
    "Symbol":"ETACU",
    "Name":"E.Merge Technology Acquisition Corp. Unit"
    },
    {
    "Symbol":"ETACW",
    "Name":"E.Merge Technology Acquisition Corp. Warrant"
    },
    {
    "Symbol":"ETB",
    "Name":"Eaton Vance Tax-Managed Buy-Write Income Fund Eaton Vance Tax-Managed Buy-Write Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"ETD",
    "Name":"Ethan Allen Interiors Inc."
    },
    {
    "Symbol":"ETG",
    "Name":"Eaton Vance Tax-Advantaged Global Dividend Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"ETI^",
    "Name":"Entergy Texas Inc 5.375% Series A Preferred Stock Cumulative No Par Value"
    },
    {
    "Symbol":"ETJ",
    "Name":"Eaton Vance Risk-Managed Diversified Equity Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"ETN",
    "Name":"Eaton Corporation PLC Ordinary Shares"
    },
    {
    "Symbol":"ETNB",
    "Name":"89bio Inc."
    },
    {
    "Symbol":"ETO",
    "Name":"Eaton Vance Tax-Advantage Global Dividend Opp"
    },
    {
    "Symbol":"ETON",
    "Name":"Eton Pharmaceuticals Inc."
    },
    {
    "Symbol":"ETR",
    "Name":"Entergy Corporation"
    },
    {
    "Symbol":"ETRN",
    "Name":"Equitrans Midstream Corporation"
    },
    {
    "Symbol":"ETSY",
    "Name":"Etsy Inc."
    },
    {
    "Symbol":"ETTX",
    "Name":"Entasis Therapeutics Holdings Inc."
    },
    {
    "Symbol":"ETV",
    "Name":"Eaton Vance Corporation Eaton Vance Tax-Managed Buy-Write Opportunities Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"ETW",
    "Name":"Eaton Vance Corporation Eaton Vance Tax-Managed Global Buy-Write Opportunites Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"ETWO",
    "Name":"E2open Parent Holdings Inc.Class A"
    },
    {
    "Symbol":"ETX",
    "Name":"Eaton Vance Municipal Income 2028 Term Trust Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"ETY",
    "Name":"Eaton Vance Tax-Managed Diversified Equity Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"EUCR",
    "Name":"Eucrates Biomedical Acquisition Corp. Ordinary Shares"
    },
    {
    "Symbol":"EUCRU",
    "Name":"Eucrates Biomedical Acquisition Corp. Unit"
    },
    {
    "Symbol":"EUCRW",
    "Name":"Eucrates Biomedical Acquisition Corp. Warrant"
    },
    {
    "Symbol":"EURN",
    "Name":"Euronav NV Ordinary Shares"
    },
    {
    "Symbol":"EVA",
    "Name":"Enviva Inc."
    },
    {
    "Symbol":"EVAX",
    "Name":"Evaxion Biotech A/S American Depositary Share"
    },
    {
    "Symbol":"EVBG",
    "Name":"Everbridge Inc."
    },
    {
    "Symbol":"EVBN",
    "Name":"Evans Bancorp Inc."
    },
    {
    "Symbol":"EVC",
    "Name":"Entravision Communications Corporation"
    },
    {
    "Symbol":"EVCM",
    "Name":"EverCommerce Inc."
    },
    {
    "Symbol":"EVER",
    "Name":"EverQuote Inc. Class A"
    },
    {
    "Symbol":"EVF",
    "Name":"Eaton Vance Senior Income Trust"
    },
    {
    "Symbol":"EVFM",
    "Name":"Evofem Biosciences Inc."
    },
    {
    "Symbol":"EVG",
    "Name":"Eaton Vance Short Diversified Income Fund Eaton Vance Short Duration Diversified Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"EVGN",
    "Name":"Evogene Ltd Ordinary Shares"
    },
    {
    "Symbol":"EVGO",
    "Name":"EVgo Inc. Class A"
    },
    {
    "Symbol":"EVGOW",
    "Name":"EVgo Inc. Warrants"
    },
    {
    "Symbol":"EVH",
    "Name":"Evolent Health Inc Class A"
    },
    {
    "Symbol":"EVI",
    "Name":"EVI Industries Inc. "
    },
    {
    "Symbol":"EVK",
    "Name":"Ever-Glory International Group Inc."
    },
    {
    "Symbol":"EVLO",
    "Name":"Evelo Biosciences Inc."
    },
    {
    "Symbol":"EVLV",
    "Name":"Evolv Technologies Holdings Inc. Class A"
    },
    {
    "Symbol":"EVLVW",
    "Name":"Evolv Technologies Holdings Inc. Warrant"
    },
    {
    "Symbol":"EVM",
    "Name":"Eaton Vance California Municipal Bond Fund Common Shares of Beneficial Interest $.01 par value"
    },
    {
    "Symbol":"EVN",
    "Name":"Eaton Vance Municipal Income Trust"
    },
    {
    "Symbol":"EVO",
    "Name":"Evotec SE American Depositary Shares"
    },
    {
    "Symbol":"EVOJ",
    "Name":"Evo Acquisition Corp. Class A"
    },
    {
    "Symbol":"EVOJU",
    "Name":"Evo Acquisition Corp. Unit"
    },
    {
    "Symbol":"EVOJW",
    "Name":"Evo Acquisition Corp. Warrant"
    },
    {
    "Symbol":"EVOK",
    "Name":"Evoke Pharma Inc."
    },
    {
    "Symbol":"EVOL",
    "Name":"Evolving Systems Inc."
    },
    {
    "Symbol":"EVOP",
    "Name":"EVO Payments Inc. Class A"
    },
    {
    "Symbol":"EVR",
    "Name":"Evercore Inc. Class A"
    },
    {
    "Symbol":"EVRG",
    "Name":"Evergy Inc."
    },
    {
    "Symbol":"EVRI",
    "Name":"Everi Holdings Inc."
    },
    {
    "Symbol":"EVT",
    "Name":"Eaton Vance Tax Advantaged Dividend Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"EVTC",
    "Name":"Evertec Inc."
    },
    {
    "Symbol":"EVTL",
    "Name":"Vertical Aerospace Ltd. Ordinary Shares"
    },
    {
    "Symbol":"EVV",
    "Name":"Eaton Vance Limited Duration Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"EW",
    "Name":"Edwards Lifesciences Corporation"
    },
    {
    "Symbol":"EWBC",
    "Name":"East West Bancorp Inc."
    },
    {
    "Symbol":"EWCZ",
    "Name":"European Wax Center Inc. Class A"
    },
    {
    "Symbol":"EWTX",
    "Name":"Edgewise Therapeutics Inc."
    },
    {
    "Symbol":"EXAI",
    "Name":"Exscientia Plc American Depositary Shares"
    },
    {
    "Symbol":"EXAS",
    "Name":"Exact Sciences Corporation"
    },
    {
    "Symbol":"EXC",
    "Name":"Exelon Corporation"
    },
    {
    "Symbol":"EXCVV",
    "Name":"Exelon Corporation   Ex-Distribution When-Issued"
    },
    {
    "Symbol":"EXD",
    "Name":"Eaton Vance Tax-Managed Buy-Write Strategy Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"EXEL",
    "Name":"Exelixis Inc."
    },
    {
    "Symbol":"EXFY",
    "Name":"Expensify Inc. Class A"
    },
    {
    "Symbol":"EXG",
    "Name":"Eaton Vance Tax-Managed Global Diversified Equity Income Fund Eaton Vance Tax-Managed Global Diversified Equity Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"EXK",
    "Name":"Endeavour Silver Corporation Ordinary Shares (Canada)"
    },
    {
    "Symbol":"EXLS",
    "Name":"ExlService Holdings Inc."
    },
    {
    "Symbol":"EXN",
    "Name":"Excellon Resources Inc. Common Shares"
    },
    {
    "Symbol":"EXP",
    "Name":"Eagle Materials Inc"
    },
    {
    "Symbol":"EXPD",
    "Name":"Expeditors International of Washington Inc."
    },
    {
    "Symbol":"EXPE",
    "Name":"Expedia Group Inc."
    },
    {
    "Symbol":"EXPI",
    "Name":"eXp World Holdings Inc."
    },
    {
    "Symbol":"EXPO",
    "Name":"Exponent Inc."
    },
    {
    "Symbol":"EXPR",
    "Name":"Express Inc."
    },
    {
    "Symbol":"EXR",
    "Name":"Extra Space Storage Inc"
    },
    {
    "Symbol":"EXTN",
    "Name":"Exterran Corporation"
    },
    {
    "Symbol":"EXTR",
    "Name":"Extreme Networks Inc."
    },
    {
    "Symbol":"EYE",
    "Name":"National Vision Holdings Inc."
    },
    {
    "Symbol":"EYEN",
    "Name":"Eyenovia Inc."
    },
    {
    "Symbol":"EYES",
    "Name":"Second Sight Medical Products Inc."
    },
    {
    "Symbol":"EYESW",
    "Name":"Second Sight Medical Products Inc. Warrants expiring 03/14/2024"
    },
    {
    "Symbol":"EYPT",
    "Name":"EyePoint Pharmaceuticals Inc."
    },
    {
    "Symbol":"EZFL",
    "Name":"EzFill Holdings Inc."
    },
    {
    "Symbol":"EZGO",
    "Name":"EZGO Technologies Ltd. Ordinary Shares"
    },
    {
    "Symbol":"EZPW",
    "Name":"EZCORP Inc. Class A Non Voting"
    },
    {
    "Symbol":"F",
    "Name":"Ford Motor Company"
    },
    {
    "Symbol":"F^B",
    "Name":"Ford Motor Company 6.20% Notes due June 1 2059"
    },
    {
    "Symbol":"F^C",
    "Name":"Ford Motor Company 6% Notes due December 1 2059"
    },
    {
    "Symbol":"FA",
    "Name":"First Advantage Corporation"
    },
    {
    "Symbol":"FACA",
    "Name":"Figure Acquisition Corp. I Class A"
    },
    {
    "Symbol":"FACT",
    "Name":"Freedom Acquisition I Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"FAF",
    "Name":"First American Corporation (New)"
    },
    {
    "Symbol":"FAM",
    "Name":"First Trust/Aberdeen Global Opportunity Income Fund First Trust/Aberdeen Global Opportunity Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"FAMI",
    "Name":"Farmmi Inc. Ordinary Shares"
    },
    {
    "Symbol":"FANG",
    "Name":"Diamondback Energy Inc. Commmon Stock"
    },
    {
    "Symbol":"FANH",
    "Name":"Fanhua Inc. American Depositary Shares"
    },
    {
    "Symbol":"FARM",
    "Name":"Farmer Brothers Company"
    },
    {
    "Symbol":"FARO",
    "Name":"FARO Technologies Inc."
    },
    {
    "Symbol":"FAST",
    "Name":"Fastenal Company"
    },
    {
    "Symbol":"FAT",
    "Name":"FAT Brands Inc. Class A"
    },
    {
    "Symbol":"FATBB",
    "Name":"FAT Brands Inc. Class B"
    },
    {
    "Symbol":"FATBP",
    "Name":"FAT Brands Inc. 8.25% Series B Cumulative Preferred Stock"
    },
    {
    "Symbol":"FATBW",
    "Name":"FAT Brands Inc. Warrant"
    },
    {
    "Symbol":"FATE",
    "Name":"Fate Therapeutics Inc."
    },
    {
    "Symbol":"FATH",
    "Name":"Fathom Digital Manufacturing Corporation Class A"
    },
    {
    "Symbol":"FATP",
    "Name":"Fat Projects Acquisition Corp Class A Ordinary Share"
    },
    {
    "Symbol":"FATPW",
    "Name":"Fat Projects Acquisition Corp Warrant"
    },
    {
    "Symbol":"FAX",
    "Name":"Aberdeen Asia-Pacific Income Fund Inc"
    },
    {
    "Symbol":"FB",
    "Name":"Meta Platforms Inc. Class A"
    },
    {
    "Symbol":"FBC",
    "Name":"Flagstar Bancorp Inc."
    },
    {
    "Symbol":"FBHS",
    "Name":"Fortune Brands Home & Security Inc."
    },
    {
    "Symbol":"FBIO",
    "Name":"Fortress Biotech Inc."
    },
    {
    "Symbol":"FBIOP",
    "Name":"Fortress Biotech Inc. 9.375% Series A Cumulative Redeemable Perpetual Preferred Stock"
    },
    {
    "Symbol":"FBIZ",
    "Name":"First Business Financial Services Inc."
    },
    {
    "Symbol":"FBK",
    "Name":"FB Financial Corporation"
    },
    {
    "Symbol":"FBMS",
    "Name":"First Bancshares Inc."
    },
    {
    "Symbol":"FBNC",
    "Name":"First Bancorp"
    },
    {
    "Symbol":"FBP",
    "Name":"First BanCorp. New"
    },
    {
    "Symbol":"FBRT",
    "Name":"Franklin BSP Realty Trust Inc."
    },
    {
    "Symbol":"FBRT^E",
    "Name":"Franklin BSP Realty Trust Inc. 7.50% Series E Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"FBRX",
    "Name":"Forte Biosciences Inc."
    },
    {
    "Symbol":"FC",
    "Name":"Franklin Covey Company"
    },
    {
    "Symbol":"FCAP",
    "Name":"First Capital Inc."
    },
    {
    "Symbol":"FCAX",
    "Name":"Fortress Capital Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"FCBC",
    "Name":"First Community Bankshares Inc. (VA)"
    },
    {
    "Symbol":"FCCO",
    "Name":"First Community Corporation"
    },
    {
    "Symbol":"FCEL",
    "Name":"FuelCell Energy Inc."
    },
    {
    "Symbol":"FCF",
    "Name":"First Commonwealth Financial Corporation"
    },
    {
    "Symbol":"FCFS",
    "Name":"FirstCash Holdings Inc."
    },
    {
    "Symbol":"FCN",
    "Name":"FTI Consulting Inc."
    },
    {
    "Symbol":"FCNCA",
    "Name":"First Citizens BancShares Inc. Class A"
    },
    {
    "Symbol":"FCNCO",
    "Name":"First Citizens BancShares Inc. 5.625% Non-Cumulative Perpetual Preferred Stock Series C"
    },
    {
    "Symbol":"FCNCP",
    "Name":"First Citizens BancShares Inc. Depositary Shares"
    },
    {
    "Symbol":"FCO",
    "Name":"Aberdeen Global Income Fund Inc."
    },
    {
    "Symbol":"FCPT",
    "Name":"Four Corners Property Trust Inc."
    },
    {
    "Symbol":"FCRD",
    "Name":"First Eagle Alternative Capital BDC Inc."
    },
    {
    "Symbol":"FCRX",
    "Name":"First Eagle Alternative Capital BDC Inc. 5.000% Notes due 2026"
    },
    {
    "Symbol":"FCT",
    "Name":"First Trust Senior Floating Rate Income Fund II Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"FCUV",
    "Name":"Focus Universal Inc."
    },
    {
    "Symbol":"FCX",
    "Name":"Freeport-McMoRan Inc."
    },
    {
    "Symbol":"FDBC",
    "Name":"Fidelity D & D Bancorp Inc."
    },
    {
    "Symbol":"FDEU",
    "Name":"First Trust Dynamic Europe Equity Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"FDMT",
    "Name":"4D Molecular Therapeutics Inc."
    },
    {
    "Symbol":"FDP",
    "Name":"Fresh Del Monte Produce Inc."
    },
    {
    "Symbol":"FDS",
    "Name":"FactSet Research Systems Inc."
    },
    {
    "Symbol":"FDUS",
    "Name":"Fidus Investment Corporation"
    },
    {
    "Symbol":"FDX",
    "Name":"FedEx Corporation"
    },
    {
    "Symbol":"FE",
    "Name":"FirstEnergy Corp."
    },
    {
    "Symbol":"FEDU",
    "Name":"Four Seasons Education (Cayman) Inc. American Depositary Shares each two ADSs representing one ordinary share"
    },
    {
    "Symbol":"FEI",
    "Name":"First Trust MLP and Energy Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"FEIM",
    "Name":"Frequency Electronics Inc."
    },
    {
    "Symbol":"FELE",
    "Name":"Franklin Electric Co. Inc."
    },
    {
    "Symbol":"FEMY",
    "Name":"Femasys Inc."
    },
    {
    "Symbol":"FEN",
    "Name":"First Trust Energy Income and Growth Fund"
    },
    {
    "Symbol":"FENC",
    "Name":"Fennec Pharmaceuticals Inc."
    },
    {
    "Symbol":"FENG",
    "Name":"Phoenix New Media Limited American Depositary Shares each representing 8 Class A ordinary shares."
    },
    {
    "Symbol":"FEO",
    "Name":"First Trust/Aberdeen Emerging Opportunity Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"FERG",
    "Name":"Ferguson plc Ordinary Shares"
    },
    {
    "Symbol":"FET",
    "Name":"Forum Energy Technologies Inc."
    },
    {
    "Symbol":"FEXD",
    "Name":"Fintech Ecosystem Development Corp. Class A"
    },
    {
    "Symbol":"FEXDR",
    "Name":"Fintech Ecosystem Development Corp. Right"
    },
    {
    "Symbol":"FEXDU",
    "Name":"Fintech Ecosystem Development Corp. Units"
    },
    {
    "Symbol":"FEXDW",
    "Name":"Fintech Ecosystem Development Corp. Warrant"
    },
    {
    "Symbol":"FF",
    "Name":"FutureFuel Corp.  Common shares"
    },
    {
    "Symbol":"FFA",
    "Name":"First Trust Enhanced Equity Income Fund"
    },
    {
    "Symbol":"FFBC",
    "Name":"First Financial Bancorp."
    },
    {
    "Symbol":"FFBW",
    "Name":"FFBW Inc.   (MD)"
    },
    {
    "Symbol":"FFC",
    "Name":"Flaherty & Crumrine Preferred and Income Securities Fund Incorporated"
    },
    {
    "Symbol":"FFHL",
    "Name":"Fuwei Films (Holdings) Co. Ltd. Ordinary Shares"
    },
    {
    "Symbol":"FFIC",
    "Name":"Flushing Financial Corporation"
    },
    {
    "Symbol":"FFIE",
    "Name":"Faraday Future Intelligent Electric Inc."
    },
    {
    "Symbol":"FFIEW",
    "Name":"Faraday Future Intelligent Electric Inc. Warrant"
    },
    {
    "Symbol":"FFIN",
    "Name":"First Financial Bankshares Inc."
    },
    {
    "Symbol":"FFIV",
    "Name":"F5 Inc."
    },
    {
    "Symbol":"FFNW",
    "Name":"First Financial Northwest Inc."
    },
    {
    "Symbol":"FFWM",
    "Name":"First Foundation Inc."
    },
    {
    "Symbol":"FGB",
    "Name":"First Trust Specialty Finance and Financial Opportunities Fund"
    },
    {
    "Symbol":"FGBI",
    "Name":"First Guaranty Bancshares Inc."
    },
    {
    "Symbol":"FGBIP",
    "Name":"First Guaranty Bancshares Inc. 6.75% Series A Fixed-Rate Non-Cumulative Perpetual Preferred Stock"
    },
    {
    "Symbol":"FGEN",
    "Name":"FibroGen Inc"
    },
    {
    "Symbol":"FGF",
    "Name":"FG Financial Group Inc."
    },
    {
    "Symbol":"FGFPP",
    "Name":"FG Financial Group Inc. 8.00% Cumulative Preferred Stock"
    },
    {
    "Symbol":"FGI",
    "Name":"FGI Industries Ltd. Ordinary Shares"
    },
    {
    "Symbol":"FGIWW",
    "Name":"FGI Industries Ltd. Warrant"
    },
    {
    "Symbol":"FHB",
    "Name":"First Hawaiian Inc."
    },
    {
    "Symbol":"FHI",
    "Name":"Federated Hermes Inc."
    },
    {
    "Symbol":"FHLT",
    "Name":"Future Health ESG Corp."
    },
    {
    "Symbol":"FHLTU",
    "Name":"Future Health ESG Corp. Unit"
    },
    {
    "Symbol":"FHLTW",
    "Name":"Future Health ESG Corp. Warrant"
    },
    {
    "Symbol":"FHN",
    "Name":"First Horizon Corporation"
    },
    {
    "Symbol":"FHN^B",
    "Name":"First Horizon Corporation Depositary Shares each representing a 1/400th interest in a share of Non-Cumulative Perpetual Preferred Stock Series B"
    },
    {
    "Symbol":"FHN^C",
    "Name":"First Horizon Corporation Depositary Shares each representing a 1/400th interest in a share of Non-Cumulative Perpetual Preferred Stock Series C"
    },
    {
    "Symbol":"FHN^D",
    "Name":"First Horizon Corporation Depositary Shares each representing a 1/400th interest in a share of Non-Cumulative Perpetual Preferred Stock Series D"
    },
    {
    "Symbol":"FHN^E",
    "Name":"First Horizon Corporation Depositary Shares each representing a 1/4000th interest in a share of Non-Cumulative Perpetual Preferred Stock Series E"
    },
    {
    "Symbol":"FHN^F",
    "Name":"First Horizon Corporation Depositary Shares each representing 1/4000th Interest in a Share of Non-Cumulative Perpetual Preferred Stock Series F"
    },
    {
    "Symbol":"FHS",
    "Name":"First High-School Education Group Co. Ltd. American Depositary Shares"
    },
    {
    "Symbol":"FHTX",
    "Name":"Foghorn Therapeutics Inc."
    },
    {
    "Symbol":"FIAC",
    "Name":"Focus Impact Acquisition Corp. Class A"
    },
    {
    "Symbol":"FIACU",
    "Name":"Focus Impact Acquisition Corp. Unit"
    },
    {
    "Symbol":"FIACW",
    "Name":"Focus Impact Acquisition Corp. Warrant"
    },
    {
    "Symbol":"FIBK",
    "Name":"First Interstate BancSystem Inc. Class A"
    },
    {
    "Symbol":"FICO",
    "Name":"Fair Isaac Corproation"
    },
    {
    "Symbol":"FICV",
    "Name":"Frontier Investment Corp Class A Ordinary Shares"
    },
    {
    "Symbol":"FICVU",
    "Name":"Frontier Investment Corp Units"
    },
    {
    "Symbol":"FIF",
    "Name":"First Trust Energy Infrastructure Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"FIGS",
    "Name":"FIGS Inc. Class A"
    },
    {
    "Symbol":"FINM",
    "Name":"Marlin Technology Corporation Class A Ordinary Share"
    },
    {
    "Symbol":"FINMU",
    "Name":"Marlin Technology Corporation Unit"
    },
    {
    "Symbol":"FINMW",
    "Name":"Marlin Technology Corporation Warrant"
    },
    {
    "Symbol":"FINS",
    "Name":"Angel Oak Financial Strategies Income Term Trust Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"FINV",
    "Name":"FinVolution Group American Depositary Shares"
    },
    {
    "Symbol":"FINW",
    "Name":"FinWise Bancorp"
    },
    {
    "Symbol":"FIS",
    "Name":"Fidelity National Information Services Inc."
    },
    {
    "Symbol":"FISI",
    "Name":"Financial Institutions Inc."
    },
    {
    "Symbol":"FISV",
    "Name":"Fiserv Inc."
    },
    {
    "Symbol":"FITB",
    "Name":"Fifth Third Bancorp"
    },
    {
    "Symbol":"FITBI",
    "Name":"Fifth Third Bancorp Depositary Shares"
    },
    {
    "Symbol":"FITBO",
    "Name":"Fifth Third Bancorp Depositary Shares each representing a 1/1000th ownership interest in a share of Non-Cumulative Perpetual Preferred Stock Series K"
    },
    {
    "Symbol":"FITBP",
    "Name":"Fifth Third Bancorp Depositary Shares each representing 1/40th share of Fifth Third 6.00% Non-Cumulative Perpetual Class B Preferred Stock Series A"
    },
    {
    "Symbol":"FIVE",
    "Name":"Five Below Inc."
    },
    {
    "Symbol":"FIVN",
    "Name":"Five9 Inc."
    },
    {
    "Symbol":"FIX",
    "Name":"Comfort Systems USA Inc."
    },
    {
    "Symbol":"FIXX",
    "Name":"Homology Medicines Inc."
    },
    {
    "Symbol":"FIZZ",
    "Name":"National Beverage Corp."
    },
    {
    "Symbol":"FKWL",
    "Name":"Franklin Wireless Corp."
    },
    {
    "Symbol":"FL",
    "Name":"Foot Locker Inc."
    },
    {
    "Symbol":"FLAC",
    "Name":"Frazier Lifesciences Acquisition Corporation Class A Ordinary Shares"
    },
    {
    "Symbol":"FLACU",
    "Name":"Frazier Lifesciences Acquisition Corporation Unit"
    },
    {
    "Symbol":"FLACW",
    "Name":"Frazier Lifesciences Acquisition Corporation Warrant"
    },
    {
    "Symbol":"FLAG",
    "Name":"First Light Acquisition Group Inc. Class A"
    },
    {
    "Symbol":"FLC",
    "Name":"Flaherty & Crumrine Total Return Fund Inc"
    },
    {
    "Symbol":"FLDM",
    "Name":"Fluidigm Corporation"
    },
    {
    "Symbol":"FLEX",
    "Name":"Flex Ltd. Ordinary Shares"
    },
    {
    "Symbol":"FLGC",
    "Name":"Flora Growth Corp."
    },
    {
    "Symbol":"FLGT",
    "Name":"Fulgent Genetics Inc."
    },
    {
    "Symbol":"FLIC",
    "Name":"First of Long Island Corporation (The)"
    },
    {
    "Symbol":"FLL",
    "Name":"Full House Resorts Inc."
    },
    {
    "Symbol":"FLME",
    "Name":"Flame Acquisition Corp. Class A"
    },
    {
    "Symbol":"FLMN",
    "Name":"Falcon Minerals Corporation Class A"
    },
    {
    "Symbol":"FLMNW",
    "Name":"Falcon Minerals Corporation Warrant"
    },
    {
    "Symbol":"FLNC",
    "Name":"Fluence Energy Inc. Class A"
    },
    {
    "Symbol":"FLNG",
    "Name":"FLEX LNG Ltd. Ordinary Shares"
    },
    {
    "Symbol":"FLNT",
    "Name":"Fluent Inc."
    },
    {
    "Symbol":"FLO",
    "Name":"Flowers Foods Inc."
    },
    {
    "Symbol":"FLOW",
    "Name":"SPX FLOW Inc."
    },
    {
    "Symbol":"FLR",
    "Name":"Fluor Corporation"
    },
    {
    "Symbol":"FLS",
    "Name":"Flowserve Corporation"
    },
    {
    "Symbol":"FLT",
    "Name":"FleetCor Technologies Inc."
    },
    {
    "Symbol":"FLUX",
    "Name":"Flux Power Holdings Inc."
    },
    {
    "Symbol":"FLWS",
    "Name":"1-800-FLOWERS.COM Inc."
    },
    {
    "Symbol":"FLXS",
    "Name":"Flexsteel Industries Inc."
    },
    {
    "Symbol":"FLYA",
    "Name":"SOAR Technology Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"FLYW",
    "Name":"Flywire Corporation Voting"
    },
    {
    "Symbol":"FMAC",
    "Name":"FirstMark Horizon Acquisition Corp. Class A"
    },
    {
    "Symbol":"FMAO",
    "Name":"Farmers & Merchants Bancorp Inc."
    },
    {
    "Symbol":"FMBH",
    "Name":"First Mid Bancshares Inc."
    },
    {
    "Symbol":"FMBI",
    "Name":"First Midwest Bancorp Inc."
    },
    {
    "Symbol":"FMBIO",
    "Name":"First Midwest Bancorp Inc. Depositary Shares Each Representing a 1/40th Interest in a Share of Fixed Rate Non-Cumulative Perpetual Preferred Stock Series C"
    },
    {
    "Symbol":"FMBIP",
    "Name":"First Midwest Bancorp Inc. Depositary Shares Each Representing a 1/40th Interest in a Share of Fixed Rate Non-Cumulative Perpetual Preferred Stock Series A"
    },
    {
    "Symbol":"FMC",
    "Name":"FMC Corporation"
    },
    {
    "Symbol":"FMIV",
    "Name":"Forum Merger IV Corporation Class A"
    },
    {
    "Symbol":"FMIVU",
    "Name":"Forum Merger IV Corporation Unit"
    },
    {
    "Symbol":"FMIVW",
    "Name":"Forum Merger IV Corporation Warrant"
    },
    {
    "Symbol":"FMN",
    "Name":"Federated Hermes Premier Municipal Income Fund"
    },
    {
    "Symbol":"FMNB",
    "Name":"Farmers National Banc Corp."
    },
    {
    "Symbol":"FMO",
    "Name":"Fiduciary/Claymore Energy Infrastructure Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"FMS",
    "Name":"Fresenius Medical Care AG"
    },
    {
    "Symbol":"FMTX",
    "Name":"Forma Therapeutics Holdings Inc."
    },
    {
    "Symbol":"FMX",
    "Name":"Fomento Economico Mexicano S.A.B. de C.V."
    },
    {
    "Symbol":"FMY",
    "Name":"First Trust Motgage Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"FN",
    "Name":"Fabrinet Ordinary Shares"
    },
    {
    "Symbol":"FNA",
    "Name":"Paragon 28 Inc."
    },
    {
    "Symbol":"FNB",
    "Name":"F.N.B. Corporation"
    },
    {
    "Symbol":"FNB^E",
    "Name":"F.N.B. Corporation Depositary Shares each representing a 1/40th interest in a share of Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred  Stock Series E"
    },
    {
    "Symbol":"FNCB",
    "Name":"FNCB Bancorp Inc."
    },
    {
    "Symbol":"FNCH",
    "Name":"Finch Therapeutics Group Inc."
    },
    {
    "Symbol":"FND",
    "Name":"Floor & Decor Holdings Inc."
    },
    {
    "Symbol":"FNF",
    "Name":"FNF Group of Fidelity National Financial Inc."
    },
    {
    "Symbol":"FNGR",
    "Name":"FingerMotion Inc."
    },
    {
    "Symbol":"FNHC",
    "Name":"FedNat Holding Company"
    },
    {
    "Symbol":"FNKO",
    "Name":"Funko Inc. Class A"
    },
    {
    "Symbol":"FNLC",
    "Name":"First Bancorp Inc  (ME)"
    },
    {
    "Symbol":"FNV",
    "Name":"Franco-Nevada Corporation"
    },
    {
    "Symbol":"FNVT",
    "Name":"Finnovate Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"FNVTU",
    "Name":"Finnovate Acquisition Corp. Units"
    },
    {
    "Symbol":"FNVTW",
    "Name":"Finnovate Acquisition Corp. Warrants"
    },
    {
    "Symbol":"FNWB",
    "Name":"First Northwest Bancorp"
    },
    {
    "Symbol":"FNWD",
    "Name":"Finward Bancorp"
    },
    {
    "Symbol":"FOA",
    "Name":"Finance of America Companies Inc. Class A"
    },
    {
    "Symbol":"FOCS",
    "Name":"Focus Financial Partners Inc. Class A"
    },
    {
    "Symbol":"FOE",
    "Name":"Ferro Corporation"
    },
    {
    "Symbol":"FOF",
    "Name":"Cohen & Steers Closed-End Opportunity Fund Inc."
    },
    {
    "Symbol":"FOLD",
    "Name":"Amicus Therapeutics Inc."
    },
    {
    "Symbol":"FONR",
    "Name":"Fonar Corporation"
    },
    {
    "Symbol":"FOR",
    "Name":"Forestar Group Inc"
    },
    {
    "Symbol":"FORA",
    "Name":"Forian Inc."
    },
    {
    "Symbol":"FORD",
    "Name":"Forward Industries Inc."
    },
    {
    "Symbol":"FORG",
    "Name":"ForgeRock Inc. Class A"
    },
    {
    "Symbol":"FORM",
    "Name":"FormFactor Inc. FormFactor Inc."
    },
    {
    "Symbol":"FORR",
    "Name":"Forrester Research Inc."
    },
    {
    "Symbol":"FORTY",
    "Name":"Formula Systems (1985) Ltd. American Depositary Shares"
    },
    {
    "Symbol":"FOSL",
    "Name":"Fossil Group Inc."
    },
    {
    "Symbol":"FOSLL",
    "Name":"Fossil Group Inc. 7% Senior Notes due 2026"
    },
    {
    "Symbol":"FOUN",
    "Name":"Founder SPAC Class A Ordinary Shares"
    },
    {
    "Symbol":"FOUNU",
    "Name":"Founder SPAC Units"
    },
    {
    "Symbol":"FOUNW",
    "Name":"Founder SPAC Warrants"
    },
    {
    "Symbol":"FOUR",
    "Name":"Shift4 Payments Inc. Class A"
    },
    {
    "Symbol":"FOX",
    "Name":"Fox Corporation Class B"
    },
    {
    "Symbol":"FOXA",
    "Name":"Fox Corporation Class A"
    },
    {
    "Symbol":"FOXF",
    "Name":"Fox Factory Holding Corp."
    },
    {
    "Symbol":"FOXW",
    "Name":"FoxWayne Enterprises Acquisition Corp. Class A"
    },
    {
    "Symbol":"FOXWW",
    "Name":"FoxWayne Enterprises Acquisition Corp. Warrant"
    },
    {
    "Symbol":"FPAC",
    "Name":"Far Peak Acquisition Corporation Class A Ordinary Shares"
    },
    {
    "Symbol":"FPAY",
    "Name":"FlexShopper Inc."
    },
    {
    "Symbol":"FPF",
    "Name":"First Trust Intermediate Duration Preferred & Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"FPH",
    "Name":"Five Point Holdings LLC Class A Common Shares"
    },
    {
    "Symbol":"FPI",
    "Name":"Farmland Partners Inc."
    },
    {
    "Symbol":"FPL",
    "Name":"First Trust New Opportunities MLP & Energy Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"FR",
    "Name":"First Industrial Realty Trust Inc."
    },
    {
    "Symbol":"FRA",
    "Name":"Blackrock Floating Rate Income Strategies Fund Inc "
    },
    {
    "Symbol":"FRAF",
    "Name":"Franklin Financial Services Corporation"
    },
    {
    "Symbol":"FRBA",
    "Name":"First Bank"
    },
    {
    "Symbol":"FRBK",
    "Name":"Republic First Bancorp Inc."
    },
    {
    "Symbol":"FRBNU",
    "Name":"Forbion European Acquisition Corp. Unit"
    },
    {
    "Symbol":"FRC",
    "Name":"FIRST REPUBLIC BANK"
    },
    {
    "Symbol":"FRC^H",
    "Name":"FIRST REPUBLIC BANK Depositary Shares each representing a 1/40th interest in a share of 5.125% Noncumulative Perpetual Series H Preferred Stock par value $0.01 per share"
    },
    {
    "Symbol":"FRC^I",
    "Name":"FIRST REPUBLIC BANK Depositary Shares each representing a 1/40th interest in a share of 5.50% Noncumulative Perpetual Series I Preferred Stock par value $0.01 per share"
    },
    {
    "Symbol":"FRC^J",
    "Name":"FIRST REPUBLIC BANK Depositary Shares Each Representing a 1/40th Interest in a Share of 4.70% Noncumulative Perpetual Series J Preferred Stock"
    },
    {
    "Symbol":"FRC^K",
    "Name":"FIRST REPUBLIC BANK Depositary Shares Each Representing a 1/40th Interest in a Share of 4.125% Noncumulative Perpetual Series K Preferred Stock"
    },
    {
    "Symbol":"FRC^L",
    "Name":"FIRST REPUBLIC BANK Depositary Shares Each Representing a 1/40th Interest in a Share of 4.250% Noncumulative Perpetual Series L Preferred Stock"
    },
    {
    "Symbol":"FRC^M",
    "Name":"FIRST REPUBLIC BANK Depositary Shares each representing a 1/40th interest in a share of 4.000% Noncumulative Perpetual Series M Preferred Stock"
    },
    {
    "Symbol":"FRC^N",
    "Name":"First Republic Bank Depositary Shares Each Representing a 1/40th Interest in a Share of 4.500% Noncumulative Perpetual Series N Preferred Stock"
    },
    {
    "Symbol":"FRD",
    "Name":"Friedman Industries Inc."
    },
    {
    "Symbol":"FREE",
    "Name":"Whole Earth Brands Inc. Class A"
    },
    {
    "Symbol":"FREEW",
    "Name":"Whole Earth Brands Inc. Warrant"
    },
    {
    "Symbol":"FREQ",
    "Name":"Frequency Therapeutics Inc."
    },
    {
    "Symbol":"FREY",
    "Name":"FREYR Battery Ordinary Shares"
    },
    {
    "Symbol":"FRG",
    "Name":"Franchise Group Inc."
    },
    {
    "Symbol":"FRGAP",
    "Name":"Franchise Group Inc. 7.50% Series A Cumulative Perpetual Preferred Stock"
    },
    {
    "Symbol":"FRGI",
    "Name":"Fiesta Restaurant Group Inc."
    },
    {
    "Symbol":"FRHC",
    "Name":"Freedom Holding Corp."
    },
    {
    "Symbol":"FRLA",
    "Name":"Fortune Rise Acquisition Corporation Class A"
    },
    {
    "Symbol":"FRLAU",
    "Name":"Fortune Rise Acquisition Corporation Units"
    },
    {
    "Symbol":"FRLAW",
    "Name":"Fortune Rise Acquisition Corporation Warrant"
    },
    {
    "Symbol":"FRLN",
    "Name":"Freeline Therapeutics Holdings plc American Depositary Shares"
    },
    {
    "Symbol":"FRME",
    "Name":"First Merchants Corporation"
    },
    {
    "Symbol":"FRO",
    "Name":"Frontline Ltd. Ordinary Shares"
    },
    {
    "Symbol":"FROG",
    "Name":"JFrog Ltd. Ordinary Shares"
    },
    {
    "Symbol":"FRON",
    "Name":"Frontier Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"FRONU",
    "Name":"Frontier Acquisition Corp. Units"
    },
    {
    "Symbol":"FRPH",
    "Name":"FRP Holdings Inc."
    },
    {
    "Symbol":"FRPT",
    "Name":"Freshpet Inc."
    },
    {
    "Symbol":"FRSG",
    "Name":"First Reserve Sustainable Growth Corp. Class A"
    },
    {
    "Symbol":"FRSGU",
    "Name":"First Reserve Sustainable Growth Corp. Unit"
    },
    {
    "Symbol":"FRSGW",
    "Name":"First Reserve Sustainable Growth Corp. Warrant"
    },
    {
    "Symbol":"FRSH",
    "Name":"Freshworks Inc. Class A"
    },
    {
    "Symbol":"FRST",
    "Name":"Primis Financial Corp."
    },
    {
    "Symbol":"FRSX",
    "Name":"Foresight Autonomous Holdings Ltd. American Depositary Shares"
    },
    {
    "Symbol":"FRT",
    "Name":"Federal Realty Investment Trust"
    },
    {
    "Symbol":"FRT^C",
    "Name":"Federal Realty Investment Trust Depositary Shares each representing a 1/1000th interest in a 5.000% Series C Cumulative Redeemable Preferred Share"
    },
    {
    "Symbol":"FRTA",
    "Name":"Forterra Inc."
    },
    {
    "Symbol":"FRW",
    "Name":"PWP Forward Acquisition Corp. I Class A"
    },
    {
    "Symbol":"FRWAU",
    "Name":"PWP Forward Acquisition Corp. I Units"
    },
    {
    "Symbol":"FRXB",
    "Name":"Forest Road Acquisition Corp. II Class A"
    },
    {
    "Symbol":"FSBC",
    "Name":"Five Star Bancorp"
    },
    {
    "Symbol":"FSBW",
    "Name":"FS Bancorp Inc."
    },
    {
    "Symbol":"FSD",
    "Name":"First Trust High Income Long Short Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"FSEA",
    "Name":"First Seacoast Bancorp"
    },
    {
    "Symbol":"FSFG",
    "Name":"First Savings Financial Group Inc."
    },
    {
    "Symbol":"FSI",
    "Name":"Flexible Solutions International Inc.   (CDA)"
    },
    {
    "Symbol":"FSK",
    "Name":"FS KKR Capital Corp."
    },
    {
    "Symbol":"FSLR",
    "Name":"First Solar Inc."
    },
    {
    "Symbol":"FSLY",
    "Name":"Fastly Inc. Class A"
    },
    {
    "Symbol":"FSM",
    "Name":"Fortuna Silver Mines Inc Ordinary Shares (Canada)"
    },
    {
    "Symbol":"FSNB",
    "Name":"Fusion Acquisition Corp. II Class A"
    },
    {
    "Symbol":"FSP",
    "Name":"Franklin Street Properties Corp."
    },
    {
    "Symbol":"FSR",
    "Name":"Fisker Inc. Class A"
    },
    {
    "Symbol":"FSRX",
    "Name":"FinServ Acquisition Corp. II Class A"
    },
    {
    "Symbol":"FSRXU",
    "Name":"FinServ Acquisition Corp. II Unit"
    },
    {
    "Symbol":"FSRXW",
    "Name":"FinServ Acquisition Corp. II Warrant"
    },
    {
    "Symbol":"FSS",
    "Name":"Federal Signal Corporation"
    },
    {
    "Symbol":"FSSI",
    "Name":"Fortistar Sustainable Solutions Corp. Class A"
    },
    {
    "Symbol":"FSSIU",
    "Name":"Fortistar Sustainable Solutions Corp. Unit"
    },
    {
    "Symbol":"FSSIW",
    "Name":"Fortistar Sustainable Solutions Corp. Warrant"
    },
    {
    "Symbol":"FST",
    "Name":"FAST Acquisition Corp. Class A"
    },
    {
    "Symbol":"FSTR",
    "Name":"L.B. Foster Company"
    },
    {
    "Symbol":"FSTX",
    "Name":"F-star Therapeutics Inc."
    },
    {
    "Symbol":"FSV",
    "Name":"FirstService Corporation Common Shares"
    },
    {
    "Symbol":"FT",
    "Name":"Franklin Universal Trust"
    },
    {
    "Symbol":"FTAA",
    "Name":"FTAC Athena Acquisition Corp. Class A Ordinary Share"
    },
    {
    "Symbol":"FTAAU",
    "Name":"FTAC Athena Acquisition Corp. Unit"
    },
    {
    "Symbol":"FTAAW",
    "Name":"FTAC Athena Acquisition Corp. Warrant"
    },
    {
    "Symbol":"FTAI",
    "Name":"Fortress Transportation and Infrastructure Investors LLC Common Shares"
    },
    {
    "Symbol":"FTAI^A",
    "Name":"Fortress Transportation and Infrastructure Investors LLC 8.25% Fixed to Floating Rate Series A Cumulative Perpetual Redeemable Preferred Shares"
    },
    {
    "Symbol":"FTAI^B",
    "Name":"Fortress Transportation and Infrastructure Investors LLC 8.00% Fixed-to-Floating Rate Series B Cumulative Perpetual Redeemable Preferred Shares"
    },
    {
    "Symbol":"FTAI^C",
    "Name":"Fortress Transportation and Infrastructure Investors LLC 8.25% Fixed - Rate Reset Series C Cumulative Perpetual Redeemable Preferred Shares"
    },
    {
    "Symbol":"FTCH",
    "Name":"Farfetch Limited Class A Ordinary Shares"
    },
    {
    "Symbol":"FTCI",
    "Name":"FTC Solar Inc."
    },
    {
    "Symbol":"FTCV",
    "Name":"FinTech Acquisition Corp. V Class A"
    },
    {
    "Symbol":"FTCVU",
    "Name":"FinTech Acquisition Corp. V Unit"
    },
    {
    "Symbol":"FTCVW",
    "Name":"FinTech Acquisition Corp. V Warrant"
    },
    {
    "Symbol":"FTDR",
    "Name":"Frontdoor Inc."
    },
    {
    "Symbol":"FTEK",
    "Name":"Fuel Tech Inc."
    },
    {
    "Symbol":"FTEV",
    "Name":"FinTech Evolution Acquisition Group Class A Ordinary Shares"
    },
    {
    "Symbol":"FTF",
    "Name":"Franklin Limited Duration Income Trust Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"FTFT",
    "Name":"Future FinTech Group Inc."
    },
    {
    "Symbol":"FTHM",
    "Name":"Fathom Holdings Inc."
    },
    {
    "Symbol":"FTHY",
    "Name":"First Trust High Yield Opportunities 2027 Term Fund"
    },
    {
    "Symbol":"FTI",
    "Name":"TechnipFMC plc Ordinary Share"
    },
    {
    "Symbol":"FTK",
    "Name":"Flotek Industries Inc."
    },
    {
    "Symbol":"FTNT",
    "Name":"Fortinet Inc."
    },
    {
    "Symbol":"FTPA",
    "Name":"FTAC Parnassus Acquisition Corp. Class A"
    },
    {
    "Symbol":"FTPAU",
    "Name":"FTAC Parnassus Acquisition Corp. Unit"
    },
    {
    "Symbol":"FTPAW",
    "Name":"FTAC Parnassus Acquisition Corp. Warrant"
    },
    {
    "Symbol":"FTRP",
    "Name":"Field Trip Health Ltd. Common Shares"
    },
    {
    "Symbol":"FTS",
    "Name":"Fortis Inc. Common Shares"
    },
    {
    "Symbol":"FTSI",
    "Name":"FTS International Inc. Class A"
    },
    {
    "Symbol":"FTV",
    "Name":"Fortive Corporation"
    },
    {
    "Symbol":"FTVI",
    "Name":"FinTech Acquisition Corp. VI Class A"
    },
    {
    "Symbol":"FTVIU",
    "Name":"FinTech Acquisition Corp. VI Units"
    },
    {
    "Symbol":"FTVIW",
    "Name":"FinTech Acquisition Corp. VI Warrants"
    },
    {
    "Symbol":"FUBO",
    "Name":"fuboTV Inc."
    },
    {
    "Symbol":"FUL",
    "Name":"H. B. Fuller Company"
    },
    {
    "Symbol":"FULC",
    "Name":"Fulcrum Therapeutics Inc."
    },
    {
    "Symbol":"FULT",
    "Name":"Fulton Financial Corporation"
    },
    {
    "Symbol":"FULTP",
    "Name":"Fulton Financial Corporation Depositary Shares Each Representing a 1/40th Interest in a Share of Fixed Rate Non-Cumulative Perpetual Preferred Stock Series A"
    },
    {
    "Symbol":"FUN",
    "Name":"Cedar Fair L.P."
    },
    {
    "Symbol":"FUNC",
    "Name":"First United Corporation"
    },
    {
    "Symbol":"FUND",
    "Name":"Sprott Focus Trust Inc."
    },
    {
    "Symbol":"FURY",
    "Name":"Fury Gold Mines Limited Common Shares"
    },
    {
    "Symbol":"FUSB",
    "Name":"First US Bancshares Inc."
    },
    {
    "Symbol":"FUSN",
    "Name":"Fusion Pharmaceuticals Inc. Common Shares"
    },
    {
    "Symbol":"FUTU",
    "Name":"Futu Holdings Limited American Depositary Shares"
    },
    {
    "Symbol":"FUV",
    "Name":"Arcimoto Inc."
    },
    {
    "Symbol":"FVAM",
    "Name":"5:01 Acquisition Corp. Class A"
    },
    {
    "Symbol":"FVCB",
    "Name":"FVCBankcorp Inc."
    },
    {
    "Symbol":"FVE",
    "Name":"Five Star Senior Living Inc."
    },
    {
    "Symbol":"FVIV",
    "Name":"Fortress Value Acquisition Corp. IV Class A"
    },
    {
    "Symbol":"FVRR",
    "Name":"Fiverr International Ltd. Ordinary Shares no par value"
    },
    {
    "Symbol":"FVT",
    "Name":"Fortress Value Acquisition Corp. III Class A"
    },
    {
    "Symbol":"FWAC",
    "Name":"Fifth Wall Acquisition Corp. III Class A Ordinary Shares"
    },
    {
    "Symbol":"FWBI",
    "Name":"First Wave BioPharma Inc."
    },
    {
    "Symbol":"FWONA",
    "Name":"Liberty Media Corporation Series A Liberty Formula One"
    },
    {
    "Symbol":"FWONK",
    "Name":"Liberty Media Corporation Series C Liberty Formula One"
    },
    {
    "Symbol":"FWP",
    "Name":"Forward Pharma A/S American Depositary Shares"
    },
    {
    "Symbol":"FWRD",
    "Name":"Forward Air Corporation"
    },
    {
    "Symbol":"FWRG",
    "Name":"First Watch Restaurant Group Inc."
    },
    {
    "Symbol":"FXCO",
    "Name":"Financial Strategies Acquisition Corp. Class A"
    },
    {
    "Symbol":"FXCOR",
    "Name":"Financial Strategies Acquisition Corp. Rights"
    },
    {
    "Symbol":"FXCOW",
    "Name":"Financial Strategies Acquisition Corp. Warrants"
    },
    {
    "Symbol":"FXLV",
    "Name":"F45 Training Holdings Inc."
    },
    {
    "Symbol":"FXNC",
    "Name":"First National Corporation"
    },
    {
    "Symbol":"FYBR",
    "Name":"Frontier Communications Parent Inc."
    },
    {
    "Symbol":"FZT",
    "Name":"FAST Acquisition Corp. II Class A"
    },
    {
    "Symbol":"G",
    "Name":"Genpact Limited"
    },
    {
    "Symbol":"GAB",
    "Name":"Gabelli Equity Trust Inc. (The)"
    },
    {
    "Symbol":"GAB^G",
    "Name":"Gabelli Equity Trust Inc. (The) Series G Cumulative Preferred Stock"
    },
    {
    "Symbol":"GAB^H",
    "Name":"Gabelli Equity Trust Inc. (The) Pfd Ser H"
    },
    {
    "Symbol":"GAB^J",
    "Name":"Gabelli Equity Trust Inc. (The) 5.45% Series J Cumulative Preferred Stock"
    },
    {
    "Symbol":"GAB^K",
    "Name":"Gabelli Equity Trust Inc. (The) 5.00% Series K Cumulative Preferred Stock"
    },
    {
    "Symbol":"GABC",
    "Name":"German American Bancorp Inc."
    },
    {
    "Symbol":"GACQ",
    "Name":"Global Consumer Acquisition Corp."
    },
    {
    "Symbol":"GACQW",
    "Name":"Global Consumer Acquisition Corp. Warrant"
    },
    {
    "Symbol":"GAIA",
    "Name":"Gaia Inc. Class A"
    },
    {
    "Symbol":"GAIN",
    "Name":"Gladstone Investment Corporation Business Development Company"
    },
    {
    "Symbol":"GAINN",
    "Name":"Gladstone Investment Corporation 5.00% Notes Due 2026"
    },
    {
    "Symbol":"GAINZ",
    "Name":"Gladstone Investment Corporation 4.875% Notes due 2028"
    },
    {
    "Symbol":"GALT",
    "Name":"Galectin Therapeutics Inc."
    },
    {
    "Symbol":"GAM",
    "Name":"General American Investors Inc."
    },
    {
    "Symbol":"GAM^B",
    "Name":"General American Investors Company Inc. Cumulative Preferred Stock"
    },
    {
    "Symbol":"GAMB",
    "Name":"Gambling.com Group Limited Ordinary Shares"
    },
    {
    "Symbol":"GAMC",
    "Name":"Golden Arrow Merger Corp. Class A"
    },
    {
    "Symbol":"GAMCU",
    "Name":"Golden Arrow Merger Corp. Unit"
    },
    {
    "Symbol":"GAMCW",
    "Name":"Golden Arrow Merger Corp. Warrant"
    },
    {
    "Symbol":"GAME",
    "Name":"Engine Gaming and Media Inc."
    },
    {
    "Symbol":"GAN",
    "Name":"GAN Limited Ordinary Shares"
    },
    {
    "Symbol":"GANX",
    "Name":"Gain Therapeutics Inc."
    },
    {
    "Symbol":"GAPA",
    "Name":"G&P Acquisition Corp. Class A"
    },
    {
    "Symbol":"GASS",
    "Name":"StealthGas Inc."
    },
    {
    "Symbol":"GATE",
    "Name":"Marblegate Acquisition Corp. Class A"
    },
    {
    "Symbol":"GATEU",
    "Name":"Marblegate Acquisition Corp. Unit"
    },
    {
    "Symbol":"GATEW",
    "Name":"Marblegate Acquisition Corp. Warrant"
    },
    {
    "Symbol":"GATO",
    "Name":"Gatos Silver Inc."
    },
    {
    "Symbol":"GATX",
    "Name":"GATX Corporation"
    },
    {
    "Symbol":"GAU",
    "Name":"Galiano Gold Inc."
    },
    {
    "Symbol":"GB",
    "Name":"Global Blue Group Holding AG Ordinary Shares"
    },
    {
    "Symbol":"GBAB",
    "Name":"Guggenheim Taxable Municipal Bond & Investment Grade Debt Trust Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"GBCI",
    "Name":"Glacier Bancorp Inc."
    },
    {
    "Symbol":"GBDC",
    "Name":"Golub Capital BDC Inc."
    },
    {
    "Symbol":"GBIO",
    "Name":"Generation Bio Co."
    },
    {
    "Symbol":"GBL",
    "Name":"Gamco Investors Inc."
    },
    {
    "Symbol":"GBLI",
    "Name":"Global Indemnity Group LLC Class A   (DE)"
    },
    {
    "Symbol":"GBLL",
    "Name":"Global Indemnity Group LLC 7.875% Subordinated Notes due 2047"
    },
    {
    "Symbol":"GBNH",
    "Name":"Greenbrook TMS Inc. Common Shares"
    },
    {
    "Symbol":"GBNY",
    "Name":"Generations Bancorp NY Inc."
    },
    {
    "Symbol":"GBOX",
    "Name":"Greenbox POS"
    },
    {
    "Symbol":"GBR",
    "Name":"New Concept Energy Inc"
    },
    {
    "Symbol":"GBRGR",
    "Name":"Goldenbridge Acquisition Limited Right"
    },
    {
    "Symbol":"GBRGW",
    "Name":"Goldenbridge Acquisition Limited Warrant"
    },
    {
    "Symbol":"GBS",
    "Name":"GBS Inc."
    },
    {
    "Symbol":"GBT",
    "Name":"Global Blood Therapeutics Inc."
    },
    {
    "Symbol":"GBX",
    "Name":"Greenbrier Companies Inc. (The)"
    },
    {
    "Symbol":"GCAC",
    "Name":"Growth Capital Acquisition Corp. Class A"
    },
    {
    "Symbol":"GCACU",
    "Name":"Growth Capital Acquisition Corp. Unit"
    },
    {
    "Symbol":"GCACW",
    "Name":"Growth Capital Acquisition Corp. Warrant"
    },
    {
    "Symbol":"GCBC",
    "Name":"Greene County Bancorp Inc."
    },
    {
    "Symbol":"GCI",
    "Name":"Gannett Co. Inc."
    },
    {
    "Symbol":"GCMG",
    "Name":"GCM Grosvenor Inc. Class A"
    },
    {
    "Symbol":"GCMGW",
    "Name":"GCM Grosvenor Inc. Warrant"
    },
    {
    "Symbol":"GCO",
    "Name":"Genesco Inc."
    },
    {
    "Symbol":"GCP",
    "Name":"GCP Applied Technologies Inc."
    },
    {
    "Symbol":"GCV",
    "Name":"Gabelli Convertible and Income Securities Fund Inc. (The)"
    },
    {
    "Symbol":"GD",
    "Name":"General Dynamics Corporation"
    },
    {
    "Symbol":"GDDY",
    "Name":"GoDaddy Inc. Class A"
    },
    {
    "Symbol":"GDEN",
    "Name":"Golden Entertainment Inc."
    },
    {
    "Symbol":"GDEV",
    "Name":"Nexters Inc. Ordinary Shares"
    },
    {
    "Symbol":"GDEVW",
    "Name":"Nexters Inc. Warrant"
    },
    {
    "Symbol":"GDL",
    "Name":"GDL Fund The Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"GDL^C",
    "Name":"The GDL Fund Series C Cumulative Puttable and Callable Preferred Shares"
    },
    {
    "Symbol":"GDNR",
    "Name":"Gardiner Healthcare Acquisitions Corp."
    },
    {
    "Symbol":"GDNRU",
    "Name":"Gardiner Healthcare Acquisitions Corp. Unit"
    },
    {
    "Symbol":"GDNRW",
    "Name":"Gardiner Healthcare Acquisitions Corp. Warrant"
    },
    {
    "Symbol":"GDO",
    "Name":"Western Asset Global Corporate Defined Opportunity Fund Inc. Western Asset Global Corporate Defined Opportunity Fund Inc."
    },
    {
    "Symbol":"GDOT",
    "Name":"Green Dot Corporation Class A   $0.001 par value"
    },
    {
    "Symbol":"GDRX",
    "Name":"GoodRx Holdings Inc. Class A"
    },
    {
    "Symbol":"GDS",
    "Name":"GDS Holdings Limited ADS"
    },
    {
    "Symbol":"GDV",
    "Name":"Gabelli Dividend & Income Trust Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"GDV^G",
    "Name":"Gabelli Dividend 5.25% Series G Cumulative Preferred Shares par value $0.001 per share"
    },
    {
    "Symbol":"GDV^H",
    "Name":"The Gabelli Dividend & Income Trust 5.375% Series H Cumulative Preferred Shares"
    },
    {
    "Symbol":"GDV^K",
    "Name":"The Gabelli Dividend & Income Trust 4.250% Series K Cumulative Preferred Shares"
    },
    {
    "Symbol":"GDYN",
    "Name":"Grid Dynamics Holdings Inc. Class A"
    },
    {
    "Symbol":"GE",
    "Name":"General Electric Company"
    },
    {
    "Symbol":"GECC",
    "Name":"Great Elm Capital Corp."
    },
    {
    "Symbol":"GECCM",
    "Name":"Great Elm Capital Corp. 6.75% Notes Due 2025"
    },
    {
    "Symbol":"GECCN",
    "Name":"Great Elm Capital Corp. 6.5% Notes due 2024"
    },
    {
    "Symbol":"GECCO",
    "Name":"Great Elm Capital Corp. 5.875% Notes due 2026"
    },
    {
    "Symbol":"GEEX",
    "Name":"Games & Esports Experience Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"GEEXU",
    "Name":"Games & Esports Experience Acquisition Corp. Unit"
    },
    {
    "Symbol":"GEEXW",
    "Name":"Games & Esports Experience Acquisition Corp. Warrants"
    },
    {
    "Symbol":"GEF",
    "Name":"Greif Inc. Class A"
    },
    {
    "Symbol":"GEG",
    "Name":"Great Elm Group Inc."
    },
    {
    "Symbol":"GEL",
    "Name":"Genesis Energy L.P. Common Units"
    },
    {
    "Symbol":"GENC",
    "Name":"Gencor Industries Inc."
    },
    {
    "Symbol":"GENE",
    "Name":"Genetic Technologies Ltd ADS"
    },
    {
    "Symbol":"GENI",
    "Name":"Genius Sports Limited Ordinary Shares"
    },
    {
    "Symbol":"GEO",
    "Name":"Geo Group Inc (The) REIT"
    },
    {
    "Symbol":"GEOS",
    "Name":"Geospace Technologies Corporation   (Texas)"
    },
    {
    "Symbol":"GER",
    "Name":"Goldman Sachs MLP Energy Renaissance Fund"
    },
    {
    "Symbol":"GERN",
    "Name":"Geron Corporation"
    },
    {
    "Symbol":"GES",
    "Name":"Guess? Inc."
    },
    {
    "Symbol":"GET",
    "Name":"Getnet Adquirencia e Servicos para Meios de Pagamento S.A. American Depositary Shares"
    },
    {
    "Symbol":"GEVO",
    "Name":"Gevo Inc."
    },
    {
    "Symbol":"GF",
    "Name":"New Germany Fund Inc. (The)"
    },
    {
    "Symbol":"GFAI",
    "Name":"Guardforce AI Co. Limited Ordinary Shares"
    },
    {
    "Symbol":"GFAIW",
    "Name":"Guardforce AI Co. Limited Warrant"
    },
    {
    "Symbol":"GFED",
    "Name":"Guaranty Federal Bancshares Inc."
    },
    {
    "Symbol":"GFF",
    "Name":"Griffon Corporation"
    },
    {
    "Symbol":"GFGDU",
    "Name":"The Growth for Good Acquisition Corporation Unit"
    },
    {
    "Symbol":"GFI",
    "Name":"Gold Fields Limited American Depositary Shares"
    },
    {
    "Symbol":"GFL",
    "Name":"GFL Environmental Inc. Subordinate voting shares no par value"
    },
    {
    "Symbol":"GFLU",
    "Name":"GFL Environmental Inc. Tangible Equity Units"
    },
    {
    "Symbol":"GFOR",
    "Name":"Graf Acquisition Corp. IV"
    },
    {
    "Symbol":"GFS",
    "Name":"GlobalFoundries Inc. Ordinary Shares"
    },
    {
    "Symbol":"GFX",
    "Name":"Golden Falcon Acquisition Corp. Class A"
    },
    {
    "Symbol":"GGAAU",
    "Name":"Genesis Growth Tech Acquisition Corp. Unit"
    },
    {
    "Symbol":"GGAL",
    "Name":"Grupo Financiero Galicia S.A. American Depositary Shares"
    },
    {
    "Symbol":"GGB",
    "Name":"Gerdau S.A."
    },
    {
    "Symbol":"GGG",
    "Name":"Graco Inc."
    },
    {
    "Symbol":"GGGV",
    "Name":"G3 VRM Acquisition Corp. Class A"
    },
    {
    "Symbol":"GGGVR",
    "Name":"G3 VRM Acquisition Corp. Rights"
    },
    {
    "Symbol":"GGMC",
    "Name":"Glenfarne Merger Corp. Class A"
    },
    {
    "Symbol":"GGMCU",
    "Name":"Glenfarne Merger Corp. Unit"
    },
    {
    "Symbol":"GGMCW",
    "Name":"Glenfarne Merger Corp. Warrant"
    },
    {
    "Symbol":"GGN",
    "Name":"GAMCO Global Gold Natural Resources & Income Trust"
    },
    {
    "Symbol":"GGN^B",
    "Name":"GAMCO Global Gold Natural Reources & Income Trust 5.00% Series B Cumulative 25.00 Liquidation Preference"
    },
    {
    "Symbol":"GGPI",
    "Name":"Gores Guggenheim Inc. Class A"
    },
    {
    "Symbol":"GGPIU",
    "Name":"Gores Guggenheim Inc. Unit"
    },
    {
    "Symbol":"GGPIW",
    "Name":"Gores Guggenheim Inc. Warrant"
    },
    {
    "Symbol":"GGT",
    "Name":"Gabelli Multi-Media Trust Inc. (The)"
    },
    {
    "Symbol":"GGT^E",
    "Name":"Gabelli Multi-Media Trust Inc. (The) 5.125% Series E Cumulative Preferred Stock"
    },
    {
    "Symbol":"GGT^G",
    "Name":"Gabelli Multi-Media Trust Inc. (The) 5.125% Series G Cumulative Preferred Shares"
    },
    {
    "Symbol":"GGZ",
    "Name":"Gabelli Global Small and Mid Cap Value Trust (The) Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"GGZ^A",
    "Name":"Gabelli Global Small and Mid Cap Value Trust (The) 5.450% Series A Cumulative Preferred Shares (Liquidation Preference $25.00 per share)"
    },
    {
    "Symbol":"GH",
    "Name":"Guardant Health Inc."
    },
    {
    "Symbol":"GHAC",
    "Name":"Gaming & Hospitality Acquisition Corp. Class A"
    },
    {
    "Symbol":"GHACU",
    "Name":"Gaming & Hospitality Acquisition Corp. Unit"
    },
    {
    "Symbol":"GHACW",
    "Name":"Gaming & Hospitality Acquisition Corp. Warrants"
    },
    {
    "Symbol":"GHC",
    "Name":"Graham Holdings Company"
    },
    {
    "Symbol":"GHG",
    "Name":"GreenTree Hospitality Group Ltd. American depositary shares each representing one Class A ordinary share"
    },
    {
    "Symbol":"GHIXU",
    "Name":"Gores Holdings IX Inc. Unit"
    },
    {
    "Symbol":"GHL",
    "Name":"Greenhill & Co. Inc."
    },
    {
    "Symbol":"GHLD",
    "Name":"Guild Holdings Company Class A"
    },
    {
    "Symbol":"GHM",
    "Name":"Graham Corporation"
    },
    {
    "Symbol":"GHRS",
    "Name":"GH Research PLC Ordinary Shares"
    },
    {
    "Symbol":"GHSI",
    "Name":"Guardion Health Sciences Inc."
    },
    {
    "Symbol":"GHY",
    "Name":"PGIM Global High Yield Fund Inc."
    },
    {
    "Symbol":"GIA",
    "Name":"GigCapital 5 Inc."
    },
    {
    "Symbol":"GIAC",
    "Name":"Gesher I Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"GIACU",
    "Name":"Gesher I Acquisition Corp.Unit"
    },
    {
    "Symbol":"GIACW",
    "Name":"Gesher I Acquisition Corp. Warrants"
    },
    {
    "Symbol":"GIB",
    "Name":"CGI Inc."
    },
    {
    "Symbol":"GIC",
    "Name":"Global Industrial Company"
    },
    {
    "Symbol":"GIFI",
    "Name":"Gulf Island Fabrication Inc."
    },
    {
    "Symbol":"GIGM",
    "Name":"GigaMedia Limited Ordinary Shares"
    },
    {
    "Symbol":"GIII",
    "Name":"G-III Apparel Group LTD."
    },
    {
    "Symbol":"GIIX",
    "Name":"Gores Holdings VIII Inc. Class A"
    },
    {
    "Symbol":"GIIXU",
    "Name":"Gores Holdings VIII Inc. Unit"
    },
    {
    "Symbol":"GIIXW",
    "Name":"Gores Holdings VIII Inc. Warrant"
    },
    {
    "Symbol":"GIL",
    "Name":"Gildan Activewear Inc. Class A Sub. Vot."
    },
    {
    "Symbol":"GILD",
    "Name":"Gilead Sciences Inc."
    },
    {
    "Symbol":"GILT",
    "Name":"Gilat Satellite Networks Ltd. Ordinary Shares"
    },
    {
    "Symbol":"GIM",
    "Name":"Templeton Global Income Fund Inc."
    },
    {
    "Symbol":"GIPR",
    "Name":"Generation Income Properties Inc."
    },
    {
    "Symbol":"GIPRW",
    "Name":"Generation Income Properties Inc Warrant"
    },
    {
    "Symbol":"GIS",
    "Name":"General Mills Inc."
    },
    {
    "Symbol":"GIW",
    "Name":"GigInternational1 Inc."
    },
    {
    "Symbol":"GIWWW",
    "Name":"GigInternational1 Inc. Warrant"
    },
    {
    "Symbol":"GJH",
    "Name":"Synthetic Fixed-Income Securities Inc 6.375% (STRATS) Cl A-1"
    },
    {
    "Symbol":"GJO",
    "Name":"Synthetic Fixed-Income Securities Inc. Synthetic Fixed-Income Securities Inc. on behalf of STRATS(SM) Trust for Wal-Mart Stores Inc. Securities Series 2004-5"
    },
    {
    "Symbol":"GJP",
    "Name":"Synthetic Fixed-Income Securities Inc. Synthetic Fixed-Income Securities Inc. on behalf of STRATS (SM) Trust for Dominion Resources Inc. Securities Series 2005-6 Floating Rate Structured Repackaged Asset-Backed Trust Securities (STRATS) Certificates"
    },
    {
    "Symbol":"GJR",
    "Name":"Synthetic Fixed-Income Securities Inc. STRATS Trust for Procter&Gamble Securities Series 2006-1"
    },
    {
    "Symbol":"GJS",
    "Name":"Goldman Sachs Group Securities STRATS Trust for Goldman Sachs Group Securities Series 2006-2"
    },
    {
    "Symbol":"GJT",
    "Name":"Synthetic Fixed-Income Securities Inc. Synthetic Fixed-Income Securities Inc. Floating Rate Structured Repackaged Asset-Backed Trust Securities Certificates Series 2006-3"
    },
    {
    "Symbol":"GKOS",
    "Name":"Glaukos Corporation"
    },
    {
    "Symbol":"GL",
    "Name":"Globe Life Inc."
    },
    {
    "Symbol":"GL^D",
    "Name":"Globe Life Inc. 4.25% Junior Subordinated Debentures due 2061"
    },
    {
    "Symbol":"GLAD",
    "Name":"Gladstone Capital Corporation"
    },
    {
    "Symbol":"GLAQ",
    "Name":"Globis Acquisition Corp."
    },
    {
    "Symbol":"GLAQU",
    "Name":"Globis Acquisition Corp. Unit"
    },
    {
    "Symbol":"GLAQW",
    "Name":"Globis Acquisition Corp. Warrant"
    },
    {
    "Symbol":"GLBE",
    "Name":"Global-E Online Ltd. Ordinary Shares"
    },
    {
    "Symbol":"GLBL",
    "Name":"Cartesian Growth Corporation Class A Ordinary Share"
    },
    {
    "Symbol":"GLBLW",
    "Name":"Cartesian Growth Corporation Warrant"
    },
    {
    "Symbol":"GLBS",
    "Name":"Globus Maritime Limited"
    },
    {
    "Symbol":"GLBZ",
    "Name":"Glen Burnie Bancorp"
    },
    {
    "Symbol":"GLDD",
    "Name":"Great Lakes Dredge & Dock Corporation"
    },
    {
    "Symbol":"GLDG",
    "Name":"GoldMining Inc. Common Shares"
    },
    {
    "Symbol":"GLEE",
    "Name":"Gladstone Acquisition Corp. Class A"
    },
    {
    "Symbol":"GLEEW",
    "Name":"Gladstone Acquisition Corp. Warrant"
    },
    {
    "Symbol":"GLG",
    "Name":"TD Holdings Inc."
    },
    {
    "Symbol":"GLHA",
    "Name":"Glass Houses Acquisition Corp. Class A"
    },
    {
    "Symbol":"GLHAW",
    "Name":"Glass Houses Acquisition Corp. Warrant"
    },
    {
    "Symbol":"GLLI",
    "Name":"Globalink Investment Inc."
    },
    {
    "Symbol":"GLLIR",
    "Name":"Globalink Investment Inc. Rights"
    },
    {
    "Symbol":"GLLIU",
    "Name":"Globalink Investment Inc. Unit"
    },
    {
    "Symbol":"GLLIW",
    "Name":"Globalink Investment Inc. Warrants"
    },
    {
    "Symbol":"GLMD",
    "Name":"Galmed Pharmaceuticals Ltd. Ordinary Shares"
    },
    {
    "Symbol":"GLNG",
    "Name":"Golar Lng Ltd"
    },
    {
    "Symbol":"GLO",
    "Name":"Clough Global Opportunities Fund"
    },
    {
    "Symbol":"GLOB",
    "Name":"Globant S.A. Common Shares"
    },
    {
    "Symbol":"GLOG^A",
    "Name":"GasLog LP. 8.75% Series A Cumulative Redeemable Perpetual Preference Shares"
    },
    {
    "Symbol":"GLOP",
    "Name":"GasLog Partners LP Common Units representing limited partnership interests"
    },
    {
    "Symbol":"GLOP^A",
    "Name":"GasLog Partners LP 8.625% Series A Cumulative Redeemable Perpetual Fixed to Floating Rate Preference Units"
    },
    {
    "Symbol":"GLOP^B",
    "Name":"GasLog Partners LP 8.200% Series B Cumulative Redeemable Perpetual Fixed to Floating Rate Preference Units"
    },
    {
    "Symbol":"GLOP^C",
    "Name":"GasLog Partners LP 8.500% Series C Cumulative Redeemable Perpetual Fixed to Floating Rate Preference Units"
    },
    {
    "Symbol":"GLP",
    "Name":"Global Partners LP Global Partners LP Common Units representing Limited Partner Interests"
    },
    {
    "Symbol":"GLP^A",
    "Name":"Global Partners LP 9.75% Series A Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units representing limited partner interests"
    },
    {
    "Symbol":"GLP^B",
    "Name":"Global Partners LP 9.50% Series B Fixed Rate Cumulative Redeemable Perpetual Preferred Units representing limited partner interests"
    },
    {
    "Symbol":"GLPG",
    "Name":"Galapagos NV American Depositary Shares"
    },
    {
    "Symbol":"GLPI",
    "Name":"Gaming and Leisure Properties Inc."
    },
    {
    "Symbol":"GLQ",
    "Name":"Clough Global Equity Fund Clough Global Equity Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"GLRE",
    "Name":"Greenlight Capital Re Ltd. Class A Ordinary Shares"
    },
    {
    "Symbol":"GLS",
    "Name":"Gelesis Holdings Inc."
    },
    {
    "Symbol":"GLSI",
    "Name":"Greenwich LifeSciences Inc."
    },
    {
    "Symbol":"GLSPT",
    "Name":"Global SPAC Partners Co. Subunit"
    },
    {
    "Symbol":"GLSPW",
    "Name":"Global SPAC Partners Co. Warrants"
    },
    {
    "Symbol":"GLT",
    "Name":"Glatfelter Corporation"
    },
    {
    "Symbol":"GLTA",
    "Name":"Galata Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"GLTO",
    "Name":"Galecto Inc."
    },
    {
    "Symbol":"GLU",
    "Name":"Gabelli Global Utility Common Shares of Beneficial Ownership"
    },
    {
    "Symbol":"GLU^A",
    "Name":"The Gabelli Global Utility and Income Trust Series A Cumulative Puttable and Callable Preferred Shares"
    },
    {
    "Symbol":"GLU^B",
    "Name":"The Gabelli Global Utility and Income Trust Series B Cumulative Puttable and Callable Preferred Shares"
    },
    {
    "Symbol":"GLUE",
    "Name":"Monte Rosa Therapeutics Inc."
    },
    {
    "Symbol":"GLV",
    "Name":"Clough Global Dividend and Income Fund Common Shares of beneficial interest"
    },
    {
    "Symbol":"GLW",
    "Name":"Corning Incorporated"
    },
    {
    "Symbol":"GLYC",
    "Name":"GlycoMimetics Inc."
    },
    {
    "Symbol":"GM",
    "Name":"General Motors Company"
    },
    {
    "Symbol":"GMAB",
    "Name":"Genmab A/S ADS"
    },
    {
    "Symbol":"GMBL",
    "Name":"Esports Entertainment Group Inc."
    },
    {
    "Symbol":"GMBLP",
    "Name":"Esports Entertainment Group Inc. 10.0% Series A Cumulative Redeemable Convertible Preferred Stock"
    },
    {
    "Symbol":"GMBLW",
    "Name":"Esports Entertainment Group Inc. Warrant"
    },
    {
    "Symbol":"GMBT",
    "Name":"Queen's Gambit Growth Capital Class A Ordinary Share"
    },
    {
    "Symbol":"GMBTU",
    "Name":"Queen's Gambit Growth Capital Unit"
    },
    {
    "Symbol":"GMBTW",
    "Name":"Queen's Gambit Growth Capital Warrant"
    },
    {
    "Symbol":"GMDA",
    "Name":"Gamida Cell Ltd. Ordinary Shares"
    },
    {
    "Symbol":"GME",
    "Name":"GameStop Corporation"
    },
    {
    "Symbol":"GMED",
    "Name":"Globus Medical Inc. Class A"
    },
    {
    "Symbol":"GMFIU",
    "Name":"Aetherium Acquisition Corp. Unit"
    },
    {
    "Symbol":"GMRE",
    "Name":"Global Medical REIT Inc."
    },
    {
    "Symbol":"GMRE^A",
    "Name":"Global Medical REIT Inc. Series A Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"GMS",
    "Name":"GMS Inc."
    },
    {
    "Symbol":"GMTX",
    "Name":"Gemini Therapeutics Inc."
    },
    {
    "Symbol":"GMVD",
    "Name":"G Medical Innovations Holdings Ltd. Ordinary Shares"
    },
    {
    "Symbol":"GMVDW",
    "Name":"G Medical Innovations Holdings Ltd. Warrants"
    },
    {
    "Symbol":"GNAC",
    "Name":"Group Nine Acquisition Corp. Class A"
    },
    {
    "Symbol":"GNACU",
    "Name":"Group Nine Acquisition Corp. Unit"
    },
    {
    "Symbol":"GNACW",
    "Name":"Group Nine Acquisition Corp. Warrant"
    },
    {
    "Symbol":"GNCA",
    "Name":"Genocea Biosciences Inc."
    },
    {
    "Symbol":"GNE",
    "Name":"Genie Energy Ltd. Class B   Stock"
    },
    {
    "Symbol":"GNE^A",
    "Name":"Genie Energy Ltd. Series 2012 - A Preferred Stock $0.01 par value"
    },
    {
    "Symbol":"GNFT",
    "Name":"GENFIT S.A. American Depositary Shares"
    },
    {
    "Symbol":"GNK",
    "Name":"Genco Shipping & Trading Limited Ordinary Shares New (Marshall Islands)"
    },
    {
    "Symbol":"GNL",
    "Name":"Global Net Lease Inc."
    },
    {
    "Symbol":"GNL^A",
    "Name":"Global Net Lease Inc. 7.25% Series A Cumulative Redeemable Preferred Stock $0.01 par value per share"
    },
    {
    "Symbol":"GNL^B",
    "Name":"Global Net Lease Inc. 6.875% Series B Cumulative Redeemable Perpetual Preferred Stock"
    },
    {
    "Symbol":"GNLN",
    "Name":"Greenlane Holdings Inc. Class A"
    },
    {
    "Symbol":"GNOG",
    "Name":"Golden Nugget Online Gaming Inc. Class A"
    },
    {
    "Symbol":"GNPX",
    "Name":"Genprex Inc."
    },
    {
    "Symbol":"GNRC",
    "Name":"Generac Holdlings Inc."
    },
    {
    "Symbol":"GNSS",
    "Name":"Genasys Inc."
    },
    {
    "Symbol":"GNT",
    "Name":"GAMCO Natural Resources Gold & Income Trust"
    },
    {
    "Symbol":"GNT^A",
    "Name":"GAMCO Natural Resources Gold & Income Tust  5.20% Series A Cumulative Preferred Shares (Liquidation Preference $25.00 per share)"
    },
    {
    "Symbol":"GNTA",
    "Name":"Genenta Science S.p.A. American Depositary Shares"
    },
    {
    "Symbol":"GNTX",
    "Name":"Gentex Corporation"
    },
    {
    "Symbol":"GNTY",
    "Name":"Guaranty Bancshares Inc."
    },
    {
    "Symbol":"GNUS",
    "Name":"Genius Brands International Inc."
    },
    {
    "Symbol":"GNW",
    "Name":"Genworth Financial Inc"
    },
    {
    "Symbol":"GO",
    "Name":"Grocery Outlet Holding Corp."
    },
    {
    "Symbol":"GOAC",
    "Name":"GO Acquisition Corp. Class A"
    },
    {
    "Symbol":"GOBI",
    "Name":"Gobi Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"GOCO",
    "Name":"GoHealth Inc."
    },
    {
    "Symbol":"GOED",
    "Name":"1847 Goedeker Inc. Commom Stock"
    },
    {
    "Symbol":"GOEV",
    "Name":"Canoo Inc."
    },
    {
    "Symbol":"GOEVW",
    "Name":"Canoo Inc. Warrant"
    },
    {
    "Symbol":"GOF",
    "Name":"Guggenheim Strategic Opportunities Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"GOGL",
    "Name":"Golden Ocean Group Limited"
    },
    {
    "Symbol":"GOGN",
    "Name":"GoGreen Investments Corporation Class A Ordinary Shares"
    },
    {
    "Symbol":"GOGO",
    "Name":"Gogo Inc."
    },
    {
    "Symbol":"GOL",
    "Name":"Gol Linhas Aereas Inteligentes S.A. Sponsored ADR representing 2 Pfd Shares"
    },
    {
    "Symbol":"GOLD",
    "Name":"Barrick Gold Corporation   (BC)"
    },
    {
    "Symbol":"GOLF",
    "Name":"Acushnet Holdings Corp."
    },
    {
    "Symbol":"GOOD",
    "Name":"Gladstone Commercial Corporation Real Estate Investment Trust"
    },
    {
    "Symbol":"GOODN",
    "Name":"Gladstone Commercial Corporation 6.625% Series E Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"GOODO",
    "Name":"Gladstone Commercial Corporation 6.00% Series G Cumulative Redeemable Preferred Stock par value $0.001 per share"
    },
    {
    "Symbol":"GOOG",
    "Name":"Alphabet Inc."
    },
    {
    "Symbol":"GOOGL",
    "Name":"Alphabet Inc. Class A"
    },
    {
    "Symbol":"GOOS",
    "Name":"Canada Goose Holdings Inc. Subordinate Voting Shares"
    },
    {
    "Symbol":"GORO",
    "Name":"Gold Resource Corporation"
    },
    {
    "Symbol":"GOSS",
    "Name":"Gossamer Bio Inc."
    },
    {
    "Symbol":"GOTU",
    "Name":"Gaotu Techedu Inc. American Depositary Shares"
    },
    {
    "Symbol":"GOVX",
    "Name":"GeoVax Labs Inc."
    },
    {
    "Symbol":"GOVXW",
    "Name":"GeoVax Labs Inc. Warrants"
    },
    {
    "Symbol":"GP",
    "Name":"GreenPower Motor Company Inc. Common Shares"
    },
    {
    "Symbol":"GPAC",
    "Name":"Global Partner Acquisition Corp II Class A Ordinary Share"
    },
    {
    "Symbol":"GPACU",
    "Name":"Global Partner Acquisition Corp II Unit"
    },
    {
    "Symbol":"GPACW",
    "Name":"Global Partner Acquisition Corp II Warrant"
    },
    {
    "Symbol":"GPC",
    "Name":"Genuine Parts Company"
    },
    {
    "Symbol":"GPCO",
    "Name":"Golden Path Acquisition Corporation Ordinary Shares"
    },
    {
    "Symbol":"GPCOW",
    "Name":"Golden Path Acquisition Corporation Warrant"
    },
    {
    "Symbol":"GPI",
    "Name":"Group 1 Automotive Inc."
    },
    {
    "Symbol":"GPJA",
    "Name":"Georgia Power Company Series 2017A 5.00% Junior Subordinated Notes due October 1 2077"
    },
    {
    "Symbol":"GPK",
    "Name":"Graphic Packaging Holding Company"
    },
    {
    "Symbol":"GPL",
    "Name":"Great Panther Mining Limited Ordinary Shares (Canada)"
    },
    {
    "Symbol":"GPMT",
    "Name":"Granite Point Mortgage Trust Inc."
    },
    {
    "Symbol":"GPMT^A",
    "Name":"Granite Point Mortgage Trust Inc. 7.00% Series A Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"GPN",
    "Name":"Global Payments Inc."
    },
    {
    "Symbol":"GPOR",
    "Name":"Gulfport Energy Corporation Common Shares"
    },
    {
    "Symbol":"GPP",
    "Name":"Green Plains Partners LP Common Units"
    },
    {
    "Symbol":"GPRE",
    "Name":"Green Plains Inc."
    },
    {
    "Symbol":"GPRK",
    "Name":"Geopark Ltd Common Shares"
    },
    {
    "Symbol":"GPRO",
    "Name":"GoPro Inc. Class A"
    },
    {
    "Symbol":"GPS",
    "Name":"Gap Inc. (The)"
    },
    {
    "Symbol":"GRAB",
    "Name":"Grab Holdings Limited Class A Ordinary Shares"
    },
    {
    "Symbol":"GRABW",
    "Name":"Grab Holdings Limited Warrant"
    },
    {
    "Symbol":"GRAY",
    "Name":"Graybug Vision Inc."
    },
    {
    "Symbol":"GRBK",
    "Name":"Green Brick Partners Inc."
    },
    {
    "Symbol":"GRBK^A",
    "Name":"Green Brick Partners Inc. Depositary Shares (each representing a 1/1000th fractional interest in a share of 5.75% Series A Cumulative Perpetual Preferred Stock)"
    },
    {
    "Symbol":"GRC",
    "Name":"Gorman-Rupp Company (The)"
    },
    {
    "Symbol":"GRCL",
    "Name":"Gracell Biotechnologies Inc. American Depositary Shares"
    },
    {
    "Symbol":"GRCY",
    "Name":"Greencity Acquisition Corporation Ordinary Shares"
    },
    {
    "Symbol":"GREE",
    "Name":"Greenidge Generation Holdings Inc. Class A"
    },
    {
    "Symbol":"GREEL",
    "Name":"Greenidge Generation Holdings Inc. 8.50% Senior Notes due 2026"
    },
    {
    "Symbol":"GRF",
    "Name":"Eagle Capital Growth Fund Inc."
    },
    {
    "Symbol":"GRFS",
    "Name":"Grifols S.A. American Depositary Shares"
    },
    {
    "Symbol":"GRIL",
    "Name":"Muscle Maker Inc"
    },
    {
    "Symbol":"GRIN",
    "Name":"Grindrod Shipping Holdings Ltd. Ordinary Shares"
    },
    {
    "Symbol":"GRMN",
    "Name":"Garmin Ltd.   (Switzerland)"
    },
    {
    "Symbol":"GRNQ",
    "Name":"Greenpro Capital Corp."
    },
    {
    "Symbol":"GROM",
    "Name":"Grom Social Enterprises Inc."
    },
    {
    "Symbol":"GROMW",
    "Name":"Grom Social Enterprises Inc. Warrants"
    },
    {
    "Symbol":"GROW",
    "Name":"U.S. Global Investors Inc. Class A"
    },
    {
    "Symbol":"GROY",
    "Name":"Gold Royalty Corp. Common Shares"
    },
    {
    "Symbol":"GRPH",
    "Name":"Graphite Bio Inc."
    },
    {
    "Symbol":"GRPN",
    "Name":"Groupon Inc."
    },
    {
    "Symbol":"GRTS",
    "Name":"Gritstone bio Inc."
    },
    {
    "Symbol":"GRTX",
    "Name":"Galera Therapeutics Inc."
    },
    {
    "Symbol":"GRUB",
    "Name":"Just Eat Takeaway.com N.V. American Depositary Shares"
    },
    {
    "Symbol":"GRVI",
    "Name":"Grove Inc."
    },
    {
    "Symbol":"GRVY",
    "Name":"GRAVITY Co. Ltd. American Depository Shares"
    },
    {
    "Symbol":"GRWG",
    "Name":"GrowGeneration Corp."
    },
    {
    "Symbol":"GRX",
    "Name":"The Gabelli Healthcare & Wellness Trust Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"GS",
    "Name":"Goldman Sachs Group Inc. (The)"
    },
    {
    "Symbol":"GS^A",
    "Name":"Goldman Sachs Group Inc. (The) Depositary Shares each representing 1/1000th Interest in a Share of Floating Rate Non-Cumulative Preferred Stock Series A"
    },
    {
    "Symbol":"GS^C",
    "Name":"Goldman Sachs Group Inc. (The) Depositary Share repstg 1/1000th Preferred Series C"
    },
    {
    "Symbol":"GS^D",
    "Name":"Goldman Sachs Group Inc. (The) Dep Shs repstg 1/1000 Pfd Ser D Fltg"
    },
    {
    "Symbol":"GS^J",
    "Name":"Goldman Sachs Group Inc Depositary Shs Repstg 1/1000th Pfd Ser J Fixed to Fltg Rate"
    },
    {
    "Symbol":"GS^K",
    "Name":"Goldman Sachs Group Inc. (The) Dep Shs Repstg 1/1000 Int Sh Fxd/Fltg Non Cum Pfd Stk Ser K"
    },
    {
    "Symbol":"GSAQ",
    "Name":"Global Synergy Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"GSAQU",
    "Name":"Global Synergy Acquisition Corp. Units"
    },
    {
    "Symbol":"GSAQW",
    "Name":"Global Synergy Acquisition Corp. Warrant"
    },
    {
    "Symbol":"GSAT",
    "Name":"Globalstar Inc."
    },
    {
    "Symbol":"GSBC",
    "Name":"Great Southern Bancorp Inc."
    },
    {
    "Symbol":"GSBD",
    "Name":"Goldman Sachs BDC Inc."
    },
    {
    "Symbol":"GSEV",
    "Name":"Gores Holdings VII Inc. Class A"
    },
    {
    "Symbol":"GSEVU",
    "Name":"Gores Holdings VII Inc. Units"
    },
    {
    "Symbol":"GSEVW",
    "Name":"Gores Holdings VII Inc. Warrant"
    },
    {
    "Symbol":"GSHD",
    "Name":"Goosehead Insurance Inc. Class A"
    },
    {
    "Symbol":"GSIT",
    "Name":"GSI Technology"
    },
    {
    "Symbol":"GSK",
    "Name":"GlaxoSmithKline PLC"
    },
    {
    "Symbol":"GSKY",
    "Name":"GreenSky Inc. Class A"
    },
    {
    "Symbol":"GSL",
    "Name":"Global Ship Lease Inc New Class A Common Shares"
    },
    {
    "Symbol":"GSL^B",
    "Name":"Global Ship Lease Inc. Depository Shares Representing 1/100th Perpetual Preferred Series B% (Marshall Island)"
    },
    {
    "Symbol":"GSLD",
    "Name":"Global Ship Lease Inc. 8.00% Senior Notes due 2024"
    },
    {
    "Symbol":"GSM",
    "Name":"Ferroglobe PLC Ordinary Shares"
    },
    {
    "Symbol":"GSMG",
    "Name":"Glory Star New Media Group Holdings Limited Ordinary Share"
    },
    {
    "Symbol":"GSMGW",
    "Name":"Glory Star New Media Group Holdings Limited Warrant expiring 2/13/2025"
    },
    {
    "Symbol":"GSQB",
    "Name":"G Squared Ascend II Inc. Class A Ordinary Shares"
    },
    {
    "Symbol":"GSQD",
    "Name":"G Squared Ascend I Inc. Class A Ordinary Shares"
    },
    {
    "Symbol":"GSS",
    "Name":"Golden Star Resources Ltd"
    },
    {
    "Symbol":"GSV",
    "Name":"Gold Standard Ventures Corporation   (Canada)"
    },
    {
    "Symbol":"GT",
    "Name":"The Goodyear Tire & Rubber Company"
    },
    {
    "Symbol":"GTAC",
    "Name":"Global Technology Acquisition Corp. I Class A Ordinary Shares"
    },
    {
    "Symbol":"GTACU",
    "Name":"Global Technology Acquisition Corp. I Unit"
    },
    {
    "Symbol":"GTBP",
    "Name":"GT Biopharma Inc."
    },
    {
    "Symbol":"GTE",
    "Name":"Gran Tierra Energy Inc."
    },
    {
    "Symbol":"GTEC",
    "Name":"Greenland Technologies Holding Corporation Ordinary Shares"
    },
    {
    "Symbol":"GTES",
    "Name":"Gates Industrial Corporation plc Ordinary Shares"
    },
    {
    "Symbol":"GTH",
    "Name":"Genetron Holdings Limited ADS"
    },
    {
    "Symbol":"GTHX",
    "Name":"G1 Therapeutics Inc."
    },
    {
    "Symbol":"GTIM",
    "Name":"Good Times Restaurants Inc."
    },
    {
    "Symbol":"GTLB",
    "Name":"GitLab Inc. Class A"
    },
    {
    "Symbol":"GTLS",
    "Name":"Chart Industries Inc."
    },
    {
    "Symbol":"GTN",
    "Name":"Gray Television Inc."
    },
    {
    "Symbol":"GTPA",
    "Name":"Gores Technology Partners Inc. Class A"
    },
    {
    "Symbol":"GTPAW",
    "Name":"Gores Technology Partners Inc. Warrant"
    },
    {
    "Symbol":"GTPB",
    "Name":"Gores Technology Partners II Inc. Class A"
    },
    {
    "Symbol":"GTPBU",
    "Name":"Gores Technology Partners II Inc. Units"
    },
    {
    "Symbol":"GTS",
    "Name":"Triple-S Management Corporation"
    },
    {
    "Symbol":"GTX",
    "Name":"Garrett Motion Inc."
    },
    {
    "Symbol":"GTXAP",
    "Name":"Garrett Motion Inc. Series A Cumulative Convertible Preferred Stock"
    },
    {
    "Symbol":"GTY",
    "Name":"Getty Realty Corporation"
    },
    {
    "Symbol":"GTYH",
    "Name":"GTY Technology Holdings Inc."
    },
    {
    "Symbol":"GUG",
    "Name":"Guggenheim Active Allocation Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"GURE",
    "Name":"Gulf Resources Inc. (NV)"
    },
    {
    "Symbol":"GUT",
    "Name":"Gabelli Utility Trust (The)"
    },
    {
    "Symbol":"GUT^A",
    "Name":"Gabelli Utility Trust (The) 5.625% Series A Cumulative Preferred Shares"
    },
    {
    "Symbol":"GUT^C",
    "Name":"Gabelli Utility Trust (The) 5.375% Series C Cumulative Preferred Shares"
    },
    {
    "Symbol":"GVA",
    "Name":"Granite Construction Incorporated"
    },
    {
    "Symbol":"GVCI",
    "Name":"Green Visor Financial Technology Acquisition Corp. I Class A Ordinary Shares"
    },
    {
    "Symbol":"GVCIW",
    "Name":"Green Visor Financial Technology Acquisition Corp. I Warrants"
    },
    {
    "Symbol":"GVP",
    "Name":"GSE Systems Inc."
    },
    {
    "Symbol":"GWB",
    "Name":"Great Western Bancorp Inc."
    },
    {
    "Symbol":"GWGH",
    "Name":"GWG Holdings Inc"
    },
    {
    "Symbol":"GWH",
    "Name":"ESS Tech Inc."
    },
    {
    "Symbol":"GWII",
    "Name":"Good Works II Acquisition Corp."
    },
    {
    "Symbol":"GWIIW",
    "Name":"Good Works II Acquisition Corp. Warrant"
    },
    {
    "Symbol":"GWRE",
    "Name":"Guidewire Software Inc."
    },
    {
    "Symbol":"GWRS",
    "Name":"Global Water Resources Inc."
    },
    {
    "Symbol":"GWW",
    "Name":"W.W. Grainger Inc."
    },
    {
    "Symbol":"GXII",
    "Name":"GX Acquisition Corp. II Class A"
    },
    {
    "Symbol":"GXIIU",
    "Name":"GX Acquisition Corp. II Unit"
    },
    {
    "Symbol":"GXIIW",
    "Name":"GX Acquisition Corp. II Warrant"
    },
    {
    "Symbol":"GXO",
    "Name":"GXO Logistics Inc."
    },
    {
    "Symbol":"GYRO",
    "Name":"Gyrodyne LLC"
    },
    {
    "Symbol":"H",
    "Name":"Hyatt Hotels Corporation Class A"
    },
    {
    "Symbol":"HA",
    "Name":"Hawaiian Holdings Inc."
    },
    {
    "Symbol":"HAAC",
    "Name":"Health Assurance Acquisition Corp. Class A"
    },
    {
    "Symbol":"HAACU",
    "Name":"Health Assurance Acquisition Corp. SAIL Securities"
    },
    {
    "Symbol":"HAACW",
    "Name":"Health Assurance Acquisition Corp. Warrants"
    },
    {
    "Symbol":"HAE",
    "Name":"Haemonetics Corporation"
    },
    {
    "Symbol":"HAFC",
    "Name":"Hanmi Financial Corporation"
    },
    {
    "Symbol":"HAIAU",
    "Name":"Healthcare AI Acquisition Corp. Unit"
    },
    {
    "Symbol":"HAIN",
    "Name":"Hain Celestial Group Inc. (The)"
    },
    {
    "Symbol":"HAL",
    "Name":"Halliburton Company"
    },
    {
    "Symbol":"HALL",
    "Name":"Hallmark Financial Services Inc."
    },
    {
    "Symbol":"HALO",
    "Name":"Halozyme Therapeutics Inc."
    },
    {
    "Symbol":"HAPP",
    "Name":"Happiness Development Group Limited Class A Ordinary Shares"
    },
    {
    "Symbol":"HARP",
    "Name":"Harpoon Therapeutics Inc."
    },
    {
    "Symbol":"HAS",
    "Name":"Hasbro Inc."
    },
    {
    "Symbol":"HASI",
    "Name":"Hannon Armstrong Sustainable Infrastructure Capital Inc."
    },
    {
    "Symbol":"HAYN",
    "Name":"Haynes International Inc."
    },
    {
    "Symbol":"HAYW",
    "Name":"Hayward Holdings Inc."
    },
    {
    "Symbol":"HBAN",
    "Name":"Huntington Bancshares Incorporated"
    },
    {
    "Symbol":"HBANM",
    "Name":"Huntington Bancshares Incorporated Depositary Shares each representing a 1/1000th interest in a share of Huntington Series I Preferred Stock"
    },
    {
    "Symbol":"HBANP",
    "Name":"Huntington Bancshares Incorporated Depositary Shares 4.500% Series H Non-Cumulative Perpetual Preferred Stock"
    },
    {
    "Symbol":"HBB",
    "Name":"Hamilton Beach Brands Holding Company Class A"
    },
    {
    "Symbol":"HBCP",
    "Name":"Home Bancorp Inc."
    },
    {
    "Symbol":"HBI",
    "Name":"Hanesbrands Inc."
    },
    {
    "Symbol":"HBIO",
    "Name":"Harvard Bioscience Inc."
    },
    {
    "Symbol":"HBM",
    "Name":"Hudbay Minerals Inc. Ordinary Shares (Canada)"
    },
    {
    "Symbol":"HBNC",
    "Name":"Horizon Bancorp Inc."
    },
    {
    "Symbol":"HBP",
    "Name":"Huttig Building Products Inc."
    },
    {
    "Symbol":"HBT",
    "Name":"HBT Financial Inc."
    },
    {
    "Symbol":"HCA",
    "Name":"HCA Healthcare Inc."
    },
    {
    "Symbol":"HCAR",
    "Name":"Healthcare Services Acquisition Corporation Class A"
    },
    {
    "Symbol":"HCARU",
    "Name":"Healthcare Services Acquisition Corporation Unit"
    },
    {
    "Symbol":"HCARW",
    "Name":"Healthcare Services Acquisition Corporation Warrant"
    },
    {
    "Symbol":"HCAT",
    "Name":"Health Catalyst Inc"
    },
    {
    "Symbol":"HCC",
    "Name":"Warrior Met Coal Inc."
    },
    {
    "Symbol":"HCCC",
    "Name":"Healthcare Capital Corp. Class A"
    },
    {
    "Symbol":"HCCCU",
    "Name":"Healthcare Capital Corp. Unit"
    },
    {
    "Symbol":"HCCCW",
    "Name":"Healthcare Capital Corp. Warrant"
    },
    {
    "Symbol":"HCCI",
    "Name":"Heritage-Crystal Clean Inc."
    },
    {
    "Symbol":"HCDI",
    "Name":"Harbor Custom Development Inc."
    },
    {
    "Symbol":"HCDIP",
    "Name":"Harbor Custom Development Inc. 8.0% Series A Cumulative Convertible Preferred Stock no par value"
    },
    {
    "Symbol":"HCDIW",
    "Name":"Harbor Custom Development Inc. Warrant"
    },
    {
    "Symbol":"HCDIZ",
    "Name":"Harbor Custom Development Inc. Warrant"
    },
    {
    "Symbol":"HCI",
    "Name":"HCI Group Inc."
    },
    {
    "Symbol":"HCIC",
    "Name":"Hennessy Capital Investment Corp. V Class A"
    },
    {
    "Symbol":"HCICU",
    "Name":"Hennessy Capital Investment Corp. V Units"
    },
    {
    "Symbol":"HCICW",
    "Name":"Hennessy Capital Investment Corp. V Warrant"
    },
    {
    "Symbol":"HCII",
    "Name":"Hudson Executive Investment Corp. II Class A"
    },
    {
    "Symbol":"HCIIU",
    "Name":"Hudson Executive Investment Corp. II Unit"
    },
    {
    "Symbol":"HCIIW",
    "Name":"Hudson Executive Investment Corp. II Warrant"
    },
    {
    "Symbol":"HCKT",
    "Name":"Hackett Group Inc (The)."
    },
    {
    "Symbol":"HCM",
    "Name":"HUTCHMED (China) Limited American Depositary Shares"
    },
    {
    "Symbol":"HCMAU",
    "Name":"HCM Acquisition Corp Unit"
    },
    {
    "Symbol":"HCNE",
    "Name":"Jaws Hurricane Acquisition Corp. Class A"
    },
    {
    "Symbol":"HCNEW",
    "Name":"Jaws Hurricane Acquisition Corp. Warrant"
    },
    {
    "Symbol":"HCP",
    "Name":"HashiCorp Inc. Class A"
    },
    {
    "Symbol":"HCSG",
    "Name":"Healthcare Services Group Inc."
    },
    {
    "Symbol":"HCTI",
    "Name":"Healthcare Triangle Inc."
    },
    {
    "Symbol":"HCVI",
    "Name":"Hennessy Capital Investment Corp. VI Class A"
    },
    {
    "Symbol":"HCVIW",
    "Name":"Hennessy Capital Investment Corp. VI Warrant"
    },
    {
    "Symbol":"HCWB",
    "Name":"HCW Biologics Inc."
    },
    {
    "Symbol":"HCXY",
    "Name":"Hercules Capital Inc. 6.25% Notes due 2033"
    },
    {
    "Symbol":"HD",
    "Name":"Home Depot Inc. (The)"
    },
    {
    "Symbol":"HDB",
    "Name":"HDFC Bank Limited"
    },
    {
    "Symbol":"HDSN",
    "Name":"Hudson Technologies Inc."
    },
    {
    "Symbol":"HE",
    "Name":"Hawaiian Electric Industries Inc."
    },
    {
    "Symbol":"HEAR",
    "Name":"Turtle Beach Corporation"
    },
    {
    "Symbol":"HEES",
    "Name":"H&E Equipment Services Inc."
    },
    {
    "Symbol":"HEI",
    "Name":"Heico Corporation"
    },
    {
    "Symbol":"HEI/A",
    "Name":"Heico Corporation"
    },
    {
    "Symbol":"HELE",
    "Name":"Helen of Troy Limited"
    },
    {
    "Symbol":"HEP",
    "Name":"Holly Energy Partners L.P."
    },
    {
    "Symbol":"HEPA",
    "Name":"Hepion Pharmaceuticals Inc."
    },
    {
    "Symbol":"HEPS",
    "Name":"D-Market Electronic Services & Trading American Depositary Shares"
    },
    {
    "Symbol":"HEQ",
    "Name":"John Hancock Hedged Equity & Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"HERA",
    "Name":"FTAC Hera Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"HERAU",
    "Name":"FTAC Hera Acquisition Corp. Units"
    },
    {
    "Symbol":"HERAW",
    "Name":"FTAC Hera Acquisition Corp. Warrant"
    },
    {
    "Symbol":"HES",
    "Name":"Hess Corporation"
    },
    {
    "Symbol":"HESM",
    "Name":"Hess Midstream LP Class A Share"
    },
    {
    "Symbol":"HEXO",
    "Name":"HEXO Corp. Common Shares"
    },
    {
    "Symbol":"HFBL",
    "Name":"Home Federal Bancorp Inc. of Louisiana"
    },
    {
    "Symbol":"HFC",
    "Name":"HollyFrontier Corporation"
    },
    {
    "Symbol":"HFFG",
    "Name":"HF Foods Group Inc."
    },
    {
    "Symbol":"HFRO",
    "Name":"Highland Income Fund"
    },
    {
    "Symbol":"HFRO^A",
    "Name":"Highland Income Fund 5.375% Series A Cumulative Preferred Shares"
    },
    {
    "Symbol":"HFWA",
    "Name":"Heritage Financial Corporation"
    },
    {
    "Symbol":"HGBL",
    "Name":"Heritage Global Inc."
    },
    {
    "Symbol":"HGEN",
    "Name":"Humanigen Inc."
    },
    {
    "Symbol":"HGH",
    "Name":"Hartford Financial Services Group Inc. (The) 7.875% Fixed to Floating Rate Junior Subordinated Debentures due 2042"
    },
    {
    "Symbol":"HGLB",
    "Name":"Highland Global Allocation Fund"
    },
    {
    "Symbol":"HGSH",
    "Name":"China HGS Real Estate Inc."
    },
    {
    "Symbol":"HGTY",
    "Name":"Hagerty Inc. Class A"
    },
    {
    "Symbol":"HGV",
    "Name":"Hilton Grand Vacations Inc."
    },
    {
    "Symbol":"HHC",
    "Name":"Howard Hughes Corporation (The)"
    },
    {
    "Symbol":"HHGC",
    "Name":"HHG Capital Corporation Ordinary Shares"
    },
    {
    "Symbol":"HHGCR",
    "Name":"HHG Capital Corporation Rights"
    },
    {
    "Symbol":"HHGCW",
    "Name":"HHG Capital Corporation Warrant"
    },
    {
    "Symbol":"HHLA",
    "Name":"HH&L Acquisition Co. Class A Ordinary Shares"
    },
    {
    "Symbol":"HHR",
    "Name":"HeadHunter Group PLC American Depositary Shares"
    },
    {
    "Symbol":"HHS",
    "Name":"Harte-Hanks Inc."
    },
    {
    "Symbol":"HI",
    "Name":"Hillenbrand Inc"
    },
    {
    "Symbol":"HIBB",
    "Name":"Hibbett Inc."
    },
    {
    "Symbol":"HIE",
    "Name":"Miller/Howard High Income Equity Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"HIFS",
    "Name":"Hingham Institution for Savings"
    },
    {
    "Symbol":"HIG",
    "Name":"Hartford Financial Services Group Inc. (The)"
    },
    {
    "Symbol":"HIG^G",
    "Name":"Hartford Financial Services Group Inc. (The) Depositary Shares each representing a 1/1000th interest in a share of 6.000% Non-Cumulative Preferred Stock Series G $0.01 par value"
    },
    {
    "Symbol":"HIGA",
    "Name":"H.I.G. Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"HIHO",
    "Name":"Highway Holdings Limited"
    },
    {
    "Symbol":"HII",
    "Name":"Huntington Ingalls Industries Inc."
    },
    {
    "Symbol":"HIII",
    "Name":"Hudson Executive Investment Corp. III Class A"
    },
    {
    "Symbol":"HIIIU",
    "Name":"Hudson Executive Investment Corp. III Unit"
    },
    {
    "Symbol":"HIIIW",
    "Name":"Hudson Executive Investment Corp. III Warrant"
    },
    {
    "Symbol":"HIL",
    "Name":"Hill International Inc."
    },
    {
    "Symbol":"HILS",
    "Name":"Hillstream BioPharma Inc."
    },
    {
    "Symbol":"HIMS",
    "Name":"Hims & Hers Health Inc. Class A"
    },
    {
    "Symbol":"HIMX",
    "Name":"Himax Technologies Inc. American Depositary Shares"
    },
    {
    "Symbol":"HIO",
    "Name":"Western Asset High Income Opportunity Fund Inc."
    },
    {
    "Symbol":"HIPO",
    "Name":"Hippo Holdings Inc."
    },
    {
    "Symbol":"HITI",
    "Name":"High Tide Inc. Common Shares"
    },
    {
    "Symbol":"HIVE",
    "Name":"Hive Blockchain Technologies Ltd. Common Shares"
    },
    {
    "Symbol":"HIW",
    "Name":"Highwoods Properties Inc."
    },
    {
    "Symbol":"HIX",
    "Name":"Western Asset High Income Fund II Inc."
    },
    {
    "Symbol":"HKIB",
    "Name":"AMTD International Inc. American Depositary Shares each representing one Class A Ordinary Share"
    },
    {
    "Symbol":"HL",
    "Name":"Hecla Mining Company"
    },
    {
    "Symbol":"HL^B",
    "Name":"Hecla Mining Company Preferred Stock"
    },
    {
    "Symbol":"HLAH",
    "Name":"Hamilton Lane Alliance Holdings I Inc. Class A"
    },
    {
    "Symbol":"HLAHU",
    "Name":"Hamilton Lane Alliance Holdings I Inc. Unit"
    },
    {
    "Symbol":"HLAHW",
    "Name":"Hamilton Lane Alliance Holdings I Inc. Warrant"
    },
    {
    "Symbol":"HLBZ",
    "Name":"Helbiz Inc. Class A"
    },
    {
    "Symbol":"HLBZW",
    "Name":"Helbiz Inc. Warrant"
    },
    {
    "Symbol":"HLF",
    "Name":"Herbalife Nutrition Ltd."
    },
    {
    "Symbol":"HLG",
    "Name":"Hailiang Education Group Inc. American Depositary Shares"
    },
    {
    "Symbol":"HLGN",
    "Name":"Heliogen Inc."
    },
    {
    "Symbol":"HLI",
    "Name":"Houlihan Lokey Inc. Class A"
    },
    {
    "Symbol":"HLIO",
    "Name":"Helios Technologies Inc."
    },
    {
    "Symbol":"HLIT",
    "Name":"Harmonic Inc."
    },
    {
    "Symbol":"HLLY",
    "Name":"Holley Inc."
    },
    {
    "Symbol":"HLMN",
    "Name":"Hillman Solutions Corp."
    },
    {
    "Symbol":"HLNE",
    "Name":"Hamilton Lane Incorporated Class A"
    },
    {
    "Symbol":"HLT",
    "Name":"Hilton Worldwide Holdings Inc."
    },
    {
    "Symbol":"HLTH",
    "Name":"Cue Health Inc."
    },
    {
    "Symbol":"HLX",
    "Name":"Helix Energy Solutions Group Inc."
    },
    {
    "Symbol":"HLXA",
    "Name":"Helix Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"HMC",
    "Name":"Honda Motor Company Ltd."
    },
    {
    "Symbol":"HMCO",
    "Name":"HumanCo Acquisition Corp. Class A"
    },
    {
    "Symbol":"HMCOU",
    "Name":"HumanCo Acquisition Corp. Unit"
    },
    {
    "Symbol":"HMCOW",
    "Name":"HumanCo Acquisition Corp. Warrant"
    },
    {
    "Symbol":"HMHC",
    "Name":"Houghton Mifflin Harcourt Company"
    },
    {
    "Symbol":"HMLP",
    "Name":"Hoegh LNG Partners LP Common Units representing Limited Partner Interests"
    },
    {
    "Symbol":"HMLP^A",
    "Name":"Hoegh LNG Partners LP 8.75% Series A Cumulative Redeemable Preferred Units"
    },
    {
    "Symbol":"HMN",
    "Name":"Horace Mann Educators Corporation"
    },
    {
    "Symbol":"HMNF",
    "Name":"HMN Financial Inc."
    },
    {
    "Symbol":"HMPT",
    "Name":"Home Point Capital Inc"
    },
    {
    "Symbol":"HMST",
    "Name":"HomeStreet Inc."
    },
    {
    "Symbol":"HMTV",
    "Name":"Hemisphere Media Group Inc. Class A"
    },
    {
    "Symbol":"HMY",
    "Name":"Harmony Gold Mining Company Limited"
    },
    {
    "Symbol":"HNGR",
    "Name":"Hanger Inc."
    },
    {
    "Symbol":"HNI",
    "Name":"HNI Corporation"
    },
    {
    "Symbol":"HNNA",
    "Name":"Hennessy Advisors Inc."
    },
    {
    "Symbol":"HNNAZ",
    "Name":"Hennessy Advisors Inc. 4.875% Notes due 2026"
    },
    {
    "Symbol":"HNP",
    "Name":"Huaneng Power Intl"
    },
    {
    "Symbol":"HNRG",
    "Name":"Hallador Energy Company"
    },
    {
    "Symbol":"HNST",
    "Name":"The Honest Company Inc."
    },
    {
    "Symbol":"HNW",
    "Name":"Pioneer Diversified High Income Fund Inc."
    },
    {
    "Symbol":"HOFT",
    "Name":"Hooker Furnishings Corporation"
    },
    {
    "Symbol":"HOFV",
    "Name":"Hall of Fame Resort & Entertainment Company"
    },
    {
    "Symbol":"HOFVW",
    "Name":"Hall of Fame Resort &amp; Entertainment Company Warrant"
    },
    {
    "Symbol":"HOG",
    "Name":"Harley-Davidson Inc."
    },
    {
    "Symbol":"HOLI",
    "Name":"Hollysys Automation Technologies Ltd. Common Shares (British Virgin Islands)"
    },
    {
    "Symbol":"HOLX",
    "Name":"Hologic Inc."
    },
    {
    "Symbol":"HOMB",
    "Name":"Home BancShares Inc."
    },
    {
    "Symbol":"HON",
    "Name":"Honeywell International Inc."
    },
    {
    "Symbol":"HONE",
    "Name":"HarborOne Bancorp Inc."
    },
    {
    "Symbol":"HOOD",
    "Name":"Robinhood Markets Inc. Class A"
    },
    {
    "Symbol":"HOOK",
    "Name":"HOOKIPA Pharma Inc."
    },
    {
    "Symbol":"HOPE",
    "Name":"Hope Bancorp Inc."
    },
    {
    "Symbol":"HORIU",
    "Name":"Emerging Markets Horizon Corp. Unit"
    },
    {
    "Symbol":"HOTH",
    "Name":"Hoth Therapeutics Inc."
    },
    {
    "Symbol":"HOUR",
    "Name":"Hour Loop Inc."
    },
    {
    "Symbol":"HOV",
    "Name":"Hovnanian Enterprises Inc. Class A"
    },
    {
    "Symbol":"HOVNP",
    "Name":"Hovnanian Enterprises Inc Dep Shr Srs A Pfd"
    },
    {
    "Symbol":"HOWL",
    "Name":"Werewolf Therapeutics Inc."
    },
    {
    "Symbol":"HP",
    "Name":"Helmerich & Payne Inc."
    },
    {
    "Symbol":"HPE",
    "Name":"Hewlett Packard Enterprise Company"
    },
    {
    "Symbol":"HPF",
    "Name":"John Hancock Pfd Income Fund II Pfd Income Fund II"
    },
    {
    "Symbol":"HPI",
    "Name":"John Hancock Preferred Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"HPK",
    "Name":"HighPeak Energy Inc."
    },
    {
    "Symbol":"HPKEW",
    "Name":"HighPeak Energy Inc. Warrant"
    },
    {
    "Symbol":"HPLT",
    "Name":"Home Plate Acquisition Corporation Class A"
    },
    {
    "Symbol":"HPLTU",
    "Name":"Home Plate Acquisition Corporation Unit"
    },
    {
    "Symbol":"HPLTW",
    "Name":"Home Plate Acquisition Corporation Warrant"
    },
    {
    "Symbol":"HPP",
    "Name":"Hudson Pacific Properties Inc."
    },
    {
    "Symbol":"HPP^C",
    "Name":"Hudson Pacific Properties Inc. 4.750% Series C Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"HPQ",
    "Name":"HP Inc."
    },
    {
    "Symbol":"HPS",
    "Name":"John Hancock Preferred Income Fund III Preferred Income Fund III"
    },
    {
    "Symbol":"HPX",
    "Name":"HPX Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"HQH",
    "Name":"Tekla Healthcare Investors"
    },
    {
    "Symbol":"HQI",
    "Name":"HireQuest Inc.   (DE)"
    },
    {
    "Symbol":"HQL",
    "Name":"TeklaLife Sciences Investors"
    },
    {
    "Symbol":"HQY",
    "Name":"HealthEquity Inc."
    },
    {
    "Symbol":"HR",
    "Name":"Healthcare Realty Trust Incorporated"
    },
    {
    "Symbol":"HRB",
    "Name":"H&R Block Inc."
    },
    {
    "Symbol":"HRI",
    "Name":"Herc Holdings Inc."
    },
    {
    "Symbol":"HRL",
    "Name":"Hormel Foods Corporation"
    },
    {
    "Symbol":"HRMY",
    "Name":"Harmony Biosciences Holdings Inc."
    },
    {
    "Symbol":"HROW",
    "Name":"Harrow Health Inc."
    },
    {
    "Symbol":"HROWL",
    "Name":"Harrow Health Inc. 8.625% Senior Notes due 2026"
    },
    {
    "Symbol":"HRT",
    "Name":"HireRight Holdings Corporation"
    },
    {
    "Symbol":"HRTG",
    "Name":"Heritage Insurance Holdings Inc."
    },
    {
    "Symbol":"HRTX",
    "Name":"Heron Therapeutics Inc."
    },
    {
    "Symbol":"HRZN",
    "Name":"Horizon Technology Finance Corporation"
    },
    {
    "Symbol":"HSAQ",
    "Name":"Health Sciences Acquisitions Corporation 2 Ordinary Shares"
    },
    {
    "Symbol":"HSBC",
    "Name":"HSBC Holdings plc."
    },
    {
    "Symbol":"HSC",
    "Name":"Harsco Corporation"
    },
    {
    "Symbol":"HSDT",
    "Name":"Helius Medical Technologies Inc. Class A   (DE)"
    },
    {
    "Symbol":"HSIC",
    "Name":"Henry Schein Inc."
    },
    {
    "Symbol":"HSII",
    "Name":"Heidrick & Struggles International Inc."
    },
    {
    "Symbol":"HSKA",
    "Name":"Heska Corporation"
    },
    {
    "Symbol":"HSON",
    "Name":"Hudson Global Inc."
    },
    {
    "Symbol":"HST",
    "Name":"Host Hotels & Resorts Inc."
    },
    {
    "Symbol":"HSTM",
    "Name":"HealthStream Inc."
    },
    {
    "Symbol":"HSTO",
    "Name":"Histogen Inc."
    },
    {
    "Symbol":"HSY",
    "Name":"The Hershey Company"
    },
    {
    "Symbol":"HT",
    "Name":"Hersha Hospitality Trust Class A Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"HT^C",
    "Name":"Hersha Hospitality Trust 6.875% Series C Cumulative Redeemable Preferred Shares of Beneficial Interest"
    },
    {
    "Symbol":"HT^D",
    "Name":"Hersha Hospitality Trust 6.50% Series D Cumulative Redeemable Preferred Shares of Beneficial Interest $0.01 par value per share"
    },
    {
    "Symbol":"HT^E",
    "Name":"Hersha Hospitality Trust 6.50% Series E Cumulative Redeemable Preferred Shares of Beneficial Interest"
    },
    {
    "Symbol":"HTA",
    "Name":"Healthcare Trust of America Inc. Class A"
    },
    {
    "Symbol":"HTAQ",
    "Name":"Hunt Companies Acquisition Corp. I Class A Ordinary Shares"
    },
    {
    "Symbol":"HTBI",
    "Name":"HomeTrust Bancshares Inc."
    },
    {
    "Symbol":"HTBK",
    "Name":"Heritage Commerce Corp"
    },
    {
    "Symbol":"HTBX",
    "Name":"Heat Biologics Inc."
    },
    {
    "Symbol":"HTD",
    "Name":"John Hancock Tax Advantaged Dividend Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"HTFB",
    "Name":"Horizon Technology Finance Corporation 4.875% Notes due 2026"
    },
    {
    "Symbol":"HTGC",
    "Name":"Hercules Capital Inc."
    },
    {
    "Symbol":"HTGM",
    "Name":"HTG Molecular Diagnostics Inc."
    },
    {
    "Symbol":"HTH",
    "Name":"Hilltop Holdings Inc."
    },
    {
    "Symbol":"HTHT",
    "Name":"Huazhu Group Limited American Depositary Shares"
    },
    {
    "Symbol":"HTIA",
    "Name":"Healthcare Trust Inc. 7.375% Series A Cumulative Redeemable Perpetual Preferred Stock"
    },
    {
    "Symbol":"HTIBP",
    "Name":"Healthcare Trust Inc. 7.125% Series B Cumulative Redeemable Perpetual Preferred Stock"
    },
    {
    "Symbol":"HTLD",
    "Name":"Heartland Express Inc."
    },
    {
    "Symbol":"HTLF",
    "Name":"Heartland Financial USA Inc."
    },
    {
    "Symbol":"HTLFP",
    "Name":"Heartland Financial USA Inc. Depositary Shares each representing a 1/400th ownership interest in a share of 7.00% Fixed-Rate Reset Non-Cumulative Perpetual Preferred Stock Series E"
    },
    {
    "Symbol":"HTOO",
    "Name":"Fusion Fuel Green PLC Class A Ordinary Shares"
    },
    {
    "Symbol":"HTOOW",
    "Name":"Fusion Fuel Green PLC Warrant"
    },
    {
    "Symbol":"HTPA",
    "Name":"Highland Transcend Partners I Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"HTY",
    "Name":"John Hancock Tax-Advantaged Global Shareholder Yield Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"HTZ",
    "Name":"Hertz Global Holdings Inc"
    },
    {
    "Symbol":"HTZWW",
    "Name":"Hertz Global Holdings Inc Warrant"
    },
    {
    "Symbol":"HUBB",
    "Name":"Hubbell Inc"
    },
    {
    "Symbol":"HUBG",
    "Name":"Hub Group Inc. Class A"
    },
    {
    "Symbol":"HUBS",
    "Name":"HubSpot Inc."
    },
    {
    "Symbol":"HUDI",
    "Name":"Huadi International Group Co. Ltd. Ordinary Shares"
    },
    {
    "Symbol":"HUGE",
    "Name":"FSD Pharma Inc. Class B Subordinate Voting Shares"
    },
    {
    "Symbol":"HUGS",
    "Name":"USHG Acquisition Corp. Class A"
    },
    {
    "Symbol":"HUIZ",
    "Name":"Huize Holding Limited American Depositary Shares"
    },
    {
    "Symbol":"HUM",
    "Name":"Humana Inc."
    },
    {
    "Symbol":"HUMA",
    "Name":"Humacyte Inc."
    },
    {
    "Symbol":"HUMAW",
    "Name":"Humacyte Inc. Warrant"
    },
    {
    "Symbol":"HUN",
    "Name":"Huntsman Corporation"
    },
    {
    "Symbol":"HURC",
    "Name":"Hurco Companies Inc."
    },
    {
    "Symbol":"HURN",
    "Name":"Huron Consulting Group Inc."
    },
    {
    "Symbol":"HUSA",
    "Name":"Houston American Energy Corporation"
    },
    {
    "Symbol":"HUSN",
    "Name":"Hudson Capital Inc. Ordinary Shares"
    },
    {
    "Symbol":"HUT",
    "Name":"Hut 8 Mining Corp. Common Shares"
    },
    {
    "Symbol":"HUYA",
    "Name":"HUYA Inc. American depositary shares each  representing one Class A ordinary share"
    },
    {
    "Symbol":"HVBC",
    "Name":"HV Bancorp Inc."
    },
    {
    "Symbol":"HVT",
    "Name":"Haverty Furniture Companies Inc."
    },
    {
    "Symbol":"HVT/A",
    "Name":"Haverty Furniture Companies Inc."
    },
    {
    "Symbol":"HWBK",
    "Name":"Hawthorn Bancshares Inc."
    },
    {
    "Symbol":"HWC",
    "Name":"Hancock Whitney Corporation"
    },
    {
    "Symbol":"HWCPZ",
    "Name":"Hancock Whitney Corporation 6.25% Subordinated Notes due 2060"
    },
    {
    "Symbol":"HWEL",
    "Name":"Healthwell Acquisition Corp. I Class A"
    },
    {
    "Symbol":"HWELU",
    "Name":"Healthwell Acquisition Corp. I Unit"
    },
    {
    "Symbol":"HWELW",
    "Name":"Healthwell Acquisition Corp. I Warrant"
    },
    {
    "Symbol":"HWKN",
    "Name":"Hawkins Inc."
    },
    {
    "Symbol":"HWM",
    "Name":"Howmet Aerospace Inc."
    },
    {
    "Symbol":"HWM^",
    "Name":"Howmet Aerospace Inc. $3.75 Preferred Stock"
    },
    {
    "Symbol":"HXL",
    "Name":"Hexcel Corporation"
    },
    {
    "Symbol":"HY",
    "Name":"Hyster-Yale Materials Handling Inc. Class A"
    },
    {
    "Symbol":"HYAC",
    "Name":"Haymaker Acquisition Corp. III Class A"
    },
    {
    "Symbol":"HYACU",
    "Name":"Haymaker Acquisition Corp. III Unit"
    },
    {
    "Symbol":"HYACW",
    "Name":"Haymaker Acquisition Corp. III Warrant"
    },
    {
    "Symbol":"HYB",
    "Name":"New America High Income Fund Inc. (The)"
    },
    {
    "Symbol":"HYFM",
    "Name":"Hydrofarm Holdings Group Inc."
    },
    {
    "Symbol":"HYI",
    "Name":"Western Asset High Yield Defined Opportunity Fund Inc."
    },
    {
    "Symbol":"HYLN",
    "Name":"Hyliion Holdings Corp. Class A"
    },
    {
    "Symbol":"HYMC",
    "Name":"Hycroft Mining Holding Corporation Class A"
    },
    {
    "Symbol":"HYMCL",
    "Name":"Hycroft Mining Holding Corporation Warrants"
    },
    {
    "Symbol":"HYMCW",
    "Name":"Hycroft Mining Holding Corporation  Warrant"
    },
    {
    "Symbol":"HYMCZ",
    "Name":"Hycroft Mining Holding Corporation Warrant"
    },
    {
    "Symbol":"HYPR",
    "Name":"Hyperfine Inc. Class A"
    },
    {
    "Symbol":"HYRE",
    "Name":"HyreCar Inc."
    },
    {
    "Symbol":"HYT",
    "Name":"Blackrock Corporate High Yield Fund Inc."
    },
    {
    "Symbol":"HYW",
    "Name":"Hywin Holdings Ltd. American Depositary Shares"
    },
    {
    "Symbol":"HYZN",
    "Name":"Hyzon Motors Inc. Class A"
    },
    {
    "Symbol":"HYZNW",
    "Name":"Hyzon Motors Inc. Warrants"
    },
    {
    "Symbol":"HZN",
    "Name":"Horizon Global Corporation Common Shares"
    },
    {
    "Symbol":"HZNP",
    "Name":"Horizon Therapeutics Public Limited Company Ordinary Shares"
    },
    {
    "Symbol":"HZO",
    "Name":"MarineMax Inc.  (FL)"
    },
    {
    "Symbol":"HZON",
    "Name":"Horizon Acquisition Corporation II Class A Ordinary Shares"
    },
    {
    "Symbol":"IAA",
    "Name":"IAA Inc."
    },
    {
    "Symbol":"IAC",
    "Name":"IAC/InterActiveCorp"
    },
    {
    "Symbol":"IACC",
    "Name":"ION Acquisition Corp 3 Ltd. Class A Ordinary Shares"
    },
    {
    "Symbol":"IAE",
    "Name":"Voya Asia Pacific High Dividend Equity Income Fund ING Asia Pacific High Dividend Equity Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"IAF",
    "Name":"Aberdeen Australia Equity Fund Inc"
    },
    {
    "Symbol":"IAG",
    "Name":"Iamgold Corporation Ordinary Shares"
    },
    {
    "Symbol":"IART",
    "Name":"Integra LifeSciences Holdings Corporation"
    },
    {
    "Symbol":"IAS",
    "Name":"Integral Ad Science Holding Corp."
    },
    {
    "Symbol":"IBA",
    "Name":"Industrias Bachoco S.A.B. de C.V."
    },
    {
    "Symbol":"IBCP",
    "Name":"Independent Bank Corporation"
    },
    {
    "Symbol":"IBER",
    "Name":"Ibere Pharmaceuticals Class A Ordinary Shares"
    },
    {
    "Symbol":"IBEX",
    "Name":"IBEX Limited Common Shares"
    },
    {
    "Symbol":"IBIO",
    "Name":"iBio Inc."
    },
    {
    "Symbol":"IBKR",
    "Name":"Interactive Brokers Group Inc. Class A"
    },
    {
    "Symbol":"IBM",
    "Name":"International Business Machines Corporation"
    },
    {
    "Symbol":"IBN",
    "Name":"ICICI Bank Limited"
    },
    {
    "Symbol":"IBOC",
    "Name":"International Bancshares Corporation"
    },
    {
    "Symbol":"IBP",
    "Name":"Installed Building Products Inc."
    },
    {
    "Symbol":"IBRX",
    "Name":"ImmunityBio Inc."
    },
    {
    "Symbol":"IBTX",
    "Name":"Independent Bank Group Inc"
    },
    {
    "Symbol":"ICAD",
    "Name":"iCAD Inc."
    },
    {
    "Symbol":"ICCC",
    "Name":"ImmuCell Corporation"
    },
    {
    "Symbol":"ICCH",
    "Name":"ICC Holdings Inc."
    },
    {
    "Symbol":"ICCM",
    "Name":"IceCure Medical Ltd. Ordinary Shares"
    },
    {
    "Symbol":"ICD",
    "Name":"Independence Contract Drilling Inc."
    },
    {
    "Symbol":"ICE",
    "Name":"Intercontinental Exchange Inc."
    },
    {
    "Symbol":"ICFI",
    "Name":"ICF International Inc."
    },
    {
    "Symbol":"ICHR",
    "Name":"Ichor Holdings Ordinary Shares"
    },
    {
    "Symbol":"ICL",
    "Name":"ICL Group Ltd. Ordinary Shares"
    },
    {
    "Symbol":"ICLK",
    "Name":"iClick Interactive Asia Group Limited American Depositary Shares"
    },
    {
    "Symbol":"ICLR",
    "Name":"ICON plc Ordinary Shares"
    },
    {
    "Symbol":"ICMB",
    "Name":"Investcorp Credit Management BDC Inc."
    },
    {
    "Symbol":"ICNC",
    "Name":"Iconic Sports Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"ICPT",
    "Name":"Intercept Pharmaceuticals Inc."
    },
    {
    "Symbol":"ICR^A",
    "Name":"InPoint Commercial Real Estate Income Inc. 6.75% Series A Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"ICUI",
    "Name":"ICU Medical Inc."
    },
    {
    "Symbol":"ICVX",
    "Name":"Icosavax Inc."
    },
    {
    "Symbol":"ID",
    "Name":"PARTS iD Inc. Class A"
    },
    {
    "Symbol":"IDA",
    "Name":"IDACORP Inc."
    },
    {
    "Symbol":"IDBA",
    "Name":"IDEX Biometrics ASA American Depositary Shares"
    },
    {
    "Symbol":"IDCC",
    "Name":"InterDigital Inc."
    },
    {
    "Symbol":"IDE",
    "Name":"Voya Infrastructure Industrials and Materials Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"IDEX",
    "Name":"Ideanomics Inc."
    },
    {
    "Symbol":"IDN",
    "Name":"Intellicheck Inc."
    },
    {
    "Symbol":"IDRA",
    "Name":"Idera Pharmaceuticals Inc."
    },
    {
    "Symbol":"IDT",
    "Name":"IDT Corporation Class B"
    },
    {
    "Symbol":"IDW",
    "Name":"IDW Media Holdings Class B"
    },
    {
    "Symbol":"IDXX",
    "Name":"IDEXX Laboratories Inc."
    },
    {
    "Symbol":"IDYA",
    "Name":"IDEAYA Biosciences Inc."
    },
    {
    "Symbol":"IEA",
    "Name":"Infrastructure and Energy Alternatives Inc."
    },
    {
    "Symbol":"IEAWW",
    "Name":"Infrastructure and Energy Alternatives Inc. Warrant"
    },
    {
    "Symbol":"IEP",
    "Name":"Icahn Enterprises L.P."
    },
    {
    "Symbol":"IESC",
    "Name":"IES Holdings Inc."
    },
    {
    "Symbol":"IEX",
    "Name":"IDEX Corporation"
    },
    {
    "Symbol":"IFBD",
    "Name":"Infobird Co. Ltd Ordinary Shares"
    },
    {
    "Symbol":"IFF",
    "Name":"International Flavors & Fragrances Inc."
    },
    {
    "Symbol":"IFIN",
    "Name":"InFinT Acquisition Corporation Class A Ordinary Shares"
    },
    {
    "Symbol":"IFN",
    "Name":"India Fund Inc. (The)"
    },
    {
    "Symbol":"IFRX",
    "Name":"InflaRx N.V."
    },
    {
    "Symbol":"IFS",
    "Name":"Intercorp Financial Services Inc. Common Shares"
    },
    {
    "Symbol":"IGA",
    "Name":"Voya Global Advantage and Premium Opportunity Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"IGAC",
    "Name":"IG Acquisition Corp. Class A"
    },
    {
    "Symbol":"IGACU",
    "Name":"IG Acquisition Corp. Unit"
    },
    {
    "Symbol":"IGACW",
    "Name":"IG Acquisition Corp. Warrant"
    },
    {
    "Symbol":"IGAP",
    "Name":"Integrity Applications Inc."
    },
    {
    "Symbol":"IGC",
    "Name":"India Globalization Capital Inc."
    },
    {
    "Symbol":"IGD",
    "Name":"Voya Global Equity Dividend and Premium Opportunity Fund"
    },
    {
    "Symbol":"IGI",
    "Name":"Western Asset Investment Grade Defined Opportunity Trust Inc."
    },
    {
    "Symbol":"IGIC",
    "Name":"International General Insurance Holdings Ltd. Ordinary Share"
    },
    {
    "Symbol":"IGICW",
    "Name":"International General Insurance Holdings Ltd. Warrants expiring 03/17/2025"
    },
    {
    "Symbol":"IGMS",
    "Name":"IGM Biosciences Inc."
    },
    {
    "Symbol":"IGNY",
    "Name":"Ignyte Acquisition Corp."
    },
    {
    "Symbol":"IGNYW",
    "Name":"Ignyte Acquisition Corp. Warrant"
    },
    {
    "Symbol":"IGR",
    "Name":"CBRE Global Real Estate Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"IGT",
    "Name":"International Game Technology Ordinary Shares"
    },
    {
    "Symbol":"IGTA",
    "Name":"Inception Growth Acquisition Limited"
    },
    {
    "Symbol":"IGTAR",
    "Name":"Inception Growth Acquisition Limited Rights"
    },
    {
    "Symbol":"IGTAU",
    "Name":"Inception Growth Acquisition Limited Unit"
    },
    {
    "Symbol":"IGTAW",
    "Name":"Inception Growth Acquisition Limited Warrants"
    },
    {
    "Symbol":"IH",
    "Name":"iHuman Inc. American depositary shares each representing five Class A ordinary shares"
    },
    {
    "Symbol":"IHC",
    "Name":"Independence Holding Company"
    },
    {
    "Symbol":"IHD",
    "Name":"Voya Emerging Markets High Income Dividend Equity Fund Common Shares"
    },
    {
    "Symbol":"IHG",
    "Name":"Intercontinental Hotels Group American Depositary Shares (Each representing one Ordinary Share)"
    },
    {
    "Symbol":"IHIT",
    "Name":"Invesco High Income 2023 Target Term Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"IHRT",
    "Name":"iHeartMedia Inc. Class A"
    },
    {
    "Symbol":"IHS",
    "Name":"IHS Holding Limited Ordinary Shares"
    },
    {
    "Symbol":"IHT",
    "Name":"InnSuites Hospitality Trust Shares of Beneficial Interest"
    },
    {
    "Symbol":"IHTA",
    "Name":"Invesco High Income 2024 Target Term Fund Common Shares of Beneficial Interest No par value per share"
    },
    {
    "Symbol":"IIF",
    "Name":"Morgan Stanley India Investment Fund Inc."
    },
    {
    "Symbol":"III",
    "Name":"Information Services Group Inc. Information Services Group Inc."
    },
    {
    "Symbol":"IIIIU",
    "Name":"INSU Acquisition Corp. III Unit"
    },
    {
    "Symbol":"IIIIW",
    "Name":"INSU Acquisition Corp. III Warrant"
    },
    {
    "Symbol":"IIIN",
    "Name":"Insteel Industries Inc."
    },
    {
    "Symbol":"IIIV",
    "Name":"i3 Verticals Inc. Class A"
    },
    {
    "Symbol":"IIM",
    "Name":"Invesco Value Municipal Income Trust"
    },
    {
    "Symbol":"IIN",
    "Name":"Intricon Corporation"
    },
    {
    "Symbol":"IINN",
    "Name":"Inspira Technologies Oxy B.H.N. Ltd. Ordinary Shares"
    },
    {
    "Symbol":"IINNW",
    "Name":"Inspira Technologies Oxy B.H.N. Ltd. Warrant"
    },
    {
    "Symbol":"IIPR",
    "Name":"Innovative Industrial Properties Inc."
    },
    {
    "Symbol":"IIPR^A",
    "Name":"Innovative Industrial Properties Inc. 9.00% Series A Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"IIVI",
    "Name":"II-VI Incorporated"
    },
    {
    "Symbol":"IIVIP",
    "Name":"II-VI Incorporated 6.00% Series A Mandatory Convertible Preferred Stock"
    },
    {
    "Symbol":"IKNA",
    "Name":"Ikena Oncology Inc."
    },
    {
    "Symbol":"IKT",
    "Name":"Inhibikase Therapeutics Inc."
    },
    {
    "Symbol":"ILMN",
    "Name":"Illumina Inc."
    },
    {
    "Symbol":"ILPT",
    "Name":"Industrial Logistics Properties Trust Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"IMAB",
    "Name":"I-MAB American Depositary Shares"
    },
    {
    "Symbol":"IMAC",
    "Name":"IMAC Holdings Inc."
    },
    {
    "Symbol":"IMACW",
    "Name":"IMAC Holdings Inc. Warrant"
    },
    {
    "Symbol":"IMAQ",
    "Name":"International Media Acquisition Corp. Class A"
    },
    {
    "Symbol":"IMAQR",
    "Name":"International Media Acquisition Corp. Rights"
    },
    {
    "Symbol":"IMAQU",
    "Name":"International Media Acquisition Corp. Unit"
    },
    {
    "Symbol":"IMAQW",
    "Name":"International Media Acquisition Corp. Warrants"
    },
    {
    "Symbol":"IMAX",
    "Name":"Imax Corporation"
    },
    {
    "Symbol":"IMBI",
    "Name":"iMedia Brands Inc. Class A"
    },
    {
    "Symbol":"IMBIL",
    "Name":"iMedia Brands Inc. 8.5% Senior Notes Due 2026"
    },
    {
    "Symbol":"IMCC",
    "Name":"IM Cannabis Corp. Common Shares"
    },
    {
    "Symbol":"IMCR",
    "Name":"Immunocore Holdings plc American Depositary Shares"
    },
    {
    "Symbol":"IMGN",
    "Name":"ImmunoGen Inc."
    },
    {
    "Symbol":"IMGO",
    "Name":"Imago BioSciences Inc."
    },
    {
    "Symbol":"IMH",
    "Name":"Impac Mortgage Holdings Inc."
    },
    {
    "Symbol":"IMKTA",
    "Name":"Ingles Markets Incorporated Class A"
    },
    {
    "Symbol":"IMMP",
    "Name":"Immutep Limited American Depositary Shares"
    },
    {
    "Symbol":"IMMR",
    "Name":"Immersion Corporation"
    },
    {
    "Symbol":"IMMX",
    "Name":"Immix Biopharma Inc."
    },
    {
    "Symbol":"IMNM",
    "Name":"Immunome Inc."
    },
    {
    "Symbol":"IMO",
    "Name":"Imperial Oil Limited"
    },
    {
    "Symbol":"IMOS",
    "Name":"ChipMOS TECHNOLOGIES INC. American Depositary Shares"
    },
    {
    "Symbol":"IMPL",
    "Name":"Impel NeuroPharma Inc."
    },
    {
    "Symbol":"IMPP",
    "Name":"Imperial Petroleum Inc. Common Shares"
    },
    {
    "Symbol":"IMPPP",
    "Name":"Imperial Petroleum Inc. 8.75% Series A Cumulative Redeemable Perpetual Preferred Shares"
    },
    {
    "Symbol":"IMPX",
    "Name":"AEA-Bridges Impact Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"IMRA",
    "Name":"IMARA Inc."
    },
    {
    "Symbol":"IMRN",
    "Name":"Immuron Limited American Depositary Shares"
    },
    {
    "Symbol":"IMRNW",
    "Name":"Immuron Limited Warrants"
    },
    {
    "Symbol":"IMRX",
    "Name":"Immuneering Corporation Class A"
    },
    {
    "Symbol":"IMTE",
    "Name":"Integrated Media Technology Limited Ordinary Shares"
    },
    {
    "Symbol":"IMTX",
    "Name":"Immatics N.V. Ordinary Shares"
    },
    {
    "Symbol":"IMTXW",
    "Name":"Immatics N.V. Warrants"
    },
    {
    "Symbol":"IMUX",
    "Name":"Immunic Inc."
    },
    {
    "Symbol":"IMV",
    "Name":"IMV Inc. Common Shares"
    },
    {
    "Symbol":"IMVT",
    "Name":"Immunovant Inc."
    },
    {
    "Symbol":"IMXI",
    "Name":"International Money Express Inc."
    },
    {
    "Symbol":"INAB",
    "Name":"IN8bio Inc."
    },
    {
    "Symbol":"INAQ",
    "Name":"Insight Acquisition Corp. Class A"
    },
    {
    "Symbol":"INBK",
    "Name":"First Internet Bancorp"
    },
    {
    "Symbol":"INBKZ",
    "Name":"First Internet Bancorp 6.0% Fixed-to-Floating Rate Subordinated Notes Due 2029"
    },
    {
    "Symbol":"INBX",
    "Name":"Inhibrx Inc."
    },
    {
    "Symbol":"INCR",
    "Name":"Intercure Ltd. Ordinary Shares"
    },
    {
    "Symbol":"INCY",
    "Name":"Incyte Corp."
    },
    {
    "Symbol":"INDB",
    "Name":"Independent Bank Corp."
    },
    {
    "Symbol":"INDI",
    "Name":"indie Semiconductor Inc. Class A"
    },
    {
    "Symbol":"INDIW",
    "Name":"indie Semiconductor Inc. Warrant"
    },
    {
    "Symbol":"INDO",
    "Name":"Indonesia Energy Corporation Limited Ordinary Shares"
    },
    {
    "Symbol":"INDP",
    "Name":"Indaptus Therapeutics Inc."
    },
    {
    "Symbol":"INDT",
    "Name":"INDUS Realty Trust Inc. (MD)"
    },
    {
    "Symbol":"INFA",
    "Name":"Informatica Inc. Class A"
    },
    {
    "Symbol":"INFI",
    "Name":"Infinity Pharmaceuticals Inc."
    },
    {
    "Symbol":"INFN",
    "Name":"Infinera Corporation"
    },
    {
    "Symbol":"INFO",
    "Name":"IHS Markit Ltd. Common Shares"
    },
    {
    "Symbol":"INFU",
    "Name":"InfuSystems Holdings Inc."
    },
    {
    "Symbol":"INFY",
    "Name":"Infosys Limited American Depositary Shares"
    },
    {
    "Symbol":"ING",
    "Name":"ING Group N.V."
    },
    {
    "Symbol":"INGN",
    "Name":"Inogen Inc"
    },
    {
    "Symbol":"INGR",
    "Name":"Ingredion Incorporated"
    },
    {
    "Symbol":"INKA",
    "Name":"KludeIn I Acquisition Corp. Class A"
    },
    {
    "Symbol":"INKAU",
    "Name":"KludeIn I Acquisition Corp. Unit"
    },
    {
    "Symbol":"INKAW",
    "Name":"KludeIn I Acquisition Corp. Warrant"
    },
    {
    "Symbol":"INKT",
    "Name":"MiNK Therapeutics Inc."
    },
    {
    "Symbol":"INM",
    "Name":"InMed Pharmaceuticals Inc. Common Shares"
    },
    {
    "Symbol":"INMB",
    "Name":"INmune Bio Inc."
    },
    {
    "Symbol":"INMD",
    "Name":"InMode Ltd. Ordinary Shares"
    },
    {
    "Symbol":"INN",
    "Name":"Summit Hotel Properties Inc."
    },
    {
    "Symbol":"INN^E",
    "Name":"Summit Hotel Properties Inc. 6.250% Series E Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"INN^F",
    "Name":"Summit Hotel Properties Inc. 5.875% Series F Cumulative Redeemable Preferred Stock $0.01 par value per share"
    },
    {
    "Symbol":"INNV",
    "Name":"InnovAge Holding Corp."
    },
    {
    "Symbol":"INO",
    "Name":"Inovio Pharmaceuticals Inc."
    },
    {
    "Symbol":"INOD",
    "Name":"Innodata Inc."
    },
    {
    "Symbol":"INPX",
    "Name":"Inpixon"
    },
    {
    "Symbol":"INSE",
    "Name":"Inspired Entertainment Inc."
    },
    {
    "Symbol":"INSG",
    "Name":"Inseego Corp."
    },
    {
    "Symbol":"INSI",
    "Name":"Insight Select Income Fund"
    },
    {
    "Symbol":"INSM",
    "Name":"Insmed Inc."
    },
    {
    "Symbol":"INSP",
    "Name":"Inspire Medical Systems Inc."
    },
    {
    "Symbol":"INST",
    "Name":"Instructure Holdings Inc."
    },
    {
    "Symbol":"INSW",
    "Name":"International Seaways Inc."
    },
    {
    "Symbol":"INSW^A",
    "Name":"International Seaways Inc. 8.50% Senior Notes due June 30 2023"
    },
    {
    "Symbol":"INT",
    "Name":"World Fuel Services Corporation"
    },
    {
    "Symbol":"INTA",
    "Name":"Intapp Inc."
    },
    {
    "Symbol":"INTC",
    "Name":"Intel Corporation"
    },
    {
    "Symbol":"INTE",
    "Name":"Integral Acquisition Corporation 1 Class A"
    },
    {
    "Symbol":"INTEU",
    "Name":"Integral Acquisition Corporation 1 Unit"
    },
    {
    "Symbol":"INTG",
    "Name":"Intergroup Corporation (The)"
    },
    {
    "Symbol":"INTT",
    "Name":"inTest Corporation"
    },
    {
    "Symbol":"INTU",
    "Name":"Intuit Inc."
    },
    {
    "Symbol":"INTZ",
    "Name":"Intrusion Inc."
    },
    {
    "Symbol":"INUV",
    "Name":"Inuvo Inc."
    },
    {
    "Symbol":"INVA",
    "Name":"Innoviva Inc."
    },
    {
    "Symbol":"INVE",
    "Name":"Identiv Inc."
    },
    {
    "Symbol":"INVH",
    "Name":"Invitation Homes Inc."
    },
    {
    "Symbol":"INVO",
    "Name":"INVO BioScience Inc."
    },
    {
    "Symbol":"INVZ",
    "Name":"Innoviz Technologies Ltd. Ordinary shares"
    },
    {
    "Symbol":"INVZW",
    "Name":"Innoviz Technologies Ltd. Warrant"
    },
    {
    "Symbol":"INZY",
    "Name":"Inozyme Pharma Inc."
    },
    {
    "Symbol":"IO",
    "Name":"Ion Geophysical Corporation"
    },
    {
    "Symbol":"IOAC",
    "Name":"Innovative International Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"IOACU",
    "Name":"Innovative International Acquisition Corp. Unit"
    },
    {
    "Symbol":"IOACW",
    "Name":"Innovative International Acquisition Corp. Warrants"
    },
    {
    "Symbol":"IOBT",
    "Name":"IO Biotech Inc."
    },
    {
    "Symbol":"IONM",
    "Name":"Assure Holdings Corp."
    },
    {
    "Symbol":"IONQ",
    "Name":"IonQ Inc."
    },
    {
    "Symbol":"IONS",
    "Name":"Ionis Pharmaceuticals Inc."
    },
    {
    "Symbol":"IOR",
    "Name":"Income Opportunity Realty Investors Inc."
    },
    {
    "Symbol":"IOSP",
    "Name":"Innospec Inc."
    },
    {
    "Symbol":"IOT",
    "Name":"Samsara Inc. Class A"
    },
    {
    "Symbol":"IOVA",
    "Name":"Iovance Biotherapeutics Inc."
    },
    {
    "Symbol":"IP",
    "Name":"International Paper Company"
    },
    {
    "Symbol":"IPA",
    "Name":"ImmunoPrecise Antibodies Ltd."
    },
    {
    "Symbol":"IPAR",
    "Name":"Inter Parfums Inc."
    },
    {
    "Symbol":"IPDN",
    "Name":"Professional Diversity Network Inc."
    },
    {
    "Symbol":"IPG",
    "Name":"Interpublic Group of Companies Inc. (The)"
    },
    {
    "Symbol":"IPGP",
    "Name":"IPG Photonics Corporation"
    },
    {
    "Symbol":"IPHA",
    "Name":"Innate Pharma S.A. ADS"
    },
    {
    "Symbol":"IPI",
    "Name":"Intrepid Potash Inc"
    },
    {
    "Symbol":"IPOD",
    "Name":"Social Capital Hedosophia Holdings Corp. IV Class A Ordinary Shares"
    },
    {
    "Symbol":"IPOF",
    "Name":"Social Capital Hedosophia Holdings Corp. VI Class A Ordinary Shares"
    },
    {
    "Symbol":"IPSC",
    "Name":"Century Therapeutics Inc."
    },
    {
    "Symbol":"IPVA",
    "Name":"InterPrivate II Acquisition Corp. Class A"
    },
    {
    "Symbol":"IPVF",
    "Name":"InterPrivate III Financial Partners Inc. Class A"
    },
    {
    "Symbol":"IPVI",
    "Name":"InterPrivate IV InfraTech Partners Inc. Class A"
    },
    {
    "Symbol":"IPVIU",
    "Name":"InterPrivate IV InfraTech Partners Inc. Units"
    },
    {
    "Symbol":"IPW",
    "Name":"iPower Inc."
    },
    {
    "Symbol":"IPWR",
    "Name":"Ideal Power Inc."
    },
    {
    "Symbol":"IQ",
    "Name":"iQIYI Inc. American Depositary Shares"
    },
    {
    "Symbol":"IQI",
    "Name":"Invesco Quality Municipal Income Trust"
    },
    {
    "Symbol":"IQMD",
    "Name":"Intelligent Medicine Acquisition Corp. Class A"
    },
    {
    "Symbol":"IQMDU",
    "Name":"Intelligent Medicine Acquisition Corp. Unit"
    },
    {
    "Symbol":"IQMDW",
    "Name":"Intelligent Medicine Acquisition Corp. Warrant"
    },
    {
    "Symbol":"IQV",
    "Name":"IQVIA Holdings Inc."
    },
    {
    "Symbol":"IR",
    "Name":"Ingersoll Rand Inc."
    },
    {
    "Symbol":"IRBT",
    "Name":"iRobot Corporation"
    },
    {
    "Symbol":"IRCP",
    "Name":"IRSA Propiedades Comerciales S.A. American Depositary Shares"
    },
    {
    "Symbol":"IRDM",
    "Name":"Iridium Communications Inc"
    },
    {
    "Symbol":"IREN",
    "Name":"Iris Energy Limited Ordinary Shares"
    },
    {
    "Symbol":"IRIX",
    "Name":"IRIDEX Corporation"
    },
    {
    "Symbol":"IRL",
    "Name":"New Ireland Fund Inc (The)"
    },
    {
    "Symbol":"IRM",
    "Name":"Iron Mountain Incorporated (Delaware)  REIT"
    },
    {
    "Symbol":"IRMD",
    "Name":"iRadimed Corporation"
    },
    {
    "Symbol":"IRNT",
    "Name":"IronNet Inc."
    },
    {
    "Symbol":"IROQ",
    "Name":"IF Bancorp Inc."
    },
    {
    "Symbol":"IRRX",
    "Name":"Integrated Rail and Resources Acquisition Corp. Class A"
    },
    {
    "Symbol":"IRS",
    "Name":"IRSA Inversiones Y Representaciones S.A."
    },
    {
    "Symbol":"IRT",
    "Name":"Independence Realty Trust Inc."
    },
    {
    "Symbol":"IRTC",
    "Name":"iRhythm Technologies Inc."
    },
    {
    "Symbol":"IRWD",
    "Name":"Ironwood Pharmaceuticals Inc. Class A"
    },
    {
    "Symbol":"IS",
    "Name":"ironSource Ltd. Class A Ordinary Shares"
    },
    {
    "Symbol":"ISAA",
    "Name":"Iron Spark I Inc. Class A"
    },
    {
    "Symbol":"ISBC",
    "Name":"Investors Bancorp Inc."
    },
    {
    "Symbol":"ISD",
    "Name":"PGIM High Yield Bond Fund Inc."
    },
    {
    "Symbol":"ISDR",
    "Name":"Issuer Direct Corporation"
    },
    {
    "Symbol":"ISEE",
    "Name":"IVERIC bio Inc."
    },
    {
    "Symbol":"ISIG",
    "Name":"Insignia Systems Inc."
    },
    {
    "Symbol":"ISLE",
    "Name":"Isleworth Healthcare Acquisition Corporation"
    },
    {
    "Symbol":"ISLEW",
    "Name":"Isleworth Healthcare Acquisition Corporation Warrant"
    },
    {
    "Symbol":"ISO",
    "Name":"IsoPlexis Corporation"
    },
    {
    "Symbol":"ISPC",
    "Name":"iSpecimen Inc."
    },
    {
    "Symbol":"ISR",
    "Name":"IsoRay Inc.   (DE)"
    },
    {
    "Symbol":"ISRG",
    "Name":"Intuitive Surgical Inc."
    },
    {
    "Symbol":"ISSC",
    "Name":"Innovative Solutions and Support Inc."
    },
    {
    "Symbol":"ISTR",
    "Name":"Investar Holding Corporation"
    },
    {
    "Symbol":"ISUN",
    "Name":"iSun Inc."
    },
    {
    "Symbol":"IT",
    "Name":"Gartner Inc."
    },
    {
    "Symbol":"ITAQU",
    "Name":"Industrial Tech Acquisitions II Inc. Unit"
    },
    {
    "Symbol":"ITCB",
    "Name":"Itau CorpBanca American Depositary Shares (each representing 1500 shares of   no par value)"
    },
    {
    "Symbol":"ITCI",
    "Name":"Intra-Cellular Therapies Inc."
    },
    {
    "Symbol":"ITGR",
    "Name":"Integer Holdings Corporation"
    },
    {
    "Symbol":"ITHX",
    "Name":"ITHAX Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"ITHXU",
    "Name":"ITHAX Acquisition Corp. Unit"
    },
    {
    "Symbol":"ITHXW",
    "Name":"ITHAX Acquisition Corp. Warrant"
    },
    {
    "Symbol":"ITI",
    "Name":"Iteris Inc."
    },
    {
    "Symbol":"ITIC",
    "Name":"Investors Title Company"
    },
    {
    "Symbol":"ITOS",
    "Name":"iTeos Therapeutics Inc."
    },
    {
    "Symbol":"ITP",
    "Name":"IT Tech Packaging Inc."
    },
    {
    "Symbol":"ITQ",
    "Name":"Itiquira Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"ITQRU",
    "Name":"Itiquira Acquisition Corp. Unit"
    },
    {
    "Symbol":"ITQRW",
    "Name":"Itiquira Acquisition Corp. Warrant"
    },
    {
    "Symbol":"ITRG",
    "Name":"Integra Resources Corp. Common Shares"
    },
    {
    "Symbol":"ITRI",
    "Name":"Itron Inc."
    },
    {
    "Symbol":"ITRM",
    "Name":"Iterum Therapeutics plc Ordinary Share"
    },
    {
    "Symbol":"ITRN",
    "Name":"Ituran Location and Control Ltd. Ordinary Shares"
    },
    {
    "Symbol":"ITT",
    "Name":"ITT Inc."
    },
    {
    "Symbol":"ITUB",
    "Name":"Itau Unibanco Banco Holding SA American Depositary Shares (Each repstg 500 Preferred shares)"
    },
    {
    "Symbol":"ITW",
    "Name":"Illinois Tool Works Inc."
    },
    {
    "Symbol":"IVA",
    "Name":"Inventiva S.A. American Depository Shares"
    },
    {
    "Symbol":"IVAC",
    "Name":"Intevac Inc."
    },
    {
    "Symbol":"IVAN",
    "Name":"Ivanhoe Capital Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"IVC",
    "Name":"Invacare Corporation"
    },
    {
    "Symbol":"IVCBU",
    "Name":"Investcorp Europe Acquisition Corp I Unit"
    },
    {
    "Symbol":"IVCPU",
    "Name":"Swiftmerge Acquisition Corp. Unit"
    },
    {
    "Symbol":"IVH",
    "Name":"Delaware Ivy High Income Opportunities Fund"
    },
    {
    "Symbol":"IVR",
    "Name":"INVESCO MORTGAGE CAPITAL INC"
    },
    {
    "Symbol":"IVR^B",
    "Name":"Invesco Mortgage Capital Inc. Preferred Series B Cum Fxd to Fltg"
    },
    {
    "Symbol":"IVR^C",
    "Name":"INVESCO MORTGAGE CAPITAL INC 7.5% Fixed-to-Floating Series C Cumulative Redeemable Preferred Stock Liquation Preference $25.00 per Share"
    },
    {
    "Symbol":"IVT",
    "Name":"InvenTrust Properties Corp."
    },
    {
    "Symbol":"IVZ",
    "Name":"Invesco Ltd"
    },
    {
    "Symbol":"IX",
    "Name":"Orix Corp Ads"
    },
    {
    "Symbol":"IXAQ",
    "Name":"IX Acquisition Corp. Class A Ordinary Share"
    },
    {
    "Symbol":"IXAQU",
    "Name":"IX Acquisition Corp. Unit"
    },
    {
    "Symbol":"IXAQW",
    "Name":"IX Acquisition Corp. Warrant"
    },
    {
    "Symbol":"IZEA",
    "Name":"IZEA Worldwide Inc."
    },
    {
    "Symbol":"J",
    "Name":"Jacobs Engineering Group Inc."
    },
    {
    "Symbol":"JACK",
    "Name":"Jack In The Box Inc."
    },
    {
    "Symbol":"JAGX",
    "Name":"Jaguar Health Inc."
    },
    {
    "Symbol":"JAKK",
    "Name":"JAKKS Pacific Inc."
    },
    {
    "Symbol":"JAMF",
    "Name":"Jamf Holding Corp."
    },
    {
    "Symbol":"JAN",
    "Name":"JanOne Inc.   (NV)"
    },
    {
    "Symbol":"JANX",
    "Name":"Janux Therapeutics Inc."
    },
    {
    "Symbol":"JAQC",
    "Name":"Jupiter Acquisition Corporation"
    },
    {
    "Symbol":"JAQCU",
    "Name":"Jupiter Acquisition Corporation Units"
    },
    {
    "Symbol":"JATT",
    "Name":"JATT Acquisition Corp Class A Ordinary Shares"
    },
    {
    "Symbol":"JAZZ",
    "Name":"Jazz Pharmaceuticals plc   (Ireland)"
    },
    {
    "Symbol":"JBGS",
    "Name":"JBG SMITH Properties Common Shares"
    },
    {
    "Symbol":"JBHT",
    "Name":"J.B. Hunt Transport Services Inc."
    },
    {
    "Symbol":"JBI",
    "Name":"Janus International Group Inc."
    },
    {
    "Symbol":"JBK",
    "Name":"Lehman ABS 3.50 3.50% Adjustable Corp Backed Tr Certs GS Cap I"
    },
    {
    "Symbol":"JBL",
    "Name":"Jabil Inc."
    },
    {
    "Symbol":"JBLU",
    "Name":"JetBlue Airways Corporation"
    },
    {
    "Symbol":"JBSS",
    "Name":"John B. Sanfilippo & Son Inc."
    },
    {
    "Symbol":"JBT",
    "Name":"John Bean Technologies Corporation"
    },
    {
    "Symbol":"JCE",
    "Name":"Nuveen Core Equity Alpha Fund Nuveen Core Equity Alpha Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"JCI",
    "Name":"Johnson Controls International plc Ordinary Share"
    },
    {
    "Symbol":"JCIC",
    "Name":"Jack Creek Investment Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"JCICU",
    "Name":"Jack Creek Investment Corp. Units"
    },
    {
    "Symbol":"JCICW",
    "Name":"Jack Creek Investment Corp. Warrants"
    },
    {
    "Symbol":"JCO",
    "Name":"Nuveen Credit Opportunities 2022 Target Term Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"JCS",
    "Name":"Communications Systems Inc."
    },
    {
    "Symbol":"JCTCF",
    "Name":"Jewett-Cameron Trading Company Common Shares"
    },
    {
    "Symbol":"JD",
    "Name":"JD.com Inc. American Depositary Shares"
    },
    {
    "Symbol":"JEF",
    "Name":"Jefferies Financial Group Inc."
    },
    {
    "Symbol":"JELD",
    "Name":"JELD-WEN Holding Inc."
    },
    {
    "Symbol":"JEMD",
    "Name":"Nuveen Emerging Markets Debt 2022 Target Term Fund Common Shares of Beneficial Interest $0.01 par value per share"
    },
    {
    "Symbol":"JEQ",
    "Name":"Aberdeen Japan Equity Fund Inc. "
    },
    {
    "Symbol":"JFIN",
    "Name":"Jiayin Group Inc. American Depositary Shares"
    },
    {
    "Symbol":"JFR",
    "Name":"Nuveen Floating Rate Income Fund"
    },
    {
    "Symbol":"JFU",
    "Name":"9F Inc. American Depositary Shares"
    },
    {
    "Symbol":"JG",
    "Name":"Aurora Mobile Limited American Depositary Shares"
    },
    {
    "Symbol":"JGH",
    "Name":"Nuveen Global High Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"JHAA",
    "Name":"Nuveen Corporate Income 2023 Target Term Fund"
    },
    {
    "Symbol":"JHG",
    "Name":"Janus Henderson Group plc Ordinary Shares"
    },
    {
    "Symbol":"JHI",
    "Name":"John Hancock Investors Trust"
    },
    {
    "Symbol":"JHS",
    "Name":"John Hancock Income Securities Trust"
    },
    {
    "Symbol":"JHX",
    "Name":"James Hardie Industries plc American Depositary Shares (Ireland)"
    },
    {
    "Symbol":"JILL",
    "Name":"J. Jill Inc."
    },
    {
    "Symbol":"JJSF",
    "Name":"J & J Snack Foods Corp."
    },
    {
    "Symbol":"JKHY",
    "Name":"Jack Henry & Associates Inc."
    },
    {
    "Symbol":"JKS",
    "Name":"JinkoSolar Holding Company Limited American Depositary Shares (each representing 4 Common Shares)"
    },
    {
    "Symbol":"JLL",
    "Name":"Jones Lang LaSalle Incorporated"
    },
    {
    "Symbol":"JLS",
    "Name":"Nuveen Mortgage and Income Fund"
    },
    {
    "Symbol":"JMAC",
    "Name":"Maxpro Capital Acquisition Corp. Class A"
    },
    {
    "Symbol":"JMACU",
    "Name":"Maxpro Capital Acquisition Corp. Units"
    },
    {
    "Symbol":"JMACW",
    "Name":"Maxpro Capital Acquisition Corp. Warrants"
    },
    {
    "Symbol":"JMIA",
    "Name":"Jumia Technologies AG American Depositary Shares each representing two Ordinary Shares"
    },
    {
    "Symbol":"JMM",
    "Name":"Nuveen Multi-Market Income Fund (MA)"
    },
    {
    "Symbol":"JNCE",
    "Name":"Jounce Therapeutics Inc."
    },
    {
    "Symbol":"JNJ",
    "Name":"Johnson & Johnson"
    },
    {
    "Symbol":"JNPR",
    "Name":"Juniper Networks Inc."
    },
    {
    "Symbol":"JOAN",
    "Name":"JOANN Inc."
    },
    {
    "Symbol":"JOB",
    "Name":"GEE Group Inc."
    },
    {
    "Symbol":"JOBS",
    "Name":"51job Inc. American Depositary Shares"
    },
    {
    "Symbol":"JOBY",
    "Name":"Joby Aviation Inc."
    },
    {
    "Symbol":"JOE",
    "Name":"St. Joe Company (The)"
    },
    {
    "Symbol":"JOF",
    "Name":"Japan Smaller Capitalization Fund Inc"
    },
    {
    "Symbol":"JOFF",
    "Name":"JOFF Fintech Acquisition Corp. Class A"
    },
    {
    "Symbol":"JOFFU",
    "Name":"JOFF Fintech Acquisition Corp. Unit"
    },
    {
    "Symbol":"JOFFW",
    "Name":"JOFF Fintech Acquisition Corp. Warrant"
    },
    {
    "Symbol":"JOUT",
    "Name":"Johnson Outdoors Inc. Class A"
    },
    {
    "Symbol":"JP",
    "Name":"Jupai Holdings Limited American Depositary Shares each representing six ordinary shares"
    },
    {
    "Symbol":"JPC",
    "Name":"Nuveen Preferred & Income Opportunities Fund"
    },
    {
    "Symbol":"JPI",
    "Name":"Nuveen Preferred and Income Term Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"JPM",
    "Name":"JP Morgan Chase & Co."
    },
    {
    "Symbol":"JPM^C",
    "Name":"J P Morgan Chase & Co Depositary Shares each representing a 1/400th interest in a share of 6.00% Non-Cumulative  Preferred Stock Series EE"
    },
    {
    "Symbol":"JPM^D",
    "Name":"J P Morgan Chase & Co Depositary Shares each representing a 1/400th  interest in a share of 5.75% Non-Cumulative  Preferred Stock Series DD"
    },
    {
    "Symbol":"JPM^J",
    "Name":"J P Morgan Chase & Co Depositary Shares each representing a 1/400th interest in a share of JPMorgan Chase & Co. 4.75% Non-Cumulative Preferred Stock Series GG"
    },
    {
    "Symbol":"JPM^K",
    "Name":"J P Morgan Chase & Co Depositary Shares each representing a 1/400th interest in a share of 4.55% Non-Cumulative Preferred Stock Series JJ"
    },
    {
    "Symbol":"JPM^L",
    "Name":"J P Morgan Chase & Co Depositary Shares each representing a 1/400th interest in a share of 4.625% Non-Cumulative Preferred Stock Series LL"
    },
    {
    "Symbol":"JPM^M",
    "Name":"J P Morgan Chase & Co Depositary Shares each representing a 1/400th interest in a share of 4.20% Non-Cumulative Preferred Stock Series MM"
    },
    {
    "Symbol":"JPS",
    "Name":"Nuveen Preferred & Income Securities Fund"
    },
    {
    "Symbol":"JPT",
    "Name":"Nuveen Preferred and Income 2022 Term Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"JQC",
    "Name":"Nuveen Credit Strategies Income Fund Shares of Beneficial Interest"
    },
    {
    "Symbol":"JRI",
    "Name":"Nuveen Real Asset Income and Growth Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"JRO",
    "Name":"Nuveen Floating Rate Income Opportuntiy Fund Shares of Beneficial Interest"
    },
    {
    "Symbol":"JRS",
    "Name":"Nuveen Real Estate Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"JRSH",
    "Name":"Jerash Holdings (US) Inc."
    },
    {
    "Symbol":"JRVR",
    "Name":"James River Group Holdings Ltd. Common Shares"
    },
    {
    "Symbol":"JSD",
    "Name":"Nuveen Short Duration Credit Opportunities Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"JSM",
    "Name":"Navient Corporation 6% Senior Notes due December 15 2043"
    },
    {
    "Symbol":"JSPR",
    "Name":"Jasper Therapeutics Inc."
    },
    {
    "Symbol":"JSPRW",
    "Name":"Japer Therapeutics Inc. Warrants"
    },
    {
    "Symbol":"JT",
    "Name":"Jianpu Technology Inc. American depositary shares"
    },
    {
    "Symbol":"JUGG",
    "Name":"Jaws Juggernaut Acquisition Corporation Class A Ordinary Share"
    },
    {
    "Symbol":"JUGGU",
    "Name":"Jaws Juggernaut Acquisition Corporation Unit"
    },
    {
    "Symbol":"JUGGW",
    "Name":"Jaws Juggernaut Acquisition Corporation Warrant"
    },
    {
    "Symbol":"JUN",
    "Name":"Juniper II Corp. Class A"
    },
    {
    "Symbol":"JUPW",
    "Name":"Jupiter Wellness Inc."
    },
    {
    "Symbol":"JUPWW",
    "Name":"Jupiter Wellness Inc. Warrant"
    },
    {
    "Symbol":"JVA",
    "Name":"Coffee Holding Co. Inc."
    },
    {
    "Symbol":"JW/A",
    "Name":"John Wiley & Sons Inc."
    },
    {
    "Symbol":"JW/B",
    "Name":"John Wiley & Sons Inc."
    },
    {
    "Symbol":"JWAC",
    "Name":"Jupiter Wellness Acquisition Corp. Class A"
    },
    {
    "Symbol":"JWACR",
    "Name":"Jupiter Wellness Acquisition Corp. Right"
    },
    {
    "Symbol":"JWEL",
    "Name":"Jowell Global Ltd. Ordinary Shares"
    },
    {
    "Symbol":"JWN",
    "Name":"Nordstrom Inc."
    },
    {
    "Symbol":"JWSM",
    "Name":"Jaws Mustang Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"JXN",
    "Name":"Jackson Financial Inc. Class A"
    },
    {
    "Symbol":"JYAC",
    "Name":"Jiya Acquisition Corp. Class A"
    },
    {
    "Symbol":"JYNT",
    "Name":"The Joint Corp."
    },
    {
    "Symbol":"JZXN",
    "Name":"Jiuzi Holdings Inc. Ordinary Shares"
    },
    {
    "Symbol":"K",
    "Name":"Kellogg Company"
    },
    {
    "Symbol":"KACL",
    "Name":"Kairous Acquisition Corp. Limited Ordinary Shares"
    },
    {
    "Symbol":"KACLR",
    "Name":"Kairous Acquisition Corp. Limited Rights"
    },
    {
    "Symbol":"KACLU",
    "Name":"Kairous Acquisition Corp. Limited Unit"
    },
    {
    "Symbol":"KACLW",
    "Name":"Kairous Acquisition Corp. Limited Warrants"
    },
    {
    "Symbol":"KAHC",
    "Name":"KKR Acquisition Holdings I Corp. Class A"
    },
    {
    "Symbol":"KAI",
    "Name":"Kadant Inc"
    },
    {
    "Symbol":"KAII",
    "Name":"Kismet Acquisition Two Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"KAIIU",
    "Name":"Kismet Acquisition Two Corp. Unit"
    },
    {
    "Symbol":"KAIIW",
    "Name":"Kismet Acquisition Two Corp. Warrant"
    },
    {
    "Symbol":"KAIR",
    "Name":"Kairos Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"KAIRU",
    "Name":"Kairos Acquisition Corp. Unit"
    },
    {
    "Symbol":"KAIRW",
    "Name":"Kairos Acquisition Corp. Warrant"
    },
    {
    "Symbol":"KALA",
    "Name":"Kala Pharmaceuticals Inc."
    },
    {
    "Symbol":"KALU",
    "Name":"Kaiser Aluminum Corporation"
    },
    {
    "Symbol":"KALV",
    "Name":"KalVista Pharmaceuticals Inc."
    },
    {
    "Symbol":"KAMN",
    "Name":"Kaman Corporation"
    },
    {
    "Symbol":"KAR",
    "Name":"KAR Auction Services Inc"
    },
    {
    "Symbol":"KARO",
    "Name":"Karooooo Ltd. Ordinary Shares"
    },
    {
    "Symbol":"KAVL",
    "Name":"Kaival Brands Innovations Group Inc."
    },
    {
    "Symbol":"KB",
    "Name":"KB Financial Group Inc"
    },
    {
    "Symbol":"KBAL",
    "Name":"Kimball International Inc. Class B"
    },
    {
    "Symbol":"KBH",
    "Name":"KB Home"
    },
    {
    "Symbol":"KBNT",
    "Name":"Kubient Inc."
    },
    {
    "Symbol":"KBNTW",
    "Name":"Kubient Inc. Warrant"
    },
    {
    "Symbol":"KBR",
    "Name":"KBR Inc."
    },
    {
    "Symbol":"KC",
    "Name":"Kingsoft Cloud Holdings Limited American Depositary Shares"
    },
    {
    "Symbol":"KCGI",
    "Name":"Kensington Capital Acquisition Corp. V Class A Ordinary Shares"
    },
    {
    "Symbol":"KD",
    "Name":"Kyndryl Holdings Inc."
    },
    {
    "Symbol":"KDNY",
    "Name":"Chinook Therapeutics Inc."
    },
    {
    "Symbol":"KDP",
    "Name":"Keurig Dr Pepper Inc."
    },
    {
    "Symbol":"KE",
    "Name":"Kimball Electronics Inc."
    },
    {
    "Symbol":"KELYA",
    "Name":"Kelly Services Inc. Class A"
    },
    {
    "Symbol":"KELYB",
    "Name":"Kelly Services Inc. Class B"
    },
    {
    "Symbol":"KEN",
    "Name":"Kenon Holdings Ltd. Ordinary Shares"
    },
    {
    "Symbol":"KEP",
    "Name":"Korea Electric Power Corporation"
    },
    {
    "Symbol":"KEQU",
    "Name":"Kewaunee Scientific Corporation"
    },
    {
    "Symbol":"KERN",
    "Name":"Akerna Corp."
    },
    {
    "Symbol":"KERNW",
    "Name":"Akerna Corp Warrant"
    },
    {
    "Symbol":"KEX",
    "Name":"Kirby Corporation"
    },
    {
    "Symbol":"KEY",
    "Name":"KeyCorp"
    },
    {
    "Symbol":"KEY^I",
    "Name":"KeyCorp Depositary Shares Each Representing a 1/40th Ownership Interest in a Share of Fixed-to-Floating Rate Perpetual Non-Cumulative Preferred Stock Series E"
    },
    {
    "Symbol":"KEY^J",
    "Name":"KeyCorp Depositary Shares each representing a 1/40th ownership interest in a share of Fixed Rate Perpetual Non-Cumulative Preferred Stock Series F"
    },
    {
    "Symbol":"KEY^K",
    "Name":"KeyCorp Depositary Shares each representing a 1/40th ownership interest in a share of Fixed Rate Perpetual Non-Cumulative Preferred Stock Series G"
    },
    {
    "Symbol":"KEYS",
    "Name":"Keysight Technologies Inc."
    },
    {
    "Symbol":"KF",
    "Name":"Korea Fund Inc. (The) New"
    },
    {
    "Symbol":"KFFB",
    "Name":"Kentucky First Federal Bancorp"
    },
    {
    "Symbol":"KFRC",
    "Name":"Kforce Inc."
    },
    {
    "Symbol":"KFS",
    "Name":"Kingsway Financial Services Inc.   (DE)"
    },
    {
    "Symbol":"KFY",
    "Name":"Korn Ferry"
    },
    {
    "Symbol":"KGC",
    "Name":"Kinross Gold Corporation"
    },
    {
    "Symbol":"KHC",
    "Name":"The Kraft Heinz Company"
    },
    {
    "Symbol":"KIDS",
    "Name":"OrthoPediatrics Corp."
    },
    {
    "Symbol":"KIII",
    "Name":"Kismet Acquisition Three Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"KIIIU",
    "Name":"Kismet Acquisition Three Corp. Unit"
    },
    {
    "Symbol":"KIIIW",
    "Name":"Kismet Acquisition Three Corp. Warrant"
    },
    {
    "Symbol":"KIM",
    "Name":"Kimco Realty Corporation"
    },
    {
    "Symbol":"KIM^L",
    "Name":"Kimco Realty Corporation Class L Depositary Shares each of which represents a one-one thousandth fractional interest in a share of 5.125% Class L Cumulative Redeemable Preferred Stock liquidation preference $25000.00 per share"
    },
    {
    "Symbol":"KIM^M",
    "Name":"Kimco Realty Corporation Class M Depositary Shares each of which represents a one-one thousandth fractional interest in a share of 5.25% Class M Cumulative Redeemable Preferred Stock liquidation preference $25000.00 per share"
    },
    {
    "Symbol":"KIND",
    "Name":"Nextdoor Holdings Inc. Class A"
    },
    {
    "Symbol":"KINS",
    "Name":"Kingstone Companies Inc."
    },
    {
    "Symbol":"KINZ",
    "Name":"KINS Technology Group Inc. Class A"
    },
    {
    "Symbol":"KINZU",
    "Name":"KINS Technology Group Inc. Unit"
    },
    {
    "Symbol":"KINZW",
    "Name":"KINS Technology Group Inc. Warrant"
    },
    {
    "Symbol":"KIO",
    "Name":"KKR Income Opportunities Fund Common Shares"
    },
    {
    "Symbol":"KIQ",
    "Name":"Kelso Technologies Inc Ordinary Shares"
    },
    {
    "Symbol":"KIRK",
    "Name":"Kirkland's Inc. COMMONSTOCK"
    },
    {
    "Symbol":"KKR",
    "Name":"KKR & Co. Inc."
    },
    {
    "Symbol":"KKR^C",
    "Name":"KKR & Co. Inc. 6.00% Series C Mandatory Convertible Preferred Stock"
    },
    {
    "Symbol":"KKRS",
    "Name":"KKR Group Finance Co. IX LLC 4.625% Subordinated Notes due 2061"
    },
    {
    "Symbol":"KL",
    "Name":"Kirkland Lake Gold Ltd. Common Shares"
    },
    {
    "Symbol":"KLAC",
    "Name":"KLA Corporation"
    },
    {
    "Symbol":"KLAQ",
    "Name":"KL Acquisition Corp Class A"
    },
    {
    "Symbol":"KLAQU",
    "Name":"KL Acquisition Corp Unit"
    },
    {
    "Symbol":"KLAQW",
    "Name":"KL Acquisition Corp Warrant"
    },
    {
    "Symbol":"KLDO",
    "Name":"Kaleido Biosciences Inc."
    },
    {
    "Symbol":"KLIC",
    "Name":"Kulicke and Soffa Industries Inc."
    },
    {
    "Symbol":"KLR",
    "Name":"Kaleyra Inc."
    },
    {
    "Symbol":"KLTR",
    "Name":"Kaltura Inc."
    },
    {
    "Symbol":"KLXE",
    "Name":"KLX Energy Services Holdings Inc."
    },
    {
    "Symbol":"KMB",
    "Name":"Kimberly-Clark Corporation"
    },
    {
    "Symbol":"KMDA",
    "Name":"Kamada Ltd. Ordinary Shares"
    },
    {
    "Symbol":"KMF",
    "Name":"Kayne Anderson NextGen Energy & Infrastructure Inc."
    },
    {
    "Symbol":"KMI",
    "Name":"Kinder Morgan Inc."
    },
    {
    "Symbol":"KMPH",
    "Name":"KemPharm Inc."
    },
    {
    "Symbol":"KMPR",
    "Name":"Kemper Corporation"
    },
    {
    "Symbol":"KMT",
    "Name":"Kennametal Inc."
    },
    {
    "Symbol":"KMX",
    "Name":"CarMax Inc"
    },
    {
    "Symbol":"KN",
    "Name":"Knowles Corporation"
    },
    {
    "Symbol":"KNBE",
    "Name":"KnowBe4 Inc. Class A"
    },
    {
    "Symbol":"KNDI",
    "Name":"Kandi Technologies Group Inc"
    },
    {
    "Symbol":"KNOP",
    "Name":"KNOT Offshore Partners LP Common Units representing Limited Partner Interests"
    },
    {
    "Symbol":"KNSA",
    "Name":"Kiniksa Pharmaceuticals Ltd. Class A"
    },
    {
    "Symbol":"KNSL",
    "Name":"Kinsale Capital Group Inc."
    },
    {
    "Symbol":"KNTE",
    "Name":"Kinnate Biopharma Inc."
    },
    {
    "Symbol":"KNX",
    "Name":"Knight-Swift Transportation Holdings Inc."
    },
    {
    "Symbol":"KO",
    "Name":"Coca-Cola Company (The)"
    },
    {
    "Symbol":"KOD",
    "Name":"Kodiak Sciences Inc"
    },
    {
    "Symbol":"KODK",
    "Name":"Eastman Kodak Company Common New"
    },
    {
    "Symbol":"KOF",
    "Name":"Coca Cola Femsa S.A.B. de C.V.  American Depositary Shares each representing 10 Units (each Unit consists of 3 Series B Shares and 5 Series L Shares)"
    },
    {
    "Symbol":"KOP",
    "Name":"Koppers Holdings Inc. Koppers Holdings Inc."
    },
    {
    "Symbol":"KOPN",
    "Name":"Kopin Corporation"
    },
    {
    "Symbol":"KORE",
    "Name":"KORE Group Holdings Inc."
    },
    {
    "Symbol":"KOS",
    "Name":"Kosmos Energy Ltd. Common Shares (DE)"
    },
    {
    "Symbol":"KOSS",
    "Name":"Koss Corporation"
    },
    {
    "Symbol":"KPLT",
    "Name":"Katapult Holdings Inc."
    },
    {
    "Symbol":"KPLTW",
    "Name":"Katapult Holdings Inc. Warrant"
    },
    {
    "Symbol":"KPRX",
    "Name":"Kiora Pharmaceuticals Inc. "
    },
    {
    "Symbol":"KPTI",
    "Name":"Karyopharm Therapeutics Inc."
    },
    {
    "Symbol":"KR",
    "Name":"Kroger Company (The)"
    },
    {
    "Symbol":"KRA",
    "Name":"Kraton Corporation"
    },
    {
    "Symbol":"KRBP",
    "Name":"Kiromic BioPharma Inc."
    },
    {
    "Symbol":"KRC",
    "Name":"Kilroy Realty Corporation"
    },
    {
    "Symbol":"KREF",
    "Name":"KKR Real Estate Finance Trust Inc."
    },
    {
    "Symbol":"KREF^A",
    "Name":"KKR Real Estate Finance Trust Inc. 6.50% Series A Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"KRG",
    "Name":"Kite Realty Group Trust"
    },
    {
    "Symbol":"KRKR",
    "Name":"36Kr Holdings Inc. American Depositary Shares"
    },
    {
    "Symbol":"KRMD",
    "Name":"Repro Med Systems Inc."
    },
    {
    "Symbol":"KRNL",
    "Name":"Kernel Group Holdings Inc. Class A Ordinary Shares"
    },
    {
    "Symbol":"KRNLW",
    "Name":"Kernel Group Holdings Inc. Warrants"
    },
    {
    "Symbol":"KRNT",
    "Name":"Kornit Digital Ltd. Ordinary Shares"
    },
    {
    "Symbol":"KRNY",
    "Name":"Kearny Financial Corp"
    },
    {
    "Symbol":"KRO",
    "Name":"Kronos Worldwide Inc"
    },
    {
    "Symbol":"KRON",
    "Name":"Kronos Bio Inc."
    },
    {
    "Symbol":"KROS",
    "Name":"Keros Therapeutics Inc."
    },
    {
    "Symbol":"KRP",
    "Name":"Kimbell Royalty Partners Common Units Representing Limited Partner Interests"
    },
    {
    "Symbol":"KRT",
    "Name":"Karat Packaging Inc."
    },
    {
    "Symbol":"KRTX",
    "Name":"Karuna Therapeutics Inc."
    },
    {
    "Symbol":"KRUS",
    "Name":"Kura Sushi USA Inc. Class A"
    },
    {
    "Symbol":"KRYS",
    "Name":"Krystal Biotech Inc."
    },
    {
    "Symbol":"KSI",
    "Name":"Kadem Sustainable Impact Corporation Class A"
    },
    {
    "Symbol":"KSICW",
    "Name":"Kadem Sustainable Impact Corporation Warrant"
    },
    {
    "Symbol":"KSM",
    "Name":"DWS Strategic Municipal Income Trust"
    },
    {
    "Symbol":"KSPN",
    "Name":"Kaspien Holdings Inc."
    },
    {
    "Symbol":"KSS",
    "Name":"Kohl's Corporation"
    },
    {
    "Symbol":"KT",
    "Name":"KT Corporation"
    },
    {
    "Symbol":"KTB",
    "Name":"Kontoor Brands Inc."
    },
    {
    "Symbol":"KTCC",
    "Name":"Key Tronic Corporation"
    },
    {
    "Symbol":"KTF",
    "Name":"DWS Municipal Income Trust"
    },
    {
    "Symbol":"KTH",
    "Name":"Structures Products Cp 8% CorTS Issued by Peco Energy Cap Tr II Preferred Stock"
    },
    {
    "Symbol":"KTN",
    "Name":"Structured Products Corp 8.205% CorTS 8.205% Corporate Backed Trust Securities (CorTS)"
    },
    {
    "Symbol":"KTOS",
    "Name":"Kratos Defense & Security Solutions Inc."
    },
    {
    "Symbol":"KTRA",
    "Name":"Kintara Therapeutics Inc."
    },
    {
    "Symbol":"KTTA",
    "Name":"Pasithea Therapeutics Corp."
    },
    {
    "Symbol":"KTTAW",
    "Name":"Pasithea Therapeutics Corp. Warrant"
    },
    {
    "Symbol":"KUKE",
    "Name":"Kuke Music Holding Limited American Depositary Shares each representing one Ordinary Share"
    },
    {
    "Symbol":"KULR",
    "Name":"KULR Technology Group Inc."
    },
    {
    "Symbol":"KURA",
    "Name":"Kura Oncology Inc."
    },
    {
    "Symbol":"KVHI",
    "Name":"KVH Industries Inc."
    },
    {
    "Symbol":"KVSA",
    "Name":"Khosla Ventures Acquisition Co. Class A"
    },
    {
    "Symbol":"KVSC",
    "Name":"Khosla Ventures Acquisition Co. III Class A"
    },
    {
    "Symbol":"KW",
    "Name":"Kennedy-Wilson Holdings Inc."
    },
    {
    "Symbol":"KWAC",
    "Name":"Kingswood Acquisition Corp. Class A"
    },
    {
    "Symbol":"KWR",
    "Name":"Quaker Houghton"
    },
    {
    "Symbol":"KXIN",
    "Name":"Kaixin Auto Holdings Ordinary Shares"
    },
    {
    "Symbol":"KYCHU",
    "Name":"Keyarch Acquisition Corporation Unit"
    },
    {
    "Symbol":"KYMR",
    "Name":"Kymera Therapeutics Inc."
    },
    {
    "Symbol":"KYN",
    "Name":"Kayne Anderson Energy Infrastructure Fund Inc."
    },
    {
    "Symbol":"KZIA",
    "Name":"Kazia Therapeutics Limited American Depositary Shares"
    },
    {
    "Symbol":"KZR",
    "Name":"Kezar Life Sciences Inc."
    },
    {
    "Symbol":"L",
    "Name":"Loews Corporation"
    },
    {
    "Symbol":"LAAA",
    "Name":"Lakeshore Acquisition I Corp. Ordinary Shares"
    },
    {
    "Symbol":"LABP",
    "Name":"Landos Biopharma Inc."
    },
    {
    "Symbol":"LAC",
    "Name":"Lithium Americas Corp. Common Shares"
    },
    {
    "Symbol":"LAD",
    "Name":"Lithia Motors Inc."
    },
    {
    "Symbol":"LADR",
    "Name":"Ladder Capital Corp Class A"
    },
    {
    "Symbol":"LAIX",
    "Name":"LAIX Inc. American Depositary Shares each  representing one Class A Ordinary Share"
    },
    {
    "Symbol":"LAKE",
    "Name":"Lakeland Industries Inc."
    },
    {
    "Symbol":"LAMR",
    "Name":"Lamar Advertising Company Class A"
    },
    {
    "Symbol":"LANC",
    "Name":"Lancaster Colony Corporation"
    },
    {
    "Symbol":"LAND",
    "Name":"Gladstone Land Corporation"
    },
    {
    "Symbol":"LANDM",
    "Name":"Gladstone Land Corporation 5.00% Series D Cumulative Term Preferred Stock"
    },
    {
    "Symbol":"LANDO",
    "Name":"Gladstone Land Corporation 6.00% Series B Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"LARK",
    "Name":"Landmark Bancorp Inc."
    },
    {
    "Symbol":"LASR",
    "Name":"nLIGHT Inc."
    },
    {
    "Symbol":"LATGU",
    "Name":"LatAmGrowth SPAC Unit"
    },
    {
    "Symbol":"LAUR",
    "Name":"Laureate Education Inc."
    },
    {
    "Symbol":"LAW",
    "Name":"CS Disco Inc."
    },
    {
    "Symbol":"LAWS",
    "Name":"Lawson Products Inc."
    },
    {
    "Symbol":"LAX",
    "Name":"8i Acquisition 2 Corp. Ordinary Shares"
    },
    {
    "Symbol":"LAXXR",
    "Name":"8i Acquisition 2 Corp. Rights"
    },
    {
    "Symbol":"LAXXU",
    "Name":"8i Acquisition 2 Corp. Unit"
    },
    {
    "Symbol":"LAXXW",
    "Name":"8i Acquisition 2 Corp. Warrant"
    },
    {
    "Symbol":"LAZ",
    "Name":"Lazard LTD. Lazard LTD. Class A"
    },
    {
    "Symbol":"LAZR",
    "Name":"Luminar Technologies Inc.  Class A"
    },
    {
    "Symbol":"LAZY",
    "Name":"Lazydays Holdings Inc."
    },
    {
    "Symbol":"LBAI",
    "Name":"Lakeland Bancorp Inc."
    },
    {
    "Symbol":"LBC",
    "Name":"Luther Burbank Corporation"
    },
    {
    "Symbol":"LBPH",
    "Name":"Longboard Pharmaceuticals Inc."
    },
    {
    "Symbol":"LBPS",
    "Name":"4D pharma plc American Depositary Shares"
    },
    {
    "Symbol":"LBPSW",
    "Name":"4D pharma plc Warrant"
    },
    {
    "Symbol":"LBRDA",
    "Name":"Liberty Broadband Corporation Class A"
    },
    {
    "Symbol":"LBRDK",
    "Name":"Liberty Broadband Corporation Class C"
    },
    {
    "Symbol":"LBRDP",
    "Name":"Liberty Broadband Corporation Series A Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"LBRT",
    "Name":"Liberty Oilfield Services Inc. Class A"
    },
    {
    "Symbol":"LBTYA",
    "Name":"Liberty Global plc Class A Ordinary Shares"
    },
    {
    "Symbol":"LBTYB",
    "Name":"Liberty Global plc Class B Ordinary Shares"
    },
    {
    "Symbol":"LBTYK",
    "Name":"Liberty Global plc Class C Ordinary Shares"
    },
    {
    "Symbol":"LC",
    "Name":"LendingClub Corporation"
    },
    {
    "Symbol":"LCA",
    "Name":"Landcadia Holdings IV Inc. Class A"
    },
    {
    "Symbol":"LCAA",
    "Name":"L Catterton Asia Acquisition Corp Class A Ordinary Shares"
    },
    {
    "Symbol":"LCAAU",
    "Name":"L Catterton Asia Acquisition Corp Units"
    },
    {
    "Symbol":"LCAAW",
    "Name":"L Catterton Asia Acquisition Corp Warrant"
    },
    {
    "Symbol":"LCAHU",
    "Name":"Landcadia Holdings IV Inc. Units"
    },
    {
    "Symbol":"LCAHW",
    "Name":"Landcadia Holdings IV Inc. Warrant"
    },
    {
    "Symbol":"LCAP",
    "Name":"Lionheart Acquisition Corp. II Class A"
    },
    {
    "Symbol":"LCAPU",
    "Name":"Lionheart Acquisition Corp. II Unit"
    },
    {
    "Symbol":"LCAPW",
    "Name":"Lionheart Acquisition Corp. II Warrant"
    },
    {
    "Symbol":"LCI",
    "Name":"Lannett Co Inc"
    },
    {
    "Symbol":"LCID",
    "Name":"Lucid Group Inc."
    },
    {
    "Symbol":"LCII",
    "Name":"LCI Industries"
    },
    {
    "Symbol":"LCNB",
    "Name":"LCNB Corporation"
    },
    {
    "Symbol":"LCTX",
    "Name":"Lineage Cell Therapeutics Inc."
    },
    {
    "Symbol":"LCUT",
    "Name":"Lifetime Brands Inc."
    },
    {
    "Symbol":"LCW",
    "Name":"Learn CW Investment Corporation Class A Ordinary Shares"
    },
    {
    "Symbol":"LDHA",
    "Name":"LDH Growth Corp I Class A Ordinary Shares"
    },
    {
    "Symbol":"LDHAU",
    "Name":"LDH Growth Corp I Units"
    },
    {
    "Symbol":"LDHAW",
    "Name":"LDH Growth Corp I Warrant"
    },
    {
    "Symbol":"LDI",
    "Name":"loanDepot Inc. Class A"
    },
    {
    "Symbol":"LDOS",
    "Name":"Leidos Holdings Inc."
    },
    {
    "Symbol":"LDP",
    "Name":"Cohen & Steers Limited Duration Preferred and Income Fund Inc."
    },
    {
    "Symbol":"LE",
    "Name":"Lands' End Inc."
    },
    {
    "Symbol":"LEA",
    "Name":"Lear Corporation"
    },
    {
    "Symbol":"LEAP",
    "Name":"Ribbit LEAP Ltd. Class A Ordinary Shares"
    },
    {
    "Symbol":"LECO",
    "Name":"Lincoln Electric Holdings Inc. Common Shares"
    },
    {
    "Symbol":"LEDS",
    "Name":"SemiLEDS Corporation"
    },
    {
    "Symbol":"LEE",
    "Name":"Lee Enterprises Incorporated"
    },
    {
    "Symbol":"LEG",
    "Name":"Leggett & Platt Incorporated"
    },
    {
    "Symbol":"LEGA",
    "Name":"Lead Edge Growth Opportunities Ltd Class A Ordinary Shares"
    },
    {
    "Symbol":"LEGAU",
    "Name":"Lead Edge Growth Opportunities Ltd Units"
    },
    {
    "Symbol":"LEGAW",
    "Name":"Lead Edge Growth Opportunities Ltd Warrant"
    },
    {
    "Symbol":"LEGH",
    "Name":"Legacy Housing Corporation   (TX)"
    },
    {
    "Symbol":"LEGN",
    "Name":"Legend Biotech Corporation American Depositary Shares"
    },
    {
    "Symbol":"LEJU",
    "Name":"Leju Holdings Limited American Depositary Shares each representing one Ordinary share"
    },
    {
    "Symbol":"LEN",
    "Name":"Lennar Corporation Class A"
    },
    {
    "Symbol":"LEO",
    "Name":"BNY Mellon Strategic Municipals Inc."
    },
    {
    "Symbol":"LESL",
    "Name":"Leslie's Inc."
    },
    {
    "Symbol":"LEU",
    "Name":"Centrus Energy Corp. Class A"
    },
    {
    "Symbol":"LEV",
    "Name":"The Lion Electric Company Common Shares"
    },
    {
    "Symbol":"LEVI",
    "Name":"Levi Strauss & Co Class A"
    },
    {
    "Symbol":"LEVL",
    "Name":"Level One Bancorp Inc."
    },
    {
    "Symbol":"LEVLP",
    "Name":"Level One Bancorp Inc. Depositary Shares Each Representing a 1/100th Interest in a Share of 7.50% Non-Cumulative Perpetual Preferred Stock Series B"
    },
    {
    "Symbol":"LEXX",
    "Name":"Lexaria Bioscience Corp."
    },
    {
    "Symbol":"LEXXW",
    "Name":"Lexaria Bioscience Corp. Warrant"
    },
    {
    "Symbol":"LFAC",
    "Name":"LF Capital Acquisition Corp. II Class A"
    },
    {
    "Symbol":"LFACU",
    "Name":"LF Capital Acquisition Corp. II Units"
    },
    {
    "Symbol":"LFACW",
    "Name":"LF Capital Acquisition Corp. II Warrants"
    },
    {
    "Symbol":"LFC",
    "Name":"China Life Insurance Company Limited American Depositary Shares"
    },
    {
    "Symbol":"LFG",
    "Name":"Archaea Energy Inc. Class A"
    },
    {
    "Symbol":"LFMD",
    "Name":"LifeMD Inc."
    },
    {
    "Symbol":"LFMDP",
    "Name":"LifeMD Inc. 8.875% Series A Cumulative Perpetual Preferred Stock"
    },
    {
    "Symbol":"LFST",
    "Name":"LifeStance Health Group Inc."
    },
    {
    "Symbol":"LFT",
    "Name":"Lument Finance Trust Inc."
    },
    {
    "Symbol":"LFT^A",
    "Name":"Lument Finance Trust Inc. 7.875% Series A Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"LFTR",
    "Name":"Lefteris Acquisition Corp. Class A"
    },
    {
    "Symbol":"LFTRU",
    "Name":"Lefteris Acquisition Corp. Unit"
    },
    {
    "Symbol":"LFTRW",
    "Name":"Lefteris Acquisition Corp. Warrant"
    },
    {
    "Symbol":"LFUS",
    "Name":"Littelfuse Inc."
    },
    {
    "Symbol":"LFVN",
    "Name":"Lifevantage Corporation   (Delaware)"
    },
    {
    "Symbol":"LGAC",
    "Name":"Lazard Growth Acquisition Corp. I Ordinary Shares"
    },
    {
    "Symbol":"LGACU",
    "Name":"Lazard Growth Acquisition Corp. I Units"
    },
    {
    "Symbol":"LGACW",
    "Name":"Lazard Growth Acquisition Corp. I Warrants"
    },
    {
    "Symbol":"LGHL",
    "Name":"Lion Group Holding Ltd. American Depositary Share"
    },
    {
    "Symbol":"LGHLW",
    "Name":"Lion Group Holding Ltd. Warrant"
    },
    {
    "Symbol":"LGI",
    "Name":"Lazard Global Total Return and Income Fund"
    },
    {
    "Symbol":"LGIH",
    "Name":"LGI Homes Inc."
    },
    {
    "Symbol":"LGL",
    "Name":"LGL Group Inc. (The)"
    },
    {
    "Symbol":"LGND",
    "Name":"Ligand Pharmaceuticals Incorporated"
    },
    {
    "Symbol":"LGO",
    "Name":"Largo Inc. Common Shares"
    },
    {
    "Symbol":"LGST",
    "Name":"Semper Paratus Acquisition Corporation Class A Ordinary Shares"
    },
    {
    "Symbol":"LGSTU",
    "Name":"Semper Paratus Acquisition Corporation Unit"
    },
    {
    "Symbol":"LGSTW",
    "Name":"Semper Paratus Acquisition Corporation Warrant"
    },
    {
    "Symbol":"LGTO",
    "Name":"Legato Merger Corp. II"
    },
    {
    "Symbol":"LGTOU",
    "Name":"Legato Merger Corp. II Unit"
    },
    {
    "Symbol":"LGTOW",
    "Name":"Legato Merger Corp. II Warrants"
    },
    {
    "Symbol":"LGV",
    "Name":"Longview Acquisition Corp. II Class A"
    },
    {
    "Symbol":"LGVC",
    "Name":"LAMF Global Ventures Corp. I Class A Ordinary Shares"
    },
    {
    "Symbol":"LGVCU",
    "Name":"LAMF Global Ventures Corp. I Unit"
    },
    {
    "Symbol":"LGVCW",
    "Name":"LAMF Global Ventures Corp. I Warrant"
    },
    {
    "Symbol":"LGVN",
    "Name":"Longeveron Inc. Class A"
    },
    {
    "Symbol":"LH",
    "Name":"Laboratory Corporation of America Holdings"
    },
    {
    "Symbol":"LHAA",
    "Name":"Lerer Hippeau Acquisition Corp. Class A"
    },
    {
    "Symbol":"LHC",
    "Name":"Leo Holdings Corp. II Class A Ordinary Shares"
    },
    {
    "Symbol":"LHCG",
    "Name":"LHC Group"
    },
    {
    "Symbol":"LHDX",
    "Name":"Lucira Health Inc."
    },
    {
    "Symbol":"LHX",
    "Name":"L3Harris Technologies Inc."
    },
    {
    "Symbol":"LI",
    "Name":"Li Auto Inc. American Depositary Shares"
    },
    {
    "Symbol":"LIAN",
    "Name":"LianBio American Depositary Shares"
    },
    {
    "Symbol":"LIBY",
    "Name":"Liberty Resources Acquisition Corp. Class A"
    },
    {
    "Symbol":"LIBYW",
    "Name":"Liberty Resources Acquisition Corp. Warrant"
    },
    {
    "Symbol":"LICY",
    "Name":"Li-Cycle Holdings Corp. Common Shares"
    },
    {
    "Symbol":"LIDR",
    "Name":"AEye Inc. Class A"
    },
    {
    "Symbol":"LIDRW",
    "Name":"AEye Inc. Warrant"
    },
    {
    "Symbol":"LIFE",
    "Name":"aTyr Pharma Inc."
    },
    {
    "Symbol":"LII",
    "Name":"Lennox International Inc."
    },
    {
    "Symbol":"LILA",
    "Name":"Liberty Latin America Ltd. Class A"
    },
    {
    "Symbol":"LILAK",
    "Name":"Liberty Latin America Ltd. Class C"
    },
    {
    "Symbol":"LILM",
    "Name":"Lilium N.V. Class A Ordinary Shares"
    },
    {
    "Symbol":"LILMW",
    "Name":"Lilium N.V. Warrants"
    },
    {
    "Symbol":"LIN",
    "Name":"Linde plc Ordinary Share"
    },
    {
    "Symbol":"LINC",
    "Name":"Lincoln Educational Services Corporation"
    },
    {
    "Symbol":"LIND",
    "Name":"Lindblad Expeditions Holdings Inc."
    },
    {
    "Symbol":"LINK",
    "Name":"Interlink Electronics Inc."
    },
    {
    "Symbol":"LION",
    "Name":"Lionheart III Corp Class A"
    },
    {
    "Symbol":"LIONU",
    "Name":"Lionheart III Corp Unit"
    },
    {
    "Symbol":"LIONW",
    "Name":"Lionheart III Corp Warrant"
    },
    {
    "Symbol":"LIQT",
    "Name":"LiqTech International Inc."
    },
    {
    "Symbol":"LITB",
    "Name":"LightInTheBox Holding Co. Ltd. American Depositary Shares each representing 2 ordinary shares"
    },
    {
    "Symbol":"LITE",
    "Name":"Lumentum Holdings Inc."
    },
    {
    "Symbol":"LITM",
    "Name":"Snow Lake Resources Ltd. Common Shares"
    },
    {
    "Symbol":"LITT",
    "Name":"Logistics Innovation Technologies Corp. Class A"
    },
    {
    "Symbol":"LITTU",
    "Name":"Logistics Innovation Technologies Corp. Units"
    },
    {
    "Symbol":"LITTW",
    "Name":"Logistics Innovation Technologies Corp. Warrant"
    },
    {
    "Symbol":"LIVE",
    "Name":"Live Ventures Incorporated"
    },
    {
    "Symbol":"LIVN",
    "Name":"LivaNova PLC Ordinary Shares"
    },
    {
    "Symbol":"LIXT",
    "Name":"Lixte Biotechnology Holdings Inc."
    },
    {
    "Symbol":"LIXTW",
    "Name":"Lixte Biotechnology Holdings Inc. Warrants"
    },
    {
    "Symbol":"LIZI",
    "Name":"LIZHI INC. American Depositary Shares"
    },
    {
    "Symbol":"LJAQ",
    "Name":"LightJump Acquisition Corporation"
    },
    {
    "Symbol":"LJAQU",
    "Name":"LightJump Acquisition Corporation Unit"
    },
    {
    "Symbol":"LJAQW",
    "Name":"LightJump Acquisition Corporation Warrant"
    },
    {
    "Symbol":"LJPC",
    "Name":"La Jolla Pharmaceutical Company   (DE)"
    },
    {
    "Symbol":"LKCO",
    "Name":"Luokung Technology Corp Ordinary Shares"
    },
    {
    "Symbol":"LKFN",
    "Name":"Lakeland Financial Corporation"
    },
    {
    "Symbol":"LKQ",
    "Name":"LKQ Corporation"
    },
    {
    "Symbol":"LL",
    "Name":"LL Flooring Holdings Inc."
    },
    {
    "Symbol":"LLL",
    "Name":"JX Luxventure Limited"
    },
    {
    "Symbol":"LLNW",
    "Name":"Limelight Networks Inc."
    },
    {
    "Symbol":"LLY",
    "Name":"Eli Lilly and Company"
    },
    {
    "Symbol":"LMACA",
    "Name":"Liberty Media Acquisition Corporation Series A"
    },
    {
    "Symbol":"LMACU",
    "Name":"Liberty Media Acquisition Corporation Unit"
    },
    {
    "Symbol":"LMACW",
    "Name":"Liberty Media Acquisition Corporation Warrants"
    },
    {
    "Symbol":"LMAO",
    "Name":"LMF Acquisition Opportunities Inc. Class A"
    },
    {
    "Symbol":"LMAOU",
    "Name":"LMF Acquisition Opportunities Inc. Unit"
    },
    {
    "Symbol":"LMAOW",
    "Name":"LMF Acquisition Opportunities Inc. Warrant"
    },
    {
    "Symbol":"LMAT",
    "Name":"LeMaitre Vascular Inc."
    },
    {
    "Symbol":"LMB",
    "Name":"Limbach Holdings Inc."
    },
    {
    "Symbol":"LMDX",
    "Name":"LumiraDx Limited Common Shares"
    },
    {
    "Symbol":"LMDXW",
    "Name":"LumiraDx Limited Warrant"
    },
    {
    "Symbol":"LMFA",
    "Name":"LM Funding America Inc."
    },
    {
    "Symbol":"LMND",
    "Name":"Lemonade Inc."
    },
    {
    "Symbol":"LMNL",
    "Name":"Liminal BioSciences Inc. Common Shares"
    },
    {
    "Symbol":"LMNR",
    "Name":"Limoneira Co"
    },
    {
    "Symbol":"LMPX",
    "Name":"LMP Automotive Holdings Inc."
    },
    {
    "Symbol":"LMST",
    "Name":"Limestone Bancorp Inc."
    },
    {
    "Symbol":"LMT",
    "Name":"Lockheed Martin Corporation"
    },
    {
    "Symbol":"LNC",
    "Name":"Lincoln National Corporation"
    },
    {
    "Symbol":"LND",
    "Name":"Brasilagro Brazilian Agric Real Estate Co Sponsored ADR (Brazil)"
    },
    {
    "Symbol":"LNDC",
    "Name":"Landec Corporation   (DE)"
    },
    {
    "Symbol":"LNFA",
    "Name":"L&amp;F Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"LNG",
    "Name":"Cheniere Energy Inc."
    },
    {
    "Symbol":"LNN",
    "Name":"Lindsay Corporation"
    },
    {
    "Symbol":"LNSR",
    "Name":"LENSAR Inc."
    },
    {
    "Symbol":"LNT",
    "Name":"Alliant Energy Corporation"
    },
    {
    "Symbol":"LNTH",
    "Name":"Lantheus Holdings Inc."
    },
    {
    "Symbol":"LOAN",
    "Name":"Manhattan Bridge Capital Inc"
    },
    {
    "Symbol":"LOB",
    "Name":"Live Oak Bancshares Inc."
    },
    {
    "Symbol":"LOCC",
    "Name":"Live Oak Crestview Climate Acquisition Corp. Class A"
    },
    {
    "Symbol":"LOCL",
    "Name":"Local Bounti Corporation"
    },
    {
    "Symbol":"LOCO",
    "Name":"El Pollo Loco Holdings Inc."
    },
    {
    "Symbol":"LODE",
    "Name":"Comstock Mining Inc."
    },
    {
    "Symbol":"LOGC",
    "Name":"LogicBio Therapeutics Inc."
    },
    {
    "Symbol":"LOGI",
    "Name":"Logitech International S.A. Ordinary Shares"
    },
    {
    "Symbol":"LOKM",
    "Name":"Live Oak Mobility Acquisition Corp. Class A"
    },
    {
    "Symbol":"LOMA",
    "Name":"Loma Negra Compania Industrial Argentina Sociedad Anonima ADS"
    },
    {
    "Symbol":"LOOP",
    "Name":"Loop Industries Inc."
    },
    {
    "Symbol":"LOPE",
    "Name":"Grand Canyon Education Inc."
    },
    {
    "Symbol":"LOTZ",
    "Name":"CarLotz Inc. Class A"
    },
    {
    "Symbol":"LOTZW",
    "Name":"CarLotz Inc. Warrant"
    },
    {
    "Symbol":"LOV",
    "Name":"Spark Networks Inc. American Depositary Shares (each representing one-tenth of an Ordinary Share)"
    },
    {
    "Symbol":"LOVE",
    "Name":"The Lovesac Company"
    },
    {
    "Symbol":"LOW",
    "Name":"Lowe's Companies Inc."
    },
    {
    "Symbol":"LPCN",
    "Name":"Lipocine Inc."
    },
    {
    "Symbol":"LPG",
    "Name":"Dorian LPG Ltd."
    },
    {
    "Symbol":"LPI",
    "Name":"Laredo Petroleum Inc."
    },
    {
    "Symbol":"LPL",
    "Name":"LG Display Co Ltd AMERICAN DEPOSITORY SHARES"
    },
    {
    "Symbol":"LPLA",
    "Name":"LPL Financial Holdings Inc."
    },
    {
    "Symbol":"LPRO",
    "Name":"Open Lending Corporation Class A"
    },
    {
    "Symbol":"LPSN",
    "Name":"LivePerson Inc."
    },
    {
    "Symbol":"LPTH",
    "Name":"LightPath Technologies Inc. Class A"
    },
    {
    "Symbol":"LPTX",
    "Name":"Leap Therapeutics Inc."
    },
    {
    "Symbol":"LPX",
    "Name":"Louisiana-Pacific Corporation"
    },
    {
    "Symbol":"LQDA",
    "Name":"Liquidia Corporation"
    },
    {
    "Symbol":"LQDT",
    "Name":"Liquidity Services Inc."
    },
    {
    "Symbol":"LRCX",
    "Name":"Lam Research Corporation"
    },
    {
    "Symbol":"LRFC",
    "Name":"Logan Ridge Finance Corporation"
    },
    {
    "Symbol":"LRMR",
    "Name":"Larimar Therapeutics Inc."
    },
    {
    "Symbol":"LRN",
    "Name":"Stride Inc."
    },
    {
    "Symbol":"LSBK",
    "Name":"Lake Shore Bancorp Inc."
    },
    {
    "Symbol":"LSCC",
    "Name":"Lattice Semiconductor Corporation"
    },
    {
    "Symbol":"LSEA",
    "Name":"Landsea Homes Corporation"
    },
    {
    "Symbol":"LSEAW",
    "Name":"Landsea Homes Corporation Warrant"
    },
    {
    "Symbol":"LSF",
    "Name":"Laird Superfood Inc."
    },
    {
    "Symbol":"LSI",
    "Name":"Life Storage Inc."
    },
    {
    "Symbol":"LSPD",
    "Name":"Lightspeed Commerce Inc. Subordinate Voting Shares"
    },
    {
    "Symbol":"LSPRU",
    "Name":"Larkspur Health Acquisition Corp. Unit"
    },
    {
    "Symbol":"LSTR",
    "Name":"Landstar System Inc."
    },
    {
    "Symbol":"LSXMA",
    "Name":"Liberty Media Corporation Series A Liberty SiriusXM"
    },
    {
    "Symbol":"LSXMB",
    "Name":"Liberty Media Corporation Series B Liberty SiriusXM"
    },
    {
    "Symbol":"LSXMK",
    "Name":"Liberty Media Corporation Series C Liberty SiriusXM"
    },
    {
    "Symbol":"LTBR",
    "Name":"Lightbridge Corporation"
    },
    {
    "Symbol":"LTC",
    "Name":"LTC Properties Inc."
    },
    {
    "Symbol":"LTCH",
    "Name":"Latch Inc."
    },
    {
    "Symbol":"LTCHW",
    "Name":"Latch Inc. Warrant expiring 6/4/2026"
    },
    {
    "Symbol":"LTH",
    "Name":"Life Time Group Holdings Inc."
    },
    {
    "Symbol":"LTHM",
    "Name":"Livent Corporation"
    },
    {
    "Symbol":"LTRN",
    "Name":"Lantern Pharma Inc."
    },
    {
    "Symbol":"LTRPA",
    "Name":"Liberty TripAdvisor Holdings Inc. Series A"
    },
    {
    "Symbol":"LTRPB",
    "Name":"Liberty TripAdvisor Holdings Inc. Series B"
    },
    {
    "Symbol":"LTRX",
    "Name":"Lantronix Inc."
    },
    {
    "Symbol":"LTRY",
    "Name":"Lottery.com Inc."
    },
    {
    "Symbol":"LTRYW",
    "Name":"Lottery.com Inc. Warrants"
    },
    {
    "Symbol":"LU",
    "Name":"Lufax Holding Ltd American Depositary Shares two of which representing one Ordinary Share"
    },
    {
    "Symbol":"LUB",
    "Name":"Luby's Inc."
    },
    {
    "Symbol":"LUCD",
    "Name":"Lucid Diagnostics Inc."
    },
    {
    "Symbol":"LULU",
    "Name":"lululemon athletica inc."
    },
    {
    "Symbol":"LUMN",
    "Name":"Lumen Technologies Inc."
    },
    {
    "Symbol":"LUMO",
    "Name":"Lumos Pharma Inc."
    },
    {
    "Symbol":"LUNA",
    "Name":"Luna Innovations Incorporated"
    },
    {
    "Symbol":"LUNG",
    "Name":"Pulmonx Corporation"
    },
    {
    "Symbol":"LUV",
    "Name":"Southwest Airlines Company"
    },
    {
    "Symbol":"LUXA",
    "Name":"Lux Health Tech Acquisition Corp. Class A"
    },
    {
    "Symbol":"LUXAU",
    "Name":"Lux Health Tech Acquisition Corp. Units"
    },
    {
    "Symbol":"LUXAW",
    "Name":"Lux Health Tech Acquisition Corp. Warrants"
    },
    {
    "Symbol":"LVAC",
    "Name":"LAVA Medtech Acquisition Corp. Class A"
    },
    {
    "Symbol":"LVACU",
    "Name":"LAVA Medtech Acquisition Corp. Unit"
    },
    {
    "Symbol":"LVACW",
    "Name":"LAVA Medtech Acquisition Corp. Warrants"
    },
    {
    "Symbol":"LVLU",
    "Name":"Lulu's Fashion Lounge Holdings Inc."
    },
    {
    "Symbol":"LVO",
    "Name":"LiveOne Inc."
    },
    {
    "Symbol":"LVOX",
    "Name":"LiveVox Holding Inc. Class A"
    },
    {
    "Symbol":"LVOXU",
    "Name":"LiveVox Holding Inc. Unit"
    },
    {
    "Symbol":"LVOXW",
    "Name":"LiveVox Holding Inc. Warrant"
    },
    {
    "Symbol":"LVRA",
    "Name":"Levere Holdings Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"LVRAU",
    "Name":"Levere Holdings Corp. Unit"
    },
    {
    "Symbol":"LVRAW",
    "Name":"Levere Holdings Corp. Warrant"
    },
    {
    "Symbol":"LVS",
    "Name":"Las Vegas Sands Corp."
    },
    {
    "Symbol":"LVTX",
    "Name":"LAVA Therapeutics N.V. Ordinary Shares"
    },
    {
    "Symbol":"LW",
    "Name":"Lamb Weston Holdings Inc."
    },
    {
    "Symbol":"LWAY",
    "Name":"Lifeway Foods Inc."
    },
    {
    "Symbol":"LWLG",
    "Name":"Lightwave Logic Inc."
    },
    {
    "Symbol":"LX",
    "Name":"LexinFintech Holdings Ltd. American Depositary Shares"
    },
    {
    "Symbol":"LXEH",
    "Name":"Lixiang Education Holding Co. Ltd. American Depositary Shares"
    },
    {
    "Symbol":"LXFR",
    "Name":"Luxfer Holdings PLC Ordinary Shares"
    },
    {
    "Symbol":"LXP",
    "Name":"LXP Industrial Trust   (Maryland REIT)"
    },
    {
    "Symbol":"LXP^C",
    "Name":"LXP Industrial Trust 6.5% Series C Cumulative Convertible Preferred Stock"
    },
    {
    "Symbol":"LXRX",
    "Name":"Lexicon Pharmaceuticals Inc."
    },
    {
    "Symbol":"LXU",
    "Name":"LSB Industries Inc."
    },
    {
    "Symbol":"LYB",
    "Name":"LyondellBasell Industries NV Ordinary Shares Class A (Netherlands)"
    },
    {
    "Symbol":"LYEL",
    "Name":"Lyell Immunopharma Inc."
    },
    {
    "Symbol":"LYFT",
    "Name":"Lyft Inc. Class A"
    },
    {
    "Symbol":"LYG",
    "Name":"Lloyds Banking Group Plc American Depositary Shares"
    },
    {
    "Symbol":"LYL",
    "Name":"Dragon Victory International Limited Ordinary Shares"
    },
    {
    "Symbol":"LYLT",
    "Name":"Loyalty Ventures Inc."
    },
    {
    "Symbol":"LYRA",
    "Name":"Lyra Therapeutics Inc."
    },
    {
    "Symbol":"LYTS",
    "Name":"LSI Industries Inc."
    },
    {
    "Symbol":"LYV",
    "Name":"Live Nation Entertainment Inc."
    },
    {
    "Symbol":"LZ",
    "Name":"LegalZoom.com Inc."
    },
    {
    "Symbol":"LZB",
    "Name":"La-Z-Boy Incorporated"
    },
    {
    "Symbol":"M",
    "Name":"Macy's Inc"
    },
    {
    "Symbol":"MA",
    "Name":"Mastercard Incorporated"
    },
    {
    "Symbol":"MAA",
    "Name":"Mid-America Apartment Communities Inc."
    },
    {
    "Symbol":"MAA^I",
    "Name":"Mid-America Apartment Communities Inc. 8.50% Series I Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"MAAQ",
    "Name":"Mana Capital Acquisition Corp."
    },
    {
    "Symbol":"MAAQR",
    "Name":"Mana Capital Acquisition Corp. Rights"
    },
    {
    "Symbol":"MAAQU",
    "Name":"Mana Capital Acquisition Corp. Unit"
    },
    {
    "Symbol":"MAAQW",
    "Name":"Mana Capital Acquisition Corp. Warrant"
    },
    {
    "Symbol":"MAC",
    "Name":"Macerich Company (The)"
    },
    {
    "Symbol":"MACA",
    "Name":"Moringa Acquisition Corp Class A Ordinary Shares"
    },
    {
    "Symbol":"MACAU",
    "Name":"Moringa Acquisition Corp Units"
    },
    {
    "Symbol":"MACAW",
    "Name":"Moringa Acquisition Corp Warrant"
    },
    {
    "Symbol":"MACC",
    "Name":"Mission Advancement Corp. Class A"
    },
    {
    "Symbol":"MACK",
    "Name":"Merrimack Pharmaceuticals Inc."
    },
    {
    "Symbol":"MACU",
    "Name":"Mallard Acquisition Corp."
    },
    {
    "Symbol":"MACUW",
    "Name":"Mallard Acquisition Corp. Warrant"
    },
    {
    "Symbol":"MAG",
    "Name":"MAG Silver Corporation Ordinary Shares"
    },
    {
    "Symbol":"MAIN",
    "Name":"Main Street Capital Corporation"
    },
    {
    "Symbol":"MAN",
    "Name":"ManpowerGroup"
    },
    {
    "Symbol":"MANH",
    "Name":"Manhattan Associates Inc."
    },
    {
    "Symbol":"MANT",
    "Name":"ManTech International Corporation   $0.01 Par Value"
    },
    {
    "Symbol":"MANU",
    "Name":"Manchester United Ltd. Class A Ordinary Shares"
    },
    {
    "Symbol":"MAPS",
    "Name":"WM Technology Inc. Class A"
    },
    {
    "Symbol":"MAPSW",
    "Name":"WM Technology Inc. Warrants"
    },
    {
    "Symbol":"MAQC",
    "Name":"Maquia Capital Acquisition Corporation Class A"
    },
    {
    "Symbol":"MAQCW",
    "Name":"Maquia Capital Acquisition Corporation Warrant"
    },
    {
    "Symbol":"MAR",
    "Name":"Marriott International Class A"
    },
    {
    "Symbol":"MARA",
    "Name":"Marathon Digital Holdings Inc."
    },
    {
    "Symbol":"MARK",
    "Name":"Remark Holdings Inc."
    },
    {
    "Symbol":"MARPS",
    "Name":"Marine Petroleum Trust Units of Beneficial Interest"
    },
    {
    "Symbol":"MAS",
    "Name":"Masco Corporation"
    },
    {
    "Symbol":"MASI",
    "Name":"Masimo Corporation"
    },
    {
    "Symbol":"MASS",
    "Name":"908 Devices Inc."
    },
    {
    "Symbol":"MAT",
    "Name":"Mattel Inc."
    },
    {
    "Symbol":"MATW",
    "Name":"Matthews International Corporation Class A"
    },
    {
    "Symbol":"MATX",
    "Name":"Matson Inc."
    },
    {
    "Symbol":"MAV",
    "Name":"Pioneer Municipal High Income Advantage Fund Inc."
    },
    {
    "Symbol":"MAX",
    "Name":"MediaAlpha Inc. Class A"
    },
    {
    "Symbol":"MAXN",
    "Name":"Maxeon Solar Technologies Ltd. Ordinary Shares"
    },
    {
    "Symbol":"MAXR",
    "Name":"Maxar Technologies Inc."
    },
    {
    "Symbol":"MAYS",
    "Name":"J. W. Mays Inc."
    },
    {
    "Symbol":"MBAC",
    "Name":"M3-Brigade Acquisition II Corp. Class A"
    },
    {
    "Symbol":"MBCN",
    "Name":"Middlefield Banc Corp."
    },
    {
    "Symbol":"MBI",
    "Name":"MBIA Inc."
    },
    {
    "Symbol":"MBII",
    "Name":"Marrone Bio Innovations Inc."
    },
    {
    "Symbol":"MBIN",
    "Name":"Merchants Bancorp"
    },
    {
    "Symbol":"MBINN",
    "Name":"Merchants Bancorp Depositary Shares Preferred Series C"
    },
    {
    "Symbol":"MBINO",
    "Name":"Merchants Bancorp Depositary Shares Each Representing a 1/40th Interest in a Share of Series B  Fixed-to-Floating Rate"
    },
    {
    "Symbol":"MBINP",
    "Name":"Merchants Bancorp 7.00% Fixed-to-Floating Rate Series A Non-Cumulative Perpetual Preferred Stock"
    },
    {
    "Symbol":"MBIO",
    "Name":"Mustang Bio Inc."
    },
    {
    "Symbol":"MBNKP",
    "Name":"Medallion Bank Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series F"
    },
    {
    "Symbol":"MBOT",
    "Name":"Microbot Medical Inc."
    },
    {
    "Symbol":"MBRX",
    "Name":"Moleculin Biotech Inc."
    },
    {
    "Symbol":"MBSC",
    "Name":"M3-Brigade Acquisition III Corp. Class A"
    },
    {
    "Symbol":"MBT",
    "Name":"Mobile TeleSystems Public Joint Stock Company American Depositary Shares (Each representing 2 Shares of  )"
    },
    {
    "Symbol":"MBTC",
    "Name":"Nocturne Acquisition Corporation Ordinary Shares"
    },
    {
    "Symbol":"MBTCR",
    "Name":"Nocturne Acquisition Corporation Right"
    },
    {
    "Symbol":"MBTCU",
    "Name":"Nocturne Acquisition Corporation Unit"
    },
    {
    "Symbol":"MBUU",
    "Name":"Malibu Boats Inc. Class A"
    },
    {
    "Symbol":"MBWM",
    "Name":"Mercantile Bank Corporation"
    },
    {
    "Symbol":"MC",
    "Name":"Moelis & Company Class A"
    },
    {
    "Symbol":"MCA",
    "Name":"Blackrock MuniYield California Quality Fund Inc."
    },
    {
    "Symbol":"MCAA",
    "Name":"Mountain & Co. I Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"MCAAU",
    "Name":"Mountain & Co. I Acquisition Corp. Unit"
    },
    {
    "Symbol":"MCAAW",
    "Name":"Mountain & Co. I Acquisition Corp. Warrant"
    },
    {
    "Symbol":"MCAE",
    "Name":"Mountain Crest Acquisition Corp. III"
    },
    {
    "Symbol":"MCAER",
    "Name":"Mountain Crest Acquisition Corp. III Right"
    },
    {
    "Symbol":"MCAEU",
    "Name":"Mountain Crest Acquisition Corp. III Unit"
    },
    {
    "Symbol":"MCAF",
    "Name":"Mountain Crest Acquisition Corp. IV"
    },
    {
    "Symbol":"MCAFR",
    "Name":"Mountain Crest Acquisition Corp. IV Rights"
    },
    {
    "Symbol":"MCAFU",
    "Name":"Mountain Crest Acquisition Corp. IV Unit"
    },
    {
    "Symbol":"MCAGR",
    "Name":"Mountain Crest Acquisition Corp. V Right"
    },
    {
    "Symbol":"MCB",
    "Name":"Metropolitan Bank Holding Corp."
    },
    {
    "Symbol":"MCBC",
    "Name":"Macatawa Bank Corporation"
    },
    {
    "Symbol":"MCBS",
    "Name":"MetroCity Bankshares Inc."
    },
    {
    "Symbol":"MCD",
    "Name":"McDonald's Corporation"
    },
    {
    "Symbol":"MCFE",
    "Name":"McAfee Corp. Class A"
    },
    {
    "Symbol":"MCFT",
    "Name":"MasterCraft Boat Holdings Inc."
    },
    {
    "Symbol":"MCG",
    "Name":"Membership Collective Group Inc. Class A"
    },
    {
    "Symbol":"MCHP",
    "Name":"Microchip Technology Incorporated"
    },
    {
    "Symbol":"MCHX",
    "Name":"Marchex Inc. Class B"
    },
    {
    "Symbol":"MCI",
    "Name":"Barings Corporate Investors"
    },
    {
    "Symbol":"MCK",
    "Name":"McKesson Corporation"
    },
    {
    "Symbol":"MCLD",
    "Name":"mCloud Technologies Corp. Common Shares"
    },
    {
    "Symbol":"MCMJ",
    "Name":"Merida Merger Corp. I"
    },
    {
    "Symbol":"MCMJW",
    "Name":"Merida Merger Corp. I Warrant"
    },
    {
    "Symbol":"MCN",
    "Name":"Madison Covered Call & Equity Strategy Fund"
    },
    {
    "Symbol":"MCO",
    "Name":"Moody's Corporation"
    },
    {
    "Symbol":"MCR",
    "Name":"MFS Charter Income Trust"
    },
    {
    "Symbol":"MCRB",
    "Name":"Seres Therapeutics Inc."
    },
    {
    "Symbol":"MCRI",
    "Name":"Monarch Casino & Resort Inc."
    },
    {
    "Symbol":"MCS",
    "Name":"Marcus Corporation (The)"
    },
    {
    "Symbol":"MCW",
    "Name":"Mister Car Wash Inc."
    },
    {
    "Symbol":"MCY",
    "Name":"Mercury General Corporation"
    },
    {
    "Symbol":"MD",
    "Name":"Mednax Inc."
    },
    {
    "Symbol":"MDB",
    "Name":"MongoDB Inc. Class A"
    },
    {
    "Symbol":"MDC",
    "Name":"M.D.C. Holdings Inc."
    },
    {
    "Symbol":"MDGL",
    "Name":"Madrigal Pharmaceuticals Inc."
    },
    {
    "Symbol":"MDGS",
    "Name":"Medigus Ltd. American Depositary Shares"
    },
    {
    "Symbol":"MDGSW",
    "Name":"Medigus Ltd. Series C Warrant"
    },
    {
    "Symbol":"MDH",
    "Name":"MDH Acquisition Corp. Class A"
    },
    {
    "Symbol":"MDIA",
    "Name":"Mediaco Holding Inc. Class A"
    },
    {
    "Symbol":"MDJH",
    "Name":"MDJM LTD Ordinary Share"
    },
    {
    "Symbol":"MDLZ",
    "Name":"Mondelez International Inc. Class A"
    },
    {
    "Symbol":"MDNA",
    "Name":"Medicenna Therapeutics Corp. Common Shares"
    },
    {
    "Symbol":"MDRR",
    "Name":"Medalist Diversified REIT Inc."
    },
    {
    "Symbol":"MDRRP",
    "Name":"Medalist Diversified REIT Inc. Series A Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"MDRX",
    "Name":"Allscripts Healthcare Solutions Inc."
    },
    {
    "Symbol":"MDT",
    "Name":"Medtronic plc. Ordinary Shares"
    },
    {
    "Symbol":"MDU",
    "Name":"MDU Resources Group Inc.   (Holding Company)"
    },
    {
    "Symbol":"MDVA",
    "Name":"Modiv Inc. 7.375% Series A Cumulative Redeemable Perpetual Preferred Stock"
    },
    {
    "Symbol":"MDVL",
    "Name":"MedAvail Holdings Inc."
    },
    {
    "Symbol":"MDWD",
    "Name":"MediWound Ltd. Ordinary Shares"
    },
    {
    "Symbol":"MDWT",
    "Name":"Midwest Holding Inc."
    },
    {
    "Symbol":"MDXG",
    "Name":"MiMedx Group Inc"
    },
    {
    "Symbol":"MDXH",
    "Name":"MDxHealth SA American Depositary Shares"
    },
    {
    "Symbol":"ME",
    "Name":"23andMe Holding Co. Class A"
    },
    {
    "Symbol":"MEAC",
    "Name":"Mercury Ecommerce Acquisition Corp Class A"
    },
    {
    "Symbol":"MEACU",
    "Name":"Mercury Ecommerce Acquisition Corp Unit"
    },
    {
    "Symbol":"MEACW",
    "Name":"Mercury Ecommerce Acquisition Corp Warrants"
    },
    {
    "Symbol":"MEC",
    "Name":"Mayville Engineering Company Inc."
    },
    {
    "Symbol":"MED",
    "Name":"MEDIFAST INC"
    },
    {
    "Symbol":"MEDP",
    "Name":"Medpace Holdings Inc."
    },
    {
    "Symbol":"MEDS",
    "Name":"TRxADE HEALTH Inc."
    },
    {
    "Symbol":"MEG",
    "Name":"Montrose Environmental Group Inc."
    },
    {
    "Symbol":"MEGI",
    "Name":"MainStay CBRE Global Infrastructure Megatrends Fund Common Shares"
    },
    {
    "Symbol":"MEI",
    "Name":"Methode Electronics Inc."
    },
    {
    "Symbol":"MEIP",
    "Name":"MEI Pharma Inc."
    },
    {
    "Symbol":"MEKA",
    "Name":"MELI Kaszek Pioneer Corp Class A Ordinary Shares"
    },
    {
    "Symbol":"MELI",
    "Name":"MercadoLibre Inc."
    },
    {
    "Symbol":"MEOA",
    "Name":"Minority Equality Opportunities Acquisition Inc. Class A"
    },
    {
    "Symbol":"MEOAW",
    "Name":"Minority Equality Opportunities Acquisition Inc. Warrants"
    },
    {
    "Symbol":"MEOH",
    "Name":"Methanex Corporation"
    },
    {
    "Symbol":"MER^K",
    "Name":"Bank of America Corporation Income Capital Obligation Notes initially due December 15 2066"
    },
    {
    "Symbol":"MERC",
    "Name":"Mercer International Inc."
    },
    {
    "Symbol":"MESA",
    "Name":"Mesa Air Group Inc."
    },
    {
    "Symbol":"MESO",
    "Name":"Mesoblast Limited American Depositary Shares"
    },
    {
    "Symbol":"MET",
    "Name":"MetLife Inc."
    },
    {
    "Symbol":"MET^A",
    "Name":"MetLife Inc. Preferred Series A Floating Rate"
    },
    {
    "Symbol":"MET^E",
    "Name":"MetLife Inc. Depositary shares each representing a 1/1000th interest in a share of the Issuera??s 5.625% Non-Cumulative Preferred Stock Series E."
    },
    {
    "Symbol":"MET^F",
    "Name":"MetLife Inc. Depositary Shares each representing a 1/1000th interest in a share of 4.75% Non-Cumulative Preferred Stock Series F"
    },
    {
    "Symbol":"METC",
    "Name":"Ramaco Resources Inc."
    },
    {
    "Symbol":"METCL",
    "Name":"Ramaco Resources Inc. 9.00% Senior Notes due 2026"
    },
    {
    "Symbol":"METX",
    "Name":"Meten Holding Group Ltd. Ordinary Shares"
    },
    {
    "Symbol":"METXW",
    "Name":"Meten Holding Group Ltd. Warrant"
    },
    {
    "Symbol":"MF",
    "Name":"Missfresh Limited American Depositary Shares"
    },
    {
    "Symbol":"MFA",
    "Name":"MFA Financial Inc."
    },
    {
    "Symbol":"MFA^B",
    "Name":"MFA Financial Inc. Preferred Series B"
    },
    {
    "Symbol":"MFA^C",
    "Name":"MFA Financial Inc. 6.50% Series C Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"MFC",
    "Name":"Manulife Financial Corporation"
    },
    {
    "Symbol":"MFD",
    "Name":"Macquarie First Trust Global"
    },
    {
    "Symbol":"MFG",
    "Name":"Mizuho Financial Group Inc. Sponosred ADR (Japan)"
    },
    {
    "Symbol":"MFGP",
    "Name":"Micro Focus Intl PLC ADS each representing One Ord Sh"
    },
    {
    "Symbol":"MFH",
    "Name":"Mercurity Fintech Holding Inc. ADS"
    },
    {
    "Symbol":"MFIN",
    "Name":"Medallion Financial Corp."
    },
    {
    "Symbol":"MFL",
    "Name":"Blackrock MuniHoldings Investment Quality Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"MFM",
    "Name":"MFS Municipal Income Trust"
    },
    {
    "Symbol":"MFV",
    "Name":"MFS Special Value Trust"
    },
    {
    "Symbol":"MG",
    "Name":"Mistras Group Inc"
    },
    {
    "Symbol":"MGA",
    "Name":"Magna International Inc."
    },
    {
    "Symbol":"MGEE",
    "Name":"MGE Energy Inc"
    },
    {
    "Symbol":"MGF",
    "Name":"MFS Government Markets Income Trust"
    },
    {
    "Symbol":"MGI",
    "Name":"Moneygram International Inc."
    },
    {
    "Symbol":"MGIC",
    "Name":"Magic Software Enterprises Ltd. Ordinary Shares"
    },
    {
    "Symbol":"MGM",
    "Name":"MGM Resorts International"
    },
    {
    "Symbol":"MGNI",
    "Name":"Magnite Inc."
    },
    {
    "Symbol":"MGNX",
    "Name":"MacroGenics Inc."
    },
    {
    "Symbol":"MGP",
    "Name":"MGM Growth Properties LLC Class A common shares representing limited liability company interests"
    },
    {
    "Symbol":"MGPI",
    "Name":"MGP Ingredients Inc."
    },
    {
    "Symbol":"MGR",
    "Name":"Affiliated Managers Group Inc. 5.875% Junior Subordinated Notes due 2059"
    },
    {
    "Symbol":"MGRB",
    "Name":"Affiliated Managers Group Inc. 4.750% Junior Subordinated Notes due 2060"
    },
    {
    "Symbol":"MGRC",
    "Name":"McGrath RentCorp"
    },
    {
    "Symbol":"MGRD",
    "Name":"Affiliated Managers Group Inc. 4.200% Junior Subordinated Notes due 2061"
    },
    {
    "Symbol":"MGTA",
    "Name":"Magenta Therapeutics Inc."
    },
    {
    "Symbol":"MGTX",
    "Name":"MeiraGTx Holdings plc Ordinary Shares"
    },
    {
    "Symbol":"MGU",
    "Name":"Macquarie Global Infrastructure Total Return Fund Inc."
    },
    {
    "Symbol":"MGY",
    "Name":"Magnolia Oil & Gas Corporation Class A"
    },
    {
    "Symbol":"MGYR",
    "Name":"Magyar Bancorp Inc."
    },
    {
    "Symbol":"MH^A",
    "Name":"Maiden Holdings Ltd. Pref Shs Ser A (Bermuda)"
    },
    {
    "Symbol":"MH^C",
    "Name":"Maiden Holdings North America Ltd. 7.125% Non-Cumulative Preference Shares Series C"
    },
    {
    "Symbol":"MH^D",
    "Name":"Maiden Holdings Ltd. 6.700% Non-Cumulative Preference Shares Series D"
    },
    {
    "Symbol":"MHD",
    "Name":"Blackrock MuniHoldings Fund Inc."
    },
    {
    "Symbol":"MHF",
    "Name":"Western Asset Municipal High Income Fund Inc."
    },
    {
    "Symbol":"MHH",
    "Name":"Mastech Digital Inc"
    },
    {
    "Symbol":"MHI",
    "Name":"Pioneer Municipal High Income Fund Inc."
    },
    {
    "Symbol":"MHK",
    "Name":"Mohawk Industries Inc."
    },
    {
    "Symbol":"MHLA",
    "Name":"Maiden Holdings Ltd. 6.625% Notes due 2046"
    },
    {
    "Symbol":"MHLD",
    "Name":"Maiden Holdings Ltd."
    },
    {
    "Symbol":"MHN",
    "Name":"Blackrock MuniHoldings New York Quality Fund Inc."
    },
    {
    "Symbol":"MHNC",
    "Name":"Maiden Holdings North America Ltd. 7.75% Notes due 2043"
    },
    {
    "Symbol":"MHO",
    "Name":"M/I Homes Inc."
    },
    {
    "Symbol":"MIC",
    "Name":"Macquarie Infrastructure Holdings LLC Common Unit"
    },
    {
    "Symbol":"MICT",
    "Name":"MICT Inc."
    },
    {
    "Symbol":"MIDD",
    "Name":"Middleby Corporation (The)"
    },
    {
    "Symbol":"MIGI",
    "Name":"Mawson Infrastructure Group Inc."
    },
    {
    "Symbol":"MILE",
    "Name":"Metromile Inc."
    },
    {
    "Symbol":"MILEW",
    "Name":"Metromile Inc. Warrant"
    },
    {
    "Symbol":"MIME",
    "Name":"Mimecast Limited Ordinary Shares"
    },
    {
    "Symbol":"MIMO",
    "Name":"Airspan Networks Holdings Inc."
    },
    {
    "Symbol":"MIN",
    "Name":"MFS Intermediate Income Trust"
    },
    {
    "Symbol":"MIND",
    "Name":"MIND Technology Inc.   (DE)"
    },
    {
    "Symbol":"MINDP",
    "Name":"MIND Technology Inc. Series A 9.00% Series A Cumulative Preferred Stock (DE)"
    },
    {
    "Symbol":"MINM",
    "Name":"Minim Inc."
    },
    {
    "Symbol":"MIO",
    "Name":"Pioneer Municipal High Income Opportunities Fund Inc."
    },
    {
    "Symbol":"MIR",
    "Name":"Mirion Technologies Inc. Class A"
    },
    {
    "Symbol":"MIRM",
    "Name":"Mirum Pharmaceuticals Inc."
    },
    {
    "Symbol":"MIRO",
    "Name":"Miromatrix Medical Inc."
    },
    {
    "Symbol":"MIST",
    "Name":"Milestone Pharmaceuticals Inc. Common Shares"
    },
    {
    "Symbol":"MIT",
    "Name":"Mason Industrial Technology Inc. Class A"
    },
    {
    "Symbol":"MITA",
    "Name":"Coliseum Acquisition Corp. Class A Ordinary Share"
    },
    {
    "Symbol":"MITAW",
    "Name":"Coliseum Acquisition Corp. Warrant"
    },
    {
    "Symbol":"MITC",
    "Name":"MeaTech 3D Ltd. American Depositary Shares"
    },
    {
    "Symbol":"MITK",
    "Name":"Mitek Systems Inc."
    },
    {
    "Symbol":"MITO",
    "Name":"Stealth BioTherapeutics Corp. ADS"
    },
    {
    "Symbol":"MITQ",
    "Name":"Moving iMage Technologies Inc."
    },
    {
    "Symbol":"MITT",
    "Name":"AG Mortgage Investment Trust Inc."
    },
    {
    "Symbol":"MITT^A",
    "Name":"AG Mortgage Investment Trust Inc. 8.25% Preferred Series A"
    },
    {
    "Symbol":"MITT^B",
    "Name":"AG Mortgage Investment Trust Inc. Preferred Series B"
    },
    {
    "Symbol":"MITT^C",
    "Name":"AG Mortgage Investment Trust Inc. 8.00% Series C Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock $0.01 par value per share"
    },
    {
    "Symbol":"MIXT",
    "Name":"MiX Telematics Limited American Depositary Shares each representing 25 Ordinary Shares"
    },
    {
    "Symbol":"MIY",
    "Name":"Blackrock MuniYield Michigan Quality Fund Inc."
    },
    {
    "Symbol":"MKC",
    "Name":"McCormick & Company Incorporated"
    },
    {
    "Symbol":"MKD",
    "Name":"Molecular Data Inc. American Depositary Shares"
    },
    {
    "Symbol":"MKFG",
    "Name":"Markforged Holding Corporation"
    },
    {
    "Symbol":"MKL",
    "Name":"Markel Corporation"
    },
    {
    "Symbol":"MKSI",
    "Name":"MKS Instruments Inc."
    },
    {
    "Symbol":"MKTW",
    "Name":"MarketWise Inc. Class A"
    },
    {
    "Symbol":"MKTWW",
    "Name":"MarketWise Inc. Warrant"
    },
    {
    "Symbol":"MKTX",
    "Name":"MarketAxess Holdings Inc."
    },
    {
    "Symbol":"ML",
    "Name":"MoneyLion Inc. Class A"
    },
    {
    "Symbol":"MLAB",
    "Name":"Mesa Laboratories Inc."
    },
    {
    "Symbol":"MLAC",
    "Name":"Malacca Straits Acquisition Company Limited Class A Ordinary Shares"
    },
    {
    "Symbol":"MLACW",
    "Name":"Malacca Straits Acquisition Company Limited Warrants"
    },
    {
    "Symbol":"MLAI",
    "Name":"McLaren Technology Acquisition Corp. Class A"
    },
    {
    "Symbol":"MLAIU",
    "Name":"McLaren Technology Acquisition Corp. Unit"
    },
    {
    "Symbol":"MLAIW",
    "Name":"McLaren Technology Acquisition Corp. Warrant"
    },
    {
    "Symbol":"MLCO",
    "Name":"Melco Resorts & Entertainment Limited American Depositary Shares"
    },
    {
    "Symbol":"MLI",
    "Name":"Mueller Industries Inc."
    },
    {
    "Symbol":"MLKN",
    "Name":"MillerKnoll Inc."
    },
    {
    "Symbol":"MLM",
    "Name":"Martin Marietta Materials Inc."
    },
    {
    "Symbol":"MLNK",
    "Name":"MeridianLink Inc."
    },
    {
    "Symbol":"MLP",
    "Name":"Maui Land & Pineapple Company Inc."
    },
    {
    "Symbol":"MLR",
    "Name":"Miller Industries Inc."
    },
    {
    "Symbol":"MLSS",
    "Name":"Milestone Scientific Inc."
    },
    {
    "Symbol":"MLVF",
    "Name":"Malvern Bancorp Inc."
    },
    {
    "Symbol":"MMAT",
    "Name":"Meta Materials Inc."
    },
    {
    "Symbol":"MMC",
    "Name":"Marsh & McLennan Companies Inc."
    },
    {
    "Symbol":"MMD",
    "Name":"MainStay MacKay DefinedTerm Municipal Opportunities Fund"
    },
    {
    "Symbol":"MMI",
    "Name":"Marcus & Millichap Inc."
    },
    {
    "Symbol":"MMLP",
    "Name":"Martin Midstream Partners L.P. Limited Partnership"
    },
    {
    "Symbol":"MMM",
    "Name":"3M Company"
    },
    {
    "Symbol":"MMMB",
    "Name":"MamaMancini's Holdings Inc."
    },
    {
    "Symbol":"MMP",
    "Name":"Magellan Midstream Partners L.P. Limited Partnership"
    },
    {
    "Symbol":"MMS",
    "Name":"Maximus Inc."
    },
    {
    "Symbol":"MMSI",
    "Name":"Merit Medical Systems Inc."
    },
    {
    "Symbol":"MMT",
    "Name":"MFS Multimarket Income Trust"
    },
    {
    "Symbol":"MMU",
    "Name":"Western Asset Managed Municipals Fund Inc."
    },
    {
    "Symbol":"MMX",
    "Name":"Maverix Metals Inc. Common Shares"
    },
    {
    "Symbol":"MMYT",
    "Name":"MakeMyTrip Limited Ordinary Shares"
    },
    {
    "Symbol":"MN",
    "Name":"Manning & Napier Inc. Class A"
    },
    {
    "Symbol":"MNDO",
    "Name":"MIND C.T.I. Ltd. Ordinary Shares"
    },
    {
    "Symbol":"MNDT",
    "Name":"Mandiant Inc."
    },
    {
    "Symbol":"MNDY",
    "Name":"monday.com Ltd. Ordinary Shares"
    },
    {
    "Symbol":"MNKD",
    "Name":"MannKind Corporation"
    },
    {
    "Symbol":"MNMD",
    "Name":"Mind Medicine (MindMed) Inc. Subordinate Voting Shares"
    },
    {
    "Symbol":"MNOV",
    "Name":"Medicinova Inc"
    },
    {
    "Symbol":"MNP",
    "Name":"Western Asset Municipal Partners Fund Inc."
    },
    {
    "Symbol":"MNPR",
    "Name":"Monopar Therapeutics Inc."
    },
    {
    "Symbol":"MNR",
    "Name":"Monmouth Real Estate Investment Corporation Class A"
    },
    {
    "Symbol":"MNR^C",
    "Name":"Monmouth Real Estate Investment Corporation 6.125% Series C Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"MNRL",
    "Name":"Brigham Minerals Inc. Class A"
    },
    {
    "Symbol":"MNRO",
    "Name":"Monro Inc."
    },
    {
    "Symbol":"MNSB",
    "Name":"MainStreet Bancshares Inc."
    },
    {
    "Symbol":"MNSBP",
    "Name":"MainStreet Bancshares Inc. Depositary Shares"
    },
    {
    "Symbol":"MNSO",
    "Name":"MINISO Group Holding Limited American Depositary Shares each representing four Class A Ordinary Shares"
    },
    {
    "Symbol":"MNST",
    "Name":"Monster Beverage Corporation"
    },
    {
    "Symbol":"MNTK",
    "Name":"Montauk Renewables Inc."
    },
    {
    "Symbol":"MNTN",
    "Name":"Everest Consolidator Acquisition Corporation Class A"
    },
    {
    "Symbol":"MNTS",
    "Name":"Momentus Inc. Class A"
    },
    {
    "Symbol":"MNTSW",
    "Name":"Momentus Inc. Warrant"
    },
    {
    "Symbol":"MNTV",
    "Name":"Momentive Global Inc."
    },
    {
    "Symbol":"MNTX",
    "Name":"Manitex International Inc."
    },
    {
    "Symbol":"MO",
    "Name":"Altria Group Inc."
    },
    {
    "Symbol":"MOBQ",
    "Name":"Mobiquity Technologies Inc."
    },
    {
    "Symbol":"MOD",
    "Name":"Modine Manufacturing Company"
    },
    {
    "Symbol":"MODD",
    "Name":"Modular Medical Inc."
    },
    {
    "Symbol":"MODN",
    "Name":"Model N Inc."
    },
    {
    "Symbol":"MODV",
    "Name":"ModivCare Inc."
    },
    {
    "Symbol":"MOFG",
    "Name":"MidWestOne Financial Gp"
    },
    {
    "Symbol":"MOGO",
    "Name":"Mogo Inc. Common Shares"
    },
    {
    "Symbol":"MOGU",
    "Name":"MOGU Inc. American Depositary Shares (each  representing 25 Class A Ordinary Shares)"
    },
    {
    "Symbol":"MOH",
    "Name":"Molina Healthcare Inc"
    },
    {
    "Symbol":"MOHO",
    "Name":"ECMOHO Limited American Depositary Shares"
    },
    {
    "Symbol":"MOLN",
    "Name":"Molecular Partners AG American Depositary Shares"
    },
    {
    "Symbol":"MOMO",
    "Name":"Hello Group Inc. American Depositary Shares"
    },
    {
    "Symbol":"MON",
    "Name":"Monument Circle Acquisition Corp. Class A"
    },
    {
    "Symbol":"MONCU",
    "Name":"Monument Circle Acquisition Corp. Unit"
    },
    {
    "Symbol":"MONCW",
    "Name":"Monument Circle Acquisition Corp. Warrant"
    },
    {
    "Symbol":"MOR",
    "Name":"MorphoSys AG American Depositary Shares"
    },
    {
    "Symbol":"MORF",
    "Name":"Morphic Holding Inc."
    },
    {
    "Symbol":"MORN",
    "Name":"Morningstar Inc."
    },
    {
    "Symbol":"MOS",
    "Name":"Mosaic Company (The)"
    },
    {
    "Symbol":"MOTS",
    "Name":"Motus GI Holdings Inc."
    },
    {
    "Symbol":"MOTV",
    "Name":"Motive Capital Corp Class A Ordinary Shares"
    },
    {
    "Symbol":"MOV",
    "Name":"Movado Group Inc."
    },
    {
    "Symbol":"MOVE",
    "Name":"Movano Inc."
    },
    {
    "Symbol":"MOXC",
    "Name":"Moxian (BVI) Inc Ordinary Shares"
    },
    {
    "Symbol":"MP",
    "Name":"MP Materials Corp."
    },
    {
    "Symbol":"MPA",
    "Name":"Blackrock MuniYield Pennsylvania Quality Fund"
    },
    {
    "Symbol":"MPAA",
    "Name":"Motorcar Parts  of America Inc."
    },
    {
    "Symbol":"MPAC",
    "Name":"Model Performance Acquisition Corp. Class A Ordinary Share"
    },
    {
    "Symbol":"MPACR",
    "Name":"Model Performance Acquisition Corp. Right"
    },
    {
    "Symbol":"MPACU",
    "Name":"Model Performance Acquisition Corp. Units"
    },
    {
    "Symbol":"MPACW",
    "Name":"Model Performance Acquisition Corp. Warrant"
    },
    {
    "Symbol":"MPB",
    "Name":"Mid Penn Bancorp"
    },
    {
    "Symbol":"MPC",
    "Name":"Marathon Petroleum Corporation"
    },
    {
    "Symbol":"MPLN",
    "Name":"MultiPlan Corporation Class A"
    },
    {
    "Symbol":"MPLX",
    "Name":"MPLX LP Common Units Representing Limited Partner Interests"
    },
    {
    "Symbol":"MPRA",
    "Name":"Mercato Partners Acquisition Corporation Class A"
    },
    {
    "Symbol":"MPRAW",
    "Name":"Mercato Partners Acquisition Corporation Warrant"
    },
    {
    "Symbol":"MPV",
    "Name":"Barings Participation Investors"
    },
    {
    "Symbol":"MPW",
    "Name":"Medical Properties Trust Inc."
    },
    {
    "Symbol":"MPWR",
    "Name":"Monolithic Power Systems Inc."
    },
    {
    "Symbol":"MPX",
    "Name":"Marine Products Corporation"
    },
    {
    "Symbol":"MQ",
    "Name":"Marqeta Inc. Class A"
    },
    {
    "Symbol":"MQT",
    "Name":"Blackrock MuniYield Quality Fund II Inc."
    },
    {
    "Symbol":"MQY",
    "Name":"Blackrock MuniYield Quality Fund Inc."
    },
    {
    "Symbol":"MRAI",
    "Name":"Marpai Inc. Class A"
    },
    {
    "Symbol":"MRAM",
    "Name":"Everspin Technologies Inc."
    },
    {
    "Symbol":"MRBK",
    "Name":"Meridian Corporation"
    },
    {
    "Symbol":"MRC",
    "Name":"MRC Global Inc."
    },
    {
    "Symbol":"MRCC",
    "Name":"Monroe Capital Corporation"
    },
    {
    "Symbol":"MRCY",
    "Name":"Mercury Systems Inc"
    },
    {
    "Symbol":"MREO",
    "Name":"Mereo BioPharma Group plc American Depositary Shares"
    },
    {
    "Symbol":"MRIN",
    "Name":"Marin Software Incorporated"
    },
    {
    "Symbol":"MRK",
    "Name":"Merck & Company Inc.   (new)"
    },
    {
    "Symbol":"MRKR",
    "Name":"Marker Therapeutics Inc."
    },
    {
    "Symbol":"MRM",
    "Name":"MEDIROM Healthcare Technologies Inc. American Depositary Share"
    },
    {
    "Symbol":"MRNA",
    "Name":"Moderna Inc."
    },
    {
    "Symbol":"MRNS",
    "Name":"Marinus Pharmaceuticals Inc."
    },
    {
    "Symbol":"MRO",
    "Name":"Marathon Oil Corporation"
    },
    {
    "Symbol":"MRSN",
    "Name":"Mersana Therapeutics Inc."
    },
    {
    "Symbol":"MRTN",
    "Name":"Marten Transport Ltd."
    },
    {
    "Symbol":"MRTX",
    "Name":"Mirati Therapeutics Inc."
    },
    {
    "Symbol":"MRUS",
    "Name":"Merus N.V. Common Shares"
    },
    {
    "Symbol":"MRVI",
    "Name":"Maravai LifeSciences Holdings Inc. Class A"
    },
    {
    "Symbol":"MRVL",
    "Name":"Marvell Technology Inc."
    },
    {
    "Symbol":"MS",
    "Name":"Morgan Stanley"
    },
    {
    "Symbol":"MS^A",
    "Name":"Morgan Stanley Dep Shs repstg 1/1000 Pfd Ser A"
    },
    {
    "Symbol":"MS^E",
    "Name":"Morgan Stanley DEPOSITARY SHARES REP 1/1000TH SHARES FIXED/FLTG PREFERRED STOCK SERIES E"
    },
    {
    "Symbol":"MS^F",
    "Name":"Morgan Stanley Dep Shs Rpstg 1/1000th Int Prd Ser F Fxd to Flag"
    },
    {
    "Symbol":"MS^I",
    "Name":"Morgan Stanley Depository Shares Representing 1/1000th Preferred Series 1 Fixed to Floating Non (Cum)"
    },
    {
    "Symbol":"MS^K",
    "Name":"Morgan Stanley Depositary Shares each representing 1/1000th of a share of Fixed-to-Floating Rate Non-Cumulative Preferred Stock  Series K"
    },
    {
    "Symbol":"MS^L",
    "Name":"Morgan Stanley Depositary Shares each representing 1/1000th of a share of 4.875% Non-Cumulative Preferred Stock Series L"
    },
    {
    "Symbol":"MS^O",
    "Name":"Morgan Stanley Depositary Shares each representing 1/1000th of a share of 4.250% Non-Cumulative Preferred Stock Series O"
    },
    {
    "Symbol":"MSA",
    "Name":"MSA Safety Incorporated"
    },
    {
    "Symbol":"MSAC",
    "Name":"Medicus Sciences Acquisition Corp. Class A Ordinary Share"
    },
    {
    "Symbol":"MSACW",
    "Name":"Medicus Sciences Acquisition Corp. Warrant"
    },
    {
    "Symbol":"MSB",
    "Name":"Mesabi Trust"
    },
    {
    "Symbol":"MSBI",
    "Name":"Midland States Bancorp Inc."
    },
    {
    "Symbol":"MSC",
    "Name":"Studio City International Holdings Limited American depositary shares each representing four  Class A ordinary shares"
    },
    {
    "Symbol":"MSCI",
    "Name":"MSCI Inc"
    },
    {
    "Symbol":"MSD",
    "Name":"Morgan Stanley Emerging Markets Debt Fund Inc."
    },
    {
    "Symbol":"MSDA",
    "Name":"MSD Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"MSDAU",
    "Name":"MSD Acquisition Corp. Unit"
    },
    {
    "Symbol":"MSDAW",
    "Name":"MSD Acquisition Corp. Warrant"
    },
    {
    "Symbol":"MSEX",
    "Name":"Middlesex Water Company"
    },
    {
    "Symbol":"MSFT",
    "Name":"Microsoft Corporation"
    },
    {
    "Symbol":"MSGE",
    "Name":"Madison Square Garden Entertainment Corp. Class A"
    },
    {
    "Symbol":"MSGM",
    "Name":"Motorsport Games Inc. Class A"
    },
    {
    "Symbol":"MSGS",
    "Name":"Madison Square Garden Sports Corp. Class A   (New)"
    },
    {
    "Symbol":"MSI",
    "Name":"Motorola Solutions Inc."
    },
    {
    "Symbol":"MSM",
    "Name":"MSC Industrial Direct Company Inc."
    },
    {
    "Symbol":"MSN",
    "Name":"Emerson Radio Corporation"
    },
    {
    "Symbol":"MSP",
    "Name":"Datto Holding Corp."
    },
    {
    "Symbol":"MSTR",
    "Name":"MicroStrategy Incorporated   Class A"
    },
    {
    "Symbol":"MSVB",
    "Name":"Mid-Southern Bancorp Inc."
    },
    {
    "Symbol":"MT",
    "Name":"Arcelor Mittal NY Registry Shares NEW"
    },
    {
    "Symbol":"MTA",
    "Name":"Metalla Royalty & Streaming Ltd."
    },
    {
    "Symbol":"MTAC",
    "Name":"MedTech Acquisition Corporation Class A"
    },
    {
    "Symbol":"MTACU",
    "Name":"MedTech Acquisition Corporation Unit"
    },
    {
    "Symbol":"MTACW",
    "Name":"MedTech Acquisition Corporation Warrant"
    },
    {
    "Symbol":"MTAL",
    "Name":"Metals Acquisition Corp Class A Ordinary Shares"
    },
    {
    "Symbol":"MTB",
    "Name":"M&T Bank Corporation"
    },
    {
    "Symbol":"MTBC",
    "Name":"CareCloud Inc."
    },
    {
    "Symbol":"MTBCP",
    "Name":"CareCloud Inc. 11% Series A Cumulative Redeemable Perpetual Preferred Stock"
    },
    {
    "Symbol":"MTC",
    "Name":"MMTec Inc. Common Shares"
    },
    {
    "Symbol":"MTCH",
    "Name":"Match Group Inc."
    },
    {
    "Symbol":"MTCN",
    "Name":"ArcelorMittal 5.50% Mandatorily Convertible Subordinated Notes due 2023"
    },
    {
    "Symbol":"MTCR",
    "Name":"Metacrine Inc."
    },
    {
    "Symbol":"MTD",
    "Name":"Mettler-Toledo International Inc."
    },
    {
    "Symbol":"MTDR",
    "Name":"Matador Resources Company"
    },
    {
    "Symbol":"MTEM",
    "Name":"Molecular Templates Inc."
    },
    {
    "Symbol":"MTEX",
    "Name":"Mannatech Incorporated"
    },
    {
    "Symbol":"MTG",
    "Name":"MGIC Investment Corporation"
    },
    {
    "Symbol":"MTH",
    "Name":"Meritage Homes Corporation"
    },
    {
    "Symbol":"MTL",
    "Name":"Mechel PAO American Depositary Shares (Each rep. 1 common shares)"
    },
    {
    "Symbol":"MTL^",
    "Name":"Mechel PAO American Depositary Shares (each representing one-half of a Preferred Share)"
    },
    {
    "Symbol":"MTLS",
    "Name":"Materialise NV American Depositary Shares"
    },
    {
    "Symbol":"MTN",
    "Name":"Vail Resorts Inc."
    },
    {
    "Symbol":"MTNB",
    "Name":"Matinas Biopharma Holdings Inc."
    },
    {
    "Symbol":"MTOR",
    "Name":"Meritor Inc."
    },
    {
    "Symbol":"MTP",
    "Name":"Midatech Pharma PLC American Depositary Shs"
    },
    {
    "Symbol":"MTR",
    "Name":"Mesa Royalty Trust"
    },
    {
    "Symbol":"MTRN",
    "Name":"Materion Corporation"
    },
    {
    "Symbol":"MTRX",
    "Name":"Matrix Service Company"
    },
    {
    "Symbol":"MTRY",
    "Name":"Monterey Bio Acquisition Corporation"
    },
    {
    "Symbol":"MTRYU",
    "Name":"Monterey Bio Acquisition Corporation Unit"
    },
    {
    "Symbol":"MTRYW",
    "Name":"Monterey Bio Acquisition Corporation Warrant"
    },
    {
    "Symbol":"MTSI",
    "Name":"MACOM Technology Solutions Holdings Inc."
    },
    {
    "Symbol":"MTTR",
    "Name":"Matterport Inc. Class A"
    },
    {
    "Symbol":"MTW",
    "Name":"Manitowoc Company Inc. (The)"
    },
    {
    "Symbol":"MTX",
    "Name":"Minerals Technologies Inc."
    },
    {
    "Symbol":"MTZ",
    "Name":"MasTec Inc."
    },
    {
    "Symbol":"MU",
    "Name":"Micron Technology Inc."
    },
    {
    "Symbol":"MUA",
    "Name":"Blackrock MuniAssets Fund Inc"
    },
    {
    "Symbol":"MUC",
    "Name":"Blackrock MuniHoldings California Quality Fund Inc. "
    },
    {
    "Symbol":"MUDS",
    "Name":"Mudrick Capital Acquisition Corporation II Class A"
    },
    {
    "Symbol":"MUDSU",
    "Name":"Mudrick Capital Acquisition Corporation II Unit"
    },
    {
    "Symbol":"MUDSW",
    "Name":"Mudrick Capital Acquisition Corporation II Warrant"
    },
    {
    "Symbol":"MUE",
    "Name":"Blackrock MuniHoldings Quality Fund II Inc."
    },
    {
    "Symbol":"MUFG",
    "Name":"Mitsubishi UFJ Financial Group Inc."
    },
    {
    "Symbol":"MUI",
    "Name":"BlackRock Municipal Income Fund Inc."
    },
    {
    "Symbol":"MUJ",
    "Name":"Blackrock MuniHoldings New Jersey Quality Fund Inc."
    },
    {
    "Symbol":"MULN",
    "Name":"Mullen Automotive Inc."
    },
    {
    "Symbol":"MUR",
    "Name":"Murphy Oil Corporation"
    },
    {
    "Symbol":"MUSA",
    "Name":"Murphy USA Inc."
    },
    {
    "Symbol":"MUX",
    "Name":"McEwen Mining Inc."
    },
    {
    "Symbol":"MVBF",
    "Name":"MVB Financial Corp."
    },
    {
    "Symbol":"MVF",
    "Name":"Blackrock MuniVest Fund Inc."
    },
    {
    "Symbol":"MVIS",
    "Name":"MicroVision Inc."
    },
    {
    "Symbol":"MVO",
    "Name":"MV Oil Trust Units of Beneficial Interests"
    },
    {
    "Symbol":"MVST",
    "Name":"Microvast Holdings Inc."
    },
    {
    "Symbol":"MVSTW",
    "Name":"Microvast Holdings Inc. Warrants"
    },
    {
    "Symbol":"MVT",
    "Name":"Blackrock MuniVest Fund II Inc. "
    },
    {
    "Symbol":"MWA",
    "Name":"MUELLER WATER PRODUCTS"
    },
    {
    "Symbol":"MX",
    "Name":"Magnachip Semiconductor Corporation"
    },
    {
    "Symbol":"MXC",
    "Name":"Mexco Energy Corporation"
    },
    {
    "Symbol":"MXCT",
    "Name":"MaxCyte Inc."
    },
    {
    "Symbol":"MXE",
    "Name":"Mexico Equity and Income Fund Inc. (The)"
    },
    {
    "Symbol":"MXF",
    "Name":"Mexico Fund Inc. (The)"
    },
    {
    "Symbol":"MXL",
    "Name":"MaxLinear Inc."
    },
    {
    "Symbol":"MYC",
    "Name":"Blackrock MuniYield California Fund Inc."
    },
    {
    "Symbol":"MYD",
    "Name":"Blackrock MuniYield Fund Inc. "
    },
    {
    "Symbol":"MYE",
    "Name":"Myers Industries Inc."
    },
    {
    "Symbol":"MYFW",
    "Name":"First Western Financial Inc."
    },
    {
    "Symbol":"MYGN",
    "Name":"Myriad Genetics Inc."
    },
    {
    "Symbol":"MYI",
    "Name":"Blackrock MuniYield Quality Fund III Inc"
    },
    {
    "Symbol":"MYJ",
    "Name":"Blackrock MuniYield New Jersey Fund Inc"
    },
    {
    "Symbol":"MYMD",
    "Name":"MyMD Pharmaceuticals Inc."
    },
    {
    "Symbol":"MYN",
    "Name":"Blackrock MuniYield New York Quality Fund Inc."
    },
    {
    "Symbol":"MYNA",
    "Name":"Mynaric AG American Depository Shares"
    },
    {
    "Symbol":"MYNZ",
    "Name":"Mainz Biomed B.V. Ordinary Shares"
    },
    {
    "Symbol":"MYO",
    "Name":"Myomo Inc."
    },
    {
    "Symbol":"MYOV",
    "Name":"Myovant Sciences Ltd. Common Shares"
    },
    {
    "Symbol":"MYPS",
    "Name":"PLAYSTUDIOS Inc.  Class A"
    },
    {
    "Symbol":"MYPSW",
    "Name":"PLAYSTUDIOS Inc. Warrant"
    },
    {
    "Symbol":"MYRG",
    "Name":"MYR Group Inc."
    },
    {
    "Symbol":"MYSZ",
    "Name":"My Size Inc."
    },
    {
    "Symbol":"MYTE",
    "Name":"MYT Netherlands Parent B.V. American Depositary Shares each representing one Ordinary Share"
    },
    {
    "Symbol":"NAAC",
    "Name":"North Atlantic Acquisition Corporation Class A Ordinary Share"
    },
    {
    "Symbol":"NAACU",
    "Name":"North Atlantic Acquisition Corporation Unit"
    },
    {
    "Symbol":"NAACW",
    "Name":"North Atlantic Acquisition Corporation Warrant"
    },
    {
    "Symbol":"NABL",
    "Name":"N-able Inc."
    },
    {
    "Symbol":"NAC",
    "Name":"Nuveen California Quality Municipal Income Fund"
    },
    {
    "Symbol":"NAD",
    "Name":"Nuveen Quality Municipal Income Fund"
    },
    {
    "Symbol":"NAII",
    "Name":"Natural Alternatives International Inc."
    },
    {
    "Symbol":"NAK",
    "Name":"Northern Dynasty Minerals Ltd."
    },
    {
    "Symbol":"NAN",
    "Name":"Nuveen New York Quality Municipal Income Fund"
    },
    {
    "Symbol":"NAOV",
    "Name":"NanoVibronix Inc."
    },
    {
    "Symbol":"NAPA",
    "Name":"The Duckhorn Portfolio Inc."
    },
    {
    "Symbol":"NARI",
    "Name":"Inari Medical Inc."
    },
    {
    "Symbol":"NAT",
    "Name":"Nordic American Tankers Limited"
    },
    {
    "Symbol":"NATH",
    "Name":"Nathan's Famous Inc."
    },
    {
    "Symbol":"NATI",
    "Name":"National Instruments Corporation"
    },
    {
    "Symbol":"NATR",
    "Name":"Nature's Sunshine Products Inc."
    },
    {
    "Symbol":"NAUT",
    "Name":"Nautilus Biotechnolgy Inc."
    },
    {
    "Symbol":"NAVB",
    "Name":"Navidea Biopharmaceuticals Inc."
    },
    {
    "Symbol":"NAVI",
    "Name":"Navient Corporation"
    },
    {
    "Symbol":"NAZ",
    "Name":"Nuveen Arizona Quality Municipal Income Fund"
    },
    {
    "Symbol":"NBB",
    "Name":"Nuveen Taxable Municipal Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"NBEV",
    "Name":"NewAge Inc.   (Delaware)"
    },
    {
    "Symbol":"NBH",
    "Name":"Neuberger Berman Municipal Fund Inc."
    },
    {
    "Symbol":"NBHC",
    "Name":"National Bank Holdings Corporation"
    },
    {
    "Symbol":"NBIX",
    "Name":"Neurocrine Biosciences Inc."
    },
    {
    "Symbol":"NBN",
    "Name":"Northeast Bank"
    },
    {
    "Symbol":"NBO",
    "Name":"Neuberger Berman New York Municipal Fund Inc."
    },
    {
    "Symbol":"NBR",
    "Name":"Nabors Industries Ltd."
    },
    {
    "Symbol":"NBRV",
    "Name":"Nabriva Therapeutics plc Ordinary Shares Ireland"
    },
    {
    "Symbol":"NBSE",
    "Name":"NeuBase Therapeutics Inc. "
    },
    {
    "Symbol":"NBST",
    "Name":"Newbury Street Acquisition Corporation"
    },
    {
    "Symbol":"NBSTU",
    "Name":"Newbury Street Acquisition Corporation Units"
    },
    {
    "Symbol":"NBSTW",
    "Name":"Newbury Street Acquisition Corporation Warrants"
    },
    {
    "Symbol":"NBTB",
    "Name":"NBT Bancorp Inc."
    },
    {
    "Symbol":"NBTX",
    "Name":"Nanobiotix S.A. American Depositary Shares"
    },
    {
    "Symbol":"NBW",
    "Name":"Neuberger Berman California Municipal Fund Inc"
    },
    {
    "Symbol":"NBXG",
    "Name":"Neuberger Berman Next Generation Connectivity Fund Inc."
    },
    {
    "Symbol":"NBY",
    "Name":"NovaBay Pharmaceuticals Inc."
    },
    {
    "Symbol":"NC",
    "Name":"NACCO Industries Inc."
    },
    {
    "Symbol":"NCA",
    "Name":"Nuveen California Municipal Value Fund"
    },
    {
    "Symbol":"NCAC",
    "Name":"Newcourt Acquisition Corp Class A Ordinary Share"
    },
    {
    "Symbol":"NCACU",
    "Name":"Newcourt Acquisition Corp Unit"
    },
    {
    "Symbol":"NCACW",
    "Name":"Newcourt Acquisition Corp Warrant"
    },
    {
    "Symbol":"NCBS",
    "Name":"Nicolet Bankshares Inc."
    },
    {
    "Symbol":"NCLH",
    "Name":"Norwegian Cruise Line Holdings Ltd. Ordinary Shares"
    },
    {
    "Symbol":"NCMI",
    "Name":"National CineMedia Inc."
    },
    {
    "Symbol":"NCNA",
    "Name":"NuCana plc American Depositary Share"
    },
    {
    "Symbol":"NCNO",
    "Name":"nCino Inc."
    },
    {
    "Symbol":"NCR",
    "Name":"NCR Corporation"
    },
    {
    "Symbol":"NCSM",
    "Name":"NCS Multistage Holdings Inc."
    },
    {
    "Symbol":"NCTY",
    "Name":"The9 Limited American Depository Shares"
    },
    {
    "Symbol":"NCV",
    "Name":"Virtus AllianzGI Convertible & Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"NCV^A",
    "Name":"Virtus AllianzGI Convertible & Income Fund 5.625% Series A Cumulative Preferred Shares"
    },
    {
    "Symbol":"NCZ",
    "Name":"Virtus AllianzGI Convertible & Income Fund II Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"NCZ^A",
    "Name":"Virtus AllianzGI Convertible & Income Fund II 5.50% Series A Cumulative Preferred Shares"
    },
    {
    "Symbol":"NDAC",
    "Name":"NightDragon Acquisition Corp. Class A"
    },
    {
    "Symbol":"NDACU",
    "Name":"NightDragon Acquisition Corp. SCALE Units"
    },
    {
    "Symbol":"NDACW",
    "Name":"NightDragon Acquisition Corp. Warrants to purchase Class A"
    },
    {
    "Symbol":"NDAQ",
    "Name":"Nasdaq Inc."
    },
    {
    "Symbol":"NDLS",
    "Name":"Noodles & Company Class A"
    },
    {
    "Symbol":"NDMO",
    "Name":"Nuveen Dynamic Municipal Opportunities Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"NDP",
    "Name":"Tortoise Energy Independence Fund Inc."
    },
    {
    "Symbol":"NDRA",
    "Name":"ENDRA Life Sciences Inc."
    },
    {
    "Symbol":"NDRAW",
    "Name":"ENDRA Life Sciences Inc. Warrants"
    },
    {
    "Symbol":"NDSN",
    "Name":"Nordson Corporation"
    },
    {
    "Symbol":"NE",
    "Name":"Noble Corporation plc Ordinary Shares"
    },
    {
    "Symbol":"NEA",
    "Name":"Nuveen AMT-Free Quality Municipal Income Fund Common Shares of Beneficial Interest Par Value $.01"
    },
    {
    "Symbol":"NECB",
    "Name":"NorthEast Community Bancorp Inc."
    },
    {
    "Symbol":"NEE",
    "Name":"NextEra Energy Inc."
    },
    {
    "Symbol":"NEE^N",
    "Name":"NextEra Energy Inc. Series N Junior Subordinated Debentures due March 1 2079"
    },
    {
    "Symbol":"NEE^O",
    "Name":"NextEra Energy Inc. 4.872% Corporate Units"
    },
    {
    "Symbol":"NEE^P",
    "Name":"NextEra Energy Inc. 5.279% Corporate Units"
    },
    {
    "Symbol":"NEE^Q",
    "Name":"NextEra Energy Inc. 6.219% Corporate Units"
    },
    {
    "Symbol":"NEGG",
    "Name":"Newegg Commerce Inc. Common Shares"
    },
    {
    "Symbol":"NEM",
    "Name":"Newmont Corporation"
    },
    {
    "Symbol":"NEN",
    "Name":"New England Realty Associates Limited Partnership Class A Depositary Receipts Evidencing Units of Limited Partnership"
    },
    {
    "Symbol":"NEO",
    "Name":"NeoGenomics Inc."
    },
    {
    "Symbol":"NEOG",
    "Name":"Neogen Corporation"
    },
    {
    "Symbol":"NEON",
    "Name":"Neonode Inc."
    },
    {
    "Symbol":"NEP",
    "Name":"NextEra Energy Partners LP Common Units representing limited partner interests"
    },
    {
    "Symbol":"NEPH",
    "Name":"Nephros Inc."
    },
    {
    "Symbol":"NEPT",
    "Name":"Neptune Wellness Solutions Inc. Ordinary Shares"
    },
    {
    "Symbol":"NERV",
    "Name":"Minerva Neurosciences Inc"
    },
    {
    "Symbol":"NES",
    "Name":"Nuverra Environmental Solutions Inc."
    },
    {
    "Symbol":"NESR",
    "Name":"National Energy Services Reunited Corp. Ordinary Shares"
    },
    {
    "Symbol":"NESRW",
    "Name":"National Energy Services Reunited Corp. Warrant"
    },
    {
    "Symbol":"NET",
    "Name":"Cloudflare Inc. Class A"
    },
    {
    "Symbol":"NETC",
    "Name":"Nabors Energy Transition Corp. Class A"
    },
    {
    "Symbol":"NETI",
    "Name":"Eneti Inc."
    },
    {
    "Symbol":"NEU",
    "Name":"NewMarket Corp"
    },
    {
    "Symbol":"NEV",
    "Name":"Nuveen Enhanced Municipal Value Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"NEW",
    "Name":"Puxin Limited American Depositary Shares each representing two Ordinary Shares"
    },
    {
    "Symbol":"NEWP",
    "Name":"New Pacific Metals Corp. Common Shares"
    },
    {
    "Symbol":"NEWR",
    "Name":"New Relic Inc."
    },
    {
    "Symbol":"NEWT",
    "Name":"Newtek Business Services Corp.   (Maryland)"
    },
    {
    "Symbol":"NEWTL",
    "Name":"Newtek Business Services Corp. 5.75% Notes due 2024"
    },
    {
    "Symbol":"NEWTZ",
    "Name":"Newtek Business Services Corp. 5.50% Notes Due 2026"
    },
    {
    "Symbol":"NEX",
    "Name":"NexTier Oilfield Solutions Inc."
    },
    {
    "Symbol":"NEXA",
    "Name":"Nexa Resources S.A. Common Shares"
    },
    {
    "Symbol":"NEXI",
    "Name":"NexImmune Inc."
    },
    {
    "Symbol":"NEXT",
    "Name":"NextDecade Corporation"
    },
    {
    "Symbol":"NFBK",
    "Name":"Northfield Bancorp Inc.   (Delaware)"
    },
    {
    "Symbol":"NFE",
    "Name":"New Fortress Energy Inc. Class A"
    },
    {
    "Symbol":"NFG",
    "Name":"National Fuel Gas Company"
    },
    {
    "Symbol":"NFGC",
    "Name":"New Found Gold Corp Common Shares"
    },
    {
    "Symbol":"NFH",
    "Name":"New Frontier Health Corporation Ordinary Shares"
    },
    {
    "Symbol":"NFJ",
    "Name":"Virtus Dividend Interest & Premium Strategy Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"NFLX",
    "Name":"Netflix Inc."
    },
    {
    "Symbol":"NFNT",
    "Name":"Infinite Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"NFYS",
    "Name":"Enphys Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"NG",
    "Name":"Novagold Resources Inc."
    },
    {
    "Symbol":"NGC",
    "Name":"Northern Genesis Acquisition Corp. III"
    },
    {
    "Symbol":"NGD",
    "Name":"New Gold Inc."
    },
    {
    "Symbol":"NGG",
    "Name":"National Grid Transco PLC National Grid PLC (NEW) American Depositary Shares"
    },
    {
    "Symbol":"NGL",
    "Name":"NGL ENERGY PARTNERS LP Common Units representing Limited Partner Interests"
    },
    {
    "Symbol":"NGL^B",
    "Name":"NGL ENERGY PARTNERS LP 9.00% Class B Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units representing limited partnership interests"
    },
    {
    "Symbol":"NGL^C",
    "Name":"NGL ENERGY PARTNERS LP 9.625% Class C Fixed-to-Floating Rate Cumulative  Redeemable Perpetual Preferred Units representing  limited partner interests"
    },
    {
    "Symbol":"NGM",
    "Name":"NGM Biopharmaceuticals Inc."
    },
    {
    "Symbol":"NGMS",
    "Name":"NeoGames S.A. Ordinary Shares"
    },
    {
    "Symbol":"NGS",
    "Name":"Natural Gas Services Group Inc."
    },
    {
    "Symbol":"NGVC",
    "Name":"Natural Grocers by Vitamin Cottage Inc."
    },
    {
    "Symbol":"NGVT",
    "Name":"Ingevity Corporation"
    },
    {
    "Symbol":"NH",
    "Name":"NantHealth Inc."
    },
    {
    "Symbol":"NHC",
    "Name":"National HealthCare Corporation"
    },
    {
    "Symbol":"NHI",
    "Name":"National Health Investors Inc."
    },
    {
    "Symbol":"NHICU",
    "Name":"NewHold Investment Corp. II Unit"
    },
    {
    "Symbol":"NHICW",
    "Name":"NewHold Investment Corp. II Warrant"
    },
    {
    "Symbol":"NHS",
    "Name":"Neuberger Berman High Yield Strategies Fund"
    },
    {
    "Symbol":"NHTC",
    "Name":"Natural Health Trends Corp."
    },
    {
    "Symbol":"NI",
    "Name":"NiSource Inc"
    },
    {
    "Symbol":"NI^B",
    "Name":"NiSource Inc Depositary Shares representing 1/1000th ownership interest in a share of 6.50% Series B Preferred Stock and 1/1000th ownership interest in a share of Series B-1 Preferred Stock"
    },
    {
    "Symbol":"NICE",
    "Name":"NICE Ltd American Depositary Shares"
    },
    {
    "Symbol":"NICK",
    "Name":"Nicholas Financial Inc."
    },
    {
    "Symbol":"NID",
    "Name":"Nuveen Intermediate Duration Municipal Term Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"NIE",
    "Name":"Virtus AllianzGI Equity & Convertible Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"NILE",
    "Name":"BitNile Holdings Inc."
    },
    {
    "Symbol":"NIM",
    "Name":"Nuveen Select Maturities Municipal Fund"
    },
    {
    "Symbol":"NIMC",
    "Name":"NiSource Inc Series A Corporate Units"
    },
    {
    "Symbol":"NINE",
    "Name":"Nine Energy Service Inc."
    },
    {
    "Symbol":"NIO",
    "Name":"NIO Inc. American depositary shares each  representing one Class A ordinary share"
    },
    {
    "Symbol":"NIQ",
    "Name":"Nuveenn Intermediate Duration Quality Municipal Term Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"NISN",
    "Name":"NiSun International Enterprise Development Group Co. Ltd. Class A Common Shares"
    },
    {
    "Symbol":"NIU",
    "Name":"Niu Technologies American Depositary Shares"
    },
    {
    "Symbol":"NJR",
    "Name":"NewJersey Resources Corporation"
    },
    {
    "Symbol":"NKE",
    "Name":"Nike Inc."
    },
    {
    "Symbol":"NKG",
    "Name":"Nuveen Georgia Quality Municipal Income Fund"
    },
    {
    "Symbol":"NKLA",
    "Name":"Nikola Corporation"
    },
    {
    "Symbol":"NKSH",
    "Name":"National Bankshares Inc."
    },
    {
    "Symbol":"NKTR",
    "Name":"Nektar Therapeutics "
    },
    {
    "Symbol":"NKTX",
    "Name":"Nkarta Inc."
    },
    {
    "Symbol":"NKX",
    "Name":"Nuveen California AMT-Free Quality Municipal Income Fund"
    },
    {
    "Symbol":"NL",
    "Name":"NL Industries Inc."
    },
    {
    "Symbol":"NLIT",
    "Name":"Northern Lights Acquisition Corp. Class A"
    },
    {
    "Symbol":"NLITW",
    "Name":"Northern Lights Acquisition Corp. Warrants"
    },
    {
    "Symbol":"NLOK",
    "Name":"NortonLifeLock Inc."
    },
    {
    "Symbol":"NLS",
    "Name":"Nautilus Inc."
    },
    {
    "Symbol":"NLSN",
    "Name":"Nielsen N.V. Ordinary Shares"
    },
    {
    "Symbol":"NLSP",
    "Name":"NLS Pharmaceutics Ltd. Ordinary Shares"
    },
    {
    "Symbol":"NLSPW",
    "Name":"NLS Pharmaceutics Ltd. Warrant"
    },
    {
    "Symbol":"NLTX",
    "Name":"Neoleukin Therapeutics Inc."
    },
    {
    "Symbol":"NLY",
    "Name":"Annaly Capital Management Inc"
    },
    {
    "Symbol":"NLY^F",
    "Name":"Annaly Capital Management Inc 6.95% Series F"
    },
    {
    "Symbol":"NLY^G",
    "Name":"Annaly Capital Management Inc 6.50% Series G Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"NLY^I",
    "Name":"Annaly Capital Management Inc 6.750% Series I Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"NM",
    "Name":"Navios Maritime Holdings Inc."
    },
    {
    "Symbol":"NM^G",
    "Name":"Navios Maritime Holdings Inc. Sponsored ADR Representing 1/100th Perpetual Preferred Series G (Marshall Islands)"
    },
    {
    "Symbol":"NM^H",
    "Name":"Navios Maritime Holdings Inc. Sponsored ADR Representing 1/100th Perp. Preferred Series H%"
    },
    {
    "Symbol":"NMAI",
    "Name":"Nuveen Multi-Asset Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"NMCO",
    "Name":"Nuveen Municipal Credit Opportunities Fund Common Shares"
    },
    {
    "Symbol":"NMFC",
    "Name":"New Mountain Finance Corporation"
    },
    {
    "Symbol":"NMG",
    "Name":"Nouveau Monde Graphite Inc. Common Shares"
    },
    {
    "Symbol":"NMI",
    "Name":"Nuveen Municipal Income Fund Inc."
    },
    {
    "Symbol":"NMIH",
    "Name":"NMI Holdings Inc. Class A"
    },
    {
    "Symbol":"NMK^B",
    "Name":"Niagara Mohawk Holdings Inc. Preferred Stock"
    },
    {
    "Symbol":"NMK^C",
    "Name":"Niagara Mohawk Holdings Inc. Preferred Stock"
    },
    {
    "Symbol":"NML",
    "Name":"Neuberger Berman MLP and Energy Income Fund Inc."
    },
    {
    "Symbol":"NMM",
    "Name":"Navios Maritime Partners LP Common Units Representing Limited Partner Interests"
    },
    {
    "Symbol":"NMMC",
    "Name":"North Mountain Merger Corp. Class A"
    },
    {
    "Symbol":"NMMCU",
    "Name":"North Mountain Merger Corp. Unit"
    },
    {
    "Symbol":"NMMCW",
    "Name":"North Mountain Merger Corp. Warrant"
    },
    {
    "Symbol":"NMR",
    "Name":"Nomura Holdings Inc ADR American Depositary Shares"
    },
    {
    "Symbol":"NMRD",
    "Name":"Nemaura Medical Inc."
    },
    {
    "Symbol":"NMRK",
    "Name":"Newmark Group Inc. Class A"
    },
    {
    "Symbol":"NMS",
    "Name":"Nuveen Minnesota Quality Municipal Income Fund"
    },
    {
    "Symbol":"NMT",
    "Name":"Nuveen Massachusetts Quality Municipal Income Fund"
    },
    {
    "Symbol":"NMTC",
    "Name":"NeuroOne Medical Technologies Corporation"
    },
    {
    "Symbol":"NMTR",
    "Name":"9 Meters Biopharma Inc."
    },
    {
    "Symbol":"NMZ",
    "Name":"Nuveen Municipal High Income Opportunity Fund   $0.01 par value per share"
    },
    {
    "Symbol":"NN",
    "Name":"NextNav Inc."
    },
    {
    "Symbol":"NNAVW",
    "Name":"NextNav Inc. Warrant"
    },
    {
    "Symbol":"NNBR",
    "Name":"NN Inc."
    },
    {
    "Symbol":"NNDM",
    "Name":"Nano Dimension Ltd. American Depositary Shares"
    },
    {
    "Symbol":"NNI",
    "Name":"Nelnet Inc."
    },
    {
    "Symbol":"NNN",
    "Name":"National Retail Properties"
    },
    {
    "Symbol":"NNOX",
    "Name":"NANO-X IMAGING LTD Ordinary Shares"
    },
    {
    "Symbol":"NNVC",
    "Name":"NanoViricides Inc."
    },
    {
    "Symbol":"NNY",
    "Name":"Nuveen New York Municipal Value Fund"
    },
    {
    "Symbol":"NOA",
    "Name":"North American Construction Group Ltd. Common Shares (no par)"
    },
    {
    "Symbol":"NOAC",
    "Name":"Natural Order Acquisition Corp."
    },
    {
    "Symbol":"NOACU",
    "Name":"Natural Order Acquisition Corp. Unit"
    },
    {
    "Symbol":"NOACW",
    "Name":"Natural Order Acquisition Corp. Warrant"
    },
    {
    "Symbol":"NOAH",
    "Name":"Noah Holdings Limited"
    },
    {
    "Symbol":"NOC",
    "Name":"Northrop Grumman Corporation"
    },
    {
    "Symbol":"NODK",
    "Name":"NI Holdings Inc."
    },
    {
    "Symbol":"NOG",
    "Name":"Northern Oil and Gas Inc."
    },
    {
    "Symbol":"NOK",
    "Name":"Nokia Corporation Sponsored American Depositary Shares"
    },
    {
    "Symbol":"NOM",
    "Name":"Nuveen Missouri Quality Municipal Income Fund"
    },
    {
    "Symbol":"NOMD",
    "Name":"Nomad Foods Limited Ordinary Shares"
    },
    {
    "Symbol":"NOTV",
    "Name":"Inotiv Inc."
    },
    {
    "Symbol":"NOV",
    "Name":"NOV Inc."
    },
    {
    "Symbol":"NOVA",
    "Name":"Sunnova Energy International Inc."
    },
    {
    "Symbol":"NOVN",
    "Name":"Novan Inc."
    },
    {
    "Symbol":"NOVT",
    "Name":"Novanta Inc."
    },
    {
    "Symbol":"NOVV",
    "Name":"Nova Vision Acquisition Corp. Ordinary share"
    },
    {
    "Symbol":"NOVVR",
    "Name":"Nova Vision Acquisition Corp. Rights"
    },
    {
    "Symbol":"NOVVW",
    "Name":"Nova Vision Acquisition Corp. Warrant"
    },
    {
    "Symbol":"NOW",
    "Name":"ServiceNow Inc."
    },
    {
    "Symbol":"NP",
    "Name":"Neenah Inc."
    },
    {
    "Symbol":"NPAB",
    "Name":"New Providence Acquisition Corp. II Class A"
    },
    {
    "Symbol":"NPABU",
    "Name":"New Providence Acquisition Corp. II Unit"
    },
    {
    "Symbol":"NPABW",
    "Name":"New Providence Acquisition Corp. II Warrant"
    },
    {
    "Symbol":"NPCE",
    "Name":"Neuropace Inc."
    },
    {
    "Symbol":"NPCT",
    "Name":"Nuveen Core Plus Impact Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"NPFD",
    "Name":"Nuveen Variable Rate Preferred & Income Fund Common Shares"
    },
    {
    "Symbol":"NPK",
    "Name":"National Presto Industries Inc."
    },
    {
    "Symbol":"NPO",
    "Name":"EnPro Industries Inc"
    },
    {
    "Symbol":"NPTN",
    "Name":"NeoPhotonics Corporation"
    },
    {
    "Symbol":"NPV",
    "Name":"Nuveen Virginia Quality Municipal Income Fund"
    },
    {
    "Symbol":"NQP",
    "Name":"Nuveen Pennsylvania Quality Municipal Income Fund"
    },
    {
    "Symbol":"NR",
    "Name":"Newpark Resources Inc."
    },
    {
    "Symbol":"NRAC",
    "Name":"Noble Rock Acquisition Corporation Class A Ordinary Share"
    },
    {
    "Symbol":"NRACW",
    "Name":"Noble Rock Acquisition Corporation Warrant"
    },
    {
    "Symbol":"NRBO",
    "Name":"NeuroBo Pharmaceuticals Inc."
    },
    {
    "Symbol":"NRC",
    "Name":"National Research Corporation   (Delaware)"
    },
    {
    "Symbol":"NRDS",
    "Name":"NerdWallet Inc. Class A"
    },
    {
    "Symbol":"NRDY",
    "Name":"Nerdy Inc. Class A"
    },
    {
    "Symbol":"NREF",
    "Name":"NexPoint Real Estate Finance Inc."
    },
    {
    "Symbol":"NREF^A",
    "Name":"NexPoint Real Estate Finance Inc. 8.50% Series A Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"NRG",
    "Name":"NRG Energy Inc."
    },
    {
    "Symbol":"NRGX",
    "Name":"PIMCO Energy and Tactical Credit Opportunities Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"NRIM",
    "Name":"Northrim BanCorp Inc"
    },
    {
    "Symbol":"NRIX",
    "Name":"Nurix Therapeutics Inc."
    },
    {
    "Symbol":"NRK",
    "Name":"Nuveen New York AMT-Free Quality Municipal Income Fund"
    },
    {
    "Symbol":"NRO",
    "Name":"Neuberger Berman Real Estate Securities Income Fund Inc. Neuberger Berman Real Estate Securities Income Fund Inc."
    },
    {
    "Symbol":"NRP",
    "Name":"Natural Resource Partners LP Limited Partnership"
    },
    {
    "Symbol":"NRSN",
    "Name":"NeuroSense Therapeutics Ltd. Ordinary Shares"
    },
    {
    "Symbol":"NRSNW",
    "Name":"NeuroSense Therapeutics Ltd. Warrant"
    },
    {
    "Symbol":"NRT",
    "Name":"North European Oil Royality Trust"
    },
    {
    "Symbol":"NRUC",
    "Name":"National Rural Utilities Cooperative Finance Corporation 5.500% Subordinated Notes due 2064 (Subordinated Deferrable Interest Notes)"
    },
    {
    "Symbol":"NRXP",
    "Name":"NRX Pharmaceuticals Inc."
    },
    {
    "Symbol":"NRXPW",
    "Name":"NRX Pharmaceuticals Inc. Warrant"
    },
    {
    "Symbol":"NRZ",
    "Name":"New Residential Investment Corp."
    },
    {
    "Symbol":"NRZ^A",
    "Name":"New Residential Investment Corp. 7.50% Series A Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"NRZ^B",
    "Name":"New Residential Investment Corp. 7.125% Series B Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"NRZ^C",
    "Name":"New Residential Investment Corp. 6.375% Series C Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"NRZ^D",
    "Name":"New Residential Investment Corp. 7.00% Fixed-Rate Reset Series D Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"NS",
    "Name":"Nustar Energy L.P.  Common Units"
    },
    {
    "Symbol":"NS^A",
    "Name":"Nustar Energy L.P. 8.50% Series A Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units"
    },
    {
    "Symbol":"NS^B",
    "Name":"Nustar Energy L.P. 7.625% Series B Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units representing limited partner interests"
    },
    {
    "Symbol":"NS^C",
    "Name":"Nustar Energy L.P. 9.00% Series C Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units"
    },
    {
    "Symbol":"NSA",
    "Name":"National Storage Affiliates Trust Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"NSA^A",
    "Name":"National Storage Affiliates Trust 6.000% Series A Cumulative Redeemable Preferred Shares of Beneficial Interest (Liquidation Preference $25.00 per share)"
    },
    {
    "Symbol":"NSC",
    "Name":"Norfolk Southern Corporation"
    },
    {
    "Symbol":"NSEC",
    "Name":"National Security Group Inc."
    },
    {
    "Symbol":"NSIT",
    "Name":"Insight Enterprises Inc."
    },
    {
    "Symbol":"NSL",
    "Name":"Nuveen Senior Income Fund"
    },
    {
    "Symbol":"NSP",
    "Name":"Insperity Inc."
    },
    {
    "Symbol":"NSPR",
    "Name":"InspireMD Inc."
    },
    {
    "Symbol":"NSPRZ",
    "Name":"InspireMD Inc. Series B Warrants"
    },
    {
    "Symbol":"NSR",
    "Name":"Nomad Royalty Company Ltd. Common Shares"
    },
    {
    "Symbol":"NSS",
    "Name":"NuStar Logistics L.P. 7.625% Fixed-to-Floating Rate Subordinated Notes due 2043"
    },
    {
    "Symbol":"NSSC",
    "Name":"NAPCO Security Technologies Inc."
    },
    {
    "Symbol":"NSTB",
    "Name":"Northern Star Investment Corp. II Class A"
    },
    {
    "Symbol":"NSTC",
    "Name":"Northern Star Investment Corp. III Class A"
    },
    {
    "Symbol":"NSTD",
    "Name":"Northern Star Investment Corp. IV Class A"
    },
    {
    "Symbol":"NSTG",
    "Name":"NanoString Technologies Inc."
    },
    {
    "Symbol":"NSTS",
    "Name":"NSTS Bancorp Inc."
    },
    {
    "Symbol":"NSYS",
    "Name":"Nortech Systems Incorporated"
    },
    {
    "Symbol":"NTAP",
    "Name":"NetApp Inc."
    },
    {
    "Symbol":"NTB",
    "Name":"Bank of N.T. Butterfield & Son Limited (The) Voting Ordinary Shares"
    },
    {
    "Symbol":"NTCO",
    "Name":"Natura &Co Holding S.A. American Depositary Shares"
    },
    {
    "Symbol":"NTCT",
    "Name":"NetScout Systems Inc."
    },
    {
    "Symbol":"NTES",
    "Name":"NetEase Inc. American Depositary Shares"
    },
    {
    "Symbol":"NTG",
    "Name":"Tortoise Midstream Energy Fund Inc."
    },
    {
    "Symbol":"NTGR",
    "Name":"NETGEAR Inc."
    },
    {
    "Symbol":"NTIC",
    "Name":"Northern Technologies International Corporation"
    },
    {
    "Symbol":"NTIP",
    "Name":"Network-1 Technologies Inc."
    },
    {
    "Symbol":"NTLA",
    "Name":"Intellia Therapeutics Inc."
    },
    {
    "Symbol":"NTNX",
    "Name":"Nutanix Inc. Class A"
    },
    {
    "Symbol":"NTP",
    "Name":"Nam Tai Property Inc."
    },
    {
    "Symbol":"NTR",
    "Name":"Nutrien Ltd. Common Shares"
    },
    {
    "Symbol":"NTRA",
    "Name":"Natera Inc."
    },
    {
    "Symbol":"NTRB",
    "Name":"Nutriband Inc."
    },
    {
    "Symbol":"NTRBW",
    "Name":"Nutriband Inc. Warrant"
    },
    {
    "Symbol":"NTRS",
    "Name":"Northern Trust Corporation"
    },
    {
    "Symbol":"NTRSO",
    "Name":"Northern Trust Corporation Depositary Shares Each Representing a 1/1000th Interest in a Share of Series E Non-Cumulative Perpetual Preferred Stock"
    },
    {
    "Symbol":"NTST",
    "Name":"NetSTREIT Corp."
    },
    {
    "Symbol":"NTUS",
    "Name":"Natus Medical Incorporated"
    },
    {
    "Symbol":"NTWK",
    "Name":"NetSol Technologies Inc. Common  Stock"
    },
    {
    "Symbol":"NTZ",
    "Name":"Natuzzi S.p.A."
    },
    {
    "Symbol":"NU",
    "Name":"Nu Holdings Ltd. Class A Ordinary Shares"
    },
    {
    "Symbol":"NUAN",
    "Name":"Nuance Communications Inc."
    },
    {
    "Symbol":"NUE",
    "Name":"Nucor Corporation"
    },
    {
    "Symbol":"NUO",
    "Name":"Nuveen Ohio Quality Municipal Income Fund"
    },
    {
    "Symbol":"NURO",
    "Name":"NeuroMetrix Inc."
    },
    {
    "Symbol":"NUS",
    "Name":"Nu Skin Enterprises Inc."
    },
    {
    "Symbol":"NUV",
    "Name":"Nuveen Municipal Value Fund Inc."
    },
    {
    "Symbol":"NUVA",
    "Name":"NuVasive Inc."
    },
    {
    "Symbol":"NUVB",
    "Name":"Nuvation Bio Inc. Class A"
    },
    {
    "Symbol":"NUVL",
    "Name":"Nuvalent Inc. Class A"
    },
    {
    "Symbol":"NUW",
    "Name":"Nuveen AMT-Free Municipal Value Fund"
    },
    {
    "Symbol":"NUWE",
    "Name":"Nuwellis Inc."
    },
    {
    "Symbol":"NUZE",
    "Name":"NuZee Inc."
    },
    {
    "Symbol":"NVAC",
    "Name":"NorthView Acquisition Corporation"
    },
    {
    "Symbol":"NVACR",
    "Name":"NorthView Acquisition Corporation Rights"
    },
    {
    "Symbol":"NVACW",
    "Name":"NorthView Acquisition Corporation Warrant"
    },
    {
    "Symbol":"NVAX",
    "Name":"Novavax Inc."
    },
    {
    "Symbol":"NVCN",
    "Name":"Neovasc Inc. Common Shares"
    },
    {
    "Symbol":"NVCR",
    "Name":"NovoCure Limited Ordinary Shares"
    },
    {
    "Symbol":"NVDA",
    "Name":"NVIDIA Corporation"
    },
    {
    "Symbol":"NVEC",
    "Name":"NVE Corporation"
    },
    {
    "Symbol":"NVEE",
    "Name":"NV5 Global Inc."
    },
    {
    "Symbol":"NVEI",
    "Name":"Nuvei Corporation Subordinate Voting Shares"
    },
    {
    "Symbol":"NVFY",
    "Name":"Nova Lifestyle Inc."
    },
    {
    "Symbol":"NVG",
    "Name":"Nuveen AMT-Free Municipal Credit Income Fund"
    },
    {
    "Symbol":"NVGS",
    "Name":"Navigator Holdings Ltd. Ordinary Shares (Marshall Islands)"
    },
    {
    "Symbol":"NVIV",
    "Name":"InVivo Therapeutics Holdings Corp"
    },
    {
    "Symbol":"NVMI",
    "Name":"Nova Ltd. Ordinary Shares"
    },
    {
    "Symbol":"NVNO",
    "Name":"enVVeno Medical Corporation"
    },
    {
    "Symbol":"NVNOW",
    "Name":"enVVeno Medical Corporation Warrants"
    },
    {
    "Symbol":"NVO",
    "Name":"Novo Nordisk A/S"
    },
    {
    "Symbol":"NVOS",
    "Name":"Novo Integrated Sciences Inc."
    },
    {
    "Symbol":"NVR",
    "Name":"NVR Inc."
    },
    {
    "Symbol":"NVRO",
    "Name":"Nevro Corp."
    },
    {
    "Symbol":"NVS",
    "Name":"Novartis AG"
    },
    {
    "Symbol":"NVSA",
    "Name":"New Vista Acquisition Corp Class A Ordinary Shares"
    },
    {
    "Symbol":"NVSAU",
    "Name":"New Vista Acquisition Corp Unit"
    },
    {
    "Symbol":"NVSAW",
    "Name":"New Vista Acquisition Corp. Warrant"
    },
    {
    "Symbol":"NVST",
    "Name":"Envista Holdings Corporation"
    },
    {
    "Symbol":"NVT",
    "Name":"nVent Electric plc Ordinary Shares"
    },
    {
    "Symbol":"NVTA",
    "Name":"Invitae Corporation"
    },
    {
    "Symbol":"NVTS",
    "Name":"Navitas Semiconductor Corporation"
    },
    {
    "Symbol":"NVTSW",
    "Name":"Navitas Semiconductor Corporation Warrants"
    },
    {
    "Symbol":"NVVE",
    "Name":"Nuvve Holding Corp."
    },
    {
    "Symbol":"NVVEW",
    "Name":"Nuvve Holding Corp. Warrant"
    },
    {
    "Symbol":"NWBI",
    "Name":"Northwest Bancshares Inc."
    },
    {
    "Symbol":"NWE",
    "Name":"NorthWestern Corporation"
    },
    {
    "Symbol":"NWFL",
    "Name":"Norwood Financial Corp."
    },
    {
    "Symbol":"NWG",
    "Name":"NatWest Group plc American Depositary Shares"
    },
    {
    "Symbol":"NWL",
    "Name":"Newell Brands Inc."
    },
    {
    "Symbol":"NWLI",
    "Name":"National Western Life Group Inc. Class A"
    },
    {
    "Symbol":"NWN",
    "Name":"Northwest Natural Holding Company"
    },
    {
    "Symbol":"NWPX",
    "Name":"Northwest Pipe Company"
    },
    {
    "Symbol":"NWS",
    "Name":"News Corporation Class B"
    },
    {
    "Symbol":"NWSA",
    "Name":"News Corporation Class A"
    },
    {
    "Symbol":"NX",
    "Name":"Quanex Building Products Corporation"
    },
    {
    "Symbol":"NXC",
    "Name":"Nuveen California Select Tax-Free Income Portfolio"
    },
    {
    "Symbol":"NXDT",
    "Name":"NexPoint Diversified Real Estate Trust"
    },
    {
    "Symbol":"NXE",
    "Name":"Nexgen Energy Ltd. Common Shares"
    },
    {
    "Symbol":"NXGL",
    "Name":"NexGel Inc"
    },
    {
    "Symbol":"NXGLW",
    "Name":"NexGel Inc Warrant"
    },
    {
    "Symbol":"NXGN",
    "Name":"NextGen Healthcare Inc."
    },
    {
    "Symbol":"NXJ",
    "Name":"Nuveen New Jersey Qualified Municipal Fund"
    },
    {
    "Symbol":"NXN",
    "Name":"Nuveen New York Select Tax-Free Income Portfolio"
    },
    {
    "Symbol":"NXP",
    "Name":"Nuveen Select Tax Free Income Portfolio"
    },
    {
    "Symbol":"NXPI",
    "Name":"NXP Semiconductors N.V."
    },
    {
    "Symbol":"NXPL",
    "Name":"NextPlat Corp"
    },
    {
    "Symbol":"NXPLW",
    "Name":"NextPlat Corp Warrants"
    },
    {
    "Symbol":"NXRT",
    "Name":"NexPoint Residential Trust Inc."
    },
    {
    "Symbol":"NXST",
    "Name":"Nexstar Media Group Inc. Class A"
    },
    {
    "Symbol":"NXTC",
    "Name":"NextCure Inc."
    },
    {
    "Symbol":"NXTD",
    "Name":"Nxt-ID Inc."
    },
    {
    "Symbol":"NXTP",
    "Name":"NextPlay Technologies Inc."
    },
    {
    "Symbol":"NXU",
    "Name":"Novus Capital Corporation II Class A"
    },
    {
    "Symbol":"NYC",
    "Name":"New York City REIT Inc. Class A"
    },
    {
    "Symbol":"NYCB",
    "Name":"New York Community Bancorp Inc."
    },
    {
    "Symbol":"NYCB^A",
    "Name":"New York Community Bancorp Inc. Depositary shares each representing a 1/40th interest in a share of Fixed-to-Floating Rate Series A Noncumulative Perpetual Preferred Stock"
    },
    {
    "Symbol":"NYCB^U",
    "Name":"New York Community Bancorp Inc. New York Community Capital Tr V (BONUSES)"
    },
    {
    "Symbol":"NYMT",
    "Name":"New York Mortgage Trust Inc."
    },
    {
    "Symbol":"NYMTL",
    "Name":"New York Mortgage Trust Inc. 6.875% Series F Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock $0.01 par value per share"
    },
    {
    "Symbol":"NYMTM",
    "Name":"New York Mortgage Trust Inc. 7.875% Series E Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"NYMTN",
    "Name":"New York Mortgage Trust Inc. 8.00% Series D Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"NYMTZ",
    "Name":"New York Mortgage Trust Inc. 7.000% Series G Cumulative Redeemable Preferred Stock $0.01 par value per share"
    },
    {
    "Symbol":"NYMX",
    "Name":"Nymox Pharmaceutical Corporation   (Bahamas)"
    },
    {
    "Symbol":"NYT",
    "Name":"New York Times Company (The)"
    },
    {
    "Symbol":"NYXH",
    "Name":"Nyxoah SA Ordinary Shares"
    },
    {
    "Symbol":"NZF",
    "Name":"Nuveen Municipal Credit Income Fund"
    },
    {
    "Symbol":"O",
    "Name":"Realty Income Corporation"
    },
    {
    "Symbol":"OACB",
    "Name":"Oaktree Acquisition Corp. II Class A Ordinary Shares"
    },
    {
    "Symbol":"OAK^A",
    "Name":"Oaktree Capital Group LLC 6.625% Series A Preferred units"
    },
    {
    "Symbol":"OAK^B",
    "Name":"Oaktree Capital Group LLC 6.550% Series B Preferred Units"
    },
    {
    "Symbol":"OAS",
    "Name":"Oasis Petroleum Inc."
    },
    {
    "Symbol":"OB",
    "Name":"Outbrain Inc."
    },
    {
    "Symbol":"OBAS",
    "Name":"Optibase Ltd. Ordinary Shares"
    },
    {
    "Symbol":"OBCI",
    "Name":"Ocean Bio-Chem Inc."
    },
    {
    "Symbol":"OBLG",
    "Name":"Oblong Inc."
    },
    {
    "Symbol":"OBNK",
    "Name":"Origin Bancorp Inc."
    },
    {
    "Symbol":"OBSV",
    "Name":"ObsEva SA Ordinary Shares"
    },
    {
    "Symbol":"OBT",
    "Name":"Orange County Bancorp Inc."
    },
    {
    "Symbol":"OC",
    "Name":"Owens Corning Inc   New"
    },
    {
    "Symbol":"OCA",
    "Name":"Omnichannel Acquisition Corp. Class A"
    },
    {
    "Symbol":"OCAX",
    "Name":"OCA Acquisition Corp. Class A"
    },
    {
    "Symbol":"OCAXU",
    "Name":"OCA Acquisition Corp. Unit"
    },
    {
    "Symbol":"OCAXW",
    "Name":"OCA Acquisition Corp. Warrant"
    },
    {
    "Symbol":"OCC",
    "Name":"Optical Cable Corporation"
    },
    {
    "Symbol":"OCCI",
    "Name":"OFS Credit Company Inc."
    },
    {
    "Symbol":"OCCIN",
    "Name":"OFS Credit Company Inc. 5.25% Series E Term Preferred Stock Due 2026"
    },
    {
    "Symbol":"OCCIO",
    "Name":"OFS Credit Company Inc. 6.125% Series C Term Preferred Stock"
    },
    {
    "Symbol":"OCDX",
    "Name":"Ortho Clinical Diagnostics Holdings plc Ordinary Shares"
    },
    {
    "Symbol":"OCFC",
    "Name":"OceanFirst Financial Corp."
    },
    {
    "Symbol":"OCFCP",
    "Name":"OceanFirst Financial Corp. Depositary Shares"
    },
    {
    "Symbol":"OCFT",
    "Name":"OneConnect Financial Technology Co. Ltd. American Depositary Shares each representing three ordinary shares"
    },
    {
    "Symbol":"OCG",
    "Name":"Oriental Culture Holding LTD Ordinary Shares"
    },
    {
    "Symbol":"OCGN",
    "Name":"Ocugen Inc."
    },
    {
    "Symbol":"OCN",
    "Name":"Ocwen Financial Corporation NEW"
    },
    {
    "Symbol":"OCSL",
    "Name":"Oaktree Specialty Lending Corporation"
    },
    {
    "Symbol":"OCUL",
    "Name":"Ocular Therapeutix Inc."
    },
    {
    "Symbol":"OCUP",
    "Name":"Ocuphire Pharma Inc."
    },
    {
    "Symbol":"OCX",
    "Name":"Oncocyte Corporation"
    },
    {
    "Symbol":"ODC",
    "Name":"Oil-Dri Corporation Of America"
    },
    {
    "Symbol":"ODFL",
    "Name":"Old Dominion Freight Line Inc."
    },
    {
    "Symbol":"ODP",
    "Name":"The ODP Corporation"
    },
    {
    "Symbol":"OEC",
    "Name":"Orion Engineered Carbons S.A Common Shares"
    },
    {
    "Symbol":"OEG",
    "Name":"Orbital Energy Group Inc."
    },
    {
    "Symbol":"OEPW",
    "Name":"One Equity Partners Open Water I Corp. Class A"
    },
    {
    "Symbol":"OEPWU",
    "Name":"One Equity Partners Open Water I Corp. Unit"
    },
    {
    "Symbol":"OEPWW",
    "Name":"One Equity Partners Open Water I Corp. Warrant"
    },
    {
    "Symbol":"OESX",
    "Name":"Orion Energy Systems Inc."
    },
    {
    "Symbol":"OFC",
    "Name":"Corporate Office Properties Trust"
    },
    {
    "Symbol":"OFED",
    "Name":"Oconee Federal Financial Corp."
    },
    {
    "Symbol":"OFG",
    "Name":"OFG Bancorp"
    },
    {
    "Symbol":"OFIX",
    "Name":"Orthofix Medical Inc.   (DE)"
    },
    {
    "Symbol":"OFLX",
    "Name":"Omega Flex Inc."
    },
    {
    "Symbol":"OFS",
    "Name":"OFS Capital Corporation"
    },
    {
    "Symbol":"OFSSH",
    "Name":"OFS Capital Corporation 4.95% Notes due 2028"
    },
    {
    "Symbol":"OG",
    "Name":"Onion Global Limited American Depositary Shares (each ten (10) ADSs representing one (1) Class A Ordinary Share)"
    },
    {
    "Symbol":"OGE",
    "Name":"OGE Energy Corp"
    },
    {
    "Symbol":"OGEN",
    "Name":"Oragenics Inc."
    },
    {
    "Symbol":"OGI",
    "Name":"Organigram Holdings Inc. Common Shares"
    },
    {
    "Symbol":"OGN",
    "Name":"Organon & Co."
    },
    {
    "Symbol":"OGS",
    "Name":"ONE Gas Inc."
    },
    {
    "Symbol":"OHAA",
    "Name":"OPY Acquisition Corp. I Class A"
    },
    {
    "Symbol":"OHAAU",
    "Name":"OPY Acquisition Corp. I Units"
    },
    {
    "Symbol":"OHAAW",
    "Name":"OPY Acquisition Corp. I Warrant"
    },
    {
    "Symbol":"OHI",
    "Name":"Omega Healthcare Investors Inc."
    },
    {
    "Symbol":"OHPA",
    "Name":"Orion Acquisition Corp. Class A"
    },
    {
    "Symbol":"OHPAU",
    "Name":"Orion Acquisition Corp. Unit"
    },
    {
    "Symbol":"OHPAW",
    "Name":"Orion Acquisition Corp. Warrant"
    },
    {
    "Symbol":"OI",
    "Name":"O-I Glass Inc."
    },
    {
    "Symbol":"OIA",
    "Name":"Invesco Municipal Income Opportunities Trust"
    },
    {
    "Symbol":"OII",
    "Name":"Oceaneering International Inc."
    },
    {
    "Symbol":"OIIM",
    "Name":"O2Micro International Limited American Depositary Shares"
    },
    {
    "Symbol":"OIS",
    "Name":"Oil States International Inc."
    },
    {
    "Symbol":"OKE",
    "Name":"ONEOK Inc."
    },
    {
    "Symbol":"OKTA",
    "Name":"Okta Inc. Class A"
    },
    {
    "Symbol":"OLB",
    "Name":"The OLB Group Inc."
    },
    {
    "Symbol":"OLED",
    "Name":"Universal Display Corporation"
    },
    {
    "Symbol":"OLIT",
    "Name":"OmniLit Acquisition Corp. Class A"
    },
    {
    "Symbol":"OLITU",
    "Name":"OmniLit Acquisition Corp. Units"
    },
    {
    "Symbol":"OLITW",
    "Name":"OmniLit Acquisition Corp. Warrants."
    },
    {
    "Symbol":"OLK",
    "Name":"Olink Holding AB (publ) American Depositary Shares"
    },
    {
    "Symbol":"OLLI",
    "Name":"Ollie's Bargain Outlet Holdings Inc."
    },
    {
    "Symbol":"OLMA",
    "Name":"Olema Pharmaceuticals Inc."
    },
    {
    "Symbol":"OLN",
    "Name":"Olin Corporation"
    },
    {
    "Symbol":"OLO",
    "Name":"Olo Inc. Class A"
    },
    {
    "Symbol":"OLP",
    "Name":"One Liberty Properties Inc."
    },
    {
    "Symbol":"OLPX",
    "Name":"Olaplex Holdings Inc."
    },
    {
    "Symbol":"OM",
    "Name":"Outset Medical Inc."
    },
    {
    "Symbol":"OMAB",
    "Name":"Grupo Aeroportuario del Centro Norte S.A.B. de C.V. ADS"
    },
    {
    "Symbol":"OMC",
    "Name":"Omnicom Group Inc."
    },
    {
    "Symbol":"OMCL",
    "Name":"Omnicell Inc.   ($0.001 par value)"
    },
    {
    "Symbol":"OMEG",
    "Name":"Omega Alpha SPAC Class A Ordinary Shares"
    },
    {
    "Symbol":"OMER",
    "Name":"Omeros Corporation"
    },
    {
    "Symbol":"OMEX",
    "Name":"Odyssey Marine Exploration Inc."
    },
    {
    "Symbol":"OMF",
    "Name":"OneMain Holdings Inc."
    },
    {
    "Symbol":"OMGA",
    "Name":"Omega Therapeutics Inc."
    },
    {
    "Symbol":"OMI",
    "Name":"Owens & Minor Inc."
    },
    {
    "Symbol":"OMIC",
    "Name":"Singular Genomics Systems Inc."
    },
    {
    "Symbol":"OMP",
    "Name":"Oasis Midstream Partners LP Common Units Representing Limited Partner Interests"
    },
    {
    "Symbol":"OMQS",
    "Name":"OMNIQ Corp."
    },
    {
    "Symbol":"ON",
    "Name":"ON Semiconductor Corporation"
    },
    {
    "Symbol":"ONB",
    "Name":"Old National Bancorp"
    },
    {
    "Symbol":"ONCR",
    "Name":"Oncorus Inc."
    },
    {
    "Symbol":"ONCS",
    "Name":"OncoSec Medical Incorporated"
    },
    {
    "Symbol":"ONCT",
    "Name":"Oncternal Therapeutics Inc."
    },
    {
    "Symbol":"ONCY",
    "Name":"Oncolytics Biotech Inc. Common Shares"
    },
    {
    "Symbol":"ONDS",
    "Name":"Ondas Holdings Inc."
    },
    {
    "Symbol":"ONE",
    "Name":"OneSmart International Education Group Limited ADS"
    },
    {
    "Symbol":"ONEM",
    "Name":"1Life Healthcare Inc."
    },
    {
    "Symbol":"ONEW",
    "Name":"OneWater Marine Inc. Class A"
    },
    {
    "Symbol":"ONL",
    "Name":"Orion Office REIT Inc."
    },
    {
    "Symbol":"ONON",
    "Name":"On Holding AG Class A Ordinary Shares"
    },
    {
    "Symbol":"ONTF",
    "Name":"ON24 Inc."
    },
    {
    "Symbol":"ONTO",
    "Name":"Onto Innovation Inc."
    },
    {
    "Symbol":"ONTX",
    "Name":"Onconova Therapeutics Inc."
    },
    {
    "Symbol":"ONVO",
    "Name":"Organovo Holdings Inc."
    },
    {
    "Symbol":"ONYX",
    "Name":"Onyx Acquisition Co. I Class A Ordinary Shares"
    },
    {
    "Symbol":"ONYXU",
    "Name":"Onyx Acquisition Co. I Unit"
    },
    {
    "Symbol":"ONYXW",
    "Name":"Onyx Acquisition Co. I Warrant"
    },
    {
    "Symbol":"OOMA",
    "Name":"Ooma Inc."
    },
    {
    "Symbol":"OP",
    "Name":"OceanPal Inc."
    },
    {
    "Symbol":"OPA",
    "Name":"Magnum Opus Acquisition Limited Class A Ordinary Shares"
    },
    {
    "Symbol":"OPAD",
    "Name":"Offerpad Solutions Inc. Class A"
    },
    {
    "Symbol":"OPBK",
    "Name":"OP Bancorp"
    },
    {
    "Symbol":"OPCH",
    "Name":"Option Care Health Inc."
    },
    {
    "Symbol":"OPEN",
    "Name":"Opendoor Technologies Inc"
    },
    {
    "Symbol":"OPFI",
    "Name":"OppFi Inc. Class A"
    },
    {
    "Symbol":"OPGN",
    "Name":"OpGen Inc."
    },
    {
    "Symbol":"OPHC",
    "Name":"OptimumBank Holdings Inc."
    },
    {
    "Symbol":"OPI",
    "Name":"Office Properties Income Trust Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"OPINL",
    "Name":"Office Properties Income Trust 6.375% Senior Notes due 2050"
    },
    {
    "Symbol":"OPK",
    "Name":"OPKO Health Inc."
    },
    {
    "Symbol":"OPNT",
    "Name":"Opiant Pharmaceuticals Inc."
    },
    {
    "Symbol":"OPOF",
    "Name":"Old Point Financial Corporation"
    },
    {
    "Symbol":"OPP",
    "Name":"RiverNorth/DoubleLine Strategic Opportunity Fund Inc."
    },
    {
    "Symbol":"OPP^A",
    "Name":"RiverNorth/DoubleLine Strategic Opportunity Fund Inc. 4.375% Series A Cumulative Preferred Stock"
    },
    {
    "Symbol":"OPP^B",
    "Name":"RiverNorth/DoubleLine Strategic Opportunity Fund Inc. 4.75% Series B Cumulative Preferred Stock"
    },
    {
    "Symbol":"OPRA",
    "Name":"Opera Limited American Depositary Shares"
    },
    {
    "Symbol":"OPRT",
    "Name":"Oportun Financial Corporation"
    },
    {
    "Symbol":"OPRX",
    "Name":"OptimizeRx Corporation"
    },
    {
    "Symbol":"OPT",
    "Name":"Opthea Limited American Depositary Shares"
    },
    {
    "Symbol":"OPTN",
    "Name":"OptiNose Inc."
    },
    {
    "Symbol":"OPTT",
    "Name":"Ocean Power Technologies Inc."
    },
    {
    "Symbol":"OPY",
    "Name":"Oppenheimer Holdings Inc. Class A   (DE)"
    },
    {
    "Symbol":"OR",
    "Name":"Osisko Gold Royalties Ltd Common Shares"
    },
    {
    "Symbol":"ORA",
    "Name":"Ormat Technologies Inc."
    },
    {
    "Symbol":"ORAN",
    "Name":"Orange"
    },
    {
    "Symbol":"ORC",
    "Name":"Orchid Island Capital Inc."
    },
    {
    "Symbol":"ORCC",
    "Name":"Owl Rock Capital Corporation"
    },
    {
    "Symbol":"ORCL",
    "Name":"Oracle Corporation"
    },
    {
    "Symbol":"ORGN",
    "Name":"Origin Materials Inc."
    },
    {
    "Symbol":"ORGNW",
    "Name":"Origin Materials Inc. Warrants"
    },
    {
    "Symbol":"ORGO",
    "Name":"Organogenesis Holdings Inc. Class A"
    },
    {
    "Symbol":"ORGS",
    "Name":"Orgenesis Inc."
    },
    {
    "Symbol":"ORI",
    "Name":"Old Republic International Corporation"
    },
    {
    "Symbol":"ORIA",
    "Name":"Orion Biotech Opportunities Corp. Class A Ordinary Share"
    },
    {
    "Symbol":"ORIAU",
    "Name":"Orion Biotech Opportunities Corp. Units"
    },
    {
    "Symbol":"ORIC",
    "Name":"Oric Pharmaceuticals Inc."
    },
    {
    "Symbol":"ORLA",
    "Name":"Orla Mining Ltd. Common Shares"
    },
    {
    "Symbol":"ORLY",
    "Name":"O'Reilly Automotive Inc."
    },
    {
    "Symbol":"ORMP",
    "Name":"Oramed Pharmaceuticals Inc."
    },
    {
    "Symbol":"ORN",
    "Name":"Orion Group Holdings Inc. Common"
    },
    {
    "Symbol":"ORPH",
    "Name":"Orphazyme A/S American Depositary Shares"
    },
    {
    "Symbol":"ORRF",
    "Name":"Orrstown Financial Services Inc"
    },
    {
    "Symbol":"ORTX",
    "Name":"Orchard Therapeutics plc American Depositary Shares"
    },
    {
    "Symbol":"OSBC",
    "Name":"Old Second Bancorp Inc."
    },
    {
    "Symbol":"OSCR",
    "Name":"Oscar Health Inc. Class A"
    },
    {
    "Symbol":"OSG",
    "Name":"Overseas Shipholding Group Inc. Class A"
    },
    {
    "Symbol":"OSH",
    "Name":"Oak Street Health Inc."
    },
    {
    "Symbol":"OSI",
    "Name":"Osiris Acquisition Corp. Class A"
    },
    {
    "Symbol":"OSIS",
    "Name":"OSI Systems Inc.   (DE)"
    },
    {
    "Symbol":"OSK",
    "Name":"Oshkosh Corporation (Holding Company)"
    },
    {
    "Symbol":"OSPN",
    "Name":"OneSpan Inc."
    },
    {
    "Symbol":"OSS",
    "Name":"One Stop Systems Inc."
    },
    {
    "Symbol":"OSTK",
    "Name":"Overstock.com Inc."
    },
    {
    "Symbol":"OSTR",
    "Name":"Oyster Enterprises Acquisition Corp. Class A"
    },
    {
    "Symbol":"OSTRU",
    "Name":"Oyster Enterprises Acquisition Corp. Unit"
    },
    {
    "Symbol":"OSTRW",
    "Name":"Oyster Enterprises Acquisition Corp. Warrant"
    },
    {
    "Symbol":"OSUR",
    "Name":"OraSure Technologies Inc."
    },
    {
    "Symbol":"OSW",
    "Name":"OneSpaWorld Holdings Limited Common Shares"
    },
    {
    "Symbol":"OTEC",
    "Name":"OceanTech Acquisitions I Corp. Class A"
    },
    {
    "Symbol":"OTECU",
    "Name":"OceanTech Acquisitions I Corp. Units"
    },
    {
    "Symbol":"OTECW",
    "Name":"OceanTech Acquisitions I Corp. Warrant"
    },
    {
    "Symbol":"OTEX",
    "Name":"Open Text Corporation Common Shares"
    },
    {
    "Symbol":"OTIC",
    "Name":"Otonomy Inc."
    },
    {
    "Symbol":"OTIS",
    "Name":"Otis Worldwide Corporation"
    },
    {
    "Symbol":"OTLK",
    "Name":"Outlook Therapeutics Inc."
    },
    {
    "Symbol":"OTLKW",
    "Name":"Outlook Therapeutics Inc. Series A Warrant Expiring 02/18/2022"
    },
    {
    "Symbol":"OTLY",
    "Name":"Oatly Group AB American Depositary Shares"
    },
    {
    "Symbol":"OTMO",
    "Name":"Otonomo Technologies Ltd. Ordinary shares"
    },
    {
    "Symbol":"OTMOW",
    "Name":"Otonomo Technologies Ltd. Warrant"
    },
    {
    "Symbol":"OTRA",
    "Name":"OTR Acquisition Corp. Class A"
    },
    {
    "Symbol":"OTRAW",
    "Name":"OTR Acquisition Corp. Warrant"
    },
    {
    "Symbol":"OTRK",
    "Name":"Ontrak Inc."
    },
    {
    "Symbol":"OTRKP",
    "Name":"Ontrak Inc. 9.50% Series A Cumulative Perpetual Preferred Stock"
    },
    {
    "Symbol":"OTTR",
    "Name":"Otter Tail Corporation"
    },
    {
    "Symbol":"OUST",
    "Name":"Ouster Inc."
    },
    {
    "Symbol":"OUT",
    "Name":"OUTFRONT Media Inc."
    },
    {
    "Symbol":"OVBC",
    "Name":"Ohio Valley Banc Corp."
    },
    {
    "Symbol":"OVID",
    "Name":"Ovid Therapeutics Inc."
    },
    {
    "Symbol":"OVLY",
    "Name":"Oak Valley Bancorp (CA)"
    },
    {
    "Symbol":"OVV",
    "Name":"Ovintiv Inc. (DE)"
    },
    {
    "Symbol":"OWL",
    "Name":"Blue Owl Capital Inc. Class A"
    },
    {
    "Symbol":"OWLT",
    "Name":"Owlet Inc. Class A"
    },
    {
    "Symbol":"OXAC",
    "Name":"Oxbridge Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"OXACU",
    "Name":"Oxbridge Acquisition Corp. Unit"
    },
    {
    "Symbol":"OXACW",
    "Name":"Oxbridge Acquisition Corp. Warrant"
    },
    {
    "Symbol":"OXBR",
    "Name":"Oxbridge Re Holdings Limited Ordinary Shares"
    },
    {
    "Symbol":"OXBRW",
    "Name":"Oxbridge Re Holdings Limited Warrant expiring 3/26/2024"
    },
    {
    "Symbol":"OXLC",
    "Name":"Oxford Lane Capital Corp."
    },
    {
    "Symbol":"OXLCL",
    "Name":"Oxford Lane Capital Corp. 6.75% Notes due 2031"
    },
    {
    "Symbol":"OXLCM",
    "Name":"Oxford Lane Capital Corp. 6.75% Series 2024 Term Preferred Stock"
    },
    {
    "Symbol":"OXLCO",
    "Name":"Oxford Lane Capital Corp. Preferred Stock Shares 6.00% Series 2029"
    },
    {
    "Symbol":"OXLCP",
    "Name":"Oxford Lane Capital Corp. 6.25% Series 2027 Term Preferred Shares"
    },
    {
    "Symbol":"OXLCZ",
    "Name":"Oxford Lane Capital Corp. 5.00% Notes due 2027"
    },
    {
    "Symbol":"OXM",
    "Name":"Oxford Industries Inc."
    },
    {
    "Symbol":"OXSQ",
    "Name":"Oxford Square Capital Corp."
    },
    {
    "Symbol":"OXSQG",
    "Name":"Oxford Square Capital Corp. 5.50% Notes due 2028"
    },
    {
    "Symbol":"OXSQL",
    "Name":"Oxford Square Capital Corp. 6.50% Notes due 2024"
    },
    {
    "Symbol":"OXSQZ",
    "Name":"Oxford Square Capital Corp. 6.25% Notes due 2026"
    },
    {
    "Symbol":"OXUS",
    "Name":"Oxus Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"OXUSU",
    "Name":"Oxus Acquisition Corp. Unit"
    },
    {
    "Symbol":"OXUSW",
    "Name":"Oxus Acquisition Corp. Warrant"
    },
    {
    "Symbol":"OXY",
    "Name":"Occidental Petroleum Corporation"
    },
    {
    "Symbol":"OYST",
    "Name":"Oyster Point Pharma Inc."
    },
    {
    "Symbol":"OZ",
    "Name":"Belpointe PREP LLC Class A Units"
    },
    {
    "Symbol":"OZK",
    "Name":"Bank OZK"
    },
    {
    "Symbol":"OZKAP",
    "Name":"Bank OZK 4.625% Series A Non-Cumulative Perpetual Preferred Stock"
    },
    {
    "Symbol":"OZON",
    "Name":"Ozon Holdings PLC American Depositary Shares each ADS representing one ordinary share"
    },
    {
    "Symbol":"PAA",
    "Name":"Plains All American Pipeline L.P. Common Units representing Limited Partner Interests"
    },
    {
    "Symbol":"PAAS",
    "Name":"Pan American Silver Corp."
    },
    {
    "Symbol":"PAC",
    "Name":"Grupo Aeroportuario Del Pacifico S.A. B. de C.V. Grupo Aeroportuario Del Pacifico S.A. de C.V. (each representing 10 Series B shares)"
    },
    {
    "Symbol":"PACB",
    "Name":"Pacific Biosciences of California Inc."
    },
    {
    "Symbol":"PACI",
    "Name":"PROOF Acquisition Corp I Class A"
    },
    {
    "Symbol":"PACK",
    "Name":"Ranpak Holdings Corp Class A"
    },
    {
    "Symbol":"PACW",
    "Name":"PacWest Bancorp"
    },
    {
    "Symbol":"PACX",
    "Name":"Pioneer Merger Corp. Class A Ordinary Share"
    },
    {
    "Symbol":"PACXU",
    "Name":"Pioneer Merger Corp. Unit"
    },
    {
    "Symbol":"PACXW",
    "Name":"Pioneer Merger Corp. Warrant"
    },
    {
    "Symbol":"PAE",
    "Name":"PAE Incorporated Class A"
    },
    {
    "Symbol":"PAEWW",
    "Name":"PAE Incorporated Warrants"
    },
    {
    "Symbol":"PAFO",
    "Name":"Pacifico Acquisition Corp."
    },
    {
    "Symbol":"PAFOR",
    "Name":"Pacifico Acquisition Corp. Rights"
    },
    {
    "Symbol":"PAFOU",
    "Name":"Pacifico Acquisition Corp. Units"
    },
    {
    "Symbol":"PAG",
    "Name":"Penske Automotive Group Inc."
    },
    {
    "Symbol":"PAGP",
    "Name":"Plains GP Holdings L.P. Class A Units representing Limited Partner Interests"
    },
    {
    "Symbol":"PAGS",
    "Name":"PagSeguro Digital Ltd. Class A Common Shares"
    },
    {
    "Symbol":"PAHC",
    "Name":"Phibro Animal Health Corporation Class A"
    },
    {
    "Symbol":"PAI",
    "Name":"Western Asset Investment Grade Income Fund Inc."
    },
    {
    "Symbol":"PALI",
    "Name":"Palisade Bio Inc."
    },
    {
    "Symbol":"PALT",
    "Name":"Paltalk Inc."
    },
    {
    "Symbol":"PAM",
    "Name":"Pampa Energia S.A. Pampa Energia S.A."
    },
    {
    "Symbol":"PANA",
    "Name":"Panacea Acquisition Corp. II Class A Ordinary Shares"
    },
    {
    "Symbol":"PANL",
    "Name":"Pangaea Logistics Solutions Ltd. Common Shares"
    },
    {
    "Symbol":"PANW",
    "Name":"Palo Alto Networks Inc."
    },
    {
    "Symbol":"PAQC",
    "Name":"Provident Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"PAQCU",
    "Name":"Provident Acquisition Corp. Units"
    },
    {
    "Symbol":"PAQCW",
    "Name":"Provident Acquisition Corp. Warrant"
    },
    {
    "Symbol":"PAR",
    "Name":"PAR Technology Corporation"
    },
    {
    "Symbol":"PARR",
    "Name":"Par Pacific Holdings Inc. "
    },
    {
    "Symbol":"PASG",
    "Name":"Passage Bio Inc."
    },
    {
    "Symbol":"PATH",
    "Name":"UiPath Inc. Class A"
    },
    {
    "Symbol":"PATI",
    "Name":"Patriot Transportation Holding Inc."
    },
    {
    "Symbol":"PATK",
    "Name":"Patrick Industries Inc."
    },
    {
    "Symbol":"PAVM",
    "Name":"PAVmed Inc."
    },
    {
    "Symbol":"PAVMW",
    "Name":"PAVmed Inc. Warrant"
    },
    {
    "Symbol":"PAVMZ",
    "Name":"PAVmed Inc. Series Z Warrant"
    },
    {
    "Symbol":"PAX",
    "Name":"Patria Investments Limited Class A Common Shares"
    },
    {
    "Symbol":"PAY",
    "Name":"Paymentus Holdings Inc. Class A"
    },
    {
    "Symbol":"PAYA",
    "Name":"Paya Holdings Inc. Class A"
    },
    {
    "Symbol":"PAYC",
    "Name":"Paycom Software Inc."
    },
    {
    "Symbol":"PAYO",
    "Name":"Payoneer Global Inc."
    },
    {
    "Symbol":"PAYOW",
    "Name":"Payoneer Global Inc. Warrant"
    },
    {
    "Symbol":"PAYS",
    "Name":"Paysign Inc."
    },
    {
    "Symbol":"PAYX",
    "Name":"Paychex Inc."
    },
    {
    "Symbol":"PB",
    "Name":"Prosperity Bancshares Inc."
    },
    {
    "Symbol":"PBA",
    "Name":"Pembina Pipeline Corp. Ordinary Shares (Canada)"
    },
    {
    "Symbol":"PBAX",
    "Name":"Phoenix Biotech Acquisition Corp. Class A"
    },
    {
    "Symbol":"PBAXU",
    "Name":"Phoenix Biotech Acquisition Corp. Unit"
    },
    {
    "Symbol":"PBAXW",
    "Name":"Phoenix Biotech Acquisition Corp. Warrants"
    },
    {
    "Symbol":"PBBK",
    "Name":"PB Bankshares Inc."
    },
    {
    "Symbol":"PBCT",
    "Name":"People's United Financial Inc."
    },
    {
    "Symbol":"PBCTP",
    "Name":"People's United Financial Inc. Perpetual Preferred Series A Fixed-to-floating Rate"
    },
    {
    "Symbol":"PBF",
    "Name":"PBF Energy Inc. Class A"
    },
    {
    "Symbol":"PBFS",
    "Name":"Pioneer Bancorp Inc."
    },
    {
    "Symbol":"PBFX",
    "Name":"PBF Logistics LP Common Units representing limited partner interests"
    },
    {
    "Symbol":"PBH",
    "Name":"Prestige Consumer Healthcare Inc."
    },
    {
    "Symbol":"PBHC",
    "Name":"Pathfinder Bancorp Inc.   (MD)"
    },
    {
    "Symbol":"PBI",
    "Name":"Pitney Bowes Inc."
    },
    {
    "Symbol":"PBI^B",
    "Name":"Pitney Bowes Inc 6.70% Notes Due 2043"
    },
    {
    "Symbol":"PBIP",
    "Name":"Prudential Bancorp Inc."
    },
    {
    "Symbol":"PBLA",
    "Name":"Panbela Therapeutics Inc."
    },
    {
    "Symbol":"PBPB",
    "Name":"Potbelly Corporation"
    },
    {
    "Symbol":"PBR",
    "Name":"Petroleo Brasileiro S.A.- Petrobras"
    },
    {
    "Symbol":"PBT",
    "Name":"Permian Basin Royalty Trust"
    },
    {
    "Symbol":"PBTS",
    "Name":"Powerbridge Technologies Co. Ltd. Ordinary Shares"
    },
    {
    "Symbol":"PBYI",
    "Name":"Puma Biotechnology Inc"
    },
    {
    "Symbol":"PCAR",
    "Name":"PACCAR Inc."
    },
    {
    "Symbol":"PCB",
    "Name":"PCB Bancorp"
    },
    {
    "Symbol":"PCCT",
    "Name":"Perception Capital Corp. II Class A Ordinary Shares"
    },
    {
    "Symbol":"PCCTU",
    "Name":"Perception Capital Corp. II Units"
    },
    {
    "Symbol":"PCCTW",
    "Name":"Perception Capital Corp. II Warrants"
    },
    {
    "Symbol":"PCF",
    "Name":"High Income Securities Fund"
    },
    {
    "Symbol":"PCG",
    "Name":"Pacific Gas & Electric Co."
    },
    {
    "Symbol":"PCG^A",
    "Name":"Pacific Gas & Electric Co. 6% Preferred Stock"
    },
    {
    "Symbol":"PCG^B",
    "Name":"Pacific Gas & Electric Co. 5 1/2% Preferred Stock"
    },
    {
    "Symbol":"PCG^C",
    "Name":"Pacific Gas & Electric Co. 5% 1st Preferred Stock"
    },
    {
    "Symbol":"PCG^D",
    "Name":"Pacific Gas & Electric Co. 5% 1st  Red. Preferred Stock"
    },
    {
    "Symbol":"PCG^G",
    "Name":"Pacific Gas & Electric Co. 4.80% 1st Preferred Stock"
    },
    {
    "Symbol":"PCG^I",
    "Name":"Pacific Gas & Electric Co. 4.36% 1st Preferred Stock"
    },
    {
    "Symbol":"PCGU",
    "Name":"Pacific Gas & Electric Co. Equity Unit"
    },
    {
    "Symbol":"PCH",
    "Name":"PotlatchDeltic Corporation"
    },
    {
    "Symbol":"PCK",
    "Name":"Pimco California Municipal Income Fund II Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"PCM",
    "Name":"PCM Fund Inc."
    },
    {
    "Symbol":"PCN",
    "Name":"Pimco Corporate & Income Strategy Fund"
    },
    {
    "Symbol":"PCOM",
    "Name":"Points.com Inc. Common Shares"
    },
    {
    "Symbol":"PCOR",
    "Name":"Procore Technologies Inc."
    },
    {
    "Symbol":"PCPC",
    "Name":"Periphas Capital Partnering Corporation Class A"
    },
    {
    "Symbol":"PCQ",
    "Name":"PIMCO California Municipal Income Fund"
    },
    {
    "Symbol":"PCRX",
    "Name":"Pacira BioSciences Inc."
    },
    {
    "Symbol":"PCSA",
    "Name":"Processa Pharmaceuticals Inc."
    },
    {
    "Symbol":"PCSB",
    "Name":"PCSB Financial Corporation"
    },
    {
    "Symbol":"PCT",
    "Name":"PureCycle Technologies Inc."
    },
    {
    "Symbol":"PCTI",
    "Name":"PCTEL Inc."
    },
    {
    "Symbol":"PCTTU",
    "Name":"PureCycle Technologies Inc. Unit"
    },
    {
    "Symbol":"PCTTW",
    "Name":"PureCycle Technologies Inc. Warrant"
    },
    {
    "Symbol":"PCTY",
    "Name":"Paylocity Holding Corporation"
    },
    {
    "Symbol":"PCVX",
    "Name":"Vaxcyte Inc."
    },
    {
    "Symbol":"PCX",
    "Name":"Parsec Capital Acquisitions Corp Class A"
    },
    {
    "Symbol":"PCXCU",
    "Name":"Parsec Capital Acquisitions Corp Unit"
    },
    {
    "Symbol":"PCXCW",
    "Name":"Parsec Capital Acquisitions Corp Warrant"
    },
    {
    "Symbol":"PCYG",
    "Name":"Park City Group Inc."
    },
    {
    "Symbol":"PCYO",
    "Name":"Pure Cycle Corporation"
    },
    {
    "Symbol":"PD",
    "Name":"PagerDuty Inc."
    },
    {
    "Symbol":"PDCE",
    "Name":"PDC Energy Inc.   (Delaware)"
    },
    {
    "Symbol":"PDCO",
    "Name":"Patterson Companies Inc."
    },
    {
    "Symbol":"PDD",
    "Name":"Pinduoduo Inc. American Depositary Shares"
    },
    {
    "Symbol":"PDEX",
    "Name":"Pro-Dex Inc."
    },
    {
    "Symbol":"PDFS",
    "Name":"PDF Solutions Inc."
    },
    {
    "Symbol":"PDI",
    "Name":"PIMCO Dynamic Income Fund"
    },
    {
    "Symbol":"PDLB",
    "Name":"PDL Community Bancorp"
    },
    {
    "Symbol":"PDM",
    "Name":"Piedmont Office Realty Trust Inc. Class A"
    },
    {
    "Symbol":"PDO",
    "Name":"PIMCO Dynamic Income Opportunities Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"PDOT",
    "Name":"Peridot Acquisition Corp. II Class A Ordinary Shares"
    },
    {
    "Symbol":"PDS",
    "Name":"Precision Drilling Corporation"
    },
    {
    "Symbol":"PDSB",
    "Name":"PDS Biotechnology Corporation"
    },
    {
    "Symbol":"PDT",
    "Name":"John Hancock Premium Dividend Fund"
    },
    {
    "Symbol":"PEAK",
    "Name":"Healthpeak Properties Inc."
    },
    {
    "Symbol":"PEAR",
    "Name":"Pear Therapeutics Inc. Class A"
    },
    {
    "Symbol":"PEARW",
    "Name":"Pear Therapeutics Inc. Warrant"
    },
    {
    "Symbol":"PEB",
    "Name":"Pebblebrook Hotel Trust Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"PEB^E",
    "Name":"Pebblebrook Hotel Trust 6.375% Series E Cumulative Redeemable Preferred Shares of Beneficial Interest"
    },
    {
    "Symbol":"PEB^F",
    "Name":"Pebblebrook Hotel Trust 6.3% Series F Cumulative Redeemable Preferred Shares of Beneficial Interest"
    },
    {
    "Symbol":"PEB^G",
    "Name":"Pebblebrook Hotel Trust 6.375% Series G Cumulative Redeemable Preferred Shares of Beneficial Interest"
    },
    {
    "Symbol":"PEB^H",
    "Name":"Pebblebrook Hotel Trust 5.700% Series H Cumulative Redeemable Preferred Shares of Beneficial Interest"
    },
    {
    "Symbol":"PEBK",
    "Name":"Peoples Bancorp of North Carolina Inc."
    },
    {
    "Symbol":"PEBO",
    "Name":"Peoples Bancorp Inc."
    },
    {
    "Symbol":"PECO",
    "Name":"Phillips Edison & Company Inc."
    },
    {
    "Symbol":"PED",
    "Name":"Pedevco Corp."
    },
    {
    "Symbol":"PEG",
    "Name":"Public Service Enterprise Group Incorporated"
    },
    {
    "Symbol":"PEGA",
    "Name":"Pegasystems Inc."
    },
    {
    "Symbol":"PEGR",
    "Name":"Project Energy Reimagined Acquisition Corp. Class A Ordinary Share"
    },
    {
    "Symbol":"PEGRU",
    "Name":"Project Energy Reimagined Acquisition Corp. Unit"
    },
    {
    "Symbol":"PEGRW",
    "Name":"Project Energy Reimagined Acquisition Corp. Warrant"
    },
    {
    "Symbol":"PEI",
    "Name":"Pennsylvania Real Estate Investment Trust"
    },
    {
    "Symbol":"PEI^B",
    "Name":"Pennsylvania Real Estate Investment Trust Cumulative Redeemable Perpetual Preferred Shares Series B"
    },
    {
    "Symbol":"PEI^C",
    "Name":"Pennsylvania Real Estate Investment Trust 7.20% Series C Cumulative Redeemable Perpetual Preferred Shares"
    },
    {
    "Symbol":"PEI^D",
    "Name":"Pennsylvania Real Estate Investment Trust 6.875% Series D Cumulative Redeemable Perpetual Preferred Shares"
    },
    {
    "Symbol":"PEN",
    "Name":"Penumbra Inc."
    },
    {
    "Symbol":"PENN",
    "Name":"Penn National Gaming Inc."
    },
    {
    "Symbol":"PEO",
    "Name":"Adams Natural Resources Fund Inc."
    },
    {
    "Symbol":"PEP",
    "Name":"PepsiCo Inc."
    },
    {
    "Symbol":"PEPL",
    "Name":"PepperLime Health Acquisition Corporation Class A Ordinary Share"
    },
    {
    "Symbol":"PEPLU",
    "Name":"PepperLime Health Acquisition Corporation Unit"
    },
    {
    "Symbol":"PEPLW",
    "Name":"PepperLime Health Acquisition Corporation Warrrant"
    },
    {
    "Symbol":"PERI",
    "Name":"Perion Network Ltd. Ordinary Shares"
    },
    {
    "Symbol":"PESI",
    "Name":"Perma-Fix Environmental Services Inc."
    },
    {
    "Symbol":"PETQ",
    "Name":"PetIQ Inc. Class A"
    },
    {
    "Symbol":"PETS",
    "Name":"PetMed Express Inc."
    },
    {
    "Symbol":"PETV",
    "Name":"PetVivo Holdings Inc."
    },
    {
    "Symbol":"PETVW",
    "Name":"PetVivo Holdings Inc. Warrant"
    },
    {
    "Symbol":"PETZ",
    "Name":"TDH Holdings Inc. Common Shares"
    },
    {
    "Symbol":"PFBC",
    "Name":"Preferred Bank"
    },
    {
    "Symbol":"PFC",
    "Name":"Premier Financial Corp."
    },
    {
    "Symbol":"PFD",
    "Name":"Flaherty & Crumrine Preferred and Income Fund Incorporated"
    },
    {
    "Symbol":"PFDR",
    "Name":"Pathfinder Acquisition Corporation Class A Ordinary Shares"
    },
    {
    "Symbol":"PFDRW",
    "Name":"Pathfinder Acquisition Corporation Warrant"
    },
    {
    "Symbol":"PFE",
    "Name":"Pfizer Inc."
    },
    {
    "Symbol":"PFG",
    "Name":"Principal Financial Group Inc"
    },
    {
    "Symbol":"PFGC",
    "Name":"Performance Food Group Company"
    },
    {
    "Symbol":"PFH",
    "Name":"Prudential Financial Inc. 4.125% Junior Subordinated Notes due 2060"
    },
    {
    "Symbol":"PFHD",
    "Name":"Professional Holding Corp. Class A"
    },
    {
    "Symbol":"PFIE",
    "Name":"Profire Energy Inc."
    },
    {
    "Symbol":"PFIN",
    "Name":"P & F Industries Inc. Class A"
    },
    {
    "Symbol":"PFIS",
    "Name":"Peoples Financial Services Corp."
    },
    {
    "Symbol":"PFL",
    "Name":"PIMCO Income Strategy Fund Shares of Beneficial Interest"
    },
    {
    "Symbol":"PFLT",
    "Name":"PennantPark Floating Rate Capital Ltd."
    },
    {
    "Symbol":"PFMT",
    "Name":"Performant Financial Corporation"
    },
    {
    "Symbol":"PFN",
    "Name":"PIMCO Income Strategy Fund II"
    },
    {
    "Symbol":"PFO",
    "Name":"Flaherty & Crumrine Preferred and Income Opportunity Fund Incorporated"
    },
    {
    "Symbol":"PFS",
    "Name":"Provident Financial Services Inc"
    },
    {
    "Symbol":"PFSI",
    "Name":"PennyMac Financial Services Inc."
    },
    {
    "Symbol":"PFSW",
    "Name":"PFSweb Inc."
    },
    {
    "Symbol":"PFTA",
    "Name":"Portage Fintech Acquisition Corporation Class A Ordinary Share"
    },
    {
    "Symbol":"PFTAU",
    "Name":"Portage Fintech Acquisition Corporation Unit"
    },
    {
    "Symbol":"PFTAW",
    "Name":"Portage Fintech Acquisition Corporation Warrant"
    },
    {
    "Symbol":"PFX",
    "Name":"PhenixFIN Corporation"
    },
    {
    "Symbol":"PFXNL",
    "Name":"PhenixFIN Corporation 6.125% Senior Notes due 2023"
    },
    {
    "Symbol":"PFXNZ",
    "Name":"PhenixFIN Corporation  5.25% Notes due 2028"
    },
    {
    "Symbol":"PG",
    "Name":"Procter & Gamble Company (The)"
    },
    {
    "Symbol":"PGC",
    "Name":"Peapack-Gladstone Financial Corporation"
    },
    {
    "Symbol":"PGEN",
    "Name":"Precigen Inc."
    },
    {
    "Symbol":"PGNY",
    "Name":"Progyny Inc."
    },
    {
    "Symbol":"PGP",
    "Name":"Pimco Global Stocksplus & Income Fund Pimco Global StocksPlus & Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"PGR",
    "Name":"Progressive Corporation (The)"
    },
    {
    "Symbol":"PGRE",
    "Name":"Paramount Group Inc."
    },
    {
    "Symbol":"PGRW",
    "Name":"Progress Acquisition Corp. Class A"
    },
    {
    "Symbol":"PGRWU",
    "Name":"Progress Acquisition Corp. Units"
    },
    {
    "Symbol":"PGRWW",
    "Name":"Progress Acquisition Corp. Warrant"
    },
    {
    "Symbol":"PGSS",
    "Name":"Pegasus Digital Mobility Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"PGTI",
    "Name":"PGT Innovations Inc."
    },
    {
    "Symbol":"PGZ",
    "Name":"Principal Real Estate Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"PH",
    "Name":"Parker-Hannifin Corporation"
    },
    {
    "Symbol":"PHAR",
    "Name":"Pharming Group N.V. ADS each representing 10 ordinary shares"
    },
    {
    "Symbol":"PHAS",
    "Name":"PhaseBio Pharmaceuticals Inc."
    },
    {
    "Symbol":"PHAT",
    "Name":"Phathom Pharmaceuticals Inc."
    },
    {
    "Symbol":"PHCF",
    "Name":"Puhui Wealth Investment Management Co. Ltd. Ordinary Shares"
    },
    {
    "Symbol":"PHD",
    "Name":"Pioneer Floating Rate Fund Inc."
    },
    {
    "Symbol":"PHG",
    "Name":"Koninklijke Philips N.V. NY Registry Shares"
    },
    {
    "Symbol":"PHGE",
    "Name":"BiomX Inc."
    },
    {
    "Symbol":"PHI",
    "Name":"PLDT Inc. Sponsored ADR"
    },
    {
    "Symbol":"PHIC",
    "Name":"Population Health Investment Co. Inc. Class A Ordinary Share"
    },
    {
    "Symbol":"PHICU",
    "Name":"Population Health Investment Co. Inc. Unit"
    },
    {
    "Symbol":"PHICW",
    "Name":"Population Health Investment Co. Inc. Warrant"
    },
    {
    "Symbol":"PHIO",
    "Name":"Phio Pharmaceuticals Corp."
    },
    {
    "Symbol":"PHK",
    "Name":"Pimco High Income Fund Pimco High Income Fund"
    },
    {
    "Symbol":"PHM",
    "Name":"PulteGroup Inc."
    },
    {
    "Symbol":"PHR",
    "Name":"Phreesia Inc."
    },
    {
    "Symbol":"PHT",
    "Name":"Pioneer High Income Fund Inc."
    },
    {
    "Symbol":"PHUN",
    "Name":"Phunware Inc."
    },
    {
    "Symbol":"PHUNW",
    "Name":"Phunware Inc. Warrants"
    },
    {
    "Symbol":"PHVS",
    "Name":"Pharvaris N.V. Ordinary Shares"
    },
    {
    "Symbol":"PHX",
    "Name":"PHX Minerals Inc."
    },
    {
    "Symbol":"PHYT",
    "Name":"Pyrophyte Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"PI",
    "Name":"Impinj Inc."
    },
    {
    "Symbol":"PIAI",
    "Name":"Prime Impact Acquisition I Class A Ordinary Shares"
    },
    {
    "Symbol":"PICC",
    "Name":"Pivotal Investment Corporation III Class A"
    },
    {
    "Symbol":"PII",
    "Name":"Polaris Inc."
    },
    {
    "Symbol":"PIII",
    "Name":"P3 Health Partners Inc. Class A"
    },
    {
    "Symbol":"PIIIW",
    "Name":"P3 Health Partners Inc. Warrant"
    },
    {
    "Symbol":"PIK",
    "Name":"Kidpik Corp."
    },
    {
    "Symbol":"PIM",
    "Name":"Putnam Master Intermediate Income Trust"
    },
    {
    "Symbol":"PINC",
    "Name":"Premier Inc. Class A"
    },
    {
    "Symbol":"PINE",
    "Name":"Alpine Income Property Trust Inc."
    },
    {
    "Symbol":"PING",
    "Name":"Ping Identity Holding Corp."
    },
    {
    "Symbol":"PINS",
    "Name":"Pinterest Inc. Class A"
    },
    {
    "Symbol":"PIPP",
    "Name":"Pine Island Acquisition Corp. Class A"
    },
    {
    "Symbol":"PIPR",
    "Name":"Piper Sandler Companies"
    },
    {
    "Symbol":"PIRS",
    "Name":"Pieris Pharmaceuticals Inc."
    },
    {
    "Symbol":"PIXY",
    "Name":"ShiftPixy Inc."
    },
    {
    "Symbol":"PJT",
    "Name":"PJT Partners Inc. Class A"
    },
    {
    "Symbol":"PK",
    "Name":"Park Hotels & Resorts Inc."
    },
    {
    "Symbol":"PKBK",
    "Name":"Parke Bancorp Inc."
    },
    {
    "Symbol":"PKE",
    "Name":"Park Aerospace Corp."
    },
    {
    "Symbol":"PKG",
    "Name":"Packaging Corporation of America"
    },
    {
    "Symbol":"PKI",
    "Name":"PerkinElmer Inc."
    },
    {
    "Symbol":"PKOH",
    "Name":"Park-Ohio Holdings Corp."
    },
    {
    "Symbol":"PKX",
    "Name":"POSCO"
    },
    {
    "Symbol":"PL",
    "Name":"Planet Labs PBC Class A"
    },
    {
    "Symbol":"PLAB",
    "Name":"Photronics Inc."
    },
    {
    "Symbol":"PLAG",
    "Name":"Planet Green Holdings Corp."
    },
    {
    "Symbol":"PLAN",
    "Name":"Anaplan Inc."
    },
    {
    "Symbol":"PLAY",
    "Name":"Dave & Buster's Entertainment Inc."
    },
    {
    "Symbol":"PLBC",
    "Name":"Plumas Bancorp"
    },
    {
    "Symbol":"PLBY",
    "Name":"PLBY Group Inc."
    },
    {
    "Symbol":"PLCE",
    "Name":"Children's Place Inc. (The)"
    },
    {
    "Symbol":"PLD",
    "Name":"Prologis Inc."
    },
    {
    "Symbol":"PLG",
    "Name":"Platinum Group Metals Ltd. Ordinary Shares (Canada)"
    },
    {
    "Symbol":"PLIN",
    "Name":"China Xiangtai Food Co. Ltd. Ordinary Shares"
    },
    {
    "Symbol":"PLL",
    "Name":"Piedmont Lithium Inc."
    },
    {
    "Symbol":"PLM",
    "Name":"Polymet Mining Corporation Ordinary Shares (Canada)"
    },
    {
    "Symbol":"PLMI",
    "Name":"Plum Acquisition Corp. I Class A Ordinary Share"
    },
    {
    "Symbol":"PLMIU",
    "Name":"Plum Acquisition Corp. I Units"
    },
    {
    "Symbol":"PLMIW",
    "Name":"Plum Acquisition Corp. I Warrant"
    },
    {
    "Symbol":"PLMR",
    "Name":"Palomar Holdings Inc."
    },
    {
    "Symbol":"PLNT",
    "Name":"Planet Fitness Inc."
    },
    {
    "Symbol":"PLOW",
    "Name":"Douglas Dynamics Inc."
    },
    {
    "Symbol":"PLPC",
    "Name":"Preformed Line Products Company"
    },
    {
    "Symbol":"PLRX",
    "Name":"Pliant Therapeutics Inc."
    },
    {
    "Symbol":"PLSE",
    "Name":"Pulse Biosciences Inc   (DE)"
    },
    {
    "Symbol":"PLTK",
    "Name":"Playtika Holding Corp."
    },
    {
    "Symbol":"PLTR",
    "Name":"Palantir Technologies Inc. Class A"
    },
    {
    "Symbol":"PLUG",
    "Name":"Plug Power Inc."
    },
    {
    "Symbol":"PLUS",
    "Name":"ePlus inc."
    },
    {
    "Symbol":"PLX",
    "Name":"Protalix BioTherapeutics Inc. (DE)"
    },
    {
    "Symbol":"PLXP",
    "Name":"PLx Pharma Inc."
    },
    {
    "Symbol":"PLXS",
    "Name":"Plexus Corp."
    },
    {
    "Symbol":"PLYA",
    "Name":"Playa Hotels & Resorts N.V. Ordinary Shares"
    },
    {
    "Symbol":"PLYM",
    "Name":"Plymouth Industrial REIT Inc."
    },
    {
    "Symbol":"PLYM^A",
    "Name":"Plymouth Industrial REIT Inc. 7.50% Series A Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"PM",
    "Name":"Philip Morris International Inc"
    },
    {
    "Symbol":"PMCB",
    "Name":"PharmaCyte  Biotech Inc."
    },
    {
    "Symbol":"PMD",
    "Name":"Psychemedics Corporation"
    },
    {
    "Symbol":"PME",
    "Name":"Pingtan Marine Enterprise Ltd."
    },
    {
    "Symbol":"PMF",
    "Name":"PIMCO Municipal Income Fund"
    },
    {
    "Symbol":"PMGM",
    "Name":"Priveterra Acquisition Corp. Class A"
    },
    {
    "Symbol":"PMGMU",
    "Name":"Priveterra Acquisition Corp. Units"
    },
    {
    "Symbol":"PMGMW",
    "Name":"Priveterra Acquisition Corp. Warrant"
    },
    {
    "Symbol":"PML",
    "Name":"Pimco Municipal Income Fund II Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"PMM",
    "Name":"Putnam Managed Municipal Income Trust"
    },
    {
    "Symbol":"PMO",
    "Name":"Putnam Municipal Opportunities Trust"
    },
    {
    "Symbol":"PMT",
    "Name":"PennyMac Mortgage Investment Trust Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"PMT^A",
    "Name":"PennyMac Mortgage Investment Trust 8.125% Series A Fixed-to-Floating Rate Cumulative Redeemable Preferred Shares of Beneficial Interest"
    },
    {
    "Symbol":"PMT^B",
    "Name":"PennyMac Mortgage Investment Trust 8.00% Series B Fixed-to-Floating Rate Cumulative Redeemable Preferred Shares of Beneficial Interest"
    },
    {
    "Symbol":"PMT^C",
    "Name":"PennyMac Mortgage Investment Trust 6.75% Series C Cumulative Redeemable Preferred Shares of Beneficial Interest"
    },
    {
    "Symbol":"PMTS",
    "Name":"CPI Card Group Inc."
    },
    {
    "Symbol":"PMVC",
    "Name":"PMV Consumer Acquisition Corp. Class A"
    },
    {
    "Symbol":"PMVP",
    "Name":"PMV Pharmaceuticals Inc."
    },
    {
    "Symbol":"PMX",
    "Name":"PIMCO Municipal Income Fund III Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"PNBK",
    "Name":"Patriot National Bancorp Inc."
    },
    {
    "Symbol":"PNC",
    "Name":"PNC Financial Services Group Inc. (The)"
    },
    {
    "Symbol":"PNC^P",
    "Name":"PNC Financial Services Group Inc. (The) Depositary Shares Representing 1/4000th Perpetual Preferred Series P"
    },
    {
    "Symbol":"PNF",
    "Name":"PIMCO New York Municipal Income Fund"
    },
    {
    "Symbol":"PNFP",
    "Name":"Pinnacle Financial Partners Inc."
    },
    {
    "Symbol":"PNFPP",
    "Name":"Pinnacle Financial Partners Inc. Depositary shares of Pinnacle Financial Partners Inc. each representing a 1/40th Interest in a share of its 6.75% Fixed-Rate Non-Cumulative Perpetual Preferred Stock Series B"
    },
    {
    "Symbol":"PNI",
    "Name":"Pimco New York Municipal Income Fund II Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"PNM",
    "Name":"PNM Resources Inc. (Holding Co.)"
    },
    {
    "Symbol":"PNNT",
    "Name":"PennantPark Investment Corporation"
    },
    {
    "Symbol":"PNR",
    "Name":"Pentair plc. Ordinary Share"
    },
    {
    "Symbol":"PNRG",
    "Name":"PrimeEnergy Resources Corporation"
    },
    {
    "Symbol":"PNT",
    "Name":"POINT Biopharma Global Inc."
    },
    {
    "Symbol":"PNTG",
    "Name":"The Pennant Group Inc."
    },
    {
    "Symbol":"PNTM",
    "Name":"Pontem Corporation Class A Ordinary Shares"
    },
    {
    "Symbol":"PNW",
    "Name":"Pinnacle West Capital Corporation"
    },
    {
    "Symbol":"POAI",
    "Name":"Predictive Oncology Inc."
    },
    {
    "Symbol":"PODD",
    "Name":"Insulet Corporation"
    },
    {
    "Symbol":"POLA",
    "Name":"Polar Power Inc."
    },
    {
    "Symbol":"POLY",
    "Name":"Plantronics Inc."
    },
    {
    "Symbol":"POND",
    "Name":"Angel Pond Holdings Corporation Class A Ordinary Shares"
    },
    {
    "Symbol":"PONO",
    "Name":"Pono Capital Corp Class A"
    },
    {
    "Symbol":"PONOU",
    "Name":"Pono Capital Corp Unit"
    },
    {
    "Symbol":"PONOW",
    "Name":"Pono Capital Corp Warrant"
    },
    {
    "Symbol":"POOL",
    "Name":"Pool Corporation"
    },
    {
    "Symbol":"POR",
    "Name":"Portland General Electric Co"
    },
    {
    "Symbol":"POSH",
    "Name":"Poshmark Inc. Class A"
    },
    {
    "Symbol":"POST",
    "Name":"Post Holdings Inc."
    },
    {
    "Symbol":"POW",
    "Name":"Powered Brands Class A Ordinary Shares"
    },
    {
    "Symbol":"POWI",
    "Name":"Power Integrations Inc."
    },
    {
    "Symbol":"POWL",
    "Name":"Powell Industries Inc."
    },
    {
    "Symbol":"POWRU",
    "Name":"Powered Brands Units"
    },
    {
    "Symbol":"POWRW",
    "Name":"Powered Brands Warrants"
    },
    {
    "Symbol":"POWW",
    "Name":"AMMO Inc."
    },
    {
    "Symbol":"POWWP",
    "Name":"AMMO Inc. 8.75% Series A Cumulative Redeemable Perpetual Preferred Stock"
    },
    {
    "Symbol":"PPBI",
    "Name":"Pacific Premier Bancorp Inc"
    },
    {
    "Symbol":"PPBT",
    "Name":"Purple Biotech Ltd. American Depositary Shares"
    },
    {
    "Symbol":"PPC",
    "Name":"Pilgrim's Pride Corporation"
    },
    {
    "Symbol":"PPG",
    "Name":"PPG Industries Inc."
    },
    {
    "Symbol":"PPGH",
    "Name":"Poema Global Holdings Corp. Class A Ordinary Share"
    },
    {
    "Symbol":"PPGHU",
    "Name":"Poema Global Holdings Corp. Unit"
    },
    {
    "Symbol":"PPGHW",
    "Name":"Poema Global Holdings Corp. Warrant"
    },
    {
    "Symbol":"PPHPW",
    "Name":"PHP Ventures Acquisition Corp. Warrants"
    },
    {
    "Symbol":"PPIH",
    "Name":"Perma-Pipe International Holdings Inc."
    },
    {
    "Symbol":"PPL",
    "Name":"PPL Corporation"
    },
    {
    "Symbol":"PPSI",
    "Name":"Pioneer Power Solutions Inc."
    },
    {
    "Symbol":"PPT",
    "Name":"Putnam Premier Income Trust"
    },
    {
    "Symbol":"PPTA",
    "Name":"Perpetua Resources Corp. Common Shares"
    },
    {
    "Symbol":"PPYAU",
    "Name":"Papaya Growth Opportunity Corp. I Unit"
    },
    {
    "Symbol":"PRA",
    "Name":"ProAssurance Corporation"
    },
    {
    "Symbol":"PRAA",
    "Name":"PRA Group Inc."
    },
    {
    "Symbol":"PRAX",
    "Name":"Praxis Precision Medicines Inc."
    },
    {
    "Symbol":"PRBM",
    "Name":"Parabellum Acquisition Corp. Class A"
    },
    {
    "Symbol":"PRCH",
    "Name":"Porch Group Inc."
    },
    {
    "Symbol":"PRCT",
    "Name":"PROCEPT BioRobotics Corporation"
    },
    {
    "Symbol":"PRDO",
    "Name":"Perdoceo Education Corporation"
    },
    {
    "Symbol":"PRDS",
    "Name":"Pardes Biosciences Inc."
    },
    {
    "Symbol":"PRE^J",
    "Name":"PartnerRe Ltd. 4.875% Fixed Rate Non-Cumulative Redeemable Preferred Shares Series J"
    },
    {
    "Symbol":"PRFT",
    "Name":"Perficient Inc."
    },
    {
    "Symbol":"PRFX",
    "Name":"PainReform Ltd. Ordinary Shares"
    },
    {
    "Symbol":"PRG",
    "Name":"PROG Holdings Inc."
    },
    {
    "Symbol":"PRGO",
    "Name":"Perrigo Company plc Ordinary Shares"
    },
    {
    "Symbol":"PRGS",
    "Name":"Progress Software Corporation   (DE)"
    },
    {
    "Symbol":"PRI",
    "Name":"Primerica Inc."
    },
    {
    "Symbol":"PRIF^D",
    "Name":"Priority Income Fund Inc. 7.00% Series D Term Preferred Stock due 2029"
    },
    {
    "Symbol":"PRIF^F",
    "Name":"Priority Income Fund Inc. 6.625% Series F Term Preferred Stock due 2027"
    },
    {
    "Symbol":"PRIF^G",
    "Name":"Priority Income Fund Inc. 6.25% Series G Preferred Stock Due 2026"
    },
    {
    "Symbol":"PRIF^H",
    "Name":"Priority Income Fund Inc. 6.00% Series H Term Preferred Stock due 2026"
    },
    {
    "Symbol":"PRIF^I",
    "Name":"Priority Income Fund Inc. 6.125% Series I Term Preferred Stock due 2028"
    },
    {
    "Symbol":"PRIF^J",
    "Name":"Priority Income Fund Inc. 6.000% Series J Term Preferred Stock due 2028"
    },
    {
    "Symbol":"PRIF^K",
    "Name":"Priority Income Fund Inc. 7.000% Series K Cumulative Preferred Stock"
    },
    {
    "Symbol":"PRIM",
    "Name":"Primoris Services Corporation"
    },
    {
    "Symbol":"PRK",
    "Name":"Park National Corporation"
    },
    {
    "Symbol":"PRLB",
    "Name":"Proto Labs Inc."
    },
    {
    "Symbol":"PRLD",
    "Name":"Prelude Therapeutics Incorporated"
    },
    {
    "Symbol":"PRLHU",
    "Name":"Pearl Holdings Acquisition Corp Unit"
    },
    {
    "Symbol":"PRM",
    "Name":"Perimeter Solutions SA Ordinary Shares"
    },
    {
    "Symbol":"PRMW",
    "Name":"Primo Water Corporation"
    },
    {
    "Symbol":"PRO",
    "Name":"PROS Holdings Inc."
    },
    {
    "Symbol":"PROC",
    "Name":"Procaps Group S.A. Ordinary Shares"
    },
    {
    "Symbol":"PROCW",
    "Name":"Procaps Group S.A. Warrants"
    },
    {
    "Symbol":"PROF",
    "Name":"Profound Medical Corp."
    },
    {
    "Symbol":"PROG",
    "Name":"Progenity Inc."
    },
    {
    "Symbol":"PROV",
    "Name":"Provident Financial Holdings Inc."
    },
    {
    "Symbol":"PRPB",
    "Name":"CC Neuberger Principal Holdings II Class A Ordinary Shares"
    },
    {
    "Symbol":"PRPC",
    "Name":"CC Neuberger Principal Holdings III Class A Ordinary Shares"
    },
    {
    "Symbol":"PRPH",
    "Name":"ProPhase Labs Inc.   (DE)"
    },
    {
    "Symbol":"PRPL",
    "Name":"Purple Innovation Inc."
    },
    {
    "Symbol":"PRPO",
    "Name":"Precipio Inc. "
    },
    {
    "Symbol":"PRQR",
    "Name":"ProQR Therapeutics N.V. Ordinary Shares"
    },
    {
    "Symbol":"PRS",
    "Name":"Prudential Financial Inc. 5.625% Junior Subordinated Notes due 2058"
    },
    {
    "Symbol":"PRSO",
    "Name":"Peraso Inc."
    },
    {
    "Symbol":"PRSR",
    "Name":"Prospector Capital Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"PRSRU",
    "Name":"Prospector Capital Corp. Unit"
    },
    {
    "Symbol":"PRSRW",
    "Name":"Prospector Capital Corp. Warrants"
    },
    {
    "Symbol":"PRT",
    "Name":"PermRock Royalty Trust Trust Units"
    },
    {
    "Symbol":"PRTA",
    "Name":"Prothena Corporation plc Ordinary Shares"
    },
    {
    "Symbol":"PRTC",
    "Name":"PureTech Health plc American Depositary Shares"
    },
    {
    "Symbol":"PRTG",
    "Name":"Portage Biotech Inc."
    },
    {
    "Symbol":"PRTH",
    "Name":"Priority Technology Holdings Inc."
    },
    {
    "Symbol":"PRTK",
    "Name":"Paratek Pharmaceuticals Inc."
    },
    {
    "Symbol":"PRTS",
    "Name":"CarParts.com Inc."
    },
    {
    "Symbol":"PRTY",
    "Name":"Party City Holdco Inc."
    },
    {
    "Symbol":"PRU",
    "Name":"Prudential Financial Inc."
    },
    {
    "Symbol":"PRVA",
    "Name":"Privia Health Group Inc."
    },
    {
    "Symbol":"PRVB",
    "Name":"Provention Bio Inc."
    },
    {
    "Symbol":"PSA",
    "Name":"Public Storage"
    },
    {
    "Symbol":"PSA^F",
    "Name":"Public Storage Depositary Shares Each Representing 1/1000 of a 5.15% Cumulative Preferred Share of Beneficial Interest Series F par value $0.01 per share"
    },
    {
    "Symbol":"PSA^G",
    "Name":"Public Storage Depositary Shares Each Representing 1/1000 of a 5.05% Cumulative Preferred Share of Beneficial Interest Series G"
    },
    {
    "Symbol":"PSA^H",
    "Name":"Public Storage Depositary Shares Each Representing 1/1000 of a  5.60% Cumulative Preferred  Share of Beneficial Interest Series H"
    },
    {
    "Symbol":"PSA^I",
    "Name":"Public Storage Depositary Shares Each Representing 1/1000 of a 4.875% Cumulative Preferred Share of Beneficial Interest Series I par value $0.01 per share"
    },
    {
    "Symbol":"PSA^J",
    "Name":"Public Storage Depositary Shares Each Representing 1/1000 of a 4.700% Cumulative Preferred Share of Beneficial Interest Series J par value $0.01 per share"
    },
    {
    "Symbol":"PSA^K",
    "Name":"Public Storage Depositary Shares Each Representing 1/1000 of a 4.75% Cumulative Preferred Share of Beneficial Interest Series K"
    },
    {
    "Symbol":"PSA^L",
    "Name":"Public Storage Depositary Shares Each Representing 1/1000 of a 4.625% Cumulative Preferred Share of Beneficial Interest Series L par value $0.01 per share"
    },
    {
    "Symbol":"PSA^M",
    "Name":"Public Storage Depositary Shares Each Representing 1/1000 of a 4.125% Cumulative Preferred Share of Beneficial Interest Series M"
    },
    {
    "Symbol":"PSA^N",
    "Name":"Public Storage Depositary Shares Each Representing 1/1000 of a 3.875% Cumulative Preferred Share of Beneficial Interest Series N"
    },
    {
    "Symbol":"PSA^O",
    "Name":"Public Storage Depositary Shares Each Representing 1/1000 of a 3.900% Cumulative Preferred Share of Beneficial Interest Series O"
    },
    {
    "Symbol":"PSA^P",
    "Name":"Public Storage Depositary Shares Each Representing 1/1000 of a 4.000% Cumulative Preferred Share of Bene cial Interest Series P"
    },
    {
    "Symbol":"PSA^Q",
    "Name":"Public Storage Depositary Shares Each Representing 1/1000 of a 3.950% Cumulative Preferred Share of Beneficial Interest Series Q par value $0.01 per share"
    },
    {
    "Symbol":"PSA^R",
    "Name":"Public Storage Depositary Shares Each Representing 1/1000 of a 4.00% Cumulative Preferred Share of Bene cial Interest Series R"
    },
    {
    "Symbol":"PSA^S",
    "Name":"Public Storage Depositary Shares Each Representing 1/1000 of a 4.100% Cumulative Preferred Share of Beneficial Interest Series S"
    },
    {
    "Symbol":"PSAG",
    "Name":"Property Solutions Acquisition Corporation II Class A"
    },
    {
    "Symbol":"PSAGU",
    "Name":"Property Solutions Acquisition Corporation II Units"
    },
    {
    "Symbol":"PSAGW",
    "Name":"Property Solutions Acquisition Corporation II Warrant"
    },
    {
    "Symbol":"PSB",
    "Name":"PS Business Parks Inc. (MD)"
    },
    {
    "Symbol":"PSB^X",
    "Name":"PS Business Parks Inc. Depositary Shares Each Representing 1/1000 of a Share of 5.25% Cumulative Preferred Stock Series X"
    },
    {
    "Symbol":"PSB^Y",
    "Name":"PS Business Parks Inc. 5.20% Cumulative Preferred Stock Series Y"
    },
    {
    "Symbol":"PSB^Z",
    "Name":"PS Business Parks Inc. Depositary Shares Each Representing 1/1000 of a Share of 4.875% Cumulative Preferred Stock Series Z  par value $0.01 per share"
    },
    {
    "Symbol":"PSEC",
    "Name":"Prospect Capital Corporation"
    },
    {
    "Symbol":"PSEC^A",
    "Name":"Prospect Capital Corporation 5.35% Series A Fixed Rate Cumulative Perpetual Preferred Stock"
    },
    {
    "Symbol":"PSF",
    "Name":"Cohen & Steers Select Preferred and Income Fund Inc."
    },
    {
    "Symbol":"PSFE",
    "Name":"Paysafe Limited Common Shares"
    },
    {
    "Symbol":"PSHG",
    "Name":"Performance Shipping Inc. Common Shares"
    },
    {
    "Symbol":"PSMT",
    "Name":"PriceSmart Inc."
    },
    {
    "Symbol":"PSN",
    "Name":"Parsons Corporation"
    },
    {
    "Symbol":"PSNL",
    "Name":"Personalis Inc."
    },
    {
    "Symbol":"PSO",
    "Name":"Pearson Plc"
    },
    {
    "Symbol":"PSPC",
    "Name":"Post Holdings Partnering Corporation Series A"
    },
    {
    "Symbol":"PSTG",
    "Name":"Pure Storage Inc. Class A"
    },
    {
    "Symbol":"PSTH",
    "Name":"Pershing Square Tontine Holdings Ltd. Class A"
    },
    {
    "Symbol":"PSTI",
    "Name":"Pluristem Therapeutics Inc."
    },
    {
    "Symbol":"PSTL",
    "Name":"Postal Realty Trust Inc. Class A"
    },
    {
    "Symbol":"PSTV",
    "Name":"PLUS THERAPEUTICS Inc."
    },
    {
    "Symbol":"PSTX",
    "Name":"Poseida Therapeutics Inc."
    },
    {
    "Symbol":"PSX",
    "Name":"Phillips 66"
    },
    {
    "Symbol":"PSXP",
    "Name":"Phillips 66 Partners LP Common Units representing limited partner interest in the Partnership"
    },
    {
    "Symbol":"PT",
    "Name":"Pintec Technology Holdings Limited American Depositary Shares"
    },
    {
    "Symbol":"PTA",
    "Name":"Cohen & Steers Tax-Advantaged Preferred Securities and Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"PTC",
    "Name":"PTC Inc."
    },
    {
    "Symbol":"PTCT",
    "Name":"PTC Therapeutics Inc."
    },
    {
    "Symbol":"PTE",
    "Name":"PolarityTE Inc."
    },
    {
    "Symbol":"PTEN",
    "Name":"Patterson-UTI Energy Inc."
    },
    {
    "Symbol":"PTGX",
    "Name":"Protagonist Therapeutics Inc."
    },
    {
    "Symbol":"PTIC",
    "Name":"PropTech Investment Corporation II Class A"
    },
    {
    "Symbol":"PTICU",
    "Name":"PropTech Investment Corporation II Unit"
    },
    {
    "Symbol":"PTICW",
    "Name":"PropTech Investment Corporation II Warrant"
    },
    {
    "Symbol":"PTIX",
    "Name":"Protagenic Therapeutics Inc."
    },
    {
    "Symbol":"PTIXW",
    "Name":"Protagenic Therapeutics Inc. Warrant"
    },
    {
    "Symbol":"PTLO",
    "Name":"Portillo's Inc. Class A"
    },
    {
    "Symbol":"PTMN",
    "Name":"Portman Ridge Finance Corporation"
    },
    {
    "Symbol":"PTN",
    "Name":"Palatin Technologies Inc."
    },
    {
    "Symbol":"PTNR",
    "Name":"Partner Communications Company Ltd. American Depositary Shares"
    },
    {
    "Symbol":"PTOC",
    "Name":"Pine Technology Acquisition Corp. Class A"
    },
    {
    "Symbol":"PTOCU",
    "Name":"Pine Technology Acquisition Corp. Unit"
    },
    {
    "Symbol":"PTOCW",
    "Name":"Pine Technology Acquisition Corp. Warrant"
    },
    {
    "Symbol":"PTON",
    "Name":"Peloton Interactive Inc. Class A"
    },
    {
    "Symbol":"PTPI",
    "Name":"Petros Pharmaceuticals Inc."
    },
    {
    "Symbol":"PTR",
    "Name":"PetroChina Company Limited"
    },
    {
    "Symbol":"PTRA",
    "Name":"Proterra Inc."
    },
    {
    "Symbol":"PTRS",
    "Name":"Partners Bancorp"
    },
    {
    "Symbol":"PTSI",
    "Name":"P.A.M. Transportation Services Inc."
    },
    {
    "Symbol":"PTVE",
    "Name":"Pactiv Evergreen Inc."
    },
    {
    "Symbol":"PTY",
    "Name":"Pimco Corporate & Income Opportunity Fund"
    },
    {
    "Symbol":"PUBM",
    "Name":"PubMatic Inc. Class A"
    },
    {
    "Symbol":"PUCK",
    "Name":"Goal Acquisitions Corp."
    },
    {
    "Symbol":"PUCKU",
    "Name":"Goal Acquisitions Corp. Unit"
    },
    {
    "Symbol":"PUCKW",
    "Name":"Goal Acquisitions Corp. Warrant"
    },
    {
    "Symbol":"PUK",
    "Name":"Prudential Public Limited Company"
    },
    {
    "Symbol":"PULM",
    "Name":"Pulmatrix Inc."
    },
    {
    "Symbol":"PUMP",
    "Name":"ProPetro Holding Corp."
    },
    {
    "Symbol":"PUYI",
    "Name":"Puyi Inc. American Depository Shares"
    },
    {
    "Symbol":"PV",
    "Name":"Primavera Capital Acquisition Corporation Class A Ordinary Shares"
    },
    {
    "Symbol":"PVBC",
    "Name":"Provident Bancorp Inc. (MD)"
    },
    {
    "Symbol":"PVG",
    "Name":"Pretium Resources Inc. Ordinary Shares (Canada)"
    },
    {
    "Symbol":"PVH",
    "Name":"PVH Corp."
    },
    {
    "Symbol":"PVL",
    "Name":"Permianville Royalty Trust Trust Units"
    },
    {
    "Symbol":"PW",
    "Name":"Power REIT (MD)"
    },
    {
    "Symbol":"PW^A",
    "Name":"Power REIT 7.75% Series A Cumulative Perpetual Preferred Stock"
    },
    {
    "Symbol":"PWFL",
    "Name":"PowerFleet Inc."
    },
    {
    "Symbol":"PWOD",
    "Name":"Penns Woods Bancorp Inc."
    },
    {
    "Symbol":"PWP",
    "Name":"Perella Weinberg Partners Class A"
    },
    {
    "Symbol":"PWPPW",
    "Name":"Perella Weinberg Partners Warrant"
    },
    {
    "Symbol":"PWR",
    "Name":"Quanta Services Inc."
    },
    {
    "Symbol":"PWSC",
    "Name":"PowerSchool Holdings Inc. Class A"
    },
    {
    "Symbol":"PX",
    "Name":"P10 Inc. Class A"
    },
    {
    "Symbol":"PXD",
    "Name":"Pioneer Natural Resources Company"
    },
    {
    "Symbol":"PXLW",
    "Name":"Pixelworks Inc. "
    },
    {
    "Symbol":"PXS",
    "Name":"Pyxis Tankers Inc."
    },
    {
    "Symbol":"PXSAP",
    "Name":"Pyxis Tankers Inc. 7.75% Series A Cumulative Convertible Preferred Shares"
    },
    {
    "Symbol":"PXSAW",
    "Name":"Pyxis Tankers Inc. Warrant"
    },
    {
    "Symbol":"PYCR",
    "Name":"Paycor HCM Inc."
    },
    {
    "Symbol":"PYN",
    "Name":"PIMCO New York Municipal Income Fund III Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"PYPD",
    "Name":"PolyPid Ltd. Ordinary Shares"
    },
    {
    "Symbol":"PYPL",
    "Name":"PayPal Holdings Inc."
    },
    {
    "Symbol":"PYR",
    "Name":"PyroGenesis Canada Inc. Common Shares"
    },
    {
    "Symbol":"PYS",
    "Name":"Merrill Lynch Depositor Inc PPlus Tr Ser RRD-1 Tr Ctf Cl A"
    },
    {
    "Symbol":"PYT",
    "Name":"PPlus Tr GSC-2 Tr Ctf Fltg Rate"
    },
    {
    "Symbol":"PYXS",
    "Name":"Pyxis Oncology Inc."
    },
    {
    "Symbol":"PZC",
    "Name":"PIMCO California Municipal Income Fund III Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"PZG",
    "Name":"Paramount Gold Nevada Corp."
    },
    {
    "Symbol":"PZN",
    "Name":"Pzena Investment Management Inc Class A"
    },
    {
    "Symbol":"PZZA",
    "Name":"Papa John's International Inc."
    },
    {
    "Symbol":"QCOM",
    "Name":"QUALCOMM Incorporated"
    },
    {
    "Symbol":"QCRH",
    "Name":"QCR Holdings Inc."
    },
    {
    "Symbol":"QD",
    "Name":"Qudian Inc. American Depositary Shares each representing one Class A Ordinary Share"
    },
    {
    "Symbol":"QDEL",
    "Name":"Quidel Corporation"
    },
    {
    "Symbol":"QFIN",
    "Name":"360 DigiTech Inc. American Depositary Shares"
    },
    {
    "Symbol":"QFTA",
    "Name":"Quantum FinTech Acquisition Corporation"
    },
    {
    "Symbol":"QGEN",
    "Name":"Qiagen N.V. Common Shares"
    },
    {
    "Symbol":"QH",
    "Name":"Quhuo Limited American Depository Shares"
    },
    {
    "Symbol":"QIPT",
    "Name":"Quipt Home Medical Corp. Common Shares"
    },
    {
    "Symbol":"QIWI",
    "Name":"QIWI plc American Depositary Shares"
    },
    {
    "Symbol":"QK",
    "Name":"Q&K International Group Limited American Depositary Shares"
    },
    {
    "Symbol":"QLGN",
    "Name":"Qualigen Therapeutics Inc."
    },
    {
    "Symbol":"QLI",
    "Name":"Qilian International Holding Group Ltd. Ordinary Shares"
    },
    {
    "Symbol":"QLYS",
    "Name":"Qualys Inc."
    },
    {
    "Symbol":"QMCO",
    "Name":"Quantum Corporation"
    },
    {
    "Symbol":"QNRX",
    "Name":"Quoin Pharmaceuticals Ltd. American Depositary Shares"
    },
    {
    "Symbol":"QNST",
    "Name":"QuinStreet Inc."
    },
    {
    "Symbol":"QQQX",
    "Name":"Nuveen NASDAQ 100 Dynamic Overwrite Fund Shares of Beneficial Interest"
    },
    {
    "Symbol":"QRHC",
    "Name":"Quest Resource Holding Corporation"
    },
    {
    "Symbol":"QRTEA",
    "Name":"Qurate Retail Inc. Series A"
    },
    {
    "Symbol":"QRTEB",
    "Name":"Qurate Retail Inc. Series B"
    },
    {
    "Symbol":"QRTEP",
    "Name":"Qurate Retail Inc. 8.0% Fixed Rate Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"QRVO",
    "Name":"Qorvo Inc."
    },
    {
    "Symbol":"QS",
    "Name":"QuantumScape Corporation Class A"
    },
    {
    "Symbol":"QSI",
    "Name":"Quantum-Si Incorporated Class A"
    },
    {
    "Symbol":"QSIAW",
    "Name":"Quantum-Si Incorporated Warrant"
    },
    {
    "Symbol":"QSR",
    "Name":"Restaurant Brands International Inc. Common Shares"
    },
    {
    "Symbol":"QTNT",
    "Name":"Quotient Limited Ordinary Shares"
    },
    {
    "Symbol":"QTRX",
    "Name":"Quanterix Corporation"
    },
    {
    "Symbol":"QTT",
    "Name":"Qutoutiao Inc. American Depositary Shares"
    },
    {
    "Symbol":"QTWO",
    "Name":"Q2 Holdings Inc."
    },
    {
    "Symbol":"QUAD",
    "Name":"Quad Graphics Inc Class A"
    },
    {
    "Symbol":"QUBT",
    "Name":"Quantum Computing Inc."
    },
    {
    "Symbol":"QUIK",
    "Name":"QuickLogic Corporation"
    },
    {
    "Symbol":"QUMU",
    "Name":"Qumu Corporation"
    },
    {
    "Symbol":"QUOT",
    "Name":"Quotient Technology Inc."
    },
    {
    "Symbol":"QURE",
    "Name":"uniQure N.V. Ordinary Shares"
    },
    {
    "Symbol":"QVCC",
    "Name":"QVC Inc. 6.250% Senior Secured Notes due 2068"
    },
    {
    "Symbol":"QVCD",
    "Name":"QVC Inc. 6.375% Senior Secured Notes due 2067"
    },
    {
    "Symbol":"R",
    "Name":"Ryder System Inc."
    },
    {
    "Symbol":"RA",
    "Name":"Brookfield Real Assets Income Fund Inc."
    },
    {
    "Symbol":"RAAS",
    "Name":"Cloopen Group Holding Limited American Depositary Shares each representing two Class A Ordinary Shares"
    },
    {
    "Symbol":"RACE",
    "Name":"Ferrari N.V. Common Shares"
    },
    {
    "Symbol":"RAD",
    "Name":"Rite Aid Corporation"
    },
    {
    "Symbol":"RADA",
    "Name":"RADA Electronic Industries Ltd. Ordinary Shares"
    },
    {
    "Symbol":"RADI",
    "Name":"Radius Global Infrastructure Inc. Class A"
    },
    {
    "Symbol":"RAIL",
    "Name":"FreightCar America Inc."
    },
    {
    "Symbol":"RAIN",
    "Name":"Rain Therapeutics Inc."
    },
    {
    "Symbol":"RAM",
    "Name":"Aries I Acquisition Corporation Class A Ordinary Share"
    },
    {
    "Symbol":"RAMMU",
    "Name":"Aries I Acquisition Corporation Unit"
    },
    {
    "Symbol":"RAMMW",
    "Name":"Aries I Acquisition Corporation Warrant"
    },
    {
    "Symbol":"RAMP",
    "Name":"LiveRamp Holdings Inc."
    },
    {
    "Symbol":"RAND",
    "Name":"Rand Capital Corporation"
    },
    {
    "Symbol":"RANI",
    "Name":"Rani Therapeutics Holdings Inc. Class A"
    },
    {
    "Symbol":"RAPT",
    "Name":"RAPT Therapeutics Inc."
    },
    {
    "Symbol":"RARE",
    "Name":"Ultragenyx Pharmaceutical Inc."
    },
    {
    "Symbol":"RAVE",
    "Name":"Rave Restaurant Group Inc."
    },
    {
    "Symbol":"RBA",
    "Name":"Ritchie Bros. Auctioneers Incorporated"
    },
    {
    "Symbol":"RBAC",
    "Name":"RedBall Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"RBB",
    "Name":"RBB Bancorp"
    },
    {
    "Symbol":"RBBN",
    "Name":"Ribbon Communications Inc."
    },
    {
    "Symbol":"RBCAA",
    "Name":"Republic Bancorp Inc. Class A"
    },
    {
    "Symbol":"RBCN",
    "Name":"Rubicon Technology Inc."
    },
    {
    "Symbol":"RBKB",
    "Name":"Rhinebeck Bancorp Inc."
    },
    {
    "Symbol":"RBLX",
    "Name":"Roblox Corporation Class A"
    },
    {
    "Symbol":"RBOT",
    "Name":"Vicarious Surgical Inc. Class A"
    },
    {
    "Symbol":"RC",
    "Name":"Ready Capital Corproation"
    },
    {
    "Symbol":"RC^C",
    "Name":"Ready Capital Corporation 6.25% Series C Cumulative Convertible Preferred Stock"
    },
    {
    "Symbol":"RC^E",
    "Name":"Ready Capital Corporation 6.50% Series E Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"RCA",
    "Name":"Ready Capital Corporation 7.00% Convertible Senior Notes due 2023"
    },
    {
    "Symbol":"RCACU",
    "Name":"Revelstone Capital Acquisition Corp. Unit"
    },
    {
    "Symbol":"RCAT",
    "Name":"Red Cat Holdings Inc."
    },
    {
    "Symbol":"RCB",
    "Name":"Ready Capital Corporation 6.20% Senior Notes due 2026"
    },
    {
    "Symbol":"RCC",
    "Name":"Ready Capital Corporation 5.75% Senior Notes due 2026"
    },
    {
    "Symbol":"RCEL",
    "Name":"Avita Medical Inc."
    },
    {
    "Symbol":"RCFA",
    "Name":"RCF Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"RCG",
    "Name":"RENN Fund Inc"
    },
    {
    "Symbol":"RCHG",
    "Name":"Recharge Acquisition Corp. Class A"
    },
    {
    "Symbol":"RCHGW",
    "Name":"Recharge Acquisition Corp. Warrant"
    },
    {
    "Symbol":"RCI",
    "Name":"Rogers Communication Inc."
    },
    {
    "Symbol":"RCII",
    "Name":"Rent-A-Center Inc."
    },
    {
    "Symbol":"RCKT",
    "Name":"Rocket Pharmaceuticals Inc."
    },
    {
    "Symbol":"RCKY",
    "Name":"Rocky Brands Inc."
    },
    {
    "Symbol":"RCL",
    "Name":"D/B/A Royal Caribbean Cruises Ltd."
    },
    {
    "Symbol":"RCLF",
    "Name":"Rosecliff Acquisition Corp I Class A"
    },
    {
    "Symbol":"RCLFU",
    "Name":"Rosecliff Acquisition Corp I Unit"
    },
    {
    "Symbol":"RCLFW",
    "Name":"Rosecliff Acquisition Corp I Warrants"
    },
    {
    "Symbol":"RCM",
    "Name":"R1 RCM Inc."
    },
    {
    "Symbol":"RCMT",
    "Name":"RCM Technologies Inc."
    },
    {
    "Symbol":"RCON",
    "Name":"Recon Technology Ltd. Class A Ordinary Shares"
    },
    {
    "Symbol":"RCOR",
    "Name":"Renovacor Inc."
    },
    {
    "Symbol":"RCRT",
    "Name":"Recruiter.com Group Inc."
    },
    {
    "Symbol":"RCRTW",
    "Name":"Recruiter.com Group Inc. Warrant"
    },
    {
    "Symbol":"RCS",
    "Name":"PIMCO Strategic Income Fund Inc."
    },
    {
    "Symbol":"RCUS",
    "Name":"Arcus Biosciences Inc."
    },
    {
    "Symbol":"RDBX",
    "Name":"Redbox Entertainment Inc. Class A"
    },
    {
    "Symbol":"RDBXW",
    "Name":"Redbox Entertainment Inc. Warrant"
    },
    {
    "Symbol":"RDCM",
    "Name":"Radcom Ltd. Ordinary Shares"
    },
    {
    "Symbol":"RDFN",
    "Name":"Redfin Corporation"
    },
    {
    "Symbol":"RDHL",
    "Name":"Redhill Biopharma Ltd. American Depositary Shares"
    },
    {
    "Symbol":"RDI",
    "Name":"Reading International Inc Class A"
    },
    {
    "Symbol":"RDIB",
    "Name":"Reading International Inc Class B"
    },
    {
    "Symbol":"RDN",
    "Name":"Radian Group Inc."
    },
    {
    "Symbol":"RDNT",
    "Name":"RadNet Inc."
    },
    {
    "Symbol":"RDS/B",
    "Name":"Royal Dutch Shell PLC"
    },
    {
    "Symbol":"RDUS",
    "Name":"Radius Health Inc."
    },
    {
    "Symbol":"RDVT",
    "Name":"Red Violet Inc."
    },
    {
    "Symbol":"RDW",
    "Name":"Redwire Corporation"
    },
    {
    "Symbol":"RDWR",
    "Name":"Radware Ltd. Ordinary Shares"
    },
    {
    "Symbol":"RDY",
    "Name":"Dr. Reddy's Laboratories Ltd"
    },
    {
    "Symbol":"RE",
    "Name":"Everest Re Group Ltd."
    },
    {
    "Symbol":"REAL",
    "Name":"The RealReal Inc."
    },
    {
    "Symbol":"REAX",
    "Name":"The Real Brokerage Inc. Common Shares"
    },
    {
    "Symbol":"REDU",
    "Name":"RISE Education Cayman Ltd American Depositary Shares"
    },
    {
    "Symbol":"REE",
    "Name":"REE Automotive Ltd. Class A Ordinary Shares"
    },
    {
    "Symbol":"REEAW",
    "Name":"REE Automotive Ltd. Warrant"
    },
    {
    "Symbol":"REED",
    "Name":"Reeds Inc."
    },
    {
    "Symbol":"REFI",
    "Name":"Chicago Atlantic Real Estate Finance Inc."
    },
    {
    "Symbol":"REFR",
    "Name":"Research Frontiers Incorporated"
    },
    {
    "Symbol":"REG",
    "Name":"Regency Centers Corporation"
    },
    {
    "Symbol":"REGI",
    "Name":"Renewable Energy Group Inc."
    },
    {
    "Symbol":"REGN",
    "Name":"Regeneron Pharmaceuticals Inc."
    },
    {
    "Symbol":"REI",
    "Name":"Ring Energy Inc."
    },
    {
    "Symbol":"REKR",
    "Name":"Rekor Systems Inc."
    },
    {
    "Symbol":"RELI",
    "Name":"Reliance Global Group Inc."
    },
    {
    "Symbol":"RELIW",
    "Name":"Reliance Global Group Inc. Series A Warrants"
    },
    {
    "Symbol":"RELL",
    "Name":"Richardson Electronics Ltd."
    },
    {
    "Symbol":"RELX",
    "Name":"RELX PLC PLC American Depositary Shares (Each representing One Ordinary Share)"
    },
    {
    "Symbol":"RELY",
    "Name":"Remitly Global Inc."
    },
    {
    "Symbol":"RENN",
    "Name":"Renren Inc. American Depositary Shares each representing fifteen Class A ordinary shares"
    },
    {
    "Symbol":"RENO",
    "Name":"Renovare Environmental Inc. "
    },
    {
    "Symbol":"RENT",
    "Name":"Rent the Runway Inc. Class A"
    },
    {
    "Symbol":"REPH",
    "Name":"Recro Pharma Inc."
    },
    {
    "Symbol":"REPL",
    "Name":"Replimune Group Inc."
    },
    {
    "Symbol":"REPX",
    "Name":"Riley Exploration Permian Inc."
    },
    {
    "Symbol":"RERE",
    "Name":"ATRenew Inc. American Depositary Shares (every three of which representing two Class A ordinary shares)"
    },
    {
    "Symbol":"RES",
    "Name":"RPC Inc."
    },
    {
    "Symbol":"RESN",
    "Name":"Resonant Inc."
    },
    {
    "Symbol":"RETA",
    "Name":"Reata Pharmaceuticals Inc. Class A"
    },
    {
    "Symbol":"RETO",
    "Name":"ReTo Eco-Solutions Inc. Common Shares"
    },
    {
    "Symbol":"REV",
    "Name":"Revlon Inc. New"
    },
    {
    "Symbol":"REVB",
    "Name":"Revelation Biosciences Inc."
    },
    {
    "Symbol":"REVBW",
    "Name":"Revelation Biosciences Inc. Warrant"
    },
    {
    "Symbol":"REVE",
    "Name":"Alpine Acquisition Corporation"
    },
    {
    "Symbol":"REVEU",
    "Name":"Alpine Acquisition Corporation Unit"
    },
    {
    "Symbol":"REVEW",
    "Name":"Alpine Acquisition Corporation Warrant"
    },
    {
    "Symbol":"REVG",
    "Name":"REV Group Inc."
    },
    {
    "Symbol":"REVH",
    "Name":"Revolution Healthcare Acquisition Corp. SAIL Class A"
    },
    {
    "Symbol":"REVHU",
    "Name":"Revolution Healthcare Acquisition Corp. SAIL Units"
    },
    {
    "Symbol":"REVHW",
    "Name":"Revolution Healthcare Acquisition Corp. SAIL Warrant."
    },
    {
    "Symbol":"REX",
    "Name":"REX American Resources Corporation"
    },
    {
    "Symbol":"REXR",
    "Name":"Rexford Industrial Realty Inc."
    },
    {
    "Symbol":"REXR^B",
    "Name":"Rexford Industrial Realty Inc. 5.875% Series B Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"REXR^C",
    "Name":"Rexford Industrial Realty Inc. 5.625% Series C Cumulative Redeemable Preferred Stock par value $0.01 per share"
    },
    {
    "Symbol":"REYN",
    "Name":"Reynolds Consumer Products Inc."
    },
    {
    "Symbol":"REZI",
    "Name":"Resideo Technologies Inc."
    },
    {
    "Symbol":"RF",
    "Name":"Regions Financial Corporation"
    },
    {
    "Symbol":"RF^B",
    "Name":"Regions Financial Corporation Depositary Shares Representing 1/40th Perpetual Preferred Series B"
    },
    {
    "Symbol":"RF^C",
    "Name":"Regions Financial Corporation Depositary Shares each Representing a 1/40th Interest in a  Share of 5.700% Fixed-to-Floating Rate Non-Cumulative  Perpetual Preferred Stock Series C"
    },
    {
    "Symbol":"RF^E",
    "Name":"Regions Financial Corporation Depositary Shares Each Representing a 1/40th Interest in a Share of 4.45% Non-Cumulative Perpetual Preferred Stock Series E"
    },
    {
    "Symbol":"RFI",
    "Name":"Cohen & Steers Total Return Realty Fund Inc."
    },
    {
    "Symbol":"RFIL",
    "Name":"RF Industries Ltd."
    },
    {
    "Symbol":"RFL",
    "Name":"Rafael Holdings Inc. Class B"
    },
    {
    "Symbol":"RFM",
    "Name":"RiverNorth Flexible Municipal Income Fund Inc."
    },
    {
    "Symbol":"RFMZ",
    "Name":"RiverNorth Flexible Municipal Income Fund II Inc."
    },
    {
    "Symbol":"RFP",
    "Name":"Resolute Forest Products Inc."
    },
    {
    "Symbol":"RGA",
    "Name":"Reinsurance Group of America Incorporated"
    },
    {
    "Symbol":"RGC",
    "Name":"Regencell Bioscience Holdings Limited Ordinary Shares"
    },
    {
    "Symbol":"RGCO",
    "Name":"RGC Resources Inc."
    },
    {
    "Symbol":"RGEN",
    "Name":"Repligen Corporation"
    },
    {
    "Symbol":"RGF",
    "Name":"The Real Good Food Company Inc. Class A"
    },
    {
    "Symbol":"RGLD",
    "Name":"Royal Gold Inc."
    },
    {
    "Symbol":"RGLS",
    "Name":"Regulus Therapeutics Inc."
    },
    {
    "Symbol":"RGNX",
    "Name":"REGENXBIO Inc."
    },
    {
    "Symbol":"RGP",
    "Name":"Resources Connection Inc."
    },
    {
    "Symbol":"RGR",
    "Name":"Sturm Ruger & Company Inc."
    },
    {
    "Symbol":"RGS",
    "Name":"Regis Corporation"
    },
    {
    "Symbol":"RGT",
    "Name":"Royce Global Value Trust Inc."
    },
    {
    "Symbol":"RH",
    "Name":"RH"
    },
    {
    "Symbol":"RHE",
    "Name":"Regional Health Properties Inc."
    },
    {
    "Symbol":"RHE^A",
    "Name":"Regional Health Properties Inc. 10.875% Series A Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"RHI",
    "Name":"Robert Half International Inc."
    },
    {
    "Symbol":"RHP",
    "Name":"Ryman Hospitality Properties Inc. (REIT)"
    },
    {
    "Symbol":"RIBT",
    "Name":"RiceBran Technologies"
    },
    {
    "Symbol":"RICK",
    "Name":"RCI Hospitality Holdings Inc."
    },
    {
    "Symbol":"RICO",
    "Name":"Agrico Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"RICOW",
    "Name":"Agrico Acquisition Corp. Warrant"
    },
    {
    "Symbol":"RIDE",
    "Name":"Lordstown Motors Corp. Class A"
    },
    {
    "Symbol":"RIG",
    "Name":"Transocean Ltd (Switzerland)"
    },
    {
    "Symbol":"RIGL",
    "Name":"Rigel Pharmaceuticals Inc."
    },
    {
    "Symbol":"RILY",
    "Name":"B. Riley Financial Inc."
    },
    {
    "Symbol":"RILYG",
    "Name":"B. Riley Financial Inc. 5.00% Senior Notes due 2026"
    },
    {
    "Symbol":"RILYK",
    "Name":"B. Riley Financial Inc. 5.50% Senior Notes Due 2026"
    },
    {
    "Symbol":"RILYL",
    "Name":"B. Riley Financial Inc. Depositary Shares each representing 1/1000th in a share of 7.375% Series B Cumulative Perpetual Preferred Stock par value $0.0001"
    },
    {
    "Symbol":"RILYM",
    "Name":"B. Riley Financial Inc. 6.375% Senior Notes due 2025"
    },
    {
    "Symbol":"RILYN",
    "Name":"B. Riley Financial Inc. 6.50% Senior Notes Due 2026"
    },
    {
    "Symbol":"RILYO",
    "Name":"B. Riley Financial Inc. 6.75% Senior Notes due 2024"
    },
    {
    "Symbol":"RILYP",
    "Name":"B. Riley Financial Inc. Depositary Shares each representing a 1/1000th fractional interest in a share of Series A Cumulative Perpetual Preferred Stock"
    },
    {
    "Symbol":"RILYT",
    "Name":"B. Riley Financial Inc. 6.00% Senior Notes Due 2028"
    },
    {
    "Symbol":"RILYZ",
    "Name":"B. Riley Financial Inc. 5.25% Senior Notes due 2028"
    },
    {
    "Symbol":"RIO",
    "Name":"Rio Tinto Plc"
    },
    {
    "Symbol":"RIOT",
    "Name":"Riot Blockchain Inc. "
    },
    {
    "Symbol":"RIV",
    "Name":"RiverNorth Opportunities Fund Inc."
    },
    {
    "Symbol":"RIVN",
    "Name":"Rivian Automotive Inc. Class A"
    },
    {
    "Symbol":"RJF",
    "Name":"Raymond James Financial Inc."
    },
    {
    "Symbol":"RKDA",
    "Name":"Arcadia Biosciences Inc."
    },
    {
    "Symbol":"RKLB",
    "Name":"Rocket Lab USA Inc."
    },
    {
    "Symbol":"RKLBW",
    "Name":"Rocket Lab USA Inc. Warrant"
    },
    {
    "Symbol":"RKLY",
    "Name":"Rockley Photonics Holdings Limited Ordinary Shares"
    },
    {
    "Symbol":"RKT",
    "Name":"Rocket Companies Inc. Class A"
    },
    {
    "Symbol":"RKTA",
    "Name":"Rocket Internet Growth Opportunities Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"RL",
    "Name":"Ralph Lauren Corporation"
    },
    {
    "Symbol":"RLAY",
    "Name":"Relay Therapeutics Inc."
    },
    {
    "Symbol":"RLGT",
    "Name":"Radiant Logistics Inc."
    },
    {
    "Symbol":"RLGY",
    "Name":"Realogy Holdings Corp."
    },
    {
    "Symbol":"RLI",
    "Name":"RLI Corp.   (DE)"
    },
    {
    "Symbol":"RLJ",
    "Name":"RLJ Lodging Trust Common Shares of Beneficial Interest $0.01 par value"
    },
    {
    "Symbol":"RLJ^A",
    "Name":"RLJ Lodging Trust $1.95 Series A Cumulative Convertible  Preferred Shares"
    },
    {
    "Symbol":"RLMD",
    "Name":"Relmada Therapeutics Inc."
    },
    {
    "Symbol":"RLX",
    "Name":"RLX Technology Inc. American Depositary Shares each representing the right to receive one (1) Class A ordinary share"
    },
    {
    "Symbol":"RLYB",
    "Name":"Rallybio Corporation"
    },
    {
    "Symbol":"RM",
    "Name":"Regional Management Corp."
    },
    {
    "Symbol":"RMAX",
    "Name":"RE/MAX Holdings Inc. Class A"
    },
    {
    "Symbol":"RMBI",
    "Name":"Richmond Mutual Bancorporation Inc."
    },
    {
    "Symbol":"RMBL",
    "Name":"RumbleOn Inc. Class B"
    },
    {
    "Symbol":"RMBS",
    "Name":"Rambus Inc."
    },
    {
    "Symbol":"RMCF",
    "Name":"Rocky Mountain Chocolate Factory Inc."
    },
    {
    "Symbol":"RMD",
    "Name":"ResMed Inc."
    },
    {
    "Symbol":"RMED",
    "Name":"Ra Medical Systems Inc."
    },
    {
    "Symbol":"RMGC",
    "Name":"RMG Acquisition Corp. III Class A Ordinary Shares"
    },
    {
    "Symbol":"RMGCU",
    "Name":"RMG Acquisition Corp. III Unit"
    },
    {
    "Symbol":"RMGCW",
    "Name":"RMG Acquisition Corp. III Warrant"
    },
    {
    "Symbol":"RMI",
    "Name":"RiverNorth Opportunistic Municipal Income Fund Inc."
    },
    {
    "Symbol":"RMM",
    "Name":"RiverNorth Managed Duration Municipal Income Fund Inc."
    },
    {
    "Symbol":"RMNI",
    "Name":"Rimini Street Inc. (DE)"
    },
    {
    "Symbol":"RMO",
    "Name":"Romeo Power Inc. Class A"
    },
    {
    "Symbol":"RMPL^",
    "Name":"RiverNorth Specialty Finance Corporation 5.875%"
    },
    {
    "Symbol":"RMR",
    "Name":"The RMR Group Inc. Class A"
    },
    {
    "Symbol":"RMT",
    "Name":"Royce Micro-Cap Trust Inc."
    },
    {
    "Symbol":"RMTI",
    "Name":"Rockwell Medical Inc. (DE)"
    },
    {
    "Symbol":"RNA",
    "Name":"Avidity Biosciences Inc."
    },
    {
    "Symbol":"RNAZ",
    "Name":"TransCode Therapeutics Inc."
    },
    {
    "Symbol":"RNDB",
    "Name":"Randolph Bancorp Inc."
    },
    {
    "Symbol":"RNER",
    "Name":"Mount Rainier Acquisition Corp."
    },
    {
    "Symbol":"RNERU",
    "Name":"Mount Rainier Acquisition Corp. Unit"
    },
    {
    "Symbol":"RNERW",
    "Name":"Mount Rainier Acquisition Corp. Warrant"
    },
    {
    "Symbol":"RNG",
    "Name":"RingCentral Inc. Class A"
    },
    {
    "Symbol":"RNGR",
    "Name":"Ranger Energy Services Inc. Class A"
    },
    {
    "Symbol":"RNLX",
    "Name":"Renalytix plc American Depositary Shares"
    },
    {
    "Symbol":"RNP",
    "Name":"Cohen & Steers REIT and Preferred and Income Fund Inc. Common Shares"
    },
    {
    "Symbol":"RNR",
    "Name":"RenaissanceRe Holdings Ltd."
    },
    {
    "Symbol":"RNR^F",
    "Name":"RenaissanceRe Holdings Ltd. Depositary Shares each Representing a 1/1000th Interest in a 5.750% Series F Preference Share"
    },
    {
    "Symbol":"RNR^G",
    "Name":"RenaissanceRe Holdings Ltd. Depositary Shares each representing a 1/1000th interest in a share of 4.20% Series G Preference Shares"
    },
    {
    "Symbol":"RNST",
    "Name":"Renasant Corporation"
    },
    {
    "Symbol":"RNW",
    "Name":"ReNew Energy Global plc Class A Ordinary Shares"
    },
    {
    "Symbol":"RNWK",
    "Name":"RealNetworks Inc."
    },
    {
    "Symbol":"RNWWW",
    "Name":"ReNew Energy Global plc Warrant"
    },
    {
    "Symbol":"RNXT",
    "Name":"RenovoRx Inc."
    },
    {
    "Symbol":"ROAD",
    "Name":"Construction Partners Inc. Class A"
    },
    {
    "Symbol":"ROCAR",
    "Name":"ROC Energy Acquisition Corp. Rights"
    },
    {
    "Symbol":"ROCAU",
    "Name":"ROC Energy Acquisition Corp. Unit"
    },
    {
    "Symbol":"ROCC",
    "Name":"Ranger Oil Corporation Class A"
    },
    {
    "Symbol":"ROCG",
    "Name":"Roth CH Acquisition IV Co."
    },
    {
    "Symbol":"ROCGW",
    "Name":"Roth CH Acquisition IV Co. Warrant"
    },
    {
    "Symbol":"ROCK",
    "Name":"Gibraltar Industries Inc."
    },
    {
    "Symbol":"ROCL",
    "Name":"Roth CH Acquisition V Co."
    },
    {
    "Symbol":"ROCLU",
    "Name":"Roth CH Acquisition V Co. Unit"
    },
    {
    "Symbol":"ROCR",
    "Name":"Roth CH Acquisition III Co."
    },
    {
    "Symbol":"ROCRU",
    "Name":"Roth CH Acquisition III Co. Unit"
    },
    {
    "Symbol":"ROCRW",
    "Name":"Roth CH Acquisition III Co. Warrant"
    },
    {
    "Symbol":"ROG",
    "Name":"Rogers Corporation"
    },
    {
    "Symbol":"ROIC",
    "Name":"Retail Opportunity Investments Corp.   (MD)"
    },
    {
    "Symbol":"ROIV",
    "Name":"Roivant Sciences Ltd. Common Shares"
    },
    {
    "Symbol":"ROIVW",
    "Name":"Roivant Sciences Ltd. Warrant"
    },
    {
    "Symbol":"ROK",
    "Name":"Rockwell Automation Inc."
    },
    {
    "Symbol":"ROKU",
    "Name":"Roku Inc. Class A"
    },
    {
    "Symbol":"ROL",
    "Name":"Rollins Inc."
    },
    {
    "Symbol":"ROLL",
    "Name":"RBC Bearings Incorporated"
    },
    {
    "Symbol":"ROLLP",
    "Name":"RBC Bearings Incorporated 5.00% Series A Mandatory Convertible Preferred Stock"
    },
    {
    "Symbol":"RONI",
    "Name":"Rice Acquisition Corp. II Class A Ordinary Shares"
    },
    {
    "Symbol":"ROOT",
    "Name":"Root Inc. Class A"
    },
    {
    "Symbol":"ROP",
    "Name":"Roper Technologies Inc."
    },
    {
    "Symbol":"ROSE",
    "Name":"Rose Hill Acquisition Corporation Class A Ordinary Shares"
    },
    {
    "Symbol":"ROSEU",
    "Name":"Rose Hill Acquisition Corporation Unit"
    },
    {
    "Symbol":"ROSEW",
    "Name":"Rose Hill Acquisition Corporation Warrant"
    },
    {
    "Symbol":"ROSS",
    "Name":"Ross Acquisition Corp II Class A Ordinary Shares"
    },
    {
    "Symbol":"ROST",
    "Name":"Ross Stores Inc."
    },
    {
    "Symbol":"ROVR",
    "Name":"Rover Group Inc. Class A"
    },
    {
    "Symbol":"RPAY",
    "Name":"Repay Holdings Corporation Class A"
    },
    {
    "Symbol":"RPD",
    "Name":"Rapid7 Inc."
    },
    {
    "Symbol":"RPHM",
    "Name":"Reneo Pharmaceuticals Inc."
    },
    {
    "Symbol":"RPID",
    "Name":"Rapid Micro Biosystems Inc. Class A"
    },
    {
    "Symbol":"RPM",
    "Name":"RPM International Inc."
    },
    {
    "Symbol":"RPRX",
    "Name":"Royalty Pharma plc Class A Ordinary Shares"
    },
    {
    "Symbol":"RPT",
    "Name":"RPT Realty"
    },
    {
    "Symbol":"RPT^D",
    "Name":"RPT Realty 7.25%"
    },
    {
    "Symbol":"RPTX",
    "Name":"Repare Therapeutics Inc. Common Shares"
    },
    {
    "Symbol":"RQI",
    "Name":"Cohen & Steers Quality Income Realty Fund Inc Common Shares"
    },
    {
    "Symbol":"RRAC",
    "Name":"Rigel Resource Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"RRBI",
    "Name":"Red River Bancshares Inc."
    },
    {
    "Symbol":"RRC",
    "Name":"Range Resources Corporation"
    },
    {
    "Symbol":"RRD",
    "Name":"R.R. Donnelley & Sons Company"
    },
    {
    "Symbol":"RRGB",
    "Name":"Red Robin Gourmet Burgers Inc."
    },
    {
    "Symbol":"RRR",
    "Name":"Red Rock Resorts Inc. Class A"
    },
    {
    "Symbol":"RRX",
    "Name":"Regal Rexnord Corporation"
    },
    {
    "Symbol":"RS",
    "Name":"Reliance Steel & Aluminum Co.   (DE)"
    },
    {
    "Symbol":"RSF",
    "Name":"RiverNorth Specialty Finance Corporation"
    },
    {
    "Symbol":"RSG",
    "Name":"Republic Services Inc."
    },
    {
    "Symbol":"RSI",
    "Name":"Rush Street Interactive Inc. Class A"
    },
    {
    "Symbol":"RSKD",
    "Name":"Riskified Ltd. Class A Ordinary Shares"
    },
    {
    "Symbol":"RSLS",
    "Name":"ReShape Lifesciences Inc."
    },
    {
    "Symbol":"RSSS",
    "Name":"Research Solutions Inc"
    },
    {
    "Symbol":"RSVR",
    "Name":"Reservoir Media Inc."
    },
    {
    "Symbol":"RSVRW",
    "Name":"Reservoir Media Inc. Warrant"
    },
    {
    "Symbol":"RTLR",
    "Name":"Rattler Midstream LP Common Units"
    },
    {
    "Symbol":"RTX",
    "Name":"Raytheon Technologies Corporation"
    },
    {
    "Symbol":"RUBY",
    "Name":"Rubius Therapeutics Inc."
    },
    {
    "Symbol":"RUN",
    "Name":"Sunrun Inc."
    },
    {
    "Symbol":"RUSHA",
    "Name":"Rush Enterprises Inc.   Cl A"
    },
    {
    "Symbol":"RUSHB",
    "Name":"Rush Enterprises Inc. Class B"
    },
    {
    "Symbol":"RUTH",
    "Name":"Ruth's Hospitality Group Inc."
    },
    {
    "Symbol":"RVAC",
    "Name":"Riverview Acquisition Corp. Class A"
    },
    {
    "Symbol":"RVACW",
    "Name":"Riverview Acquisition Corp. Warrant"
    },
    {
    "Symbol":"RVI",
    "Name":"Retail Value Inc."
    },
    {
    "Symbol":"RVLP",
    "Name":"RVL Pharmaceuticals plc Ordinary Shares"
    },
    {
    "Symbol":"RVLV",
    "Name":"Revolve Group Inc. Class A"
    },
    {
    "Symbol":"RVMD",
    "Name":"Revolution Medicines Inc."
    },
    {
    "Symbol":"RVNC",
    "Name":"Revance Therapeutics Inc."
    },
    {
    "Symbol":"RVP",
    "Name":"Retractable Technologies Inc."
    },
    {
    "Symbol":"RVPH",
    "Name":"Reviva Pharmaceuticals Holdings Inc."
    },
    {
    "Symbol":"RVPHW",
    "Name":"Reviva Pharmaceuticals Holdings Inc. Warrants"
    },
    {
    "Symbol":"RVSB",
    "Name":"Riverview Bancorp Inc"
    },
    {
    "Symbol":"RVT",
    "Name":"Royce Value Trust Inc."
    },
    {
    "Symbol":"RWAY",
    "Name":"Runway Growth Finance Corp."
    },
    {
    "Symbol":"RWLK",
    "Name":"ReWalk Robotics Ltd. Ordinary Shares"
    },
    {
    "Symbol":"RWT",
    "Name":"Redwood Trust Inc."
    },
    {
    "Symbol":"RXDX",
    "Name":"Prometheus Biosciences Inc."
    },
    {
    "Symbol":"RXRA",
    "Name":"RXR Acquisition Corp. Class A"
    },
    {
    "Symbol":"RXRAU",
    "Name":"RXR Acquisition Corp. Units"
    },
    {
    "Symbol":"RXRAW",
    "Name":"RXR Acquisition Corp. Warrants to purchase Class A"
    },
    {
    "Symbol":"RXRX",
    "Name":"Recursion Pharmaceuticals Inc. Class A"
    },
    {
    "Symbol":"RXST",
    "Name":"RxSight Inc."
    },
    {
    "Symbol":"RXT",
    "Name":"Rackspace Technology Inc."
    },
    {
    "Symbol":"RY",
    "Name":"Royal Bank Of Canada"
    },
    {
    "Symbol":"RY^T",
    "Name":"Royal Bank Of Canada 6.750% Fixed Rate/Floating Rate Noncumulative First Preferred Shares Series C-2"
    },
    {
    "Symbol":"RYAAY",
    "Name":"Ryanair Holdings plc American Depositary Shares"
    },
    {
    "Symbol":"RYAM",
    "Name":"Rayonier Advanced Materials Inc."
    },
    {
    "Symbol":"RYAN",
    "Name":"Ryan Specialty Group Holdings Inc. Class A"
    },
    {
    "Symbol":"RYB",
    "Name":"RYB Education Inc. American depositary shares each representing one Class A ordinary share"
    },
    {
    "Symbol":"RYI",
    "Name":"Ryerson Holding Corporation"
    },
    {
    "Symbol":"RYN",
    "Name":"Rayonier Inc. REIT"
    },
    {
    "Symbol":"RYTM",
    "Name":"Rhythm Pharmaceuticals Inc."
    },
    {
    "Symbol":"RZA",
    "Name":"Reinsurance Group of America Incorporated 6.20% Fixed-to-Floating Rate Subordinated Debentures due 2042"
    },
    {
    "Symbol":"RZB",
    "Name":"Reinsurance Group of America Incorporated 5.75% Fixed-To-Floating Rate Subordinated Debentures due 2056"
    },
    {
    "Symbol":"RZLT",
    "Name":"Rezolute Inc.   (NV)"
    },
    {
    "Symbol":"S",
    "Name":"SentinelOne Inc. Class A"
    },
    {
    "Symbol":"SA",
    "Name":"Seabridge Gold Inc. Ordinary Shares (Canada)"
    },
    {
    "Symbol":"SABR",
    "Name":"Sabre Corporation"
    },
    {
    "Symbol":"SABRP",
    "Name":"Sabre Corporation 6.50% Series A Mandatory Convertible Preferred Stock"
    },
    {
    "Symbol":"SABS",
    "Name":"SAB Biotherapeutics Inc."
    },
    {
    "Symbol":"SABSW",
    "Name":"SAB Biotherapeutics Inc. Warrant"
    },
    {
    "Symbol":"SACC",
    "Name":"Sachem Capital Corp. 6.875% Notes due 2024"
    },
    {
    "Symbol":"SACH",
    "Name":"Sachem Capital Corp. Common Shares"
    },
    {
    "Symbol":"SACH^A",
    "Name":"Sachem Capital Corp. 7.75% Series A Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"SAFE",
    "Name":"Safehold Inc."
    },
    {
    "Symbol":"SAFM",
    "Name":"Sanderson Farms Inc."
    },
    {
    "Symbol":"SAFT",
    "Name":"Safety Insurance Group Inc."
    },
    {
    "Symbol":"SAGAU",
    "Name":"Sagaliam Acquisition Corp. Units"
    },
    {
    "Symbol":"SAGE",
    "Name":"Sage Therapeutics Inc."
    },
    {
    "Symbol":"SAH",
    "Name":"Sonic Automotive Inc."
    },
    {
    "Symbol":"SAIA",
    "Name":"Saia Inc."
    },
    {
    "Symbol":"SAIC",
    "Name":"SCIENCE APPLICATIONS INTERNATIONAL CORPORATION"
    },
    {
    "Symbol":"SAIL",
    "Name":"SailPoint Technologies Holdings Inc."
    },
    {
    "Symbol":"SAK",
    "Name":"Saratoga Investment Corp 7.25% Notes due 2025"
    },
    {
    "Symbol":"SAL",
    "Name":"Salisbury Bancorp Inc."
    },
    {
    "Symbol":"SALM",
    "Name":"Salem Media Group Inc. Class A"
    },
    {
    "Symbol":"SAM",
    "Name":"Boston Beer Company Inc. (The)"
    },
    {
    "Symbol":"SAMA",
    "Name":"Schultze Special Purpose Acquisition Corp. II Class A"
    },
    {
    "Symbol":"SAMAU",
    "Name":"Schultze Special Purpose Acquisition Corp. II Units"
    },
    {
    "Symbol":"SAMAW",
    "Name":"Schultze Special Purpose Acquisition Corp. II Warrant"
    },
    {
    "Symbol":"SAMG",
    "Name":"Silvercrest Asset Management Group Inc. Class A"
    },
    {
    "Symbol":"SAN",
    "Name":"Banco Santander S.A. Sponsored ADR (Spain)"
    },
    {
    "Symbol":"SANA",
    "Name":"Sana Biotechnology Inc."
    },
    {
    "Symbol":"SANB",
    "Name":"Sanaby Health Acquisition Corp. I Class A"
    },
    {
    "Symbol":"SANBU",
    "Name":"Sanaby Health Acquisition Corp. I Unit"
    },
    {
    "Symbol":"SANBW",
    "Name":"Sanaby Health Acquisition Corp. I Warrant"
    },
    {
    "Symbol":"SAND",
    "Name":"Sandstorm Gold Ltd. Ordinary Shares (Canada)"
    },
    {
    "Symbol":"SANG",
    "Name":"Sangoma Technologies Corporation Common Shares"
    },
    {
    "Symbol":"SANM",
    "Name":"Sanmina Corporation"
    },
    {
    "Symbol":"SANW",
    "Name":"S&W Seed Company   (NV)"
    },
    {
    "Symbol":"SAP",
    "Name":"SAP  SE ADS"
    },
    {
    "Symbol":"SAR",
    "Name":"Saratoga Investment Corp New"
    },
    {
    "Symbol":"SASR",
    "Name":"Sandy Spring Bancorp Inc."
    },
    {
    "Symbol":"SATL",
    "Name":"Satellogic Inc. Class A Ordinary Shares"
    },
    {
    "Symbol":"SATLW",
    "Name":"Satellogic Inc. Warrant"
    },
    {
    "Symbol":"SATS",
    "Name":"EchoStar  Corporation"
    },
    {
    "Symbol":"SAVA",
    "Name":"Cassava Sciences Inc."
    },
    {
    "Symbol":"SAVE",
    "Name":"Spirit Airlines Inc."
    },
    {
    "Symbol":"SB",
    "Name":"Safe Bulkers Inc   ($0.001 par value)"
    },
    {
    "Symbol":"SB^C",
    "Name":"Safe Bulkers Inc Cumulative Redeemable Perpetual Preferred Series C (Marshall Islands)"
    },
    {
    "Symbol":"SB^D",
    "Name":"Safe Bulkers Inc Perpetual Preferred Series D (Marshall Islands)"
    },
    {
    "Symbol":"SBAC",
    "Name":"SBA Communications Corporation Class A"
    },
    {
    "Symbol":"SBBA",
    "Name":"Scorpio Tankers Inc. 7.00% Senior Notes due 2025"
    },
    {
    "Symbol":"SBCF",
    "Name":"Seacoast Banking Corporation of Florida"
    },
    {
    "Symbol":"SBEA",
    "Name":"SilverBox Engaged Merger Corp I Class A"
    },
    {
    "Symbol":"SBEAU",
    "Name":"SilverBox Engaged Merger Corp I Units"
    },
    {
    "Symbol":"SBEAW",
    "Name":"SilverBox Engaged Merger Corp I Warrant"
    },
    {
    "Symbol":"SBET",
    "Name":"SharpLink Gaming Ltd. Ordinary Shares"
    },
    {
    "Symbol":"SBEV",
    "Name":"Splash Beverage Group Inc. (NV)"
    },
    {
    "Symbol":"SBFG",
    "Name":"SB Financial Group Inc."
    },
    {
    "Symbol":"SBGI",
    "Name":"Sinclair Broadcast Group Inc. Class A"
    },
    {
    "Symbol":"SBH",
    "Name":"Sally Beauty Holdings Inc. (Name to be changed from Sally Holdings Inc.)"
    },
    {
    "Symbol":"SBI",
    "Name":"Western Asset Intermediate Muni Fund Inc"
    },
    {
    "Symbol":"SBII",
    "Name":"Sandbridge X2 Corp. Class A"
    },
    {
    "Symbol":"SBLK",
    "Name":"Star Bulk Carriers Corp. Common Shares"
    },
    {
    "Symbol":"SBNY",
    "Name":"Signature Bank"
    },
    {
    "Symbol":"SBNYP",
    "Name":"Signature Bank Depositary shares each representing a 1/40th ownership interest in a share of 5.000% Noncumulative Perpetual Series A Preferred Stock"
    },
    {
    "Symbol":"SBOW",
    "Name":"SilverBow Resorces Inc."
    },
    {
    "Symbol":"SBR",
    "Name":"Sabine Royalty Trust"
    },
    {
    "Symbol":"SBRA",
    "Name":"Sabra Health Care REIT Inc."
    },
    {
    "Symbol":"SBS",
    "Name":"Companhia de saneamento Basico Do Estado De Sao Paulo - Sabesp American Depositary Shares (Each repstg 250 Common Shares)"
    },
    {
    "Symbol":"SBSI",
    "Name":"Southside Bancshares Inc."
    },
    {
    "Symbol":"SBSW",
    "Name":"D/B/A Sibanye-Stillwater Limited ADS"
    },
    {
    "Symbol":"SBT",
    "Name":"Sterling Bancorp Inc."
    },
    {
    "Symbol":"SBTX",
    "Name":"Silverback Therapeutics Inc."
    },
    {
    "Symbol":"SBUX",
    "Name":"Starbucks Corporation"
    },
    {
    "Symbol":"SC",
    "Name":"Santander Consumer USA Holdings Inc."
    },
    {
    "Symbol":"SCAQ",
    "Name":"Stratim Cloud Acquisition Corp. Class A"
    },
    {
    "Symbol":"SCAQU",
    "Name":"Stratim Cloud Acquisition Corp. Unit"
    },
    {
    "Symbol":"SCAQW",
    "Name":"Stratim Cloud Acquisition Corp. Warrant"
    },
    {
    "Symbol":"SCCB",
    "Name":"Sachem Capital Corp. 7.125% Notes due 2024"
    },
    {
    "Symbol":"SCCC",
    "Name":"Sachem Capital Corp. 7.75% Notes due 2025"
    },
    {
    "Symbol":"SCCD",
    "Name":"Sachem Capital Corp. 6.00% Notes due 2026"
    },
    {
    "Symbol":"SCCO",
    "Name":"Southern Copper Corporation"
    },
    {
    "Symbol":"SCD",
    "Name":"LMP Capital and Income Fund Inc."
    },
    {
    "Symbol":"SCE^G",
    "Name":"SCE Trust II Trust Preferred Securities"
    },
    {
    "Symbol":"SCE^H",
    "Name":"SCE Trust III Fixed/Floating Rate Trust Preference Securities"
    },
    {
    "Symbol":"SCE^J",
    "Name":"Southern California Edison Company 5.375% Fixed-to-Floating Rate Trust Preference Securities"
    },
    {
    "Symbol":"SCE^K",
    "Name":"Southern California Edison Company 5.45% Fixed-to-Floating Rate Trust Preference Securities"
    },
    {
    "Symbol":"SCE^L",
    "Name":"SCE TRUST VI"
    },
    {
    "Symbol":"SCHL",
    "Name":"Scholastic Corporation"
    },
    {
    "Symbol":"SCHN",
    "Name":"Schnitzer Steel Industries Inc. Class A"
    },
    {
    "Symbol":"SCHW",
    "Name":"Charles Schwab Corporation (The)"
    },
    {
    "Symbol":"SCHW^D",
    "Name":"The Charles Schwab Corporation Depositary Shares each representing 1/40th interest in a share of 5.95% Non-Cumulative Perpetual Preferred Stock Series D"
    },
    {
    "Symbol":"SCHW^J",
    "Name":"The Charles Schwab Corporation Depositary Shares Each Representing a 1/40th Interest in a Share of 4.450% Non-Cumulative Perpetual Preferred Stock Series J"
    },
    {
    "Symbol":"SCI",
    "Name":"Service Corporation International"
    },
    {
    "Symbol":"SCKT",
    "Name":"Socket Mobile Inc."
    },
    {
    "Symbol":"SCL",
    "Name":"Stepan Company"
    },
    {
    "Symbol":"SCLE",
    "Name":"Broadscale Acquisition Corp. Class A"
    },
    {
    "Symbol":"SCLEU",
    "Name":"Broadscale Acquisition Corp. Units"
    },
    {
    "Symbol":"SCLEW",
    "Name":"Broadscale Acquisition Corp. Warrant"
    },
    {
    "Symbol":"SCM",
    "Name":"Stellus Capital Investment Corporation"
    },
    {
    "Symbol":"SCMA",
    "Name":"Seaport Calibre Materials Acquisition Corp. Class A"
    },
    {
    "Symbol":"SCMAU",
    "Name":"Seaport Calibre Materials Acquisition Corp. Unit"
    },
    {
    "Symbol":"SCMAW",
    "Name":"Seaport Calibre Materials Acquisition Corp. Warrant"
    },
    {
    "Symbol":"SCOA",
    "Name":"ScION Tech Growth I Class A Ordinary Shares"
    },
    {
    "Symbol":"SCOAU",
    "Name":"ScION Tech Growth I Unit"
    },
    {
    "Symbol":"SCOAW",
    "Name":"ScION Tech Growth I Warrant"
    },
    {
    "Symbol":"SCOB",
    "Name":"ScION Tech Growth II Class A Ordinary Shares"
    },
    {
    "Symbol":"SCOBU",
    "Name":"ScION Tech Growth II Units"
    },
    {
    "Symbol":"SCOBW",
    "Name":"ScION Tech Growth II Warrants"
    },
    {
    "Symbol":"SCOR",
    "Name":"comScore Inc."
    },
    {
    "Symbol":"SCPH",
    "Name":"scPharmaceuticals Inc."
    },
    {
    "Symbol":"SCPL",
    "Name":"SciPlay Corporation Class A"
    },
    {
    "Symbol":"SCPS",
    "Name":"Scopus BioPharma Inc."
    },
    {
    "Symbol":"SCRMU",
    "Name":"Screaming Eagle Acquisition Corp. Unit"
    },
    {
    "Symbol":"SCS",
    "Name":"Steelcase Inc."
    },
    {
    "Symbol":"SCSC",
    "Name":"ScanSource Inc."
    },
    {
    "Symbol":"SCU",
    "Name":"Sculptor Capital Management Inc. Class A"
    },
    {
    "Symbol":"SCVL",
    "Name":"Shoe Carnival Inc."
    },
    {
    "Symbol":"SCVX",
    "Name":"SCVX Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"SCWX",
    "Name":"SecureWorks Corp. Class A"
    },
    {
    "Symbol":"SCX",
    "Name":"L.S. Starrett Company (The)"
    },
    {
    "Symbol":"SCYX",
    "Name":"SCYNEXIS Inc."
    },
    {
    "Symbol":"SD",
    "Name":"SandRidge Energy Inc."
    },
    {
    "Symbol":"SDAC",
    "Name":"Sustainable Development Acquisition I Corp. Class A"
    },
    {
    "Symbol":"SDACU",
    "Name":"Sustainable Development Acquisition I Corp. Unit"
    },
    {
    "Symbol":"SDACW",
    "Name":"Sustainable Development Acquisition I Corp. Warrant"
    },
    {
    "Symbol":"SDC",
    "Name":"SmileDirectClub Inc. Class A"
    },
    {
    "Symbol":"SDGR",
    "Name":"Schrodinger Inc."
    },
    {
    "Symbol":"SDH",
    "Name":"Global Internet of People Inc. Ordinary Shares"
    },
    {
    "Symbol":"SDHY",
    "Name":"PGIM Short Duration High Yield Opportunities Fund Common Shares"
    },
    {
    "Symbol":"SDIG",
    "Name":"Stronghold Digital Mining Inc. Class A"
    },
    {
    "Symbol":"SDPI",
    "Name":"Superior Drilling Products Inc."
    },
    {
    "Symbol":"SE",
    "Name":"Sea Limited American Depositary Shares each representing one Class A Ordinary Share"
    },
    {
    "Symbol":"SEAC",
    "Name":"SeaChange International Inc."
    },
    {
    "Symbol":"SEAH",
    "Name":"Sports Entertainment Acquisition Corp. Class A"
    },
    {
    "Symbol":"SEAS",
    "Name":"SeaWorld Entertainment Inc."
    },
    {
    "Symbol":"SEAT",
    "Name":"Vivid Seats Inc. Class A"
    },
    {
    "Symbol":"SEATW",
    "Name":"Vivid Seats Inc. Warrant"
    },
    {
    "Symbol":"SEB",
    "Name":"Seaboard Corporation"
    },
    {
    "Symbol":"SECO",
    "Name":"Secoo Holding Limited ADS"
    },
    {
    "Symbol":"SEDA",
    "Name":"SDCL EDGE Acquisition Corporation Class A Ordinary Shares"
    },
    {
    "Symbol":"SEDG",
    "Name":"SolarEdge Technologies Inc."
    },
    {
    "Symbol":"SEE",
    "Name":"Sealed Air Corporation"
    },
    {
    "Symbol":"SEED",
    "Name":"Origin Agritech Limited"
    },
    {
    "Symbol":"SEEL",
    "Name":"Seelos Therapeutics Inc."
    },
    {
    "Symbol":"SEER",
    "Name":"Seer Inc. Class A"
    },
    {
    "Symbol":"SEIC",
    "Name":"SEI Investments Company"
    },
    {
    "Symbol":"SELB",
    "Name":"Selecta Biosciences Inc."
    },
    {
    "Symbol":"SELF",
    "Name":"Global Self Storage Inc."
    },
    {
    "Symbol":"SEM",
    "Name":"Select Medical Holdings Corporation"
    },
    {
    "Symbol":"SEMR",
    "Name":"SEMrush Holdings Inc. Class A"
    },
    {
    "Symbol":"SENEA",
    "Name":"Seneca Foods Corp. Class A"
    },
    {
    "Symbol":"SENEB",
    "Name":"Seneca Foods Corp. Class B"
    },
    {
    "Symbol":"SENS",
    "Name":"Senseonics Holdings Inc."
    },
    {
    "Symbol":"SERA",
    "Name":"Sera Prognostics Inc. Class A"
    },
    {
    "Symbol":"SESN",
    "Name":"Sesen Bio Inc."
    },
    {
    "Symbol":"SEV",
    "Name":"Sono Group N.V. Common Shares"
    },
    {
    "Symbol":"SEVN",
    "Name":"Seven Hills Realty Trust"
    },
    {
    "Symbol":"SF",
    "Name":"Stifel Financial Corporation"
    },
    {
    "Symbol":"SF^B",
    "Name":"Stifel Financial Corporation Depositary Shares Each Representing 1/1000th  Interest in a Share of 6.25% Non-Cumulative  Preferred Stock Series B"
    },
    {
    "Symbol":"SF^C",
    "Name":"Stifel Financial Corporation Depositary Shares Each Representing 1/1000th Interest in a Share of 6.125% Non Cumulative Preferred Stock Series C"
    },
    {
    "Symbol":"SF^D",
    "Name":"Stifel Financial Corporation Depositary Shares Each Representing 1/1000th Interest in a Share of 4.50% Non-Cumulative Preferred Stock Series D"
    },
    {
    "Symbol":"SFB",
    "Name":"Stifel Financial Corporation 5.20% Senior Notes due 2047"
    },
    {
    "Symbol":"SFBC",
    "Name":"Sound Financial Bancorp Inc."
    },
    {
    "Symbol":"SFBS",
    "Name":"ServisFirst Bancshares Inc."
    },
    {
    "Symbol":"SFE",
    "Name":"Safeguard Scientifics Inc. New"
    },
    {
    "Symbol":"SFET",
    "Name":"Safe-T Group Ltd. American Depositary Share"
    },
    {
    "Symbol":"SFIX",
    "Name":"Stitch Fix Inc. Class A"
    },
    {
    "Symbol":"SFL",
    "Name":"SFL Corporation Ltd"
    },
    {
    "Symbol":"SFM",
    "Name":"Sprouts Farmers Market Inc."
    },
    {
    "Symbol":"SFNC",
    "Name":"Simmons First National Corporation Class A"
    },
    {
    "Symbol":"SFST",
    "Name":"Southern First Bancshares Inc."
    },
    {
    "Symbol":"SFT",
    "Name":"Shift Technologies Inc. Class A"
    },
    {
    "Symbol":"SFUN",
    "Name":"Fang Holdings Limited American Depositary Shares (Each representing Four Class A Ordinary Shares HK$1.00 par value)"
    },
    {
    "Symbol":"SG",
    "Name":"Sweetgreen Inc. Class A"
    },
    {
    "Symbol":"SGA",
    "Name":"Saga Communications Inc. Class A   (FL)"
    },
    {
    "Symbol":"SGBX",
    "Name":"SG Blocks Inc."
    },
    {
    "Symbol":"SGC",
    "Name":"Superior Group of Companies Inc."
    },
    {
    "Symbol":"SGEN",
    "Name":"Seagen Inc."
    },
    {
    "Symbol":"SGFY",
    "Name":"Signify Health Inc. Class A"
    },
    {
    "Symbol":"SGH",
    "Name":"SMART Global Holdings Inc. Ordinary Shares"
    },
    {
    "Symbol":"SGHT",
    "Name":"Sight Sciences Inc."
    },
    {
    "Symbol":"SGII",
    "Name":"Seaport Global Acquisition II Corp. Class A"
    },
    {
    "Symbol":"SGIIW",
    "Name":"Seaport Global Acquisition II Corp. Warrants"
    },
    {
    "Symbol":"SGLB",
    "Name":"Sigma Labs Inc."
    },
    {
    "Symbol":"SGLBW",
    "Name":"Sigma Labs Inc. Warrant"
    },
    {
    "Symbol":"SGLY",
    "Name":"Singularity Future Technology Ltd."
    },
    {
    "Symbol":"SGMA",
    "Name":"SigmaTron International Inc."
    },
    {
    "Symbol":"SGML",
    "Name":"Sigma Lithium Corporation Common Shares"
    },
    {
    "Symbol":"SGMO",
    "Name":"Sangamo Therapeutics Inc."
    },
    {
    "Symbol":"SGMS",
    "Name":"Scientific Games Corp"
    },
    {
    "Symbol":"SGRP",
    "Name":"SPAR Group Inc."
    },
    {
    "Symbol":"SGRY",
    "Name":"Surgery Partners Inc."
    },
    {
    "Symbol":"SGTX",
    "Name":"Sigilon Therapeutics Inc."
    },
    {
    "Symbol":"SGU",
    "Name":"Star Group L.P."
    },
    {
    "Symbol":"SHAC",
    "Name":"SCP & CO Healthcare Acquisition Company Class A"
    },
    {
    "Symbol":"SHACU",
    "Name":"SCP & CO Healthcare Acquisition Company Unit"
    },
    {
    "Symbol":"SHACW",
    "Name":"SCP & CO Healthcare Acquisition Company Warrant"
    },
    {
    "Symbol":"SHAK",
    "Name":"Shake Shack Inc. Class A"
    },
    {
    "Symbol":"SHBI",
    "Name":"Shore Bancshares Inc"
    },
    {
    "Symbol":"SHC",
    "Name":"Sotera Health Company"
    },
    {
    "Symbol":"SHCA",
    "Name":"Spindletop Health Acquisition Corp. Class A"
    },
    {
    "Symbol":"SHCAU",
    "Name":"Spindletop Health Acquisition Corp. Unit"
    },
    {
    "Symbol":"SHCAW",
    "Name":"Spindletop Health Acquisition Corp. Warrant"
    },
    {
    "Symbol":"SHCR",
    "Name":"Sharecare Inc. Class A"
    },
    {
    "Symbol":"SHCRW",
    "Name":"Sharecare Inc. Warrant"
    },
    {
    "Symbol":"SHEN",
    "Name":"Shenandoah Telecommunications Co"
    },
    {
    "Symbol":"SHG",
    "Name":"Shinhan Financial Group Co Ltd American Depositary Shares"
    },
    {
    "Symbol":"SHI",
    "Name":"SINOPEC Shangai Petrochemical Company Ltd."
    },
    {
    "Symbol":"SHIP",
    "Name":"Seanergy Maritime Holdings Corp"
    },
    {
    "Symbol":"SHIPZ",
    "Name":"Seanergy Maritime Holdings Corp Class B Warrant"
    },
    {
    "Symbol":"SHLS",
    "Name":"Shoals Technologies Group Inc. Class A"
    },
    {
    "Symbol":"SHLX",
    "Name":"Shell Midstream Partners L.P. Common Units representing Limited Partner Interests"
    },
    {
    "Symbol":"SHO",
    "Name":"Sunstone Hotel Investors Inc. Sunstone Hotel Investors Inc. Common Shares"
    },
    {
    "Symbol":"SHO^H",
    "Name":"Sunstone Hotel Investors Inc. 6.125% Series H Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"SHO^I",
    "Name":"Sunstone Hotel Investors Inc. 5.70% Series I Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"SHOO",
    "Name":"Steven Madden Ltd."
    },
    {
    "Symbol":"SHOP",
    "Name":"Shopify Inc. Class A Subordinate Voting Shares"
    },
    {
    "Symbol":"SHPW",
    "Name":"Shapeways Holdings Inc."
    },
    {
    "Symbol":"SHQA",
    "Name":"Shelter Acquisition Corporation I Class A"
    },
    {
    "Symbol":"SHQAU",
    "Name":"Shelter Acquisition Corporation I Units"
    },
    {
    "Symbol":"SHQAW",
    "Name":"Shelter Acquisition Corporation I Warrants"
    },
    {
    "Symbol":"SHW",
    "Name":"Sherwin-Williams Company (The)"
    },
    {
    "Symbol":"SHYF",
    "Name":"The Shyft Group Inc."
    },
    {
    "Symbol":"SI",
    "Name":"Silvergate Capital Corporation Class A"
    },
    {
    "Symbol":"SI^A",
    "Name":"Silvergate Capital Corporation Depositary Shares Each Representing a 1/40th Interest in a Share of 5.375% Fixed Rate Non-Cumulative Perpetual Preferred Stock Series A"
    },
    {
    "Symbol":"SIBN",
    "Name":"SI-BONE Inc."
    },
    {
    "Symbol":"SID",
    "Name":"Companhia Siderurgica Nacional S.A."
    },
    {
    "Symbol":"SIDU",
    "Name":"Sidus Space Inc. Class A"
    },
    {
    "Symbol":"SIEB",
    "Name":"Siebert Financial Corp."
    },
    {
    "Symbol":"SIEN",
    "Name":"Sientra Inc."
    },
    {
    "Symbol":"SIER",
    "Name":"Sierra Lake Acquisition Corp. Class A"
    },
    {
    "Symbol":"SIERU",
    "Name":"Sierra Lake Acquisition Corp. Unit"
    },
    {
    "Symbol":"SIERW",
    "Name":"Sierra Lake Acquisition Corp. Warrant"
    },
    {
    "Symbol":"SIF",
    "Name":"SIFCO Industries Inc."
    },
    {
    "Symbol":"SIFY",
    "Name":"Sify Technologies Limited American Depositary Shares"
    },
    {
    "Symbol":"SIG",
    "Name":"Signet Jewelers Limited Common Shares"
    },
    {
    "Symbol":"SIGA",
    "Name":"SIGA Technologies Inc."
    },
    {
    "Symbol":"SIGI",
    "Name":"Selective Insurance Group Inc."
    },
    {
    "Symbol":"SIGIP",
    "Name":"Selective Insurance Group Inc. Depositary Shares each representing a 1/1000th interest in a share of 4.60% Non-Cumulative Preferred Stock Series B"
    },
    {
    "Symbol":"SII",
    "Name":"Sprott Inc. Common Shares"
    },
    {
    "Symbol":"SILC",
    "Name":"Silicom Ltd Ordinary Shares"
    },
    {
    "Symbol":"SILK",
    "Name":"Silk Road Medical Inc."
    },
    {
    "Symbol":"SILV",
    "Name":"SilverCrest Metals Inc. Common Shares"
    },
    {
    "Symbol":"SIM",
    "Name":"Grupo Simec S.A.B. de C.V. American Depositary Shares"
    },
    {
    "Symbol":"SIMO",
    "Name":"Silicon Motion Technology Corporation American Depositary Shares"
    },
    {
    "Symbol":"SINT",
    "Name":"SiNtx Technologies Inc."
    },
    {
    "Symbol":"SIOX",
    "Name":"Sio Gene Therapies Inc."
    },
    {
    "Symbol":"SIRI",
    "Name":"Sirius XM Holdings Inc."
    },
    {
    "Symbol":"SISI",
    "Name":"Shineco Inc."
    },
    {
    "Symbol":"SITC",
    "Name":"SITE Centers Corp."
    },
    {
    "Symbol":"SITC^A",
    "Name":"SITE Centers Corp. 6.375% Class A Preferred Shares"
    },
    {
    "Symbol":"SITE",
    "Name":"SiteOne Landscape Supply Inc."
    },
    {
    "Symbol":"SITM",
    "Name":"SiTime Corporation"
    },
    {
    "Symbol":"SIVB",
    "Name":"SVB Financial Group"
    },
    {
    "Symbol":"SIVBP",
    "Name":"SVB Financial Group Depositary Shs each representing a 1/40th interest in a share of 5.25% Fixed-Rate Non-Cumulative Perpetual Preferred Stock Series A"
    },
    {
    "Symbol":"SIX",
    "Name":"Six Flags Entertainment Corporation New"
    },
    {
    "Symbol":"SJ",
    "Name":"Scienjoy Holding Corporation Class A Ordinary Shares"
    },
    {
    "Symbol":"SJI",
    "Name":"South Jersey Industries Inc."
    },
    {
    "Symbol":"SJIJ",
    "Name":"South Jersey Industries Inc. 5.625% Junior Subordinated Notes due 2079"
    },
    {
    "Symbol":"SJIV",
    "Name":"South Jersey Industries Inc. Corporate Units"
    },
    {
    "Symbol":"SJM",
    "Name":"J.M. Smucker Company (The) New"
    },
    {
    "Symbol":"SJR",
    "Name":"Shaw Communications Inc."
    },
    {
    "Symbol":"SJT",
    "Name":"San Juan Basin Royalty Trust"
    },
    {
    "Symbol":"SJW",
    "Name":"SJW Group   (DE)"
    },
    {
    "Symbol":"SKE",
    "Name":"Skeena Resources Limited Common Shares"
    },
    {
    "Symbol":"SKIL",
    "Name":"Skillsoft Corp. Class A"
    },
    {
    "Symbol":"SKIN",
    "Name":"The Beauty Health Company Class A"
    },
    {
    "Symbol":"SKLZ",
    "Name":"Skillz Inc. Class A"
    },
    {
    "Symbol":"SKM",
    "Name":"SK Telecom Co. Ltd."
    },
    {
    "Symbol":"SKT",
    "Name":"Tanger Factory Outlet Centers Inc."
    },
    {
    "Symbol":"SKX",
    "Name":"Skechers U.S.A. Inc."
    },
    {
    "Symbol":"SKY",
    "Name":"Skyline Champion Corporation"
    },
    {
    "Symbol":"SKYAU",
    "Name":"Skydeck Acquisition Corp. Units"
    },
    {
    "Symbol":"SKYAW",
    "Name":"Skydeck Acquisition Corp. Warrants"
    },
    {
    "Symbol":"SKYH",
    "Name":"Sky Harbour Group Corporation"
    },
    {
    "Symbol":"SKYT",
    "Name":"SkyWater Technology Inc."
    },
    {
    "Symbol":"SKYW",
    "Name":"SkyWest Inc."
    },
    {
    "Symbol":"SLAB",
    "Name":"Silicon Laboratories Inc."
    },
    {
    "Symbol":"SLAC",
    "Name":"Social Leverage Acquisition Corp I Class A"
    },
    {
    "Symbol":"SLAM",
    "Name":"Slam Corp. Class A Ordinary Share"
    },
    {
    "Symbol":"SLAMU",
    "Name":"Slam Corp. Unit"
    },
    {
    "Symbol":"SLAMW",
    "Name":"Slam Corp. warrant"
    },
    {
    "Symbol":"SLB",
    "Name":"Schlumberger N.V."
    },
    {
    "Symbol":"SLCA",
    "Name":"U.S. Silica Holdings Inc."
    },
    {
    "Symbol":"SLCR",
    "Name":"Silver Crest Acquisition Corporation Class A Ordinary Share"
    },
    {
    "Symbol":"SLCRU",
    "Name":"Silver Crest Acquisition Corporation Unit"
    },
    {
    "Symbol":"SLCRW",
    "Name":"Silver Crest Acquisition Corporation Warrant"
    },
    {
    "Symbol":"SLDB",
    "Name":"Solid Biosciences Inc."
    },
    {
    "Symbol":"SLDP",
    "Name":"Solid Power Inc. Class A"
    },
    {
    "Symbol":"SLDPW",
    "Name":"Solid Power Inc. Warrant"
    },
    {
    "Symbol":"SLF",
    "Name":"Sun Life Financial Inc."
    },
    {
    "Symbol":"SLG",
    "Name":"SL Green Realty Corp"
    },
    {
    "Symbol":"SLG^I",
    "Name":"SL Green Realty Corporation Preferred Series I"
    },
    {
    "Symbol":"SLGC",
    "Name":"SomaLogic Inc. Class A"
    },
    {
    "Symbol":"SLGCW",
    "Name":"SomaLogic Inc. Warrant"
    },
    {
    "Symbol":"SLGG",
    "Name":"Super League Gaming Inc."
    },
    {
    "Symbol":"SLGL",
    "Name":"Sol-Gel Technologies Ltd. Ordinary Shares"
    },
    {
    "Symbol":"SLGN",
    "Name":"Silgan Holdings Inc."
    },
    {
    "Symbol":"SLHG",
    "Name":"Skylight Health Group Inc. Ordinary Shares"
    },
    {
    "Symbol":"SLHGP",
    "Name":"Skylight Health Group Inc. 9.25% Series A Cumulative Redeemable Perpetual Preferred Shares"
    },
    {
    "Symbol":"SLI",
    "Name":"Standard Lithium Ltd. Common Shares"
    },
    {
    "Symbol":"SLM",
    "Name":"SLM Corporation"
    },
    {
    "Symbol":"SLMBP",
    "Name":"SLM Corporation Floating Rate Non-Cumulative Preferred Stock Series B"
    },
    {
    "Symbol":"SLN",
    "Name":"Silence Therapeutics Plc American Depository Share"
    },
    {
    "Symbol":"SLNG",
    "Name":"Stabilis Solutions Inc."
    },
    {
    "Symbol":"SLNH",
    "Name":"Soluna Holdings Inc."
    },
    {
    "Symbol":"SLNHP",
    "Name":"Soluna Holdings Inc 9.0% Series A Cumulative Perpetual Preferred Stock"
    },
    {
    "Symbol":"SLNO",
    "Name":"Soleno Therapeutics Inc."
    },
    {
    "Symbol":"SLP",
    "Name":"Simulations Plus Inc."
    },
    {
    "Symbol":"SLQT",
    "Name":"SelectQuote Inc."
    },
    {
    "Symbol":"SLRC",
    "Name":"SLR Investment Corp."
    },
    {
    "Symbol":"SLRX",
    "Name":"Salarius Pharmaceuticals Inc."
    },
    {
    "Symbol":"SLS",
    "Name":"SELLAS Life Sciences Group Inc."
    },
    {
    "Symbol":"SLVM",
    "Name":"Sylvamo Corporation"
    },
    {
    "Symbol":"SLVR",
    "Name":"SilverSPAC Inc. Class A Ordinary Share"
    },
    {
    "Symbol":"SLVRU",
    "Name":"SilverSPAC Inc. Unit"
    },
    {
    "Symbol":"SLVRW",
    "Name":"SilverSPAC Inc. Warrant"
    },
    {
    "Symbol":"SM",
    "Name":"SM Energy Company"
    },
    {
    "Symbol":"SMAP",
    "Name":"SportsMap Tech Acquisition Corp."
    },
    {
    "Symbol":"SMAPU",
    "Name":"SportsMap Tech Acquisition Corp. Units"
    },
    {
    "Symbol":"SMAPW",
    "Name":"SportsMap Tech Acquisition Corp. Warrants"
    },
    {
    "Symbol":"SMAR",
    "Name":"Smartsheet Inc. Class A"
    },
    {
    "Symbol":"SMBC",
    "Name":"Southern Missouri Bancorp Inc."
    },
    {
    "Symbol":"SMBK",
    "Name":"SmartFinancial Inc."
    },
    {
    "Symbol":"SMCI",
    "Name":"Super Micro Computer Inc."
    },
    {
    "Symbol":"SMED",
    "Name":"Sharps Compliance Corp."
    },
    {
    "Symbol":"SMFG",
    "Name":"Sumitomo Mitsui Financial Group Inc Unsponsored American Depositary Shares (Japan)"
    },
    {
    "Symbol":"SMFR",
    "Name":"Sema4 Holdings Corp. Class A"
    },
    {
    "Symbol":"SMFRW",
    "Name":"Sema4 Holdings Corp. Warrant"
    },
    {
    "Symbol":"SMG",
    "Name":"Scotts Miracle-Gro Company (The)"
    },
    {
    "Symbol":"SMHI",
    "Name":"SEACOR Marine Holdings Inc."
    },
    {
    "Symbol":"SMID",
    "Name":"Smith-Midland Corporation"
    },
    {
    "Symbol":"SMIH",
    "Name":"Summit Healthcare Acquisition Corp. Class A Ordinary Share"
    },
    {
    "Symbol":"SMIHU",
    "Name":"Summit Healthcare Acquisition Corp. Units"
    },
    {
    "Symbol":"SMIHW",
    "Name":"Summit Healthcare Acquisition Corp. Warrant"
    },
    {
    "Symbol":"SMIT",
    "Name":"Schmitt Industries Inc."
    },
    {
    "Symbol":"SMLP",
    "Name":"Summit Midstream Partners LP Common Units Representing Limited Partner Interests"
    },
    {
    "Symbol":"SMLR",
    "Name":"Semler Scientific Inc."
    },
    {
    "Symbol":"SMM",
    "Name":"Salient Midstream Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"SMMF",
    "Name":"Summit Financial Group Inc."
    },
    {
    "Symbol":"SMMT",
    "Name":"Summit Therapeutics Inc."
    },
    {
    "Symbol":"SMP",
    "Name":"Standard Motor Products Inc."
    },
    {
    "Symbol":"SMPL",
    "Name":"The Simply Good Foods Company"
    },
    {
    "Symbol":"SMRT",
    "Name":"SmartRent Inc. Class A"
    },
    {
    "Symbol":"SMSI",
    "Name":"Smith Micro Software Inc."
    },
    {
    "Symbol":"SMTC",
    "Name":"Semtech Corporation"
    },
    {
    "Symbol":"SMTI",
    "Name":"Sanara MedTech Inc."
    },
    {
    "Symbol":"SMTS",
    "Name":"Sierra Metals Inc."
    },
    {
    "Symbol":"SMWB",
    "Name":"Similarweb Ltd. Ordinary Shares"
    },
    {
    "Symbol":"SNA",
    "Name":"Snap-On Incorporated"
    },
    {
    "Symbol":"SNAP",
    "Name":"Snap Inc. Class A"
    },
    {
    "Symbol":"SNAX",
    "Name":"Stryve Foods Inc. Class A"
    },
    {
    "Symbol":"SNAXW",
    "Name":"Stryve Foods Inc. Warrant"
    },
    {
    "Symbol":"SNBR",
    "Name":"Sleep Number Corporation"
    },
    {
    "Symbol":"SNCE",
    "Name":"Science 37 Holdings Inc."
    },
    {
    "Symbol":"SNCR",
    "Name":"Synchronoss Technologies Inc."
    },
    {
    "Symbol":"SNCRL",
    "Name":"Synchronoss Technologies Inc. 8.375% Senior Notes due 2026"
    },
    {
    "Symbol":"SNCY",
    "Name":"Sun Country Airlines Holdings Inc."
    },
    {
    "Symbol":"SND",
    "Name":"Smart Sand Inc."
    },
    {
    "Symbol":"SNDA",
    "Name":"Sonida Senior Living Inc."
    },
    {
    "Symbol":"SNDL",
    "Name":"Sundial Growers Inc. Common Shares"
    },
    {
    "Symbol":"SNDR",
    "Name":"Schneider National Inc."
    },
    {
    "Symbol":"SNDX",
    "Name":"Syndax Pharmaceuticals Inc."
    },
    {
    "Symbol":"SNES",
    "Name":"SenesTech Inc."
    },
    {
    "Symbol":"SNEX",
    "Name":"StoneX Group Inc."
    },
    {
    "Symbol":"SNFCA",
    "Name":"Security National Financial Corporation Class A"
    },
    {
    "Symbol":"SNGX",
    "Name":"Soligenix Inc."
    },
    {
    "Symbol":"SNII",
    "Name":"Supernova Partners Acquisition Company II Ltd. Class A Ordinary Shares"
    },
    {
    "Symbol":"SNMP",
    "Name":"Evolve Transition Infrastructure LP"
    },
    {
    "Symbol":"SNN",
    "Name":"Smith & Nephew SNATS Inc."
    },
    {
    "Symbol":"SNOA",
    "Name":"Sonoma Pharmaceuticals Inc."
    },
    {
    "Symbol":"SNOW",
    "Name":"Snowflake Inc. Class A"
    },
    {
    "Symbol":"SNP",
    "Name":"China Petroleum & Chemical Corporation"
    },
    {
    "Symbol":"SNPO",
    "Name":"Snap One Holdings Corp."
    },
    {
    "Symbol":"SNPS",
    "Name":"Synopsys Inc."
    },
    {
    "Symbol":"SNPX",
    "Name":"Synaptogenix Inc."
    },
    {
    "Symbol":"SNRH",
    "Name":"Senior Connect Acquisition Corp. I Class A"
    },
    {
    "Symbol":"SNRHU",
    "Name":"Senior Connect Acquisition Corp. I Unit"
    },
    {
    "Symbol":"SNRHW",
    "Name":"Senior Connect Acquisition Corp. I Warrant"
    },
    {
    "Symbol":"SNSE",
    "Name":"Sensei Biotherapeutics Inc."
    },
    {
    "Symbol":"SNT",
    "Name":"Senstar Technologies Ltd. Ordinary Shares"
    },
    {
    "Symbol":"SNTG",
    "Name":"Sentage Holdings Inc. Ordinary Shares"
    },
    {
    "Symbol":"SNV",
    "Name":"Synovus Financial Corp."
    },
    {
    "Symbol":"SNV^D",
    "Name":"Synovus Financial Corp. Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series D Liquation Preference $25.00 per Share"
    },
    {
    "Symbol":"SNV^E",
    "Name":"Synovus Financial Corp. 5.875% Fixed-Rate Reset Non-Cumulative Perpetual Preferred Stock Series E"
    },
    {
    "Symbol":"SNX",
    "Name":"TD SYNNEX Corporation"
    },
    {
    "Symbol":"SNY",
    "Name":"Sanofi ADS"
    },
    {
    "Symbol":"SO",
    "Name":"Southern Company (The)"
    },
    {
    "Symbol":"SOFI",
    "Name":"SoFi Technologies Inc."
    },
    {
    "Symbol":"SOFO",
    "Name":"Sonic Foundry Inc."
    },
    {
    "Symbol":"SOHO",
    "Name":"Sotherly Hotels Inc."
    },
    {
    "Symbol":"SOHOB",
    "Name":"Sotherly Hotels Inc. 8.0% Series B Cumulative Redeemable Perpetual Preferred Stock"
    },
    {
    "Symbol":"SOHON",
    "Name":"Sotherly Hotels Inc. 8.25% Series D Cumulative Redeemable Perpetual Preferred Stock"
    },
    {
    "Symbol":"SOHOO",
    "Name":"Sotherly Hotels Inc. 7.875% Series C Cumulative Redeemable Perpetual Preferred Stock"
    },
    {
    "Symbol":"SOHU",
    "Name":"Sohu.com Limited American Depositary Shares"
    },
    {
    "Symbol":"SOI",
    "Name":"Solaris Oilfield Infrastructure Inc. Class A"
    },
    {
    "Symbol":"SOJC",
    "Name":"Southern Company (The) Series 2017B 5.25% Junior Subordinated Notes due December 1 2077"
    },
    {
    "Symbol":"SOJD",
    "Name":"Southern Company (The) Series 2020A 4.95% Junior Subordinated Notes due January 30 2080"
    },
    {
    "Symbol":"SOJE",
    "Name":"Southern Company (The) Series 2020C 4.20% Junior Subordinated Notes due October 15 2060"
    },
    {
    "Symbol":"SOL",
    "Name":"Renesola Ltd. American Depsitary Shares (Each representing 10 shares)"
    },
    {
    "Symbol":"SOLN",
    "Name":"Southern Company (The) 2019 Series A Corporate Units"
    },
    {
    "Symbol":"SOLO",
    "Name":"Electrameccanica Vehicles Corp. Ltd."
    },
    {
    "Symbol":"SOLOW",
    "Name":"Electrameccanica Vehicles Corp. Ltd. Warrants"
    },
    {
    "Symbol":"SON",
    "Name":"Sonoco Products Company"
    },
    {
    "Symbol":"SOND",
    "Name":"Sonder Holdings Inc. Class A"
    },
    {
    "Symbol":"SONDW",
    "Name":"Sonder Holdings Inc. Warrants"
    },
    {
    "Symbol":"SONM",
    "Name":"Sonim Technologies Inc."
    },
    {
    "Symbol":"SONN",
    "Name":"Sonnet BioTherapeutics Holdings Inc."
    },
    {
    "Symbol":"SONO",
    "Name":"Sonos Inc."
    },
    {
    "Symbol":"SONX",
    "Name":"Sonendo Inc."
    },
    {
    "Symbol":"SONY",
    "Name":"Sony Group Corporation American Depositary Shares"
    },
    {
    "Symbol":"SOPA",
    "Name":"Society Pass Incorporated"
    },
    {
    "Symbol":"SOPH",
    "Name":"SOPHiA GENETICS SA Ordinary Shares"
    },
    {
    "Symbol":"SOR",
    "Name":"Source Capital Inc."
    },
    {
    "Symbol":"SOS",
    "Name":"SOS Limited American Depositary Shares"
    },
    {
    "Symbol":"SOTK",
    "Name":"Sono-Tek Corporation"
    },
    {
    "Symbol":"SOVO",
    "Name":"Sovos Brands Inc."
    },
    {
    "Symbol":"SP",
    "Name":"SP Plus Corporation"
    },
    {
    "Symbol":"SPAQ",
    "Name":"Spartan Acquisition Corp. III Class A"
    },
    {
    "Symbol":"SPB",
    "Name":"Spectrum Brands Holdings Inc."
    },
    {
    "Symbol":"SPCB",
    "Name":"SuperCom Ltd. Ordinary Shares (Israel)"
    },
    {
    "Symbol":"SPCE",
    "Name":"Virgin Galactic Holdings Inc."
    },
    {
    "Symbol":"SPE",
    "Name":"Special Opportunities Fund Inc"
    },
    {
    "Symbol":"SPFI",
    "Name":"South Plains Financial Inc."
    },
    {
    "Symbol":"SPG",
    "Name":"Simon Property Group Inc."
    },
    {
    "Symbol":"SPG^J",
    "Name":"Simon Property Group Inc. Simon Property Group 8 3/8% Series J Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"SPGI",
    "Name":"S&P Global Inc."
    },
    {
    "Symbol":"SPGS",
    "Name":"Simon Property Group Acquisition Holdings Inc. Class A"
    },
    {
    "Symbol":"SPH",
    "Name":"Suburban Propane Partners L.P."
    },
    {
    "Symbol":"SPI",
    "Name":"SPI Energy Co. Ltd. Ordinary Shares"
    },
    {
    "Symbol":"SPIR",
    "Name":"Spire Global Inc. Class A"
    },
    {
    "Symbol":"SPK",
    "Name":"SPK Acquisition Corp."
    },
    {
    "Symbol":"SPKAR",
    "Name":"SPK Acquisition Corp. Right"
    },
    {
    "Symbol":"SPKB",
    "Name":"Silver Spike Acquisition Corp II Class A Ordinary Shares"
    },
    {
    "Symbol":"SPKBU",
    "Name":"Silver Spike Acquisition Corp II Units"
    },
    {
    "Symbol":"SPKBW",
    "Name":"Silver Spike Acquisition Corp II Warrant"
    },
    {
    "Symbol":"SPLK",
    "Name":"Splunk Inc."
    },
    {
    "Symbol":"SPLP",
    "Name":"Steel Partners Holdings LP LTD PARTNERSHIP UNIT"
    },
    {
    "Symbol":"SPLP^A",
    "Name":"Steel Partners Holdings LP 6.0% Series A Preferred Units no par value"
    },
    {
    "Symbol":"SPNE",
    "Name":"SeaSpine Holdings Corporation"
    },
    {
    "Symbol":"SPNS",
    "Name":"Sapiens International Corporation N.V. Common Shares (Cayman Islands)"
    },
    {
    "Symbol":"SPNT",
    "Name":"SiriusPoint Ltd. Common Shares"
    },
    {
    "Symbol":"SPNT^B",
    "Name":"SiriusPoint Ltd. 8.00% Resettable Fixed Rate Preference Shares Series B $25.00 liquidation preference per share"
    },
    {
    "Symbol":"SPOK",
    "Name":"Spok Holdings Inc."
    },
    {
    "Symbol":"SPOT",
    "Name":"Spotify Technology S.A. Ordinary Shares"
    },
    {
    "Symbol":"SPPI",
    "Name":"Spectrum Pharmaceuticals Inc."
    },
    {
    "Symbol":"SPR",
    "Name":"Spirit Aerosystems Holdings Inc."
    },
    {
    "Symbol":"SPRB",
    "Name":"Spruce Biosciences Inc."
    },
    {
    "Symbol":"SPRC",
    "Name":"SciSparc Ltd. Ordinary Shares"
    },
    {
    "Symbol":"SPRO",
    "Name":"Spero Therapeutics Inc."
    },
    {
    "Symbol":"SPSC",
    "Name":"SPS Commerce Inc."
    },
    {
    "Symbol":"SPT",
    "Name":"Sprout Social Inc Class A"
    },
    {
    "Symbol":"SPTK",
    "Name":"SportsTek Acquisition Corp. Class A"
    },
    {
    "Symbol":"SPTKU",
    "Name":"SportsTek Acquisition Corp. Unit"
    },
    {
    "Symbol":"SPTKW",
    "Name":"SportsTek Acquisition Corp. Warrant"
    },
    {
    "Symbol":"SPTN",
    "Name":"SpartanNash Company"
    },
    {
    "Symbol":"SPWH",
    "Name":"Sportsman's Warehouse Holdings Inc."
    },
    {
    "Symbol":"SPWR",
    "Name":"SunPower Corporation"
    },
    {
    "Symbol":"SPXC",
    "Name":"SPX Corporation"
    },
    {
    "Symbol":"SPXX",
    "Name":"Nuveen S&P 500 Dynamic Overwrite Fund"
    },
    {
    "Symbol":"SQ",
    "Name":"Block Inc. Class A"
    },
    {
    "Symbol":"SQFT",
    "Name":"Presidio Property Trust Inc. Class A"
    },
    {
    "Symbol":"SQFTP",
    "Name":"Presidio Property Trust Inc. 9.375% Series D Cumulative Redeemable Perpetual Preferred Stock $0.01 par value per share"
    },
    {
    "Symbol":"SQFTW",
    "Name":"Presidio Property Trust Inc. Series A   Purchase Warrants"
    },
    {
    "Symbol":"SQL",
    "Name":"SeqLL Inc."
    },
    {
    "Symbol":"SQLLW",
    "Name":"SeqLL Inc. Warrant"
    },
    {
    "Symbol":"SQM",
    "Name":"Sociedad Quimica y Minera S.A."
    },
    {
    "Symbol":"SQNS",
    "Name":"Sequans Communications S.A. American Depositary Shares"
    },
    {
    "Symbol":"SQSP",
    "Name":"Squarespace Inc. Class A"
    },
    {
    "Symbol":"SQZ",
    "Name":"SQZ Biotechnologies Company"
    },
    {
    "Symbol":"SR",
    "Name":"Spire Inc."
    },
    {
    "Symbol":"SR^A",
    "Name":"Spire Inc. Depositary Shares each representing a 1/1000th interest in a share of 5.90% Series A Cumulative Redeemable Perpetual Preferred Stock"
    },
    {
    "Symbol":"SRAD",
    "Name":"Sportradar Group AG Class A Ordinary Shares"
    },
    {
    "Symbol":"SRAX",
    "Name":"SRAX Inc. Class A"
    },
    {
    "Symbol":"SRC",
    "Name":"Spirit Realty Capital Inc."
    },
    {
    "Symbol":"SRC^A",
    "Name":"Spirit Realty Capital Inc. 6.000% Series A Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"SRCE",
    "Name":"1st Source Corporation"
    },
    {
    "Symbol":"SRCL",
    "Name":"Stericycle Inc."
    },
    {
    "Symbol":"SRDX",
    "Name":"Surmodics Inc."
    },
    {
    "Symbol":"SRE",
    "Name":"DBA Sempra"
    },
    {
    "Symbol":"SREA",
    "Name":"DBA Sempra 5.750% Junior Subordinated Notes due 2079"
    },
    {
    "Symbol":"SREV",
    "Name":"ServiceSource International Inc."
    },
    {
    "Symbol":"SRG",
    "Name":"Seritage Growth Properties Class A"
    },
    {
    "Symbol":"SRG^A",
    "Name":"Seritage Growth Properties 7.00% Series A Cumulative Redeemable Preferred Shares of Beneficial Interest"
    },
    {
    "Symbol":"SRGA",
    "Name":"Surgalign Holdings Inc."
    },
    {
    "Symbol":"SRI",
    "Name":"Stoneridge Inc."
    },
    {
    "Symbol":"SRL",
    "Name":"Scully Royalty Ltd."
    },
    {
    "Symbol":"SRLP",
    "Name":"Sprague Resources LP Common Units representing Limited Partner Interests"
    },
    {
    "Symbol":"SRNE",
    "Name":"Sorrento Therapeutics Inc. "
    },
    {
    "Symbol":"SRPT",
    "Name":"Sarepta Therapeutics Inc.   (DE)"
    },
    {
    "Symbol":"SRRA",
    "Name":"Sierra Oncology Inc."
    },
    {
    "Symbol":"SRRK",
    "Name":"Scholar Rock Holding Corporation"
    },
    {
    "Symbol":"SRSA",
    "Name":"Sarissa Capital Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"SRSAW",
    "Name":"Sarissa Capital Acquisition Corp. Warrants"
    },
    {
    "Symbol":"SRT",
    "Name":"StarTek Inc."
    },
    {
    "Symbol":"SRTS",
    "Name":"Sensus Healthcare Inc."
    },
    {
    "Symbol":"SRV",
    "Name":"Cushing MLP & Infrastructure Total Return Fund"
    },
    {
    "Symbol":"SRZN",
    "Name":"Surrozen Inc."
    },
    {
    "Symbol":"SRZNW",
    "Name":"Surrozen Inc. Warrant"
    },
    {
    "Symbol":"SSAA",
    "Name":"Science Strategic Acquisition Corp. Alpha Class A"
    },
    {
    "Symbol":"SSAAU",
    "Name":"Science Strategic Acquisition Corp. Alpha Unit"
    },
    {
    "Symbol":"SSAAW",
    "Name":"Science Strategic Acquisition Corp. Alpha Warrant"
    },
    {
    "Symbol":"SSB",
    "Name":"SouthState Corporation"
    },
    {
    "Symbol":"SSBI",
    "Name":"Summit State Bank"
    },
    {
    "Symbol":"SSBK",
    "Name":"Southern States Bancshares Inc."
    },
    {
    "Symbol":"SSD",
    "Name":"Simpson Manufacturing Company Inc."
    },
    {
    "Symbol":"SSKN",
    "Name":"Strata Skin Sciences Inc."
    },
    {
    "Symbol":"SSL",
    "Name":"Sasol Ltd. American Depositary Shares"
    },
    {
    "Symbol":"SSNC",
    "Name":"SS&C Technologies Holdings Inc."
    },
    {
    "Symbol":"SSNT",
    "Name":"SilverSun Technologies Inc."
    },
    {
    "Symbol":"SSP",
    "Name":"E.W. Scripps Company (The) Class A"
    },
    {
    "Symbol":"SSRM",
    "Name":"SSR Mining Inc."
    },
    {
    "Symbol":"SSSS",
    "Name":"SuRo Capital Corp."
    },
    {
    "Symbol":"SSSSL",
    "Name":"SuRo Capital Corp. 6.00% Notes due 2026"
    },
    {
    "Symbol":"SSTI",
    "Name":"ShotSpotter Inc."
    },
    {
    "Symbol":"SSTK",
    "Name":"Shutterstock Inc."
    },
    {
    "Symbol":"SSU",
    "Name":"SIGNA Sports United N.V. Ordinary Share"
    },
    {
    "Symbol":"SSY",
    "Name":"SunLink Health Systems Inc."
    },
    {
    "Symbol":"SSYS",
    "Name":"Stratasys Ltd. Ordinary Shares (Israel)"
    },
    {
    "Symbol":"ST",
    "Name":"Sensata Technologies Holding plc Ordinary Shares"
    },
    {
    "Symbol":"STAA",
    "Name":"STAAR Surgical Company"
    },
    {
    "Symbol":"STAB",
    "Name":"Statera Biopharma Inc."
    },
    {
    "Symbol":"STAF",
    "Name":"Staffing 360 Solutions Inc.   (DE)"
    },
    {
    "Symbol":"STAG",
    "Name":"Stag Industrial Inc."
    },
    {
    "Symbol":"STAR",
    "Name":"iStar Inc."
    },
    {
    "Symbol":"STAR^D",
    "Name":"iStar Inc. Series D Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"STAR^G",
    "Name":"iStar Inc. Series G Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"STAR^I",
    "Name":"iStar Inc. Series I Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"STBA",
    "Name":"S&T Bancorp Inc."
    },
    {
    "Symbol":"STC",
    "Name":"Stewart Information Services Corporation"
    },
    {
    "Symbol":"STCN",
    "Name":"Steel Connect Inc."
    },
    {
    "Symbol":"STE",
    "Name":"STERIS plc (Ireland) Ordinary Shares"
    },
    {
    "Symbol":"STEM",
    "Name":"Stem Inc. Class A"
    },
    {
    "Symbol":"STEP",
    "Name":"StepStone Group Inc. Class A"
    },
    {
    "Symbol":"STER",
    "Name":"Sterling Check Corp."
    },
    {
    "Symbol":"STET",
    "Name":"ST Energy Transition I Ltd. Class A Ordinary Shares"
    },
    {
    "Symbol":"STFC",
    "Name":"State Auto Financial Corporation"
    },
    {
    "Symbol":"STG",
    "Name":"Sunlands Technology Group American Depositary Shares representing Class A ordinary shares"
    },
    {
    "Symbol":"STGW",
    "Name":"Stagwell Inc. Class A"
    },
    {
    "Symbol":"STIM",
    "Name":"Neuronetics Inc."
    },
    {
    "Symbol":"STK",
    "Name":"Columbia Seligman Premium Technology Growth Fund Inc"
    },
    {
    "Symbol":"STKL",
    "Name":"SunOpta Inc."
    },
    {
    "Symbol":"STKS",
    "Name":"The ONE Group Hospitality Inc."
    },
    {
    "Symbol":"STL",
    "Name":"Sterling Bancorp"
    },
    {
    "Symbol":"STL^A",
    "Name":"Sterling Bancorp Depositary Shares each representing ownership of a 1/40th interest in a share of 6.50% Non-Cumulative Perpetual Preferred Stock Series A"
    },
    {
    "Symbol":"STLA",
    "Name":"Stellantis N.V. Common Shares"
    },
    {
    "Symbol":"STLD",
    "Name":"Steel Dynamics Inc."
    },
    {
    "Symbol":"STM",
    "Name":"STMicroelectronics N.V."
    },
    {
    "Symbol":"STN",
    "Name":"Stantec Inc"
    },
    {
    "Symbol":"STNE",
    "Name":"StoneCo Ltd. Class A Common Shares"
    },
    {
    "Symbol":"STNG",
    "Name":"Scorpio Tankers Inc. Common Shares"
    },
    {
    "Symbol":"STOK",
    "Name":"Stoke Therapeutics Inc."
    },
    {
    "Symbol":"STON",
    "Name":"StoneMor Inc."
    },
    {
    "Symbol":"STOR",
    "Name":"STORE Capital Corporation"
    },
    {
    "Symbol":"STRA",
    "Name":"Strategic Education Inc."
    },
    {
    "Symbol":"STRC",
    "Name":"Sarcos Technology and Robotics Corporation"
    },
    {
    "Symbol":"STRCW",
    "Name":"Sarcos Technology and Robotics Corporation Warrants"
    },
    {
    "Symbol":"STRE",
    "Name":"Supernova Partners Acquisition Company III Ltd. Class A Ordinary Shares"
    },
    {
    "Symbol":"STRL",
    "Name":"Sterling Construction Company Inc"
    },
    {
    "Symbol":"STRM",
    "Name":"Streamline Health Solutions Inc."
    },
    {
    "Symbol":"STRN",
    "Name":"Stran & Company Inc."
    },
    {
    "Symbol":"STRNW",
    "Name":"Stran & Company Inc. Warrant"
    },
    {
    "Symbol":"STRO",
    "Name":"Sutro Biopharma Inc."
    },
    {
    "Symbol":"STRR",
    "Name":"Star Equity Holdings Inc."
    },
    {
    "Symbol":"STRRP",
    "Name":"Star Equity Holdings Inc. Series A Cumulative Perpetual Preferred Stock"
    },
    {
    "Symbol":"STRS",
    "Name":"Stratus Properties Inc."
    },
    {
    "Symbol":"STRT",
    "Name":"STRATTEC SECURITY CORPORATION"
    },
    {
    "Symbol":"STSA",
    "Name":"Satsuma Pharmaceuticals Inc."
    },
    {
    "Symbol":"STT",
    "Name":"State Street Corporation"
    },
    {
    "Symbol":"STT^D",
    "Name":"State Street Corporation Depositary Shares representing 1/4000th Perpetual Preferred Series D"
    },
    {
    "Symbol":"STT^G",
    "Name":"State Street Corporation Depositary shares each representing a 1/4000th ownership interest in a share of Fixed-to-Floating Rate Non-Cumulative"
    },
    {
    "Symbol":"STTK",
    "Name":"Shattuck Labs Inc."
    },
    {
    "Symbol":"STVN",
    "Name":"Stevanato Group S.p.A. Ordinary Shares"
    },
    {
    "Symbol":"STWD",
    "Name":"STARWOOD PROPERTY TRUST INC. Starwood Property Trust Inc."
    },
    {
    "Symbol":"STX",
    "Name":"Seagate Technology Holdings PLC Ordinary Shares (Ireland)"
    },
    {
    "Symbol":"STXB",
    "Name":"Spirit of Texas Bancshares Inc."
    },
    {
    "Symbol":"STXS",
    "Name":"Stereotaxis Inc."
    },
    {
    "Symbol":"STZ",
    "Name":"Constellation Brands Inc."
    },
    {
    "Symbol":"STZ/B",
    "Name":"Constellation Brands Inc"
    },
    {
    "Symbol":"SU",
    "Name":"Suncor Energy  Inc."
    },
    {
    "Symbol":"SUAC",
    "Name":"ShoulderUp Technology Acquisition Corp. Class A"
    },
    {
    "Symbol":"SUI",
    "Name":"Sun Communities Inc."
    },
    {
    "Symbol":"SUM",
    "Name":"Summit Materials Inc. Class A"
    },
    {
    "Symbol":"SUMO",
    "Name":"Sumo Logic Inc."
    },
    {
    "Symbol":"SUMR",
    "Name":"Summer Infant Inc."
    },
    {
    "Symbol":"SUN",
    "Name":"Sunoco LP Common Units representing limited partner interests"
    },
    {
    "Symbol":"SUNL",
    "Name":"Sunlight Financial Holdings Inc. Class A"
    },
    {
    "Symbol":"SUNS",
    "Name":"SLR Senior Investment Corp."
    },
    {
    "Symbol":"SUNW",
    "Name":"Sunworks Inc."
    },
    {
    "Symbol":"SUP",
    "Name":"Superior Industries International Inc.   (DE)"
    },
    {
    "Symbol":"SUPN",
    "Name":"Supernus Pharmaceuticals Inc."
    },
    {
    "Symbol":"SUPV",
    "Name":"Grupo Supervielle S.A. American Depositary Shares each Representing five Class B shares"
    },
    {
    "Symbol":"SURF",
    "Name":"Surface Oncology Inc."
    },
    {
    "Symbol":"SURG",
    "Name":"SurgePays Inc."
    },
    {
    "Symbol":"SURGW",
    "Name":"SurgePays Inc. Warrant"
    },
    {
    "Symbol":"SUZ",
    "Name":"Suzano S.A. American Depositary Shares (each representing One Ordinary Share)"
    },
    {
    "Symbol":"SV",
    "Name":"Spring Valley Acquisition Corp. Class A Ordinary Share"
    },
    {
    "Symbol":"SVC",
    "Name":"Service Properties Trust"
    },
    {
    "Symbol":"SVFA",
    "Name":"SVF Investment Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"SVFAU",
    "Name":"SVF Investment Corp. Unit"
    },
    {
    "Symbol":"SVFAW",
    "Name":"SVF Investment Corp. Warrant"
    },
    {
    "Symbol":"SVFB",
    "Name":"SVF Investment Corp. 2 Class A Ordinary Shares"
    },
    {
    "Symbol":"SVFC",
    "Name":"SVF Investment Corp. 3 Class A Ordinary Shares"
    },
    {
    "Symbol":"SVFD",
    "Name":"Save Foods Inc."
    },
    {
    "Symbol":"SVM",
    "Name":"Silvercorp Metals Inc. Common Shares"
    },
    {
    "Symbol":"SVNA",
    "Name":"7 Acquisition Corporation Class A Ordinary Shares"
    },
    {
    "Symbol":"SVNAU",
    "Name":"7 Acquisition Corporation Unit"
    },
    {
    "Symbol":"SVNAW",
    "Name":"7 Acquisition Corporation Warrant"
    },
    {
    "Symbol":"SVRA",
    "Name":"Savara Inc."
    },
    {
    "Symbol":"SVSVU",
    "Name":"Spring Valley Acquisition Corp. Unit"
    },
    {
    "Symbol":"SVSVW",
    "Name":"Spring Valley Acquisition Corp. Warrant"
    },
    {
    "Symbol":"SVT",
    "Name":"Servotronics Inc."
    },
    {
    "Symbol":"SVVC",
    "Name":"Firsthand Technology Value Fund Inc."
    },
    {
    "Symbol":"SWAG",
    "Name":"Software Acquisition Group Inc. III Class A"
    },
    {
    "Symbol":"SWAGU",
    "Name":"Software Acquisition Group Inc. III Unit"
    },
    {
    "Symbol":"SWAGW",
    "Name":"Software Acquisition Group Inc. III Warrant"
    },
    {
    "Symbol":"SWAV",
    "Name":"ShockWave Medical Inc."
    },
    {
    "Symbol":"SWBI",
    "Name":"Smith & Wesson Brands Inc."
    },
    {
    "Symbol":"SWCH",
    "Name":"Switch Inc. Class A"
    },
    {
    "Symbol":"SWET",
    "Name":"Athlon Acquisition Corp. Class A"
    },
    {
    "Symbol":"SWETU",
    "Name":"Athlon Acquisition Corp. Unit"
    },
    {
    "Symbol":"SWETW",
    "Name":"Athlon Acquisition Corp. Warrant"
    },
    {
    "Symbol":"SWI",
    "Name":"SolarWinds Corporation"
    },
    {
    "Symbol":"SWIM",
    "Name":"Latham Group Inc."
    },
    {
    "Symbol":"SWIR",
    "Name":"Sierra Wireless Inc."
    },
    {
    "Symbol":"SWK",
    "Name":"Stanley Black & Decker Inc."
    },
    {
    "Symbol":"SWKH",
    "Name":"SWK Holdings Corporation"
    },
    {
    "Symbol":"SWKS",
    "Name":"Skyworks Solutions Inc."
    },
    {
    "Symbol":"SWM",
    "Name":"Schweitzer-Mauduit International Inc."
    },
    {
    "Symbol":"SWN",
    "Name":"Southwestern Energy Company"
    },
    {
    "Symbol":"SWSS",
    "Name":"Springwater Special Situations Corp."
    },
    {
    "Symbol":"SWSSU",
    "Name":"Springwater Special Situations Corp. Unit"
    },
    {
    "Symbol":"SWSSW",
    "Name":"Springwater Special Situations Corp. Warrant"
    },
    {
    "Symbol":"SWT",
    "Name":"Stanley Black & Decker Inc. Corporate Unit"
    },
    {
    "Symbol":"SWTX",
    "Name":"SpringWorks Therapeutics Inc."
    },
    {
    "Symbol":"SWX",
    "Name":"Southwest Gas Holdings Inc.   (DE)"
    },
    {
    "Symbol":"SWZ",
    "Name":"Swiss Helvetia Fund Inc. (The)"
    },
    {
    "Symbol":"SXC",
    "Name":"SunCoke Energy Inc."
    },
    {
    "Symbol":"SXI",
    "Name":"Standex International Corporation"
    },
    {
    "Symbol":"SXT",
    "Name":"Sensient Technologies Corporation"
    },
    {
    "Symbol":"SXTC",
    "Name":"China SXT Pharmaceuticals Inc. Ordinary Shares"
    },
    {
    "Symbol":"SY",
    "Name":"So-Young International Inc. American Depository Shares"
    },
    {
    "Symbol":"SYBT",
    "Name":"Stock Yards Bancorp Inc."
    },
    {
    "Symbol":"SYBX",
    "Name":"Synlogic Inc."
    },
    {
    "Symbol":"SYF",
    "Name":"Synchrony Financial"
    },
    {
    "Symbol":"SYF^A",
    "Name":"Synchrony Financial Depositary Shares each Representing a 1/40th Interest in a Share of 5.625% Fixed Rate Non-Cumulative Perpetual Preferred Stock Series A"
    },
    {
    "Symbol":"SYK",
    "Name":"Stryker Corporation"
    },
    {
    "Symbol":"SYN",
    "Name":"Synthetic Biologics Inc."
    },
    {
    "Symbol":"SYNA",
    "Name":"Synaptics Incorporated   $0.001 Par Value"
    },
    {
    "Symbol":"SYNH",
    "Name":"Syneos Health Inc. Class A"
    },
    {
    "Symbol":"SYNL",
    "Name":"Synalloy Corporation"
    },
    {
    "Symbol":"SYPR",
    "Name":"Sypris Solutions Inc."
    },
    {
    "Symbol":"SYRS",
    "Name":"Syros Pharmaceuticals Inc."
    },
    {
    "Symbol":"SYTA",
    "Name":"Siyata Mobile Inc. Common Shares"
    },
    {
    "Symbol":"SYTAW",
    "Name":"Siyata Mobile Inc. Warrant"
    },
    {
    "Symbol":"SYY",
    "Name":"Sysco Corporation"
    },
    {
    "Symbol":"SZC",
    "Name":"Cushing NextGen Infrastructure Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"SZZLU",
    "Name":"Sizzle Acquisition Corp. Unit"
    },
    {
    "Symbol":"T",
    "Name":"AT&T Inc."
    },
    {
    "Symbol":"T^A",
    "Name":"AT&T Inc. Depositary Shares each representing a 1/1000th interest in a share of 5.000% Perpetual Preferred Stock Series A"
    },
    {
    "Symbol":"T^C",
    "Name":"AT&T Inc. Depositary Shares each representing a 1/1000th interest in a share of 4.750% Perpetual Preferred Stock Series C"
    },
    {
    "Symbol":"TA",
    "Name":"TravelCenters of America Inc."
    },
    {
    "Symbol":"TAC",
    "Name":"TransAlta Corporation Ordinary Shares"
    },
    {
    "Symbol":"TACA",
    "Name":"Trepont Acquisition Corp I Class A Ordinary Shares"
    },
    {
    "Symbol":"TACO",
    "Name":"Del Taco Restaurants Inc."
    },
    {
    "Symbol":"TACT",
    "Name":"TransAct Technologies Incorporated"
    },
    {
    "Symbol":"TAIT",
    "Name":"Taitron Components Incorporated Class A"
    },
    {
    "Symbol":"TAK",
    "Name":"Takeda Pharmaceutical Company Limited American Depositary Shares (each representing 1/2 of a share of  )"
    },
    {
    "Symbol":"TAL",
    "Name":"TAL Education Group American Depositary Shares"
    },
    {
    "Symbol":"TALK",
    "Name":"Talkspace Inc."
    },
    {
    "Symbol":"TALKW",
    "Name":"Talkspace Inc. Warrant"
    },
    {
    "Symbol":"TALO",
    "Name":"Talos Energy Inc."
    },
    {
    "Symbol":"TALS",
    "Name":"Talaris Therapeutics Inc."
    },
    {
    "Symbol":"TANH",
    "Name":"Tantech Holdings Ltd."
    },
    {
    "Symbol":"TANNI",
    "Name":"TravelCenters of America Inc. 8.25% Senior Notes due 2028"
    },
    {
    "Symbol":"TANNL",
    "Name":"TravelCenters of America Inc. 8.00% Senior Notes due 2029"
    },
    {
    "Symbol":"TANNZ",
    "Name":"TravelCenters of America Inc. 8.00% Senior Notes due 2030"
    },
    {
    "Symbol":"TAOP",
    "Name":"Taoping Inc. Ordinary Shares"
    },
    {
    "Symbol":"TAP",
    "Name":"Molson Coors Beverage Company Class B"
    },
    {
    "Symbol":"TARA",
    "Name":"Protara Therapeutics Inc. "
    },
    {
    "Symbol":"TARO",
    "Name":"Taro Pharmaceutical Industries Ltd. Ordinary Shares"
    },
    {
    "Symbol":"TARS",
    "Name":"Tarsus Pharmaceuticals Inc."
    },
    {
    "Symbol":"TASK",
    "Name":"TaskUs Inc. Class A"
    },
    {
    "Symbol":"TAST",
    "Name":"Carrols Restaurant Group Inc."
    },
    {
    "Symbol":"TATT",
    "Name":"TAT Technologies Ltd. Ordinary Shares"
    },
    {
    "Symbol":"TAYD",
    "Name":"Taylor Devices Inc."
    },
    {
    "Symbol":"TBB",
    "Name":"AT&T Inc. 5.350% Global Notes due 2066"
    },
    {
    "Symbol":"TBBK",
    "Name":"The Bancorp Inc"
    },
    {
    "Symbol":"TBC",
    "Name":"AT&T Inc. 5.625% Global Notes due 2067"
    },
    {
    "Symbol":"TBCP",
    "Name":"Thunder Bridge Capital Partners III Inc. Class A"
    },
    {
    "Symbol":"TBCPU",
    "Name":"Thunder Bridge Capital Partners III Inc. Units"
    },
    {
    "Symbol":"TBCPW",
    "Name":"Thunder Bridge Capital Partners III Inc. Warrant"
    },
    {
    "Symbol":"TBI",
    "Name":"TrueBlue Inc."
    },
    {
    "Symbol":"TBK",
    "Name":"Triumph Bancorp Inc."
    },
    {
    "Symbol":"TBKCP",
    "Name":"Triumph Bancorp Inc. Depositary Shares Each Representing a 1/40th Interest in a Share of 7.125% Series C Fixed-Rate Non-Cumulative Perpetual Preferred Stock"
    },
    {
    "Symbol":"TBLA",
    "Name":"Taboola.com Ltd. Ordinary Shares"
    },
    {
    "Symbol":"TBLAW",
    "Name":"Taboola.com Ltd. Warrant"
    },
    {
    "Symbol":"TBLD",
    "Name":"Thornburg Income Builder Opportunities Trust"
    },
    {
    "Symbol":"TBLT",
    "Name":"ToughBuilt Industries Inc."
    },
    {
    "Symbol":"TBLTW",
    "Name":"ToughBuilt Industries Inc. Warrant"
    },
    {
    "Symbol":"TBNK",
    "Name":"Territorial Bancorp Inc."
    },
    {
    "Symbol":"TBPH",
    "Name":"Theravance Biopharma Inc. Ordinary Shares"
    },
    {
    "Symbol":"TBSA",
    "Name":"TB SA Acquisition Corp Class A Ordinary Share"
    },
    {
    "Symbol":"TBSAU",
    "Name":"TB SA Acquisition Corp Unit"
    },
    {
    "Symbol":"TBSAW",
    "Name":"TB SA Acquisition Corp Warrant"
    },
    {
    "Symbol":"TC",
    "Name":"TuanChe Limited American Depositary Shares"
    },
    {
    "Symbol":"TCAC",
    "Name":"Tuatara Capital Acquisition Corporation Class A Ordinary Shares"
    },
    {
    "Symbol":"TCACU",
    "Name":"Tuatara Capital Acquisition Corporation Unit"
    },
    {
    "Symbol":"TCACW",
    "Name":"Tuatara Capital Acquisition Corporation Warrant"
    },
    {
    "Symbol":"TCBC",
    "Name":"TC Bancshares Inc."
    },
    {
    "Symbol":"TCBI",
    "Name":"Texas Capital Bancshares Inc."
    },
    {
    "Symbol":"TCBIO",
    "Name":"Texas Capital Bancshares Inc. Depositary Shares 5.75% Fixed Rate Non-Cumulative Perpetual Preferred Stock Series B"
    },
    {
    "Symbol":"TCBK",
    "Name":"TriCo Bancshares"
    },
    {
    "Symbol":"TCBS",
    "Name":"Texas Community Bancshares Inc."
    },
    {
    "Symbol":"TCBX",
    "Name":"Third Coast Bancshares Inc."
    },
    {
    "Symbol":"TCDA",
    "Name":"Tricida Inc."
    },
    {
    "Symbol":"TCFC",
    "Name":"The Community Financial Corporation"
    },
    {
    "Symbol":"TCI",
    "Name":"Transcontinental Realty Investors Inc."
    },
    {
    "Symbol":"TCMD",
    "Name":"Tactile Systems Technology Inc."
    },
    {
    "Symbol":"TCN",
    "Name":"Tricon Residential Inc. Common Shares"
    },
    {
    "Symbol":"TCOM",
    "Name":"Trip.com Group Limited American Depositary Shares"
    },
    {
    "Symbol":"TCON",
    "Name":"TRACON Pharmaceuticals Inc."
    },
    {
    "Symbol":"TCPC",
    "Name":"BlackRock TCP Capital Corp."
    },
    {
    "Symbol":"TCRR",
    "Name":"TCR2 Therapeutics Inc."
    },
    {
    "Symbol":"TCRX",
    "Name":"TScan Therapeutics Inc."
    },
    {
    "Symbol":"TCS",
    "Name":"Container Store (The)"
    },
    {
    "Symbol":"TCVA",
    "Name":"TCV Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"TCX",
    "Name":"Tucows Inc. Class A"
    },
    {
    "Symbol":"TD",
    "Name":"Toronto Dominion Bank (The)"
    },
    {
    "Symbol":"TDC",
    "Name":"Teradata Corporation"
    },
    {
    "Symbol":"TDCX",
    "Name":"TDCX Inc. American Depositary Shares each representing one Class A ordinary share"
    },
    {
    "Symbol":"TDF",
    "Name":"Templeton Dragon Fund Inc."
    },
    {
    "Symbol":"TDG",
    "Name":"Transdigm Group Incorporated"
    },
    {
    "Symbol":"TDOC",
    "Name":"Teladoc Health Inc."
    },
    {
    "Symbol":"TDS",
    "Name":"Telephone and Data Systems Inc. Common Shares"
    },
    {
    "Symbol":"TDS^U",
    "Name":"Telephone and Data Systems Inc. Depositary Shares Each Representing a 1/1000th Interest in a 6.625% Series UU Cumulative Redeemable Perpetual Preferred Stock"
    },
    {
    "Symbol":"TDS^V",
    "Name":"Telephone and Data Systems Inc. Depositary Shares Each Representing a 1/1000th Interest in a 6.000% Series VV Cumulative Redeemable Perpetual Preferred Stock"
    },
    {
    "Symbol":"TDUP",
    "Name":"ThredUp Inc. Class A"
    },
    {
    "Symbol":"TDW",
    "Name":"Tidewater Inc."
    },
    {
    "Symbol":"TDY",
    "Name":"Teledyne Technologies Incorporated"
    },
    {
    "Symbol":"TEAF",
    "Name":"Ecofin Sustainable and Social Impact Term Fund"
    },
    {
    "Symbol":"TEAM",
    "Name":"Atlassian Corporation Plc Class A Ordinary Shares"
    },
    {
    "Symbol":"TECH",
    "Name":"Bio-Techne Corp"
    },
    {
    "Symbol":"TECK",
    "Name":"Teck Resources Ltd Ordinary Shares"
    },
    {
    "Symbol":"TECTP",
    "Name":"Tectonic Financial Inc. 9.00% Fixed-to-Floating Rate Series B Non-Cumulative Perpetual Preferred Stock"
    },
    {
    "Symbol":"TEDU",
    "Name":"Tarena International Inc. American Depositary Shares"
    },
    {
    "Symbol":"TEF",
    "Name":"Telefonica SA"
    },
    {
    "Symbol":"TEI",
    "Name":"Templeton Emerging Markets Income Fund Inc."
    },
    {
    "Symbol":"TEKK",
    "Name":"Tekkorp Digital Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"TEKKU",
    "Name":"Tekkorp Digital Acquisition Corp. Unit"
    },
    {
    "Symbol":"TEKKW",
    "Name":"Tekkorp Digital Acquisition Corp. Warrant"
    },
    {
    "Symbol":"TEL",
    "Name":"TE Connectivity Ltd. New Switzerland Registered Shares"
    },
    {
    "Symbol":"TELA",
    "Name":"TELA Bio Inc."
    },
    {
    "Symbol":"TELL",
    "Name":"Tellurian Inc."
    },
    {
    "Symbol":"TELZ",
    "Name":"Tellurian Inc. 8.25% Senior Notes due 2028"
    },
    {
    "Symbol":"TEN",
    "Name":"Tenneco Inc. Class A Voting"
    },
    {
    "Symbol":"TENB",
    "Name":"Tenable Holdings Inc."
    },
    {
    "Symbol":"TENX",
    "Name":"Tenax Therapeutics Inc."
    },
    {
    "Symbol":"TEO",
    "Name":"Telecom Argentina SA"
    },
    {
    "Symbol":"TER",
    "Name":"Teradyne Inc."
    },
    {
    "Symbol":"TERN",
    "Name":"Terns Pharmaceuticals Inc."
    },
    {
    "Symbol":"TESS",
    "Name":"TESSCO Technologies Incorporated"
    },
    {
    "Symbol":"TETC",
    "Name":"Tech and Energy Transition Corporation Class A"
    },
    {
    "Symbol":"TETCU",
    "Name":"Tech and Energy Transition Corporation Unit"
    },
    {
    "Symbol":"TETCW",
    "Name":"Tech and Energy Transition Corporation Warrant"
    },
    {
    "Symbol":"TETEU",
    "Name":"Technology & Telecommunication Acquisition Corporation Unit"
    },
    {
    "Symbol":"TEVA",
    "Name":"Teva Pharmaceutical Industries Limited American Depositary Shares"
    },
    {
    "Symbol":"TEX",
    "Name":"Terex Corporation"
    },
    {
    "Symbol":"TFC",
    "Name":"Truist Financial Corporation"
    },
    {
    "Symbol":"TFC^I",
    "Name":"Truist Financial Corporation Depositary Shares"
    },
    {
    "Symbol":"TFC^O",
    "Name":"Truist Financial Corporation Depositary Shares Each Representing a 1/1000th Interest in a Share of Series O Non-Cumulative Perpetual Preferred Stock"
    },
    {
    "Symbol":"TFC^R",
    "Name":"Truist Financial Corporation Depositary Shares each representing 1/1000th interest in a share of Series R Non-Cumulative Perpetual Preferred Stock"
    },
    {
    "Symbol":"TFFP",
    "Name":"TFF Pharmaceuticals Inc."
    },
    {
    "Symbol":"TFII",
    "Name":"TFI International Inc. Common Shares"
    },
    {
    "Symbol":"TFSA",
    "Name":"Terra Income Fund VI 7.00% Notes due 2026"
    },
    {
    "Symbol":"TFSL",
    "Name":"TFS Financial Corporation"
    },
    {
    "Symbol":"TFX",
    "Name":"Teleflex Incorporated"
    },
    {
    "Symbol":"TG",
    "Name":"Tredegar Corporation"
    },
    {
    "Symbol":"TGA",
    "Name":"TransGlobe Energy Corporation Ordinary Shares (Canada)"
    },
    {
    "Symbol":"TGAAU",
    "Name":"Target Global Acquisition I Corp. Unit"
    },
    {
    "Symbol":"TGB",
    "Name":"Taseko Mines Ltd."
    },
    {
    "Symbol":"TGH",
    "Name":"Textainer Group Holdings Limited Common Shares"
    },
    {
    "Symbol":"TGH^A",
    "Name":"Textainer Group Holdings Limited Depositary Shares each representing a 1/1000th interest in a share of 7.000% Series A Cumulative Redeemable Perpetual Preference Shares"
    },
    {
    "Symbol":"TGH^B",
    "Name":"Textainer Group Holdings Limited Depositary Shares each representing a 1/1000th interest in a share of 6.250% Series B Cumulative Redeemable Perpetual Preference Shares"
    },
    {
    "Symbol":"TGI",
    "Name":"Triumph Group Inc."
    },
    {
    "Symbol":"TGLS",
    "Name":"Tecnoglass Inc. Ordinary Shares"
    },
    {
    "Symbol":"TGNA",
    "Name":"TEGNA Inc"
    },
    {
    "Symbol":"TGP^A",
    "Name":"Teekay LNG Partners L.P. 9.00% Series A Cumulative Redeemable Perpetual Preferred Units representing limited partner interests"
    },
    {
    "Symbol":"TGP^B",
    "Name":"Teekay LNG Partners L.P. 8.50% Series B Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units representing limited partner interests"
    },
    {
    "Symbol":"TGS",
    "Name":"Transportadora de Gas del Sur SA TGS"
    },
    {
    "Symbol":"TGT",
    "Name":"Target Corporation"
    },
    {
    "Symbol":"TGTX",
    "Name":"TG Therapeutics Inc."
    },
    {
    "Symbol":"TGVC",
    "Name":"TG Venture Acquisition Corp. Class A"
    },
    {
    "Symbol":"TGVCU",
    "Name":"TG Venture Acquisition Corp. Units"
    },
    {
    "Symbol":"TGVCW",
    "Name":"TG Venture Acquisition Corp. Warrants"
    },
    {
    "Symbol":"TH",
    "Name":"Target Hospitality Corp."
    },
    {
    "Symbol":"THAC",
    "Name":"Thrive Acquisition Corporation Class A ordinary shares"
    },
    {
    "Symbol":"THACU",
    "Name":"Thrive Acquisition Corporation Unit"
    },
    {
    "Symbol":"THACW",
    "Name":"Thrive Acquisition Corporation Warrant"
    },
    {
    "Symbol":"THC",
    "Name":"Tenet Healthcare Corporation"
    },
    {
    "Symbol":"THCA",
    "Name":"Tuscan Holdings Corp. II"
    },
    {
    "Symbol":"THCAW",
    "Name":"Tuscan Holdings Corp. II Warrant"
    },
    {
    "Symbol":"THCP",
    "Name":"Thunder Bridge Capital Partners IV Inc. Class A"
    },
    {
    "Symbol":"THCPU",
    "Name":"Thunder Bridge Capital Partners IV Inc. Unit"
    },
    {
    "Symbol":"THFF",
    "Name":"First Financial Corporation Indiana"
    },
    {
    "Symbol":"THG",
    "Name":"Hanover Insurance Group Inc"
    },
    {
    "Symbol":"THM",
    "Name":"International Tower Hill Mines Ltd. Ordinary Shares (Canada)"
    },
    {
    "Symbol":"THMO",
    "Name":"ThermoGenesis Holdings Inc."
    },
    {
    "Symbol":"THO",
    "Name":"Thor Industries Inc."
    },
    {
    "Symbol":"THQ",
    "Name":"Tekla Healthcare Opportunies Fund Shares of Beneficial Interest"
    },
    {
    "Symbol":"THR",
    "Name":"Thermon Group Holdings Inc."
    },
    {
    "Symbol":"THRM",
    "Name":"Gentherm Inc"
    },
    {
    "Symbol":"THRN",
    "Name":"Thorne Healthtech Inc."
    },
    {
    "Symbol":"THRX",
    "Name":"Theseus Pharmaceuticals Inc."
    },
    {
    "Symbol":"THRY",
    "Name":"Thryv Holdings Inc."
    },
    {
    "Symbol":"THS",
    "Name":"Treehouse Foods Inc."
    },
    {
    "Symbol":"THTX",
    "Name":"Theratechnologies Inc. Common Shares"
    },
    {
    "Symbol":"THW",
    "Name":"Tekla World Healthcare Fund Shares of Beneficial Interest"
    },
    {
    "Symbol":"THWWW",
    "Name":"Target Hospitality Corp. Warrant expiring 3/15/2024"
    },
    {
    "Symbol":"TIG",
    "Name":"Trean Insurance Group Inc."
    },
    {
    "Symbol":"TIGO",
    "Name":"Millicom International Cellular S.A."
    },
    {
    "Symbol":"TIGR",
    "Name":"UP Fintech Holding Ltd American Depositary Share representing fifteen Class A Ordinary Shares"
    },
    {
    "Symbol":"TIL",
    "Name":"Instil Bio Inc."
    },
    {
    "Symbol":"TILE",
    "Name":"Interface Inc."
    },
    {
    "Symbol":"TIMB",
    "Name":"TIM S.A. American Depositary Shares (Each representing 5 Common Shares)"
    },
    {
    "Symbol":"TINV",
    "Name":"Tiga Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"TIOA",
    "Name":"Tio Tech A Class A Ordinary Share"
    },
    {
    "Symbol":"TIOAU",
    "Name":"Tio Tech A Units"
    },
    {
    "Symbol":"TIOAW",
    "Name":"Tio Tech A Warrants"
    },
    {
    "Symbol":"TIPT",
    "Name":"Tiptree Inc."
    },
    {
    "Symbol":"TIRX",
    "Name":"TIAN RUIXIANG Holdings Ltd Class A Ordinary Shares"
    },
    {
    "Symbol":"TISI",
    "Name":"Team Inc."
    },
    {
    "Symbol":"TITN",
    "Name":"Titan Machinery Inc."
    },
    {
    "Symbol":"TIVC",
    "Name":"Tivic Health Systems Inc."
    },
    {
    "Symbol":"TIXT",
    "Name":"TELUS International (Cda) Inc. Subordinate Voting Shares"
    },
    {
    "Symbol":"TJX",
    "Name":"TJX Companies Inc. (The)"
    },
    {
    "Symbol":"TK",
    "Name":"Teekay Corporation"
    },
    {
    "Symbol":"TKAT",
    "Name":"Takung Art Co. Ltd."
    },
    {
    "Symbol":"TKC",
    "Name":"Turkcell Iletisim Hizmetleri AS"
    },
    {
    "Symbol":"TKLF",
    "Name":"Yoshitsu Co. Ltd American Depositary Shares"
    },
    {
    "Symbol":"TKNO",
    "Name":"Alpha Teknova Inc."
    },
    {
    "Symbol":"TKR",
    "Name":"Timken Company (The)"
    },
    {
    "Symbol":"TLGA",
    "Name":"TLG Acquisition One Corp. Class A"
    },
    {
    "Symbol":"TLGY",
    "Name":"TLGY Acquisition Corporation Class A Ordinary Share"
    },
    {
    "Symbol":"TLGYU",
    "Name":"TLGY Acquisition Corporation Unit"
    },
    {
    "Symbol":"TLGYW",
    "Name":"TLGY Acquisition Corporation Warrant"
    },
    {
    "Symbol":"TLIS",
    "Name":"Talis Biomedical Corporation"
    },
    {
    "Symbol":"TLK",
    "Name":"PT Telekomunikasi Indonesia Tbk"
    },
    {
    "Symbol":"TLMD",
    "Name":"SOC Telemed Inc. Class A"
    },
    {
    "Symbol":"TLMDW",
    "Name":"SOC Telemed Inc. Warrants"
    },
    {
    "Symbol":"TLRY",
    "Name":"Tilray Brands Inc. Class 2"
    },
    {
    "Symbol":"TLS",
    "Name":"Telos Corporation"
    },
    {
    "Symbol":"TLSA",
    "Name":"Tiziana Life Sciences Ltd. Common Shares"
    },
    {
    "Symbol":"TLYS",
    "Name":"Tilly's Inc."
    },
    {
    "Symbol":"TM",
    "Name":"Toyota Motor Corporation"
    },
    {
    "Symbol":"TMAC",
    "Name":"The Music Acquisition Corporation Class A"
    },
    {
    "Symbol":"TMBR",
    "Name":"Timber Pharmaceuticals Inc."
    },
    {
    "Symbol":"TMC",
    "Name":"TMC the metals company Inc."
    },
    {
    "Symbol":"TMCI",
    "Name":"Treace Medical Concepts Inc."
    },
    {
    "Symbol":"TMCWW",
    "Name":"TMC the metals company Inc. Warrants"
    },
    {
    "Symbol":"TMDI",
    "Name":"Titan Medical Inc. Ordinary Shares"
    },
    {
    "Symbol":"TMDX",
    "Name":"TransMedics Group Inc."
    },
    {
    "Symbol":"TME",
    "Name":"Tencent Music Entertainment Group American Depositary Shares each representing two Class A Ordinary Shares"
    },
    {
    "Symbol":"TMHC",
    "Name":"Taylor Morrison Home Corporation"
    },
    {
    "Symbol":"TMKR",
    "Name":"Tastemaker Acquisition Corp. Class A"
    },
    {
    "Symbol":"TMKRU",
    "Name":"Tastemaker Acquisition Corp. Unit"
    },
    {
    "Symbol":"TMKRW",
    "Name":"Tastemaker Acquisition Corp. Warrant to purchase Class A"
    },
    {
    "Symbol":"TMO",
    "Name":"Thermo Fisher Scientific Inc"
    },
    {
    "Symbol":"TMP",
    "Name":"Tompkins Financial Corporation"
    },
    {
    "Symbol":"TMPM",
    "Name":"Turmeric Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"TMPMU",
    "Name":"Turmeric Acquisition Corp. Unit"
    },
    {
    "Symbol":"TMPMW",
    "Name":"Turmeric Acquisition Corp. Warrant"
    },
    {
    "Symbol":"TMQ",
    "Name":"Trilogy Metals Inc."
    },
    {
    "Symbol":"TMST",
    "Name":"TimkenSteel Corporation Common Shares"
    },
    {
    "Symbol":"TMUS",
    "Name":"T-Mobile US Inc."
    },
    {
    "Symbol":"TMX",
    "Name":"Terminix Global Holdings Inc."
    },
    {
    "Symbol":"TNC",
    "Name":"Tennant Company"
    },
    {
    "Symbol":"TNDM",
    "Name":"Tandem Diabetes Care Inc."
    },
    {
    "Symbol":"TNET",
    "Name":"TriNet Group Inc."
    },
    {
    "Symbol":"TNGX",
    "Name":"Tango Therapeutics Inc."
    },
    {
    "Symbol":"TNK",
    "Name":"Teekay Tankers Ltd."
    },
    {
    "Symbol":"TNL",
    "Name":"Travel   Leisure Co. Common  Stock"
    },
    {
    "Symbol":"TNP",
    "Name":"Tsakos Energy Navigation Ltd Common Shares"
    },
    {
    "Symbol":"TNP^D",
    "Name":"Tsakos Energy Navigation Ltd 8.75% Series D Cumulative Redeemable Perpetual Preferred Shares"
    },
    {
    "Symbol":"TNP^E",
    "Name":"Tsakos Energy Navigation Ltd Series E Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Shares par value $1.00"
    },
    {
    "Symbol":"TNP^F",
    "Name":"Tsakos Energy Navigation Ltd Series F Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Shares par value $1.00"
    },
    {
    "Symbol":"TNXP",
    "Name":"Tonix Pharmaceuticals Holding Corp."
    },
    {
    "Symbol":"TNYA",
    "Name":"Tenaya Therapeutics Inc."
    },
    {
    "Symbol":"TOAC",
    "Name":"Talon 1 Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"TOACU",
    "Name":"Talon 1 Acquisition Corp. Unit"
    },
    {
    "Symbol":"TOACW",
    "Name":"Talon 1 Acquisition Corp. Warrant"
    },
    {
    "Symbol":"TOI",
    "Name":"The Oncology Institute Inc."
    },
    {
    "Symbol":"TOIIW",
    "Name":"The Oncology Institute Inc. Warrant"
    },
    {
    "Symbol":"TOL",
    "Name":"Toll Brothers Inc."
    },
    {
    "Symbol":"TOMZ",
    "Name":"TOMI Environmental Solutions Inc."
    },
    {
    "Symbol":"TOPS",
    "Name":"TOP Ships Inc."
    },
    {
    "Symbol":"TOST",
    "Name":"Toast Inc. Class A"
    },
    {
    "Symbol":"TOUR",
    "Name":"Tuniu Corporation American Depositary Shares"
    },
    {
    "Symbol":"TOWN",
    "Name":"TowneBank"
    },
    {
    "Symbol":"TPB",
    "Name":"Turning Point Brands Inc."
    },
    {
    "Symbol":"TPBA",
    "Name":"TPB Acquisition Corporation I Class A Ordinary Share"
    },
    {
    "Symbol":"TPBAU",
    "Name":"TPB Acquisition Corporation I Unit"
    },
    {
    "Symbol":"TPC",
    "Name":"Tutor Perini Corporation"
    },
    {
    "Symbol":"TPG",
    "Name":"TPG Inc. Class A"
    },
    {
    "Symbol":"TPGY",
    "Name":"TPG Pace Beneficial Finance Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"TPH",
    "Name":"Tri Pointe Homes Inc."
    },
    {
    "Symbol":"TPHS",
    "Name":"Trinity Place Holdings Inc."
    },
    {
    "Symbol":"TPIC",
    "Name":"TPI Composites Inc."
    },
    {
    "Symbol":"TPL",
    "Name":"Texas Pacific Land Corporation"
    },
    {
    "Symbol":"TPR",
    "Name":"Tapestry Inc."
    },
    {
    "Symbol":"TPST",
    "Name":"Tempest Therapeutics Inc."
    },
    {
    "Symbol":"TPTA",
    "Name":"Terra Property Trust Inc. 6.00% Notes due 2026"
    },
    {
    "Symbol":"TPTX",
    "Name":"Turning Point Therapeutics Inc."
    },
    {
    "Symbol":"TPVG",
    "Name":"TriplePoint Venture Growth BDC Corp."
    },
    {
    "Symbol":"TPX",
    "Name":"Tempur Sealy International Inc."
    },
    {
    "Symbol":"TPZ",
    "Name":"Tortoise Power and Energy Infrastructure Fund Inc"
    },
    {
    "Symbol":"TR",
    "Name":"Tootsie Roll Industries Inc."
    },
    {
    "Symbol":"TRAQ",
    "Name":"Trine II Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"TRC",
    "Name":"Tejon Ranch Co"
    },
    {
    "Symbol":"TRCA",
    "Name":"Twin Ridge Capital Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"TRDA",
    "Name":"Entrada Therapeutics Inc."
    },
    {
    "Symbol":"TREB",
    "Name":"Trebia Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"TREC",
    "Name":"Trecora Resources"
    },
    {
    "Symbol":"TREE",
    "Name":"LendingTree Inc."
    },
    {
    "Symbol":"TREX",
    "Name":"Trex Company Inc."
    },
    {
    "Symbol":"TRGP",
    "Name":"Targa Resources Inc."
    },
    {
    "Symbol":"TRHC",
    "Name":"Tabula Rasa HealthCare Inc."
    },
    {
    "Symbol":"TRI",
    "Name":"Thomson Reuters Corp Ordinary Shares"
    },
    {
    "Symbol":"TRIB",
    "Name":"Trinity Biotech plc American Depositary Shares"
    },
    {
    "Symbol":"TRIN",
    "Name":"Trinity Capital Inc."
    },
    {
    "Symbol":"TRIP",
    "Name":"TripAdvisor Inc."
    },
    {
    "Symbol":"TRIS",
    "Name":"Tristar Acquisition I Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"TRIT",
    "Name":"Triterras Inc. Class A Ordinary Shares"
    },
    {
    "Symbol":"TRITW",
    "Name":"Triterras Inc. Warrant"
    },
    {
    "Symbol":"TRKA",
    "Name":"Troika Media Group Inc."
    },
    {
    "Symbol":"TRKAW",
    "Name":"Troika Media Group Inc. Warrant"
    },
    {
    "Symbol":"TRMB",
    "Name":"Trimble Inc."
    },
    {
    "Symbol":"TRMD",
    "Name":"TORM plc Class A"
    },
    {
    "Symbol":"TRMK",
    "Name":"Trustmark Corporation"
    },
    {
    "Symbol":"TRMR",
    "Name":"Tremor International Ltd. American Depository Shares"
    },
    {
    "Symbol":"TRN",
    "Name":"Trinity Industries Inc."
    },
    {
    "Symbol":"TRNO",
    "Name":"Terreno Realty Corporation"
    },
    {
    "Symbol":"TRNS",
    "Name":"Transcat Inc."
    },
    {
    "Symbol":"TRON",
    "Name":"Corner Growth Acquisition Corp. 2 Class A Ordinary Share"
    },
    {
    "Symbol":"TRONU",
    "Name":"Corner Growth Acquisition Corp. 2 Units"
    },
    {
    "Symbol":"TROO",
    "Name":"TROOPS Inc. Ordinary Shares"
    },
    {
    "Symbol":"TROW",
    "Name":"T. Rowe Price Group Inc."
    },
    {
    "Symbol":"TROX",
    "Name":"Tronox Holdings plc Ordinary Shares (UK)"
    },
    {
    "Symbol":"TRP",
    "Name":"TC Energy Corporation"
    },
    {
    "Symbol":"TRQ",
    "Name":"Turquoise Hill Resources Ltd. Ordinary Shares"
    },
    {
    "Symbol":"TRS",
    "Name":"TriMas Corporation"
    },
    {
    "Symbol":"TRST",
    "Name":"TrustCo Bank Corp NY"
    },
    {
    "Symbol":"TRT",
    "Name":"Trio-Tech International"
    },
    {
    "Symbol":"TRTL",
    "Name":"TortoiseEcofin Acquisition Corp. III Class A Ordinary Shares"
    },
    {
    "Symbol":"TRTN",
    "Name":"Triton International Limited Common Shares"
    },
    {
    "Symbol":"TRTN^A",
    "Name":"Triton International Limited 8.50% Series A Cumulative Redeemable Perpetual  Preference Shares"
    },
    {
    "Symbol":"TRTN^B",
    "Name":"Triton International Limited 8.00% Series B Cumulative Redeemable Perpetual Preference Shares"
    },
    {
    "Symbol":"TRTN^C",
    "Name":"Triton International Limited 7.375% Series C Cumulative Redeemable Perpetual Preference Shares"
    },
    {
    "Symbol":"TRTN^D",
    "Name":"Triton International Limited 6.875% Series D Cumulative Redeemable Perpetual Preference Shares"
    },
    {
    "Symbol":"TRTN^E",
    "Name":"Triton International Limited 5.75% Series E Cumulative Redeemable Perpetual Preference Shares"
    },
    {
    "Symbol":"TRTX",
    "Name":"TPG RE Finance Trust Inc."
    },
    {
    "Symbol":"TRTX^C",
    "Name":"TPG RE Finance Trust Inc. 6.25% Series C Cumulative Redeemable Preferred Stock $0.001 par value per share"
    },
    {
    "Symbol":"TRU",
    "Name":"TransUnion"
    },
    {
    "Symbol":"TRUE",
    "Name":"TrueCar Inc."
    },
    {
    "Symbol":"TRUP",
    "Name":"Trupanion Inc."
    },
    {
    "Symbol":"TRV",
    "Name":"The Travelers Companies Inc."
    },
    {
    "Symbol":"TRVG",
    "Name":"trivago N.V. American Depositary Shares"
    },
    {
    "Symbol":"TRVI",
    "Name":"Trevi Therapeutics Inc."
    },
    {
    "Symbol":"TRVN",
    "Name":"Trevena Inc."
    },
    {
    "Symbol":"TRX",
    "Name":"Tanzanian Gold Corporation"
    },
    {
    "Symbol":"TS",
    "Name":"Tenaris S.A. American Depositary Shares"
    },
    {
    "Symbol":"TSAT",
    "Name":"Telesat Corporation Class A Common Shares and Class B Variable Voting Shares"
    },
    {
    "Symbol":"TSBK",
    "Name":"Timberland Bancorp Inc."
    },
    {
    "Symbol":"TSC",
    "Name":"TriState Capital Holdings Inc."
    },
    {
    "Symbol":"TSCAP",
    "Name":"TriState Capital Holdings Inc. Dep Shs Rep 1/40th Int 6.75% Srs A Non-Cum Pfd Stock"
    },
    {
    "Symbol":"TSCBP",
    "Name":"TriState Capital Holdings Inc. Depositary Share representing a 1/40th Interest in a Share of 6.375% Fixed-to-Floating Rate Series B Non-Cumulative Perpetual Preferred Stock"
    },
    {
    "Symbol":"TSCO",
    "Name":"Tractor Supply Company"
    },
    {
    "Symbol":"TSE",
    "Name":"Trinseo PLC Ordinary Shares"
    },
    {
    "Symbol":"TSEM",
    "Name":"Tower Semiconductor Ltd. Ordinary Shares"
    },
    {
    "Symbol":"TSHA",
    "Name":"Taysha Gene Therapies Inc."
    },
    {
    "Symbol":"TSI",
    "Name":"TCW Strategic Income Fund Inc."
    },
    {
    "Symbol":"TSIB",
    "Name":"Tishman Speyer Innovation Corp. II Class A"
    },
    {
    "Symbol":"TSIBU",
    "Name":"Tishman Speyer Innovation Corp. II Unit"
    },
    {
    "Symbol":"TSIBW",
    "Name":"Tishman Speyer Innovation Corp. II Warrant"
    },
    {
    "Symbol":"TSLA",
    "Name":"Tesla Inc."
    },
    {
    "Symbol":"TSLX",
    "Name":"Sixth Street Specialty Lending Inc."
    },
    {
    "Symbol":"TSM",
    "Name":"Taiwan Semiconductor Manufacturing Company Ltd."
    },
    {
    "Symbol":"TSN",
    "Name":"Tyson Foods Inc."
    },
    {
    "Symbol":"TSP",
    "Name":"TuSimple Holdings Inc. Class A"
    },
    {
    "Symbol":"TSPQ",
    "Name":"TCW Special Purpose Acquisition Corp. Class A"
    },
    {
    "Symbol":"TSQ",
    "Name":"Townsquare Media Inc. Class A"
    },
    {
    "Symbol":"TSRI",
    "Name":"TSR Inc."
    },
    {
    "Symbol":"TSVT",
    "Name":"2seventy bio Inc."
    },
    {
    "Symbol":"TT",
    "Name":"Trane Technologies plc"
    },
    {
    "Symbol":"TTC",
    "Name":"Toro Company (The)"
    },
    {
    "Symbol":"TTCF",
    "Name":"Tattooed Chef Inc Class A"
    },
    {
    "Symbol":"TTD",
    "Name":"The Trade Desk Inc. Class A"
    },
    {
    "Symbol":"TTE",
    "Name":"TotalEnergies SE"
    },
    {
    "Symbol":"TTEC",
    "Name":"TTEC Holdings Inc."
    },
    {
    "Symbol":"TTEK",
    "Name":"Tetra Tech Inc."
    },
    {
    "Symbol":"TTGT",
    "Name":"TechTarget Inc."
    },
    {
    "Symbol":"TTI",
    "Name":"Tetra Technologies Inc."
    },
    {
    "Symbol":"TTM",
    "Name":"Tata Motors Ltd Tata Motors Limited"
    },
    {
    "Symbol":"TTMI",
    "Name":"TTM Technologies Inc."
    },
    {
    "Symbol":"TTNP",
    "Name":"Titan Pharmaceuticals Inc."
    },
    {
    "Symbol":"TTOO",
    "Name":"T2 Biosystems Inc."
    },
    {
    "Symbol":"TTP",
    "Name":"Tortoise Pipeline & Energy Fund Inc."
    },
    {
    "Symbol":"TTSH",
    "Name":"Tile Shop Holdings Inc."
    },
    {
    "Symbol":"TTWO",
    "Name":"Take-Two Interactive Software Inc."
    },
    {
    "Symbol":"TU",
    "Name":"Telus Corporation Ordinary Shares"
    },
    {
    "Symbol":"TUEM",
    "Name":"Tuesday Morning Corp."
    },
    {
    "Symbol":"TUFN",
    "Name":"Tufin Software Technologies Ltd. Ordinary Shares"
    },
    {
    "Symbol":"TUGC",
    "Name":"TradeUP Global Corporation Class A Ordinary Shares"
    },
    {
    "Symbol":"TUGCU",
    "Name":"TradeUP Global Corporation Unit"
    },
    {
    "Symbol":"TUGCW",
    "Name":"TradeUP Global Corporation Warrant"
    },
    {
    "Symbol":"TUP",
    "Name":"Tupperware Brands Corporation"
    },
    {
    "Symbol":"TURN",
    "Name":"180 Degree Capital Corp."
    },
    {
    "Symbol":"TUSK",
    "Name":"Mammoth Energy Services Inc."
    },
    {
    "Symbol":"TUYA",
    "Name":"Tuya Inc. American Depositary Shares each representing one Class A Ordinary Share"
    },
    {
    "Symbol":"TV",
    "Name":"Grupo Televisa S.A."
    },
    {
    "Symbol":"TVAC",
    "Name":"Thayer Ventures Acquisition Corporation Class A"
    },
    {
    "Symbol":"TVACU",
    "Name":"Thayer Ventures Acquisition Corporation Units"
    },
    {
    "Symbol":"TVACW",
    "Name":"Thayer Ventures Acquisition Corporation Warrant"
    },
    {
    "Symbol":"TVC",
    "Name":"Tennessee Valley Authority"
    },
    {
    "Symbol":"TVE",
    "Name":"Tennessee Valley Authority"
    },
    {
    "Symbol":"TVTX",
    "Name":"Travere Therapeutics Inc."
    },
    {
    "Symbol":"TVTY",
    "Name":"Tivity Health Inc."
    },
    {
    "Symbol":"TW",
    "Name":"Tradeweb Markets Inc. Class A"
    },
    {
    "Symbol":"TWCB",
    "Name":"Bilander Acquisition Corp. Class A"
    },
    {
    "Symbol":"TWCBU",
    "Name":"Bilander Acquisition Corp. Unit"
    },
    {
    "Symbol":"TWCBW",
    "Name":"Bilander Acquisition Corp. Warrant"
    },
    {
    "Symbol":"TWI",
    "Name":"Titan International Inc. (DE)"
    },
    {
    "Symbol":"TWIN",
    "Name":"Twin Disc Incorporated"
    },
    {
    "Symbol":"TWKS",
    "Name":"Thoughtworks Holding Inc."
    },
    {
    "Symbol":"TWLO",
    "Name":"Twilio Inc. Class A"
    },
    {
    "Symbol":"TWLV",
    "Name":"Twelve Seas Investment Company II Class A"
    },
    {
    "Symbol":"TWLVU",
    "Name":"Twelve Seas Investment Company II Unit"
    },
    {
    "Symbol":"TWLVW",
    "Name":"Twelve Seas Investment Company II Warrant"
    },
    {
    "Symbol":"TWN",
    "Name":"Taiwan Fund Inc. (The)"
    },
    {
    "Symbol":"TWND",
    "Name":"Tailwind Acquisition Corp. Class A"
    },
    {
    "Symbol":"TWNI",
    "Name":"Tailwind International Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"TWNK",
    "Name":"Hostess Brands Inc. Class A"
    },
    {
    "Symbol":"TWNT",
    "Name":"Tailwind Two Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"TWO",
    "Name":"Two Harbors Investment Corp"
    },
    {
    "Symbol":"TWO^A",
    "Name":"Two Harbors Investments Corp 8.125% Series A Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock ($25.00 liquidation preference per share)"
    },
    {
    "Symbol":"TWO^B",
    "Name":"Two Harbors Investments Corp 7.625% Series B Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"TWO^C",
    "Name":"Two Harbors Investments Corp 7.25% Series C Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"TWOA",
    "Name":"two Class A Ordinary Shares"
    },
    {
    "Symbol":"TWOU",
    "Name":"2U Inc."
    },
    {
    "Symbol":"TWST",
    "Name":"Twist Bioscience Corporation"
    },
    {
    "Symbol":"TWTR",
    "Name":"Twitter Inc."
    },
    {
    "Symbol":"TX",
    "Name":"Ternium S.A. Ternium S.A. American Depositary Shares (each representing ten shares USD1.00 par value)"
    },
    {
    "Symbol":"TXG",
    "Name":"10x Genomics Inc. Class A"
    },
    {
    "Symbol":"TXMD",
    "Name":"TherapeuticsMD Inc."
    },
    {
    "Symbol":"TXN",
    "Name":"Texas Instruments Incorporated"
    },
    {
    "Symbol":"TXRH",
    "Name":"Texas Roadhouse Inc."
    },
    {
    "Symbol":"TXT",
    "Name":"Textron Inc."
    },
    {
    "Symbol":"TY",
    "Name":"Tri Continental Corporation"
    },
    {
    "Symbol":"TY^",
    "Name":"Tri Continental Corporation Preferred Stock"
    },
    {
    "Symbol":"TYG",
    "Name":"Tortoise Energy Infrastructure Corporation"
    },
    {
    "Symbol":"TYL",
    "Name":"Tyler Technologies Inc."
    },
    {
    "Symbol":"TYME",
    "Name":"Tyme Technologies Inc."
    },
    {
    "Symbol":"TYRA",
    "Name":"Tyra Biosciences Inc."
    },
    {
    "Symbol":"TZOO",
    "Name":"Travelzoo"
    },
    {
    "Symbol":"TZPS",
    "Name":"TZP Strategies Acquisition Corp. Class A Ordinary Share"
    },
    {
    "Symbol":"TZPSU",
    "Name":"TZP Strategies Acquisition Corp. Unit"
    },
    {
    "Symbol":"TZPSW",
    "Name":"TZP Strategies Acquisition Corp. Warrant"
    },
    {
    "Symbol":"U",
    "Name":"Unity Software Inc."
    },
    {
    "Symbol":"UA",
    "Name":"Under Armour Inc. Class C"
    },
    {
    "Symbol":"UAA",
    "Name":"Under Armour Inc. Class A"
    },
    {
    "Symbol":"UAL",
    "Name":"United Airlines Holdings Inc."
    },
    {
    "Symbol":"UAMY",
    "Name":"United States Antimony Corporation"
    },
    {
    "Symbol":"UAN",
    "Name":"CVR Partners LP Common Units representing Limited Partner Interests"
    },
    {
    "Symbol":"UAVS",
    "Name":"AgEagle Aerial Systems Inc."
    },
    {
    "Symbol":"UBA",
    "Name":"Urstadt Biddle Properties Inc."
    },
    {
    "Symbol":"UBCP",
    "Name":"United Bancorp Inc."
    },
    {
    "Symbol":"UBER",
    "Name":"Uber Technologies Inc."
    },
    {
    "Symbol":"UBFO",
    "Name":"United Security Bancshares"
    },
    {
    "Symbol":"UBOH",
    "Name":"United Bancshares Inc."
    },
    {
    "Symbol":"UBP",
    "Name":"Urstadt Biddle Properties Inc."
    },
    {
    "Symbol":"UBP^H",
    "Name":"Urstadt Biddle Properties Inc. 6.250% Series H Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"UBP^K",
    "Name":"Urstadt Biddle Properties Inc. 5.875% Series K Cumulative Redeemable Preferred Stock"
    },
    {
    "Symbol":"UBS",
    "Name":"UBS Group AG Registered Ordinary Shares"
    },
    {
    "Symbol":"UBSI",
    "Name":"United Bankshares Inc."
    },
    {
    "Symbol":"UBX",
    "Name":"Unity Biotechnology Inc."
    },
    {
    "Symbol":"UCBI",
    "Name":"United Community Banks Inc."
    },
    {
    "Symbol":"UCBIO",
    "Name":"United Community Banks Inc. Depositary Shares each representing 1/1000th interest in a share of Series I Non-CumulativePreferred Stock"
    },
    {
    "Symbol":"UCL",
    "Name":"uCloudlink Group Inc. American Depositary Shares"
    },
    {
    "Symbol":"UCTT",
    "Name":"Ultra Clean Holdings Inc."
    },
    {
    "Symbol":"UDMY",
    "Name":"Udemy Inc."
    },
    {
    "Symbol":"UDR",
    "Name":"UDR Inc."
    },
    {
    "Symbol":"UE",
    "Name":"Urban Edge Properties Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"UEC",
    "Name":"Uranium Energy Corp."
    },
    {
    "Symbol":"UEIC",
    "Name":"Universal Electronics Inc."
    },
    {
    "Symbol":"UEPS",
    "Name":"Net 1 UEPS Technologies Inc."
    },
    {
    "Symbol":"UFAB",
    "Name":"Unique Fabricating Inc."
    },
    {
    "Symbol":"UFCS",
    "Name":"United Fire Group Inc."
    },
    {
    "Symbol":"UFI",
    "Name":"Unifi Inc. New"
    },
    {
    "Symbol":"UFPI",
    "Name":"UFP Industries Inc."
    },
    {
    "Symbol":"UFPT",
    "Name":"UFP Technologies Inc."
    },
    {
    "Symbol":"UG",
    "Name":"United-Guardian Inc."
    },
    {
    "Symbol":"UGI",
    "Name":"UGI Corporation"
    },
    {
    "Symbol":"UGIC",
    "Name":"UGI Corporation Corporate Units"
    },
    {
    "Symbol":"UGP",
    "Name":"Ultrapar Participacoes S.A. (New) American Depositary Shares (Each representing one Common Share)"
    },
    {
    "Symbol":"UGRO",
    "Name":"urban-gro Inc."
    },
    {
    "Symbol":"UHAL",
    "Name":"Amerco"
    },
    {
    "Symbol":"UHS",
    "Name":"Universal Health Services Inc."
    },
    {
    "Symbol":"UHT",
    "Name":"Universal Health Realty Income Trust"
    },
    {
    "Symbol":"UI",
    "Name":"Ubiquiti Inc."
    },
    {
    "Symbol":"UIHC",
    "Name":"United Insurance Holdings Corp."
    },
    {
    "Symbol":"UIS",
    "Name":"Unisys Corporation New"
    },
    {
    "Symbol":"UK",
    "Name":"Ucommune International Ltd Ordinary Shares"
    },
    {
    "Symbol":"UKOMW",
    "Name":"Ucommune International Ltd Warrant expiring 11/17/2025"
    },
    {
    "Symbol":"UL",
    "Name":"Unilever PLC"
    },
    {
    "Symbol":"ULBI",
    "Name":"Ultralife Corporation"
    },
    {
    "Symbol":"ULCC",
    "Name":"Frontier Group Holdings Inc."
    },
    {
    "Symbol":"ULH",
    "Name":"Universal Logistics Holdings Inc."
    },
    {
    "Symbol":"ULTA",
    "Name":"Ulta Beauty Inc."
    },
    {
    "Symbol":"UMBF",
    "Name":"UMB Financial Corporation"
    },
    {
    "Symbol":"UMC",
    "Name":"United Microelectronics Corporation (NEW)"
    },
    {
    "Symbol":"UMH",
    "Name":"UMH Properties Inc."
    },
    {
    "Symbol":"UMH^C",
    "Name":"UMH Properties Inc. 6.75% Series C Cumulative Redeemable Preferred Stock  Liquidation Preference $25 per share"
    },
    {
    "Symbol":"UMH^D",
    "Name":"UMH Properties Inc. 6.375% Series D Cumulative Redeemable Preferred Stock Liquidation Preference $25 per share"
    },
    {
    "Symbol":"UMPQ",
    "Name":"Umpqua Holdings Corporation"
    },
    {
    "Symbol":"UNAM",
    "Name":"Unico American Corporation"
    },
    {
    "Symbol":"UNB",
    "Name":"Union Bankshares Inc."
    },
    {
    "Symbol":"UNCY",
    "Name":"Unicycive Therapeutics Inc."
    },
    {
    "Symbol":"UNF",
    "Name":"Unifirst Corporation"
    },
    {
    "Symbol":"UNFI",
    "Name":"United Natural Foods Inc."
    },
    {
    "Symbol":"UNH",
    "Name":"UnitedHealth Group Incorporated   (DE)"
    },
    {
    "Symbol":"UNIT",
    "Name":"Uniti Group Inc."
    },
    {
    "Symbol":"UNM",
    "Name":"Unum Group"
    },
    {
    "Symbol":"UNMA",
    "Name":"Unum Group 6.250% Junior Subordinated Notes due 2058"
    },
    {
    "Symbol":"UNP",
    "Name":"Union Pacific Corporation"
    },
    {
    "Symbol":"UNTY",
    "Name":"Unity Bancorp Inc."
    },
    {
    "Symbol":"UNVR",
    "Name":"Univar Solutions Inc."
    },
    {
    "Symbol":"UONE",
    "Name":"Urban One Inc. Class A"
    },
    {
    "Symbol":"UONEK",
    "Name":"Urban One Inc. Class D"
    },
    {
    "Symbol":"UP",
    "Name":"Wheels Up Experience Inc. Class A"
    },
    {
    "Symbol":"UPC",
    "Name":"Universe Pharmaceuticals Inc. Ordinary Shares"
    },
    {
    "Symbol":"UPH",
    "Name":"UpHealth Inc."
    },
    {
    "Symbol":"UPLD",
    "Name":"Upland Software Inc."
    },
    {
    "Symbol":"UPS",
    "Name":"United Parcel Service Inc."
    },
    {
    "Symbol":"UPST",
    "Name":"Upstart Holdings Inc."
    },
    {
    "Symbol":"UPTD",
    "Name":"TradeUP Acquisition Corp."
    },
    {
    "Symbol":"UPTDU",
    "Name":"TradeUP Acquisition Corp. Unit"
    },
    {
    "Symbol":"UPTDW",
    "Name":"TradeUP Acquisition Corp. Warrant"
    },
    {
    "Symbol":"UPWK",
    "Name":"Upwork Inc."
    },
    {
    "Symbol":"URBN",
    "Name":"Urban Outfitters Inc."
    },
    {
    "Symbol":"URG",
    "Name":"Ur Energy Inc Common Shares (Canada)"
    },
    {
    "Symbol":"URGN",
    "Name":"UroGen Pharma Ltd. Ordinary Shares"
    },
    {
    "Symbol":"URI",
    "Name":"United Rentals Inc."
    },
    {
    "Symbol":"UROY",
    "Name":"Uranium Royalty Corp."
    },
    {
    "Symbol":"USA",
    "Name":"Liberty All-Star Equity Fund"
    },
    {
    "Symbol":"USAC",
    "Name":"USA Compression Partners LP Common Units Representing Limited Partner Interests"
    },
    {
    "Symbol":"USAK",
    "Name":"USA Truck Inc."
    },
    {
    "Symbol":"USAP",
    "Name":"Universal Stainless & Alloy Products Inc."
    },
    {
    "Symbol":"USAS",
    "Name":"Americas Gold and Silver Corporation Common Shares no par value"
    },
    {
    "Symbol":"USAU",
    "Name":"U.S. Gold Corp."
    },
    {
    "Symbol":"USB",
    "Name":"U.S. Bancorp"
    },
    {
    "Symbol":"USB^A",
    "Name":"U.S. Bancorp Depositary Shares Each representing a 1/100th interest in a share of Series A Non-CumulativePerpetual Pfd Stock"
    },
    {
    "Symbol":"USB^H",
    "Name":"U.S. Bancorp Depositary Shares repstg 1/1000th Pfd Ser B"
    },
    {
    "Symbol":"USB^P",
    "Name":"U.S. Bancorp Depositary Shares each representing a 1/1000th interest in a share of Series K Non-Cumulative Perpetual Preferred Stock"
    },
    {
    "Symbol":"USB^Q",
    "Name":"U.S. Bancorp Depositary Shares Each Representing a 1/1000th Interest in a Share of Series L Non-Cumulative Perpetual Preferred Stock"
    },
    {
    "Symbol":"USB^R",
    "Name":"U.S. Bancorp Depositary Shares Each Representing a 1/1000th Interest in a Share of Series M Non-Cumulative Perpetual Preferred Stock"
    },
    {
    "Symbol":"USCB",
    "Name":"USCB Financial Holdings Inc. Class A"
    },
    {
    "Symbol":"USCT",
    "Name":"TKB Critical Technologies 1 Class A Ordinary Shares"
    },
    {
    "Symbol":"USCTU",
    "Name":"TKB Critical Technologies 1 Unit"
    },
    {
    "Symbol":"USCTW",
    "Name":"TKB Critical Technologies 1 Warrant"
    },
    {
    "Symbol":"USDP",
    "Name":"USD Partners LP Common Units representing limited partner interest"
    },
    {
    "Symbol":"USEG",
    "Name":"U.S. Energy Corp."
    },
    {
    "Symbol":"USER",
    "Name":"UserTesting Inc."
    },
    {
    "Symbol":"USFD",
    "Name":"US Foods Holding Corp."
    },
    {
    "Symbol":"USIO",
    "Name":"Usio Inc."
    },
    {
    "Symbol":"USLM",
    "Name":"United States Lime & Minerals Inc."
    },
    {
    "Symbol":"USM",
    "Name":"United States Cellular Corporation"
    },
    {
    "Symbol":"USNA",
    "Name":"USANA Health Sciences Inc."
    },
    {
    "Symbol":"USPH",
    "Name":"U.S. Physical Therapy Inc."
    },
    {
    "Symbol":"USWS",
    "Name":"U.S. Well Services Inc. Class A"
    },
    {
    "Symbol":"USWSW",
    "Name":"U.S. Well Services Inc. Warrants"
    },
    {
    "Symbol":"USX",
    "Name":"U.S. Xpress Enterprises Inc. Class A"
    },
    {
    "Symbol":"UTAA",
    "Name":"UTA Acquisition Corporation Class A Ordinary Shares"
    },
    {
    "Symbol":"UTAAU",
    "Name":"UTA Acquisition Corporation Units"
    },
    {
    "Symbol":"UTAAW",
    "Name":"UTA Acquisition Corporation Warrants"
    },
    {
    "Symbol":"UTF",
    "Name":"Cohen & Steers Infrastructure Fund Inc"
    },
    {
    "Symbol":"UTG",
    "Name":"Reaves Utility Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"UTHR",
    "Name":"United Therapeutics Corporation"
    },
    {
    "Symbol":"UTI",
    "Name":"Universal Technical Institute Inc"
    },
    {
    "Symbol":"UTL",
    "Name":"UNITIL Corporation"
    },
    {
    "Symbol":"UTMD",
    "Name":"Utah Medical Products Inc."
    },
    {
    "Symbol":"UTME",
    "Name":"UTime Limited Ordinary Shares"
    },
    {
    "Symbol":"UTRS",
    "Name":"Minerva Surgical Inc."
    },
    {
    "Symbol":"UTSI",
    "Name":"UTStarcom Holdings Corp."
    },
    {
    "Symbol":"UTZ",
    "Name":"Utz Brands Inc Class A"
    },
    {
    "Symbol":"UUU",
    "Name":"Universal Security Instruments Inc."
    },
    {
    "Symbol":"UUUU",
    "Name":"Energy Fuels Inc Ordinary Shares (Canada)"
    },
    {
    "Symbol":"UVE",
    "Name":"UNIVERSAL INSURANCE HOLDINGS INC"
    },
    {
    "Symbol":"UVSP",
    "Name":"Univest Financial Corporation"
    },
    {
    "Symbol":"UVV",
    "Name":"Universal Corporation"
    },
    {
    "Symbol":"UWMC",
    "Name":"UWM Holdings Corporation Class A"
    },
    {
    "Symbol":"UXIN",
    "Name":"Uxin Limited ADS"
    },
    {
    "Symbol":"UZD",
    "Name":"United States Cellular Corporation 6.250% Senior Notes due 2069"
    },
    {
    "Symbol":"UZE",
    "Name":"United States Cellular Corporation 5.500% Senior Notes due 2070"
    },
    {
    "Symbol":"UZF",
    "Name":"United States Cellular Corporation 5.500% Senior Notes due 2070"
    },
    {
    "Symbol":"V",
    "Name":"Visa Inc."
    },
    {
    "Symbol":"VABK",
    "Name":"Virginia National Bankshares Corporation"
    },
    {
    "Symbol":"VAC",
    "Name":"Marriott Vacations Worldwide Corporation"
    },
    {
    "Symbol":"VACC",
    "Name":"Vaccitech plc American Depositary Shares"
    },
    {
    "Symbol":"VAL",
    "Name":"Valaris Limited Common Shares"
    },
    {
    "Symbol":"VALE",
    "Name":"VALE S.A.  American Depositary Shares Each Representing one common share"
    },
    {
    "Symbol":"VALN",
    "Name":"Valneva SE American Depositary Shares"
    },
    {
    "Symbol":"VALU",
    "Name":"Value Line Inc."
    },
    {
    "Symbol":"VAPO",
    "Name":"Vapotherm Inc."
    },
    {
    "Symbol":"VAQC",
    "Name":"Vector Acquisition Corporation II Class A Ordinary Shares"
    },
    {
    "Symbol":"VATE",
    "Name":"INNOVATE Corp."
    },
    {
    "Symbol":"VAXX",
    "Name":"Vaxxinity Inc. Class A"
    },
    {
    "Symbol":"VBF",
    "Name":"Invesco Bond Fund"
    },
    {
    "Symbol":"VBFC",
    "Name":"Village Bank and Trust Financial Corp."
    },
    {
    "Symbol":"VBIV",
    "Name":"VBI Vaccines Inc. New   (Canada)"
    },
    {
    "Symbol":"VBLT",
    "Name":"Vascular Biogenics Ltd. Ordinary Shares"
    },
    {
    "Symbol":"VBNK",
    "Name":"VersaBank Common Shares"
    },
    {
    "Symbol":"VBOCU",
    "Name":"Viscogliosi Brothers Acquisition Corp Unit"
    },
    {
    "Symbol":"VBTX",
    "Name":"Veritex Holdings Inc."
    },
    {
    "Symbol":"VC",
    "Name":"Visteon Corporation"
    },
    {
    "Symbol":"VCEL",
    "Name":"Vericel Corporation"
    },
    {
    "Symbol":"VCF",
    "Name":"Delaware Investments Colorado Municipal Income Fund Inc "
    },
    {
    "Symbol":"VCIF",
    "Name":"Vertical Capital Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"VCKA",
    "Name":"Vickers Vantage Corp. I Ordinary Shares"
    },
    {
    "Symbol":"VCKAU",
    "Name":"Vickers Vantage Corp. I Unit"
    },
    {
    "Symbol":"VCKAW",
    "Name":"Vickers Vantage Corp. I Warrant"
    },
    {
    "Symbol":"VCNX",
    "Name":"Vaccinex Inc."
    },
    {
    "Symbol":"VCRA",
    "Name":"Vocera Communications Inc."
    },
    {
    "Symbol":"VCSA",
    "Name":"Vacasa Inc. Class A"
    },
    {
    "Symbol":"VCTR",
    "Name":"Victory Capital Holdings Inc. Class A"
    },
    {
    "Symbol":"VCV",
    "Name":"Invesco California Value Municipal Income Trust"
    },
    {
    "Symbol":"VCXA",
    "Name":"10X Capital Venture Acquisition Corp. II Class A Ordinary Share"
    },
    {
    "Symbol":"VCXAU",
    "Name":"10X Capital Venture Acquisition Corp. II Unit"
    },
    {
    "Symbol":"VCXAW",
    "Name":"10X Capital Venture Acquisition Corp. II Warrant"
    },
    {
    "Symbol":"VCYT",
    "Name":"Veracyte Inc."
    },
    {
    "Symbol":"VEC",
    "Name":"Vectrus Inc."
    },
    {
    "Symbol":"VECO",
    "Name":"Veeco Instruments Inc."
    },
    {
    "Symbol":"VECT",
    "Name":"VectivBio Holding AG Ordinary Shares"
    },
    {
    "Symbol":"VEEE",
    "Name":"Twin Vee PowerCats Co."
    },
    {
    "Symbol":"VEEV",
    "Name":"Veeva Systems Inc. Class A"
    },
    {
    "Symbol":"VEL",
    "Name":"Velocity Financial Inc."
    },
    {
    "Symbol":"VELO",
    "Name":"Velocity Acquisition Corp. Class A"
    },
    {
    "Symbol":"VELOW",
    "Name":"Velocity Acquisition Corp. Warrant"
    },
    {
    "Symbol":"VENA",
    "Name":"Venus Acquisition Corporation Ordinary Shares"
    },
    {
    "Symbol":"VENAR",
    "Name":"Venus Acquisition Corporation Rights"
    },
    {
    "Symbol":"VENAU",
    "Name":"Venus Acquisition Corporation Units"
    },
    {
    "Symbol":"VENAW",
    "Name":"Venus Acquisition Corporation Warrant"
    },
    {
    "Symbol":"VEON",
    "Name":"VEON Ltd. ADS"
    },
    {
    "Symbol":"VERA",
    "Name":"Vera Therapeutics Inc. Class A"
    },
    {
    "Symbol":"VERB",
    "Name":"Verb Technology Company Inc."
    },
    {
    "Symbol":"VERBW",
    "Name":"Verb Technology Company Inc. Warrant"
    },
    {
    "Symbol":"VERI",
    "Name":"Veritone Inc."
    },
    {
    "Symbol":"VERO",
    "Name":"Venus Concept Inc."
    },
    {
    "Symbol":"VERU",
    "Name":"Veru Inc."
    },
    {
    "Symbol":"VERV",
    "Name":"Verve Therapeutics Inc."
    },
    {
    "Symbol":"VERX",
    "Name":"Vertex Inc. Class A"
    },
    {
    "Symbol":"VERY",
    "Name":"Vericity Inc."
    },
    {
    "Symbol":"VET",
    "Name":"Vermilion Energy Inc. Common (Canada)"
    },
    {
    "Symbol":"VEV",
    "Name":"Vicinity Motor Corp."
    },
    {
    "Symbol":"VFC",
    "Name":"V.F. Corporation"
    },
    {
    "Symbol":"VFF",
    "Name":"Village Farms International Inc. Common Shares"
    },
    {
    "Symbol":"VFL",
    "Name":"Delaware Investments National Municipal Income Fund"
    },
    {
    "Symbol":"VG",
    "Name":"Vonage Holdings Corp."
    },
    {
    "Symbol":"VGFC",
    "Name":"The Very Good Food Company Inc. Common Shares"
    },
    {
    "Symbol":"VGI",
    "Name":"Virtus Global Multi-Sector Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"VGII",
    "Name":"Virgin Group Acquisition Corp. II Class A Ordinary Shares"
    },
    {
    "Symbol":"VGM",
    "Name":"Invesco Trust for Investment Grade Municipals   (DE)"
    },
    {
    "Symbol":"VGR",
    "Name":"Vector Group Ltd."
    },
    {
    "Symbol":"VGZ",
    "Name":"Vista Gold Corp"
    },
    {
    "Symbol":"VHAQ",
    "Name":"Viveon Health Acquisition Corp."
    },
    {
    "Symbol":"VHC",
    "Name":"VirnetX Holding Corp"
    },
    {
    "Symbol":"VHI",
    "Name":"Valhi Inc."
    },
    {
    "Symbol":"VHNA",
    "Name":"Vahanna Tech Edge Acquisition I Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"VHNAU",
    "Name":"Vahanna Tech Edge Acquisition I Corp. Units"
    },
    {
    "Symbol":"VHNAW",
    "Name":"Vahanna Tech Edge Acquisition I Corp. Warrants"
    },
    {
    "Symbol":"VIA",
    "Name":"Via Renewables Inc. Class A"
    },
    {
    "Symbol":"VIAC",
    "Name":"ViacomCBS Inc. Class B"
    },
    {
    "Symbol":"VIACA",
    "Name":"ViacomCBS Inc. Class A"
    },
    {
    "Symbol":"VIACP",
    "Name":"ViacomCBS Inc. 5.75% Series A Mandatory Convertible Preferred Stock"
    },
    {
    "Symbol":"VIAO",
    "Name":"VIA optronics AG American Depositary Shares each representing one-fifth of an Ordinary Share"
    },
    {
    "Symbol":"VIASP",
    "Name":"Via Renewables Inc. 8.75% Series A Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Stock"
    },
    {
    "Symbol":"VIAV",
    "Name":"Viavi Solutions Inc."
    },
    {
    "Symbol":"VICI",
    "Name":"VICI Properties Inc."
    },
    {
    "Symbol":"VICR",
    "Name":"Vicor Corporation"
    },
    {
    "Symbol":"VIEW",
    "Name":"View Inc. Class A"
    },
    {
    "Symbol":"VIEWW",
    "Name":"View Inc. Warrant"
    },
    {
    "Symbol":"VIGL",
    "Name":"Vigil Neuroscience Inc."
    },
    {
    "Symbol":"VII",
    "Name":"7GC & Co. Holdings Inc. Class A"
    },
    {
    "Symbol":"VIIAU",
    "Name":"7GC & Co. Holdings Inc. Unit"
    },
    {
    "Symbol":"VIIAW",
    "Name":"7GC & Co. Holdings Inc. Warrant"
    },
    {
    "Symbol":"VINC",
    "Name":"Vincerx Pharma Inc."
    },
    {
    "Symbol":"VINE",
    "Name":"Fresh Vine Wine Inc."
    },
    {
    "Symbol":"VINO",
    "Name":"Gaucho Group Holdings Inc."
    },
    {
    "Symbol":"VINP",
    "Name":"Vinci Partners Investments Ltd. Class A Common Shares"
    },
    {
    "Symbol":"VIOT",
    "Name":"Viomi Technology Co. Ltd American Depositary Shares"
    },
    {
    "Symbol":"VIPS",
    "Name":"Vipshop Holdings Limited American Depositary Shares each representing two ordinary shares"
    },
    {
    "Symbol":"VIR",
    "Name":"Vir Biotechnology Inc."
    },
    {
    "Symbol":"VIRC",
    "Name":"Virco Manufacturing Corporation"
    },
    {
    "Symbol":"VIRI",
    "Name":"Virios Therapeutics Inc."
    },
    {
    "Symbol":"VIRT",
    "Name":"Virtu Financial Inc. Class A"
    },
    {
    "Symbol":"VIRX",
    "Name":"Viracta Therapeutics Inc."
    },
    {
    "Symbol":"VISL",
    "Name":"Vislink Technologies Inc."
    },
    {
    "Symbol":"VIST",
    "Name":"Vista Oil & Gas S.A.B. de C.V. American Depositary Shares each representing one series A share with no par value"
    },
    {
    "Symbol":"VITL",
    "Name":"Vital Farms Inc."
    },
    {
    "Symbol":"VIV",
    "Name":"Telefonica Brasil S.A. American Depositary Shares (Each representing One Common Share)"
    },
    {
    "Symbol":"VIVE",
    "Name":"Viveve Medical Inc."
    },
    {
    "Symbol":"VIVO",
    "Name":"Meridian Bioscience Inc."
    },
    {
    "Symbol":"VJET",
    "Name":"voxeljet AG American Depositary Shares"
    },
    {
    "Symbol":"VKI",
    "Name":"Invesco Advantage Municipal Income Trust II Common Shares of Beneficial Interest (DE)"
    },
    {
    "Symbol":"VKQ",
    "Name":"Invesco Municipal Trust"
    },
    {
    "Symbol":"VKTX",
    "Name":"Viking Therapeutics Inc."
    },
    {
    "Symbol":"VLAT",
    "Name":"Valor Latitude Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"VLATW",
    "Name":"Valor Latitude Acquisition Corp. Warrant"
    },
    {
    "Symbol":"VLCN",
    "Name":"Volcon Inc."
    },
    {
    "Symbol":"VLD",
    "Name":"Velo3D Inc."
    },
    {
    "Symbol":"VLDR",
    "Name":"Velodyne Lidar Inc."
    },
    {
    "Symbol":"VLDRW",
    "Name":"Velodyne Lidar Inc. Warrants"
    },
    {
    "Symbol":"VLGEA",
    "Name":"Village Super Market Inc. Class A"
    },
    {
    "Symbol":"VLN",
    "Name":"Valens Semiconductor Ltd. Ordinary Shares"
    },
    {
    "Symbol":"VLNS",
    "Name":"The Valens Company Inc. Common Shares"
    },
    {
    "Symbol":"VLO",
    "Name":"Valero Energy Corporation"
    },
    {
    "Symbol":"VLON",
    "Name":"Vallon Pharmaceuticals Inc."
    },
    {
    "Symbol":"VLRS",
    "Name":"Controladora Vuela Compania de Aviacion S.A.B. de C.V. American Depositary Shares each representing ten (10) Ordinary Participation Certificates"
    },
    {
    "Symbol":"VLT",
    "Name":"Invesco High Income Trust II"
    },
    {
    "Symbol":"VLTA",
    "Name":"Volta Inc. Class A"
    },
    {
    "Symbol":"VLY",
    "Name":"Valley National Bancorp"
    },
    {
    "Symbol":"VLYPO",
    "Name":"Valley National Bancorp 5.50% Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series B"
    },
    {
    "Symbol":"VLYPP",
    "Name":"Valley National Bancorp 6.25% Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series A"
    },
    {
    "Symbol":"VMAC",
    "Name":"Vistas Media Acquisition Company Inc. Class A"
    },
    {
    "Symbol":"VMACU",
    "Name":"Vistas Media Acquisition Company Inc. Unit"
    },
    {
    "Symbol":"VMACW",
    "Name":"Vistas Media Acquisition Company Inc. Warrant"
    },
    {
    "Symbol":"VMAR",
    "Name":"Vision Marine Technologies Inc. Common Shares"
    },
    {
    "Symbol":"VMC",
    "Name":"Vulcan Materials Company (Holding Company)"
    },
    {
    "Symbol":"VMD",
    "Name":"Viemed Healthcare Inc. Common Shares"
    },
    {
    "Symbol":"VMEO",
    "Name":"Vimeo Inc."
    },
    {
    "Symbol":"VMGA",
    "Name":"VMG Consumer Acquisition Corp. Class A"
    },
    {
    "Symbol":"VMGAU",
    "Name":"VMG Consumer Acquisition Corp. Unit"
    },
    {
    "Symbol":"VMGAW",
    "Name":"VMG Consumer Acquisition Corp. Warrant"
    },
    {
    "Symbol":"VMI",
    "Name":"Valmont Industries Inc."
    },
    {
    "Symbol":"VMM",
    "Name":"Delaware Investments Minnesota Municipal Income Fund II Inc."
    },
    {
    "Symbol":"VMO",
    "Name":"Invesco Municipal Opportunity Trust"
    },
    {
    "Symbol":"VMW",
    "Name":"Vmware Inc.   Class A"
    },
    {
    "Symbol":"VNCE",
    "Name":"Vince Holding Corp."
    },
    {
    "Symbol":"VNDA",
    "Name":"Vanda Pharmaceuticals Inc."
    },
    {
    "Symbol":"VNE",
    "Name":"Veoneer Inc."
    },
    {
    "Symbol":"VNET",
    "Name":"VNET Group Inc. American Depositary Shares"
    },
    {
    "Symbol":"VNO",
    "Name":"Vornado Realty Trust"
    },
    {
    "Symbol":"VNO^L",
    "Name":"Vornado Realty Trust Pfd Ser L %"
    },
    {
    "Symbol":"VNO^M",
    "Name":"Vornado Realty Trust 5.25% Series M Cumulative Redeemable Preferred Shares of Beneficial Interest liquidation preference $25.00 per share no par value per share"
    },
    {
    "Symbol":"VNO^N",
    "Name":"Vornado Realty Trust 5.25% Series N Cumulative Redeemable Preferred Shares of Beneficial Interest liquidation preference $25.00 per share"
    },
    {
    "Symbol":"VNO^O",
    "Name":"Vornado Realty Trust 4.45% Series O Cumulative Redeemable Preferred Shares Liquidation Preference $25.00 Per Share"
    },
    {
    "Symbol":"VNOM",
    "Name":"Viper Energy Partners LP Common Unit"
    },
    {
    "Symbol":"VNRX",
    "Name":"VolitionRX Limited"
    },
    {
    "Symbol":"VNT",
    "Name":"Vontier Corporation"
    },
    {
    "Symbol":"VNTR",
    "Name":"Venator Materials PLC Ordinary Shares"
    },
    {
    "Symbol":"VOC",
    "Name":"VOC Energy Trust Units of Beneficial Interest"
    },
    {
    "Symbol":"VOD",
    "Name":"Vodafone Group Plc American Depositary Shares"
    },
    {
    "Symbol":"VOLT",
    "Name":"Volt Information Sciences Inc."
    },
    {
    "Symbol":"VOR",
    "Name":"Vor Biopharma Inc."
    },
    {
    "Symbol":"VORB",
    "Name":"Virgin Orbit Holdings Inc."
    },
    {
    "Symbol":"VORBW",
    "Name":"Virgin Orbit Holdings Inc. Warrant"
    },
    {
    "Symbol":"VOXX",
    "Name":"VOXX International Corporation Class A"
    },
    {
    "Symbol":"VOYA",
    "Name":"Voya Financial Inc."
    },
    {
    "Symbol":"VOYA^B",
    "Name":"Voya Financial Inc. Depositary Shares each representing a 1/40th interest in a share of 5.35% Fixed-Rate Reset Non-Cumulative Preferred Stock Series B"
    },
    {
    "Symbol":"VPCB",
    "Name":"VPC Impact Acquisition Holdings II Class A ordinary shre"
    },
    {
    "Symbol":"VPCBU",
    "Name":"VPC Impact Acquisition Holdings II Unit"
    },
    {
    "Symbol":"VPCBW",
    "Name":"VPC Impact Acquisition Holdings II Warrant"
    },
    {
    "Symbol":"VPG",
    "Name":"Vishay Precision Group Inc."
    },
    {
    "Symbol":"VPV",
    "Name":"Invesco Pennsylvania Value Municipal Income Trust   (DE)"
    },
    {
    "Symbol":"VQS",
    "Name":"VIQ Solutions Inc. Common Shares"
    },
    {
    "Symbol":"VRA",
    "Name":"Vera Bradley Inc."
    },
    {
    "Symbol":"VRAR",
    "Name":"The Glimpse Group Inc."
    },
    {
    "Symbol":"VRAY",
    "Name":"ViewRay Inc."
    },
    {
    "Symbol":"VRCA",
    "Name":"Verrica Pharmaceuticals Inc."
    },
    {
    "Symbol":"VRDN",
    "Name":"Viridian Therapeutics Inc."
    },
    {
    "Symbol":"VRE",
    "Name":"Veris Residential Inc."
    },
    {
    "Symbol":"VREX",
    "Name":"Varex Imaging Corporation"
    },
    {
    "Symbol":"VRM",
    "Name":"Vroom Inc."
    },
    {
    "Symbol":"VRME",
    "Name":"VerifyMe Inc."
    },
    {
    "Symbol":"VRMEW",
    "Name":"VerifyMe Inc. Warrant"
    },
    {
    "Symbol":"VRNA",
    "Name":"Verona Pharma plc American Depositary Share"
    },
    {
    "Symbol":"VRNS",
    "Name":"Varonis Systems Inc."
    },
    {
    "Symbol":"VRNT",
    "Name":"Verint Systems Inc."
    },
    {
    "Symbol":"VRPX",
    "Name":"Virpax Pharmaceuticals Inc."
    },
    {
    "Symbol":"VRRM",
    "Name":"Verra Mobility Corporation Class A"
    },
    {
    "Symbol":"VRS",
    "Name":"Verso Corporation"
    },
    {
    "Symbol":"VRSK",
    "Name":"Verisk Analytics Inc."
    },
    {
    "Symbol":"VRSN",
    "Name":"VeriSign Inc."
    },
    {
    "Symbol":"VRT",
    "Name":"Vertiv Holdings LLC Class A"
    },
    {
    "Symbol":"VRTS",
    "Name":"Virtus Investment Partners Inc."
    },
    {
    "Symbol":"VRTV",
    "Name":"Veritiv Corporation"
    },
    {
    "Symbol":"VRTX",
    "Name":"Vertex Pharmaceuticals Incorporated"
    },
    {
    "Symbol":"VS",
    "Name":"Versus Systems Inc. Common Shares"
    },
    {
    "Symbol":"VSAC",
    "Name":"Vision Sensing Acquisition Corp. Class A"
    },
    {
    "Symbol":"VSACU",
    "Name":"Vision Sensing Acquisition Corp. Unit"
    },
    {
    "Symbol":"VSACW",
    "Name":"Vision Sensing Acquisition Corp. Warrants"
    },
    {
    "Symbol":"VSAT",
    "Name":"ViaSat Inc."
    },
    {
    "Symbol":"VSCO",
    "Name":"Victorias Secret & Co."
    },
    {
    "Symbol":"VSEC",
    "Name":"VSE Corporation"
    },
    {
    "Symbol":"VSH",
    "Name":"Vishay Intertechnology Inc."
    },
    {
    "Symbol":"VST",
    "Name":"Vistra Corp."
    },
    {
    "Symbol":"VSTA",
    "Name":"Vasta Platform Limited Class A Ordinary Shares"
    },
    {
    "Symbol":"VSTM",
    "Name":"Verastem Inc."
    },
    {
    "Symbol":"VSTO",
    "Name":"Vista Outdoor Inc."
    },
    {
    "Symbol":"VTAQ",
    "Name":"Ventoux CCM Acquisition Corp."
    },
    {
    "Symbol":"VTAQR",
    "Name":"Ventoux CCM Acquisition Corp. Right"
    },
    {
    "Symbol":"VTAQU",
    "Name":"Ventoux CCM Acquisition Corp. Unit"
    },
    {
    "Symbol":"VTAQW",
    "Name":"Ventoux CCM Acquisition Corp. Warrant"
    },
    {
    "Symbol":"VTEX",
    "Name":"VTEX Class A Common Shares"
    },
    {
    "Symbol":"VTGN",
    "Name":"VistaGen Therapeutics Inc."
    },
    {
    "Symbol":"VTIQ",
    "Name":"VectoIQ Acquisition Corp. II Class A"
    },
    {
    "Symbol":"VTIQU",
    "Name":"VectoIQ Acquisition Corp. II Unit"
    },
    {
    "Symbol":"VTIQW",
    "Name":"VectoIQ Acquisition Corp. II Warrant"
    },
    {
    "Symbol":"VTN",
    "Name":"Invesco Trust for Investment Grade New York Municipals"
    },
    {
    "Symbol":"VTNR",
    "Name":"Vertex Energy Inc"
    },
    {
    "Symbol":"VTOL",
    "Name":"Bristow Group Inc."
    },
    {
    "Symbol":"VTR",
    "Name":"Ventas Inc."
    },
    {
    "Symbol":"VTRS",
    "Name":"Viatris Inc."
    },
    {
    "Symbol":"VTRU",
    "Name":"Vitru Limited Common Shares"
    },
    {
    "Symbol":"VTSI",
    "Name":"VirTra Inc."
    },
    {
    "Symbol":"VTVT",
    "Name":"vTv Therapeutics Inc. Class A"
    },
    {
    "Symbol":"VTYX",
    "Name":"Ventyx Biosciences Inc."
    },
    {
    "Symbol":"VUZI",
    "Name":"Vuzix Corporation"
    },
    {
    "Symbol":"VVI",
    "Name":"Viad Corp"
    },
    {
    "Symbol":"VVNT",
    "Name":"Vivint Smart Home Inc."
    },
    {
    "Symbol":"VVOS",
    "Name":"Vivos Therapeutics Inc."
    },
    {
    "Symbol":"VVPR",
    "Name":"VivoPower International PLC Ordinary Shares"
    },
    {
    "Symbol":"VVR",
    "Name":"Invesco Senior Income Trust   (DE)"
    },
    {
    "Symbol":"VVV",
    "Name":"Valvoline Inc."
    },
    {
    "Symbol":"VWE",
    "Name":"Vintage Wine Estates Inc."
    },
    {
    "Symbol":"VWEWW",
    "Name":"Vintage Wine Estates Inc. Warrants"
    },
    {
    "Symbol":"VWTR",
    "Name":"Vidler Water Resources Inc."
    },
    {
    "Symbol":"VXRT",
    "Name":"Vaxart Inc"
    },
    {
    "Symbol":"VYGG",
    "Name":"Vy Global Growth Class A Ordinary Shares"
    },
    {
    "Symbol":"VYGR",
    "Name":"Voyager Therapeutics Inc."
    },
    {
    "Symbol":"VYNE",
    "Name":"VYNE Therapeutics Inc."
    },
    {
    "Symbol":"VYNT",
    "Name":"Vyant Bio Inc."
    },
    {
    "Symbol":"VZ",
    "Name":"Verizon Communications Inc."
    },
    {
    "Symbol":"VZIO",
    "Name":"VIZIO Holding Corp. Class A"
    },
    {
    "Symbol":"VZLA",
    "Name":"Vizsla Silver Corp. Common Shares"
    },
    {
    "Symbol":"W",
    "Name":"Wayfair Inc. Class A"
    },
    {
    "Symbol":"WAB",
    "Name":"Westinghouse Air Brake Technologies Corporation"
    },
    {
    "Symbol":"WABC",
    "Name":"Westamerica Bancorporation"
    },
    {
    "Symbol":"WAFD",
    "Name":"Washington Federal Inc."
    },
    {
    "Symbol":"WAFDP",
    "Name":"Washington Federal Inc. Depositary Shares"
    },
    {
    "Symbol":"WAFU",
    "Name":"Wah Fu Education Group Limited Ordinary Shares"
    },
    {
    "Symbol":"WAL",
    "Name":"Western Alliance Bancorporation   (DE)"
    },
    {
    "Symbol":"WAL^A",
    "Name":"Western Alliance Bancorporation Depositary Shares Each Representing a 1/400th Interest in a Share of 4.250% Fixed-Rate Non-Cumulative Perpetual Preferred Stock Series A"
    },
    {
    "Symbol":"WALD",
    "Name":"Waldencast Acquisition Corp. Class A Ordinary Share"
    },
    {
    "Symbol":"WALDU",
    "Name":"Waldencast Acquisition Corp. Units"
    },
    {
    "Symbol":"WALDW",
    "Name":"Waldencast Acquisition Corp. Warrant"
    },
    {
    "Symbol":"WARR",
    "Name":"Warrior Technologies Acquisition Company Class A"
    },
    {
    "Symbol":"WASH",
    "Name":"Washington Trust Bancorp Inc."
    },
    {
    "Symbol":"WAT",
    "Name":"Waters Corporation"
    },
    {
    "Symbol":"WATT",
    "Name":"Energous Corporation"
    },
    {
    "Symbol":"WAVD",
    "Name":"WaveDancer Inc."
    },
    {
    "Symbol":"WAVE",
    "Name":"Eco Wave Power Global AB (publ) American Depositary Shares"
    },
    {
    "Symbol":"WAVSU",
    "Name":"Western Acquisition Ventures Corp. Unit"
    },
    {
    "Symbol":"WB",
    "Name":"Weibo Corporation American Depositary Share"
    },
    {
    "Symbol":"WBA",
    "Name":"Walgreens Boots Alliance Inc."
    },
    {
    "Symbol":"WBEV",
    "Name":"Winc Inc."
    },
    {
    "Symbol":"WBK",
    "Name":"Westpac Banking Corporation"
    },
    {
    "Symbol":"WBS",
    "Name":"Webster Financial Corporation"
    },
    {
    "Symbol":"WBS^F",
    "Name":"Webster Financial Corporation Depositary Shares Each Representing 1/1000th Interest in a Share of 5.25% Series F Non-Cumulative Perpetual Preferred Stock"
    },
    {
    "Symbol":"WBT",
    "Name":"Welbilt Inc."
    },
    {
    "Symbol":"WBX",
    "Name":"Wallbox N.V. Class A Ordinary Shares"
    },
    {
    "Symbol":"WCC",
    "Name":"WESCO International Inc."
    },
    {
    "Symbol":"WCC^A",
    "Name":"WESCO International Inc. Depositary Shares each representing 1/1000th interest in a share of Series A Fixed-Rate Reset Cumulative Perpetual Preferred Stock"
    },
    {
    "Symbol":"WCN",
    "Name":"Waste Connections Inc. Common Shares"
    },
    {
    "Symbol":"WD",
    "Name":"Walker & Dunlop Inc"
    },
    {
    "Symbol":"WDAY",
    "Name":"Workday Inc. Class A"
    },
    {
    "Symbol":"WDC",
    "Name":"Western Digital Corporation"
    },
    {
    "Symbol":"WDFC",
    "Name":"WD-40 Company"
    },
    {
    "Symbol":"WDH",
    "Name":"Waterdrop Inc. American Depositary Shares (each representing the right to receive 10 Class A Ordinary Shares)"
    },
    {
    "Symbol":"WDI",
    "Name":"Western Asset Diversified Income Fund Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"WE",
    "Name":"WeWork Inc. Class A"
    },
    {
    "Symbol":"WEA",
    "Name":"Western Asset Bond Fund Share of Beneficial Interest"
    },
    {
    "Symbol":"WEAV",
    "Name":"Weave Communications Inc."
    },
    {
    "Symbol":"WEBR",
    "Name":"Weber Inc. Class A"
    },
    {
    "Symbol":"WEC",
    "Name":"WEC Energy Group Inc."
    },
    {
    "Symbol":"WEI",
    "Name":"Weidai Ltd. American depositary shares each  representing one (1) Class A ordinary share"
    },
    {
    "Symbol":"WEJO",
    "Name":"Wejo Group Limited Common Shares"
    },
    {
    "Symbol":"WEJOW",
    "Name":"Wejo Group Limited Warrant"
    },
    {
    "Symbol":"WEL",
    "Name":"Integrated Wellness Acquisition Corp Class A Ordinary Shares"
    },
    {
    "Symbol":"WELL",
    "Name":"Welltower Inc."
    },
    {
    "Symbol":"WEN",
    "Name":"Wendy's Company (The)"
    },
    {
    "Symbol":"WERN",
    "Name":"Werner Enterprises Inc."
    },
    {
    "Symbol":"WES",
    "Name":"Western Midstream Partners LP Common Units Representing Limited Partner Interests"
    },
    {
    "Symbol":"WETF",
    "Name":"WisdomTree Investments Inc."
    },
    {
    "Symbol":"WEX",
    "Name":"WEX Inc."
    },
    {
    "Symbol":"WEYS",
    "Name":"Weyco Group Inc."
    },
    {
    "Symbol":"WF",
    "Name":"Woori Financial Group Inc. American Depositary Shares (each representing three (3) shares of  )"
    },
    {
    "Symbol":"WFC",
    "Name":"Wells Fargo & Company"
    },
    {
    "Symbol":"WFC^A",
    "Name":"Wells Fargo & Company Depositary Shares each representing a 1/1000th interest in a share of Non-Cumulative Perpetual Class A Preferred Stock Series AA"
    },
    {
    "Symbol":"WFC^C",
    "Name":"Wells Fargo & Company Depositary Shares each representing a 1/1000th interest in a share of Non-Cumulative Perpetual Class A Preferred Stock Series CC"
    },
    {
    "Symbol":"WFC^D",
    "Name":"Wells Fargo & Company Depositary Shares each representing a 1/1000th interest in  a share of Non-Cumulative Perpetual Class A Preferred Stock Series DD"
    },
    {
    "Symbol":"WFC^L",
    "Name":"Wells Fargo & Company Wells Fargo & Company 7.50% Non-Cumulative Perpetual Convertible Class A Preferred Stock Series L"
    },
    {
    "Symbol":"WFC^Q",
    "Name":"Wells Fargo & Company Depositary Shares Representing 1/1000th Interest Perpetual Preferred Class A Series Q Fixed to Floating"
    },
    {
    "Symbol":"WFC^R",
    "Name":"Wells Fargo & Company Dep Shs Repstg 1/1000th Int Perp Pfd Cl A (Ser R Fixed To Flltg)"
    },
    {
    "Symbol":"WFC^Y",
    "Name":"Wells Fargo & Company Depositary Shares each representing a 1/1000th interest in a share of Non-Cumulative Perpetual Class A Preferred Stock Series Y"
    },
    {
    "Symbol":"WFC^Z",
    "Name":"Wells Fargo & Company Depositary Shares each representing a 1/1000th interest in a share of Non-Cumulative Perpetual Class A Preferred Stock Series Z"
    },
    {
    "Symbol":"WFCF",
    "Name":"Where Food Comes From Inc."
    },
    {
    "Symbol":"WFG",
    "Name":"West Fraser Timber Co. Ltd"
    },
    {
    "Symbol":"WFRD",
    "Name":"Weatherford International plc Ordinary Shares"
    },
    {
    "Symbol":"WGO",
    "Name":"Winnebago Industries Inc."
    },
    {
    "Symbol":"WH",
    "Name":"Wyndham Hotels & Resorts Inc."
    },
    {
    "Symbol":"WHD",
    "Name":"Cactus Inc. Class A"
    },
    {
    "Symbol":"WHF",
    "Name":"WhiteHorse Finance Inc."
    },
    {
    "Symbol":"WHG",
    "Name":"Westwood Holdings Group Inc"
    },
    {
    "Symbol":"WHLM",
    "Name":"Wilhelmina International Inc."
    },
    {
    "Symbol":"WHLR",
    "Name":"Wheeler Real Estate Investment Trust Inc."
    },
    {
    "Symbol":"WHLRD",
    "Name":"Wheeler Real Estate Investment Trust Inc. Series D Cumulative Preferred Stock"
    },
    {
    "Symbol":"WHLRL",
    "Name":"Wheeler Real Estate Investment Trust Inc. 7.00% Senior Subordinated Convertible Notes Due 2031"
    },
    {
    "Symbol":"WHLRP",
    "Name":"Wheeler Real Estate Investment Trust Inc. Class B Preferred Stock"
    },
    {
    "Symbol":"WHR",
    "Name":"Whirlpool Corporation"
    },
    {
    "Symbol":"WIA",
    "Name":"Western Asset Inflation-Linked Income Fund"
    },
    {
    "Symbol":"WILC",
    "Name":"G. Willi-Food International  Ltd. Ordinary Shares"
    },
    {
    "Symbol":"WIMI",
    "Name":"WiMi Hologram Cloud Inc. American Depositary Share"
    },
    {
    "Symbol":"WINA",
    "Name":"Winmark Corporation"
    },
    {
    "Symbol":"WING",
    "Name":"Wingstop Inc."
    },
    {
    "Symbol":"WINT",
    "Name":"Windtree Therapeutics Inc."
    },
    {
    "Symbol":"WINV",
    "Name":"WinVest Acquisition Corp."
    },
    {
    "Symbol":"WINVR",
    "Name":"WinVest Acquisition Corp. Right"
    },
    {
    "Symbol":"WINVU",
    "Name":"WinVest Acquisition Corp. Unit"
    },
    {
    "Symbol":"WINVW",
    "Name":"WinVest Acquisition Corp. Warrant"
    },
    {
    "Symbol":"WIRE",
    "Name":"Encore Wire Corporation"
    },
    {
    "Symbol":"WISA",
    "Name":"Summit Wireless Technologies Inc."
    },
    {
    "Symbol":"WISH",
    "Name":"ContextLogic Inc. Class A"
    },
    {
    "Symbol":"WIT",
    "Name":"Wipro Limited"
    },
    {
    "Symbol":"WIW",
    "Name":"Western Asset Inflation-Linked Opportunities & Income Fund"
    },
    {
    "Symbol":"WIX",
    "Name":"Wix.com Ltd. Ordinary Shares"
    },
    {
    "Symbol":"WK",
    "Name":"Workiva Inc. Class A"
    },
    {
    "Symbol":"WKEY",
    "Name":"WISeKey International Holding AG American Depositary Shares"
    },
    {
    "Symbol":"WKHS",
    "Name":"Workhorse Group Inc."
    },
    {
    "Symbol":"WKME",
    "Name":"WalkMe Ltd. Ordinary Shares"
    },
    {
    "Symbol":"WKSP",
    "Name":"Worksport Ltd."
    },
    {
    "Symbol":"WKSPW",
    "Name":"Worksport Ltd. Warrant"
    },
    {
    "Symbol":"WLDN",
    "Name":"Willdan Group Inc."
    },
    {
    "Symbol":"WLFC",
    "Name":"Willis Lease Finance Corporation"
    },
    {
    "Symbol":"WLK",
    "Name":"Westlake Chemical Corporation"
    },
    {
    "Symbol":"WLKP",
    "Name":"Westlake Chemical Partners LP Common Units representing limited partner interests"
    },
    {
    "Symbol":"WLL",
    "Name":"Whiting Petroleum Corporation   (New)"
    },
    {
    "Symbol":"WLMS",
    "Name":"Williams Industrial Services Group Inc."
    },
    {
    "Symbol":"WM",
    "Name":"Waste Management Inc."
    },
    {
    "Symbol":"WMB",
    "Name":"Williams Companies Inc. (The)"
    },
    {
    "Symbol":"WMC",
    "Name":"Western Asset Mortgage Capital Corporation"
    },
    {
    "Symbol":"WMG",
    "Name":"Warner Music Group Corp. Class A"
    },
    {
    "Symbol":"WMK",
    "Name":"Weis Markets Inc."
    },
    {
    "Symbol":"WMPN",
    "Name":"William Penn Bancorporation"
    },
    {
    "Symbol":"WMS",
    "Name":"Advanced Drainage Systems Inc."
    },
    {
    "Symbol":"WMT",
    "Name":"Walmart Inc."
    },
    {
    "Symbol":"WNC",
    "Name":"Wabash National Corporation"
    },
    {
    "Symbol":"WNEB",
    "Name":"Western New England Bancorp Inc."
    },
    {
    "Symbol":"WNS",
    "Name":"WNS (Holdings) Limited Sponsored ADR (Jersey)"
    },
    {
    "Symbol":"WNW",
    "Name":"Meiwu Technology Company Limited Ordinary Shares"
    },
    {
    "Symbol":"WOLF",
    "Name":"Wolfspeed Inc."
    },
    {
    "Symbol":"WOOF",
    "Name":"Petco Health and Wellness Company Inc. Class A"
    },
    {
    "Symbol":"WOR",
    "Name":"Worthington Industries Inc."
    },
    {
    "Symbol":"WORX",
    "Name":"SCWorx Corp."
    },
    {
    "Symbol":"WOW",
    "Name":"WideOpenWest Inc."
    },
    {
    "Symbol":"WPC",
    "Name":"W. P. Carey Inc. REIT"
    },
    {
    "Symbol":"WPCA",
    "Name":"Warburg Pincus Capital Corporation IA Class A Ordinary Shares"
    },
    {
    "Symbol":"WPCB",
    "Name":"Warburg Pincus Capital Corporation IB Class A Ordinary Shares"
    },
    {
    "Symbol":"WPM",
    "Name":"Wheaton Precious Metals Corp Common Shares (Canada)"
    },
    {
    "Symbol":"WPP",
    "Name":"WPP plc American Depositary Shares"
    },
    {
    "Symbol":"WPRT",
    "Name":"Westport Fuel Systems Inc Common Shares"
    },
    {
    "Symbol":"WQGA",
    "Name":"World Quantum Growth Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"WRAC",
    "Name":"Williams Rowland Acquisition Corp."
    },
    {
    "Symbol":"WRAP",
    "Name":"Wrap Technologies Inc."
    },
    {
    "Symbol":"WRB",
    "Name":"W.R. Berkley Corporation"
    },
    {
    "Symbol":"WRB^E",
    "Name":"W.R. Berkley Corporation 5.70% Subordinated Debentures due 2058"
    },
    {
    "Symbol":"WRB^F",
    "Name":"W.R. Berkley Corporation 5.10% Subordinated Debentures due 2059"
    },
    {
    "Symbol":"WRB^G",
    "Name":"W.R. Berkley Corporation 4.25% Subordinated Debentures due 2060"
    },
    {
    "Symbol":"WRB^H",
    "Name":"W.R. Berkley Corporation 4.125% Subordinated Debentures due 2061"
    },
    {
    "Symbol":"WRBY",
    "Name":"Warby Parker Inc. Class A"
    },
    {
    "Symbol":"WRE",
    "Name":"Washington Real Estate Investment Trust"
    },
    {
    "Symbol":"WRK",
    "Name":"Westrock Company"
    },
    {
    "Symbol":"WRLD",
    "Name":"World Acceptance Corporation"
    },
    {
    "Symbol":"WRN",
    "Name":"Western Copper and Gold Corporation"
    },
    {
    "Symbol":"WSBC",
    "Name":"WesBanco Inc."
    },
    {
    "Symbol":"WSBCP",
    "Name":"WesBanco Inc. Depositary Shares Each Representing a 1/40th Interest in a Share of 6.75% Fixed-Rate Reset Non-Cumulative Perpetual Preferred Stock Series A"
    },
    {
    "Symbol":"WSBF",
    "Name":"Waterstone Financial Inc.   (MD)"
    },
    {
    "Symbol":"WSC",
    "Name":"WillScot Mobile Mini Holdings Corp. Class A"
    },
    {
    "Symbol":"WSFS",
    "Name":"WSFS Financial Corporation"
    },
    {
    "Symbol":"WSM",
    "Name":"Williams-Sonoma Inc.   (DE)"
    },
    {
    "Symbol":"WSO",
    "Name":"Watsco Inc."
    },
    {
    "Symbol":"WSO/B",
    "Name":"Watsco Inc."
    },
    {
    "Symbol":"WSR",
    "Name":"Whitestone REIT Common Shares"
    },
    {
    "Symbol":"WST",
    "Name":"West Pharmaceutical Services Inc."
    },
    {
    "Symbol":"WSTG",
    "Name":"Wayside Technology Group Inc."
    },
    {
    "Symbol":"WTBA",
    "Name":"West Bancorporation"
    },
    {
    "Symbol":"WTER",
    "Name":"The Alkaline Water Company Inc."
    },
    {
    "Symbol":"WTFC",
    "Name":"Wintrust Financial Corporation"
    },
    {
    "Symbol":"WTFCM",
    "Name":"Wintrust Financial Corporation Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series D"
    },
    {
    "Symbol":"WTFCP",
    "Name":"Wintrust Financial Corporation Depositary Shares Each Representing a 1/1000th Interest in a Share of 6.875% Fixed-Rate Reset Non-Cumulative Perpetual Preferred Stock Series E"
    },
    {
    "Symbol":"WTI",
    "Name":"W&T Offshore Inc."
    },
    {
    "Symbol":"WTM",
    "Name":"White Mountains Insurance Group Ltd."
    },
    {
    "Symbol":"WTMA",
    "Name":"Welsbach Technology Metals Acquisition Corp."
    },
    {
    "Symbol":"WTMAR",
    "Name":"Welsbach Technology Metals Acquisition Corp. one right to receive 1/10th of a share of"
    },
    {
    "Symbol":"WTMAU",
    "Name":"Welsbach Technology Metals Acquisition Corp. Unit"
    },
    {
    "Symbol":"WTRG",
    "Name":"Essential Utilities Inc."
    },
    {
    "Symbol":"WTRH",
    "Name":"Waitr Holdings Inc."
    },
    {
    "Symbol":"WTRU",
    "Name":"Essential Utilities Inc. 6.00% TEU"
    },
    {
    "Symbol":"WTS",
    "Name":"Watts Water Technologies Inc. Class A"
    },
    {
    "Symbol":"WTT",
    "Name":"Wireless Telecom Group  Inc."
    },
    {
    "Symbol":"WTTR",
    "Name":"Select Energy Services Inc. Class A"
    },
    {
    "Symbol":"WTW",
    "Name":"Willis Towers Watson Public Limited Company Ordinary Shares"
    },
    {
    "Symbol":"WU",
    "Name":"Western Union Company (The)"
    },
    {
    "Symbol":"WULF",
    "Name":"TeraWulf Inc."
    },
    {
    "Symbol":"WVE",
    "Name":"Wave Life Sciences Ltd. Ordinary Shares"
    },
    {
    "Symbol":"WVFC",
    "Name":"WVS Financial Corp."
    },
    {
    "Symbol":"WVVI",
    "Name":"Willamette Valley Vineyards Inc."
    },
    {
    "Symbol":"WVVIP",
    "Name":"Willamette Valley Vineyards Inc. Series A Redeemable Preferred Stock"
    },
    {
    "Symbol":"WW",
    "Name":"WW International Inc."
    },
    {
    "Symbol":"WWAC",
    "Name":"Worldwide Webb Acquisition Corp. Class A Ordinary Share"
    },
    {
    "Symbol":"WWACU",
    "Name":"Worldwide Webb Acquisition Corp. Unit"
    },
    {
    "Symbol":"WWD",
    "Name":"Woodward Inc."
    },
    {
    "Symbol":"WWE",
    "Name":"World Wrestling Entertainment Inc. Class A"
    },
    {
    "Symbol":"WWR",
    "Name":"Westwater Resources Inc."
    },
    {
    "Symbol":"WWW",
    "Name":"Wolverine World Wide Inc."
    },
    {
    "Symbol":"WY",
    "Name":"Weyerhaeuser Company"
    },
    {
    "Symbol":"WYNN",
    "Name":"Wynn Resorts Limited"
    },
    {
    "Symbol":"WYY",
    "Name":"WidePoint Corporation"
    },
    {
    "Symbol":"X",
    "Name":"United States Steel Corporation"
    },
    {
    "Symbol":"XAIR",
    "Name":"Beyond Air Inc."
    },
    {
    "Symbol":"XBIO",
    "Name":"Xenetic Biosciences Inc."
    },
    {
    "Symbol":"XBIOW",
    "Name":"Xenetic Biosciences Inc. Warrants"
    },
    {
    "Symbol":"XBIT",
    "Name":"XBiotech Inc."
    },
    {
    "Symbol":"XCUR",
    "Name":"Exicure Inc."
    },
    {
    "Symbol":"XEL",
    "Name":"Xcel Energy Inc."
    },
    {
    "Symbol":"XELA",
    "Name":"Exela Technologies Inc."
    },
    {
    "Symbol":"XELB",
    "Name":"Xcel Brands Inc."
    },
    {
    "Symbol":"XENE",
    "Name":"Xenon Pharmaceuticals Inc. Common Shares"
    },
    {
    "Symbol":"XENT",
    "Name":"Intersect ENT Inc."
    },
    {
    "Symbol":"XERS",
    "Name":"Xeris Biopharma Holdings Inc."
    },
    {
    "Symbol":"XFIN",
    "Name":"ExcelFin Acquisition Corp Class A"
    },
    {
    "Symbol":"XFINU",
    "Name":"ExcelFin Acquisition Corp Unit"
    },
    {
    "Symbol":"XFINW",
    "Name":"ExcelFin Acquisition Corp Warrant"
    },
    {
    "Symbol":"XFLT",
    "Name":"XAI Octagon Floating Rate & Alternative Income Term Trust Common Shares of Beneficial Interest"
    },
    {
    "Symbol":"XFLT^A",
    "Name":"XAI Octagon Floating Rate & Alternative Income Term Trust 6.50% Series 2026 Term Preferred Shares (Liquidation Preference $25.00)"
    },
    {
    "Symbol":"XFOR",
    "Name":"X4 Pharmaceuticals Inc."
    },
    {
    "Symbol":"XGN",
    "Name":"Exagen Inc."
    },
    {
    "Symbol":"XHR",
    "Name":"Xenia Hotels & Resorts Inc."
    },
    {
    "Symbol":"XIN",
    "Name":"Xinyuan Real Estate Co Ltd American Depositary Shares"
    },
    {
    "Symbol":"XL",
    "Name":"XL Fleet Corp. Class A"
    },
    {
    "Symbol":"XLNX",
    "Name":"Xilinx Inc."
    },
    {
    "Symbol":"XLO",
    "Name":"Xilio Therapeutics Inc."
    },
    {
    "Symbol":"XM",
    "Name":"Qualtrics International Inc. Class A"
    },
    {
    "Symbol":"XMTR",
    "Name":"Xometry Inc. Class A"
    },
    {
    "Symbol":"XNCR",
    "Name":"Xencor Inc."
    },
    {
    "Symbol":"XNET",
    "Name":"Xunlei Limited American Depositary Shares"
    },
    {
    "Symbol":"XOM",
    "Name":"Exxon Mobil Corporation"
    },
    {
    "Symbol":"XOMA",
    "Name":"XOMA Corporation"
    },
    {
    "Symbol":"XOMAO",
    "Name":"XOMA Corporation Depositary Shares Rep Series B 8.375% Cumulative Preferred Stock"
    },
    {
    "Symbol":"XOMAP",
    "Name":"XOMA Corporation 8.625% Series A Cumulative Perpetual Preferred Stock"
    },
    {
    "Symbol":"XOS",
    "Name":"Xos Inc."
    },
    {
    "Symbol":"XOSWW",
    "Name":"Xos Inc. Warrants"
    },
    {
    "Symbol":"XP",
    "Name":"XP Inc. Class A"
    },
    {
    "Symbol":"XPAX",
    "Name":"XPAC Acquisition Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"XPAXU",
    "Name":"XPAC Acquisition Corp. Unit"
    },
    {
    "Symbol":"XPAXW",
    "Name":"XPAC Acquisition Corp. Warrant"
    },
    {
    "Symbol":"XPDBU",
    "Name":"Power & Digital Infrastructure Acquisition II Corp. Unit"
    },
    {
    "Symbol":"XPEL",
    "Name":"XPEL Inc."
    },
    {
    "Symbol":"XPER",
    "Name":"Xperi Holding Corporation"
    },
    {
    "Symbol":"XPEV",
    "Name":"XPeng Inc. American depositary shares each representing two Class A ordinary shares"
    },
    {
    "Symbol":"XPL",
    "Name":"Solitario Zinc Corp."
    },
    {
    "Symbol":"XPO",
    "Name":"XPO Logistics Inc."
    },
    {
    "Symbol":"XPOA",
    "Name":"DPCM Capital Inc. Class A"
    },
    {
    "Symbol":"XPOF",
    "Name":"Xponential Fitness Inc. Class A"
    },
    {
    "Symbol":"XPRO",
    "Name":"Expro Group Holdings N.V."
    },
    {
    "Symbol":"XRAY",
    "Name":"DENTSPLY SIRONA Inc."
    },
    {
    "Symbol":"XRTX",
    "Name":"XORTX Therapeutics Inc."
    },
    {
    "Symbol":"XRX",
    "Name":"Xerox Holdings Corporation"
    },
    {
    "Symbol":"XSPA",
    "Name":"XpresSpa Group Inc."
    },
    {
    "Symbol":"XTLB",
    "Name":"XTL Biopharmaceuticals Ltd. American Depositary Shares"
    },
    {
    "Symbol":"XTNT",
    "Name":"Xtant Medical Holdings Inc."
    },
    {
    "Symbol":"XXII",
    "Name":"22nd Century Group Inc."
    },
    {
    "Symbol":"XYF",
    "Name":"X Financial American Depositary Shares each representing six Class A Ordinary Shares"
    },
    {
    "Symbol":"XYL",
    "Name":"Xylem Inc.   New"
    },
    {
    "Symbol":"Y",
    "Name":"Alleghany Corporation"
    },
    {
    "Symbol":"YALA",
    "Name":"Yalla Group Limited American Depositary Shares each representing one Class A Ordinary Share"
    },
    {
    "Symbol":"YCBD",
    "Name":"cbdMD Inc."
    },
    {
    "Symbol":"YCBD^A",
    "Name":"cbdMD Inc. 8.0% Series A Cumulative Convertible Preferred Stock"
    },
    {
    "Symbol":"YELL",
    "Name":"Yellow Corporation"
    },
    {
    "Symbol":"YELP",
    "Name":"Yelp Inc."
    },
    {
    "Symbol":"YETI",
    "Name":"YETI Holdings Inc."
    },
    {
    "Symbol":"YEXT",
    "Name":"Yext Inc."
    },
    {
    "Symbol":"YGMZ",
    "Name":"MingZhu Logistics Holdings Limited Ordinary Shares"
    },
    {
    "Symbol":"YI",
    "Name":"111 Inc. American Depositary Shares"
    },
    {
    "Symbol":"YJ",
    "Name":"Yunji Inc. American Depository Shares"
    },
    {
    "Symbol":"YMAB",
    "Name":"Y-mAbs Therapeutics Inc."
    },
    {
    "Symbol":"YMM",
    "Name":"Full Truck Alliance Co. Ltd. American Depositary Shares (each representing 20 Class A Ordinary Shares)"
    },
    {
    "Symbol":"YMTX",
    "Name":"Yumanity Therapeutics Inc."
    },
    {
    "Symbol":"YNDX",
    "Name":"Yandex N.V. Class A Ordinary Shares"
    },
    {
    "Symbol":"YORW",
    "Name":"York Water Company (The)"
    },
    {
    "Symbol":"YOU",
    "Name":"Clear Secure Inc. Class A"
    },
    {
    "Symbol":"YPF",
    "Name":"YPF Sociedad Anonima"
    },
    {
    "Symbol":"YQ",
    "Name":"17 Education & Technology Group Inc. American Depositary Shares"
    },
    {
    "Symbol":"YRD",
    "Name":"Yiren Digital Ltd. American Depositary Shares each representing two ordinary shares"
    },
    {
    "Symbol":"YSG",
    "Name":"Yatsen Holding Limited American Depositary Shares each representing four Class A ordinary shares"
    },
    {
    "Symbol":"YTEN",
    "Name":"Yield10 Bioscience Inc."
    },
    {
    "Symbol":"YTPG",
    "Name":"TPG Pace Beneficial II Corp. Class A Ordinary Shares"
    },
    {
    "Symbol":"YTRA",
    "Name":"Yatra Online Inc. Ordinary Shares"
    },
    {
    "Symbol":"YUM",
    "Name":"Yum! Brands Inc."
    },
    {
    "Symbol":"YUMC",
    "Name":"Yum China Holdings Inc."
    },
    {
    "Symbol":"YVR",
    "Name":"Liquid Media Group Ltd. Common Shares"
    },
    {
    "Symbol":"YY",
    "Name":"JOYY Inc. American Depositary Shares"
    },
    {
    "Symbol":"Z",
    "Name":"Zillow Group Inc. Class C Capital Stock"
    },
    {
    "Symbol":"ZBH",
    "Name":"Zimmer Biomet Holdings Inc."
    },
    {
    "Symbol":"ZBRA",
    "Name":"Zebra Technologies Corporation Class A"
    },
    {
    "Symbol":"ZCMD",
    "Name":"Zhongchao Inc. Class A Ordinary Shares"
    },
    {
    "Symbol":"ZD",
    "Name":"Ziff Davis Inc."
    },
    {
    "Symbol":"ZDGE",
    "Name":"Zedge Inc. Class B"
    },
    {
    "Symbol":"ZEAL",
    "Name":"Zealand Pharma A/S American Depositary Shares"
    },
    {
    "Symbol":"ZEN",
    "Name":"Zendesk Inc."
    },
    {
    "Symbol":"ZENV",
    "Name":"Zenvia Inc. Class A"
    },
    {
    "Symbol":"ZEPP",
    "Name":"Zepp Health Corporation American Depositary Shares"
    },
    {
    "Symbol":"ZEST",
    "Name":"Ecoark Holdings Inc."
    },
    {
    "Symbol":"ZETA",
    "Name":"Zeta Global Holdings Corp. Class A"
    },
    {
    "Symbol":"ZEUS",
    "Name":"Olympic Steel Inc."
    },
    {
    "Symbol":"ZEV",
    "Name":"Lightning eMotors Inc"
    },
    {
    "Symbol":"ZG",
    "Name":"Zillow Group Inc. Class A"
    },
    {
    "Symbol":"ZGN",
    "Name":"Ermenegildo Zegna N.V. Ordinary Shares"
    },
    {
    "Symbol":"ZGNX",
    "Name":"Zogenix Inc."
    },
    {
    "Symbol":"ZH",
    "Name":"Zhihu Inc. American Depositary Shares (every two of each representing one Class A ordinary share)"
    },
    {
    "Symbol":"ZI",
    "Name":"ZoomInfo Technologies Inc Class A"
    },
    {
    "Symbol":"ZIM",
    "Name":"ZIM Integrated Shipping Services Ltd. Ordinary Shares"
    },
    {
    "Symbol":"ZING",
    "Name":"FTAC Zeus Acquisition Corp. Class A"
    },
    {
    "Symbol":"ZINGU",
    "Name":"FTAC Zeus Acquisition Corp. Unit"
    },
    {
    "Symbol":"ZINGW",
    "Name":"FTAC Zeus Acquisition Corp. Warrant"
    },
    {
    "Symbol":"ZION",
    "Name":"Zions Bancorporation N.A."
    },
    {
    "Symbol":"ZIONL",
    "Name":"Zions Bancorporation 6.95% Fixed-to-Floating Rate Subordinated Notes"
    },
    {
    "Symbol":"ZIONO",
    "Name":"Zions Bancorporation N.A. Dep Shs Repstg 1/40th Perp Pfd Ser G"
    },
    {
    "Symbol":"ZIONP",
    "Name":"Zions Bancorporation N.A. Depositary Shares (Each representing 1/40th Interest in a Share of Series A Floating-Rate Non-Cumulative Perpetual Preferred Stock)"
    },
    {
    "Symbol":"ZIOP",
    "Name":"ZIOPHARM Oncology Inc"
    },
    {
    "Symbol":"ZIP",
    "Name":"ZipRecruiter Inc. Class A"
    },
    {
    "Symbol":"ZIVO",
    "Name":"Zivo Bioscience Inc."
    },
    {
    "Symbol":"ZIVOW",
    "Name":"Zivo Bioscience Inc. Warrants"
    },
    {
    "Symbol":"ZKIN",
    "Name":"ZK International Group Co. Ltd Ordinary Share"
    },
    {
    "Symbol":"ZLAB",
    "Name":"Zai Lab Limited American Depositary Shares"
    },
    {
    "Symbol":"ZM",
    "Name":"Zoom Video Communications Inc. Class A"
    },
    {
    "Symbol":"ZME",
    "Name":"Zhangmen Education Inc. American Depositary Shares"
    },
    {
    "Symbol":"ZNGA",
    "Name":"Zynga Inc. Class A"
    },
    {
    "Symbol":"ZNH",
    "Name":"China Southern Airlines Company Limited"
    },
    {
    "Symbol":"ZNTE",
    "Name":"Zanite Acquisition Corp. Class A"
    },
    {
    "Symbol":"ZNTEU",
    "Name":"Zanite Acquisition Corp. Unit"
    },
    {
    "Symbol":"ZNTEW",
    "Name":"Zanite Acquisition Corp. Warrant"
    },
    {
    "Symbol":"ZNTL",
    "Name":"Zentalis Pharmaceuticals Inc."
    },
    {
    "Symbol":"ZOM",
    "Name":"Zomedica Corp. Common Shares"
    },
    {
    "Symbol":"ZS",
    "Name":"Zscaler Inc."
    },
    {
    "Symbol":"ZSAN",
    "Name":"Zosano Pharma Corporation"
    },
    {
    "Symbol":"ZT",
    "Name":"Zimmer Energy Transition Acquisition Corp. Class A"
    },
    {
    "Symbol":"ZTAQU",
    "Name":"Zimmer Energy Transition Acquisition Corp. Units"
    },
    {
    "Symbol":"ZTAQW",
    "Name":"Zimmer Energy Transition Acquisition Corp. Warrants"
    },
    {
    "Symbol":"ZTO",
    "Name":"ZTO Express (Cayman) Inc. American Depositary Shares each representing one Class A ordinary share."
    },
    {
    "Symbol":"ZTR",
    "Name":"Virtus Total Return Fund Inc."
    },
    {
    "Symbol":"ZTS",
    "Name":"Zoetis Inc."
    },
    {
    "Symbol":"ZUMZ",
    "Name":"Zumiez Inc"
    },
    {
    "Symbol":"ZUO",
    "Name":"Zuora Inc."
    },
    {
    "Symbol":"ZVIA",
    "Name":"Zevia PBC"
    },
    {
    "Symbol":"ZVO",
    "Name":"Zovio Inc."
    },
    {
    "Symbol":"ZWRK",
    "Name":"Z-Work Acquisition Corp. Class A"
    },
    {
    "Symbol":"ZWRKU",
    "Name":"Z-Work Acquisition Corp. Units"
    },
    {
    "Symbol":"ZWRKW",
    "Name":"Z-Work Acquisition Corp. Warrant"
    },
    {
    "Symbol":"ZWS",
    "Name":"Zurn Water Solutions Corporation"
    },
    {
    "Symbol":"ZY",
    "Name":"Zymergen Inc."
    },
    {
    "Symbol":"ZYME",
    "Name":"Zymeworks Inc."
    },
    {
    "Symbol":"ZYNE",
    "Name":"Zynerba Pharmaceuticals Inc."
    },
    {
    "Symbol":"ZYXI",
    "Name":"Zynex Inc."
    }
  ];
  function searchSymbol(stockSymbol){
    let searchSymbolName=null;
    for (var key of Object.keys(stockSymbolByName)) {
      if(stockSymbol==stockSymbolByName[key].Symbol){
        searchSymbolName=stockSymbolByName[key].Name;
      }
    }
    return searchSymbolName;
  }
  module.exports = searchSymbol;
