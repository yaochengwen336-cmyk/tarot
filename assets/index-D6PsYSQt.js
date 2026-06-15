const CARDS = [
  {
    "id": 0,
    "name": "The Fool",
    "suit": "major",
    "imagePath": "tarot-cards/66_The_Fool.webp",
    "keywords": "new beginnings, spontaneity, leap of faith",
    "shortReading": "The Fool walks into your life to remind you that every great journey begins with a single step. You are standing at the edge of something new, and the universe is asking you to trust, not to overthink. Let go of the need to control every outcome. Yes, there is uncertainty ahead, but there is also infinite possibility. Take the leap. Your story is just beginning."
  },
  {
    "id": 1,
    "name": "The Magician",
    "suit": "major",
    "imagePath": "tarot-cards/67_The_Magician.webp",
    "keywords": "manifestation, power, focused intention",
    "shortReading": "The Magician appears when the tools you need are already in your hands. You have everything required to create the reality you desire -skill, will, and alignment. This is not about luck. It is about channeling your energy with intention. Stop waiting for permission. The universe has already given you the green light. Now it is time to act."
  },
  {
    "id": 2,
    "name": "The High Priestess",
    "suit": "major",
    "imagePath": "tarot-cards/68_The_High_Priestess.webp",
    "keywords": "intuition, mystery, inner wisdom",
    "shortReading": "The High Priestess calls you inward. There is something you already know, deep beneath the noise of daily life. The answer is not outside -it is waiting in the quiet space between your thoughts. Pay attention to your dreams, your gut feelings, the signs you keep dismissing as coincidence. Trust what whispers, not what shouts."
  },
  {
    "id": 3,
    "name": "The Empress",
    "suit": "major",
    "imagePath": "tarot-cards/69_The_Empress.webp",
    "keywords": "abundance, nurturing, creativity",
    "shortReading": "The Empress brings a season of growth and nourishment. She wants you to slow down and receive. You have been pushing so hard, but now is the time to let things bloom naturally. Create something beautiful. Tend to your body and your heart. Abundance flows to those who allow themselves to be cared for -including by themselves."
  },
  {
    "id": 4,
    "name": "The Emperor",
    "suit": "major",
    "imagePath": "tarot-cards/70_The_Emperor.webp",
    "keywords": "authority, structure, stability",
    "shortReading": "The Emperor stands firm in your reading, asking you to build something that lasts. Chaos may feel exciting, but right now you need order. Set boundaries. Create routines. Take ownership of your life with the quiet confidence of someone who knows their worth. Leadership is not about control -it is about clarity."
  },
  {
    "id": 5,
    "name": "The Hierophant",
    "suit": "major",
    "imagePath": "tarot-cards/71_The_Hierophant.webp",
    "keywords": "tradition, guidance, spiritual wisdom",
    "shortReading": "The Hierophant reminds you that you do not have to figure everything out alone. There is wisdom in tradition, in teachers, in the paths that others have walked before you. Seek mentorship. Join a community. Sometimes the most rebellious thing you can do is humbly ask for guidance and follow through."
  },
  {
    "id": 6,
    "name": "The Lovers",
    "suit": "major",
    "imagePath": "tarot-cards/72_The_Lovers.webp",
    "keywords": "love, harmony, meaningful choices",
    "shortReading": "The Lovers card is about more than romance -it is about alignment. You are being asked to make a choice from the heart, not from fear. Whether it is a relationship, a career path, or a personal value, ask yourself: Does this reflect who I truly am? Choose the path that feels like coming home to yourself."
  },
  {
    "id": 7,
    "name": "The Chariot",
    "suit": "major",
    "imagePath": "tarot-cards/73_The_Chariot.webp",
    "keywords": "determination, willpower, victory",
    "shortReading": "The Chariot charges forward with unstoppable momentum. You have been preparing for this moment, and now it is time to move. Obstacles will appear, but you have the strength to overcome them. Stay focused on your goal. Do not let distractions pull you off course. Victory belongs to those who keep going when others would stop."
  },
  {
    "id": 8,
    "name": "Strength",
    "suit": "major",
    "imagePath": "tarot-cards/74_Strength.webp",
    "keywords": "courage, inner power, compassion",
    "shortReading": "Strength is quiet. It is not about forcing or fighting. It is about the gentle power of patience, compassion, and unshakable self-belief. You are stronger than you realize. Whatever challenge you are facing right now, meet it with softness, not aggression. That is where your true power lives."
  },
  {
    "id": 9,
    "name": "The Hermit",
    "suit": "major",
    "imagePath": "tarot-cards/75_The_Hermit.webp",
    "keywords": "introspection, solitude, inner guidance",
    "shortReading": "The Hermit lights a lantern in the dark and invites you to pause. You have been seeking answers everywhere except within. Step back from the noise. Spend time alone. The clarity you crave will not come from another person or another scroll -it will come from the still, small voice inside you that has been waiting to be heard."
  },
  {
    "id": 10,
    "name": "Wheel of Fortune",
    "suit": "major",
    "imagePath": "tarot-cards/76_Wheel_of_Fortune.webp",
    "keywords": "change, cycles, destiny",
    "shortReading": "The Wheel is turning, and your life is shifting. What felt stuck is now in motion. Change can feel like loss, but it can also feel like liberation. You are entering a new cycle, and the only constant is that nothing stays the same. Trust the rhythm. What goes around comes around, and fortune is spinning in your direction."
  },
  {
    "id": 11,
    "name": "Justice",
    "suit": "major",
    "imagePath": "tarot-cards/77_Justice.webp",
    "keywords": "fairness, truth, accountability",
    "shortReading": "Justice arrives when truth can no longer be avoided. You are being called to look at a situation honestly -not how you wish it were, but how it actually is. Take responsibility for your part. If you have been wronged, know that balance will be restored. The universe sees everything. Nothing is forgotten."
  },
  {
    "id": 12,
    "name": "The Hanged Man",
    "suit": "major",
    "imagePath": "tarot-cards/78_The_Hanged_Man.webp",
    "keywords": "surrender, new perspective, pause",
    "shortReading": "The Hanged Man hangs upside down, not as punishment, but as an invitation to see differently. Something in your life needs you to stop struggling and simply let go. Surrender is not weakness. Sometimes the most powerful thing you can do is pause, breathe, and allow a new perspective to emerge."
  },
  {
    "id": 13,
    "name": "Death",
    "suit": "major",
    "imagePath": "tarot-cards/61_Death.webp",
    "keywords": "transformation, endings, rebirth",
    "shortReading": "Death does not mean literal death -it means transformation. Something in your life is ending so that something new can begin. It may hurt. Let it. Grieve what is leaving, but do not cling to what no longer serves you. The clearing is coming. And after the clearing, new growth. You are being reborn."
  },
  {
    "id": 14,
    "name": "Temperance",
    "suit": "major",
    "imagePath": "tarot-cards/62_Temperance.webp",
    "keywords": "balance, patience, harmony",
    "shortReading": "Temperance brings a gentle reminder: extremes will break you. You need balance -between work and rest, giving and receiving, holding on and letting go. Blend the different parts of your life with care. There is no rush. Healing and creation both happen in their own time."
  },
  {
    "id": 15,
    "name": "The Devil",
    "suit": "major",
    "imagePath": "tarot-cards/63_The_Devil.webp",
    "keywords": "attachment, shadow self, liberation",
    "shortReading": "The Devil appears to show you the chains you have placed on yourself. What are you addicted to? What belief, relationship, or habit keeps you small? The uncomfortable truth is that the door to your cage has always been open. You are not trapped. You are just afraid to leave. But you can. Right now."
  },
  {
    "id": 16,
    "name": "The Tower",
    "suit": "major",
    "imagePath": "tarot-cards/64_The_Tower.webp",
    "keywords": "sudden change, upheaval, revelation",
    "shortReading": "The Tower shakes everything you thought was solid. It feels like destruction -but it is actually liberation. What crumbles was never meant to last. The structures built on illusion must fall so truth can rise. This is painful, yes. But you will look back and realize this was the moment you finally became free."
  },
  {
    "id": 17,
    "name": "The Star",
    "suit": "major",
    "imagePath": "tarot-cards/65_The_Star.webp",
    "keywords": "hope, healing, inspiration",
    "shortReading": "The Star appears after the storm to remind you that light always returns. You have been through so much, and yet here you are -still standing, still hoping. This is a time of deep healing. Pour your energy into what nourishes your soul. Believe in beautiful possibilities again. The universe is on your side."
  },
  {
    "id": 18,
    "name": "The Moon",
    "suit": "major",
    "imagePath": "tarot-cards/01_The_Moon.webp",
    "keywords": "uncertainty, intuition, hidden truth",
    "shortReading": "The Moon casts a pale light over everything you have been avoiding. Things are not as clear as you would like them to be, and that is okay. Not everything needs to be understood right now. Trust your intuition even when logic fails. The path will reveal itself one step at a time. Walk carefully, but keep walking."
  },
  {
    "id": 19,
    "name": "The Sun",
    "suit": "major",
    "imagePath": "tarot-cards/02_The_Sun.webp",
    "keywords": "joy, success, vitality",
    "shortReading": "The Sun radiates pure, undeniable energy. This is your moment. Success, happiness, clarity -they are all flooding into your life right now. Let yourself enjoy it. You have earned this warmth. Children laugh and flowers bloom under the Sun, and so do you. Celebrate. Shine. Share your light without apology."
  },
  {
    "id": 20,
    "name": "Judgement",
    "suit": "major",
    "imagePath": "tarot-cards/03_Judgement.webp",
    "keywords": "awakening, renewal, calling",
    "shortReading": "Judgement calls you to rise. You are being asked to reflect on your journey and make peace with your past so you can step fully into your purpose. A new chapter is not just beginning -it is calling your name. Answer it. You are ready for more than you think. This is your awakening."
  },
  {
    "id": 21,
    "name": "The World",
    "suit": "major",
    "imagePath": "tarot-cards/04_The_World.webp",
    "keywords": "completion, fulfillment, wholeness",
    "shortReading": "The World spins in perfect balance, and so do you. A cycle is completing. Look at how far you have come. Every challenge, every victory, every lesson has brought you to this moment of wholeness. You are not just arriving -you are arriving as your fullest self. Celebrate the journey. Then prepare for the next one."
  },
  {
    "id": 22,
    "name": "Ace of Wands",
    "suit": "wands",
    "imagePath": "tarot-cards/05_Ace_of_Wands.webp",
    "keywords": "inspiration, new venture, creative spark",
    "shortReading": "A spark of pure creative energy has entered your life. This is the seed of something powerful -a new project, a fresh passion, a bold idea. Do not let it fade. Nurture it with action. The universe is handing you a torch. It is your job to carry it forward."
  },
  {
    "id": 23,
    "name": "Two of Wands",
    "suit": "wands",
    "imagePath": "tarot-cards/06_Two_of_Wands.webp",
    "keywords": "planning, future vision, bold decisions",
    "shortReading": "You stand at a crossroads with the world at your feet. The Two of Wands asks you to think bigger than your current circumstances. What would you do if you knew you could not fail? Make the plan. Take the first step. Your future self is waiting."
  },
  {
    "id": 24,
    "name": "Three of Wands",
    "suit": "wands",
    "imagePath": "tarot-cards/07_Three_of_Wands.webp",
    "keywords": "expansion, foresight, progress",
    "shortReading": "Your vision is expanding, and the horizon is wider than you thought. The Three of Wands signals that your plans are taking shape. Ships are returning to harbor. Stay patient but stay ready. The groundwork you have laid is about to pay off."
  },
  {
    "id": 25,
    "name": "Four of Wands",
    "suit": "wands",
    "imagePath": "tarot-cards/08_Four_of_Wands.webp",
    "keywords": "celebration, harmony, homecoming",
    "shortReading": "A moment of joy and stability has arrived. The Four of Wands celebrates milestones -a completion, a union, a homecoming. Let yourself enjoy this. You have worked hard to get here. Gather your people and celebrate. You deserve this warmth."
  },
  {
    "id": 26,
    "name": "Five of Wands",
    "suit": "wands",
    "imagePath": "tarot-cards/09_Five_of_Wands.webp",
    "keywords": "conflict, competition, tension",
    "shortReading": "Conflict is in the air. The Five of Wands shows competition, clashing egos, and chaotic energy. Not every battle is yours to fight. Choose your battles wisely. Sometimes the friction is exactly what you need to sharpen your skills and clarify your purpose."
  },
  {
    "id": 27,
    "name": "Six of Wands",
    "suit": "wands",
    "imagePath": "tarot-cards/10_Six_of_Wands.webp",
    "keywords": "victory, recognition, public acclaim",
    "shortReading": "Victory is yours. The Six of Wands rides in with recognition and public success. People are noticing your efforts. Accept the praise with grace, but remember: this is a milestone, not the destination. Keep moving forward with humility and confidence."
  },
  {
    "id": 28,
    "name": "Seven of Wands",
    "suit": "wands",
    "imagePath": "tarot-cards/11_Seven_of_Wands.webp",
    "keywords": "perseverance, defense, standing ground",
    "shortReading": "You are being challenged, and you are holding your ground. The Seven of Wands is about defending what you have built. Stand tall. Your conviction is your shield. Others may doubt you, but you know your truth. Do not back down now."
  },
  {
    "id": 29,
    "name": "Eight of Wands",
    "suit": "wands",
    "imagePath": "tarot-cards/12_Eight_of_Wands.webp",
    "keywords": "speed, action, swift movement",
    "shortReading": "Things are moving fast. The Eight of Wands brings swift action, messages, and sudden developments. Delays are clearing. What felt stuck is now in rapid motion. Stay alert and be ready to catch the opportunities flying toward you."
  },
  {
    "id": 30,
    "name": "Nine of Wands",
    "suit": "wands",
    "imagePath": "tarot-cards/13_Nine_of_Wands.webp",
    "keywords": "resilience, last stand, endurance",
    "shortReading": "You are weary but still standing. The Nine of Wands speaks of resilience in the face of exhaustion. You have been through so much, and yet here you are. One more push. The final barrier is the one that tests your spirit the most. You are stronger than you know."
  },
  {
    "id": 31,
    "name": "Ten of Wands",
    "suit": "wands",
    "imagePath": "tarot-cards/14_Ten_of_Wands.webp",
    "keywords": "burden, responsibility, hard work",
    "shortReading": "You are carrying a heavy load. The Ten of Wands acknowledges your hard work but also asks: is all of this yours to carry? Delegate. Release. You do not have to do everything alone. The finish line is near, but you need to lighten your load to cross it."
  },
  {
    "id": 32,
    "name": "Page of Wands",
    "suit": "wands",
    "imagePath": "tarot-cards/15_Page_of_Wands.webp",
    "keywords": "exploration, enthusiasm, new passion",
    "shortReading": "A new passion is calling. The Page of Wands brings curiosity, enthusiasm, and the spark of a fresh adventure. Say yes to exploration. You do not need to have it all figured out. The joy is in the discovery. Follow what lights you up."
  },
  {
    "id": 33,
    "name": "Knight of Wands",
    "suit": "wands",
    "imagePath": "tarot-cards/16_Knight_of_Wands.webp",
    "keywords": "adventure, bold action, impulsiveness",
    "shortReading": "Bold energy is charging into your life. The Knight of Wands is passionate, impulsive, and ready for action. Channel this fire wisely. Adventure is calling, but do not burn bridges in your enthusiasm. Move fast, but move with purpose."
  },
  {
    "id": 34,
    "name": "Queen of Wands",
    "suit": "wands",
    "imagePath": "tarot-cards/17_Queen_of_Wands.webp",
    "keywords": "confidence, warmth, determination",
    "shortReading": "The Queen of Wands radiates warmth, confidence, and magnetic energy. She reminds you to own your power unapologetically. You are a creator, a leader, a force of nature. Let your light shine brightly. Others are drawn to your fire -use it to inspire, not to consume."
  },
  {
    "id": 35,
    "name": "King of Wands",
    "suit": "wands",
    "imagePath": "tarot-cards/18_King_of_Wands.webp",
    "keywords": "leadership, vision, entrepreneurship",
    "shortReading": "The King of Wands is a visionary leader. He asks you to take the reins with boldness and integrity. You have the experience and the fire to lead others toward a greater vision. Step into your authority. The world needs your unique brand of leadership."
  },
  {
    "id": 36,
    "name": "Ace of Cups",
    "suit": "cups",
    "imagePath": "tarot-cards/19_Ace_of_Cups.webp",
    "keywords": "new love, emotional beginning, overflow",
    "shortReading": "A wave of new emotional energy is flooding in. The Ace of Cups signals the beginning of love, deep connection, or creative inspiration. Open your heart. Let it overflow. This is a gift from the universe -receive it fully, without hesitation or fear."
  },
  {
    "id": 37,
    "name": "Two of Cups",
    "suit": "cups",
    "imagePath": "tarot-cards/20_Two_of_Cups.webp",
    "keywords": "partnership, deep connection, mutual attraction",
    "shortReading": "A deep and meaningful connection is forming. The Two of Cups speaks of partnership, mutual respect, and soul-deep understanding. Whether romantic or platonic, this bond is real. Nurture it with honesty and vulnerability. Two souls recognizing each other is a sacred thing."
  },
  {
    "id": 38,
    "name": "Three of Cups",
    "suit": "cups",
    "imagePath": "tarot-cards/21_Three_of_Cups.webp",
    "keywords": "friendship, celebration, community joy",
    "shortReading": "Celebration and friendship surround you. The Three of Cups is about community, joy, and shared happiness. Gather your people. Dance, laugh, toast to life. These connections are your foundation. Do not take them for granted."
  },
  {
    "id": 39,
    "name": "Four of Cups",
    "suit": "cups",
    "imagePath": "tarot-cards/22_Four_of_Cups.webp",
    "keywords": "apathy, contemplation, missed opportunities",
    "shortReading": "You are feeling disconnected, bored, or unfulfilled. The Four of Cups shows someone staring at three cups while a fourth is being offered. What opportunity are you overlooking? Open your eyes. The answer may be right in front of you, waiting to be noticed."
  },
  {
    "id": 40,
    "name": "Five of Cups",
    "suit": "cups",
    "imagePath": "tarot-cards/23_Five_of_Cups.webp",
    "keywords": "loss, grief, focusing on lack",
    "shortReading": "Loss and grief weigh heavy on your heart. The Five of Cups acknowledges your pain -but look up. Two cups still stand behind you. Not all is lost. Allow yourself to mourn, but do not let sorrow blind you to what remains. Healing begins when you turn around."
  },
  {
    "id": 41,
    "name": "Six of Cups",
    "suit": "cups",
    "imagePath": "tarot-cards/24_Six_of_Cups.webp",
    "keywords": "nostalgia, memories, childhood joy",
    "shortReading": "Sweet memories are visiting you. The Six of Cups brings nostalgia, innocence, and the warmth of the past. Someone from your history may reappear, or you may find comfort in familiar places. Let the past nourish you, but do not live there. The present has its own gifts."
  },
  {
    "id": 42,
    "name": "Seven of Cups",
    "suit": "cups",
    "imagePath": "tarot-cards/25_Seven_of_Cups.webp",
    "keywords": "choices, dreams, illusion vs reality",
    "shortReading": "You are faced with many options, and not all are real. The Seven of Cups warns against illusion and wishful thinking. Ground yourself. Separate fantasy from reality. The shiniest option is not always the truest. Choose with clarity, not with desperation."
  },
  {
    "id": 43,
    "name": "Eight of Cups",
    "suit": "cups",
    "imagePath": "tarot-cards/26_Eight_of_Cups.webp",
    "keywords": "walking away, seeking deeper meaning",
    "shortReading": "You are walking away from something that no longer serves your heart. The Eight of Cups is a courageous departure. It hurts to leave, but staying would hurt more. You are seeking deeper meaning, and that requires leaving shallow waters. Walk on. Deeper seas await."
  },
  {
    "id": 44,
    "name": "Nine of Cups",
    "suit": "cups",
    "imagePath": "tarot-cards/27_Nine_of_Cups.webp",
    "keywords": "wishes fulfilled, contentment, emotional satisfaction",
    "shortReading": "Your wishes are coming true. The Nine of Cups is the wish card -emotional fulfillment, contentment, and joy. You have worked on your inner world, and now it shows. Savor this moment. You have earned this happiness. Let yourself feel fully satisfied."
  },
  {
    "id": 45,
    "name": "Ten of Cups",
    "suit": "cups",
    "imagePath": "tarot-cards/28_Ten_of_Cups.webp",
    "keywords": "emotional fulfillment, family harmony, happy ending",
    "shortReading": "Emotional fulfillment overflows. The Ten of Cups is the happy ending -family, love, belonging, and deep peace. You have found your tribe, your home, your heart's true place. This is what you have been building toward. Bask in it. You are exactly where you belong."
  },
  {
    "id": 46,
    "name": "Page of Cups",
    "suit": "cups",
    "imagePath": "tarot-cards/29_Page_of_Cups.webp",
    "keywords": "creative inspiration, intuitive message, new feelings",
    "shortReading": "A message from the heart is arriving. The Page of Cups brings creative inspiration, intuitive nudges, and the stirring of new emotions. Pay attention to your dreams and your gut feelings. Something beautiful is being born within you. Nurture it gently."
  },
  {
    "id": 47,
    "name": "Knight of Cups",
    "suit": "cups",
    "imagePath": "tarot-cards/30_Knight_of_Cups.webp",
    "keywords": "romantic proposal, following the heart, idealism",
    "shortReading": "The Knight of Cups rides in with romance, charm, and heartfelt proposals. He follows his heart wherever it leads. This is a time for emotional bravery -express your feelings, make the grand gesture, wear your heart on your sleeve. Vulnerability is your superpower."
  },
  {
    "id": 48,
    "name": "Queen of Cups",
    "suit": "cups",
    "imagePath": "tarot-cards/31_Queen_of_Cups.webp",
    "keywords": "emotional depth, compassion, nurturing intuition",
    "shortReading": "The Queen of Cups embodies deep emotional wisdom and compassion. She asks you to trust your intuition above all else. You feel things deeply, and that is not a weakness -it is your greatest gift. Hold space for others, but also for yourself. Your empathy is a healing force."
  },
  {
    "id": 49,
    "name": "King of Cups",
    "suit": "cups",
    "imagePath": "tarot-cards/32_King_of_Cups.webp",
    "keywords": "emotional maturity, diplomacy, calm authority",
    "shortReading": "The King of Cups has mastered his emotions without suppressing them. He is calm, diplomatic, and deeply wise. You are being called to lead with your heart while keeping your head. Emotional maturity is not about feeling less -it is about channeling feelings with grace and purpose."
  },
  {
    "id": 50,
    "name": "Ace of Swords",
    "suit": "swords",
    "imagePath": "tarot-cards/33_Ace_of_Swords.webp",
    "keywords": "clarity, breakthrough, new idea, truth",
    "shortReading": "A breakthrough of clarity is cutting through the fog. The Ace of Swords brings a new idea, a moment of truth, a realization that changes everything. Your mind is sharp. Use it. Speak your truth with precision. This clarity is a weapon and a gift."
  },
  {
    "id": 51,
    "name": "Two of Swords",
    "suit": "swords",
    "imagePath": "tarot-cards/34_Two_of_Swords.webp",
    "keywords": "difficult choice, stalemate, indecision",
    "shortReading": "You are caught between two difficult choices, and neither feels easy. The Two of Swords reflects a mental stalemate. You cannot stay blindfolded forever. Remove the blindfold. Face the truth you have been avoiding. The only way out is through."
  },
  {
    "id": 52,
    "name": "Three of Swords",
    "suit": "swords",
    "imagePath": "tarot-cards/35_Three_of_Swords.webp",
    "keywords": "heartbreak, sorrow, painful truth",
    "shortReading": "Heartbreak has pierced you. The Three of Swords acknowledges your pain -betrayal, loss, grief. This hurts, and it is supposed to. Let the tears fall. Pain is not a sign of weakness; it is a sign that you loved deeply. The wound will heal, but first you must feel it."
  },
  {
    "id": 53,
    "name": "Four of Swords",
    "suit": "swords",
    "imagePath": "tarot-cards/36_Four_of_Swords.webp",
    "keywords": "rest, recovery, mental retreat",
    "shortReading": "Your mind needs rest. The Four of Swords calls for a mental retreat -step back, meditate, sleep, heal. You have been overthinking and overworking. Peace is not laziness. Give your brain the silence it craves. Clarity comes after stillness."
  },
  {
    "id": 54,
    "name": "Five of Swords",
    "suit": "swords",
    "imagePath": "tarot-cards/37_Five_of_Swords.webp",
    "keywords": "conflict, defeat, hollow victory",
    "shortReading": "Conflict has left its mark. The Five of Swords shows a battle won at great cost. Was this victory worth the damage? Sometimes walking away is the real win. Pride can be a prison. Choose your battles -and know when to lay down your sword."
  },
  {
    "id": 55,
    "name": "Six of Swords",
    "suit": "swords",
    "imagePath": "tarot-cards/38_Six_of_Swords.webp",
    "keywords": "transition, moving forward, leaving behind",
    "shortReading": "You are moving toward calmer waters. The Six of Swords signals a transition -leaving behind turbulence for something more peaceful. It may feel bittersweet, but forward is the only direction. The past has taught you enough. Now row toward the horizon."
  },
  {
    "id": 56,
    "name": "Seven of Swords",
    "suit": "swords",
    "imagePath": "tarot-cards/39_Seven_of_Swords.webp",
    "keywords": "deception, strategy, hidden motives",
    "shortReading": "Not everything is as it seems. The Seven of Swords warns of deception, strategy, and hidden agendas -possibly your own. Are you being fully honest? Is someone else? Trust your instincts. What is done in the shadows will eventually come to light."
  },
  {
    "id": 57,
    "name": "Eight of Swords",
    "suit": "swords",
    "imagePath": "tarot-cards/40_Eight_of_Swords.webp",
    "keywords": "self-imposed limitation, trapped thinking",
    "shortReading": "You feel trapped, but the prison is in your mind. The Eight of Swords shows self-imposed limitations. The ropes are loose. The blindfold can be removed. You are not as powerless as you believe. Change your thinking, and the cage dissolves."
  },
  {
    "id": 58,
    "name": "Nine of Swords",
    "suit": "swords",
    "imagePath": "tarot-cards/41_Nine_of_Swords.webp",
    "keywords": "anxiety, nightmares, overthinking",
    "shortReading": "Anxiety is keeping you awake at night. The Nine of Swords represents the darkest hour before dawn -the worries that spiral in the quiet. These fears are real to you, but they are not the full truth. Reach out. Speak your fears aloud. They lose power in the light."
  },
  {
    "id": 59,
    "name": "Ten of Swords",
    "suit": "swords",
    "imagePath": "tarot-cards/42_Ten_of_Swords.webp",
    "keywords": "rock bottom, painful ending, finality",
    "shortReading": "You have hit rock bottom, and it feels final. The Ten of Swords is the painful ending -but endings are also beginnings. The only way from here is up. Let the old story die completely. You are being released from something that was never meant to last. Dawn is coming."
  },
  {
    "id": 60,
    "name": "Page of Swords",
    "suit": "swords",
    "imagePath": "tarot-cards/43_Page_of_Swords.webp",
    "keywords": "curiosity, new ideas, mental agility",
    "shortReading": "A curious mind is awakening. The Page of Swords brings intellectual hunger, new ideas, and the desire to learn. Ask questions. Challenge assumptions. Your mind is a sword being sharpened. Stay curious, but remember: words can cut. Wield them with care."
  },
  {
    "id": 61,
    "name": "Knight of Swords",
    "suit": "swords",
    "imagePath": "tarot-cards/44_Knight_of_Swords.webp",
    "keywords": "determination, swift action, intellectual pursuit",
    "shortReading": "The Knight of Swords charges forward with fierce determination and sharp intellect. He is fast, focused, and unstoppable. Channel this energy toward your goals, but watch your speed -do not trample others in your pursuit. Precision over recklessness."
  },
  {
    "id": 62,
    "name": "Queen of Swords",
    "suit": "swords",
    "imagePath": "tarot-cards/45_Queen_of_Swords.webp",
    "keywords": "clear perception, direct communication, independence",
    "shortReading": "The Queen of Swords sees through all illusions. She is independent, perceptive, and unafraid of the truth. You are being called to communicate with clarity and set firm boundaries. Your mind is your greatest asset. Trust your judgment. You already know what needs to be done."
  },
  {
    "id": 63,
    "name": "King of Swords",
    "suit": "swords",
    "imagePath": "tarot-cards/46_King_of_Swords.webp",
    "keywords": "intellectual power, truth, ethical authority",
    "shortReading": "The King of Swords wields intellectual authority with ethical precision. He asks you to lead with logic, fairness, and truth. Make decisions based on facts, not emotions. Your clarity of thought is a gift to those around you. Use your power to create justice, not judgment."
  },
  {
    "id": 64,
    "name": "Ace of Pentacles",
    "suit": "pentacles",
    "imagePath": "tarot-cards/47_Ace_of_Pentacles.webp",
    "keywords": "new opportunity, prosperity, manifestation",
    "shortReading": "A golden opportunity is landing in your hands. The Ace of Pentacles signals new prosperity, a career opening, or a tangible gift from the universe. This is not just luck -it is the seed of something lasting. Plant it wisely. Nurture it with consistent effort. Abundance is on its way."
  },
  {
    "id": 65,
    "name": "Two of Pentacles",
    "suit": "pentacles",
    "imagePath": "tarot-cards/48_Two_of_Pentacles.webp",
    "keywords": "balance, adaptability, juggling priorities",
    "shortReading": "You are juggling multiple priorities, and balance is key. The Two of Pentacles asks you to stay adaptable. Life is in constant motion -income, expenses, time, energy. You can handle it all, but not all at once. Prioritize. Flow with the changes rather than fighting them."
  },
  {
    "id": 66,
    "name": "Three of Pentacles",
    "suit": "pentacles",
    "imagePath": "tarot-cards/49_Three_of_Pentacles.webp",
    "keywords": "teamwork, collaboration, skilled work",
    "shortReading": "Collaboration is your path to success. The Three of Pentacles celebrates teamwork, skilled craftsmanship, and shared vision. You do not have to build alone. Seek out those who complement your skills. Together, you can create something far greater than any individual effort."
  },
  {
    "id": 67,
    "name": "Four of Pentacles",
    "suit": "pentacles",
    "imagePath": "tarot-cards/50_Four_of_Pentacles.webp",
    "keywords": "security, possessiveness, holding tight",
    "shortReading": "You are holding tightly to what you have -money, security, control. The Four of Pentacles warns against possessiveness. Security is important, but hoarding blocks the flow of abundance. Open your hands. What you cling to out of fear, you may lose. What you share freely multiplies."
  },
  {
    "id": 68,
    "name": "Five of Pentacles",
    "suit": "pentacles",
    "imagePath": "tarot-cards/52_Five_of_Pentacles.webp",
    "keywords": "hardship, isolation, spiritual poverty",
    "shortReading": "You are experiencing material or spiritual hardship. The Five of Pentacles shows two figures in the cold, walking past a warm church. Help is closer than you think. Do not let pride keep you from asking for support. This too shall pass. You are not alone, even when you feel invisible."
  },
  {
    "id": 69,
    "name": "Six of Pentacles",
    "suit": "pentacles",
    "imagePath": "tarot-cards/51_Six_of_Pentacles.webp",
    "keywords": "generosity, giving and receiving, charity",
    "shortReading": "Generosity flows in both directions. The Six of Pentacles is about giving and receiving with grace. If you have abundance, share it. If you are in need, accept help without shame. The cycle of generosity keeps the world turning. What you give returns to you multiplied."
  },
  {
    "id": 70,
    "name": "Seven of Pentacles",
    "suit": "pentacles",
    "imagePath": "tarot-cards/53_Seven_of_Pentacles.webp",
    "keywords": "patience, assessment, long-term growth",
    "shortReading": "Patience is your ally. The Seven of Pentacles shows a gardener assessing their growing tree. You have planted seeds and done the work. Now wait. Growth cannot be rushed. Evaluate your progress honestly, but do not dig up the seeds to check if they are growing. Trust the process."
  },
  {
    "id": 71,
    "name": "Eight of Pentacles",
    "suit": "pentacles",
    "imagePath": "tarot-cards/54_Eight_of_Pentacles.webp",
    "keywords": "dedication, craftsmanship, skill building",
    "shortReading": "You are deep in the craft, honing your skills with dedication. The Eight of Pentacles is the card of the apprentice -focused, repetitive, committed to mastery. Every hour you put in is building something valuable. Keep going. Excellence is not an accident. It is earned in the quiet hours."
  },
  {
    "id": 72,
    "name": "Nine of Pentacles",
    "suit": "pentacles",
    "imagePath": "tarot-cards/55_Nine_of_Pentacles.webp",
    "keywords": "independence, luxury, self-sufficiency",
    "shortReading": "You have achieved a level of independence and self-sufficiency. The Nine of Pentacles celebrates your hard-won comfort and luxury. You did this. Enjoy the fruits of your labor without guilt. You have built a life of beauty and security. Walk through your garden with pride."
  },
  {
    "id": 73,
    "name": "Ten of Pentacles",
    "suit": "pentacles",
    "imagePath": "tarot-cards/56_Ten_of_Pentacles.webp",
    "keywords": "legacy, wealth, family abundance",
    "shortReading": "Lasting abundance and family legacy are yours. The Ten of Pentacles represents generational wealth, deep roots, and enduring prosperity. This is not just about money -it is about what you are building for the future. Your efforts create ripples that will outlast you. Build with legacy in mind."
  },
  {
    "id": 74,
    "name": "Page of Pentacles",
    "suit": "pentacles",
    "imagePath": "tarot-cards/57_Page_of_Pentacles.webp",
    "keywords": "study, new skill, practical ambition",
    "shortReading": "A new skill or study is calling you. The Page of Pentacles brings practical ambition and the hunger to learn. This is the perfect time to start that course, learn that craft, or invest in your growth. Small, consistent steps lead to mastery. Begin today."
  },
  {
    "id": 75,
    "name": "Knight of Pentacles",
    "suit": "pentacles",
    "imagePath": "tarot-cards/58_Knight_of_Pentacles.webp",
    "keywords": "hard work, routine, reliability",
    "shortReading": "Steady, reliable, and hardworking -the Knight of Pentacles gets things done. He may not be flashy, but he finishes what he starts. This is a time for diligence and routine. Keep showing up. The slow and steady path is the one that actually reaches the destination."
  },
  {
    "id": 76,
    "name": "Queen of Pentacles",
    "suit": "pentacles",
    "imagePath": "tarot-cards/59_Queen_of_Pentacles.webp",
    "keywords": "practical nurturing, financial wisdom, comfort",
    "shortReading": "The Queen of Pentacles nurtures with practical wisdom. She creates a warm, abundant home and manages resources with grace. You are being called to care for your physical world -your body, your finances, your environment. Practical love is real love. Tend to what matters."
  },
  {
    "id": 77,
    "name": "King of Pentacles",
    "suit": "pentacles",
    "imagePath": "tarot-cards/60_King_of_Pentacles.webp",
    "keywords": "wealth, business mastery, security",
    "shortReading": "The King of Pentacles has mastered the material world. He is wealthy, stable, and generous. You have built something solid and lasting. Now use your abundance to support others. True wealth is not just what you accumulate -it is what you contribute. You are the steady hand others can rely on."
  }
];
const REVEAL_VIDEO_SRC = "assets/tarot-reveal-4x3.mp4";
const REVEAL_CARD_BACK_SRC = "assets/reveal-card-back.png";
const REVEAL_STOP_SECONDS = 8.2;
const root = document.getElementById("root");
let userQuestion = "";
let deckCards = [];
let selectedCard = null;
let currentReadingText = "";
const suitNames = { major: "Major Arcana", wands: "Wands", cups: "Cups", swords: "Swords", pentacles: "Pentacles" };
function escapeHtml(value) { return String(value ?? "").replace(/[&<>'"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[ch])); }
function shuffleCards() { return [...CARDS].sort(() => Math.random() - 0.5).slice(0, 3); }
function pageShell(content) {
  root.innerHTML = `<div class="min-h-screen text-mystic-text font-sans relative"><div class="fixed inset-0 z-0 bg-[#0a0a1a]"><div class="absolute inset-0 opacity-30" style="background-image:url('bg-cosmic.png');background-size:cover;background-position:center;background-repeat:no-repeat;background-attachment:fixed"></div><canvas id="particle-canvas" class="absolute inset-0"></canvas></div><div class="fixed inset-0 z-[1] bg-black/40"></div><main class="relative z-10 min-h-screen"><div class="relative min-h-screen overflow-hidden"><div class="relative z-10 container mx-auto px-4 py-8 max-w-4xl">${content}</div></div></main></div>`;
  startParticles();
}
function startParticles() {
  const canvas = document.getElementById("particle-canvas"); if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const particles = Array.from({ length: 80 }, () => ({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, r: Math.random() * 1.8 + 0.4, speedX: (Math.random() - 0.5) * 0.3, speedY: (Math.random() - 0.5) * 0.3 - 0.2, opacity: Math.random() * 0.6 + 0.2, pulse: Math.random() * Math.PI * 2, pulseSpeed: Math.random() * 0.02 + 0.01 }));
  const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
  resize();
  function draw() { if (!document.body.contains(canvas)) return; ctx.clearRect(0, 0, canvas.width, canvas.height); for (const p of particles) { p.x += p.speedX; p.y += p.speedY; p.pulse += p.pulseSpeed; if (p.x < -10) p.x = canvas.width + 10; if (p.x > canvas.width + 10) p.x = -10; if (p.y < -10) p.y = canvas.height + 10; if (p.y > canvas.height + 10) p.y = -10; const alpha = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse)); const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3); gradient.addColorStop(0, `rgba(201,168,76,${alpha})`); gradient.addColorStop(0.5, `rgba(201,168,76,${alpha * 0.3})`); gradient.addColorStop(1, "rgba(201,168,76,0)"); ctx.fillStyle = gradient; ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2); ctx.fill(); } requestAnimationFrame(draw); }
  window.addEventListener("resize", resize); draw();
}
function renderHome() {
  pageShell(`<section class="min-h-screen flex flex-col items-center justify-center text-center animate-fade-in relative"><p class="text-mystic-gold text-sm uppercase tracking-[0.4em] mb-6">A mystical tarot reading</p><h1 class="text-5xl md:text-7xl font-serif font-bold text-mystic-gold-light mb-6">Tarot Whisper</h1><p class="text-mystic-text-muted text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">Think of your question.<br>Choose the card that calls you.</p><button id="start-reading" class="btn-primary px-10 py-4 rounded-full text-lg font-semibold shadow-lg shadow-mystic-gold/20 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0">Start Reading</button><div class="mt-16 text-mystic-text-muted text-sm max-w-md mx-auto"><p class="mb-2">No login required - No payment needed</p><p>All readings are for entertainment and self-reflection</p></div></section>`);
  document.getElementById("start-reading").addEventListener("click", renderQuestion);
}
function renderQuestion() {
  pageShell(`<section class="min-h-screen flex flex-col items-center justify-center text-center animate-fade-in"><p class="text-mystic-text-muted text-sm mb-8 uppercase tracking-[0.2em]">Step 1 of 3</p><h2 class="text-3xl md:text-4xl font-serif font-semibold text-mystic-gold-light mb-4">What brings you here?</h2><p class="text-mystic-text-muted mb-8">You can focus on a question, or let the cards speak freely.</p><textarea id="question-input" maxlength="200" rows="4" class="w-full max-w-xl bg-mystic-surface/60 border border-white/10 rounded-2xl px-5 py-4 text-mystic-text placeholder:text-mystic-text-muted/60 outline-none focus:border-mystic-gold/50 resize-none" placeholder='e.g. "What does he think of me?"'></textarea><div class="text-mystic-text-muted text-xs mt-2"><span id="char-count">0</span>/200</div><div class="flex flex-col sm:flex-row gap-4 mt-8"><button id="shuffle" class="btn-primary px-10 py-3 rounded-full text-base font-semibold">Shuffle Cards</button><button id="back-home" class="btn-secondary px-8 py-3 rounded-full text-base">Back</button></div></section>`);
  const input = document.getElementById("question-input"); input.addEventListener("input", () => { document.getElementById("char-count").textContent = input.value.length; });
  document.getElementById("shuffle").addEventListener("click", () => { userQuestion = input.value.trim(); deckCards = shuffleCards(); renderRevealSelection(); });
  document.getElementById("back-home").addEventListener("click", renderHome);
}
function cardBackSvg() {
  return `<svg viewBox="0 0 200 280" class="w-full h-full rounded-xl" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <linearGradient id="cardBackSky" x1="18" y1="20" x2="186" y2="264" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#17245d"/>
        <stop offset="0.48" stop-color="#283182"/>
        <stop offset="1" stop-color="#11163f"/>
      </linearGradient>
      <radialGradient id="cardBackGlow" cx="50%" cy="49%" r="48%">
        <stop offset="0" stop-color="#fff2b8" stop-opacity=".2"/>
        <stop offset=".48" stop-color="#c9a84c" stop-opacity=".08"/>
        <stop offset="1" stop-color="#10133a" stop-opacity="0"/>
      </radialGradient>
      <filter id="softGold" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="1.1" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    <rect width="200" height="280" rx="12" fill="#060817"/>
    <rect x="7" y="7" width="186" height="266" rx="10" fill="url(#cardBackSky)"/>
    <rect x="11" y="11" width="178" height="258" rx="8" fill="none" stroke="#e5c774" stroke-width="2.2" opacity=".9"/>
    <rect x="17" y="17" width="166" height="246" rx="6" fill="none" stroke="#f6e0a3" stroke-width=".75" opacity=".48"/>
    <rect x="24" y="24" width="152" height="232" rx="4" fill="none" stroke="#cda85d" stroke-width=".6" opacity=".3"/>
    <rect x="7" y="7" width="186" height="266" rx="10" fill="url(#cardBackGlow)"/>
    <g stroke="#e6c979" stroke-width=".65" opacity=".58">
      <path d="M100 38 L100 242"/>
      <path d="M38 140 L162 140"/>
      <path d="M55 66 L145 214"/>
      <path d="M145 66 L55 214"/>
      <path d="M72 43 L128 237"/>
      <path d="M128 43 L72 237"/>
      <path d="M38 105 L162 175"/>
      <path d="M162 105 L38 175"/>
    </g>
    <g fill="none" stroke="#e6c979" filter="url(#softGold)">
      <path d="M100 48 C124 82 148 98 167 101 C145 109 124 124 100 153 C76 124 55 109 33 101 C52 98 76 82 100 48Z" stroke-width=".95" opacity=".8"/>
      <path d="M100 232 C76 198 52 182 33 179 C55 171 76 156 100 127 C124 156 145 171 167 179 C148 182 124 198 100 232Z" stroke-width=".95" opacity=".55"/>
      <circle cx="100" cy="140" r="50" stroke-width="1.2" opacity=".75"/>
      <circle cx="100" cy="140" r="38" stroke-width=".6" opacity=".45"/>
      <path d="M93 119 A22 23 0 1 1 93 161 A19 21 0 1 0 93 119" fill="#f3d37b" stroke="none" opacity=".95"/>
      <circle cx="113" cy="140" r="4.2" fill="#f9e8a8" stroke="none"/>
    </g>
    <g fill="#f4df9a">
      <path d="M100 29 l2.8 8.2 8.6.1 -6.9 5.1 2.5 8.3 -7-4.9 -7 4.9 2.5-8.3 -6.9-5.1 8.6-.1z"/>
      <path d="M100 229 l2.4 7 7.4.1 -5.9 4.4 2.1 7.2 -6-4.2 -6 4.2 2.1-7.2 -5.9-4.4 7.4-.1z"/>
      <path d="M38 45 l1.3 4 4.2.1 -3.4 2.5 1.3 4.1 -3.4-2.4 -3.4 2.4 1.3-4.1 -3.4-2.5 4.2-.1z"/>
      <path d="M162 45 l1.3 4 4.2.1 -3.4 2.5 1.3 4.1 -3.4-2.4 -3.4 2.4 1.3-4.1 -3.4-2.5 4.2-.1z"/>
      <path d="M40 224 l1.5 4.6 4.8.1 -3.9 2.9 1.4 4.7 -3.8-2.7 -3.9 2.7 1.4-4.7 -3.8-2.9 4.8-.1z"/>
      <path d="M160 224 l1.5 4.6 4.8.1 -3.9 2.9 1.4 4.7 -3.8-2.7 -3.9 2.7 1.4-4.7 -3.8-2.9 4.8-.1z"/>
      ${Array.from({ length: 34 }, (_, i) => {
        const x = 30 + ((i * 37) % 140);
        const y = 35 + ((i * 53) % 205);
        const r = i % 5 === 0 ? 1.45 : .85;
        return `<circle cx="${x}" cy="${y}" r="${r}" opacity="${i % 3 === 0 ? .75 : .45}"/>`;
      }).join("")}
    </g>
  </svg>`;
}
function renderRevealSelection() {
  const cardHotspots = [
    { left: 30.1, top: 42.6, width: 11.8, height: 25.8, rotation: -15 },
    { left: 44.6, top: 43.6, width: 10.9, height: 23.4, rotation: 0 },
    { left: 58.3, top: 42.6, width: 11.8, height: 25.8, rotation: 15 }
  ];
  pageShell(`<section class="fixed inset-0 flex items-center justify-center overflow-hidden bg-[#050511] animate-fade-in" style="z-index:20"><div class="relative" style="width:min(100vw, calc(100vh * 1.333333));height:min(100vh, calc(100vw * .75));"><video id="reveal-video" src="${REVEAL_VIDEO_SRC}" autoplay muted playsinline preload="auto" style="position:absolute;inset:0;width:100%;height:100%;object-fit:contain;background:#050511"></video><div class="absolute inset-0" style="background:radial-gradient(circle at center, transparent 52%, rgba(5,5,17,.68) 100%);pointer-events:none"></div>${deckCards.map((card, index) => { const spot = cardHotspots[index]; return `<button class="reveal-card-hotspot" data-reveal-index="${index}" aria-label="Choose ${escapeHtml(card.name)}" disabled style="position:absolute;top:${spot.top}%;left:${spot.left}%;width:${spot.width}%;height:${spot.height}%;cursor:pointer;border:0;background:transparent;box-shadow:none;opacity:0;outline:none;padding:0"></button>`; }).join("")}<button id="back-question" class="absolute left-1/2 bottom-4 btn-secondary px-6 py-2.5 rounded-full text-xs uppercase tracking-wider" style="transform:translateX(-50%)">Back</button></div></section>`);
  const video = document.getElementById("reveal-video");
  const stage = video.parentElement;
  let readyToChoose = false;
  let picked = false;
  const animateRevealPick = (index) => {
    if (picked) return;
    picked = true;
    selectedCard = deckCards[index];
    video.pause();
    const prompt = document.getElementById("reveal-prompt");
    const back = document.getElementById("back-question");
    if (prompt) prompt.style.opacity = "0";
    if (back) back.style.opacity = "0";
    document.querySelectorAll("[data-reveal-index]").forEach((button) => {
      button.disabled = true;
      button.style.pointerEvents = "none";
    });
    const overlay = document.createElement("div");
    overlay.style.cssText = "position:absolute;inset:0;pointer-events:none;perspective:1200px;z-index:5";
    stage.appendChild(overlay);
    const cardBackMarkup = `<div style="position:absolute;inset:0;border-radius:9px;backface-visibility:hidden;overflow:hidden"><img src="${REVEAL_CARD_BACK_SRC}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:9px;display:block"></div>`;
    cardHotspots.forEach((spot, spotIndex) => {
      if (spotIndex !== index) {
        const ghost = document.createElement("div");
        ghost.style.cssText = `position:absolute;z-index:2;top:${spot.top}%;left:${spot.left}%;width:${spot.width}%;height:${spot.height}%;transform:rotate(${spot.rotation}deg);transition:opacity .75s ease, transform .75s cubic-bezier(.2,.7,.2,1), filter .75s ease;opacity:1;filter:blur(0);`;
        ghost.innerHTML = cardBackMarkup;
        overlay.appendChild(ghost);
        requestAnimationFrame(() => {
          ghost.style.opacity = "0";
          ghost.style.filter = "blur(6px)";
          ghost.style.transform = `rotate(${spot.rotation}deg) scale(.74) translateY(-8%)`;
        });
        return;
      }
      const flip = document.createElement("div");
      flip.style.cssText = `position:absolute;z-index:6;top:${spot.top}%;left:${spot.left}%;width:${spot.width}%;height:${spot.height}%;transform:rotate(${spot.rotation}deg);transform-style:preserve-3d;transition:transform 1s cubic-bezier(.2,.7,.2,1), top 1s cubic-bezier(.2,.7,.2,1), left 1s cubic-bezier(.2,.7,.2,1), width 1s cubic-bezier(.2,.7,.2,1), height 1s cubic-bezier(.2,.7,.2,1);`;
      flip.innerHTML = `<div style="position:absolute;inset:0;transform-style:preserve-3d;transition:transform 1s cubic-bezier(.2,.7,.2,1)">${cardBackMarkup}<div style="position:absolute;inset:0;border-radius:9px;backface-visibility:hidden;transform:rotateY(180deg);background:#f8f1d8;padding:4px;box-shadow:0 18px 30px rgba(0,0,0,.5),0 0 24px rgba(201,168,76,.24)"><img src="${selectedCard.imagePath}" alt="${escapeHtml(selectedCard.name)}" style="width:100%;height:100%;object-fit:cover;border-radius:6px"></div></div>`;
      overlay.appendChild(flip);
      const inner = flip.firstElementChild;
      requestAnimationFrame(() => {
        flip.style.top = "32%";
        flip.style.left = "43%";
        flip.style.width = "14%";
        flip.style.height = "32%";
        flip.style.transform = "rotate(0deg) scale(1.08)";
        setTimeout(() => { inner.style.transform = "rotateY(180deg)"; }, 620);
      });
    });
    setTimeout(renderResult, 1750);
  };
  const enableSelection = () => {
    if (readyToChoose) return;
    readyToChoose = true;
    video.pause();
    if (Math.abs(video.currentTime - REVEAL_STOP_SECONDS) > 0.25) video.currentTime = REVEAL_STOP_SECONDS;
    document.querySelectorAll("[data-reveal-index]").forEach((button) => {
      button.disabled = false;
      button.addEventListener("click", () => {
        animateRevealPick(Number(button.dataset.revealIndex));
      });
    });
  };
  const stopAtReferenceFrame = () => {
    if (video.currentTime >= REVEAL_STOP_SECONDS) enableSelection();
  };
  const fallbackTimer = setTimeout(enableSelection, (REVEAL_STOP_SECONDS + 0.4) * 1000);
  video.addEventListener("timeupdate", stopAtReferenceFrame);
  video.addEventListener("ended", () => {
    clearTimeout(fallbackTimer);
    enableSelection();
  }, { once: true });
  video.addEventListener("error", () => {
    clearTimeout(fallbackTimer);
    enableSelection();
  }, { once: true });
  const playPromise = video.play();
  if (playPromise) playPromise.catch(() => {});
  document.getElementById("back-question").addEventListener("click", renderQuestion);
}
async function fetchReading(card) {
  return { ok: true, text: card.shortReading };
}
function renderResult() {
  const card = selectedCard;
  pageShell(`<section class="min-h-screen py-12 px-4"><div class="max-w-4xl mx-auto"><div class="text-center mb-12 animate-fade-in"><h2 class="text-3xl md:text-4xl font-serif font-semibold text-mystic-gold-light mb-4">Your Reading</h2>${userQuestion ? `<p class="text-mystic-text-muted text-lg italic">"${escapeHtml(userQuestion)}"</p>` : ""}<div class="w-24 h-px bg-gradient-to-r from-transparent via-mystic-gold to-transparent mx-auto mt-6 opacity-50"></div></div><article class="bg-mystic-surface/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 md:p-8"><div class="flex flex-col sm:flex-row items-center gap-6 mb-6"><div class="w-32 h-44 flex-shrink-0"><img src="${card.imagePath}" alt="${escapeHtml(card.name)}" class="w-full h-full object-contain rounded-xl shadow-lg shadow-mystic-gold/10"></div><div class="text-center sm:text-left flex-1"><p class="text-mystic-text-muted text-xs uppercase tracking-[0.2em] mb-2">One card reading - ${suitNames[card.suit] || ""}</p><h3 class="text-2xl font-serif font-semibold text-mystic-gold mb-2">${escapeHtml(card.name)}</h3></div></div><div class="mb-6"><p class="text-mystic-purple-light text-xs uppercase tracking-wider mb-2">Keywords</p><div class="flex flex-wrap gap-2">${card.keywords.split(", ").map((word) => `<span class="px-3 py-1 bg-mystic-purple/10 border border-mystic-purple/20 rounded-full text-sm text-mystic-purple-light">${escapeHtml(word)}</span>`).join("")}</div></div><div><p class="text-mystic-purple-light text-xs uppercase tracking-wider mb-3">Your Personal Reading</p><div id="reading-output" class="text-mystic-text leading-relaxed text-base md:text-lg space-y-4"><p class="text-mystic-gold font-serif text-lg">Channeling your reading...</p><p class="text-mystic-text-muted text-xs mt-2">The cards are speaking</p></div></div></article><p class="text-center text-mystic-text-muted text-xs italic my-12">This reading is for entertainment and self-reflection only.</p><div class="flex flex-col sm:flex-row items-center justify-center gap-4"><button id="try-again" class="btn-primary px-10 py-3 rounded-full text-base font-semibold">Try Again</button><button id="share-result" class="btn-secondary px-10 py-3 rounded-full text-base">Save JPG</button></div></div></section>`);
  document.getElementById("try-again").addEventListener("click", () => { userQuestion = ""; deckCards = []; selectedCard = null; renderHome(); });
  document.getElementById("share-result").addEventListener("click", shareResult);
  currentReadingText = card.shortReading;
  fetchReading(card).then((result) => { currentReadingText = result.text; const output = document.getElementById("reading-output"); output.innerHTML = result.text.split(/\n\s*\n/).filter(Boolean).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join(""); });
}
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}
function roundRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}
function wrapText(ctx, text, maxWidth) {
  const lines = [];
  for (const paragraph of String(text || "").split(/\n\s*\n/)) {
    const words = paragraph.trim().split(/\s+/).filter(Boolean);
    let line = "";
    for (const word of words) {
      const test = line ? `${line} ${word}` : word;
      if (ctx.measureText(test).width > maxWidth && line) {
        lines.push(line);
        line = word;
      } else {
        line = test;
      }
    }
    if (line) lines.push(line);
    lines.push("");
  }
  while (lines[lines.length - 1] === "") lines.pop();
  return lines;
}
function canvasToBlob(canvas, type, quality) {
  return new Promise((resolve) => canvas.toBlob(resolve, type, quality));
}
function downloadBlob(blob, fileName) {
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.download = fileName;
  link.href = url;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
async function shareResult() {
  const card = selectedCard;
  if (!card) return;
  const button = document.getElementById("share-result");
  const originalLabel = button.textContent;
  button.textContent = "Saving...";
  button.disabled = true;
  try {
    const cardImage = await loadImage(card.imagePath);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const width = 840;
    const margin = 42;
    const bodyWidth = width - margin * 2;
    const reading = currentReadingText || card.shortReading;

    ctx.font = "600 20px Inter, Arial, sans-serif";
    const readingLines = wrapText(ctx, reading, bodyWidth);
    const lineHeight = 28;
    const paragraphGap = 16;
    const keywords = card.keywords.split(", ");
    ctx.font = "500 14px Inter, Arial, sans-serif";
    const keywordRows = [];
    let currentRow = [];
    let currentRowWidth = 0;
    for (const keyword of keywords) {
      const pillWidth = Math.ceil(ctx.measureText(keyword).width + 28);
      const gap = currentRow.length ? 10 : 0;
      if (currentRowWidth + gap + pillWidth > bodyWidth && currentRow.length) {
        keywordRows.push(currentRow);
        currentRow = [];
        currentRowWidth = 0;
      }
      currentRow.push({ keyword, width: pillWidth });
      currentRowWidth += gap + pillWidth;
    }
    if (currentRow.length) keywordRows.push(currentRow);

    const keywordStartY = 262;
    const keywordRowsHeight = keywordRows.length * 34;
    const readingLabelY = keywordStartY + 24 + keywordRowsHeight + 34;
    const readingStartY = readingLabelY + 36;
    const textHeight = readingLines.reduce((height, line) => height + (line ? lineHeight : paragraphGap), 0);
    const height = Math.ceil(Math.max(900, readingStartY + textHeight + 72));
    canvas.width = width * 2;
    canvas.height = height * 2;
    ctx.scale(2, 2);

    const bg = ctx.createLinearGradient(0, 0, width, height);
    bg.addColorStop(0, "#070817");
    bg.addColorStop(0.52, "#101126");
    bg.addColorStop(1, "#0a0920");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);

    ctx.save();
    ctx.globalAlpha = 0.45;
    for (let i = 0; i < 90; i++) {
      const x = (i * 73) % width;
      const y = (i * 127) % height;
      const r = i % 13 === 0 ? 1.6 : 0.8;
      ctx.fillStyle = i % 5 === 0 ? "#c9a84c" : "#ffffff";
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    roundRect(ctx, 8, 16, width - 16, height - 32, 14);
    ctx.fillStyle = "rgba(13, 14, 36, 0.86)";
    ctx.fill();
    ctx.strokeStyle = "rgba(157, 126, 255, 0.18)";
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.save();
    ctx.shadowColor = "rgba(0,0,0,.45)";
    ctx.shadowBlur = 16;
    ctx.shadowOffsetY = 8;
    roundRect(ctx, 54, 50, 102, 176, 4);
    ctx.fillStyle = "#f8f4df";
    ctx.fill();
    ctx.drawImage(cardImage, 60, 56, 90, 164);
    ctx.restore();

    ctx.fillStyle = "#9e99b8";
    ctx.font = "500 13px Inter, Arial, sans-serif";
    ctx.letterSpacing = "4px";
    ctx.fillText(`ONE CARD READING - ${(suitNames[card.suit] || "").toUpperCase()}`, 194, 118);
    ctx.letterSpacing = "0px";
    ctx.fillStyle = "#d7b95f";
    ctx.font = "600 25px 'Cormorant Garamond', Georgia, serif";
    ctx.fillText(card.name, 194, 153);

    let y = keywordStartY;
    ctx.fillStyle = "#b9a1ff";
    ctx.font = "500 13px Inter, Arial, sans-serif";
    ctx.fillText("KEYWORDS", margin, y);
    y += 24;
    ctx.font = "500 14px Inter, Arial, sans-serif";
    for (const row of keywordRows) {
      let x = margin;
      for (const item of row) {
        roundRect(ctx, x, y - 16, item.width, 30, 15);
        ctx.fillStyle = "rgba(94, 54, 185, 0.35)";
        ctx.fill();
        ctx.strokeStyle = "rgba(168, 128, 255, 0.35)";
        ctx.stroke();
        ctx.fillStyle = "#c4a8ff";
        ctx.fillText(item.keyword, x + 14, y + 4);
        x += item.width + 10;
      }
      y += 34;
    }

    y += 34;
    ctx.fillStyle = "#b9a1ff";
    ctx.font = "500 13px Inter, Arial, sans-serif";
    ctx.fillText("YOUR PERSONAL READING", margin, y);
    y += 36;
    ctx.fillStyle = "#e2dfec";
    ctx.font = "600 20px Inter, Arial, sans-serif";
    for (const line of readingLines) {
      if (!line) {
        y += paragraphGap;
        continue;
      }
      ctx.fillText(line, margin, y);
      y += lineHeight;
    }

    const fileName = `tarot-whisper-${card.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}.jpg`;
    const blob = await canvasToBlob(canvas, "image/jpeg", 0.94);
    if (!blob) throw new Error("Failed to create JPG image");
    const file = new File([blob], fileName, { type: "image/jpeg" });
    if (navigator.canShare && navigator.canShare({ files: [file] }) && navigator.share) {
      try {
        await navigator.share({
          files: [file],
          title: "Tarot Whisper Reading",
          text: "Save your tarot reading image",
        });
      } catch (error) {
        if (error.name !== "AbortError") downloadBlob(blob, fileName);
      }
    } else {
      downloadBlob(blob, fileName);
    }
  } finally {
    button.textContent = originalLabel;
    button.disabled = false;
  }
}
renderHome();
