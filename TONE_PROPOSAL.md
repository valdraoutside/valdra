# VALDRA Site Tone Proposal

Proposed copy changes to make the site sound like the Substack. Nothing in here is live yet. We go through it section by section, you say yes / no / tweak, and I apply the approved ones.

Source material: all 15 public posts on valdraoutside.substack.com (Aug 2025 to Apr 2026, ~10.7k words). Ten of those were written by Lilla, three by Katie, two were joint. So the "house voice" below is a blend, weighted toward Katie's recent posts since those are the current voice of the brand.

No proposed copy in this doc uses em-dashes.

---

## Part 1: What the Substack voice actually is

These are the patterns that show up again and again. The site breaks almost all of them.

| Substack does this | Examples from the posts | The site currently does this instead |
|---|---|---|
| Talks like a friend, not a brand | "Hi allllll", "Sheesh, hey y'all", "pretty people", "peeps", "Lilla hereee!" | "Everything you need to know about VALDRA and our mission" |
| Names real places | Manaslu Circuit, Ajax Peak, Bilk in Ilium, Mill Creek, Montrose ("Mo-Town"), Western Slope | "the summit, the hidden trail", "urban exploration", "city streets" |
| Admits the hard parts | "our wallets are hurting", "we believe in our vision a ton, maybe too much? The jury's still out", "Trial and error, folks." | "rigorous standards", "Quality First", "Every detail matters." |
| Short punchy lines after a long one | "Go slow, to go fast.", "So we made it.", "It's never too late to start. But you gotta start." | Mostly even, medium-length marketing sentences |
| Credits the people around them | Hat colorways "inspired by someone we love", Katy drew the logo, Matthew wouldn't lower Lilla off the wall | "Community Driven", "Built by adventurers, for adventurers" |
| Uses its own catchphrases | "it will be worth it", "See you out there", "Peace to you and everyone you love", "stoked / re-stoked", "XO" | "Join the Adventure", "build something incredible together" |
| Swears a little, jokes a lot | "damn good", "learn on the damn fly", "Tigger to my Eeyore (rude)" | Zero personality outside the Contact page TikTok joke |

**What to cut site-wide:** "adventurers" (used 8 times), "innovation / innovate" (7), "community-driven", "empower", "curious souls", "bold", "exceptional", "rigorous", "authentic". Nobody at VALDRA writes like this on Substack.

**What to lean into:** Telluride specifics, "it will be worth it", honesty about being small and scrappy, naming people, and the sign-offs.

---

## Part 2: The founder story (Lilla)

**Current state.** Lilla is named in 3 places on the About page:
- `About.js:24`, "Hi! We're Lilla & Katie, best buds who started VALDRA..."
- `About.js:37`, photo alt text "Lilla and Katie"
- `About.js:247`, signature "Lilla & Katie"

Also stale: `About.js:28` says "trekking through the Himalayas **last April**". That was April 2025, so it's now wrong.

**The goal:** keep the "two best friends started this on a trail in Nepal" story, which is the heart of the brand, without implying Lilla is still on the team.

There are three ways to do it. Pick one.

### Option A: Name her, past tense (recommended)
Honest, warm, and keeps the origin story fully intact. It reads as "this is where we came from", not as a breakup announcement.

> **Our Story**
>
> VALDRA started on the Manaslu Circuit in Nepal in April 2025. Katie and her best friend Lilla were carrying everything on their backs, and their gear kept falling apart on them. They decided someone should build better stuff. Then they figured, why not us?
>
> They came home to Telluride and got to work. The name came out of nowhere because they just liked how it sounded. Then a friend told them *valdrá* is Spanish for "it will be worth it." That felt like a sign.
>
> Lilla has since moved on to her next adventure, and we're forever grateful she helped light the fire. The best friend energy stays. It's in every hat colorway inspired by someone we love, every shoot with our friends on the Western Slope, and every person who's helped us get here.
>
> It will be worth it.

### Option B: Don't name her, keep the friendship
Tells the same story with no names. Lower-key, and nobody outside the inner circle will ask questions.

> **Our Story**
>
> VALDRA started with two best friends on the Manaslu Circuit in Nepal in April 2025. Carrying everything on our backs, we watched our gear fail when we needed it most. We wanted something better. So we decided to make it.
>
> We came back to Telluride and got to work. We picked the name because it sounded good. Then a friend told us *valdrá* means "it will be worth it" in Spanish. Felt like a sign.
>
> VALDRA has always been built by friends, for friends. That hasn't changed.

### Option C: Katie up front, Lilla credited as co-founder
Treats Lilla like a founding credit rather than part of the story.

> **Our Story**
>
> Hi, I'm Katie. I started VALDRA with my best friend and co-founder Lilla Burns after a trek on the Manaslu Circuit in Nepal, where our gear quit long before we did...

**Other spots to update, whichever option you pick:**

| Where | Before | After |
|---|---|---|
| `About.js:37` photo alt | `Lilla and Katie` | `VALDRA's founders on the trail` (A/B) or keep as is (C, since it's a real photo of them) |
| `About.js:247` signature | *Let's get out there,* **Lilla & Katie** | *See you out there,* **Katie & the VALDRA crew** |

**Question for you:** do you want Lilla's photo (`extra5.jpeg`) to stay? It's a great picture of the friendship. I'd keep it with Option A.

---

## Part 3: Page-by-page before / after

Numbered so you can just say "yes to 3, 5, 7, no to 4".

### Landing page (`src/pages/Landing.js`)

**1. Intro heading + paragraph**

| Before | After |
|---|---|
| **Building gear for the bold** | **Gear that keeps up** |
| We're creating products that keep up with your adventures. From hiking the Himalayas to navigating city streets, VALDRA is for people who get outside and go for it. | We're building gear for the people who go big, get a little scraped up, and come back for more. From the Manaslu Circuit to a sunset lap on Mill Creek, VALDRA is for anyone who'd rather be outside. |

**2. The three feature cards**

| Before | After |
|---|---|
| **Adventure Ready**, Gear designed for real-world exploration | **Trail Tested**, Tried on our own skis, bikes, and climbing walls before it's ever sold to you |
| **Community Driven**, Built by adventurers, for adventurers | **Built by Friends**, Every colorway is inspired by someone we love |
| **Innovation First**, Rethinking outdoor essentials from the ground up | **Built from Scratch**, A lot of trial and error and a kitchen turned into a lab |

**3. Mission**

| Before | After |
|---|---|
| VALDRA is more than equipment. It's about inspiring people to share in the adventure. We're building a lasting outdoor community rooted in connection, resilience, and innovation. | VALDRA is gear, but it's mostly people. The friends who let us film them, the locals who bought out our first drops, the folks who sat down with us when we had no idea what we were doing. We want to build something that lasts as long as they do. |
| We're committed to pursuing B Corp certification, holding ourselves to high environmental and social standards. | We're working toward B Corp certification, because the places we play in are worth protecting. |

**4. Bottom CTA**

| Before | After |
|---|---|
| **Join the Community** | **Come Along for the Ride** |
| Stay connected as we build something incredible together. Be the first to know when our products launch. | We write about the wins, the flops, and everything in between on Substack. Subscribe and you'll hear about new drops first. |

### About page (`src/pages/About.js`)

**5. Hero subtitle**

| Before | After |
|---|---|
| Building gear and community for adventurers who go for it | Started by best friends on a trail in Nepal. Built in Telluride. |

(If you pick Option B or C above, this still works.)

**6. Who We're Building For**

| Before | After |
|---|---|
| **The Adventurer**, Those who seek the summit, the hidden trail, the next great challenge. You need gear that performs when everything depends on it. | **The Send-It Crew**, Skiing 100 days a season, linking climbs, chasing the next big trip. You need gear that doesn't quit before you do. |
| **The Explorer**, Curious souls who find adventure in unexpected places. From urban exploration to weekend camping trips. | **The Wanderer**, The ones who pull over at the random roadside orchard. Weekend camping, the long way home, whatever looks fun. |
| **The Community**, People who believe that the best adventures are shared. Building connections through outdoor experiences. | **The Crew**, The friends who belay you, film you, and won't let you quit halfway up the wall. |

**7. Why We're Taking Our Time**

| Before | After |
|---|---|
| **Quality Over Speed**, We'd rather take the time to create something exceptional than rush a mediocre product to market. Every detail matters. | **Go Slow to Go Fast**, We'd rather get it right than get it out. Rushing a patch that peels off mid-climb helps nobody. |
| **Real-World Testing**, Our products need to perform in the most demanding conditions. We test extensively to ensure reliability when it counts. | **Tested on Us First**, Every prototype goes skiing, hiking, and climbing with us. If it can't handle sweat and friction, it doesn't make the cut. |
| **Sustainable Production**, Finding the right manufacturing partners who align with our values of environmental and social responsibility. | **Partners We Trust**, We work with US partners we actually know by name (shoutout Steve). |

**8. Our Values**

| Before | After |
|---|---|
| **Quality First**, We won't release anything until it meets our rigorous standards for durability and performance. | **Worth It**, It's in the name. If it isn't worth it, we won't sell it. |
| **Community Driven**, Every decision we make considers our community of adventurers and their real-world needs. | **Our People First**, The Western Slope crew got us here. We build with them in mind. |
| **Environmental Responsibility**, Planning to pursue B Corp certification... | **Protect the Playground**, We're working toward B Corp certification to keep ourselves honest about our impact. |
| **Authentic Innovation**, We innovate to solve real problems, not just to be different. Function drives form. | **Solve Real Problems**, We started this because our own gear failed us. Every design starts from a real blister, not a mood board. |

**9. Prototype progress intro**: light touch, it's already close.

| Before | After |
|---|---|
| We've pushed through iterations one and two and are now deep in our third, where things are finally clicking. Here's where each piece stands today. | Iterations one and two are behind us, and round three is where it's finally clicking. Here's where everything stands (wallets are hurting, spirits are high). |

### FAQ page (`src/pages/FAQ.js`)

**10. Hero subtitle**

| Before | After |
|---|---|
| Everything you need to know about VALDRA and our mission | The stuff people ask us at the Skidola booth. |

**11. "Why are you being secretive about the product?"**

| Before | After |
|---|---|
| We're in an early prototyping stage where every small decision matters. By keeping details quiet, we protect the innovation, ensure proper testing, and give the launch its best chance to succeed. The secrecy isn't hype. It's integrity. You'll be the first to know when it's ready. | Honestly? We've poured a lot of late nights (and money) into this, and we want to get it right before we show it off. Some of it is still being tested in our kitchen. Subscribe to the Substack and you'll be the first to see it. |

**12. "Does VALDRA have a mission beyond this product?"**

| Before | After |
|---|---|
| Yes. Our mission is to build a lasting outdoor community rooted in connection, resilience, and innovation. We aim to design affordable, durable gear that empowers people to stay out longer... At its core, VALDRA is about more than equipment. It's about inspiring people to share in the adventure. | Yes. We want to make affordable, tough gear that keeps people out longer, and build a crew of people who love being outside as much as we do. We're also working toward B Corp certification, because the mountains we play in deserve it. |

**13. "Where are you based?"**

| Before | After |
|---|---|
| We're rooted in Telluride, Colorado, but we're building a global community of outdoor enthusiasts. Our Western Slope roots keep us grounded in authentic outdoor culture. | Telluride, Colorado. Best backyard on the planet, and the Western Slope crew that got us here. |

**14. Bottom CTA**

| Before | After |
|---|---|
| **Ready to Join the Adventure?** Be part of our community and get early access to updates, events, and product launches. | **Still Curious?** Come hang. We post the real updates on Substack, and the fun stuff on Instagram and TikTok. |

### Contact page (`src/pages/Contact.js`)

**15. Hero + form intro**

| Before | After |
|---|---|
| Ready to join the adventure? We'd love to hear from you. | Say hi. We read everything. |
| Whether you want to join our community, have questions about our products, or just want to say hello, we're here to connect. | Questions about an order, want to collab, or just want to tell us about your last big day out? Drop us a note. |

(The "necessary evil, we aren't TikTok people" joke stays. It's the most on-brand line on the whole site.)

### Shop page (`src/pages/Shop.js`)

**16. Newsletter block**

| Before | After |
|---|---|
| **Get Notified**, Subscribe to our Substack to be the first to know when new drops land. Free signup: drop your email on the next page and you're in. | **Don't Miss the Next Drop**, Our last two drops sold out in under 30 hours. Subscribe on Substack (it's free) and you'll hear about the next one first. |
| **Follow Our Journey** | **See You Out There** |

### Site-wide

**17. Sign-offs.** Use the Substack sign-offs consistently: "See you out there." for CTAs and "Peace to you and everyone you love." for the footer.

**18. Footer location blurb**

| Before | After |
|---|---|
| Building a global outdoor community | Made with love on the Western Slope |

**19. Footer tagline (`Recover faster. Live wilder.`):** keep it. It's short, it's yours, and it's in the hero carousel too. Just flagging that it's the one line I'd *not* touch.

---

## Part 4: Already done in this branch

- Vietnam shipping-pause banner on the Shop page.
- Removed all 10 em-dashes from the site (Landing, About, FAQ, Contact, Shop, and one CSS comment). Each was rewritten as a period, colon, or comma so the sentence still reads naturally.

**Can't be fixed from this repo:** product titles and descriptions inside the Shopify Buy Button come from Shopify admin. If any of those have em-dashes, they need editing in Shopify.
