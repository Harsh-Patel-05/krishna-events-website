import json
import urllib.request
from pathlib import Path

OUT = Path(r"c:\Users\harsh\OneDrive\Personal\Krishna Events Website\public\images\instagram")
OUT.mkdir(parents=True, exist_ok=True)

# High-quality feed images from @krishna_eventss (Ahmedabad)
ITEMS = [
    {
        "file": "ig-01.jpg",
        "category": "Weddings",
        "title": "Bridal portrait · Ahmedabad",
        "alt": "Bride in ornate headpiece at an Ahmedabad wedding by Krishna Events",
        "url": "https://instagram.fbom61-1.fna.fbcdn.net/v/t51.82787-15/910828294_18385324327234819_36664472135936074_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ccb=7-5&_nc_sid=58cdad&_nc_ohc=y_hq0Q_QuTwQ7kNvwHbSd7H&_nc_oc=AdqSXU8GXSu2Iw810rCI3XA6w7Jmu69rYt_GfsYAOANqFpdLcRym8SQDsugnGymP_gk&_nc_zt=23&_nc_ht=instagram.fbom61-1.fna&oh=00_AQShi6c2OjM2S2IUCLi5lcsa-id5L1Lzdf-bsIb07ECa_w&oe=6B0A1A50",
    },
    {
        "file": "ig-02.jpg",
        "category": "Weddings",
        "title": "Couple celebration · Ahmedabad",
        "alt": "Smiling couple at their Ahmedabad wedding celebration with Krishna Events",
        "url": "https://instagram.fbom19-1.fna.fbcdn.net/v/t51.82787-15/914384607_18385191745234819_9028052525283059375_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=7-5&_nc_sid=58cdad&_nc_ohc=82B3D6CT0IoQ7kNvwGmeI2S&_nc_oc=AdqK2UPhdIABBFoi8cP1H5MB9Q5S8d8npXzCCfmr7TmHbYIsknzJUpAfWb4lilYufJM&_nc_zt=23&_nc_ht=instagram.fbom19-1.fna&oh=00_AQTa4ug6arVEfNBhyENv6H0c6FiLPqi77svvgQ0i1lMz6g&oe=6B0A08FA",
    },
    {
        "file": "ig-03.jpg",
        "category": "Decorations",
        "title": "Reception décor · Ahmedabad",
        "alt": "Candlelit reception décor with chandeliers and drapes in Ahmedabad",
        "url": "https://instagram.fbom19-4.fna.fbcdn.net/v/t51.82787-15/907833851_18385022674234819_3190452648719076050_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=7-5&_nc_sid=58cdad&_nc_ohc=4me-tI6YlC8Q7kNvwGhaoFS&_nc_oc=AdpidF0ccw4m_MA2knvCUTlMDvKjv81NjPG-mlkzyK3K3DdoxThpPpe8diw-ARG0Lqc&_nc_zt=23&_nc_ht=instagram.fbom19-4.fna&oh=00_AQQd4oGOn_gVExRNnCFXuR3TMqCA3cx3eceHddb0dh7D-g&oe=6B0A18A1",
    },
    {
        "file": "ig-04.jpg",
        "category": "Weddings",
        "title": "Dance floor moment",
        "alt": "Couple dancing in celebration at a Krishna Events wedding",
        "url": "https://instagram.fbom19-3.fna.fbcdn.net/v/t51.82787-15/901941249_18384851668234819_3709796323738054625_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=7-5&_nc_sid=58cdad&_nc_ohc=chxYV3izyWYQ7kNvwGGk5vR&_nc_oc=AdofDwLQ2fq0P0OKO75oWHh3P_BKj2XS4zDT5I6gX0oDx1nSVf1YMHqzuI0rVkV7lgc&_nc_zt=23&_nc_ht=instagram.fbom19-3.fna&oh=00_AQT_mJwOUCAQ7ohP_8PnLIDJCbpg9Mnq6PHpu5iyByCQ0g&oe=6B09F469",
    },
    {
        "file": "ig-05.jpg",
        "category": "Decorations",
        "title": "Table styling",
        "alt": "Elegant wedding table setting styled by Krishna Events in Ahmedabad",
        "url": "https://instagram.fbom19-5.fna.fbcdn.net/v/t51.82787-15/902236638_18384672706234819_5652341672468598852_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ccb=7-5&_nc_sid=58cdad&_nc_ohc=JiTTgq-PaXIQ7kNvwE6mWfn&_nc_oc=AdptuhJ-Vd_vU0OJFHlHRtf380XbHSvtaLTq3SfbVyXxbJXauav0YJ4eFlqFIt4HTw8&_nc_zt=23&_nc_ht=instagram.fbom19-5.fna&oh=00_AQQ1Be-dFdxZi7qvaki3HyeWDzjCN-DTY_VKTt-1Gob7sw&oe=6B0A0732",
    },
    {
        "file": "ig-06.jpg",
        "category": "Receptions",
        "title": "Stage & entertainment",
        "alt": "Wedding stage and entertainment setup by Krishna Events",
        "url": "https://instagram.fbom19-4.fna.fbcdn.net/v/t51.82787-15/899626509_18384529126234819_6065952774799578361_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=7-5&_nc_sid=58cdad&_nc_ohc=3ZFYK4DmJ8sQ7kNvwFz4SfU&_nc_oc=Adp2mzdrLxUPNmahEMYUU9HLmihBdxmKLRA7FlzcMxURnzECCsRgGf9CtVJFHtAQBP0&_nc_zt=23&_nc_ht=instagram.fbom19-4.fna&oh=00_AQTgpDznfLc8RKBPBr8rTEdI4eGNF54NrumU0sogTCSi6w&oe=6B0A1B85",
    },
    {
        "file": "ig-07.jpg",
        "category": "Pre-Wedding",
        "title": "Sangeet entry",
        "alt": "Sangeet entry celebration planned by Krishna Events",
        "url": "https://instagram.fbom19-3.fna.fbcdn.net/v/t51.71878-15/641272839_925481716639346_3838432505565933950_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=108&ccb=7-5&_nc_sid=58cdad&_nc_ohc=6s4zfBT-pcIQ7kNvwFPnjcq&_nc_oc=AdoXvk6Wmz-clv4FtwQCUNSXtmithi6aPzPvKjjIZieVa68oNLzwD9MqDLswWnhWLfs&_nc_zt=23&_nc_ht=instagram.fbom19-3.fna&oh=00_AQT-JvVIntl8kftXRoMZEoroART1DKHoIQ5o2EmK2hIFwg&oe=6B0A18A3",
    },
    {
        "file": "ig-08.jpg",
        "category": "Weddings",
        "title": "Bride & groom entry",
        "alt": "Grand bride and groom entry by Krishna Events",
        "url": "https://instagram.fbom61-1.fna.fbcdn.net/v/t51.71878-15/764350737_1662622472532604_4407917339278048924_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=109&ccb=7-5&_nc_sid=58cdad&_nc_ohc=_BRJqtiZ2y8Q7kNvwF8v41R&_nc_oc=AdrNzVNEliDBGZSiAHUQ0yGqhj59Rl7lhUIqwgVz7qxUv6USw-Fa0orksx1T9m0OdJs&_nc_zt=23&_nc_ht=instagram.fbom61-1.fna&oh=00_AQTkKq8b90Xg7_74TZTGY64N9T2AxaDBYJCI23llILdg4A&oe=6B0A0AA8",
    },
    {
        "file": "ig-09.jpg",
        "category": "Weddings",
        "title": "Varmala · Rishi & Drasti",
        "alt": "Krishna-theme varmala ceremony for Rishi and Drasti by Krishna Events",
        "url": "https://instagram.fbom19-3.fna.fbcdn.net/v/t51.71878-15/472088440_2373776706290142_7375160180700611112_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=108&ccb=7-5&_nc_sid=58cdad&_nc_ohc=pXSvTsnSvpIQ7kNvwErVAIk&_nc_oc=Adox78krlyaa4xzafPqkmW8kyr3bJFzS1rwB4P96sTjF1KpU-t4ldQpoHXFQ7CVoK_4&_nc_zt=23&_nc_ht=instagram.fbom19-3.fna&oh=00_AQSJHswZ30Z9KdpZFuijWJIO8z2mGUivUMuZTN9BTM7mqA&oe=6B09F1DD",
    },
    {
        "file": "ig-10.jpg",
        "category": "Weddings",
        "title": "Carnival wedding entry",
        "alt": "Shaadi ka carnival themed bride and groom entry by Krishna Events",
        "url": "https://instagram.fbom19-1.fna.fbcdn.net/v/t51.71878-15/903843025_1136626625416471_2587737492972737318_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=108&ccb=7-5&_nc_sid=58cdad&_nc_ohc=DA6MbRr02MoQ7kNvwGTtWSx&_nc_oc=Ado_w_Owcf21CPIjuefBvc5DGLgepX-_6-wPs5AACbx9sE5UD_rQ0T0ze6SgPUx1vmQ&_nc_zt=23&_nc_ht=instagram.fbom19-1.fna&oh=00_AQRz_EGh78pi37Ua-nf-8vQdbfpNcsNcqWMbakyBSS5mMg&oe=6B0A13E4",
    },
    {
        "file": "ig-11.jpg",
        "category": "Pre-Wedding",
        "title": "Sangeet carnival vibes",
        "alt": "Sangeet carnival celebration staged by Krishna Events",
        "url": "https://instagram.fbom61-1.fna.fbcdn.net/v/t51.71878-15/890716849_1777079483748039_9186683527669966165_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=105&ccb=7-5&_nc_sid=58cdad&_nc_ohc=sz0INydi-EQQ7kNvwFwQZUZ&_nc_oc=Adplh6zpvUwWs-Z_ji-h8KE1fkYBbiGqzZbLMdNuqanj6ch5sBBNS6duuG4e-Xxx9ZU&_nc_zt=23&_nc_ht=instagram.fbom61-1.fna&oh=00_AQRvbTs10aiz4u7Vzilex7BaUKy4FE7bSWC7-6P52BQB4Q&oe=6B0A0C0E",
    },
    {
        "file": "ig-12.jpg",
        "category": "Weddings",
        "title": "Entry & varmala moments",
        "alt": "Grand wedding entry and varmala moments by Krishna Events",
        "url": "https://instagram.fbom61-1.fna.fbcdn.net/v/t51.82787-15/919208483_18385560754234819_1502674024639313674_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=106&ccb=7-5&_nc_sid=58cdad&_nc_ohc=MwlvxW0x_cYQ7kNvwHhR_WW&_nc_oc=AdoHkHAn-VV-kStfH8JIlLBOVSArKGBdYunsYBzbFKFazifTLIX5jEqsPnivI8Pkc08&_nc_zt=23&_nc_ht=instagram.fbom61-1.fna&oh=00_AQSzbyPH2iaVN6oho0ASbN3AMLGJt2yPc0wANr1Nua4VfA&oe=6B09F6C0",
    },
]

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Referer": "https://www.instagram.com/",
}

manifest = []
for item in ITEMS:
    dest = OUT / item["file"]
    try:
        req = urllib.request.Request(item["url"], headers=headers)
        with urllib.request.urlopen(req, timeout=60) as resp:
            data = resp.read()
        dest.write_bytes(data)
        print("ok", item["file"], len(data))
        manifest.append(
            {
                "id": item["file"].replace(".jpg", ""),
                "src": f"/images/instagram/{item['file']}",
                "category": item["category"],
                "title": item["title"],
                "alt": item["alt"],
            }
        )
    except Exception as e:
        print("fail", item["file"], e)

(OUT / "manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
print("manifest", len(manifest))
