from pathlib import Path
import textwrap

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
W, H = 1024, 1536
MARGIN = 46
GUTTER = 22

FONT_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
FONT_REGULAR = "/System/Library/Fonts/Supplemental/Arial.ttf"
FONT_BLACK = "/System/Library/Fonts/Supplemental/Arial Black.ttf"
FONT_MARKER = "/System/Library/Fonts/Supplemental/Comic Sans MS Bold.ttf"


def font(path, size):
    return ImageFont.truetype(path, size=size)


F = {
    "title": font(FONT_BLACK, 42),
    "subtitle": font(FONT_BOLD, 26),
    "body": font(FONT_REGULAR, 28),
    "body_bold": font(FONT_BOLD, 28),
    "small": font(FONT_REGULAR, 22),
    "small_bold": font(FONT_BOLD, 22),
    "sfx": font(FONT_MARKER, 62),
    "page": font(FONT_BOLD, 24),
}


PAGES = [
    {
        "number": 31,
        "title": "The Napkin Sequence",
        "palette": ("#244a63", "#f2d37b", "#f8f2e4"),
        "panels": [
            ("range snack bench", "Dad-San studies a napkin like it is a sacred map.", ["So the ball is not the boss?"]),
            ("Maru sketch", "Mr. Maru draws: pressure -> hips -> torso -> arms -> club.", ["Ball is witness.", "Ground sends message."]),
            ("quiet lesson", "Dad-San sees the downswing as a sequence, not a rescue mission.", ["Deep. Also napkin."]),
        ],
    },
    {
        "number": 32,
        "title": "Playground Transition",
        "palette": ("#2f6f68", "#f6c85f", "#f6efe3"),
        "panels": [
            ("playground", "Pip climbs the yellow slide, pauses, then whooshes down.", ["Down!"]),
            ("dad realization", "Dad-San watches the motion: setup, pause, shift, release.", ["Setup... pause... shift... release."]),
            ("mina check", "Mina catches him studying the slide like ancient golf law.", ["It does."]),
        ],
    },
    {
        "number": 33,
        "title": "Learning to Shift",
        "palette": ("#304766", "#f07750", "#f8f2e4"),
        "panels": [
            ("range ghosting", "Ghosted poses show pressure building from the top.", ["Pressure builds.", "Lower body starts."]),
            ("wobble", "Dad-San overdoes the move and nearly loses his lead foot.", ["WOBBLE!"]),
            ("reset", "Brad jokes, but Dad-San gets back to work.", ["Your left foot just tried to resign.", "Back to work..."]),
        ],
    },
    {
        "number": 34,
        "title": "Impact Is a Doorway",
        "palette": ("#183b49", "#d8a83f", "#f9f1e4"),
        "panels": [
            ("impact closeup", "Hands slightly ahead. Lead side firm. Body turning through.", ["TAK!"]),
            ("ball flight", "The ball compresses and launches cleanly from the mat.", ["Now ball listens."]),
            ("small victory", "Dad-San smiles at the honest sound.", ["I think it just did."]),
        ],
    },
    {
        "number": 35,
        "title": "The Work-Life Sequence",
        "palette": ("#273b55", "#55b7a5", "#f6efe3"),
        "panels": [
            ("office crisis", "Sticky notes, laptop alerts, and deadline chaos pile up.", ["What matters first?", "Who needs what?"]),
            ("task sequence", "Dad-San calmly orders the work like a downswing.", ["What can wait?", "What's next?", "Follow through."]),
            ("meeting save", "The team notices his strange new calm.", ["You seem unusually composed.", "I have learned not to start the downswing with my eyebrows."]),
        ],
    },
    {
        "number": 36,
        "title": "Last Practice Before the Scramble",
        "palette": ("#4e5166", "#f0a44c", "#fff0d8"),
        "panels": [
            ("sunset range", "Three shots at sunset: one good, one terrible, one okay.", ["One good shot.", "One terrible shot.", "One okay shot."]),
            ("fist bump", "Brad fist-bumps Dad-San with reluctant respect.", ["You might actually survive Saturday."]),
            ("repeat", "Dad-San laughs, tired but steadier.", ["That's the nicest threat I've ever received."]),
        ],
    },
    {
        "number": 37,
        "title": "Full Swing Spread",
        "palette": ("#1d3448", "#e7c24f", "#f8f2e4"),
        "panels": [
            ("full spread", "A ghosted full swing crosses the page: address, takeaway, top, transition, impact, finish.", ["I don't have to swing young."]),
            ("memory insets", "Tiny memories orbit: office, family, book, Mr. Maru, Pip's stickered glove.", ["I have to swing repeatable."]),
            ("lesson close", "The ball trail becomes a bright arc toward Saturday.", ["The body leads. The club follows. The ball tells the truth."]),
        ],
    },
    {
        "number": 38,
        "title": "Tournament Morning",
        "palette": ("#2b4c5a", "#f1c15b", "#f6efe3"),
        "panels": [
            ("garage packing", "Dad-San packs clubs, diapers, wipes, snacks, water, dino, moon eggs, and the lesson book.", ["Family Day Charity Scramble!"]),
            ("family audit", "Mina surveys the trunk with calm suspicion.", ["You packed more for golf than we packed for the hospital."]),
            ("dad logic", "Dad-San zips the bag like a tournament warrior.", ["Golf has more hazards."]),
        ],
    },
    {
        "number": 39,
        "title": "First Tee Terror",
        "palette": ("#315f50", "#f5d76e", "#f8f2e4"),
        "panels": [
            ("first tee", "Families and coworkers crowd the tee. Dad-San tightens up.", ["Hands tight. Feet soupy. Brain soup."]),
            ("tiny coach", "Pip shouts from the stroller and cuts through the panic.", ["SOF HANS!"]),
            ("fairway", "Dad-San breathes, sets, and sends one down the fairway.", ["Breathe. Grip. Set.", "THWIP!", "Dad-San in regulation play."]),
        ],
    },
    {
        "number": 40,
        "title": "The Comedy Hole",
        "palette": ("#3e4a35", "#e8564c", "#f8f2e4"),
        "panels": [
            ("greedy tee", "Dad-San decides to crush the drive on Hole 6.", ["I'll crush this drive."]),
            ("bush ball", "The ball rockets into a bush with maximum drama.", ["BLAKKA!", "Moon egg hiding!"]),
            ("review", "Mina raises an eyebrow. Dad-San accepts the lesson.", ["Review chapter?", "Review chapter."]),
        ],
    },
]


def draw_wrapped(draw, xy, text, box_width, fnt, fill="#16110d", spacing=7):
    x, y = xy
    avg = max(1, int(box_width / (fnt.size * 0.55)))
    lines = []
    for para in text.split("\n"):
      lines.extend(textwrap.wrap(para, width=avg) or [""])
    for line in lines:
        draw.text((x, y), line, font=fnt, fill=fill)
        y += fnt.size + spacing
    return y


def rounded(draw, box, radius, fill, outline="#16110d", width=5):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def bubble(draw, x, y, w, text, fill="#ffffff", outline="#16110d"):
    lines = textwrap.wrap(text, width=max(8, int(w / 17)))
    h = 32 + len(lines) * 28
    rounded(draw, (x, y, x + w, y + h), 18, fill, outline, 4)
    yy = y + 14
    for line in lines:
        draw.text((x + 18, yy), line, font=F["small_bold"], fill="#16110d")
        yy += 28
    return h


def draw_dad(draw, cx, cy, scale=1.0, pose="stand"):
    s = scale
    skin = "#c58f6c"
    blue = "#1f6fbc"
    gray = "#707070"
    orange = "#ff7a2f"
    black = "#171717"
    white = "#f8f8f2"
    draw.ellipse((cx - 34*s, cy - 82*s, cx + 34*s, cy - 16*s), fill=skin, outline=black, width=max(2, int(4*s)))
    draw.arc((cx - 24*s, cy - 50*s, cx + 24*s, cy - 18*s), 15, 165, fill=black, width=max(1, int(3*s)))
    draw.rectangle((cx - 26*s, cy - 55*s, cx - 4*s, cy - 42*s), outline=black, width=max(1, int(3*s)))
    draw.rectangle((cx + 4*s, cy - 55*s, cx + 26*s, cy - 42*s), outline=black, width=max(1, int(3*s)))
    draw.line((cx - 4*s, cy - 49*s, cx + 4*s, cy - 49*s), fill=black, width=max(1, int(2*s)))
    draw.polygon([(cx - 58*s, cy - 8*s), (cx + 58*s, cy - 8*s), (cx + 44*s, cy + 96*s), (cx - 44*s, cy + 96*s)], fill=blue, outline=black)
    draw.line((cx - 52*s, cy + 8*s, cx - 92*s, cy + 72*s), fill=skin, width=max(8, int(16*s)))
    draw.line((cx + 52*s, cy + 8*s, cx + 92*s, cy + 72*s), fill=skin, width=max(8, int(16*s)))
    draw.ellipse((cx + 82*s, cy + 60*s, cx + 112*s, cy + 90*s), fill=white, outline=black, width=max(1, int(3*s)))
    draw.rectangle((cx - 42*s, cy + 94*s, cx - 8*s, cy + 178*s), fill=gray, outline=black, width=max(1, int(3*s)))
    draw.rectangle((cx + 8*s, cy + 94*s, cx + 42*s, cy + 178*s), fill=gray, outline=black, width=max(1, int(3*s)))
    draw.ellipse((cx - 52*s, cy + 166*s, cx - 2*s, cy + 192*s), fill=orange, outline=black, width=max(1, int(3*s)))
    draw.ellipse((cx + 2*s, cy + 166*s, cx + 52*s, cy + 192*s), fill=orange, outline=black, width=max(1, int(3*s)))
    if pose == "swing":
        draw.line((cx + 82*s, cy + 62*s, cx + 154*s, cy - 96*s), fill=black, width=max(2, int(5*s)))


def draw_pip(draw, cx, cy, scale=1.0):
    s = scale
    skin = "#edb18c"
    pink = "#f3a1bf"
    black = "#171717"
    draw.ellipse((cx - 24*s, cy - 52*s, cx + 24*s, cy - 4*s), fill=skin, outline=black, width=max(1, int(3*s)))
    draw.ellipse((cx - 36*s, cy - 8*s, cx + 36*s, cy + 68*s), fill=pink, outline=black, width=max(1, int(3*s)))
    draw.ellipse((cx - 28*s, cy - 66*s, cx - 6*s, cy - 44*s), fill="#3a2118")
    draw.ellipse((cx + 6*s, cy - 66*s, cx + 28*s, cy - 44*s), fill="#3a2118")
    draw.arc((cx - 14*s, cy - 30*s, cx + 14*s, cy - 12*s), 20, 160, fill=black, width=max(1, int(2*s)))


def draw_maru(draw, cx, cy, scale=1.0):
    s = scale
    skin = "#b48364"
    vest = "#394a3c"
    black = "#171717"
    draw.ellipse((cx - 30*s, cy - 74*s, cx + 30*s, cy - 14*s), fill=skin, outline=black, width=max(1, int(3*s)))
    draw.pieslice((cx - 42*s, cy - 92*s, cx + 42*s, cy - 38*s), 180, 360, fill="#20292b", outline=black, width=max(1, int(3*s)))
    draw.polygon([(cx - 46*s, cy - 8*s), (cx + 46*s, cy - 8*s), (cx + 36*s, cy + 92*s), (cx - 36*s, cy + 92*s)], fill=vest, outline=black)
    draw.line((cx - 20*s, cy - 40*s, cx - 8*s, cy - 36*s), fill=black, width=max(1, int(3*s)))
    draw.line((cx + 8*s, cy - 36*s, cx + 20*s, cy - 40*s), fill=black, width=max(1, int(3*s)))


def draw_mina(draw, cx, cy, scale=1.0):
    s = scale
    skin = "#d6a180"
    shirt = "#6f8f86"
    black = "#171717"
    hair = "#251915"
    draw.ellipse((cx - 30*s, cy - 72*s, cx + 30*s, cy - 12*s), fill=skin, outline=black, width=max(1, int(3*s)))
    draw.pieslice((cx - 38*s, cy - 82*s, cx + 38*s, cy - 20*s), 180, 360, fill=hair, outline=hair)
    draw.polygon([(cx - 48*s, cy - 6*s), (cx + 48*s, cy - 6*s), (cx + 36*s, cy + 90*s), (cx - 36*s, cy + 90*s)], fill=shirt, outline=black)
    draw.line((cx - 16*s, cy - 36*s, cx - 6*s, cy - 32*s), fill=black, width=max(1, int(3*s)))
    draw.line((cx + 6*s, cy - 32*s, cx + 16*s, cy - 36*s), fill=black, width=max(1, int(3*s)))


def draw_golf_stuff(draw, box, kind, accent):
    x1, y1, x2, y2 = box
    if "napkin" in kind or "sketch" in kind:
        nap = (x1 + 70, y1 + 100, x2 - 70, y2 - 80)
        rounded(draw, nap, 10, "#fff8dc", "#5c4d36", 4)
        y = nap[1] + 50
        labels = ["PRESSURE", "HIPS", "TORSO", "ARMS", "CLUB"]
        step_w = (nap[2] - nap[0] - 90) // 5
        for i, label in enumerate(labels):
            cx = nap[0] + 55 + i * step_w
            draw.ellipse((cx - 26, y - 26, cx + 26, y + 26), fill=accent, outline="#16110d", width=3)
            draw.text((cx - 38, y + 42), label, font=F["small_bold"], fill="#16110d")
            if i < len(labels) - 1:
                draw.line((cx + 32, y, cx + step_w - 32, y), fill="#16110d", width=5)
                draw.polygon([(cx + step_w - 32, y), (cx + step_w - 48, y - 10), (cx + step_w - 48, y + 10)], fill="#16110d")
    if "range" in kind or "impact" in kind or "fairway" in kind or "tee" in kind or "practice" in kind:
        ground = y2 - 110
        draw.rectangle((x1 + 20, ground, x2 - 20, y2 - 20), fill="#5ba66d", outline="#16110d", width=3)
        for i in range(5):
            draw.line((x1 + 30 + i * 85, ground, x1 + 80 + i * 120, y2 - 20), fill="#d7efc4", width=2)
        for i in range(4):
            bx = x1 + 100 + i * 70
            by = ground - 18 - i * 9
            draw.ellipse((bx, by, bx + 18, by + 18), fill="#ffffff", outline="#16110d", width=2)
    if "playground" in kind:
        draw.rectangle((x1 + 70, y2 - 180, x2 - 70, y2 - 40), fill="#90c97d", outline="#16110d", width=3)
        draw.polygon([(x1 + 180, y2 - 180), (x1 + 420, y2 - 180), (x1 + 500, y2 - 50), (x1 + 260, y2 - 50)], fill="#f7d050", outline="#16110d")
        draw.line((x1 + 170, y2 - 180, x1 + 170, y1 + 80), fill="#654321", width=9)
        draw.line((x1 + 430, y2 - 180, x1 + 430, y1 + 80), fill="#654321", width=9)
    if "office" in kind:
        draw.rectangle((x1 + 70, y2 - 210, x2 - 80, y2 - 50), fill="#c8d7e6", outline="#16110d", width=4)
        draw.rectangle((x1 + 120, y2 - 300, x1 + 390, y2 - 175), fill="#f6f6fa", outline="#16110d", width=4)
        for i, color in enumerate(["#f7d45d", "#f48a76", "#8dd4c8", "#f7d45d"]):
            draw.rectangle((x2 - 260, y1 + 80 + i * 58, x2 - 80, y1 + 122 + i * 58), fill=color, outline="#16110d", width=2)
    if "garage" in kind:
        draw.rectangle((x1 + 80, y2 - 240, x2 - 80, y2 - 50), fill="#b8c5c0", outline="#16110d", width=4)
        draw.rectangle((x1 + 140, y2 - 180, x1 + 420, y2 - 65), fill="#44505a", outline="#16110d", width=5)
        for i in range(4):
            draw.line((x2 - 210 + i * 18, y2 - 230, x2 - 250 + i * 6, y1 + 110), fill="#16110d", width=5)
    if "bush" in kind:
        for i in range(9):
            cx = x1 + 120 + i * 72
            cy = y2 - 120 - (i % 3) * 24
            draw.ellipse((cx - 70, cy - 55, cx + 70, cy + 55), fill="#3c7d42", outline="#17421e", width=3)


def page_layout(draw, spec):
    accent = spec["palette"][1]
    bg = spec["palette"][2]
    dark = spec["palette"][0]
    draw.rectangle((0, 0, W, H), fill=bg)
    draw.rectangle((0, 0, W, 128), fill=dark)
    draw.text((MARGIN, 24), f"PAGE {spec['number']}", font=F["subtitle"], fill=accent)
    draw.text((MARGIN, 62), spec["title"], font=F["title"], fill="#ffffff")
    eyebrow = "LESSON FIVE: SEQUENCE AND REVIEW"
    series = "FAIRWAY FORTY"
    series_box = draw.textbbox((0, 0), series, font=F["small_bold"])
    eyebrow_box = draw.textbbox((0, 0), eyebrow, font=F["small"])
    draw.text((W - MARGIN - (series_box[2] - series_box[0]), 28), series, font=F["small_bold"], fill="#ffffff")
    draw.text((W - MARGIN - (eyebrow_box[2] - eyebrow_box[0]), 72), eyebrow, font=F["small"], fill=accent)
    draw.rectangle((MARGIN, 128, W - MARGIN, 136), fill=accent)

    if spec["number"] == 37:
        panels = [
            (MARGIN, 168, W - MARGIN, 820),
            (MARGIN, 842, (W - GUTTER) // 2, 1264),
            ((W + GUTTER) // 2, 842, W - MARGIN, 1264),
        ]
    else:
        panels = [
            (MARGIN, 168, W - MARGIN, 560),
            (MARGIN, 582, W - MARGIN, 974),
            (MARGIN, 996, W - MARGIN, 1392),
        ]

    for i, (box, panel) in enumerate(zip(panels, spec["panels"])):
        kind, narration, quotes = panel
        x1, y1, x2, y2 = box
        fill = "#ffffff" if i % 2 == 0 else "#f5ead7"
        rounded(draw, box, 18, fill, "#16110d", 6)
        draw_golf_stuff(draw, box, kind, accent)
        if "Maru" in narration or "Maru" in kind or "napkin" in kind:
            draw_maru(draw, x1 + 120, y2 - 190, 1.0)
        if "Mina" in narration or "mina" in kind:
            draw_mina(draw, x2 - 130, y2 - 180, 1.0)
        if "Pip" in narration or "Pip" in " ".join(quotes) or "playground" in kind:
            draw_pip(draw, x2 - 140, y2 - 155, 0.9)
        draw_dad(draw, x1 + 190, y2 - 210, 1.05, "swing" if ("swing" in kind or "impact" in kind or "tee" in kind) else "stand")

        caption_y = y1 + 22
        draw_wrapped(draw, (x1 + 22, caption_y), narration, x2 - x1 - 44, F["small"], "#36281d")

        by = y1 + 92
        for quote in quotes[:3]:
            if quote in ("TAK!", "THWIP!", "BLAKKA!", "WOBBLE!"):
                draw.text((x2 - 260, y1 + 34), quote, font=F["sfx"], fill=accent, stroke_width=3, stroke_fill="#16110d")
            else:
                by += bubble(draw, x2 - 395, by, 350, quote) + 10

    draw.text((W - 148, H - 54), str(spec["number"]), font=F["page"], fill="#16110d")


def main():
    for spec in PAGES:
        image = Image.new("RGB", (W, H), "#f8f2e4")
        draw = ImageDraw.Draw(image)
        page_layout(draw, spec)
        out = ROOT / f"fairway-forty-page-{spec['number']:02d}.png"
        image.save(out, optimize=True)
        print(out)


if __name__ == "__main__":
    main()
