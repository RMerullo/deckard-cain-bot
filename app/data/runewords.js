const runewords = [
        {
            "name": "Breath of the Dying",
            "runes": [
                "vex",
                "hel",
                "eld",
                "el",
                "zod",
                "eth"
            ],
            "level": 69,
            "sockets": 6,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": []
            },
            "stats": [
                "50% Chance To Cast Level 20 Poison Nova When You Kill An Enemy",
                "Indestructible",
                "+60% Increased Attack Speed",
                "+350-400% Enhanced Damage",
                "+200% Damage To Undead",
                "-25% Target Defense",
                "+50 To Attack Rating",
                "+50 To Attack Rating Against Undead",
                "7% Mana Stolen per Hit",
                "12-15% Life Stolen per Hit",
                "Prevent Monster Heal",
                "+30 To All Attributes",
                "+1 To Light Radius",
                "Requirements -20%"
            ]
        },
        {
            "name": "Obedience",
            "runes": [
                "hel",
                "ko",
                "thul",
                "eth",
                "fal"
            ],
            "level": 41,
            "sockets": 5,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "polearms",
                    "spears"
                ]
            },
            "stats": [
                "30% Chance To Cast Level 21 Enchant When You Kill An Enemy",
                "40% Faster Hit Recovery",
                "+370% Enhanced Damage",
                "-25% Target Defense",
                "Adds 3-14 Cold Damage 3 Second Duration",
                "-25% To Enemy Fire Resistance",
                "40% Chance of Crushing Blow",
                "+200-300 Defense",
                "+10 To Strength",
                "+10 To Dexterity",
                "All Resistances +20-30",
                "Requirements -20%"
            ]
        },
        {
            "name": "Authority",
            "runes": [
                "hel",
                "shael",
                "ral"
            ],
            "level": 29,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "body"
                ]
            },
            "stats": [
                "2% Chance to cast level 10 Psychic Ward when struck",
                "10% Chance to cast level 15 Miasma Chain on striking",
                "+2 to Warlock Skill Levels",
                "+40-60% Enhanced Damage",
                "Requirements -15%",
                "+20% Faster Hit Recovery",
                "Fire Resist +30%"
            ]
        },
        {
            "name": "Void",
            "runes": [
                "thul",
                "zod",
                "ist"
            ],
            "level": 69,
            "sockets": 3,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "daggers"
                ]
            },
            "stats": [
                "+2 to All Skills",
                "+40% Faster Cast Rate",
                "+10-15% to Magic Skill Damage",
                "+1-3 to Abyss",
                "+8-12 to all Attributes",
                "Level 4 Decrepify (35/35 Charges)",
                "Adds 3-14 Cold Damage",
                "Indestructible",
                "30% Better Chance of Getting Magic Items"
            ]
        },
        {
            "name": "Oath",
            "runes": [
                "shael",
                "pul",
                "mal",
                "lum"
            ],
            "level": 49,
            "sockets": 4,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "swords",
                    "axes",
                    "maces"
                ]
            },
            "stats": [
                "30% Chance To Cast Level 20 Bone Spirit On Striking",
                "Indestructible",
                "+50% Increased Attack Speed",
                "+210-340% Enhanced Damage",
                "+75% Damage To Demons",
                "+100 To Attack Rating Against Demons",
                "Prevent Monster Heal",
                "+10 To Energy",
                "+10-15 Magic Absorb",
                "Level 16 Heart of Wolverine (20 Charges)",
                "Level 17 Iron Golem (14 Charges)"
            ]
        },
        {
            "name": "Enigma",
            "runes": [
                "jah",
                "ith",
                "ber"
            ],
            "level": 65,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "body"
                ]
            },
            "stats": [
                "+2 To All Skills",
                "+45% Faster Run/Walk",
                "+1 To Teleport",
                "+750-775 Defense",
                "+ (0.75 Per Character Level) +0-74 To Strength (Based On Character Level)",
                "Increase Maximum Life 5%",
                "Damage Reduced By 8%",
                "+14 Life After Each Kill",
                "15% Damage Taken Goes To Mana",
                "+ (1 Per Character Level) +1-99% Better Chance of Getting Magic Items (Based On Character Level)"
            ]
        },
        {
            "name": "Crescent Moon",
            "runes": [
                "shael",
                "um",
                "tir"
            ],
            "level": 47,
            "sockets": 3,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "polearms",
                    "axes",
                    "swords"
                ]
            },
            "stats": [
                "10% Chance To Cast Level 17 Chain Lightning On Striking",
                "7% Chance To Cast Level 13 Static Field On Striking",
                "+20% Increased Attack Speed",
                "+180-220% Enhanced Damage",
                "Ignore Target's Defense",
                "-35% To Enemy Lightning Resistance",
                "25% Chance of Open Wounds",
                "+9-11 Magic Absorb",
                "+2 To Mana After Each Kill",
                "Level 18 Summon Spirit Wolf (30 Charges)"
            ]
        },
        {
            "name": "Splendor",
            "runes": [
                "eth",
                "lum"
            ],
            "level": 37,
            "sockets": 2,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "shields"
                ]
            },
            "stats": [
                "+1 To All Skills",
                "+10% Faster Cast Rate",
                "+20% Faster Block Rate",
                "+60-100% Enhanced Defense",
                "+10 To Energy",
                "Regenerate Mana 15%",
                "50% Extra Gold From Monsters",
                "20% Better Chance of Getting Magic Items",
                "+3 To Light Radius"
            ]
        },
        {
            "name": "Vigilance",
            "runes": [
                "dol",
                "gul"
            ],
            "level": 53,
            "sockets": 2,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "grimoires",
                    "shields",
                    "shrunken heads",
                    "targes"
                ]
            },
            "stats": [
                "5% Chance to cast level 10 Ring of Fire when struck",
                "+10% Faster Run/Walk",
                "+30% Faster Block Rate",
                "+20-40 to Life",
                "+20-40 to Mana",
                "All Resistances +25-35",
                "+75-100% Enhanced Defense",
                "Replenish Life +7",
                "+5% to Maximum Poison Resist"
            ]
        },
        {
            "name": "Ritual",
            "runes": [
                "amn",
                "shael",
                "ohm"
            ],
            "level": 57,
            "sockets": 3,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "daggers"
                ]
            },
            "stats": [
                "13% Chance to cast level 1 Sigil Death when struck",
                "+40% Increased Attack Speed",
                "+250-320% Enhanced Damage",
                "+150-250% Damage to Demons",
                "+200-260% Bonus to Attack Rating",
                "+3-5 Life after each Kill",
                "Slain Monsters Rest in Peace",
                "7% Life stolen per hit"
            ]
        },
        {
            "name": "Mosaic",
            "runes": [
                "mal",
                "gul",
                "amn"
            ],
            "level": 53,
            "sockets": 3,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "katars"
                ]
            },
            "stats": [
                "+50% chance for finishing moves to not consume charges",
                "When a finisher is executed this way, it now refreshes the expiration timer of the stack",
                "+2 to Martial Arts (Assassin only)",
                "+20% Increased Attack Speed",
                "+200-250% Enhanced Damage",
                "+20% Bonus to Attack Rating",
                "7% Life Steal",
                "+8-15% to Cold Skill Damage",
                "+8-15% to Lightning Skill Damage",
                "+8-15% to Fire Skill Damage",
                "Prevent Monster Heal"
            ]
        },
        {
            "name": "Leaf",
            "runes": [
                "tir",
                "ral"
            ],
            "level": 19,
            "sockets": 2,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "staves"
                ]
            },
            "stats": [
                "Adds 5-30 Fire Damage",
                "+3 To Fire Skills",
                "+3 To Fire Bolt (Sorceress Only)",
                "+3 To Inferno (Sorceress Only)",
                "+3 To Warmth (Sorceress Only)",
                "+2 To Mana After Each Kill",
                "+ (2 Per Character Level) +2-198 To Defense (Based On Character Level)",
                "Cold Resist +33%"
            ]
        },
        {
            "name": "Insight",
            "runes": [
                "ral",
                "tir",
                "tal",
                "sol"
            ],
            "level": 27,
            "sockets": 4,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "polearms",
                    "staves",
                    "missile"
                ]
            },
            "stats": [
                "Level 12-17 Meditation Aura When Equipped",
                "+35% Faster Cast Rate",
                "+200-260% Enhanced Damage",
                "+9 To Minimum Damage",
                "180-250% Bonus to Attack Rating",
                "Adds 5-30 Fire Damage",
                "+75 Poison Damage Over 5 Seconds",
                "+1-6 To Critical Strike",
                "+5 To All Attributes",
                "+2 To Mana After Each Kill",
                "23% Better Chance of Getting Magic Items"
            ]
        },
        {
            "name": "Coven",
            "runes": [
                "ist",
                "ral",
                "io"
            ],
            "level": 51,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "helms"
                ]
            },
            "stats": [
                "5% Chance to cast level 10 Sigil Lethargy when struck",
                "+1 to All Skills",
                "+20% Faster Cast Rate",
                "+30-50% Enhanced Defense",
                "+1-5 Life after each Kill",
                "26-40% Better Chance of Getting Magic Items",
                "Fire Resist +30%",
                "+10 to Vitality"
            ]
        },
        {
            "name": "Rhyme",
            "runes": [
                "shael",
                "eth"
            ],
            "level": 29,
            "sockets": 2,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "shields"
                ]
            },
            "stats": [
                "20% Increased Chance of Blocking",
                "40% Faster Block Rate",
                "+25 to All Resistances",
                "Regenerate Mana 15%",
                "Cannot Be Frozen",
                "50% Extra Gold From Monsters",
                "25% Better Chance Of Getting Magic Items"
            ]
        },
        {
            "name": "Obsession",
            "runes": [
                "zod",
                "ist",
                "lem",
                "lum",
                "io",
                "nef"
            ],
            "level": 69,
            "sockets": 6,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "staves"
                ]
            },
            "stats": [
                "Indestructible",
                "24% Chance to cast level 10 Weaken when struck",
                "+4 To All Skills",
                "+65% Faster Cast Rate",
                "+60% Faster Hit Recovery",
                "Knockback",
                "+10 To Vitality",
                "+10 To Energy",
                "Increase Maximum Life 15-25%",
                "Regenerate Mana 15-30%",
                "All Resistances +60-70",
                "75% Extra Gold from Monsters",
                "30% Better Chance of Getting Magic Items"
            ]
        },
        {
            "name": "Hysteria",
            "runes": [
                "shael",
                "ko",
                "eld"
            ],
            "level": 39,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "body"
                ]
            },
            "stats": [
                "+65% Faster Run/Walk",
                "+40% Increased Attack Speed",
                "+20% Faster Hit Recovery",
                "+6 to Evade",
                "+10 to Dexterity",
                "50% Slower Stamina Drain",
                "+All Resistances +10"
            ]
        },
        {
            "name": "Mania",
            "runes": [
                "shael",
                "ko",
                "eld"
            ],
            "level": 39,
            "sockets": 3,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": []
            },
            "stats": [
                "5% Chance to cast level 1 Burst of Speed on striking",
                "Level 1 Fanaticism Aura When Equipped",
                "+30% Increased Attack Speed",
                "+180-200% Enhanced Damage",
                "+75% Damage to Undead",
                "+50 to Attack Rating against Undead",
                "+10 to Dexterity"
            ]
        },
        {
            "name": "Phoenix",
            "runes": [
                "vex",
                "vex",
                "lo",
                "jah"
            ],
            "level": 65,
            "sockets": 4,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": []
            },
            "stats": [
                "100% Chance To Cast level 40 Blaze When You Level Up",
                "40% Chance To Cast Level 22 Firestorm On Striking",
                "Level 10-15 Redemption Aura When Equipped",
                "+350-400% Enhanced Damage",
                "Ignores Target's Defense",
                "14% Mana Stolen Per Hit",
                "-28% To Enemy Fire Resistance",
                "20% Deadly Strike",
                "+350-400 Defense Vs. Missile",
                "+15-21 Fire Absorb"
            ]
        },
        {
            "name": "Phoenix",
            "runes": [
                "vex",
                "vex",
                "lo",
                "jah"
            ],
            "level": 65,
            "sockets": 4,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "shields"
                ]
            },
            "stats": [
                "100% Chance To Cast level 40 Blaze When You Level Up",
                "40% Chance To Cast Level 22 Firestorm On Striking",
                "Level 10-15 Redemption Aura When Equipped",
                "+350-400 Defense Vs. Missile",
                "+350-400% Enhanced Damage",
                "-28% To Enemy Fire Resistance",
                "+50 To Life",
                "+5% To Maximum Lightning Resist",
                "+10% To Maximum Fire Resist",
                "+15-21 Fire Absorb"
            ]
        },
        {
            "name": "Flickering Flame",
            "runes": [
                "nef",
                "pul",
                "vex"
            ],
            "level": 55,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "helms"
                ]
            },
            "stats": [
                "Level 4-8 Resist Fire Aura When Equipped",
                "+3 To Fire Skills",
                "-10-15% To Enemy Fire Resistance",
                "+30% Enhanced Defense",
                "+30 Defense vs. Missile",
                "+50-75 To Mana",
                "Half Freeze Duration",
                "+5% To Maximum Fire Resist",
                "Poison Length Reduced by 50%"
            ]
        },
        {
            "name": "Rain",
            "runes": [
                "ort",
                "mal",
                "ith"
            ],
            "level": 49,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "body"
                ]
            },
            "stats": [
                "5% Chance To Cast Level 15 Cyclone Armor When Struck",
                "5% Chance To Cast Level 15 Twister On Striking",
                "+2 To Druid Skill Levels",
                "+100-150 To Mana",
                "Lightning Resist +30%",
                "Magic Damage Reduced By 7",
                "15% Damage Taken Goes to Mana"
            ]
        },
        {
            "name": "Bramble",
            "runes": [
                "ral",
                "ohm",
                "sur",
                "eth"
            ],
            "level": 61,
            "sockets": 4,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "body"
                ]
            },
            "stats": [
                "Level 15-21 Thorns Aura When Equipped",
                "+50% Faster Hit Recovery",
                "+25-50% To Poison Skill Damage",
                "+300 Defense",
                "Increase Maximum Mana 5%",
                "Regenerate Mana 15%",
                "+5% To Maximum Cold Resist",
                "Fire Resist +30%",
                "Poison Resist +100%",
                "+13 Life After Each Kill",
                "Level 13 Spirit of Barbs (33 Charges)"
            ]
        },
        {
            "name": "Spirit",
            "runes": [
                "tal",
                "thul",
                "ort",
                "amn"
            ],
            "level": 25,
            "sockets": 4,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "swords"
                ]
            },
            "stats": [
                "+2 To All Skills",
                "+25-35% Faster Cast Rate",
                "+55% Faster Hit Recovery",
                "Adds 1-50 Lightning Damage",
                "Adds 3-14 Cold Damage 3 Second Duration",
                "+75 Poison Damage Over 5 Seconds",
                "7% Life Stolen Per Hit",
                "+250 Defense Vs. Missile",
                "+22 To Vitality",
                "+89-112 To Mana",
                "+3-8 Magic Absorb"
            ]
        },
        {
            "name": "Spirit",
            "runes": [
                "tal",
                "thul",
                "ort",
                "amn"
            ],
            "level": 25,
            "sockets": 4,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "shields"
                ]
            },
            "stats": [
                "+2 To All Skills",
                "+25-35% Faster Cast Rate",
                "+55% Faster Hit Recovery",
                "+250 Defense Vs. Missile",
                "+22 To Vitality",
                "+89-112 To Mana",
                "Cold Resist +35%",
                "Lightning Resist +35%",
                "Poison Resist +35%",
                "+3-8 Magic Absorb",
                "Attacker Takes Damage of 14"
            ]
        },
        {
            "name": "Black",
            "runes": [
                "thul",
                "io",
                "nef"
            ],
            "level": 35,
            "sockets": 3,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "clubs",
                    "hammers",
                    "maces"
                ]
            },
            "stats": [
                "+120% Enhanced Damage",
                "40% Chance of Crushing Blow",
                "+200 to Attack Rating",
                "Adds 3-14 Cold Damage for 3 seconds",
                "+10 to Vitality",
                "15% increased Attack Speed",
                "Magic Damage Reduced by 2",
                "Level 4 Corpse Explosion (12 charges)",
                "Knockback"
            ]
        },
        {
            "name": "Steel",
            "runes": [
                "tir",
                "el"
            ],
            "level": 13,
            "sockets": 2,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "swords",
                    "axes",
                    "maces"
                ]
            },
            "stats": [
                "20% Enhanced Damage",
                "+3 To Minimum Damage",
                "+3 To Maximum Damage",
                "+50 To Attack Rating",
                "50% Chance Of Open Wounds",
                "25% Increased Attack Speed",
                "+2 To Mana After Each Kill",
                "+1 To Light Radius"
            ]
        },
        {
            "name": "Peace",
            "runes": [
                "shael",
                "thul",
                "amn"
            ],
            "level": 29,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "body"
                ]
            },
            "stats": [
                "4% Chance To Cast Level 5 Slow Missiles When Struck",
                "2% Chance To Cast level 15 Valkyrie On Striking",
                "+2 To Amazon Skill Levels",
                "+20% Faster Hit Recovery",
                "+2 To Critical Strike",
                "Cold Resist +30%",
                "Attacker Takes Damage of 14"
            ]
        },
        {
            "name": "Dream",
            "runes": [
                "io",
                "jah",
                "pul"
            ],
            "level": 65,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "helms",
                    "shields"
                ]
            },
            "stats": [
                "10% Chance To Cast Level 15 Confuse When Struck",
                "Level 15 Holy Shock Aura When Equipped",
                "+20-30% Faster Hit Recovery",
                "+30% Enhanced Defense",
                "+150-220 Defense",
                "+10 To Vitality",
                "Increase Maximum Life 5% (Helms Only)",
                "+50 To Life (Shields Only)",
                "+0.625-61.875 To Mana (Based On Character Level)",
                "All Resistances +5-20",
                "12-25% Better Chance of Getting Magic Items"
            ]
        },
        {
            "name": "Ground",
            "runes": [
                "shael",
                "io",
                "ort"
            ],
            "level": 35,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "helms"
                ]
            },
            "stats": [
                "+20% Faster Hit Recovery",
                "+75-100% Enhanced Defense",
                "+10 to Vitality",
                "Increase Maximum Life 5%",
                "Lightning Resist +40-60%",
                "Lightning Absorb +10-15%"
            ]
        },
        {
            "name": "Dragon",
            "runes": [
                "sur",
                "lo",
                "sol"
            ],
            "level": 61,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "shields",
                    "body"
                ]
            },
            "stats": [
                "20% Chance to Cast Level 18 Venom When Struck",
                "12% Chance To Cast Level 15 Hydra On Striking",
                "Level 14 Holy Fire Aura When Equipped",
                "+360 Defense",
                "+230 Defense vs. Missile",
                "+3-5 To All Attributes",
                "+0.375-37.125 To Strength (Based on Character Level)",
                "Increase Maximum Mana 5% (Armor Only)",
                "+50 To Mana (Shields Only)",
                "+5% To Maximum Lightning Resist",
                "Damage Reduced by 7"
            ]
        },
        {
            "name": "Lionheart",
            "runes": [
                "hel",
                "lum",
                "fal"
            ],
            "level": 41,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "body"
                ]
            },
            "stats": [
                "+20% Enhanced Damage",
                "Requirements -15%",
                "+25 To Strength",
                "+10 To Energy",
                "+20 To Vitality",
                "+15 To Dexterity",
                "+50 To Life",
                "All Resistances +30"
            ]
        },
        {
            "name": "Bone",
            "runes": [
                "sol",
                "um",
                "um"
            ],
            "level": 47,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "body"
                ]
            },
            "stats": [
                "15% Chance To Cast level 10 Bone Armor When Struck",
                "15% Chance To Cast level 10 Bone Spear On Striking",
                "+2 To Necromancer Skill Levels",
                "+100-150 To Mana",
                "All Resistances +30",
                "Damage Reduced By 7"
            ]
        },
        {
            "name": "Principle",
            "runes": [
                "ral",
                "gul",
                "eld"
            ],
            "level": 53,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "body"
                ]
            },
            "stats": [
                "100% Chance To Cast Level 5 Holy Bolt On Striking",
                "+2 To Paladin Skill Levels",
                "+50% Damage to Undead",
                "+100-150 To Life",
                "15% Slower Stamina Drain",
                "+5% To Maximum Poison Resist",
                "Fire Resist +30%"
            ]
        },
        {
            "name": "Cure",
            "runes": [
                "shael",
                "io",
                "tal"
            ],
            "level": 35,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "helms"
                ]
            },
            "stats": [
                "Level 1 Cleansing Aura when Equipped",
                "+20% Faster Hit Recovery",
                "+75-100% Enhanced Defense",
                "+10 to Vitality",
                "Increase Maximum Life 5%",
                "Poison Resist +40-60%",
                "Poison Length Reduced by 50%"
            ]
        },
        {
            "name": "Plague",
            "runes": [
                "cham",
                "shael",
                "um"
            ],
            "level": 67,
            "sockets": 3,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "swords",
                    "katars",
                    "daggers"
                ]
            },
            "stats": [
                "20% Chance To Cast Level 12 Lower Resist When Struck",
                "25% Chance to Cast Level 15 Poison Nova On Striking",
                "Level 13-17 Cleansing Aura When Equipped",
                "+1-2 To All Skills",
                "+20% Increased Attack Speed",
                "+220-320% Enhanced Damage",
                "-23% To Enemy Poison Resistance",
                "+0.3% (0-29.7) Deadly Strike (Based on Character Level)",
                "+25% Chance of Open Wounds",
                "Freezes Target +3"
            ]
        },
        {
            "name": "Stone",
            "runes": [
                "shael",
                "um",
                "pul",
                "lum"
            ],
            "level": 47,
            "sockets": 4,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "body"
                ]
            },
            "stats": [
                "+60% Faster Hit Recovery",
                "+250-290% Enhanced Defense",
                "+300 Defense vs. Missile",
                "+16 To Strength",
                "+16 To Vitality",
                "+10 To Energy",
                "All Resistances +15",
                "Level 16 Molten Boulder (80 Charges)",
                "Level 16 Clay Golem (16 Charges)"
            ]
        },
        {
            "name": "Beast",
            "runes": [
                "ber",
                "tir",
                "um",
                "mal",
                "lum"
            ],
            "level": 63,
            "sockets": 5,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "axes",
                    "scepters",
                    "hammers"
                ]
            },
            "stats": [
                "Level 9 Fanaticism Aura When Equipped",
                "+40% Increased Attack Speed",
                "+240-270% Enhanced Damage",
                "20% Chance of Crushing Blow",
                "25% Chance of Open Wounds",
                "+3 To Werebear",
                "+3 To Lycanthropy",
                "Prevent Monster Heal",
                "+25-40 To Strength",
                "+10 To Energy",
                "+2 To Mana After Each Kill",
                "Level 13 Summon Grizzly (5 Charges)"
            ]
        },
        {
            "name": "Hearth",
            "runes": [
                "shael",
                "io",
                "thul"
            ],
            "level": 35,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "helms"
                ]
            },
            "stats": [
                "+20% Faster Hit Recovery",
                "+75-100% Enhanced Defense",
                "+10 to Vitality",
                "Increase Maximum Life 5%",
                "Cold Resist +40-60%",
                "Cold Absorb +10-15%",
                "Cannot be Frozen"
            ]
        },
        {
            "name": "Doom",
            "runes": [
                "hel",
                "ohm",
                "um",
                "lo",
                "charm"
            ],
            "level": 67,
            "sockets": 5,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "axes",
                    "polearms",
                    "hammers"
                ]
            },
            "stats": [
                "5% Chance To Cast Level 18 Volcano On Striking",
                "Level 12 Holy Freeze Aura When Equipped",
                "+2 To All Skills",
                "+45% Increased Attack Speed",
                "+330-370% Enhanced Damage",
                "-(40-60)% To Enemy Cold Resistance",
                "20% Deadly Strike",
                "25% Chance of Open Wounds",
                "Prevent Monster Heal",
                "Freezes Target +3",
                "Requirements -20%"
            ]
        },
        {
            "name": "Temper",
            "runes": [
                "shael",
                "io",
                "ral"
            ],
            "level": 35,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "helms"
                ]
            },
            "stats": [
                "+20% Faster Hit Recovery",
                "+75-100% Enhanced Defense",
                "+10 to Vitality",
                "Increase Maximum Life 5%",
                "Fire Resist +40-60%",
                "Fire Absorb +10-15%"
            ]
        },
        {
            "name": "Metamorphisis",
            "runes": [
                "io",
                "cham",
                "fal"
            ],
            "level": 67,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "helms"
                ]
            },
            "stats": [
                "Werewolf strikes grant Mark for 180 seconds",
                "Mark of the Wolf:",
                "+30% Bonus to Attack Rating",
                "Increase Maximum Life 40%",
                "Werebear strikes grant Mark for 180 seconds",
                "Mark of the Bear:",
                "+25% Attack Speed",
                "Physical Damage Received Reduced by 20%",
                "+5 to Shape Shifting Skills (Druid only)",
                "+25% Chance of Crushing Blow",
                "+50-80% Enhanced Defense",
                "+10 to Strength",
                "+10 to Vitality",
                "All Resistances +10",
                "Cannot be Frozen"
            ]
        },
        {
            "name": "Bulwark",
            "runes": [
                "shael",
                "io",
                "sol"
            ],
            "level": 35,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "helms"
                ]
            },
            "stats": [
                "+20% Faster Hit Recovery",
                "+4-6% Life stolen per hit",
                "+75-100% Enhanced Defense",
                "+10 to Vitality",
                "Increase Maximum Life 5%",
                "Replenish Life +30",
                "Damage Reduced by 7",
                "Physical Damage Received Reduced by 10-15%"
            ]
        },
        {
            "name": "Hustle",
            "runes": [
                "shael",
                "ko",
                "eld"
            ],
            "level": 39,
            "sockets": 3,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": []
            },
            "stats": [
                "5% Chance to cast level 1 Burst of Speed on striking",
                "Level 1 Fanaticism Aura When Equipped",
                "+30% Increased Attack Speed",
                "+180-200% Enhanced Damage",
                "+75% Damage to Undead",
                "+50 to Attack Rating against Undead",
                "+10 to Dexterity"
            ]
        },
        {
            "name": "Hustle",
            "runes": [
                "shael",
                "ko",
                "eld"
            ],
            "level": 39,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": []
            },
            "stats": [
                "+65% Faster Run/Walk",
                "+40% Increased Attack Speed",
                "+20% Faster Hit Recovery",
                "+6 to Evade",
                "+10 to Dexterity",
                "50% Slower Stamina Drain",
                "+All Resistances +10"
            ]
        },
        {
            "name": "White",
            "runes": [
                "dol",
                "io"
            ],
            "level": 35,
            "sockets": 2,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "wands"
                ]
            },
            "stats": [
                "Hit Causes Monster To Flee 25%",
                "+10 To Vitality",
                "+3 To Poison and Bone Skills (Necromancer Only)",
                "+3 To Bone Armor (Necromancer Only)",
                "+2 To Bone Spear (Necromancer Only)",
                "+4 To Skeleton Mastery (Necromancer Only)",
                "Magic Damage Reduced By 4",
                "20% Faster Cast Rate",
                "+13 To Mana"
            ]
        },
        {
            "name": "Holy Thunder",
            "runes": [
                "eth",
                "ral",
                "ort",
                "tal"
            ],
            "level": 21,
            "sockets": 4,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "scepters"
                ]
            },
            "stats": [
                "+60% Enhanced Damage",
                "-25% Target Defense",
                "Adds 5-30 Fire Damage",
                "Adds 21-110 Lightning Damage",
                "+75 Poison Damage Over 5 Seconds",
                "+10 To Maximum Damage",
                "Lightning Resistance +60%",
                "+5 To Maximum Lightning Resistance",
                "+3 To Holy Shock (Paladin Only)",
                "Level 7 Chain Lightning (60 Charges)"
            ]
        },
        {
            "name": "Infinity",
            "runes": [
                "ber",
                "mal",
                "ber",
                "ist"
            ],
            "level": 63,
            "sockets": 4,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "polearms",
                    "spears"
                ]
            },
            "stats": [
                "50% Chance To Cast Level 20 Chain Lightning When You Kill An Enemy",
                "Level 12 Conviction Aura When Equipped",
                "+35% Faster Run/Walk",
                "+255-325% Enhanced Damage",
                "-(45-55)% To Enemy Lightning Resistance",
                "40% Chance of Crushing Blow",
                "Prevent Monster Heal",
                "0.5-49.5 To Vitality (Based on Character Level)",
                "30% Better Chance of Getting Magic Items",
                "Level 21 Cyclone Armor (30 Charges)"
            ]
        },
        {
            "name": "Harmony",
            "runes": [
                "tir",
                "ith",
                "sol",
                "ko"
            ],
            "level": 39,
            "sockets": 4,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "missile"
                ]
            },
            "stats": [
                "Level 10 Vigor Aura When Equipped",
                "+200-275% Enhanced Damage",
                "+9 To Minimum Damage",
                "+9 To Maximum Damage",
                "Adds 55-160 Lightning Damage",
                "Adds 55-160 Fire Damage",
                "Adds 55-160 Cold Damage",
                "+2-6 To Valkyrie",
                "+10 To Dexterity",
                "Regenerate Mana 20%",
                "+2 To Mana After Each Kill",
                "+2 To Light Radius",
                "Level 20 Revive (25 Charges)"
            ]
        },
        {
            "name": "Sanctuary",
            "runes": [
                "ko",
                "ko",
                "mal"
            ],
            "level": 49,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "shields"
                ]
            },
            "stats": [
                "+20% Faster Hit Recovery",
                "+20% Faster Block Rate",
                "20% Increased Chance of Blocking",
                "+130-160% Enhanced Defense",
                "+250 Defense vs. Missile",
                "+20 To Dexterity",
                "All Resistances +50-70",
                "Magic Damage Reduced By 7",
                "Level 12 Slow Missiles (60 Charges)"
            ]
        },
        {
            "name": "Edge",
            "runes": [
                "tir",
                "tal",
                "amn"
            ],
            "level": 25,
            "sockets": 3,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "missile"
                ]
            },
            "stats": [
                "Level 15 Thorns Aura When Equipped",
                "+35% Increased Attack Speed",
                "+320-380% Damage To Demons",
                "+280% Damage To Undead",
                "+75 Poison Damage Over 5 Seconds",
                "7% Life Stolen Per Hit",
                "Prevent Monster Heal",
                "+5-10 To All Attributes",
                "+2 To Mana After Each Kill",
                "Reduces All Vendor Prices 15%"
            ]
        },
        {
            "name": "Ancient's Pledge",
            "runes": [
                "ral",
                "ort",
                "tal"
            ],
            "level": 21,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "shields"
                ]
            },
            "stats": [
                "+50% Enhanced Defense",
                "Cold Resist +43%",
                "Fire Resist +48%",
                "Lightning Resist +48%",
                "Poison Resist +48%",
                "10% Damage Goes To Mana"
            ]
        },
        {
            "name": "Smoke",
            "runes": [
                "nef",
                "lum"
            ],
            "level": 37,
            "sockets": 2,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "body"
                ]
            },
            "stats": [
                "+75% Enhanced Defense",
                "+280 Defense vs. Missiles",
                "All Resistances +50",
                "20% Faster Hit Recovery",
                "Level 6 Weaken (18 Charges)",
                "+10 To Energy",
                "-1 To Light Radius"
            ]
        },
        {
            "name": "Voice of Reason",
            "runes": [
                "lem",
                "ko",
                "el",
                "eld"
            ],
            "level": 43,
            "sockets": 4,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "swords",
                    "maces"
                ]
            },
            "stats": [
                "15% Chance To Cast Level 13 Frozen Orb On Striking",
                "18% Chance To Cast Level 20 Ice Blast On Striking",
                "+50 To Attack Rating",
                "+220-350% Damage To Demons",
                "+355-375% Damage To Undead",
                "+50 To Attack Rating Against Undead",
                "Adds 100-220 Cold Damage",
                "-24% To Enemy Cold Resistance",
                "+10 To Dexterity",
                "Cannot Be Frozen",
                "75% Extra Gold From Monsters",
                "+1 To Light Radius"
            ]
        },
        {
            "name": "Hand of Justice",
            "runes": [
                "sur",
                "cham",
                "amn",
                "lo"
            ],
            "level": 67,
            "sockets": 4,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": []
            },
            "stats": [
                "100% Chance To Cast Level 36 Blaze When You Level Up",
                "100% Chance To Cast Level 48 Meteor When You Die",
                "Level 16 Holy Fire Aura When Equipped",
                "+33% Increased Attack Speed",
                "+280-330% Enhanced Damage",
                "Ignore Target's Defense",
                "7% Life Stolen Per Hit",
                "-20% To Enemy Fire Resistance",
                "20% Deadly Strike",
                "Hit Blinds Target",
                "Freezes Target +3"
            ]
        },
        {
            "name": "Pattern",
            "runes": [
                "tal",
                "ort",
                "thul"
            ],
            "level": 23,
            "sockets": 3,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "katars"
                ]
            },
            "stats": [
                "+30% Faster Block",
                "+40-80% Enhanced Damage",
                "10% Bonus to Attack Rating",
                "Adds 12-32 Fire Damage",
                "Adds 1-50 Lightning Damage",
                "Adds 3-14 Cold Damage",
                "+75 Poison Damage Over 5 Seconds",
                "+6 Strength",
                "+6 Dexterity",
                "All Resistances +15"
            ]
        },
        {
            "name": "Wrath",
            "runes": [
                "pul",
                "lum",
                "ber",
                "mal"
            ],
            "level": 63,
            "sockets": 4,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "missile"
                ]
            },
            "stats": [
                "30% Chance To Cast Level 1 Decrepify On Striking",
                "5% Chance To Cast Level 10 Life Tap On Striking",
                "+375% Damage To Demons",
                "+100 To Attack Rating Against Demons",
                "+250-300% Damage To Undead",
                "Adds 85-120 Magic Damage",
                "Adds 41-240 Lightning Damage",
                "20% Chance of Crushing Blow",
                "Prevent Monster Heal",
                "+10 To Energy",
                "Cannot Be Frozen"
            ]
        },
        {
            "name": "Kingslayer",
            "runes": [
                "mal",
                "um",
                "gul",
                "fal"
            ],
            "level": 53,
            "sockets": 4,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "swords",
                    "axes"
                ]
            },
            "stats": [
                "+30% Increased Attack Speed",
                "+230-270% Enhanced Damage",
                "-25% Target Defense",
                "20% Bonus To Attack Rating",
                "33% Chance of Crushing Blow",
                "50% Chance of Open Wounds",
                "+1 To Vengeance",
                "Prevent Monster Heal",
                "+10 To Strength",
                "40% Extra Gold From Monsters"
            ]
        },
        {
            "name": "Duress",
            "runes": [
                "shael",
                "um",
                "thul"
            ],
            "level": 47,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "body"
                ]
            },
            "stats": [
                "+40% Faster Hit Recovery",
                "+10-20% Enhanced Damage",
                "Adds 37-133 Cold Damage 2 sec. Duration",
                "15% Chance of Crushing Blow",
                "33% Chance of Open Wounds",
                "+150-200% Enhanced Defense",
                "-20% Slower Stamina Drain",
                "Cold Resist +45%",
                "Lightning Resist +15%",
                "Fire Resist +15%",
                "Poison Resist +15%"
            ]
        },
        {
            "name": "Stealth",
            "runes": [
                "tal",
                "eth"
            ],
            "level": 17,
            "sockets": 2,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "body"
                ]
            },
            "stats": [
                "Magic Damage Reduced By 3",
                "+6 To Dexterity",
                "+15 To Maximum Stamina",
                "Poison Resist +30%",
                "Regenerate Mana 15%",
                "25% Faster Run/Walk",
                "25% Faster Cast Rate",
                "25% Faster Hit Recovery"
            ]
        },
        {
            "name": "Venom",
            "runes": [
                "tal",
                "dol",
                "mal"
            ],
            "level": 49,
            "sockets": 3,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": []
            },
            "stats": [
                "Hit Causes Monster To Flee 25%",
                "Prevent Monster Heal",
                "Ignore Target's Defense",
                "7% Mana Stolen Per Hit",
                "Level 15 Poison Explosion (27 Charges)",
                "Level 13 Poison Nova (11 Charges)",
                "+273 Poison Damage Over 6 seconds"
            ]
        },
        {
            "name": "Last Wish",
            "runes": [
                "jah",
                "mal",
                "jah",
                "sur",
                "jah",
                "ber"
            ],
            "level": 65,
            "sockets": 6,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "swords",
                    "hammers",
                    "axes"
                ]
            },
            "stats": [
                "6% Chance To Cast Level 11 Fade When Struck",
                "10% Chance To Cast Level 18 Life Tap On Striking",
                "20% Chance To Cast Level 20 Charged Bolt On Attack",
                "Level 17 Might Aura When Equipped",
                "+330-375% Enhanced Damage",
                "Ignore Target's Defense",
                "60-70% Chance of Crushing Blow",
                "Prevent Monster Heal",
                "Hit Blinds Target",
                "+(0.5 per character level) 0.5-49.5% Chance of Getting Magic Items (Based on Character Level)"
            ]
        },
        {
            "name": "Heart of the Oak",
            "runes": [
                "ko",
                "vex",
                "pul",
                "thul"
            ],
            "level": 55,
            "sockets": 4,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "maces",
                    "staves"
                ]
            },
            "stats": [
                "+3 To All Skills",
                "+40% Faster Cast Rate",
                "+75% Damage To Demons",
                "+100 To Attack Rating Against DemonsAdds 3-14 Cold Damage, 3 sec.Duration",
                "7% Mana Stolen Per Hit",
                "+10 To Dexterity",
                "Replenish Life +20",
                "Increase Maximum Mana 15%",
                "All Resistances +30-40",
                "Level 4 Oak Sage (25 Charges)",
                "Level 14 Raven (60 Charges)"
            ]
        },
        {
            "name": "Lore",
            "runes": [
                "ort",
                "sol"
            ],
            "level": 27,
            "sockets": 2,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "helms"
                ]
            },
            "stats": [
                "+1 To All Skills",
                "+10 To Energy",
                "+2 To Mana After Each Kill",
                "Lightning Resist +30%",
                "Damage Reduced By 7",
                "+2 To Light Radius"
            ]
        },
        {
            "name": "Eternity",
            "runes": [
                "amn",
                "ber",
                "ist",
                "sol",
                "sur"
            ],
            "level": 63,
            "sockets": 5,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "melee"
                ]
            },
            "stats": [
                "Indestructible",
                "+260-310% Enhanced Damage",
                "+9 To Minimum Damage",
                "7% Life Stolen Per Hit",
                "20% Chance of Crushing Blow",
                "Hit Blinds Target",
                "Slows Target By 33%",
                "Regenerate Mana 16%",
                "Replenish Life +16",
                "Cannot Be Frozen",
                "30% Better Chance Of Getting Magic Items",
                "Level 8 Revive (88 Charges)"
            ]
        },
        {
            "name": "Honor",
            "runes": [
                "amn",
                "el",
                "ith",
                "tir",
                "sol"
            ],
            "level": 27,
            "sockets": 5,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "melee"
                ]
            },
            "stats": [
                "+160% Enhanced Damage",
                "+9 to Minimum Damage",
                "+9 to Maximum Damage",
                "25% Deadly Strike",
                "+250 to Attack Rating",
                "+1 to All Skills",
                "7% Life Stolen per Hit",
                "+10 Replenish Life",
                "+10 to Strength",
                "+1 to Light Radius",
                "+2 to Mana per Kill"
            ]
        },
        {
            "name": "Wealth",
            "runes": [
                "lem",
                "ko",
                "tir"
            ],
            "level": 43,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "body"
                ]
            },
            "stats": [
                "300% Extra Gold From Monsters",
                "100% Better Chance Of Getting Magic Items",
                "+2 To Mana After Each Kill",
                "+10 To Dexterity"
            ]
        },
        {
            "name": "Malice",
            "runes": [
                "ith",
                "el",
                "eth"
            ],
            "level": 15,
            "sockets": 3,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "melee"
                ]
            },
            "stats": [
                "+33% Enhanced Damage",
                "+9 To Maximum Damage",
                "100% Chance Of Open Wounds",
                "-25% Target Defense",
                "-100 To Monster Defense per Hit",
                "Prevent Monster Heal",
                "+50 To Attack Rating",
                "Drain Life -5"
            ]
        },
        {
            "name": "Fury",
            "runes": [
                "jah",
                "gul",
                "eth"
            ],
            "level": 65,
            "sockets": 3,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "melee"
                ]
            },
            "stats": [
                "+209% Enhanced Damage",
                "40% Increased Attack Speed",
                "Prevent Monster Heal",
                "66% Chance of Open Wounds",
                "33% Chance of Deadly Strike",
                "-25% Target Defense",
                "20% to Attack Rating",
                "6% Life Stolen Per Hit",
                "Ignores Target Defense",
                "+5 to Frenzy (Barbarian only)"
            ]
        },
        {
            "name": "Call To Arms",
            "runes": [
                "amn",
                "ral",
                "mal",
                "ist",
                "ohm"
            ],
            "level": 57,
            "sockets": 3,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": []
            },
            "stats": [
                "+1 To All Skills",
                "+40% Increased Attack Speed",
                "+250-290% Enhanced Damage",
                "Adds 5-30 Fire Damage",
                "7% Life Stolen Per Hit",
                "+2-6 To Battle Command",
                "+1-6 To Battle Orders",
                "+1-4 To Battle Cry",
                "Prevent Monster Heal",
                "Replenish Life +12",
                "30% Better Chance of Getting Magic Items"
            ]
        },
        {
            "name": "Faith",
            "runes": [
                "ohm",
                "jah",
                "lem",
                "eld"
            ],
            "level": 65,
            "sockets": 4,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "missile"
                ]
            },
            "stats": [
                "Level 12-15 Fanaticism Aura When Equipped",
                "+1-2 To All Skills",
                "+330% Enhanced Damage",
                "Ignore Target's Defense",
                "300% Bonus To Attack Rating",
                "+75% Damage To Undead",
                "+50 To Attack Rating Against Undead",
                "+120 Fire Damage",
                "All Resistances +15",
                "10% Reanimate As: Returned",
                "75% Extra Gold From Monsters"
            ]
        },
        {
            "name": "Death",
            "runes": [
                "hel",
                "el",
                "vex",
                "ort",
                "gul"
            ],
            "level": 55,
            "sockets": 5,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "swords",
                    "axes"
                ]
            },
            "stats": [
                "100% Chance To Cast Level 44 Chain Lightning When You Die",
                "25% Chance To Cast Level 18 Glacial Spike On Attack",
                "Indestructible",
                "+300-385% Enhanced Damage",
                "20% Bonus To Attack Rating",
                "+50 To Attack Rating",
                "Adds 1-50 Lightning Damage",
                "7% Mana Stolen Per Hit",
                "50% Chance of Crushing Blow",
                "+(0.5 per Character Level) 0.5-49.5% Deadly Strike (Based on Character Level)",
                "+1 To Light Radius",
                "Level 22 Blood Golem (15 Charges)",
                "Requirements -20%"
            ]
        },
        {
            "name": "Chaos",
            "runes": [
                "fal",
                "ohm",
                "um"
            ],
            "level": 57,
            "sockets": 3,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "katars"
                ]
            },
            "stats": [
                "9% Chance To Cast Level 11 Frozen Orb On Striking",
                "11% Chance To Cast Level 9 Charged Bolt On Striking",
                "+35% Increased Attack Speed",
                "+290-340% Enhanced Damage",
                "Adds 216-471 Magic Damage",
                "25% Chance of Open Wounds",
                "+1 To Whirlwind",
                "+10 To Strength",
                "+15 Life After Each Demon Kill"
            ]
        },
        {
            "name": "Grief",
            "runes": [
                "eth",
                "tir",
                "lo",
                "mal",
                "ral"
            ],
            "level": 59,
            "sockets": 5,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "axes",
                    "swords"
                ]
            },
            "stats": [
                "35% Chance To Cast Level 15 Venom On Striking",
                "+30-40% Increased Attack Speed",
                "Damage +340-400",
                "Ignore Target's Defense",
                "-25% Target Defense",
                "+(1.875 per character level) 1.875-185.625% Damage To Demons (Based on Character Level)",
                "Adds 5-30 Fire Damage",
                "-20-25% To Enemy Poison Resistance",
                "20% Deadly Strike",
                "Prevent Monster Heal",
                "+2 To Mana After Each Kill",
                "+10-15 Life After Each Kill"
            ]
        },
        {
            "name": "Fortitude",
            "runes": [
                "el",
                "sol",
                "dol",
                "lo"
            ],
            "level": 59,
            "sockets": 5,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": []
            },
            "stats": [
                "20% Chance To Cast Level 15 Chilling Armor when Struck",
                "+25% Faster Cast Rate",
                "+300% Enhanced Damage",
                "+9 To Minimum Damage",
                "+50 To Attack Rating",
                "20% Deadly Strike",
                "Hit Causes Monster To Flee 25%",
                "+200% Enhanced Defense",
                "+X To Life (Based on Character Level)",
                "All Resistances +25-30",
                "12% Damage Taken Goes To Mana",
                "+1 To Light Radius"
            ]
        },
        {
            "name": "Fortitude",
            "runes": [
                "el",
                "sol",
                "dol",
                "lo"
            ],
            "level": 59,
            "sockets": 5,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "body"
                ]
            },
            "stats": [
                "20% Chance To Cast Level 15 Chilling Armor when Struck",
                "+25% Faster Cast Rate",
                "+300% Enhanced Damage",
                "+200% Enhanced Defense",
                "+15 Defense",
                "+X To Life (Based on Character Level)",
                "Replenish Life +7",
                "+5% To Maximum Lightning Resist",
                "All Resistances +25-30",
                "Damage Reduced By 7",
                "12% Damage Taken Goes To Mana",
                "+1 To Light Radius"
            ]
        },
        {
            "name": "Ice",
            "runes": [
                "amn",
                "shael",
                "jah",
                "lo"
            ],
            "level": 65,
            "sockets": 4,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "missile"
                ]
            },
            "stats": [
                "100% Chance To Cast Level 40 Blizzard When You Level Up",
                "25% Chance To Cast Level 22 Frost Nova On Striking",
                "Level 18 Holy Freeze Aura When Equipped",
                "+20% Increased Attack Speed",
                "+140-210% Enhanced Damage",
                "Ignore Target's Defense",
                "+25-30% To Cold Skill Damage",
                "-20% To Enemy Cold Resistance",
                "7% Life Stolen Per Hit",
                "20% Deadly Strike",
                "3.125-309.375% Extra Gold From Monsters (Based on Character Level)"
            ]
        },
        {
            "name": "Delirium",
            "runes": [
                "lem",
                "ist",
                "io"
            ],
            "level": 51,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "helm"
                ]
            },
            "stats": [
                "1% Chance To Cast Level 50 Delirium (morph) When Struck",
                "6% Chance To Cast Level 14 Mind Blast When Struck",
                "14% Chance To Cast Level 13 Terror When Struck",
                "11% Chance To Cast Level 18 Confuse On Striking",
                "+2 To All Skills",
                "+261 Defense",
                "+10 To Vitality",
                "50% Extra Gold From Monsters",
                "25% Better Chance of Getting Magic Items",
                "Level 17 Attract (60 Charges)"
            ]
        },
        {
            "name": "Gloom",
            "runes": [
                "fal",
                "um",
                "pul"
            ],
            "level": 47,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "body"
                ]
            },
            "stats": [
                "15% Chance To Cast Level 3 Dim Vision When Struck",
                "+10% Faster Hit Recovery",
                "+200-260% Enhanced Defense",
                "+10 To Strength",
                "All Resistances +45",
                "Half Freeze Duration",
                "5% Damage Taken Goes To Mana",
                "-3 To Light Radius"
            ]
        },
        {
            "name": "Radiance",
            "runes": [
                "nef",
                "sol",
                "ith"
            ],
            "level": 27,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "helms"
                ]
            },
            "stats": [
                "+75% Enhanced Defense",
                "+30 Defense Vs. Missile",
                "+10 To Energy",
                "+10 To Vitality",
                "15% Damage Taken Goes To Mana",
                "Magic Damage Reduced By 3",
                "+33 To Mana",
                "Damage Reduced By 7",
                "+5 To Light Radius"
            ]
        },
        {
            "name": "Silence",
            "runes": [
                "dol",
                "eld",
                "hel",
                "ist",
                "tir",
                "vex"
            ],
            "level": 55,
            "sockets": 6,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": []
            },
            "stats": [
                "200% Enhanced Damage",
                "+75% Damage To Undead",
                "Requirements -20%",
                "20% Increased Attack Speed",
                "+50 To Attack Rating Against Undead",
                "+2 To All Skills",
                "All Resistances +75",
                "20% Faster Hit Recovery",
                "11% Mana Stolen Per Hit",
                "Hit Causes Monster To Flee 25%",
                "Hit Blinds Target +33",
                "+2 To Mana After Each Kill",
                "30% Better Chance Of Getting Magic Items"
            ]
        },
        {
            "name": "Rift",
            "runes": [
                "hel",
                "ko",
                "lem",
                "gul"
            ],
            "level": 53,
            "sockets": 4,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "polearms",
                    "scepters"
                ]
            },
            "stats": [
                "20% Chance To Cast Level 16 Tornado On Striking",
                "16% Chance To Cast Level 21 Frozen Orb On Attack",
                "20% Bonus To Attack Rating",
                "Adds 160-250 Magic Damage",
                "Adds 60-180 Fire Damage",
                "+5-10 To All Stats",
                "+10 To Dexterity",
                "38% Damage Taken Goes To Mana",
                "75% Extra Gold From Monsters",
                "Level 15 Iron Maiden (40 Charges)",
                "Requirements -20%"
            ]
        },
        {
            "name": "Melody",
            "runes": [
                "shael",
                "ko",
                "nef"
            ],
            "level": 39,
            "sockets": 3,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "missile"
                ]
            },
            "stats": [
                "+50% Enhanced Damage",
                "+300% Damage To Undead",
                "+3 To Bow and Crossbow Skills (Amazon Only)",
                "+3 To Critical Strike (Amazon Only)",
                "+3 To Dodge (Amazon Only)",
                "+3 To Slow Missiles (Amazon Only)",
                "20% Increased Attack Speed",
                "+10 To Dexterity",
                "Knockback"
            ]
        },
        {
            "name": "Lawbringer",
            "runes": [
                "amn",
                "lem",
                "ko"
            ],
            "level": 43,
            "sockets": 3,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "swords",
                    "hammers",
                    "scepters"
                ]
            },
            "stats": [
                "20% Chance To Cast Level 15 Decrepify On Striking",
                "Level 16-18 Sanctuary Aura When Equipped",
                "-50% Target Defense",
                "Adds 150-210 Fire Damage",
                "Adds 130-180 Cold Damage",
                "7% Life Stolen Per Hit",
                "Slain Monsters Rest In Peace",
                "+200-250 Defense Vs. Missile",
                "+10 To Dexterity",
                "75% Extra Gold From Monsters"
            ]
        },
        {
            "name": "Destruction",
            "runes": [
                "vex",
                "lo",
                "ber",
                "jah",
                "ko"
            ],
            "level": 65,
            "sockets": 5,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "polearms",
                    "swords"
                ]
            },
            "stats": [
                "23% Chance To Cast Level 12 Volcano On Striking",
                "5% Chance To Cast Level 23 Molten Boulder On Striking",
                "100% Chance To Cast level 45 Meteor When You Die",
                "15% Chance To Cast Level 22 Nova On Attack",
                "+350% Enhanced Damage",
                "Ignore Target's Defense",
                "Adds 100-180 Magic Damage",
                "7% Mana Stolen Per Hit",
                "20% Chance Of Crushing Blow",
                "20% Deadly Strike",
                "Prevent Monster Heal",
                "+10 To Dexterity"
            ]
        },
        {
            "name": "Chains of Honor",
            "runes": [
                "dol",
                "um",
                "ber",
                "ist"
            ],
            "level": 63,
            "sockets": 4,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "body"
                ]
            },
            "stats": [
                "+2 To All Skills",
                "+200% Damage To Demons",
                "+100% Damage To Undead",
                "8% Life Stolen Per Hit",
                "+70% Enhanced Defense",
                "+20 To Strength",
                "Replenish Life +7",
                "All Resistances +65",
                "Damage Reduced By 8%",
                "25% Better Chance of Getting Magic Items"
            ]
        },
        {
            "name": "Wisdom",
            "runes": [
                "pul",
                "ith",
                "eld"
            ],
            "level": 45,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "helms"
                ]
            },
            "stats": [
                "+33% Piercing Attack",
                "+15-25% Bonus to Attack Rating",
                "4-8% Mana Stolen Per Hit",
                "+30% Enhanced Defense",
                "+10 Energy",
                "15% Slower Stamina Drain",
                "Cannot Be Frozen",
                "+5 Mana After Each Kill",
                "15% Damage Taken Goes to Mana"
            ]
        },
        {
            "name": "Exile",
            "runes": [
                "vex",
                "ohm",
                "ist",
                "dol"
            ],
            "level": 57,
            "sockets": 4,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "paladin"
                ]
            },
            "stats": [
                "+33% Piercing Attack",
                "+15-25% Bonus to Attack Rating",
                "4-8% Mana Stolen Per Hit",
                "+30% Enhanced Defense",
                "+10 Energy",
                "15% Slower Stamina Drain",
                "Cannot Be Frozen",
                "+5 Mana After Each Kill",
                "15% Damage Taken Goes to Mana"
            ]
        },
        {
            "name": "Wind",
            "runes": [
                "sur",
                "el"
            ],
            "level": 61,
            "sockets": 2,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "melee"
                ]
            },
            "stats": [
                "10% Chance To Cast Level 9 Tornado On Striking",
                "+20% Faster Run/Walk",
                "+40% Increased Attack Speed",
                "+15% Faster Hit Recovery",
                "+120-160% Enhanced Damage",
                "-50% Target Defense",
                "+50 To Attack Rating",
                "Hit Blinds Target",
                "+1 To Light Radius",
                "Level 13 Twister (127 Charges)"
            ]
        },
        {
            "name": "Mist",
            "runes": [
                "cham",
                "shael",
                "gul",
                "thul",
                "ith"
            ],
            "level": 67,
            "sockets": 5,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "missile"
                ]
            },
            "stats": [
                "Level 8-12 Concentration Aura When Equipped",
                "3 To All Skills",
                "+20% Increased Attack Speed",
                "+100% Piercing Attack",
                "+325-375% Enhanced Damage",
                "+9 To Maximum Damage",
                "20% Bonus to Attack Rating",
                "Adds 3-14 Cold Damage",
                "Freezes Target +3",
                "+24 to Vitality",
                "All Resistances +40"
            ]
        },
        {
            "name": "Brand",
            "runes": [
                "jah",
                "lo",
                "mal",
                "gul"
            ],
            "level": 65,
            "sockets": 4,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "missile"
                ]
            },
            "stats": [
                "35% Chance To Cast Level 14 Amplify Damage When Struck",
                "100% Chance To Cast Level 18 Bone Spear On Striking",
                "+260-340% Enhanced Damage",
                "Ignores Target's Defense",
                "20% Bonus to Attack Rating",
                "+280-330% Damage To Demons",
                "20% Deadly Strike",
                "Prevent Monster Heal",
                "Knockback",
                "Fires Explosive Arrows or Bolts [level 15]"
            ]
        },
        {
            "name": "Memory",
            "runes": [
                "lum",
                "io",
                "sol",
                "eth"
            ],
            "level": 37,
            "sockets": 4,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "staves"
                ]
            },
            "stats": [
                "+3 to Sorceress Skill Levels",
                "33% Faster Cast Rate",
                "Increase Maximum Mana 20%",
                "+3 Energy Shield (Sorceress Only)",
                "+2 Static Field (Sorceress Only)",
                "+10 To Energy",
                "+10 To Vitality",
                "+9 To Minimum Damage",
                "-25% Target Defense",
                "Magic Damage Reduced By 7",
                "+50% Enhanced Defense"
            ]
        },
        {
            "name": "Treachery",
            "runes": [
                "shael",
                "thul",
                "lem"
            ],
            "level": 43,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "body"
                ]
            },
            "stats": [
                "5% Chance To Cast Level 15 Fade When Struck",
                "25% Chance To Cast level 15 Venom On Striking",
                "+2 To Assassin Skill Levels",
                "+45% Increased Attack Speed",
                "+20% Faster Hit Recovery",
                "Cold Resist +30%",
                "50% Extra Gold From Monsters"
            ]
        },
        {
            "name": "Strength",
            "runes": [
                "amn",
                "tir"
            ],
            "level": 25,
            "sockets": 2,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "melee"
                ]
            },
            "stats": [
                "35% Enhanced Damage",
                "25% Chance Of Crushing Blow",
                "7% Life Stolen Per Hit",
                "+2 To Mana After Each Kill",
                "+20 To Strength",
                "+10 To Vitality"
            ]
        },
        {
            "name": "Myth",
            "runes": [
                "hel",
                "amn",
                "nef"
            ],
            "level": 25,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "body"
                ]
            },
            "stats": [
                "3% Chance To Cast Level 1 Howl When Struck",
                "10% Chance To Cast Level 1 Taunt On Striking",
                "+2 To Barbarian Skill Levels",
                "+30 Defense Vs. Missile",
                "Replenish Life +10",
                "Attacker Takes Damage of 14",
                "Requirements -15%"
            ]
        },
        {
            "name": "Pride",
            "runes": [
                "cham",
                "sur",
                "io",
                "lo"
            ],
            "level": 67,
            "sockets": 4,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "polearms",
                    "spears"
                ]
            },
            "stats": [
                "25% Chance To Cast Level 17 Fire Wall When Struck",
                "Level 16-20 Concentration Aura When Equipped",
                "260-300% Bonus To Attack Rating",
                "+1-99% Damage To Demons (Based on Character Level)",
                "Adds 50-280 Lightning Damage",
                "20% Deadly Strike",
                "Hit Blinds Target",
                "Freezes Target +3",
                "+10 To Vitality",
                "Replenish Life +8",
                "1.875-185.625% Extra Gold From Monsters (Based on Character Level)"
            ]
        },
        {
            "name": "Unbending Will",
            "runes": [
                "fal",
                "io",
                "ith",
                "eld",
                "el",
                "hel"
            ],
            "level": 41,
            "sockets": 6,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "swords"
                ]
            },
            "stats": [
                "18% Chance to Cast Level 18 Taunt On Striking",
                "+3 to Combat Skills (Barbarian Only)",
                "+20-30% Increased Attack Speed",
                "+300-350% Enhanced Damage",
                "+9 to Maximum Damage",
                "+50 to Attack Rating",
                "+75% Damage To Undead",
                "+50 Attack Rating Against Undead",
                "8-10% Life Stolen Per Hit",
                "Prevent Monster Heal",
                "+10 To Strength",
                "+10 To Vitality",
                "Damage Reduced by 8",
                "+1 To Light Radius",
                "Requirements -20%"
            ]
        },
        {
            "name": "Famine",
            "runes": [
                "fal",
                "ohm",
                "ort",
                "jah"
            ],
            "level": 65,
            "sockets": 4,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "axes",
                    "hammers"
                ]
            },
            "stats": [
                "30% Increased Attack Speed",
                "+320-370% Enhanced Damage",
                "Ignore Target's Defense",
                "Adds 180-200 Magic Damage",
                "Adds 50-200 Fire Damage",
                "Adds 51-250 Lightning Damage",
                "Adds 50-200 Cold Damage",
                "12% Life Stolen Per Hit",
                "Prevent Monster Heal",
                "+10 To Strength"
            ]
        },
        {
            "name": "Nadir",
            "runes": [
                "nef",
                "tir"
            ],
            "level": 13,
            "sockets": 2,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "helms"
                ]
            },
            "stats": [
                "+50% Enhanced Defense",
                "+10 Defense",
                "+30 Defense vs. Missile",
                "Level 13 Cloak of Shadows (9 Charges)",
                "+2 To Mana After Each Kill",
                "+5 To Strength",
                "-33% Extra Gold From Monsters",
                "-3 To Light Radius"
            ]
        },
        {
            "name": "Passion",
            "runes": [
                "dol",
                "ort",
                "eld",
                "lem"
            ],
            "level": 43,
            "sockets": 4,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": []
            },
            "stats": [
                "+25% Increased Attack Speed",
                "+160-210% Enhanced Damage",
                "50-80% Bonus To Attack Rating",
                "+75% Damage To Undead",
                "+50 To Attack Rating Against Undead",
                "Adds 1-50 Lightning Damage",
                "+1 To Berserk",
                "+1 To Zeal",
                "Hit Blinds Target +10",
                "Hit Causes Monster To Flee 25%",
                "75% Extra Gold From Monsters",
                "Level 3 Heart of Wolverine (12 Charges)"
            ]
        },
        {
            "name": "Enlightment",
            "runes": [
                "pul",
                "ral",
                "sol"
            ],
            "level": 45,
            "sockets": 3,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "body"
                ]
            },
            "stats": [
                "5% Chance To Cast Level 15 Blaze When Struck",
                "5% Chance To Cast level 15 Fire Ball On Striking",
                "+2 To Sorceress Skill Levels",
                "+1 To Warmth",
                "+30% Enhanced Defense",
                "Fire Resist +30%",
                "Damage Reduced By 7"
            ]
        },
        {
            "name": "Prudence",
            "runes": [
                "mal",
                "tir"
            ],
            "level": 49,
            "sockets": 2,
            "equipment": {
                "type": [
                    "armor"
                ],
                "subtype": [
                    "body"
                ]
            },
            "stats": [
                "+25% Faster Hit Recovery",
                "+140-170% Enhanced Defense",
                "All Resistances +25-35",
                "Damage Reduced by 3",
                "Magic Damage Reduced by 17",
                "+2 To Mana After Each Kill",
                "+1 To Light Radius",
                "Repairs Durability 1 In 4 Seconds"
            ]
        },
        {
            "name": "Zephyr",
            "runes": [
                "ort",
                "eth"
            ],
            "level": 21,
            "sockets": 2,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "missile"
                ]
            },
            "stats": [
                "+33% Enhanced Damage",
                "+66 To Attack Rating",
                "Adds 1-50 Lightning Damage",
                "-25% Target Defense",
                "+25 Defense",
                "25% Faster Run/Walk",
                "25% Increased Attack Speed",
                "7% Chance To Cast Level 1 Twister When Struck"
            ]
        },
        {
            "name": "King's Grace",
            "runes": [
                "amn",
                "ral",
                "thul"
            ],
            "level": 25,
            "sockets": 3,
            "equipment": {
                "type": [
                    "weapon"
                ],
                "subtype": [
                    "swords",
                    "scepters"
                ]
            },
            "stats": [
                "+100% Enhanced Damage",
                "+100% Damage To Demons",
                "+50% Damage To Undead",
                "Adds 5-30 Fire Damage",
                "Adds 3-14 Cold Damage - 3 Second Duration",
                "+150 To Attack Rating",
                "+100 To Attack Rating Against Demons",
                "+100 To Attack Rating Against Undead",
                "7% Life Stolen Per Hit"
            ]
        }
    ]

export default runewords;